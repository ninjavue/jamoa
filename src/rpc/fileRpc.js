import { sendRpcRequest } from "./rpcClient";
import { METHOD, buildRequestFrame } from "../protocol/zirhRpc.js";
import { sendAppMessage } from "../transport/wsClient.js";


export const uploadFileViaRpc = async (stRef, file, convId, onProgress) => {
  if (!file) return;
  const allowedExtensions = ["jpg", "jpeg", "png", "webp", "pdf", "doc", "docx", "zip", "apk", "ipa"];
  const fileNameStr = typeof file.name === "string" ? file.name : String(file.name || "");
  const fileExtension = fileNameStr.split(".").pop()?.toLowerCase() ?? "";
  if (!allowedExtensions.includes(fileExtension)) {
    throw new Error(`Xatolik: .${fileExtension} formatidagi fayllarni yuklash mumkin emas!`);
  }
  // console.log({name: file.name, size: file.size, mime: file.type || "application/octet-stream", convId,})
  const initRes = await sendRpcRequest(stRef, METHOD.FILE_INIT, { name: fileNameStr, size: file.size, mime: file.type || "application/octet-stream", convId, });
  // console.log(initRes)
  if (!initRes && initRes.status != 56) throw new Error("FILE_INIT failed");
  const { uploadId, chunkSize = 512 * 1024 } = initRes; let offset = 0; let index = 0;
  while (offset < file.size) {
    // console.log("test upload")
    const end = Math.min(offset + chunkSize, file.size); const buf = new Uint8Array(await file.slice(offset, end).arrayBuffer());
    const chunkRes = await sendRpcRequest(stRef, METHOD.FILE_CHUNK, { uploadId, index, offset, data: buf, last: end >= file.size, });
    if (!initRes && initRes.status != 56) throw new Error("FILE_CHUNK failed"); offset = end; index++; if (onProgress) onProgress(Math.round((offset / file.size) * 100));
    // console.log(stRef, METHOD.FILE_DONE, { uploadId, caption: "" })
  } return await sendRpcRequest(stRef, METHOD.FILE_DONE, { uploadId, caption: "" });
};

export const downloadFileViaRpc = async (stRef, fileId, fileName, size, onProgress) => {
  const state = stRef.current;

  // const info = await sendRpcRequest(stRef, METHOD.FILE_INFO, { fileId });
  // if (!info?.status) throw new Error("FILE_INFO failed");

  const  chunkSize = 512 * 1024 
  let offset = 0;
  let allParts = [];

  while (offset < size) {
    const len = Math.min(chunkSize, size - offset);

    const streamRes = await new Promise((resolve, reject) => {
      if (!state.wc || state.phase !== 3) return reject("Offline");

      state.rpcId = (state.rpcId + 1) & 0xffff;
      const rpcId = state.rpcId;

      state.rpcStreams.set(rpcId, {
        resolve,
        reject,
        parts: [],
        totalRead: 0,
        timer: setTimeout(() => reject("Timeout"), 60000),
        onPart: (_, u8, total) => {
          if (onProgress) onProgress(Math.round(((offset + total) / size) * 100));
        },
      });

      const buf = buildRequestFrame(
        rpcId,
        METHOD.FILE_GET_CHUNK,
        { fileId, offset, length: len, size },
        state.clientId
      );
      const u8 = new Uint8Array(buf);
      

      try {
        state.wc.send_rpc_frame_bytes(rpcId, METHOD.FILE_GET_CHUNK, u8);
      } catch (e) {
        clearTimeout(state.rpcStreams.get(rpcId)?.timer);
        state.rpcStreams.delete(rpcId);
        reject(e);
      }
    });

    allParts.push(...streamRes.parts);
    offset += streamRes.totalRead;

  }

  const mime = getMimeFromName(fileName)
  const blob = new Blob(allParts, { type: mime || "application/octet-stream" });
  return blob
  // const base64 = await blobToBase64(blob);
  // localStorage.setItem(fileId, base64);
};



const blobToBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });


export const downloadFileViaRpcNew = async (stRef, fileId, fileName, size, onProgress) => {
  const cached = await getBlobFromDb(fileId);
  if (cached) return cached;

  const state = stRef.current;
  const chunkSize = 512 * 1024; // Server bilan bir xil: 512KB
  let offset = 0;
  let allParts = [];

  while (offset < size) {
    const len = Math.min(chunkSize, size - offset);

    const streamRes = await new Promise((resolve, reject) => {
      if (!state.wc || state.phase !== 3) return reject("Offline");

      state.rpcId = (state.rpcId + 1) & 0xffff;
      const rpcId = state.rpcId;

      state.rpcStreams.set(rpcId, {
        parts: [], // Kelayotgan data chunklarni yig'ish uchun
        totalRead: 0,
        timer: setTimeout(() => {
          state.rpcStreams.delete(rpcId);
          reject("Download Timeout at " + offset);
        }, 60000),
        
        // BU YER MUHIM: Markaziy dispatcher xabarni qabul qilganda rpcStreams ichidagi 
        // resolve funksiyasini chaqirishi kerak.
        resolve: (result) => {
          // result ichida server yuborgan parts va totalRead bo'lishi kerak
          resolve(result);
        },
        reject
      });

      const buf = buildRequestFrame(
        rpcId,
        METHOD.FILE_GET_CHUNK,
        { fileId, offset, length: len, size },
        state.clientId
      );

      try {
        state.wc.send_rpc_frame_bytes(rpcId, METHOD.FILE_GET_CHUNK, new Uint8Array(buf));
      } catch (e) {
        state.rpcStreams.delete(rpcId);
        reject(e);
      }
    });

    // Serverdan olingan bo'laklarni umumiy massivga qo'shamiz
    allParts.push(...streamRes.parts);
    offset += streamRes.totalRead;

    if (onProgress) {
      onProgress(Math.round((offset / size) * 100));
    }
  }

  const blob = new Blob(allParts, { type: getMimeFromName(fileName) || "application/octet-stream" });
  saveBlob(fileId, blob).catch(console.error);
  return blob;
};

const getMimeFromName = (name = "") => {
  const s = name != null && typeof name === "string" ? name : String(name || "");
  const ext = s.split(".").pop()?.toLowerCase();

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


function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("fileStorage", 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("files")) {
        db.createObjectStore("files", { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}



async function getBlobFromDb(fileId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readonly");
    const store = tx.objectStore("files");
    const req = store.get(fileId);
    req.onsuccess = () => {
      const row = req.result;
      resolve(row?.blob ?? null);
    };
    req.onerror = () => reject(req.error);
  });
}

async function saveBlob(fileId, blob) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    const store = tx.objectStore("files");

    store.put({
      id: fileId,
      type: blob.type,
      size: blob.size,
      blob,
      createdAt: Date.now(),
    });

    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
}






