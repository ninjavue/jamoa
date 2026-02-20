import { WsClient } from "mywasm";
import sodium from "libsodium-wrappers-sumo";
import {
  u8Concat,
  pack,
  unpack,
  randBytes,
  toB64,
  fromB64,
  eqBytes,
  sha256,
  hkdf,
  addPadding,
  stripPadding,
  computeMsgKey,
  deriveChaChaKeyNonce,
} from "./encryptionUtils";
import { buildRequestFrame, parseFrame, METHOD } from "./zirhrpc";

// const WS_URL = "ws://10.10.115.40:8080/wsock";
// const SERVER_ED25519_PUB_BASE64 =
//   "1AvsejuQBaZ2BcUbFe5teroRObkQgit3nk6grry7HMk=";
// const LABEL = "zirhwebproto";
// const MAX_RETRY_DELAY = 30000;

const OP = {
  REQ_PQ: 0x01,
  RES_PQ: 0x02,
  REQ_ECDH: 0x03,
  RES_ECDH_OK: 0x04,
  SET_CLIENT_IN: 0x05,
  DH_RESULT: 0x06,
  APP_MSG_C2S: 0x07,
  APP_MSG_S2C: 0x08,
  ERR_DECRYPTION_FAILED: 0xf0,

  ERR_UNAUTH: 0xee, // avtorizatsiyasiz
  ERR_DEVICE: 0xef, // boshqa device

  ERR_BAD_FRAME: 0xf1, // unpack len/op mos emas, frame qisqa, len katta, etc
  ERR_UNSUPPORTED_OPCODE: 0xf2, // noma’lum op keldi
  ERR_INVALID_LENGTH: 0xf3, // payload length expected emas

  // Handshake state / flow
  ERR_HANDSHAKE_STATE: 0xf4, // nonce/X_c/X_s/x_s/new_nonce yo‘q, ketma-ketlik buzildi
  ERR_HANDSHAKE_VERIFY: 0xf5, // signature/curve_id/verify failure (kelajakda verify qo‘shsangiz)

  // Crypto / auth
  ERR_AUTH_UNKNOWN: 0xf6, // auth_id topilmadi (unknown session)
  ERR_MSGKEY_MISMATCH: 0xf7, // msg_key tekshiruvi (agar computeMsgKey bilan tekshirsangiz)
  ERR_BAD_TAG: 0xf8, // AEAD tag xato (chacha20-poly1305 auth fail)

  // App-level frame / rpc
  ERR_PADDING: 0xf9, // stripPadding fail / padding invalid
  ERR_BAD_APP_FRAME: 0xfa, // parseFrame header/payloadLen mos emas
  ERR_RPC_PARSE: 0xfb, // RPC parse bo‘lmadi
  ERR_RPC_HANDLER: 0xfc, // handleRpc ichida exception

  // Rate / limits
  ERR_TOO_LARGE: 0xfd, // maxPayloadLength yoki protocol limitdan katta
  ERR_RATE_LIMIT: 0xfe, // tez-tez yuborish
  ERR_INTERNAL: 0xff, // kutilmagan server error
};

let ws = null;
let retryCount = 0;

// console.log("test")
const emitGlobalEvent = (eventName, data) => {
  window.dispatchEvent(new CustomEvent(`zirh:${eventName}`, { detail: data }));
};

// --- ASOSIY WEBSOCKET FUNKSIYALARI ---
const LOGOUT_OPS = [
  0xf0, 0xee, 0xef, 0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa,
  0xfb, 0xfc,
];

