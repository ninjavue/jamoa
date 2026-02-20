import React, { useEffect, useMemo, useState } from "react";
import { Modal } from "../../components";
import { useZirhStref } from "../../context/ZirhContext";
import { useZirhEvent } from "../../api/useZirh";
import { METHOD } from "../../api/zirhrpc";
import toast from "react-hot-toast";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { downloadFileViaRpc, uploadFileViaRpc } from "../../rpc/fileRpc";

const UserAdd = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { stRef } = useZirhStref();
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);
  const [fileName, setFileName] = React.useState(null);
  const [editId, setEditId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const changedRef = React.useRef([]);
  const [changedFields, setChangedFields] = useState([]);
  const [editItemOld, setEditItemOld] = useState({
    id: "",
    surname: "",
    name: "",
    partName: "",
    email: "",
    role: "",
    department: "",
    phone: "",
    image: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [items, setItems] = useState([]);

  const phoneToDisplay = (nineDigits) =>
    nineDigits ? `+998${String(nineDigits).replace(/\D/g, "").slice(0, 9)}` : "";
  const phoneToStorage = (value) => {
    let digits = String(value || "").replace(/\D/g, "");
    if (digits.startsWith("998")) digits = digits.slice(3);
    return digits.slice(0, 9);
  };

  const userRole = (role) => {
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

  const PROCESS_STEPS = [
    { value: "1", label: "Shartnoma kelgan" },
    { value: "2", label: "Tizimga qo'shilgan" },
    { value: "3", label: "Xat chiqarilgan" },
    { value: "4", label: "Xat kelgan" },
    { value: "5", label: "Jarayonda" },
    { value: "6", label: "Hisobotga chiqarilgan" },
    { value: "7", label: "Qisman yakunlangan" },
    { value: "8", label: "Qayta ekspertiza" },
    { value: "9", label: "To'liq yakunlangan" },
    { value: "10", label: "Vaqtincha to'xtatilgan" },
  ];

  const [expandedUserId, setExpandedUserId] = useState(null);

  const getOrderCountForStep = (item, stepKey) => {
    const orderCount = item?.orderCount;
    if (!orderCount || typeof orderCount !== "object") return 0;
    const step = orderCount[String(stepKey)];
    return step && typeof step === "object" && "count" in step ? step.count : 0;
  };

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;
    const term = searchTerm.trim().toLowerCase();
    return items.filter((item) => {
      const roleStr = userRole(item.role);
      const departmentStr = userSection(item.department);
      return (
        String(item.surname || "").toLowerCase().includes(term) ||
        String(item.name || "").toLowerCase().includes(term) ||
        String(item.partName || "").toLowerCase().includes(term) ||
        String(item.email || "").toLowerCase().includes(term) ||
        roleStr.toLowerCase().includes(term) ||
        departmentStr.toLowerCase().includes(term) ||
        String(item.phone || "").toLowerCase().includes(term)
      );
    });
  }, [items, searchTerm]);

  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    partName: "",
    email: "",
    role: "",
    department: "",
    phone: "",
    image: "",
  });

  function bufferToObjectId(bufferObj) {
    const bytes = Object.values(bufferObj);
    return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  const fetchProfile = async () => {
 
  };

  const openDrawer = () => {
    setFormData({
      surname: "",
      name: "",
      partName: "",
      email: "",
      role: "",
      department: "",
      phone: "",
      image: "",
    });
    setFieldErrors({});
    setFileName(null);
    setIsUpdate(false);
    setDrawerOpen(true);
  };
  const closeDrawer = () => setDrawerOpen(false);

  const downloadFileAll = async (id, size = 32420) => {
  
     return await downloadFileViaRpc(stRef, id, id, size, (p) => {
      // console.log(p);
      setUploadProgress(p);
      setIsUploading(true);
      if (p === 100) setIsUploading(false);
    });
  };


  const getAllUser = async () => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.USER_GET_FULL, {});
      const userList = res && res[1];
      if (res.status === METHOD.OK && Array.isArray(userList)) {
        const mappedItems = await Promise.all(
          userList.map(async (user, index) => {
            const info = user["4"] || [];

            const FALLBACK_AVATAR = "/assets/images/avatar/avatar1.png";
            let imageFileId = info[5] || "";
            const isValidImageFileId =
              imageFileId &&
              typeof imageFileId === "object" &&
              imageFileId[1] != null &&
              imageFileId[2] != null;

            let imageSrc = FALLBACK_AVATAR;
            if (isValidImageFileId) {
              try {
                const checkFileId = localStorage.getItem(imageFileId[1]);
                let imageLink = null;
                if (!checkFileId) {
                  imageLink = await downloadFileAll(
                    imageFileId[1],
                    imageFileId[2],
                  );
                }
                if (imageLink) {
                  imageSrc = URL.createObjectURL(imageLink);
                }
              } catch (err) {
                imageSrc = FALLBACK_AVATAR;
              }
            }

            const rawOrderCount = user?.orderCount ?? user?.ordersCount;
            const orderCount =
              rawOrderCount &&
              typeof rawOrderCount === "object" &&
              !Array.isArray(rawOrderCount)
                ? rawOrderCount
                : PROCESS_STEPS.reduce(
                    (acc, { value }) => ({ ...acc, [value]: { count: 0 } }),
                    {}
                  );

            return {
              id: bufferToObjectId(user._id?.buffer),
              email: user["1"] || "",
              role: user["3"] || "",
              department: info[0] || "",
              surname: info[1] || "",
              name: info[2] || "",
              partName: info[3] || "",
              phone: info[4] || "",
              image: imageSrc,
              orderCount,
            };
          }),
        );
        console.log(mappedItems);
        setItems(mappedItems.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error("Foydalanuvchilar ro‘yxati yuklanmadi. Ulanishni tekshiring.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isPhone = name === "phone";
    const nextValue = isPhone ? phoneToStorage(value) : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: false }));

    if (!isUpdate) return;

    const map = {
      surname: 4.2,
      name: 4.3,
      partName: 4.4,
      role: 3,
      department: 4.1,
      phone: 4.5,
      image: 4.6,
    };

    const code = map[name];
    if (!code) return;

    if (value === editItemOld[name]) {
      setChangedFields((prev) => prev.filter((c) => c !== code));
    } else {
      setChangedFields((prev) =>
        prev.includes(code) ? prev : [...prev, code],
      );
    }
  };

  const requiredCreateFields = [
    "surname",
    "name",
    "partName",
    "email",
    "phone",
    "department",
    "role",
  ];

  const handleCreate = async () => {
    const errors = {};
    requiredCreateFields.forEach((key) => {
      const v = formData[key];
      if (v === undefined || v === null || String(v).trim() === "") {
        errors[key] = true;
      }
    });
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      toast.error("Iltimos, barcha majburiy maydonlarni to'ldiring.");
      return;
    }

    const phoneForBackend = phoneToStorage(formData.phone);

    setUploadProgress(0);
    setIsUploading(true);

    const file = formData.image;
    if(!file){
      toast.error("Iltimos rasm tanlang!")
      return
    }

    const doneRes = await uploadFileViaRpc(
      stRef,
      file,
      null,

      (p) => {
        // console.log(p);
        setUploadProgress(p);
      },
    );

    // console.log(doneRes);

    formData.image = doneRes["fileId"];
    // console.log(formData.image, doneRes["size"]) 
    // return
    const res = await sendRpcRequest(stRef, METHOD.USER_CREATE, {
      1: formData.surname,
      2: formData.name,
      3: formData.partName,
      4: formData.email,
      5: formData.role,
      6: formData.department,
      7: phoneForBackend,
      8: {1: formData.image, 2: doneRes["size"]},
    });



    if(res.status === METHOD.OK){
      toast.success("Foydalanuvchi qo'shildi")
    }else{
      toast.error("Foydalanuvchi yaratishda xatolik")
    }
    const imageLink = await downloadFileAll(formData.image, doneRes?.size);
    // URL.revokeObjectURL(formData.image);
    formData.image = imageLink;
    getAllUser();

    // console.log("addUser:", res);

    const defaultOrderCount = PROCESS_STEPS.reduce(
      (acc, { value }) => ({ ...acc, [value]: { count: 0 } }),
      {}
    );
    setItems([
      ...items,
      {
        id: Date.now(),
        ...formData,
        orderCount: defaultOrderCount,
      },
    ]);

    setFormData({
      surname: "",
      name: "",
      partName: "",
      email: "",
      role: "",
      department: "",
      phone: "",
      image: "",
    });
    closeDrawer();
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProfile();
    };

    fetchData();

    // Birinchi marta ulanish tayyor bo‘lishini kutmay yuborish mummkin; tayyor bo‘lganda yoki allaqachon tayyor bo‘lsa yuklash
    const onReady = () => {
      getAllUser();
    };

    getAllUser();
    window.addEventListener("zirh:ready", onReady);
    return () => window.removeEventListener("zirh:ready", onReady);
  }, []);

  const getAvatar = (fileId) => {
    const imageAvatar = localStorage.getItem(
      fileId || "9276c76090ee854fbea8670b32975676",
    );
    if (!imageAvatar) {
      return "https://picsum.photos/200/300?random=1";
    }
    return imageAvatar;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    if (isUpdate) {
      const isChanged = true;
      setChangedFields((prev) => {
        if (isChanged && !prev.includes(4.6)) {
          return [...prev, 4.6];
        }
        return prev;
      });
    }
  };

  const handleEdit = async (item) => {
    try {
      if (item) {
        const phone9 = phoneToStorage(item.phone);
        const data = {
          ...formData,
          id: item.id,
          surname: item.surname,
          name: item.name,
          partName: item.partName,
          email: item.email,
          role: item.role,
          department: item.department,
          phone: phone9,
          image: item.image,
        };
        setFormData(data);
        setEditItemOld({
          ...formData,
          id: item.id,
          surname: item.surname,
          name: item.name,
          partName: item.partName,
          email: item.email,
          role: item.role,
          department: item.department,
          phone: phone9,
          image: item.image,
        });
        setEditId(item.id);
        setIsUpdate(true);
        setDrawerOpen(true);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    try {
      const payload = { 1: formData.id };

      const fileSize = formData?.image?.size

      if (formData.image && formData.image instanceof File) {
        setUploadProgress(0);
        setIsUploading(true);

        const uploadRes = await uploadFileViaRpc(
          stRef,
          formData.image,
          null,
          (p) => {
            setUploadProgress(p);
            if (p === 100) setIsUploading(false);
          },
        );

        // console.log(uploadRes)

        formData.image = uploadRes["fileId"];
   
      }

      const fieldMap = {
        surname: 4.2,
        name: 4.3,
        partName: 4.4,
        role: 3,
        department: 4.1,
        phone: 4.5,
        image: 4.6,
      };

      const updatedFieldCodes = [];

      Object.keys(fieldMap).forEach((key) => {
        if (formData[key] !== editItemOld[key]) {
          const code = fieldMap[key];
          
          if (key === "image") {
            payload[code] = {
              1: formData[key],
              2: fileSize
            };
          } else if (key === "phone") {
            payload[code] = phoneToStorage(formData[key]);
          } else if (key === "department" || key === "role") {
            payload[code] = parseInt(formData[key]);
          } else {
            payload[code] = formData[key];
          }


          updatedFieldCodes.push(code);
        }
      });

      if (updatedFieldCodes.length === 0) {
        toast.error("Hech qanday o'zgarish qilinmadi");
        return;
      }

      // console.log("Payload:", payload);
      // return
      const res = await sendRpcRequest(stRef, METHOD.USER_UPDATE, payload);
      // console.log(res)


      if (res.status === METHOD.OK) {
        getAllUser();
        setItems((prev) =>
          prev.map((item) =>
            item.id === formData.id ? { ...item, ...formData } : item,
          ),
        );

        setChangedFields((prev) =>
          prev.filter((code) => !updatedFieldCodes.includes(code)),
        );

        setEditItemOld({ ...formData });

        toast.success("Foydalanuvchi muvaffaqiyatli yangilandi");
      } else {
        toast.error("Xatolik: Server ma'lumotni qabul qilmadi");
      }
    } catch (err) {
      // console.error("Update Error:", err);
      toast.error("Foydalanuvchi yangilanmadi, tizim xatosi");
    }
  };

  return (
    <>
      {drawerOpen && (
        <div onClick={closeDrawer} className="fixed inset-0 bg-black/40 z-40" />
      )}

      <div
        className={`expertise-drawer fixed top-0 right-0 h-full w-[400px] pr-[30px] bg-white dark:bg-[#2b2c40] z-50 transform transition-transform duration-300
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-500">
            Foydalanuvchi qo'shish
          </h2>
          <button onClick={closeDrawer} className="text-xl">
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="relative">
            <label className="text-sm text-gray-500 uppercase">Familiya</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${fieldErrors.surname ? "border-red-500 ring-1 ring-red-500" : ""}`}
              placeholder="Foydalanuvchining familiyasi"
            />
            {changedFields.includes(4.2) && (
              <button
                onClick={handleUpdate}
                type="button"
                className=" absolute top-[27px] right-[-13px] w-3 h-12 cursor-pointer text-2xl"
              >
                <iconify-icon
                  icon="material-symbols:save-outline"
                  className="text-green-500"
                />
              </button>
            )}
          </div>
          <div className="relative">
            <label className="text-sm text-gray-500 uppercase">Ism</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${fieldErrors.name ? "border-red-500 ring-1 ring-red-500" : ""}`}
              placeholder="Foydalanuvchining ismi"
            />
            {changedFields.includes(4.3) && (
              <button
                onClick={handleUpdate}
                type="button"
                className=" absolute top-[27px] right-[-13px] w-3 h-12 cursor-pointer text-2xl"
              >
                <iconify-icon
                  icon="material-symbols:save-outline"
                  className="text-green-500"
                />
              </button>
            )}
          </div>
          <div className="relative">
            <label className="text-sm text-gray-500 uppercase">Otasi</label>
            <input
              type="text"
              name="partName"
              value={formData.partName}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${fieldErrors.partName ? "border-red-500 ring-1 ring-red-500" : ""}`}
              placeholder="Otasini ismi"
            />
            {changedFields.includes(4.4) && (
              <button
                onClick={handleUpdate}
                type="button"
                className=" absolute top-[27px] right-[-13px] w-3 h-12 cursor-pointer text-2xl"
              >
                <iconify-icon
                  icon="material-symbols:save-outline"
                  className="text-green-500"
                />
              </button>
            )}
          </div>
          {!isUpdate && (
            <div>
              <label className="text-sm text-gray-500 uppercase">Pochta</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${fieldErrors.email ? "border-red-500 ring-1 ring-red-500" : ""}`}
                placeholder="info@csec.uz"
              />
            </div>
          )}
          <div className="relative">
            <label className="text-sm text-gray-500 uppercase">Telefon</label>
            <input
              type="tel"
              name="phone"
              value={phoneToDisplay(formData.phone)}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${fieldErrors.phone ? "border-red-500 ring-1 ring-red-500" : ""}`}
              placeholder="+998 93 862 38 80"
            />
            {changedFields.includes(4.5) && (
              <button
                onClick={handleUpdate}
                type="button"
                className=" absolute top-[27px] right-[-13px] w-3 h-12 cursor-pointer text-2xl"
              >
                <iconify-icon
                  icon="material-symbols:save-outline"
                  className="text-green-500"
                />
              </button>
            )}
          </div>

          <div className="relative">
            <label className="text-sm text-gray-500 uppercase">
              Bo'limni tanlang
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${fieldErrors.department ? "border-red-500 ring-1 ring-red-500" : ""}`}
            >
              <option value="" disabled selected>
                Bo'limni tanlang
              </option>
              <option value="1">Axborot tizimlari kiberxavfsizligi</option>
              <option value="2">Mobil ilovalar kiberxavfsizligi</option>
              <option value="3">Kiberxavfsizlik uzelini kuzatib borish</option>
            </select>
            {changedFields.includes(4.1) && (
              <button
                onClick={handleUpdate}
                type="button"
                className=" absolute top-[27px] right-[-13px] w-3 h-12 cursor-pointer text-2xl"
              >
                <iconify-icon
                  icon="material-symbols:save-outline"
                  className="text-green-500"
                />
              </button>
            )}
          </div>

          <div className="relative">
            <label className="text-sm text-gray-500 uppercase">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${fieldErrors.role ? "border-red-500 ring-1 ring-red-500" : ""}`}
            >
              <option value="" disabled selected>
                Lavozimni tanlang
              </option>
              <option value="1">Superadmin</option>
              <option value="2">Departament boshlig'i</option>
              <option value="3">Bo'lim boshlig'i</option>
              <option value="4">Bosh mutaxassis</option>
              <option value="5">Yetakchi mutaxassis</option>
              <option value="6">Birinchi toifali</option>
              <option value="7">Shartnoma bo'limi</option>
              <option value="8">Tashkilot</option>
            </select>
            {changedFields.includes(3) && (
              <button
                onClick={handleUpdate}
                type="button"
                className=" absolute top-[27px] right-[-13px] w-3 h-12 cursor-pointer text-2xl"
              >
                <iconify-icon
                  icon="material-symbols:save-outline"
                  className="text-green-500"
                />
              </button>
            )}
          </div>

          <div className="w-full mx-auto my-4 relative">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 dark:bg-[#2b2c40] cursor-pointer hover:bg-blue-100 transition-colors"
            >
              <i className="ri-upload-cloud-2-line text-4xl text-blue-600 mb-4"></i>
              <span className="text-gray-600 text-base font-semibold dark:text-white">
                {fileName || "Rasm yuklash"}
              </span>
              {changedFields.includes(4.6) && (
                <button
                  onClick={handleUpdate}
                  type="button"
                  className=" absolute top-[27px] right-[-13px] w-3 h-12 cursor-pointer text-2xl"
                >
                  <iconify-icon
                    icon="material-symbols:save-outline"
                    className="text-green-500"
                  />
                </button>
              )}
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          {!isUpdate && (
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleCreate}
                className="bg-[#696cff] text-white px-4 py-2 rounded-md"
              >
                Yaratish
              </button>
              <button
                onClick={closeDrawer}
                className="bg-gray-200 dark:bg-gray-400 px-4 py-2 rounded-md"
              >
                Bekor qilish
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="min-h-screen bg-transparent p-4 md:p-8">
        <div className="bg-white dark:bg-[#2b2c40] rounded-lg shadow-md overflow-hidden pt-2">
          <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div></div>
            <div className="flex">
              <input
                type="text"
                placeholder="Qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 text-sm bg-transparent dark:text-white"
              />

              <div>
                <button
                  className="bg-[#696cff] text-white font-bold py-2 px-4 rounded-md ml-4 hover:bg-[#565edc] transition-colors"
                  onClick={openDrawer}
                >
                  + Foydalanuvchi qo'shish
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">
                    N
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    Rasm
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    Foydalanuvchi
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    Pochta
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    telefon
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    Bo'lim
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    role
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-gray-300">
                    Izoh
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <tr
                      className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-[#2e2f4b] transition-colors cursor-pointer"
                      onClick={() =>
                        setExpandedUserId((prev) =>
                          prev === item.id ? null : item.id
                        )
                      }
                    >
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium dark:text-gray-300">
                        {item?.image ? (
                          <img
                            src={item?.image}
                            alt="user"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          "Rasm mavjud emas"
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        {item.surname} {item.name} {item.partName}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        {item.email}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        {item.phone}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        {userSection(item.department)}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        {userRole(item.role)}
                      </td>
                      <td
                        className="px-6 py-4 text-gray-600 dark:text-gray-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          className="p-2 rounded-md bg-sky-200 text-sky-400 font-bold"
                          onClick={() => handleEdit(item)}
                        >
                          <iconify-icon
                            icon="tabler:edit"
                            width="20"
                            height="20"
                          ></iconify-icon>
                        </button>
                      </td>
                    </tr>
                    {expandedUserId === item.id && (
                      <tr className="bg-gray-50/80 dark:bg-[#252636] border-b border-gray-200">
                        <td colSpan={8} className="px-6 py-3 w-full">
                          <div className="flex flex-wrap justify-between gap-y-2 w-full">
                            {PROCESS_STEPS.map(({ value, label }) => (
                              <div
                                key={value}
                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 shrink-0"
                              >
                                <span className="font-medium">{label}:</span>
                                <span>
                                  {getOrderCountForStep(item, value)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAdd;
