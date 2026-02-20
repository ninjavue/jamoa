import React, { useEffect, useState } from "react";
import { METHOD } from "../../api/zirhrpc";
import { useZirhStref } from "../../context/ZirhContext";
import Select from "react-select";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { uploadFileViaRpc } from "../../rpc/fileRpc";

const vulnLevelOptions = [
  { value: "1", label: "Yuqori" },
  { value: "2", label: "O'rta" },
  { value: "3", label: "Past" },
  { value: "4", label: "Ma'lumot uchun" },
];

const ExpertizeModal = ({
  link = "word",
  open,
  onClose,
  item,
  itemId,
  onSaveDoc,
  resourceOptions = [],
}) => {
  const [selectedVuln, setSelectedVuln] = useState("");
  const [zaiflikText, setZaiflikText] = useState("");
  const [oqibatlarText, setOqibatlarText] = useState("");
  const [tavsiyaText, setTavsiyaText] = useState("");
  const [formData, setFormData] = useState({});
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);
  const { stRef } = useZirhStref();
  const [vuln, setVuln] = useState([]);
  const [highVuln, setHighVuln] = useState([]);
  const [middleVuln, setMiddleVuln] = useState([]);
  const [lowVuln, setLowVuln] = useState([]);
  const [vulnLevel, setVulnLevel] = useState("");
  const [platform, setPlatform] = useState("");
  const [resource, setResource] = useState("");
  const [filteredVuln, setFilteredVuln] = useState([]);
  const [newDocVuln, setNewDocVuln] = useState({});

  useEffect(() => {
    if (!open) return;
    if (resource) return;
    if (Array.isArray(resourceOptions) && resourceOptions.length) {
      setResource(resourceOptions[0]);
    }
  }, [open, resource, resourceOptions]);

  const handleVulnChange = (selected) => {
    if (!selected) {
      setSelectedVuln(null);
      setZaiflikText("");
      setOqibatlarText("");
      setTavsiyaText("");
      return;
    }

    const selectedId = selected.value;
    setSelectedVuln(selectedId);

    console.log("test uchun")
    const found = filteredVuln.find((v) => v._id === selected.value);
    setNewDocVuln(found);
    if (!found) return;

    const data = found[1];
    setZaiflikText(data[2] || "");
    setOqibatlarText(data[3] || "");
    setTavsiyaText(data[4] || "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveAllPages = async () => {
    try {
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

      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
        19: itemId,
        1.16: formData.userValues,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getVuln = async () => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.VULN_GET, { 1: 1 });
      if (res.status === METHOD.OK) {
        const high = res[1].filter((v) => v[1]?.[0] === 1);
        const middle = res[1].filter((v) => v[1]?.[0] === 2);
        const low = res[1].filter((v) => v[1]?.[0] === 3);
        setHighVuln(high);
        setMiddleVuln(middle);
        setLowVuln(low);
        setVuln(res[1]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVuln();
    console.log(item);
  }, []);

  const handleSelectVuln = (selected) => {
    if (!selected) {
      setVulnLevel("");
      setFilteredVuln([]);
      return;
    }

    setVulnLevel(selected.value);

    if (selected.value === "1") setFilteredVuln(highVuln);
    else if (selected.value === "2") setFilteredVuln(middleVuln);
    else if (selected.value === "3") setFilteredVuln(lowVuln);
  };

  const handleSaveDoc = () => {
    if (!newDocVuln) return;
    const data = newDocVuln[1] ? [...newDocVuln[1]] : [];
    while (data.length < 5) data.push("");
    data[2] = zaiflikText ?? data[2] ?? "";
    data[3] = oqibatlarText ?? data[3] ?? "";
    data[4] = tavsiyaText ?? data[4] ?? "";
    const vulnToSend = { ...newDocVuln, 1: data };
    onSaveDoc({
      vuln: vulnToSend,
      resource,
      platform: platform,
      vulnLevel: vulnLevel,
      vulnCount: formData.count || 1,
    });
  };

  const vulnOptions = filteredVuln.map((v) => ({
    value: v._id,
    label: v["1"]?.[1],
  }));

  if (!open) return null;

  return (
    <div>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[10000000]"
          onClick={onClose}
        >
          <div
            className="expertise-drawer absolute right-0 top-0 h-full bg-white dark:bg-[#2b2c40] shadow-lg p-6 w-[500px] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="px-[10px] pt-[10px]  text-gray-700 rounded absolute top-[12px] right-[12px]"
              onClick={onClose}
              aria-label="Close"
            >
              <iconify-icon
                icon="mdi:close"
                width="22"
                height="22"
              ></iconify-icon>
            </button>
            <h2 className="text-lg font-semibold mb-4 text-gray-500 dark:text-gray-200">
              {item?.[3]}
            </h2>

            {!!resourceOptions?.length && (
              <div className="mb-3 fv-plugins-icon-container">
                <label className="form-label">Resurs</label>
                <select
                  className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent text-slate-500"
                  value={resource}
                  onChange={(e) => setResource(e.target.value)}
                >
                  <option value="">Resursni tanlang</option>
                  {resourceOptions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mb-3 fv-plugins-icon-container">
              <label className="form-label">Platforma</label>
              <select
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent text-slate-500"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                <option value="">Platformani tanlang</option>
                <option value="android">Android</option>
                <option value="ios">iOS</option>
                <option value="umumiy">Umumiy</option>
              </select>
            </div>

            <div className="mb-3 fv-plugins-icon-container">
              <label className="form-label">Zaiflik darajasi</label>
              <Select
                options={vulnLevelOptions}
                placeholder="Tanlang..."
                isSearchable
                className="basic-multi-select"
                classNamePrefix="select"
                value={
                  vulnLevelOptions.find((o) => o.value === vulnLevel) || null
                }
                onChange={handleSelectVuln}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "transparent",
                    borderColor: "#e2e8f0",
                    borderRadius: "0.375rem",
                    minHeight: "40px",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
              />
            </div>

            <div className="mb-3 fv-plugins-icon-container">
              <label className="form-label">Zaiflik turi</label>
              <Select
                options={vulnOptions}
                placeholder="Zaiflik turini tanlang..."
                isSearchable
                isClearable
                className="basic-multi-select"
                classNamePrefix="select"
                value={vulnOptions.find((o) => o.value === selectedVuln)}
                onChange={handleVulnChange}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "transparent",
                    borderColor: "#e2e8f0",
                    borderRadius: "0.375rem",
                    minHeight: "40px",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
              />
            </div>

            <div className="mt-4">
              {/* 9 Soni */}
              <div className="mb-3 fv-plugins-icon-container">
                <label className="form-label">Soni</label>
                <input
                  type="number"
                  name="count"
                  value={formData.count}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent"
                  placeholder="Soni"
                  min="1"
                  defaultValue="1"
                />
              </div>
            </div>

            <div className="btn-group flex justify-end items-center gap-2">
              <button
                className="btn btn-primary py-2"
                data-bs-dismiss="modal"
                onClick={handleSaveDoc}
                aria-label="Close"
              >
                Qo'shish
              </button>
              {/* <button
                className="btn btn-primary py-2"
                data-bs-dismiss="modal"
                onClick={saveAllPages}
                aria-label="Close"
              >
                Saqlash
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertizeModal;
