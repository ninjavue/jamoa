import { IoArrowBack } from 'react-icons/io5'
import { RiArrowGoBackLine, RiArrowGoForwardLine } from 'react-icons/ri'
import {
	AlignCenter,
	AlignJustify,
	AlignLeft,
	AlignRight,
	Bold,
	Highlighter,
	Italic,
	Link2,
	List,
	ListOrdered,
	Minus,
	Palette,
	Plus,
	Strikethrough,
	Type,
	Underline,
	Unlink,
} from 'lucide-react'

const ToolbarGroup = ({ children, className = '' }) => (
	<div
		className={`inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 ${className}`}
	>
		{children}
	</div>
)

const ToolbarIconButton = ({
	title,
	onClick,
	children,
	active = false,
	className = '',
}) => (
	<button
		type='button'
		title={title}
		onMouseDown={event => {
			// Keep selection active while toolbar buttons are clicked.
			event.preventDefault()
		}}
		onClick={onClick}
		className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border text-slate-700 transition ${
			active
				? 'border-sky-300 bg-sky-50 text-sky-700'
				: 'border-transparent hover:border-slate-200 hover:bg-slate-50'
		} ${className}`}
	>
		{children}
	</button>
)

const EditorToolbar = ({
	editing,
	onBack,
	onCommand,
	onInsertLink,
	zoom,
	onZoomChange,
	zoomOptions = [],
	toolbarBlock,
	toolbarBlocks = [],
	onBlockChange,
	toolbarFontName,
	toolbarFontFamilies = [],
	onFontChange,
	toolbarFontSize,
	toolbarFontSizes = [],
	onFontSizeChange,
	toolbarState = {},
	showZoom = true,
	showHistory = true,
	showBack = true,
}) => {
	if (!editing) return null

	return (
		<>
			{showHistory && (
				<ToolbarGroup>
					{showBack && (
						<ToolbarIconButton title='Back' onClick={onBack}>
							<IoArrowBack size={18} />
						</ToolbarIconButton>
					)}
					<ToolbarIconButton title='Undo' onClick={() => onCommand?.('undo')}>
						<RiArrowGoBackLine size={17} />
					</ToolbarIconButton>
					<ToolbarIconButton title='Redo' onClick={() => onCommand?.('redo')}>
						<RiArrowGoForwardLine size={17} />
					</ToolbarIconButton>
				</ToolbarGroup>
			)}

			{showZoom &&
				typeof zoom === 'number' &&
				typeof onZoomChange === 'function' && (
					<ToolbarGroup>
						<ToolbarIconButton
							title='Zoom out'
							onClick={() => onZoomChange(zoom - 5)}
						>
							<Minus size={16} />
						</ToolbarIconButton>
						<select
							value={zoom}
							onChange={event =>
								onZoomChange(Number.parseInt(event.target.value, 10))
							}
							className='h-9 rounded-lg border border-slate-200 bg-white px-2 text-sm outline-none'
						>
							{zoomOptions.map(value => (
								<option key={value} value={value}>
									{value}%
								</option>
							))}
						</select>
						<ToolbarIconButton
							title='Zoom in'
							onClick={() => onZoomChange(zoom + 5)}
						>
							<Plus size={16} />
						</ToolbarIconButton>
					</ToolbarGroup>
				)}

			{!!toolbarBlocks.length &&
				!!toolbarFontFamilies.length &&
				!!toolbarFontSizes.length && (
					<ToolbarGroup className='gap-2'>
						<select
							value={toolbarBlock}
							onChange={onBlockChange}
							className='h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none'
						>
							{toolbarBlocks.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<select
							value={toolbarFontName}
							onChange={onFontChange}
							className='h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none'
						>
							{toolbarFontFamilies.map(font => (
								<option key={font} value={font}>
									{font}
								</option>
							))}
						</select>
						<select
							value={toolbarFontSize}
							onChange={onFontSizeChange}
							className='h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none'
						>
							{toolbarFontSizes.map(size => (
								<option key={size} value={size}>
									{size}
								</option>
							))}
						</select>
					</ToolbarGroup>
				)}

			<ToolbarGroup>
				<ToolbarIconButton
					title='Bold'
					active={toolbarState.bold}
					onClick={() => onCommand?.('bold')}
				>
					<Bold size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Italic'
					active={toolbarState.italic}
					onClick={() => onCommand?.('italic')}
				>
					<Italic size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Underline'
					active={toolbarState.underline}
					onClick={() => onCommand?.('underline')}
				>
					<Underline size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Strike'
					active={toolbarState.strike}
					onClick={() => onCommand?.('strikeThrough')}
				>
					<Strikethrough size={16} />
				</ToolbarIconButton>
			</ToolbarGroup>

			<ToolbarGroup className='gap-2 pl-2 pr-3'>
				<span className='inline-flex items-center gap-1 text-xs font-medium text-slate-500'>
					<Palette size={13} />
					Matn
				</span>
				<input
					type='color'
					defaultValue='#111827'
					onChange={event => onCommand?.('foreColor', event.target.value)}
					className='h-7 w-7 cursor-pointer rounded border border-slate-200 p-0'
				/>
				<span className='inline-flex items-center gap-1 text-xs font-medium text-slate-500'>
					<Highlighter size={13} />
					Marker
				</span>
				<input
					type='color'
					defaultValue='#fff59d'
					onChange={event => onCommand?.('hiliteColor', event.target.value)}
					className='h-7 w-7 cursor-pointer rounded border border-slate-200 p-0'
				/>
			</ToolbarGroup>

			<ToolbarGroup>
				<ToolbarIconButton
					title='Align left'
					active={toolbarState.alignLeft}
					onClick={() => onCommand?.('justifyLeft')}
				>
					<AlignLeft size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Align center'
					active={toolbarState.alignCenter}
					onClick={() => onCommand?.('justifyCenter')}
				>
					<AlignCenter size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Align right'
					active={toolbarState.alignRight}
					onClick={() => onCommand?.('justifyRight')}
				>
					<AlignRight size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Justify'
					active={toolbarState.alignJustify}
					onClick={() => onCommand?.('justifyFull')}
				>
					<AlignJustify size={16} />
				</ToolbarIconButton>
			</ToolbarGroup>

			<ToolbarGroup>
				<ToolbarIconButton
					title='Bulleted list'
					active={toolbarState.unorderedList}
					onClick={() => onCommand?.('insertUnorderedList')}
				>
					<List size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Numbered list'
					active={toolbarState.orderedList}
					onClick={() => onCommand?.('insertOrderedList')}
				>
					<ListOrdered size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton title='Insert link' onClick={onInsertLink}>
					<Link2 size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Remove link'
					onClick={() => onCommand?.('unlink')}
				>
					<Unlink size={16} />
				</ToolbarIconButton>
				<ToolbarIconButton
					title='Clear formatting'
					onClick={() => onCommand?.('removeFormat')}
				>
					<Type size={16} />
				</ToolbarIconButton>
			</ToolbarGroup>
		</>
	)
}

export default EditorToolbar
