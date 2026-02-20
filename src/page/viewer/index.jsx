import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import JSZip from "jszip";
import { renderAsync } from "docx-preview";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const file =null

export default function Viewer() {
  const [numPages, setNumPages] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [zipFiles, setZipFiles] = useState([]);
  const [docxHtml, setDocxHtml] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileType, setSelectedFileType] = useState(null);

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  useEffect(() => {
    async function detectFile() {
      const res = await fetch(file);
      const contentType = res.headers.get("Content-Type");
      setFileType(contentType);

      if (contentType === "application/zip") {
        const blob = await res.blob();
        const zip = await JSZip.loadAsync(blob);
        const entries = [];

        for (const filePath of Object.keys(zip.files)) {
          const entry = zip.files[filePath];

          const fileName = filePath.split("/").pop(); 
          if (
            !entry.dir &&
            (fileName.endsWith(".pdf") || fileName.endsWith(".docx"))
          ) {
            const fileBlob = await entry.async("blob");
            entries.push({
              name: filePath,
              blob: fileBlob,
            });
            console.log("ZIP fayl topildi:", filePath);
          }
        }

        setZipFiles(entries);
      }

      if (contentType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        const blob = await res.blob();
        setSelectedFile(blob);
        setSelectedFileType(contentType);
      }

      if (contentType === "application/pdf") {
        const blob = await res.blob();
        setSelectedFile(blob);
        setSelectedFileType(contentType);
      }
    }

    detectFile();
  }, []);

  const openZipFile = async file => {
    const mimeType = file.name.endsWith(".pdf")
      ? "application/pdf"
      : file.name.endsWith(".docx")
        ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        : "";

    setSelectedFile(file.blob);
    setSelectedFileType(mimeType);
    setNumPages(null);
    setDocxHtml(null);
  };

  useEffect(() => {
    const renderDocx = async () => {
      if (
        selectedFile &&
        selectedFileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const buffer = await selectedFile.arrayBuffer();
        const container = document.createElement("div");
        document.body.appendChild(container);
        await renderAsync(buffer, container);

        // Fix table header text colors (white text on dark background)
        const cells = container.querySelectorAll("td");
        cells.forEach((td) => {
          const bgColor = td.style.backgroundColor;
          if (
            bgColor &&
            bgColor !== "transparent" &&
            bgColor !== "white" &&
            bgColor !== "rgb(255, 255, 255)" &&
            bgColor !== "rgba(0, 0, 0, 0)"
          ) {
            td.style.color = "white";
            td.querySelectorAll("p, span, b, strong, i, em").forEach((el) => {
              el.style.color = "white";
            });
          }
        });

        setDocxHtml(container.innerHTML);
        document.body.removeChild(container);
      }
    };
    renderDocx();
  }, [selectedFile, selectedFileType]);

  return (
    <div className="fixed inset-0 bg-black/70 dark:bg-black/80 flex items-center justify-center z-50">
      <div className="w-[80%] h-[90%] max-w-[900px] bg-white dark:bg-[#1e1f25] rounded-lg shadow-xl overflow-auto p-4 relative">

        {/* ZIP fayllar ro'yxati */}
        {fileType === "application/zip" && (
          <div>
            <h1 className="text-xl font-bold mb-4">ZIP ichidagi fayllar:</h1>
            <ul>
              {zipFiles.map((f, i) => (
                <li
                  key={i}
                  className="mb-2 cursor-pointer text-blue-600 hover:underline"
                  onClick={() => openZipFile(f)}
                >
                  {f.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tanlangan fayl PDF bo'lsa */}
        {selectedFile && selectedFileType === "application/pdf" && (
          <Document file={selectedFile} onLoadSuccess={onLoadSuccess}>
            {Array.from(new Array(numPages), (_, i) => (
              <Page
                pageNumber={i + 1}
                key={`page_${i + 1}`}
                className="mb-4 flex justify-center"
              />
            ))}
          </Document>
        )}

        {/* Tanlangan fayl DOCX bo'lsa */}
        {selectedFile &&
          selectedFileType ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && (
            <div dangerouslySetInnerHTML={{ __html: docxHtml }} />
          )}

        {/* Asl PDF fayl */}
        {fileType === "application/pdf" && !selectedFile && (
          <Document file={file} onLoadSuccess={onLoadSuccess}>
            {Array.from(new Array(numPages), (_, i) => (
              <Page
                pageNumber={i + 1}
                key={`page_${i + 1}`}
                className="mb-4 flex justify-center"
              />
            ))}
          </Document>
        )}

        {!fileType && <p>Fayl yuklanmoqda...</p>}
      </div>
    </div>
  );
}
