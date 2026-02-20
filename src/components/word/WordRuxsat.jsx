import { useContext, useEffect, useRef, useState } from 'react'
import logo from '../../assets/qayta.png'
import logo1 from '../../assets/qr-code3.png'
import logo2 from '../../assets/qr-code2.png'
import { saveAs } from 'file-saver';
import { Document, Packer, Header, Footer, BorderStyle, ImageRun, Paragraph, Column, SectionType, PageBreak, AlignmentType, Table, WidthType, TableRow, TableCell, TextRun, VerticalAlign } from 'docx';
import { sendRpcRequest } from '../../rpc/rpcClient';
import { METHOD } from '../../api/zirhrpc';
import { useZirhStref } from '../../context/ZirhContext';
let t = false
let p = []
const WordRuxsat = ({ data }) => {
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
    const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageArrayBuffer))); // Base64 ga o‘tkazish

    // O‘lchamlarni olish
    const dimensions = await getBase64ImageDimensions(`data:image/png;base64,${base64Image}`);
    console.log((dimensions.height * 290) / dimensions.width, "  448484865")
    return (dimensions.height * 290) / dimensions.width
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
    if (data == "01") return "yanvar"
    if (data == "02") return "fevral"
    if (data == "03") return "mart"
    if (data == "04") return "aprel"
    if (data == "05") return "may"
    if (data == "06") return "iyun"
    if (data == "07") return "iyul"
    if (data == "08") return "avgust"
    if (data == "09") return "sentabr"
    if (data == "10") return "oktabr"
    if (data == "11") return "noyabr"
    if (data == "12") return "dekabr"
  }
  const date = new Date();
  const mon = date.getMonth() + 1;
  const docxConvert = async () => {
    // Logo (qayta.png) ni oldindan yuklab olamiz, birinchi joyda aynan shu rasm chiqishi uchun
    const logoBuffer = await fetch(logo).then((res) => res.arrayBuffer());

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
                top: 1440 * 1 / 2.54, // 2cm
                right: 1440 * 1.5 / 2.54, // 1.5cm
                bottom: 1440 * 0.5 / 2.54, // 2cm
                left: 1440 * 2.5 / 2.54, // 2.5cm

              },


            },


          },
       
          children: [

            new Paragraph({
                children: [
                  new ImageRun({
                    data: logoBuffer,
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
                spacing: { line: 240, after: 100, },
  
  
  
              }),
              ...Array(2).fill(new Paragraph(" ")),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${data.orgName} ${data.orgType} `,
                    size: 28,
                    bold:true
                  }),
               
                ],
  
                alignment: AlignmentType.CENTER,
                spacing: { line: 240, after: 100, },
                indent: {
                    left: 5500, // Chap tomondan 500 joy tashlash (taxminan 0.5 inch)
                  },
  
  
              }),
              ...Array(2).fill(new Paragraph(" ")),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `“${data.orgName}” ${data.orgType} va “Kiberxavfsizlik markazi” davlat unitar korxonasi (keyingi oʻrinlarda - Markaz) oʻrtasida ${data.ordName} axborot tizimini kiberxavfsizligi talablariga muvofiqligi boʻyicha ekspertizadan oʻtkazish yuzasidan tuzilgan ${data.contractDate[0]}${data.contractDate[1]}${data.contractDate[2]}${data.contractDate[3]}-yil ${data.contractDate[8] == "0" ? "" : data.contractDate[8]}${data.contractDate[9]}-${month(`${data.contractDate[5]}${data.contractDate[6]}`)}dagi ${data.contractNumber} shartnoma (keyingi oʻrinlarda - Shartnoma) ning 5.2 va 5.3 bandlariga muvofiq Markaz tomonidan quyidagi mas’ul shaxs belgilandi:`,
                    size: 28,
                  
                  }),
                 
                 
                ],
  
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 240, after: 60, },
                indent: { firstLine: 900 }
  
  
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `- F.I.Sh.: ${user.fullName};`,
                    size: 28,
                  
                  }),
                 
                 
                ],
  
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 240, after: 60, },
                indent: { firstLine: 900 }
  
  
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `- elektron pochta manzili: ${user.email};`,
                    size: 28,
                  
                  }),
                 
                 
                ],
  
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 240, after: 60, },
                indent: { firstLine: 900 }
  
  
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `- telefon raqami: (71) 203-00-24.`,
                    size: 28,
                  
                  }),
                 
                 
                ],
  
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 240, after: 60, },
                indent: { firstLine: 900 }
  
  
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Shu bilan birga, yuqorida koʻrsatib oʻtilgan bandlarga muvofiq ekspertiza davomida yuzaga keladigan savollarni hal etish maqsadida Siz tomondan belgilangan mas’ul shaxs toʻgʻrisidagi maʼlumotlarni yuborishingizni,  hamda, Shartnomaning 5.4 bandiga muvofiq axborot tizimining klon versiyasiga masofadan kirish imkonini taʼminlagan holda axborot tizimida mavjud har bir roldan 2 tadan foydalanuvchining hisobga olish yozuvini (login, parol, elektron raqamli imzo va/yoki OneID foydalanuvchisi) taqdim etishingizni shuningdek, shartnomaning 3.1-bandiga muvofiq axborot tizimining “xesh” qiymatini elektron shaklda (optik vositalar CD/DVD/flashUSBda orqali) rasmiy tartibda taqdim etishingizni soʻraymiz.`,
                    size: 28,
                  
                  }),
                 
                 
                ],
  
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 240, after: 60, },
                indent: { firstLine: 900 }
  
  
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Shu o‘rinda, ekspertiza faqatgina Siz tomondan taqdim qilingan ma’lumotlar asosida olib borilishini (domen, url, ip va boshqalar) hamda ekspertiza obyekti hisoblangan axborot tizimi bilan bog‘liq boshqa axborot tizimlari va resurslarida ekspertiza o‘tkazilmasligini ma’lum qilamiz.`,
                    size: 28,
                  
                  }),
                 
                 
                ],
  
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 240, after: 60, },
                indent: { firstLine: 900 }
  
  
              }),
              new Paragraph({
                children: [
                 
                  new TextRun({
                    text: "Ma’lumot o‘rnida: Buyurtmachi tomonidan Shartnomaning 3.1- va 5.4-bandida belgilangan talablar to‘liq shakllantirilib, Markazga taqdim etilgandan keyin ekspertiza ishlari boshlangan deb hisoblanadi. Shu o‘rinda ta’kidlash joizki Shartnomaning 5.4-bandida belgilangan talablar to‘liq shakllantirilib berilmasligi Shartnomaning 8.4-bandida ko‘ra bir tomonlama 10 (o‘n) ish kuni muddatida bekor qilinishiga olib kelishi mumkin.",
                    size: 28,
                    italics:true
                  }),
                 
                ],
  
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 240, after: 60, },
                indent: { firstLine: 900 }
  
  
              }),
              new Paragraph({
                children: [
                 
                  new TextRun({
                    text: "Shuningdek, axborot tizimining “xesh” qiymatini olish bo‘yicha video qo‘llanmalar bilan quyidagi havolalar orqali tanishish mumkin:",
                    size: 28,
                    italics:true
                  }),
                 
                ],
  
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 240, after: 60, },
                indent: { firstLine: 900 }
  
  
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
                                text: "“Windows OS” -",
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
                        
                        },
  
                      
  
                      }),
                      new TableCell({
                        children: [
  
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "https://www.youtube.com/watch?v=Skx0EfkSVxY",
                                size: 26,
  
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
                        
                        },
                       
                       
  
  
                      }),
                      new TableCell({
                        children: [
  
                          new Paragraph({
                            children: [
                              new ImageRun({
                                data:  fetch(logo1).then((res) => res.arrayBuffer()),
                                transformation: {
                                  width: 40,
                                  height: 40,
                                },
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
                                text: "“Linux OS” - ",
                                size: 26,
  
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
                        
                        },
                       
  
                      }),
                      new TableCell({
                        children: [
  
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "https://www.youtube.com/watch?v=fkwUI-ITtss",
                                size: 26,
  
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
                        
                        },
                        
  
  
                      }),
                      new TableCell({
                        children: [
  
                          new Paragraph({
                            children: [
                              new ImageRun({
                                data:  fetch(logo2).then((res) => res.arrayBuffer()),
                                transformation: {
                                  width: 40,
                                  height: 40,
                                },
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
              // new Paragraph({
              //   children: [
                 
              //     new TextRun({
              //       text: "“Windows OS” - https://youtube.com/watch?v=zafzZ01cBVs&feature=shared   ",
              //       size: 28,
              //       italics:true
              //     }),
              //     new ImageRun({
              //       data:  fetch(logo1).then((res) => res.arrayBuffer()),
              //       transformation: {
              //         width: 30,
              //         height: 30,
              //       },
              //     }),
                 
              //   ],
  
              //   alignment: AlignmentType.LEFT,
              //   spacing: { line: 240, after: 60, },
               
  
  
              // }),
           
              // new Paragraph({
              //   children: [
                 
              //     new TextRun({
              //       text: "“Linux OS” - https://youtu.be/I8NXgt8y9I4?si=hVfwGBo6dxmsdGON   ",
              //       size: 28,
              //       italics:true
              //     }),

              //     new ImageRun({
              //       data:  fetch(logo2).then((res) => res.arrayBuffer()),
              //       transformation: {
              //         width: 30,
              //         height: 30,
              //       },
              //     }),
                 
              //   ],
  
              //   alignment: AlignmentType.LEFT,
              //   spacing: { line: 240, after: 60, },
              
  
  
              // }),
           
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Direktor o‘rinbosari",
                    size: 28,
                   bold:true
                  }),
                  new TextRun({
                    text: "\t\t\t\t\t\t\t", // Bu yerda bo'shliqni tablar bilan kengaytiramiz
                    size: 28,
                    
                  }),
                  new TextRun({
                    text: "Sh.Gafurov",
                    size: 28,
                    bold:true
                  }),
                ],
  
                alignment: AlignmentType.LEFT,
                spacing: { line: 240, after: 60, },
  
  
  
              }),
              ...Array(2).fill(new Paragraph(" ")),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Ijrochi: ${user.shortName}`,
                    size: 20,
                  
                  }),
                 
                 
                ],
  
                alignment: AlignmentType.LEFT,
                spacing: { line: 240, after: 20, },
  
  
  
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Tel.: (71) 203-00-24",
                    size: 20,
                  
                  }),
                ],
  
                alignment: AlignmentType.LEFT,
                spacing: { line: 240,  },
              }),


          ],

        },
      
      ],
    });

    // Hujjatni .docx formatida saqlash va foydalanuvchiga yuklab berish
    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `${data.ordName}_${formatDate()}.docx`);
    });
  }

  return (
    <>
      <button className="btn btn-primary " onClick={() => { docxConvert() }}>
        Ruxsat xat
      </button>

    </>
  )
}
export default WordRuxsat