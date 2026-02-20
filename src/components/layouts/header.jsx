import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { METHOD } from "../../api/zirhrpc";
import { useZirhStref } from "../../context/ZirhContext";
import toast from "react-hot-toast";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { downloadFileViaRpc, downloadFileViaRpcNew } from "../../rpc/fileRpc";
import {
  formatBufferToId,
  CHAT_CURRENT_USER_ID_KEY,
  getStoredExpertiseUnread,
} from "../../utils/chatUnread";

const ROLE_MOBILE_EXPERTISE_ONLY = 8;
const ROLE_CHAT_ONLY = 9;

const Header = () => {
  const location = useLocation();

  const [messageOpen, setMessageOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const defaultAvatar = "/assets/jamoa.png";
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [activeYear, setActiveYear] = useState("2026");
  const [user, setUser] = useState({});
  const [chatUnreadTotal, setChatUnreadTotal] = useState(0);
  const [expertiseUnread, setExpertiseUnread] = useState(getStoredExpertiseUnread);

  const messageRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const { stRef } = useZirhStref();

  const roleNum = user?.[3] != null ? Number(user[3]) : null;
  const isRole8Only = roleNum === ROLE_MOBILE_EXPERTISE_ONLY;
  const isRole9Only = roleNum === ROLE_CHAT_ONLY;
  const userLoaded = Object.keys(user || {}).length > 0;
  const isLimitedRole = !userLoaded || isRole8Only || isRole9Only;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (messageRef.current && !messageRef.current.contains(e.target))
        setMessageOpen(false);
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      )
        setNotificationOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target))
        setProfileOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Chat o‘qilmaganlar soni: localStorage + chat sahifasidan keladigan event
  useEffect(() => {
    const getTotal = () => {
      try {
        const s = localStorage.getItem("chat_unread_counts");
        const obj = s ? JSON.parse(s) : {};
        return Object.values(obj).reduce((sum, n) => sum + Number(n || 0), 0);
      } catch {
        return 0;
      }
    };
    setChatUnreadTotal(getTotal());
    const onChatUnread = (e) => {
      const total = e?.detail?.total ?? getTotal();
      setChatUnreadTotal(total);
    };
    window.addEventListener("chatUnreadTotal", onChatUnread);
    return () => window.removeEventListener("chatUnreadTotal", onChatUnread);
  }, []);

  useEffect(() => {
    const onExpertiseUnread = (e) => {
      const next = e?.detail ?? getStoredExpertiseUnread();
      setExpertiseUnread(next);
    };
    window.addEventListener("expertiseUnreadUpdate", onExpertiseUnread);
    return () => window.removeEventListener("expertiseUnreadUpdate", onExpertiseUnread);
  }, []);

  const downloadFileAll = async (id, size = 32420) => {
  
     return await downloadFileViaRpc(stRef, id, id, size, (p) => {
      // console.log(p);
      setUploadProgress(p);
      setIsUploading(true);
      if (p === 100) setIsUploading(false);
    });
  };


  const clearAllIndexedDB = () => {
    return new Promise((resolve) => {
      if (typeof indexedDB === "undefined") {
        resolve();
        return;
      }
      if (indexedDB.databases) {
        indexedDB.databases().then((dbs) => {
          const deletions = (dbs || []).map((db) => {
            return new Promise((r) => {
              const req = indexedDB.deleteDatabase(db.name);
              req.onsuccess = () => r();
              req.onerror = () => r();
              req.onblocked = () => r();
            });
          });
          Promise.all(deletions).then(resolve);
        }).catch(() => {
          indexedDB.deleteDatabase("fileStorage");
          resolve();
        });
      } else {
        indexedDB.deleteDatabase("fileStorage");
        resolve();
      }
    });
  };

  const handleLogout = async () => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.LOGIN_LOG_OUT, {});
      if (res.status == METHOD.OK) {
        localStorage.removeItem("AUTH_KEY_B64");
        localStorage.removeItem("data");
        localStorage.removeItem("checkUser");
        localStorage.removeItem(CHAT_CURRENT_USER_ID_KEY);
        await clearAllIndexedDB();
        toast.success("Tizimdan muvaffaqiyatli chiqildi");
        window.location.href = "/login";
      } else {
        toast.error("Tizimdan chiqishda xatolik yuz berdi");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
     try {
       const resU = await sendRpcRequest(stRef, METHOD.USER_GET, {});      
      if (resU.status === METHOD.OK) {
        // console.log(resU)
        setUser(resU[1]);
        try {
          const uid = formatBufferToId(resU[1]._id);
          if (uid) localStorage.setItem(CHAT_CURRENT_USER_ID_KEY, uid);
        } catch (_) {}
        const avatarId = resU?.[1]?.[4]?.[5];
        // console.log(avatarId)
        // return
        if (!avatarId || typeof avatarId !== "object" || Object.keys(avatarId).length === 0) {
          setAvatar("../assets/images/avatar/avatar1.png");
        } else {
          const avatarUrl = await downloadFileAll(avatarId[1], avatarId[2]);
          const url = URL.createObjectURL(avatarUrl);
          // console.log(url)
          setAvatar(url);
        }
      } else if (resU.status === METHOD.Not_Found) {
        localStorage.removeItem("checkUser");
      }
     } catch (error) {
      console.log(error);
     }
    };

    getUser();
  }, []);



    const userRole = (role) => {
    // console.log(role);
    switch (role) {
      case 1:
        return "Admin";
      case 2:
        return "Departament boshlig'i";
      case 3:
        return "Bo'lim boshlig'i";
      case 4:
        return "Bosh mutaxassis";
      case 5:
        return "Yetakchi mutaxassis";
      case 6:
        return "Birinchi toifali mutaxassis";
      case 7:
        return "Shartnoma bo'limi";
      case 8:
        return "Tashkilot";
      default:
        return "Noma'lum";
    }
  };

  return (
    <div className="navbar-header border-b border-neutral-200 dark:border-neutral-600">
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="col-auto">
          <div className="flex flex-wrap items-center gap-[16px]">
            <button type="button" className="sidebar-toggle">
              <iconify-icon
                icon="heroicons:bars-3-solid"
                className="icon non-active"
              />
              <iconify-icon
                icon="iconoir:arrow-right"
                className="icon active"
              />
            </button>
            <button
              type="button"
              className="sidebar-mobile-toggle d-flex !leading-[0]"
            >
              <iconify-icon
                icon="heroicons:bars-3-solid"
                className="icon !text-[30px]"
              />
            </button>
            {!isLimitedRole && (
            <div className="flex items-center gap-1 rounded-sm p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveYear("2024")}
                className={`px-4 py-2 rounded-md text-sm text-bold dark:text-white ${
                  activeYear === "2024"
                    ? "bg-[#bb9769] text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:hover:bg-slate-400"
                }`}
              >
                2024
              </button>
              <button
                type="button"
                onClick={() => setActiveYear("2025")}
                className={`px-4 py-2 rounded-md text-sm text-bold dark:text-white ${
                  activeYear === "2025"
                    ? "bg-[#bb9769] text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:hover:bg-slate-400"  
                }`}
              >
                2025
              </button>
              <button
                type="button"
                onClick={() => setActiveYear("2026")}
                className={`px-4 py-2 rounded-md text-sm text-bold dark:text-white ${
                  activeYear === "2026"
                    ? "bg-[#bb9769] text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:hover:bg-slate-400"
                }`}
              >
                2026
              </button>
            </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-auto">
          <div className="flex flex-wrap items-center gap-3">
            {/* THEME TOGGLE */}
            <button
              type="button"
              id="theme-toggle"
              className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 dark:text-white rounded-full flex justify-center items-center"
            >
              <span id="theme-toggle-dark-icon" className="hidden">
                <i className="ri-sun-line" />
              </span>
              <span id="theme-toggle-light-icon" className="hidden">
                <i className="ri-moon-line" />
              </span>
            </button>

            {/* MESSAGE */}
            <div className="relative" ref={messageRef}>
              <button
                type="button"
                onClick={() => {
                  setMessageOpen(!messageOpen);
                  setNotificationOpen(false);
                  setProfileOpen(false);
                }}
                className="has-indicator w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full flex justify-center items-center relative"
              >
                <iconify-icon
                  icon="mage:email"
                  className="text-neutral-900 dark:text-white text-xl"
                />
                {chatUnreadTotal > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#2f6fec] text-white text-[11px] font-bold flex items-center justify-center">
                    {chatUnreadTotal > 99 ? "99+" : chatUnreadTotal}
                  </span>
                )}
              </button>

              {messageOpen && (
                <div
                  style={{ width: "340px" }}
                  className="z-10 absolute right-0 mt-2 bg-white dark:bg-neutral-700 rounded-2xl overflow-hidden shadow-lg max-w-[394px] w-full"
                >
                  <div className="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 m-4 flex items-center justify-between gap-2">
                    <h6 className="text-lg text-neutral-900 font-semibold mb-0 dark:text-white">
                      Xabarlar
                    </h6>
                    <span className="w-10 h-10 bg-white dark:bg-neutral-600 text-primary-600 dark:text-white font-bold flex justify-center items-center rounded-full">
                      {chatUnreadTotal > 99 ? "99+" : chatUnreadTotal}
                    </span>
                  </div>
                  <div className="scroll-sm !border-t-0 max-h-[400px] overflow-y-auto">
                    {[
                      "profile-3",
                      "profile-4",
                      "profile-5",
                      "profile-6",
                      "profile-7",
                    ].map((img, idx) => (
                      <a
                        key={idx}
                        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 relative">
                            <img
                              className="rounded-full w-11 h-11"
                              src={`../assets/images/notification/${img}.png`}
                              alt="Profile"
                            />
                            <span className="absolute end-[2px] bottom-[2px] w-2.5 h-2.5 bg-success-500 border border-white rounded-full dark:border-gray-600" />
                          </div>
                          <div>
                            <h6 className="text-sm fw-semibold mb-1">
                              Kathryn Murphy
                            </h6>
                            <p className="mb-0 text-sm line-clamp-1">
                              hey! there i'm...
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-1">
                          <span className="text-sm text-neutral-500">
                            12:30 PM
                          </span>
                          <span className="w-4 h-4 text-xs bg-warning-600 text-white rounded-full flex justify-center items-center">
                            8
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="text-center py-3 px-4">
                    <Link
                      to="/page/chat"
                      onClick={() => setMessageOpen(false)}
                      className="text-primary-600 dark:text-primary-400 font-semibold hover:underline text-center"
                    >
                      Barcha xabarlar
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* NOTIFICATION */}
            <div className="relative" ref={notificationRef}>
              <button
                type="button"
                onClick={() => {
                  setNotificationOpen(!notificationOpen);
                  setMessageOpen(false);
                  setProfileOpen(false);
                }}
                className="has-indicator w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full flex justify-center items-center relative"
              >
                <iconify-icon
                  icon="iconoir:bell"
                  className="text-neutral-900 dark:text-white text-xl"
                />
                {(expertiseUnread.tizim || 0) + (expertiseUnread.mobil || 0) > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#2f6fec] text-white text-[11px] font-bold flex items-center justify-center">
                    {(expertiseUnread.tizim || 0) + (expertiseUnread.mobil || 0) > 99
                      ? "99+"
                      : (expertiseUnread.tizim || 0) + (expertiseUnread.mobil || 0)}
                  </span>
                )}
              </button>

              {notificationOpen && (
                <div
                  style={{ width: "340px" }}
                  className="z-10 absolute right-0 mt-2 bg-white dark:bg-neutral-700 rounded-2xl overflow-hidden shadow-lg max-w-[394px] w-full"
                >
                  <div className="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 m-4 flex items-center justify-between gap-2">
                    <h6 className="text-lg text-neutral-900 font-semibold mb-0 dark:text-white">
                      Bildirishnomalar
                    </h6>
                    <span className="w-10 h-10 bg-white dark:bg-neutral-600 text-primary-600 dark:text-white font-bold flex justify-center items-center rounded-full">
                      {(expertiseUnread.tizim || 0) + (expertiseUnread.mobil || 0) > 99
                        ? "99+"
                        : (expertiseUnread.tizim || 0) + (expertiseUnread.mobil || 0)}
                    </span>
                  </div>
                  <div className="scroll-sm !border-t-0 max-h-[400px] overflow-y-auto">
                    {(expertiseUnread.tizim || 0) > 0 && (
                      <Link
                        to="/page/expertise"
                        onClick={() => setNotificationOpen(false)}
                        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 relative w-11 h-11 bg-primary-200 dark:bg-primary-600/25 text-primary-600 flex justify-center items-center rounded-full">
                            <iconify-icon icon="ci:calendar-days" className="text-2xl" />
                          </div>
                          <div>
                            <h6 className="text-sm fw-semibold mb-1">
                              Tizim ekspertizalar
                            </h6>
                            <p className="mb-0 text-sm line-clamp-1">
                              Yangi tizim ekspertizasi qo'shildi
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-1">
                          <span className="w-5 h-5 text-xs bg-[#2f6fec] text-white rounded-full flex justify-center items-center">
                            {expertiseUnread.tizim > 99 ? "99+" : expertiseUnread.tizim}
                          </span>
                        </div>
                      </Link>
                    )}
                    {(expertiseUnread.mobil || 0) > 0 && (
                      <Link
                        to="/page/mobile"
                        onClick={() => setNotificationOpen(false)}
                        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 relative w-11 h-11 bg-success-200 dark:bg-success-600/25 text-success-600 flex justify-center items-center rounded-full">
                            <iconify-icon icon="material-symbols:mobile-3-outline" className="text-2xl" />
                          </div>
                          <div>
                            <h6 className="text-sm fw-semibold mb-1">
                              Mobil ekspertizalar
                            </h6>
                            <p className="mb-0 text-sm line-clamp-1">
                              Yangi mobil ekspertiza qo'shildi
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-1">
                          <span className="w-5 h-5 text-xs bg-[#2f6fec] text-white rounded-full flex justify-center items-center">
                            {expertiseUnread.mobil > 99 ? "99+" : expertiseUnread.mobil}
                          </span>
                        </div>
                      </Link>
                    )}
                    {(expertiseUnread.tizim || 0) === 0 && (expertiseUnread.mobil || 0) === 0 && (
                      <div className="px-4 py-8 text-center text-neutral-500 dark:text-neutral-400">
                        Yangi bildirishnoma yo'q
                      </div>
                    )}
                  </div>
                  <div className="text-center py-3 px-4">
                    <Link
                      to="/page/expertise"
                      onClick={() => setNotificationOpen(false)}
                      className="text-primary-600 dark:text-primary-400 font-semibold hover:underline text-center"
                    >
                      Tizim ekspertizalar
                    </Link>
                    <span className="mx-2">|</span>
                    <Link
                      to="/page/mobile"
                      onClick={() => setNotificationOpen(false)}
                      className="text-primary-600 dark:text-primary-400 font-semibold hover:underline text-center"
                    >
                      Mobil ekspertizalar
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* PROFILE */}
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => {
                  setProfileOpen(!profileOpen);
                  setMessageOpen(false);
                  setNotificationOpen(false);
                }}
              >
                <img
                  src={avatar || defaultAvatar}
                  alt="image"
                  className="w-10 h-10 object-fit-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = defaultAvatar;
                  }}
                />
              </button>

              {profileOpen && (
                <div className="z-10 absolute right-0 mt-2 bg-white dark:bg-neutral-700 rounded-lg shadow-lg dropdown-menu-sm p-3">
                  <div className="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 mb-4 flex items-center justify-between gap-2">
                    <div>
                      <h6 className="text-lg text-neutral-900 font-semibold mb-0">
                        {user[4][1]} {user[4][2]} 
                      </h6>
                      <span className="text-neutral-500">{userRole(user[3])}</span>
                    </div>
                    <button
                      type="button"
                      className="hover:text-danger-600"
                      onClick={() => {
                        setProfileOpen(!profileOpen);
                      }}
                    >
                      <iconify-icon
                        icon="radix-icons:cross-1"
                        className="icon text-xl"
                      />
                    </button>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto scroll-sm pe-2">
                    {!isLimitedRole ? (
                    <ul className="flex flex-col">
                      <li>
                        <Link
                          className="text-black px-0 py-2 hover:text-primary-600 flex items-center gap-4"
                          to="/page/view-profile"
                        >
                          <iconify-icon
                            icon="solar:user-linear"
                            className="icon text-xl"
                          />{" "}
                          Mening hisobim
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-black px-0 py-2 hover:text-primary-600 flex items-center gap-4"
                          to="https://mail.csec.uz"
                        >
                          <iconify-icon
                            icon="tabler:message-check"
                            className="icon text-xl"
                          />{" "}
                          Inbox
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-black px-0 py-2 hover:text-primary-600 flex items-center gap-4"
                          to="/company"
                        >
                          <iconify-icon
                            icon="icon-park-outline:setting-two"
                            className="icon text-xl"
                          />{" "}
                          Sozlamalar
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLogout()}
                          className="dark:text-white px-0 py-2 hover:text-danger-600 flex items-center gap-4"
                        >
                          <iconify-icon
                            icon="lucide:power"
                            className="icon text-xl"
                          />{" "}
                          Tizimdan chiqish
                        </button>
                      </li>
                    </ul>
                    ) : (
                    /* role 8 va 9: faqat Tizimdan chiqish */
                    <ul className="flex flex-col">
                      <li>
                        <button
                          onClick={() => handleLogout()}
                          className="dark:text-white px-0 py-2 hover:text-danger-600 flex items-center gap-4"
                        >
                          <iconify-icon
                            icon="lucide:power"
                            className="icon text-xl"
                          />{" "}
                          Tizimdan chiqish
                        </button>
                      </li>
                    </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
