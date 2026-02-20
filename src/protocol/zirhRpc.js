// src/protocol/zirhRpc.js
import { encode as msgpackEncode, decode as msgpackDecode } from "@msgpack/msgpack";

export const RPC_TYPE = {
  REQUEST: 0,
  RESPONSE: 1,
  ERROR: 2,
};

export const PROTOCOL_VERSION = 1;

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

  BAD_REQUEST: 51,
  Unauthorized: 52,
  Forbidden: 53,
  Not_Found: 54,
  Internal_Server_Error: 55,
  OK: 56,
  Created: 57,
  No_Content: 58,
  CAPTCHA_GET: 59,
};

export const METHOD_NAME = Object.fromEntries(
  Object.entries(METHOD).map(([name, id]) => [id, name])
);

export function normalizeClientId(clientId) {
  if (!clientId) return new Uint8Array(8);

  if (clientId instanceof Uint8Array) {
    if (clientId.length !== 8) throw new Error("clientId Uint8Array 8 bayt bo'lishi kerak");
    return clientId;
  }

  if (typeof clientId === "string") {
    const clean = clientId.replace(/[^0-9a-f]/gi, "");
    if (clean.length !== 16) throw new Error("clientId hex string 16 ta hex bo'lishi kerak (8 bayt)");
    const bytes = new Uint8Array(8);
    for (let i = 0; i < 8; i++) bytes[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
    return bytes;
  }

  throw new Error("Unsupported clientId type");
}

export function encodeFrame({ type, id, meta, payload, clientId }) {
  const payloadBytes = msgpackEncode(payload); // Uint8Array
  const payloadLen = payloadBytes.length;

  const clientIdBytes = normalizeClientId(clientId);

  const HEADER_LEN = 17;
  const buffer = new ArrayBuffer(HEADER_LEN + payloadLen);
  const view = new DataView(buffer);

  let o = 0;

  new Uint8Array(buffer, o, 8).set(clientIdBytes);
  o += 8;

  view.setUint8(o++, PROTOCOL_VERSION);
  view.setUint8(o++, type);
  view.setUint16(o, id, false); o += 2; // u16 BE
  view.setUint8(o++, meta);
  view.setUint32(o, payloadLen, false); o += 4; // u32 BE

  new Uint8Array(buffer, o).set(payloadBytes);

  return buffer;
}

export function buildRequestFrame(id, methodId, params, clientId) {
  return encodeFrame({
    type: RPC_TYPE.REQUEST,
    id,
    meta: methodId,
    payload: params,
    clientId,
  });
}

export function buildResponseFrame(id, result, statusCode = 0, clientId) {
  return encodeFrame({
    type: RPC_TYPE.RESPONSE,
    id,
    meta: statusCode,
    payload: result,
    clientId,
  });
}

export function buildErrorFrame(id, errorPayload, errorCode = 1, clientId) {
  return encodeFrame({
    type: RPC_TYPE.ERROR,
    id,
    meta: errorCode,
    payload: errorPayload,
    clientId,
  });
}

export function parseFrame(bufferLike) {
  let arrayBuffer;

  if (bufferLike instanceof ArrayBuffer) {
    arrayBuffer = bufferLike;
  } else if (ArrayBuffer.isView(bufferLike)) {
    arrayBuffer = bufferLike.buffer.slice(
      bufferLike.byteOffset,
      bufferLike.byteOffset + bufferLike.byteLength
    );
  } else {
    throw new Error("Unsupported buffer type");
  }

  const view = new DataView(arrayBuffer);
  let o = 0;

  const clientIdBytes = new Uint8Array(arrayBuffer, o, 8);
  o += 8;

  const clientId = Array.from(clientIdBytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const ver = view.getUint8(o++);
  const type = view.getUint8(o++);
  const id = view.getUint16(o, false); o += 2;
  const meta = view.getUint8(o++);
  const payloadLen = view.getUint32(o, false); o += 4;

  if (arrayBuffer.byteLength < o + payloadLen) {
    throw new Error("Frame payload truncated (client)");
  }

  const payloadBytes = new Uint8Array(arrayBuffer, o, payloadLen);
  const decoded = msgpackDecode(payloadBytes);

  if (type === RPC_TYPE.REQUEST) {
    return { kind: "request", methodId: meta, params: decoded };
  }
  if (type === RPC_TYPE.RESPONSE) {
    return { kind: "response", clientId, clientIdBytes, ver, id, statusCode: meta, result: decoded };
  }
  if (type === RPC_TYPE.ERROR) {
    return { kind: "error", clientId, clientIdBytes, ver, id, errorCode: meta, error: decoded };
  }
  return { kind: "unknown", clientId, clientIdBytes, ver, id, rawType: type, meta, rawPayload: decoded };
}

// -------- Fingerprint --------
async function getSecureSeed() {
  const key = "data";
  let seed = localStorage.getItem(key);
  if (seed) return seed;

  seed = crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).substring(2) + Date.now().toString(36);

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
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');
  const glData = {
    renderer: gl.getParameter(gl.RENDERER),
    vendor: gl.getParameter(gl.VENDOR),
    maxAnisotropy: gl.getExtension('EXT_texture_filter_anisotropic') ?
      gl.getParameter(gl.getExtension('EXT_texture_filter_anisotropic').MAX_MAX_ANISOTROPY_EXT) : 0,
    shadingLanguage: gl.getParameter(gl.SHADING_LANGUAGE_VERSION)
  };

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const analyser = audioContext.createAnalyser();

  const rawId = JSON.stringify({
    glData,
    cpu: navigator.hardwareConcurrency,
    mem: navigator.deviceMemory,
    platform: navigator.platform,
    plugins: navigator.plugins.length,
    osc: oscillator,
    ana: analyser,
    ua: navigator.userAgent,
    platform: navigator.platform,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    cpu: navigator.hardwareConcurrency,
    maxTouch: navigator.maxTouchPoints,
    vendor: navigator.vendor,
  });

  const encoded = new TextEncoder().encode(rawId);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}

export async function getSuperFingerprint8() {
  const soft = await getSoftFingerprint();
  const canvas = getCanvasFingerprint();
  const secure = await getSecureSeed();

  const raw = `${soft}|${canvas}|${secure}`;
  const encoded = new TextEncoder().encode(raw);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  const hashArray = new Uint8Array(digest);

  const id8 = new Uint8Array(8);
  for (let i = 0; i < 8; i++) {
    id8[i] = hashArray[i] ^ hashArray[i + 8] ^ hashArray[i + 16] ^ hashArray[i + 24];
  }
  return id8;
}


