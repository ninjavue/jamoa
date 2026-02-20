import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { renderAsync } from "docx-preview";
import html2canvas from "html2canvas";
import { useReactToPrint } from "react-to-print";

import { useZirhStref } from "../../context/ZirhContext";
import { downloadFileViaRpcNew } from "../../rpc/fileRpc";
import WordMobile from "../word/WordMobile";
import WordQayta from "../word/WordQayta";
import WordQaytaKam from "../word/WordQaytaKam";
import WordRuxsat from "../word/WordRuxsat";

const CellValue = ({
  text,
  badge,
  fileSize,
  download,
  button,
  linkToWord,
  url,
  onOpen,
}) => {
  return (
    <>
      {url ? (
        <div
          className="flex items-center gap-2 font-bold text-gray-500"
          onClick={() => onOpen?.(url, text, fileSize)}
        >
          {text}
          {badge && (
            <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">
              {badge}
            </span>
          )}

          {download && (
            <iconify-icon
              icon="mdi:download"
              width={18}
              className="cursor-pointer text-gray-500 hover:text-blue-600"
            />
          )}

          {button &&
            (linkToWord ? (
              <Link
                to={`/page/${linkToWord}`}
                className="rounded bg-[#4875f4] px-6 py-3 text-white dark:text-white hover:bg-[#4875f4] text-[15px]"
              >
                {button}
              </Link>
            ) : (
              <button className="rounded bg-[#4875f4] px-6 py-3 text-white dark:text-white hover:bg-[#4875f4] text-[15px]">
                {button}
              </button>
            ))}
        </div>
      ) : (
        <div className="flex items-center gap-2 font-bold text-gray-500 dark:text-white justify-center">
          {text}

          {badge && (
            <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:text-white">
              {badge}
            </span>
          )}

          {download && (
            <iconify-icon
              icon="mdi:download"
              width={18}
              className="cursor-pointer text-gray-500 hover:text-blue-600 dark:text-white"
            />
          )}

          {button &&
            (linkToWord ? (
              <Link
                to={`/page/${linkToWord}`}
                className="rounded bg-[#4875f4] px-6 py-3 text-white hover:bg-[#4875f4] text-[15px]"
              >
                {button}
              </Link>
            ) : (
              <button className="rounded bg-[#4875f4] px-6 py-3 text-white hover:bg-[#4875f4] text-[15px]">
                {button}
              </button>
            ))}
        </div>
      )}
    </>
  );
};

const Row4 = ({ label1, value1, label2, value2 }) => (
  <div
    className={`grid grid-cols-4 border-b text-sm ${label1 === "Tashkilot nomi" ? "border-t" : ""}`}
  >
    <div className="px-4 py-6 text-gray-500 border-r border-l text-[15px] dark:text-white">
      {label1}
    </div>
    <div className="px-4 py-6 border-r text-gray-700 font-bold text-[15px] text-center dark:text-white">
      {value1}
    </div>
    <div className="px-4 py-6 text-gray-500 border-r text-[15px] dark:text-white">
      {label2}
    </div>
    <div className="px-4 py-6 border-r text-gray-700 font-bold text-[15px] text-center dark:text-white">
      {value2}
    </div>
  </div>
);

