import { Outlet, useLocation } from "react-router-dom";
import Aside from "./aside";
import Header from "./header";
import Footer from "./footer";
import { ChatUnreadListener } from "../ChatUnreadListener";
import { useEffect, useState, useRef } from "react";

const Main = () => {
  const location = useLocation();
  const baseScriptsPromiseRef = useRef(null);
  const homeOneLoadingRef = useRef(false);
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    async function loadBaseScripts() {
      if (!baseScriptsPromiseRef.current) {
        baseScriptsPromiseRef.current = (async () => {
          await loadScript("/assets/js/lib/jquery-3.7.1.min.js");
          await loadScript("/assets/js/lib/apexcharts.min.js");
          await loadScript("/assets/js/lib/simple-datatables.min.js");
          await loadScript("/assets/js/lib/iconify-icon.min.js");
          await loadScript("/assets/js/lib/jquery-ui.min.js");
          await loadScript("/assets/js/lib/jquery-jvectormap-2.0.5.min.js");
          await loadScript("/assets/js/lib/jquery-jvectormap-world-mill-en.js");
          await loadScript("/assets/js/lib/magnifc-popup.min.js");
          await loadScript("/assets/js/lib/slick.min.js");
          await loadScript("/assets/js/lib/prism.js");
          await loadScript("/assets/js/lib/file-upload.js");
          await loadScript("/assets/js/lib/audioplayer.js");
          await loadScript("/assets/js/flowbite.min.js");
          await loadScript("/assets/js/app.min.js");
        })();
      }
      return baseScriptsPromiseRef.current;
    }

    const initHomeOneCharts = () => {
      if (homeOneLoadingRef.current) return;
      homeOneLoadingRef.current = true;

      const chartIds = [
        "chart",
        "barChart",
        "userOverviewDonutChart",
        "paymentStatusChart",
        "world-map",
      ];
      chartIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
      });
      const chartScript = document.querySelector(
        'script[src^="/assets/js/homeOneChart.js"]'
      );
      if (chartScript) chartScript.remove();

      const script = document.createElement("script");
      script.src = `/assets/js/homeOneChart.js?v=${Date.now()}`;
      script.async = true;
      script.onload = () => {
        homeOneLoadingRef.current = false;
      };
      script.onerror = () => {
        homeOneLoadingRef.current = false;
      };
      document.body.appendChild(script);
    };

    let cancelled = false;
    (async () => {
      await loadBaseScripts();
      if (cancelled) return;
      if (location.pathname === "/") {
        initHomeOneCharts();
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  // --- Inactivity lock (30s) ---
  const [locked, setLocked] = useState(() => {
    try {
      return localStorage.getItem('app_locked') === '1';
    } catch (e) {
      return false;
    }
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  // const lockApp = () => {
  //   try {
  //     localStorage.setItem('app_locked', '1');
  //   } catch (e) {}
  //   setLocked(true);
  // };

  // const unlockApp = () => {
  //   try {
  //     localStorage.removeItem('app_locked');
  //   } catch (e) {}
  //   setLocked(false);
  //   setPassword('');
  //   startTimer();
  // };

  // const startTimer = () => {
  //   clearTimeout(timerRef.current);
  //   if (locked) return;
  //   timerRef.current = setTimeout(() => {
  //     lockApp();
  //   }, 300000); 
  // };

  // useEffect(() => {
  //   if (locked) {
  //     setTimeout(() => {
  //       inputRef.current?.focus();
  //     }, 50);
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }
  //   return () => {
  //     document.body.style.overflow = '';
  //   };
  // }, [locked]);

  // useEffect(() => {
  //   const onKey = (e) => {
  //     if (e.altKey && (e.key === 'l' || e.key === 'L')) {
  //       e.preventDefault();
  //       lockApp();
  //     }
  //   };

  //   window.addEventListener('keydown', onKey);
  //   return () => window.removeEventListener('keydown', onKey);
  // }, []);
  // useEffect(() => {
  //   const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
  //   const reset = () => {
  //     if (locked) return;
  //     startTimer();
  //   };

  //   events.forEach((ev) => window.addEventListener(ev, reset));
  //   startTimer();

  //   return () => {
  //     events.forEach((ev) => window.removeEventListener(ev, reset));
  //     clearTimeout(timerRef.current);
  //   };
  // }, [locked]);

  // const handlePasswordSubmit = (e) => {
  //   e && e.preventDefault();
  //   if (password === '0316') {
  //     setError('');
  //     unlockApp();
  //   } else {
  //     setPassword('');
  //     setError("Parol noto'g'ri. Qayta urinib ko'ring.");
  //   }
  // };

  return (
    <div className="dark:bg-neutral-800 bg-neutral-100 dark:text-white">
      <ChatUnreadListener />
      <Aside />
      <main className="dashboard-main bg-[#f5f5f9] dark:bg-[#1e1e2f]" >
        <Header />
        <div className="dashboard-main-body ">
          <Outlet />
        </div>
        <Footer />
      </main>

      {/* {locked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-300 dark:bg-gray-900 ">
          <div className="bg-white dark:dark:bg-[#2b2c40] rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Sessiya bloklandi</h2>
              <p className="text-sm text-gray-600 mb-4">Davom etish uchun parol kiriting.</p>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">Parol</label>
                  <input
                    ref={inputRef}
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    className="w-full px-4 py-2 border bg-transparent dark:text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Parolni kiriting"
                    autoFocus
                  />
                  {error && <p className="mt-2 text-sm text-red-600 dark:text-red-600">{error}</p>}
                </div>

                <div className="flex justify-end items-center gap-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <iconify-icon icon="mdi:lock-open" />
                    Ochish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )} */}


    </div>
  );
};


export default Main;