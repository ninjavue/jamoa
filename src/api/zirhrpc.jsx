// zirhrpc.js
// ZirhRPC – minimal binary RPC protokoli (faqat protokol + method map)
// Payload: MessagePack
// Header format:
// [0]  ver        (u8)
// [1]  type       (u8)   0=request, 1=response, 2=error
// [2-3] id        (u16)  0–65535
// [4]  meta       (u8)   request: methodId, response: statusCode, error: errorCode
// [5-6] payloadLen(u16)  msgpack payload uzunligi
// [7..] payload   msgpack bytes

import {
  encode as msgpackEncode,
  decode as msgpackDecode
} from "@msgpack/msgpack";

// --------------------
// RPC TYPE CONSTANTS
// --------------------

export const RPC_TYPE = {
  REQUEST: 0,
  RESPONSE: 1,
  ERROR: 2,
};

// --------------------
// PROTOCOL VERSION
// --------------------

export const PROTOCOL_VERSION = 1;

// --------------------
// METHOD MAP
// --------------------
// Ikkala tomonda ham bir xil bo‘lishi shart!

// RPC TYPE

// Client bilan bo'lishgan METHOD map (har ikkalasi bir xil bo'lishi shart)
export const METHOD = {
  ONLINE: 1,

  LOGIN_GET_OTP: 10,
  LOGIN_VERIFY_OTP: 11,
  LOGIN_LOG_OUT: 12,
  LOGIN_CHECK: 39,

  USER_PASS_CHECK_CHANGE: 13,
  USER_CREATE: 14,
  USER_UPDATE: 15,
  USER_GET_FULL: 16,
  USER_GET: 17,
  USER_GET_COUNT: 18,
  USER_PASS_RESET: 19,
  USER_PASS_RESET_OTP: 20,
  USER_PASS_CHANGE: 21,

  ORDER_CREATE: 22,
  ORDER_UPDATE: 23,
  ORDER_DELETE: 24,
  ORDER_GET_COUNT: 25,
  ORDER_GET_PAGE: 46,
  ORDER_GET_ID:65,

  VULN_GET:66,

  FURNITURE_CREATE: 26,
  FURNITURE_UPDATE: 27,
  FURNITURE_GET_PAGE: 48,

  ASSIGNMENT_CREATE: 28,
  ASSIGNMENT_UPDATE: 29,
  ASSIGNMENT_GET_PAGE: 47,


  CHAT_SEND_MSG_CLIENT: 30,
  CHAT_SEND_MSG_SERVER: 31,
  CHAT_GET_MSG: 32,
  CHAT_GET_CONVERSATION: 33,
  CHAT_VIEW_UPDATE: 34,
  CHAT_PRIVATE_MSG_CREATE: 35,
  CHAT_ADD_USER: 49,

  CONVERSATION_CREATE: 36,
  CONVERSATION_UPDATE: 37,

  CONVERSATION_MEMBER_CREATE: 38,

  FILE_INIT: 40,
  FILE_CHUNK: 41,
  FILE_DONE: 42,
  FILE_INFO: 43,
  FILE_GET_CHUNK: 44,

  BAD_REQUEST: 50,
  BAD_REQUEST: 51,
  Unauthorized: 52,
  Forbidden: 53,
  Not_Found: 54,
  Internal_Server_Error: 55,
  OK: 56,
  Created: 57,
  No_Content: 58,
  CAPTCHA_GET:59,
  CAPTCHA_ERR:60,
  OTP_ERR:61,
  PASSWORD_ERR:62,
  OTP_TIME_OUT_UUI_ERR:63,
  OTP_REQ_LIM:64,
  
  VULN_CREATE: 67,
  VULN_UPDATE: 68,

  CHAT_CREATE_CONV:69,
  CHAT_UPDATE_CONV:70,
  USER_GET_PHOTO:71,
  USER_GET_ID:72,
  CHAT_MSG_CONV:73,
  CHAT_MSG_VIEW:74,
  CHAT_ONLINE_CHECK:75,
  CHAT_USER_STATUS:76,
  CHAT_UPDATE:77,
  CHAT_MSG_CONV_FULL: 78,
  CHAT_GET_MSG_PUSH: 79,
  CHAT_DELETE_USER: 80,
  USER_CREATE_ORG: 81,
  ORDER_PUSH: 82,
};


