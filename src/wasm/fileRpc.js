import { sendRpcRequest } from "./rpcClient";
import { METHOD, buildRequestFrame } from "../protocol/zirhRpc.js";
import { sendAppMessage } from "../transport/wsClient.js";


export const uploadFileViaRpc = async (stRef, file, convId, onProgress) => {
  if (!file) return; const allowedExtensions = ["jpg", "jpeg", "png", "pdf", "docx", "zip"];
  const fileExtension = file.name.split(".").pop().toLowerCase();
  if (!allowedExtensions.includes(fileExtension)) { throw new Error("Xatolik: .${fileExtension} formatidagi fayllarni yuklash mumkin emas!"); }
  const initRes = await sendRpcRequest(stRef, METHOD.FILE_INIT, { name: file.name, size: file.size, mime: file.type || "application/octet-stream", convId, });
  console.log(initRes)
  if (!initRes&&initRes.status!=56) throw new Error("FILE_INIT failed");
  const { uploadId, chunkSize = 128 * 1024 } = initRes; let offset = 0; let index = 0;
  while (offset < file.size) {
    const end = Math.min(offset + chunkSize, file.size); const buf = new Uint8Array(await file.slice(offset, end).arrayBuffer());
    const chunkRes = await sendRpcRequest(stRef, METHOD.FILE_CHUNK, { uploadId, index, offset, data: buf, last: end >= file.size, });
    if (!initRes&&initRes.status!=56) throw new Error("FILE_CHUNK failed"); offset = end; index++; if (onProgress) onProgress(Math.round((offset / file.size) * 100));
  } return await sendRpcRequest(stRef, METHOD.FILE_DONE, { uploadId, caption: "" });
};

export const downloadFileViaRpc = async (stRef, fileId,size, onProgress) => {
  const state = stRef.current;

  // const info = await sendRpcRequest(stRef, METHOD.FILE_INFO, { fileId });
  // if (!info?.status) throw new Error("FILE_INFO failed");

  const { size, name, chunkSize = 128 * 1024 } = info;
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
        { fileId, offset, length: len },
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

  const blob = new Blob(allParts, { type: mime || "application/octet-stream" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name || "file.bin";
  a.click();
};