export const initWebSocket = async (stRef, cfg) => {
  const { WS_URL, LABEL, MAX_RETRY_DELAY = 15000, emitGlobalEvent = () => { } } = cfg;

  if (!stRef.current.rpcPending) {
    stRef.current = {
      phase: 0,
      rpcId: 0,
      rpcPending: new Map(),
      rpcStreams: new Map(),
      clientId: null,
      ...stRef.current,
    };
  }

  const state = stRef.current;

  if (!state.wc) {
    state.wc = new WsClient(WS_URL, LABEL, MAX_RETRY_DELAY);

    if (state.clientId) state.wc.set_client_id(state.clientId);

    state.wc.set_callbacks(
        () => {
    state.phase = 0;
    state.sentOnline = false;      // ✅ har yangi socketda ONLINE qayta yuboriladi
    // xohlasangiz:
    // console.log("🔌 WS opened (new connection)");
  },
     async (info) => {
        state.phase = 3;
        emitGlobalEvent("ready", info);
          if (!state.sentOnline) {
      state.sentOnline = true;
      try {
        await sendRpcRequest(stRef, METHOD.ONLINE, {});
      } catch (e) {
        console.error("❌ ONLINE send failed:", e);
        // agar xohlasangiz qayta urinish uchun:
        // state.sentOnline = false;
      }
    }
      },
      (evt) => {
        if (evt.kind === "request") emitGlobalEvent("push", evt);
        else handleIncomingRpc(evt, stRef);
      },
      (err) => console.error("WASM WS err:", err),
      (op) => {
        handleSecurityLogout()
        console.log("op", op)
      }
    );
  }

  state.wc.connect();
};



// export const initWebSocket = async (stRef) => {
//   if (!stRef.current.rpcPending) {
//     stRef.current = {
//       phase: 0,
//       auth_key: null,
//       auth_id: null,
//       rpcId: 0,
//       rpcPending: new Map(), // Avtomatik yaratish
//       rpcStreams: new Map(), // Avtomatik yaratish
//       retryCount: 0,
//       aborted: false,
//       ...stRef.current, // Agar ichida clientId kabi narsalar bo'lsa, saqlab qoladi
//     };
//   }
//   const state = stRef.current; // Refdan joriy holatni olamiz
//   await sodium.ready;

//   if (ws && ws.readyState <= 1) return;

//   ws = new WebSocket(WS_URL); // boshqa kutubxonaga o'tkazish kerak
//   ws.binaryType = "arraybuffer";

//   const SERVER_ED_PUB = fromB64(SERVER_ED25519_PUB_BASE64);
//   const fpPinned = (await sha256(SERVER_ED_PUB)).slice(-8);

//   ws.onopen = async () => {
//     retryCount = 0;
//     const authKeyB64 = localStorage.getItem("AUTH_KEY_B64");
//     if (authKeyB64) {
//       const key = fromB64(authKeyB64);
//       state.auth_key = key;
//       state.auth_id = (await sha256(state.auth_key)).slice(-8);
//       state.phase = 3;
//       emitGlobalEvent("ready", { fast: true });
//       return;
//     }
//     state.nonce = randBytes(16);
//     ws.send(pack(OP.REQ_PQ, state.nonce));
//   };