// Reverse map — debug va log uchun qulay
export const METHOD_NAME = Object.fromEntries(
  Object.entries(METHOD).map(([name, id]) => [id, name])
);

// --------------------
// CLIENT ID NORMALIZER
// --------------------
// clientId sifatida 8 byte Uint8Array yoki 16 xonali hex string qabul qilamiz

function normalizeClientId(clientId) {
  if (!clientId) {
    return new Uint8Array(8); // default: 00 00 00 00 00 00 00 00
  }

  if (clientId instanceof Uint8Array) {
    if (clientId.length !== 8) {
      throw new Error("clientId Uint8Array bo'lishi va 8 bayt bo'lishi kerak");
    }
    return clientId;
  }

  if (typeof clientId === "string") {
    const clean = clientId.replace(/[^0-9a-f]/gi, "");
    if (clean.length !== 16) {
      throw new Error("clientId hex string bo'lsa, 16 ta hex belgidan iborat bo'lishi kerak (8 bayt)");
    }
    const bytes = new Uint8Array(8);
    for (let i = 0; i < 8; i++) {
      bytes[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
    }
    return bytes;
  }

  throw new Error("Unsupported clientId type");
}

// --------------------
// FRAME ENCODER
// --------------------
// YANGI FORMAT:
// [0-7]   clientId (8 byte)
// [8]     ver        (u8)
// [9]     type       (u8)
// [10-11] id         (u16)
// [12]    meta       (u8)
// [13-14] payloadLen (u16)
// [15..]  payload    msgpack

export function encodeFrame({ type, id, meta, payload, clientId }) {
  const payloadBytes = msgpackEncode(payload); // Uint8Array
  const payloadLen = payloadBytes.length;

  const clientIdBytes = normalizeClientId(clientId);

  const HEADER_LEN = 17; // 8(clientId) + 7(eski header)
  const buffer = new ArrayBuffer(HEADER_LEN + payloadLen);
  const view = new DataView(buffer);

  let o = 0;

  // 8 bayt clientId
  new Uint8Array(buffer, o, 8).set(clientIdBytes);
  o += 8;

  // qolgan eski header
  view.setUint8(o++, PROTOCOL_VERSION);  // ver
  view.setUint8(o++, type);              // type
  view.setUint16(o, id); o += 2;         // id (u16)
  view.setUint8(o++, meta);              // meta (methodId / status / errorCode)
  view.setUint32(o, payloadLen); o += 4; // payload length (u16)

  // payload
  new Uint8Array(buffer, o).set(payloadBytes);

  return buffer;
}

// --------------------
// BUILD REQUEST
// --------------------

export function buildRequestFrame(id, methodId, params, clientId) {
  return encodeFrame({
    type: RPC_TYPE.REQUEST,
    id,
    meta: methodId,
    payload: params,
    clientId,
  });
}

// --------------------
// BUILD RESPONSE
// --------------------

export function buildResponseFrame(id, result, statusCode = 0, clientId) {
  return encodeFrame({
    type: RPC_TYPE.RESPONSE,
    id,
    meta: statusCode,
    payload: result,
    clientId,
  });
}

// --------------------
// BUILD ERROR
// --------------------

export function buildErrorFrame(id, errorPayload, errorCode = 1, clientId) {
  return encodeFrame({
    type: RPC_TYPE.ERROR,
    id,
    meta: errorCode,
    payload: errorPayload,
    clientId,
  });
}

// --------------------
// FRAME PARSER
// --------------------

export function parseFrame(bufferLike) {
  let arrayBuffer;

  // Browser ArrayBuffer
  if (bufferLike instanceof ArrayBuffer) {
    arrayBuffer = bufferLike;
  }
  // Node.js Buffer, Uint8Array va boshqalar
  else if (ArrayBuffer.isView(bufferLike)) {
    arrayBuffer = bufferLike.buffer.slice(
      bufferLike.byteOffset,
      bufferLike.byteOffset + bufferLike.byteLength
    );
  } else {
    throw new Error("Unsupported buffer type");
  }

  const view = new DataView(arrayBuffer);

  let o = 0;

  // 8 bayt clientId o'qib olamiz
  const clientIdBytes = new Uint8Array(arrayBuffer, o, 8);
  o += 8;

  // Hex ko'rinishiga ham o'girib qo'yamiz (log uchun qulay)
  const clientId = Array.from(clientIdBytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const ver = view.getUint8(o++);
  const type = view.getUint8(o++);
  const id = view.getUint16(o); o += 2;
  const meta = view.getUint8(o++);
  const payloadLen = view.getUint32(o); o += 4;

  if (arrayBuffer.byteLength < o + payloadLen) {
    throw new Error("Frame payload truncated (client)");
  }
  const payloadBytes = new Uint8Array(arrayBuffer, o, payloadLen);
  const decoded = msgpackDecode(payloadBytes);

  // Klassifikatsiya
  if (type === RPC_TYPE.REQUEST) {
    return {
      kind: "request",
      methodId: meta,
      params: decoded,
    };
  }

  if (type === RPC_TYPE.RESPONSE) {
    return {
      kind: "response",
      clientId,
      clientIdBytes,
      ver,
      id,
      statusCode: meta,
      result: decoded,
    };
  }

  if (type === RPC_TYPE.ERROR) {
    return {
      kind: "error",
      clientId,
      clientIdBytes,
      ver,
      id,
      errorCode: meta,
      error: decoded,
    };
  }

  // Agar boshqa tur bo'lsa
  return {
    kind: "unknown",
    clientId,
    clientIdBytes,
    ver,
    id,
    rawType: type,
    meta,
    rawPayload: decoded,
  };
}


async function getSecureSeed() {
  const key = "data";

  // Avval LocalStorage'dan tekshiramiz
  let seed = localStorage.getItem(key);
  if (seed) return seed;

  // Agar u yerda bo'lmasa, yangi yaratamiz
  seed = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);

  // Saqlab qo'yamiz
  localStorage.setItem(key, seed);
  return seed;
}
function getCanvasFingerprint() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  ctx.textBaseline = "top";
  ctx.font = "16px 'Arial'";
  ctx.fillText("Canvas fingerprint test", 2, 2);

  return canvas.toDataURL();
}

