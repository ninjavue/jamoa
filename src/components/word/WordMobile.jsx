import { useContext, useEffect, useRef, useState } from "react";
import logo from "../../assets/qayta.png";
// import logo1 from '../assets/qr-code.png'
// import logo2 from '../assets/qr-code1.png'
import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Header,
  Footer,
  BorderStyle,
  ImageRun,
  Paragraph,
  Column,
  SectionType,
  PageBreak,
  AlignmentType,
  Table,
  WidthType,
  TableRow,
  TableCell,
  TextRun,
  VerticalAlign,
} from "docx";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { useZirhStref } from "../../context/ZirhContext";
import { METHOD } from "../../api/zirhrpc";
let t = false;
// import './style.css'
let p = [];

/**
 * WordMobile komponenti uchun data obyektining strukturaasi.
 * Masalan: { orgName, orgType, ordName, contractDate, contractNumber }
 *
 * @typedef {Object} WordMobileData
 * @property {string} orgName - Tashkilot nomi
 * @property {string} orgType - Tashkilot turi (masalan: "DAK", "MCHJ")
 * @property {string} ordName - Mobil ilova nomi (ekspertiza qilinayotgan ilova)
 * @property {string} contractDate - Shartnoma sanasi, format: "YYYY-MM-DD" (masalan: "2024-12-15")
 * @property {string} contractNumber - Shartnoma raqami
 */

/** WordMobile uchun data namunasi (kerak bo'lsa default sifatida ishlatish mumkin) */
const defaultWordMobileData = {
  orgName: "",
  orgType: "",
  ordName: "",
  contractDate: "", // "YYYY-MM-DD" formatida
  contractNumber: "",
};