//   ws.onmessage = async (ev) => {
//     const { op, payload } = unpack(ev.data);
//     if (LOGOUT_OPS.includes(op)) {
//       handleSecurityLogout();
//       return;
//     }
//     if (op === OP.RES_PQ) {
//       state.server_nonce = payload.slice(0, 16);
//       if (!eqBytes(payload.slice(16, 24), fpPinned)) return ws.close();
//       state.kp = sodium.crypto_box_keypair();
//       state.new_nonce = randBytes(32);
//       ws.send(
//         pack(
//           OP.REQ_ECDH,
//           u8Concat(state.kp.publicKey, state.new_nonce, Uint8Array.of(1)),
//         ),
//       );
//       state.phase = 1;
//     } else if (op === OP.RES_ECDH_OK) {
//       const X_s = payload.slice(0, 32);
//       const sig = payload.slice(32, 96);
//       const H = await sha256(
//         u8Concat(
//           new TextEncoder().encode(LABEL),
//           Uint8Array.of(1),
//           X_s,
//           state.kp.publicKey,
//           state.nonce,
//           state.server_nonce,
//         ),
//       );
//       if (!sodium.crypto_sign_verify_detached(sig, H, SERVER_ED_PUB))
//         return ws.close();
//       const Z = sodium.crypto_scalarmult(state.kp.privateKey, X_s);
//       const salt = await sha256(u8Concat(state.nonce, state.server_nonce));
//       const info = u8Concat(
//         new TextEncoder().encode(LABEL),
//         Uint8Array.of(1),
//         state.kp.publicKey,
//         X_s,
//         state.nonce,
//         state.server_nonce,
//       );
//       state.keyApp = await hkdf(
//         Z,
//         salt,
//         u8Concat(info, new TextEncoder().encode("/app")),
//         32,
//       );
//       const keyEnc = await hkdf(
//         Z,
//         salt,
//         u8Concat(info, new TextEncoder().encode("/enc")),
//         32,
//       );
//       const ivBase = await hkdf(
//         Z,
//         salt,
//         u8Concat(info, new TextEncoder().encode("/iv")),
//         12,
//       );
//       const inner = new TextEncoder().encode(
//         JSON.stringify({ client_time: Math.floor(Date.now() / 1000) }),
//       );
//       const ct = sodium.crypto_aead_chacha20poly1305_ietf_encrypt(
//         inner,
//         u8Concat(state.nonce, state.server_nonce, state.kp.publicKey, X_s),
//         null,
//         ivBase,
//         keyEnc,
//       );
//       ws.send(pack(OP.SET_CLIENT_IN, ct));
//       state.phase = 2;
//     } else if (op === OP.DH_RESULT && payload[0] === 1) {
//       state.auth_key = state.keyApp;
//       state.auth_id = (await sha256(state.auth_key)).slice(-8);
//       state.phase = 3;
//       localStorage.setItem("AUTH_KEY_B64", toB64(state.auth_key));
//       emitGlobalEvent("ready", { fast: false });
//     }

//     if (op === OP.APP_MSG_S2C && state.phase === 3) {
//       try {
//         const header = payload.slice(0, 24);
//         const { key, nonce } = deriveChaChaKeyNonce(
//           state.auth_key,
//           header.slice(8, 24),
//         );
//         const frame = sodium.crypto_aead_chacha20poly1305_ietf_decrypt(
//           null,
//           payload.slice(24),
//           header,
//           nonce,
//           key,
//         );
//         const parsed = parseFrame(stripPadding(frame));

//         if (parsed.kind === "response" || parsed.kind === "error") {
//           handleIncomingRpc(parsed, stRef); // Refni uzatamiz
//         } else if (parsed.kind === "request") {
//           console.log(parsed);
//           emitGlobalEvent(`push`, parsed);
//         }
//       } catch (e) {
//         console.error("Decrypt fail", e);
//       }
//     }
//   };

//   ws.onclose = () => {
//     // MUHIM: Funksiyani chaqirib emas, reference sifatida berish kerak
//     setTimeout(
//       () => initWebSocket(stRef),
//       Math.min(1000 * 2 ** retryCount++, MAX_RETRY_DELAY),
//     );
//   };
//   ws.onerror = (err) => {
//     try {
//       // MUHIM: Server o'chiq bo'lsa aynan shu handler birinchi ishlaydi
//       console.error("❌ WebSocket xatosi (Server o'chiq bo'lishi mumkin)");
//       ws.close(); // onclose'ni chaqirish uchun majburan yopamiz
//     } catch (error) {}
//   };
// };



function handleSecurityLogout() {
  localStorage.clear(); // Hamma narsani tozalash xavfsizroq
  window.location.replace("/login"); // Orqaga qaytish imkonisiz yo'naltirish
}
function handleIncomingRpc(parsed, stRef) {
  const state = stRef.current;

  const stream = state.rpcStreams.get(parsed.id);

  if (stream) {
    const res = parsed.result || {};

    if (res.data) {
      const u8 =
        res.data instanceof Uint8Array ? res.data : new Uint8Array(res.data);
      stream.parts.push(u8);
      stream.totalRead += u8.length;
      if (stream.onPart) stream.onPart(res, u8, stream.totalRead);
    }
    if (res.done || res.finished) {
      clearTimeout(stream.timer);
      state.rpcStreams.delete(parsed.id);
      stream.resolve({
        ok: true,
        parts: stream.parts,
        totalRead: stream.totalRead,
      });
    }
    return;
  }
  const pend = state.rpcPending.get(parsed.id);
  if (pend) {
    state.rpcPending.delete(parsed.id);
    pend.resolve({ ok: true, status: parsed.statusCode, ...parsed.result });

    // pend.resolve({ status: parsed.statusCode, result: parsed.result });
  }
}

