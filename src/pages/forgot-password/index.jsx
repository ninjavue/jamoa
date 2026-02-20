import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Captcha from "../../components/captcha";
import { ec as EC } from "elliptic";
import { METHOD } from "../../api/zirhrpc";
import { useZirhStref } from "../../context/ZirhContext";
import SHA256 from "crypto-js/sha256";
import toast from "react-hot-toast";
import { sendRpcRequest } from "../../rpc/rpcClient";
const ec = new EC("secp256k1");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const { stRef } = useZirhStref();
  const [uuidCaptcha, setUuidCaptcha] = useState(null);
  const navigate = useNavigate();
  const [signOne, setSignOne] = useState(false);

  const captchaRef = useRef(null);
  const captchaRef2 = useRef(null);

  const refreshCaptchaFromParent = () => {
    captchaRef.current?.refreshCaptcha();
  };
  const refreshCaptchaFromParent2 = () => {
    captchaRef2.current?.refreshCaptcha();
  };

  const handleRequestCode = async (x, y, captchaId) => {
    refreshCaptchaFromParent();

    try {
      setOpen(false);
      setSignOne(true);
      const res = await sendRpcRequest(stRef, METHOD.USER_PASS_RESET, {
        1: email,
        3: captchaId,
        4: x,
        5: y,
      });

      if (res.status == METHOD.OK) {
        setUuidCaptcha(res[1].uuid);
        setSignOne(false);
        toast.success("Pochta manzilingizga tasdiqlash kodi yuborildi");
        setStep(2);
      } else {
        setSignOne(false);
        if (res.status == METHOD.CAPTCHA_ERR) {
          toast.error("Captcha natijasi xato!");
          setOpen(false);
          refreshCaptchaFromParent();
        } else if (res.status == METHOD.Not_Found) {
          setSignOne(false);
          toast.error("Bunday foydalanuvchi mavjud emas!");

          if (res["1"] == "user not found") {
            setOpen(false);
            refreshCaptchaFromParent();
            toast.error("Bunday foydalanuvchi mavjud emas!");
          }
        }
        return;
      }
    } catch (err) {
      console.log(err);
      toast.error("Xatolik yuz berdi");
    }
  };

  const deriveKeyPairFromPassword = (password) => {
    const hash = SHA256(password).toString();
    const keyPair = ec.keyFromPrivate(hash, "hex");
    const publicKey = keyPair.getPublic().encode("hex", false);

    return { publicKey };
  };
  const handleReset = async (x, y, captchaId) => {
    try {
      refreshCaptchaFromParent();

      if (uuidCaptcha && code && password && confirmPassword) {
        const { publicKey } = deriveKeyPairFromPassword(password);

        const res = await sendRpcRequest(stRef, METHOD.USER_PASS_RESET_OTP, {
          1: uuidCaptcha,
          2: code,
          3: publicKey,
          4: captchaId,
          5: x,
          6: y,
        });

        if (res.status === METHOD.OK) {
          setStep(1);
          setEmail("");
          setCode("");
          setPassword("");
          setConfirmPassword("");
          navigate("/login");
        } else {
          if (res.status == METHOD.OTP_ERR) {
            toast.error("Tasdiqlash kodi xato!");
            setOpen2(false);
            refreshCaptchaFromParent();
          } else if (res.status == METHOD.CAPTCHA_ERR) {
            setOpen2(false);
            refreshCaptchaFromParent();
            toast.error("Captcha natijasi xato!");
          } else {
            toast.error("Parol kamida 8 ta belgidan iborat bo'lishi kerak!");
          }

          return;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickOpen = () => {
    refreshCaptchaFromParent();
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    refreshCaptchaFromParent2();
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleCaptchaSolve = async ({ x, y, captchaId }) => {
    await handleRequestCode(x, y, captchaId);
  };
  const handleCaptchaSolve2 = async ({ x, y, captchaId }) => {
    console.log(x, y, captchaId);
    await handleReset(x, y, captchaId);
  };
  return (
    <>
      <div className="flex bg-sign justify-center items-center min-h-screen">
        <section className="flex flex-col min-h-[100vh] min-w-[700px] max-w-[1040px] items-center justify-center">
          <div className="w-full lg:block hidden mb-[-100px]">
            <div className="flex items-center flex-col h-full justify-center">
              <img src="/assets/uz.png" className="w-full" alt />
            </div>
          </div>
          {step === 1 && (
            <div className="w-[80%] py-8 px-6 flex flex-col justify-center">
              <div className="lg:max-w-[464px] mx-auto w-full">
                <div>
                  <h4 className="mb-3 text-xl text-bold text-center text-[#78716c]">
                    Parolni tiklash
                  </h4>
                  <p className="mb-8 text-[#78716c] text-lg text-justify">
                    Hisobingizga bog‘langan elektron pochta manzilini kiriting.
                    Parolni tiklash uchun sizga maxsus 6 xonali son yuboriladi.
                  </p>
                </div>
                <form action="#">
                  <div className="icon-field mb-6 relative">
                    <span className="absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none flex text-xl">
                      <iconify-icon icon="mage:email" />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control h-[56px] ps-11 border-neutral-300 bg-neutral-50 dark:bg-neutral-600 rounded-xl"
                      placeholder="Email"
                    />
                  </div>
                  <button
                    type="button"
                    disabled={signOne}
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
                    className=" w-full mt-8 text-center justify-center inline-flex items-center gap-2 rounded-md bg-[#c78614] px-5 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c78614] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c78614]/50 active:translate-y-0"
                    onClick={handleClickOpen}
                  >
                    {signOne ? (
                      <span className="loaderSpinner"></span>
                    ) : (
                      "Davom etish"
                    )}
                  </button>
                  <div className="text-center">
                    <Link
                      to="/login"
                      className="text-[#c78614] font-bold mt-6 hover:underline"
                    >
                      Kirish
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="w-[80%] py-8 px-6 flex flex-col justify-center">
              <div className="lg:max-w-[464px] mx-auto w-full">
                <div>
                  <h4 className="mb-3">Pochta manzilni tasdiqlash</h4>
                  <p className="mb-8 text-secondary-light text-lg">
                    <b className="text-blue-500">{email}</b> ga yuborilgan 6
                    xonali kodni kiriting.
                  </p>
                </div>
                <form action="#">
                  <div className="icon-field mb-6 relative">
                    <span className="absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none flex text-xl">
                      <iconify-icon icon="mage:email" />
                    </span>
                    <input
                      type="number"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="form-control h-[56px] ps-11 border-neutral-300 bg-neutral-50 dark:bg-neutral-600 rounded-xl"
                      placeholder="Tasdiqlash kodi"
                      maxWidth="6"
                    />
                  </div>
                  <div className="icon-field mb-6 relative">
                    <span className="absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none flex text-xl">
                      <iconify-icon icon="mage:password" />
                    </span>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control h-[56px] ps-11 border-neutral-300 bg-neutral-50 dark:bg-neutral-600 rounded-xl"
                      placeholder="Yangi parol"
                    />
                  </div>
                  <div className="icon-field mb-6 relative">
                    <span className="absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none flex text-xl">
                      <iconify-icon icon="mage:password" />
                    </span>
                    <input
                      type="text"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control h-[56px] ps-11 border-neutral-300 bg-neutral-50 dark:bg-neutral-600 rounded-xl"
                      placeholder="Parolni tasdiqlash"
                    />
                  </div>
                  <button
                    type="button"
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
                    className="w-full mt-8 text-center justify-center inline-flex items-center gap-2 rounded-md bg-[#c78614] px-5 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c78614] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#696cff]/50 active:translate-y-0"
                    onClick={handleClickOpen2}
                  >
                    Parolni tiklash
                  </button>
                  <div className="text-center">
                    <Link
                      to="/login"
                      className="text-primary-600 font-bold mt-6 hover:underline"
                    >
                      Kirish
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      </div>

      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{""}</DialogTitle>
        <DialogContent>
          <Captcha
            ref={captchaRef}
            onSolve={handleCaptchaSolve}
            autoFetch={false}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{""}</DialogTitle>
        <DialogContent>
          <Captcha
            ref={captchaRef2}
            onSolve={handleCaptchaSolve2}
            autoFetch={false}
          />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default ForgotPassword;
