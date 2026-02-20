import { useContext, useEffect, useRef, useState } from "react";
import logo from "../../assets/qayta.png";
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
import { METHOD } from "../../api/zirhrpc";
import { useZirhStref } from "../../context/ZirhContext";
let t = false;
let p = [];
const defaultWordQaytaData = {
  orgName: "",
  orgType: "",
  ordName: "",
  ordReSendDate: "",
  letterReNumber: "",
  reportNumber: "",
  mobile: false,
};

const WordQayta = ({ data }) => {
  const dataResolved = { ...defaultWordQaytaData, ...data };
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

   const formatDate = () => {
    const now = new Date();
    const formattedDate =
      now.getFullYear() +
      "-" +
      String(now.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(now.getDate()).padStart(2, "0") +
      "_" +
      String(now.getHours()).padStart(2, "0") +
      "-" +
      String(now.getMinutes()).padStart(2, "0") +
      "-" +
      String(now.getSeconds()).padStart(2, "0");
    return formattedDate;
  };

  
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
                top: (1440 * 1.5) / 2.54, // 2cm
                right: (1440 * 1.5) / 2.54, // 1.5cm
                bottom: (1440 * 1.5) / 2.54, // 2cm
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
                  text: `${date.getFullYear()}-yil ${date.getDate()} ${month(`${mon < 10 ? "0" + mon : mon}`)}`,
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
              spacing: { line: 240, after: 500 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${dataResolved.orgName} ${dataResolved.orgType} `,
                  size: 28,
                  bold: true,
                }),
              ],

              alignment: AlignmentType.CENTER,
              spacing: { line: 240, after: 200 },
              indent: {
                left: 5500, // Chap tomondan 500 joy tashlash (taxminan 0.5 inch)
              },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: (() => {
                    const d = dataResolved.ordReSendDate || "";
                    return d[0] == "1"
                      ? ""
                      : `${d[0] || ""}${d[1] || ""}${d[2] || ""}${d[3] || ""}-yil ${d[8] == "0" ? "" : d[8] || ""}${d[9] || ""} ${month(`${d[5] || ""}${d[6] || ""}`)}dagi`;
                  })(),
                  size: 28,
                }),
              ],

              alignment: AlignmentType.LEFT,
              spacing: { line: 240, after: 40 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${dataResolved.letterReNumber}-sonli xatga asosan`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.LEFT,
              spacing: { line: 240, after: 300 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `“Kiberxavfsizlik markazi” davlat unitar korxonasi mutaxassislari tomonidan “${dataResolved.orgName}” ${dataResolved.orgType}ning “${dataResolved.ordName}” ${dataResolved.mobile ? "mobil ilovada" : "axborot tizimida"} aniqlangan zaifliklarni (${dataResolved.reportNumber} hisobotga asosan) bartaraf etilganligi yuzasidan qayta ekspertiza o‘tkazildi.`,
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
                  text: `Qayta ekspertiza natijasiga ko‘ra, hisobotda ko‘rsatib o‘tilgan zaifliklar ${date.getFullYear()}-yil ${date.getDate()} ${month(`${mon < 10 ? "0" + mon : mon}`)} holati uchun ${dataResolved.mobile ? "bartaraf etilganligini ma’lum qilamiz." : "bartaraf etilganligini inobatga olgan holda, quyidagi xesh qiymatga ega bo‘lgan tizim uchun ijobiy xulosa taqdim etilayotganligini ma’lum qilamiz."}`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.JUSTIFIED,
              spacing: { line: 240, after: 60 },
              indent: { firstLine: 900 },
            }),
            ...(!dataResolved.mobile
              ? [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `Jadval. Buyurtmachi tomonidan taqim etilgan 
                    xesh qiymati to‘g‘risida ma’lumot.`,
                        size: 24,
                        italics: true,
                        underline: true,
                      }),
                    ],

                    alignment: AlignmentType.RIGHT,
                    spacing: { line: 240, after: 60 },
                    indent: {
                      left: 5000, // Chap tomondan 500 joy tashlash (taxminan 0.5 inch)
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
                                    text: "Taqdim etilgan fayl nomi va kengaytmasi",
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
                                    text: "Xesh yozilgan fayl nomi va kengaytmasi",
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
                                    text: "Umumiy xavfsizlik xesh qiymati",
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
                        ],
                      }),
                      new TableRow({
                        children: [
                          new TableCell({
                            children: [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: "fayl.rar",
                                    size: 28,
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
                                    text: "secret.txt",
                                    size: 28,
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
                                    text: "000000000000000000000000000000000",
                                    size: 28,
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
                        ],
                      }),
                      // new TableRow({
                      //   children: [
                      //     new TableCell({
                      //       children: [

                      //         new Paragraph({
                      //           children: [
                      //             new TextRun({
                      //               text: "fayl.rar",
                      //               size: 28

                      //             }),

                      //           ],
                      //           // indent:{ firstLine:900},
                      //           alignment: AlignmentType.CENTER,

                      //         }),
                      //       ],
                      //       width: {
                      //         size: 1000, // Misol uchun, 4500 yarmi
                      //         type: WidthType.DXA,
                      //       },
                      //       margins: {
                      //         top: 100, // Yuqori padding
                      //         bottom: 100, // Pastki padding

                      //       },

                      //     }),
                      //     new TableCell({
                      //       children: [

                      //         new Paragraph({
                      //           children: [
                      //             new TextRun({
                      //               text: "secret.txt",
                      //               size: 28

                      //             }),

                      //           ],
                      //           // indent:{ firstLine:900},
                      //           alignment: AlignmentType.CENTER,

                      //         }),
                      //       ],
                      //       width: {
                      //         size: 1000, // Misol uchun, 4500 yarmi
                      //         type: WidthType.DXA,
                      //       },
                      //       margins: {
                      //         top: 100, // Yuqori padding
                      //         bottom: 100, // Pastki padding

                      //       },

                      //     }),
                      //     new TableCell({
                      //       children: [

                      //         new Paragraph({
                      //           children: [
                      //             new TextRun({
                      //               text: "000000000000000000000000000000000",
                      //               size: 28

                      //             }),

                      //           ],
                      //           // indent:{ firstLine:900},
                      //           alignment: AlignmentType.CENTER,

                      //         }),
                      //       ],
                      //       width: {
                      //         size: 1000, // Misol uchun, 4500 yarmi
                      //         type: WidthType.DXA,
                      //       },
                      //       margins: {
                      //         top: 100, // Yuqori padding
                      //         bottom: 100, // Pastki padding

                      //       },

                      //     }),
                      //   ],

                      // }),
                    ],
                    width: {
                      size: 9600,
                      type: WidthType.DXA,
                    },
                  }),
                ]
              : []),

            new Paragraph({
              children: [
                new TextRun({
                  text: `Ma’lumot o‘rnida: Kelgusida mazkur ${dataResolved.mobile ? "mobil ilovada" : "axborot tizimida"} tegishli o‘zgartirishlar kiritilgan holatlarda ekspertiza xulosasi o‘z kuchini yo‘qotgan deb hisoblanib, bu esa o‘z o‘rnida yangi tuzilgan shartnomaga asosan axborot tizimini kiberxavfsizlik talablariga muvofiqligi yuzasidan qayta ekspertizadan o‘tkazishga olib keladi.`,
                  size: 28,
                  italics: true,
                }),
              ],

              alignment: AlignmentType.JUSTIFIED,
              spacing: { line: 240, after: 800 },
              indent: { firstLine: 900 },
            }),
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
              spacing: { line: 240, after: 500 },
            }),
            ...Array(4).fill(new Paragraph(" ")),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Ijrochi: ${user.shortName}`,
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
              spacing: { line: 240, after: 200 },
            }),
          ],
        },
      ],
    });

    // Hujjatni .docx formatida saqlash va foydalanuvchiga yuklab berish
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `${data.ordName}_${formatDate()}.docx`);
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
        Qayta ijobiy xat
      </button>
    </>
  );
};

export default WordQayta;
