// useZirh.js
import { useEffect } from "react";

export function useZirhEvent(name, cb) {
  useEffect(() => {
    const eventName = `zirh:${name ?? "push"}`;
    const handler = (e) => cb(e.detail);
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }, [name, cb]);
}
