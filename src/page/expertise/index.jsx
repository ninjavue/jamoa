import React, { use, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../dashboard/dashboard.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Select, { components as selectComponents } from "react-select";

import ExpertizaTable from "../../components/table";

import { METHOD } from "../../api/zirhrpc";
import { useZirhStref } from "../../context/ZirhContext";
import { useZirhEventContext } from "../../context/ZirhEventContext";
import { persistExpertiseUnread } from "../../utils/chatUnread";
import toast from "react-hot-toast";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { downloadFileViaRpc, uploadFileViaRpc } from "../../rpc/fileRpc";

const Card = ({ label, value, icon, accent = "teal", onClick, isSelected }) => {
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      className={`stat-card group relative overflow-hidden rounded-2xl border bg-white/80 bg-gradient-to-br from-white via-white to-slate-50
         shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2b2c40]/80 
         dark:from-[#2b2c40] dark:via-[#2b2c40] dark:to-[#222433] ${isSelected ? "-translate-y-1 shadow-xl" : "border-slate-200/70"} ${onClick ? "cursor-pointer" : ""}`}
      data-accent={accent}
    >
      <div className="stat-card__top">
        <div className="stat-card__label text-sm font-medium tracking-wide text-[#718193] dark:text-gray-200">
          {label}
        </div>
        <div
          className="stat-card__icon rounded-xl p-3 shadow-inner"
          style={{
            color: accent == "muted" ? "#8592a3" : accent,
            background: hexToRgba(accent, 0.1),
          }}
          aria-hidden
        >
          <i
            className={`${icon} text-3xl`}
            style={{ width: 36, height: 36 }}
          ></i>
          {/* <iconify-icon icon={icon} width="36" height="36" /> */}
        </div>
      </div>
      <div className="stat-card__value text-3xl font-semibold text-[#566a7f] dark:text-gray-300">
        {value}
      </div>
    </div>
  );
};

const Section = ({ title, items, selectedStatusId, onCardClick }) => (
  <section className="stats-section">
    <h3 className="stats-section__title">{title}</h3>
    <div className="stats-grid">
      {items.map((it, i) => (
        <Card
          key={i}
          label={it.label}
          value={it.value}
          icon={it.icon}
          accent={it.accent}
          isSelected={selectedStatusId === it.id}
          onClick={onCardClick ? () => onCardClick(it.id) : undefined}
        />
      ))}
    </div>
  </section>
);

const orgTypes = ["DUK", "MCHJ", "AJ", "ATB", "AITB", "DM"];

const STATUS_STEPS = [
  { id: 1, label: "Shartnoma kelgan" },
  { id: 2, label: "Tizimga qo'shilgan" },
  { id: 3, label: "Xat chiqarilgan" },
  { id: 4, label: "Xat kelgan" },
  { id: 5, label: "Jarayonda" },
  { id: 6, label: "Hisobotga chiqarilgan" },
  { id: 7, label: "Qisman yakunlangan" },
  { id: 8, label: "Qayta expertiza" },
  { id: 9, label: "To'liq yakunlangan" },
  { id: 10, label: "Vaqtincha to'xtatilgan" },
];

const ITEMS_PER_PAGE = 10;

