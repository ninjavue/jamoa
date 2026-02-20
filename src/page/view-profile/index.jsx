import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { METHOD } from "../../api/zirhrpc";
import { useZirhStref } from "../../context/ZirhContext";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { downloadFileViaRpcNew } from "../../rpc/fileRpc";

const ViewProfile = () => {
  const { stRef } = useZirhStref();
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState("edit-profile");
  const [avatar, setAvatar] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const resU = await sendRpcRequest(stRef, METHOD.USER_GET, {});
      // console.log(resU[1][4][4]);
      setFullName(resU[1][4][1] + " " + resU[1][4][2] + " " + resU[1][4][3]);
      setPhone(resU[1][4][4]);
    
      if (resU.status === METHOD.OK) {
          const avatarObj = resU?.[1]?.[4]?.[5];

        if(!avatarObj ||
    typeof avatarObj !== "object" ||
    Object.keys(avatarObj).length === 0){
          setAvatar("../assets/images/avatar/avatar1.png");
        }else{
        const avatarUrl = await downloadFileAll(
          resU[1][4][5][1],
          resU[1][4][5][2],
        );
        setAvatar(avatarUrl);
      }
        setUser(resU[1]);
      } else if (resU.status === METHOD.Not_Found) {
        localStorage.removeItem("checkUser");
      }
    };

    getUser();
  }, []);

  const downloadFileAll = async (id, size) => {
    console.log(id, size)
    const blob = await downloadFileViaRpcNew(stRef, id, id, size, (p) => {});
    const url = URL.createObjectURL(blob);
    return url;
  };

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

  const userSection = (sec) => {
    switch (sec) {
      case 1:
        return "Axborot tizimlari kiberxavfsizligi";
      case 2:
        return "Mobil ilovalar kiberxavfsizligi";
      case 3:
        return "Kiberxavfsizlik uzelini kuzatib borish";
      default:
        return "Noma'lum";
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <h6 className="font-semibold mb-0 dark:text-white">Mening hisobim</h6>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="user-grid-card relative border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden bg-white dark:bg-[#273142] h-full">
              <img
                src="../assets/images/user-grid/user-grid-bg1.png"
                alt
                className="w-full object-fit-cover"
              />
              <div className="pb-6 ms-6 mb-6 me-6 -mt-[100px]">
                <div className="text-center border-b border-neutral-200 dark:border-neutral-600">
                  <img
                    src={avatar}
                    alt
                    className="border br-white border-width-2-px max-w-[200px] min-w-[200px] min-h-[200px] object-cover rounded-full object-fit-cover mx-auto"
                  />
                  <h6 className="mb-0 mt-4"> {user?.[4]?.[2]}</h6>
                  <span className="text-secondary-light mb-4">{user?.[1]}</span>
                </div>
                <div className="mt-6">
                  <h6 className="text-xl mb-4">Mening ma'lumotlarim</h6>
                  <ul>
                    <li className="flex items-center gap-1 mb-3">
                      <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                        F.I.SH
                      </span>
                      <span className="w-[70%] text-secondary-light font-medium">
                        : {user?.[4]?.[1]} {user?.[4]?.[2]} {user?.[4]?.[3]}
                      </span>
                    </li>
                    <li className="flex items-center gap-1 mb-3">
                      <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                        {" "}
                        Pochta
                      </span>
                      <span className="w-[70%] text-secondary-light font-medium">
                        : {user?.[1]}
                      </span>
                    </li>
                    <li className="flex items-center gap-1 mb-3">
                      <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                        {" "}
                        Telefon raqam
                      </span>
                      <span className="w-[70%] text-secondary-light font-medium">
                        : {user?.[4]?.[4]}
                      </span>
                    </li>

                    <li className="flex items-center gap-1 mb-3">
                      <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                        {" "}
                        Bo'lim nomi
                      </span>
                      <span className="w-[70%] text-secondary-light font-medium">
                        : {userSection(user?.[4]?.[0])}
                      </span>
                    </li>
                    <li className="flex items-center gap-1 mb-3">
                      <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                        {" "}
                        Lavozimi
                      </span>
                      <span className="w-[70%] text-secondary-light font-medium">
                        : {userRole(user?.[3])}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="card h-full border-0">
              <div className="card-body p-6">
                <ul
                  className="tab-style-gradient flex flex-wrap text-sm font-medium text-center mb-5"
                  id="default-tab"
                  role="tablist"
                >
                  <li className role="presentation">
                    <button
                      type="button"
                      onClick={() => setActiveTab("edit-profile")}
                      className={`py-2.5 px-4 border-t-2 font-semibold text-base inline-flex items-center gap-3 ${
                        activeTab === "edit-profile"
                          ? "text-[#bb9769] border-[#bb9769]"
                          : "text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                      id="edit-profile-tab"
                      role="tab"
                      aria-controls="edit-profile"
                      aria-selected={activeTab === "edit-profile"}
                    >
                      Tahrirlash
                    </button>
                  </li>
                  <li className role="presentation">
                    <button
                      type="button"
                      onClick={() => setActiveTab("change-password")}
                      className={`py-2.5 px-4 border-t-2 font-semibold text-base inline-flex items-center gap-3 ${
                        activeTab === "change-password"
                          ? "text-[#bb9769] border-[#bb9769]"
                          : "text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                      id="change-password-tab"
                      role="tab"
                      aria-controls="change-password"
                      aria-selected={activeTab === "change-password"}
                    >
                      Parolni o'zgartirish
                    </button>
                  </li>
                </ul>
                <div id="default-tab-content">
                  <div
                    className={activeTab === "edit-profile" ? "" : "hidden"}
                    id="edit-profile"
                    role="tabpanel"
                    aria-labelledby="edit-profile-tab"
                  >
                    <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
                      Profile Image
                    </h6>
                    {/* Upload Image Start */}
                    <div className="mb-6 mt-4">
                      <div className="avatar-upload">
                        <div className="avatar-edit absolute bottom-0 end-0 me-6 mt-4 z-[1] cursor-pointer">
                          <input
                            type="file"
                            id="imageUpload"
                            accept=".png, .jpg, .jpeg"
                            hidden
                          />
                          <label
                            htmlFor="imageUpload"
                            className="w-8 h-8 flex justify-center items-center bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400 border border-primary-600 hover:bg-primary-100 text-lg rounded-full"
                          >
                            <iconify-icon
                              icon="solar:camera-outline"
                              className="icon"
                            />
                          </label>
                        </div>
                        <div className="avatar-preview">
                          <div id="imagePreview"></div>
                        </div>
                      </div>
                    </div>
                    {/* Upload Image End */}
                    <form action="#">
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
                        <div className="col-span-12 sm:col-span-6">
                          <div className="mb-5">
                            <label
                              htmlFor="name"
                              className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
                            >
                              F.I.SH. <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control rounded-lg"
                              id="name"
                              disabled
                              defaultValue={fullName}
                              placeholder="Familya Ism Sharif"
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <div className="mb-5">
                            <label
                              htmlFor="email"
                              className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
                            >
                              Pochta manzilingiz{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control rounded-lg"
                              id="email"
                              disabled
                              defaultValue={user?.[1]}
                              placeholder="Pochta manzilingizni kiriting"
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <div className="mb-5">
                            <label
                              htmlFor="number"
                              className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
                            >
                              Telefon
                            </label>
                            <input
                              type="email"
                              className="form-control rounded-lg"
                              id="number"
                              disabled
                              defaultValue={"+998" + phone}
                              placeholder="Telefon raqamingizni kiriting"
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <div className="mb-5">
                            <label
                              htmlFor="depart"
                              className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
                            >
                              Bo'lim{" "}
                              <span className="text-danger-600">*</span>{" "}
                            </label>
                            <select
                              className="form-control rounded-lg form-select"
                              id="depart"
                            >
                              <option>{userSection(user?.[4]?.[0])}</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <div className="mb-5">
                            <label
                              htmlFor="desig"
                              className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
                            >
                              Lavozimingiz{" "}
                              <span className="text-danger-600">*</span>{" "}
                            </label>
                            <select
                              className="form-control rounded-lg form-select"
                              id="desig"
                            >
                              <option selected disabled>
                                {userRole(user[3])}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <div className="mb-5">
                            <label
                              htmlFor="Language"
                              className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
                            >
                              Til{" "}
                              <span className="text-danger-600">*</span>{" "}
                            </label>
                            <select
                              className="form-control rounded-lg form-select"
                              id="Language"
                            >
                              <option selected disabled>
                                Uzbek
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-base px-14 py-[11px] rounded-lg"
                        >
                          Bekor qilish
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary border border-primary-600 text-base px-14 py-3 rounded-lg"
                        >
                          Saqlash
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className={activeTab === "change-password" ? "" : "hidden"}
                    id="change-password"
                    role="tabpanel"
                    aria-labelledby="change-password-tab"
                  >
                    <div className="mb-5">
                      <label
                        htmlFor="your-password"
                        className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
                      >
                        New Password <span className="text-danger-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          className="form-control rounded-lg"
                          id="your-password"
                          placeholder="Enter New Password*"
                        />
                        <span
                          className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light"
                          data-toggle="#your-password"
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="confirm-password"
                        className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
                      >
                        Confirmed Password{" "}
                        <span className="text-danger-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          className="form-control rounded-lg"
                          id="confirm-password"
                          placeholder="Confirm Password*"
                        />
                        <span
                          className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light"
                          data-toggle="#confirm-password"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      activeTab === "notification-password" ? "" : "hidden"
                    }
                    id="notification-password"
                    role="tabpanel"
                    aria-labelledby="notification-password-tab"
                  >
                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                      <label
                        htmlFor="companzNew"
                        className="absolute w-full h-full start-0 top-0"
                      />
                      <div className="flex items-center gap-3 justify-between">
                        <span className="form-check-label line-height-1 font-medium text-secondary-light">
                          Company News
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="companzNew"
                        />
                      </div>
                    </div>
                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                      <label
                        htmlFor="pushNotifcation"
                        className="absolute w-full h-full start-0 top-0"
                      />
                      <div className="flex items-center gap-3 justify-between">
                        <span className="form-check-label line-height-1 font-medium text-secondary-light">
                          Push Notification
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="pushNotifcation"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                      <label
                        htmlFor="weeklyLetters"
                        className="absolute w-full h-full start-0 top-0"
                      />
                      <div className="flex items-center gap-3 justify-between">
                        <span className="form-check-label line-height-1 font-medium text-secondary-light">
                          Weekly News Letters
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="weeklyLetters"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                      <label
                        htmlFor="meetUp"
                        className="absolute w-full h-full start-0 top-0"
                      />
                      <div className="flex items-center gap-3 justify-between">
                        <span className="form-check-label line-height-1 font-medium text-secondary-light">
                          Meetups Near you
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="meetUp"
                        />
                      </div>
                    </div>
                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                      <label
                        htmlFor="orderNotification"
                        className="absolute w-full h-full start-0 top-0"
                      />
                      <div className="flex items-center gap-3 justify-between">
                        <span className="form-check-label line-height-1 font-medium text-secondary-light">
                          Orders Notifications
                        </span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="orderNotification"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
