import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FaPen, FaSave } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print'
import { useParams } from 'react-router-dom'
import ExpertizeModal from '../../components/expertize'
import { METHOD } from '../../api/zirhrpc'
import { useZirhStref } from '../../context/ZirhContext'
import toast from 'react-hot-toast'
import { sendRpcRequest } from '../../rpc/rpcClient'
import { downloadFileViaRpcNew, uploadFileViaRpc } from '../../rpc/fileRpc'
import { IoIosAddCircleOutline } from 'react-icons/io'
import EditorToolbar from '../../components/editor-toolbar'

const TOC_MAX_HEIGHT = 720
const SECTION_TABLE_MAX_HEIGHT = 520
const TOOLBAR_FONT_FAMILIES = [
	'Arial',
	'Calibri',
	'Cambria',
	'Georgia',
	'Times New Roman',
	'Trebuchet MS',
	'Verdana',
	'Courier New',
]
const TOOLBAR_FONT_SIZES = [10, 11, 12, 14, 16, 18, 20, 24, 30, 36]
const TOOLBAR_BLOCK_OPTIONS = [
	{ label: 'Oddiy matn', value: 'p' },
	{ label: 'Sarlavha 1', value: 'h1' },
	{ label: 'Sarlavha 2', value: 'h2' },
	{ label: 'Sarlavha 3', value: 'h3' },
	{ label: 'Sarlavha 4', value: 'h4' },
	{ label: 'Sarlavha 5', value: 'h5' },
	{ label: 'Sarlavha 6', value: 'h6' },
	{ label: 'Iqtibos', value: 'blockquote' },
]
const TOOLBAR_ZOOM_OPTIONS = [75, 90, 100, 110, 125, 150]
const TOOLBAR_FONT_SIZE_TO_EXEC = {
	10: '1',
	11: '2',
	12: '3',
	14: '4',
	16: '5',
	18: '6',
	20: '7',
	24: '8',
	30: '9',
	36: '10',
}
const IMAGE_UPLOAD_LOG_TAG = '[word-system:image]'
const imageLog = (...args) => console.log(IMAGE_UPLOAD_LOG_TAG, ...args)
const imageLogError = (...args) => console.error(IMAGE_UPLOAD_LOG_TAG, ...args)
const IMAGE_PLACEHOLDER_SRC =
	'data:image/svg+xml,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"><rect width="1" height="1" fill="#f0f0f0"/></svg>',
	)
const CARET_ANCHOR_HTML =
	'<p class="system-paragraph word-caret-anchor" data-caret-anchor="true"><br /></p>'
const UUID_RESOURCE_RE =
	/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const FILE_ID_SLASH_RE = /^[0-9a-f]+\/[0-9a-f]+$/i

