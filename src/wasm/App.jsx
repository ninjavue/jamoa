import React, { useEffect, useRef, useState } from "react";
import { initWebSocket } from "./transport/wsClient";
import { sendRpcRequest } from "./rpc/rpcClient";
import { uploadFileViaRpc, downloadFileViaRpc } from "./rpc/fileRpc"; // ✅ download ham import
import { METHOD } from "./protocol/zirhRpc";
import { useZirhEvent } from "./useZirhEvent";
import { getSuperFingerprint8 } from "./protocol/zirhRpc";

const WS_URL = "ws://10.10.115.40:8080/wsock";
const LABEL = "zirhwebproto";
const MAX_RETRY_DELAY = 30000;

function CircleProgress({ value, size = 40, strokeWidth = 4 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(value, 0), 100);
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="#22c55e"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: "stroke-dashoffset 0.1s linear",
          }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          fontWeight: 600,
        }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default function App() {
  const stRef = useRef({});
  const [balance, setBalance] = useState(0);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // ✅ download state
  const [lastFileId, setLastFileId] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

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
            window.dispatchEvent(new CustomEvent(`zirh:${name}`, { detail: data }));
          },
        });

        if (!canceled) console.log("✅ WS init ok");
      } catch (e) {
        console.error("❌ init error:", e);
      }
    })();

    return () => {
      canceled = true;
    };
  }, []);

  useZirhEvent("push", (data) => {
    console.log("📩 PUSH:", data);
  });

  const fetchCaptcha = async () => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.CAPTCHA_GET, { 1: "wfwefwefwf" });
      console.log("✅ CAPTCHA_GET:", res);
    } catch (err) {
      console.error("❌ RPC error:", err);
    }
  };

  const onSelectFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    try {
      setUploadProgress(0);
      setIsUploading(true);
      setLastFileId(null); // ✅ yangi upload boshlansa eski fileId ni tozalaymiz

      const doneRes = await uploadFileViaRpc(stRef, file, null, (p) => setUploadProgress(p));
      console.log("✅ upload done:", doneRes);

      // ✅ server qaytargan field nomiga qarab oling
      const fid = doneRes?.fileId ?? doneRes?.id ?? doneRes?.file_id ?? null;
      if (fid != null) setLastFileId(fid);
      else console.warn("Upload done, lekin fileId topilmadi:", doneRes);
    } catch (err) {
      console.error("❌ uploadFileViaRpc error:", err);
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  const onDownloadLast = async () => {
    if (!lastFileId) return;
    try {
      setIsDownloading(true);
      setDownloadProgress(0);
      await downloadFileViaRpc(stRef, lastFileId, (p) => setDownloadProgress(p));
    } catch (e) {
      console.error("❌ download error:", e);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Hisob: {balance} so'm</h1>

      <button onClick={fetchCaptcha}>CAPTCHA_GET</button>

      <div style={{ marginTop: 16, display: "flex", gap: 12, alignItems: "center" }}>
        <input type="file" onChange={onSelectFile} style={{ maxWidth: 220 }} />

        {isUploading && <CircleProgress value={uploadProgress} />}

        {/* ✅ Upload bo‘lgandan keyin download tugmasi */}
        {lastFileId && (
          <button onClick={onDownloadLast} disabled={isDownloading}>
            {isDownloading ? `Downloading ${downloadProgress}%` : `Download (fileId: ${lastFileId})`}
          </button>
        )}

        {isDownloading && <CircleProgress value={downloadProgress} />}
      </div>
    </div>
  );
}
