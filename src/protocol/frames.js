// src/protocol/frames.js
export const OP = {
  REQ_PQ: 1,
  RES_PQ: 2,
  REQ_ECDH: 3,
  RES_ECDH_OK: 4,
  SET_CLIENT_IN: 5,
  DH_RESULT: 6,
  APP_MSG_C2S: 10,
  APP_MSG_S2C: 11,
};

export const METHOD = {
  FILE_INIT: 101,
  FILE_CHUNK: 102,
  FILE_DONE: 103,
  FILE_INFO: 104,
  FILE_GET_CHUNK: 105,
};

// Sizda mavjud funksiyalarni shu faylga ko'chiring:
export function buildRequestFrame(rpcId, methodId, params, clientId) {
  // TODO: sizning encoding’ingiz
  // return ArrayBuffer
  throw new Error("buildRequestFrame not implemented");
}

export function parseFrame(u8) {
  // TODO: sizning decoding’ingiz
  // return {kind:'response'|'error'|'request', id, result, statusCode ...}
  throw new Error("parseFrame not implemented");
}
