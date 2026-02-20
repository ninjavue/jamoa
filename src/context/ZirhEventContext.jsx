import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import { METHOD } from "../api/zirhrpc";
import {
  formatBufferToId,
  getStoredUnreadCounts,
  persistUnreadCounts,
  getStoredExpertiseUnread,
  persistExpertiseUnread,
  CHAT_CURRENT_CONV_ID_KEY,
  CHAT_CURRENT_USER_ID_KEY,
} from "../utils/chatUnread";

const LAST_ACTIVITY_STORAGE_KEY = "chat_last_activity";

const getStoredLastActivity = () => {
  try {
    const s = localStorage.getItem(LAST_ACTIVITY_STORAGE_KEY);
    return s ? JSON.parse(s) : {};
  } catch {
    return {};
  }
};

const persistLastActivity = (obj) => {
  try {
    localStorage.setItem(LAST_ACTIVITY_STORAGE_KEY, JSON.stringify(obj));
  } catch (_) {}
};

const ZirhEventContext = createContext(null);

/**
 * Global Zirh event provider.
 * Router darajasida bitta useZirhEvent ishlatadi va ma'lumotni
 * barcha sahifa va komponentlarga context orqali tarqatadi.
 */
export function ZirhEventProvider({ children }) {
  const [unreadCounts, setUnreadCounts] = useState(getStoredUnreadCounts);
  const [expertiseUnread, setExpertiseUnread] = useState(getStoredExpertiseUnread);
  const [lastActivityAt, setLastActivityAt] = useState(getStoredLastActivity);
  const listenersRef = useRef(new Set());

  const updateLastActivity = useCallback((convId) => {
    if (!convId) return;
    const ts = Date.now();
    setLastActivityAt((prev) => {
      const next = { ...prev, [convId]: ts };
      persistLastActivity(next);
      return next;
    });
  }, []);

  const addZirhListener = useCallback((cb) => {
    listenersRef.current.add(cb);
    return () => listenersRef.current.delete(cb);
  }, []);

  useEffect(() => {
    const handler = (data) => {
      console.log("handler: head: ", data)
      if (data.methodId === METHOD.CHAT_SEND_MSG_SERVER) {
        if (!data.params) return;
        const skipNotification = !!data.params[6];
        const incomingConvId = formatBufferToId(data.params?.[1]);
        const senderId = formatBufferToId(data.params?.[2]);
        if (!skipNotification) {
          const currentUserId =
            localStorage.getItem(CHAT_CURRENT_USER_ID_KEY) || "";
          const isOwnMessage = currentUserId && senderId === currentUserId;
          const currentConvId =
            localStorage.getItem(CHAT_CURRENT_CONV_ID_KEY) || "";
          const isCurrentConversation =
            currentConvId && String(incomingConvId) === String(currentConvId);

          updateLastActivity(incomingConvId);

          setUnreadCounts((prev) => {
            let next = { ...prev };
            if (!isOwnMessage && !isCurrentConversation) {
              next = {
                ...prev,
                [incomingConvId]: (prev[incomingConvId] || 0) + 1,
              };
            } else if (isCurrentConversation) {
              next = { ...prev, [incomingConvId]: 0 };
            }
            persistUnreadCounts(next);
            const total = Object.values(next).reduce(
              (s, n) => s + Number(n || 0),
              0
            );
            window.dispatchEvent(
              new CustomEvent("chatUnreadTotal", { detail: { total } })
            );
            return next;
          });
        }
      } else if (data.methodId === METHOD.CHAT_MSG_VIEW) {
        const rawViewedId = data?.params?.[3] ?? data?.params?.["3"];
        const viewedConvId =
          rawViewedId == null
            ? null
            : typeof rawViewedId === "object"
              ? formatBufferToId(rawViewedId)
              : String(rawViewedId);
        if (viewedConvId) {
          const currentConvId =
            localStorage.getItem(CHAT_CURRENT_CONV_ID_KEY) || "";
          const isCurrentUserViewing =
            currentConvId && String(viewedConvId) === String(currentConvId);
          if (!isCurrentUserViewing) return;
          setUnreadCounts((prev) => {
            const next = { ...prev, [viewedConvId]: 0 };
            persistUnreadCounts(next);
            const total = Object.values(next).reduce(
              (s, n) => s + Number(n || 0),
              0
            );
            window.dispatchEvent(
              new CustomEvent("chatUnreadTotal", { detail: { total } })
            );
            return next;
          });
        }
      } else if (data.methodId === METHOD.CHAT_GET_MSG_PUSH) {
        const payload = data?.params?.[1] ?? data?.params?.["1"];
        if (payload) {
          const convId =
            payload.convId != null
              ? String(payload.convId)
              : payload[1] != null
                ? formatBufferToId(payload[1])
                : null;
          if (convId) {
            updateLastActivity(convId);
            const count = Number(payload.count ?? payload[2] ?? 0) || 0;
            setUnreadCounts((prev) => {
              const next = { ...prev, [convId]: count };
              persistUnreadCounts(next);
              const total = Object.values(next).reduce(
                (s, n) => s + Number(n || 0),
                0
              );
              window.dispatchEvent(
                new CustomEvent("chatUnreadTotal", { detail: { total } })
              );
              return next;
            });
          }
        }
      } else if (data.methodId === METHOD.ORDER_PUSH) {
        // params: { "1": [{ "1": [1] }] } — type params["1"][0]["1"][0] da (1=tizim, 2=mobil)
        const p1 = data.params?.[1] ?? data.params?.["1"];
        const type = p1?.[0]?.[1]?.[0] ?? p1?.[0]?.["1"]?.[0];
        if (type == null) return;
        const key = Number(type) === 1 ? "tizim" : "mobil";
        setExpertiseUnread((prev) => {
          const next = { ...prev, [key]: (prev[key] || 0) + 1 };
          persistExpertiseUnread(next);
          window.dispatchEvent(new CustomEvent("expertiseUnreadUpdate", { detail: next }));
          return next;
        });
      }

      listenersRef.current.forEach((cb) => {
        try {
          cb(data);
        } catch (err) {
          console.error("ZirhEvent listener error:", err);
        }
      });
    };

    const eventName = "zirh:push";
    const wrapper = (e) => handler(e.detail);
    window.addEventListener(eventName, wrapper);
    return () => window.removeEventListener(eventName, wrapper);
  }, [updateLastActivity]);

  const totalUnread = Object.values(unreadCounts).reduce(
    (s, n) => s + Number(n || 0),
    0
  );


  const value = {
    unreadCounts,
    setUnreadCounts,
    lastActivityAt,
    updateLastActivity,
    totalUnread,
    addZirhListener,
    persistUnreadCounts,
    expertiseUnread,
    setExpertiseUnread,
  };

  return (
    <ZirhEventContext.Provider value={value}>
      {children}
    </ZirhEventContext.Provider>
  );
}

export function useZirhEventContext() {
  const ctx = useContext(ZirhEventContext);
  if (!ctx) {
    throw new Error("useZirhEventContext must be used within ZirhEventProvider");
  }
  return ctx;
}

/**
 * Istalgan sahifa/komponentda Zirh push eventlarini qabul qilish uchun.
 * Context ichida bo'lmasa, null qaytaradi (optional usage).
 */
export function useZirhEventOptional() {
  return useContext(ZirhEventContext);
}
