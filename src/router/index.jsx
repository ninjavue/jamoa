import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { METHOD } from "../api/zirhrpc";
import { useZirhStref } from "../context/ZirhContext";
import { sendRpcRequest } from "../rpc/rpcClient";

// Oddiy importlar, lazy kerak emas
import Main from "../components/layouts/main";
import Dashboard from "../pages/dashboard";
import SignIn from "../pages/sign-in";
import ForgotPassword from "../pages/forgot-password";

import DashboardPage from "../page/dashboard";
import Report from "../page/report";
import Expertise from "../page/expertise";
import Mobile from "../page/mobile";
import Daily from "../page/daily";
import Furniture from "../page/furniture";
import Development from "../page/development";
import Usefull from "../page/usefull";
import Viewer from "../page/viewer";
import ChatPage from "../page/chat";
import Word from "../page/word";
import WordTwo from "../page/word2";
import UserAdd from "../page/user-add";
import ViewProfile from "../page/view-profile";
import Vuln from "../page/vuln";
import { SystemWord } from "../page";
import { ZirhEventProvider } from "../context/ZirhEventContext";

const ALLOWED_ROOT_ROLES = [1, 3]; // faqat shu rollar / va /page/user-add ga kira oladi
const ROLE_MOBILE_EXPERTISE_ONLY = 8; // faqat page/mobile va page/expertise
const ROLE_CHAT_ONLY = 9; // faqat page/chat ga kira oladi
const ROLES_CHAT_ACCESS = [8, 9]; // role 8 va 9 chat page ga kira oladi

const PageLoading = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f9] dark:bg-[#1e1e2f]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-[#bb9769] border-t-transparent rounded-full animate-spin" />
      <p className="text-neutral-600 dark:text-neutral-400">Yuklanmoqda...</p>
    </div>
  </div>
);

const AppRouter = () => {
  const [isUser, setIsUser] = useState(!!localStorage.getItem("checkUser"));
  const [userRole, setUserRole] = useState(null);
  const { stRef } = useZirhStref();

  const roleNum = userRole != null ? Number(userRole) : null;
  const roleLoaded = roleNum !== null;
  const hasRootAccess = roleLoaded && ALLOWED_ROOT_ROLES.includes(roleNum);
  const isRole6Only = roleNum === ROLE_MOBILE_EXPERTISE_ONLY;
  const isRole9Only = roleNum === ROLE_CHAT_ONLY;
  const canAccessChat = roleLoaded && ROLES_CHAT_ACCESS.includes(roleNum);
  const defaultRedirect = isRole9Only
    ? "/page/chat"
    : isRole6Only
    ? "/page/mobile"
    : "/page/dashboard";
  // Role hali yuklanmaganida / va /page/user-add da qolamiz (refresh da noto'g'ri redirect bo'lmasin)
  const allowRootPathsWhileLoading = !roleLoaded;

  useEffect(() => {
    const onAuthChange = () => setIsUser(!!localStorage.getItem("checkUser"));
    const onStorage = (e) => {
      if (e.key === "checkUser") onAuthChange();
    };

    window.addEventListener("authChanged", onAuthChange);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("authChanged", onAuthChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  useEffect(() => {
    if (!isUser) return;

    const getUser = async () => {
      try {
        const resU = await sendRpcRequest(stRef, METHOD.USER_GET, {});
        if (resU.status === METHOD.OK) {
          setUserRole(resU[1][3]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [isUser]);

  return (
    <ZirhEventProvider>
      <Router>
      <Routes>
        <Route
          path="/login"
          element={isUser ? <Navigate to="/" replace /> : <SignIn />}
        />
        <Route
          path="/forgot-password"
          element={isUser ? <Navigate to="/" replace /> : <ForgotPassword />}
        />

        {isUser && !roleLoaded ? (
          <Route path="*" element={<PageLoading />} />
        ) : isUser ? (
          <Route element={<Main />}>
            <Route
              path="/page/dashboard"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to="/page/mobile" replace />
                ) : (
                  <DashboardPage />
                )
              }
            />
            <Route
              path="/page/report"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <Report />
                )
              }
            />
            <Route
              path="/page/expertise"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : (
                  <Expertise />
                )
              }
            />
            <Route
              path="/page/mobile"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : (
                  <Mobile />
                )
              }
            />
            
            <Route
              path="/page/daily"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <Daily />
                )
              }
            />
            <Route
              path="/page/furniture"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <Furniture />
                )
              }
            />
            <Route
              path="/page/development"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <Development />
                )
              }
            />
            <Route
              path="/page/usefull"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <Usefull />
                )
              }
            />
            <Route
              path="/page/viewer"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <Viewer />
                )
              }
            />
            <Route
              path="/page/chat"
              element={
                isRole6Only && !canAccessChat ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <ChatPage />
                )
              }
            />
            <Route
              path="/page/word/:id"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <Word />
                )
              }
            />
            <Route
              path="/page/word2"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <WordTwo />
                )
              }
            />
            <Route
              path="/page/user-add"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : allowRootPathsWhileLoading || hasRootAccess ? (
                  <UserAdd />
                ) : (
                  <Navigate to={defaultRedirect} replace />
                )
              }
            />
            <Route
              path="/page/view-profile"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <ViewProfile />
                )
              }
            />
            <Route
              path="/page/vuln"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <Vuln />
                )
              }
            />
            <Route
              path="/page/system-doc/:id"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : isRole6Only ? (
                  <Navigate to={defaultRedirect} replace />
                ) : (
                  <SystemWord />
                )
              }
            />
            <Route
              path="/"
              element={
                isRole9Only ? (
                  <Navigate to="/page/chat" replace />
                ) : allowRootPathsWhileLoading || hasRootAccess ? (
                  <Dashboard />
                ) : (
                  <Navigate to={defaultRedirect} replace />
                )
              }
            />
            <Route
              path="*"
              element={<Navigate to={defaultRedirect} replace />}
            />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
      </Router>
    </ZirhEventProvider>
  );
};

export default AppRouter;