const ExpertizaTable = ({ expData, link = "word" }) => {
  const { stRef } = useZirhStref();
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [wordBlob, setWordBlob] = React.useState(null);
  const [wordError, setWordError] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const docxContainerRef = React.useRef(null);
  const [isPrinting, setIsPrinting] = React.useState(false);
  const [printImages, setPrintImages] = React.useState([]);
  const printComponentRef = React.useRef(null);

  // console.log(expData);
  const handleReactToPrint = useReactToPrint({
    contentRef: printComponentRef,
    documentTitle: "Hujjat",
  });

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const openDoc = async (url, name, fileSize) => {
    // console.log(url, name, fileSize);
    const blob = await downloadFileAll(url, name, fileSize);
    const fileName = (name || "").toLowerCase();
    const mime = blob.type || "";

    if (mime === "application/pdf" || fileName.endsWith(".pdf")) {
      const blobUrl = URL.createObjectURL(blob);
      setPreviewUrl(blobUrl);
      setWordBlob(null);
      setWordError(null);
      setOpen(true);
      return;
    }

    if (
      fileName.endsWith(".docx") ||
      fileName.endsWith(".doc") ||
      mime ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      mime === "application/msword" ||
      mime === "application/octet-stream"
    ) {
      // console.log("word file");
      setPreviewUrl(null);
      setWordBlob(blob);
      setWordError(null);
      setOpen(true);
      return;
    }

    alert("Fayl turi aniqlanmadi");
  };

  const downloadFileAll = async (id, fileName, fileSize) => {
    const blob = await downloadFileViaRpcNew(
      stRef,
      id,
      fileName ?? expData?.files[0]?.[2],
      fileSize ?? expData?.files[0]?.[3],
      (p) => {
        // console.log(p);
        setUploadProgress(p);
        setIsUploading(true);
        if (p === 100) setIsUploading(false);
      },
    );

    // console.log(blob);

    return blob;
  };

  const closeModal = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setWordBlob(null);
    setWordError(null);
    setOpen(false);
  };

  const getArrayBufferFromBlob = React.useCallback(async (blob) => {
    if (!blob) return null;
    if (typeof blob.arrayBuffer === "function") {
      return await blob.arrayBuffer();
    }
    if (blob instanceof Blob) {
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
      });
    }
    return null;
  }, []);

  React.useEffect(() => {
    const renderDocx = async () => {
      if (!wordBlob || !docxContainerRef.current) return;
      try {
        const buffer = await getArrayBufferFromBlob(wordBlob);
        if (!buffer) {
          setWordError(
            "Word faylini ochishda xatolik. Faylni qayta yuklab ko‘ring.",
          );
          return;
        }
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
        });
        const rawHtml = docxContainerRef.current.innerHTML;
        docxContainerRef.current.innerHTML = DOMPurify.sanitize(rawHtml, {
          USE_PROFILES: { html: true },
        });
      } catch (e) {
        console.error("docx render err", e);
        setWordError(
          "Word faylini ochishda xatolik. Iltimos .docx formatida yuboring yoki faylni qayta yuklab ko‘ring.",
        );
      }
    };
    renderDocx();
  }, [wordBlob, getArrayBufferFromBlob]);

  const handlePrint = async () => {
    // console.log(expData)
    if (isPrinting) return;
    setIsPrinting(true);
    try {
      if (previewUrl) {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = previewUrl;
        document.body.appendChild(iframe);
        iframe.onload = () => {
          iframe.contentWindow.print();
          setTimeout(() => {
            document.body.removeChild(iframe);
            setIsPrinting(false);
          }, 1000);
        };
        return;
      }

      if (docxContainerRef.current) {
        const container = docxContainerRef.current;
        const sections = container.querySelectorAll("section.docx");
        if (sections.length === 0) {
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
      console.error("Print error:", e);
      setIsPrinting(false);
    }
  };

  const getStatus = (status) => {
    switch (status) {
      case 1:
        return "Shartnoma kelgan";
      case 2:
        return "Tizimga qo'shilgan";
      case 3:
        return "Xat chiqarilgan";
      case 4:
        return "Xat kelgan";
      case 5:
        return "Jarayon tekshirilmoqda";
      case 6:
        return "Hisobotga chiqarilgan";
      case 7:
        return "Qisman yakunlangan";
      case 8:
        return "Qayta ekspertizada";
      case 9:
        return "To'liq yakunlangan";
      case 10:
        return "Vaqtincha to'xtatilgan";
      default:
        return "Noma'lum";
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/70 dark:bg-black/80 flex items-center justify-center z-50">
          <div className="absolute top-8 right-[40px] flex gap-4 z-50">
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className={`text-white ${isPrinting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} p-3 rounded-full flex items-center justify-center shadow-lg`}
              title="Chop etish"
            >
              {isPrinting ? (
                <iconify-icon icon="line-md:loading-twotone-loop" width="32" />
              ) : (
                <iconify-icon
                  icon="material-symbols:print-outline"
                  width="32"
                />
              )}
            </button>

            <button
              onClick={closeModal}
              className="text-white bg-red-600 hover:bg-red-700 p-3 rounded-full flex items-center justify-center shadow-lg"
            >
              <iconify-icon icon="ic:round-close" width="32" />
            </button>
          </div>
          <div className="docs w-[1000px] h-[100vh] max-w-[1100px] overflow-auto relative">
            {previewUrl && (
              <object
                data={previewUrl + "#toolbar=0&navpanes=0&scrollbar=1"}
                type="application/pdf"
                className="w-full h-full border-none"
                style={{ minHeight: "calc(100vh - 40px)" }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <p>PDF ochishda xatolik yuz berdi.</p>
              </object>
            )}
            {wordBlob && (
              <div className="docx-preview-container">
                {wordError ? (
                  <p className="text-red-500 p-4">{wordError}</p>
                ) : (
                  <div ref={docxContainerRef} />
                )}
              </div>
            )}
            {!previewUrl && !wordBlob && <p>Fayl yuklanmoqda...</p>}
          </div>
        </div>
      )}

      <div className="overflow-hidden bg-white dark:bg-transparent shadow-sm">
        <Row4
          label1="Tashkilot nomi"
          value1={
            <CellValue text={`«${expData?.orgName}» ${expData?.orgType}`} />
          }
          label2="Axborot tizimining nomi"
          value2={<CellValue text={`${expData?.shortName}`} />}
        />

        <Row4
          label1="Nazoratchi"
          value1={
            <CellValue text={`${expData?.controllers["0"].a2}`} badge="0/10" />
          }
          label2="Bajaruvchi"
          value2={
            <CellValue text={`${expData?.workers["0"].a2}`} badge="0/15" />
          }
        />

        <Row4
          label1="Ajratilgan mutaxassislar soni"
          value1={
            <CellValue
              text={`${expData.controllers?.length + expData.workers?.length}`}
            />
          }
          label2="Kelib tushgan xat raqami"
          value2={<CellValue text={expData?.number} />}
        />

        <Row4
          label1="Markaz tomonidan yuborilgan xat"
          value1={
            <CellValue
              text={expData?.files[0]?.[2]}
              url={expData?.files[0]?.[1]}
              fileSize={expData?.files[0]?.[3]}
              download
              onOpen={openDoc}
            />
          }
          label2="Shartnoma imzolangan sana"
          value2={<CellValue text={formatDate(expData?.contractDate)} />}
        />

        <Row4
          label1="Kelib tushgan mablag‘ sanasi"
          value1={<CellValue text={expData?.contractPriceDate} />}
          label2="Tizimga mas’ul shaxs"
          value2={<CellValue text={`${expData?.resPerList[0]?.a2}. Tel: ${expData?.resPhone}`} />}
        />

        <Row4
          label1="Ekspertiza uchun zaruriy chora-tadbirlar tashkil etilgan sana"
          value1={<CellValue text="" />}
          label2="Ekspertizaning boshlanish sanasi"
          value2={<CellValue text={formatDate(expData?.startDate)} />}
        />

        <Row4
          label1="Dasturlash firmasi"
          value1={<CellValue text="Test dasturlash firmasi" />}
          label2="Ekspertiza yakunlanish sanasi"
          value2={<CellValue text={formatDate(expData?.endDate)} />}
        />

        <Row4
          label1="Qaysi bosqichda"
          value1={<CellValue text={getStatus(expData?.status)} />}
          label2="Hisobot yuborilgan sanasi"
          value2={<CellValue text="" />}
        />

        <Row4
          label1="Qayta ekspertizaga yuborilgan sana"
          value1={<CellValue text="" />}
          label2="Qayta ekspertiza natijasi sanasi"
          value2={<CellValue text="" />}
        />

        <Row4
          label1="Xat chiqarilgan"
          value1={
            <CellValue
              text={expData?.files[1]?.[2]}
              url={expData?.files[1]?.[1]}
              fileSize={expData?.files[1]?.[3]}
              download
              onOpen={openDoc}
            />
          }
          label2="Mobil dastur"
          value2={<CellValue text="" />}
        />

        <Row4
          label1="Xat kelgan"
          value1={
            <CellValue
              text={expData?.files[2]?.[2]}
              url={expData?.files[2]?.[1]}
              fileSize={expData?.files[2]?.[3]}
              download
              onOpen={openDoc}
            />
          }
          label2="Desktop dastur"
          value2={<CellValue text="" />}
        />

        <Row4
          label1="Rozilik xati"
          value1={<CellValue text="" />}
          label2="Vaqtincha to'xtatilgan"
          value2={
            <CellValue
              text={expData?.files[4]?.[2]}
              url={expData?.files[4]?.[1]}
              fileSize={expData?.files[4]?.[3]}
              download
              onOpen={openDoc}
            />
          }
        />

        <Row4
          label1="Qayta expertiza"
          value1={
            <CellValue
              text={expData?.files[5]?.[2]}
              url={expData?.files[5]?.[1]}
              fileSize={expData?.files[5]?.[3]}
              download
              onOpen={openDoc}
            />
          }
          label2="To'liq yakunlangan"
          value2={<CellValue text="" />}
        />

        <Row4
          label1="Hisob raqami"
          value1={<CellValue text={expData?.repport} />}
          label2="Summa"
          value2={<CellValue text={expData?.inn.toLocaleString()} />}
        />

        <Row4
          label1="Hisobot yuklab olish"
          value1={
            <CellValue button="Hisobot" linkToWord={`${link}/${expData?.id}`} />
          }
          label2="Qayta expertiza ijobiy xat yuklab olish (.docx)"
          value2={
            <WordQayta
              data={{
                orgName: expData?.orgName ?? "",
                orgType: expData?.orgType ?? "",
                ordName: expData?.shortName ?? "",
                ordReSendDate:
                  typeof expData?.endDate === "string" &&
                  expData.endDate.length >= 10
                    ? expData.endDate.slice(0, 10)
                    : expData?.endDate
                      ? new Date(expData.endDate).toISOString().slice(0, 10)
                      : "",
                letterReNumber: expData.qaytaxat ?? "",
                reportNumber: expData?.repport ?? "",
                mobile: expData?.system === 1 ? false : true,
              }}
            />
          }
        />

        <Row4
          label1="Qayta expertiza kamchilik xat yuklab olish (.docx)"
          value1={
            <WordQaytaKam
              data={{
                orgName: expData?.orgName ?? "",
                orgType: expData?.orgType ?? "",
                ordName: expData?.shortName ?? "",
                ordReSendDate:
                  typeof expData?.endDate === "string" &&
                  expData.endDate.length >= 10
                    ? expData.endDate.slice(0, 10)
                    : expData?.endDate
                      ? new Date(expData.endDate).toISOString().slice(0, 10)
                      : "",
                letterReNumber: expData?.qaytaxat ?? "",
                reportNumber: expData?.repport ?? "",
                mobile: expData?.system === 1 ? false : true,
                contractDate:
                  typeof expData?.contractDate === "string" &&
                  expData.contractDate.length >= 10
                    ? expData.contractDate.slice(0, 10)
                    : expData?.contractDate
                      ? new Date(expData.contractDate)
                          .toISOString()
                          .slice(0, 10)
                      : "",
                contractNumber:
                  expData?.contractNumber ?? expData?.number ?? "",
              }}
            />
          }
          label2="Ruxsat xat yuklab olish (.docx)"
            value2={
              expData?.system === 1 ? (
                <WordRuxsat
                  data={{
                    orgName: expData?.orgName ?? "",
                    orgType: expData?.orgType ?? "",
                    ordName: expData?.shortName ?? "",
                    contractDate:
                      typeof expData?.contractDate === "string" &&
                      expData.contractDate.length >= 10
                        ? expData.contractDate.slice(0, 10)
                        : expData?.contractDate
                          ? new Date(expData.contractDate).toISOString().slice(0, 10)
                          : "",
                    contractNumber: expData?.contractNumber ?? expData?.number ?? "",
                  }}
                />
              ) : (
                <WordMobile
                  data={{
                    orgName: expData?.orgName ?? "",
                    orgType: expData?.orgType ?? "",
                    ordName: expData?.shortName ?? "",
                    contractDate:
                      typeof expData?.contractDate === "string" &&
                      expData.contractDate.length >= 10
                        ? expData.contractDate.slice(0, 10)
                        : expData?.contractDate
                          ? new Date(expData.contractDate)
                              .toISOString()
                              .slice(0, 10)
                          : "",
                    contractNumber:
                      expData?.contractNumber ?? expData?.number ?? "",
                    mobile: expData?.system === 1 ? false : true,
                  }}
                />
              )}
        />


        <Row4
          label1="To‘liq hisobot"
          value1={<CellValue text={""} />}
          label2="Dastlabki hash"
          value2={
            <CellValue
              text={expData?.files[8]?.[2]}
              url={expData?.files[8]?.[1]}
              fileSize={expData?.files[8]?.[3]}
              download
              onOpen={openDoc}
            />
          }
        />

        <Row4
          label1="Yakuniy hash"
          value1={<CellValue button="" />}
          label2=""
          value2={<CellValue button="" />}
        />
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

export default ExpertizaTable;
