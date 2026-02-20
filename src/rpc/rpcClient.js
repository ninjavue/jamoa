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
    pend.resolve({ ok: true, status: parsed.statusCode, ...parsed.result });
  }
}

export const sendRpcRequest = (stRef, methodId, params = {}) => {
  const state = stRef.current;

  const waitForReady = (state, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      if (state.wc && state.phase === 3) return resolve();
      const start = Date.now();
      const iv = setInterval(() => {
        if (state.wc && state.phase === 3) {
          clearInterval(iv);
          return resolve();
        }
        if (Date.now() - start > timeout) {
          clearInterval(iv);
          return reject(new Error("Offline"));
        }
      }, 100);
    });
  };

  return new Promise(async (resolve, reject) => {
    try {
      await waitForReady(state);
    } catch (err) {
      return reject(err.message || err);
    }

    const cur = stRef.current;
    cur.rpcId = (cur.rpcId + 1) & 0xffff;
    const rpcId = cur.rpcId;

    cur.rpcPending.set(rpcId, { resolve, reject });

    const buf = buildRequestFrame(rpcId, methodId, params, cur.clientId); 
    const u8 = new Uint8Array(buf);

    try {
      cur.wc.send_rpc_frame_bytes(rpcId, methodId, u8);
    } catch (e) {
      cur.rpcPending.delete(rpcId);
      return reject(e);
    }
  });
};
