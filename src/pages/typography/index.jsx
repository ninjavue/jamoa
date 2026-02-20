import React from 'react'
import { Link } from 'react-router-dom'

const Typography = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Typography</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Typography</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center justify-between">
                                <h6 className="text-lg font-semibold mb-0">Heading</h6>
                                <h6 className="text-lg font-semibold mb-0">Font Size</h6>
                            </div>
                            <div className="card-body py-4 px-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h1>Heading 1</h1>
                                    <span className="text-base text-secondary-light font-normal">60px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h2>Heading 2</h2>
                                    <span className="text-base text-secondary-light font-normal">48px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3>Heading 3</h3>
                                    <span className="text-base text-secondary-light font-normal">36px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h4>Heading 4</h4>
                                    <span className="text-base text-secondary-light font-normal">30px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h5>Heading 5</h5>
                                    <span className="text-base text-secondary-light font-normal">24px</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h6>Heading 6</h6>
                                    <span className="text-base text-secondary-light font-normal">20px</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center justify-between">
                                <h6 className="text-lg font-semibold mb-0">Display Heading</h6>
                                <h6 className="text-lg font-semibold mb-0">Font Size</h6>
                            </div>
                            <div className="card-body py-4 px-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h1>Display 1</h1>
                                    <span className="text-base text-secondary-light font-normal">60px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h2>Display 2</h2>
                                    <span className="text-base text-secondary-light font-normal">48px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3>Display 3</h3>
                                    <span className="text-base text-secondary-light font-normal">36px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h4>Display 4</h4>
                                    <span className="text-base text-secondary-light font-normal">30px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h5>Display 5</h5>
                                    <span className="text-base text-secondary-light font-normal">24px</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h6>Display 6</h6>
                                    <span className="text-base text-secondary-light font-normal">20px</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <h6 className="text-lg font-semibold mb-0">Heading Colors</h6>
                            </div>
                            <div className="card-body py-4 px-6">
                                <h1 className="text-primary-600 dark:text-primary-600 mb-4 leading-[60px]">Heading 1</h1>
                                <h2 className="text-success-600 dark:text-success-600 mb-4 leading-[60px]">Heading 2</h2>
                                <h3 className="text-warning-600 dark:text-warning-600 mb-4 leading-[60px]">Heading 3</h3>
                                <h4 className="text-danger-600 dark:text-danger-600 mb-4">Heading 4</h4>
                                <h5 className="text-info-600 dark:text-info-600 mb-4">Heading 5</h5>
                                <h6 className="text-neutral-500 dark:text-neutral-200">Heading 6</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <h6 className="text-lg font-semibold mb-0">Inine Text Elements</h6>
                            </div>
                            <div className="card-body py-4 px-6">
                                <p className="mb-4 text-secondary-light font-normal">You can use the mark tag to <span className="text-warning-600 dark:text-warning-500 bg-warning-100 dark:bg-warning-600/25 px-1.5">highlight</span> text</p>
                                <p className="mb-4 text-secondary-light font-normal line-through">This is a paragraph. it stands out from regular Delete text </p>
                                <p className="mb-4 text-secondary-light font-normal line-through">This line of text is meant to be treated as no longer accurate.</p>
                                <p className="mb-4 text-secondary-light font-normal underline">This line of text will render as underlined</p>
                                <p className="mb-4 text-secondary-light font-normal underline">This line of text is meant to be treated as an addition to the document.</p>
                                <p className="mb-4 text-secondary-light font-normal">This is a paragraph. it stands out from regular text.</p>
                                <p className="mb-4 text-secondary-light font-semibold">This line rendered as bold text.</p>
                                <p className="mb-4 text-secondary-light italic">This line rendered as italicized text.</p>
                                <p className="text-secondary-light italic">This line rendered as italicized text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center justify-between">
                                <h6 className="text-lg font-semibold mb-0">Text</h6>
                                <h6 className="text-lg font-semibold mb-0">Font Size</h6>
                            </div>
                            <div className="card-body py-4 px-6">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-lg text-secondary-light">This is text</p>
                                    <span className="text-sm text-secondary-light font-normal">18px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-base text-secondary-light">This is text</p>
                                    <span className="text-sm text-secondary-light font-normal">16px</span>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-sm text-secondary-light">This is text</p>
                                    <span className="text-sm text-secondary-light font-normal">14px</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-xs text-secondary-light">This is text</p>
                                    <span className="text-sm text-secondary-light font-normal">12px</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <h6 className="text-lg font-semibold mb-0">Text Decoration</h6>
                            </div>
                            <div className="card-body py-4 px-6">
                                <p className="mb-4 text-secondary-light font-normal">Use underline, line-through, or text-decoration-none class to decorate text in components respectively.</p>
                                <p className="mb-4 text-neutral-600 dark:text-neutral-200 font-normal underline">This text has a line underneath it.</p>
                                <p className="mb-4 text-neutral-600 dark:text-neutral-200 font-normal line-through">This text has a line going through it.</p>
                                <p className="text-secondary-light font-normal">This link has its text decoration removed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-12">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <h6 className="text-lg font-semibold mb-0">Blockquote Background Color Text</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="p-4 bg-info-50 dark:bg-info-600/20 rounded-lg border-l-[3px] border-info border-info-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-info-600 dark:text-info-500 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-success-50 dark:bg-success-600/20 rounded-lg border-l-[3px] border-success-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-success-600 dark:text-success-500 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-info-50 dark:bg-info-600/20 rounded-lg border-l-[3px] border-info-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-info-600 dark:text-info-500 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-danger-50 dark:bg-danger-600/20 rounded-lg border-l-[3px] border-danger-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-danger-600 dark:text-danger-500 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-warning-50 dark:bg-warning-600/20 rounded-lg border-l-[3px] border-warning-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-warning-600 dark:text-warning-500 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-neutral-50 dark:bg-neutral-600 rounded-lg border-l-[3px] border-neutral-600 dark:border-neutral-200">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-neutral-600 dark:text-neutral-200 mb-0">- WowDash</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-12">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <h6 className="text-lg font-semibold mb-0">Blockquote Border Color</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="p-4 bg-transparent rounded-lg border border-start-width-3-px border-cyan-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-cyan-600 dark:text-cyan-600 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-transparent rounded-lg border border-start-width-3-px border-success-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-success-600 dark:text-success-600 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-transparent rounded-lg border border-start-width-3-px border-info-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-info-600 dark:text-info-600 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-transparent rounded-lg border border-start-width-3-px border-danger-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-danger-600 dark:text-danger-600 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-transparent rounded-lg border border-start-width-3-px border-warning-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-warning-600 dark:text-warning-600 mb-0">- WowDash</span>
                                    </div>
                                    <div className="p-4 bg-transparent rounded-lg border border-start-width-3-px border-neutral-600">
                                        <h6 className="text-neutral-600 dark:text-neutral-200 text-base mb-2">Custom Blockquote Primary Example</h6>
                                        <span className="text-neutral-600 dark:text-neutral-200 mb-0">- WowDash</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Typography
