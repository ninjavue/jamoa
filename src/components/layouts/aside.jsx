import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { METHOD } from "../../api/zirhrpc";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { useZirhStref } from "../../context/ZirhContext";
import { getStoredExpertiseUnread } from "../../utils/chatUnread";

const ROLE_MOBILE_EXPERTISE_ONLY = 8; // faqat page/mobile va page/expertise
const ROLE_CHAT_ONLY = 9; // faqat chat
const ROLES_CHAT_ACCESS = [8, 9]; // role 8 va 9 chat ga kira oladi

const Aside = () => {
  const [user, setUser] = useState({});
  const { stRef } = useZirhStref();
  const [chatUnreadTotal, setChatUnreadTotal] = useState(0);
  const [expertiseUnread, setExpertiseUnread] = useState(
    getStoredExpertiseUnread,
  );
  const [systemLength, setSystemLength] = useState(0)
  const [mobileLength, setMobileLength] = useState(0)

  const roleNum = user.role != null ? Number(user.role) : null;
  const roleLoaded = roleNum !== null;
  const isRole8Only = roleNum === ROLE_MOBILE_EXPERTISE_ONLY;
  const isRole9Only = roleNum === ROLE_CHAT_ONLY;
  const canAccessChat = roleNum != null && ROLES_CHAT_ACCESS.includes(roleNum);
  const homeLink = isRole9Only
    ? "/page/chat"
    : isRole8Only
      ? "/page/mobile"
      : "/";

  const formatBufferToId = (data) => {
    if (!data) return null;
    const bufferArray = data.buffer
      ? Object.values(data.buffer)
      : Object.values(data);

    return bufferArray
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("");
  };

  const userMe = async () => {
    const res = await sendRpcRequest(stRef, METHOD.USER_GET, {});
    if (res.status === METHOD.OK) {
      const u = {
        id: formatBufferToId(res[1]?._id),
        email: res[1][1],
        full_name: res[1][4]?.[1] + " " + res[1][4]?.[2] + " " + res[1][4]?.[3],
        role: res[1][3],
      };

      setUser(u);
    }
  };

  useEffect(() => {
    userMe();
  }, []);

  function bufferToObjectId(bufferObj) {
    const bytes = Object.values(bufferObj);
    return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  const getAllSystemExpertize = async (
    id = null,
    nextPage = true,
    statusId = 0,
    searchText = null,
  ) => {
    try {
      const payload = {
        1: id,
        2: nextPage,
        3: 1,
        4: statusId,
      };
      const trimmed = searchText != null ? String(searchText).trim() : "";
      if (trimmed !== "") {
        payload[5] = trimmed;
      } else {
        payload[5] = null;
      }
      const res = await sendRpcRequest(stRef, METHOD.ORDER_GET_PAGE, payload);
      console.log(res);
      if (res.status == METHOD.OK) {
        const list = res[1]?.docs;

        if (!Array.isArray(list)) {
          return;
        }

        const formattedData = list.map((item) => {
          const base = item["1"] || [];
          return {
            id: bufferToObjectId(item._id?.buffer),
            orgName: base[0] || "",
            system: base["9"] || 1,
          };
        });

        return formattedData;
      }
    } catch (error) {
      console.log(error);
    }
  };

   const getAllSystemMobile = async (
    id = null,
    nextPage = true,
    statusId = 0,
    searchText = null,
  ) => {
    try {
      const payload = {
        1: id,
        2: nextPage,
        3: 2,
        4: statusId,
      };
      const trimmed = searchText != null ? String(searchText).trim() : "";
      if (trimmed !== "") {
        payload[5] = trimmed;
      } else {
        payload[5] = null;
      }
      const res = await sendRpcRequest(stRef, METHOD.ORDER_GET_PAGE, payload);
      console.log(res);
      if (res.status == METHOD.OK) {
        const list = res[1]?.docs;

        if (!Array.isArray(list)) {
          return;
        }

        const formattedData = list.map((item) => {
          const base = item["1"] || [];
          return {
            id: bufferToObjectId(item._id?.buffer),
            orgName: base[0] || "",
            system: base["9"] || 2,
          };
        });

        return formattedData;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const systemExpertize = async () => {
      const data = await getAllSystemExpertize(null, true);
      const dataMobile = await getAllSystemMobile(null, true);
      setMobileLength(dataMobile?.length)
      setSystemLength(data?.length)
    };
    systemExpertize();
  }, []);

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
    return () =>
      window.removeEventListener("expertiseUnreadUpdate", onExpertiseUnread);
  }, []);

  const MenuLink = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `menu-link flex items-center p-2 rounded-md transition-colors ${
          isActive
            ? "menu-link-active bg-[#bb9769] text-white dark:bg-[#bb9769] hover:text-white"
            : "menu-link-inactive text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-slate-400"
        }`
      }
    >
      {children}
    </NavLink>
  );
  return (
    <aside className="sidebar">
      <button type="button" className="sidebar-close-btn !mt-4">
        <iconify-icon icon="radix-icons:cross-2" />
      </button>
      <div>
        <Link to={homeLink} className="sidebar-logo border-r">
          <div className="flex items-center logo-head gap-2 m-auto pt-5">
            <p className="overflow-hidden transition-all duration-300 font-semibold text-[20px] leading-[26px] h-[54px]  text-[#57534e] uppercase">
              Kiberxavfsizlik markazi
            </p>
          </div>
          {/* <img
            src="/assets/jamoa.png"
            alt="site logo"
            className="logo-icon"
            style={{ width: 50, height: 60 }}
          /> */}
        </Link>
      </div>
      <div
        data-v-edbccf60=""
        class="flex items-center bg-transparent border-r dark:border-[#374151]"
      >
        <span className="w-full opacity-100 h-[1.5px] flex bg-[#bb9769] transition-all duration-300"></span>
        <img
          src="/assets/jamoa.png"
          alt="site logo"
          style={{ width: 131, height: 146 }}
        />
        <span className="w-full opacity-100 h-[1.5px] flex bg-[#bb9769] transition-all duration-300"></span>
      </div>
      <div className="sidebar-menu-area">
        {!roleLoaded ? (
          <ul className="sidebar-menu" id="sidebar-menu">
            <li className="flex items-center gap-2 p-2 text-neutral-500">
              <span className="w-4 h-4 border-2 border-[#bb9769] border-t-transparent rounded-full animate-spin" />
              <span>Yuklanmoqda...</span>
            </li>
          </ul>
        ) : (
          <ul className="sidebar-menu" id="sidebar-menu">
            {!isRole9Only && (user.role === 1 || user.role === 3) && (
              <li>
                <MenuLink to="/">
                  <iconify-icon
                    icon="solar:home-smile-angle-outline"
                    className="menu-icon"
                  />
                  <span>Dashboard</span>
                </MenuLink>
              </li>
            )}
            {!isRole9Only && !isRole8Only && (
              <li>
                <MenuLink to="/page/dashboard">
                  <iconify-icon icon="ci:house-03" className="menu-icon" />
                  <span>Bosh sahifa</span>
                </MenuLink>
              </li>
            )}
            {(!isRole9Only && (systemLength > 0 || (systemLength === 0 && !isRole8Only))) && (
              <li>
                <MenuLink to="/page/expertise">
                  <iconify-icon icon="ci:calendar-days" className="menu-icon" />
                  <span>Tizim ekspertizalar</span>
                  {(expertiseUnread.tizim || 0) > 0 && (
                    <span className="flex justify-center w-5 text-sm h-5 bg-[#3b64ec] text-white items-center rounded-full ml-auto">
                      {(expertiseUnread.tizim || 0) > 99
                        ? "99+"
                        : expertiseUnread.tizim}
                    </span>
                  )}
                </MenuLink>
              </li>
            )}
            {(!isRole9Only && (mobileLength > 0 || (mobileLength === 0 && !isRole8Only))) && (
              <li>
                <MenuLink to="/page/mobile">
                  <iconify-icon
                    icon="material-symbols:mobile-3-outline"
                    className="menu-icon"
                  />
                  <span>Mobil ekspertizalar</span>
                  {(expertiseUnread.mobil || 0) > 0 && (
                    <span className="flex justify-center w-5 text-sm h-5 bg-[#3b64ec] text-white items-center rounded-full ml-auto">
                      {(expertiseUnread.mobil || 0) > 99
                        ? "99+"
                        : expertiseUnread.mobil}
                    </span>
                  )}
                </MenuLink>
              </li>
            )}
            {!isRole9Only && !isRole8Only && (
              <li>
                <MenuLink to="/page/daily">
                  <iconify-icon
                    icon="material-symbols:calendar-check-rounded"
                    className="menu-icon"
                  />
                  <span>Kunlik topshiriqlar</span>
                </MenuLink>
              </li>
            )}
            {!isRole9Only && !isRole8Only && (
              <li>
                <MenuLink to="/page/report">
                  <iconify-icon
                    icon="material-symbols:lab-profile-outline"
                    className="menu-icon"
                  />
                  <span>Hisobot</span>
                </MenuLink>
              </li>
            )}
            {!isRole9Only && (user.role === 1 || user.role === 3) && (
              <li>
                <MenuLink to="/page/user-add">
                  <iconify-icon
                    icon="material-symbols:person-add-outline"
                    className="menu-icon"
                  />
                  <span>Foydalanuvchi qo'shish</span>
                </MenuLink>
              </li>
            )}
            {!isRole9Only && !isRole8Only && (
              <li>
                <MenuLink to="/page/development">
                  <iconify-icon icon="ri:table-view" className="menu-icon" />
                  <span>Shaxsiy reja</span>
                </MenuLink>
              </li>
            )}
            {!isRole9Only && !isRole8Only && (
              <li>
                <MenuLink to="/page/furniture">
                  <iconify-icon icon="ri:inbox-2-line" className="menu-icon" />
                  <span>Iventar va jihozlar</span>
                </MenuLink>
              </li>
            )}
            {(isRole9Only || !isRole8Only || canAccessChat) && (
              <li>
                <MenuLink to="/page/chat">
                  <iconify-icon
                    icon="material-symbols:chat"
                    className="menu-icon"
                  />
                  <span>Chat</span>
                  {chatUnreadTotal > 0 && (
                    <span className="flex justify-center w-5 text-sm h-5 bg-[#3b64ec] text-white items-center rounded-full ml-auto">
                      {chatUnreadTotal > 99 ? "99+" : chatUnreadTotal}
                    </span>
                  )}
                </MenuLink>
              </li>
            )}
            {/* <li className="sidebar-menu-group-title">Tizim ekspertizalar</li>
          <li>
            <Link to="/email">
              <iconify-icon icon="mage:email" className="menu-icon" />
              <span>Email</span>
            </Link>
          </li>
          <li>
            <Link to="/chat">
              <iconify-icon icon="bi:chat-dots" className="menu-icon" />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <iconify-icon icon="solar:calendar-outline" className="menu-icon" />
              <span>Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="/kanban">
              <iconify-icon icon="material-symbols:map-outline" className="menu-icon" />
              <span>Kanban</span>
            </Link>
          </li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="hugeicons:invoice-03" className="menu-icon" />
              <span>Invoice</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/invoice-list"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> List</Link>
              </li>
              <li>
                <Link to="/invoice-preview"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Preview</Link>
              </li>
              <li>
                <Link to="/invoice-add"><i className="ri-circle-fill circle-icon text-info-600 w-auto" /> Add new</Link>
              </li>
              <li>
                <Link to="/invoice-edit"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Edit</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="hugeicons:ai-brain-03" className="menu-icon" />
              <span>Ai Application</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/text-generator"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Text Generator</Link>
              </li>
              <li>
                <Link to="/code-generator"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Code Generator</Link>
              </li>
              <li>
                <Link to="/image-generator"><i className="ri-circle-fill circle-icon text-info-600 w-auto" /> Image Generator</Link>
              </li>
              <li>
                <Link to="/voice-generator"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Voice Generator</Link>
              </li>
              <li>
                <Link to="/video-generator"><i className="ri-circle-fill circle-icon text-success-600 w-auto" /> Video Generator</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="hugeicons:bitcoin-circle" className="menu-icon" />
              <span>Crypto Currency</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/wallet"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Wallet</Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-group-title">UI Elements</li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="solar:document-text-outline" className="menu-icon" />
              <span>Components</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/typography"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Typography</Link>
              </li>
              <li>
                <Link to="/colors"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Colors</Link>
              </li>
              <li>
                <Link to="/button"><i className="ri-circle-fill circle-icon text-success-600 w-auto" /> Button</Link>
              </li>
              <li>
                <Link to="/dropdown"><i className="ri-circle-fill circle-icon text-purple-600  dark:text-purple-400 w-auto" /> Dropdown</Link>
              </li>
              <li>
                <Link to="/alert"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Alerts</Link>
              </li>
              <li>
                <Link to="/card"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Card</Link>
              </li>
              <li>
                <Link to="/carousel"><i className="ri-circle-fill circle-icon text-info-600 w-auto" /> Carousel</Link>
              </li>
              <li>
                <Link to="/avatar"><i className="ri-circle-fill circle-icon text-success-600 w-auto" /> Avatars</Link>
              </li>
              <li>
                <Link to="/progress"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Progress bar</Link>
              </li>
              <li>
                <Link to="/tabs"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Tab &amp; Accordion</Link>
              </li>
              <li>
                <Link to="/pagination"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Pagination</Link>
              </li>
              <li>
                <Link to="/badges"><i className="ri-circle-fill circle-icon text-info-600 w-auto" /> Badges</Link>
              </li>
              <li>
                <Link to="/tooltip"><i className="ri-circle-fill circle-icon dark:text-purple-400 w-auto" /> Tooltip &amp; Popover</Link>
              </li>
              <li>
                <Link to="/videos"><i className="ri-circle-fill circle-icon text-cyan-600 w-auto" /> Videos</Link>
              </li>
              <li>
                <Link to="/star-rating"><i className="ri-circle-fill circle-icon text-[#7f27ff] w-auto" /> Star Ratings</Link>
              </li>
              <li>
                <Link to="/tags"><i className="ri-circle-fill circle-icon text-[#8252e9] w-auto" /> Tags</Link>
              </li>
              <li>
                <Link to="/list"><i className="ri-circle-fill circle-icon text-[#e30a0a] w-auto" /> List</Link>
              </li>
              <li>
                <Link to="/calendar"><i className="ri-circle-fill circle-icon text-yellow-400 w-auto" /> Calendar</Link>
              </li>
              <li>
                <Link to="/radio"><i className="ri-circle-fill circle-icon text-orange-500 w-auto" /> Radio</Link>
              </li>
              <li>
                <Link to="/switch"><i className="ri-circle-fill circle-icon text-pink-600 w-auto" /> Switch</Link>
              </li>
              <li>
                <Link to="/image-upload"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Upload</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="heroicons:document" className="menu-icon" />
              <span>Forms</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/form"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Input Forms</Link>
              </li>
              <li>
                <Link to="/form-layout"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Input Layout</Link>
              </li>
              <li>
                <Link to="/form-validation"><i className="ri-circle-fill circle-icon text-success-600 w-auto" /> Form Validation</Link>
              </li>
              <li>
                <Link to="/wizard"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Form Wizard</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="mingcute:storage-line" className="menu-icon" />
              <span>Table</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/table-basic"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Basic Table</Link>
              </li>
              <li>
                <Link to="/table-data"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Data Table</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="solar:pie-chart-outline" className="menu-icon" />
              <span>Chart</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/line-chart"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Line Chart</Link>
              </li>
              <li>
                <Link to="/column-chart"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Column Chart</Link>
              </li>
              <li>
                <Link to="/pie-chart"><i className="ri-circle-fill circle-icon text-success-600 w-auto" /> Pie Chart</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/widgets">
              <iconify-icon icon="fe:vector" className="menu-icon" />
              <span>Widgets</span>
            </Link>
          </li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="flowbite:users-group-outline" className="menu-icon" />
              <span>Users</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/users-list"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Users List</Link>
              </li>
              <li>
                <Link to="/users-grid"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Users Grid</Link>
              </li>
              <li>
                <Link to="/add-user"><i className="ri-circle-fill circle-icon text-info-600 w-auto" /> Add User</Link>
              </li>
              <li>
                <Link to="/view-profile"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> View Profile</Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-menu-group-title">Application</li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="simple-line-icons:vector" className="menu-icon" />
              <span>Authentication</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/sign-in"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Sign In</Link>
              </li>
              <li>
                <Link to="/sign-up"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Sign Up</Link>
              </li>
              <li>
                <Link to="/forgot-password"><i className="ri-circle-fill circle-icon text-info-600 w-auto" /> Forgot Password</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/gallery">
              <iconify-icon icon="solar:gallery-wide-linear" className="menu-icon" />
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link to="pricing">
              <iconify-icon icon="hugeicons:money-send-square" className="menu-icon" />
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <iconify-icon icon="mage:message-question-mark-round" className="menu-icon" />
              <span>FAQs.</span>
            </Link>
          </li>
          <li>
            <Link to="/error">
              <iconify-icon icon="streamline:straight-face" className="menu-icon" />
              <span>404</span>
            </Link>
          </li>
          <li>
            <Link to="/terms-condition">
              <iconify-icon icon="octicon:info-24" className="menu-icon" />
              <span>Terms &amp; Conditions</span>
            </Link>
          </li>
          <li className="dropdown">
            <a>
              <iconify-icon icon="icon-park-outline:setting-two" className="menu-icon" />
              <span>Settings</span>
            </a>
            <ul className="sidebar-submenu">
              <li>
                <Link to="/company"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Company</Link>
              </li>
              <li>
                <Link to="/notification"><i className="ri-circle-fill circle-icon text-warning-600 w-auto" /> Notification</Link>
              </li>
              <li>
                <Link to="/notification-alert"><i className="ri-circle-fill circle-icon text-info-600 w-auto" /> Notification Alert</Link>
              </li>
              <li>
                <Link to="/theme"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Theme</Link>
              </li>
              <li>
                <Link to="/currencies"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Currencies</Link>
              </li>
              <li>
                <Link to="/language"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Languages</Link>
              </li>
              <li>
                <Link to="/payment-gateway"><i className="ri-circle-fill circle-icon text-danger-600 w-auto" /> Payment Gateway</Link>
              </li> */}
            {/* </ul> */}
            {/* </li> */}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Aside;
