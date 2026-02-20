// initWasm.js
let wasm = null;

export async function initWasm() {
  if (wasm) return wasm;

  // ESM import qilamiz
  const mod = await import("../wasm/pkg/mywasm.js"); 

  // Agar bundler `default()` chaqirishni talab qilsa:
  wasm = await (mod.default ? mod.default() : mod);  

  return wasm;
}
