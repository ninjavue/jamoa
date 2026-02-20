// src/transport/wsClient.js
import { WsClient } from "mywasm";
import { handleIncomingRpc, sendRpcRequest } from "../rpc/rpcClient";
import { METHOD } from "../protocol/zirhRpc";

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
function handleSecurityLogout() {
  localStorage.clear(); // Hamma narsani tozalash xavfsizroq
  window.location.replace('/login'); // Orqaga qaytish imkonisiz yo'naltirish
}
export function sendAppMessage(plainBytesU8, state) {
  state.wc.send_app_message(plainBytesU8);
}