// --- TASHQI SO'ROVLAR UCHUN INTERFEYS ---

export const sendRpcRequest = (stRef, methodId, params = {}) => {
  const state = stRef.current;

  return new Promise((resolve, reject) => {
    if (!state.wc || state.phase !== 3) return reject("Offline");

    state.rpcId = (state.rpcId + 1) & 0xffff;
    const rpcId = state.rpcId;

    state.rpcPending.set(rpcId, { resolve, reject });

    // ✅ JS’da frame build qilamiz (msgpack mapping shu yerda)
    const buf = buildRequestFrame(rpcId, methodId, params, state.clientId); // ArrayBuffer
    const u8 = new Uint8Array(buf);

    try {
      // ✅ WASM: faqat bytes yuboradi (encrypt + ws.send WASM ichida)
      state.wc.send_rpc_frame_bytes(rpcId, methodId, u8);
    } catch (e) {
      state.rpcPending.delete(rpcId);
      reject(e);
    }
  });
};

const sendAppMessage = (bytes, state) => {
  const frame = addPadding(bytes);
  const msgKey = computeMsgKey(frame);
  const { key, nonce } = deriveChaChaKeyNonce(state.auth_key, msgKey);
  const header = u8Concat(state.auth_id, msgKey);
  const ct = sodium.crypto_aead_chacha20poly1305_ietf_encrypt(
    frame,
    header,
    null,
    nonce,
    key,
  );
  ws.send(pack(OP.APP_MSG_C2S, u8Concat(header, ct)));
};

// --- FAYLLAR BILAN ISHLASH ---

export const uploadFileViaRpc = async (stRef, file, convId, onProgress) => {
  if (!file) return;
  const allowedExtensions = ["jpg", "jpeg", "png", "pdf", "docx", "zip"];
  const fileExtension = file.name.split(".").pop().toLowerCase();

  // 2. Tekshirish
  if (!allowedExtensions.includes(fileExtension)) {
    throw new Error(
      `Xatolik: .${fileExtension} formatidagi fayllarni yuklash mumkin emas!`,
    );
  }
  //   const ALLOWED_TYPES = {
  //   'image/jpeg': ['jpg', 'jpeg'],
  //   'image/png': ['png'],
  //   'application/pdf': ['pdf']
  // };

  // const validateFile = (file) => {
  //   const extension = file.name.split('.').pop().toLowerCase();
  //   const mimeType = file.type;

  //   // Ham MIME-turi, ham kengaytmasi bizning ro'yxatda borligini tekshiramiz
  //   const isValidMime = Object.keys(ALLOWED_TYPES).includes(mimeType);
  //   const isValidExt = Object.values(ALLOWED_TYPES).flat().includes(extension);

  //   return isValidMime && isValidExt;
  // };

  // Funksiya ichida ishlatish:
  // if (!validateFile(file)) {
  //   alert("Fayl formati noto'g'ri!");
  //   return;
  // }
  const initRes = await sendRpcRequest(stRef, METHOD.FILE_INIT, {
    name: file.name,
    size: file.size,
    mime: file.type || "application/octet-stream",
    convId,
  });
  if (initRes.status != METHOD.OK) throw new Error("FILE_INIT failed");

  const { uploadId, chunkSize = 128 * 1024 } = initRes.result;
  let offset = 0;
  let index = 0;

  while (offset < file.size) {
    const end = Math.min(offset + chunkSize, file.size);
    const buf = new Uint8Array(await file.slice(offset, end).arrayBuffer());
    console.log({ uploadId, index, offset, data: buf, last: end >= file.size });
    const chunkRes = await sendRpcRequest(stRef, METHOD.FILE_CHUNK, {
      uploadId,
      index,
      offset,
      data: buf,
      last: end >= file.size,
    });
    console.log(chunkRes);
    if (chunkRes.status != METHOD.OK) throw new Error("FILE_CHUNK failed");
    offset = end;
    index++;
    if (onProgress) onProgress(Math.round((offset / file.size) * 100));
  }
  return await sendRpcRequest(stRef, METHOD.FILE_DONE, {
    uploadId,
    caption: "",
  });
};

const blobToBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

export const downloadFileViaRpc = async (
  stRef,
  fileId,
  fileName,
  onProgress,
) => {
  const state = stRef.current;
  const info = await sendRpcRequest(stRef, METHOD.FILE_INFO, { fileId });
  console.log(info);
  if (info.status != METHOD.OK) throw new Error("FILE_INFO failed");

  const { size, name, mime, chunkSize = 128 * 1024 } = info.result;
  let offset = 0,
    allParts = [];

  while (offset < size) {
    const len = Math.min(chunkSize, size - offset);
    const streamRes = await new Promise((resolve, reject) => {
      state.rpcId = (state.rpcId + 1) & 0xffff;
      const rpcId = state.rpcId;
      state.rpcStreams.set(rpcId, {
        resolve,
        reject,
        parts: [],
        totalRead: 0,
        timer: setTimeout(() => reject("Timeout"), 60000),
        onPart: (_, u8, total) => {
          if (onProgress)
            onProgress(Math.round(((offset + total) / size) * 100));
        },
      });
      sendAppMessage(
        new Uint8Array(
          buildRequestFrame(
            rpcId,
            METHOD.FILE_GET_CHUNK,
            { fileId, offset, length: len },
            state.clientId,
          ),
        ),
        state,
      );
    });
    allParts.push(...streamRes.parts);
    offset += streamRes.totalRead;
  }

  const blob = new Blob(allParts, { type: mime || "application/octet-stream" });
  const base64 = await blobToBase64(blob);
  localStorage.setItem(fileId, base64);
  // const a = document.createElement("a");
  // a.href = URL.createObjectURL(blob);
  // a.download = fileName || "file.p";
  // a.click();
};

export const downloadFileViaRpcNew = async (
  stRef,
  fileId,
  fileName,
  onProgress,
) => {
  const state = stRef.current;
  const info = await sendRpcRequest(stRef, METHOD.FILE_INFO, { fileId });
  if (info.status != METHOD.OK) throw new Error("FILE_INFO failed");

  const { size, name, mime, chunkSize = 128 * 1024 } = info.result;
  let offset = 0,
    allParts = [];

  while (offset < size) {
    const len = Math.min(chunkSize, size - offset);
    const streamRes = await new Promise((resolve, reject) => {
      state.rpcId = (state.rpcId + 1) & 0xffff;
      const rpcId = state.rpcId;
      state.rpcStreams.set(rpcId, {
        resolve,
        reject,
        parts: [],
        totalRead: 0,
        timer: setTimeout(() => reject("Timeout"), 60000),
        onPart: (_, u8, total) => {
          if (onProgress)
            onProgress(Math.round(((offset + total) / size) * 100));
        },
      });
      sendAppMessage(
        new Uint8Array(
          buildRequestFrame(
            rpcId,
            METHOD.FILE_GET_CHUNK,
            { fileId, offset, length: len },
            state.clientId,
          ),
        ),
        state,
      );
    });
    allParts.push(...streamRes.parts);
    offset += streamRes.totalRead;
  }

  const mimeType = getMimeFromName(fileName);

  const blob = new Blob(allParts, {
    type: mimeType || "application/octet-stream",
  });
  // const base64 = await blobToBase64(blob);
  // localStorage.setItem(fileId, base64);
  // const a = document.createElement("a");
  // a.href = URL.createObjectURL(blob);
  // a.download = fileName || "file.p";
  // a.click();

  return blob;
};

const getMimeFromName = (name = "") => {
  const ext = name.split(".").pop()?.toLowerCase();

  return (
    {
      pdf: "application/pdf",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      webp: "image/webp",
      mp4: "video/mp4",
      txt: "text/plain",
    }[ext] || "application/octet-stream"
  );
};
