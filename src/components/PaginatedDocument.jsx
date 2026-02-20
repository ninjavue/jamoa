import React, { useState, useEffect, useRef } from "react";

const A4_HEIGHT_PX = 940; // Sahifaning ichki balandligi (paddinglar ayirilgan holda)

const PaginatedDocument = ({ initialHtml, isEditing, onUpdate }) => {
  const [pages, setPages] = useState([]);
  const measureRef = useRef(null);

  useEffect(() => {
    if (initialHtml) {
      // Bir oz kechikish bilan hisoblaymiz (DOM tayyor bo'lishi uchun)
      const timer = setTimeout(() => {
        splitPages(initialHtml);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [initialHtml]);





  const splitPages = (html) => {
    const measureDiv = measureRef.current;
    if (!measureDiv) return;

    // console.log(initialHtml)
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const nodes = Array.from(tempDiv.childNodes);

    let resultPages = [];
    let currentHtml = "";

    nodes.forEach((node) => {
      const nodeHtml = node.nodeType === 3 ? node.textContent : node.outerHTML;
      measureDiv.innerHTML = currentHtml + nodeHtml;

      if (measureDiv.scrollHeight > A4_HEIGHT_PX) {
        // Agar element sig'masa va bu matnli element (p, h1, span) bo'lsa
        if (node.nodeType === 1 && node.childNodes.length > 0) {
          resultPages.push(currentHtml); // Oldingi tayyor qismni sahifaga olamiz
          currentHtml = nodeHtml; // Sig'maganini yangi sahifaga o'tkazamiz
        } else {
          resultPages.push(currentHtml);
          currentHtml = nodeHtml;
        }
      } else {
        currentHtml += nodeHtml;
      }
    });

    if (currentHtml) resultPages.push(currentHtml);
    setPages(resultPages);
  };

  const handleBlur = (index, e) => {
    const editedHtml = e.currentTarget.innerHTML;
    const fullContent = pages.map((p, i) => (i === index ? editedHtml : p)).join("");
    splitPages(fullContent);
    if (onUpdate) onUpdate(fullContent);
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 py-10">
      {/* Hisoblagich div - Yashirin bo'lishi shart */}
      <div
        ref={measureRef}
        style={{
          width: "794px",
        //   padding: "80px",
          position: "absolute",
          top: "-9999px",
          visibility: "hidden",
          height: "auto",
          fontSize: "14px",
          lineHeight: "1.6",
          fontFamily: "serif",
          textAlign: "justify"
        }}
      />

      {pages.map((html, idx) => (
        <div
          key={idx}
          className="bg-white shadow-2xl mb-10 overflow-hidden relative"
          style={{ width: "794px", height: "1123px" }}
        >
          <div
            contentEditable={isEditing}
            dangerouslySetInnerHTML={{ __html: html }}
            onBlur={(e) => handleBlur(idx, e)}
            className="outline-none"
            style={{
            //   padding: "80px",
              height: "100%",
              fontSize: "14px",
              lineHeight: "1.6",
              fontFamily: "serif",
              textAlign: "justify",
              wordBreak: "break-word"
            }}
          />
          <div className="absolute bottom-10 w-full text-center text-gray-400 select-none">
            {idx + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaginatedDocument;