import React, { createContext, useContext, useRef, useEffect } from "react";
import { initWebSocket } from "../transport/wsClient";
import { getSuperFingerprint8 } from "../protocol/zirhRpc";

const ZirhContext = createContext(null);

const WS_URL = "ws://10.10.115.40:8080/wsock";
const LABEL = "zirhwebproto";
const MAX_RETRY_DELAY = 30000;

export const ZirhProvider = ({ children }) => {
  const stRef = useRef({
    phase: 0,
    auth_key: null,
    auth_id: null,
    rpcId: 0,
    rpcPending: new Map(),
    rpcStreams: new Map(),
    retryCount: 0,
    aborted: false,
    clientId: null,
  });

  useEffect(() => {
    let canceled = false;

    (async () => {
      try {
        const cid = await getSuperFingerprint8();
        stRef.current.clientId = cid;

        await initWebSocket(stRef, {
          WS_URL,
          LABEL,
          MAX_RETRY_DELAY,
          emitGlobalEvent: (name, data) => {
            window.dispatchEvent(
              new CustomEvent(`zirh:${name}`, { detail: data }),
            );
          },
        });

        if (!canceled) console.log("✅ WS init ok");
      } catch (e) {
        console.error("❌ Zirh init error:", e);
      }
    })();

    return () => {
      canceled = true;
    };
  }, []);

  return (
    <ZirhContext.Provider value={{ stRef }}>{children}</ZirhContext.Provider>
  );
};

export const useZirhStref = () => useContext(ZirhContext);