const inferFileIdFromSrc = srcValue => {
	const src = (srcValue || '').trim()
	if (!src) return ''
	if (
		src.startsWith('data:') ||
		src.startsWith('blob:') ||
		/^https?:\/\//i.test(src) ||
		src.startsWith('/')
	) {
		return ''
	}
	if (/^files\//i.test(src)) {
		return src.replace(/^files\//i, '').trim()
	}
	if (UUID_RESOURCE_RE.test(src)) {
		return src
	}
	if (FILE_ID_SLASH_RE.test(src)) {
		return src
	}
	return ''
}

const isBrokenFileSrcValue = srcValue => {
	const src = (srcValue || '').trim()
	if (!src) return true
	if (src === IMAGE_PLACEHOLDER_SRC) return true
	if (
		src.startsWith('data:') ||
		src.startsWith('blob:') ||
		/^https?:\/\//i.test(src) ||
		src.startsWith('/')
	) {
		return false
	}
	return Boolean(inferFileIdFromSrc(src))
}

const isManualPageBreakBlock = html =>
	typeof html === 'string' && /data-manual-page-break=["']true["']/i.test(html)

const isCaretAnchorBlock = html =>
	typeof html === 'string' && /data-caret-anchor=["']true["']/i.test(html)

const buildCaretAnchorBlock = () => CARET_ANCHOR_HTML

const flattenPagesToModelBlocks = pages => {
	const safePages = Array.isArray(pages) ? pages : []
	if (!safePages.length) return [buildCaretAnchorBlock()]
	const out = []
	safePages.forEach(pageBlocks => {
		const safeBlocks = Array.isArray(pageBlocks)
			? pageBlocks.filter(Boolean)
			: [buildCaretAnchorBlock()]
		if (safeBlocks.length === 0) {
			out.push(buildCaretAnchorBlock())
		} else {
			out.push(...safeBlocks)
		}
	})
	return out
}

const section1Left = [
	{
		term: 'Ma’lumotlar bazasi',
		text: 'amaliy dasturlarga bog‘liq bo‘lmagan holda, ma’lumotlarni tavsiflash, saqlash va boshqarishning umumiy prinsiplarini ko‘zda tutadigan muayyan qoidalar bo‘yicha tashkil qilingan ma’lumotlar jamlanmasi.',
	},
	{
		term: 'Dastur zaifligi',
		text: 'dasturiy ta’minotni ishlab chiqish davrida dasturchilar tomonidan yo‘l qo‘yilgan xatolik. Mazkur xatoliklar dastur funksional imkoniyatlari va saqlanayotgan ma’lumotlaridan noqonuniy foydalanish, yaxlitligini buzish va noto‘g‘ri ishlashiga olib kelish imkoniyatini beradi.',
	},
	{
		term: 'SQL-inyeksiya',
		text: 'so‘rovlar tanasiga maxsus SQL-kodlarni kiritishga asoslangan, ma’lumotlar bazasi bilan ishlovchi veb-sayt va dasturlarga amalga oshiriladigan hujumlardan biri.',
	},
	{
		term: 'OS Command-inyeksiya',
		text: 'zaif veb-ilovalar yordamida operatsion tizimlarda g‘arazli maqsadga yo‘naltirilgan (bajariluvchi) buyruqlarni amalga oshirishga qaratilgan hujum.',
	},
]

const section1Right = [
	{
		term: 'Sintaksis va mantiqiy nuqsonlar',
		text: 'buferning to‘lib ketishi yoki boshqa turdagi nosozliklarga olib keladi. Ularni aniqlash uzoq vaqt va mashina kodi qismlarida nuqsonlarni bartaraf etish bo‘yicha ishlarni olib borishni talab etadi.',
	},
	{
		term: 'Cross-site scripting (XSS)',
		text: 'veb-tizimlarga amalga oshiriladigan hujum turi bo‘lib, veb-tizim tomonidan taqdim qilinadigan ilovaga zararli kodni yuklash (mazkur kod foydalanuvchi kompyuterida u tomonidan ilova ochilganda ishga tushadi) va uning natijasida g‘araz niyatli shaxsning serveri bilan aloqа o‘rnatishga mo‘ljallangan.',
	},
	{
		term: 'CSRF',
		text: 'HTTP protokolining zaifliklaridan foydalangan holda veb-sayt foydalanuvchilariga qaratilgan hujum turi.',
	},
	{
		term: 'Open redirect',
		text: 'foydalanuvchilarni “phishing” saytlarga yo‘naltirish yoki foydali dasturiy ta’minot ko‘rinishidagi “rootkit” dasturiy to‘plamlarni (maxsus kodlar, dasturlar, konfiguratsiya (sozlama) fayllari va shu kabilar) yuklab olishga undovchi zaiflik.',
	},
	{
		term: 'HTML inyeksiya',
		text: '“Hypertext Markup Language” (HTML) -',
	},
]

const htmlInjectionContinuation =
	'gipermatnli belgilash tilida yaratilgan kontentlarga yo‘naltirilgan hujum turi bo‘lib, veb-saytga foydalanuvchi tomonidan kiritiladigan so‘rovlarni qayta ishlash bo‘yicha funksiyalarning yo‘qligi evaziga shaxsiy HTML-kodlarni yuklashga yo‘naltirilgan.'

const section2LeftTerms = [
	{
		term: 'Remote code execution',
		text: 'axborot tizimi yoki resursning dasturiy kodlarida xatoliklardan foydalangan holda maxsus kodlarni bajarish orqali axborot tizimi yoki resurs joylashgan serverni boshqarish imkoniyatini taqdim etuvchi hujum turi.',
	},
	{
		term: 'Eksployt',
		text: 'kompyuter dasturiy komponentlarining zaif tomonlaridan foydalaniladigan zararli kod.',
	},
]

const section2ObjectLinks = [
	'https://5tashabbus.uz',
	'https://adm2.sport.uz',
	'https://dash2.sport.uz',
	'https://erp2.sport.uz',
	'https://my2.sport.uz',
	'https://mass2.sport.uz',
	'https://pr2.sport.uz',
]

const section2ProcessIntro =
	'Axborot tizimi ekspertizasi quyidagi ikki xil usulga asoslangan holda amalga oshirildi:'

const section2ProcessItems = [
	{
		term: '“BlackBox” usuli',
		text: '“Qora quti” faqatgina axborot tizimini tashqi tomondan kiberxavfsizlik harakatlariga zaif ekanligi o‘rganiladi va ushbu usulga asoslangan o‘rganish haqiqiy vaziyatga imkon qadar yaqin.',
	},
	{
		term: '“WhiteBox” usuli',
		text: '“Oq quti” axborot tizimi to‘g‘risida ma’lumotlarga, xususan axborot tizimidan foydalanish uchun login va parollar, foydalanilgan dasturiy texnologiyalar, axborot tizimi',
	},
]

const docTermEntries = [
	...section1Left.map(item => ({ ...item, bucket: 'section1-left' })),
	...section1Right.map(item => ({ ...item, bucket: 'section1-right' })),
	...section2LeftTerms.map(item => ({ ...item, bucket: 'section2-left' })),
	...section2ProcessItems.map(item => ({
		...item,
		bucket: 'section2-process',
	})),
]

const section1LeftItems = docTermEntries.filter(
	item => item.bucket === 'section1-left',
)
const section1RightItems = docTermEntries.filter(
	item => item.bucket === 'section1-right',
)
const section2LeftItems = docTermEntries.filter(
	item => item.bucket === 'section2-left',
)
const section2ProcessEntries = docTermEntries.filter(
	item => item.bucket === 'section2-process',
)
const whiteBoxContinuation =
	'doirasidagi axborot resurslari to‘g‘risida ma’lumotlarga ega bo‘lgan holda o‘rganish.'

const section3Intro =
	'Ekspertiza davrida kiberxavfsizlik zaifliklarini aniqlash bo‘yicha ishlar olib borildi, jumladan axborot tizimida quyidagi kiberxavfsizlik zaifliklarini mavjudligi tekshirildi:'

const section3BulletsLeft = [
	'SQL-inyeksiya va uning turlari;',
	'OS Command injeksiya;',
	'Cross-site scripting (XSS);',
	'bajariluvchi fayllarni yuklash;',
	'CSRF;',
	'Remote code execution;',
	'Open redirect;',
	'autentifikatsiya jarayonidagi xatoliklar;',
	'barcha uchun ochiq holda bo‘lgan ma’lumotlar, formlar va shu kabilar;',
]

const section3BulletsRight = [
	'avtorizatsiya jarayonining noto‘g‘ri yoki yetarli darajada bo‘lmaganlik holati;',
	'funksional imkoniyatlarni noto‘g‘ri taqsimlash;',
	'muhim resurslarga ruxsat berish va ulardan foydalanishni tartibga solinmaganlik holati;',
	'katta hajmdagi autentifikatsiya urinishlarini qayta ishlashda xatoliklar;',
	'ma’lumotlarni chiqib ketishga olib keluvchi xatoliklar;',
	'parollar tanlovidan himoyalanmaganlik holatlari va boshqalar.',
]

const section3TableIntro =
	'Axborot tizimi ekspertizasi 1-jadvalda taqdim etilgan ketma-ketlikda tadbirlarni amalga oshirish orqali amalga oshirildi'

const section3TableRows = [
	'Axborot tizimi to‘g‘risida ma’lumotlar to‘plash va ularni tahlil qilish',
	'Axborot tizimi formalari, bo‘limlari va tashkil etuvchilarida zaifliklar mavjudligiga tekshirish',
	'Axborot tizimi dasturiy ta’minotlari va xizmatlarida zaifliklar mavjudligiga tekshirish',
	'Axborot tizimi va uning ish jarayoni hamda funksional imkoniyatlari, shuningdek axborot tizimi ma’muri tomonidan yo‘l qo‘yilgan xatoliklar mavjudligiga tekshirish',
]

const systemSectionsJson = {
	section1: {
		title: 'BIRINCHI BO‘LIM.',
		subtitle: 'UMUMIY MA’LUMOTLAR',
		leftItems: section1LeftItems,
		rightItems: section1RightItems,
	},
	section2: {
		title: 'IKKINCHI BO‘LIM.',
		subtitle: 'EKSPERTIZA NATIJALARI',
		leftItems: section2LeftItems,
		processIntro: section2ProcessIntro,
		processItems: section2ProcessEntries,
	},
	section3: {
		title: 'UCHINCHI BO‘LIM.',
		subtitle: 'UMUMIY XULOSA',
		intro: section3Intro,
		bulletsLeft: section3BulletsLeft,
		bulletsRight: section3BulletsRight,
		tableIntro: section3TableIntro,
	},
}

const buildSectionTableRowHtml = (row, index) => `
	<tr>
		<td>${index + 1}.</td>
		<td>${row}</td>
	</tr>
`

let vulnCounter = 1

const buildTocItemHtml = item => {
	if (item.type === 'section') {
		return `
			<div class="content-title"><span>${item.page}</span></div>
			<div class="mundarija-section">${item.section}</div>
			<div class="mundarija-head">${item.head}</div>
		`
	}

	if (item.type === 'subheader') {
		return `
			<div class="mundarija-row system-mundarija-row">
				<div class="row-title large"><b>${item.title}</b></div>
				<div class="row-num text-nowrap">${item.page || ''}</div>
			</div>
		`
	}

	return `
		<div class="mundarija-row system-mundarija-row">
			<div class="row-title ${item.large ? 'large' : ''}">${item.title}</div>
			<div class="row-num text-nowrap">${item.page || ''}</div>
		</div>
	`
}

const paginateTocItems = items => {
	if (!items.length) return []
	const pages = []
	const measure = document.createElement('div')
	measure.style.width = '794px'
	measure.style.position = 'absolute'
	measure.style.visibility = 'hidden'
	measure.style.top = '-9999px'
	measure.style.maxHeight = 'none'
	measure.style.overflow = 'visible'

	const measureContent = document.createElement('div')
	measureContent.className = 'mundarija-content mundarija-content-system'
	measure.appendChild(measureContent)
	document.body.appendChild(measure)

	let currentPage = []
	items.forEach(itemHtml => {
		const wrapper = document.createElement('div')
		wrapper.innerHTML = itemHtml
		measureContent.appendChild(wrapper)

		if (measureContent.scrollHeight > TOC_MAX_HEIGHT) {
			safeRemoveChild(measureContent, wrapper)
			if (currentPage.length) pages.push(currentPage)
			currentPage = [itemHtml]
			measureContent.innerHTML = itemHtml
		} else {
			currentPage.push(itemHtml)
		}
	})

	if (currentPage.length) pages.push(currentPage)
	safeDetachNode(measure)
	return pages
}

const paginateSectionTableRows = rowsHtml => {
	if (!rowsHtml.length) return []
	const pages = []
	const measure = document.createElement('div')
	measure.style.width = '794px'
	measure.style.position = 'absolute'
	measure.style.visibility = 'hidden'
	measure.style.top = '-9999px'

	const table = document.createElement('table')
	table.className = 'system-table'
	table.innerHTML =
		'<thead><tr><th style="width:50px">T/r</th><th>Tadbir nomi</th></tr></thead><tbody></tbody>'

	measure.appendChild(table)
	document.body.appendChild(measure)

	const tbody = table.querySelector('tbody')
	let currentPage = []

	rowsHtml.forEach(rowHtml => {
		const temp = document.createElement('tbody')
		temp.innerHTML = rowHtml
		const row = temp.firstElementChild
		if (!row) return

		tbody.appendChild(row)

		if (table.scrollHeight > SECTION_TABLE_MAX_HEIGHT) {
			safeRemoveChild(tbody, row)
			if (currentPage.length) pages.push(currentPage)
			currentPage = [rowHtml]
			tbody.innerHTML = rowHtml
		} else {
			currentPage.push(rowHtml)
		}
	})

	if (currentPage.length) pages.push(currentPage)
	safeDetachNode(measure)
	return pages
}

const chunkSystemAccountsRows = (
	rows,
	firstPageSize = 8,
	nextPageSize = 14,
) => {
	const safeRows = Array.isArray(rows) ? rows : []
	if (safeRows.length === 0) return [[]]

	const pages = []
	let i = 0
	let size = firstPageSize

	while (i < safeRows.length) {
		pages.push(safeRows.slice(i, i + size))
		i += size
		size = nextPageSize
	}

	return pages.length ? pages : [[]]
}

const areHtmlBlocksEqual = (left = [], right = []) => {
	if (!Array.isArray(left) || !Array.isArray(right)) return false
	if (left.length !== right.length) return false
	for (let i = 0; i < left.length; i++) {
		if (left[i] !== right[i]) return false
	}
	return true
}

const isMeaningfulHtmlBlock = html => {
	if (typeof html !== 'string') return false
	const raw = html.trim()
	if (!raw) return false

	try {
		const doc = new DOMParser().parseFromString(raw, 'text/html')
		const body = doc.body
		if (!body) return false

		if (
			body.querySelector(
				'img,table,svg,canvas,video,audio,iframe,object,embed,hr,input,textarea,select,button',
			)
		) {
			return true
		}

		const text = (body.textContent || '')
			.replace(/\u00a0/g, ' ')
			.replace(/[\u200B-\u200D\uFEFF]/g, '')
			.trim()
		return text.length > 0
	} catch {
		return /[^\s]/.test(raw)
	}
}

const explodeHtmlBlock = html => {
	if (typeof html !== 'string') return []
	const raw = html.trim()
	if (!raw) return []

	try {
		const container = document.createElement('div')
		container.innerHTML = raw
		const nodes = Array.from(container.childNodes)
		if (!nodes.length) return [raw]

		const out = []
		nodes.forEach(node => {
			if (node.nodeType === Node.TEXT_NODE) {
				const text = (node.textContent || '').trim()
				if (text) out.push(`<p>${text}</p>`)
				return
			}
			if (node.nodeType === Node.ELEMENT_NODE) {
				out.push(node.outerHTML)
			}
		})

		return out.length ? out : [raw]
	} catch {
		return [raw]
	}
}

const safeDetachNode = node => {
	if (!node) return
	try {
		if (typeof node.remove === 'function') {
			node.remove()
			return
		}
	} catch {}
	try {
		if (node.parentNode) {
			node.parentNode.removeChild(node)
		}
	} catch {}
}

const safeRemoveChild = (parent, child) => {
	if (!parent || !child) return
	try {
		if (child.parentNode === parent) {
			parent.removeChild(child)
			return
		}
	} catch {}
	try {
		if (typeof child.remove === 'function') {
			child.remove()
		}
	} catch {}
}

const safeInsertBefore = (parent, node, beforeNode = null) => {
	if (!parent || !node) return false
	try {
		if (beforeNode && beforeNode.parentNode === parent) {
			parent.insertBefore(node, beforeNode)
			return true
		}
		parent.appendChild(node)
		return true
	} catch {
		try {
			parent.appendChild(node)
			return true
		} catch {
			return false
		}
	}
}

const safePrepend = (parent, node) => {
	if (!parent || !node) return false
	const ref = parent.firstChild
	return safeInsertBefore(parent, node, ref)
}

const normalizeMeaningfulText = value =>
	(value || '')
		.replace(/\u00a0/g, ' ')
		.replace(/[\u200B-\u200D\uFEFF]/g, '')
		.trim()

const hasMeaningfulDomContent = root => {
	if (!root) return false
	if (
		root.querySelector?.(
			'img,table,svg,canvas,video,audio,iframe,object,embed,input,textarea,select,button,hr',
		)
	) {
		return true
	}
	const text = normalizeMeaningfulText(root.textContent || '')
	return text.length > 0
}

const installInsertBeforeFailsafe = () => {
	if (typeof window === 'undefined' || typeof Node === 'undefined') return
	const proto = Node?.prototype
	if (!proto || typeof proto.insertBefore !== 'function') return
	if (proto.__wordInsertBeforeFailsafeInstalled) return

	const originalInsertBefore = proto.insertBefore
	Object.defineProperty(proto, '__wordInsertBeforeFailsafeInstalled', {
		value: true,
		configurable: true,
		enumerable: false,
		writable: false,
	})

	proto.insertBefore = function patchedInsertBefore(newNode, referenceNode) {
		try {
			if (referenceNode != null && referenceNode.parentNode !== this) {
				return this.appendChild(newNode)
			}
			return originalInsertBefore.call(this, newNode, referenceNode)
		} catch (error) {
			if (error?.name === 'NotFoundError') {
				try {
					return this.appendChild(newNode)
				} catch {}
			}
			throw error
		}
	}
}

const installRemoveChildFailsafe = () => {
	if (typeof window === 'undefined' || typeof Node === 'undefined') return
	const proto = Node?.prototype
	if (!proto || typeof proto.removeChild !== 'function') return
	if (proto.__wordRemoveChildFailsafeInstalled) return

	const originalRemoveChild = proto.removeChild
	Object.defineProperty(proto, '__wordRemoveChildFailsafeInstalled', {
		value: true,
		configurable: true,
		enumerable: false,
		writable: false,
	})

	proto.removeChild = function patchedRemoveChild(childNode) {
		try {
			if (!childNode) {
				return originalRemoveChild.call(this, childNode)
			}
			if (childNode.parentNode !== this) {
				if (childNode.parentNode) {
					try {
						return childNode.parentNode.removeChild(childNode)
					} catch {}
				}
				return childNode
			}
			return originalRemoveChild.call(this, childNode)
		} catch (error) {
			if (error?.name === 'NotFoundError') {
				try {
					if (childNode?.parentNode) {
						return childNode.parentNode.removeChild(childNode)
					}
				} catch {}
				return childNode
			}
			throw error
		}
	}
}

const extractResourceHost = (value = '') => {
	const raw = (value ?? '').toString().trim()
	const cleaned = raw
		.replace(/^[\s"]+/g, '')
		.replace(/[\s"]+$/g, '')
		.trim()
	if (!cleaned) return ''
	if (!raw) return ''
	try {
		const url =
			cleaned.startsWith('http://') || cleaned.startsWith('https://')
				? new URL(cleaned)
				: new URL(`https://${cleaned}`)
		return (url.hostname || cleaned).replace(/^www\./i, '').toLowerCase()
	} catch {
		return cleaned
			.replace(/^https?:\/\//i, '')
			.replace(/^www\./i, '')
			.replace(/\/+$/, '')
			.toLowerCase()
	}
}

const normalizeResourceLabel = value => {
	const host = extractResourceHost(value || '')
	if (!host || host === 'umumiy') return 'Umumiy'
	return host
}

const riskLevelText = level =>
	Number(level) === 1 ? 'Yuqori' : Number(level) === 2 ? 'O‘rta' : 'Past'

const riskRowClass = level =>
	Number(level) === 1
		? 'risk-high'
		: Number(level) === 2
			? 'risk-medium'
			: 'risk-low'

const takeRiskRows = (rows, startIndex, cap) => {
	const safeRows = Array.isArray(rows) ? rows : []
	let i = Math.max(0, startIndex || 0)
	const page = []

	while (i < safeRows.length && page.length < cap) {
		const row = safeRows[i]

		// agar sahifa/ustun resource header bilan emas, vuln qatoridan boshlansa headerni takrorlab qo'yamiz
		if (page.length === 0 && row?.type === 'vuln' && row?.resourceLabel) {
			page.push({ type: 'resource', label: row.resourceLabel, repeated: true })
		}

		page.push(row)
		i++
	}

	// resource header sahifa/ustun oxirida qolib ketmasin
	if (page.length && page[page.length - 1]?.type === 'resource') {
		page.pop()
		i = Math.max(0, i - 1)
	}

	return { page, nextIndex: i }
}

const RISK_TABLE_MIN_WIDTH_PX = 480
const RISK_TABLE_DEFAULT_WIDTH_PX = 620
const RISK_FIRST_PAGE_BASE_MAX_HEIGHT_PX = 430
const RISK_CONT_PAGE_BASE_MAX_HEIGHT_PX = 560
const RISK_TABLE_BOTTOM_SAFE_GAP_PX = 22
const RISK_TABLE_BOTTOM_SAFE_GAP_EDITING_PX = 30
const RISK_TABLE_LAYOUT_TOLERANCE_PX = 22
const RISK_TABLE_LAYOUT_TOLERANCE_EDITING_PX = 32
const RISK_MEASURE_TABLE_FONT_SIZE_PX = 17
const RISK_MEASURE_DELETE_BUTTON_SIZE_PX = 32

const buildRiskMeasureRow = (row, withDeleteColumn = false) => {
	const tr = document.createElement('tr')
	const colSpan = withDeleteColumn ? 4 : 3
	if (row?.type === 'resource') {
		tr.className = 'risk-resource'
		tr.innerHTML = `<td colSpan="${colSpan}">"${row.label}" resursi</td>`
		return tr
	}

	const deleteCell = withDeleteColumn
		? `<td class="risk-delete"><span style="display:inline-flex;width:${RISK_MEASURE_DELETE_BUTTON_SIZE_PX}px;height:${RISK_MEASURE_DELETE_BUTTON_SIZE_PX}px;border-radius:9999px;"></span></td>`
		: ''

	tr.className = riskRowClass(row?.level)
	tr.innerHTML = `
		<td class="risk-level">${riskLevelText(row?.level)}</td>
		<td class="risk-name">${row?.name ?? ''}</td>
		<td class="risk-count">${row?.count ?? ''}</td>
		${deleteCell}
	`
	return tr
}

const takeRiskRowsByHeight = (
	rows,
	startIndex,
	maxHeightPx = RISK_CONT_PAGE_BASE_MAX_HEIGHT_PX,
	tableWidthPx = RISK_TABLE_DEFAULT_WIDTH_PX,
	withDeleteColumn = false,
) => {
	const safeRows = Array.isArray(rows) ? rows : []
	const startFrom = Math.max(0, startIndex || 0)
	let i = startFrom
	const out = []
	const safeTableWidth = Number.isFinite(tableWidthPx)
		? tableWidthPx
		: RISK_TABLE_DEFAULT_WIDTH_PX
	const layoutTolerance = withDeleteColumn
		? RISK_TABLE_LAYOUT_TOLERANCE_EDITING_PX
		: RISK_TABLE_LAYOUT_TOLERANCE_PX
	const safeMaxHeight = Math.max(180, Math.floor(maxHeightPx - layoutTolerance))
	let measureRoot = null

	const fallbackByCount = () => {
		const approxHeaderHeight = withDeleteColumn ? 120 : 104
		const approxRowHeight = withDeleteColumn ? 76 : 64
		const available = Math.max(120, safeMaxHeight - approxHeaderHeight)
		const cap = Math.max(1, Math.floor(available / approxRowHeight))
		return takeRiskRows(safeRows, startFrom, cap)
	}

	try {
		// hidden measure container: real stylesga yaqin bo'lishi uchun real tree klasslarini saqlaymiz
		measureRoot = document.createElement('div')
		measureRoot.className = 'word-container'
		measureRoot.style.position = 'absolute'
		measureRoot.style.visibility = 'hidden'
		measureRoot.style.top = '-9999px'
		measureRoot.style.left = '-9999px'
		measureRoot.style.pointerEvents = 'none'
		measureRoot.style.width = '0'
		measureRoot.style.height = '0'
		measureRoot.style.overflow = 'hidden'

		const measurePage = document.createElement('div')
		measurePage.className = 'a4 system-c'
		measurePage.style.width = `${Math.max(RISK_TABLE_MIN_WIDTH_PX, Math.floor(safeTableWidth))}px`
		measurePage.style.minHeight = '0'
		measurePage.style.height = 'auto'
		measurePage.style.padding = '0'
		measurePage.style.margin = '0'
		measurePage.style.background = 'none'
		measurePage.style.boxShadow = 'none'
		measurePage.style.overflow = 'visible'

		const measureContent = document.createElement('div')
		measureContent.className = 'page-content editable'
		measureContent.style.width = '100%'
		measureContent.style.height = 'auto'
		measureContent.style.minHeight = '0'
		measureContent.style.maxHeight = 'none'
		measureContent.style.margin = '0'
		measureContent.style.overflow = 'visible'

		const table = document.createElement('table')
		table.className = 'system-risk-table'
		table.style.fontSize = `${RISK_MEASURE_TABLE_FONT_SIZE_PX}px`
		table.innerHTML = `
			<thead>
				<tr>
					<th>Xavflilik darajasi</th>
					<th>Aniqlangan zaiflik</th>
					<th>Soni</th>
					${withDeleteColumn ? '<th class="risk-delete-head"></th>' : ''}
				</tr>
			</thead>
			<tbody></tbody>
		`

		measureContent.appendChild(table)
		measurePage.appendChild(measureContent)
		measureRoot.appendChild(measurePage)
		document.body.appendChild(measureRoot)

		const tbody = table.querySelector('tbody')
		const tryAppend = row => {
			const tr = buildRiskMeasureRow(row, withDeleteColumn)
			tbody.appendChild(tr)
			const ok = table.scrollHeight <= safeMaxHeight
			if (!ok) safeRemoveChild(tbody, tr)
			return ok
		}

		while (i < safeRows.length) {
			let consumedIndex = false
			let row = safeRows[i]

			// agar sahifa/ustun resource header bilan emas, vuln qatoridan boshlansa headerni takrorlaymiz
			if (out.length === 0 && row?.type === 'vuln' && row?.resourceLabel) {
				const injected = {
					type: 'resource',
					label: row.resourceLabel,
					repeated: true,
				}
				if (tryAppend(injected)) {
					out.push(injected)
				}
				// injected row index iste'mol qilinmaydi
				continue
			}

			// normal row
			consumedIndex = true
			const canFit = tryAppend(row)
			if (!canFit) {
				// hech bo'lmasa bitta row o'tishi kerak (aks holda infinite loop bo'lishi mumkin)
				if (out.length === 0) {
					// majburan qo'shamiz
					const tr = buildRiskMeasureRow(row, withDeleteColumn)
					tbody.appendChild(tr)
					out.push(row)
					i += 1
				}
				break
			}

			out.push(row)
			if (consumedIndex) i += 1
		}

		// resource header oxirida qolib ketmasin
		if (out.length && out[out.length - 1]?.type === 'resource') {
			const last = out[out.length - 1]
			out.pop()
			if (!last.repeated) i = Math.max(0, i - 1)
		}

		return { page: out, nextIndex: i }
	} catch (error) {
		if (error?.name !== 'NotFoundError') {
			console.error(
				'[word-system:risk-layout] takeRiskRowsByHeight fallback',
				error,
			)
		}
		return fallbackByCount()
	} finally {
		safeDetachNode(measureRoot)
	}
}

const chunkRiskPagesByHeight = (
	rows,
	startIndex,
	maxHeightPx = RISK_CONT_PAGE_BASE_MAX_HEIGHT_PX,
	tableWidthPx = RISK_TABLE_DEFAULT_WIDTH_PX,
	withDeleteColumn = false,
) => {
	const safeRows = Array.isArray(rows) ? rows : []
	let i = Math.max(0, startIndex || 0)
	const pages = []
	let guard = 0

	while (i < safeRows.length) {
		const page = takeRiskRowsByHeight(
			safeRows,
			i,
			maxHeightPx,
			tableWidthPx,
			withDeleteColumn,
		)
		if (!page.page.length) break
		pages.push(page.page)
		if (page.nextIndex <= i) {
			i += 1
		} else {
			i = page.nextIndex
		}
		guard += 1
		if (guard > 1000) break
	}

	return pages
}

const computeRiskLevelRowspanMeta = rows => {
	const safeRows = Array.isArray(rows) ? rows : []
	const meta = safeRows.map(() => ({ showLevel: false, rowSpan: 1 }))
	if (safeRows.length === 0) return meta

	let idx = 0
	while (idx < safeRows.length) {
		// segment boundaries: between resource header rows
		if (safeRows[idx]?.type === 'resource') {
			idx += 1
			continue
		}

		let end = idx
		while (end < safeRows.length && safeRows[end]?.type !== 'resource') end += 1

		let i = idx
		while (i < end) {
			const row = safeRows[i]
			if (row?.type !== 'vuln') {
				i += 1
				continue
			}

			const level = Number(row?.level)
			let j = i + 1
			while (
				j < end &&
				safeRows[j]?.type === 'vuln' &&
				Number(safeRows[j]?.level) === level
			) {
				j += 1
			}

			meta[i] = { showLevel: true, rowSpan: j - i }
			for (let k = i + 1; k < j; k++) meta[k] = { showLevel: false, rowSpan: 1 }

			i = j
		}

		idx = end
	}

	return meta
}

const SystemWord = () => {
	const [editing, setEditing] = useState(false)
	const loading = false
	const editingRef = useRef(false)
	const savedSelectionRef = useRef(null)
	const activeEditableRef = useRef(null)
	const activeFormatBlockRef = useRef(null)
	const selectedA4PageRef = useRef(null)
	const syncNewContentFromDomRef = useRef(null)
	const newVulnSnapshotRef = useRef([])
	const newContentFlowRefs = useRef({})
	const newContentHydratedRef = useRef(false)
	const overflowLockRef = useRef(false)
	const overflowQueueRef = useRef(false)
	const isSavingRef = useRef(false)
	const modelPaginationRef = useRef(true)
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const [expertize, setExpertize] = useState([])
	const [appName, setAppName] = useState('')
	const [orgName, setOrgName] = useState('')
	const [orgTypeName, setOrgTypeName] = useState('')
	const [contractName, setContractName] = useState('')
	const [modalOpen, setModalOpen] = useState(false)
	const [htmlContent, setHtmlContent] = useState([])
	const [highVuln, setHighVuln] = useState([])
	const [mediumVuln, setMediumVuln] = useState([])
	const [lowVuln, setLowVuln] = useState([])
	const [contractDate, setContractDate] = useState('')
	const [, setAllVuln] = useState([])
	const [newVuln, setNewVuln] = useState([])
	const [tableData, setTableData] = useState({})
	const [removedStaticPageIds, setRemovedStaticPageIds] = useState({})
	const [pages3, setPages3] = useState([])
	const [tocPages, setTocPages] = useState([])
	const [sectionTablePages, setSectionTablePages] = useState([])
	const [objectLinks, setObjectLinks] = useState(section2ObjectLinks)
	const [objectLinksText, setObjectLinksText] = useState(
		section2ObjectLinks.join('\n'),
	)
	const [systemAccountsRows, setSystemAccountsRows] = useState([])
	const [uploadedFilesMeta, setUploadedFilesMeta] = useState({})
	const fileUrlCacheRef = useRef(new Map())
	const fileDownloadInflightRef = useRef(new Map())
	const resolvedBlobUrlsRef = useRef(new Set())
	const [zoom, setZoom] = useState(100)
	const [toolbarBlock, setToolbarBlock] = useState('p')
	const [toolbarFontName, setToolbarFontName] = useState('Arial')
	const [toolbarFontSize, setToolbarFontSize] = useState(14)
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
	})
	const editorStatsRef = useRef({ words: 0, characters: 0 })
	const [workers, setWorkers] = useState()
	const [domRenderRevision, setDomRenderRevision] = useState(0)
	const [riskMeasureConfig, setRiskMeasureConfig] = useState({
		tableWidthPx: RISK_TABLE_DEFAULT_WIDTH_PX,
		firstPageMaxHeightPx: RISK_FIRST_PAGE_BASE_MAX_HEIGHT_PX,
		contPageMaxHeightPx: RISK_CONT_PAGE_BASE_MAX_HEIGHT_PX,
	})
	const imageResizeSessionRef = useRef(null)
	const NO_RESOURCE_KEY = '__no_resource__'
	const shortcutActionsRef = useRef({
		print: null,
		save: null,
		openModal: null,
		insertPage: null,
		deletePage: null,
	})

	useEffect(() => {
		installInsertBeforeFailsafe()
		installRemoveChildFailsafe()
	}, [])

	const normalizeCellValue = v => (v ?? '').toString().trim()

	const getEditableRootFromNode = useCallback(node => {
		if (!node) return null
		const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node
		if (!element || typeof element.closest !== 'function') return null
		const editableRoot = element.closest('.editable, .editable-table td')
		if (!editableRoot) return null
		if (editableRoot.getAttribute('contenteditable') === 'false') return null
		return editableRoot
	}, [])

	const getEditableRootFromRange = useCallback(
		range => {
			if (!range) return null
			return (
				getEditableRootFromNode(range.startContainer) ||
				getEditableRootFromNode(range.commonAncestorContainer)
			)
		},
		[getEditableRootFromNode],
	)

	const isRangeInEditableArea = useCallback(
		range => {
			const editableRoot = getEditableRootFromRange(range)
			if (!editableRoot) return false
			return editableRoot.getAttribute('contenteditable') !== 'false'
		},
		[getEditableRootFromRange],
	)

	const captureSelectionRange = useCallback(() => {
		if (!editingRef.current) return
		const selection = window.getSelection()
		if (!selection || selection.rangeCount === 0) return
		let range = null
		try {
			range = selection.getRangeAt(0)
		} catch {
			return
		}
		const editableRoot = getEditableRootFromRange(range)
		if (!editableRoot) return
		activeEditableRef.current = editableRoot
		if (!isRangeInEditableArea(range)) return
		savedSelectionRef.current = range.cloneRange()
	}, [getEditableRootFromRange, isRangeInEditableArea])

	const restoreSelectionRange = useCallback(() => {
		if (!editingRef.current) return false
		const selection = window.getSelection()
		if (!selection) return false

		const savedRange = savedSelectionRef.current
		if (savedRange && isRangeInEditableArea(savedRange)) {
			const editableRoot = getEditableRootFromRange(savedRange)
			if (editableRoot && typeof editableRoot.focus === 'function') {
				editableRoot.focus({ preventScroll: true })
				activeEditableRef.current = editableRoot
			}

			selection.removeAllRanges()
			try {
				selection.addRange(savedRange)
				return true
			} catch {
				// fallback below
			}
		}

		const fallbackEditable = activeEditableRef.current
		if (
			!fallbackEditable ||
			!fallbackEditable.isConnected ||
			fallbackEditable.getAttribute('contenteditable') === 'false'
		) {
			return false
		}

		if (typeof fallbackEditable.focus === 'function') {
			fallbackEditable.focus({ preventScroll: true })
		}

		try {
			const fallbackRange = document.createRange()
			fallbackRange.selectNodeContents(fallbackEditable)
			fallbackRange.collapse(false)
			selection.removeAllRanges()
			selection.addRange(fallbackRange)
			savedSelectionRef.current = fallbackRange.cloneRange()
			return true
		} catch {
			return false
		}
	}, [getEditableRootFromRange, isRangeInEditableArea])

	const findEditableFallback = useCallback(() => {
		const active = activeEditableRef.current
		if (
			active &&
			active.isConnected &&
			active.getAttribute('contenteditable') !== 'false'
		) {
			return active
		}
		const firstEditable = document.querySelector(
			'.editable-table td[contenteditable="true"], .page-content.editable[contenteditable="true"], .editable[contenteditable="true"]',
		)
		return firstEditable || null
	}, [])

	const focusEditableRoot = useCallback(editableRoot => {
		if (!editableRoot || !editableRoot.isConnected) return false
		if (editableRoot.getAttribute('contenteditable') === 'false') return false
		if (typeof editableRoot.focus === 'function') {
			try {
				editableRoot.focus({ preventScroll: true })
			} catch {
				editableRoot.focus()
			}
		}
		activeEditableRef.current = editableRoot
		return true
	}, [])

	const ensureEditorSelection = useCallback(() => {
		if (!editingRef.current) return false
		if (restoreSelectionRange()) return true

		const editableRoot = findEditableFallback()
		if (!editableRoot) return false
		if (!focusEditableRoot(editableRoot)) return false

		const selection = window.getSelection()
		if (!selection) return false
		try {
			const range = document.createRange()
			range.selectNodeContents(editableRoot)
			range.collapse(false)
			selection.removeAllRanges()
			selection.addRange(range)
			savedSelectionRef.current = range.cloneRange()
			return true
		} catch {
			return false
		}
	}, [findEditableFallback, focusEditableRoot, restoreSelectionRange])

	const findFormatBlockForRange = useCallback(range => {
		if (!range) return null
		let node =
			range.startContainer?.nodeType === Node.TEXT_NODE
				? range.startContainer.parentElement
				: range.startContainer
		if (!(node instanceof Element)) return null

		while (node) {
			if (
				node.matches?.(
					'p,div,li,blockquote,h1,h2,h3,h4,h5,h6,td,th,figcaption,span',
				)
			) {
				const blockedContainer =
					node.classList?.contains('system-two-col-flow') ||
					node.classList?.contains('page-content') ||
					node.classList?.contains('editable') ||
					node.classList?.contains('new-content')
				if (!blockedContainer) {
					return node
				}
			}
			node = node.parentElement
		}

		return null
	}, [])

	const resolveActiveFormatBlock = useCallback(
		range => {
			let block = findFormatBlockForRange(range)
			if (block?.isConnected) return block

			const cachedBlock = activeFormatBlockRef.current
			if (cachedBlock?.isConnected) return cachedBlock

			const editableRoot =
				getEditableRootFromRange(range) ||
				activeEditableRef.current ||
				findEditableFallback()
			if (!(editableRoot instanceof HTMLElement)) return null

			block = editableRoot.querySelector(
				'p,div,li,blockquote,h1,h2,h3,h4,h5,h6,td,th,figcaption,span',
			)
			return block || editableRoot
		},
		[findEditableFallback, findFormatBlockForRange, getEditableRootFromRange],
	)

	const applyBlockStyleFallback = useCallback(
		(range, command, value = null) => {
			const block = resolveActiveFormatBlock(range)
			if (!block) return false
			activeFormatBlockRef.current = block

			const computed = window.getComputedStyle(block)
			const decorationParts = new Set(
				(computed.textDecorationLine || '')
					.split(' ')
					.map(part => part.trim())
					.filter(Boolean),
			)

			const toggleDecoration = key => {
				if (decorationParts.has(key)) {
					decorationParts.delete(key)
				} else {
					decorationParts.add(key)
				}
				const next =
					Array.from(decorationParts).filter(Boolean).join(' ') || 'none'
				block.style.textDecorationLine = next
				return true
			}

			const weightValue = Number.parseInt(computed.fontWeight || '400', 10)

			switch (command) {
				case 'justifyLeft':
					block.style.textAlign = 'left'
					return true
				case 'justifyCenter':
					block.style.textAlign = 'center'
					return true
				case 'justifyRight':
					block.style.textAlign = 'right'
					return true
				case 'justifyFull':
					block.style.textAlign = 'justify'
					return true
				case 'italic':
					block.style.fontStyle =
						computed.fontStyle === 'italic' ? 'normal' : 'italic'
					return true
				case 'bold':
					block.style.fontWeight =
						Number.isFinite(weightValue) && weightValue >= 600 ? '400' : '700'
					return true
				case 'underline':
					return toggleDecoration('underline')
				case 'strikeThrough':
					return toggleDecoration('line-through')
				case 'foreColor':
					if (!value) return false
					block.style.color = String(value)
					return true
				case 'hiliteColor':
				case 'backColor':
					if (!value) return false
					block.style.backgroundColor = String(value)
					return true
				case 'fontName':
					if (!value) return false
					block.style.fontFamily = String(value)
					return true
				case 'fontSize': {
					if (value == null || value === '') return false
					const fontSizeMap = {
						1: 10,
						2: 11,
						3: 12,
						4: 14,
						5: 16,
						6: 18,
						7: 20,
						8: 24,
						9: 30,
						10: 36,
					}
					const parsed = Number.parseInt(String(value), 10)
					const px = fontSizeMap[parsed] || parsed
					if (!Number.isFinite(px) || px <= 0) return false
					block.style.fontSize = `${Math.max(8, Math.min(96, px))}px`
					return true
				}
				default:
					return false
			}
		},
		[resolveActiveFormatBlock],
	)

	const ensureNewContentCaretAnchor = useCallback(
		(pageContent, options = {}) => {
			if (!pageContent || !pageContent.classList?.contains('new-content')) {
				return false
			}
			const flow =
				pageContent.querySelector('.system-two-col-flow') || pageContent
			if (!flow) return false

			if (!hasMeaningfulDomContent(flow)) {
				let anchor = flow.querySelector(
					'.word-caret-anchor[data-caret-anchor="true"]',
				)
				if (!anchor) {
					anchor = document.createElement('p')
					anchor.className = 'system-paragraph word-caret-anchor'
					anchor.setAttribute('data-caret-anchor', 'true')
					anchor.innerHTML = '<br />'
					flow.appendChild(anchor)
				}

				focusEditableRoot(pageContent)
				const selection = window.getSelection()
				if (!selection) return true
				try {
					const range = document.createRange()
					range.selectNodeContents(anchor)
					range.collapse(options?.collapseToStart !== false)
					selection.removeAllRanges()
					selection.addRange(range)
					savedSelectionRef.current = range.cloneRange()
					activeEditableRef.current = pageContent
				} catch {}
				return true
			}

			return false
		},
		[focusEditableRoot],
	)

	const updateEditorStats = useCallback((options = {}) => {
		const force = Boolean(options?.force)
		if (editingRef.current && !force) return
		const allPageContents = Array.from(
			document.querySelectorAll('.page-content'),
		)
		const text = allPageContents
			.map(el => (el?.innerText || '').trim())
			.filter(Boolean)
			.join(' ')
			.replace(/\s+/g, ' ')
			.trim()

		const words = text ? text.split(' ').length : 0
		const characters = text.length
		editorStatsRef.current = { words, characters }
	}, [])

	const readCommandState = useCallback(command => {
		try {
			return document.queryCommandState(command)
		} catch {
			return false
		}
	}, [])

	const getToolbarSnapshot = useCallback(
		() => ({
			bold: readCommandState('bold'),
			italic: readCommandState('italic'),
			underline: readCommandState('underline'),
			strike: readCommandState('strikeThrough'),
			alignLeft: readCommandState('justifyLeft'),
			alignCenter: readCommandState('justifyCenter'),
			alignRight: readCommandState('justifyRight'),
			alignJustify: readCommandState('justifyFull'),
			unorderedList: readCommandState('insertUnorderedList'),
			orderedList: readCommandState('insertOrderedList'),
		}),
		[readCommandState],
	)

	const syncToolbarState = useCallback(
		(options = {}) => {
			const force = Boolean(options?.force)
			if (!editingRef.current && !force) return
			const next = getToolbarSnapshot()
			setToolbarState(prev => {
				const same = Object.keys(next).every(key => prev[key] === next[key])
				return same ? prev : { ...prev, ...next }
			})
		},
		[getToolbarSnapshot],
	)

	const runEditorCommand = useCallback(
		(command, value = null) => {
			if (!editingRef.current) return false

			let activeRange = null
			const liveSelection = window.getSelection()
			if (liveSelection && liveSelection.rangeCount > 0) {
				try {
					const liveRange = liveSelection.getRangeAt(0)
					if (isRangeInEditableArea(liveRange)) {
						activeRange = liveRange
						savedSelectionRef.current = liveRange.cloneRange()
						const editableRoot = getEditableRootFromRange(liveRange)
						if (editableRoot) {
							activeEditableRef.current = editableRoot
						}
					}
				} catch {
					activeRange = null
				}
			}

			if (!activeRange) {
				const activeEditable = findEditableFallback()
				if (activeEditable) {
					focusEditableRoot(activeEditable)
				}
			}

			const hasSelection = activeRange ? true : ensureEditorSelection()
			if (!hasSelection) return false
			if (!activeRange) {
				const restoredSelection = window.getSelection()
				if (restoredSelection && restoredSelection.rangeCount > 0) {
					try {
						activeRange = restoredSelection.getRangeAt(0)
					} catch {
						activeRange = null
					}
				}
			}
			try {
				document.execCommand('styleWithCSS', false, true)
			} catch {
				// noop
			}

			let commandApplied = false
			try {
				commandApplied = document.execCommand(command, false, value)
			} catch {
				commandApplied = false
			}

			if (!commandApplied && command === 'hiliteColor') {
				try {
					commandApplied = document.execCommand('backColor', false, value)
				} catch {
					commandApplied = false
				}
			}

			if (activeRange) {
				const forceFallbackCommands = new Set([
					'justifyLeft',
					'justifyCenter',
					'justifyRight',
					'justifyFull',
					'italic',
					'bold',
					'underline',
					'strikeThrough',
					'foreColor',
					'hiliteColor',
					'backColor',
					'fontName',
					'fontSize',
				])
				if (forceFallbackCommands.has(command) || !commandApplied) {
					const fallbackApplied = applyBlockStyleFallback(
						activeRange,
						command,
						value,
					)
					commandApplied = commandApplied || fallbackApplied
				}
			}

			captureSelectionRange()
			syncToolbarState({ force: true })
			updateEditorStats({ force: true })
			return commandApplied
		},
		[
			captureSelectionRange,
			applyBlockStyleFallback,
			ensureEditorSelection,
			findEditableFallback,
			focusEditableRoot,
			getEditableRootFromRange,
			isRangeInEditableArea,
			syncToolbarState,
			updateEditorStats,
		],
	)

	const clampZoom = value => Math.min(150, Math.max(75, value))
	const handleZoomChange = value => setZoom(clampZoom(value))

	const handleInsertLink = () => {
		if (!editingRef.current) return
		ensureEditorSelection()
		const linkValue = window.prompt('Havolani kiriting (https://...)')
		if (!linkValue) return
		runEditorCommand('createLink', linkValue.trim())
	}

	useEffect(() => {
		editingRef.current = editing
		if (!editing) {
			savedSelectionRef.current = null
			activeEditableRef.current = null
			activeFormatBlockRef.current = null
			selectedA4PageRef.current = null
		}
	}, [editing])

	useEffect(() => {
		const raf = window.requestAnimationFrame(() => {
			updateEditorStats({ force: !editing })
		})
		return () => window.cancelAnimationFrame(raf)
	}, [pages3, htmlContent, editing, updateEditorStats])

	useEffect(() => {
		if (!editing) return

		const syncActiveEditable = () => {
			const selection = window.getSelection()
			if (!selection || selection.rangeCount === 0) return
			let range = null
			try {
				range = selection.getRangeAt(0)
			} catch {
				return
			}
			const editableRoot = getEditableRootFromRange(range)
			if (editableRoot) {
				activeEditableRef.current = editableRoot
			}
			const block = findFormatBlockForRange(range)
			if (block) {
				activeFormatBlockRef.current = block
			}
		}

		const onSelectionChange = () => {
			captureSelectionRange()
			syncActiveEditable()
		}
		const onMouseUp = () => {
			captureSelectionRange()
			syncActiveEditable()
			syncToolbarState()
		}
		const onKeyUp = () => {
			captureSelectionRange()
			syncActiveEditable()
			syncToolbarState()
		}
		const onFocusIn = event => {
			const editableRoot = getEditableRootFromNode(event.target)
			if (editableRoot) {
				activeEditableRef.current = editableRoot
				ensureNewContentCaretAnchor(editableRoot, {
					collapseToStart: false,
				})
			}
		}
		const onNewContentMouseDownCapture = event => {
			const target = event.target
			if (!(target instanceof Element)) return
			const newContentPage = target.closest(
				'.page-content.editable.new-content',
			)
			if (!newContentPage) return

			const flow =
				newContentPage.querySelector('.system-two-col-flow') || newContentPage
			if (hasMeaningfulDomContent(flow)) return

			event.preventDefault()
			ensureNewContentCaretAnchor(newContentPage, { collapseToStart: false })
		}
		const onToolbarMouseDownCapture = event => {
			const target = event.target
			if (!(target instanceof Element)) return
			if (!target.closest('.print-btns')) return
			captureSelectionRange()
		}
		const onAnyPageMouseDownCapture = event => {
			const target = event.target
			if (!(target instanceof Element)) return
			const pageEl = target.closest('.word-pages .a4')
			if (!pageEl) return
			selectedA4PageRef.current = pageEl
		}

		document.addEventListener('selectionchange', onSelectionChange)
		document.addEventListener('mouseup', onMouseUp)
		document.addEventListener('keyup', onKeyUp)
		document.addEventListener('focusin', onFocusIn)
		document.addEventListener('mousedown', onNewContentMouseDownCapture, true)
		document.addEventListener('mousedown', onToolbarMouseDownCapture, true)
		document.addEventListener('mousedown', onAnyPageMouseDownCapture, true)
		return () => {
			document.removeEventListener('selectionchange', onSelectionChange)
			document.removeEventListener('mouseup', onMouseUp)
			document.removeEventListener('keyup', onKeyUp)
			document.removeEventListener('focusin', onFocusIn)
			document.removeEventListener(
				'mousedown',
				onNewContentMouseDownCapture,
				true,
			)
			document.removeEventListener('mousedown', onToolbarMouseDownCapture, true)
			document.removeEventListener('mousedown', onAnyPageMouseDownCapture, true)
		}
	}, [
		captureSelectionRange,
		editing,
		ensureNewContentCaretAnchor,
		findFormatBlockForRange,
		getEditableRootFromNode,
		getEditableRootFromRange,
		syncToolbarState,
	])

	const computeRowSpanMeta = (rows, key) => {
		const meta = rows.map((_, idx) => ({
			rowSpan: 1,
			hidden: false,
			start: idx,
			end: idx,
		}))

		for (let i = 0; i < rows.length; i++) {
			if (meta[i].hidden) continue
			const value = normalizeCellValue(rows[i]?.[key])
			if (!value) continue

			let j = i + 1
			while (j < rows.length && normalizeCellValue(rows[j]?.[key]) === value) {
				meta[j].hidden = true
				j++
			}

			meta[i].rowSpan = j - i
			for (let k = i; k < j; k++) {
				meta[k].start = i
				meta[k].end = j - 1
			}

			i = j - 1
		}

		return meta
	}

	const systemAccountsPages = useMemo(() => {
		// NOTE: row height wrap bo‘lishi mumkin, shuning uchun hozircha stabil bo‘lishi uchun
		// qator-soni bo‘yicha bo‘lamiz (Worddagi kabi keyingi sahifaga o‘tadi, yo‘qolib qolmaydi).
		return chunkSystemAccountsRows(systemAccountsRows, 6, 14)
	}, [systemAccountsRows])

	const systemAccountsPageStarts = useMemo(() => {
		const starts = []
		let acc = 0
		for (const pageRows of systemAccountsPages) {
			starts.push(acc)
			acc += pageRows.length
		}
		return starts
	}, [systemAccountsPages])

	const addSystemAccountsRow = () => {
		setSystemAccountsRows(prev => [
			...prev,
			{ role: '', url: '', login: '', password: '' },
		])
	}

	const deleteSystemAccountsRow = rowIdx => {
		setSystemAccountsRows(prev => prev.filter((_, i) => i !== rowIdx))
	}

	const updateSystemAccountsCell = (rowIdx, field, value, range) => {
		setSystemAccountsRows(prev => {
			if (!prev[rowIdx]) return prev
			const next = prev.map(r => ({ ...r }))

			if (
				range &&
				Number.isInteger(range.start) &&
				Number.isInteger(range.end) &&
				range.start >= 0 &&
				range.end < next.length
			) {
				for (let i = range.start; i <= range.end; i++) {
					next[i] = { ...next[i], [field]: value }
				}
				return next
			}

			next[rowIdx] = { ...next[rowIdx], [field]: value }
			return next
		})
	}

	const renderSystemAccountsTable = ({
		pageRows,
		globalStartIndex,
		showAddButton = false,
	}) => {
		const roleMeta = computeRowSpanMeta(pageRows, 'role')
		const urlMeta = computeRowSpanMeta(pageRows, 'url')

		return (
			<>
				<table
					className='system-table system-table-compact'
					contentEditable={false}
				>
					<thead>
						<tr>
							<th style={{ width: '50px' }}>T/r</th>
							<th style={{ width: '140px' }}>Rol</th>
							<th>URL manzil</th>
							<th style={{ width: '140px' }}>Login</th>
							<th style={{ width: '140px' }}>Parol</th>
							{editing && <th style={{ width: '48px' }}></th>}
						</tr>
					</thead>
					<tbody>
						{pageRows.map((row, idx) => {
							const globalIdx = globalStartIndex + idx
							const rMeta = roleMeta[idx]
							const uMeta = urlMeta[idx]

							return (
								<tr key={globalIdx}>
									<td>{globalIdx + 1}.</td>

									{!rMeta?.hidden && (
										<td rowSpan={rMeta?.rowSpan || 1}>
											{editing ? (
												<textarea
													value={row.role}
													onChange={e =>
														updateSystemAccountsCell(
															globalIdx,
															'role',
															e.target.value,
															rMeta?.rowSpan > 1
																? {
																		start: globalStartIndex + rMeta.start,
																		end: globalStartIndex + rMeta.end,
																	}
																: undefined,
														)
													}
													onInput={e => {
														e.target.style.height = 'auto'
														e.target.style.height = `${e.target.scrollHeight}px`
													}}
													rows={1}
													className='w-full bg-transparent outline-none resize-none overflow-hidden'
													placeholder='Rol'
												/>
											) : (
												row.role
											)}
										</td>
									)}

									{!uMeta?.hidden && (
										<td rowSpan={uMeta?.rowSpan || 1}>
											{editing ? (
												<textarea
													value={row.url}
													onChange={e =>
														updateSystemAccountsCell(
															globalIdx,
															'url',
															e.target.value,
															uMeta?.rowSpan > 1
																? {
																		start: globalStartIndex + uMeta.start,
																		end: globalStartIndex + uMeta.end,
																	}
																: undefined,
														)
													}
													onInput={e => {
														e.target.style.height = 'auto'
														e.target.style.height = `${e.target.scrollHeight}px`
													}}
													rows={1}
													className='w-full bg-transparent outline-none resize-none overflow-hidden'
													placeholder='https://...'
												/>
											) : (
												<u>{row.url}</u>
											)}
										</td>
									)}

									<td>
										{editing ? (
											<textarea
												value={row.login}
												onChange={e =>
													updateSystemAccountsCell(
														globalIdx,
														'login',
														e.target.value,
													)
												}
												onInput={e => {
													e.target.style.height = 'auto'
													e.target.style.height = `${e.target.scrollHeight}px`
												}}
												rows={1}
												className='w-full bg-transparent outline-none resize-none overflow-hidden'
												placeholder='Login'
											/>
										) : (
											row.login
										)}
									</td>
									<td>
										{editing ? (
											<textarea
												value={row.password}
												onChange={e =>
													updateSystemAccountsCell(
														globalIdx,
														'password',
														e.target.value,
													)
												}
												onInput={e => {
													e.target.style.height = 'auto'
													e.target.style.height = `${e.target.scrollHeight}px`
												}}
												rows={1}
												className='w-full bg-transparent outline-none resize-none overflow-hidden'
												placeholder='Parol'
											/>
										) : (
											row.password
										)}
									</td>

									{editing && (
										<td contentEditable={false}>
											<button
												type='button'
												onClick={() => deleteSystemAccountsRow(globalIdx)}
												className='w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center'
												title='Qatorni o‘chirish'
											>
												<iconify-icon
													icon='material-symbols:delete'
													width='18'
													height='18'
												/>
											</button>
										</td>
									)}
								</tr>
							)
						})}
					</tbody>
				</table>

				{editing && showAddButton && (
					<div className='mt-2 flex justify-end' contentEditable={false}>
						<button
							type='button'
							onClick={addSystemAccountsRow}
							className='w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow'
							title='Qator qo‘shish'
						>
							<iconify-icon
								icon='material-symbols:add'
								width='20'
								height='20'
							/>
						</button>
					</div>
				)}
			</>
		)
	}

	const { stRef } = useZirhStref()

	const printRef = useRef(null)
	const { id } = useParams()

	const handlePrint = useReactToPrint({
		contentRef: printRef,
		documentTitle: `${appName}-${Date.now()}`,
	})

	const startIndex = htmlContent.findIndex(p =>
		p.includes(
			'2.2. Android mobil ilovasi ekspertizasi natijalari bo‘yicha batafsil izoh',
		),
	)

	const sectionTableRowHtml = useMemo(
		() =>
			section3TableRows.map((row, index) =>
				buildSectionTableRowHtml(row, index),
			),
		[],
	)

	const parsePx = value => {
		const parsed = Number.parseFloat(value)
		return Number.isFinite(parsed) ? parsed : 0
	}

	const resolveSystemPageMetrics = useCallback(pageEl => {
		if (!pageEl) return null
		const pageContent = pageEl.querySelector('.page-content')
		if (!pageContent) return null
		const contentBottomSafeGap = 30

		const pageStyle = window.getComputedStyle(pageEl)
		const pageHeight = pageEl.clientHeight
		const paddingTop = parsePx(pageStyle.paddingTop)
		const paddingBottom = parsePx(pageStyle.paddingBottom)
		const topImg = pageEl.querySelector('.system-top-img')
		const bottomImg = pageEl.querySelector('.system-bottom-img')
		const pageNumber = pageEl.querySelector('.page-number')

		let topBoundary = paddingTop
		if (topImg) {
			const topImageBottom = topImg.offsetTop + topImg.offsetHeight + 10
			if (topImageBottom > topBoundary) topBoundary = topImageBottom
		}

		let bottomBoundary = pageHeight - paddingBottom
		if (bottomImg) {
			const bottomImageTop = bottomImg.offsetTop - contentBottomSafeGap
			if (bottomImageTop < bottomBoundary) bottomBoundary = bottomImageTop
		}
		if (pageNumber) {
			const pageNumberTop = pageNumber.offsetTop - contentBottomSafeGap
			if (pageNumberTop < bottomBoundary) bottomBoundary = pageNumberTop
		}

		const maxHeight = Math.max(180, Math.floor(bottomBoundary - topBoundary))
		const marginTop = Math.max(0, Math.floor(topBoundary - paddingTop))

		return { maxHeight, marginTop }
	}, [])

	const applySystemPageContentMetrics = useCallback(() => {
		const pages = Array.from(document.querySelectorAll('.a4.system-c'))
		pages.forEach(pageEl => {
			const pageContent = pageEl.querySelector('.page-content')
			if (!pageContent) return
			const metrics = resolveSystemPageMetrics(pageEl)
			if (!metrics) return
			pageEl.style.setProperty(
				'--system-page-content-height',
				`${metrics.maxHeight}px`,
			)
			pageEl.style.setProperty(
				'--system-page-content-offset-top',
				`${metrics.marginTop}px`,
			)
			pageContent.dataset.pageMaxHeight = String(metrics.maxHeight)
			pageContent.style.overflow = 'hidden'
		})
	}, [resolveSystemPageMetrics])

	const refreshRiskMeasureConfig = useCallback(() => {
		// Editing vaqtida React re-renderni minimal ushlaymiz.
		// Aks holda contentEditable DOM bilan React reconciler urilib ketadi.
		if (editingRef.current) return
		const tables = Array.from(document.querySelectorAll('.system-risk-table'))
		if (!tables.length) return
		const safeBottomGap = editing
			? RISK_TABLE_BOTTOM_SAFE_GAP_EDITING_PX
			: RISK_TABLE_BOTTOM_SAFE_GAP_PX
		const layoutTolerance = editing
			? RISK_TABLE_LAYOUT_TOLERANCE_EDITING_PX
			: RISK_TABLE_LAYOUT_TOLERANCE_PX

		const pickByLabel = marker =>
			tables.find(table => {
				const labelEl = table
					.closest('.page-content')
					?.querySelector('.system-table-label')
				const label = (labelEl?.textContent || '').toLowerCase()
				return label.includes(marker)
			})

		const firstRiskTable = pickByLabel('3-jadval') || tables[0]
		const contRiskTable = pickByLabel('davomi') || null

		const resolveBlockHeight = (table, fallback) => {
			if (!table) return fallback
			const pageContent = table.closest('.page-content')
			if (!pageContent) return fallback
			const pageMaxHeight = Number(pageContent.dataset.pageMaxHeight || 0)
			const contentHeight =
				Number.isFinite(pageMaxHeight) && pageMaxHeight > 0
					? pageMaxHeight
					: pageContent.clientHeight
			const tableRect = table.getBoundingClientRect()
			const contentRect = pageContent.getBoundingClientRect()
			const usedBefore = Math.max(0, tableRect.top - contentRect.top)
			const available =
				contentHeight - usedBefore - safeBottomGap - layoutTolerance
			return Math.max(220, Math.floor(available))
		}

		const tableWidthSource =
			firstRiskTable?.clientWidth ||
			firstRiskTable?.closest('.page-content')?.clientWidth ||
			RISK_TABLE_DEFAULT_WIDTH_PX
		const tableWidthPx = Math.max(
			RISK_TABLE_MIN_WIDTH_PX,
			Math.floor(tableWidthSource),
		)

		const firstPageMaxHeightPx = resolveBlockHeight(
			firstRiskTable,
			RISK_FIRST_PAGE_BASE_MAX_HEIGHT_PX,
		)
		const contPageMaxHeightPx = resolveBlockHeight(
			contRiskTable,
			RISK_CONT_PAGE_BASE_MAX_HEIGHT_PX,
		)

		setRiskMeasureConfig(prev => {
			if (editingRef.current) return prev
			if (
				prev.tableWidthPx === tableWidthPx &&
				prev.firstPageMaxHeightPx === firstPageMaxHeightPx &&
				prev.contPageMaxHeightPx === contPageMaxHeightPx
			) {
				return prev
			}
			return {
				tableWidthPx,
				firstPageMaxHeightPx,
				contPageMaxHeightPx,
			}
		})
	}, [editing])

	const queueRiskLayoutRefresh = useCallback(() => {
		window.requestAnimationFrame(() => {
			applySystemPageContentMetrics()
			refreshRiskMeasureConfig()
			window.requestAnimationFrame(() => {
				applySystemPageContentMetrics()
				refreshRiskMeasureConfig()
			})
		})
	}, [applySystemPageContentMetrics, refreshRiskMeasureConfig])

	const renumberSystemPageFooters = useCallback(() => {
		const pagesWithFooter = Array.from(
			document.querySelectorAll('.word-pages .a4'),
		).filter(page => page.querySelector('.page-number'))
		if (!pagesWithFooter.length) return

		let startNumber = 1

		for (let i = 0; i < pagesWithFooter.length; i++) {
			const labelEl =
				pagesWithFooter[i].querySelector('.page-number span') ||
				pagesWithFooter[i].querySelector('.page-number')
			const text = (labelEl?.textContent || '').trim()
			const match = text.match(/(\d+)\s*$/)
			if (!match) continue
			const parsed = Number.parseInt(match[1], 10)
			if (!Number.isFinite(parsed)) continue
			startNumber = Math.max(1, parsed - i)
			break
		}

		pagesWithFooter.forEach((page, idx) => {
			const pageNum = startNumber + idx
			const labelEl =
				page.querySelector('.page-number span') ||
				page.querySelector('.page-number')
			if (labelEl) {
				labelEl.textContent = `${appName} | ${pageNum}`
			}

			const topImg = page.querySelector('.system-top-img')
			const bottomImg = page.querySelector('.system-bottom-img')
			if (!topImg || !bottomImg) return
			const isEven = pageNum % 2 === 0
			topImg.src = isEven
				? '/assets/system/ax-tops.png'
				: '/assets/system/ax-top.png'
			bottomImg.src = isEven
				? '/assets/system/ax-bottoms.jpg'
				: '/assets/system/ax-bottom.jpg'
		})
	}, [appName])

	useEffect(() => {
		if (!document?.fonts?.ready) return
		let cancelled = false
		document.fonts.ready.then(() => {
			if (cancelled) return
			queueRiskLayoutRefresh()
		})
		return () => {
			cancelled = true
		}
	}, [queueRiskLayoutRefresh])

	const createNewA4Page = (
		withNewContentStructure = false,
		insertBeforePage = null,
	) => {
		const wordContainer =
			document.querySelector('.word-pages') ||
			document.querySelector('.word-container')
		if (!wordContainer) return null

		const existingPages = Array.from(wordContainer.querySelectorAll('.a4'))
		let pageNumber = existingPages.length + 1
		const shouldInsertBefore =
			insertBeforePage && insertBeforePage.parentNode === wordContainer
		if (shouldInsertBefore) {
			const insertIndex = existingPages.indexOf(insertBeforePage)
			if (insertIndex >= 0) {
				pageNumber = insertIndex + 1
			}
		}

		const newPage = document.createElement('div')
		newPage.className = 'a4 system-c auto-generated-page'
		newPage.dataset.autoGenerated = 'true'
		const useEvenSkin = pageNumber % 2 === 0
		const topSrc = useEvenSkin
			? '/assets/system/ax-tops.png'
			: '/assets/system/ax-top.png'
		const bottomSrc = useEvenSkin
			? '/assets/system/ax-bottoms.jpg'
			: '/assets/system/ax-bottom.jpg'

		const topImage = document.createElement('img')
		topImage.className = 'system-top-img w-full min-w-full'
		topImage.src = topSrc
		topImage.alt = ''
		newPage.appendChild(topImage)

		const bottomImage = document.createElement('img')
		bottomImage.className = 'system-bottom-img w-full min-w-full'
		bottomImage.src = bottomSrc
		bottomImage.alt = ''
		newPage.appendChild(bottomImage)

		const pageContent = document.createElement('div')
		pageContent.className = withNewContentStructure
			? 'page-content editable new-content'
			: 'page-content editable'
		newPage.appendChild(pageContent)
		if (withNewContentStructure) {
			const flow = document.createElement('div')
			flow.className = 'system-two-col-flow'
			pageContent.appendChild(flow)
		}

		const pageNumber_div = document.createElement('div')
		pageNumber_div.className =
			'page-number flex justify-center mt-auto text-white items-center'
		pageNumber_div.style.bottom = '40px'
		pageNumber_div.innerHTML = `<span class="text-white max-w-[60%] mt-[20px]">${appName} | ${pageNumber}</span>`
		newPage.appendChild(pageNumber_div)

		if (shouldInsertBefore) {
			safeInsertBefore(wordContainer, newPage, insertBeforePage)
		} else {
			wordContainer.appendChild(newPage)
		}
		applySystemPageContentMetrics()
		renumberSystemPageFooters()

		const editables = document.querySelectorAll('.editable')
		editables.forEach(el => {
			el.contentEditable = editing
			el.style.outline = 'none'
			el.style.boxShadow = editing
				? 'inset 0 0 0 1px rgba(79, 70, 229, 0.22)'
				: 'none'
		})

		return newPage
	}
	const handlePageOverflow = () => {
		if (isSavingRef.current) return
		if (modelPaginationRef.current) {
			syncNewContentFromDomRef.current?.({ force: true })
			applySystemPageContentMetrics()
			renumberSystemPageFooters()
			return
		}
		if (overflowLockRef.current) {
			overflowQueueRef.current = true
			return
		}
		overflowLockRef.current = true
		try {
			applySystemPageContentMetrics()
			let didMutateLayout = false
			const readPageMaxHeight = pageContent => {
				if (!pageContent) return 850
				const dataHeight = Number(pageContent.dataset.pageMaxHeight || 0)
				if (Number.isFinite(dataHeight) && dataHeight > 0) return dataHeight
				const measured = pageContent.clientHeight
				if (Number.isFinite(measured) && measured > 0) return measured
				const fallback = Number.parseFloat(
					window.getComputedStyle(pageContent).maxHeight,
				)
				return Number.isFinite(fallback) && fallback > 0 ? fallback : 850
			}
			const isElementMeaningful = el => {
				if (!el) return false
				const tag = (el.tagName || '').toLowerCase()
				if (tag === 'br') return false
				if (
					el.querySelector?.(
						'img,table,svg,canvas,video,audio,iframe,object,embed,input,textarea,select,button,hr',
					)
				) {
					return true
				}
				const txt = (el.textContent || '').replace(/\u00a0/g, ' ').trim()
				return txt.length > 0
			}
			const pageHasMeaningfulContent = pageContent => {
				if (!pageContent) return false
				const target =
					pageContent.querySelector('.system-two-col-flow') || pageContent
				if (!target) return false

				const hasElementContent = Array.from(target.children).some(child =>
					isElementMeaningful(child),
				)
				if (hasElementContent) return true

				return Array.from(target.childNodes).some(
					node =>
						node?.nodeType === Node.TEXT_NODE &&
						(node.textContent || '').replace(/\u00a0/g, ' ').trim().length > 0,
				)
			}
			const ensureNewContentFlow = pageContent => {
				if (!pageContent) return null
				let flow = pageContent.querySelector('.system-two-col-flow')
				if (!flow) {
					flow = document.createElement('div')
					flow.className = 'system-two-col-flow'
					pageContent.appendChild(flow)
				}

				// Browser ba'zan .new-content ichiga flow dan tashqariga node qo'shib yuboradi.
				// Ularni oqim konteyneriga qaytarib joylaymiz.
				Array.from(pageContent.childNodes).forEach(node => {
					if (node === flow) return
					flow.appendChild(node)
				})
				return flow
			}
			const getNewContentEntries = () =>
				Array.from(
					document.querySelectorAll(
						'.word-pages .a4 .page-content.editable.new-content',
					),
				)
					.map(pageContent => {
						const flow = ensureNewContentFlow(pageContent)
						return flow ? { pageContent, flow } : null
					})
					.filter(Boolean)

			const cleanupAutoGeneratedPages = () => {
				if (editingRef.current) return false
				let removed = false
				const autoPages = Array.from(
					document.querySelectorAll(
						'.a4.auto-generated-page[data-auto-generated="true"]',
					),
				)
				autoPages.forEach(pageEl => {
					if (pageEl.dataset.manualInserted === 'true') return
					const pageContent = pageEl.querySelector('.page-content')
					if (
						!pageContent ||
						!pageContent.classList.contains('editable') ||
						!pageContent.classList.contains('new-content')
					) {
						safeDetachNode(pageEl)
						removed = true
						return
					}
					if (!pageHasMeaningfulContent(pageContent)) {
						safeDetachNode(pageEl)
						removed = true
					}
				})
				return removed
			}
			const splitSingleTextBlock = (
				blockEl,
				pageContent,
				maxHeight,
				nextTarget,
			) => {
				if (!blockEl || !pageContent || !nextTarget) return false
				const tag = (blockEl.tagName || '').toLowerCase()
				const supported = [
					'p',
					'div',
					'li',
					'blockquote',
					'h1',
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
				]
				if (!supported.includes(tag)) return false
				if (blockEl.querySelector('img,table,ul,ol,video,audio,iframe,canvas'))
					return false
				if (blockEl.children.length > 0) return false

				const originalText = blockEl.textContent || ''
				if (originalText.trim().length < 2) return false

				let low = 1
				let high = originalText.length - 1
				let best = 0

				while (low <= high) {
					const mid = Math.floor((low + high) / 2)
					blockEl.textContent = originalText.slice(0, mid)
					if (pageContent.scrollHeight <= maxHeight) {
						best = mid
						low = mid + 1
					} else {
						high = mid - 1
					}
				}

				if (best <= 0 || best >= originalText.length) {
					blockEl.textContent = originalText
					return false
				}

				let splitIndex = best
				const wsIndex = originalText.lastIndexOf(' ', best)
				if (wsIndex > Math.floor(best * 0.5)) {
					splitIndex = wsIndex
				}

				const leftText = originalText.slice(0, splitIndex).trimEnd()
				const rightText = originalText.slice(splitIndex).trimStart()
				if (!leftText || !rightText) {
					blockEl.textContent = originalText
					return false
				}

				blockEl.textContent = leftText
				const remainder = blockEl.cloneNode(true)
				remainder.textContent = rightText
				safePrepend(nextTarget, remainder)
				return true
			}
			const moveTailFromGenericContainer = (sourceEl, nextTarget) => {
				if (!sourceEl || !nextTarget) return false
				if (!(sourceEl instanceof Element)) return false
				if (sourceEl.closest('.system-two-col,.system-risk-columns'))
					return false
				if (
					sourceEl.classList.contains('system-two-col') ||
					sourceEl.classList.contains('system-risk-columns') ||
					sourceEl.classList.contains('system-col')
				) {
					return false
				}
				const tag = (sourceEl.tagName || '').toLowerCase()
				if (['table', 'tbody', 'thead', 'tr'].includes(tag)) return false
				const last = sourceEl.lastElementChild
				if (!last) return false
				if (
					(tag === 'ul' || tag === 'ol') &&
					(last.tagName || '').toLowerCase() === 'li'
				) {
					const listTail = sourceEl.cloneNode(false)
					listTail.appendChild(last)
					safePrepend(nextTarget, listTail)
					return true
				}
				safePrepend(nextTarget, last)
				return true
			}

			let pass = 0
			while (pass < 8) {
				let changedInPass = false
				let entries = getNewContentEntries()
				if (!entries.length) break

				for (let pageIndex = 0; pageIndex < entries.length; pageIndex++) {
					const { pageContent, flow } = entries[pageIndex]
					if (!pageContent || !flow) continue
					const maxHeight = readPageMaxHeight(pageContent)

					let guard = 0
					while (pageContent.scrollHeight > maxHeight + 1 && guard < 120) {
						const children = Array.from(flow.children)
						if (!children.length) break
						const overflowChild = children[children.length - 1]
						if (!overflowChild) break

						entries = getNewContentEntries()
						const currentIdx = entries.findIndex(
							item => item.pageContent === pageContent,
						)
						let nextEntry =
							currentIdx >= 0 ? (entries[currentIdx + 1] ?? null) : null

						if (!nextEntry) {
							const currentPageEl = pageContent.closest('.a4')
							const directNext = currentPageEl?.nextElementSibling || null
							const inserted = createNewA4Page(true, directNext)
							if (!inserted) break
							didMutateLayout = true
							applySystemPageContentMetrics()
							entries = getNewContentEntries()
							const idxAfterInsert = entries.findIndex(
								item => item.pageContent === pageContent,
							)
							nextEntry =
								idxAfterInsert >= 0
									? (entries[idxAfterInsert + 1] ?? null)
									: null
							if (!nextEntry) break
						}

						const nextFlow = nextEntry.flow
						if (!nextFlow) break

						const splitDone = splitSingleTextBlock(
							overflowChild,
							pageContent,
							maxHeight,
							nextFlow,
						)
						if (splitDone) {
							changedInPass = true
							didMutateLayout = true
							guard += 1
							continue
						}

						const nestedMoveDone = moveTailFromGenericContainer(
							overflowChild,
							nextFlow,
						)
						if (nestedMoveDone) {
							changedInPass = true
							didMutateLayout = true
							guard += 1
							continue
						}

						const blockHeight =
							overflowChild.getBoundingClientRect().height ||
							overflowChild.offsetHeight ||
							0
						const onlyOneBlock = children.length === 1
						const nextIsEmpty = !nextFlow.firstElementChild
						const unbreakableAndTooTall =
							onlyOneBlock &&
							nextIsEmpty &&
							blockHeight > 0 &&
							blockHeight > maxHeight - 6
						if (unbreakableAndTooTall) {
							break
						}

						safePrepend(nextFlow, overflowChild)
						changedInPass = true
						didMutateLayout = true
						guard += 1
					}
				}

				entries = getNewContentEntries()
				for (let pageIndex = 0; pageIndex < entries.length - 1; pageIndex++) {
					const current = entries[pageIndex]
					const next = entries[pageIndex + 1]
					const maxHeight = readPageMaxHeight(current.pageContent)
					let liftGuard = 0

					while (next.flow.firstElementChild && liftGuard < 80) {
						const candidate = next.flow.firstElementChild
						current.flow.appendChild(candidate)
						if (current.pageContent.scrollHeight <= maxHeight + 1) {
							changedInPass = true
							didMutateLayout = true
							liftGuard += 1
							continue
						}
						safeRemoveChild(current.flow, candidate)
						safePrepend(next.flow, candidate)
						break
					}
				}

				if (!changedInPass) break
				pass += 1
			}
			// Overflow bo‘lganda .new-content DOM o‘zgaradi — state ni sinxronlash (re-render da yo‘qolmaslik uchun)
			const removedAutoPages = cleanupAutoGeneratedPages()
			if (removedAutoPages) {
				didMutateLayout = true
			}
			// Editing vaqtida React re-renderini qo'zg'amaslik uchun state sync qilmaymiz.
			// Save paytida kontent DOM dan to'g'ridan-to'g'ri olinadi.
			if (didMutateLayout && !editingRef.current) {
				syncNewContentFromDomRef.current?.()
			}
			applySystemPageContentMetrics()
			renumberSystemPageFooters()
		} catch (error) {
			if (error?.name !== 'NotFoundError') {
				console.error('[word-system:overflow] layout error', error)
			}
			overflowQueueRef.current = true
		} finally {
			overflowLockRef.current = false
			if (overflowQueueRef.current && !isSavingRef.current) {
				overflowQueueRef.current = false
				requestAnimationFrame(() => {
					handlePageOverflow()
				})
			}
		}
	}

	useEffect(() => {
		let raf = window.requestAnimationFrame(() => {
			applySystemPageContentMetrics()
			refreshRiskMeasureConfig()
		})

		const onResize = () => {
			window.cancelAnimationFrame(raf)
			raf = window.requestAnimationFrame(() => {
				applySystemPageContentMetrics()
				refreshRiskMeasureConfig()
				if (editingRef.current) {
					handlePageOverflow()
				}
			})
		}

		window.addEventListener('resize', onResize)
		return () => {
			window.cancelAnimationFrame(raf)
			window.removeEventListener('resize', onResize)
		}
	}, [
		applySystemPageContentMetrics,
		refreshRiskMeasureConfig,
		editing,
		zoom,
		pages3,
		sectionTablePages,
		systemAccountsRows,
		highVuln,
		mediumVuln,
		lowVuln,
	])

	useEffect(() => {
		const raf = window.requestAnimationFrame(() => {
			renumberSystemPageFooters()
		})
		return () => {
			window.cancelAnimationFrame(raf)
		}
	}, [
		renumberSystemPageFooters,
		appName,
		editing,
		zoom,
		pages3,
		domRenderRevision,
	])

	const handleImageResize = () => {
		const images = document.querySelectorAll('.page-content img')
		images.forEach(img => {
			const pageContent = img.closest('.page-content')
			if (pageContent) {
				const maxWidth = 500
				if (img.width > maxWidth) {
					const aspectRatio = img.height / img.width
					img.style.width = maxWidth + 'px'
					img.style.height = maxWidth * aspectRatio + 'px'
				}
			}
		})
	}

	useEffect(() => {
		applySystemPageContentMetrics()
		refreshRiskMeasureConfig()
		const editables = document.querySelectorAll('.editable')

		const syncImageEditingStyles = () => {
			const images = document.querySelectorAll(
				'.page-content img, .editable-table td img',
			)
			images.forEach(img => {
				img.dataset.resizable = 'true'
				img.style.cursor = editingRef.current ? 'nwse-resize' : 'default'
				img.style.border = editingRef.current ? '1px dashed #aaa' : 'none'
				img.style.userSelect = 'none'
				img.style.touchAction = editingRef.current ? 'none' : 'auto'
			})
		}

		syncImageEditingStyles()
		if (editing) {
			syncImageEditingStyles()
		}
		let overflowFrame = null
		let modelSyncTimer = null
		const resolveEditableOverflowState = target => {
			const pageContent =
				target && typeof target.closest === 'function'
					? target.closest('.page-content')
					: null
			if (!pageContent) {
				return { isOverflowing: false, hasLargeFreeSpace: false }
			}
			const dataHeight = Number(pageContent.dataset.pageMaxHeight || 0)
			const maxHeight =
				Number.isFinite(dataHeight) && dataHeight > 0
					? dataHeight
					: pageContent.clientHeight
			if (!maxHeight) {
				return { isOverflowing: false, hasLargeFreeSpace: false }
			}
			const diff = pageContent.scrollHeight - maxHeight
			return {
				isOverflowing: diff > 1,
				hasLargeFreeSpace: diff < -80,
			}
		}
		const scheduleOverflow = (force = false) => {
			if (!force) return
			if (isSavingRef.current) return
			if (overflowFrame !== null) return
			overflowFrame = requestAnimationFrame(() => {
				overflowFrame = null
				handlePageOverflow()
			})
		}
		const scheduleModelSync = () => {
			if (modelSyncTimer !== null) {
				window.clearTimeout(modelSyncTimer)
			}
			modelSyncTimer = window.setTimeout(() => {
				modelSyncTimer = null
				syncNewContentFromDomRef.current?.({ force: true })
			}, 320)
		}

		const handleInput = e => {
			handleImageResize()
			syncImageEditingStyles()
			updateEditorStats()
			const inputType = e?.inputType || ''
			const targetEditable = e?.currentTarget
			const isNewContentEditable = Boolean(
				targetEditable instanceof HTMLElement &&
				targetEditable.classList.contains('new-content'),
			)
			const isStructureMutation =
				inputType === 'insertParagraph' ||
				inputType === 'insertLineBreak' ||
				inputType.startsWith('delete')
			const { isOverflowing, hasLargeFreeSpace } = resolveEditableOverflowState(
				e?.currentTarget,
			)
			const shouldRebalance =
				inputType.startsWith('delete') && hasLargeFreeSpace
			const isTypingInput =
				inputType === 'insertText' || inputType === 'insertCompositionText'
			const isCaretSensitiveEdit =
				isTypingInput ||
				inputType === 'insertParagraph' ||
				inputType === 'insertLineBreak' ||
				inputType.startsWith('delete') ||
				inputType === 'insertReplacementText'

			// Model pagination yoqilganida har bir Enter/Delete da state sync qilish caretni
			// qayta render sababli abzas boshiga olib ketadi. Bu holatda DOM ni saqlab,
			// sync ni blur/save/explicit action paytiga qoldiramiz.
			if (
				modelPaginationRef.current &&
				isNewContentEditable &&
				isCaretSensitiveEdit
			) {
				return
			}

			const shouldSyncForOverflow = isOverflowing && !isTypingInput
			const shouldSyncModel =
				isStructureMutation ||
				shouldSyncForOverflow ||
				shouldRebalance ||
				inputType.startsWith('insertFromPaste') ||
				inputType.startsWith('insertFromDrop') ||
				inputType === 'historyUndo' ||
				inputType === 'historyRedo'
			if (shouldSyncModel) {
				if (isNewContentEditable) {
					scheduleModelSync()
				}
			}
			scheduleOverflow(isNewContentEditable && shouldSyncModel)
		}

		const handleBlur = e => {
			const target = e?.currentTarget
			if (!(target instanceof HTMLElement)) return
			if (!target.classList.contains('new-content')) return
			syncNewContentFromDomRef.current?.({ force: true })
		}

		const extractImageSrcFromHtml = html => {
			if (!html || typeof html !== 'string') return ''
			try {
				const doc = new DOMParser().parseFromString(html, 'text/html')
				const img = doc.querySelector('img[src]')
				const src = (img?.getAttribute('src') || '').trim()
				return src
			} catch {
				return ''
			}
		}

		const dataUrlToImageFile = async dataUrl => {
			const response = await fetch(dataUrl)
			const blob = await response.blob()
			const safeType = blob?.type || 'image/png'
			const ext = safeType.includes('png')
				? 'png'
				: safeType.includes('jpeg') || safeType.includes('jpg')
					? 'jpg'
					: safeType.includes('webp')
						? 'webp'
						: 'png'
			return new File([blob], `paste-${Date.now()}.${ext}`, { type: safeType })
		}

		const insertPastedImage = (
			clipboardFile,
			editableRoot,
			previewSrc = null,
		) => {
			imageLog('insertPastedImage', {
				hasFile: Boolean(clipboardFile),
				fileName: clipboardFile?.name,
				fileType: clipboardFile?.type,
				fileSize: clipboardFile?.size,
				hasPreviewSrc: Boolean(previewSrc),
			})
			const imgElement = document.createElement('img')
			if (imgElement.dataset.pasteInit === 'true') return
			imgElement.dataset.pasteInit = 'true'

			imgElement.addEventListener(
				'load',
				() => {
					const maxWidth = 500
					if (imgElement.width > maxWidth) {
						const aspectRatio = imgElement.height / imgElement.width
						imgElement.style.width = maxWidth + 'px'
						imgElement.style.height = maxWidth * aspectRatio + 'px'
					} else {
						imgElement.style.width = imgElement.width + 'px'
						imgElement.style.height = imgElement.height + 'px'
					}

					imgElement.style.cursor = 'nwse-resize'
					imgElement.style.display = 'inline-block'
					imgElement.style.border = '1px solid #ddd'
					imgElement.style.margin = '10px auto'
					imgElement.style.userSelect = 'none'
					imgElement.className = 'resizable-image'

					setTimeout(() => {
						const selection = window.getSelection()
						const wrapper = document.createElement('span')
						wrapper.className = 'system-pasted-image-wrap'
						wrapper.style.display = 'block'
						wrapper.style.textAlign = 'center'
						wrapper.style.margin = '10px 0'
						wrapper.appendChild(imgElement)
						const targetInsertContainer =
							editableRoot?.querySelector?.('.system-two-col-flow') ||
							editableRoot
						const canUseSelectionRange = Boolean(
							selection &&
							selection.rangeCount > 0 &&
							editableRoot &&
							editableRoot.contains(
								selection.getRangeAt(0).commonAncestorContainer,
							),
						)
						if (canUseSelectionRange) {
							const range = selection.getRangeAt(0)
							range.insertNode(wrapper)
							range.setStartAfter(wrapper)
							range.collapse(true)
							selection.removeAllRanges()
							selection.addRange(range)
						} else if (targetInsertContainer) {
							targetInsertContainer.appendChild(wrapper)
						}
						// new-content sahifada rasm .page-content ostida qolmasin, flow ichida bo‘lsin
						if (editableRoot?.classList?.contains('new-content')) {
							const flow = editableRoot.querySelector('.system-two-col-flow')
							if (flow && wrapper.parentElement === editableRoot) {
								flow.appendChild(wrapper)
							}
						}
						if (clipboardFile) {
							Promise.resolve()
								.then(() => handlePasteImage(clipboardFile, imgElement))
								.catch(err =>
									imageLogError('insertPastedImage upload failed', err),
								)
						}

						editables.forEach(el => {
							void el.offsetHeight
						})

						setTimeout(() => {
							if (imgElement && imgElement.parentNode) {
								imgElement.style.cursor = editing ? 'nwse-resize' : 'default'
								imgElement.style.border = editing ? '1px solid #ddd' : 'none'
								imgElement.style.margin = '10px auto'
							}

							syncImageEditingStyles()
							handlePageOverflow()
						}, 300)
					}, 50)
				},
				{ once: true },
			)

			if (previewSrc) {
				imageLog('insertPastedImage set preview src')
				imgElement.src = previewSrc
				return
			}

			if (!clipboardFile) {
				imageLogError('insertPastedImage skipped: file missing and no preview')
				return
			}
			// Previewni data URL emas, blob URL orqali ko'rsatamiz
			const blobUrl = URL.createObjectURL(clipboardFile)
			imgElement.src = blobUrl
		}

		const handlePaste = async e => {
			const clipboard = e.clipboardData || e.originalEvent?.clipboardData
			const items = Array.from(clipboard?.items || [])
			const imageFiles = []
			imageLog('handlePaste start', {
				itemsCount: items.length,
				filesCount: Array.from(clipboard?.files || []).length,
			})

			items.forEach(item => {
				if (item?.kind !== 'file') return
				if (!item?.type?.startsWith('image/')) return
				const file = item.getAsFile()
				if (file) imageFiles.push(file)
			})

			if (!imageFiles.length) {
				const fallbackFiles = Array.from(clipboard?.files || []).filter(file =>
					file?.type?.startsWith('image/'),
				)
				imageFiles.push(...fallbackFiles)
			}

			if (imageFiles.length) {
				e.preventDefault()
				// Joyni darhol saqlaymiz — keyin selection yo‘qoladi
				const targetEditable = e.currentTarget
				const targetInsertContainer =
					targetEditable?.querySelector?.('.system-two-col-flow') ||
					targetEditable
				const selection = window.getSelection()
				const savedRange =
					selection && selection.rangeCount > 0
						? selection.getRangeAt(0).cloneRange()
						: null

				imageLog(
					'handlePaste image files found',
					imageFiles.map(file => ({
						name: file?.name,
						type: file?.type,
						size: file?.size,
					})),
				)
				// word/index.jsx dagi kabi: FileReader → img.onload → setTimeout 50 insert → setTimeout 300 resize + overflow
				imageFiles.forEach(file => {
					const blobUrl = URL.createObjectURL(file)
					const imgElement = document.createElement('img')
					imgElement.src = blobUrl
					imgElement.onload = () => {
						const maxWidth = 500
						if (imgElement.width > maxWidth) {
							const aspectRatio = imgElement.height / imgElement.width
							imgElement.style.width = maxWidth + 'px'
							imgElement.style.height = maxWidth * aspectRatio + 'px'
						} else {
							imgElement.style.width = imgElement.width + 'px'
							imgElement.style.height = imgElement.height + 'px'
						}
						imgElement.style.cursor = 'nwse-resize'
						imgElement.style.display = 'inline-block'
						imgElement.style.border = '1px solid #ddd'
						imgElement.style.margin = '10px auto'
						imgElement.style.userSelect = 'none'
						imgElement.className = 'resizable-image'

						setTimeout(() => {
							const wrapper = document.createElement('span')
							wrapper.className = 'system-pasted-image-wrap'
							wrapper.style.display = 'block'
							wrapper.style.textAlign = 'center'
							wrapper.style.margin = '10px 0'
							wrapper.appendChild(imgElement)
							try {
								const canUseSavedRange = Boolean(
									savedRange &&
									savedRange.startContainer?.isConnected &&
									targetEditable &&
									targetEditable.contains(savedRange.commonAncestorContainer),
								)
								if (canUseSavedRange) {
									savedRange.insertNode(wrapper)
									savedRange.setStartAfter(wrapper)
									savedRange.collapse(true)
									if (selection) {
										selection.removeAllRanges()
										selection.addRange(savedRange)
									}
								} else {
									if (targetInsertContainer?.isConnected) {
										targetInsertContainer.appendChild(wrapper)
									} else {
										document
											.querySelector(
												'.page-content.editable.new-content .system-two-col-flow, .page-content.editable',
											)
											?.appendChild(wrapper)
									}
								}
							} catch {
								if (targetInsertContainer?.isConnected) {
									targetInsertContainer.appendChild(wrapper)
								} else {
									document
										.querySelector(
											'.page-content.editable.new-content .system-two-col-flow, .page-content.editable',
										)
										?.appendChild(wrapper)
								}
							}
							// new-content sahifada rasm .page-content ostida qolmasin, flow ichida bo‘lsin
							if (targetEditable?.classList?.contains('new-content')) {
								const flow = targetEditable.querySelector('.system-two-col-flow')
								if (flow && wrapper.parentElement === targetEditable) {
									flow.appendChild(wrapper)
								}
							}
							editables.forEach(el => {
								void el.offsetHeight
							})
							setTimeout(() => {
								if (imgElement && imgElement.parentNode) {
									imgElement.style.cursor = editingRef.current
										? 'nwse-resize'
										: 'default'
									imgElement.style.border = editingRef.current
										? '1px solid #ddd'
										: 'none'
									imgElement.style.margin = '10px auto'
								}
								syncImageEditingStyles()
								handlePageOverflow()
								if (file && imgElement) {
									Promise.resolve()
										.then(() => handlePasteImage(file, imgElement))
										.catch(err =>
											imageLogError('handlePaste upload failed', err),
										)
								}
							}, 300)
						}, 50)
					}
				})
				return
			}

			const htmlPayload = clipboard?.getData?.('text/html') || ''
			const htmlImageSrc = extractImageSrcFromHtml(htmlPayload)
			if (htmlImageSrc) {
				e.preventDefault()
				imageLog('handlePaste html image payload detected')
				let fileFromHtml = null
				if (htmlImageSrc.startsWith('data:image/')) {
					try {
						fileFromHtml = await dataUrlToImageFile(htmlImageSrc)
					} catch {}
				}
				insertPastedImage(fileFromHtml, e.currentTarget, htmlImageSrc)
				return
			}
			imageLog('handlePaste no image payload detected')

			setTimeout(() => {
				handlePageOverflow()
			}, 50)
		}

		editables.forEach(el => {
			el.contentEditable = editing
			el.style.outline = 'none'
			el.style.boxShadow = editing
				? 'inset 0 0 0 1px rgba(79, 70, 229, 0.22)'
				: 'none'
			if (el.classList.contains('new-content')) {
				el.style.overflowY = editing ? 'auto' : 'hidden'
			}

			if (editing) {
				el.addEventListener('input', handleInput)
				el.addEventListener('paste', handlePaste)
				el.addEventListener('blur', handleBlur)
				syncImageEditingStyles()
			} else {
				el.removeEventListener('input', handleInput)
				el.removeEventListener('paste', handlePaste)
				el.removeEventListener('blur', handleBlur)
			}
		})

		// Table cell'larini ham contentEditable qilish
		const tableCells = document.querySelectorAll('.editable-table td')
		tableCells.forEach(cell => {
			cell.contentEditable = editing
			if (editing) {
				cell.style.outline = '1px dashed #4f46e5'
				if (cell._pasteHandler) {
					cell.removeEventListener('paste', cell._pasteHandler)
					delete cell._pasteHandler
				}

				// Table cells'ga paste handler qo'shish
				const handleTableCellPaste = async e => {
					const clipboard = e.clipboardData || e.originalEvent?.clipboardData
					const items = Array.from(clipboard?.items || [])
					const imageFiles = []
					imageLog('handleTableCellPaste start', {
						itemsCount: items.length,
						filesCount: Array.from(clipboard?.files || []).length,
					})

					items.forEach(item => {
						if (item?.kind !== 'file') return
						if (!item?.type?.startsWith('image/')) return
						const file = item.getAsFile()
						if (file) imageFiles.push(file)
					})

					if (!imageFiles.length) {
						const fallbackFiles = Array.from(clipboard?.files || []).filter(
							file => file?.type?.startsWith('image/'),
						)
						imageFiles.push(...fallbackFiles)
					}

					const insertImageToCell = (file, previewSrc = null) => {
						imageLog('insertImageToCell', {
							hasFile: Boolean(file),
							fileName: file?.name,
							fileType: file?.type,
							fileSize: file?.size,
							hasPreviewSrc: Boolean(previewSrc),
						})
						const imgElement = document.createElement('img')
						imgElement.style.maxWidth = '100%'
						imgElement.style.height = 'auto'
						imgElement.style.display = 'block'
						imgElement.style.margin = '5px 0'

						const targetCell = e.currentTarget
						const selection = window.getSelection()
						if (
							selection &&
							selection.rangeCount > 0 &&
							targetCell &&
							targetCell.contains(
								selection.getRangeAt(0).commonAncestorContainer,
							)
						) {
							const range = selection.getRangeAt(0)
							range.insertNode(imgElement)
							range.setStartAfter(imgElement)
							range.collapse(true)
							selection.removeAllRanges()
							selection.addRange(range)
						} else if (targetCell) {
							targetCell.appendChild(imgElement)
						}
						if (file) {
							Promise.resolve()
								.then(() => handlePasteImage(file, imgElement))
								.catch(err =>
									imageLogError('insertImageToCell upload failed', err),
								)
						}
						setTimeout(() => {
							handlePageOverflow()
						}, 50)

						if (previewSrc) {
							imgElement.src = previewSrc
							return
						}

						if (!file) return
						const blobUrl = URL.createObjectURL(file)
						imgElement.src = blobUrl
					}

					if (imageFiles.length) {
						e.preventDefault()
						imageLog(
							'handleTableCellPaste image files found',
							imageFiles.map(file => ({
								name: file?.name,
								type: file?.type,
								size: file?.size,
							})),
						)
						imageFiles.forEach(file => insertImageToCell(file))
						return
					}

					const htmlPayload = clipboard?.getData?.('text/html') || ''
					const htmlImageSrc = extractImageSrcFromHtml(htmlPayload)
					if (htmlImageSrc) {
						e.preventDefault()
						imageLog('handleTableCellPaste html image payload detected')
						let fileFromHtml = null
						if (htmlImageSrc.startsWith('data:image/')) {
							try {
								fileFromHtml = await dataUrlToImageFile(htmlImageSrc)
							} catch {}
						}
						insertImageToCell(fileFromHtml, htmlImageSrc)
						return
					}
					imageLog('handleTableCellPaste no image payload detected')

					setTimeout(() => {
						handlePageOverflow()
					}, 50)
				}

				cell._pasteHandler = handleTableCellPaste
				cell.addEventListener('paste', handleTableCellPaste)
			} else {
				cell.style.outline = 'none'
				if (cell._pasteHandler) {
					cell.removeEventListener('paste', cell._pasteHandler)
					delete cell._pasteHandler
				}
			}
		})

		return () => {
			editables.forEach(el => {
				el.removeEventListener('input', handleInput)
				el.removeEventListener('paste', handlePaste)
				el.removeEventListener('blur', handleBlur)
				el.style.boxShadow = 'none'
			})
			if (overflowFrame !== null) {
				cancelAnimationFrame(overflowFrame)
				overflowFrame = null
			}
			if (modelSyncTimer !== null) {
				window.clearTimeout(modelSyncTimer)
				modelSyncTimer = null
			}
			const allCells = document.querySelectorAll('.editable-table td')
			allCells.forEach(cell => {
				if (cell._pasteHandler) {
					cell.removeEventListener('paste', cell._pasteHandler)
					delete cell._pasteHandler
				}
			})
		}
	}, [
		editing,
		updateEditorStats,
		applySystemPageContentMetrics,
		refreshRiskMeasureConfig,
	])

	useEffect(() => {
		const strongElements = document.querySelectorAll('.page-content strong')

		strongElements.forEach(el => {
			const text = el.textContent?.trim() || ''
			if (
				text === 'Yuqori' ||
				text === 'Past' ||
				text === 'O‘rta' ||
				text === 'Ma’lumot uchun' ||
				text === 'Xavflilik darajasi:' ||
				text.includes('.apk') ||
				text.includes('.ipa') ||
				text.includes('[android:usesCleartextTraffic=false]') ||
				text.includes('CWE') ||
				text.includes('MASWE')
			) {
				const tdParent = el.closest('td')
				if (!tdParent) {
					el.classList.add('strongstyle')
				}
			} else if (
				text === 'Ekspluatatsiya oqibatlari' ||
				text === 'Tavsiyalar'
			) {
				if (!el.closest('td')) {
					el.classList.add('teststrong')
				}
			}
		})
	}, [pages3, domRenderRevision])

	useEffect(() => {
		const handleKeyDown = e => {
			if (!editing) return
			const targetEl = e.target instanceof Element ? e.target : null
			const tagName = targetEl?.tagName?.toLowerCase() || ''
			if (
				tagName === 'textarea' ||
				tagName === 'input' ||
				tagName === 'select' ||
				tagName === 'button'
			) {
				return
			}

			const targetEditable =
				targetEl && typeof targetEl.closest === 'function'
					? targetEl.closest('.editable, .editable-table td')
					: null
			const selection = window.getSelection()
			let selectionEditable = null
			if (selection && selection.rangeCount > 0) {
				let range = null
				try {
					range = selection.getRangeAt(0)
				} catch {
					range = null
				}
				if (range) {
					selectionEditable = getEditableRootFromRange(range)
				}
			}

			const activeEditable = targetEditable || selectionEditable
			if (
				!activeEditable ||
				activeEditable.getAttribute('contenteditable') === 'false'
			) {
				return
			}
			activeEditableRef.current = activeEditable

			const tryRemoveEmptyDynamicPage = () => {
				if (e.key !== 'Backspace') return false
				if (e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return false
				if (!selection || selection.rangeCount === 0) return false

				let range = null
				try {
					range = selection.getRangeAt(0)
				} catch {
					range = null
				}
				if (!range || !range.collapsed) return false

				const currentPageContent =
					activeEditable.closest?.('.page-content') || null
				if (!currentPageContent) return false
				if (!currentPageContent.classList.contains('editable')) return false
				if (!currentPageContent.classList.contains('new-content')) return false

				const currentFlow =
					currentPageContent.querySelector('.system-two-col-flow') ||
					currentPageContent
				if (hasMeaningfulDomContent(currentFlow)) return false

				e.preventDefault()
				return Boolean(shortcutActionsRef.current.deletePage?.())
			}

			if (tryRemoveEmptyDynamicPage()) {
				return
			}

			if (e.ctrlKey) {
				const key = e.key.toLowerCase()
				if (['e', 'l', 'r', 'j'].includes(key)) e.preventDefault()

				switch (key) {
					case 'e':
						runEditorCommand('justifyCenter')
						break
					case 'l':
						runEditorCommand('justifyLeft')
						break
					case 'r':
						runEditorCommand('justifyRight')
						break
					case 'j':
						// Apply justify alignment using both execCommand and CSS for better compatibility
						runEditorCommand('justifyFull')
						// Also apply CSS text-align for better cross-browser support
						if (selection && selection.rangeCount > 0) {
							const range = selection.getRangeAt(0)
							const container = range.commonAncestorContainer
							const block =
								container.nodeType === Node.TEXT_NODE
									? container.parentElement?.closest(
											'p, div, li, h1, h2, h3, h4, h5, h6',
										)
									: container.closest('p, div, li, h1, h2, h3, h4, h5, h6')

							if (block) {
								block.style.textAlign = 'justify'
							}
						}
						break
				}
			}

			// Handle Shift+Backspace key - move content back to previous page
			if (e.shiftKey && e.key === 'Backspace') {
				e.preventDefault()

				if (selection && selection.rangeCount > 0) {
					const range = selection.getRangeAt(0)
					const currentPageContent =
						range.commonAncestorContainer.nodeType === Node.TEXT_NODE
							? range.commonAncestorContainer.parentElement.closest(
									'.page-content',
								)
							: range.commonAncestorContainer.closest('.page-content')

					if (currentPageContent) {
						// Find current and previous page
						const currentPage = currentPageContent.closest('.a4')
						const allPages = Array.from(document.querySelectorAll('.a4'))
						const currentPageIndex = allPages.indexOf(currentPage)

						if (currentPageIndex > 0) {
							const prevPage = allPages[currentPageIndex - 1]
							const prevPageContent = prevPage.querySelector('.page-content')

							if (prevPageContent && currentPageContent.children.length > 0) {
								// Get first child from current page
								const firstChild = currentPageContent.firstChild
								if (firstChild) {
									// Move it to previous page's end
									const clonedChild = firstChild.cloneNode(true)
									prevPageContent.appendChild(clonedChild)

									// Remove from current page
									firstChild.remove()
								}
							}
						}
					}
				}
			}

			if (e.key === 'Tab') {
				e.preventDefault()
				if (!selection || !selection.rangeCount) return
				const range = selection.getRangeAt(0)
				const tabNode = document.createTextNode(
					'\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0',
				)
				range.insertNode(tabNode)
				range.setStartAfter(tabNode)
				range.collapse(true)
				selection.removeAllRanges()
				selection.addRange(range)
				if (!modelPaginationRef.current) {
					setTimeout(() => {
						handlePageOverflow()
					}, 10)
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [
		editing,
		getEditableRootFromRange,
		runEditorCommand,
		applySystemPageContentMetrics,
		renumberSystemPageFooters,
		queueRiskLayoutRefresh,
	])

	const getExpertById = async () => {
		try {
			const res = await sendRpcRequest(stRef, METHOD.ORDER_GET_ID, { 1: id })
			console.log(res[1])
			if (res.status === METHOD.OK) {
				let fallbackRiskTable = null
				setContractDate(formatDate(res[1]?.[2][1]))
				setHtmlContent(res[1]?.[8])
				setContractName(res[1]?.[10])
				setOrgTypeName(res[1]?.[1][6])
				setOrgName(res[1]?.[1][0])
				setAppName(res[1]?.[1][3])
				setExpertize(res[1]?.[1])
				setWorkers(res[1][7])
				setRemovedStaticPageIds({})
				const raw = res[1]?.[13]
				const rawFiles = res[1]?.[15]

				const normalizeFilesMeta = rf => {
					const list = Array.isArray(rf) ? rf : rf ? [rf] : []
					const out = {}
					list
						.flat()
						.filter(Boolean)
						.forEach(it => {
							const fileId = it?.[1] ?? it?.['1']
							const size = it?.[2] ?? it?.['2']
							if (!fileId) return
							const fid = String(fileId)
							const sz = Number(size)
							out[fid] = Number.isFinite(sz) ? sz : undefined
							out[`files/${fid.replace(/^files\//i, '')}`] = Number.isFinite(sz)
								? sz
								: undefined
						})
					return out
				}

				setUploadedFilesMeta(normalizeFilesMeta(rawFiles))

				// Field 8 ning 0-indexidan table ma'lumotlarini va qolganini paged sifatida olish
				const field8Data = res[1]?.[8] || []
				let vulnData = field8Data

				// Agar field 8 array bo'lsa va 0-index string bo'lsa, bu table va links ma'lumotlari
				if (
					Array.isArray(field8Data) &&
					field8Data.length > 0 &&
					typeof field8Data[0] === 'string'
				) {
					try {
						const dataFromField8 = JSON.parse(field8Data[0])
						// Yangi format: { tables: {...}, objectLinks: [...] }
						if (dataFromField8.tables && dataFromField8.objectLinks) {
							setTableData(dataFromField8.tables)
							setObjectLinks(dataFromField8.objectLinks)
							setObjectLinksText(dataFromField8.objectLinks.join('\n'))
							if (Array.isArray(dataFromField8.systemAccountsRows)) {
								setSystemAccountsRows(dataFromField8.systemAccountsRows)
							}
							if (Array.isArray(dataFromField8.riskTable)) {
								fallbackRiskTable = dataFromField8.riskTable
							}
							if (
								dataFromField8.removedStaticPageIds &&
								typeof dataFromField8.removedStaticPageIds === 'object'
							) {
								setRemovedStaticPageIds(dataFromField8.removedStaticPageIds)
							}
						} else {
							// Eski format: faqat tables
							setTableData(dataFromField8)
						}
						vulnData = field8Data.slice(1) // Table ma'lumotlaridan keyingi qolganlarni ol
					} catch {
						vulnData = field8Data // Agar parse qilsa xatolik bo'lsa, dastlabkisini ishla
					}
				}

				// Res'dan kelayotgan HTML stringlarini flatten qilish, raqamlarni tartiblab va page-number olib tashlash
				let expTitleIndex = 1
				const flatVulnData = Array.isArray(vulnData)
					? vulnData
							.flat()
							.filter(
								item =>
									typeof item === 'string' && !item.includes('page-number'),
							)
							.map(item => {
								// exp-title ichidagi raqamni dinamik o'zgartirish
								if (item.includes('exp-title')) {
									return item.replace(/2\.2\.\d+/g, `2.2.${expTitleIndex++}`)
								}
								return item
							})
					: []
				// Field 15 (rasm fayllari) bo'yicha img teglariga data-file-id / data-file-size inject qilamiz
				const vulnDataWithFileIds = injectImageFileIdsIntoBlocks(flatVulnData, rawFiles)
				const sanitizedVulnData = vulnDataWithFileIds
					.map(item => sanitizePersistedImageHtml(item))
					.map(item => normalizeNewContentBlockHtml(item))
					.flatMap(item => explodeHtmlBlock(item))
					.filter(
						item =>
							typeof item === 'string' &&
							item.trim().length > 0 &&
							!isManualPageBreakBlock(item),
					)
				setNewVuln(sanitizedVulnData)

				const normalizeVulnField = (rf, expectedLevel = null) => {
					const list = Array.isArray(rf) ? rf.flat() : rf ? [rf] : []
					return list
						.filter(Boolean)
						.map(v => {
							const rawA1 = Number(v?.a1)
							const rawA2 = Number(v?.a2)
							let level = rawA1
							let count = rawA2

							if (
								Number.isFinite(expectedLevel) &&
								expectedLevel >= 1 &&
								expectedLevel <= 3 &&
								rawA1 !== expectedLevel &&
								rawA2 === expectedLevel
							) {
								level = rawA2
								count = rawA1
							} else if (
								!(rawA1 >= 1 && rawA1 <= 3) &&
								rawA2 >= 1 &&
								rawA2 <= 3
							) {
								level = rawA2
								count = rawA1
							}

							if (!(level >= 1 && level <= 3) || !v?.a3) return null

							return {
								a1: level,
								a2: Number.isFinite(count) && count > 0 ? Math.floor(count) : 1,
								a3: v.a3,
								a4: v?.a4,
							}
						})
						.filter(Boolean)
				}

				const fallbackList = normalizeVulnField(fallbackRiskTable)

				const highVuln1Raw = normalizeVulnField(raw, 1)
				const highVuln1 =
					highVuln1Raw.length > 0
						? highVuln1Raw
						: fallbackList.filter(x => Number(x.a1) === 1)

				setHighVuln(highVuln1)

				const raw1 = res[1]?.[12]

				const mVRaw = normalizeVulnField(raw1, 2)
				const mV =
					mVRaw.length > 0
						? mVRaw
						: fallbackList.filter(x => Number(x.a1) === 2)
				setMediumVuln(mV)

				const raw2 = res[1]?.[11]

				const lVRaw = normalizeVulnField(raw2, 3)
				const lV =
					lVRaw.length > 0
						? lVRaw
						: fallbackList.filter(x => Number(x.a1) === 3)
				setLowVuln(lV)

				// console.log(res[1]?.[13]);
				setAllVuln([...highVuln1, ...mV, ...lV])

				// Table ma'lumotlari field 8 ning 0-indexidan olingan
			} else if (res.status === METHOD.BAD_REQUEST) {
				toast.error("Ma'lumot topilmadi!")
			}
			// console.log(res);
		} catch (error) {
			console.log(error)
			console.log('Xatolik yuz berdi!')
		}
	}

	useEffect(() => {
		getExpertById()
		// console.log(highVuln);
	}, [])

	// objectLinksText dan objectLinks ga sync qilish
	useEffect(() => {
		if (!editing && objectLinksText) {
			const links = objectLinksText
				.split('\n')
				.map(link => link.trim())
				.filter(link => link.length > 0)
			setObjectLinks(links)
		}
	}, [editing, objectLinksText])

	useEffect(() => {
		const pages = paginateSectionTableRows(sectionTableRowHtml)
		setSectionTablePages(pages)
	}, [sectionTableRowHtml])

	// Table ma'lumotlarini DOM'ga qayta yuklash (rasmlar bilan)
	useEffect(() => {
		if (Object.keys(tableData).length > 0) {
			const tables = document.querySelectorAll('table.editable-table')

			tables.forEach((table, idx) => {
				const key = `table_${idx}`
				if (tableData[key] && tableData[key].length > 0) {
					const tbody = table.querySelector('tbody')
					if (tbody) {
						// Faqat agar data bo'lsa barcha qatorlarni o'chirish va yangilash
						tbody.innerHTML = ''

						// Yangi rows'larni qo'shish
						tableData[key].forEach(rowData => {
							const row = document.createElement('tr')
							rowData.forEach(cellData => {
								const cell = document.createElement('td')

								// Agar cellData HTML bo'lsa (rasmlar bilan), innerHTML sifatida qo'shamiz
								if (cellData.includes('<img') || cellData.includes('<IMG')) {
									cell.innerHTML = sanitizePersistedImageHtml(cellData)
								} else {
									cell.innerText = cellData
								}

								cell.contentEditable = editing
								row.appendChild(cell)
							})
							tbody.appendChild(row)
						})
					}
				}
			})
		}
	}, [tableData, editing])

	const formatDate = dateString => {
		if (!dateString) return '—'

		const date = new Date(dateString)

		const day = date.getDate()
		const monthNumber = date.getMonth() + 1
		const year = date.getFullYear()

		let monthName = ''

		switch (monthNumber) {
			case 1:
				monthName = 'yanvardagi'
				break
			case 2:
				monthName = 'fevraldagi'
				break
			case 3:
				monthName = 'martdagi'
				break
			case 4:
				monthName = 'apreldagi'
				break
			case 5:
				monthName = 'maydagi'
				break
			case 6:
				monthName = 'iyundagi'
				break
			case 7:
				monthName = 'iyuldagi'
				break
			case 8:
				monthName = 'avgustdagi'
				break
			case 9:
				monthName = 'sentabrdagi'
				break
			case 10:
				monthName = 'oktabrdagi'
				break
			case 11:
				monthName = 'noyabrdagi'
				break
			case 12:
				monthName = 'dekabrdagi'
				break
			default:
				monthName = ''
		}

		return ` ${year}-yil ${day} ${monthName}`
	}

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const handleSaveDocFromModal = docVuln => {
		if (!docVuln?.vuln || !Array.isArray(docVuln.vuln?.[1])) return
		generateVulnHtml(docVuln.vuln)
		handleSubmit(docVuln)
	}

	const stripHtml = (html = '') => {
		if (!html) return ''
		const parser = new DOMParser()
		const doc = parser.parseFromString(html, 'text/html')
		return doc.body.textContent || ''
	}

/** HTML bloklaridagi img teglariga data-file-id / data-file-size yo'q bo'lsa, field 15 ro'yxati bo'yicha tartibda inject qiladi */
const injectImageFileIdsIntoBlocks = (blocks, filesArray) => {
	if (!Array.isArray(blocks) || blocks.length === 0) return blocks
	const list = Array.isArray(filesArray) ? filesArray.flat().filter(Boolean) : []
	if (!list.length) return blocks
	let fileIndex = 0
	return blocks.map(block => {
		if (typeof block !== 'string') return block
		try {
			const parser = new DOMParser()
			const doc = parser.parseFromString(block, 'text/html')
			const imgs = doc.body.querySelectorAll('img')
			imgs.forEach(img => {
				if (img.getAttribute('data-file-id')) return
				const entry = list[fileIndex++]
				if (!entry) return
				const fid = entry?.[1] ?? entry?.['1']
				const sz = entry?.[2] ?? entry?.['2']
				if (fid) {
					img.setAttribute('data-file-id', String(fid))
					if (sz != null && Number.isFinite(Number(sz))) {
						img.setAttribute('data-file-size', String(Math.floor(Number(sz))))
					}
				}
			})
			return doc.body.innerHTML
		} catch {
			return block
		}
	})
}

const sanitizePersistedImageHtml = html => {
	if (!html || typeof html !== 'string') return html
	try {
		const parser = new DOMParser()
		const doc = parser.parseFromString(html, 'text/html')
			const imgs = Array.from(doc.body.querySelectorAll('img'))
			if (!imgs.length) return html

			imgs.forEach(img => {
				const fileIdRaw =
					img.getAttribute('data-file-id') || img.dataset?.fileId || ''
				const currentSrc = (img.getAttribute('src') || '').trim()
				const inferredFileId = inferFileIdFromSrc(currentSrc)
				const fileId = String(fileIdRaw || inferredFileId || '').trim()

				if (fileId) {
					img.setAttribute('data-file-id', fileId)
				}

				// data/blob/Base64 srclarni saqlamaymiz; bo'sh yoki noto'g'ri src bo'lmasin
				if (
					!currentSrc ||
					currentSrc.startsWith('data:') ||
					currentSrc.startsWith('blob:') ||
					isBrokenFileSrcValue(currentSrc)
				) {
					img.setAttribute('src', IMAGE_PLACEHOLDER_SRC)
				}

				img.removeAttribute('data-src-resolved')
				img.removeAttribute('data-upload-progress')
				img.removeAttribute('data-uploading')
				img.removeAttribute('data-upload-started')
				img.removeAttribute('data-paste-init')
			})

		return doc.body.innerHTML
	} catch (error) {
		imageLogError('sanitizePersistedImageHtml error', error)
		return html
	}
}

const sanitizeLiveImageElement = (img, options = {}) => {
	if (!(img instanceof HTMLImageElement)) return
	const { keepBlobIfHasFileId = false } = options
	const src = (img.getAttribute('src') || '').trim()
	const fileId = (img.getAttribute('data-file-id') || img.dataset?.fileId || '').trim()
	if (!fileId) {
		img.removeAttribute('src')
		img.setAttribute('src', IMAGE_PLACEHOLDER_SRC)
	} else if (
		!keepBlobIfHasFileId &&
		(src.startsWith('data:') || src.startsWith('blob:') || isBrokenFileSrcValue(src))
	) {
		img.setAttribute('src', IMAGE_PLACEHOLDER_SRC)
	}
	img.removeAttribute('data-src-resolved')
	img.removeAttribute('data-upload-progress')
	img.removeAttribute('data-uploading')
	img.removeAttribute('data-upload-started')
	img.removeAttribute('data-paste-init')
}

	const normalizeNewContentBlockHtml = html => {
		if (!html || typeof html !== 'string') return html
		try {
			const parser = new DOMParser()
			const doc = parser.parseFromString(html, 'text/html')
			const body = doc.body
			if (!body) return html

			// Legacy ikki ustun bloklarni bir ustun oqimga o'tkazamiz (matnni o'zgartirmasdan).
			const twoColBlocks = Array.from(body.querySelectorAll('.system-two-col'))
			twoColBlocks.forEach(block => {
				const linear = doc.createElement('div')
				linear.className = 'system-two-col-linear'
				const cols = Array.from(block.children).filter(child =>
					child.classList?.contains('system-col'),
				)

				if (cols.length > 0) {
					cols.forEach(col => {
						Array.from(col.childNodes).forEach(node => {
							linear.appendChild(node.cloneNode(true))
						})
					})
				} else {
					Array.from(block.childNodes).forEach(node => {
						linear.appendChild(node.cloneNode(true))
					})
				}

				block.replaceWith(linear)
			})

			// Oldingi column inline stylelar qoldiq bo'lsa olib tashlaymiz.
			Array.from(body.querySelectorAll('[style]')).forEach(el => {
				const raw = el.getAttribute('style') || ''
				let cleaned = raw
					.replace(/(?:^|;)\s*columns\s*:[^;]*/gi, '')
					.replace(/(?:^|;)\s*column-count\s*:[^;]*/gi, '')
					.replace(/(?:^|;)\s*column-gap\s*:[^;]*/gi, '')
					.replace(/(?:^|;)\s*column-fill\s*:[^;]*/gi, '')
					.replace(/(?:^|;)\s*column-rule\s*:[^;]*/gi, '')
					.replace(/(?:^|;)\s*column-width\s*:[^;]*/gi, '')

				cleaned = cleaned
					.replace(/;;+/g, ';')
					.replace(/^\s*;\s*|\s*;\s*$/g, '')
					.trim()
				if (!cleaned) {
					el.removeAttribute('style')
				} else {
					el.setAttribute('style', cleaned)
				}
			})

			return body.innerHTML
		} catch (error) {
			imageLogError('normalizeNewContentBlockHtml error', error)
			return html
		}
	}

	const riskRows = useMemo(() => {
		const items = [
			...(highVuln || []),
			...(mediumVuln || []),
			...(lowVuln || []),
		]
			.filter(Boolean)
			.map(v => {
				const level = Number(v?.a1) || v?.a1
				const countRaw = v?.a2 ?? 1
				const count = Number(countRaw)
				const name = stripHtml(v?.a3 || '').trim()
				const resourceLabel = normalizeResourceLabel(v?.a4 || '')
				return {
					type: 'vuln',
					level,
					count: Number.isFinite(count) && count > 0 ? count : 1,
					name,
					resourceLabel,
				}
			})
			.filter(v => v.name)

		// (resource -> level -> name) bo'yicha agregatsiya
		const byResource = new Map()
		for (const v of items) {
			if (!byResource.has(v.resourceLabel))
				byResource.set(v.resourceLabel, new Map())
			const key = `${Number(v.level) || v.level}|||${v.name}`
			const m = byResource.get(v.resourceLabel)
			const prev = m.get(key)
			m.set(key, prev ? { ...prev, count: prev.count + v.count } : v)
		}

		const resourceOrder = Array.isArray(objectLinks)
			? objectLinks.map(extractResourceHost)
			: []
		const resources = Array.from(byResource.keys()).sort((a, b) => {
			const ai = resourceOrder.indexOf(a)
			const bi = resourceOrder.indexOf(b)
			const aRank = ai === -1 ? Number.MAX_SAFE_INTEGER : ai
			const bRank = bi === -1 ? Number.MAX_SAFE_INTEGER : bi
			if (aRank !== bRank) return aRank - bRank
			return a.localeCompare(b, 'uz')
		})

		const levelPriority = lev =>
			Number(lev) === 1 ? 0 : Number(lev) === 2 ? 1 : 2

		const out = []
		for (const r of resources) {
			const map = byResource.get(r)
			if (!map || map.size === 0) continue
			const shouldShowResourceHeader = (r || '').toLowerCase() !== 'umumiy'
			if (shouldShowResourceHeader) {
				out.push({ type: 'resource', label: r })
			}

			const grouped = Array.from(map.values())
			grouped.sort((x, y) => {
				const px = levelPriority(x.level)
				const py = levelPriority(y.level)
				if (px !== py) return px - py
				return (x.name || '').localeCompare(y.name || '', 'uz')
			})

			for (const v of grouped) out.push(v)
		}

		return out
	}, [highVuln, mediumVuln, lowVuln, objectLinks])

	const { riskFirstPageRows, riskContinuationPages } = useMemo(() => {
		const first = takeRiskRowsByHeight(
			riskRows,
			0,
			riskMeasureConfig.firstPageMaxHeightPx,
			riskMeasureConfig.tableWidthPx,
			editing,
		)
		const cont = chunkRiskPagesByHeight(
			riskRows,
			first.nextIndex,
			riskMeasureConfig.contPageMaxHeightPx,
			riskMeasureConfig.tableWidthPx,
			editing,
		)
		return { riskFirstPageRows: first.page, riskContinuationPages: cont }
	}, [riskRows, riskMeasureConfig, editing])

	const detailPages = useMemo(() => {
		const safePages = Array.isArray(pages3) ? pages3 : []
		if (!safePages.length) return [[buildCaretAnchorBlock()]]
		return safePages.map(page => {
			const safePage = (Array.isArray(page) ? page : []).filter(
				item => typeof item === 'string' && item.trim().length > 0,
			)
			return safePage.length ? safePage : [buildCaretAnchorBlock()]
		})
	}, [pages3])

	const pageNumberPlan = useMemo(() => {
		const firstPageNumber = 5
		const section1Page = firstPageNumber
		const section2IntroPage = section1Page + 1
		const section3PrepPage = section2IntroPage + 1
		const sectionTableExtraCount = Math.max(
			0,
			(sectionTablePages || []).length - 1,
		)
		const additionalInfoPage = section3PrepPage + 1 + sectionTableExtraCount
		const accountsExtraCount = Math.max(
			0,
			(systemAccountsPages || []).length - 1,
		)
		const section2SummaryPage = additionalInfoPage + 1 + accountsExtraCount
		const riskContinuationCount = (riskContinuationPages || []).length
		const detailStartPage = section2SummaryPage + 1 + riskContinuationCount
		const detailPagesCount = detailPages.length
		const section3Page = detailStartPage + detailPagesCount

		return {
			firstPageNumber,
			section1Page,
			section2IntroPage,
			section3PrepPage,
			sectionTableExtraCount,
			additionalInfoPage,
			accountsExtraCount,
			section2SummaryPage,
			riskContinuationCount,
			detailStartPage,
			detailPagesCount,
			section3Page,
		}
	}, [
		sectionTablePages,
		systemAccountsPages,
		riskContinuationPages,
		detailPages,
	])

	const tocVulnerabilityItems = useMemo(() => {
		const DETAIL_START_PAGE = pageNumberPlan.detailStartPage

		const titleToResource = new Map()
		;(riskRows || [])
			.filter(r => r?.type === 'vuln')
			.forEach(r => {
				if (!r?.name) return
				if (!titleToResource.has(r.name))
					titleToResource.set(r.name, r.resourceLabel || 'Umumiy')
			})

		const seen = new Set()
		const entries = []

		;(detailPages || []).forEach((pageItems, pageIdx) => {
			;(pageItems || []).forEach(html => {
				if (!html || typeof html !== 'string') return
				if (!html.includes('system-subtitle')) return

				const parser = new DOMParser()
				const doc = parser.parseFromString(html, 'text/html')
				const el = doc.querySelector('.system-subtitle')
				const subtitleText = (el?.textContent || '').trim()
				if (!subtitleText) return

				// faqat system-subtitle ichidagi matn: xohlasangiz prefiks raqamlarni olib tashlaymiz
				const title = subtitleText.replace(/^2\.2\.1\.\d+\.\s*/g, '').trim()
				if (!title || seen.has(title)) return
				seen.add(title)

				const resourceLabel = titleToResource.get(title) || ''
				const pageNum = DETAIL_START_PAGE + pageIdx

				entries.push({
					title,
					resourceLabel,
					pageNum,
				})
			})
		})

		const orderHosts = (objectLinks || [])
			.map(extractResourceHost)
			.filter(Boolean)
		const resourceRank = host => {
			if (host === NO_RESOURCE_KEY) return Number.MAX_SAFE_INTEGER
			const h = extractResourceHost(host || '')
			const idx = orderHosts.indexOf(h)
			return idx === -1 ? Number.MAX_SAFE_INTEGER - 1 : idx
		}

		// group by resource (risk table tartibiga yaqin bo'lishi uchun)
		const grouped = new Map()
		for (const e of entries) {
			const host = extractResourceHost(e.resourceLabel || '')
			const resourceKey = host || NO_RESOURCE_KEY
			if (!grouped.has(resourceKey)) grouped.set(resourceKey, [])
			grouped.get(resourceKey).push(e)
		}

		const resources = Array.from(grouped.keys()).sort((a, b) => {
			const ar = resourceRank(a)
			const br = resourceRank(b)
			if (ar !== br) return ar - br
			return a.localeCompare(b, 'uz')
		})

		const out = []
		for (const resourceKey of resources) {
			const items = grouped.get(resourceKey) || []
			if (!items.length) continue
			items.sort(
				(a, b) => a.pageNum - b.pageNum || a.title.localeCompare(b.title, 'uz'),
			)
			const shouldShowResourceHeader =
				resourceKey !== NO_RESOURCE_KEY &&
				(resourceKey || '').toLowerCase() !== 'umumiy'
			if (shouldShowResourceHeader) {
				out.push({
					type: 'subheader',
					title: `“${resourceKey}” veb-resursi`,
				})
			}
			for (const it of items) {
				out.push({
					type: 'row',
					title: it.title,
					page: String(it.pageNum),
					large: it.title.length > 44,
				})
			}
		}

		return {
			items: out,
			section3Page: String(pageNumberPlan.section3Page),
		}
	}, [riskRows, detailPages, objectLinks, NO_RESOURCE_KEY, pageNumberPlan])

	const tocItems = useMemo(() => {
		const base = [
			{
				type: 'section',
				page: String(pageNumberPlan.section1Page),
				section: 'BIRINCHI BO‘LIM.',
				head: 'UMUMIY MA’LUMOTLAR',
			},
			{
				type: 'row',
				title: 'Atamalar va ta’riflar',
				page: String(pageNumberPlan.section1Page),
			},
			{
				type: 'row',
				title: 'Ekspertiza o‘tkazish uchun asos',
				page: String(pageNumberPlan.section2IntroPage),
			},
			{
				type: 'row',
				title: 'Ekspertiza obyekti',
				page: String(pageNumberPlan.section2IntroPage),
			},
			{
				type: 'row',
				title: 'Ekspertiza o‘tkazish tartibi',
				page: String(pageNumberPlan.section2IntroPage),
			},
			{
				type: 'row',
				title: 'Ekspertiza yuzasidan qo‘shimcha ma’lumotlar',
				page: String(pageNumberPlan.additionalInfoPage),
				large: true,
			},
			{
				type: 'section',
				page: String(pageNumberPlan.section2SummaryPage),
				section: 'IKKINCHI BO‘LIM.',
				head: 'EKSPERTIZA NATIJALARI',
			},
			{
				type: 'row',
				title: 'Ekspertiza natijalari to‘g‘risida umumlashtirilgan ma’lumot',
				page: String(pageNumberPlan.section2SummaryPage),
				large: true,
			},
			{
				type: 'row',
				title: 'Ekspertiza natijalari bo‘yicha batafsil izoh',
				page: String(pageNumberPlan.detailStartPage),
				large: true,
			},
		]

		const tail = [
			{
				type: 'section',
				page: tocVulnerabilityItems.section3Page,
				section: 'UCHINCHI BO‘LIM.',
				head: 'UMUMIY XULOSA',
			},
		]

		return [...base, ...(tocVulnerabilityItems.items || []), ...tail]
	}, [tocVulnerabilityItems, pageNumberPlan])

	const tocItemHtml = useMemo(
		() => tocItems.map(item => buildTocItemHtml(item)),
		[tocItems],
	)

	const updateTocPageHtml = useCallback((pageIndex, html) => {
		setTocPages(prev => {
			const next = Array.isArray(prev) ? [...prev] : []
			next[pageIndex] = [html]
			return next
		})
	}, [])

	useEffect(() => {
		if (editing) return
		const pages = paginateTocItems(tocItemHtml)
		setTocPages(pages)
	}, [tocItemHtml, editing])

	// Sarlavha matnini solishtirish uchun normalizatsiya (bo'shliq, apostrof)
	const normalizeTitle = s =>
		(s || '')
			.trim()
			.replace(/\s+/g, ' ')
			.replace(/[\u2018\u2019\u0027]/g, "'")

	// newVuln elementlari blok (bitta div/p) yoki to'liq sahifa HTML bo'lishi mumkin; barchasini bloklar ro'yxatiga aylantiramiz
	const flattenNewVulnToBlocks = items => {
		const blocks = []
		const parser = new DOMParser()
		;(items || []).forEach(html => {
			if (!html || typeof html !== 'string') return
			const doc = parser.parseFromString(html, 'text/html')
			const body = doc.body
			if (!body) return
			let children = Array.from(body.children)
			if (children.length === 1 && children[0].children.length > 1) {
				children = Array.from(children[0].children)
			}
			if (children.length > 1) {
				children.forEach(el => blocks.push(el.outerHTML))
			} else if (children.length === 1) {
				blocks.push(children[0].outerHTML)
			} else {
				const inner = body.innerHTML?.trim()
				if (inner) blocks.push(inner)
			}
		})
		return blocks
	}

	// Zaiflikni jadvaldan va batafsil bo'limdan o'chirish (darajasi, nomi, tarifi, oqibatlari, tavsiyalar)
	const deleteVulnerability = row => {
		if (!editingRef.current) return
		if (!row || row?.type !== 'vuln') return
		const level = Number(row?.level)
		const name = (row?.name || '').trim()
		const resourceLabel = (row?.resourceLabel || '').trim()
		if (!name) return
		const nameNorm = normalizeTitle(name)
		const targetResource = normalizeResourceLabel(resourceLabel || '')
		const isGeneralResource = value => {
			const host = normalizeResourceLabel(value || '')
			return !host || host.toLowerCase() === 'umumiy'
		}

		const matchVuln = v => {
			const vLevel = Number(v?.a1)
			const vName = stripHtml(v?.a3 || '').trim()
			const vResource = normalizeResourceLabel(v?.a4 || '')
			const resourceMatch =
				isGeneralResource(targetResource) && isGeneralResource(vResource)
					? true
					: vResource === targetResource
			return (
				vLevel === level && normalizeTitle(vName) === nameNorm && resourceMatch
			)
		}

		if (level === 1)
			setHighVuln(prev => (prev || []).filter(v => !matchVuln(v)))
		else if (level === 2)
			setMediumVuln(prev => (prev || []).filter(v => !matchVuln(v)))
		else if (level === 3)
			setLowVuln(prev => (prev || []).filter(v => !matchVuln(v)))

		setAllVuln(prev => (prev || []).filter(v => !matchVuln(v)))
		queueRiskLayoutRefresh()

		// Pastdagi batafsil bo'limdan: sarlavha, darajasi, tarifi, oqibatlari, tavsiyalar — barcha bloklarni o'chirish
		// newVuln sahifa HTML yoki bloklar bo'lishi mumkin, avval bloklarga yoyib keyin o'chiramiz
		setNewVuln(prev => {
			const blocks = flattenNewVulnToBlocks(prev)
			const result = []
			let i = 0
			while (i < blocks.length) {
				const html = blocks[i]
				if (!html || typeof html !== 'string') {
					i++
					continue
				}
				if (!html.includes('system-subtitle')) {
					result.push(html)
					i++
					continue
				}
				const parser = new DOMParser()
				const doc = parser.parseFromString(html, 'text/html')
				const el = doc.querySelector('.system-subtitle')
				const text = (el?.textContent || '').trim()
				const titleMatch = text.match(/^2\.2\.1\.\d+\.\s*(.+)$/)
				const blockTitleNorm = titleMatch ? normalizeTitle(titleMatch[1]) : ''
				if (!titleMatch || blockTitleNorm !== nameNorm) {
					result.push(html)
					i++
					continue
				}
				let end = i + 1
				while (end < blocks.length) {
					const nextHtml = blocks[end]
					if (nextHtml && nextHtml.includes('system-subtitle')) {
						const nextDoc = new DOMParser().parseFromString(
							nextHtml,
							'text/html',
						)
						const nextEl = nextDoc.querySelector('.system-subtitle')
						const nextText = (nextEl?.textContent || '').trim()
						if (/^2\.2\.1\.\d+\.\s/.test(nextText)) break
					}
					end++
				}
				i = end
			}
			return result
		})
	}

	const updateVulnerabilityRow = (row, patch = {}) => {
		if (!editingRef.current) return
		if (!row || row?.type !== 'vuln') return

		const level = Number(row?.level)
		const name = (row?.name || '').trim()
		const resourceLabel = (row?.resourceLabel || '').trim()
		const targetResource = normalizeResourceLabel(resourceLabel || '')
		const isGeneralResource = value => {
			const host = normalizeResourceLabel(value || '')
			return !host || host.toLowerCase() === 'umumiy'
		}
		const nameNorm = normalizeTitle(name)
		const nextNameRaw =
			patch?.name != null ? stripHtml(String(patch.name || '')) : name
		const nextName = nextNameRaw.trim()
		const nextCountRaw =
			patch?.count != null ? Number(patch.count) : Number(row?.count)
		const nextCount =
			Number.isFinite(nextCountRaw) && nextCountRaw > 0
				? Math.floor(nextCountRaw)
				: 1

		if (!nextName) return
		if (
			normalizeTitle(nextName) === nameNorm &&
			nextCount === Number(row?.count)
		) {
			return
		}

		const matchVuln = v => {
			const vLevel = Number(v?.a1)
			const vName = stripHtml(v?.a3 || '').trim()
			const vResource = normalizeResourceLabel(v?.a4 || '')
			const resourceMatch =
				isGeneralResource(targetResource) && isGeneralResource(vResource)
					? true
					: vResource === targetResource
			return (
				vLevel === level && normalizeTitle(vName) === nameNorm && resourceMatch
			)
		}

		const patchItem = item => ({
			...item,
			a1: level,
			a2: nextCount,
			a3: nextName,
			a4: normalizeResourceLabel(item?.a4 || targetResource),
		})

		const updateList = list => {
			const safe = Array.isArray(list) ? list : []
			const out = []
			let replaced = false

			for (const item of safe) {
				if (!matchVuln(item)) {
					out.push(item)
					continue
				}
				if (!replaced) {
					out.push(patchItem(item))
					replaced = true
				}
			}

			return replaced ? out : safe
		}

		if (level === 1) setHighVuln(prev => updateList(prev))
		else if (level === 2) setMediumVuln(prev => updateList(prev))
		else if (level === 3) setLowVuln(prev => updateList(prev))

		setAllVuln(prev => updateList(prev))
		queueRiskLayoutRefresh()
	}

	const renderRiskTableBody = (
		pageRows,
		keyPrefix,
		showDeleteColumn = false,
	) => {
		const rows = Array.isArray(pageRows) ? pageRows : []
		const meta = computeRiskLevelRowspanMeta(rows)
		const colspan = showDeleteColumn ? 4 : 3

		return rows.map((row, idx) => {
			if (row?.type === 'resource') {
				return (
					<tr key={`${keyPrefix}-r-${idx}`} className='risk-resource'>
						<td colSpan={colspan}>"{row.label}” resursi</td>
					</tr>
				)
			}

			const m = meta[idx] || { showLevel: false, rowSpan: 1 }

			return (
				<tr key={`${keyPrefix}-v-${idx}`} className={riskRowClass(row?.level)}>
					{m.showLevel && (
						<td className='risk-level' rowSpan={m.rowSpan}>
							{riskLevelText(row?.level)}
						</td>
					)}
					<td className='risk-name'>
						{showDeleteColumn ? (
							<textarea
								defaultValue={row?.name || ''}
								onBlur={e => {
									updateVulnerabilityRow(row, { name: e.target.value })
								}}
								onKeyDown={e => {
									if (e.key === 'Enter') {
										e.preventDefault()
										e.currentTarget.blur()
									}
								}}
								rows={1}
								className='w-full bg-transparent outline-none resize-none overflow-hidden text-center leading-snug'
							/>
						) : (
							row?.name
						)}
					</td>
					<td className='risk-count'>
						{showDeleteColumn ? (
							<input
								type='number'
								min={1}
								defaultValue={row?.count ?? 1}
								onBlur={e => {
									updateVulnerabilityRow(row, { count: e.target.value })
								}}
								onKeyDown={e => {
									if (e.key === 'Enter') {
										e.preventDefault()
										e.currentTarget.blur()
									}
								}}
								className='w-full bg-transparent outline-none text-center'
							/>
						) : (
							row?.count
						)}
					</td>
					{showDeleteColumn && (
						<td className='risk-delete p-1' contentEditable={false}>
							<button
								type='button'
								onMouseDown={e => {
									e.preventDefault()
									e.stopPropagation()
								}}
								onClick={e => {
									e.preventDefault()
									e.stopPropagation()
									deleteVulnerability(row)
								}}
								className='w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center mx-auto'
								title="Zaiflikni o'chirish"
							>
								<iconify-icon
									icon='material-symbols:delete'
									width='18'
									height='18'
								/>
							</button>
						</td>
					)}
				</tr>
			)
		})
	}

	// Textni gaplar bo'yicha inline span larga ajratadi (blok emas)
	const splitToInlineSpans = text => {
		if (!text) return text
		// Nuqta bilan tugagan gaplarni ajratish
		const sentences = text.split(/(?<=\.)\s+/).filter(s => s.trim())
		if (sentences.length <= 1) {
			return text
		}
		return sentences
			.map(sentence => `<span>${sentence.trim()}</span>`)
			.join(' ')
	}

	const generateVulnHtml = vulnData => {
		const level = vulnData?.[1]?.[0]
		const title = stripHtml(vulnData?.[1]?.[1])
		const result = stripHtml(vulnData?.[1]?.[2])
		const desc = stripHtml(vulnData?.[1]?.[3])
		const recommendation = stripHtml(vulnData?.[1]?.[4])

		const levelText = level === 1 ? 'Yuqori' : level === 2 ? 'O‘rta' : 'Past'

		let newInnerHtml = ''
		if (newVuln.length == 0) {
			newInnerHtml = `
		<div class="system-bar-title">2.2. Ekspertiza natijalari bo‘yicha batafsil izoh</div>
		<div class="system-subhead system-highlight">2.2.1. “${appName}” axborot tizimi</div>
		<div class="system-subtitle">2.2.1.${vulnCounter}. ${title}</div>
		<p class="system-paragraph"><b>Xavflilik darajasi:</b> ${levelText}.</p>
		<p class="system-paragraph">${splitToInlineSpans(result)}</p>
		<div class="system-subtitle">Ekspluatatsiya oqibatlari</div>
		<p class="system-paragraph">${splitToInlineSpans(desc)}</p>
		<div class="system-subtitle">Tavsiyalar</div>
		<p class="system-paragraph">${splitToInlineSpans(recommendation)}</p>
	`
		} else {
			newInnerHtml = `
		<div class="system-subtitle">2.2.1.${vulnCounter}. ${title}</div>
		<p class="system-paragraph"><b>Xavflilik darajasi:</b> ${levelText}.</p>
		<p class="system-paragraph">${splitToInlineSpans(result)}</p>
		<div class="system-subtitle">Ekspluatatsiya oqibatlari</div>
		<p class="system-paragraph">${splitToInlineSpans(desc)}</p>
		<div class="system-subtitle">Tavsiyalar</div>
		<p class="system-paragraph">${splitToInlineSpans(recommendation)}</p>
	`
		}

		const parser = new DOMParser()
		const doc = parser.parseFromString(newInnerHtml, 'text/html')

		const blocks = Array.from(doc.body.children).map(el => el.outerHTML)

		setNewVuln(prev => [...prev, ...blocks])
		vulnCounter += 1

		// console.log(newVuln);
		setHtmlContent(prev => {
			const updated = [...prev]

			const parser = new DOMParser()
			const doc = parser.parseFromString(updated[startIndex], 'text/html')

			const pageContent = doc.querySelector('.page-content')
			if (pageContent) {
				pageContent.insertAdjacentHTML('beforeend', newInnerHtml)
				updated[startIndex] = doc.body.innerHTML
			}

			return updated
		})
	}

	const handleSubmit = async docVuln => {
		try {
			const level = Number(docVuln?.vuln?.[1]?.[0])
			if (!level) return
			const vulnCountRaw = Number(docVuln?.vulnCount)
			const vulnCount =
				Number.isFinite(vulnCountRaw) && vulnCountRaw > 0
					? Math.floor(vulnCountRaw)
					: 1
			const resourceLabel = normalizeResourceLabel(docVuln?.resource || '')

			const fieldMap = {
				1: 13,
				2: 12,
				3: 11,
			}

			const field = fieldMap[level]
			if (!field) return

			const payload = {
				19: id,
				[field]: [
					{
						a1: level,
						a2: vulnCount,
						a3: docVuln?.vuln?.[1]?.[1],
						a4: resourceLabel,
					},
				],
			}

			// console.log(docVuln);
			const newItem = payload?.[field]?.[0]
			if (newItem) {
				if (Number(level) === 1) setHighVuln(prev => [...(prev || []), newItem])
				else if (Number(level) === 2)
					setMediumVuln(prev => [...(prev || []), newItem])
				else if (Number(level) === 3)
					setLowVuln(prev => [...(prev || []), newItem])

				setAllVuln(prev => [...(prev || []), newItem])
			}
			queueRiskLayoutRefresh()

			await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, payload)
		} catch (error) {
			console.error(error)
		}
	}

	const paginateContent = items => {
		// Agar items array bo'lmasa, string bo'lsa uni array ga o'gir
		const itemsArray = Array.isArray(items)
			? items
			: typeof items === 'string'
				? [items]
				: []

		if (!itemsArray.length) return [[buildCaretAnchorBlock()]]

		const pages = []
		let currentPage = []

		const sampleContent = document.querySelector(
			'.word-pages .a4 .page-content.editable.new-content',
		)
		const samplePage = sampleContent?.closest('.a4.system-c') || null
		const samplePageStyle = samplePage
			? window.getComputedStyle(samplePage)
			: null
		const sampleContentStyle = sampleContent
			? window.getComputedStyle(sampleContent)
			: null
		const sampleWidth =
			sampleContent?.clientWidth ||
			sampleContent?.getBoundingClientRect?.().width ||
			650
		const samplePageWidth =
			samplePage?.clientWidth ||
			samplePage?.getBoundingClientRect?.().width ||
			794
		const sampleHeightData = Number(sampleContent?.dataset?.pageMaxHeight || 0)
		const sampleClientHeight = Number(sampleContent?.clientHeight || 0)
		const rawMaxHeight =
			(Number.isFinite(sampleHeightData) && sampleHeightData > 0
				? sampleHeightData
				: Number.isFinite(sampleClientHeight) && sampleClientHeight > 0
					? sampleClientHeight
					: 850) || 850
		const pageMaxHeight = Math.max(220, Math.floor(rawMaxHeight - 28))
		const contentOffsetTop = Number.parseFloat(
			sampleContentStyle?.marginTop || '0',
		)

		const measureRoot = document.createElement('div')
		measureRoot.className = 'word-container'
		measureRoot.style.position = 'absolute'
		measureRoot.style.visibility = 'hidden'
		measureRoot.style.pointerEvents = 'none'
		measureRoot.style.top = '-9999px'
		measureRoot.style.left = '-9999px'
		measureRoot.style.width = `${Math.floor(samplePageWidth)}px`

		const measurePage = document.createElement('div')
		measurePage.className = 'a4 system-c'
		measurePage.style.width = `${Math.floor(samplePageWidth)}px`
		measurePage.style.minHeight = '0'
		measurePage.style.height = 'auto'
		measurePage.style.paddingTop = samplePageStyle?.paddingTop || '0'
		measurePage.style.paddingBottom = samplePageStyle?.paddingBottom || '0'
		measurePage.style.paddingLeft = samplePageStyle?.paddingLeft || '70px'
		measurePage.style.paddingRight = samplePageStyle?.paddingRight || '70px'
		measurePage.style.margin = '0'
		measurePage.style.background = 'none'
		measurePage.style.boxShadow = 'none'
		measurePage.style.overflow = 'visible'
		measurePage.style.setProperty(
			'--system-page-content-height',
			`${Math.floor(rawMaxHeight)}px`,
		)
		measurePage.style.setProperty(
			'--system-page-content-offset-top',
			`${Number.isFinite(contentOffsetTop) ? contentOffsetTop : 0}px`,
		)

		const measureContent = document.createElement('div')
		measureContent.className = 'page-content editable new-content'
		measureContent.style.width = `${Math.floor(sampleWidth)}px`
		measureContent.style.minHeight = '0'
		measureContent.style.height = 'auto'
		measureContent.style.maxHeight = 'none'
		measureContent.style.overflow = 'visible'
		measureContent.style.margin = '0'
		measureContent.style.marginTop = `${
			Number.isFinite(contentOffsetTop) ? contentOffsetTop : 0
		}px`

		const measureFlow = document.createElement('div')
		measureFlow.className = 'system-two-col-flow'
		measureContent.appendChild(measureFlow)
		measurePage.appendChild(measureContent)
		measureRoot.appendChild(measurePage)
		document.body.appendChild(measureRoot)

		const appendMeasureBlock = html => {
			const wrapper = document.createElement('div')
			wrapper.innerHTML = html
			measureFlow.appendChild(wrapper)
			return wrapper
		}

		const splitByWrapperChildrenForPagination = html => {
			if (!html || typeof html !== 'string') return [html]
			if (isCaretAnchorBlock(html)) return [html]
			try {
				const container = document.createElement('div')
				container.innerHTML = html
				const root = container.firstElementChild
				if (!root || container.children.length !== 1) return [html]
				const tag = (root.tagName || '').toLowerCase()
				const canUnwrap =
					tag === 'div' || tag === 'section' || tag === 'article'
				if (!canUnwrap) return [html]
				if (root.attributes.length > 0) return [html]
				const children = Array.from(root.childNodes)
				if (children.length < 2) return [html]
				const out = children
					.map(node => {
						if (node.nodeType === Node.TEXT_NODE) {
							const txt = (node.textContent || '').trim()
							return txt ? `<p>${txt}</p>` : ''
						}
						if (node.nodeType === Node.ELEMENT_NODE) return node.outerHTML || ''
						return ''
					})
					.filter(Boolean)
				return out.length >= 2 ? out : [html]
			} catch {
				return [html]
			}
		}

		const splitTextBlockForPagination = html => {
			if (!html || typeof html !== 'string') return null
			if (isCaretAnchorBlock(html)) return null

			try {
				const container = document.createElement('div')
				container.innerHTML = html
				const root = container.firstElementChild
				if (!root || container.children.length !== 1) return null

				const tag = (root.tagName || '').toLowerCase()
				const supported = [
					'p',
					'div',
					'li',
					'blockquote',
					'h1',
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
				]
				if (!supported.includes(tag)) return null
				if (root.children.length > 0) return null
				if (root.querySelector('img,table,ul,ol,video,audio,iframe,canvas,svg'))
					return null

				const originalText = root.textContent || ''
				const normalizedText = originalText.replace(/\s+/g, ' ').trim()
				if (normalizedText.length < 120) return null

				const buildHtmlFromText = text => {
					const clone = root.cloneNode(false)
					clone.textContent = text
					return clone.outerHTML
				}

				let low = 1
				let high = originalText.length - 1
				let best = 0

				while (low <= high) {
					const mid = Math.floor((low + high) / 2)
					const candidateHtml = buildHtmlFromText(originalText.slice(0, mid))
					const candidateWrapper = appendMeasureBlock(candidateHtml)
					const fits = measureContent.scrollHeight <= pageMaxHeight
					safeRemoveChild(measureFlow, candidateWrapper)

					if (fits) {
						best = mid
						low = mid + 1
					} else {
						high = mid - 1
					}
				}

				if (best <= 0 || best >= originalText.length) return null
				let splitIndex = best
				const spaceIndex = originalText.lastIndexOf(' ', best)
				if (spaceIndex > Math.floor(best * 0.45)) splitIndex = spaceIndex

				const leftText = originalText.slice(0, splitIndex).trimEnd()
				const rightText = originalText.slice(splitIndex).trimStart()
				if (!leftText || !rightText) return null

				return [buildHtmlFromText(leftText), buildHtmlFromText(rightText)]
			} catch {
				return null
			}
		}

		const resetMeasureWithBlocks = blocks => {
			measureFlow.innerHTML = ''
			blocks.forEach(block => {
				appendMeasureBlock(block)
			})
		}

		const canAppendBlockToPage = (pageBlocks, blockHtml) => {
			const safeBlocks = Array.isArray(pageBlocks) ? pageBlocks : []
			resetMeasureWithBlocks(safeBlocks)
			const candidate = appendMeasureBlock(blockHtml)
			const fits = measureContent.scrollHeight <= pageMaxHeight
			safeRemoveChild(measureFlow, candidate)
			return fits
		}

		const workQueue = Array.isArray(itemsArray) ? [...itemsArray] : []
		while (workQueue.length) {
			const item = workQueue.shift()
			if (!item) continue
			if (isManualPageBreakBlock(item)) {
				// Eski saqlangan manual-page-break markerlar endi oqimni bo'lmaydi.
				continue
			}

			const wrapper = appendMeasureBlock(item)

			if (measureContent.scrollHeight > pageMaxHeight) {
				safeRemoveChild(measureFlow, wrapper)
				const explodedBlocks = splitByWrapperChildrenForPagination(item)
				if (explodedBlocks.length > 1) {
					workQueue.unshift(...explodedBlocks)
					continue
				}

				const textSplit = splitTextBlockForPagination(item)
				if (textSplit && textSplit.length === 2) {
					const [leftPart, rightPart] = textSplit
					const leftWrapper = appendMeasureBlock(leftPart)
					const leftFits = measureContent.scrollHeight <= pageMaxHeight
					if (leftFits) {
						currentPage.push(leftPart)
						pages.push(currentPage)
						currentPage = [rightPart]
						resetMeasureWithBlocks(currentPage)
						continue
					}
					safeRemoveChild(measureFlow, leftWrapper)
				}

				if (currentPage.length) {
					pages.push(currentPage)
					currentPage = [item]
					resetMeasureWithBlocks(currentPage)
					continue
				}
				// Bitta juda baland blok bo'lsa ham yo'qolib qolmasligi uchun alohida sahifaga qo'yamiz.
				pages.push([item])
				currentPage = []
				measureFlow.innerHTML = ''
			} else {
				currentPage.push(item)
			}
		}

		if (currentPage.length) {
			pages.push(currentPage)
		}

		// Ikki sahifa chegarasida katta bo'sh joy qolib ketmasligi uchun
		// keyingi sahifadagi bosh blokni oldingi sahifaga qaytarib joylaymiz.
		let rebalanced = true
		let rebalanceGuard = 0
		while (rebalanced && rebalanceGuard < 300) {
			rebalanced = false
			rebalanceGuard += 1
			for (let i = 0; i < pages.length - 1; i++) {
				const prevPage = Array.isArray(pages[i]) ? pages[i] : []
				const nextPage = Array.isArray(pages[i + 1]) ? pages[i + 1] : []
				if (!nextPage.length) continue

				const firstCandidate = nextPage[0]
				if (!firstCandidate || isCaretAnchorBlock(firstCandidate)) continue
				if (!canAppendBlockToPage(prevPage, firstCandidate)) continue

				prevPage.push(firstCandidate)
				nextPage.shift()
				rebalanced = true

				if (
					nextPage.length === 0 ||
					(nextPage.length === 1 && isCaretAnchorBlock(nextPage[0]))
				) {
					pages.splice(i + 1, 1)
				}
			}
		}

		safeDetachNode(measureRoot)
		const normalized = pages.map(page => {
			const safePage = (Array.isArray(page) ? page : []).filter(
				item => typeof item === 'string' && item.trim().length > 0,
			)
			if (!safePage.length) return [buildCaretAnchorBlock()]
			if (
				safePage.length > 1 &&
				safePage.some(block => isCaretAnchorBlock(block))
			) {
				return safePage.filter(block => !isCaretAnchorBlock(block))
			}
			return safePage
		})
		return normalized.length ? normalized : [[buildCaretAnchorBlock()]]
	}

	const collectNewContentBlocksFromDom = () => {
		let allPages = document.querySelectorAll(
			'.word-pages .page-content.editable.new-content',
		)
		if (!allPages?.length) {
			allPages = document.querySelectorAll(
				'.word-container .page-content.editable.new-content',
			)
		}
		if (!allPages?.length) return []

		const allBlocks = []

		allPages.forEach(page => {
			const normalizedChildren = []
			Array.from(page.children).forEach(child => {
				if (child.classList?.contains('system-two-col-flow')) {
					normalizedChildren.push(...Array.from(child.children))
				} else {
					normalizedChildren.push(child)
				}
			})

			const pageBlocks = []
			Array.from(normalizedChildren).forEach(child => {
				if (!child) return
				// Clone ustida sanitize — live DOM o‘zgarishsiz qoladi (blob + data-file-id saqlanadi)
				// data-file-id bor rasmlarda blob ni saqlaymiz, re-render da rasm ko‘rinsin
				const clone = child.cloneNode(true)
				if (clone.querySelectorAll) {
					clone.querySelectorAll('img').forEach(img =>
						sanitizeLiveImageElement(img, { keepBlobIfHasFileId: true }),
					)
				}
				if (clone.tagName === 'DIV') {
					const hasNestedDivs = clone.querySelector('div') !== null
					const hasImportantClass =
						clone.classList.contains('text') ||
						clone.classList.contains('exp-title') ||
						clone.classList.contains('exp-d') ||
						clone.classList.contains('title')
					if (hasNestedDivs && !hasImportantClass) {
						pageBlocks.push(clone.innerHTML)
					} else {
						pageBlocks.push(clone.outerHTML)
					}
				} else if (
					clone.nodeType === Node.ELEMENT_NODE &&
					typeof clone.outerHTML === 'string'
				) {
					// SPAN (past qilingan rasm), P va boshqa elementlar — img tegi saqlansin
					pageBlocks.push(clone.outerHTML)
				}
			})

			const safePageBlocks = pageBlocks.filter(
				block => typeof block === 'string' && block.trim().length > 0,
			)
			if (safePageBlocks.length) {
				allBlocks.push(...safePageBlocks)
			} else {
				allBlocks.push(buildCaretAnchorBlock())
			}
		})

		return allBlocks
			.filter(item => !isManualPageBreakBlock(item))
			.map(item => sanitizePersistedImageHtml(item))
			.map(item => normalizeNewContentBlockHtml(item))
			.flatMap(item => explodeHtmlBlock(item))
			.filter(item => typeof item === 'string' && item.trim().length > 0)
	}

	useEffect(() => {
		const source = Array.isArray(newVuln) ? newVuln : []
		const snapshot = source
			.filter(item => !isManualPageBreakBlock(item))
			.map(item => sanitizePersistedImageHtml(item))
			.map(item => normalizeNewContentBlockHtml(item))
			.flatMap(item => explodeHtmlBlock(item))
			.filter(item => typeof item === 'string' && item.trim().length > 0)
		if (!areHtmlBlocksEqual(snapshot, source)) {
			newVulnSnapshotRef.current = snapshot
			setNewVuln(snapshot)
			return
		}
		newVulnSnapshotRef.current = snapshot
		if (!snapshot.length) snapshot.push(buildCaretAnchorBlock())
		const result = paginateContent(snapshot)
		setPages3(result)
	}, [newVuln])

	// Rasm yuklanayotgan bo‘lsa (data-file-id yo‘q) sync qilmaymiz — DOM ustidan yozib ketmaslik uchun
	const hasImagesUploading = useCallback(() => {
		const imgs = document.querySelectorAll(
			'.page-content.editable.new-content img, .editable-table img',
		)
		for (const img of imgs) {
			if (
				img.dataset?.uploadStarted === 'true' &&
				!(img.dataset?.fileId || img.getAttribute('data-file-id'))
			)
				return true
		}
		return false
	}, [])

	// Rasm pastiga matn yozilganda re-render da kontent yo‘qolmasligi uchun:
	// DOM dagi .new-content ni newVuln ga sinxronlaymiz (keyup da debounce bilan).
	const syncNewContentFromDom = useCallback((options = {}) => {
		const force = Boolean(options?.force)
		if (editingRef.current && !force) return
		if (hasImagesUploading()) return
		const sanitizedBlocks = collectNewContentBlocksFromDom()
		if (areHtmlBlocksEqual(sanitizedBlocks, newVulnSnapshotRef.current)) {
			return
		}
		newVulnSnapshotRef.current = sanitizedBlocks
		setNewVuln(sanitizedBlocks)
		// pages3 ni ham shu yerda yangilaymiz, re-render da eski pages3 ishlatilmasligi uchun
		setPages3(paginateContent(sanitizedBlocks))
	}, [hasImagesUploading])

	useEffect(() => {
		syncNewContentFromDomRef.current = syncNewContentFromDom
	}, [syncNewContentFromDom])

	useEffect(() => {
		if (!editing) return

		const applyImageInteractionStyles = () => {
			document
				.querySelectorAll('.page-content img, .editable-table td img')
				.forEach(img => {
					img.dataset.resizable = 'true'
					img.style.userSelect = 'none'
					img.style.cursor = editingRef.current ? 'nwse-resize' : 'default'
					img.style.touchAction = editingRef.current ? 'none' : 'auto'
				})
		}

		applyImageInteractionStyles()
		const raf = requestAnimationFrame(applyImageInteractionStyles)
		const rootNode =
			document.querySelector('.word-pages') ||
			document.querySelector('.word-container')
		const observer = new MutationObserver(() => {
			applyImageInteractionStyles()
		})
		if (rootNode) {
			observer.observe(rootNode, { childList: true, subtree: true })
		}

		return () => {
			cancelAnimationFrame(raf)
			observer.disconnect()
		}
	}, [editing, domRenderRevision])

	const saveAllChanges = async () => {
		if (isSavingRef.current) return
		isSavingRef.current = true
		overflowQueueRef.current = false
		try {
			const allDocImages = Array.from(
				document.querySelectorAll('.page-content img'),
			)
			allDocImages.forEach(img => {
				if (!img?.dataset) return
				delete img.dataset.srcResolved
				delete img.dataset.uploadProgress
				delete img.dataset.uploading
				delete img.dataset.uploadStarted
				delete img.dataset.pasteInit
			})

			const sanitizedBlocks = collectNewContentBlocksFromDom()
			// pagination qayta hisoblanadi
			const paged = paginateContent(sanitizedBlocks)

			// Table ma'lumotlarini o'qish (rasmlar bilan base64 da)
			const extractTableData = () => {
				// Ikkala jadvalni ham topish uchun umumiy klassni ishlatamiz
				const tables = document.querySelectorAll('table.expert-table')
				const data = {}

				// console.log("Jami topilgan jadvallar:", tables.length);

				tables.forEach((table, idx) => {
					// Agar jadvalda tbody bo'lsa, uning qatorlarini olamiz
					const rows = table.querySelectorAll('tbody tr')
					const tableContent = []

					rows.forEach(row => {
						const cells = row.querySelectorAll('td')
						// td ichidagi matnni va rasmlarni saqlaymiz
						const rowData = Array.from(cells).map(cell => {
							const cellText = cell.innerText.trim()
							const images = cell.querySelectorAll('img')

							// Agar katakda rasm bo'lsa, HTML sifatida saqlaymiz (base64 bilan)
							if (images.length > 0) {
								return sanitizePersistedImageHtml(cell.innerHTML)
							}

							return cellText
						})
						tableContent.push(rowData)
					})

					if (tableContent.length > 0) {
						// Har bir jadvalni o'z indeksi bilan saqlaymiz
						data[`table_${idx}`] = tableContent
					}
				})

				return data
			}

			const tables = extractTableData()

			// ObjectLinks ni parse qilish
			const currentLinks = objectLinksText
				.split('\n')
				.map(link => link.trim())
				.filter(link => link.length > 0)
			setObjectLinks(currentLinks)

			const riskTableToSave = (riskRows || [])
				.filter(r => r?.type === 'vuln')
				.map(r => ({
					a1: r.level,
					a2: r.count,
					a3: r.name,
					a4: r.resourceLabel,
				}))

			const tablesAndLinksJson = JSON.stringify({
				tables: tables,
				objectLinks: currentLinks,
				systemAccountsRows,
				riskTable: riskTableToSave,
				removedStaticPageIds,
			})

			const field8Data = [tablesAndLinksJson, ...paged]

			// console.log("Saving field8Data:", field8Data);

			await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
				19: id,
				8: field8Data,
			})

			newVulnSnapshotRef.current = sanitizedBlocks
			setNewVuln(sanitizedBlocks)
			setPages3(paged)
			setTableData(tables)
			setDomRenderRevision(prev => prev + 1)
			setEditing(false)
			updateEditorStats({ force: true })

			toast.success('Barcha o‘zgarishlar saqlandi')
		} catch (error) {
			console.error(error)
			toast.error('Saqlashda xatolik yuz berdi')
		} finally {
			isSavingRef.current = false
		}
	}

	useEffect(() => {
		shortcutActionsRef.current.save = saveAllChanges
	}, [saveAllChanges])

	useEffect(() => {
		shortcutActionsRef.current.openModal = () => openModal(expertize)
	}, [expertize])

	useEffect(() => {
		shortcutActionsRef.current.print = handlePrint
	}, [handlePrint])

	const handlePasteImage = async (file, imgElement) => {
		try {
			if (!file) {
				imageLogError('handlePasteImage skipped: file is missing')
				return null
			}
			// Bir marta yuklash: bir xil element uchun qayta yuklanmasin
			if (imgElement?.dataset?.uploadStarted === 'true') {
				imageLog(
					'handlePasteImage skipped: upload already started for this image',
				)
				return imgElement?.dataset?.fileId || null
			}
			if (imgElement) imgElement.dataset.uploadStarted = 'true'
			imageLog('handlePasteImage start', {
				fileName: file?.name,
				fileType: file?.type,
				fileSize: file?.size,
			})

			const safeType = file.type || 'image/png'
			const extFromType = safeType.includes('png')
				? 'png'
				: safeType.includes('jpeg') || safeType.includes('jpg')
					? 'jpg'
					: safeType.includes('webp')
						? 'webp'
						: 'png'

			const hasExt = typeof file.name === 'string' && file.name.includes('.')
			const safeName = hasExt ? file.name : `paste-${Date.now()}.${extFromType}`
			const uploadFile =
				file instanceof File
					? new File([file], safeName, { type: safeType })
					: file
			imageLog('handlePasteImage upload prepared', {
				safeName,
				safeType,
				size: uploadFile?.size,
			})

			const imageRes = await uploadFileViaRpc(stRef, uploadFile, id, p => {
				if (imgElement) imgElement.dataset.uploadProgress = String(p)
			})

			imageLog('handlePasteImage upload response', imageRes)

			const fileId = imageRes?.fileId || imageRes?.result?.fileId
			const responseSizeRaw =
				imageRes?.size ??
				imageRes?.result?.size ??
				uploadFile?.size ??
				file?.size
			const responseSize = Number(responseSizeRaw)
			const safeUploadedSize =
				Number.isFinite(responseSize) && responseSize > 0
					? Math.floor(responseSize)
					: undefined
			imageLog('handlePasteImage parsed response', {
				fileId,
				safeUploadedSize,
			})
			if (fileId && imgElement) {
				imgElement.setAttribute('data-file-id', fileId)
				imgElement.dataset.fileId = fileId
				imgElement.dataset.uploaded = 'true'
				if (safeUploadedSize) {
					const sizeStr = String(safeUploadedSize)
					imgElement.setAttribute('data-file-size', sizeStr)
					imgElement.dataset.fileSize = sizeStr
				}
				imgElement.dataset.srcResolved = 'true'
				// Tahrir rejimida blob URL ni saqlaymiz — rasm ko‘rinsin; saqlashda placeholder ishlatiladi
			}

			// Tahrir rejimida blob URL o‘rnatilmaydi — rasm data URL da qoladi, sahifa yuqoriga sakramaydi.
			// Blob URL sahifa qayta yuklanganda yoki tahrir yopilganda resolveStoredImages da o‘rnatiladi.
			if (!fileId) {
				imageLogError('handlePasteImage failed: fileId not found in response')
				return null
			}

			const saveRes = await sendRpcRequest(stRef, METHOD.ORDER_UPDATE, {
				19: id,
				15: safeUploadedSize
					? { 1: fileId, 2: safeUploadedSize }
					: { 1: fileId },
			})
			imageLog('handlePasteImage field15 save response', saveRes)

			// DOM da data-file-id bor endi — state ni sinxronlaymiz, re-render da rasm (id + placeholder) yo‘qolmasin
			syncNewContentFromDomRef.current?.({ force: true })

			// setUploadedFilesMeta chaqirmaymiz — re-render DOM ni qayta chizadi va past qilingan rasm yo‘qoladi.
			// Rasmda data-file-id va data-file-size bor; resolveStoredImages (tahrir yopilganda) shu orqali blob oladi.
			// Sahifa qayta yuklanganda meta serverdan (field 15) keladi.
			return fileId || null
		} catch (error) {
			imageLogError('handlePasteImage error', error)
			return null
		}
	}

	const downloadFileAll = async (id, size) => {
		if (!id) {
			imageLogError('downloadFileAll skipped: id missing')
			return null
		}
		const fid = String(id).replace(/^files\//i, '')
		const cacheKey = `files/${fid}`

		const safeSize = Number(size)
		if (!Number.isFinite(safeSize) || safeSize <= 0) {
			imageLogError('downloadFileAll invalid size', { fid, size })
			return null
		}
		const objectUrlKey = `${cacheKey}:${Math.floor(safeSize)}`
		const cacheMap = fileUrlCacheRef.current
		const inflightMap = fileDownloadInflightRef.current
		const cachedUrl = cacheMap.get(objectUrlKey)
		if (cachedUrl) {
			imageLog('downloadFileAll cache hit', { fid, cacheKey: objectUrlKey })
			return cachedUrl
		}
		const inflight = inflightMap.get(objectUrlKey)
		if (inflight) {
			imageLog('downloadFileAll await inflight', {
				fid,
				cacheKey: objectUrlKey,
			})
			return await inflight
		}

		imageLog('downloadFileAll request', { fid, safeSize })
		const task = (async () => {
			const blob = await downloadFileViaRpcNew(
				stRef,
				fid,
				fid,
				safeSize,
				() => {},
			)
			const url = URL.createObjectURL(blob)
			cacheMap.set(objectUrlKey, url)
			imageLog('downloadFileAll success', {
				fid,
				blobSize: blob?.size,
				hasUrl: Boolean(url),
			})
			return url
		})()
		inflightMap.set(objectUrlKey, task)
		try {
			return await task
		} finally {
			inflightMap.delete(objectUrlKey)
		}
	}

	useEffect(() => {
		return () => {
			try {
				const cacheMap = fileUrlCacheRef.current
				Array.from(cacheMap.values()).forEach(url => {
					if (typeof url === 'string' && url.startsWith('blob:')) {
						URL.revokeObjectURL(url)
					}
				})
				cacheMap.clear()
				fileDownloadInflightRef.current.clear()
			} catch {}
		}
	}, [])

	// ORDER_GET_ID dan kelgan 15-field bo'yicha rasmlarni fileId orqali yuklab, blob URL ni img.src ga o'rnatish (word/index.jsx dagi kabi)
	useEffect(() => {
		if (editing) return
		const meta = uploadedFilesMeta || {}

		let cancelled = false

		const run = async () => {
			const container = printRef.current || document.querySelector('.word-container')
			if (!container) return
			const imgs = Array.from(container.querySelectorAll('.page-content img, .editable-table img'))
			imageLog('resolveStoredImages start', {
				imagesCount: imgs.length,
				metaKeys: Object.keys(meta || {}).length,
			})
			for (const img of imgs) {
				if (cancelled) return
				if (!img) continue
				// word/index.jsx kabi: allaqachon blob o‘rnatilgan bo‘lsa qayta yuklamaslik
				if (
					img.dataset?.srcResolved === 'true' &&
					img.src &&
					!img.src.startsWith('data:')
				)
					continue
				const currentSrcRaw = (img.getAttribute('src') || '').trim()
				const currentSrc = currentSrcRaw || IMAGE_PLACEHOLDER_SRC
				let dfidRaw =
					img.getAttribute('data-file-id') || img.dataset.fileId || ''
				if (!dfidRaw) {
					const inferred = inferFileIdFromSrc(currentSrcRaw)
					if (inferred) {
						dfidRaw = inferred
						img.setAttribute('data-file-id', inferred)
					}
				}
				if (!dfidRaw) {
					// Rasmda file-id yo‘q bo‘lsa ham src bo‘sh qolmasin (broken icon o‘rniga placeholder)
					img.setAttribute('src', IMAGE_PLACEHOLDER_SRC)
					continue
				}

				if (isBrokenFileSrcValue(currentSrcRaw)) {
					img.setAttribute('src', IMAGE_PLACEHOLDER_SRC)
				}

				const hasResolvedSrc =
					currentSrc !== IMAGE_PLACEHOLDER_SRC &&
					!isBrokenFileSrcValue(currentSrc)
				const skipResolved =
					img.dataset.srcResolved === 'true' && hasResolvedSrc
				if (skipResolved) continue

				const dfid = dfidRaw.toString().trim()
				const fid = dfid.replace(/^files\//i, '')
				const attrSizeRaw =
					img.getAttribute('data-file-size') || img.dataset.fileSize || ''
				const attrSize = Number(attrSizeRaw)
				const metaSize = meta[dfid] ?? meta[fid] ?? meta[`files/${fid}`]
				const size = Number.isFinite(Number(metaSize))
					? Number(metaSize)
					: Number.isFinite(attrSize)
						? attrSize
						: undefined
				if (!(Number.isFinite(size) && size > 0)) {
					imageLogError('resolveStoredImages skip invalid size', {
						dfid,
						metaSize,
						attrSizeRaw,
					})
					img.setAttribute('src', IMAGE_PLACEHOLDER_SRC)
					continue
				}
				img.dataset.fileSize = String(Math.floor(size))

				try {
					// word/index.jsx bilan bir xil: downloadFileViaRpcNew(stRef, fid, "image.png", size)
					const blob = await downloadFileViaRpcNew(stRef, fid, 'image.png', size)
					if (cancelled || !blob) return
					const url = URL.createObjectURL(blob)
					resolvedBlobUrlsRef.current.add(url)
					img.src = url
					img.dataset.srcResolved = 'true'
					// id bilan birga size ham img da saqlansin, keyingi yuklab olishda size kerak
					img.setAttribute('data-file-size', String(Math.floor(size)))
					imageLog('resolveStoredImages resolved', { fid, size })
				} catch (e) {
					img.setAttribute('src', IMAGE_PLACEHOLDER_SRC)
					imageLogError('resolveStoredImages error', { fid, size, error: e })
				}
			}
		}

		// DOM render bo'lishi uchun microtask
		Promise.resolve().then(run)
		return () => {
			cancelled = true
			resolvedBlobUrlsRef.current.forEach(url => {
				try {
					URL.revokeObjectURL(url)
				} catch (_) {}
			})
			resolvedBlobUrlsRef.current.clear()
		}
	}, [editing, uploadedFilesMeta, pages3])

	const handleBlockChange = event => {
		const value = event.target.value
		setToolbarBlock(value)
		runEditorCommand('formatBlock', `<${value}>`)
	}

	const handleFontChange = event => {
		const value = event.target.value
		setToolbarFontName(value)
		runEditorCommand('fontName', value)
	}

	const handleFontSizeChange = event => {
		const value = Number.parseInt(event.target.value, 10) || 14
		setToolbarFontSize(value)
		runEditorCommand('fontSize', TOOLBAR_FONT_SIZE_TO_EXEC[value] ?? '4')
	}

	useEffect(() => {
		if (!editing) {
			imageResizeSessionRef.current = null
			return
		}

		const endResize = () => {
			const session = imageResizeSessionRef.current
			if (!session) return
			imageResizeSessionRef.current = null
			requestAnimationFrame(() => {
				handlePageOverflow()
			})
		}

		const onPointerMove = e => {
			const session = imageResizeSessionRef.current
			if (!session || !session.img?.isConnected) return
			if (!editingRef.current) return
			e.preventDefault()

			const deltaX = e.clientX - session.startX
			const deltaY = e.clientY - session.startY
			const newWidth = Math.max(50, Math.min(800, session.startWidth + deltaX))
			const newHeight = Math.max(
				50,
				Math.min(1200, session.startHeight + deltaY),
			)

			session.img.style.width = `${newWidth}px`
			session.img.style.height = `${newHeight}px`
			session.img.style.maxWidth = 'none'
		}

		const onPointerUp = () => {
			endResize()
		}

		const onPointerDown = e => {
			if (!editingRef.current || e.button !== 0) return
			const target = e.target instanceof Element ? e.target : null
			const img = target?.closest?.('.page-content img, .editable-table td img')
			if (!img) return

			e.preventDefault()
			e.stopPropagation()

			const rect = img.getBoundingClientRect()
			imageResizeSessionRef.current = {
				img,
				startX: e.clientX,
				startY: e.clientY,
				startWidth: rect.width || img.offsetWidth || img.width || 120,
				startHeight: rect.height || img.offsetHeight || img.height || 120,
			}

			img.style.cursor = 'nwse-resize'
			img.style.userSelect = 'none'
			img.style.maxWidth = 'none'
		}

		document.addEventListener('pointerdown', onPointerDown, true)
		document.addEventListener('pointermove', onPointerMove, { passive: false })
		document.addEventListener('pointerup', onPointerUp, { passive: true })

		return () => {
			document.removeEventListener('pointerdown', onPointerDown, true)
			document.removeEventListener('pointermove', onPointerMove)
			document.removeEventListener('pointerup', onPointerUp)
			imageResizeSessionRef.current = null
		}
	}, [editing, handlePageOverflow])

	const getActiveA4PageElement = useCallback(() => {
		const selection = window.getSelection()
		if (selection && selection.rangeCount > 0) {
			try {
				const range = selection.getRangeAt(0)
				const node =
					range.commonAncestorContainer?.nodeType === Node.TEXT_NODE
						? range.commonAncestorContainer.parentElement
						: range.commonAncestorContainer
				const pageFromSelection = node?.closest?.('.word-pages .a4') || null
				if (pageFromSelection) return pageFromSelection
			} catch {}
		}

		const pageFromActiveEditable =
			activeEditableRef.current?.closest?.('.word-pages .a4') || null
		if (pageFromActiveEditable) return pageFromActiveEditable

		if (selectedA4PageRef.current?.isConnected) return selectedA4PageRef.current
		return null
	}, [])

	const getActiveNewContentPageIndex = useCallback(() => {
		const newContentPages = Array.from(
			document.querySelectorAll(
				'.word-pages .page-content.editable.new-content',
			),
		)
		if (!newContentPages.length) return -1

		const activePage = getActiveA4PageElement()
		if (activePage) {
			const selectedPageContent = activePage.querySelector(
				'.page-content.editable.new-content',
			)
			if (selectedPageContent) {
				const selectedIdx = newContentPages.indexOf(selectedPageContent)
				if (selectedIdx >= 0) return selectedIdx
			}
		}

		let currentPageContent = null
		const selection = window.getSelection()
		if (selection && selection.rangeCount > 0) {
			try {
				const range = selection.getRangeAt(0)
				const node =
					range.commonAncestorContainer?.nodeType === Node.TEXT_NODE
						? range.commonAncestorContainer.parentElement
						: range.commonAncestorContainer
				currentPageContent =
					node?.closest?.('.page-content.editable.new-content') || null
			} catch {
				currentPageContent = null
			}
		}
		if (!currentPageContent && activeEditableRef.current) {
			currentPageContent = activeEditableRef.current.closest(
				'.page-content.editable.new-content',
			)
		}
		if (!currentPageContent) return newContentPages.length - 1
		const idx = newContentPages.indexOf(currentPageContent)
		return idx >= 0 ? idx : newContentPages.length - 1
	}, [getActiveA4PageElement])

	const applyModelPages = useCallback(
		(pages, focusPageIndex = null) => {
			const safePages = Array.isArray(pages) ? pages : []
			const normalizedPages = safePages.length
				? safePages.map(page =>
						Array.isArray(page) && page.length
							? page
							: [buildCaretAnchorBlock()],
					)
				: [[buildCaretAnchorBlock()]]
			const nextBlocks = flattenPagesToModelBlocks(normalizedPages)
			newVulnSnapshotRef.current = nextBlocks
			setNewVuln(nextBlocks)
			setPages3(normalizedPages)
			setDomRenderRevision(prev => prev + 1)

			requestAnimationFrame(() => {
				applySystemPageContentMetrics()
				renumberSystemPageFooters()
				const targetIndex =
					Number.isInteger(focusPageIndex) && focusPageIndex >= 0
						? focusPageIndex
						: normalizedPages.length - 1
				const newContentPages = Array.from(
					document.querySelectorAll(
						'.word-pages .page-content.editable.new-content',
					),
				)
				const targetPage = newContentPages[targetIndex] || null
				if (targetPage) {
					ensureNewContentCaretAnchor(targetPage, { collapseToStart: false })
				}
			})
		},
		[
			applySystemPageContentMetrics,
			ensureNewContentCaretAnchor,
			renumberSystemPageFooters,
		],
	)

	const handleInsertPageAfterCursor = useCallback(() => {
		if (!editingRef.current) return
		syncNewContentFromDomRef.current?.({ force: true })
		const currentPages = paginateContent(
			newVulnSnapshotRef.current?.length ? newVulnSnapshotRef.current : newVuln,
		)
		const pages = currentPages.length
			? [...currentPages]
			: [[buildCaretAnchorBlock()]]
		const activeIndex = getActiveNewContentPageIndex()
		const insertIndex = activeIndex >= 0 ? activeIndex + 1 : pages.length
		pages.splice(insertIndex, 0, [buildCaretAnchorBlock()])
		applyModelPages(pages, insertIndex)
		queueRiskLayoutRefresh()
	}, [
		applyModelPages,
		getActiveNewContentPageIndex,
		newVuln,
		queueRiskLayoutRefresh,
	])

	useEffect(() => {
		shortcutActionsRef.current.insertPage = handleInsertPageAfterCursor
	}, [handleInsertPageAfterCursor])

	const handleDeleteInsertedPage = useCallback(() => {
		if (!editingRef.current) return false
		const activePage = getActiveA4PageElement()
		const staticPageId = (activePage?.dataset?.staticPageId || '').trim()
		if (staticPageId) {
			const pageContent = activePage.querySelector('.page-content')
			const isEmptyStaticPage =
				!pageContent || !hasMeaningfulDomContent(pageContent)
			if (isEmptyStaticPage) {
				let removed = false
				setRemovedStaticPageIds(prev => {
					if (prev?.[staticPageId]) return prev
					removed = true
					return {
						...(prev || {}),
						[staticPageId]: true,
					}
				})
				if (removed) {
					selectedA4PageRef.current = null
					requestAnimationFrame(() => {
						applySystemPageContentMetrics()
						renumberSystemPageFooters()
						queueRiskLayoutRefresh()
					})
					return true
				}
			}
		}

		syncNewContentFromDomRef.current?.({ force: true })
		const currentPages = paginateContent(
			newVulnSnapshotRef.current?.length ? newVulnSnapshotRef.current : newVuln,
		)
		if (currentPages.length <= 1) return false
		const pages = [...currentPages]
		const activeIndex = getActiveNewContentPageIndex()
		const isPageEmpty = pageBlocks => {
			const safeBlocks = Array.isArray(pageBlocks) ? pageBlocks : []
			if (!safeBlocks.length) return true
			return !safeBlocks.some(block => {
				if (isCaretAnchorBlock(block)) return false
				return isMeaningfulHtmlBlock(block)
			})
		}

		let pageIndex = -1
		if (
			activeIndex >= 0 &&
			activeIndex < pages.length &&
			isPageEmpty(pages[activeIndex])
		) {
			pageIndex = activeIndex
		} else {
			// Cursor bo'sh sahifaga qo'yilmagan bo'lsa ham oxirgi bo'sh sahifani topib o'chiramiz.
			for (let i = pages.length - 1; i >= 0; i--) {
				if (isPageEmpty(pages[i])) {
					pageIndex = i
					break
				}
			}
		}
		if (pageIndex < 0) return false

		pages.splice(pageIndex, 1)
		const focusIndex = Math.max(0, pageIndex - 1)
		applyModelPages(pages, focusIndex)
		queueRiskLayoutRefresh()
		return true
	}, [
		applySystemPageContentMetrics,
		applyModelPages,
		getActiveA4PageElement,
		getActiveNewContentPageIndex,
		newVuln,
		queueRiskLayoutRefresh,
		renumberSystemPageFooters,
	])

	useEffect(() => {
		shortcutActionsRef.current.deletePage = handleDeleteInsertedPage
	}, [handleDeleteInsertedPage])

	const renderShortcutBadge = key => (
		<span className='ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded border border-white/60 bg-white/20 px-1 text-[10px] font-semibold leading-none text-white'>
			{key}
		</span>
	)

	useEffect(() => {
		const isTypingTarget = target => {
			if (!(target instanceof Element)) return false
			const tag = (target.tagName || '').toLowerCase()
			if (tag === 'input' || tag === 'textarea' || tag === 'select') return true
			if (target.isContentEditable) return true
			const editableAncestor =
				typeof target.closest === 'function'
					? target.closest('[contenteditable="true"]')
					: null
			return Boolean(editableAncestor)
		}

		const handleShortcutKeyDown = e => {
			if (e.defaultPrevented) return
			if (e.ctrlKey || e.metaKey || e.altKey) return
			if (e.repeat) return
			if (isTypingTarget(e.target)) return

			const key = (e.key || '').toLowerCase()
			const code = e.code || ''
			const isShortcut = (letter, keyCode) => key === letter || code === keyCode

			if (isShortcut('p', 'KeyP')) {
				if (editingRef.current) return
				e.preventDefault()
				shortcutActionsRef.current.print?.()
				return
			}

			if (isShortcut('e', 'KeyE')) {
				if (!editingRef.current) {
					e.preventDefault()
					setEditing(true)
				}
				return
			}

			if (!editingRef.current) return

			if (isShortcut('b', 'KeyB')) {
				e.preventDefault()
				shortcutActionsRef.current.openModal?.()
				return
			}

			if (isShortcut('s', 'KeyS')) {
				e.preventDefault()
				shortcutActionsRef.current.save?.()
				return
			}

			if (isShortcut('n', 'KeyN')) {
				e.preventDefault()
				shortcutActionsRef.current.insertPage?.()
			}
		}

		document.addEventListener('keydown', handleShortcutKeyDown)
		return () => {
			document.removeEventListener('keydown', handleShortcutKeyDown)
		}
	}, [])

	// Tahrir rejimida new-content flow ni faqat bir marta state dan to‘ldiramiz; keyin re-render da DOM ustiga yozilmasin (rasm/matn yo‘qolmasin)
	useEffect(() => {
		if (!editing) {
			newContentHydratedRef.current = false
			return
		}
		if (newContentHydratedRef.current) return
		const pages = detailPages || []
		pages.forEach((pageItems, pageIndex) => {
			const flow = newContentFlowRefs.current[pageIndex]
			if (flow && Array.isArray(pageItems) && pageItems.length > 0) {
				flow.innerHTML = pageItems
					.map(item => `<div>${item}</div>`)
					.join('')
			}
		})
		newContentHydratedRef.current = true
	}, [editing, detailPages])

	const currentPages = detailPages
	let renderedPageNumber = pageNumberPlan.section1Page
	const renderPageNumberLabel = () => {
		const pageNumber = renderedPageNumber
		renderedPageNumber += 1
		return (
			<span className='text-white max-w-[60%] mt-[20px]'>
				{appName} | {pageNumber}
			</span>
		)
	}
	return (
		<>
			<ExpertizeModal
				open={modalOpen}
				onClose={closeModal}
				item={expertize}
				itemId={id}
				onSaveDoc={handleSaveDocFromModal}
				resourceOptions={objectLinks}
			/>

			<div
				className={`word-container dark:text-[#333] relative ${editing ? 'editing' : ''}`}
				ref={printRef}
			>
				<div
					className={`sticky top-20 z-50 mb-3 print-btns ${!editing && 'right-5'}`}
				>
					<div className='flex justify-end w-full'>
						<div
							className={`flex ${!editing ? 'w-auto' : 'w-full'} flex-wrap items-center gap-2 rounded-2xl border border-slate-300 p-2 shadow-sm backdrop-blur ${!editing && 'w-fit justify-center'}`}
						>
							<EditorToolbar
								editing={editing}
								onBack={() => window.history.back()}
								onCommand={runEditorCommand}
								onInsertLink={handleInsertLink}
								onInsertPage={handleInsertPageAfterCursor}
								onDeletePage={handleDeleteInsertedPage}
								zoom={zoom}
								onZoomChange={handleZoomChange}
								zoomOptions={TOOLBAR_ZOOM_OPTIONS}
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
							/>

							<div className='ml-auto flex flex-wrap items-center gap-2'>
								{editing && (
									<button
										className='inline-flex h-9 items-center gap-1 rounded-lg bg-[#bb9769] px-3 text-sm text-white transition hover:bg-[#a07f5a]'
										onClick={() => openModal(expertize)}
									>
										<IoIosAddCircleOutline size={18} />
										Zaiflik qo'shish
										{renderShortcutBadge('B')}
									</button>
								)}
								{!editing && (
									<button
										onClick={handlePrint}
										className={`inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm text-white ${loading ? 'bg-slate-400' : 'bg-[#bb9769] hover:bg-[#a07f5a]'}`}
									>
										<iconify-icon
											icon='pepicons-print:printer'
											width='1.1em'
											height='1.1em'
										></iconify-icon>
										Chop etish
										{renderShortcutBadge('P')}
									</button>
								)}
								<div
									className='edit-btn-global'
									onClick={() => {
										if (editing) {
											saveAllChanges()
										} else {
											setEditing(true)
										}
									}}
								>
									{editing ? (
										<div className='cursor-pointer change-btn h-9 rounded-lg'>
											<div className='bg-green-500 hover:bg-green-600'>
												<FaSave />
												<span>Saqlash </span>
												{renderShortcutBadge('S')}
											</div>
										</div>
									) : (
										<div className='change-btn flex gap-2 cursor-pointer rounded-lg h-9'>
											<div className='bg-[#bb9769] hover:bg-[#a07f5a]'>
												<FaPen /> <span>Tahrirlash</span>
												{renderShortcutBadge('E')}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					key={`word-pages-${editing ? 'edit' : 'view'}-${domRenderRevision}`}
					className='word-pages'
					style={{ zoom: `${zoom}%` }}
				>
					<div className='a4 first-a4 system system-first'>
						<div className='page-content flex justify-center' style={{justifyContent: "center"}}>
							<h2
								className={`application-name system ${appName.length > 20 ? 'mb-[50px]' : 'mt-[50px]'}`}
							>
								“{appName}” axborot tizimi{' '}
							</h2>
						</div>
					</div>
					{tocPages.map((pageItems, pageIndex) => (
						<div
							key={`toc-${pageIndex}`}
							className={`a4 ${pageIndex % 2 === 0 ? 'mundarija1 system-m1' : 'mundarija2 system-m2'}`}
						>
							<div className='page-content top'>
								<div
									className={`mundarija-content mundarija-content-system editable ${pageIndex === 0 ? 'first' : ''}`}
									contentEditable={editing}
									suppressContentEditableWarning
									onInput={e =>
										updateTocPageHtml(pageIndex, e.currentTarget.innerHTML)
									}
									dangerouslySetInnerHTML={{
										__html: Array.isArray(pageItems)
											? pageItems.join('')
											: pageItems || '',
									}}
								/>
							</div>
						</div>
					))}
					<div className='a4 system-c system-text-page'>
						{0 % 2 === 0 ? (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-tops.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottoms.jpg'
									alt=''
								/>
							</>
						) : (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-top.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottom.jpg'
									alt=''
								/>
							</>
						)}
						<div className='page-content editable'>
							<div className='system-section-header'>
								<div className='system-section-title'>
									{systemSectionsJson.section1.title}
								</div>
								<div className='system-section-subtitle'>
									{systemSectionsJson.section1.subtitle}
								</div>
							</div>
							<div className='system-bar-title'>1.1. Atamalar va ta’riflar</div>
							<div>
								<div className='system-col'>
									{systemSectionsJson.section1.leftItems.map(item => (
										<p className='system-paragraph' key={item.term}>
											<sepan className='system-term'>{item.term}</sepan> —{' '}
											{item.text}
										</p>
									))}
								</div>
								<div className='system-col'>
									{systemSectionsJson.section1.rightItems.map(item => (
										<p className='system-paragraph' key={item.term}>
											<span className='system-term'>{item.term}</span> —{' '}
											{item.text}
										</p>
									))}
								</div>
							</div>
						</div>
						<div
							className='page-number flex justify-center mt-auto text-white items-center'
							style={{ bottom: '40px' }}
						>
							{renderPageNumberLabel()}
						</div>
					</div>
					<div className='a4 system-c system-text-page'>
						{1 % 2 === 0 ? (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-tops.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottoms.jpg'
									alt=''
								/>
							</>
						) : (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-top.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottom.jpg'
									alt=''
								/>
							</>
						)}
						<div className='page-content editable'>
							<div>
								<div className='system-col'>
									<p className='system-paragraph'>
										{htmlInjectionContinuation}
									</p>
									{systemSectionsJson.section2.leftItems.map(item => (
										<p className='system-paragraph' key={item.term}>
											<span className='system-term'>{item.term}</span> —{' '}
											{item.text}
										</p>
									))}
									<div className='system-bar-title'>
										1.2. Ekspertiza o‘tkazish uchun asos
									</div>
									<p className='system-paragraph'>
										"Kiberxavfsizlik markazi" davlat unitar korxonasi va "
										{orgName}" {orgTypeName} o'rtasida tuzilgan {contractDate}{' '}
										<b>"{appName}"</b> axborot tizimini kiberxavfsizlik
										talablariga muvofiqligi yuzasidan ekspertizadan o'tkazish
										to'g'risidagi <b>"{contractName}"</b>-son shartnoma.
									</p>
								</div>
								<div className='system-col'>
									<div className='system-bar-title'>
										1.3. Ekspertiza obyekti
									</div>
									{editing ? (
										<div className='system-paragraph'>
											<label className='block text-sm text-gray-500 mb-1'>
												Linklar (har bir qatorda bitta):
											</label>
											<textarea
												className='w-full border border-gray-300 rounded p-2 min-h-[100px]'
												value={objectLinksText}
												onChange={e => setObjectLinksText(e.target.value)}
												placeholder='https://example.com'
											/>
										</div>
									) : objectLinks.length === 1 ? (
										<p className='system-paragraph'>
											<b>"{objectLinks[0]}"</b> URL manzilida joylashgan "
											{appName}" axborot tizimi.
										</p>
									) : (
										<>
											<p className='system-paragraph'>
												“{appName}” axborot tizimining quyidagi resurslari:
											</p>
											<ul className='system-list'>
												{objectLinks.map(link => (
													<li key={link}>“{link}”;</li>
												))}
											</ul>
										</>
									)}
									<div className='system-bar-title'>
										1.4. Ekspertiza o‘tkazish tartibi
									</div>
									<p className='system-paragraph'>
										{systemSectionsJson.section2.processIntro}
									</p>
									{systemSectionsJson.section2.processItems.map(item => (
										<p className='system-paragraph' key={item.term}>
											<span className='system-term'>{item.term}</span> –{' '}
											{item.text}
										</p>
									))}
								</div>
							</div>
						</div>
						<div
							className='page-number flex justify-center mt-auto text-white items-center'
							style={{ bottom: '40px' }}
						>
							{renderPageNumberLabel()}
						</div>
					</div>
					<div className='a4 system-c system-text-page'>
						{2 % 2 === 0 ? (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-tops.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottoms.jpg'
									alt=''
								/>
							</>
						) : (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-top.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottom.jpg'
									alt=''
								/>
							</>
						)}
						<div className='page-content editable'>
							<div>
								<div className='system-col'>
									<p className='system-paragraph'>{whiteBoxContinuation}</p>
									<p className='system-paragraph'>
										{systemSectionsJson.section3.intro}
									</p>
									<ul className='system-list'>
										{systemSectionsJson.section3.bulletsLeft.map(item => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
								<div className='system-col'>
									<ul className='system-list'>
										{systemSectionsJson.section3.bulletsRight.map(item => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							</div>
							<p className='system-paragraph'>
								{systemSectionsJson.section3.tableIntro}
							</p>
							<div className='system-table-label'>1-jadval</div>
							<table className='system-table'>
								<thead>
									<tr>
										<th style={{ width: '50px' }}>T/r</th>
										<th>Tadbir nomi</th>
									</tr>
								</thead>
								<tbody
									dangerouslySetInnerHTML={{
										__html: (sectionTablePages[0] || []).join(''),
									}}
								/>
							</table>
						</div>
						<div
							className='page-number flex justify-center mt-auto text-white items-center'
							style={{ bottom: '40px' }}
						>
							{renderPageNumberLabel()}
						</div>
					</div>

					{sectionTablePages.slice(1).map((rows, pageIndex) => (
						<div
							key={`section-table-${pageIndex}`}
							className='a4 system-c system-text-page'
						>
							{(pageIndex + 1) % 2 === 0 ? (
								<>
									<img
										className='system-top-img w-full min-w-full'
										src='/assets/system/ax-tops.png'
										alt=''
									/>
									<img
										className='system-bottom-img w-full min-w-full'
										src='/assets/system/ax-bottoms.jpg'
										alt=''
									/>
								</>
							) : (
								<>
									<img
										className='system-top-img w-full min-w-full'
										src='/assets/system/ax-top.png'
										alt=''
									/>
									<img
										className='system-bottom-img w-full min-w-full'
										src='/assets/system/ax-bottom.jpg'
										alt=''
									/>
								</>
							)}
							<div className='page-content editable'>
								<div className='system-table-label'>1-jadval</div>
								<table className='system-table'>
									<thead>
										<tr>
											<th style={{ width: '50px' }}>T/r</th>
											<th>Tadbir nomi</th>
										</tr>
									</thead>
									<tbody dangerouslySetInnerHTML={{ __html: rows.join('') }} />
								</table>
							</div>
							<div
								className='page-number flex justify-center mt-auto text-white items-center'
								style={{ bottom: '40px' }}
							>
								{renderPageNumberLabel()}
							</div>
						</div>
					))}

					<div className='a4 system-c'>
						{5 % 2 === 0 ? (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-tops.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottoms.jpg'
									alt=''
								/>
							</>
						) : (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-top.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottom.jpg'
									alt=''
								/>
							</>
						)}

						<div className='page-content editable'>
							<table className='system-table mb-5'>
								<thead>
									<tr>
										<th className='max-w-[50px] w-[50px]'>T/r</th>
										<th>Tadbir nomi</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='max-w-[50px]'>5.</td>
										<td className='max-w-[500px]'>
											Axborot tizimida aniqlangan zaifliklar va yo‘l qo‘yilgan
											xatoliklar haqiqiyligini tekshirish maqsadida test
											sinovlari orqali ekspluatatsiya qilib ko‘rish
										</td>
									</tr>
									<tr>
										<td className='max-w-[50px]'>6.</td>
										<td className='max-w-[500px]'>
											O‘rganish bo‘yicha yakuniy ishlarni amalga oshirish
										</td>
									</tr>
									<tr>
										<td className='max-w-[50px]'>7.</td>
										<td className='max-w-[500px]'>
											Test sinovlari orqali ekspluatatsiya qilib ko‘rish
										</td>
									</tr>
								</tbody>
							</table>
							<div className='system-extra-info'>
								<div>
									<div className='system-col'>
										<div className='system-bar-title'>
											1.5. Ekspertiza yuzasidan qo‘shimcha ma’lumotlar
										</div>
										<p className='system-paragraph'>
											“{appName}” axborot tizimida ekspertiza buyurtmachi
											tomonidan taqdim
										</p>
									</div>
									<div className='system-col'>
										<p className='system-paragraph'>
											qilingan qayd yozuvi va ma’lumotlar asosida olib borildi
											(2-jadval).
										</p>
									</div>
								</div>
								<div className='system-table-label system-table-label-right'>
									2-jadval
								</div>
							</div>
							{renderSystemAccountsTable({
								pageRows: systemAccountsPages[0] || [],
								globalStartIndex: systemAccountsPageStarts[0] || 0,
								showAddButton: systemAccountsPages.length <= 1,
							})}
						</div>
						<div
							className='page-number flex justify-center mt-auto text-white items-center'
							style={{ bottom: '40px' }}
						>
							{renderPageNumberLabel()}
						</div>
					</div>
					{systemAccountsPages.slice(1).map((pageRows, extraIdx) => {
						const pageIndex = extraIdx + 1
						const globalStartIndex = systemAccountsPageStarts[pageIndex] || 0
						const isLast = pageIndex === systemAccountsPages.length - 1

						return (
							<div
								key={`system-accounts-page-${pageIndex}`}
								className='a4 system-c'
							>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-tops.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottoms.jpg'
									alt=''
								/>

								<div className='page-content editable'>
									{renderSystemAccountsTable({
										pageRows,
										globalStartIndex,
										showAddButton: isLast,
									})}
								</div>
								<div
									className='page-number flex justify-center mt-auto text-white items-center'
									style={{ bottom: '40px' }}
								>
									{renderPageNumberLabel()}
								</div>
							</div>
						)
					})}
					<div className='a4 system-c'>
						{7 % 2 === 0 ? (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-tops.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottoms.jpg'
									alt=''
								/>
							</>
						) : (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-top.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottom.jpg'
									alt=''
								/>
							</>
						)}

						<div className='page-content editable'>
							<div className='system-section-header'>
								<div className='system-section-title'>
									{systemSectionsJson.section2.title}
								</div>
								<div className='system-section-subtitle'>
									{systemSectionsJson.section2.subtitle}
								</div>
							</div>
							<div className='system-bar-title'>
								2.1. Ekspertiza natijalari to‘g‘risida umumlashtirilgan ma’lumot
							</div>
							<div>
								<div className='system-col'>
									<p className='system-paragraph'>
										Ekspertiza natijalari asosida 3 xil xavflilik darajasiga
										ega, ya’ni <b>yuqori, o‘rta</b> va <b>past</b> xavflilik
										darajasidagi kiberxavfsizlik zaifliklari aniqlanishi mumkin.
									</p>
									<p className='system-paragraph'>
										Kiberxavfsizlik zaifliklari xavflilik darajasidan kelib
										chiqqan holda axborot tizimiga quyidagi risklar xavf soladi.
									</p>
									<div className='system-highlight'>
										<p className='system-paragraph'>
											<span className='system-term'>Yuqori</span> - ushbu
											turdagi kiberxavfsizlik zaifliklari tizimga eng yuqori
											xavf ko‘rsatadi. Ulardan foydalanish natijasida tizimga
											ruxsatsiz kirish, uning ma’lumotlaridan foydalanish,
											ularni oshkor bo‘lish yoki o‘zgarish holatlariga olib
											keladi, jumladan konfidensial turdagi ma’lumotlar ham.
										</p>
									</div>
									<div className='system-highlight'>
										<p className='system-paragraph'>
											<span className='system-term'>O‘rta</span> - ushbu turdagi
											kiberxavfsizlik zaifliklari ko‘p holatlarda boshqa turdagi
											xavflilik darajasi yuqori bo‘lgan harakatlarni amalga
											oshirishga, axborot tizimi bilan bog‘liq ma’lumotlarni
											to‘plashga xizmat qiladi.
										</p>
									</div>
								</div>
								<div className='system-col'>
									<p className='system-paragraph system-highlight'>
										<span className='system-term'>Past</span> - ushbu turdagi
										kiberxavfsizlik zaifliklari axborot tizimida umumiy
										ma’lumotlarga ega bo‘lish imkoniyatini taqdim etadi.
									</p>
									<p className='system-paragraph'>
										Olib borilgan ekspertiza natijalari asosida aniqlangan
										kiberxavfsizlik zaifliklari to‘g‘risida umumlashtirilgan
										ma’lumot 3-jadvalda taqdim qilingan.
									</p>
									<div className='system-table-label'>3-jadval</div>
									<table
										key={`risk-main-${editing ? 'edit' : 'view'}`}
										className='system-risk-table'
										contentEditable={false}
										suppressContentEditableWarning
									>
										<thead>
											<tr>
												<th>Xavflilik darajasi</th>
												<th>Aniqlangan zaiflik</th>
												<th>Soni</th>
												{editing && (
													<th
														className='risk-delete-head'
														style={{ width: '48px' }}
													></th>
												)}
											</tr>
										</thead>
										<tbody>
											{renderRiskTableBody(
												riskFirstPageRows || [],
												'risk',
												editing,
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div
							className='page-number flex justify-center mt-auto text-white items-center'
							style={{ bottom: '40px' }}
						>
							{renderPageNumberLabel()}
						</div>
					</div>
					{riskContinuationPages.length > 0 && (
						<>
							{riskContinuationPages.map((rows, pageIdx) => {
								const virtualIndex = 8 + pageIdx // 8 sahifadagi fon tartibi (oldingi kabi)
								const isEven = virtualIndex % 2 === 0

								return (
									<div key={`risk-cont-${pageIdx}`} className='a4 system-c'>
										{isEven ? (
											<>
												<img
													className='system-top-img w-full min-w-full'
													src='/assets/system/ax-tops.png'
													alt=''
												/>
												<img
													className='system-bottom-img w-full min-w-full'
													src='/assets/system/ax-bottoms.jpg'
													alt=''
												/>
											</>
										) : (
											<>
												<img
													className='system-top-img w-full min-w-full'
													src='/assets/system/ax-top.png'
													alt=''
												/>
												<img
													className='system-bottom-img w-full min-w-full'
													src='/assets/system/ax-bottom.jpg'
													alt=''
												/>
											</>
										)}

										<div className='page-content editable'>
											<div className='system-table-label'>
												3-jadval (davomi)
											</div>
											<div className='system-risk-columns'>
												<table
													key={`risk-cont-${pageIdx}-${editing ? 'edit' : 'view'}`}
													className='system-risk-table'
													contentEditable={false}
													suppressContentEditableWarning
												>
													<thead>
														<tr>
															<th>Xavflilik darajasi</th>
															<th>Aniqlangan zaiflik</th>
															<th>Soni</th>
															{editing && (
																<th
																	className='risk-delete-head'
																	style={{ width: '48px' }}
																></th>
															)}
														</tr>
													</thead>
													<tbody>
														{renderRiskTableBody(
															rows || [],
															`riskc-${pageIdx}`,
															editing,
														)}
													</tbody>
												</table>
											</div>
										</div>
										<div
											className='page-number flex justify-center mt-auto text-white items-center'
											style={{ bottom: '40px' }}
										>
											{renderPageNumberLabel()}
										</div>
									</div>
								)
							})}
						</>
					)}

					{currentPages &&
						currentPages.map((pageItems, pageIndex) => (
							<div key={pageIndex} className='a4 system-c'>
								{pageIndex % 2 === 0 ? (
									<>
										<img
											className='system-top-img w-full min-w-full'
											src='/assets/system/ax-tops.png'
											alt=''
										/>
										<img
											className='system-bottom-img w-full min-w-full'
											src='/assets/system/ax-bottoms.jpg'
											alt=''
										/>
									</>
								) : (
									<>
										<img
											className='system-top-img w-full min-w-full'
											src='/assets/system/ax-top.png'
											alt=''
										/>
										<img
											className='system-bottom-img w-full min-w-full'
											src='/assets/system/ax-bottom.jpg'
											alt=''
										/>
									</>
								)}

								<div className='page-content editable new-content'>
									{editing ? (
										<div
											className='system-two-col-flow'
											ref={el => {
												if (el) newContentFlowRefs.current[pageIndex] = el
											}}
										/>
									) : (
										<div className='system-two-col-flow'>
											{pageItems.map((item, i) => (
												<div
													key={i}
													dangerouslySetInnerHTML={{ __html: item }}
												/>
											))}
										</div>
									)}
								</div>

								<div
									className='page-number flex justify-center mt-auto text-white items-center'
									style={{ bottom: '40px' }}
								>
									{renderPageNumberLabel()}
								</div>
							</div>
						))}

					<div className='a4 system-c'>
						{10 % 2 === 0 ? (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-tops.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottoms.jpg'
									alt=''
								/>
							</>
						) : (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-top.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottom.jpg'
									alt=''
								/>
							</>
						)}

						<div className='page-content editable'>
							<div className='system-section-header'>
								<div className='system-section-title'>
									{systemSectionsJson.section3.title}
								</div>
								<div className='system-section-subtitle'>
									{systemSectionsJson.section3.subtitle}
								</div>
							</div>
							<div>
								<div className='system-col'>
									<p className='system-paragraph'>
										“{appName}” axborot tizimi kiberxavfsizlik talablariga
										muvofiqligi yuzasidan o‘tkazilgan ekspertiza natijasida
										kiberxavfsizlikning yuqori va o‘rta darajadagi zaifliklari
										aniqlandi.
									</p>
									<p className='system-paragraph'>
										Ekspertiza davrida aniqlangan zaifliklar tizim va uning
										resurslaridan (funksional imkoniyatlaridan) ruxsatsiz
										foydalanish, zararli fayllarni yuklash va tarqatish,
										ma’lumotlarni oshkor bo‘lish va sizib chiqish holatlariga
										olib kelishi mumkin.
									</p>
									<p className='system-paragraph'>
										Shu o‘rinda ushbu salbiy holatlarni oldini olish, shuningdek
										kiberxavfsizlikni ta’minlanganlik darajasini yaxshilash
										maqsadida aniqlangan kiberxavfsizlik zaifliklarini bartaraf
										etish yuzasidan tavsiyalarni inobatga olish hamda quyidagi
										chora-tadbirlar amalga oshirish tavsiya etiladi:
									</p>
									<ul className='system-paragraph'>
										<li>
											doimiy ravishda operatsion tizimlar, dasturiy ta’minotlar
											va himoya vositalarining versiyalarini hamda signaturalar
											bazasini yangilanishini qo‘llab-quvvatlash;
										</li>
										<li>
											axborotni himoya qilish vositalari, xususan “WAF” va
											“IDS/IPS”lardan samarali foydalanish;
										</li>
									</ul>
								</div>
								<div className='system-col'>
									<ul className='system-paragraph'>
										<li>
											davriy muddatlarda ishlab chiqilgan yoki joriy etilgan
											axborot tizimlarini kiberxavfsizlik talablari bo‘yicha
											tekshiruvdan o‘tkazish;
										</li>
										<li>
											tizimning autentifikatsiya jarayonlarida “Elektron raqamli
											imzo”lardan, “OTP”lardan foydalanishni doimiy
											qo‘llab-quvvatlash;
										</li>
										<li>
											inyeksiya va mazkur turga oid zaifliklarni bartaraf etish
											yuzasidan choralar ko‘rish davrida barcha ma’lumotlarni
											kiritish qismlarini ham inobatga olish tavsiya etiladi.
										</li>
									</ul>
									<div className='system-note-title'>Ma’lumot o‘rnida:</div>
									<p className='system-note'>
										Ekspertiza hisoboti 2025-yil 18-dekabr kunida olingan
										yakuniy tahliliy natijalar asosida shakllantirilgan. Shu
										munosabat bilan, “Kiberxavfsizlik markazi” DUK mazkur
										muddatdan tashqari vaqtlarda aniqlangan kiberxavfsizlik
										zaifliklari yuzasidan javobgarlikni o‘z zimmasiga olmaydi.
									</p>
								</div>
							</div>
						</div>
						<div
							className='page-number flex justify-center mt-auto text-white items-center'
							style={{ bottom: '40px' }}
						>
							{renderPageNumberLabel()}
						</div>
					</div>
					<div className='a4 system-c'>
						{10 % 2 === 0 ? (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-tops.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottoms.jpg'
									alt=''
								/>
							</>
						) : (
							<>
								<img
									className='system-top-img w-full min-w-full'
									src='/assets/system/ax-top.png'
									alt=''
								/>
								<img
									className='system-bottom-img w-full min-w-full'
									src='/assets/system/ax-bottom.jpg'
									alt=''
								/>
							</>
						)}

						<div className='page-content editable relative h-full'>
							<div className='system-section-header'>
								<div className='font-semibold text-left text-xl'>
									"Kiberxavfsizlik markazi" DUK mutaxassislari:
								</div>
							</div>
							<div className='mt-10'>
								<div className='system-col'>
									{workers
										?.filter(w => w.a3 === 2)
										.map(item => (
											<div
												key={item.a1}
												className='grid grid-cols-3 gap-10 w-full'
											>
												<div>
													<p className='system-paragraph'>{item.a2}</p>
												</div>
												<div className='w-48 border-b border-black'></div>
												<div>-toifali mutaxassis</div>
											</div>
										))}
								</div>
							</div>

							<div className='absolute bottom-6'>
								<div className='system-col'>
									<p className='system-paragraph'>
										Ro'yhat tartib raqami{' '}
										<span className='w-10 border-b border-black'></span>
										-XDFU-son
									</p>
									<p className='system-paragraph'>
										Kompyuterda ikki nusxada chop etildi.
									</p>
									<p className='system-paragraph'>
										Fayl saqlanmadi. Xomaki matnsiz.
									</p>
									<p className='system-paragraph'>
										1-nusxa - "{orgName}" {orgTypeName} ga
									</p>
									<p className='system-paragraph'>
										2-nusxa - Nazorat va hujjatlar
									</p>
									<p className='system-paragraph'>aylanishi bo'limi jildiga</p>
									<p className='system-paragraph'>
										Bajardi va chop etdi I. Odinayev
									</p>
									<p className='system-paragraph'>Tel.: (71) 203-00-24</p>
									<p className='system-paragraph'>
										2025-yil "
										<span className='w-10 border-b border-black'></span>"-
										<span className='w-32 border-b border-black'></span>
									</p>
								</div>
							</div>
						</div>
						<div
							className='page-number flex justify-center mt-auto text-white items-center'
							style={{ bottom: '40px' }}
						>
							{renderPageNumberLabel()}
						</div>
					</div>
					{!removedStaticPageIds.tailEmpty1 && (
						<div className='a4 system-c' data-static-page-id='tailEmpty1'>
							{10 % 2 === 0 ? (
								<>
									<img
										className='system-top-img w-full min-w-full'
										src='/assets/system/ax-tops.png'
										alt=''
									/>
									<img
										className='system-bottom-img w-full min-w-full'
										src='/assets/system/ax-bottoms.jpg'
										alt=''
									/>
								</>
							) : (
								<>
									<img
										className='system-top-img w-full min-w-full'
										src='/assets/system/ax-top.png'
										alt=''
									/>
									<img
										className='system-bottom-img w-full min-w-full'
										src='/assets/system/ax-bottom.jpg'
										alt=''
									/>
								</>
							)}

							<div
								className='page-number flex justify-center mt-auto text-white items-center'
								style={{ bottom: '40px' }}
							>
								{renderPageNumberLabel()}
							</div>
						</div>
					)}
					{!removedStaticPageIds.tailEmpty2 && (
						<div className='a4 system-c' data-static-page-id='tailEmpty2'>
							{10 % 2 === 0 ? (
								<>
									<img
										className='system-top-img w-full min-w-full'
										src='/assets/system/ax-tops.png'
										alt=''
									/>
									<img
										className='system-bottom-img w-full min-w-full'
										src='/assets/system/ax-bottoms.jpg'
										alt=''
									/>
								</>
							) : (
								<>
									<img
										className='system-top-img w-full min-w-full'
										src='/assets/system/ax-top.png'
										alt=''
									/>
									<img
										className='system-bottom-img w-full min-w-full'
										src='/assets/system/ax-bottom.jpg'
										alt=''
									/>
								</>
							)}

							<div
								className='page-number flex justify-center mt-auto text-white items-center'
								style={{ bottom: '40px' }}
							>
								{renderPageNumberLabel()}
							</div>
						</div>
					)}

					{!removedStaticPageIds.systemBackCover && (
						<div
							className='a4 system-b'
							data-static-page-id='systemBackCover'
						></div>
					)}
				</div>
			</div>
		</>
	)
}

export default SystemWord