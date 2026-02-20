// src/protocol/wsProtocol.js
export const OP = {
  REQ_PQ: 0x01,
  RES_PQ: 0x02,
  REQ_ECDH: 0x03,
  RES_ECDH_OK: 0x04,
  SET_CLIENT_IN: 0x05,
  DH_RESULT: 0x06,
  APP_MSG_C2S: 0x07,
  APP_MSG_S2C: 0x08,
  ERR_DECRYPTION_FAILED: 0xF0,

  ERR_UNAUTH: 0xEE, // avtorizatsiyasiz
  ERR_DEVICE: 0xEF, // boshqa device

  ERR_BAD_FRAME: 0xF1, // unpack len/op mos emas, frame qisqa, len katta, etc
  ERR_UNSUPPORTED_OPCODE: 0xF2, // noma’lum op keldi
  ERR_INVALID_LENGTH: 0xF3, // payload length expected emas

  // Handshake state / flow
  ERR_HANDSHAKE_STATE: 0xF4, // nonce/X_c/X_s/x_s/new_nonce yo‘q, ketma-ketlik buzildi
  ERR_HANDSHAKE_VERIFY: 0xF5, // signature/curve_id/verify failure (kelajakda verify qo‘shsangiz)

  // Crypto / auth
  ERR_AUTH_UNKNOWN: 0xF6, // auth_id topilmadi (unknown session)
  ERR_MSGKEY_MISMATCH: 0xF7, // msg_key tekshiruvi (agar computeMsgKey bilan tekshirsangiz)
  ERR_BAD_TAG: 0xF8, // AEAD tag xato (chacha20-poly1305 auth fail)

  // App-level frame / rpc
  ERR_PADDING: 0xF9, // stripPadding fail / padding invalid
  ERR_BAD_APP_FRAME: 0xFA, // parseFrame header/payloadLen mos emas
  ERR_RPC_PARSE: 0xFB, // RPC parse bo‘lmadi
  ERR_RPC_HANDLER: 0xFC, // handleRpc ichida exception

  // Rate / limits
  ERR_TOO_LARGE: 0xFD, // maxPayloadLength yoki protocol limitdan katta
  ERR_RATE_LIMIT: 0xFE, // tez-tez yuborish
  ERR_INTERNAL: 0xFF  // kutilmagan server error
};