async function getSoftFingerprint() {
  const { width, height } = window.screen;

 const raw = JSON.stringify({
    ua: navigator.userAgent,
    platform: navigator.platform,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    cpu: navigator.hardwareConcurrency,
    screen: ` ${Math.round(screen.width * devicePixelRatio)}x${Math.round(screen.height * devicePixelRatio)}`,
    maxTouch: navigator.maxTouchPoints,
    gpu: getGPUInfo(),
    vendor: navigator.vendor,
  });

  const encoded = new TextEncoder().encode(raw);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  const hash = Array.from(new Uint8Array(digest))
    .map(x => x.toString(16).padStart(2, "0"))
    .join("");

  return hash; // 64 byte hex (256 bit)
}

export async function getSuperFingerprint8() {
  const soft = await getSoftFingerprint();
  const canvas = getCanvasFingerprint();
  const secure = await getSecureSeed()

  const raw = soft + "|" + canvas + "|" + secure;

  const encoded = new TextEncoder().encode(raw);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  const hashArray = Array.from(new Uint8Array(digest));

  // 8 byte (64-bit) li ID yaratish
  const id8 = new Uint8Array(8);
  for (let i = 0; i < 8; i++) {
    // Hashning turli qismlaridan ma'lumot olamiz (XOR amali orqali)
    id8[i] = hashArray[i] ^ hashArray[i + 8] ^ hashArray[i + 16] ^ hashArray[i + 24];
  }

  return id8;
}
