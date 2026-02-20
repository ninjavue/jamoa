// src/rpc/rpcClient.js
import { buildRequestFrame } from "../protocol/zirhRpc.js";

export function handleIncomingRpc(parsed, stRef) {
  const state = stRef.current;

  const stream = state.rpcStreams.get(parsed.id);
  if (stream) {
    const res = parsed.result || {};
    if (res.data) {
      const u8 = res.data instanceof Uint8Array ? res.data : new Uint8Array(res.data);
      stream.parts.push(u8);
      stream.totalRead += u8.length;
      if (stream.onPart) stream.onPart(res, u8, stream.totalRead);
    }
    if (res.done || res.finished) {
      clearTimeout(stream.timer);
      state.rpcStreams.delete(parsed.id);
      stream.resolve({ ok: true, parts: stream.parts, totalRead: stream.totalRead });
    }
    return;
  }

  const pend = state.rpcPending.get(parsed.id);
  if (pend) {
    state.rpcPending.delete(parsed.id);
    console.log(parsed)
    pend.resolve({ ok: true, status: parsed.statusCode, ...parsed.result });
  }
}

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
