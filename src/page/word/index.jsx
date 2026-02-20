import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import mammoth from "mammoth";
import { FaPen, FaSave } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import { expertEtaps, inExperts } from "../../api";
import ExpertizeModal from "../../components/expertize";
import { METHOD } from "../../api/zirhrpc";
import { useZirhStref } from "../../context/ZirhContext";
import toast from "react-hot-toast";
import { sendRpcRequest } from "../../rpc/rpcClient";
import { uploadFileViaRpc, downloadFileViaRpcNew } from "../../rpc/fileRpc";
import EditorToolbar from "../../components/editor-toolbar";
const A4_HEIGHT = 1120;
const A4_CONTENT_HEIGHT = 1120; // A4 content height px
const A4_WIDTH = 794;

const TOOLBAR_FONT_FAMILIES = [
  "Arial",
  "Calibri",
  "Cambria",
  "Georgia",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana",
  "Courier New",
];
const TOOLBAR_FONT_SIZES = [10, 11, 12, 14, 16, 18, 20, 24, 30, 36];
const TOOLBAR_BLOCK_OPTIONS = [
  { label: "Oddiy matn", value: "p" },
  { label: "Sarlavha 1", value: "h1" },
  { label: "Sarlavha 2", value: "h2" },
  { label: "Sarlavha 3", value: "h3" },
  { label: "Sarlavha 4", value: "h4" },
  { label: "Sarlavha 5", value: "h5" },
  { label: "Sarlavha 6", value: "h6" },
  { label: "Iqtibos", value: "blockquote" },
];
const TOOLBAR_FONT_SIZE_TO_EXEC = {
  10: "1",
  11: "2",
  12: "3",
  14: "4",
  16: "5",
  18: "6",
  20: "7",
  24: "8",
  30: "9",
  36: "10",
};

const firstSection = [
  {
    title: "Mobil ilova",
    desc: "Maʼlum bir platforma (iOS, Android, Windows Phone va boshqalar) uchun ishlab chiqilgan smartfonlar, planshetlar va boshqa mobil qurilmalarda ishlashga moʻljallangan dastur. ",
  },
  {
    title: "iOS",
    desc: "“Apple”ning iPhone, iPod, iPad, Apple TV uskunalarida oʻrnatilgan mobil aloqa operatsion sistemasi. ",
  },
  {
    title: "Android OS",
    desc: "Smartfonlar, planshetlar, elektron kitoblar, raqamli pleyerlar, qoʻl soatlari, fitnes bilakuzuklar, oʻyin pristavkalari, noutbuklar, netbuklar, smartbuklar, Google Glass koʻzoynaklari, televizorlar, proyektorlar hamda boshqa qurilmalar (2015-yildan avtomobillar tizimlari va maishiy robotlarga ham oʻrnatiladi) uchun operatsion tizim hisoblanadi.",
  },
];

const secondSection = [
  {
    title: "App Store",
    desc: "iOS va iPadOS operatsion tizimlaridagi mobil ilovalar uchun Apple kompaniyasi tomonidan ishlab chiqilgan va qoʻllabquvvatlanadigan ilovalarning onlayn do‘koni.",
  },
  {
    title: "Google Play Store",
    desc: "Android operatsion tizimlaridagi mobil ilovalar uchun Google kompaniyasi tomonidan ishlab chiqilgan va qoʻllabquvvatlanadigan ilovalarning onlayn do‘koni. ",
  },
  {
    title: "Firebase",
    desc: "Google tomonidan Android, iOS tizimlari, JavaScript, Node.js, Java, Unity, PHP va C++ ilovalariga “backend” va maʼlumotlar bazasi bulutli xizmatlarini taqdim qiladigan servis bo‘lib, real vaqtdagi maʼlumotlar bazasi, autentifikatsiya, ilovalarni integrallash va analitika xizmatlarini taklif qiladi.",
  },
  {
    title: "“Man in the middle” hujumi",
    desc: "Tajovuzkor ikki mashina yoki ikkita foydalanuvchi o‘rtasidagi aloqani tinglashi, manipulyatsiya qilish yoki boshqarish imkoniyatining mavjudligi. Ushbu hujum ikki tomon o‘rtasidagi aloqada paydo “{{appName}}” mobil ilovasi bo‘lgan",
  },
];

const thirdSection = [
  {
    title: "",
    desc: "tajovuzkor tomonidan o‘zini proksi yoki router sifatida ko‘rsatish orqali amalga oshiriladi.",
  },
  {
    title: "Statik tahlil ",
    desc: "Mobil ilovani (dastur) amalda ishga tushirmasdan, uning xavfsizligini tekshirish usuli. Ushbu turdagi sinov ilova kodini tiklash, kodni tahlil qilish hamda yakunda koddagi zaiflik va kamchiliklarni aniqlashni o‘z ichiga oladi.",
  },
  {
    title: "Dinamik tahlil",
    desc: "Mobil ilovada (dastur) ishlayotgan vaqtda ekspertiza sinovlarini o‘tkazishni o‘z ichiga oladi. Sinovning bu turi ilova xattiharakatlarini tahlil qilish, zaiflik va kamchiliklarni aniqlashni o‘z ichiga oladi. Dinamik tahlilning afzalliklaridan biri shundaki, u statik tahlil yordamida aniqlash qiyin bo‘lgan zaifliklarni aniqlay oladi. Misol uchun, dinamik tahlil orqali foydalanuvchining tizimga kirishi va autentifikatsiyasi bilan bog‘liq zaifliklarni aniqlashi mumkin.",
  },
  {
    title: " ",
    desc: "Ochiq standart bo‘lib, hisoblash tizimlaridagi xavfsizlik zaifliklarining",
  },
];

const fourthSection = [
  {
    title: "Umumiy zaifliklarni baholash tizimi (CVSS)",
    desc: "miqdoriy ballarini “{{appName}}” mobil ilovasi hisoblash uchun ishlatiladi. Ballar bir nechta ko‘rsatkichlarga asoslangan maxsus formulalar yordamida hisoblanadi va ekspluatatsiyani amalga oshirish qulayligini va uning hisoblash tizimiga ta’sirini taxminiy baholaydi.",
  },
  {
    title: "Ma’lumotlar bazasi",
    desc: "Amaliy dasturlarga bog‘liq bo‘lmagan holda, maʼlumotlarni tavsiflash, saqlash va boshqarishning umumiy prinsiplarini ko‘zda tutadigan muayyan qoidalar bo‘yicha tashkil qilingan maʼlumotlar jamlanmasi.",
  },
  {
    title: "SQL-inyeksiya",
    desc: "So‘rovlar tanasiga maxsus SQLkodlarni kiritishga asoslangan, maʼlumotlar bazasi bilan ishlovchi veb-sayt va dasturlarga amalga oshiriladigan hujumlardan biri.",
  },
  {
    title: "Sintaksis va mantiqiy nuqsonlar ",
    desc: "Buferning to‘lib ketishi yoki boshqa turdagi nosozliklarga olib keladi. Ularni aniqlash uzoq vaqt va mashina kodi qismlarida nuqsonlarni bartaraf etish bo‘yicha ishlarni olib borishni talab etadi.",
  },
];

const vulnerabilityTemplates = {
  integrity: `
    <div class="a4">
      <div class="page-content">
        <div class="exp-title">
          Ilovada o‘zining yaxlitligini tekshirish mexanizmi joriy etilmaganligi
        </div>
        <div class="exp-d">
          <b>Xavflilik darajasi:</b> Yuqori
        </div>
        <div class="text">
          Ilova o‘z kodlari yaxlitligini tekshirmaydi...
        </div>
      </div>
    </div>
  `,
  sql: `
    <div class="a4">
      <div class="page-content">
        <div class="exp-title">SQL Injection</div>
        <div class="exp-d"><b>Xavflilik darajasi:</b> O‘rta</div>
      </div>
    </div>
  `,
};

let vulnCounter = 1;

const parseVulnByLevel = (payloads) => {
  const high = [],
    medium = [],
    low = [];
  (payloads || []).forEach((p) => {
    const arr = p[13] || p[12] || p[11];
    const list = Array.isArray(arr) ? arr : arr ? [arr] : [];
    list.forEach((v) => {
      if (!v || v.a1 == null) return;
      const item = { a1: v.a1, a2: v.a2, a3: v.a3 };
      const lev = Number(v.a1) || v.a1;
      if (lev === 1) high.push(item);
      else if (lev === 2) medium.push(item);
      else if (lev === 3) low.push(item);
    });
  });
  return { high, medium, low };
};