const WordMobile = ({ data }) => {
  const dataResolved = data ?? defaultWordMobileData;

  const [user, setUser] = useState({ email: "", fullName: "", shortName: "" });
  const { stRef } = useZirhStref();

  const getBase64ImageDimensions = (base64Image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        // Rasm yuklanganidan keyin uning o‘lchamlarini olish
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = reject;
      img.src = base64Image; // Base64 formatdagi rasm
    });
  };
  const fetchImageAndGetDimensions = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const imageArrayBuffer = await response.arrayBuffer();
    const base64Image = btoa(
      String.fromCharCode(...new Uint8Array(imageArrayBuffer)),
    ); // Base64 ga o‘tkazish

    // O‘lchamlarni olish
    const dimensions = await getBase64ImageDimensions(
      `data:image/png;base64,${base64Image}`,
    );
    console.log((dimensions.height * 290) / dimensions.width, "  448484865");
    return (dimensions.height * 290) / dimensions.width;
  };
  const generateQRCode = async (url) => {
    return new Promise((resolve, reject) => {
      const qrCodeCanvas = document.createElement("canvas");
      QRCode.toCanvas(qrCodeCanvas, url, (err) => {
        if (err) reject(err);
        resolve(qrCodeCanvas.toDataURL());
      });
    });
  };

  const getUser = async () => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.USER_GET, {});
      if (res?.status === METHOD.OK && res?.[1]) {
        const row = res[1];
        const fio = row[4]; // [surname, name, patronymic] = [1], [2], [3]
        const surname = fio?.[1] ?? "";
        const name = fio?.[2] ?? "";
        const patronymic = fio?.[3] ?? "";
        const newUser = {
          email: row[1] ?? "",
          fullName: [surname, name, patronymic].filter(Boolean).join(" "),
          shortName:
            name && surname
              ? ((name.length >= 2 && (name.slice(0, 2) === "Sh" || name.slice(0, 2) === "Ch"))
                  ? name.slice(0, 2) + "." + surname
                  : name.slice(0, 1) + "." + surname).trim()
              : (surname || name || ""),
        };
        setUser(newUser);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const month = (data) => {
    if (data == "01") return "yanvar";
    if (data == "02") return "fevral";
    if (data == "03") return "mart";
    if (data == "04") return "aprel";
    if (data == "05") return "may";
    if (data == "06") return "iyun";
    if (data == "07") return "iyul";
    if (data == "08") return "avgust";
    if (data == "09") return "sentabr";
    if (data == "10") return "oktabr";
    if (data == "11") return "noyabr";
    if (data == "12") return "dekabr";
  };
  const date = new Date();
  const mon = date.getMonth() + 1;
  const docxConvert = async () => {
    const doc = new Document({
      styles: {
        paragraphStyles: [
          {
            id: "Normal",
            name: "Normal",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
              font: "Times New Roman", // Umumiy shrift
              size: 28, // 16 pt o'lcham
            },
          },
        ],
      },
      sections: [
        {
          properties: {
            type: SectionType.NEXT_PAGE,

            page: {
              margin: {
                top: (1440 * 1) / 2.54, // 2cm
                right: (1440 * 1.5) / 2.54, // 1.5cm
                bottom: (1440 * 0.5) / 2.54, // 2cm
                left: (1440 * 2.5) / 2.54, // 2.5cm
              },
            },
          },

          children: [
            new Paragraph({
              children: [
                new ImageRun({
                  data: fetch(logo).then((res) => res.arrayBuffer()),
                  transformation: {
                    width: 640,
                    height: 140,
                  },
                }),
              ],

              alignment: AlignmentType.CENTER,
              spacing: { after: 200, before: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${date.getFullYear()}-yil ${date.getDate()}-${month(`${mon < 10 ? "0" + mon : mon}`)}`,
                  size: 28,
                }),
                new TextRun({
                  text: "\t\t\t\t\t\t\t", // Bu yerda bo'shliqni tablar bilan kengaytiramiz
                  size: 28,
                }),
                new TextRun({
                  text: "03-18-01/98-son",
                  size: 28,
                }),
              ],

              alignment: AlignmentType.LEFT,
              spacing: { line: 240, after: 100 },
            }),
            ...Array(2).fill(new Paragraph(" ")),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${dataResolved?.orgName} ${dataResolved?.orgType} `,
                  size: 28,
                  bold: true,
                }),
              ],

              alignment: AlignmentType.CENTER,
              spacing: { line: 240, after: 100 },
              indent: {
                left: 5500, // Chap tomondan 500 joy tashlash (taxminan 0.5 inch)
              },
            }),
            ...Array(2).fill(new Paragraph(" ")),
            new Paragraph({
              children: [
                new TextRun({
                  text: `“${dataResolved?.orgName}” ${dataResolved?.orgType} va “Kiberxavfsizlik markazi” davlat unitar korxonasi (keyingi oʻrinlarda - Markaz) oʻrtasida ${dataResolved?.ordName} mobil ilovasini kiberxavfsizlik talablariga muvofiqligi boʻyicha ekspertizadan oʻtkazish yuzasidan tuzilgan ${(dataResolved?.contractDate || "")[0]}${(dataResolved?.contractDate || "")[1]}${(dataResolved?.contractDate || "")[2]}${(dataResolved?.contractDate || "")[3]}-yil ${(dataResolved?.contractDate || "")[8] == "0" ? "" : (dataResolved?.contractDate || "")[8]}${(dataResolved?.contractDate || "")[9]}-${month(`${(dataResolved?.contractDate || "")[5]}${(dataResolved?.contractDate || "")[6]}`)}dagi ${dataResolved?.contractNumber} shartnoma (keyingi oʻrinlarda - Shartnoma) ning 5.1 va 5.2 bandlariga muvofiq Markaz tomonidan quyidagi mas’ul shaxs belgilandi:`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.JUSTIFIED,
              spacing: { line: 240, after: 60 },
              indent: { firstLine: 900 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `- F.I.Sh.: ${user?.fullName ?? ""};`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.JUSTIFIED,
              spacing: { line: 240, after: 60 },
              indent: { firstLine: 900 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `- elektron pochta manzili: ${user?.email ?? ""};`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.JUSTIFIED,
              spacing: { line: 240, after: 60 },
              indent: { firstLine: 900 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `- telefon raqami: (71) 203-00-24.`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.JUSTIFIED,
              spacing: { line: 240, after: 60 },
              indent: { firstLine: 900 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Shu bilan birga, yuqorida koʻrsatib oʻtilgan bandlarga muvofiq ekspertiza davomida yuzaga keladigan savollarni hal etish maqsadida Siz tomondan belgilangan mas’ul shaxs toʻgʻrisidagi maʼlumotlarni (F.I.Sh., kontakt maʼlumotlari) yuborishingizni, shuningdek, yuqoridagi Shartnomalarning 5.4 bandiga muvofiq ekspertiza o‘tkazilishi kelishilgan mobil ilovalar ma’lumotlarini ilovadagi jadvalga muvofiq ravishda taqdim etishingizni soʻraymiz.`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.JUSTIFIED,
              spacing: { line: 240, after: 60 },
              indent: { firstLine: 900 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Ilova: Jadval. Mobil ilovala va uning nazorat qiymatlari ma’lumotlari. 1-varaqda, 1-nusxada.",
                  size: 28,
                  italics: true,
                }),
              ],

              alignment: AlignmentType.JUSTIFIED,
              spacing: { line: 240, after: 60 },
              indent: { firstLine: 900 },
            }),

            ...Array(2).fill(new Paragraph(" ")),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Direktor o‘rinbosari",
                  size: 28,
                  bold: true,
                }),
                new TextRun({
                  text: "\t\t\t\t\t\t\t", // Bu yerda bo'shliqni tablar bilan kengaytiramiz
                  size: 28,
                }),
                new TextRun({
                  text: "Sh.Gafurov",
                  size: 28,
                  bold: true,
                }),
              ],

              alignment: AlignmentType.LEFT,
              spacing: { line: 240, after: 60 },
            }),
            ...Array(5).fill(new Paragraph(" ")),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Ijrochi: ${user?.shortName ?? ""}`,
                  size: 20,
                }),
              ],

              alignment: AlignmentType.LEFT,
              spacing: { line: 240, after: 20 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Tel.: (71) 203-00-24",
                  size: 20,
                }),
              ],

              alignment: AlignmentType.LEFT,
              spacing: { line: 240 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Ilova 1.`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.RIGHT,
              spacing: { line: 240, after: 100 },
              pageBreakBefore: true,
              indent: {
                left: 7500, // Chap tomondan 500 joy tashlash (taxminan 0.5 inch)
              },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Jadval. Mobil ilovala va uning nazorat qiymatlari ma’lumotlari.`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.RIGHT,
              spacing: { line: 240, after: 100 },

              indent: {
                left: 5500, // Chap tomondan 500 joy tashlash (taxminan 0.5 inch)
              },
            }),
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "T/r",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                      shading: {
                        type: "clear",
                        fill: "1F3864", // Ko'k rang (RGB kod)
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Kategoriya",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                      shading: {
                        type: "clear",
                        fill: "1F3864", // Ko'k rang (RGB kod)
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Izoh",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                      shading: {
                        type: "clear",
                        fill: "1F3864", // Ko'k rang (RGB kod)
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "1",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Mobil ilova nomi",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "2",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Mobil ilova joylashgan resurs havolasi",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "3",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Ilova kategoriyasi",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "4",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Talqin (versiya)",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "5",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Platforma",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Ariza beruvchi ma’lumotlari",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                      shading: {
                        type: "clear",
                        fill: "1F3864", // Ko'k rang (RGB kod)
                      },
                      columnSpan: 3,
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "6",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Ariza beruvchi tashkilot",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "7",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Ariza beruvchining rasmiy veb-sayti",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "8",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Mobil ilova ishlab chiqaruvchisi",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "9",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Ishlab chiqaruvchining rasmiy veb-sayti",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Ilova nazorati qiymatlari",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                      shading: {
                        type: "clear",
                        fill: "1F3864", // Ko'k rang (RGB kod)
                      },
                      columnSpan: 3,
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "10",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "MD5",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "11",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "SHA1",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "12",
                              size: 28,
                              bold: true,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "SHA256",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.LEFT,
                        }),
                      ],
                      width: {
                        size: 1000, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },
                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                        left: 100,
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "",
                              size: 28,
                            }),
                          ],
                          // indent:{ firstLine:900},
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                      width: {
                        size: 600, // Misol uchun, 4500 yarmi
                        type: WidthType.DXA,
                      },

                      margins: {
                        top: 100, // Yuqori padding
                        bottom: 100, // Pastki padding
                      },
                    }),
                  ],
                }),
              ],
              width: {
                size: 9500,
                type: WidthType.DXA,
              },

              pageBreakBefore: true,
            }),
          ],
        },
      ],
    });

    // Hujjatni .docx formatida saqlash va foydalanuvchiga yuklab berish
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "CustomMarginsDocument.docx");
    });
  };

  return (
    <>
      <button
        className="btn btn-primary "
        onClick={() => {
          docxConvert();
        }}
      >
        Ruxsat xat
      </button>
    </>
  );
};

export default WordMobile;
