import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Gallery</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Gallery</li>
                    </ul>
                </div>
                <div className="card h-full p-0 rounded-xl overflow-hidden border-0">
                    <div className="card-header border-b border-neutral-200 dark:border-neutral-600 pb-0 pt-0 px-0">
                        <ul className="tab-style-gradient flex flex-wrap text-sm font-medium text-center mb-5" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className role="presentation">
                                <button className="py-2.5 px-5 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600" id="all-tab" data-tabs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="false">
                                    All
                                </button>
                            </li>
                            <li className role="presentation">
                                <button className="py-2.5 px-5 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="ui-design-tab" data-tabs-target="#ui-design" type="button" role="tab" aria-controls="ui-design" aria-selected="false">
                                    UI Design
                                </button>
                            </li>
                            <li className role="presentation">
                                <button className="py-2.5 px-5 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="web-design-tab" data-tabs-target="#web-design" type="button" role="tab" aria-controls="web-design" aria-selected="false">
                                    Web Design
                                </button>
                            </li>
                            <li className role="presentation">
                                <button className="py-2.5 px-5 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="development-tab" data-tabs-target="#development" type="button" role="tab" aria-controls="development" aria-selected="false">
                                    Development
                                </button>
                            </li>
                            <li className role="presentation">
                                <button className="py-2.5 px-5 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="presentations-tab" data-tabs-target="#presentations" type="button" role="tab" aria-controls="presentations" aria-selected="false">
                                    Presentations
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body p-6">
                        <div id="default-tab-content">
                            <div className="hidden" id="all" role="tabpanel" aria-labelledby="all-tab">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img8.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img9.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img10.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img11.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img12.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img1.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img2.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img3.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img4.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img5.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img6.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img7.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden" id="ui-design" role="tabpanel" aria-labelledby="ui-design-tab">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img3.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img4.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img5.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img6.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img7.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img8.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img1.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img2.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img3.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img4.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img5.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img6.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img7.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img8.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img9.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img10.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img11.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img12.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden" id="web-design" role="tabpanel" aria-labelledby="web-design-tab">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img6.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img7.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img8.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img9.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img1.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img2.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img3.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img4.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img5.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img6.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img7.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img8.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img9.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img10.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img11.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img12.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden" id="development" role="tabpanel" aria-labelledby="development-tab">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img5.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img6.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img7.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img8.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img9.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img1.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img2.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img3.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img4.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img5.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img6.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img7.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img8.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img9.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img10.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img11.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img12.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden" id="presentations" role="tabpanel" aria-labelledby="presentations-tab">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img1.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img2.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img3.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img4.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img5.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img6.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img7.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img8.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img9.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img10.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img11.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
                                    </div>
                                    <div className="hover-scale-img border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                                        <div className="max-h-[266px] overflow-hidden">
                                            <img src="../assets/images/gallery/gallery-img12.png" alt className="hover-scale-img__img w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="py-4 px-6">
                                            <h6 className="mb-1.5">This is Image title</h6>
                                            <p className="mb-0 text-sm text-secondary-light">UI Design</p>
                                        </div>
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

export default Gallery
