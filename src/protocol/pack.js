// src/protocol/pack.js
export function pack(op, payload) {
  const p = payload instanceof Uint8Array ? payload : new Uint8Array(payload);
  const buf = new ArrayBuffer(1 + 4 + p.length);
  const u8 = new Uint8Array(buf);
  const dv = new DataView(buf);
  u8[0] = op;
  dv.setUint32(1, p.length, true);
  u8.set(p, 5);
  return u8;
}

export function unpack(frame) {
  const u8 = frame instanceof Uint8Array ? frame : new Uint8Array(frame);
  if (u8.length < 5) return { op: 0, payload: new Uint8Array() };
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  const op = u8[0];
  const len = dv.getUint32(1, true);
  if (u8.length < 5 + len) return { op: 0, payload: new Uint8Array() };
  return { op, payload: u8.slice(5, 5 + len) };
}
