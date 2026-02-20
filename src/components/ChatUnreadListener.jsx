import { useEffect, useRef, useMemo } from "react";
import { useZirhEventContext } from "../context/ZirhEventContext";
import { getTotalUnread, getStoredExpertiseUnread } from "../utils/chatUnread";

const DEFAULT_TITLE = "Kiberxavfsizlik markazi";

function applyFaviconAndTitle(total) {
  if (typeof document === "undefined") return;
  const link =
    document.querySelector('link[rel="icon"]') ||
    (() => {
      const el = document.createElement("link");
      el.rel = "icon";
      document.head.appendChild(el);
      return el;
    })();
  const originalHref =
    link.getAttribute("data-original-href") || link.href || "/logo.png";
  if (!link.getAttribute("data-original-href")) {
    link.setAttribute("data-original-href", originalHref);
  }

  if (total > 0) {
    document.title = `${DEFAULT_TITLE} | (${total})`;
    const size = 32;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const drawBadgeOnFavicon = (img) => {
      if (img && img.width && img.height) {
        ctx.drawImage(img, 0, 0, size, size);
      } else {
        ctx.fillStyle = "#f0f0f0";
        ctx.fillRect(0, 0, size, size);
      }
      // Badge pastki o'ngda, Vite ikonkasining ustida
      const badgeSize = 25;
      const cx = size - badgeSize / 2 + 3;
      const cy = size - badgeSize / 2 + 3;
      const r = badgeSize / 2;
      ctx.fillStyle = "#f2675c";
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      // ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      const text = total > 99 ? "99+" : String(total);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 12px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, cx, cy);
      try {
        link.href = canvas.toDataURL("image/png");
      } catch (_) {}
    };

    const img = new Image();
    img.onload = () => drawBadgeOnFavicon(img);
    img.onerror = () => drawBadgeOnFavicon(null);
    img.src = originalHref;
  } else {
    document.title = defaultTitleRef;
    link.href = originalHref;
  }
}

let defaultTitleRef = DEFAULT_TITLE;

/**
 * ChatUnread + Expertise notifications
 * Chat va ekspertiza o'qilmaganlarini birlashtirib favicon va tab sarlavhasini yangilaydi.
 */
function getCombinedTotal(chatTotal, expertise) {
  const exp = expertise || getStoredExpertiseUnread();
  return (chatTotal || 0) + (exp.tizim || 0) + (exp.mobil || 0);
}

export function ChatUnreadListener() {
  const restoredRef = useRef(false);
  const { totalUnread, expertiseUnread } = useZirhEventContext();
  const combinedTotal = useMemo(
    () => getCombinedTotal(totalUnread, expertiseUnread),
    [totalUnread, expertiseUnread]
  );

  useEffect(() => {
    if (defaultTitleRef === DEFAULT_TITLE) {
      defaultTitleRef = document.title || DEFAULT_TITLE;
    }
    applyFaviconAndTitle(combinedTotal);
  }, [combinedTotal]);

  useEffect(() => {
    const onChatUnread = (e) => {
      const chatTotal = e.detail?.total ?? getTotalUnread();
      const exp = getStoredExpertiseUnread();
      applyFaviconAndTitle(getCombinedTotal(chatTotal, exp));
    };
    const onExpertiseUnread = (e) => {
      const exp = e.detail ?? getStoredExpertiseUnread();
      const chatTotal = getTotalUnread();
      applyFaviconAndTitle(getCombinedTotal(chatTotal, exp));
    };
    window.addEventListener("chatUnreadTotal", onChatUnread);
    window.addEventListener("expertiseUnreadUpdate", onExpertiseUnread);
    return () => {
      window.removeEventListener("chatUnreadTotal", onChatUnread);
      window.removeEventListener("expertiseUnreadUpdate", onExpertiseUnread);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (restoredRef.current) return;
      restoredRef.current = true;
      document.title = defaultTitleRef;
      const link = document.querySelector('link[rel="icon"]');
      if (link) {
        link.href =
          link.getAttribute("data-original-href") || "/logo.png";
      }
    };
  }, []);

  return null;
}
