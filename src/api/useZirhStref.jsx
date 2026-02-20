import React, { createContext, useContext, useRef } from "react";

const ZirhContext = createContext(null);

export const ZirhProvider = ({ children }) => {
  const stRef = useRef({
    phase: 0,
    auth_key: null,
    auth_id: null,
    rpcId: 0,
    rpcPending: new Map(), // Avtomatik yaratish
    rpcStreams: new Map(), // Avtomatik yaratish
    retryCount: 0,
    aborted: false,
    clientId: null,
  });

  return (
    <ZirhContext.Provider value={{ stRef }}>{children}</ZirhContext.Provider>
  );
};

// Hook - boshqa fayllarda ishlatish uchun
export const useZirhStref = () => useContext(ZirhContext);