const Expertise = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedVuln, setSelectedVuln] = useState("");
  const [zaiflikText, setZaiflikText] = useState("");
  const [oqibatlarText, setOqibatlarText] = useState("");
  const [tavsiyaText, setTavsiyaText] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpen1, setDrawerOpen1] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [changedFields, setChangedFields] = useState([]);
  const [fileName, setFileName] = React.useState(null);
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);
  const [createErrors, setCreateErrors] = useState([]);
  const { stRef } = useZirhStref();
  const { setExpertiseUnread } = useZirhEventContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setExpertiseUnread((prev) => {
      if ((prev.tizim || 0) === 0) return prev;
      const next = { ...prev, tizim: 0 };
      persistExpertiseUnread(next);
      window.dispatchEvent(
        new CustomEvent("expertiseUnreadUpdate", { detail: next }),
      );
      return next;
    });
  }, [setExpertiseUnread]);
  const [editId, setEditId] = useState(null);
  const [savingField, setSavingField] = useState(null); // 'startDate' | 'initialHash' | 'finalHash'
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [expertize, setExpertize] = useState([]);
  const [isPage, setIsPage] = useState(1);
  const [justPage, setJustPage] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [signleExp, setSingleExp] = useState(null);
  const [user, setUser] = useState({});

  const [formData, setFormData] = useState({
    orgName: "",
    orgId: "",
    orgTypeId: "",
    controllers: "",
    workers: "",
    reportWriter: "",
    ordName: "",
    ordPrice: "",
    contract: null,
    contractNumber: "",
    contractDate: "",
    contractPriceDate: "",
    resPer: "",
    resPerSurname: "",
    resPerName: "",
    resPerPartName: "",
    resPerEmail: "",
    orgType: "",
    ordEndDate: "",
    system: 1,
    initialHashFile: null,
    finalHashFile: null,
    malumot: "",
  });
  const [editItemOld, setEditItemOld] = useState({
    orgName: "",
    orgId: "",
    orgTypeId: "",
    controllers: "",
    workers: "",
    reportWriter: "",
    ordName: "",
    ordPrice: "",
    contract: null,
    contractNumber: "",
    contractDate: "",
    contractPriceDate: "",
    resPer: "",
    resPerSurname: "",
    resPerName: "",
    resPerPartName: "",
    resPerEmail: "",
    orgType: "",
    ordEndDate: "",
    initialHashFile: null,
    finalHashFile: null,
    malumot: "",
  });

  const [selectedProcessStep, setSelectedProcessStep] = useState("");
  const [processStepDate, setProcessStepDate] = useState(null);
  const [processStepFile, setProcessStepFile] = useState(null);
  const [processStepFileName, setProcessStepFileName] = useState("");
  const [processStepNote, setProcessStepNote] = useState("");
  const [processStepQaytaNote, setProcessStepQaytaNote] = useState("");
  const [savedProcessStepStatus, setSavedProcessStepStatus] = useState("");
  const [savedProcessStepDate, setSavedProcessStepDate] = useState(null);
  const [savedProcessStepFileName, setSavedProcessStepFileName] = useState("");
  const [savedProcessStepNote, setSavedProcessStepNote] = useState("");
  const [savedProcessStepQaytaNote, setSavedProcessStepQaytaNote] =
    useState("");
  const [processStepToLiqNote, setProcessStepToLiqNote] = useState("");
  const [savedProcessStepToLiqNote, setSavedProcessStepToLiqNote] =
    useState("");
  const [count, setCount] = useState(0);
  const [statusCount, setStatusCount] = useState([]);
  const [selectedStatusId, setSelectedStatusId] = useState(0);
  const createdConvForOrderIdsRef = useRef(new Set());
  const [addingResPer, setAddingResPer] = useState(false);

  const system = [
    {
      id: 0,
      label: "Jami:",
      value: count,
      accent: "blue",
      icon: "bx bxs-circle",
    },
    {
      id: 1,
      label: "Shartnoma kelgan:",
      value: statusCount.find((item) => item.id === 1)?.count || 0,
      accent: "green",
      icon: "bx bxs-circle-half",
    },
    {
      id: 9,
      label: "To'liq yakunlangan:",
      value: statusCount.find((item) => item.id === 9)?.count || 0,
      accent: "green",
      icon: "bx bxs-circle-half",
    },
    {
      id: 7,
      label: "Qisman yakunlangan:",
      value: statusCount.find((item) => item.id === 7)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 3,
      label: "Xat chiqarilgan:",
      value: statusCount.find((item) => item.id === 3)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 4,
      label: "Xat kelgan:",
      value: statusCount.find((item) => item.id === 4)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 5,
      label: "Jarayonda:",
      value: statusCount.find((item) => item.id === 5)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-half",
    },
    {
      id: 67,
      label: "O'tib ketgan:",
      value: 0,
      accent: "red",
      icon: "bx bxs-circle-half",
    },
    {
      id: 6,
      label: "Hisobotga chiqarilgan:",
      value: statusCount.find((item) => item.id === 6)?.count || 0,
      accent: "blue",
      icon: "bx bxs-circle-three-quarter",
    },
    {
      id: 8,
      label: "Qayta ekspertizada:",
      value: statusCount.find((item) => item.id === 8)?.count || 0,
      accent: "aqua",
      icon: "bx bxs-circle-quarter",
    },
    {
      id: 10,
      label: "Vaqtincha to'xtatilgan:",
      value: statusCount.find((item) => item.id === 10)?.count || 0,
      accent: "red",
      icon: "bx bxs-circle-three-quarter",
    },
    {
      id: 2,
      label: "Tizimga qo'shilgan:",
      value: statusCount.find((item) => item.id === 2)?.count || 0,
      accent: "muted",
      icon: "bx bxs-circle-quarter",
    },
  ];

  const handlePdf = () => {
    navigate("/page/viewer");
  };

  const handleModal = (id) => {
    // console.log(id);
    const exp = expertize.find((item) => item.id === id);
    setSingleExp(exp);
    // console.log(exp);
    handleNewCreate(exp);
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setSelectedVuln("");
      setZaiflikText("");
      setOqibatlarText("");
      setTavsiyaText("");
    }
  };

  const openDrawer = () => {
    setIsUpdate(false);
    setEditId(null);
    setChangedFields([]);
    setCreateErrors([]);
    setFileName(null);
    setFormData({
      orgName: "",
      orgId: "",
      orgTypeId: "",
      controllers: "",
      workers: "",
      reportWriter: "",
      ordName: "",
      ordPrice: "",
      contract: null,
      contractNumber: "",
      contractDate: "",
      contractPriceDate: "",
      resPer: "",
      resPerSurname: "",
      resPerName: "",
      resPerPartName: "",
      resPerEmail: "",
      orgType: "",
      ordEndDate: "",
      system: 1,
      initialHashFile: null,
      finalHashFile: null,
      malumot: "",
    });
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
    setCreateErrors([]);
  };
  const closeDrawer1 = () => setDrawerOpen1(false);

  const getUserFullNameById = (userId) => {
    const user = items.find((item) => item.id === userId);

    if (user) {
      return `${user.surname} ${user.name}`;
    }

    return "Foydalanuvchi topilmadi";
  };

  const handleCreate = async () => {
    const errs = [];
    if (!formData.orgName) errs.push("orgName");
    if (!formData.orgId) errs.push("orgId");
    if (!formData.ordName) errs.push("ordName");
    if (!formData.contract) errs.push("contract");
    if (!formData.contractNumber) errs.push("contractNumber");
    if (!formData.contractDate) errs.push("contractDate");
    if (!formData.contractPriceDate) errs.push("contractPriceDate");
    if (!formData.ordEndDate) errs.push("ordEndDate");
    if (!formData.orgType) errs.push("orgType");
    if (!formData.orgTypeId) errs.push("orgTypeId");
    if (
      !formData.controllers ||
      (Array.isArray(formData.controllers) && formData.controllers.length === 0)
    )
      errs.push("controllers");
    if (
      !formData.workers ||
      (Array.isArray(formData.workers) && formData.workers.length === 0)
    )
      errs.push("workers");
    if (errs.length > 0) {
      setCreateErrors(errs);
      toast.error("Majburiy maydonlarni to'ldiring!");
      return;
    }
    setCreateErrors([]);
    setUploadProgress(0);
    setIsUploading(true);

    const file = formData.contract;

    const doneRes = await uploadFileViaRpc(
      stRef,
      file,
      null,

      (p) => {
        setUploadProgress(p);
      },
    );

    formData.contract = doneRes.fileId;
    const payload = {
      1: formData.orgName,
      2: formData.orgId,
      3: formData.orgTypeId,
      4: [
        ...(Array.isArray(formData.controllers)
          ? formData.controllers.map((item) => ({ ...item, a4: 1 }))
          : []),
        ...(Array.isArray(formData.workers)
          ? formData.workers.map((item) => ({ ...item, a4: 1 }))
          : []),
        ...(Array.isArray(formData.reportWriter)
          ? formData.reportWriter.map((item) => ({ ...item, a4: 1 }))
          : []),
      ],
      6: formData.ordName,
      7: formData.ordPrice,
      8: formData.contractNumber,
      9: {
        1: formData.contract,
        2: fileName,
        3: file.size,
      },
      10: formData.contractDate,
      11: formData.contractPriceDate,
      12: "69945166fe5d6b0cd06c28d8",
      13: formData.ordEndDate,
      14: formData.orgType,
      15: formData.system,
    };

    const res = await sendRpcRequest(stRef, METHOD.ORDER_CREATE, payload);

    if (res.status == METHOD.OK) {
      toast.success("Muvaffaqiyatli qo'shildi!");
      const data = await getAllExpertize(null, true);
      if (data) {
        setExpertize(data);
        setJustPage(0);
      }
    } else {
      toast.error("Xatolik yuz berdi!");
    }

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

  const saveStartDate = async () => {
    if (!editId || !formData.startDate) return;
    setSavingField("startDate");
    try {
      const res1 = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: editId,
        2.8: formData.startDate,
      });
      if (res1.status !== METHOD.OK) {
        toast.error(res1?.message || "Sanani saqlashda xatolik");
        return;
      }
      const res2 = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: editId,
        3: 5,
      });
      if (res2.status === METHOD.OK) {
        toast.success("Sana saqlandi!");
        setEditItemOld((prev) => ({ ...prev, startDate: formData.startDate }));
        const data = await getAllExpertize(null, true);
        if (data) {
          setExpertize(data);
          setJustPage(0);
        }
      } else {
        toast.error(res2?.message || "Status yangilashda xatolik");
      }
    } catch (error) {
      toast.error(error?.message || "Saqlashda xatolik");
    } finally {
      setSavingField(null);
    }
  };

  const saveInitialHashFile = async () => {
    if (
      !editId ||
      !formData.initialHashFile ||
      !(formData.initialHashFile instanceof File)
    )
      return;
    setSavingField("initialHash");
    try {
      setUploadProgress(0);
      setIsUploading(true);
      const uploadRes = await uploadFileViaRpc(
        stRef,
        formData.initialHashFile,
        editId,
        (p) => {
          setUploadProgress(p);
          if (p === 100) setIsUploading(false);
        },
      );
      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: editId,
        6.9: {
          1: uploadRes.fileId,
          2: formData.initialHashFile.name,
          3: formData.initialHashFile.size,
        },
      });
      if (res.status === METHOD.OK) {
        toast.success("Boshlang'ich hash fayli saqlandi!");
        setFormData((prev) => ({ ...prev, initialHashFile: null }));
        setEditItemOld((prev) => ({ ...prev, initialHashFile: null }));
        const data = await getAllExpertize(null, true);
        if (data) {
          setExpertize(data);
          setJustPage(0);
        }
      } else {
        toast.error(res?.message || "Saqlashda xatolik");
      }
    } catch (error) {
      toast.error(error?.message || "Saqlashda xatolik");
    } finally {
      setSavingField(null);
    }
  };

  const saveFinalHashFile = async () => {
    if (
      !editId ||
      !formData.finalHashFile ||
      !(formData.finalHashFile instanceof File)
    )
      return;
    setSavingField("finalHash");
    try {
      setUploadProgress(0);
      setIsUploading(true);
      const uploadRes = await uploadFileViaRpc(
        stRef,
        formData.finalHashFile,
        editId,
        (p) => {
          setUploadProgress(p);
          if (p === 100) setIsUploading(false);
        },
      );
      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: editId,
        6.11: {
          1: uploadRes.fileId,
          2: formData.finalHashFile.name,
          3: formData.finalHashFile.size,
        },
      });

      // console.log(res);
      if (res.status === METHOD.OK) {
        toast.success("Yakuniy hash fayli saqlandi!");
        setFormData((prev) => ({ ...prev, finalHashFile: null }));
        setEditItemOld((prev) => ({ ...prev, finalHashFile: null }));
        const data = await getAllExpertize(null, true);
        if (data) {
          setExpertize(data);
          setJustPage(0);
        }
      } else {
        toast.error(res?.message || "Saqlashda xatolik");
      }
    } catch (error) {
      toast.error(error?.message || "Saqlashda xatolik");
    } finally {
      setSavingField(null);
    }
  };

  const formatBufferToId = (data) => {
    if (!data) return null;
    const bufferArray = data.buffer
      ? Object.values(data.buffer)
      : Object.values(data);

    return bufferArray
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("");
  };

  function bufferToObjectId(bufferObj) {
    const bytes = Object.values(bufferObj);
    return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  const getAllExpertize = async (
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
      // console.log(res);
      if (res.status == METHOD.OK) {
        const page = formatBufferToId(res[1].cursorId);
        if (page != null) {
          setIsPage(page);
        }
        setNextPage(page);

        // if()

        const list = res[1]?.docs;

        console.log(res[1]);

        if (!Array.isArray(list)) {
          // console.error("docs kelmadi yoki array emas", res);
          return;
        }

        const formattedData = list.map((item) => {
          const base = item["1"] || [];
          const dates = item["2"] || {};
          const sU = item["5"];
          // console.log(sU);
          return {
            id: bufferToObjectId(item._id?.buffer),
            repport: base["10"] || "",
            qaytaxat: base["8"] || "",
            toliqxat: base["7"] || "",
            system: base["9"] || 1,
            orgName: base[0] || "",
            orgUuid: base[1] || "",
            shortName: base[3] || "",
            inn: base[4] || "",
            director: base[5] || "",
            orgType: base[6] || "",
            malumot: base["1.6"] ?? base.malumot ?? "",
            contractDate: dates["1"] || null,
            startDate: dates["8"] || null,
            endDate: dates["3"] || null,
            status: item["3"],
            number: item["10"],
            files: item["6"] || [],
            controllers: (item["7"] || []).filter((p) => p.a3 === 1),
            workers: (item["7"] || []).filter((p) => p.a3 === 2),
            reportWriter: (item["7"] || []).filter((p) => p.a3 === 3),
            resPerList: (item["7"] || []).filter((p) => p.a3 === 4),
            active: item["18"],
            dates: item["2"] || {},
            resPhone: base[5],

            sU: sU,
          };
        });

        console.log(formattedData);
        return formattedData;
      }
      console.log(res[1]);
      // return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const res = await sendRpcRequest(stRef, METHOD.USER_GET_FULL, {});
        // console.log(res);
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
                count: user["7"] || user[7],
                orderCounts:
                  typeof (user["orderCounts"] ?? user["ordersCount"]) ===
                  "object"
                    ? user["orderCounts"] || user["ordersCount"] || {}
                    : {},
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

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm.trim());
    }, 400);
    return () => clearTimeout(t);
  }, [searchTerm]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllExpertize(
        null,
        true,
        selectedStatusId,
        debouncedSearchTerm || null,
      );
      if (data) {
        setExpertize(data);
        setJustPage(0);
      }
    };
    fetch();
  }, [debouncedSearchTerm, selectedStatusId]);

  const normalizedQuery = searchTerm.trim().toLowerCase();
  const filteredExpertize = normalizedQuery
    ? (expertize || []).filter((item) => {
        const controllers = (item.controllers || []).map((c) => c.a2).join(" ");
        const workers = (item.workers || []).map((w) => w.a2).join(" ");
        const haystack = [
          item.orgName,
          item.shortName,
          item.number,
          item.orgUuid,
          item.orgType,
          item.director,
          controllers,
          workers,
          item.hisobot,
          item.ball,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      })
    : expertize || [];

  const totalItems = filteredExpertize.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredExpertize.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [expertize?.length, totalPages, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    setProcessStepDate(null);
    setProcessStepFile(null);
    setProcessStepFileName("");
    setProcessStepNote("");
    setProcessStepQaytaNote("");
    setProcessStepToLiqNote("");
    setSavedProcessStepDate(null);
    setSavedProcessStepFileName("");
    setSavedProcessStepNote("");
    setSavedProcessStepQaytaNote("");
    setSavedProcessStepToLiqNote("");
  }, [selectedProcessStep]);

  const downloadFileAll = async (id) => {
    await downloadFileViaRpc(stRef, id, id, (p) => {
      // console.log(p);
      setUploadProgress(p);
      setIsUploading(true);
      if (p === 100) setIsUploading(false);
    });
  };

  const handleVulnChange = (e) => {
    const value = e.target.value;
    setSelectedVuln(value);

    if (value === "Ilova kodini yaxlitligi joriy etilmaganligi") {
      setZaiflikText(
        `Ilova o‘z kodlari va imzo ma’lumotlarining yaxlitligini va haqiqiyligini tekshirmaydi. Bunday holatda ilova qayta yig’ilgan, statik modifikatsiyaga uchragan yoki noto‘g‘ri/soxta sertifikat bilan imzolangan bo‘lsa, server yoki ilova buni aniqlay olmaydi. Mazkur turdagi zaiflik “MASWE-0104” (inglizcha. App Integrity Not Verified – Ilova yaxlitligi tasdiqlanmasligi) identifikator raqamiga ega kategoriyaga mansub.`,
      );
      setOqibatlarText(
        `Ilovani kodiga o’zgartirish kiritish va uni qayta yig‘ish, zararli kod qo‘shish yoki imzoni almashtirib, foydalanuvchilarga zarar yetkazuvchi soxta talqinlarni tarqatish.`,
      );
      setTavsiyaText(
        `Ilova ishga tushganida o‘zining imzosini, to’liqligini tekshirish mexanizmini quyi darajadagi (Native C++) dasturlash tillaridan foydalangan holda joriy etish.`,
      );
    } else if (value === "Malumotlarni oshkor etilishi") {
      setZaiflikText(`Ekspertiza davrida axborot tizimiga tegishli ichki ma’lumotlar, xususan muhim qismlarga kirish oynalari, turli xil kengaytmadagi fayllar Internet tarmog‘ining barcha foydalanuvchilari uchun ochiq holatdaligi, ya’ni ichki resurslarga bo‘ladigan murojaatlarni boshqarish hamda nazorat qilish mexanizmlari qo‘llanmaganlik holati aniqlandi.

Mazkur turdagi zaiflik CWE (Common Weaknes Enumeration) dasturiy va apparat ta’minotlarning zaifliklarini kategoriyalash tizimida “CWE-200” (inglizcha. Exposure of Sensitive Information to an Unauthorized Actor – Ishonchsiz foydalanuvchiga ma’lumotlarni ochiqlanishi) identifikator raqamiga ega kategoriyaga mansub.

Bundan tashqari, “Open Web Application Security Project” (Veb-ilovalarning xavfsizligini ta’minlash ochiq loyihasi) OWASP Top 2021 reytingida: 1-o‘rindagi (inglizcha. Broken Access Control – Ruxsatlar nazoratini buzilishi) zaiflik turiga kiritilgan.

Quyidagi misolda aniqlangan zaiflik ekspluatatsiyasi holati taqdim etilgan.`);
      setOqibatlarText(
        `Mazkur holat, ixtiyoriy Internet tarmog‘i foydalanuvchisiga resurslarga murojaat qilish orqali ulardan foydalanish imkoniyatini taqdim etadi.`,
      );
      setTavsiyaText(
        `Ushbu qism bilan bog‘liq dasturiy kodni qayta ko‘rib chiqish hamda takomillashtirish.`,
      );
    } else if (value === "Himoyalanmagan havolalar") {
      setZaiflikText(`Ilovadagi URL manzillar teskari muhandislik usulini ishlatgan holda oxirgi nuqtalar va/yoki kutubxonalar haqida maʼlumotlarni olish imkoniyatini beradi. Ushbu ma’lumotlardan uchinchi tomon ruxsatsiz ilovalar yoki skriptlar yozish uchun foydalanishi mumkin.

Bundan tashqari, agar shifrlash to‘g‘ri sozlanmagan bo‘lsa, tarmoqdagi tajovuzkor barcha aloqalarni ko‘rishi va tarkibni o‘zboshimchalik bilan o‘zgartirishi mumkin. Agar ma’lumotlar ilovaning nozik joylarida ishlatilsa yoki ma’lumotlar ijroga ta’sir qilsa, bu ilovada jiddiy oqibatlarga olib kelishi mumkin.

Mazkur turdagi zaiflik “MASWE-0058” (inglizcha. Insecure Deep Links – Xavfsiz bo‘lmagan havolalar) identifikator raqamiga ega kategoriyaga mansub. Shuningdek, OWASP Mobile Top 10 2024 reytingida 8-o‘rinda (inglizcha. Security Misconfiguration – Noto‘g‘ri xavfsizlik konfiguratsiyasi) zaiflik turiga kiritilgan.`);
      setOqibatlarText(
        `Ochiq havolalar to‘g‘risida ma’lumotlarni qo‘lga kiritish holatiga olib kelishi mumkin.`,
      );
      setTavsiyaText(
        `Ilovada foydalanilayotgan tashqi va ichki resurs havolalarini ochiq matn shaklida saqlamaslik.`,
      );
    } else {
      setZaiflikText("");
      setOqibatlarText("");
      setTavsiyaText("");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (!isUpdate && name)
      setCreateErrors((prev) => prev.filter((f) => f !== name));

    if (!isUpdate) return;

    const map = {
      orgName: 4.1,
      orgId: 4.2,
      orgTypeId: 4.3,
      ordName: 4.4,
      ordPrice: 4.5,
      contractNumber: 4.6,
      contractDate: 4.7,
      contractPriceDate: 4.8,
      contract: 4.9,
      resPer: 5,
      resPerSurname: 5,
      resPerName: 5,
      resPerPartName: 5,
      resPerEmail: 5,
      controllers: 5.1,
      orgType: 5.2,
      workers: 5.3,
      ordEndDate: 5.4,
      permLetter: 5.5,
      consentLetter: 5.6,
      reportWriter: 20,
      malumot: 1.6,
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

  const markFieldChanged = (code, value, oldValue) => {
    if (!isUpdate) return;
    const isSame = value === oldValue;
    setChangedFields((prev) => {
      if (isSame) {
        return prev.filter((c) => c !== code);
      }
      return prev.includes(code) ? prev : [...prev, code];
    });
  };

  const focusField = (fieldId) => {
    const el = document.getElementById(fieldId);
    if (el) {
      el.focus();
      el.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    const fallback = document.querySelector(
      `[data-field="${fieldId}"] input, [data-field="${fieldId}"] .MuiPickersSectionList-root`,
    );
    if (fallback && fallback.focus) {
      fallback.focus();
      fallback.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    setFormData((prev) => ({
      ...prev,
      contract: file,
    }));
    if (!isUpdate)
      setCreateErrors((prev) => prev.filter((f) => f !== "contract"));

    if (isUpdate) {
      const isChanged = true;
      setChangedFields((prev) => {
        if (isChanged && !prev.includes(4.9)) {
          return [...prev, 4.9];
        }
        return prev;
      });
    }
  };
  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    setFormData((prev) => ({
      ...prev,
      permLetter: file,
    }));

    if (isUpdate) {
      const isChanged = true;
      setChangedFields((prev) => {
        if (isChanged && !prev.includes(4.9)) {
          return [...prev, 4.9];
        }
        return prev;
      });
    }
  };
  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);

    setFormData((prev) => ({
      ...prev,
      consentLetter: file,
    }));

    if (isUpdate) {
      const isChanged = true;
      setChangedFields((prev) => {
        if (isChanged && !prev.includes(4.9)) {
          return [...prev, 4.9];
        }
        return prev;
      });
    }
  };

  const handleInitialHashFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData((prev) => ({ ...prev, initialHashFile: file }));
  };

  const handleFinalHashFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData((prev) => ({ ...prev, finalHashFile: file }));
  };

  const handleHashDrop = (field, e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer?.files?.[0];
    if (!file) return;
    if (field === "initial") {
      setFormData((prev) => ({ ...prev, initialHashFile: file }));
    } else {
      setFormData((prev) => ({ ...prev, finalHashFile: file }));
    }
  };

  const handleHashDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleProcessStepFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProcessStepFileName(file.name);
    setProcessStepFile(file);
  };

  const sendProcessStepPayload = async (payload) => {
    if (!formData.id) {
      toast.error("Buyurtma tanlanmagan");
      return false;
    }
    try {
      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, payload);
      if (res.status === METHOD.OK) {
        const data = await getAllExpertize(null, true);
        if (data) {
          setExpertize(data);
          setJustPage(0);
        }
        toast.success("Saqlandi");
        return true;
      }
      toast.error(res.message || "Saqlashda xatolik");
      return false;
    } catch (err) {
      // console.error(err);
      toast.error("Saqlashda xatolik");
      return false;
    }
  };

  const handleTekshirtirish = async (orderId) => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: orderId,
        5: 2,
      });
      if (res.status === METHOD.OK) {
        const data = await getAllExpertize(null, true);
        if (data) {
          setExpertize(data);
          setJustPage(0);
        }
        toast.success("Tekshirishga yuborildi");
      } else {
        toast.error(res.message || "Xatolik");
      }
    } catch (err) {
      // console.error(err);
      toast.error("Saqlashda xatolik");
    }
  };
  const handleNextExp = async (orderId) => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: orderId,
        5: 3,
      });
      if (res.status === METHOD.OK) {
        const data = await getAllExpertize(null, true);
        if (data) {
          setExpertize(data);
          setJustPage(0);
        }
        toast.success("Bo'lim boshlig'iga yuborildi");
      } else {
        toast.error(res.message || "Xatolik");
      }
    } catch (err) {
      // console.error(err);
      toast.error("Saqlashda xatolik");
    }
  };

  const handleBackExp = async (orderId) => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: orderId,
        5: 1,
      });
      if (res.status === METHOD.OK) {
        const data = await getAllExpertize(null, true);
        if (data) {
          setExpertize(data);
          setJustPage(0);
        }
        toast.success("Bajaruvchiga yuborildi");
      } else {
        toast.error(res.message || "Xatolik");
      }
    } catch (err) {
      // console.error(err);
      toast.error("Saqlashda xatolik");
    }
  };

  const handleSaveProcessStepStatus = async () => {
    if (!selectedProcessStep) {
      toast.error("Jarayonni tanlang");
      return;
    }
    const ok = await sendProcessStepPayload({
      19: formData.id,
      3: parseInt(selectedProcessStep, 10),
    });
    if (ok) setSavedProcessStepStatus(selectedProcessStep);
  };

  const handleSaveProcessStepDate = async (dateKey) => {
    if (!processStepDate) {
      toast.error("Sanani tanlang");
      return;
    }
    const p = {
      19: formData.id,
      [dateKey]: processStepDate,
    };
    const ok = await sendProcessStepPayload(p);
    if (ok) setSavedProcessStepDate(processStepDate);
  };

  const handleSaveProcessStepFile = async (fileKey) => {
    if (!processStepFile) {
      toast.error("Faylni tanlang");
      return;
    }
    setUploadProgress(0);
    setIsUploading(true);
    try {
      const uploadRes = await uploadFileViaRpc(
        stRef,
        processStepFile,
        formData.id,
        (p) => {
          setUploadProgress(p);
          if (p === 100) setIsUploading(false);
        },
      );
      const fileSize = processStepFile.size || 0;
      const name = processStepFileName || processStepFile.name;
      const ok = await sendProcessStepPayload({
        19: formData.id,
        [fileKey]: {
          1: uploadRes.fileId,
          2: name,
          3: fileSize,
        },
      });
      if (ok) setSavedProcessStepFileName(name);
    } catch (err) {
      setIsUploading(false);
      throw err;
    }
  };

  const userMe = async () => {
    const res = await sendRpcRequest(stRef, METHOD.USER_GET, {});
    if (res.status === METHOD.OK) {
      // console.log(res[1]);
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

  const handleSaveProcessStepNote = async () => {
    if (!processStepNote?.trim()) {
      toast.error("Ma'lumot yozing");
      return;
    }
    const trimmed = processStepNote.trim();
    const ok = await sendProcessStepPayload({
      19: formData.id,
      1.11: trimmed,
    });
    if (ok) setSavedProcessStepNote(trimmed);
  };

  const handleSaveProcessStepQaytaNote = async () => {
    if (!processStepQaytaNote?.trim()) {
      toast.error("Ma'lumot yozing");
      return;
    }
    const trimmed = processStepQaytaNote.trim();
    const ok = await sendProcessStepPayload({
      19: formData.id,
      1.9: trimmed,
    });
    if (ok) setSavedProcessStepQaytaNote(trimmed);
  };

  const handleSaveProcessStepToLiqNote = async () => {
    if (!processStepToLiqNote?.trim()) {
      toast.error("Ma'lumot yozing");
      return;
    }
    const trimmed = processStepToLiqNote.trim();
    const ok = await sendProcessStepPayload({
      19: formData.id,
      1.8: trimmed,
    });
    if (ok) setSavedProcessStepToLiqNote(trimmed);
  };

  const handleEdit = async (item) => {
    // console.log(item);
    try {
      if (item) {
        const resPerList = item.resPerList?.length
          ? item.resPerList
          : item.director
            ? [
                {
                  a1: item.director,
                  a2: getUserFullNameById(item.director) || item.director,
                  a3: 4,
                },
              ]
            : [];
        const firstResPerId = resPerList[0]?.a1;
        const resPerUser = firstResPerId
          ? items.find((i) => String(i.id) === String(firstResPerId))
          : null;
        const resPerSurname = resPerUser?.surname ?? "";
        const resPerName = resPerUser?.name ?? "";
        const resPerPartName = resPerUser?.partName ?? "";
        const resPerEmail = resPerUser?.email ?? "";

        setFormData({
          ...formData,
          id: item.id,
          orgName: item.orgName,
          orgId: item.orgUuid,
          orgTypeId: item.orgUuid,
          ordName: item.shortName,
          ordPrice: item.inn,
          contractNumber: item.number,
          contractDate: item.contractDate,
          contractPriceDate: item.startDate,
          resPer: resPerList,
          resPerSurname,
          resPerName,
          resPerPartName,
          resPerEmail,
          reportWriter: item.reportWriter || [],
          contract: item.files[0]?.["2"],
          controllers: item.controllers,
          orgType: item.orgType,
          workers: item.workers,
          ordEndDate: item.endDate,
          malumot: item.malumot ?? "",
        });
        setEditItemOld({
          ...formData,
          id: item.id,
          orgName: item.orgName,
          orgId: item.orgUuid,
          orgTypeId: item.orgUuid,
          ordName: item.shortName,
          ordPrice: item.inn,
          contractNumber: item.number,
          contractDate: item.contractDate,
          contractPriceDate: item.startDate,
          resPer: resPerList,
          resPerSurname,
          resPerName,
          resPerPartName,
          resPerEmail,
          reportWriter: item.reportWriter || [],
          contract: item.files[0]?.["2"],
          controllers: item.controllers,
          orgType: item.orgType,
          workers: item.workers,
          ordEndDate: item.endDate,
          malumot: item.malumot ?? "",
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

  const handleNextStep = async (item) => {
    try {
      // console.log(item);
      setEditId(item.id);
      setFormData((prev) => ({
        ...prev,
        id: item.id,
        contractDate: item.contractDate || prev.contractDate,
        initialHashFile: null,
        finalHashFile: null,
      }));
      setDrawerOpen1(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsJarayon = () => {
    try {
      // console.log(editId);
      setDrawerOpen1(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    try {
      const payload = { 19: formData.id };

      if (formData.contract && formData.contract instanceof File) {
        setUploadProgress(0);
        setIsUploading(true);

        const uploadRes = await uploadFileViaRpc(
          stRef,
          formData.contract,
          null,
          (p) => {
            setUploadProgress(p);
            if (p === 100) setIsUploading(false);
          },
        );

        formData.contract = uploadRes.fileId;
      }
      if (formData.permLetter && formData.permLetter instanceof File) {
        setUploadProgress(0);
        setIsUploading(true);

        const uploadRes = await uploadFileViaRpc(
          stRef,
          formData.permLetter,
          null,
          (p) => {
            setUploadProgress(p);
            if (p === 100) setIsUploading(false);
          },
        );

        formData.permLetter = uploadRes.fileId;
      }
      if (formData.consentLetter && formData.consentLetter instanceof File) {
        setUploadProgress(0);
        setIsUploading(true);

        const uploadRes = await uploadFileViaRpc(
          stRef,
          formData.consentLetter,
          null,
          (p) => {
            setUploadProgress(p);
            if (p === 100) setIsUploading(false);
          },
        );

        formData.consentLetter = uploadRes.fileId;
      }

      // console.log(formData)
      // return

      const fieldMap = {
        orgName: 1.1,
        orgId: 1.2,
        orgTypeId: 1.3,
        ordName: 1.4,
        ordPrice: 1.9,
        contractNumber: 1.7,
        contractDate: 2.2,
        contractPriceDate: 2.3,
        contract: 2.5,
        orgType: 1.7,
        ordEndDate: 2.4,
        permLetter: 6.3,
        consentLetter: 6.1,
        malumot: 1.6,
      };

      const updatedFieldCodes = [];

      Object.keys(fieldMap).forEach((key) => {
        if (formData[key] !== editItemOld[key]) {
          const code = fieldMap[key];
          // console.log(code);
          if (code == 6.3 || code == 6.1) {
            payload[code] = {
              1: formData[key],
              2: fileName,
            };
            // console.log(payload)
          } else if (key === "department" || key === "role") {
            payload[code] = parseInt(formData[key]);
          } else {
            payload[code] = formData[key];
          }

          updatedFieldCodes.push(code);
        }
      });

      // Biriktirilgan shaxs: inputlar orqali kiritilgan bo'lsa USER_CREATE_ORG bilan yaratib, payload[7]ga qo'shamiz
      let resPerForPayload = Array.isArray(formData.resPer)
        ? formData.resPer
        : [];
      const resPerSurnameSanitized = (formData.resPerSurname || "")
        .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\u02BC\u02B9\u2018\u2019' -]/g, "")
        .trim();
      const resPerEmailTrimmed = (formData.resPerEmail || "").trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const resPerInputsFilled =
        resPerSurnameSanitized &&
        (formData.resPerName || "").trim() &&
        emailRegex.test(resPerEmailTrimmed);
      if (resPerInputsFilled) {
        const resPerNameTrimmed = (formData.resPerName || "").trim();
        const resPerPartNameTrimmed = (formData.resPerPartName || "").trim();
        const createResPerRes = await sendRpcRequest(
          stRef,
          METHOD.USER_CREATE_ORG,
          {
            1: resPerSurnameSanitized,
            2: resPerNameTrimmed,
            3: resPerPartNameTrimmed,
            4: resPerEmailTrimmed,
          },
        );
        if (createResPerRes.status === METHOD.OK) {
          const resPerUserId = formatBufferToId(createResPerRes[1]);
          const resPerFullName = [resPerSurnameSanitized, resPerNameTrimmed]
            .filter(Boolean)
            .join(" ");
          resPerForPayload = [
            { a1: resPerUserId, a2: resPerFullName, a3: 4, a4: 1 },
          ];
        } else {
          toast.error("Biriktirilgan shaxs yaratishda xatolik!");
          return;
        }
      }

      // controllers (a3:1), workers (a3:2), reportWriter (a3:3), resPer (a3:4) bitta maydonga yuboriladi
      const controllersChanged =
        JSON.stringify(formData.controllers || []) !==
        JSON.stringify(editItemOld.controllers || []);
      const workersChanged =
        JSON.stringify(formData.workers || []) !==
        JSON.stringify(editItemOld.workers || []);
      const reportWriterChanged =
        JSON.stringify(formData.reportWriter || []) !==
        JSON.stringify(editItemOld.reportWriter || []);
      const resPerFromInputsChanged =
        (formData.resPerSurname ?? "") !== (editItemOld.resPerSurname ?? "") ||
        (formData.resPerName ?? "") !== (editItemOld.resPerName ?? "") ||
        (formData.resPerPartName ?? "") !==
          (editItemOld.resPerPartName ?? "") ||
        (formData.resPerEmail ?? "") !== (editItemOld.resPerEmail ?? "");
      const resPerChanged =
        resPerFromInputsChanged ||
        (resPerInputsFilled === false &&
          JSON.stringify(formData.resPer || []) !==
            JSON.stringify(editItemOld.resPer || []));
      if (
        controllersChanged ||
        workersChanged ||
        reportWriterChanged ||
        resPerChanged
      ) {
        payload[7] = [
          ...(Array.isArray(formData.controllers) ? formData.controllers : []),
          ...(Array.isArray(formData.workers) ? formData.workers : []),
          ...(Array.isArray(formData.reportWriter)
            ? formData.reportWriter
            : []),
          ...resPerForPayload,
        ];
        updatedFieldCodes.push(7);
      }

      // console.log(payload)
      // return

      if (updatedFieldCodes.length === 0) {
        toast.error("Hech qanday o'zgarish qilinmadi");
        return;
      }

      // personUpdate
      // console.log("Payload:", payload);
      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, payload);

      if (res.status === METHOD.OK) {
        const finalResPer = resPerInputsFilled
          ? resPerForPayload
          : formData.resPer;
        setItems((prev) =>
          prev.map((item) =>
            item.id === formData.id ? { ...item, ...formData } : item,
          ),
        );
        const data = await getAllExpertize(null, true);
        if (data) {
          setExpertize(data);
          setJustPage(0);
        }

        setChangedFields([]);

        setEditItemOld({
          ...formData,
          resPer: finalResPer,
          resPerSurname: formData.resPerSurname,
          resPerName: formData.resPerName,
          resPerPartName: formData.resPerPartName,
          resPerEmail: formData.resPerEmail,
        });

        toast.success("Foydalanuvchi muvaffaqiyatli yangilandi");
      } else {
        toast.error("Xatolik: Server ma'lumotni qabul qilmadi");
      }
    } catch (err) {
      // console.error("Update Error:", err);
      toast.error("Foydalanuvchi yangilanmadi, tizim xatosi");
    }
  };

  const handleTashkilotniQoshish = async () => {
    const resPerSurnameSanitized = (formData.resPerSurname || "")
      .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\u02BC\u02B9\u2018\u2019' -]/g, "")
      .trim();
    const resPerEmailTrimmed = (formData.resPerEmail || "").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !resPerSurnameSanitized ||
      !(formData.resPerName || "").trim() ||
      !emailRegex.test(resPerEmailTrimmed)
    ) {
      toast.error("Biriktirilgan shaxs: Familiya, Ism va Email to'ldiring");
      return;
    }
    if (!formData.id) {
      toast.error("Buyurtma tanlanmagan");
      return;
    }
    setAddingResPer(true);
    try {
      const resPerNameTrimmed = (formData.resPerName || "").trim();
      const resPerPartNameTrimmed = (formData.resPerPartName || "").trim();
      const createResPerRes = await sendRpcRequest(
        stRef,
        METHOD.USER_CREATE_ORG,
        {
          1: resPerSurnameSanitized,
          2: resPerNameTrimmed,
          3: resPerPartNameTrimmed,
          4: resPerEmailTrimmed,
        },
      );
      if (createResPerRes.status !== METHOD.OK) {
        toast.error("Biriktirilgan shaxs yaratishda xatolik!");
        setAddingResPer(false);
        return;
      }
      const resPerUserId = formatBufferToId(createResPerRes[1]);
      const resPerFullName = [resPerSurnameSanitized, resPerNameTrimmed]
        .filter(Boolean)
        .join(" ");
      const resPerForPayload = [
        { a1: resPerUserId, a2: resPerFullName, a3: 4, a4: 1 },
      ];
      const payload7 = [
        ...(Array.isArray(formData.controllers)
          ? formData.controllers.map((item) => ({ ...item, a4: 1 }))
          : []),
        ...(Array.isArray(formData.workers)
          ? formData.workers.map((item) => ({ ...item, a4: 1 }))
          : []),
        ...(Array.isArray(formData.reportWriter)
          ? formData.reportWriter.map((item) => ({ ...item, a4: 1 }))
          : []),
        ...resPerForPayload,
      ];
      const updateRes = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: formData.id,
        7: payload7,
      });
      if (updateRes.status !== METHOD.OK) {
        toast.error(updateRes?.message || "Buyurtmani yangilashda xatolik");
        setAddingResPer(false);
        return;
      }
      setFormData((prev) => ({
        ...prev,
        resPer: resPerForPayload,
        resPerSurname: resPerSurnameSanitized,
        resPerName: resPerNameTrimmed,
        resPerPartName: resPerPartNameTrimmed,
        resPerEmail: resPerEmailTrimmed,
      }));
      setEditItemOld((prev) => ({
        ...prev,
        resPer: resPerForPayload,
        resPerSurname: resPerSurnameSanitized,
        resPerName: resPerNameTrimmed,
        resPerPartName: resPerPartNameTrimmed,
        resPerEmail: resPerEmailTrimmed,
      }));
      setChangedFields((prev) => prev.filter((c) => c !== 5));
      const data = await getAllExpertize(null, true);
      if (data) {
        setExpertize(data);
        setJustPage(0);
      }

      if (!createdConvForOrderIdsRef.current.has(formData.id)) {
        const groupRes = await sendRpcRequest(stRef, METHOD.CHAT_CREATE_CONV, {
          1: 2,
          2: user.id,
          3: formData.contractNumber + " - " + formData.ordName,
        });
        if (groupRes.status === METHOD.OK) {
          const convId = bufferToObjectId(groupRes[1]?.buffer);
          const getAllUserIds = () => {
            const ids = [];
            [
              ...(Array.isArray(formData.controllers)
                ? formData.controllers
                : []),
              ...(Array.isArray(formData.workers) ? formData.workers : []),
              ...(Array.isArray(formData.reportWriter)
                ? formData.reportWriter
                : []),
              ...resPerForPayload,
            ].forEach((item) => {
              const id = item?.a1 ?? item?.value;
              if (id) ids.push(id);
            });
            return ids;
          };
          const userIds = getAllUserIds();
          for (const uid of userIds) {
            await sendRpcRequest(stRef, METHOD.CHAT_ADD_USER, {
              1: convId,
              2: uid,
              3: 2,
            });
          }
          createdConvForOrderIdsRef.current.add(formData.id);
        }
      }

      toast.success("Biriktirilgan shaxs qo'shildi");
    } catch (err) {
      toast.error("Xatolik yuz berdi");
    } finally {
      setAddingResPer(false);
    }
  };

  const handleNewCreate = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
    } catch (error) {
      console.log("");
    }
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const handleNextPage = async (id) => {
    try {
      const newData = await getAllExpertize(
        id,
        true,
        selectedStatusId,
        debouncedSearchTerm || null,
      );
      if (newData) {
        setExpertize(newData);
        setJustPage(justPage + 1);
      }
    } catch (error) {
      console.error("Next Page Error:", error);
    }
  };

  const handleBackPage = async (id) => {
    try {
      const newData = await getAllExpertize(
        id,
        false,
        selectedStatusId,
        debouncedSearchTerm || null,
      );
      if (newData) {
        setExpertize(newData);
        setJustPage(justPage - 1);
      }
    } catch (error) {
      console.error("Back Page Error:", error);
    }
  };

  const handleStatusCardClick = (cardId) => {
    setSelectedStatusId(cardId);
    setJustPage(0);
  };

  const getUser = (item) => {
    if (!item || !Array.isArray(item)) return [];

    return item.map((user) => ({
      value: user.id,
      label: `${user.surname} ${user.name}`,
      count: user.count,
      orderCounts: user.orderCounts || {},
    }));
  };

  const toSelectValue = (arr) => {
    if (!arr || !Array.isArray(arr)) return [];
    return arr.map((x) => {
      const id = x.a1 ?? x.value;
      const label = x.a2 ?? x.label ?? getUserFullNameById(id);
      return { value: id, label: label || "—" };
    });
  };

  const getOrderCountByStatus = (orderCounts, statusId) => {
    const c = orderCounts?.[statusId];
    if (c == null) return 0;
    return typeof c === "object" && "count" in c ? c.count : Number(c) || 0;
  };

  const UserOptionWithCounts = (props) => {
    const [showCounts, setShowCounts] = useState(false);
    const [pos, setPos] = useState({
      top: 0,
      left: undefined,
      right: undefined,
    });
    const wrapperRef = useRef(null);
    const orderCounts = props.data?.orderCounts || {};
    const dropdownOnLeft =
      props.selectProps?.orderCountsDropdownSide === "left";

    const handleMouseEnter = () => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (rect) {
        setPos(
          dropdownOnLeft
            ? {
                top: rect.top,
                right: window.innerWidth - rect.left + 8,
                left: undefined,
              }
            : {
                top: rect.top,
                left: rect.right + 8,
                right: undefined,
              },
        );
        setShowCounts(true);
      }
    };

    const handleMouseLeave = () => {
      setShowCounts(false);
    };

    const dropdownContent =
      showCounts &&
      createPortal(
        <div
          className="user-order-counts-dropdown bg-white dark:bg-[#2b2c40] border border-slate-200 dark:border-white/10 rounded-lg shadow-lg text-[13px] text-slate-600 dark:text-slate-300"
          style={{
            position: "fixed",
            top: pos.top,
            ...(pos.left != null ? { left: pos.left } : {}),
            ...(pos.right != null ? { right: pos.right, left: "auto" } : {}),
            zIndex: 10001,
            minWidth: 220,
            padding: "10px 12px",
          }}
          onMouseEnter={() => setShowCounts(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-xs font-semibold text-slate-500 uppercase mb-2 dark:text-slate-400">
            Buyurtmalar holati (
            {STATUS_STEPS.reduce(
              (sum, step) => sum + getOrderCountByStatus(orderCounts, step.id),
              0,
            )}
            )
          </div>
          <div className="space-y-2 py-1">
            {STATUS_STEPS.map((step) => {
              const cnt = getOrderCountByStatus(orderCounts, step.id);
              return (
                <div
                  key={step.id}
                  className="flex justify-between items-center gap-4 py-0.5"
                >
                  <span className="text-slate-600 dark:text-slate-300 truncate">
                    {step.label}
                  </span>
                  <span
                    className={`flex-shrink-0 font-medium ${
                      cnt > 0 ? "text-[#696cff]" : "text-slate-400"
                    }`}
                  >
                    {cnt}
                  </span>
                </div>
              );
            })}
          </div>
        </div>,
        document.body,
      );

    const isHovered = props.isFocused;
    return (
      <div
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="user-option-wrapper mb-1.5 last:mb-0"
      >
        <div
          {...props.innerProps}
          ref={props.innerRef}
          className={`
            flex items-center w-full px-3 py-2.5 rounded-lg transition-all duration-150
            border border-transparent
            ${
              isHovered
                ? "bg-[#696cff]/10 dark:bg-[#696cff]/20 border-[#696cff]/30 dark:border-[#696cff]/40 text-slate-800 dark:text-slate-100 font-medium"
                : "bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-700/40 text-slate-600 dark:text-slate-300 border-slate-100 dark:border-white/5"
            }
          `}
        >
          <span className="truncate">{props.data?.label}</span>
        </div>
        {dropdownContent}
      </div>
    );
  };

  const formatUserOption = (option, { context }) => {
    return <span>{option.label}</span>;
  };

  const handleControllerChange = (selectedOptions) => {
    const formattedControllers = selectedOptions
      ? selectedOptions.map((option) => ({
          a1: option.value,
          a2: option.label,
          a3: 1,
        }))
      : [];
    setFormData((prev) => ({
      ...prev,
      controllers: formattedControllers,
    }));
    if (!isUpdate)
      setCreateErrors((prev) => prev.filter((f) => f !== "controllers"));
    // console.log(formattedControllers);
    markFieldChanged(
      5.1,
      JSON.stringify(formattedControllers),
      JSON.stringify(editItemOld.controllers || []),
    );
  };

  const handleWorkersChange = (selectedOptions) => {
    const formattedControllers = selectedOptions
      ? selectedOptions.map((option) => ({
          a1: option.value,
          a2: option.label,
          a3: 2,
        }))
      : [];
    setFormData((prev) => ({
      ...prev,
      workers: formattedControllers,
    }));
    if (!isUpdate)
      setCreateErrors((prev) => prev.filter((f) => f !== "workers"));
    markFieldChanged(
      5.3,
      JSON.stringify(formattedControllers),
      JSON.stringify(editItemOld.workers || []),
    );
  };

  const handleResPerChange = (selectedOptions) => {
    const formatted = selectedOptions
      ? selectedOptions.map((option) => ({
          a1: option.value,
          a2: option.label,
          a3: 4,
        }))
      : [];
    setFormData((prev) => ({
      ...prev,
      resPer: formatted,
    }));
    if (!isUpdate)
      setCreateErrors((prev) => prev.filter((f) => f !== "resPer"));
    markFieldChanged(
      5,
      JSON.stringify(formatted),
      JSON.stringify(editItemOld.resPer || []),
    );
  };

  const handleReportWriterChange = (selectedOptions) => {
    const formatted = selectedOptions
      ? selectedOptions.map((option) => ({
          a1: option.value,
          a2: option.label,
          a3: 3,
        }))
      : [];
    setFormData((prev) => ({
      ...prev,
      reportWriter: formatted,
    }));
    if (!isUpdate)
      setCreateErrors((prev) => prev.filter((f) => f !== "reportWriter"));
    markFieldChanged(
      20,
      JSON.stringify(formatted),
      JSON.stringify(editItemOld.reportWriter || []),
    );
  };

  const getExpertizeCount = async () => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.ORDER_GET_COUNT, { 3: 1 });
      // console.log(res);
      if (res.status === METHOD.OK) {
        const totalCount = res[1]?.reduce(
          (sum, item) => sum + (item.count || 0),
          0,
        );

        const allCount = res[1]?.map((item) => {
          return { id: item._id, count: item.count || 0 };
        });
        setCount(totalCount);
        setStatusCount(allCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExpertizeCount();
  }, []);

  return (
    <>
      {drawerOpen && (
        <div onClick={closeDrawer} className="fixed inset-0 bg-black/40 z-40" />
      )}
      {drawerOpen1 && (
        <div
          onClick={closeDrawer1}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
      {/* test */}
      <div
        className={`expertise-drawer fixed top-0 right-0 h-full w-[700px] pr-[30px] bg-white dark:bg-[#2b2c40] z-50 transform transition-transform duration-300
        ${drawerOpen1 ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-500">Yangilash</h2>
          <button onClick={closeDrawer1} className="text-xl">
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex gap-2 items-start">
            <div className="relative w-full flex-1">
              <div className="mb-4">
                <label className="text-sm text-gray-500 uppercase">
                  Ekspertiza uchun zaruriy chora-tadbirlar tashkil etilgan sana
                </label>
              </div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  value={formData.startDate ? dayjs(formData.startDate) : null}
                  onChange={(newValue) => {
                    const nextValue =
                      newValue && newValue.isValid()
                        ? newValue.toISOString()
                        : "";
                    setFormData((prev) => ({
                      ...prev,
                      startDate: nextValue,
                    }));
                    markFieldChanged(4.7, nextValue, editItemOld.startDate);
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      size: "small",
                      className: "mt-6 border rounded-md bg-transparent ",
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            {formData.startDate && (
              <button
                type="button"
                onClick={saveStartDate}
                disabled={savingField === "startDate"}
                className="mt-10 p-2  text-[#bb9769]  border-r rounded-full disabled:opacity-60"
                title="Sanani saqlash"
              >
                {savingField === "startDate" ? (
                  <span className="text-sm">...</span>
                ) : (
                  <SaveIcon sx={{ fontSize: 22 }} />
                )}
              </button>
            )}
          </div>

          {/* Boshlang'ich hash: fayl tanlanganda save icon */}
          <div className="space-y-4 mt-6">
            <div className="w-full flex gap-2 items-end">
              <div className="flex-1">
                <label className="text-sm text-gray-500 uppercase block mb-2">
                  BOSHLANG'ICH HASH QIYMATI
                </label>
                <label
                  htmlFor="initial-hash-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-gray-700/50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors"
                  onDragOver={handleHashDragOver}
                  onDrop={(e) => handleHashDrop("initial", e)}
                >
                  <CloudUploadIcon
                    sx={{ fontSize: 48, color: "#696cff", mb: 1 }}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 text-center px-2">
                    Faylni shu maydonga tashlang yoki maydonni bosing
                  </span>
                  {formData.initialHashFile && (
                    <span className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      {formData.initialHashFile.name}
                    </span>
                  )}
                  <input
                    id="initial-hash-file"
                    type="file"
                    className="hidden"
                    onChange={handleInitialHashFileChange}
                  />
                </label>
              </div>
              {formData.initialHashFile && (
                <button
                  type="button"
                  onClick={saveInitialHashFile}
                  disabled={savingField === "initialHash"}
                  className="mt-10 p-2  text-[#bb9769]  border-r rounded-full disabled:opacity-60"
                  title="Boshlang'ich hash faylini saqlash"
                >
                  {savingField === "initialHash" ? (
                    <span className="text-sm">...</span>
                  ) : (
                    <SaveIcon sx={{ fontSize: 22 }} />
                  )}
                </button>
              )}
            </div>
            <div className="w-full flex gap-2 items-end">
              <div className="flex-1">
                <label className="text-sm text-gray-500 uppercase block mb-2">
                  YAKUNIY HASH QIYMATI
                </label>
                <label
                  htmlFor="final-hash-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-gray-700/50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors"
                  onDragOver={handleHashDragOver}
                  onDrop={(e) => handleHashDrop("final", e)}
                >
                  <CloudUploadIcon
                    sx={{ fontSize: 48, color: "#696cff", mb: 1 }}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400 text-center px-2">
                    Faylni shu maydonga tashlang yoki maydonni bosing
                  </span>
                  {formData.finalHashFile && (
                    <span className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      {formData.finalHashFile.name}
                    </span>
                  )}
                  <input
                    id="final-hash-file"
                    type="file"
                    className="hidden"
                    onChange={handleFinalHashFileChange}
                  />
                </label>
              </div>
              {formData.finalHashFile && (
                <button
                  type="button"
                  onClick={saveFinalHashFile}
                  disabled={savingField === "finalHash"}
                  className="mt-10 p-2  text-[#bb9769]  border-r rounded-full disabled:opacity-60"
                  title="Yakuniy hash faylini saqlash"
                >
                  {savingField === "finalHash" ? (
                    <span className="text-sm">...</span>
                  ) : (
                    <SaveIcon sx={{ fontSize: 22 }} />
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={closeDrawer1}
              className="bg-gray-200 dark:bg-gray-400 px-4 py-2 rounded-md"
            >
              Yopish
            </button>
          </div>
        </div>
      </div>
      {/* test */}
      <div
        className={`expertise-drawer fixed top-0 right-0 h-full w-[700px] pr-[30px] bg-white dark:bg-[#2b2c40] z-50 transform transition-transform duration-300
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-500">
            Tizim qo'shish
          </h2>
          <button onClick={closeDrawer} className="text-xl">
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          {(() => {
            const hasCreateError = (field) =>
              !isUpdate && createErrors.includes(field);
            const currentOrder = editId
              ? (expertize || []).find((e) => String(e?.id) === String(editId))
              : null;
            const hasResPerList = (currentOrder?.resPerList?.length ?? 0) > 0;
            return (
              <>
                <div className="flex justify-between gap-4 items-center">
                  <div className="relative w-[48%]">
                    {isUpdate && !changedFields.includes(4.1) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("orgName")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Tashkilot nomi
                    </label>
                    <input
                      type="text"
                      id="orgName"
                      name="orgName"
                      value={formData.orgName}
                      onChange={handleChange}
                      className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("orgName") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                      placeholder="Tashkilotni kiriting"
                    />
                    {changedFields.includes(4.1) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                  <div className="relative w-[48%] ml-[20px]">
                    {isUpdate && !changedFields.includes(4.2) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("orgId")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Tashkilot idis
                    </label>
                    <input
                      type="text"
                      id="orgId"
                      name="orgId"
                      value={formData.orgId}
                      onChange={handleChange}
                      className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("orgId") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                      placeholder="Tashkilot"
                    />
                    {changedFields.includes(4.2) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <div className="relative w-[48%]">
                    {isUpdate && !changedFields.includes(4.3) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("orgTypeId")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      OrgTpeId
                    </label>
                    <input
                      type="text"
                      id="orgTypeId"
                      name="orgTypeId"
                      value={formData.orgTypeId}
                      onChange={handleChange}
                      className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("orgTypeId") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                      placeholder="Tashkilot turini kiriting"
                    />
                    {changedFields.includes(4.3) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>{" "}
                  <div className="relative w-[48%] ml-[20px]">
                    {isUpdate && !changedFields.includes(4.4) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("ordName")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Tizim nomi
                    </label>
                    <input
                      type="text"
                      id="ordName"
                      name="ordName"
                      value={formData.ordName}
                      onChange={handleChange}
                      className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("ordName") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                      placeholder="Tizim nomini kiriting"
                    />
                    {changedFields.includes(4.4) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <div className="relative w-[48%]">
                    {isUpdate && !changedFields.includes(4.5) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("ordPrice")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Buyurtma narxi
                    </label>
                    <input
                      type="text"
                      id="ordPrice"
                      name="ordPrice"
                      value={formData.ordPrice}
                      onChange={handleChange}
                      className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("ordPrice") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                      placeholder="Buyurtma narxi"
                    />
                    {changedFields.includes(4.5) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                  <div className="relative w-[48%] ml-[20px]">
                    {isUpdate && !changedFields.includes(4.6) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("contractNumber")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Shartnoma raqami
                    </label>
                    <input
                      type="text"
                      id="contractNumber"
                      name="contractNumber"
                      value={formData.contractNumber}
                      onChange={handleChange}
                      className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("contractNumber") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                      placeholder="Shartnoma raqami"
                    />
                    {changedFields.includes(4.6) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex justify-between gap-4 items-center">
                  <div className="relative w-[48%] flex flex-col justify-end">
                    {isUpdate && !changedFields.includes(4.9) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => {
                          document.getElementById("contract-file")?.click();
                        }}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase mb-1">
                      Shartnoma
                    </label>

                    <div
                      className={
                        hasCreateError("contract")
                          ? "rounded-md border-2 border-red-500 ring-1 ring-red-500"
                          : ""
                      }
                    >
                      <Button
                        component="label"
                        variant="outlined"
                        fullWidth
                        startIcon={<CloudUploadIcon />}
                        sx={{
                          height: "42px",
                          width: "100%",
                          borderColor: hasCreateError("contract")
                            ? "#ef4444"
                            : "rgba(0, 0, 0, 0.23)",
                          borderWidth: hasCreateError("contract") ? 2 : 1,
                          boxShadow: hasCreateError("contract")
                            ? "0 0 0 2px rgba(239,68,68,0.3)"
                            : "none",
                          color: "#566a7f",
                          textTransform: "none",
                          "&:hover": {
                            borderColor: hasCreateError("contract")
                              ? "#ef4444"
                              : "#696cff",
                          },
                        }}
                      >
                        {fileName || "Faylni tanlang"}
                        <input
                          type="file"
                          hidden
                          id="contract-file"
                          name="contract"
                          onChange={(e) => {
                            handleFileChange(e);
                          }}
                        />
                      </Button>
                    </div>
                    {changedFields.includes(4.9) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                  <div
                    className="relative w-[48%] ml-[20px]"
                    data-field="contractDate"
                  >
                    {isUpdate && !changedFields.includes(4.7) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("contractDate")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Shartnoma sanasi
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        value={
                          formData.contractDate
                            ? dayjs(formData.contractDate)
                            : null
                        }
                        onChange={(newValue) => {
                          const nextValue =
                            newValue && newValue.isValid()
                              ? newValue.toISOString()
                              : "";
                          setFormData((prev) => ({
                            ...prev,
                            contractDate: nextValue,
                          }));
                          if (!isUpdate)
                            setCreateErrors((prev) =>
                              prev.filter((f) => f !== "contractDate"),
                            );
                          markFieldChanged(
                            4.7,
                            nextValue,
                            editItemOld.contractDate,
                          );
                        }}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            size: "small",
                            className: `mt-1 border rounded-md bg-transparent ${hasCreateError("contractDate") ? "!border-red-500 ring-1 ring-red-500" : ""}`,
                          },
                        }}
                      />
                    </LocalizationProvider>
                    {changedFields.includes(4.7) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <div
                    className={`relative ${isUpdate && !hasResPerList ? "w-[48%]" : "w-full"}`}
                    data-field="contractPriceDate"
                  >
                    {isUpdate && !changedFields.includes(4.8) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("contractPriceDate")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      To'lov sanasi
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        value={
                          formData.contractPriceDate
                            ? dayjs(formData.contractPriceDate)
                            : null
                        }
                        onChange={(newValue) => {
                          const nextValue =
                            newValue && newValue.isValid()
                              ? newValue.toISOString()
                              : "";
                          setFormData((prev) => ({
                            ...prev,
                            contractPriceDate: nextValue,
                          }));
                          if (!isUpdate)
                            setCreateErrors((prev) =>
                              prev.filter((f) => f !== "contractPriceDate"),
                            );
                          markFieldChanged(
                            4.8,
                            nextValue,
                            editItemOld.contractPriceDate,
                          );
                        }}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            size: "small",
                            className: `mt-1 border rounded-md bg-transparent ${hasCreateError("contractPriceDate") ? "!border-red-500 ring-1 ring-red-500" : ""}`,
                          },
                        }}
                      />
                    </LocalizationProvider>
                    {changedFields.includes(4.8) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                  {isUpdate && !hasResPerList && (
                    <div
                      className="relative w-[48%] ml-[20px]"
                      data-field="resPer"
                    >
                      {!(
                        (formData.resPerSurname ?? "").trim() &&
                        (formData.resPerName ?? "").trim() &&
                        (formData.resPerEmail ?? "").trim()
                      ) &&
                        !changedFields.includes(5) && (
                          <button
                            type="button"
                            className="field-action-btn edit"
                            onClick={() => focusField("resPerSurname")}
                          >
                            <iconify-icon icon="ri:edit-2-line" />
                          </button>
                        )}
                      <label className="text-sm text-gray-500 uppercase">
                        Biriktirilgan shaxs - Familiya
                      </label>
                      <input
                        type="text"
                        id="resPerSurname"
                        name="resPerSurname"
                        value={formData.resPerSurname ?? ""}
                        onChange={handleChange}
                        className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("resPerSurname") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                        placeholder="Familiya"
                      />
                      {changedFields.includes(5) &&
                        !(
                          (formData.resPerSurname ?? "").trim() &&
                          (formData.resPerName ?? "").trim() &&
                          (formData.resPerEmail ?? "").trim()
                        ) && (
                          <button
                            onClick={handleUpdate}
                            type="button"
                            className="field-action-btn save"
                          >
                            <iconify-icon icon="material-symbols:save-outline" />
                          </button>
                        )}
                    </div>
                  )}
                </div>
                {isUpdate && !hasResPerList && (
                  <div className="flex justify-between gap-4 items-center">
                    <div className="relative w-[48%]" data-field="resPerName">
                      <label className="text-sm text-gray-500 uppercase">
                        Biriktirilgan shaxs - Ism
                      </label>
                      <input
                        type="text"
                        name="resPerName"
                        value={formData.resPerName ?? ""}
                        onChange={handleChange}
                        className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("resPerName") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                        placeholder="Ism"
                      />
                    </div>
                    <div
                      className="relative w-[48%] ml-[20px]"
                      data-field="resPerPartName"
                    >
                      <label className="text-sm text-gray-500 uppercase">
                        Biriktirilgan shaxs - Otasining ismi
                      </label>
                      <input
                        type="text"
                        name="resPerPartName"
                        value={formData.resPerPartName ?? ""}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
                        placeholder="Otasining ismi"
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between gap-4 items-center">
                  {isUpdate && !hasResPerList && (
                    <div className="relative w-[48%]" data-field="resPerEmail">
                      <label className="text-sm text-gray-500 uppercase">
                        Biriktirilgan shaxs - Email
                      </label>
                      <input
                        type="email"
                        name="resPerEmail"
                        value={formData.resPerEmail ?? ""}
                        onChange={handleChange}
                        className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("resPerEmail") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                        placeholder="Email"
                      />
                    </div>
                  )}

                  <div
                    className={`relative ${isUpdate && !hasResPerList ? "w-[48%] ml-[20px]" : "w-full"}`}
                    data-field="reportWriter"
                  >
                    {isUpdate && !changedFields.includes(20) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("reportWriter")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Hisobot yozuvchini tanlang
                    </label>
                    <div
                      className={
                        hasCreateError("reportWriter")
                          ? "rounded-md border-2 border-red-500 ring-1 ring-red-500"
                          : ""
                      }
                    >
                      <Select
                        isMulti
                        name="reportWriter"
                        value={toSelectValue(formData.reportWriter)}
                        options={getUser(items)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        formatOptionLabel={formatUserOption}
                        components={{ Option: UserOptionWithCounts }}
                        placeholder="Hisobot yozuvchini tanlang..."
                        onChange={handleReportWriterChange}
                        orderCountsDropdownSide="left"
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: "transparent",
                            borderColor: hasCreateError("reportWriter")
                              ? "#ef4444"
                              : "#e2e8f0",
                            borderWidth: hasCreateError("reportWriter") ? 2 : 1,
                            boxShadow: hasCreateError("reportWriter")
                              ? "0 0 0 2px rgba(239,68,68,0.3)"
                              : "none",
                            borderRadius: "0.375rem",
                            minHeight: 42,
                            height: "auto",
                          }),
                          valueContainer: (base) => ({
                            ...base,
                            flexWrap: "wrap",
                            minHeight: 42,
                            padding: "2px 8px",
                          }),
                          menu: (base) => ({
                            ...base,
                            zIndex: 9999,
                          }),
                          menuList: (base) => ({
                            ...base,
                            padding: "8px",
                            gap: 0,
                          }),
                          option: (base, state) => ({
                            ...base,
                            padding: 0,
                            backgroundColor: "transparent",
                          }),
                        }}
                      />
                    </div>
                    {changedFields.includes(20) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex justify-between gap-4 items-center">
                  <div className="relative w-[48%]" data-field="controllers">
                    {isUpdate && !changedFields.includes(5.1) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("controllers")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Nazoratchini tanlang
                    </label>

                    <div
                      className={
                        hasCreateError("controllers")
                          ? "rounded-md border-2 border-red-500 ring-1 ring-red-500"
                          : ""
                      }
                    >
                      <Select
                        isMulti
                        name="controllers"
                        value={toSelectValue(formData.controllers)}
                        options={getUser(items)}
                        className="basic-multi-select"
                        formatOptionLabel={formatUserOption}
                        components={{ Option: UserOptionWithCounts }}
                        classNamePrefix="select"
                        placeholder="Nazoratchini tanlang..."
                        onChange={handleControllerChange}
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: "transparent",
                            borderColor: hasCreateError("controllers")
                              ? "#ef4444"
                              : "#e2e8f0",
                            borderWidth: hasCreateError("controllers") ? 2 : 1,
                            boxShadow: hasCreateError("controllers")
                              ? "0 0 0 2px rgba(239,68,68,0.3)"
                              : "none",
                            borderRadius: "0.375rem",
                            minHeight: 42,
                            height: "auto",
                          }),
                          valueContainer: (base) => ({
                            ...base,
                            flexWrap: "wrap",
                            minHeight: 42,
                            padding: "2px 8px",
                          }),
                          menu: (base) => ({
                            ...base,
                            zIndex: 9999,
                          }),
                          menuList: (base) => ({
                            ...base,
                            padding: "8px",
                            gap: 0,
                          }),
                          option: (base, state) => ({
                            ...base,
                            padding: 0,
                            backgroundColor: "transparent",
                          }),
                        }}
                      />
                    </div>
                    {changedFields.includes(5.1) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>

                  <div
                    className="relative w-[48%] ml-[20px]"
                    data-field="workers"
                  >
                    {isUpdate && !changedFields.includes(5.3) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("workers")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Bajaruvchini tanlang
                    </label>
                    <div
                      className={
                        hasCreateError("workers")
                          ? "rounded-md border-2 border-red-500 ring-1 ring-red-500"
                          : ""
                      }
                    >
                      <Select
                        isMulti
                        name="workers"
                        value={toSelectValue(formData.workers)}
                        options={getUser(items)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        formatOptionLabel={formatUserOption}
                        components={{ Option: UserOptionWithCounts }}
                        placeholder="Bajaruvchini tanlang..."
                        onChange={handleWorkersChange}
                        orderCountsDropdownSide="left"
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: "transparent",
                            borderColor: hasCreateError("workers")
                              ? "#ef4444"
                              : "#e2e8f0",
                            borderWidth: hasCreateError("workers") ? 2 : 1,
                            boxShadow: hasCreateError("workers")
                              ? "0 0 0 2px rgba(239,68,68,0.3)"
                              : "none",
                            borderRadius: "0.375rem",
                            minHeight: 42,
                            height: "auto",
                          }),
                          valueContainer: (base) => ({
                            ...base,
                            flexWrap: "wrap",
                            minHeight: 42,
                            padding: "2px 8px",
                          }),
                          menu: (base) => ({
                            ...base,
                            zIndex: 9999,
                          }),
                          menuList: (base) => ({
                            ...base,
                            padding: "8px",
                            gap: 0,
                          }),
                          option: (base, state) => ({
                            ...base,
                            padding: 0,
                            backgroundColor: "transparent",
                          }),
                        }}
                      />
                    </div>
                    {changedFields.includes(5.3) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <div className="relative w-[48%]" data-field="orgType">
                    {isUpdate && !changedFields.includes(5.2) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("orgType")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Tashkilot turi
                    </label>
                    <select
                      id="orgType"
                      name="orgType"
                      value={formData.orgType}
                      onChange={handleChange}
                      className={`w-full mt-1 px-4 py-2 border rounded-md bg-transparent ${hasCreateError("orgType") ? "!border-red-500 ring-1 ring-red-500" : ""}`}
                    >
                      <option value="">Tanlang</option>
                      {orgTypes.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                    {changedFields.includes(5.2) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>

                  <div
                    className="relative w-[48%] ml-[20px]"
                    data-field="ordEndDate"
                  >
                    {isUpdate && !changedFields.includes(5.4) && (
                      <button
                        type="button"
                        className="field-action-btn edit"
                        onClick={() => focusField("ordEndDate")}
                      >
                        <iconify-icon icon="ri:edit-2-line" />
                      </button>
                    )}
                    <label className="text-sm text-gray-500 uppercase">
                      Tugash sanasi
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        value={
                          formData.ordEndDate
                            ? dayjs(formData.ordEndDate)
                            : null
                        }
                        onChange={(newValue) => {
                          const nextValue =
                            newValue && newValue.isValid()
                              ? newValue.toISOString()
                              : "";
                          setFormData((prev) => ({
                            ...prev,
                            ordEndDate: nextValue,
                          }));
                          if (!isUpdate)
                            setCreateErrors((prev) =>
                              prev.filter((f) => f !== "ordEndDate"),
                            );
                          markFieldChanged(
                            5.4,
                            nextValue,
                            editItemOld.ordEndDate,
                          );
                        }}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            size: "small",
                            className: `mt-1 border rounded-md bg-transparent ${hasCreateError("ordEndDate") ? "!border-red-500 ring-1 ring-red-500" : ""}`,
                          },
                        }}
                      />
                    </LocalizationProvider>{" "}
                    {changedFields.includes(5.4) && (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="field-action-btn save"
                      >
                        <iconify-icon icon="material-symbols:save-outline" />
                      </button>
                    )}
                  </div>
                </div>

                {isUpdate && (
                  <div className="flex justify-between gap-4 items-center">
                    <div className="relative w-full" data-field="malumot">
                      {!changedFields.includes(1.6) && (
                        <button
                          type="button"
                          className="field-action-btn edit"
                          onClick={() => focusField("malumot")}
                        >
                          <iconify-icon icon="ri:edit-2-line" />
                        </button>
                      )}
                      <label className="text-sm text-gray-500 uppercase">
                        Biriktirilgan shaxs - Telefon
                      </label>
                      <input
                        type="text"
                        id="malumot"
                        name="malumot"
                        value={formData.malumot ?? ""}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
                        placeholder="Telefon raqami"
                      />
                      {changedFields.includes(1.6) && (
                        <button
                          onClick={handleUpdate}
                          type="button"
                          className="field-action-btn save"
                        >
                          <iconify-icon icon="material-symbols:save-outline" />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {isUpdate &&
                  !hasResPerList &&
                  (formData.resPerSurname ?? "").trim() &&
                  (formData.resPerName ?? "").trim() &&
                  (formData.resPerEmail ?? "").trim() && (
                    <div className="flex justify-start pt-2">
                      <button
                        type="button"
                        onClick={handleTashkilotniQoshish}
                        disabled={addingResPer}
                        className="bg-[#696cff] text-white px-4 py-2 rounded-md hover:bg-[#565edc] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {addingResPer
                          ? "Kutilmoqda..."
                          : "Tashkilotni qo'shish"}
                      </button>
                    </div>
                  )}

                {isUpdate && (
                  <>
                    <div className="relative flex items-end gap-2">
                      <div className="flex-1">
                        <label className="text-sm text-gray-500 uppercase">
                          Jarayonni tanlang
                        </label>
                        <select
                          id="processStep"
                          value={selectedProcessStep}
                          onChange={(e) =>
                            setSelectedProcessStep(e.target.value)
                          }
                          className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
                        >
                          <option value="">Jarayonni tanlang</option>
                          <option value="1">Shartnoma kelgan</option>
                          <option value="2">Tizimga qo'shilgan</option>
                          <option value="3">Xat chiqarilgan</option>
                          <option value="4">Xat kelgan</option>
                          <option value="5">Jarayonda</option>
                          <option value="6">Hisobotga chiqarilgan</option>
                          <option value="7">Qisman yakunlangan</option>
                          <option value="8">Qayta ekspertiza</option>
                          <option value="9">To'liq yakunlangan</option>
                          <option value="10">Vaqtincha to'xtatilgan</option>
                        </select>
                      </div>
                      {selectedProcessStep &&
                        selectedProcessStep !== savedProcessStepStatus && (
                          <button
                            type="button"
                            onClick={handleSaveProcessStepStatus}
                            className="field-action-btn save"
                            title="Statusni saqlash"
                          >
                            <iconify-icon icon="material-symbols:save-outline" />
                          </button>
                        )}
                    </div>

                    {selectedProcessStep === "3" && (
                      <div className="mt-4 space-y-4">
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Sana
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                value={
                                  processStepDate
                                    ? dayjs(processStepDate)
                                    : null
                                }
                                onChange={(newValue) => {
                                  setProcessStepDate(
                                    newValue && newValue.isValid()
                                      ? newValue.toISOString()
                                      : null,
                                  );
                                }}
                                slotProps={{
                                  textField: {
                                    fullWidth: true,
                                    size: "small",
                                    className:
                                      "mt-1 border rounded-md bg-transparent",
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </div>
                          {processStepDate &&
                            processStepDate !== savedProcessStepDate && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepDate(2.5)}
                                className="field-action-btn save"
                                title="Sanani saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase mb-1">
                              Fayl
                            </label>
                            <Button
                              component="label"
                              variant="outlined"
                              fullWidth
                              startIcon={<CloudUploadIcon />}
                              sx={{
                                height: "42px",
                                width: "100%",
                                borderColor: "rgba(0, 0, 0, 0.23)",
                                color: "#566a7f",
                                textTransform: "none",
                                "&:hover": { borderColor: "#696cff" },
                              }}
                            >
                              {processStepFileName || "Faylni tanlang"}
                              <input
                                type="file"
                                hidden
                                onChange={handleProcessStepFileChange}
                              />
                            </Button>
                          </div>
                          {(processStepFile || processStepFileName) &&
                            processStepFileName !==
                              savedProcessStepFileName && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepFile(6.2)}
                                className="field-action-btn save"
                                title="Faylni saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                      </div>
                    )}

                    {selectedProcessStep === "4" && (
                      <div className="mt-4 space-y-4">
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Sana
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                value={
                                  processStepDate
                                    ? dayjs(processStepDate)
                                    : null
                                }
                                onChange={(newValue) => {
                                  setProcessStepDate(
                                    newValue && newValue.isValid()
                                      ? newValue.toISOString()
                                      : null,
                                  );
                                }}
                                slotProps={{
                                  textField: {
                                    fullWidth: true,
                                    size: "small",
                                    className:
                                      "mt-1 border rounded-md bg-transparent",
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </div>
                          {processStepDate &&
                            processStepDate !== savedProcessStepDate && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepDate(2.6)}
                                className="field-action-btn save"
                                title="Sanani saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase mb-1">
                              Fayl
                            </label>
                            <Button
                              component="label"
                              variant="outlined"
                              fullWidth
                              startIcon={<CloudUploadIcon />}
                              sx={{
                                height: "42px",
                                width: "100%",
                                borderColor: "rgba(0, 0, 0, 0.23)",
                                color: "#566a7f",
                                textTransform: "none",
                                "&:hover": { borderColor: "#696cff" },
                              }}
                            >
                              {processStepFileName || "Faylni tanlang"}
                              <input
                                type="file"
                                hidden
                                onChange={handleProcessStepFileChange}
                              />
                            </Button>
                          </div>
                          {(processStepFile || processStepFileName) &&
                            processStepFileName !==
                              savedProcessStepFileName && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepFile(6.3)}
                                className="field-action-btn save"
                                title="Faylni saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                      </div>
                    )}

                    {selectedProcessStep === "6" && (
                      <div className="mt-4">
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Sana
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                value={
                                  processStepDate
                                    ? dayjs(processStepDate)
                                    : null
                                }
                                onChange={(newValue) => {
                                  setProcessStepDate(
                                    newValue && newValue.isValid()
                                      ? newValue.toISOString()
                                      : null,
                                  );
                                }}
                                slotProps={{
                                  textField: {
                                    fullWidth: true,
                                    size: "small",
                                    className:
                                      "mt-1 border rounded-md bg-transparent",
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </div>
                          {processStepDate &&
                            processStepDate !== savedProcessStepDate && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepDate(2.1)}
                                className="field-action-btn save"
                                title="Sanani saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                      </div>
                    )}

                    {selectedProcessStep === "7" && (
                      <div className="mt-4 space-y-4">
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Sana
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                value={
                                  processStepDate
                                    ? dayjs(processStepDate)
                                    : null
                                }
                                onChange={(newValue) => {
                                  setProcessStepDate(
                                    newValue && newValue.isValid()
                                      ? newValue.toISOString()
                                      : null,
                                  );
                                }}
                                slotProps={{
                                  textField: {
                                    fullWidth: true,
                                    size: "small",
                                    className:
                                      "mt-1 border rounded-md bg-transparent",
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </div>
                          {processStepDate &&
                            processStepDate !== savedProcessStepDate && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepDate(2.11)}
                                className="field-action-btn save"
                                title="Sanani saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Ma'lumot
                            </label>
                            <input
                              type="text"
                              value={processStepNote}
                              onChange={(e) =>
                                setProcessStepNote(e.target.value)
                              }
                              className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
                              placeholder="Ma'lumot yozing"
                            />
                          </div>
                          {processStepNote?.trim() &&
                            processStepNote.trim() !== savedProcessStepNote && (
                              <button
                                type="button"
                                onClick={handleSaveProcessStepNote}
                                className="field-action-btn save"
                                title="Ma'lumotni saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                      </div>
                    )}

                    {selectedProcessStep === "8" && (
                      <div className="mt-4 space-y-4">
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Sana
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                value={
                                  processStepDate
                                    ? dayjs(processStepDate)
                                    : null
                                }
                                onChange={(newValue) => {
                                  setProcessStepDate(
                                    newValue && newValue.isValid()
                                      ? newValue.toISOString()
                                      : null,
                                  );
                                }}
                                slotProps={{
                                  textField: {
                                    fullWidth: true,
                                    size: "small",
                                    className:
                                      "mt-1 border rounded-md bg-transparent",
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </div>
                          {processStepDate &&
                            processStepDate !== savedProcessStepDate && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepDate(2.12)}
                                className="field-action-btn save"
                                title="Sanani saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase mb-1">
                              Fayl
                            </label>
                            <Button
                              component="label"
                              variant="outlined"
                              fullWidth
                              startIcon={<CloudUploadIcon />}
                              sx={{
                                height: "42px",
                                width: "100%",
                                borderColor: "rgba(0, 0, 0, 0.23)",
                                color: "#566a7f",
                                textTransform: "none",
                                "&:hover": { borderColor: "#696cff" },
                              }}
                            >
                              {processStepFileName || "Faylni tanlang"}
                              <input
                                type="file"
                                hidden
                                onChange={handleProcessStepFileChange}
                              />
                            </Button>
                          </div>
                          {(processStepFile || processStepFileName) &&
                            processStepFileName !==
                              savedProcessStepFileName && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepFile(6.6)}
                                className="field-action-btn save"
                                title="Faylni saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Ma'lumot
                            </label>
                            <input
                              type="text"
                              value={processStepQaytaNote}
                              onChange={(e) =>
                                setProcessStepQaytaNote(e.target.value)
                              }
                              className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
                              placeholder="Ma'lumot yozing"
                            />
                          </div>
                          {processStepQaytaNote?.trim() &&
                            processStepQaytaNote.trim() !==
                              savedProcessStepQaytaNote && (
                              <button
                                type="button"
                                onClick={handleSaveProcessStepQaytaNote}
                                className="field-action-btn save"
                                title="Ma'lumotni saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                      </div>
                    )}

                    {selectedProcessStep === "9" && (
                      <div className="mt-4 space-y-4">
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Sana
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                value={
                                  processStepDate
                                    ? dayjs(processStepDate)
                                    : null
                                }
                                onChange={(newValue) => {
                                  setProcessStepDate(
                                    newValue && newValue.isValid()
                                      ? newValue.toISOString()
                                      : null,
                                  );
                                }}
                                slotProps={{
                                  textField: {
                                    fullWidth: true,
                                    size: "small",
                                    className:
                                      "mt-1 border rounded-md bg-transparent",
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </div>
                          {processStepDate &&
                            processStepDate !== savedProcessStepDate && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepDate(2.13)}
                                className="field-action-btn save"
                                title="Sanani saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase mb-1">
                              Fayl
                            </label>
                            <Button
                              component="label"
                              variant="outlined"
                              fullWidth
                              startIcon={<CloudUploadIcon />}
                              sx={{
                                height: "42px",
                                width: "100%",
                                borderColor: "rgba(0, 0, 0, 0.23)",
                                color: "#566a7f",
                                textTransform: "none",
                                "&:hover": { borderColor: "#696cff" },
                              }}
                            >
                              {processStepFileName || "Faylni tanlang"}
                              <input
                                type="file"
                                hidden
                                onChange={handleProcessStepFileChange}
                              />
                            </Button>
                          </div>
                          {(processStepFile || processStepFileName) &&
                            processStepFileName !==
                              savedProcessStepFileName && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepFile(6.7)}
                                className="field-action-btn save"
                                title="Faylni saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Ma'lumot
                            </label>
                            <input
                              type="text"
                              value={processStepToLiqNote}
                              onChange={(e) =>
                                setProcessStepToLiqNote(e.target.value)
                              }
                              className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
                              placeholder="Ma'lumot yozing"
                            />
                          </div>
                          {processStepToLiqNote?.trim() &&
                            processStepToLiqNote.trim() !==
                              savedProcessStepToLiqNote && (
                              <button
                                type="button"
                                onClick={handleSaveProcessStepToLiqNote}
                                className="field-action-btn save"
                                title="Ma'lumotni saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                      </div>
                    )}

                    {selectedProcessStep === "10" && (
                      <div className="mt-4 space-y-4">
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase">
                              Sana
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DesktopDatePicker
                                value={
                                  processStepDate
                                    ? dayjs(processStepDate)
                                    : null
                                }
                                onChange={(newValue) => {
                                  setProcessStepDate(
                                    newValue && newValue.isValid()
                                      ? newValue.toISOString()
                                      : null,
                                  );
                                }}
                                slotProps={{
                                  textField: {
                                    fullWidth: true,
                                    size: "small",
                                    className:
                                      "mt-1 border rounded-md bg-transparent",
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          </div>
                          {processStepDate &&
                            processStepDate !== savedProcessStepDate && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepDate(2.9)}
                                className="field-action-btn save"
                                title="Sanani saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                        <div className="relative flex items-end gap-2">
                          <div className="flex-1">
                            <label className="text-sm text-gray-500 uppercase mb-1">
                              Fayl
                            </label>
                            <Button
                              component="label"
                              variant="outlined"
                              fullWidth
                              startIcon={<CloudUploadIcon />}
                              sx={{
                                height: "42px",
                                width: "100%",
                                borderColor: "rgba(0, 0, 0, 0.23)",
                                color: "#566a7f",
                                textTransform: "none",
                                "&:hover": { borderColor: "#696cff" },
                              }}
                            >
                              {processStepFileName || "Faylni tanlang"}
                              <input
                                type="file"
                                hidden
                                onChange={handleProcessStepFileChange}
                              />
                            </Button>
                          </div>
                          {(processStepFile || processStepFileName) &&
                            processStepFileName !==
                              savedProcessStepFileName && (
                              <button
                                type="button"
                                onClick={() => handleSaveProcessStepFile(6.5)}
                                className="field-action-btn save"
                                title="Faylni saqlash"
                              >
                                <iconify-icon icon="material-symbols:save-outline" />
                              </button>
                            )}
                        </div>
                      </div>
                    )}
                  </>
                )}

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
              </>
            );
          })()}
        </div>
      </div>
      <div className="dashboard-page" style={{ margin: "-20px" }}>
        <Section
          title="Tizim ekspertizalar"
          items={system}
          selectedStatusId={selectedStatusId}
          onCardClick={handleStatusCardClick}
        />
        <div className="mt-10">
          <div className="bg-white rounded-md shadow-sm pb-20 dark:bg-[#2b2c40]">
            <div className="mb-6 px-6 pt-6">
              <h4 className="text-sm text-slate-400 font-medium">
                Qidiruv filter
              </h4>
              <div className="mt-3 flex items-center gap-4">
                <select className="h-10 w-64 rounded-lg border border-slate-200 bg-white dark:bg-transparent px-4 text-[14px] text-slate-500 shadow-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200">
                  <option>Foydalanuvchini tanlang ...</option>
                </select>
                <div className="ml-auto flex items-center">
                  <div className="relative">
                    <input
                      className="h-10 w-64 rounded-lg border border-slate-200 bg-white dark:bg-transparent px-4 pr-10 text-[14px] text-slate-500 shadow-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
                      placeholder="Qidiruv..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="absolute right-2 top-[24px] -translate-y-1/2 text-slate-400">
                      <iconify-icon
                        icon="mdi:magnify"
                        width="18"
                        height="18"
                      ></iconify-icon>
                    </span>
                  </div>
                  {user.role === 1 && (
                    <button
                      className="ml-4 inline-flex items-center gap-2 rounded-md bg-[#bb9769] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#bb9769] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#696cff]/50 active:translate-y-0"
                      onClick={openDrawer}
                    >
                      Tizim qo'shish
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[13px] uppercase border-b border-slate-200 dark:bg-transparent">
                    <th className="px-4 py-3 font-medium">N</th>
                    <th className="px-4 py-3 font-medium text-center">TASHKILOT NOMI</th>
                    <th className="px-4 py-3 font-medium text-wrap max-w-[250px] text-center">
                      AXBOROT TIZIMINING NOMI
                    </th>
                    <th className="px-4 py-3 font-medium text-center">SHARTNOMA RAQAMI</th>
                    <th className="px-4 py-3 font-medium ">NAZORATCHI</th>
                    <th className="px-4 py-3 font-medium ">BAJARUVCHI</th>
                    <th className="px-4 py-3 font-medium text-wrap w-[200px] text-center">
                      EKSPERTIZANING BOSHLANISH SANASI
                    </th>
                    <th className="px-4 py-3 font-medium text-wrap w-[200px] text-center">
                      EKSPERTIZANING YAKUNLANISH SANASI
                    </th>

                    {user.role !== 8 && (
                      <th className="px-4 py-3 font-medium text-wrap">
                        HISOB MA'LUMOTI
                      </th>
                    )}
                    {user.role !== 8 && (
                      <th className="px-4 py-3 font-medium text-wrap">BALL</th>
                    )}
                    {user.role !== 8 && (
                      <th className="px-4 py-3 font-medium">QAYSI BOSQICHDA</th>
                    )}
                    {user.role !== 8 && (
                      <th className="px-4 py-3 font-medium">HOLATLAR</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {currentItems?.map((r, i) => (
                    <tr
                      key={r.id}
                      className="border-b border-slate-100 align-middle hover:bg-slate-50 dark:hover:bg-[#2b2c40]"
                    >
                      <td className="px-4 py-3 align-middle text-[15px] text-slate-600 dark:text-white">
                        {i + 1}
                      </td>
                      <td className="px-4 py-3 align-middle text-[15px] text-slate-600 text-center dark:text-white">
                        {r.orgName}
                      </td>
                      <td className="px-4 py-3 align-middle text-[15px] text-slate-600 text-center max-w-[250px] whitespace-normal break-words dark:text-white">
                        {r.shortName}
                      </td>
                      <td className="px-4 py-3 align-middle text-[15px] text-slate-600 text-center dark:text-white  ">
                        {r.number}
                      </td>
                      <td className="px-4 py-3 align-middle text-[15px] text-slate-600 dark:text-white">
                        {r?.controllers?.map((b, idx) => (
                          <span className="block mb-1" key={idx}>
                            {b.a2}
                          </span>
                        ))}
                      </td>
                      <td className="px-4 py-3 align-middle whitespace-pre-line text-[15px] text-slate-600 dark:text-white">
                        {r?.workers?.map((b, idx) => (
                          <span className="block mb-1" key={idx}>
                            {b.a2}
                          </span>
                        ))}
                      </td>
                      <td className="px-4 py-3 align-middle text-[15px] text-slate-600 w-[200px] dark:text-white text-center">
                        {formatDate(r.startDate)}
                      </td>
                      <td className="px-4 py-3 align-middle text-[15px] text-slate-600 text-center w-[200px] dark:text-white">
                        {formatDate(r.endDate)}
                      </td>
                      {user.role !== 8 && (
                        <td className="px-4 py-3 align-middle text-center">
                          <span
                            className={`inline-block px-3 py-1 text-[12px] rounded-full ${
                              r.hisobot
                                ? "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-100"
                                : "bg-red-100 dark:bg-red-500 text-red-600 dark:text-red-50"
                            }`}
                          >
                            {r.hisobot || "Chiqarilmagan"}
                          </span>
                        </td>
                      )}
                      {user.role !== 8 && (
                        <td className="px-4 py-3 align-middle text-[15px] text-center text-slate-600 dark:text-white">
                          {r.ball || "0/15"}
                        </td>
                      )}
                      {user.role !== 8 && (
                        <td className="px-4 py-3 align-middle">
                          <div className="h-full flex relative">
                            {STATUS_STEPS.map((step, index) => {
                              const isActive = r.status >= step.id;
                              const stepBgClass = !isActive
                                ? "status-step-inactive"
                                : "status-step-active";
                              const stepStyle =
                                step.id > r.status
                                  ? {
                                      background:
                                        "linear-gradient(145deg, #9ca3af, #6b7280)",
                                    }
                                  : r.status === 10 && step.id === 10
                                    ? {
                                        background:
                                          "linear-gradient(145deg, #dc2626, #b91c1c)",
                                      }
                                    : r.status === 9 && step.id === 9
                                      ? {
                                          background:
                                            "linear-gradient(145deg, #16a34a, #15803d)",
                                        }
                                      : r.status >= step.id &&
                                          (r.status === 9 || r.status === 10)
                                        ? {
                                            background:
                                              "linear-gradient(145deg, #2563eb, #1d4ed8)",
                                          }
                                        : undefined;

                              return (
                                <div
                                  key={step.id}
                                  className="relative group status-step-group"
                                  style={{
                                    marginLeft: index === 0 ? 0 : 1,
                                    zIndex: index,
                                  }}
                                >
                                  <span
                                    className={`status-step w-7 h-7 cursor-pointer rounded-full border border-white dark:border-[#2b2c40] ${stepBgClass} flex items-center justify-center`}
                                    style={stepStyle}
                                  >
                                    <span className="text-[10px] text-white font-bold">
                                      {step.id}
                                    </span>
                                  </span>

                                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 text-sm text-white bg-black rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-[100]">
                                    {step.label}
                                    <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-black rotate-45 -translate-x-1/2"></div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                      )}
                      {user.role !== 8 && (
                        <td className="px-4 py-3 align-middle">
                          <div className="flex items-center gap-2">
                            {user.role === 1 || user.role === 3 ? (
                              <button
                                className="p-2 rounded-md hover:bg-blue-500 hover:text-white bg-blue-400 text-white"
                                onClick={() => handleEdit(r)}
                              >
                                <iconify-icon
                                  icon="tabler:edit"
                                  width="20"
                                  height="20"
                                ></iconify-icon>
                              </button>
                            ) : (
                              <button
                                className="p-2 rounded-md hover:bg-blue-500 hover:text-white bg-blue-400 text-white"
                                onClick={() => handleNextStep(r)}
                              >
                                <iconify-icon
                                  icon="tabler:edit"
                                  width="20"
                                  height="20"
                                ></iconify-icon>
                              </button>
                            )}

                            <button
                              className="p-2 rounded-md bg-slate-200 text-slate-500 hover:bg-slate-400 hover:text-white"
                              onClick={() => handleModal(r.id)}
                            >
                              <iconify-icon
                                icon="mdi:dots-vertical"
                                width="20"
                                height="20"
                              ></iconify-icon>
                            </button>
                            {r.status === 5 &&
                              (r.workers || []).some(
                                (w) => String(w.a1) === String(user?.id),
                              ) &&
                              (r.sU === 2 ? (
                                <span className="ml-2 px-4 py-2 rounded-full border-2 border-slate-300 bg-slate-100 text-slate-500 text-sm font-medium dark:bg-slate-700/50 dark:border-slate-600 dark:text-slate-400">
                                  Tekshirilmoqda
                                </span>
                              ) : (
                                <button
                                  type="button"
                                  className="ml-2 px-4 py-2 rounded-full border-2 border-cyan-500 bg-white text-cyan-500 text-sm font-medium hover:bg-cyan-50 transition-colors dark:bg-transparent dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-500/10"
                                  onClick={() => handleTekshirtirish(r.id)}
                                >
                                  Tekshirtirish
                                </button>
                              ))}
                            {r.status === 5 &&
                              (r.controllers || []).some(
                                (c) => String(c.a1) === String(user?.id),
                              ) &&
                              (r.sU === 2 ? (
                                <div className="flex justify-center gap-3">
                                  <button
                                    className="ml-2 px-4 py-2 rounded-full border-2 border-red-500 bg-white text-red-500 text-sm font-medium hover:bg-red-50 transition-colors dark:bg-transparent dark:text-red-400 dark:border-red-400 dark:hover:bg-cyan-500/10"
                                    onClick={() => handleBackExp(r.id)}
                                    type="button"
                                  >
                                    Qaytarish
                                  </button>
                                  <button
                                    className="ml-2 px-4 py-2 rounded-full border-2 border-cyan-500 bg-white text-cyan-500 text-sm font-medium hover:bg-cyan-50 transition-colors dark:bg-transparent dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-500/10"
                                    onClick={() => handleNextExp(r.id)}
                                    type="button"
                                  >
                                    Tasdiqlash
                                  </button>
                                </div>
                              ) : (
                                <></>
                              ))}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>

              {totalItems > 0 && (
                <div className="px-6 py-4 flex items-center justify-between border-t dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {totalItems > 0
                      ? `${startIndex + 1}–${Math.min(endIndex, totalItems)} / ${totalItems}`
                      : "Ma'lumot yo'q"}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={justPage == 0}
                      onClick={
                        () => handleBackPage(isPage)
                        // setCurrentPage((p) => Math.max(1, p - 1))
                      }
                      // disabled={currentPage === 1}
                      className="px-3 py-1.5 border rounded-md text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                    >
                      Oldingi
                    </button>
                    <span className="px-3 py-1.5 text-sm font-medium">
                      {justPage + 1}
                    </span>
                    <button
                      onClick={
                        () => handleNextPage(isPage)
                        // setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={nextPage == null}
                      className="px-3 py-1.5 border rounded-md text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                    >
                      Keyingi
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <button
            className="mt-4 px-[10px] pt-[10px] bg-gray-50 text-gray-700 rounded absolute top-[30px] right-[13px] shadow-md"
            onClick={handleModal}
          >
            <iconify-icon
              icon="mdi:close"
              width="28"
              height="28"
            ></iconify-icon>
          </button>
          <div className="bg-white dark:bg-[#2b2c40] rounded-lg shadow-lg p-6 w-[55%] relative overflow-y-scroll max-h-[100vh]">
            <h2 className="text-lg font-semibold mb-4 text-gray-500 dark:text-gray-200">
              Batafsil
            </h2>
            <ExpertizaTable expData={signleExp} link="/system-doc" />
          </div>
        </div>
      )}
    </>
  );
};

export default Expertise;
