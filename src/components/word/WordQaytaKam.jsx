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
import { useZirhStref } from "../../context/ZirhContext";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { METHOD } from "../../api/zirhrpc";
let t = false;
let p = [];
const WordQaytaKam = ({ data }) => {
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

  const arrayBufferToBase64 = (buffer) => {
    return new Promise((resolve, reject) => {
      const blob = new Blob([buffer], { type: "image/png" });
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]); // Base64 stringini ajratib olish
      reader.onerror = reject;
      reader.readAsDataURL(blob);
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
              ? (name.length >= 2 &&
                (name.slice(0, 2) === "Sh" || name.slice(0, 2) === "Ch")
                  ? name.slice(0, 2) + "." + surname
                  : name.slice(0, 1) + "." + surname
                ).trim()
              : surname || name || "",
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

    // Base64 ga o‘tkazish
    const base64Image = await arrayBufferToBase64(imageArrayBuffer);

    // O‘lchamlarni olish
    const dimensions = await getBase64ImageDimensions(
      `data:image/png;base64,${base64Image}`,
    );

    // Nisbatni hisoblash
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
                    height: 165,
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
                  text: `${data.orgName} ${data.orgType} `,
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
                  text:
                    data.ordReSendDate[0] == "1"
                      ? ""
                      : `${data.ordReSendDate[0]}${data.ordReSendDate[1]}${data.ordReSendDate[2]}${data.ordReSendDate[3]}-yil ${data.ordReSendDate[8] == "0" ? "" : data.ordReSendDate[8]}${data.ordReSendDate[9]}-${month(`${data.ordReSendDate[5]}${data.ordReSendDate[6]}`)}dagi`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.LEFT,
              spacing: { line: 240, after: 40 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${data.letterReNumber}-sonli xatga asosan`,
                  size: 28,
                }),
              ],

              alignment: AlignmentType.LEFT,
              spacing: { line: 240, after: 300 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `“Kiberxavfsizlik markazi” davlat unitar korxonasi mutaxassislari tomonidan “${data.orgName}” ${data.orgType} ${data.mobile ? "mobil ilovada" : "axborot tizimida"} aniqlangan zaifliklarni (${data.reportNumber} hisobotga asosan) bartaraf etilganligi yuzasidan qayta ekspertiza o‘tkazildi.`,
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
                  text: `Qayta ekspertiza natijasiga ko‘ra, hisobotda ko‘rsatib o‘tilgan zaifliklar ${date.getFullYear()}-yil ${date.getDate()}-${month(`${mon < 10 ? "0" + mon : mon}`)} holati uchun hisobotda ko‘rsatib o‘tilgan quyidagi zaifliklar bartaraf etilmaganligini ma’lum qilamiz:`,
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
                  text: `1) 2.2.1.2. Sessiyaning saqlanib qolinishi;`,
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
                  text: `“Kiberxavfsizlik markazi” davlat unitar korxonasi “${data.mobile ? "Mobil ilovani" : "Axborot tizimini"} kiberxavfsizligi talablariga muvofiqligi yuzasidan ekspertizasi” xizmatini taqdim etish reglamentida belgilangan tartibdan kelib chiqqan holda aniqlangan zaifliklar to‘liq bartaraf etilmaganligi sababli “${data.ordName}” tizimini kiberxavfsizligi talablariga muvofiqligi to‘g‘risida `,
                  size: 28,
                }),
                new TextRun({
                  text: `yakuniy ijobiy xulosa taqdim eta olmasligini `,
                  size: 28,
                  bold: true,
                }),
                new TextRun({
                  text: `ma’lum qiladi.`,
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
                  text: `Ma’lumot o‘rnida: O‘tkazilgan qayta ekspertiza natijasida taqdim etilayotgan ushbu xatdagi yakuniy natija “${data.ordName}” tizimini kiberxavfsizlik talablariga muvofiqligi yuzasidan ekspertizasi to‘g‘risida tuzilgan ${data.contractDate[0]}${data.contractDate[1]}${data.contractDate[2]}${data.contractDate[3]}-yil ${data.contractDate[8] == "0" ? "" : data.contractDate[8]}${data.contractDate[9]} ${month(`${data.contractDate[5]}${data.contractDate[6]}`)}dagi ${data.contractNumber} shartnoma doirasidagi belgilangan “Ijrochi” vazifalarining so‘nggi bosqichi bo‘lganligi sababli kelgusida “${data.ordName}” tizimini kiberxavfsizlik talablariga muvofiqligi to‘g‘risida ijobiy xulosa olish uchun qaytadan yangi shartnoma tuzish talab etiladi.`,
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
            ...Array(2).fill(new Paragraph(" ")),
            new Paragraph({
              children: [
                new TextRun({
                  text: (() => {
                    return `Ijrochi: ${user?.shortName}`;
                  })(),
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
        Qayta kamchilik xat
      </button>
    </>
  );
};

export default WordQaytaKam;