const Word = () => {
  const [pages, setPages] = useState([]);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const pageRefs = useRef([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [expertize, setExpertize] = useState([]);
  const [appName, setAppName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [orgTypeName, setOrgTypeName] = useState("");
  const [contractName, setContractName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [htmlContent, setHtmlContent] = useState([]);
  const [vulnerabilities, setVulnerabilities] = useState([]);
  const [highVuln, setHighVuln] = useState([]);
  const [mediumVuln, setMediumVuln] = useState([]);
  const [lowVuln, setLowVuln] = useState([]);
  const [vuln, setVuln] = useState([]);
  const [contractDate, setContractDate] = useState("");
  const [allVuln, setAllVuln] = useState([]);
  const [newVuln, setNewVuln] = useState({
    android: [],
    ios: [],
    umumiy: [],
  });
  const [pages1, setPages1] = useState([]);
  const [tableData, setTableData] = useState({});
  const [rows, setRows] = useState([]);
  const [apkFileName, setApkFileName] = useState("");
  const [ipaFileName, setIpaFileName] = useState("");
  const [vulnAndroid, setVulnAndroid] = useState([]);
  const [vulnIOS, setVulnIOS] = useState([]);
  const [vulnUm, setVulnUm] = useState([]);
  const [platform, setPlatform] = useState("");
  const [pages2, setPages2] = useState([]);
  const [pages3, setPages3] = useState([]);
  const [uploadedFilesMeta, setUploadedFilesMeta] = useState({});
  const editingRef = useRef(false);
  const savedSelectionRef = useRef(null);

  // Sinxron: tahrirlash rejimiga kirganda/ketchganda ref yangilanadi
  useEffect(() => {
    editingRef.current = editing;
  }, [editing]);
  const [toolbarBlock, setToolbarBlock] = useState("p");
  const [toolbarFontName, setToolbarFontName] = useState("Arial");
  const [toolbarFontSize, setToolbarFontSize] = useState(14);
  const [toolbarState, setToolbarState] = useState({
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    alignLeft: false,
    alignCenter: false,
    alignRight: false,
    alignJustify: false,
    unorderedList: false,
    orderedList: false,
  });

  const pdfRef = useRef();
  const { stRef } = useZirhStref();

  const printRef = useRef(null);
  const resolvedBlobUrlsRef = useRef(new Set());
  const isLoadingFromServerRef = useRef(false);
  const pages1Ref = useRef([]);
  const pages2Ref = useRef([]);
  const pages3Ref = useRef([]);
  const { id } = useParams();

  useEffect(() => {
    pages1Ref.current = pages1;
    pages2Ref.current = pages2;
    pages3Ref.current = pages3;
  }, [pages1, pages2, pages3]);

  const androidVulns = useMemo(
    () => parseVulnByLevel(vulnAndroid),
    [vulnAndroid],
  );
  const iosVulns = useMemo(() => parseVulnByLevel(vulnIOS), [vulnIOS]);
  const umVulns = useMemo(() => parseVulnByLevel(vulnUm), [vulnUm]);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "abm-mobil",
  });

  const startIndex = htmlContent.findIndex((p) =>
    p.includes(
      "2.2. Android mobil ilovasi ekspertizasi natijalari bo‘yicha batafsil izoh",
    ),
  );

  const isRangeInEditableArea = useCallback((range) => {
    if (!range) return false;
    const container =
      range.commonAncestorContainer?.nodeType === Node.TEXT_NODE
        ? range.commonAncestorContainer.parentElement
        : range.commonAncestorContainer;
    if (!container || typeof container.closest !== "function") return false;
    const editableRoot = container.closest(
      ".page-content.editable, .editable-table td",
    );
    if (!editableRoot) return false;
    return editableRoot.getAttribute("contenteditable") !== "false";
  }, []);

  const isRangeInNewContent = useCallback((range) => {
    if (!range) return false;
    const container =
      range.commonAncestorContainer?.nodeType === Node.TEXT_NODE
        ? range.commonAncestorContainer.parentElement
        : range.commonAncestorContainer;
    return container?.closest?.(".page-content.new-content") != null;
  }, []);

  const getPlatformFromBlocks = useCallback((blocks) => {
    for (const b of blocks || []) {
      if (b && typeof b === "string" && b.includes('class="title"')) {
        const t = stripHtml(b).toLowerCase();
        if (t.includes("android")) return "android";
        if (t.includes("ios")) return "ios";
        if (t.includes("mobil ilova va server") || t.includes("umumiy"))
          return "umumiy";
      }
    }
    return null;
  }, []);

  const syncNewContentFromDOM = useCallback((len1, len2, len3) => {
    const container = document.querySelector(".word-container");
    if (!container) return;
    const a4List = container.querySelectorAll(".a4");
    const newContentPages = [];
    a4List.forEach((a4) => {
      const content = a4.querySelector(".page-content.new-content");
      if (content) {
        const blocks = Array.from(content.children)
          .filter((el) => el.tagName === "DIV")
          .map((div) => {
            const hasNested =
              div.querySelector("div") &&
              !div.classList.contains("text") &&
              !div.classList.contains("exp-title") &&
              !div.classList.contains("exp-d") &&
              !div.classList.contains("title");
            return hasNested ? div.innerHTML : div.outerHTML;
          });
        newContentPages.push(blocks);
      }
    });
    const total = (len1 || 0) + (len2 || 0) + (len3 || 0);
    if (newContentPages.length !== total) return;
    setPages1(newContentPages.slice(0, len1 || 0));
    setPages2(newContentPages.slice(len1 || 0, (len1 || 0) + (len2 || 0)));
    setPages3(
      newContentPages.slice(
        (len1 || 0) + (len2 || 0),
        (len1 || 0) + (len2 || 0) + (len3 || 0),
      ),
    );
  }, []);

  const syncFromDOMAndFilterEmpty = useCallback(() => {
    const container = document.querySelector(".word-container");
    if (!container) return;
    const a4List = container.querySelectorAll(".a4");
    const pagesWithContent = [];
    a4List.forEach((a4) => {
      const content = a4.querySelector(".page-content.new-content");
      if (!content) return;
      const blocks = Array.from(content.children)
        .filter((el) => el.nodeType === Node.ELEMENT_NODE)
        .map((el) => {
          if (el.tagName === "DIV") {
            const hasNested =
              el.querySelector("div") &&
              !el.classList.contains("text") &&
              !el.classList.contains("exp-title") &&
              !el.classList.contains("exp-d") &&
              !el.classList.contains("title");
            return hasNested ? el.innerHTML : el.outerHTML;
          }
          return el.outerHTML;
        });
      const hasContent = blocks.some((b) => {
        if (!b || typeof b !== "string") return false;
        const t = b
          .replace(/<[^>]*>/g, "")
          .replace(/\s/g, "")
          .replace(/\u00a0/g, "");
        return t.length > 0 || /<img[\s\S]*?>/i.test(b);
      });
      if (hasContent) pagesWithContent.push(blocks);
    });

    const byPlatform = { android: [], ios: [], umumiy: [] };
    let currentPlatform = "android";
    pagesWithContent.forEach((blocks) => {
      const platform = getPlatformFromBlocks(blocks) || currentPlatform;
      currentPlatform = platform;
      byPlatform[platform].push(blocks);
    });
    setPages1(byPlatform.android);
    setPages2(byPlatform.ios);
    setPages3(byPlatform.umumiy);
  }, [getPlatformFromBlocks]);

  const captureSelectionRange = useCallback(() => {
    if (!editingRef.current) return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    if (!isRangeInEditableArea(range)) return;
    savedSelectionRef.current = range.cloneRange();
  }, [isRangeInEditableArea]);

  const restoreSelectionRange = useCallback(() => {
    const savedRange = savedSelectionRef.current;
    if (!savedRange || !editingRef.current) return false;
    if (!isRangeInEditableArea(savedRange)) return false;

    const selection = window.getSelection();
    if (!selection) return false;

    selection.removeAllRanges();
    try {
      selection.addRange(savedRange);
    } catch {
      return false;
    }
    return true;
  }, [isRangeInEditableArea]);

  const readCommandState = useCallback((command) => {
    try {
      return document.queryCommandState(command);
    } catch {
      return false;
    }
  }, []);

  const syncToolbarState = useCallback(() => {
    if (!editingRef.current) return;
    setToolbarState({
      bold: readCommandState("bold"),
      italic: readCommandState("italic"),
      underline: readCommandState("underline"),
      strike: readCommandState("strikeThrough"),
      alignLeft: readCommandState("justifyLeft"),
      alignCenter: readCommandState("justifyCenter"),
      alignRight: readCommandState("justifyRight"),
      alignJustify: readCommandState("justifyFull"),
      unorderedList: readCommandState("insertUnorderedList"),
      orderedList: readCommandState("insertOrderedList"),
    });
  }, [readCommandState]);

  const runEditorCommand = useCallback(
    (command, value = null) => {
      if (!editingRef.current) return false;
      const savedRange = savedSelectionRef.current;
      const wasInNewContent = savedRange && isRangeInNewContent(savedRange);
      restoreSelectionRange();

      try {
        document.execCommand("styleWithCSS", false, true);
      } catch {
        // noop
      }

      let applied = false;
      try {
        applied = document.execCommand(command, false, value);
      } catch {
        applied = false;
      }
      if (!applied && command === "hiliteColor") {
        try {
          applied = document.execCommand("backColor", false, value);
        } catch {
          applied = false;
        }
      }

      captureSelectionRange();
      syncToolbarState();
      if (wasInNewContent && applied) {
        syncNewContentFromDOM(pages1.length, pages2.length, pages3.length);
      }
      return applied;
    },
    [
      captureSelectionRange,
      restoreSelectionRange,
      syncToolbarState,
      isRangeInNewContent,
      syncNewContentFromDOM,
      pages1.length,
      pages2.length,
      pages3.length,
    ],
  );

  const handleInsertLink = useCallback(() => {
    if (!editingRef.current) return;
    restoreSelectionRange();
    const linkValue = window.prompt("Havolani kiriting (https://...)");
    if (!linkValue) return;
    runEditorCommand("createLink", linkValue.trim());
  }, [restoreSelectionRange, runEditorCommand]);

  const handleBlockChange = useCallback(
    (event) => {
      const value = event.target.value;
      setToolbarBlock(value);
      runEditorCommand("formatBlock", `<${value}>`);
    },
    [runEditorCommand],
  );

  const handleFontChange = useCallback(
    (event) => {
      const value = event.target.value;
      setToolbarFontName(value);
      runEditorCommand("fontName", value);
    },
    [runEditorCommand],
  );

  const handleFontSizeChange = useCallback(
    (event) => {
      const value = Number.parseInt(event.target.value, 10) || 14;
      setToolbarFontSize(value);
      runEditorCommand("fontSize", TOOLBAR_FONT_SIZE_TO_EXEC[value] ?? "4");
    },
    [runEditorCommand],
  );

  const createNewA4Page = () => {
    // Get the container where pages are stored
    const wordContainer = document.querySelector(".word-container");
    if (!wordContainer) return;

    // Get last page to copy styling
    const lastPage = wordContainer.querySelector(".a4:last-child");
    const pageNumber = wordContainer.querySelectorAll(".a4").length;

    // Create new A4 page
    const newPage = document.createElement("div");
    newPage.className = "a4";
    newPage.style.backgroundImage =
      pageNumber % 2 === 0
        ? `url("/assets/word/2.png")`
        : `url("/assets/word/3.png")`;

    // Add page title
    const pageTitle = document.createElement("div");
    pageTitle.className = "page-title";
    pageTitle.innerHTML = `<div>"${appName}"</div><div>mobil ilovasi</div>`;
    newPage.appendChild(pageTitle);

    // Add page content
    const pageContent = document.createElement("div");
    pageContent.className = "page-content editable";
    newPage.appendChild(pageContent);

    // Add page number
    const pageNumber_div = document.createElement("div");
    pageNumber_div.className = "page-number flex justify-center mt-auto";
    pageNumber_div.innerHTML = `<span>${pageNumber}</span>`;
    newPage.appendChild(pageNumber_div);

    // Add to container
    wordContainer.appendChild(newPage);

    // Re-attach event listeners to new page
    const editables = document.querySelectorAll(".editable");
    editables.forEach((el) => {
      el.contentEditable = editing;
      el.style.outline = editing ? "1px dashed #4f46e5" : "none";
    });

    return newPage;
  };
  const handlePageOverflow = () => {
    let a4Pages = document.querySelectorAll(".a4");
    const MAX_HEIGHT = 850;

    // Multiple iterations to ensure all overflow is handled and empty spaces are filled
    for (let iteration = 0; iteration < 10; iteration++) {
      a4Pages = document.querySelectorAll(".a4"); // Refresh pages list
      let hasChanges = false;

      // Step 1: Handle overflow - move content to next page if too much
      for (let pageIndex = 0; pageIndex < a4Pages.length; pageIndex++) {
        const pageEl = a4Pages[pageIndex];
        const pageContent = pageEl.querySelector(".page-content");
        if (!pageContent) continue;

        const actualHeight = pageContent.scrollHeight;

        if (actualHeight > MAX_HEIGHT) {
          const children = Array.from(pageContent.children);
          let currentHeight = 0;
          let splitAtIndex = -1;

          // Smart height-based split with minimum content check
          for (let i = 0; i < children.length; i++) {
            const childHeight = children[i].offsetHeight || 0;
            if (currentHeight + childHeight > MAX_HEIGHT) {
              splitAtIndex = i;
              break;
            }
            currentHeight += childHeight;
          }

          // If we found a split point, move content
          if (splitAtIndex > 0 && splitAtIndex < children.length) {
            hasChanges = true;
            // Create a copy of elements to move (to avoid array mutation issues)
            const toMove = Array.from(children).slice(splitAtIndex);

            // Get or create next page
            let nextPageEl = a4Pages[pageIndex + 1];
            if (!nextPageEl) {
              nextPageEl = createNewA4Page();
              // Refresh pages list after creating new page
              a4Pages = document.querySelectorAll(".a4");
            }

            const nextPageContent = nextPageEl.querySelector(".page-content");
            if (nextPageContent) {
              // Move elements to next page (in reverse order to avoid index issues)
              for (let i = toMove.length - 1; i >= 0; i--) {
                const el = toMove[i];
                // Check if element is still in DOM before removing
                if (el && el.parentNode === pageContent) {
                  nextPageContent.insertBefore(
                    el.cloneNode(true),
                    nextPageContent.firstChild,
                  );
                  // Remove from current page only if it's still a child
                  if (el.parentNode === pageContent) {
                    el.remove();
                  }
                }
              }
            }
          }
        }
      }

      // Step 2: Fill empty spaces - Word-like functionality
      // Only do this if no overflow changes were made, or after overflow is handled
      a4Pages = document.querySelectorAll(".a4");
      for (let pageIndex = 0; pageIndex < a4Pages.length - 1; pageIndex++) {
        const currentPageEl = a4Pages[pageIndex];
        const currentPageContent = currentPageEl.querySelector(".page-content");
        if (!currentPageContent) continue;

        const currentHeight = currentPageContent.scrollHeight;
        const availableSpace = MAX_HEIGHT - currentHeight;

        // If there's empty space (more than 20px), try to fill it
        if (availableSpace > 20) {
          const nextPageEl = a4Pages[pageIndex + 1];
          const nextPageContent = nextPageEl.querySelector(".page-content");
          if (!nextPageContent) continue;

          const nextPageChildren = Array.from(nextPageContent.children);
          if (nextPageChildren.length === 0) continue;

          // Try to move content from next page to fill empty space
          let contentToMove = [];
          let contentHeight = 0;

          for (let i = 0; i < nextPageChildren.length; i++) {
            const child = nextPageChildren[i];
            if (!child || !child.parentNode) continue;

            const childHeight = child.offsetHeight || 0;
            if (childHeight === 0) continue; // Skip invisible elements

            // Check if this content fits in available space (with small margin)
            const spaceWithMargin = availableSpace - 10; // 10px margin
            if (contentHeight + childHeight <= spaceWithMargin) {
              contentToMove.push(child);
              contentHeight += childHeight;
            } else {
              // If first element doesn't fit, don't try to move anything
              if (i === 0) {
                break;
              }
              // Otherwise, we've moved what we can
              break;
            }
          }

          // Move content to current page (in reverse order to avoid index issues)
          if (contentToMove.length > 0) {
            hasChanges = true;
            for (let i = contentToMove.length - 1; i >= 0; i--) {
              const el = contentToMove[i];
              // Check if element is still in DOM before manipulating
              if (el && el.parentNode === nextPageContent) {
                // Clone element and append to current page
                const cloned = el.cloneNode(true);
                currentPageContent.appendChild(cloned);
                // Remove original from next page only if it's still a child
                if (el.parentNode === nextPageContent) {
                  el.remove();
                }
              }
            }

            // Force reflow to update heights
            void currentPageContent.offsetHeight;
            void nextPageContent.offsetHeight;
          }
        }
      }

      // If no changes were made in this iteration, we're done
      if (!hasChanges) {
        break;
      }
    }
  };

  const handleImageResize = () => {
    // Find all images and resize them to fit page width
    const images = document.querySelectorAll(".page-content img");
    images.forEach((img) => {
      const pageContent = img.closest(".page-content");
      if (pageContent) {
        const maxWidth = 500; // Page content width - padding
        if (img.width > maxWidth) {
          const aspectRatio = img.height / img.width;
          img.style.width = maxWidth + "px";
          img.style.height = maxWidth * aspectRatio + "px";
        }
      }
    });
  };

  useEffect(() => {
    const editables = document.querySelectorAll(".editable");

    const attachImageResizeHandler = () => {
      const images = document.querySelectorAll(".page-content img");

      images.forEach((img) => {
        img.dataset.resizeAttached = "true";

        let startX, startY, startWidth, startHeight;

        const onPointerMove = (e) => {
          if (!editing) return;
          e.preventDefault();
          e.stopPropagation();

          const deltaX = e.clientX - startX;
          const deltaY = e.clientY - startY;
          const newWidth = Math.max(50, Math.min(800, startWidth + deltaX));
          const newHeight = Math.max(50, Math.min(1200, startHeight + deltaY));

          img.style.width = `${newWidth}px`;
          img.style.height = `${newHeight}px`;
          img.style.maxWidth = "none";
        };

        const onPointerUp = () => {
          document.removeEventListener("pointermove", onPointerMove);
          document.removeEventListener("pointerup", onPointerUp);
          handlePageOverflow?.();
        };

        const onPointerDown = (e) => {
          if (!editing || e.button !== 0) return;
          e.preventDefault();
          e.stopPropagation();

          startX = e.clientX;
          startY = e.clientY;
          const rect = img.getBoundingClientRect();
          startWidth = rect.width;
          startHeight = rect.height;

          document.addEventListener("pointermove", onPointerMove, {
            passive: false,
          });
          document.addEventListener("pointerup", onPointerUp, {
            passive: false,
          });
        };

        // Eski handler bo‘lsa – olib tashlaymiz (xavfsizlik)
        img.removeEventListener("pointerdown", img._resizeHandler);
        img._resizeHandler = onPointerDown;
        img.addEventListener("pointerdown", onPointerDown, {
          passive: false,
        });

        // Vizual holatni yangilash (eni + balandlik = nwse-resize)
        img.style.cursor = editing ? "nwse-resize" : "default";
        img.style.border = editing ? "1px dashed #aaa" : "none";
        img.style.userSelect = "none";
      });
    };

    const updateAllImagesVisual = () => {
      document.querySelectorAll(".page-content img").forEach((img) => {
        img.style.cursor = editing ? "nwse-resize" : "default";
        img.style.border = editing ? "1px dashed #aaa" : "none";
        img.style.userSelect = "none";
      });
    };

    attachImageResizeHandler();
    updateAllImagesVisual();
    const uploadPastedImageToServer = async (file, imgElement) => {
      if (!file || !id) return null;
      if (imgElement?.dataset?.uploadStarted === "true")
        return imgElement?.dataset?.fileId || null;
      if (imgElement) imgElement.dataset.uploadStarted = "true";

      try {
        const imageRes = await uploadFileViaRpc(stRef, file, id, (p) => {
          if (imgElement) imgElement.dataset.uploadProgress = String(p);
        });

        const fileId = imageRes?.fileId || imageRes?.result?.fileId;
        const responseSizeRaw =
          imageRes?.size ?? imageRes?.result?.size ?? file?.size;
        const responseSize = Number(responseSizeRaw);
        const safeUploadedSize =
          Number.isFinite(responseSize) && responseSize > 0
            ? Math.floor(responseSize)
            : undefined;

        if (fileId && imgElement) {
          imgElement.dataset.fileId = fileId;
          imgElement.dataset.uploaded = "true";
          if (safeUploadedSize)
            imgElement.dataset.fileSize = String(safeUploadedSize);
        }

        if (!fileId) return null;

        await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
          19: id,
          15: safeUploadedSize
            ? { 1: fileId, 2: safeUploadedSize }
            : { 1: fileId },
        });
        return fileId;
      } catch (err) {
        if (imgElement) imgElement.dataset.uploadStarted = "";
        console.error("Rasm yuklash xatosi:", err);
        toast.error("Rasm serverni yuklashda xatolik");
        return null;
      }
    };

    const handleInput = (e) => {
      // Har belgida syncFromDOMAndFilterEmpty chaqirmaymiz — state yangilansa React qayta
      // render qiladi, DOM almashtiriladi va kursor/sahifa boshiga sakraydi.
      // Sync faqat paste/cut va saqlashda qilinadi.
      // Just handle images on input, don't trigger page overflow
      handleImageResize();
      attachImageResizeHandler();

      // Immediately check if content overflows and trim it
      const editables = document.querySelectorAll(".page-content");
      editables.forEach((pageContent) => {
        const MAX_HEIGHT = 900;
        if (pageContent.scrollHeight > MAX_HEIGHT) {
          // Find and remove excess content
          const children = Array.from(pageContent.children);
          let currentHeight = 0;

          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            currentHeight += child.offsetHeight;

            if (currentHeight > MAX_HEIGHT) {
              // Remove this and all subsequent elements
              for (let j = children.length - 1; j >= i; j--) {
                children[j].remove();
              }
              break;
            }
          }
        }
      });
    };

    const handlePaste = (e) => {
      // Handle images in clipboard
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      let hasImage = false;

      for (let item of items) {
        if (item.kind === "file" && item.type.indexOf("image") !== -1) {
          hasImage = true;
          // Prevent default paste behavior only for images to insert custom HTML
          e.preventDefault();
          e.stopPropagation();

          const blob = item.getAsFile();
          const safeType = blob?.type || "image/png";
          const extFromType = safeType.includes("png")
            ? "png"
            : safeType.includes("jpeg") || safeType.includes("jpg")
              ? "jpg"
              : safeType.includes("webp")
                ? "webp"
                : "png";
          const safeName =
            typeof blob?.name === "string" && blob.name.includes(".")
              ? blob.name
              : `paste-${Date.now()}.${extFromType}`;
          const uploadFile =
            blob instanceof File
              ? new File([blob], safeName, { type: safeType })
              : new File([blob], safeName, { type: safeType });

          const reader = new FileReader();

          reader.onload = (event) => {
            const imgElement = document.createElement("img");
            imgElement.src = event.target.result;

            imgElement.onload = () => {
              // Image loaded, resize it
              const maxWidth = 500;
              if (imgElement.width > maxWidth) {
                const aspectRatio = imgElement.height / imgElement.width;
                imgElement.style.width = maxWidth + "px";
                imgElement.style.height = maxWidth * aspectRatio + "px";
              } else {
                imgElement.style.width = imgElement.width + "px";
                imgElement.style.height = imgElement.height + "px";
              }

              // Set styles for resize (eni va balandlik mustaqil)
              imgElement.style.cursor = "nwse-resize";
              imgElement.style.display = "inline-block";
              imgElement.style.border = "1px solid #ddd";
              imgElement.style.margin = "10px auto";
              imgElement.style.userSelect = "none";
              imgElement.className = "resizable-image";

              // Insert image after a slight delay to allow paste to complete
              setTimeout(() => {
                // Get current selection and insert image
                const selection = window.getSelection();
                if (selection.rangeCount > 0) {
                  const range = selection.getRangeAt(0);
                  const wrapper = document.createElement("p");
                  wrapper.style.textAlign = "center";
                  wrapper.appendChild(imgElement);
                  range.insertNode(wrapper);

                  // Move cursor after image
                  range.setStartAfter(wrapper);
                  range.collapse(true);
                  selection.removeAllRanges();
                  selection.addRange(range);
                }

                // Rasmni darhol serverni yuklash va ORDER_UPDATE orqali saqlash
                uploadPastedImageToServer(uploadFile, imgElement).catch(
                  () => {},
                );

                // Trigger reflow and handle overflow
                editables.forEach((el) => {
                  void el.offsetHeight;
                });

                // Attach resize handler to the new image with a small delay
                setTimeout(() => {
                  // Ensure image is in DOM before attaching handler
                  if (imgElement && imgElement.parentNode) {
                    imgElement.style.cursor = editing
                      ? "nwse-resize"
                      : "default";
                    imgElement.style.display = "inline-block";
                    imgElement.style.userSelect = "none";
                    imgElement.style.border = editing
                      ? "1px solid #ddd"
                      : "none";
                    imgElement.style.margin = "10px auto";
                  }

                  // Also call attachImageResizeHandler to ensure all images have handlers
                  attachImageResizeHandler();

                  handlePageOverflow();
                }, 300);
              }, 50);
            };
          };

          reader.readAsDataURL(blob);
        }
      }

      // Matn paste: .new-content da bo'lsa — joriy div ichiga emas, undan keyin yangi blok sifatida qo'shamiz
      if (!hasImage) {
        const clipboardData = e.clipboardData || e.originalEvent?.clipboardData;
        if (!clipboardData) return;

        const pasteContent = (
          clipboardData.getData("text/html") ||
          clipboardData.getData("text/plain") ||
          ""
        ).trim();

        // Bir marta qayta ishlash — boshqa .editable listenerlari ishlamasin (3 marta takrorlanish oldini)
        e.stopPropagation();

        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);

        const pageContent =
          range.commonAncestorContainer.nodeType === Node.TEXT_NODE
            ? range.commonAncestorContainer.parentElement?.closest(
                ".page-content.new-content",
              )
            : range.commonAncestorContainer.closest(
                ".page-content.new-content",
              );

        if (pageContent) {
          e.preventDefault();

          let node = range.commonAncestorContainer;
          if (node.nodeType === Node.TEXT_NODE) node = node.parentElement;
          let currentBlock = node;
          while (currentBlock && currentBlock.parentElement !== pageContent) {
            currentBlock = currentBlock.parentElement;
          }
          if (!currentBlock) {
            try {
              document.execCommand("insertHTML", false, pasteContent);
            } catch (_) {}
            setTimeout(() => {
              syncFromDOMAndFilterEmpty?.();
              handlePageOverflow();
            }, 100);
            return;
          }

          const allNewContents = document.querySelectorAll(
            ".page-content.new-content",
          );
          const pageIndexGlobal =
            Array.from(allNewContents).indexOf(pageContent);
          const elementChildren = Array.from(pageContent.children).filter(
            (el) => el.nodeType === Node.ELEMENT_NODE,
          );
          const blockIndex = elementChildren.indexOf(currentBlock);
          if (pageIndexGlobal < 0 || blockIndex < 0) return;

          const getBlocksFromPage = (contentEl) =>
            Array.from(contentEl.children)
              .filter((el) => el.nodeType === Node.ELEMENT_NODE)
              .map((el) => {
                if (el.tagName === "DIV") {
                  const hasNested =
                    el.querySelector("div") &&
                    !el.classList.contains("text") &&
                    !el.classList.contains("exp-title") &&
                    !el.classList.contains("exp-d") &&
                    !el.classList.contains("title");
                  return hasNested ? el.innerHTML : el.outerHTML;
                }
                return el.outerHTML;
              });

          let currentPlat = "android";
          const platformPerPage = [];
          for (let i = 0; i < allNewContents.length; i++) {
            currentPlat =
              getPlatformFromBlocks(getBlocksFromPage(allNewContents[i])) ||
              currentPlat;
            platformPerPage.push(currentPlat);
          }
          const platform = platformPerPage[pageIndexGlobal];
          let localPageIndex = 0;
          for (let j = 0; j < pageIndexGlobal; j++) {
            if (platformPerPage[j] === platform) localPageIndex++;
          }

          const newBlockHtml = '<div class="text">' + pasteContent + "</div>";

          if (platform === "android") {
            setPages1((prev) => {
              if (localPageIndex >= prev.length) return prev;
              const pageBlocks = prev[localPageIndex] || [];
              const next = [
                ...pageBlocks.slice(0, blockIndex + 1),
                newBlockHtml,
                ...pageBlocks.slice(blockIndex + 1),
              ];
              const out = [...prev];
              out[localPageIndex] = next;
              return out;
            });
          } else if (platform === "ios") {
            setPages2((prev) => {
              if (localPageIndex >= prev.length) return prev;
              const pageBlocks = prev[localPageIndex] || [];
              const next = [
                ...pageBlocks.slice(0, blockIndex + 1),
                newBlockHtml,
                ...pageBlocks.slice(blockIndex + 1),
              ];
              const out = [...prev];
              out[localPageIndex] = next;
              return out;
            });
          } else {
            setPages3((prev) => {
              if (localPageIndex >= prev.length) return prev;
              const pageBlocks = prev[localPageIndex] || [];
              const next = [
                ...pageBlocks.slice(0, blockIndex + 1),
                newBlockHtml,
                ...pageBlocks.slice(blockIndex + 1),
              ];
              const out = [...prev];
              out[localPageIndex] = next;
              return out;
            });
          }

          // Faqat sahifa oqimini qayta hisobla; state ni DOM dan qayta yozmaslik (takrorlanish oldini)
          setTimeout(() => handlePageOverflow(), 100);
        } else {
          // .new-content da emas — kursor joyida insert qilamiz, default paste ni o'chirib bitta marta qo'shamiz
          e.preventDefault();
          if (pasteContent) {
            try {
              document.execCommand("insertHTML", false, pasteContent);
            } catch (_) {}
          }
          setTimeout(() => {
            syncFromDOMAndFilterEmpty?.();
            handlePageOverflow();
          }, 100);
        }
      }
    };

    const handleCut = () => {
      // Cut dan keyin DOM dan o'chirilgach state ni sinxronlash
      setTimeout(() => {
        syncFromDOMAndFilterEmpty?.();
        handlePageOverflow();
      }, 50);
    };

    editables.forEach((el) => {
      el.contentEditable = editing;
      el.style.outline = editing ? "1px dashed #4f46e5" : "none";

      if (editing) {
        el.addEventListener("input", handleInput);
        el.addEventListener("paste", handlePaste);
        el.addEventListener("cut", handleCut);
        attachImageResizeHandler();
      } else {
        el.removeEventListener("input", handleInput);
        el.removeEventListener("paste", handlePaste);
        el.removeEventListener("cut", handleCut);
      }
    });

    // Table cell'larini ham contentEditable qilish
    const tableCells = document.querySelectorAll(".editable-table td");
    tableCells.forEach((cell) => {
      cell.contentEditable = editing;
      if (editing) {
        cell.style.outline = "1px dashed #4f46e5";

        // Table cells'ga paste handler qo'shish
        const handleTableCellPaste = (e) => {
          const items = (e.clipboardData || e.originalEvent.clipboardData)
            .items;
          let hasImage = false;

          for (let item of items) {
            if (item.kind === "file" && item.type.indexOf("image") !== -1) {
              hasImage = true;
              e.preventDefault();

              const blob = item.getAsFile();
              const safeType = blob?.type || "image/png";
              const extFromType = safeType.includes("png")
                ? "png"
                : safeType.includes("jpeg") || safeType.includes("jpg")
                  ? "jpg"
                  : safeType.includes("webp")
                    ? "webp"
                    : "png";
              const safeName =
                typeof blob?.name === "string" && blob.name.includes(".")
                  ? blob.name
                  : `paste-${Date.now()}.${extFromType}`;
              const uploadFile =
                blob instanceof File
                  ? new File([blob], safeName, { type: safeType })
                  : new File([blob], safeName, { type: safeType });

              const reader = new FileReader();

              reader.onload = (event) => {
                const imgElement = document.createElement("img");
                imgElement.src = event.target.result;
                imgElement.style.maxWidth = "100%";
                imgElement.style.height = "auto";
                imgElement.style.display = "block";
                imgElement.style.margin = "5px 0";

                const selection = window.getSelection();
                if (selection.rangeCount > 0) {
                  const range = selection.getRangeAt(0);
                  range.insertNode(imgElement);
                  range.setStartAfter(imgElement);
                  range.collapse(true);
                  selection.removeAllRanges();
                  selection.addRange(range);
                }

                uploadPastedImageToServer(uploadFile, imgElement).catch(
                  () => {},
                );
              };

              reader.readAsDataURL(blob);
            }
          }

          if (!hasImage) {
            setTimeout(() => {
              handlePageOverflow();
            }, 50);
          }
        };

        cell.addEventListener("paste", handleTableCellPaste);
      } else {
        cell.style.outline = "none";
        // Paste listeners'ni olib tashlash
        const allCells = document.querySelectorAll(".editable-table td");
        allCells.forEach((c) => {
          c.removeEventListener("paste", c._pasteHandler);
        });
      }
    });

    return () => {
      editables.forEach((el) => {
        el.removeEventListener("input", handleInput);
        el.removeEventListener("paste", handlePaste);
        el.removeEventListener("cut", handleCut);
      });
    };
  }, [editing, pages1, syncFromDOMAndFilterEmpty]);

  useEffect(() => {
    const allPageContent = document.querySelectorAll(".page-content");
    const strongElements = document.querySelectorAll(".page-content strong");

    strongElements.forEach((el) => {
      const text = el.textContent?.trim() || "";
      if (
        text === "Yuqori" ||
        text === "Past" ||
        text === "O‘rta" ||
        text === "Ma’lumot uchun" ||
        text === "Xavflilik darajasi:" ||
        text.includes(".apk") ||
        text.includes(".ipa") ||
        text.includes("[android:usesCleartextTraffic=false]") ||
        text.includes("CWE") ||
        text.includes("MASWE")
      ) {
        const tdParent = el.closest("td");
        if (!tdParent) {
          el.classList.add("strongstyle");
        }
      } else if (
        text === "Ekspluatatsiya oqibatlari" ||
        text === "Tavsiyalar"
      ) {
        if (!el.closest("td")) {
          el.classList.add("teststrong");
        }
      }
    });

    allPageContent.forEach((page) => {
      // console.log(page.offsetHeight);
    });
  }, [pages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!editing) return;

      if (e.ctrlKey) {
        const key = e.key.toLowerCase();
        if (["e", "l", "r", "j"].includes(key)) e.preventDefault();

        switch (key) {
          case "e":
            document.execCommand("justifyCenter");
            break;
          case "l":
            document.execCommand("justifyLeft");
            break;
          case "r":
            document.execCommand("justifyRight");
            break;
          case "j":
            // Apply justify alignment using both execCommand and CSS for better compatibility
            document.execCommand("justifyFull");
            // Also apply CSS text-align for better cross-browser support
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              const container = range.commonAncestorContainer;
              const block =
                container.nodeType === Node.TEXT_NODE
                  ? container.parentElement?.closest(
                      "p, div, li, h1, h2, h3, h4, h5, h6",
                    )
                  : container.closest("p, div, li, h1, h2, h3, h4, h5, h6");

              if (block) {
                block.style.textAlign = "justify";
              }
            }
            break;
        }
      }

      // Handle Shift+Backspace key - move first block to previous page (faqat state, DOM ga tegmaslik — takrorlanish oldini)
      if (e.shiftKey && e.key === "Backspace") {
        e.preventDefault();

        const selection = window.getSelection();
        if (selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        const currentPageContent =
          range.commonAncestorContainer.nodeType === Node.TEXT_NODE
            ? range.commonAncestorContainer.parentElement?.closest(
                ".page-content",
              )
            : range.commonAncestorContainer?.closest(".page-content");

        if (
          !currentPageContent?.classList?.contains("new-content") ||
          currentPageContent.children.length === 0
        )
          return;

        const allNewContents = document.querySelectorAll(
          ".page-content.new-content",
        );
        const newContentIndex =
          Array.from(allNewContents).indexOf(currentPageContent);
        if (newContentIndex <= 0) return;

        const prevPageContent = allNewContents[newContentIndex - 1];
        if (!prevPageContent?.classList?.contains("new-content")) return;

        const firstChild = currentPageContent.children[0];
        if (!firstChild || firstChild.nodeType !== Node.ELEMENT_NODE) return;

        const getBlockHtml = (el) => {
          if (el.tagName === "DIV") {
            const hasNested =
              el.querySelector("div") &&
              !el.classList.contains("text") &&
              !el.classList.contains("exp-title") &&
              !el.classList.contains("exp-d") &&
              !el.classList.contains("title");
            return hasNested ? el.innerHTML : el.outerHTML;
          }
          return el.outerHTML;
        };
        const blockHtml = getBlockHtml(firstChild);

        const p1 = pages1Ref.current || [];
        const p2 = pages2Ref.current || [];
        const p3 = pages3Ref.current || [];
        const isPageEmptyFn = (pageBlocks) => {
          if (!pageBlocks?.length) return true;
          return !pageBlocks.some((b) => {
            if (!b || typeof b !== "string") return false;
            const t = b
              .replace(/<[^>]*>/g, "")
              .replace(/\s/g, "")
              .replace(/\u00a0/g, "");
            return t.length > 0 || /<img[\s\S]*?>/i.test(b);
          });
        };
        const currentPages = [...p1, ...p2, ...p3].filter(
          (page) => !isPageEmptyFn(page),
        );
        if (
          newContentIndex >= currentPages.length ||
          currentPages[newContentIndex].length === 0
        )
          return;

        const newCurrentPages = currentPages.map((page, i) =>
          Array.isArray(page) ? [...page] : [],
        );
        const blockToMove = newCurrentPages[newContentIndex][0];
        newCurrentPages[newContentIndex] =
          newCurrentPages[newContentIndex].slice(1);
        newCurrentPages[newContentIndex - 1] = [
          ...newCurrentPages[newContentIndex - 1],
          blockToMove,
        ];

        const byPlatform = { android: [], ios: [], umumiy: [] };
        let curPlat = "android";
        newCurrentPages.forEach((blocks) => {
          const plat = getPlatformFromBlocks(blocks) || curPlat;
          curPlat = plat;
          byPlatform[plat].push(blocks);
        });

        setPages1(byPlatform.android);
        setPages2(byPlatform.ios);
        setPages3(byPlatform.umumiy);
      }

      // Handle Enter key for page overflow
      if (e.key === "Enter") {
        e.preventDefault();
        // Insert line break manually
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const br = document.createElement("br");
          range.insertNode(br);
          range.setStartAfter(br);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
        // Check for overflow after Enter
        setTimeout(() => {
          handlePageOverflow();
        }, 10);
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        const range = selection.getRangeAt(0);
        const tabNode = document.createTextNode(
          "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        );
        range.insertNode(tabNode);
        range.setStartAfter(tabNode);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [editing, syncFromDOMAndFilterEmpty]);

  const paginateHtml = (html) => {
    const measure = document.createElement("div");
    measure.style.width = "794px";
    measure.style.padding = "40px";
    measure.style.position = "absolute";
    measure.style.visibility = "hidden";
    measure.style.fontSize = "14px";
    measure.style.lineHeight = "1.6";
    document.body.appendChild(measure);

    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    const blocks = Array.from(wrapper.childNodes);
    const pagesResult = [];
    let currentPage = document.createElement("div");

    blocks.forEach((block) => {
      currentPage.appendChild(block.cloneNode(true));
      measure.innerHTML = currentPage.innerHTML;

      if (measure.scrollHeight > 950) {
        const lastChild = currentPage.lastChild;
        if (lastChild) {
          if (lastChild.parentNode === currentPage) {
            currentPage.removeChild(lastChild);
          }

          pagesResult.push(currentPage.innerHTML);

          currentPage = document.createElement("div");
          currentPage.appendChild(lastChild.cloneNode(true));
        }
      }
    });

    if (currentPage.innerHTML.trim()) {
      pagesResult.push(currentPage.innerHTML);
    }

    if (measure.parentNode) {
      measure.parentNode.removeChild(measure);
    }
    setPages(pagesResult);
  };

  const saveAllPages = () => {
    const updated = pageRefs.current.map((el) => el?.innerHTML || "");
    setPages(updated);
    setEditing(false);
  };

  const getExpertById = async () => {
    // console.log(id);
    try {
      const res = await sendRpcRequest(stRef, METHOD.ORDER_GET_ID, { 1: id });
      console.log(res);
      if (res.status === METHOD.OK) {
        setContractDate(formatDate(res[1]?.[2][1]));
        setHtmlContent(res[1]?.[8]);
        setContractName(res[1]?.[10]);
        setOrgTypeName(res[1]?.[1][6]);
        setOrgName(res[1]?.[1][0]);
        setAppName(res[1]?.[1][3]);
        setExpertize(res[1]?.[1]);
        const raw = res[1]?.[13];
        const rawFiles = res[1]?.[15];
        const normalizeFilesMeta = (rf) => {
          const list = Array.isArray(rf) ? rf : rf ? [rf] : [];
          const out = {};
          list
            .flat()
            .filter(Boolean)
            .forEach((it) => {
              const fileId = it?.[1] ?? it?.["1"];
              const size = it?.[2] ?? it?.["2"];
              if (!fileId) return;
              const fid = String(fileId);
              const sz = Number(size);
              const sizeVal = Number.isFinite(sz) ? sz : undefined;
              out[fid] = sizeVal;
              out[`files/${fid.replace(/^files\//i, "")}`] = sizeVal;
            });
          return out;
        };
        setUploadedFilesMeta(normalizeFilesMeta(rawFiles));
        const apkName = res[1]?.[8][0];
        const match = apkName.match(/[a-zA-Z0-9\.\-_]+\.apk/i);
        const apkName1 = match ? match[0] : null;
        setApkFileName(apkName1);

        const ipaMatch = apkName.match(/[a-zA-Z0-9\.\-_]+\.ipa/i);
        const ipaFile = ipaMatch ? ipaMatch[0] : null;
        setIpaFileName(ipaFile);

        // console.log("Topilgan fayl:", apkName1);

        const field8Data = res[1]?.[8] || [];
        let vulnData = field8Data;

        if (
          Array.isArray(field8Data) &&
          field8Data.length > 0 &&
          typeof field8Data[0] === "string"
        ) {
          try {
            const tablesFromField8 = JSON.parse(field8Data[0]);
            setTableData(tablesFromField8);
            vulnData = field8Data.slice(1); // Table ma'lumotlaridan keyingi qolganlarni ol
            // Zaiflik jadvallari: table_5 = Android, table_6 = iOS, table_7 = Umumiy (expert-table tartibida)
            setVulnAndroid(tableRowsToPayloads(tablesFromField8.table_5 || []));
            setVulnIOS(tableRowsToPayloads(tablesFromField8.table_6 || []));
            setVulnUm(tableRowsToPayloads(tablesFromField8.table_7 || []));
          } catch (err) {
            vulnData = field8Data; // Agar parse qilsa xatolik bo'lsa, dastlabkisini ishla
          }
        }

        // Saqlangan sahifa tuzilmasini saqlab qolish (re-pagination qilmaslik)
        isLoadingFromServerRef.current = true;
        let expTitleIndex = 1;
        const normalizeBlock = (item) => {
          if (!item || typeof item !== "string") return "";
          if (item.includes("page-number")) return null;
          if (item.includes("exp-title")) {
            return item.replace(/2\.2\.\d+/g, `2.2.${expTitleIndex++}`);
          }
          return item;
        };

        const pageArrays = Array.isArray(vulnData) ? vulnData : [];
        const loadedPagesByPlatform = { android: [], ios: [], umumiy: [] };
        let currentPlatform = "android";

        const blockHasRealContent = (b) => {
          if (!b || typeof b !== "string") return false;
          const t = b
            .replace(/<[^>]*>/g, "")
            .replace(/\s/g, "")
            .replace(/\u00a0/g, "");
          return t.length > 0 || /<img[\s\S]*?>/i.test(b);
        };

        pageArrays.forEach((pageBlocks) => {
          const blocks = Array.isArray(pageBlocks) ? pageBlocks : [];
          const normalized = blocks
            .map(normalizeBlock)
            .filter((b) => b != null && b !== "");
          if (normalized.length === 0) return;
          if (!normalized.some(blockHasRealContent)) return;

          const detected = getPlatformFromBlocks(normalized);
          if (detected) currentPlatform = detected;
          loadedPagesByPlatform[currentPlatform].push(normalized);
        });

        setPages1(loadedPagesByPlatform.android || []);
        setPages2(loadedPagesByPlatform.ios || []);
        setPages3(loadedPagesByPlatform.umumiy || []);

        const newVulnFromPages = {
          android: (loadedPagesByPlatform.android || []).flat(),
          ios: (loadedPagesByPlatform.ios || []).flat(),
          umumiy: (loadedPagesByPlatform.umumiy || []).flat(),
        };
        setNewVuln(newVulnFromPages);

        const highVuln1 = Array.isArray(raw)
          ? raw.flat().map(({ a1, a2, a3 }) => ({ a1, a2, a3 }))
          : [{ a1: raw.a1, a2: raw.a2, a3: raw.a3 }];

        setHighVuln(highVuln1);

        const raw1 = res[1]?.[12];

        const mV = Array.isArray(raw1)
          ? raw1.flat().map(({ a1, a2, a3 }) => ({ a1, a2, a3 }))
          : [{ a1: raw1.a1, a2: raw1.a2, a3: raw1.a3 }];
        setMediumVuln(mV);

        const raw2 = res[1]?.[11];

        const lV = Array.isArray(raw2)
          ? raw2.flat().map(({ a1, a2, a3 }) => ({ a1, a2, a3 }))
          : [{ a1: raw2.a1, a2: raw2.a2, a3: raw2.a3 }];
        setLowVuln(lV);

        // console.log(res[1]?.[13]);
        setAllVuln([...highVuln1, ...mV, ...lV]);

        // Table ma'lumotlari field 8 ning 0-indexidan olingan
      } else if (res.status === METHOD.BAD_REQUEST) {
        toast.error("Ma'lumot topilmadi!");
      }
      // console.log(res);
    } catch (error) {
      // console.log(error);
      console.log("Xatolik yuz berdi!");
    }
  };

  useEffect(() => {
    getExpertById();
    // console.log(highVuln);
  }, []);

  // Field 15 (yuklangan fayllar) bo'yicha rasmlarni fileId orqali yuklab, blob URL ni img.src ga o'rnatish
  useEffect(() => {
    if (editing) return;
    const meta = uploadedFilesMeta || {};
    const blobUrls = resolvedBlobUrlsRef.current;
    let cancelled = false;

    const run = async () => {
      const container =
        printRef.current || document.querySelector(".word-container");
      if (!container) return;
      const imgs = container.querySelectorAll(
        ".page-content img, .editable-table img",
      );
      for (const img of imgs) {
        if (cancelled) return;
        if (!img) continue;
        const dfidRaw =
          img.getAttribute("data-file-id") || img.dataset?.fileId || "";
        if (!dfidRaw) continue;
        if (
          img.dataset?.srcResolved === "true" &&
          img.src &&
          !img.src.startsWith("data:")
        )
          continue;

        const dfid = String(dfidRaw).trim();
        const fid = dfid.replace(/^files\//i, "");
        const attrSizeRaw =
          img.getAttribute("data-file-size") || img.dataset?.fileSize || "";
        const attrSize = Number(attrSizeRaw);
        const metaSize = meta[dfid] ?? meta[fid] ?? meta[`files/${fid}`];
        const size = Number.isFinite(Number(metaSize))
          ? Number(metaSize)
          : Number.isFinite(attrSize)
            ? attrSize
            : undefined;
        if (!(Number.isFinite(size) && size > 0)) continue;

        try {
          const blob = await downloadFileViaRpcNew(
            stRef,
            fid,
            "image.png",
            size,
          );
          if (cancelled || !blob) return;
          const url = URL.createObjectURL(blob);
          blobUrls.add(url);
          img.src = url;
          img.dataset.srcResolved = "true";
        } catch (e) {
          console.warn("Rasm yuklanmadi:", fid, e);
        }
      }
    };

    Promise.resolve().then(run);
    return () => {
      cancelled = true;
      blobUrls.forEach((url) => {
        try {
          URL.revokeObjectURL(url);
        } catch (_) {}
      });
      blobUrls.clear();
    };
  }, [editing, uploadedFilesMeta, pages1, pages2, pages3]);

  // Zaiflik jadvali: daraja bo‘yicha tartib (Yuqori → O'rta → Past), bir xil daraja bitta katakda rowSpan bilan
  const tableRowsToPayloads = (rowArrays) => {
    if (!Array.isArray(rowArrays) || rowArrays.length === 0) return [];
    const levelOrder = { Yuqori: 1, "O'rta": 2, Past: 3 };
    const levelToField = { 1: 13, 2: 12, 3: 11 };
    const payloads = [];
    let lastLevel = null;

    rowArrays.forEach((rowData) => {
      let levelKey = null;
      let name = "";
      let count = "";

      if (rowData.length >= 3) {
        const first = String(rowData[0] ?? "").trim();
        if (levelOrder[first] != null) {
          lastLevel = first;
          levelKey = first;
          name = rowData[1];
          count = rowData[2];
        } else if (lastLevel) {
          levelKey = lastLevel;
          name = rowData[0];
          count = rowData[1];
        } else return;
      } else if (rowData.length === 2 && lastLevel) {
        levelKey = lastLevel;
        name = rowData[0];
        count = rowData[1];
      } else return;

      const a1 = levelOrder[levelKey];
      const field = levelToField[a1];
      if (field && (name || count)) {
        payloads.push({
          [field]: [
            {
              a1,
              a2: count,
              a3: typeof name === "string" ? name : (name ?? ""),
            },
          ],
        });
      }
    });
    return payloads;
  };

  const buildVulnTableRows = (rowArrays, tbody, editing) => {
    const levelOrder = { Yuqori: 1, "O'rta": 2, Past: 3 };
    const itemsByLevel = { Yuqori: [], "O'rta": [], Past: [] };
    let lastLevel = null;

    rowArrays.forEach((rowData) => {
      if (rowData.length === 3) {
        const level = String(rowData[0]).trim();
        if (levelOrder[level] != null) {
          lastLevel = level;
          itemsByLevel[level].push([rowData[1], rowData[2]]);
        } else if (lastLevel) {
          itemsByLevel[lastLevel].push([rowData[1], rowData[2]]);
        }
      } else if (rowData.length === 2 && lastLevel) {
        itemsByLevel[lastLevel].push([rowData[0], rowData[1]]);
      }
    });

    ["Yuqori", "O'rta", "Past"].forEach((level) => {
      const rows = itemsByLevel[level] || [];
      rows.forEach(([nameOrHtml, count], i) => {
        const tr = document.createElement("tr");
        if (i === 0) {
          const tdLevel = document.createElement("td");
          tdLevel.rowSpan = rows.length;
          tdLevel.style.fontWeight = "bold";
          tdLevel.textContent = level;
          tr.appendChild(tdLevel);
        }
        const tdName = document.createElement("td");
        tdName.style.fontWeight = "normal";
        if (
          String(nameOrHtml).includes("<img") ||
          String(nameOrHtml).includes("<IMG")
        ) {
          tdName.innerHTML = nameOrHtml;
        } else {
          tdName.textContent = nameOrHtml;
        }
        tdName.contentEditable = editing;
        tr.appendChild(tdName);
        const tdCount = document.createElement("td");
        tdCount.style.fontWeight = "normal";
        tdCount.textContent = count;
        tdCount.contentEditable = editing;
        tr.appendChild(tdCount);
        tbody.appendChild(tr);
      });
    });
  };

  // Table ma'lumotlarini DOM'ga qayta yuklash (rasmlar bilan).
  // Zaiflik jadvallari (Xavflilik darajasi / Aniqlangan zaifliklar) React tomonidan
  // androidVulns, iosVulns, umVulns orqali chiziladi — ularga tegmaslik, aks holda insertBefore xatolik.
  useEffect(() => {
    if (Object.keys(tableData).length === 0) return;

    const tables = document.querySelectorAll("table.editable-table");
    tables.forEach((table, idx) => {
      const key = `table_${idx}`;
      if (!tableData[key] || tableData[key].length === 0) return;

      const tbody = table.querySelector("tbody");
      if (!tbody) return;

      const theadText = table.querySelector("thead")?.innerText || "";
      const isVulnTable =
        theadText.includes("Xavflilik darajasi") &&
        theadText.includes("Aniqlangan zaifliklar");

      // Zaiflik jadvallarini DOM'da o'zgartirmaslik — ular faqat React state (vulnAndroid/vulnIOS/vulnUm) orqali boshqariladi
      if (isVulnTable) return;

      tbody.innerHTML = "";

      tableData[key].forEach((rowData) => {
        const row = document.createElement("tr");
        rowData.forEach((cellData) => {
          const cell = document.createElement("td");
          if (cellData.includes("<img") || cellData.includes("<IMG")) {
            cell.innerHTML = cellData;
          } else {
            cell.innerText = cellData;
          }
          cell.contentEditable = editing;
          row.appendChild(cell);
        });
        tbody.appendChild(row);
      });
    });
  }, [tableData, editing]);

  const renderPage = (html, index) => (
    <div
      key={index}
      className="page-container editable"
      contentEditable={editing}
      suppressContentEditableWarning
      dangerouslySetInnerHTML={{ __html: html }}
      ref={(el) => (pageRefs.current[index] = el)}
    />
  );

  const formatDate = (dateString) => {
    if (!dateString) return "—";

    const date = new Date(dateString);

    const day = date.getDate();
    const monthNumber = date.getMonth() + 1;
    const year = date.getFullYear();

    let monthName = "";

    switch (monthNumber) {
      case 1:
        monthName = "yanvardagi";
        break;
      case 2:
        monthName = "fevraldagi";
        break;
      case 3:
        monthName = "martdagi";
        break;
      case 4:
        monthName = "apreldagi";
        break;
      case 5:
        monthName = "maydagi";
        break;
      case 6:
        monthName = "iyundagi";
        break;
      case 7:
        monthName = "iyuldagi";
        break;
      case 8:
        monthName = "avgustdagi";
        break;
      case 9:
        monthName = "sentabrdagi";
        break;
      case 10:
        monthName = "oktabrdagi";
        break;
      case 11:
        monthName = "noyabrdagi";
        break;
      case 12:
        monthName = "dekabrdagi";
        break;
      default:
        monthName = "";
    }

    return ` ${year}-yil ${day} ${monthName}`;
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const addVulnerabilityToPages = (docVulnHtml) => {
    setVulnerabilities((prev) => [...prev, docVulnHtml]);
  };

  const handleSaveDocFromModal = (docVuln) => {
    // console.log("Childdan keldi:", docVuln);
    setPlatform(docVuln.platform);
    generateVulnHtml(docVuln.vuln, docVuln.platform);
    const html = vulnerabilityTemplates[docVuln.type];
    // console.log("HTML:", html);

    addVulnerabilityToPages(html);
    handleSubmit(docVuln);
  };

  const insertAfterIndex = (array, index, newItem) => {
    if (index < 0 || index >= array.length) {
      return [...array, newItem];
    }

    return [...array.slice(0, index + 1), newItem, ...array.slice(index + 1)];
  };

  const stripHtml = (html = "") => {
    if (!html) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const generateVulnHtml = (vulnData, platformKey) => {
    const level = vulnData?.[1]?.[0];
    const title = stripHtml(vulnData?.[1]?.[1]);
    const result = stripHtml(vulnData?.[1]?.[2]);
    const desc = stripHtml(vulnData?.[1]?.[3]);
    const recommendation = stripHtml(vulnData?.[1]?.[4]);

    const levelText = level === 1 ? "Yuqori" : level === 2 ? "O‘rta" : "Past";

    const platformTitleMap = {
      android: `2.2. “${appName}” android mobil ilovasi ekspertizasi natijalari bo‘yicha batafsil izoh`,
      ios: `2.2. “${appName}” iOS mobil ilovasi ekspertizasi natijalari bo‘yicha batafsil izoh`,
      umumiy: `2.2. “${appName}” mobil ilova va server o‘rtasidagi so‘rovlarni o‘rganish natijalari bo‘yicha batafsil izoh`,
    };

    const platformTitle =
      platformTitleMap[platformKey] || platformTitleMap.android;

    let newInnerHtml = "";
    if ((newVuln?.[platformKey] || []).length === 0) {
      newInnerHtml = `
    <div class="title">${platformTitle}</div>
    <div class="exp-title">2.2.${vulnCounter} ${title}</div>
    <div class="exp-d"><b>Xavflilik darajasi:</b> ${levelText}</div>
    <div class="text">${result}</div>
    <div class="text"><b>Ekspluatatsiya oqibatlari:</b> ${desc}</div>
    <div class="text"><b>Tavsiyalar:</b> ${recommendation}</div>
  `;
    } else {
      newInnerHtml = `
    <div class="exp-title">2.2.${vulnCounter} ${title}</div>
    <div class="exp-d"><b>Xavflilik darajasi:</b> ${levelText}</div>
    <div class="text">${result}</div>
    <div class="text"><b>Ekspluatatsiya oqibatlari:</b> ${desc}</div>
    <div class="text"><b>Tavsiyalar:</b> ${recommendation}</div>
  `;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(newInnerHtml, "text/html");

    let blocks = [];

    // Har bir divni tekshiramiz
    doc.body.querySelectorAll("div").forEach((div) => {
      if (div.classList.contains("text")) {
        // text divni satrlarga bo‘lish
        const lines = div.innerHTML
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line);
        lines.forEach((line) => blocks.push(`<pre class="text">${line}</pre>`));
      } else {
        blocks.push(div.outerHTML);
      }
    });

    setNewVuln((prev) => ({
      ...prev,
      [platformKey]: [...(prev?.[platformKey] || []), ...blocks],
    }));
    vulnCounter += 1;

    // console.log(newVuln);
    setHtmlContent((prev) => {
      const updated = [...prev];

      const parser = new DOMParser();
      const doc = parser.parseFromString(updated[startIndex], "text/html");

      const pageContent = doc.querySelector(".page-content");
      if (pageContent) {
        pageContent.insertAdjacentHTML("beforeend", newInnerHtml);
        updated[startIndex] = doc.body.innerHTML;
      }

      // console.log(updated);
      const a4 = document.querySelectorAll(".page-content");
      const a4Array = Array.from(updated).map((el) => el.innerHTML);
      // console.log(a4Array);

      // setHtmlContent(updated);

      return updated;
    });
  };

  const handleSubmit = async (docVuln) => {
    try {
      // console.log(docVuln);
      const level = docVuln?.vuln?.[1]?.[0];
      if (!level) return;

      const fieldMap = {
        1: 13,
        2: 12,
        3: 11,
      };

      const field = fieldMap[level];
      if (!field) return;

      const payload = {
        19: id,
        [field]: [
          {
            a1: level,
            a2: docVuln?.vulnCount,
            a3: docVuln?.vuln?.[1]?.[1],
          },
        ],
      };

      // console.log(docVuln);
      setPlatform(docVuln.platform);

      if (docVuln.platform === "android") {
        setVulnAndroid((prev) => [...prev, payload]);
      } else if (docVuln.platform === "ios") {
        setVulnIOS((prev) => [...prev, payload]);
      } else if (docVuln.platform === "umumiy") {
        setVulnUm((prev) => [...prev, payload]);
      }

      return;
      const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, payload);

      if (res.status == METHOD.OK) {
        if (field === 11) {
        }
      }

      // console.log("Yuborilgan payload:", payload);
      // console.log("Response:", res);
    } catch (error) {
      console.error(error);
    }
  };

  const paginateContent = (items) => {
    // Agar items array bo'lmasa, string bo'lsa uni array ga o'gir
    const itemsArray = Array.isArray(items)
      ? items
      : typeof items === "string"
        ? [items]
        : [];

    if (!itemsArray.length) return [];

    const pages = [];
    let currentPage = [];

    const tempDiv = document.createElement("div");
    tempDiv.style.width = "794px";
    tempDiv.style.position = "absolute";
    tempDiv.style.visibility = "hidden";
    document.body.appendChild(tempDiv);

    itemsArray.forEach((item) => {
      if (!item) return;

      const wrapper = document.createElement("div");
      wrapper.innerHTML = item;
      tempDiv.appendChild(wrapper);

      if (tempDiv.scrollHeight > 580) {
        if (currentPage.length) pages.push(currentPage);
        currentPage = [item];
        tempDiv.innerHTML = item;
      } else {
        currentPage.push(item);
      }
    });

    if (currentPage.length) pages.push(currentPage);
    if (tempDiv.parentNode) {
      tempDiv.parentNode.removeChild(tempDiv);
    }
    return pages;
  };

  useEffect(() => {
    if (isLoadingFromServerRef.current) {
      isLoadingFromServerRef.current = false;
      return;
    }

    const getLevelOrder = (block) => {
      const text = stripHtml(block);
      if (text.includes("Yuqori")) return 1;
      if (text.includes("O‘rta") || text.includes("O'rta")) return 2;
      if (text.includes("Past")) return 3;
      return 99;
    };

    const sortVulnBlocks = (blocks = []) => {
      const headerBlocks = [];
      const groups = [];
      let current = null;

      blocks.forEach((block) => {
        if (block.includes('class="title"') && block.includes("2.2.")) {
          headerBlocks.push(block);
          return;
        }

        if (block.includes('class="exp-title"')) {
          if (current) groups.push(current);
          current = { blocks: [block], levelOrder: 99 };
          return;
        }

        if (!current) {
          headerBlocks.push(block);
          return;
        }

        current.blocks.push(block);
        if (block.includes('class="exp-d"')) {
          current.levelOrder = getLevelOrder(block);
        }
      });

      if (current) groups.push(current);

      groups.sort((a, b) => a.levelOrder - b.levelOrder);

      return [...headerBlocks, ...groups.flatMap((g) => g.blocks)];
    };

    const androidBlocks = sortVulnBlocks(newVuln?.android || []);
    const iosBlocks = sortVulnBlocks(newVuln?.ios || []);
    const umumiyBlocks = sortVulnBlocks(newVuln?.umumiy || []);

    setPages1(androidBlocks.length ? paginateContent(androidBlocks) : []);
    setPages2(iosBlocks.length ? paginateContent(iosBlocks) : []);
    setPages3(umumiyBlocks.length ? paginateContent(umumiyBlocks) : []);
  }, [newVuln]);

  const handleInput = (pageContent) => {
    if (!pageContent || !pageContent.children) return;

    const blocks = Array.from(pageContent.children).map(
      (child) => child.outerHTML,
    );

    const paged = paginateContent(blocks);
    // console.log("hello")
    setPages1(paged);
  };

  const makeImagesResizable = (container) => {
    const imgs = container.querySelectorAll(".text img");

    imgs.forEach((img) => {
      // agar allaqachon event qo‘shilgan bo‘lsa, qaytadan qo‘shmaslik
      if (img.dataset.resizable) return;
      img.dataset.resizable = "true";

      img.style.userSelect = "none";
      img.style.cursor = "nwse-resize";

      let startX, startY, startWidth, startHeight;

      const onPointerMove = (e) => {
        const newWidth = startWidth + (e.clientX - startX);
        const newHeight = startHeight + (e.clientY - startY);
        img.style.width = `${Math.max(50, newWidth)}px`;
        img.style.height = `${Math.max(50, newHeight)}px`;
      };

      const onPointerUp = () => {
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);

        // resize qilinganidan keyin pagination yangilash
        const pageContent = img.closest(".page-content");
        if (pageContent) handleInput({ currentTarget: pageContent });
      };

      img.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        startWidth = img.offsetWidth;
        startHeight = img.offsetHeight;

        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
      });
    });
  };

  useEffect(() => {
    const editables = document.querySelectorAll(".page-content");

    editables.forEach((container) => {
      // dastlabki rasm eventlari
      makeImagesResizable(container);

      const observer = new MutationObserver(() => {
        makeImagesResizable(container); // yangi rasm qo‘shilganda ham event qo‘shiladi
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    });
  }, [pages1, editing, newVuln, htmlContent]);

  const saveAllChanges = async () => {
    const allPages = document.querySelectorAll(".new-content");

    // Har bir sahifa uchun aynan shu sahifadagi (page content) kontentni o'z indeksida saqlash
    const paged = [];
    allPages.forEach((page) => {
      const pageBlocks = [];
      Array.from(page.children)
        .filter((child) => child.nodeType === Node.ELEMENT_NODE)
        .forEach((child) => {
          if (child.tagName === "DIV") {
            const hasNestedDivs = child.querySelector("div") !== null;
            const hasImportantClass =
              child.classList.contains("text") ||
              child.classList.contains("exp-title") ||
              child.classList.contains("exp-d") ||
              child.classList.contains("title");

            if (hasNestedDivs && !hasImportantClass) {
              pageBlocks.push(child.innerHTML);
            } else {
              pageBlocks.push(child.outerHTML);
            }
          } else {
            pageBlocks.push(child.outerHTML);
          }
        });
      // Bo'sh sahifalarni olib tashlash (faqat real kontent bor sahifalarni saqlash)
      const hasContent = pageBlocks.some((b) => hasRealContent(b));
      if (hasContent) {
        paged.push(pageBlocks);
      }
    });

    // Table ma'lumotlarini o'qish (rasmlar bilan base64 da)
    const extractTableData = () => {
      const tables = document.querySelectorAll("table.expert-table");
      const data = {};

      tables.forEach((table, idx) => {
        const rows = table.querySelectorAll("tbody tr");
        const tableContent = [];

        rows.forEach((row) => {
          const cells = row.querySelectorAll("td");
          const rowData = Array.from(cells).map((cell) => {
            const cellText = cell.innerText.trim();
            const images = cell.querySelectorAll("img");
            if (images.length > 0) return cell.innerHTML;
            return cellText;
          });
          tableContent.push(rowData);
        });

        if (tableContent.length > 0) {
          data[`table_${idx}`] = tableContent;
        }
      });

      return data;
    };

    const tables = extractTableData();

    // Base64 ni img src dan olib tashlash - hech qachon src ichida base64 yuborilmasin
    const stripBase64FromImgSrc = (str) => {
      if (typeof str !== "string") return str;
      return str.replace(/src=["']data:image[^"']*["']/gi, 'src=""');
    };

    const processTablesForSave = (tbl) => {
      const result = {};
      for (const [key, rows] of Object.entries(tbl)) {
        result[key] = rows.map((row) =>
          row.map((cell) =>
            typeof cell === "string" ? stripBase64FromImgSrc(cell) : cell,
          ),
        );
      }
      return result;
    };

    const processPagedForSave = (pages) =>
      pages.map((page) =>
        page.map((block) =>
          typeof block === "string" ? stripBase64FromImgSrc(block) : block,
        ),
      );

    const tablesProcessed = processTablesForSave(tables);
    const tablesJson = JSON.stringify(tablesProcessed);
    const pagedProcessed = processPagedForSave(paged);

    const apkName = tablesJson;
    const match = apkName.match(/[a-zA-Z0-9\.\-_]+\.apk/i);
    const apkName1 = match ? match[0] : null;
    setApkFileName(apkName1);

    const ipaMatch = apkName.match(/[a-zA-Z0-9\.\-_]+\.ipa/i);
    const ipaFile = ipaMatch ? ipaMatch[0] : null;
    setIpaFileName(ipaFile);

    const field8Data = [tablesJson, ...pagedProcessed];
    const res = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
      19: id,
      8: field8Data,
    });

    if (res.status === METHOD.OK) {
      // Scroll joyini saqlab qolamiz — saqlashdan keyin shu joyda qolish uchun
      const scrollY = window.scrollY;
      const wordContainer = document.querySelector(".word-container");
      const containerScrollTop = wordContainer ? wordContainer.scrollTop : 0;

      // paged — har bir indeksda shu sahifa kontenti; state uchun platforma bo'yicha qayta ajratamiz
      const byPlatform = { android: [], ios: [], umumiy: [] };
      let currentPlatform = "android";
      paged.forEach((pageBlocks) => {
        const platform = getPlatformFromBlocks(pageBlocks) || currentPlatform;
        currentPlatform = platform;
        byPlatform[platform].push(pageBlocks);
      });
      setPages1(byPlatform.android);
      setPages2(byPlatform.ios);
      setPages3(byPlatform.umumiy);
      setTableData(tables);
      setEditing(false); // edit rejimi

      // Re-render dan keyin scroll joyini qaytaramiz (React state async yangilanishi uchun qisqa kutamiz)
      setTimeout(() => {
        window.scrollTo(0, scrollY);
        if (wordContainer) wordContainer.scrollTop = containerScrollTop;
      }, 50);

      toast.success("Barcha o‘zgarishlar saqlandi");
    }
    // console.log(res);
  };

  const addNewTr = () => {
    setRows((prev) => [
      ...prev,
      { id: Date.now(), role: "", login: "", password: "" },
    ]);
  };

  const hasRealContent = (block) => {
    if (!block || typeof block !== "string") return false;
    const text = block
      .replace(/<[^>]*>/g, "")
      .replace(/\s/g, "")
      .replace(/\u00a0/g, "");
    const hasImg = /<img[\s\S]*?>/i.test(block);
    return text.length > 0 || hasImg;
  };

  const isPageEmpty = (pageBlocks) => {
    if (!pageBlocks || !Array.isArray(pageBlocks) || pageBlocks.length === 0)
      return true;
    return !pageBlocks.some((block) => hasRealContent(block));
  };

  const currentPages = [...pages1, ...pages2, ...pages3].filter(
    (page) => !isPageEmpty(page),
  );

  // Mundarija uchun barcha malumotlar
  const mundarijaVulnItems = useMemo(() => {
    const items = [];
    let pageNum = 17;
    currentPages.forEach((pageBlocks) => {
      (pageBlocks || []).forEach((block) => {
        if (
          block &&
          typeof block === "string" &&
          block.includes('class="exp-title"')
        ) {
          const raw = stripHtml(block).trim();
          const title = raw.replace(/^\s*2\.2\.\d+\s*/, "");
          if (title) items.push({ title, pageNum });
        }
      });
      pageNum += 1;
    });
    return items;
  }, [pages1, pages2, pages3]);

  // Mundarija davomi
  const mundarijaVulnRowHtmls = useMemo(
    () =>
      mundarijaVulnItems.map(
        ({ title, pageNum }) =>
          `<div class="mundarija-row"><div class="row-title large">${title.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div><div class="row-num">${pageNum}</div></div>`,
      ),
    [mundarijaVulnItems],
  );

  const mundarijaContinuationPages = useMemo(() => {
    const pages = mundarijaVulnRowHtmls.length
      ? paginateContent(mundarijaVulnRowHtmls)
      : [];
    return pages.length ? pages : [[]];
  }, [mundarijaVulnRowHtmls]);

  const getExpMonth = () => {
    const month = new Date().getMonth() + 1;

    switch (month) {
      case 1:
        return "yanvar";
        break;
      case 2:
        return "fevral";
        break;
      case 3:
        return "mart";
        break;
      case 4:
        return "aprel";
        break;
      case 5:
        return "may";
        break;
      case 6:
        return "iyun";
        break;
      case 7:
        return "iyul";
        break;
      case 8:
        return "avgust";
        break;
      case 9:
        return "sentabr";
      case 10:
        return "oktabr";
      case 11:
        return "noyabr";
        break;
      case 12:
        return "dekabr";
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ExpertizeModal
        open={modalOpen}
        onClose={closeModal}
        item={expertize}
        itemId={id}
        onSaveDoc={handleSaveDocFromModal}
      />

      {/* <button
        onClick={saveAllChanges}
        className="fixed bottom-10 z-50 right-10 shadow-lg flex justify-center items-center w-[60px] h-[60px] bg-blue-500 text-white text-3xl  rounded-full cursor-pointer hover:bg-blue-600"
      >
        <iconify-icon icon="material-symbols:save"></iconify-icon>
      </button> */}

      <div className="word-container dark:text-[#333] relative " ref={printRef}>
        <div className="sticky top-20 z-50 mb-3 print-btns right-9">
          <div className="flex justify-end w-full">
            <div
              className={`flex ${editing ? "w-full" : "w-auto"} flex-wrap items-center gap-2 rounded-2xl border border-slate-300 p-2 shadow-sm backdrop-blur`}
              onMouseDown={() => captureSelectionRange()}
            >
              <EditorToolbar
                editing={editing}
                onBack={() => window.history.back()}
                onCommand={runEditorCommand}
                onInsertLink={handleInsertLink}
                toolbarBlock={toolbarBlock}
                toolbarBlocks={TOOLBAR_BLOCK_OPTIONS}
                onBlockChange={handleBlockChange}
                toolbarFontName={toolbarFontName}
                toolbarFontFamilies={TOOLBAR_FONT_FAMILIES}
                onFontChange={handleFontChange}
                toolbarFontSize={toolbarFontSize}
                toolbarFontSizes={TOOLBAR_FONT_SIZES}
                onFontSizeChange={handleFontSizeChange}
                toolbarState={toolbarState}
                showZoom={false}
              />

              <div className="ml-auto flex flex-wrap items-center gap-2">
                {editing && (
                  <button
                    className="bg-[#bb9769] hover:bg-[#a08055] text-white px-4 py-2 rounded"
                    onClick={() => openModal(expertize)}
                  >
                    Zaiflik qo'shish
                  </button>
                )}
                <button
                  onClick={handlePrint}
                  className={`px-4 py-2 rounded text-white items-end flex gap-2 ${
                    loading ? "" : "bg-[#bb9769] hover:bg-[#a08055]"
                  }`}
                >
                  <iconify-icon
                    icon="pepicons-print:printer"
                    width="1.2em"
                    height="1.2em"
                  ></iconify-icon>
                  <span> Hisobot </span>
                </button>

                <div
                  className="edit-btn-global"
                  onClick={() => {
                    if (editing) {
                      saveAllChanges();
                    } else {
                      setEditing(true);
                    }
                  }}
                >
                  {editing ? (
                    <div className="cursor-pointer change-btn">
                      <div className="bg-green-500 hover:bg-green-600">
                        <FaSave />
                        <span>Saqlash </span>
                      </div>
                    </div>
                  ) : (
                    <div className="change-btn flex gap-2 cursor-pointer">
                      <div className="bg-[#bb9769] hover:bg-[#a08055]">
                        <FaPen /> <span>Tahrirlash</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="a4 first-a4">
          <div className="page-content">
            <h2
              className="application-name"
              style={{
                fontSize:
                  appName.length <= 15
                    ? "50px"
                    : appName.length <= 25
                      ? "40px"
                      : appName.length <= 40
                        ? "30px"
                        : "24px",
              }}
            >
              “{appName}”
            </h2>
          </div>
        </div>
        <div className="a4 mundarija1">
          <div className="page-content top editable">
            <h2 className="mundarija first-m">Mundarija</h2>
            <div className="mundarija-content first">
              <div className="content-title">
                <span>3</span>
              </div>
              <div className="mundarija-section">birinchi bo‘lim.</div>
              <div className="mundarija-head">UMUMIY MA’LUMOTLAR</div>
              <div className="mundarija-body">
                <div className="mundarija-row">
                  <div className="row-title">Atamalar va ta’riflar</div>
                  <div className="row-num">3</div>
                </div>
                <div className="mundarija-row">
                  <div className="row-title">
                    Ekspertiza o‘tkazish uchun asos
                  </div>
                  <div className="row-num">7</div>
                </div>
                <div className="mundarija-row">
                  <div className="row-title">Ekspertiza obyekti</div>
                  <div className="row-num">7</div>
                </div>
                <div className="mundarija-row">
                  <div className="row-title">Ekspertiza o‘tkazish tartibi</div>
                  <div className="row-num">9</div>
                </div>
                <div className="mundarija-row">
                  <div className="row-title">
                    Ekspertiza yuzasidan qo‘shimcha ma’lumotlar
                  </div>
                  <div className="row-num">12</div>
                </div>
              </div>
            </div>
            <div className="mundarija-content">
              <div className="content-title">
                <span>14</span>
              </div>
              <div className="mundarija-section">IKKINCHI BO‘LIM.</div>
              <div className="mundarija-head">EKSPERTIZA NATIJALARI</div>
              <div className="mundarija-body">
                <div className="mundarija-row">
                  <div className="row-title large">
                    Ekspertiza natijalari to‘g‘risida umumlashtirilgan <br />
                    ma’lumot
                  </div>
                  <div className="row-num">14</div>
                </div>
                <div className="mundarija-row">
                  <div className="row-title large">
                    Android mobil ilovasi ekspertizasi natijalari bo‘yicha
                    batafsil izoh
                  </div>
                  <div className="row-num">16</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {mundarijaContinuationPages.map((pageRows, idx) => (
          <div key={idx} className="a4 mundarija2">
            <div className="page-content editable">
              <div className="mundarija second-m">Mundarija</div>
              <div className="mundarija-content">
                <div
                  className="mundarija-body"
                  dangerouslySetInnerHTML={{
                    __html: pageRows.join(""),
                  }}
                />
                {idx === mundarijaContinuationPages.length - 1 && (
                  <>
                    <div className="content-title">
                      <span>{currentPages?.length + 17}</span>
                    </div>
                    <div className="mundarija-section">UCHINCHI BO‘LIM.</div>
                    <div
                      className="mundarija-head"
                      style={{ marginBottom: "40px" }}
                    >
                      UMUMIY XULOSA
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        <div
          className="a4"
          style={{
            backgroundImage:
              0 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 0 % 2 === 0 ? `end` : `start`,
              marginRight: 0 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <h1 className="depart-title mundarija-section">Birinchi bo'lim</h1>
            <h2 className="depart-subtitle">UMUMIY MA’LUMOTLAR</h2>
            <table className="depart-table">
              <tbody>
                {firstSection.map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first">{item.title}</td>
                    <td className="depart-table-last">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>3</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              1 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 1 % 2 === 0 ? `end` : `start`,
              marginRight: 1 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px]">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content top editable">
            <table className="depart-table">
              <tbody>
                {secondSection.map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first">{item.title}</td>
                    <td className="depart-table-last">
                      {item.desc.replace(/\{\{appName\}\}/g, appName)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>4</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              2 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 2 % 2 === 0 ? `end` : `start`,
              marginRight: 2 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content top editable">
            <table className="depart-table">
              <tbody>
                {thirdSection.map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first">{item.title}</td>
                    <td className="depart-table-last">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>5</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              3 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 3 % 2 === 0 ? `end` : `start`,
              marginRight: 3 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px]">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content top editable">
            <table className="depart-table">
              <tbody>
                {fourthSection.map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first">{item.title}</td>
                    <td className="depart-table-last">
                      {item.desc.replace(/\{\{appName\}\}/g, appName)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>6</span>
          </div>
        </div>
        <div className="a4">
          <div
            className="page-title"
            style={{
              textAlign: 4 % 2 === 0 ? `end` : `start`,
              marginRight: 4 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <div className="title">1.2. Ekspertiza o‘tkazish uchun asos</div>
            <div className="text">
              "Kiberxavfsizlik markazi" davlat unitar korxonasi va "{orgName}"{" "}
              {orgTypeName} oʻrtasida tuzilgan {contractDate}{" "}
              <b className="text-b">"{appName}"</b> mobil ilovasini
              kiberxavfsizlik talablariga muvofiqligi yuzasidan ekspertizadan
              oʻtkazish to'g'risidagi <b className="text-b">"{contractName}"</b>{" "}
              shartnoma.
            </div>

            <div className="title">1.3. Ekspertiza obyekti</div>
            <div className="text">
              <b>“{appName}” android/iOS </b> mobil ilovasining{" "}
              <b>“{apkFileName}”</b> va <b>“{ipaFileName}”</b> fayllari.
            </div>
            <div className="text-i">
              1-jadval. Mobil ilovaning <br />
              “Android” OT uchun versiyasi
            </div>

            <table className="expert-table editable-table">
              <thead>
                <tr>
                  <th style={{ width: "60px", minWidth: "60px" }}>T/r.</th>
                  <th style={{ width: "200px", minWidth: "200px" }}>
                    Texnik ma’lumot nomlanishi
                  </th>
                  <th style={{ width: "240px", minWidth: "240px" }}>Izoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Dasturchi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Rasmiy veb sayt</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Fayl nomi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Paket nomi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Asosiy oyna</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Talqin</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Minimal API talqini</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>Joriy API talqini</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>Ilova kategoriyasi</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>7</span>
          </div>
        </div>

        <div
          className="a4"
          style={{
            backgroundImage:
              5 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 5 % 2 === 0 ? `end` : `start`,
              marginRight: 5 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px]">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <table className="expert-table editable-table mt-6">
              <tbody>
                <tr>
                  <td>10.</td>
                  <td>Ilova logotipi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>11.</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>12.</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>13.</td>
                  <td>O‘rnatilishlar soni </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>14.</td>
                  <td>MD5</td>
                  <td>- </td>
                </tr>
                <tr>
                  <td>15.</td>
                  <td>SHA1</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>16.</td>
                  <td>SHA256</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <div className="text-i my-3">
              1-jadval. Mobil ilovaning <br />
              “iOS” OT uchun versiyasi
            </div>

            <table className="expert-table editable-table">
              <thead>
                <tr>
                  <th style={{ width: "60px", minWidth: "60px" }}>T/r.</th>
                  <th style={{ width: "200px", minWidth: "200px" }}>
                    Texnik ma’lumot nomlanishi
                  </th>
                  <th style={{ width: "240px", minWidth: "240px" }}>Izoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Dasturchi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Rasmiy veb sayt</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Fayl nomi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Paket nomi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Asosiy oyna</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Talqin</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Minimal API talqini</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>8</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              6 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 6 % 2 === 0 ? `end` : `start`,
              marginRight: 6 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <table className="expert-table editable-table mt-6">
              <tbody>
                <tr>
                  <td>8.</td>
                  <td>Joriy API talqini</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>Ilova kategoriyasi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>10.</td>
                  <td>Ilova logotipi </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>11.</td>
                  <td>Play Market havolasi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>12.</td>
                  <td>Play Market reytingi</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>13.</td>
                  <td>O‘rnatilishlar soni </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>14.</td>
                  <td>MD5</td>
                  <td>- </td>
                </tr>
                <tr>
                  <td>15.</td>
                  <td>SHA1</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>16.</td>
                  <td>SHA256</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <div className="title mt-4">1.4. Ekspertiza o‘tkazish tartibi</div>
            <table className="depart-table">
              <tbody>
                {expertEtaps.slice(0, 1).map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first etp">
                      <img src={`${item.img}`} alt={`${item.title}`} />
                      <div>{item.title}</div>
                      <img src={`${item.dv}`} alt={`${item.dv}`} />
                    </td>
                    <td className="depart-table-last">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>9</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              7 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 7 % 2 === 0 ? `end` : `start`,
              marginRight: 7 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px]">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <table className="depart-table">
              <tbody>
                {expertEtaps.slice(1, 4).map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first etp">
                      <img src={`${item.img}`} alt={`${item.title}`} />
                      <div>{item.title}</div>
                      <img src={`${item.dv}`} alt={`${item.dv}`} />
                    </td>
                    <td className="depart-table-last">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>10</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              8 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 8 % 2 === 0 ? `end` : `start`,
              marginRight: 8 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <table className="depart-table">
              <tbody>
                {expertEtaps.slice(4, 7).map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first etp">
                      <img src={`${item.img}`} alt={`${item.title}`} />
                      <div>{item.title}</div>
                      {item.dv !== null && (
                        <img src={`${item.dv}`} alt={`${item.dv}`} />
                      )}
                    </td>
                    <td className="depart-table-last">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text">
              Ekspertiza o‘tkazish tartibi asosida amalga oshiriladigan ishlar
              jarayoni quyidagi tadbirlarni ham o‘z ichiga oladi:
            </div>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>11</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              9 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 9 % 2 === 0 ? `end` : `start`,
              marginRight: 9 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px]">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <table className="depart-table">
              <tbody>
                {inExperts.slice(0, 5).map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first exp">
                      <div>
                        {item.id}. {item.title}
                      </div>
                    </td>
                    <td className="depart-table-last exp">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>12</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              10 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 10 % 2 === 0 ? `end` : `start`,
              marginRight: 10 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <table className="depart-table">
              <tbody>
                {inExperts.slice(6, 9).map((item, index) => (
                  <tr key={index}>
                    <td className="depart-table-first exp">
                      <div>
                        {item.id}. {item.title}
                      </div>
                    </td>
                    <td className="depart-table-last exp">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="title">
              1.5. Ekspertiza yuzasidan qo‘shimcha ma’lumotlar
            </div>
            <div className="text">
              “{appName}” android/iOS mobil ilovalari ekspertizasi buyurtmachi
              tomonidan taqdim qilingan ma’lumotlar, jumladan: <br />
              <b>- “{apkFileName}”;</b> <br />
              <b>- “{ipaFileName}”</b> fayllari, shuningdek 4-jadvaldagi
              foydalanuvchi qayd yozuvlari asosida olib borildi.
            </div>
            <div className="relative">
              <table className="expert-table editable-table mt-6">
                <thead>
                  <tr>
                    <th>T/r</th>
                    <th>Rol</th>
                    <th>Kirish</th>
                    <th>Parol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Foydalanuvchi</td>
                    <td>+998938623880</td>
                    <td>sms</td>
                  </tr>
                  {rows.map((row, index) => (
                    <tr key={row.id}>
                      <td>{index + 2}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => addNewTr()}
                className="opacity-0 hover:opacity-100 text-bold w-[15px] h-[20px] rounded-full text-center text-green-500 bg-gray-700 flex justify-center items-center absolute right-[0px] bottom-[-5px]"
              >
                <span>+</span>
              </button>
            </div>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>13</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              11 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 11 % 2 === 0 ? `end` : `start`,
              marginRight: 11 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px]">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <h1 class="depart-title mundarija-section">IKKINCHI BO‘LIM.</h1>
            <h2 class="depart-subtitle">UMUMIY MA’LUMOTLAR</h2>
            <div className="title">
              2.1. Ekspertiza natijalari to‘g‘risida umumlashtirilgan ma’lumot
            </div>
            <div className="text">
              Ekspertiza natijalari asosida 3 xil xavflilik darajasiga ega,
              ya’ni <b>yuqori, o‘rta</b> va <b>past</b> xavflilik darajasidagi
              axborot xavfsizligi zaifliklari va tizimda ma’lumot uchun holatlar
              aniqlanishi mumkin.
            </div>
            <div className="text">
              Axborot xavfsizligi zaifliklari xavflilik darjasidan kelib chiqqan
              holda mobil ilovaga quyidagi risklar xavf soladi.
            </div>
            <div className="bg-[#699fdd]">
              <div className="text">
                <b>Yuqori</b> - ushbu turdagi axborot xavfsizligi zaifliklari
                ilovaga eng yuqori xavf ko‘rsatadi. Ulardan foydalanish ilovaga
                ruxsatsiz kirish, uning ma’lumotlaridan foydalanish bilan bir
                qatorda muhim, konfidensial ma’lumotlarni sizib chiqish
                holatlarini yuzaga kelishiga sabab bo‘lishi mumkin.
              </div>
              <div className="text">
                <b>O‘rta</b> - ushbu turdagi axborot xavfsizligi zaifliklari
                ko‘p holatlarda boshqa turdagi xavflilik darajasi yuqori bo‘lgan
                harakatlarni amalga oshirishga, ilova bilan bog‘liq
                ma’lumotlarni to‘plashga xizmat qiladi.
              </div>
              <div className="text">
                <b>Past</b> - ushbu turdagi axborot xavfsizligi zaifliklari
                ilovada umumiy ma’lumotlarga ega bo‘lish imkoniyatini taqdim
                etadi.
              </div>
              <div className="text">
                <b>Ma’lumot uchun </b> – ilovaga xavf solmaydigan, ekspertiza
                davrida aniqlangan axborot xavfsizligiga zid holatlar.
              </div>
            </div>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>14</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              12 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 12 % 2 === 0 ? `end` : `start`,
              marginRight: 12 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <div className="text">
              Olib borilgan ekspertiza natijalari asosida aniqlangan axborot
              xavfsizligi zaifliklari to‘g‘risida umumlashtirilgan ma’lumotlar
              5-jadvalda taqdim qilingan.
            </div>
            <div className="text-i my-3 underline">
              5-jadval. “{appName}” android mobil ilovasida <br />
              aniqlangan zaifliklar.
            </div>
            <table class="expert-table editable-table">
              <thead>
                <tr>
                  <th style={{ width: "100px", minWidth: "100px" }}>
                    Xavflilik darajasi{" "}
                  </th>
                  <th style={{ width: "300px", minWidth: "300px" }} colSpan={2}>
                    Aniqlangan zaifliklar nomi va soni
                  </th>
                </tr>
              </thead>
              <tbody>
                {androidVulns.high?.map((item, index) => (
                  <tr key={`android-high-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={androidVulns.high.length}
                        style={{ fontWeight: "bold" }}
                      >
                        Yuqori
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
                {androidVulns.medium?.map((item, index) => (
                  <tr key={`android-medium-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={androidVulns.medium.length}
                        style={{ fontWeight: "bold" }}
                      >
                        O'rta
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
                {androidVulns.low?.map((item, index) => (
                  <tr key={`android-low-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={androidVulns.low.length}
                        style={{ fontWeight: "bold" }}
                      >
                        Past
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>15</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              13 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title"
            style={{
              textAlign: 13 % 2 === 0 ? `end` : `start`,
              marginRight: 13 % 2 === 0 ? `50px` : `0px`,
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px]">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <div className="text-i my-3 underline">
              6-jadval. “{appName}” iOS mobil ilovasida <br />
              aniqlangan zaifliklar.
            </div>
            <table class="expert-table editable-table">
              <thead>
                <tr>
                  <th style={{ width: "100px", minWidth: "100px" }}>
                    Xavflilik darajasi{" "}
                  </th>
                  <th style={{ width: "300px", minWidth: "300px" }} colSpan={2}>
                    Aniqlangan zaifliklar nomi va soni
                  </th>
                </tr>
              </thead>
              <tbody>
                {iosVulns.high?.map((item, index) => (
                  <tr key={`ios-high-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={iosVulns.high.length}
                        style={{ fontWeight: "bold" }}
                      >
                        Yuqori
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
                {iosVulns.medium?.map((item, index) => (
                  <tr key={`ios-medium-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={iosVulns.medium.length}
                        style={{ fontWeight: "bold" }}
                      >
                        O'rta
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
                {iosVulns.low?.map((item, index) => (
                  <tr key={`ios-low-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={iosVulns.low.length}
                        style={{ fontWeight: "bold" }}
                      >
                        Past
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-i my-3 underline">
              7-jadval. “{appName}” mobil ilova va server o‘rtasidagi
              so‘rovlarni o‘rganish jarayonida aniqlangan zaifliklar
            </div>
            <table class="expert-table editable-table">
              <thead>
                <tr>
                  <th style={{ width: "100px", minWidth: "100px" }}>
                    Xavflilik darajasi{" "}
                  </th>
                  <th style={{ width: "300px", minWidth: "300px" }} colSpan={2}>
                    Aniqlangan zaifliklar nomi va soni
                  </th>
                </tr>
              </thead>
              <tbody>
                {umVulns.high?.map((item, index) => (
                  <tr key={`um-high-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={umVulns.high.length}
                        style={{ fontWeight: "bold" }}
                      >
                        Yuqori
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
                {umVulns.medium?.map((item, index) => (
                  <tr key={`um-medium-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={umVulns.medium.length}
                        style={{ fontWeight: "bold" }}
                      >
                        O'rta
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
                {umVulns.low?.map((item, index) => (
                  <tr key={`um-low-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={umVulns.low.length}
                        style={{ fontWeight: "bold" }}
                      >
                        Past
                      </td>
                    )}
                    <td style={{ fontWeight: "normal" }}>{item.a3}</td>
                    <td style={{ fontWeight: "normal" }}>{item.a2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page-number flex justify-center mt-auto">
            <span>16</span>
          </div>
        </div>

        {currentPages &&
          currentPages.map((pageItems, pageIndex) => (
            <div
              key={pageIndex}
              className="a4"
              style={{
                backgroundImage:
                  pageIndex % 2 === 0
                    ? `url("/assets/word/2.png")`
                    : `url("/assets/word/3.png")`,
              }}
            >
              <div
                className="page-title"
                style={{
                  width: "85%",
                  textAlign: pageIndex % 2 === 0 ? "end" : "start",
                  marginRight: pageIndex % 2 === 0 ? "50px" : "0px",
                  fontSize: appName.length > 20 ? "14px" : "",
                  marginTop: appName.length > 20 ? "-26px" : "",
                }}
              >
                <div
                  className={`max-w-[200px] ${pageIndex % 2 == 0 ? "ml-auto" : ""}`}
                >
                  “{appName}”
                </div>
                <div>mobil ilovasi</div>
              </div>

              <div
                className="page-content editable new-content"
                style={{ paddingTop: "10px" }}
              >
                {pageItems.map((item, i) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </div>

              <div className="page-number flex justify-center mt-auto exp-page-num">
                <span>{pageIndex + 17}</span>
              </div>
            </div>
          ))}

        <div className="a4">
          <div
            className="page-title mt-5"
            style={{
              width: "85%",
              textAlign: 10 % 2 === 0 ? "end" : "start",
              marginRight: 10 % 2 === 0 ? "50px" : "0px",
              // marginTop: "-20px",
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <div className="depart-title mundarija-section">
              UCHINCHI BO‘LIM.
            </div>
            <div className="depart-subtitle">UMUMIY XULOSA</div>
            <div className="text">
              “{appName}” mobil ilovasini kiberxavfsizlik talablariga
              muvofiqligi yuzasidan o‘tkazilgan ekspertiza natijasida
              kiberxavfsizlikning yuqori va o‘rta darajadagi zaifliklari
              aniqlandi.
            </div>
            <div className="text">
              Ekspertiza davrida aniqlangan zaifliklar mobil ilova va u bilan
              bog‘liq resurslar, shuningdek foydalanuvchilarning ma’lumotlarini
              qo‘lga kiritish va ulardan ilova doirasida noqonuniy
              foydalanishga, ilova ish faoliyatiga ta’sir ko‘rsatishga,
              ma’lumotlarni o‘zgarishiga, yo‘qotilishiga, sizib chiqishiga va
              boshqa salbiy holatlarga olib kelishi mumkin.
            </div>
            <div className="text">
              Shu o‘rinda ushbu salbiy holatlarni oldini olish, shuningdek
              kiberxavfsizlikni ta’minlanganlik darajasini yaxshilash maqsadida
              aniqlangan kiberxavfsizlik zaifliklarini bartaraf etish yuzasidan
              tavsiyalarni inobatga olish hamda quyidagi chora-tadbirlarni
              amalga oshirish tavsiya etiladi:
            </div>
            <div className="text">
              - doimiy ravishda operatsion tizimlar, dasturiy ta’minotlar va
              himoya vositalarining versiyalarini hamda signaturalar bazasini
              yangilanishini qo‘llabquvvatlash;
            </div>
            <div className="text">
              - axborotni himoya qilish vositalari, xususan “WAF” va
              “IDS/IPS”lardan samarali foydalanish;
            </div>
            <div className="text">
              - davriy muddatlarda ishlab chiqilgan yoki joriy etilgan axborot
              resurslarini kiberxavfsizlik talablari bo‘yicha tekshiruvdan
              o‘tkazish;
            </div>
          </div>
          <div className="page-number flex justify-center mt-auto exp-page-num">
            <span>{currentPages?.length + 17}</span>
          </div>
        </div>
        <div
          className="a4"
          style={{
            backgroundImage:
              5 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title mt-5"
            style={{
              width: "85%",
              textAlign: 11 % 2 === 0 ? "end" : "start",
              marginRight: 11 % 2 === 0 ? "50px" : "0px",
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px]">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <div className="text mt-5">
              - qurilmani virtual muhitlarda o‘rnatilishi va “root” huquqlarini
              cheklash;
            </div>

            <div className="text">
              - tarmoqda ma’lumotlarni xavfsiz almashishdagi “MITM” hujumlarini
              oldini olish maqsadida “ssl-pinning” texnologiyalaridan
              foydalanish;
            </div>
            <div className="text">
              - ma’lumotlar bazasida ma’lumotlarni shifrlash;
            </div>
            <div className="text">
              - buferda almashinayotgan ma’lumotlarni nazorat qilish;
            </div>
            <div className="text">
              - ilova har doim yangi qurilmaga o‘rnatilganda foydalanuvchini
              qayta identifikatsiya qilish jarayonida yuzni tanish va tekshirish
              jarayonini ham o‘tkazilishini joriy etish;{" "}
            </div>
            <div className="text">
              - ilovadan VPN tarmoqlari orqali foydalanish imkonyatini cheklash.
            </div>
            <div className="text" style={{ fontWeight: "italic" }}>
              <i>
                <b className="underline">Ma’lumot o‘rnida: </b>
              </i>
            </div>
            <div className="text">
              <i>
                Ekspertiza hisoboti {new Date().getFullYear()}-yil{" "}
                {new Date().getDate()}-{getExpMonth()} kunida olingan yakuniy
                tahliliy natijalar asosida shakllantirilgan. Shu munosabat
                bilan, “Kiberxavfsizlik markazi” DUK mazkur muddatdan tashqari
                vaqtlarda aniqlangan kiberxavfsizlik zaiflklari yuzasidan
                javobgarlikni o‘z zimmasiga olmaydi.
              </i>
            </div>
          </div>
          <div className="page-number flex justify-center mt-auto exp-page-num">
            <span>{currentPages?.length + 18}</span>
          </div>
        </div>

        <div
          className="a4"
          style={{
            backgroundImage:
              6 % 2 === 0
                ? `url("/assets/word/2.png")`
                : `url("/assets/word/3.png")`,
          }}
        >
          <div
            className="page-title mt-5"
            style={{
              width: "85%",
              textAlign: 12 % 2 === 0 ? "end" : "start",
              marginRight: 12 % 2 === 0 ? "50px" : "0px",
              fontSize: appName.length > 20 ? "14px" : "",
              marginTop: appName.length > 20 ? "-26px" : "",
            }}
          >
            <div className="max-w-[200px] ml-auto">“{appName}”</div>
            <div>mobil ilovasi</div>
          </div>
          <div className="page-content editable">
            <div className="text mt-6">
              <b>“Kiberxavfsizlik markazi” DUK mutaxassislari:</b>
            </div>
            <table
              style={{ border: "none", marginLeft: "40px", marginTop: "30px" }}
            >
              <tbody>
                <tr className="h-[50px]">
                  <td className="table-text">Jamoldinov X.</td>
                  <td className="table-text min-w-[160px]">
                    <div className="w-[95%] min-w-[95%] border-b h-[20px] border-gray-700"></div>
                  </td>
                  <td className="table-text">Yetakchi mutaxassis</td>
                </tr>
                <tr className="pt-5 h-[100px]">
                  <td className="table-text min-w-[180px]">Aliyev A.</td>
                  <td className="table-text min-w-[160px]">
                    <div className="w-[95%] min-w-[95%] border-b h-[20px] border-gray-700"></div>
                  </td>
                  <td className="table-text">1-toifali mutaxassis</td>
                </tr>
              </tbody>
            </table>

            <div className="absolute bottom-6 left-12">
              <div className="system-col">
                <p className="system-paragraph">
                  Ro'yhat tartib raqami{" "}
                  <span className="w-10 border-b border-black"></span>
                  _______-XDFU-son
                </p>
                <p className="system-paragraph">
                  Kompyuterda ikki nusxada chop etildi.
                </p>
                <p className="system-paragraph">
                  Fayl saqlanmadi. Xomaki matnsiz.
                </p>
                <p className="system-paragraph">
                  1-nusxa - "TAYANCH MIKROMOLIYA BANKI" {orgTypeName} ga
                </p>
                <p className="system-paragraph">
                  2-nusxa - Nazorat va hujjatlar
                </p>
                <p className="system-paragraph">aylanishi bo'limi jildiga</p>
                <p className="system-paragraph">
                  Bajardi va chop etdi I. Odinayev
                </p>
                <p className="system-paragraph">Tel.: (71) 203-00-24</p>
                <p className="system-paragraph">
                  {new Date().getFullYear()}-yil "_____
                  "-
                  ______________
                </p>
              </div>
            </div>
          </div>
          <div className="page-number flex justify-center mt-auto exp-page-num">
            <span>{currentPages?.length + 19}</span>
          </div>
        </div>
        <div className="a4 last-a4">
          <div className="page-content editable"></div>
        </div>
      </div>
    </>
  );
};

export default Word;
