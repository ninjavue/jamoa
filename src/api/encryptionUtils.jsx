// encryptionUtils.js
import sodium from 'libsodium-wrappers-sumo';

export function u8Concat(...arrs){ let n=0; for (const a of arrs) n+=a.length; const out=new Uint8Array(n); let o=0; for (const a of arrs){out.set(a,o);o+=a.length;} return out; }
export function pack(op, payload){
  const buf = new ArrayBuffer(1+4+payload.length);
  const u8  = new Uint8Array(buf);
  const dv  = new DataView(buf);
  u8[0] = op;
  dv.setUint32(1, payload.length, true); // LE
  u8.set(payload, 5);
  return u8;
}
export function unpack(frame){
  const u8 = frame instanceof Uint8Array ? frame : new Uint8Array(frame);
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  if (u8.length < 5) return { op: 0, payload: new Uint8Array() };
  const op = u8[0];
  const len = dv.getUint32(1, true);
  if (u8.length < 5+len) return { op: 0, payload: new Uint8Array() };
  return { op, payload: u8.slice(5, 5+len) };
}
export function randBytes(n){ const a=new Uint8Array(n); crypto.getRandomValues(a); return a; }
export function toB64(u8){ return btoa(String.fromCharCode(...u8)); }
export function fromB64(s){ const b = atob(s); const u = new Uint8Array(b.length); for (let i=0;i<b.length;i++) u[i] = b.charCodeAt(i); return u; }
export function eqBytes(a,b){ if(a.length!==b.length) return false; for(let i=0;i<a.length;i++) if(a[i]!==b[i]) return false; return true; }
export function getSubtle(){ const s = crypto.subtle || crypto.webkitSubtle; if(!s) throw new Error('crypto.subtle unavailable'); return s; }
export async function sha256(u8){ const h=await getSubtle().digest('SHA-256', u8); return new Uint8Array(h); }
export async function hkdf(ikm, salt, info, len){
  const key = await getSubtle().importKey('raw', ikm, {name:'HKDF'}, false, ['deriveBits']);
  const bits = await getSubtle().deriveBits({name:'HKDF', hash:'SHA-256', salt, info}, key, len*8);
  return new Uint8Array(bits);
}

// ---- Padding helpers ----
// frame = [pad_len(1) | plaintext | padBytes]
export function addPadding(plaintext, maxPad = 15) {
  const padLen = crypto.getRandomValues(new Uint8Array(1))[0] % (maxPad + 1); // 0..maxPad
  const pad = randBytes(padLen);
  return u8Concat(Uint8Array.of(padLen), plaintext, pad);
}
export function stripPadding(frame) {
  if (!frame || frame.length < 1) throw new Error('bad frame');
  const padLen = frame[0];
  if (frame.length < 1 + padLen) throw new Error('bad padLen');
  return frame.subarray(1, frame.length - padLen);
}

// ---- msg_key + key/nonce KDF for app messages ----
export function computeMsgKey(buffer /* padded frame */) {
  // In browser we use subtle.digest already; to keep sync we provide a sync fallback via sodium
  const h = sodium.crypto_hash_sha256(buffer);
  return h.subarray(8, 24); // 16 bytes
}
export function deriveChaChaKeyNonce(authKey /* 32B */, msgKey /* 16B */) {
  const a0 = authKey.subarray(0, 16);
  const a1 = authKey.subarray(16, 32);
  const kA = sodium.crypto_hash_sha256(u8Concat(msgKey, a0));
  const kB = sodium.crypto_hash_sha256(u8Concat(a1, msgKey));
  const key   = u8Concat(kA.subarray(0,16), kB.subarray(16,32)); // 32B
  const nonce = sodium.crypto_hash_sha256(u8Concat(a0, msgKey, a1)).subarray(0,12); // 12B
  return { key, nonce };
}

