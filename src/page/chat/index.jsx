import React, { useRef, useState, useEffect, useMemo, use } from "react";
import JSZip, { file } from "jszip";
import html2canvas from "html2canvas";
import { useReactToPrint } from "react-to-print";
import DOMPurify from "dompurify";
import { renderAsync } from "docx-preview";
import toast from "react-hot-toast";
import Select from "react-select";
import { useZirhStref } from "../../context/ZirhContext";
import { METHOD } from "../../api/zirhrpc";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import { useZirhEvent } from "../../api/useZirh";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { downloadFileViaRpcNew, uploadFileViaRpc } from "../../rpc/fileRpc";
import { useZirhEventContext } from "../../context/ZirhEventContext";
import {
  CHAT_CURRENT_CONV_ID_KEY,
  CHAT_CURRENT_USER_ID_KEY,
} from "../../utils/chatUnread";

const ChatPage = () => {
  const fileInputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [activeTab, setActiveTab] = useState("shaxsiy");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const dropdownRef = useRef(null);
  const [chats, setChats] = useState([]);
  const [fullName, setFullName] = useState("");
  const [groups, setGroups] = useState([]);
  const [lastMsgId, setLastMsgId] = useState("");

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerFileType, setViewerFileType] = useState(null);
  const [viewerZipEntries, setViewerZipEntries] = useState([]);
  const [viewerFromZip, setViewerFromZip] = useState(false);
  const [viewerSelectedFile, setViewerSelectedFile] = useState(null);
  const [viewerFileUrl, setViewerFileUrl] = useState(null);
  const [viewerDocxHtml, setViewerDocxHtml] = useState(null);
  const [viewerError, setViewerError] = useState(null);
  const [viewerLoading, setViewerLoading] = useState(false);
  const [viewerLoadProgress, setViewerLoadProgress] = useState(0);
  const [viewerLoadingFileName, setViewerLoadingFileName] = useState("");
  const [user, setUser] = useState(null);
  const [channelOpen, setChannelOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [addCorpUserModal, setAddCorpUserModal] = useState(false);
  const [corpSurname, setCorpSurname] = useState("");
  const [corpName, setCorpName] = useState("");
  const [corpPartName, setCorpPartName] = useState("");
  const [corpEmail, setCorpEmail] = useState("");
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [userId, setUserId] = useState(null);
  const [groupId, setGroupId] = useState(null);
  const [isUpdateGroup, setIsUpdateGroup] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [printImages, setPrintImages] = useState([]);
  const printComponentRef = useRef(null);

  const [groupDataOne, setGroupDataOne] = useState([]);

  const handleReactToPrint = useReactToPrint({
    contentRef: printComponentRef,
    documentTitle: "Hujjat",
  });

  const [singleGroup, setSinglGroup] = useState(null);
  const [showLeft, setShowLeft] = useState(false);
  const [groupAll, setGroupAll] = useState([]);
  const [sGroupUsers, setSGroupUsers] = useState([]);
  const [people, setUserAll] = useState([]);
  const [channels, setChannels] = useState([]);
  const [convId, setConvId] = useState(null);
  const docxContainerRef = useRef(null);
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [openT, setOpenT] = React.useState(false);
  const [avatars, setAvatars] = useState({});
  const [listAvatars, setListAvatars] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [privateId, setPrivateId] = useState(null);
  const [countD, setCountD] = useState(0);

  const {
    unreadCounts,
    setUnreadCounts,
    lastActivityAt,
    updateLastActivity,
    totalUnread,
    addZirhListener,
    persistUnreadCounts,
  } = useZirhEventContext();

  const [replyTo, setReplyTo] = useState(null);
  const [forwardMessage, setForwardMessage] = useState(null);
  const [forwardContextMenu, setForwardContextMenu] = useState({
    x: 0,
    y: 0,
    message: null,
  });
  const [editingMessage, setEditingMessage] = useState(null);

  const bottomRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const isUserScrollingRef = useRef(false);
  const lastScrollCallRef = useRef(0);
  const messageCountRef = useRef(0);
  const skipNextScrollRef = useRef(false);
  const scrollTypeRef = useRef("initial"); // 'initial' | 'top' | 'bottom'
  const scrollContainerRef = useRef(null);
  const viewerBackgroundUrlRef = useRef(null);
  const lastChatViewUpdateRef = useRef(null); // bir xil diapazon uchun qayta so'rov yuborilishini oldini olish
  const currentConvIdRef = useRef(null); // qaysi suhbat ko'rsatilayotgani (eski getMsg javoblarini ignore qilish uchun)
  const userRef = useRef(null);
  const chatHandlersRef = useRef({});

  const { stRef } = useZirhStref();

  useEffect(() => {
    userRef.current = user;
    if (user?.id) {
      try {
        localStorage.setItem(CHAT_CURRENT_USER_ID_KEY, String(user.id));
      } catch (_) {}
    }
  }, [user]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sampleMessagesFor = (item) => {
    const now = new Date().toLocaleTimeString();
    return [];
  };

  const getImage = (fileId) => {
    if (fileId === null) return;
    const imageAvatar = localStorage.getItem(fileId);
    return imageAvatar;
  };

  const selectConversation = async (item, options = {}) => {
    const { resetUnread = true } = options;
    const newConvId = !item?.userId ? item?.id : item?.userId;
    currentConvIdRef.current = newConvId;
    setConvId(newConvId);
    try {
      localStorage.setItem(CHAT_CURRENT_CONV_ID_KEY, String(newConvId ?? ""));
    } catch (_) {}
    setMessages([]);
    setSelected(item);
    setSinglGroup(item);
    const usres = await sendRpcRequest(stRef, METHOD.CHAT_ONLINE_CHECK, {
      1: item.id2,
    });
    if (usres.status === METHOD.OK) {
      setUserAll((prev) =>
        prev.map((u) => (u.id2 === item.id2 ? { ...u, status: usres[1] } : u)),
      );
      setSelected((prev) => (prev ? { ...prev, status: usres[1] } : prev));
    }

    if (!item?.userId) {
      getMsg(item?.id);
      // getFullCOnvMessages(item?.id);
    } else {
      // getFullCOnvMessages(item?.userId);
      getMsg(item?.userId);
    }

    const group = groupAll.find((g) => formatBufferToId(g._id) === item?.id);

    setGroupId(item.id);

    if (group) {
      if (group[1] === 2 || group[1] === 3) {
        const users = Array.from(
          new Map(
            group.otherMembers
              .map((it) =>
                items.find((u) => u.id === formatBufferToId(it?.[2])),
              )
              .filter(Boolean)
              .map((u) => [u.id, u]),
          ).values(),
        );
        setSGroupUsers(users);
      } else {
        setSGroupUsers([]);
      }
    } else {
      setSGroupUsers([]);
    }

    if (resetUnread) {
      const activeChatId = item?.userId || item?.id;
      setUnreadCounts((prev) => {
        const next = { ...prev, [activeChatId]: 0 };
        persistUnreadCounts(next);
        return next;
      });
    }
  };

  useEffect(() => {
    if (selected && groupAll.length > 0 && items.length > 0) {
      const group = groupAll.find(
        (g) => formatBufferToId(g._id) === selected.id,
      );
      if (!group) return;

      if (group[1] === 2 || group[1] === 3) {
        const users = Array.from(
          new Map(
            group.otherMembers
              .map((it) =>
                items.find((u) => u.id === formatBufferToId(it?.[2])),
              )
              .filter(Boolean)
              .map((u) => [u.id, u]),
          ).values(),
        );
        setSGroupUsers(users);
      }
    }
  }, [items, groupAll, selected]);

  useEffect(() => {
    const raw =
      activeTab === "shaxsiy"
        ? people
        : activeTab === "guruh"
          ? groups
          : channels;
    const getConvId = (i) =>
      activeTab === "shaxsiy" ? i?.userId || i?.id : i?.id;
    const list = [...raw].sort((a, b) => {
      const tsA = lastActivityAt[getConvId(a)] || 0;
      const tsB = lastActivityAt[getConvId(b)] || 0;
      return tsB - tsA;
    });
    if (list.length === 0) return;
    const isSelectedInList = selected
      ? list.some(
          (item) =>
            item.id === selected.id ||
            item.userId === selected.userId ||
            item.userId === selected.id,
        )
      : false;
    if (!selected || !isSelectedInList) {
      selectConversation(list[0]);
    }
  }, [activeTab, people, groups, channels, selected, lastActivityAt]);

  // Brauzer tab sarlavhasi va favicon’da o‘qilmaganlar soni (Zimbra uslubida)
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("chatUnreadTotal", { detail: { total: totalUnread } }),
    );
  }, [totalUnread]);

  // Role 9 da faqat guruh: default tab guruh
  useEffect(() => {
    if (user?.[3] === 9) setActiveTab("guruh");
  }, [user?.[3]]);

  // Global Zirh eventlarini ZirhEventContext orqali qabul qilamiz (listener formatBufferToId/getTime/downloadFileAll/getAllChat dan keyin ro'yxatdan o'tkaziladi)

  const unreadByTab = useMemo(() => {
    const shaxsiy = (people || []).reduce(
      (sum, i) => sum + (unreadCounts[i?.userId || i?.id] || 0),
      0,
    );
    const guruh = (groups || []).reduce(
      (sum, i) => sum + (unreadCounts[i?.id] || 0),
      0,
    );
    const kanal = (channels || []).reduce(
      (sum, i) => sum + (unreadCounts[i?.id] || 0),
      0,
    );
    return { shaxsiy, guruh, kanal };
  }, [people, groups, channels, unreadCounts]);

  const TabButtons = () => {
    const makeClass = (tab) =>
      `px-3 py-2 text-sm font-semibold flex items-center gap-2 border-b-2 ${
        activeTab === tab
          ? "border-blue-500 text-blue-600"
          : "border-transparent text-gray-700 hover:text-blue-600 dark:text-white"
      }`;
    const badgeClass = (tab) =>
      `inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[11px] ${
        activeTab === tab
          ? "bg-blue-100 text-blue-600"
          : "bg-blue-500 text-white"
      }`;
    return (
      <div className="flex items-center gap-4 px-2 py-1 bg-white dark:bg-transparent">
        <button
          type="button"
          onClick={() => setBtnActive("shaxsiy")}
          className={makeClass("shaxsiy")}
        >
          Shaxsiy
          {unreadByTab.shaxsiy > 0 && (
            <span className={badgeClass("shaxsiy")}>
              {unreadByTab.shaxsiy > 99 ? "99+" : unreadByTab.shaxsiy}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => setBtnActive("guruh")}
          className={makeClass("guruh")}
        >
          Guruh
          {unreadByTab.guruh > 0 && (
            <span className={badgeClass("guruh")}>
              {unreadByTab.guruh > 99 ? "99+" : unreadByTab.guruh}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => setBtnActive("kanal")}
          className={makeClass("kanal")}
        >
          Kanal
          {unreadByTab.kanal > 0 && (
            <span className={badgeClass("kanal")}>
              {unreadByTab.kanal > 99 ? "99+" : unreadByTab.kanal}
            </span>
          )}
        </button>
      </div>
    );
  };

  const setBtnActive = (tab) => {
    setActiveTab(tab);
    const raw =
      tab === "shaxsiy" ? people : tab === "guruh" ? groups : channels;
    if (raw?.length === 0) return;
    const getConvId = (i) => (tab === "shaxsiy" ? i?.userId || i?.id : i?.id);
    const sorted = [...raw].sort((a, b) => {
      const tsA = lastActivityAt[getConvId(a)] || 0;
      const tsB = lastActivityAt[getConvId(b)] || 0;
      return tsB - tsA;
    });
    selectConversation(sorted[0]);
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIconClass = (mime, name) => {
    const ext = name.split(".").pop()?.toLowerCase() || "";
    if (
      mime?.startsWith("image/") ||
      ["png", "jpg", "jpeg", "gif", "bmp", "webp"].includes(ext)
    )
      return "ri-image-line";
    if (mime === "application/pdf" || ext === "pdf") return "ri-file-pdf-line";
    if (mime?.startsWith("audio/") || ["mp3", "wav", "ogg"].includes(ext))
      return "ri-file-music-line";
    if (
      mime?.startsWith("video/") ||
      ["mp4", "webm", "mov", "mkv"].includes(ext)
    )
      return "ri-file-video-line";
    if (["zip", "rar", "7z", "tar", "gz"].includes(ext))
      return "ri-file-zip-line";
    if (["doc", "docx"].includes(ext)) return "ri-file-word-line";
    if (["xls", "xlsx"].includes(ext)) return "ri-file-excel-line";
    if (["ppt", "pptx"].includes(ext)) return "ri-file-ppt-line";
    if (["txt", "md", "csv", "json", "xml"].includes(ext))
      return "ri-file-text-line";
    return "ri-file-2-line";
  };

  const downloadFileAll = async (id, fileName = "test", size = null) => {
    // return "null"
    const blob = await downloadFileViaRpcNew(stRef, id, fileName, size, (p) => {
      setUploadProgress(p);
      setIsUploading(true);
      if (p === 100) setIsUploading(false);
    });
    return blob;
  };
  const downloadFileDocAll = async (id, size = null) => {
    return await downloadFileViaRpcNew(stRef, id, id, size, (p) => {
      setUploadProgress(p);
      setIsUploading(true);
      if (p === 100) setIsUploading(false);
    });
  };

  const handleFile = async (file) => {
    if (!file) return;
    const nameLength = file?.name?.length || 0;

    if (nameLength > 50) {
      toast.error("Iltimos fayli nomini 50 ta belgidan kichik kiriting");
      return;
    }

    if (convId === null) return;

    const id = Date.now() + Math.random();

    const newMsg = {
      id,
      type: "file",
      sender: "me",
      convId,
      time: new Date().toString(),
      replyToId: replyTo?.id || null,
      file: {
        id: null,
        name: file.name,
        size: file.size,
        mime: file.type,
        url: null,
      },
      progress: 0,
      status: "uploading",
      read: false,
    };

    setMessages((s) => [...s, newMsg]);

    updateLastActivity(convId);

    try {
      const doneRes = await uploadFileViaRpc(stRef, file, convId, (p) => {
        const progress = Math.min(100, Math.max(0, Number(p) || 0));
        setMessages((cur) =>
          cur.map((m) =>
            m.id === id ? { ...m, progress, status: "uploading" } : m,
          ),
        );
      });

      const fileId = doneRes?.fileId;
      if (!fileId) {
        setMessages((cur) =>
          cur.map((m) => (m.id === id ? { ...m, status: "error" } : m)),
        );
        toast.error("Fayl yuklanmadi");
        return;
      }

      if (file.type.startsWith("image/")) {
        const blob = await downloadFileAll(fileId, file.name, file.size);
        const url1 = URL.createObjectURL(blob);
        setMessages((cur) =>
          cur.map((m) =>
            m.id === id
              ? {
                  ...m,
                  progress: 100,
                  status: "done",
                  file: { ...m.file, id: url1 },
                }
              : m,
          ),
        );
      } else {
        setMessages((cur) =>
          cur.map((m) =>
            m.id === id
              ? {
                  ...m,
                  progress: 100,
                  status: "done",
                  file: { ...m.file, id: fileId },
                }
              : m,
          ),
        );
      }

      const res = await sendRpcRequest(stRef, METHOD.CHAT_SEND_MSG_CLIENT, {
        1: convId,
        2: user.id,
        3: {
          1: 2,
          3: {
            1: fileId,
            2: file.name,
            3: file.size,
          },
        },
        4: replyTo?.id || null,
      });
      // console.log(res)
      const success =
        res &&
        (res.status === METHOD.OK || res.status === 56 || res.ok === true);
      if (!success) {
        setMessages((cur) =>
          cur.map((m) => (m.id === id ? { ...m, status: "error" } : m)),
        );
      }
    } catch (error) {
      setMessages((cur) =>
        cur.map((m) => (m.id === id ? { ...m, status: "error" } : m)),
      );
      toast.error("Xabar yuborishda xatolik");
    } finally {
      setReplyTo(null);
    }
    scrollTypeRef.current = "initial";
  };

  const onFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) handleFile(file);
    e.target.value = null;
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleMessageContextMenu = (e, message) => {
    e.preventDefault();
    e.stopPropagation();
    setForwardContextMenu({
      x: e.clientX,
      y: e.clientY,
      message,
    });
  };

  const handleForwardClick = () => {
    if (forwardContextMenu.message) {
      setForwardMessage(forwardContextMenu.message);
      setForwardContextMenu({ x: 0, y: 0, message: null });
    }
  };

  const handleEditMessage = (message) => {
    if (!message) return;
    setText(message.text || "");
    setEditingMessage(message);
    setForwardContextMenu({ x: 0, y: 0, message: null });
  };

  const forwardToChat = async (targetConvId) => {
    const m = forwardMessage;
    if (!m || !user || !targetConvId) return;
    try {
      if (m.type === "text") {
        await sendRpcRequest(stRef, METHOD.CHAT_SEND_MSG_CLIENT, {
          1: targetConvId,
          2: user.id,
          3: { 1: 1, 2: m.text || "" },
          4: null,
        });
      } else if (m.type === "file" && m.file) {
        const fileId =
          m.file.serverId ||
          (typeof m.file.id === "string" && !m.file.id.startsWith("blob:")
            ? m.file.id
            : null);
        if (!fileId) {
          toast.error("Faylni forward qilish mumkin emas");
          return;
        }
        await sendRpcRequest(stRef, METHOD.CHAT_SEND_MSG_CLIENT, {
          1: targetConvId,
          2: user.id,
          3: {
            1: 2,
            3: {
              1: fileId,
              2: m.file.name || "file",
              3: m.file.size || 0,
            },
          },
          4: null,
        });
      }
      updateLastActivity(targetConvId);
      toast.success("Xabar yuborildi");
      setForwardMessage(null);
    } catch (err) {
      console.error(err);
      toast.error("Xabarni uzatishda xatolik");
    }
  };

  useEffect(() => {
    const close = () =>
      setForwardContextMenu((p) => (p.message ? { ...p, message: null } : p));
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const onSendText = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    if (convId === null) return;

    if (editingMessage) {
      try {
        const res = await sendRpcRequest(stRef, METHOD.CHAT_UPDATE, {
          1: convId, // convId
          2: user.id, // userid
          3: { 1: 1, 2: text }, // text
          4: editingMessage.replyToId, // replyToId
          5: editingMessage.read, // read
          6: editingMessage.id, // messageId
        });
        if (res.status == 50) {
          toast.error(
            "Xabar yozilganiga 1 soatdan ko‘p vaqt o‘tgan, tahrirlash mumkin emas",
          );
          return;
        }
        setMessages((s) =>
          s.map((m) =>
            m.id === editingMessage.id ? { ...m, text, edited: true } : m,
          ),
        );

        // toast.success("Xabar tahrirlandi");
      } catch (error) {
        toast.error("Tahrirlashda xatolik");
        return;
      }
      setEditingMessage(null);
      setText("");
      return;
    }

    // ensure autoscroll for sent messages
    scrollTypeRef.current = "initial";

    updateLastActivity(convId);

    const res = await sendRpcRequest(stRef, METHOD.CHAT_SEND_MSG_CLIENT, {
      1: convId,
      2: user.id,
      3: {
        1: 1,
        2: text,
      },
      4: replyTo?.id || null,
    });
    if (res.status === METHOD.OK) {
      // console.log(formatBufferToId(res._id))
      setMessages((s) => [
        ...s,
        {
          id: formatBufferToId(res._id),
          type: "text",
          sender: "me",
          convId,
          text,
          time: new Date().toString(),
          replyToId: replyTo?.id || null,
          read: false,
        },
      ]);
    }
    setText("");
    setReplyTo(null);
  };

  const getTime = (objectId) => {
    const timestampHex = objectId.substring(0, 8);

    const timestampSeconds = parseInt(timestampHex, 16);

    const date = new Date(timestampSeconds * 1000);

    return date.toString();
  };

  const isServerMessageId = (value) => {
    if (value == null) return false;
    const s = String(value).trim();
    return /^[a-f0-9]{24}$/i.test(s);
  };

  const isTimestamp = (value) => {
    if (value == null) return false;
    const n = Number(value);
    return Number.isFinite(n) && n >= 1e12 && n <= 1e14;
  };

  const getMsg = async (id, msgId = null, msgType = false) => {
    try {
      const isTimestamp = typeof msgId === "number" && msgId > 1000000000000;
      if (msgId !== null && msgId === lastMsgId && isTimestamp) return;
      setLastMsgId(msgId);

      let type;

      if (msgId === null && msgType === false) {
        type = 2;
      } else if (msgId !== null && msgType === false) {
        type = 2;
      } else if (msgId !== null && msgType === true) {
        type = 3;
      }

      const payload = {
        1: type,
        2: id,
        3: msgId,
      };
      console.log(payload)
      const res = await sendRpcRequest(stRef, METHOD.CHAT_GET_MSG, payload);

      if (res.status === METHOD.OK) {
        if (currentConvIdRef.current !== id) return;
        const raw = res[1];
        setCountD(raw?.count);
        // console.log(res[1])
        const list = Array.isArray(raw)
          ? raw
          : Array.isArray(raw?.data)
            ? raw.data
            : [];
        const messagesRaw = list.map((item) => {
          return {
            id: formatBufferToId(item._id),
            id2: formatBufferToId(item[1]),
            id3: formatBufferToId(item[2]),
            type: item[3][1] === 1 ? "text" : "file",
            time: getTime(formatBufferToId(item._id)),
            sender:
              formatBufferToId(item[2]) === (user?.id ?? null)
                ? "me"
                : formatBufferToId(item[2]),
            text: item[3][2],
            replyToId: item[4] ? item[4] : null,
            file: {
              id: item[3][3]?.[1],
              name: item[3][3]?.[2],
              size: item[3][3]?.[3],
              mime: "application/pdf",
              url: null,
            },
            read: Boolean(item[5]),
            progress: 0,
            edited: Boolean(item[6]),
            fullName:
              people.find((p) => p.id === formatBufferToId(item[1]))?.name ||
              null,
            status: "done",
          };
        });
        // Serverdan kelgan ro'yxatda dublikat bo'lmasligi uchun id bo'yicha bitta qoldiramiz
        const seenIds = new Set();
        const messagesDeduped = messagesRaw.filter((m) => {
          const k = String(m.id);
          if (seenIds.has(k)) return false;
          seenIds.add(k);
          return true;
        });
        // Doim eski → yangi tartibda (xabar yuborilgach eski xabarlar ostiga tushmasin)
        const sortByTime = (a, b) => {
          const tA = (a.time && new Date(a.time).getTime()) || 0;
          const tB = (b.time && new Date(b.time).getTime()) || 0;
          return tA - tB;
        };
        const messages = [...messagesDeduped].sort(sortByTime);
        for (const item of messages) {
          const fileName = item?.file?.name || "";
          const isImage =
            fileName.endsWith(".jpg") ||
            fileName.endsWith(".jpeg") ||
            fileName.endsWith(".png");
          if (isImage && item.file.id) {
            const origId = item.file.id;
            const blob = await downloadFileAll(
              item.file.id,
              item.file.name || "file",
              item.file.size,
            );
            if (
              fileName.endsWith(".zip") ||
              fileName.endsWith(".apk") ||
              fileName.endsWith(".aar") ||
              fileName.endsWith(".xapk") ||
              fileName.endsWith(".rar") ||
              fileName.endsWith(".ipa")
            ) {
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = fileName || "file.p";
              a.click();
            } else {
              item.file.serverId = origId;
              item.file.id = URL.createObjectURL(blob);
            }
          }
        }
        if (msgType === true) {
          skipNextScrollRef.current = true;
          setMessages((prev) => {
            const prevIds = new Set(prev.map((m) => String(m.id)));
            const onlyNew = messages.filter((m) => !prevIds.has(String(m.id)));
            if (onlyNew.length === 0) return prev;
            return [...onlyNew, ...prev];
          });
          const _t = setTimeout(() => {
            skipNextScrollRef.current = false;
          }, 600);
          return () => clearTimeout(_t);
        } else {
          setMessages(messages);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openViewer = async (message) => {
    if (!message || !message.file) return;

    if (viewerFileUrl) URL.revokeObjectURL(viewerFileUrl);
    setViewerFileUrl(null);
    setViewerError(null);
    setViewerFileType(null);
    setViewerSelectedFile(null);
    setViewerZipEntries([]);

    const needDownload =
      !message.file.blob && !message.file.url && message.file.id;

    if (needDownload) {
      setViewerOpen(true);
      setViewerLoading(true);
      setViewerLoadProgress(0);
      setViewerLoadingFileName(message.file.name || "Fayl");
    }

    try {
      let blob;
      const idOrUrl = message.file.id || message.file.url;
      const isBlobUrl =
        typeof idOrUrl === "string" && idOrUrl.startsWith("blob:");
      if (message.file.blob) {
        blob = message.file.blob;
      } else if (message.file.url || isBlobUrl) {
        const res = await fetch(idOrUrl);
        blob = await res.blob();
        setViewerLoading(false);
      } else {
        const fileSize = message.file.size || 1024 * 1024;
        blob = await downloadFileViaRpcNew(
          stRef,
          message.file.id,
          message.file.name || message.file.id,
          fileSize,
          (p) => setViewerLoadProgress(Math.min(100, Math.max(0, p))),
        );
        setViewerLoading(false);
      }

      const fileName = (message.file.name || "").toLowerCase();
      const mime = message.file.mime || blob?.type || "";

      if (fileName.endsWith(".apk") || fileName.endsWith(".ipa")) {
        setViewerLoading(false);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download =
          message.file.name ||
          (fileName.endsWith(".apk") ? "file.apk" : "file.ipa");
        a.click();
        URL.revokeObjectURL(url);
        toast.success(`${message.file.name || "Fayl"} yuklab olindi`);
        if (needDownload) setViewerOpen(false);
        return;
      }

      const isImageFile =
        /\.(png|jpg|jpeg|gif|bmp|webp)$/i.test(fileName) ||
        (mime && mime.startsWith("image/"));
      if (isImageFile) {
        setViewerLoading(false);
        const url = URL.createObjectURL(blob);
        setViewerFileUrl(url);
        setViewerFileType("image");
        setViewerSelectedFile(null);
        setViewerDocxHtml(null);
        setViewerFromZip(false);
        setViewerOpen(true);
        return;
      }

      if (fileName.endsWith(".zip")) {
        const zip = await JSZip.loadAsync(blob);
        const viewableExt = [".pdf", ".docx", ".doc", ".apk", ".ipa"];
        const hasViewable = Object.keys(zip.files).some((p) => {
          const entry = zip.files[p];
          if (entry.dir) return false;
          const name = (p.split("/").pop() || "").toLowerCase();
          return viewableExt.some((ext) => name.endsWith(ext));
        });
        if (!hasViewable) {
          setViewerLoading(false);
          setViewerOpen(false);
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = message.file.name || "file.zip";
          a.click();
          URL.revokeObjectURL(url);
          toast.success(`${message.file.name || "ZIP"} yuklab olindi`);
          return;
        }
        const entries = [];
        for (const p of Object.keys(zip.files)) {
          const entry = zip.files[p];
          const name = p.split("/").pop();
          if (!entry.dir && name) {
            const fileBlob = await entry.async("blob");
            entries.push({ name, blob: fileBlob });
          }
        }
        setViewerZipEntries(entries);
        setViewerFileType("application/zip");
        setViewerSelectedFile(null);
        setViewerDocxHtml(null);
        setViewerFromZip(false);
        setViewerOpen(true);
        return;
      }

      if (fileName.endsWith(".pdf")) {
        const pdfBlob = new Blob([blob], { type: "application/pdf" });
        const url = URL.createObjectURL(pdfBlob);
        setViewerSelectedFile(pdfBlob);
        setViewerFileUrl(url);
        setViewerFileType("application/pdf");
        setViewerDocxHtml(null);
        setViewerOpen(true);
        return;
      }

      const isDocx = fileName.endsWith(".docx");
      const isDoc = fileName.endsWith(".doc");
      if (isDocx || isDoc) {
        setViewerSelectedFile(blob);
        setViewerFileType(
          isDocx
            ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            : "application/msword",
        );
        setViewerDocxHtml(null);
        setViewerOpen(true);
        return;
      }

      if (needDownload && !blob) {
        setViewerError("Fayl yuklanmadi");
      }
    } catch (err) {
      console.error("Viewer open error", err);
      setViewerLoading(false);
      setViewerError("Faylni ochishda xatolik yuz berdi");
    }
  };

  const openZipEntry = async (entry) => {
    const isPdf = entry.name.endsWith(".pdf");
    const mime = isPdf
      ? "application/pdf"
      : entry.name.endsWith(".doc")
        ? "application/msword"
        : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    const finalBlob = isPdf
      ? new Blob([entry.blob], { type: "application/pdf" })
      : entry.blob;
    if (isPdf) {
      if (viewerFileUrl) URL.revokeObjectURL(viewerFileUrl);
      const url = URL.createObjectURL(finalBlob);
      setViewerFileUrl(url);
    } else {
      setViewerFileUrl(null);
    }

    setViewerSelectedFile(finalBlob);
    setViewerFileType(mime);
    setViewerDocxHtml(null);
    setViewerFromZip(true);
  };

  const downloadZipEntry = (entry) => {
    const url = URL.createObjectURL(entry.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = entry.name || "file";
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`${entry.name} yuklab olindi`);
  };

  const backToZipList = () => {
    if (viewerFileUrl) {
      URL.revokeObjectURL(viewerFileUrl);
      setViewerFileUrl(null);
    }
    setViewerSelectedFile(null);
    setViewerDocxHtml(null);
    setViewerFileType("application/zip");
    setViewerFromZip(false);
  };

  const handlePrint = async () => {
    if (isPrinting) return;
    setIsPrinting(true);
    try {
      if (viewerFileType === "application/pdf" && viewerFileUrl) {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = viewerFileUrl;
        document.body.appendChild(iframe);
        iframe.onload = () => {
          iframe.contentWindow.print();
          setTimeout(() => {
            document.body.removeChild(iframe);
            setIsPrinting(false);
          }, 1000);
        };
      } else if (docxContainerRef.current) {
        const container = docxContainerRef.current;
        const sections = container.querySelectorAll("section.docx");

        if (sections.length === 0) {
          toast.error("Hujjat tarkibi topilmadi");
          setIsPrinting(false);
          return;
        }

        const images = [];
        for (const section of sections) {
          const canvas = await html2canvas(section, {
            scale: 3,
            useCORS: true,
            logging: false,
            backgroundColor: "#ffffff",
            onclone: (clonedDoc) => {
              const tables = clonedDoc.querySelectorAll("table");
              tables.forEach((table) => {
                table.style.borderCollapse = "collapse";
                table.querySelectorAll("td, th").forEach((cell) => {
                  cell.style.boxSizing = "border-box";
                });
              });
            },
          });
          images.push(canvas.toDataURL("image/png"));
        }

        setPrintImages(images);

        setTimeout(() => {
          handleReactToPrint();
          setIsPrinting(false);
        }, 800);
      }
    } catch (e) {
      toast.error("Chop etishda xatolik yuz berdi");
      setIsPrinting(false);
    }
  };

  const handleCloseViewer = () => {
    if (viewerFileUrl) {
      URL.revokeObjectURL(viewerFileUrl);
      setViewerFileUrl(null);
    }
    setViewerOpen(false);
    setViewerSelectedFile(null);
    setViewerFileType(null);
    setViewerFromZip(false);
    setViewerLoading(false);
    setViewerLoadProgress(0);
    setViewerLoadingFileName("");
  };

  const getAllChat = async (newItem) => {
    try {
      let res;
      if (newItem) {
        res = newItem;
      } else {
        const apiRes = await sendRpcRequest(
          stRef,
          METHOD.CHAT_GET_CONVERSATION,
          {},
        );
        if (apiRes.status !== METHOD.OK) return;
        res = apiRes;
      }

      const groupsData = Array.from(
        new Map(
          res[1]
            .filter((item) => item[1] === 2)
            .map((item) => [
              formatBufferToId(item._id),
              {
                id: formatBufferToId(item._id),
                name: item[3],
                last: "",
                unread: 0,
                otherMembers:
                  item.otherMembers.map((member) => ({
                    ...member,
                    id: formatBufferToId(member._id),
                    user: member.user_info
                      ? {
                          id: formatBufferToId(member.user_info._id),
                          name:
                            member.user_info.field4[1] +
                            " " +
                            member.user_info.field4[2],
                          partname: member.user_info.field4[3],
                        }
                      : null,
                  })) || [],
              },
            ]),
        ).values(),
      );

      setGroupDataOne(groupsData);

      const usersData = Array.from(
        new Map(
          res[1]
            .filter(
              (item) =>
                item[1] === 1 &&
                item.otherMembers?.[0]?.user_info &&
                !(
                  item.otherMembers[0]?.user_info?.field4?.[1] === "user" &&
                  item.otherMembers[0]?.user_info?.field4?.[2] === "user"
                ),
            )
            .map((item) => {
              const userId = formatBufferToId(item.otherMembers[0]?.[1]);

              return [
                userId,
                {
                  id: userId,
                  id2: formatBufferToId(item.otherMembers[0]?.[2]),
                  userId,
                  name:
                    item.otherMembers[0]?.user_info.field4[1] +
                    " " +
                    item.otherMembers[0]?.user_info.field4[2],
                  partname: item.otherMembers[0]?.user_info.field4[3],
                  phone: item.otherMembers[0]?.user_info.field4[4],
                  avatar: item.otherMembers[0]?.user_info.field4[5],
                  last: "",
                  unread: 0,
                  status: false,
                },
              ];
            }),
        ).values(),
      );

      const channelData = Array.from(
        new Map(
          res[1]
            .filter((item) => item[1] === 3)
            .map((item) => [
              formatBufferToId(item._id),
              {
                id: formatBufferToId(item._id),
                name: item[3],
                last: "",
                unread: 0,
              },
            ]),
        ).values(),
      );

      setChannels(channelData);
      setUserAll(usersData);
      setGroupAll(res[1]);
      setGroups(groupsData);
      setChats(res[1]);
      if (usersData?.length > 0 && !selected) {
        selectConversation(usersData[0], { resetUnread: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const renderDocx = async () => {
      const isWordDoc =
        viewerFileType ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        viewerFileType === "application/msword";
      if (viewerSelectedFile && isWordDoc) {
        try {
          const buffer = await viewerSelectedFile.arrayBuffer();
          if (docxContainerRef.current) {
            docxContainerRef.current.innerHTML = "";
            await renderAsync(buffer, docxContainerRef.current, null, {
              className: "docx",
              inWrapper: true,
              ignoreWidth: false,
              ignoreHeight: false,
              ignoreFonts: false,
              breakPages: true,
              ignoreLastRenderedPageBreak: false,
              experimental: true,
              renderHeaders: true,
              renderFooters: true,
              renderFootnotes: true,
              renderEndnotes: true,
              renderComments: false,
              useBase64URL: true,
            });
            await applyDocxBackgroundImage(buffer, docxContainerRef.current);
            normalizeDocxSpans(docxContainerRef.current);
            const rawHtml = docxContainerRef.current.innerHTML;
            docxContainerRef.current.innerHTML = DOMPurify.sanitize(rawHtml, {
              USE_PROFILES: { html: true },
            });
            setViewerDocxHtml(docxContainerRef.current.innerHTML);
          }
        } catch (e) {
          setViewerError(
            "Word faylini ochishda xatolik. Iltimos .docx formatida yuboring.",
          );
        }
      }
    };
    renderDocx();
  }, [viewerSelectedFile, viewerFileType]);

  const formatBufferToId = (data) => {
    if (!data) return null;
    const bufferArray = data.buffer
      ? Object.values(data.buffer)
      : Object.values(data);

    return bufferArray
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("");
  };

  useEffect(() => {
    chatHandlersRef.current = {
      getTime,
      formatBufferToId,
      downloadFileAll,
      getAllChat,
      getMsg,
      setMessages,
      setUserAll,
      setGroups,
      setChannels,
      setSelected,
      updateLastActivity,
      setUnreadCounts,
      persistUnreadCounts,
      selectConversation,
    };
  });

  useEffect(() => {
    const param = (p, key) => p?.[key] ?? p?.[String(key)];
    const toId = (val, h) => {
      if (val == null) return "";
      if (typeof val === "string" || typeof val === "number")
        return String(val);
      try {
        return h.formatBufferToId(val) || "";
      } catch {
        return String(val);
      }
    };

    const handleZirhData = async (data) => {
      if (!data.params) return;
      const h = chatHandlersRef.current;
      if (!h?.setMessages || !h.getTime || !h.formatBufferToId) return;

      const p = data.params;
      const userId = userRef.current?.id;
      const currentConvId =
        currentConvIdRef.current ||
        (typeof localStorage !== "undefined"
          ? localStorage.getItem(CHAT_CURRENT_CONV_ID_KEY) || ""
          : "");

      if (data.methodId === METHOD.CHAT_SEND_MSG_SERVER) {
        const rawConvId = param(p, 1);
        const rawSenderId = param(p, 2);
        const incomingConvId = toId(rawConvId, h);
        const senderId = toId(rawSenderId, h);
        const isEdit = !!param(p, 6);
        const isCurrentConversation =
          currentConvId &&
          (String(incomingConvId) === String(currentConvId) ||
            String(senderId) === String(currentConvId));

        if (currentConvId && h.getMsg) {
          scrollTypeRef.current = "initial";
          h.getMsg(currentConvId)
            .then(() => {
              setTimeout(() => {
                const el = scrollContainerRef.current;
                if (el) {
                  el.scrollTop = el.scrollHeight;
                  requestAnimationFrame(() => {
                    el.scrollTop = el.scrollHeight;
                  });
                }
                bottomRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 350);
            })
            .catch(() => {});
        }

        const content = param(p, 3) || {};
        const rawMsgId = p._id ?? data.params._id ?? data._id;
        const messageId = toId(rawMsgId, h);
        const convIdForMessage =
          currentConvId &&
          (String(incomingConvId) === String(currentConvId)
            ? incomingConvId
            : currentConvId);
        const replyRaw = param(p, 4);
        const replyToId = replyRaw ? toId(replyRaw, h) : null;
        const contentType = content[1] ?? content["1"];
        const contentText = content[2] ?? content["2"];
        const contentFile = content[3] ?? content["3"];
        const isOwnMessage = userId && String(senderId) === String(userId);
        const message = {
          id: messageId || "tmp-" + Date.now(),
          id2: convIdForMessage || incomingConvId,
          id3: senderId,
          type: contentType === 1 ? "text" : "file",
          time: h.getTime(messageId) || new Date().toISOString(),
          sender: isOwnMessage ? "me" : senderId,
          text: contentText,
          replyToId,
          file: {
            id: contentFile?.[1] ?? contentFile?.["1"],
            name: contentFile?.[2] ?? contentFile?.["2"],
            size: contentFile?.[3] ?? contentFile?.["3"] ?? 5 * 1024 * 1024,
            mime: "application/pdf",
            url: null,
          },
          read: false,
          progress: 0,
          status: "done",
          edited: isEdit,
        };

        if (!isEdit && isCurrentConversation && currentConvId) {
          (async () => {
            const incomingFileName = message.file?.name || "";
            const isImage =
              incomingFileName.endsWith(".jpg") ||
              incomingFileName.endsWith(".jpeg") ||
              incomingFileName.endsWith(".png");
            let msgToAdd = message;
            if (isImage && message.file.id && h.downloadFileAll) {
              try {
                const origId = message.file.id;
                const blob = await h.downloadFileAll(
                  message.file.id,
                  message.file.name || "image.png",
                  message.file.size,
                );
                msgToAdd = {
                  ...message,
                  file: {
                    ...message.file,
                    serverId: origId,
                    id: blob ? URL.createObjectURL(blob) : origId,
                  },
                };
              } catch (_) {}
            }
            const msgIdStr = String(msgToAdd.id || "");
            h.setMessages((s) => {
              if (msgIdStr && s.some((m) => String(m.id) === msgIdStr))
                return s;
              return [...s, msgToAdd];
            });
          })();
        }

        if (!isCurrentConversation) return;

        const incomingFileName = message.file?.name || "";
        const isImage =
          incomingFileName.endsWith(".jpg") ||
          incomingFileName.endsWith(".jpeg") ||
          incomingFileName.endsWith(".png");
        if (isImage && message.file.id && h.downloadFileAll) {
          try {
            const origId = message.file.id;
            const blob = await h.downloadFileAll(
              message.file.id,
              message.file.name || "image.png",
              message.file.size,
            );
            message.file.serverId = origId;
            message.file.id = blob ? URL.createObjectURL(blob) : origId;
          } catch (_) {}
        }
        if (isEdit && messageId) {
          h.setMessages((prev) =>
            prev.map((m) =>
              String(m.id) === String(messageId)
                ? {
                    ...m,
                    text: message.text,
                    type: message.type,
                    file: message.file,
                    replyToId: message.replyToId,
                    edited: true,
                  }
                : m,
            ),
          );
        }
      } else if (data.methodId === METHOD.CHAT_MSG_CONV) {
        const tpe = data?.params[1].value;
        const members = data?.params?.otherMembers;
        if (!Array.isArray(members)) return;
        members.forEach((member) => {
          const type = tpe;
          if (type === 1 && member.user_info) {
            const uid = h.formatBufferToId(member?.[1]);
            const userObj = {
              id: uid,
              id2: h.formatBufferToId(member[2]),
              userId: uid,
              name:
                member.user_info.field4?.[1] +
                " " +
                member.user_info.field4?.[2],
              partname: member.user_info.field4?.[3],
              phone: member.user_info.field4?.[4],
              avatar: member.user_info.field4?.[5],
              last: "",
              unread: 0,
              status: false,
            };
            h.setUserAll((prev) => {
              if (prev.some((u) => u.id === userObj.id)) return prev;
              return [userObj, ...prev];
            });
            h.updateLastActivity(uid);
            h.selectConversation(userObj);
          } else if (type === 2) {
            const groupId = h.formatBufferToId(member._id || member[1]);
            const group = {
              id: groupId,
              name: member?.[4] || "Yangi guruh",
              last: "",
              unread: 0,
            };
            h.setGroups((prev) => {
              if (prev.some((g) => g.id === group.id)) return prev;
              return [group, ...prev];
            });
            h.updateLastActivity(groupId);
          } else if (type === 3) {
            const channelId = h.formatBufferToId(member._id || member[1]);
            const channel = {
              id: channelId,
              name: member?.[4] || "Yangi kanal",
              last: "",
              unread: 0,
            };
            h.setChannels((prev) => {
              if (prev.some((c) => c.id === channel.id)) return prev;
              return [channel, ...prev];
            });
            h.updateLastActivity(channelId);
          }
        });
      } else if (data.methodId === METHOD.CHAT_MSG_VIEW) {
        const rawViewedId = data?.params?.[3] ?? data?.params?.["3"];
        const viewedConvId =
          rawViewedId == null
            ? null
            : typeof rawViewedId === "object"
              ? h.formatBufferToId(rawViewedId)
              : String(rawViewedId);
        if (viewedConvId) {
          h.setMessages((prev) => {
            let changed = false;
            const next = prev.map((msg) => {
              if (!msg.read && msg.sender !== "me") {
                changed = true;
                return { ...msg, read: true };
              }
              return msg;
            });
            return changed ? next : prev;
          });
        }
      } else if (data.methodId === METHOD.CHAT_USER_STATUS) {
        const rawUserId = String(
          data?.params?.["1"] ?? data?.params?.[1] ?? "",
        ).trim();
        const rawStatus = data?.params?.["2"] ?? data?.params?.[2];
        h.setUserAll((prev) =>
          prev.map((u) =>
            String(u.id2 || "") === rawUserId ? { ...u, status: rawStatus } : u,
          ),
        );
        h.setSelected((prev) => {
          if (!prev || String(prev.id2 || "") !== rawUserId) return prev;
          return { ...prev, status: rawStatus };
        });
      } else if (data.methodId === METHOD.CHAT_MSG_CONV_FULL) {
        if (h.getAllChat) h.getAllChat(data.params);
      } else if (data.methodId === METHOD.CHAT_GET_MSG_PUSH) {
        console.log(data);
      }
    };

    const unsub = addZirhListener(handleZirhData);
    return () => unsub();
  }, [addZirhListener]);

  function bufferToObjectId(bufferObj) {
    const bytes = Object.values(bufferObj);
    return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const resU = await sendRpcRequest(stRef, METHOD.USER_GET, {});
        if (resU.status === METHOD.OK) {
          resU[1].id = formatBufferToId(resU[1]._id);
          const full_name = resU[1]?.[4]?.[1] + " " + resU[1]?.[4]?.[2];
          setFullName(full_name);
          let avatar = null;
          let url = null;
          if (resU[1]?.[4]?.[5]?.[1]?.length > 10 && resU[1]?.[4]?.[5]?.[2]) {
            avatar = await downloadFileAll(
              resU[1]?.[4]?.[5]?.[1],
              "avatar.png",
              resU[1]?.[4]?.[5]?.[2],
            );
            url = URL.createObjectURL(avatar);
          } else {
            url = "../assets/images/avatar/avatar1.png";
          }
          resU[1].avatarUrl = url;
          setUser(resU[1]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    getAllChat();
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      try {
        localStorage.removeItem(CHAT_CURRENT_CONV_ID_KEY);
      } catch (_) {}
    };
  }, []);

  const createGroup = async () => {
    try {
      if (!groupName.trim()) return toast.error("Guruh nomi kiriting");
      const payload = {
        1: channelOpen ? 3 : 2,
        2: user.id,
        3: groupName,
      };

      const res = await sendRpcRequest(stRef, METHOD.CHAT_CREATE_CONV, payload);

      if (res.status === METHOD.OK) {
        toast.success("Guruh yaratildi");
        setGroupName("");
        getAllChat();
        setShowModal(false);
      } else {
        toast.error("Guruh yaratishda xatolik");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateGroup = async () => {
    try {
      const payload = {
        1: groupId,
        2: groupName,
      };
      const res = await sendRpcRequest(stRef, METHOD.CHAT_UPDATE_CONV, payload);
      if (res.status === METHOD.OK) {
        toast.success("Guruh tahrirlandi");
        getAllChat();
        setGroupName("");
        setShowModal(false);
        setIsUpdateGroup(false);
      } else {
        toast.error("Guruh tahrirlashda xatolik");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen1(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const addMember = async () => {
    try {
      const payload = {
        1: groupId,
        2: userId,
        3: 2,
      };
      if (groupId == null) return;
      const res = await sendRpcRequest(stRef, METHOD.CHAT_ADD_USER, payload);
      if (res.status === METHOD.OK) {
        toast.success("A'zo qo'shildi");
        setAddModal(false);
      } else {
        toast.error("A'zo qo'shishda xatolik");
      }
      getAllChat();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const res = await sendRpcRequest(stRef, METHOD.USER_GET_FULL, {});
        if (res.status === METHOD.OK) {
          const mappedItems = await Promise.all(
            res[1].map(async (user, index) => {
              const info = user["4"] || [];

              return {
                id: bufferToObjectId(user._id?.buffer),
                email: user["1"] || "",
                role: user["3"] || "",
                department: info[0] || "",
                surname: info[1] || "",
                name: info[2] || "",
                partName: info[3] || "",
                phone: info[4] || "",
                avatar: info[5] || "",
              };
            }),
          );

          setItems(mappedItems);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllUser();
  }, []);

  const getUser = (item) => {
    if (!item || !Array.isArray(item)) return [];

    return item.map((user) => ({
      value: user.id,
      label: `${user.surname} ${user.name}`,
    }));
  };

  const editGroup = () => {
    try {
      setIsUpdateGroup(true);
      setOpen1(false);
      setGroupName(singleGroup.name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleControllerChange = (selectedOptions) => {
    setUserId(selectedOptions.value);
  };

  const handlePrivate = (item) => async () => {
    console.log(item);
    try {
      const res = await sendRpcRequest(stRef, METHOD.CHAT_PRIVATE_MSG_CREATE, {
        1: item,
      });
      if (res.status === METHOD.OK) {
        toast.success("Muffaqiyatli qo'shildi");
        setPrivateId(null);
        setUserEmail("");
        setAnchorEl(false);
        getAllChat();
      } else {
        toast.error("Xatolik yuz berdi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const normalizeDocxSpans = (container) => {
    if (!container) return;

    const cells = container.querySelectorAll("td");
    cells.forEach((td) => {
      const bgColor = td.style.backgroundColor;
      if (
        bgColor &&
        bgColor !== "transparent" &&
        bgColor !== "white" &&
        bgColor !== "rgb(255, 255, 255)" &&
        bgColor !== "rgba(0, 0, 0, 0)"
      ) {
        td.style.color = "white";
        td.querySelectorAll("p, span, b, strong, i, em").forEach((el) => {
          el.style.color = "white";
        });
      }
    });

    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((p) => {
      const hasInlineFontSize = p.querySelector("[style*='font-size']");
      if (hasInlineFontSize) {
        return;
      }
      const originalBoldNodes = Array.from(p.querySelectorAll("b, strong"));
      const inlineTags = new Set(["b", "strong", "span", "i", "em"]);
      const hasOnlyInlineChildren = Array.from(p.childNodes).every((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          return node.textContent.trim().length === 0;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return true;
        return inlineTags.has(node.tagName.toLowerCase());
      });

      if (
        originalBoldNodes.length === 2 &&
        hasOnlyInlineChildren &&
        (p.textContent || "").trim().length <= 80
      ) {
        const leftText = originalBoldNodes[0].textContent;
        const rightText = originalBoldNodes[1].textContent;
        p.innerHTML = "";
        p.classList.add("docx-tabbed");
        const leftSpan = document.createElement("span");
        leftSpan.className = "docx-tab-left";
        const leftBold = document.createElement("b");
        leftBold.textContent = leftText;
        leftSpan.appendChild(leftBold);
        const rightSpan = document.createElement("span");
        rightSpan.className = "docx-tab-right";
        const rightBold = document.createElement("b");
        rightBold.textContent = rightText;
        rightSpan.appendChild(rightBold);
        p.appendChild(leftSpan);
        p.appendChild(rightSpan);
        return;
      }

      const fragment = document.createDocumentFragment();
      const extraNodes = [];
      let alignOverride = "";
      const pAlign = window.getComputedStyle
        ? window.getComputedStyle(p).textAlign
        : "";
      if (pAlign === "right" || pAlign === "center") {
        return;
      }

      const appendText = (text) => {
        if (!text) return;
        fragment.appendChild(document.createTextNode(text));
      };

      const appendStyled = (text, { bold = false, italic = false } = {}) => {
        if (!text) return;
        let node = document.createTextNode(text);
        if (italic) {
          const i = document.createElement("i");
          i.appendChild(node);
          node = i;
        }
        if (bold) {
          const b = document.createElement("b");
          b.appendChild(node);
          node = b;
        }
        fragment.appendChild(node);
      };

      const updateAlignOverride = (el) => {
        const textAlign =
          el.style?.textAlign ||
          (window.getComputedStyle
            ? window.getComputedStyle(el).textAlign
            : "");
        if (textAlign === "right") {
          alignOverride = "right";
        } else if (!alignOverride && textAlign === "center") {
          alignOverride = "center";
        }
      };

      const walkNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          appendText(node.textContent);
          return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;

        const el = node;
        const tag = el.tagName.toLowerCase();
        updateAlignOverride(el);

        if (tag === "br") {
          return;
        }

        if (tag === "b" || tag === "strong") {
          appendStyled(el.textContent, { bold: true });
          return;
        }

        if (tag === "i" || tag === "em") {
          appendStyled(el.textContent, { italic: true });
          return;
        }

        if (tag === "span") {
          const weight =
            el.style?.fontWeight ||
            (window.getComputedStyle
              ? window.getComputedStyle(el).fontWeight
              : "");
          const isBold = weight === "bold" || Number(weight) >= 600;
          const style =
            el.style?.fontStyle ||
            (window.getComputedStyle
              ? window.getComputedStyle(el).fontStyle
              : "");
          const isItalic = style === "italic" || style === "oblique";
          if (isBold || isItalic) {
            appendStyled(el.textContent, { bold: isBold, italic: isItalic });
          } else {
            el.childNodes.forEach((child) => walkNode(child));
          }
          return;
        }

        extraNodes.push(el.cloneNode(true));
      };

      p.childNodes.forEach((child) => walkNode(child));

      p.innerHTML = "";
      if (alignOverride) {
        p.style.textAlign = alignOverride;
      }

      const fragmentNodes = Array.from(fragment.childNodes);
      const hasElements =
        fragmentNodes.some((n) => n.nodeType === Node.ELEMENT_NODE) ||
        extraNodes.length > 0;
      const textValue = fragmentNodes.map((n) => n.textContent || "").join("");
      const tabParts = textValue
        .split(/\s{2,}/)
        .filter((v) => v.trim().length > 0);

      if (!hasElements && tabParts.length >= 2 && textValue.length <= 120) {
        p.classList.add("docx-tabbed");
        const leftSpan = document.createElement("span");
        leftSpan.className = "docx-tab-left";
        leftSpan.textContent = tabParts[0];
        const rightSpan = document.createElement("span");
        rightSpan.className = "docx-tab-right";
        rightSpan.textContent = tabParts[tabParts.length - 1];
        p.appendChild(leftSpan);
        p.appendChild(rightSpan);
      } else {
        if (fragment.childNodes.length > 0) {
          const pre = document.createElement("pre");
          pre.className = "docx-pre";
          pre.appendChild(fragment);
          p.appendChild(pre);
        }
        extraNodes.forEach((node) => p.appendChild(node));
      }
    });
  };

  const applyDocxBackgroundImage = async (buffer, container) => {
    try {
      const zip = await JSZip.loadAsync(buffer);
      const parseXml = (xmlText) =>
        new DOMParser().parseFromString(xmlText, "application/xml");

      const findRelId = (xmlDoc) => {
        const fillNodes = [
          ...Array.from(xmlDoc.getElementsByTagName("v:fill")),
          ...Array.from(xmlDoc.getElementsByTagName("fill")),
        ];
        for (const node of fillNodes) {
          const rel =
            node.getAttribute("r:id") ||
            node.getAttribute("r:embed") ||
            node.getAttribute("id");
          if (rel) return rel;
        }
        const imgNodes = [
          ...Array.from(xmlDoc.getElementsByTagName("v:imagedata")),
          ...Array.from(xmlDoc.getElementsByTagName("imagedata")),
        ];
        for (const node of imgNodes) {
          const rel =
            node.getAttribute("r:id") ||
            node.getAttribute("r:embed") ||
            node.getAttribute("id");
          if (rel) return rel;
        }
        return null;
      };

      const getRelTarget = (relsDoc, relId) => {
        const rels = Array.from(relsDoc.getElementsByTagName("Relationship"));
        const rel = rels.find((r) => r.getAttribute("Id") === relId);
        return rel ? rel.getAttribute("Target") : null;
      };

      const normalizeTarget = (target) => {
        if (!target) return null;
        let t = target.replace(/^\/+/, "");
        if (t.startsWith("../")) {
          t = t.replace(/^(\.\.\/)+/, "");
        }
        if (!t.startsWith("word/")) {
          t = `word/${t}`;
        }
        return t;
      };

      let relId = null;
      const headerTargets = [];
      const docXmlFile = zip.file("word/document.xml");
      if (docXmlFile) {
        const docXml = await docXmlFile.async("text");
        relId = findRelId(parseXml(docXml));
      }

      let relsTarget = null;
      if (relId) {
        const relsFile = zip.file("word/_rels/document.xml.rels");
        if (relsFile) {
          const relsXml = await relsFile.async("text");
          relsTarget = getRelTarget(parseXml(relsXml), relId);
        }
      }

      const headerFiles = Object.keys(zip.files).filter((f) =>
        /^word\/header\d+\.xml$/.test(f),
      );
      for (const headerFile of headerFiles) {
        const headerXml = await zip.file(headerFile).async("text");
        const headerRelId = findRelId(parseXml(headerXml));
        if (!headerRelId) continue;
        const relsPath = headerFile.replace(
          /^word\/(.+)\.xml$/,
          "word/_rels/$1.xml.rels",
        );
        const headerRels = zip.file(relsPath);
        if (!headerRels) continue;
        const relsXml = await headerRels.async("text");
        const target = getRelTarget(parseXml(relsXml), headerRelId);
        if (target) headerTargets.push(target);
      }

      const targets =
        headerTargets.length > 0
          ? headerTargets
          : relsTarget
            ? [relsTarget]
            : [];
      if (targets.length === 0) return;

      const urls = [];
      for (const t of targets) {
        const targetPath = normalizeTarget(t);
        if (!targetPath) continue;
        const imageFile = zip.file(targetPath);
        if (!imageFile) continue;
        const blob = await imageFile.async("blob");
        const url = URL.createObjectURL(blob);
        urls.push(url);
      }

      if (urls.length === 0) return;
      if (viewerBackgroundUrlRef.current) {
        URL.revokeObjectURL(viewerBackgroundUrlRef.current);
      }
      viewerBackgroundUrlRef.current = urls[0];

      const sections = Array.from(
        container.querySelectorAll(".docx-wrapper > section, section"),
      );
      if (sections.length === 0) return;

      const applyBackground = (section, url) => {
        if (!section || !url) return;
        if (section.style.backgroundImage) return;
        section.style.backgroundImage = `url(${url})`;
        section.style.backgroundRepeat = "no-repeat";
        section.style.backgroundPosition = "center";
        section.style.backgroundSize = "cover";
      };

      if (urls.length === 1) {
        applyBackground(sections[0], urls[0]);
      } else {
        sections.forEach((section, idx) => {
          const url = urls[Math.min(idx, urls.length - 1)];
          applyBackground(section, url);
        });
      }
    } catch (e) {
      console.log("docx background parse failed", e);
    }
  };

  const closeModal = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setOpenT(false);
  };

  useEffect(() => {
    if (scrollTypeRef.current === "top" || scrollTypeRef.current === "bottom") {
      const _r = setTimeout(() => {
        scrollTypeRef.current = "initial";
      }, 300);
      return () => clearTimeout(_r);
    }

    skipNextScrollRef.current = true;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    const _t = setTimeout(() => {
      skipNextScrollRef.current = false;
    }, 600);
    return () => clearTimeout(_t);
  }, [messages]);

  const sortByLastActivity = (list, getConvId) =>
    [...(list || [])].sort((a, b) => {
      const tsA = lastActivityAt[getConvId(a)] || 0;
      const tsB = lastActivityAt[getConvId(b)] || 0;
      return tsB - tsA;
    });

  const currentGroupMembers = useMemo(() => {
    if (!selected?.id || activeTab === "shaxsiy") return [];
    return groupDataOne?.find((g) => g.id === selected.id)?.otherMembers ?? [];
  }, [groupDataOne, selected?.id, activeTab]);

  const sortedPeople = useMemo(
    () => sortByLastActivity(people, (i) => i?.userId || i?.id),
    [people, lastActivityAt],
  );
  const sortedGroups = useMemo(
    () => sortByLastActivity(groups, (i) => i?.id),
    [groups, lastActivityAt],
  );
  const sortedChannels = useMemo(
    () => sortByLastActivity(channels, (i) => i?.id),
    [channels, lastActivityAt],
  );

  const isRole9Only = user?.[3] === 9;
  const sortedGroupsAndChannels = useMemo(
    () =>
      sortByLastActivity(
        [...(groups || []), ...(channels || [])],
        (i) => i?.id,
      ),
    [groups, channels, lastActivityAt],
  );

  const selectedPerson =
    activeTab === "shaxsiy"
      ? people.find(
          (p) => p.id === selected?.id || p.userId === selected?.userId,
        )
      : null;
  const isSelectedOnline =
    selectedPerson?.status === "online" || selectedPerson?.status === true;
  const selectedStatusLabel = selected
    ? activeTab === "guruh"
      ? "Guruh"
      : activeTab === "kanal"
        ? "Kanal"
        : isSelectedOnline
          ? "Online"
          : "Offline"
    : "Online";

  const senders = [...new Set(messages.map((m) => m.sender))];

  const getUserAvatar = async (id) => {
    if (id === "me") {
      return user.avatar;
    }

    const storageKey = `avatar_${id}`;

    const cachedAvatar = localStorage.getItem(storageKey);
    if (cachedAvatar) {
      return cachedAvatar;
    }

    const res = await sendRpcRequest(stRef, METHOD.USER_GET_PHOTO, { 1: id });

    if (res.status !== METHOD.OK) {
      return "../assets/images/avatar/avatar1.png";
    }

    const foundAvatar = res?.[1]?.[1];
    const foundSize = res?.[1]?.[2];

    if (!foundAvatar || foundAvatar.length < 10) {
      return "../assets/images/avatar/avatar1.png";
    }

    const avatarBlob = await downloadFileAll(
      foundAvatar,
      "avatar.png",
      foundSize,
    );

    const base64Avatar = await blobToBase64(avatarBlob);

    localStorage.setItem(storageKey, base64Avatar);

    return base64Avatar;
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const getUserAvatar1 = async (item) => {
    const avatarUrl1 = await getUserAvatar(item.id2);
    setAvatars((prev) => ({
      ...prev,
      [item.id2]: avatarUrl1,
    }));
    // console.log(avatarUrl1);
  };

  useEffect(() => {
    const loadAvatars = async () => {
      for (const sender of senders) {
        if (sender !== "me" && !avatars[sender]) {
          const avatarUrl = await getUserAvatar(sender);
          setAvatars((prev) => ({
            ...prev,
            [sender]: avatarUrl,
          }));
        }
      }
    };

    loadAvatars();
    // console.log(people)
  }, [messages]);

  useEffect(() => {
    if (activeTab !== "shaxsiy" || !sortedPeople?.length) return;
    let cancelled = false;
    const load = async () => {
      const next = {};
      for (const item of sortedPeople) {
        if (cancelled) return;
        const key = item?.userId || item?.id;
        if (!key || next[key]) continue;
        try {
          const url = await getUserAvatar1(item);
          if (!cancelled) next[key] = url;
        } catch (_) {}
      }
      if (!cancelled) setListAvatars((prev) => ({ ...prev, ...next }));
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [activeTab, sortedPeople]);

  const handleGetUser = async () => {
    try {
      if (!userEmail) return;
      const res = await sendRpcRequest(stRef, METHOD.USER_GET_ID, {
        1: userEmail,
      });
      const user = people.find((item) => item.id2 === formatBufferToId(res[1]));
      if (user) {
        toast.error("Foydalanuvchi allaqachon mavjud");
        return;
      }
      if (res.status === METHOD.OK) {
        setPrivateId(formatBufferToId(res[1]));
      } else {
        setPrivateId("1");
        toast.error("Foydalanuvchi topilmadi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resolveSenderName = (msg) => {
    if (!msg) return "Foydalanuvchi";
    if (msg.sender === "me") return "Siz";
    const senderId = msg.sender;

    const userFromItems = items?.find((u) => u.id === senderId);
    const userFromPeople = people?.find((u) => u.id === senderId);
    const user = userFromItems || userFromPeople;
    if (!user) return "Foydalanuvchi";
    const fullName = [user.surname, user.name].filter(Boolean).join(" ");
    return (
      fullName || user.name || user.partname || user.phone || "Foydalanuvchi"
    );
  };

  const getFullName = (msg) => {
    for (const item of groupDataOne || []) {
      const member = item.otherMembers?.find((m) => m?.user?.id === msg.id3);

      if (member) {
        return member.user.name?.trim() || null;
      }
    }

    return null;
  };

  const scrollToMessage = (messageId) => {
    if (!messageId) return;
    const el = document.querySelector(
      `[data-message-id="${String(messageId)}"]`,
    );
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("message-highlight");
      const bubble = el.querySelector("[data-message-bubble]");
      if (bubble) {
        bubble.classList.add("message-highlight-bubble");
        window.setTimeout(() => {
          bubble.classList.remove("message-highlight-bubble");
        }, 1200);
      }
      window.setTimeout(() => {
        el.classList.remove("message-highlight");
      }, 1200);
    }
  };

  const chatViewUpdate = async (fromMsgId, toMsgId, convId) => {
    try {
      // return
      const res = await sendRpcRequest(stRef, METHOD.CHAT_VIEW_UPDATE, {
        1: fromMsgId,
        2: toMsgId,
        3: convId,
      });

      if (res.status === METHOD.OK) {
        const compareIds = (a, b) => {
          const toComparable = (id) => {
            try {
              const BigIntFn =
                (typeof window !== "undefined" && window["BigInt"]) ||
                (typeof global !== "undefined" && global["BigInt"]) ||
                null;
              if (BigIntFn) {
                if (typeof id === "number") return BigIntFn(id);
                if (/^[0-9]+$/.test(String(id))) return BigIntFn(String(id));
                return BigIntFn("0x" + String(id));
              }
              let s = String(id) || "";
              if (s.startsWith("0x") || s.startsWith("0X")) s = s.slice(2);
              return s.toLowerCase();
            } catch (e) {
              return null;
            }
          };

          const A = toComparable(a);
          const B = toComparable(b);
          if (typeof A === "string" || typeof B === "string") {
            const aStr = String(A || "");
            const bStr = String(B || "");
            if (aStr.length < bStr.length) return -1;
            if (aStr.length > bStr.length) return 1;
            if (aStr < bStr) return -1;
            if (aStr > bStr) return 1;
            return 0;
          }
          if (A < B) return -1;
          if (A > B) return 1;
          return 0;
        };

        console.log("newuser: ", user);
        setMessages((prev) =>
          prev.map((m) => {
            try {
              if (m.sender !== "me" && !m.read) {
                const cmpFrom = compareIds(m.id, fromMsgId);
                const cmpTo = compareIds(m.id, toMsgId);
                if (
                  (cmpFrom === 0 || cmpFrom === 1) &&
                  (cmpTo === 0 || cmpTo === -1)
                ) {
                  // console.log("testatad")
                  return { ...m, read: true };
                }
              }
            } catch (e) {
              console.log(e);
            }
            return m;
          }),
        );
        setUnreadCounts((prev) => {
          const next = { ...prev, [convId]: 0 };
          persistUnreadCounts(next);
          return next;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!selected || !messages.length || !user || !convId) return;

    const unreadMessages = messages.filter(
      (m) => m.read === false && m.sender !== "me",
    );

    if (unreadMessages.length === 0) return;

    const compareIds = (a, b) => {
      const toComparable = (id) => {
        try {
          const BigIntFn =
            (typeof window !== "undefined" && window["BigInt"]) ||
            (typeof global !== "undefined" && global["BigInt"]) ||
            null;
          if (BigIntFn) {
            if (typeof id === "number") return BigIntFn(id);
            if (/^[0-9]+$/.test(String(id))) return BigIntFn(String(id));
            return BigIntFn("0x" + String(id));
          }
          let s = String(id) || "";
          if (s.startsWith("0x") || s.startsWith("0X")) s = s.slice(2);
          return s.toLowerCase();
        } catch (e) {
          return null;
        }
      };

      const A = toComparable(a);
      const B = toComparable(b);
      if (typeof A === "string" || typeof B === "string") {
        const aStr = String(A || "");
        const bStr = String(B || "");
        if (aStr.length < bStr.length) return -1;
        if (aStr.length > bStr.length) return 1;
        if (aStr < bStr) return -1;
        if (aStr > bStr) return 1;
        return 0;
      }
      if (A < B) return -1;
      if (A > B) return 1;
      return 0;
    };

    unreadMessages.sort((a, b) => compareIds(a.id, b.id));

    const fromMsgId = unreadMessages[0].id;
    const toMsgId = unreadMessages[unreadMessages.length - 1].id;

    const viewKey = `${fromMsgId}-${toMsgId}-${convId}`;
    if (lastChatViewUpdateRef.current === viewKey) return;
    lastChatViewUpdateRef.current = viewKey;

    chatViewUpdate(fromMsgId, toMsgId, convId);
  }, [messages, selected, user, convId]);

  const handleChatScroll = (e) => {
    if (skipNextScrollRef.current) {
      skipNextScrollRef.current = false;
      return;
    }

    const element = e.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;
    const prevScrollTop = scrollTop;
    const prevScrollHeight = scrollHeight;

    isUserScrollingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isUserScrollingRef.current = false;

      const now = Date.now();
      if (now - lastScrollCallRef.current < 1200) return;

      if (messages.length === countD) {
        return;
      }

      if (scrollTop === 0) {
        scrollTypeRef.current = "top";
        lastScrollCallRef.current = now;
        chatScrollToTop(prevScrollHeight, prevScrollTop);
      }

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        scrollTypeRef.current = "bottom";
        lastScrollCallRef.current = now;
        chatScrollToBottom();
      }
    }, 150);
  };

  const chatScrollToTop = async (prevScrollHeight = 0, prevScrollTop = 0) => {
    const msgId = messages[0]?.id;
    if (!msgId || !convId) return;
    await getMsg(convId, msgId, true);

    const container = scrollContainerRef.current;
    if (!container) return;

    const adjust = () => {
      const newScrollHeight = container.scrollHeight;
      if (newScrollHeight > prevScrollHeight) {
        container.scrollTop =
          newScrollHeight - prevScrollHeight + prevScrollTop;
        return;
      }
      requestAnimationFrame(adjust);
    };
    requestAnimationFrame(adjust);
  };

  const chatScrollToBottom = () => {
    const msgId = messages[messages.length - 1]?.id;
    if (!msgId || !convId) return;
    getMsg(convId, msgId);
  };

  const deleteChatUser = async (user) => {
    const tasdiq = window.confirm("Haqiqatdan ham o'chirmoqchimisiz?");
    if (!tasdiq) return;
    try {
      const deleteUser = await sendRpcRequest(stRef, METHOD.CHAT_DELETE_USER, {
        1: user.id,
        2: user?.user?.id,
      });
      if (deleteUser.status === METHOD.OK) {
        const deletedUserId = user?.user?.id ?? user.id;
        setGroupDataOne((prev) =>
          prev.map((g) =>
            g.id === groupId
              ? {
                  ...g,
                  otherMembers: (g.otherMembers || []).filter(
                    (m) =>
                      m.id !== deletedUserId && m?.user?.id !== deletedUserId,
                  ),
                }
              : g,
          ),
        );
        toast.success("Foydalanuvchi o'chirildi");
        await getAllChat();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCorpUser = async () => {
    try {
      const surnameSanitized = corpSurname
        .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\u02BC\u02B9\u2018\u2019' -]/g, "")
        .trim();
      const emailTrimmed = corpEmail.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!surnameSanitized) {
        toast.error("Familiyani faqat harflar bilan kiriting");
        return;
      }
      if (!emailRegex.test(emailTrimmed)) {
        toast.error("To'g'ri email kiriting");
        return;
      }

      const res = await sendRpcRequest(stRef, METHOD.USER_CREATE_ORG, {
        1: surnameSanitized,
        2: corpName,
        3: corpPartName,
        4: emailTrimmed,
      });
      if (res.status === METHOD.OK) {
        const userId = formatBufferToId(res[1]);
        const payload = {
          1: groupId,
          2: userId,
          3: 2,
        };
        if (groupId == null) {
          toast.error("Foydalanuvchi qo'shish uchun guruhni tanlang");
          return;
        }
        const res1 = await sendRpcRequest(stRef, METHOD.CHAT_ADD_USER, payload);

        if (res1.status === METHOD.OK) {
          toast.success("Foydalanuvchi muvaffaqiyatli qo'shildi");
          setAddCorpUserModal(false);
          setCorpSurname("");
          setCorpName("");
          setCorpPartName("");
          setCorpEmail("");
          setItems((prev) => [
            ...prev,
            {
              id: userId,
              email: emailTrimmed,
              role: "",
              department: "",
              surname: surnameSanitized,
              name: corpName,
              partName: corpPartName,
              phone: "",
              avatar: "",
            },
          ]);
          const newMemberName = [surnameSanitized, corpName]
            .filter(Boolean)
            .join(" ");
          setGroupDataOne((prev) =>
            prev.map((g) =>
              g.id === groupId
                ? {
                    ...g,
                    otherMembers: [
                      ...(g.otherMembers || []),
                      {
                        id: userId,
                        user: {
                          id: userId,
                          name: newMemberName || "Foydalanuvchi",
                          partname: corpPartName,
                        },
                      },
                    ],
                  }
                : g,
            ),
          );
          await getAllChat();
        } else {
          toast.error("Foydalanuvchi qo'shishda xatolik yuz berdi!");
        }
      } else {
        toast.error("Foydalanuvchi qo'shishda xatolik yuz berdi!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openAddCorpUserModal = () => {
    setCorpSurname("");
    setCorpName("");
    setCorpPartName("");
    setCorpEmail("");
    setAddCorpUserModal(true);
  };

  const handleChatUserPrivite = async (item) => {
    if (user?.[3] !== 8) return;

    const checkChatUser = people.find((u) => u.id2 == item.user.id);

    if (!checkChatUser) {
      try {
        const res = await sendRpcRequest(
          stRef,
          METHOD.CHAT_PRIVATE_MSG_CREATE,
          {
            1: item.user.id,
          },
        );
        if (res.status === METHOD.OK) {
          toast.success("Chat qo'shildi");
        } else {
          toast.error("Xatolik yuz berdi");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setActiveTab("shaxsiy");
      setAddCorpUserModal(false);
      selectConversation(checkChatUser);
    }
  };
  return (
    <>
      {openT && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

          {/* modal box */}
          <div className="relative z-10 w-[60vw] h-[95vh] bg-white rounded-xl shadow-xl overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h2 className="font-semibold text-gray-700">Fayl ko‘rish</h2>

              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                ✕
              </button>
            </div>

            {previewUrl && (
              <object
                data={previewUrl}
                type="application/pdf"
                className="w-full h-full"
                onContextMenu={(e) => e.preventDefault()}
              >
                <p>Fayl ochilmadi</p>
              </object>
            )}
          </div>
        </div>
      )}
      {(showModal || channelOpen || isUpdateGroup) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl w-[90%] max-w-md p-6">
            <h2 className="text-lg font-semibold mb-4">
              {isUpdateGroup
                ? "Tahrirlash"
                : channelOpen
                  ? "Kanal nomini kiriting"
                  : "Guruh nomini kiriting"}
            </h2>

            <input
              type="text"
              placeholder={
                isUpdateGroup
                  ? "Tahrirlash"
                  : channelOpen
                    ? "Kanal nomini kiriting"
                    : "Guruh nomini kiriting"
              }
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setChannelOpen(false);
                  setIsUpdateGroup(false);
                }}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Bekor qilish
              </button>
              {isUpdateGroup ? (
                <button
                  onClick={updateGroup}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Tahrirlash
                </button>
              ) : (
                <button
                  onClick={createGroup}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Yaratish
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {forwardContextMenu.message && (
        <div
          className="fixed z-[100] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 py-1 min-w-[140px]"
          style={{ left: forwardContextMenu.x, top: forwardContextMenu.y }}
        >
          <button
            type="button"
            onClick={handleForwardClick}
            className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-sm"
          >
            <iconify-icon icon="mdi:forward" width="18" height="18" />
            Xabarni uzatish
          </button>
          {forwardContextMenu.message?.type !== "file" &&
            forwardContextMenu.message?.sender === "me" && (
              <button
                onClick={() => handleEditMessage(forwardContextMenu.message)}
                className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-sm"
              >
                <iconify-icon icon="mdi:pencil" width="18" height="18" />
                Tahrirlash
              </button>
            )}
        </div>
      )}

      {forwardMessage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setForwardMessage(null)}
          role="presentation"
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl w-[90%] max-w-md max-h-[80vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold p-4 border-b dark:border-gray-700">
              Xabarni uzatish
            </h2>
            <div className="overflow-y-auto flex-1 p-2">
              {[
                { tab: "shaxsiy", label: "Shaxsiy", list: sortedPeople },
                { tab: "guruh", label: "Guruh", list: sortedGroups },
                { tab: "kanal", label: "Kanal", list: sortedChannels },
              ].map(({ tab, label, list }) => (
                <div key={tab} className="mb-4">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 mb-1">
                    {label}
                  </p>
                  {list?.map((item) => {
                    const targetId =
                      tab === "shaxsiy" ? item?.userId || item?.id : item?.id;
                    const isCurrent = targetId === convId;
                    return (
                      <button
                        key={targetId}
                        type="button"
                        onClick={() => !isCurrent && forwardToChat(targetId)}
                        disabled={isCurrent}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-left ${isCurrent ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <Avatar sx={{ width: 36, height: 36 }} />
                        <span className="font-medium truncate">
                          {item?.name}
                        </span>
                        {isCurrent && (
                          <span className="text-xs text-gray-400">Joriy</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setForwardMessage(null)}
              className="m-4 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}

      {addModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setAddModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl w-[90%] max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">A'zo qo'shish</h2>

            <div className="mb-4">
              <Select
                name="controllers"
                options={getUser(items)}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Foydalanuvchini tanlang..."
                onChange={handleControllerChange}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "transparent",
                    borderColor: "#e2e8f0",
                    borderRadius: "0.375rem",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setAddModal(false);
                }}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Bekor qilish
              </button>
              <button
                onClick={addMember}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#B8956B] text-white font-semibold hover:bg-[#A6855A] transition-colors"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </div>
      )}

      {addCorpUserModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setAddCorpUserModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl w-[90%] max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-600">
              A'zo qo'shish
            </h2>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-600 uppercase tracking-wide">
                Familiya
              </label>
              <input
                type="text"
                value={corpSurname}
                onChange={(e) => setCorpSurname(e.target.value)}
                placeholder="Familiya"
                className="w-full mt-1 px-4 py-2 border border-[#DEC496] rounded-md bg-white placeholder:text-gray-400 focus:outline-none focus:border-[#DEC496] focus:ring-1 focus:ring-[#DEC496] dark:border-gray-600 dark:bg-gray-800 dark:placeholder:text-gray-500 dark:text-white"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-600 uppercase tracking-wide">
                Ism
              </label>
              <input
                type="text"
                value={corpName}
                onChange={(e) => setCorpName(e.target.value)}
                placeholder="Ism"
                className="w-full mt-1 px-4 py-2 border border-[#DEC496] rounded-md bg-white placeholder:text-gray-400 focus:outline-none focus:border-[#DEC496] focus:ring-1 focus:ring-[#DEC496] dark:border-gray-600 dark:bg-gray-800 dark:placeholder:text-gray-500 dark:text-white"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-600 uppercase tracking-wide">
                Otasi
              </label>
              <input
                type="text"
                value={corpPartName}
                onChange={(e) => setCorpPartName(e.target.value)}
                placeholder="Otasini ismi"
                className="w-full mt-1 px-4 py-2 border border-[#DEC496] rounded-md bg-white placeholder:text-gray-400 focus:outline-none focus:border-[#DEC496] focus:ring-1 focus:ring-[#DEC496] dark:border-gray-600 dark:bg-gray-800 dark:placeholder:text-gray-500 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                value={corpEmail}
                onChange={(e) => setCorpEmail(e.target.value)}
                placeholder="Email"
                className="w-full mt-1 px-4 py-2 border border-[#DEC496] rounded-md bg-white placeholder:text-gray-400 focus:outline-none focus:border-[#DEC496] focus:ring-1 focus:ring-[#DEC496] dark:border-gray-600 dark:bg-gray-800 dark:placeholder:text-gray-500 dark:text-white"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setAddCorpUserModal(false)}
                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                Bekor qilish
              </button>
              <button
                onClick={addCorpUser}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#B8956B] text-white font-semibold hover:bg-[#A6855A] transition-colors"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative" ref={dropdownRef}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6"></div>
        <div className="chat-wrapper grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="card border-0 overflow-hidden col-span-12 md:col-span-4 xl:col-span-3 relative">
            <div className="flex items-center justify-between gap-2 px-5 pt-5 pb-4">
              <div className="flex items-center gap-4">
                <div className>
                  <Avatar src={user?.avatarUrl} alt="image" />
                </div>
                <div className>
                  <h6 className="text-base mb-0">{fullName}</h6>
                  <p className="mb-0 text-xs text-blue-400">Online</p>
                </div>
              </div>
              {/* chat-sidebar-single end */}

              <div className="dropdown">
                {(user?.[3] == 1 || user?.[3] == 3) && (
                  <button
                    onClick={() => setOpen(!open)}
                    className="text-neutral-800 dark:text-white"
                    type="button"
                  >
                    <i className="ri-more-2-fill" />
                  </button>
                )}

                {open && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Guruh yaratish
                    </button>

                    <button
                      onClick={() => {
                        setOpen(false);
                        setChannelOpen(true);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Kanal yaratish
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex  overflow-hidden w-full dark:bg-gray-700">
              <TabButtons />
            </div>

            <div className="chat-all-list flex flex-col gap-1.5 mt-3 max-h-[65vh] min-h-[65vh] overflow-y-auto">
              {(activeTab === "shaxsiy"
                ? sortedPeople
                : activeTab === "guruh"
                  ? sortedGroups
                  : sortedChannels
              ).map((item) => {
                const chatId = item?.userId || item?.id;
                const unreadCount = unreadCounts[chatId] || 0;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      selectConversation(item);
                    }}
                    className={`flex items-center justify-between gap-3 rounded-2xl border border-transparent px-4 py-3 transition-all duration-200 hover:bg-[#f6f8fb] hover:shadow-sm dark:hover:bg-[#2b2c40] ${selected?.id === item.id ? "bg-[#eef4ff] border-[#d6e4ff] dark:bg-[#2b3a55] dark:border-[#3a4a68] shadow-sm" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      {activeTab === "shaxsiy" ? (
                        <div className="relative">
                          <Avatar src={avatars[item?.id2]} />
                          {item.status ? (
                            <span className="absolute bottom-0 right-0 w-[8px] h-[8px] rounded-full min-h-[8px] min-w-[8px] bg-blue-500"></span>
                          ) : (
                            ""
                          )}
                        </div>
                      ) : (
                        <Avatar />
                      )}
                      <div className="info">
                        <h6
                          className={`text-base mb-1 line-clamp-1 text-start font-semibold ${selected?.id === item.id ? "text-[#1f2937] dark:text-white" : "text-[#4b5563] dark:text-gray-200"}`}
                        >
                          {item.name}
                        </h6>
                        <p
                          className={`mb-0 text-xs line-clamp-1 ${selected?.id === item.id ? "text-[#4b6cb7] dark:text-[#9bb0ff]" : "text-[#8b95a7] dark:text-gray-400"}`}
                        >
                          {item.last}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-end">
                      <p className="mb-1 text-neutral-400 text-[11px] lh-1">
                        {item.time}
                      </p>
                      {unreadCount > 0 && (
                        <span className="min-w-[20px] h-5 px-1 text-[11px] rounded-full bg-[#2f6fec] text-white inline-flex items-center justify-center font-semibold shadow-sm">
                          {unreadCount > 99 ? "99+" : unreadCount}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {!isRole9Only && (
              <div
                onClick={() => !opens && setAnchorEl(true)}
                className={`
          absolute
          bg-blue-500
          flex items-center justify-center
          transition-all
          duration-300 ease-in-out
          ${
            opens
              ? "w-full h-full bottom-0 right-0 rounded-none bg-white dark:bg-gray-800"
              : "w-12 h-12 bottom-4 right-[-13px] -translate-x-1/2 rounded-full cursor-pointer"
          }
        `}
              >
                <span
                  className={`
            text-3xl font-bold text-white
            transition-opacity duration-200 ease-in-out mb-[5px]
            ${opens ? "opacity-0" : "opacity-100"}
          `}
                >
                  +
                </span>

                <div
                  className={`
            absolute inset-0 p-6
            transition-all duration-300 ease-in-out
            ${
              opens
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAnchorEl(false);
                      setPrivateId(null);
                      setUserEmail("");
                    }}
                    className="absolute top-4 right-4 text-xl dark:text-white font-bold"
                  >
                    ✕
                  </button>

                  <form className="w-full max-w-md mx-auto mt-14 mb-6">
                    <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-1 shadow-sm focus-within:ring-2 overflow-hidden focus-within:ring-blue-500 relative">
                      <input
                        name="userEmail"
                        type="email"
                        placeholder="Emailni kiriting"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 border-none focus:ring-0"
                      />

                      <button
                        type="button"
                        onClick={handleGetUser}
                        className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition duration-200 absolute top-[-.5px] right-[-.5px] bottom-[-.5px]"
                      >
                        <iconify-icon
                          icon="mdi:magnify"
                          width="20"
                          height="20"
                        ></iconify-icon>
                      </button>
                    </div>
                  </form>

                  {privateId && privateId !== "1" && (
                    <MenuItem
                      className="mb-4"
                      onClick={handlePrivate(privateId)}
                    >
                      <Avatar className="mr-5" /> Qo'shish
                    </MenuItem>
                  )}
                  {privateId == 1 && (
                    <MenuItem className="mb-4">
                      Foydalanuvchi topilmadi
                    </MenuItem>
                  )}
                  {!privateId && (
                    <MenuItem className="mb-4">
                      Foydalanuvchini pochta maznilini kiriting
                    </MenuItem>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className=" col-span-12 md:col-span-8 xl:col-span-9">
            <div className="flex w-full ">
              <div className="card border-0 overflow-hidden flex w-full relative">
                <div
                  className={`    transition-all duration-300 ease-in-out
 ${showLeft ? "w-[calc(100%-360px)]" : "w-full"}`}
                >
                  <div className="flex items-center justify-between gap-2  px-6 py-2.5 active border-b border-neutral-200 dark:border-neutral-600">
                    <div className="flex items-center gap-2">
                      <div className="img">
                        {activeTab === "shaxsiy" && (
                          <Avatar src={avatars[selected?.id2]} />
                        )}
                        {activeTab !== "shaxsiy" && (
                          <Avatar>
                            {activeTab === "guruh" ? (
                              <iconify-icon icon="material-symbols:groups" />
                            ) : (
                              <iconify-icon icon="ri:megaphone-fill" />
                            )}
                          </Avatar>
                        )}
                      </div>
                      <div className="info">
                        <h6 className="text-base mb-0">
                          {selected ? selected.name : " "}
                        </h6>
                        {activeTab === "shaxsiy" && (
                          <p
                            className={`mb-0 ${selected?.status ? "text-blue-500" : "text-gray-600"}`}
                          >
                            {selected?.status ? "Online" : "Offline"}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="action inline-flex items-center gap-3">
                      <button
                        onClick={() => setShowLeft(!showLeft)}
                        type="button"
                        className="text-xl text-neutral-600 dark:text-neutral-200"
                      >
                        <iconify-icon icon="material-symbols:dock-to-left-outline" />
                      </button>
                      {(user?.[3] === 1 ||
                        user?.[3] === 3 ||
                        user?.[3] === 8) && (
                        <div className="relative">
                          {activeTab !== "shaxsiy" && (
                            <button
                              onClick={() => setOpen1((prev) => !prev)}
                              className="text-neutral-800 dark:text-white text-xl"
                              type="button"
                            >
                              <i className="ri-more-2-fill" />
                            </button>
                          )}

                          {open1 && (
                            <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                              <ul className="p-2 text-sm text-gray-700 dark:text-gray-200">
                                {(user?.[3] === 1 || user?.[3] === 3) && (
                                  <li>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setOpen1(false);
                                        setAddModal(true);
                                      }}
                                      className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2"
                                    >
                                      <iconify-icon
                                        icon="ic:round-person-add"
                                        width="20"
                                      />
                                      A'zo qo'shish
                                    </button>
                                  </li>
                                )}

                                {(user?.[3] === 1 || user?.[3] === 3) && (
                                  <li>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        editGroup();
                                      }}
                                      className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2"
                                    >
                                      <iconify-icon icon="material-symbols:edit-square-outline" />
                                      Tahrirlash
                                    </button>
                                  </li>
                                )}

                                {(user?.[3] === 1 ||
                                  user?.[3] === 3 ||
                                  user?.[3] === 8) && (
                                  <li>
                                    <button
                                      type="button"
                                      onClick={openAddCorpUserModal}
                                      className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2"
                                    >
                                      <iconify-icon
                                        icon="ic:round-person-add"
                                        width="20"
                                      />
                                      A'zo qo'shish tashkilot
                                    </button>
                                  </li>
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="chat-message-list"
                    onDrop={onDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <div className="chat-message-list-bg"></div>

                    <div
                      ref={scrollContainerRef}
                      className="max-h-[70vh] min-h-[70vh] overflow-y-auto flex flex-col px-6 pt-6 pb-32 gap-6 z-[1] relative"
                      onScroll={handleChatScroll}
                    >
                      {messages.length === 0 && (
                        <p className="text-center pt-[30vh] text-bold">
                          Suhbatni davom ettirish uchun chatni tanlang.
                        </p>
                      )}
                      {(() => {
                        let lastDateKey = null;
                        const messageById = new Map(
                          messages.map((msg) => [msg.id, msg]),
                        );
                        return messages.map((m) => {
                          const dateObj = m.time ? new Date(m.time) : null;
                          const dateKey =
                            dateObj && !Number.isNaN(dateObj.getTime())
                              ? dateObj.toDateString()
                              : null;
                          const dateLabel =
                            dateObj && !Number.isNaN(dateObj.getTime())
                              ? (() => {
                                  const months = [
                                    "yanvar",
                                    "fevral",
                                    "mart",
                                    "aprel",
                                    "may",
                                    "iyun",
                                    "iyul",
                                    "avgust",
                                    "sentabr",
                                    "oktabr",
                                    "noyabr",
                                    "dekabr",
                                  ];
                                  const weekdays = [
                                    "Ya",
                                    "Du",
                                    "Se",
                                    "Ch",
                                    "Pa",
                                    "Ju",
                                    "Sh",
                                  ];
                                  const year = dateObj.getFullYear();
                                  const day = dateObj.getDate();
                                  const monthName = months[dateObj.getMonth()];
                                  const weekday = weekdays[dateObj.getDay()];
                                  return `${year}-yil, ${day}-${monthName}`;
                                })()
                              : "";
                          const timeText =
                            dateObj && !Number.isNaN(dateObj.getTime())
                              ? dateObj.toTimeString().slice(0, 5)
                              : "";
                          const showDate = dateKey && dateKey !== lastDateKey;
                          if (showDate) lastDateKey = dateKey;
                          const replyMessage = m.replyToId
                            ? messageById.get(m.replyToId)
                            : null;
                          const replySender = resolveSenderName(replyMessage);
                          const replyText = replyMessage
                            ? replyMessage.type === "file"
                              ? replyMessage.file?.name || "Fayl"
                              : replyMessage.text
                            : "Javob qilingan xabar";

                          return (
                            <React.Fragment key={m.id}>
                              {showDate && (
                                <div className="w-full flex justify-center">
                                  <span className="px-3 py-1 text-[12px] rounded-full bg-slate-100 text-slate-600 dark:text-slate-600">
                                    {dateLabel}
                                  </span>
                                </div>
                              )}
                              <div
                                data-message-id={m.id}
                                onDoubleClick={() => setReplyTo(m)}
                                onContextMenu={(e) =>
                                  handleMessageContextMenu(e, m)
                                }
                                className={`max-w-[700px] ${m.sender === "me" ? "w-full ms-auto text-white flex justify-end" : "text-neutral-900 flex items-end gap-3"}`}
                              >
                                {m.type === "text" &&
                                  (m.sender === "me" ? (
                                    <>
                                      <div
                                        data-message-bubble
                                        className="bg-[#effdde] rounded-2xl rounded-ee-none p-2 relative min-w-[100px]"
                                        title="Javob berish"
                                      >
                                        {m.replyToId && (
                                          <div
                                            className="mb-1 rounded-md bg-[#def5ce] px-1 py-1 border-l-4 border-[#45a32d] min-w-[200px] cursor-pointer"
                                            role="button"
                                            tabIndex={0}
                                            onClick={() =>
                                              scrollToMessage(m.replyToId)
                                            }
                                          >
                                            <div className="text-[11px] font-semibold text-[#45a32d] dark:text-[#45a32d]">
                                              {replySender}
                                            </div>
                                            <div className="text-[11px] text-gray-800 truncate dark:text-gray-800">
                                              {replyText}
                                            </div>
                                          </div>
                                        )}
                                        <p className="text-gray-600 dark:text-gray-600">
                                          {m.text}
                                        </p>
                                        <div className="flex  items-end gap-0.5">
                                          {m.edited && (
                                            <p className="text-[10px] text-[#45a32d] dark:text-[#45a32d] text-right mr-4">
                                              tahrirlangan
                                            </p>
                                          )}
                                          <p className="text-[11px] text-[#45a32d] dark:text-[#45a32d] text-right mr-4 ">
                                            {timeText}
                                          </p>
                                        </div>
                                        <p className="text-base text-[#45a32d] dark:text-[#45a32d]  text-right absolute bottom-[2px] right-1">
                                          {m.read ? (
                                            <iconify-icon icon="tabler:checks"></iconify-icon>
                                          ) : (
                                            <iconify-icon icon="tabler:check"></iconify-icon>
                                          )}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src={
                                          avatars[m.sender] ||
                                          "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                                        }
                                        alt="image"
                                        className="avatar-lg object-fit-cover rounded-full w-[40px] h-[40px]"
                                      />
                                      <div
                                        data-message-bubble
                                        className="bg-neutral-50 dark:bg-neutral-50 rounded-xl rounded-es-none px-3 py-2 relative min-w-[100px]"
                                        onDoubleClick={() => setReplyTo(m)}
                                        title="Javob berish"
                                      >
                                        {activeTab === "shaxsiy" ? (
                                          <div className="text-xs text-blue-500">
                                            {m.fullName
                                              ? m.fullName
                                              : sGroupUsers.find(
                                                  (u) => u.id === m.id3,
                                                )?.surname +
                                                  " " +
                                                  sGroupUsers.find(
                                                    (u) => u.id === m.id3,
                                                  )?.name ||
                                                "Noma'lum foydalanuvchi"}
                                          </div>
                                        ) : (
                                          <div className="text-xs text-blue-500">
                                            {getFullName(m) ||
                                              "Noma'lum foydalanuvchi"}
                                          </div>
                                        )}
                                        {m.replyToId && (
                                          <div
                                            className="mb-2 rounded-md bg-white dark:bg-white px-2 py-1 border-l-4 border-blue-400 min-w-[200px] cursor-pointer"
                                            role="button"
                                            tabIndex={0}
                                            onClick={() =>
                                              scrollToMessage(m.replyToId)
                                            }
                                          >
                                            <div className="text-[11px] font-semibold text-blue-600">
                                              {replySender}
                                            </div>
                                            <div className="text-[11px] text-neutral-500 truncate">
                                              {replyText}
                                            </div>
                                          </div>
                                        )}
                                        <p className="dark:text-gray-600">
                                          {m.text}
                                        </p>
                                        <div className="flex justify-end gap-1 items-center">
                                          {m.edited && (
                                            <p className="text-[10px] text-neutral-500 dark:text-neutral-500 text-right">
                                              tahrirlangan
                                            </p>
                                          )}
                                          <p className="text-[11px] text-neutral-500 dark:text-neutral-500 text-right">
                                            {timeText}
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  ))}

                                {m.type === "file" && (
                                  <div
                                    className={`flex items-center gap-3 ${m.sender === "me" ? "ms-auto" : ""}`}
                                  >
                                    {m.sender !== "me" && (
                                      <img
                                        src={
                                          avatars[m.sender] ||
                                          "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                                        }
                                        alt="image"
                                        className="avatar-lg object-fit-cover rounded-full w-[40px] h-[40px]"
                                      />
                                    )}

                                    <div className="w-full">
                                      <div
                                        data-message-bubble
                                        onClick={() => openViewer(m)}
                                        role="button"
                                        tabIndex={0}
                                        className={`cursor-pointer ${
                                          m.sender === "me"
                                            ? "bg-[#effdde]"
                                            : "bg-neutral-50"
                                        }  rounded-2xl rounded-es-none p-4 w-full max-w-[520px] relative`}
                                        onDoubleClick={(e) => {
                                          e.stopPropagation();
                                          setReplyTo(m);
                                        }}
                                        title="Javob berish"
                                      >
                                        <span className="text-[12px] text-blue-500">
                                          {getFullName(m)}{" "}
                                        </span>
                                        <div className="flex items-center gap-3">
                                          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                                            {m.status === "uploading" && (
                                              <svg
                                                className="absolute inset-0 w-full h-full animate-spin"
                                                viewBox="0 0 40 40"
                                              >
                                                <circle
                                                  cx="20"
                                                  cy="20"
                                                  r="18"
                                                  stroke="#e2e8f0"
                                                  strokeWidth="5"
                                                  fill="none"
                                                />
                                                <circle
                                                  cx="20"
                                                  cy="20"
                                                  r="18"
                                                  stroke="#3b82f6"
                                                  strokeWidth="3"
                                                  fill="none"
                                                  strokeLinecap="round"
                                                  strokeDasharray={`${
                                                    Math.min(
                                                      100,
                                                      Math.max(
                                                        0,
                                                        Number(m.progress) || 0,
                                                      ),
                                                    ) * 1.13
                                                  } 999`}
                                                  transform="rotate(-90 20 20)"
                                                />
                                              </svg>
                                            )}
                                            {(() => {
                                              const fileName =
                                                m.file?.name || "";
                                              const isImageFile =
                                                /\.(png|jpg|jpeg|gif|bmp|webp)$/i.test(
                                                  fileName,
                                                );
                                              const ext =
                                                fileName
                                                  .split(".")
                                                  .pop()
                                                  ?.toLowerCase() || "file";
                                              if (isImageFile) {
                                                return (
                                                  <i
                                                    className={`${getFileIconClass(m.file.mime, m.file.name)} text-2xl ${
                                                      m.status === "uploading"
                                                        ? "text-blue-500"
                                                        : "text-gray-400"
                                                    }`}
                                                  />
                                                );
                                              }
                                              return (
                                                <span
                                                  className={`relative inline-flex items-center justify-center min-w-[46px] h-[50px] px-2.5 rounded-xl font-semibold text-[11px] lowercase overflow-hidden ${
                                                    m.status === "uploading"
                                                      ? "1"
                                                      : ""
                                                  }`}
                                                >
                                                  {/* Orqa fondagi SVG (folder/file icon) */}
                                                  <svg
                                                    className="absolute inset-0 w-[90%] h-[90%]  pointer-events-none"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      transform: "scale(1.45)",
                                                    }}
                                                  >
                                                    <g fill="#3993fb">
                                                      <path d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2z" />
                                                      <path d="M19 7h-4l-.001-4.001z" />
                                                    </g>
                                                  </svg>
                                                  <span className="relative z-[1] text-white-700 dark:text-gray-200 text-md">
                                                    {ext.length > 4
                                                      ? ext.slice(0, 4)
                                                      : ext}
                                                  </span>
                                                </span>
                                              );
                                            })()}
                                          </div>
                                          <div className="flex-1">
                                            <div className="flex items-center justify-between gap-2">
                                              <div>
                                                <div className="text-sm font-medium line-clamp-1 text-gray-700">
                                                  {m.file.name}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-500">
                                                  {formatBytes(m.file.size)}
                                                </div>
                                              </div>
                                            </div>
                                            {/* <div className="text-xs text-neutral-300 mt-1">
                                              {m.status === "uploading"
                                                ? "Yuklanmoqda..."
                                                : ""}
                                            </div> */}
                                          </div>
                                        </div>
                                        {m.replyToId && (
                                          <div
                                            className={`mt-2 rounded-md px-3 py-2 border-l-4 ${
                                              m.sender === "me"
                                                ? "bg-white/15 border-white/60"
                                                : "bg-white border-blue-400"
                                            }`}
                                          >
                                            <div
                                              className={`text-[11px] font-semibold ${
                                                m.sender === "me"
                                                  ? "text-white/90"
                                                  : "text-blue-600"
                                              }`}
                                            >
                                              {replySender}
                                            </div>
                                            <div
                                              className={`text-[11px] truncate ${
                                                m.sender === "me"
                                                  ? "text-white/80"
                                                  : "text-neutral-500"
                                              }`}
                                            >
                                              {replyText}
                                            </div>
                                          </div>
                                        )}
                                        {m.status === "error" && (
                                          <div className="mt-2 text-red-500 text-sm flex items-center gap-1">
                                            <iconify-icon icon="mdi:alert-circle" />
                                            Yuklab bo‘lmadi
                                          </div>
                                        )}
                                        {m.status === "done" && m.file && (
                                          <div className="mt-3">
                                            {m.file.name?.endsWith(".png") ||
                                            m.file.name?.endsWith(".jpg") ||
                                            m.file.name?.endsWith(".jpeg") ? (
                                              <img
                                                src={m.file.id}
                                                alt={m.file.name}
                                                className="max-w-full rounded"
                                              />
                                            ) : null}
                                          </div>
                                        )}
                                        <p
                                          className={`text-[11px] text-right mr-4 ${
                                            m.sender === "me"
                                              ? "text-[#45a32d]"
                                              : "text-neutral-500 dark:text-neutral-800"
                                          }`}
                                        >
                                          {timeText}
                                        </p>
                                        {m.edited && (
                                          <p
                                            className={`text-[10px] text-right mr-4 mt-0.5 ${
                                              m.sender === "me"
                                                ? "text-[#45a32d]"
                                                : "text-neutral-500 dark:text-neutral-800"
                                            }`}
                                          >
                                            tahrirlangan
                                          </p>
                                        )}
                                        {m.sender === "me" && (
                                          <p className="text-base text-[#45a32d]  mt-1 text-right absolute bottom-0 right-1">
                                            {m.read ? (
                                              <iconify-icon icon="tabler:checks"></iconify-icon>
                                            ) : (
                                              <iconify-icon icon="tabler:check"></iconify-icon>
                                            )}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </React.Fragment>
                          );
                        });
                      })()}
                      <div ref={bottomRef} />
                    </div>
                    <div className="sticky bottom-0 z-10 bg-transparent">
                      {replyTo && (
                        <div className="mx-6 mb-[-14px]  rounded-t-xl mr-[80px] flex items-start justify-between border-t bg-white border-slate-200 bg-transparent px-3 py-2">
                          <div className="flex items-start gap-2 min-w-0">
                            <iconify-icon
                              icon="mdi:reply"
                              className="text-blue-500"
                              width="18"
                              height="18"
                            ></iconify-icon>
                            <div className="min-w-0">
                              <div className="text-[12px] text-blue-600 font-semibold mb-0.5">
                                Reply to{" "}
                                {replyTo.sender === "me"
                                  ? "Siz"
                                  : resolveSenderName?.(replyTo) ||
                                    "Foydalanuvchi"}
                              </div>
                              <div className="text-[12px] text-slate-500 truncate">
                                {replyTo.type === "file"
                                  ? replyTo?.file?.name || "Fayl"
                                  : replyTo.text}
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setReplyTo(null)}
                            className="text-slate-400 hover:text-slate-600"
                            title="Bekor qilish"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                      {editingMessage && (
                        <div className="mx-6 mb-[-14px] rounded-t-xl mr-[80px] flex items-start justify-between border-t bg-white border-slate-200 bg-transparent px-3 py-2">
                          <div className="flex items-start gap-2 min-w-0">
                            <iconify-icon
                              icon="mdi:pencil"
                              className="text-blue-500"
                              width="18"
                              height="18"
                            />
                            <div className="min-w-0">
                              <div className="text-[12px] text-blue-600 font-semibold mb-0.5">
                                Tahrirlash
                              </div>
                              <div className="text-[12px] text-slate-500 truncate">
                                {editingMessage.text?.slice(0, 50)}
                                {editingMessage.text?.length > 50 ? "…" : ""}
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingMessage(null);
                              setText("");
                            }}
                            className="text-slate-400 hover:text-slate-600"
                            title="Bekor qilish"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                      <form
                        onSubmit={onSendText}
                        className="chat-message-box flex items-center gap-3 py-3 mt-auto "
                      >
                        <div
                          className={`flex items-center gap-3 w-full bg-transparent border border-neutral-200 rounded-full px-4 py-2 shadow-sm bg-white ml-6 ${replyTo || editingMessage ? "rounded-b-xl rounded-t-none" : ""}`}
                        >
                          <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            className="border-0 grow bg-transparent focus:border-0 focus:outline-none focus:ring-0 text-sm text-neutral-700 placeholder:text-neutral-400"
                            autoComplete="off"
                            name="chatMessage"
                            placeholder="Xabar kiriting..."
                          />
                          <button
                            type="button"
                            onClick={() =>
                              fileInputRef.current &&
                              fileInputRef.current.click()
                            }
                            className="text-neutral-500 hover:text-neutral-700"
                            title="Attach file"
                          >
                            <i className="ri-attachment-line" />
                          </button>
                        </div>
                        <input
                          ref={fileInputRef}
                          onChange={onFileChange}
                          type="file"
                          accept=".jpg,.png,.jpeg,.doc,.docx,.pdf,.zip,.apk,.ipa"
                          className="hidden"
                        />
                        <button
                          type="submit"
                          className="shrink-0 w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow mr-6"
                          title="Yuborish"
                        >
                          <iconify-icon
                            icon="material-symbols:send-rounded"
                            className="text-2xl"
                          />
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Viewer modal */}

                  {viewerOpen && (
                    <div className="fixed inset-0 bg-black/70 dark:bg-black/80 flex items-center justify-center z-50 ">
                      <div className="absolute top-8 right-[40px] flex gap-4 z-50">
                        {viewerFromZip && (
                          <button
                            onClick={backToZipList}
                            className="text-white bg-slate-600 hover:bg-slate-500 p-3 rounded-full flex items-center justify-center shadow-lg"
                            title="ZIP ro'yxatiga qaytish"
                          >
                            <iconify-icon icon="mdi:arrow-left" width="32" />
                          </button>
                        )}
                        {!viewerLoading && (
                          <button
                            onClick={handlePrint}
                            disabled={isPrinting}
                            className={`text-white ${isPrinting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} p-3 rounded-full flex items-center justify-center shadow-lg`}
                            title="Chop etish"
                          >
                            {isPrinting ? (
                              <iconify-icon
                                icon="line-md:loading-twotone-loop"
                                width="32"
                              />
                            ) : (
                              <iconify-icon
                                icon="material-symbols:print-outline"
                                width="32"
                              />
                            )}
                          </button>
                        )}
                        <button
                          onClick={handleCloseViewer}
                          className="text-white bg-red-600 hover:bg-red-700 p-3 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <iconify-icon icon="ic:round-close" width="32" />
                        </button>
                      </div>
                      {/* Telegram-style loading: circular progress */}
                      {viewerLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                          <div className="relative w-24 h-24">
                            <svg
                              className="w-24 h-24 -rotate-90"
                              viewBox="0 0 96 96"
                            >
                              <circle
                                cx="48"
                                cy="48"
                                r="44"
                                fill="none"
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="6"
                              />
                              <circle
                                cx="48"
                                cy="48"
                                r="44"
                                fill="none"
                                stroke="white"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray={`${(viewerLoadProgress / 100) * 276.5} 276.5`}
                                style={{
                                  transition: "stroke-dasharray 0.15s ease-out",
                                }}
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                              {viewerLoadProgress}%
                            </span>
                          </div>
                          <p className="mt-4 text-white/90 text-sm max-w-[280px] truncate text-center px-2">
                            {viewerLoadingFileName}
                          </p>
                          <p className="mt-1 text-white/60 text-xs">
                            Yuklanmoqda...
                          </p>
                        </div>
                      )}
                      <div className="docs w-[1000px] h-[100vh] max-w-[1100px] overflow-auto relative">
                        {/* ZIP listing — markazda chiroyli kartochkalar */}
                        {viewerFileType === "application/zip" && (
                          <div className="min-h-[100vh] flex flex-col items-center justify-center px-6 py-12">
                            <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
                              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-6">
                                <iconify-icon
                                  icon="mdi:folder-zip"
                                  className="text-slate-600"
                                  width="40"
                                  height="40"
                                />
                              </div>
                              <h3 className="text-xl font-bold text-slate-800 mb-1">
                                ZIP ichidagi fayllar
                              </h3>
                              <p className="text-slate-500 text-sm mb-8">
                                Ko‘rish uchun faylni tanlang
                              </p>
                              {viewerZipEntries.length === 0 ? (
                                <p className="text-slate-600 py-8">
                                  ZIP fayl ichida fayl topilmadi.
                                </p>
                              ) : (
                                <div className="grid grid-cols-1  gap-4">
                                  {viewerZipEntries.map((e, i) => {
                                    const nameLower = e.name.toLowerCase();
                                    const isPdf = nameLower.endsWith(".pdf");
                                    const isWord =
                                      nameLower.endsWith(".docx") ||
                                      nameLower.endsWith(".doc");
                                    const isApk = nameLower.endsWith(".apk");
                                    const isIpa = nameLower.endsWith(".ipa");
                                    const isViewable = isPdf || isWord;
                                    const isDownloadable =
                                      !isViewable || isApk || isIpa;
                                    const handleClick = () =>
                                      isDownloadable
                                        ? downloadZipEntry(e)
                                        : openZipEntry(e);
                                    return (
                                      <button
                                        key={i}
                                        type="button"
                                        onClick={handleClick}
                                        className="flex items-center gap-4 w-full p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group"
                                      >
                                        <div
                                          className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                                            isPdf
                                              ? "bg-red-500/90 group-hover:bg-red-500"
                                              : isDownloadable
                                                ? "bg-green-600/90 group-hover:bg-green-600"
                                                : "bg-blue-600/90 group-hover:bg-blue-600"
                                          }`}
                                        >
                                          {isPdf ? (
                                            <iconify-icon
                                              icon="mdi:file-pdf-box"
                                              className="text-white"
                                              width="28"
                                              height="28"
                                            />
                                          ) : isDownloadable ? (
                                            <iconify-icon
                                              icon="mdi:download"
                                              className="text-white"
                                              width="28"
                                              height="28"
                                            />
                                          ) : (
                                            <iconify-icon
                                              icon="mdi:file-word-box"
                                              className="text-white"
                                              width="28"
                                              height="28"
                                            />
                                          )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <span className="text-slate-800 font-medium block truncate">
                                            {e.name}
                                          </span>
                                          <span className="text-slate-500 text-xs">
                                            {isPdf
                                              ? "PDF hujjat"
                                              : isApk
                                                ? "APK — yuklab olish"
                                                : isIpa
                                                  ? "IPA — yuklab olish"
                                                  : isWord
                                                    ? "Word hujjat"
                                                    : "Yuklab olish"}
                                          </span>
                                        </div>
                                        {isDownloadable ? (
                                          <iconify-icon
                                            icon="mdi:download"
                                            className="text-slate-500 group-hover:text-green-600 shrink-0"
                                            width="24"
                                            height="24"
                                          />
                                        ) : (
                                          <iconify-icon
                                            icon="mdi:chevron-right"
                                            className="text-slate-400 group-hover:text-slate-600 shrink-0"
                                            width="24"
                                            height="24"
                                          />
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Rasm — katta ko‘rinish */}
                        {viewerFileUrl && viewerFileType === "image" && (
                          <div className="flex items-center justify-center min-h-[100vh] p-4 bg-black/90">
                            <img
                              src={viewerFileUrl}
                              alt="Rasm"
                              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded shadow-2xl"
                              style={{ maxHeight: "90vh" }}
                              onClick={(e) => e.stopPropagation()}
                              onContextMenu={(e) => e.preventDefault()}
                            />
                          </div>
                        )}

                        {/* PDF viewer */}
                        {viewerFileUrl &&
                          viewerFileType === "application/pdf" && (
                            <object
                              data={
                                viewerFileUrl +
                                "#toolbar=0&navpanes=0&scrollbar=1"
                              }
                              type="application/pdf"
                              className="w-full h-full border-none"
                              style={{ minHeight: "calc(100vh - 40px)" }}
                              onContextMenu={(e) => e.preventDefault()}
                            >
                              <p>PDF ochishda xatolik yuz berdi.</p>
                            </object>
                          )}

                        {/* DOCX viewer */}
                        {viewerSelectedFile &&
                          (viewerFileType ===
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                            viewerFileType === "application/msword") && (
                            <div className="docx-preview-container">
                              {viewerError ? (
                                <p className="text-red-500 p-4">
                                  {viewerError}
                                </p>
                              ) : (
                                <div ref={docxContainerRef} />
                              )}
                            </div>
                          )}

                        {!viewerFileType && <p>Fayl yuklanmoqda...</p>}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`
                      w-[360px]
                      bg-white dark:bg-[#1e2a36]
                      h-full
                      absolute top-0 right-0
                      transition-transform duration-300 ease-in-out pt-[50px]
                      ${showLeft ? "translate-x-0 " : "translate-x-[360px]"}
                    `}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col items-center w-full">
                      <div className="w-20 h-20 rounded-full bg-sky-500 flex items-center justify-center text-2xl font-bold text-white">
                        {selected
                          ? selected.name?.substring(0, 1).toLocaleUpperCase()
                          : "K"}
                      </div>
                      <h2 className="mt-3 text-lg font-semibold dark:text-white">
                        {selected ? selected.name : "Title"}
                      </h2>
                      {activeTab !== "shaxsiy" && (
                        <p className="text-sm text-gray-400">
                          {currentGroupMembers.length} foydalanuvchi
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => setShowLeft(false)}
                      className="absolute right-4 top-[40px] text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      <iconify-icon icon="ic:round-close" width="32" />
                    </button>
                  </div>

                  {/* Members */}
                  {activeTab !== "shaxsiy" && (
                    <div className="mt-6 px-[30px]">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-gray-500">
                          {currentGroupMembers.length} foydalanuvchi
                        </span>
                        {(user?.[3] === 1 || user?.[3] === 3) && (
                          <div
                            className="flex gap-3 text-gray-400 cursor-pointer "
                            onClick={() => {
                              setOpen1(false);
                              setAddModal(true);
                            }}
                          >
                            <iconify-icon
                              icon="ic:round-person-add"
                              width="20"
                            />
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        {currentGroupMembers?.map((u, i) => (
                          <div
                            key={u?.id}
                            className="flex items-center gap-3"
                            onClick={() => handleChatUserPrivite(u)}
                          >
                            <div className="w-10 h-10 min-w-10 rounded-full bg-green-500 flex items-center justify-center font-semibold text-white">
                              {u?.user?.name[0]?.toLocaleUpperCase()}
                            </div>
                            <div className="flex justify-between  items-center w-full">
                              <p className="text-sm text-gray-700">
                                {u?.user?.name} 
                              </p>
                              {(user?.[3] === 1 ||
                                user?.[3] === 3) && (
                                <button
                                  className="rounded-full text-[#bb9769]"
                                  onClick={() => deleteChatUser(u)}
                                >
                                  <iconify-icon icon="majesticons:trash"></iconify-icon>
                                  {/* <iconify-icon name="ic:delete"/> */}
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <div ref={printComponentRef}>
          <style>
            {`
              @media print {
                @page { margin: 0; size: A4; }
                .print-page-a4 {
                  width: 210mm;
                  height: 297mm;
                  page-break-after: always;
                  display: flex;
                  justify-content: center;
                  align-items: flex-start;
                  background: white;
                  overflow: hidden;
                }
                .print-page-a4 img {
                  width: 100%;
                  height: auto;
                  max-height: 100%;
                  object-fit: contain;
                }
                .print-page-a4:last-child {
                  page-break-after: auto;
                }
              }
            `}
          </style>
          {printImages.map((img, idx) => (
            <div key={idx} className="print-page-a4">
              <img src={img} alt={`Page ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
