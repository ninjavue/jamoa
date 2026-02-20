import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import htmlDocx from 'html-docx-js/dist/html-docx'
import { saveAs } from 'file-saver'

const PAGE_HEIGHT = 1123; // px
const PAGE_WIDTH = 794;   // px

const Editor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Yangi hujjat</p>',
    })

    const exportToWord = () => {
        if (!editor) return
        const html = editor.getHTML()
        const converted = htmlDocx.asBlob(html)        
        saveAs(converted, 'Hujjat.docx')
    }

    return (
        <div className="page">
            <div className="toolbar">
                <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
                <button onClick={() => editor.chain().focus().toggleBulletList().run()}>List</button>
                <button onClick={exportToWord}>Wordga Yuklash</button>
            </div>

            {/* EditorContent ni A4 sahifa o‘lchamida */}
            <div
                style={{
                    width: PAGE_WIDTH,
                    minHeight: PAGE_HEIGHT,
                    padding: 40,
                    background: 'white',
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                    overflow: 'auto',
                }}
            >
                <div className="editor-container">
                    <div className="editor-page">
                        <EditorContent editor={editor} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Editor
