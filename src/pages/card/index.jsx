import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Card</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Card</li>
                    </ul>
                </div>
                <div className="mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div className="card h-full rounded-xl overflow-hidden border-0">
                            <img src="../assets/images/card-component/card-img1.png" className="card-img-top" alt />
                            <div className="card-body p-4">
                                <h5 className="card-title text-lg text-neutral-600 dark:text-neutral-200
                  mb-1.5">
                                    This is Card title
                                </h5>
                                <p className="card-text text-neutral-600 mb-4">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all .</p>
                                <a className="btn text-primary-600 dark:text-primary-500 hover:underline px-0 py-2.5 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl overflow-hidden border-0">
                            <img src="../assets/images/card-component/card-img2.png" className="card-img-top" alt />
                            <div className="card-body p-4 text-center">
                                <h5 className="card-title text-lg text-neutral-600 dark:text-neutral-200
                  mb-1.5">
                                    This is Card title
                                </h5>
                                <p className="card-text text-neutral-600 mb-4">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all .</p>
                                <a className="btn btn-primary-600 px-3 py-2.5 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl overflow-hidden border-0">
                            <img src="../assets/images/card-component/card-img3.png" className="card-img-top" alt />
                            <div className="card-body p-4 text-end">
                                <h5 className="card-title text-lg text-neutral-600 dark:text-neutral-200
                  mb-1.5">
                                    This is Card title
                                </h5>
                                <p className="card-text text-neutral-600 mb-4">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all .</p>
                                <div className="flex flex-wrap items-center justify-end gap-3">
                                    <a className="btn btn-primary-100 bg-primary-100 hover:bg-primary-600 dark:bg-primary-600/25 dark:hover:bg-primary-600 hover:text-white text-primary-600 dark:text-primary-500 px-3 py-2.5 inline-flex items-center gap-2">
                                        Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                    </a>
                                    <button className="btn btn-warning-100 bg-warning-100 hover:bg-warning-600 dark:bg-warning-600/25 dark:hover:bg-warning-600 hover:text-white text-warning-600 dark:text-warning-500 px-3 py-2.5 inline-flex items-center gap-2">
                                        Book Mark <iconify-icon icon="bx:bookmark-minus" className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl overflow-hidden border-0">
                            <img src="../assets/images/card-component/card-img4.png" className="card-img-top" alt />
                            <div className="card-body p-4 text-center">
                                <h5 className="card-title text-lg text-neutral-600 dark:text-neutral-200
                  mb-1.5">
                                    This is Card title
                                </h5>
                                <p className="card-text text-neutral-600 mb-4">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all .</p>
                                <button className="btn btn-primary-600 px-3 py-2.5 inline-flex items-center gap-2">
                                    <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <h6 className="mb-6">Card Text &amp; icon </h6>
                    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div className="card h-full rounded-xl overflow-hidden border-0">
                            <div className="card-body p-6">
                                <div className="w-[64px] h-[64px] inline-flex items-center justify-center bg-purple-200 dark:bg-purple-600/25 dark:text-purple-500 text-purple-600 mb-4 rounded-xl">
                                    <iconify-icon icon="solar:medal-ribbons-star-bold" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-2">Brand Identity</h6>
                                <p className="card-text mb-2 text-secondary-light">Random Text gateway to the Origin al the Works Platform, &amp; your unique block chain gateway identity.</p>
                                <a className="btn dark:text-purple-600 text-purple-600 hover:underline px-0 py-0 mt-4 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl overflow-hidden border-0 text-center">
                            <div className="card-body p-6">
                                <div className="w-[64px] h-[64px] inline-flex items-center justify-center bg-primary-100 dark:bg-primary-600/25 dark:text-primary-500 text-primary-600 mb-4 rounded-xl">
                                    <iconify-icon icon="ri:computer-fill" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-2">UI/UX Designer</h6>
                                <p className="card-text mb-2 text-secondary-light">Random Text gateway to the Origin al the Works Platform, &amp; your unique block chain gateway identity.</p>
                                <a className="btn text-primary-600 dark:text-primary-600 hover:underline px-0 py-2.5 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl overflow-hidden border-0 text-end">
                            <div className="card-body p-6">
                                <div className="w-[64px] h-[64px] inline-flex items-center justify-center bg-success-100 dark:bg-success-600/25 dark:text-success-500 text-success-600 mb-4 rounded-xl">
                                    <iconify-icon icon="fluent:toolbox-20-filled" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-2">Business Strategy</h6>
                                <p className="card-text mb-2 text-secondary-light">Random Text gateway to the Origin al the Works Platform, &amp; your unique block chain gateway identity.</p>
                                <a className="btn text-success-600 dark:text-success-600 hover:underline px-0 py-2.5 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl overflow-hidden border-0 text-center">
                            <div className="card-body p-6">
                                <div className="w-[64px] h-[64px] inline-flex items-center justify-center bg-danger-100 dark:bg-danger-600/25 dark:text-danger-500 text-danger-600 mb-4 rounded-xl">
                                    <iconify-icon icon="ph:code-fill" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-2">Business Strategy</h6>
                                <p className="card-text mb-2 text-secondary-light">Random Text gateway to the Origin al the Works Platform, &amp; your unique block chain gateway identity.</p>
                                <a className="btn text-danger-600 dark:text-danger-600 hover:underline px-0 py-2.5 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <h6 className="mb-6">Card With image &amp; Overlays </h6>
                    <div className="grid grid-cols-1 sm:grid-cols-6 xl:grid-cols-3 gap-6">
                        <div className="card h-full rounded-xl p-0 border-0 overflow-hidden relative">
                            <div className="card-body p-0 before:block before:absolute before:inset-0 before:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_0.25)_22%,_rgba(0,_0,_0,_0.69)_57.92%,_rgba(0,_0,_0,_0.7)_100%)] bottom-0 start-0">
                                <img src="../assets/images/card-component/card-overlay-img1.png" alt className="w-full h-full" />
                                <div className="absolute start-0 bottom-0 p-6 z-1">
                                    <h5 className="card-title text-white dark:text-neutral-200 text-lg mb-1.5">This is Card title</h5>
                                    <p className="card-text text-white">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all</p>
                                    <a className="btn text-primary-600 hover-text-primary px-0 py-2.5 inline-flex items-center gap-2">
                                        Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl p-0 border-0 overflow-hidden relative">
                            <div className="card-body p-0 before:block before:absolute before:inset-0 before:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_0.25)_22%,_rgba(0,_0,_0,_0.69)_57.92%,_rgba(0,_0,_0,_0.7)_100%)] top-0 start-0">
                                <img src="../assets/images/card-component/card-overlay-img1.png" alt className="w-full h-full" />
                                <div className="absolute start-0 top-0 p-6 z-1 text-center">
                                    <h5 className="card-title text-white dark:text-neutral-200 text-lg mb-1.5">This is Card title</h5>
                                    <p className="card-text text-white">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all</p>
                                    <a className="btn text-primary-600 hover-text-primary px-0 py-2.5 inline-flex items-center gap-2">
                                        Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl p-0 border-0 overflow-hidden relative">
                            <div className="card-body p-0 before:block before:absolute before:inset-0 before:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_0.25)_22%,_rgba(0,_0,_0,_0.69)_57.92%,_rgba(0,_0,_0,_0.7)_100%)] bottom-0 start-0">
                                <img src="../assets/images/card-component/card-overlay-img1.png" alt className="w-full h-full" />
                                <div className="absolute start-0 bottom-0 p-6 z-1 text-end">
                                    <h5 className="card-title text-white dark:text-neutral-200 text-lg mb-1.5">This is Card title</h5>
                                    <p className="card-text text-white">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all</p>
                                    <a className="btn text-primary-600 hover-text-primary px-0 py-2.5 inline-flex items-center gap-2">
                                        Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <h6 className="mb-6">Card Header &amp; Footer</h6>
                    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-6">
                        <div className="card rounded-xl h-full border-0 overflow-hidden">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 flex items-center gap-1 justify-between border-b">
                                <h6 className="text-lg mb-0">Hi, Will Mart</h6>
                                <button type="button" className="text-xl line-height-1">
                                    <iconify-icon icon="mdi:times" className="text-xl" />
                                </button>
                            </div>
                            <div className="card-body py-4 px-6">
                                <h6 className="card-title text-neutral-600 dark:text-neutral-200 mb-2 text-lg">How to learn UI /UX Design</h6>
                                <p className="card-text text-neutral-600 mb-0">
                                    Intrinsically incubate intuitive opportunities and real-time potentialities for change for interoperable meta-itself
                                    the viewer's attention from the layout
                                </p>
                            </div>
                            <div className="card-footer text-center bg-transparent border-t border-neutral-200 dark:border-neutral-600 pt-4 px-6">
                                <a className="text-primary-600 dark:text-primary-600 hover:underline">View All</a>
                            </div>
                        </div>
                        <div className="card rounded-xl h-full border-0 overflow-hidden">
                            <div className="card-body py-4 px-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <iconify-icon icon="typcn:user-add" className="text-2xl" />
                                    <h6 className="text-lg mb-0">How to learn UI /UX Design</h6>
                                </div>
                                <p className="card-text text-neutral-600 mb-4">Intrinsically incubate intuitive opportunities and real-time potentialities for change for interoperable meta-itself the viewer's attention from the layout</p>
                                <p className="card-text text-neutral-600 mb-0">Intrinsically incubate intuitive opportunities and real-time potentialities for change for interoperable </p>
                                <a className="btn text-primary-600 dark:text-primary-600 hover:underline hover-text-primary px-0 py-0 inline-flex items-center gap-2 mt-4">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card rounded-xl h-full border-0 overflow-hidden">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 flex items-center gap-1 justify-between border-b">
                                <div>
                                    <h6 className="text-lg mb-0">How can i help your</h6>
                                    <span className="text-sm">Awesome Support</span>
                                </div>
                                <a className="text-primary-600 dark:text-primary-600 hover:underline">View All</a>
                            </div>
                            <div className="card-body py-4 px-6">
                                <p className="card-text text-neutral-600 mb-4">Intrinsically incubate intuitive opportunities and real-time potentialities for change for interoperable meta-itself the viewer's attention from the layout</p>
                                <p className="card-text text-neutral-600 mb-0">Intrinsically incubate intuitive opportunities and real-time potentialities for change for interoperable </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <h6 className="mb-6">Horizontal Card</h6>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <div className="card rounded-xl overflow-hidden border-0 flex flex-nowrap sm:flex-row flex-col">
                            <div className="flex shrink-0">
                                <img src="../assets/images/card-component/horizontal-card-img1.png" className="h-full w-full object-fit-cover" alt />
                            </div>
                            <div className="card-body p-4 grow">
                                <h5 className="card-title text-lg text-neutral-900 dark:text-neutral-200 mb-1.5">This is Card title</h5>
                                <p className="card-text text-neutral-600 mb-4">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all .</p>
                                <a className="btn text-primary-600 hover-text-primary p-0 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card rounded-xl overflow-hidden border-0 flex flex-nowrap sm:flex-row-reverse flex-col">
                            <div className="flex shrink-0">
                                <img src="../assets/images/card-component/horizontal-card-img2.png" className="h-full w-full object-fit-cover" alt />
                            </div>
                            <div className="card-body p-4 grow">
                                <h5 className="card-title text-lg text-neutral-900 dark:text-neutral-200 mb-1.5">This is Card title</h5>
                                <p className="card-text text-neutral-600 mb-4">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all .</p>
                                <a className="btn text-primary-600 hover-text-primary p-0 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card rounded-xl overflow-hidden border-0 flex flex-nowrap sm:flex-row flex-col">
                            <div className="flex shrink-0">
                                <img src="../assets/images/card-component/horizontal-card-img3.png" className="h-full w-full object-fit-cover" alt />
                            </div>
                            <div className="card-body p-4 grow">
                                <h5 className="card-title text-lg text-neutral-900 dark:text-neutral-200 mb-1.5">This is Card title</h5>
                                <p className="card-text text-neutral-600 mb-4">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all .</p>
                                <a className="btn text-primary-600 hover-text-primary p-0 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card rounded-xl overflow-hidden border-0 h-full flex items-center sm:flex-row-reverse flex-col">
                            <div className="flex shrink-0 w-170-px h-full">
                                <img src="../assets/images/card-component/horizontal-card-img4.png" className="h-full w-full object-fit-cover" alt />
                            </div>
                            <div className="card-body p-4 grow">
                                <h5 className="card-title text-lg text-neutral-900 dark:text-neutral-200 mb-1.5">This is Card title</h5>
                                <p className="card-text text-neutral-600 mb-4">We quickly learn to fear and thus automatically avo id potentially stressful situations of all kinds, including the most common of all .</p>
                                <a className="btn text-primary-600 hover-text-primary p-0 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className>
                    <h6 className="mb-6">Card With Background Color</h6>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        <div className="card h-full rounded-xl border-0 overflow-hidden bg-purple-100 dark:bg-purple-600/25">
                            <div className="card-body p-6">
                                <div className="w-[64px] h-[64px] inline-flex items-center justify-center bg-purple-600 text-white mb-4 rounded-xl">
                                    <iconify-icon icon="solar:medal-ribbons-star-bold" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-2">Brand Identity</h6>
                                <p className="card-text mb-2 text-secondary-light">Random Text gateway to the Origin al the Works Platform, &amp; your unique block chain gateway identity.</p>
                                <a className="btn text-purple-600 hover:underline dark:text-purple-400 px-0 py-0 mt-4 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl border-0 overflow-hidden bg-primary-100 dark:bg-primary-600/25 text-center">
                            <div className="card-body p-6">
                                <div className="w-[64px] h-[64px] inline-flex items-center justify-center bg-primary-600 text-white mb-4 rounded-xl">
                                    <iconify-icon icon="ri:computer-fill" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-2">UI/UX Designer</h6>
                                <p className="card-text mb-2 text-secondary-light">Random Text gateway to the Origin al the Works Platform, &amp; your unique block chain gateway identity.</p>
                                <a className="btn text-primary-600 hover:underline px-0 py-2.5 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl border-0 overflow-hidden bg-success-100 dark:bg-success-600/25 text-end">
                            <div className="card-body p-6">
                                <div className="w-[64px] h-[64px] inline-flex items-center justify-center bg-success-600 text-white mb-4 rounded-xl">
                                    <iconify-icon icon="fluent:toolbox-20-filled" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-2">Business Strategy</h6>
                                <p className="card-text mb-2 text-secondary-light">Random Text gateway to the Origin al the Works Platform, &amp; your unique block chain gateway identity.</p>
                                <a className="btn text-success-600 hover:underline px-0 py-2.5 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="card h-full rounded-xl border-0 overflow-hidden bg-danger-100 dark:bg-danger-600/25 text-center">
                            <div className="card-body p-6">
                                <div className="w-[64px] h-[64px] inline-flex items-center justify-center bg-danger-600 text-white mb-4 rounded-xl">
                                    <iconify-icon icon="ph:code-fill" className="h5 mb-0" />
                                </div>
                                <h6 className="mb-2">Business Strategy</h6>
                                <p className="card-text mb-2 text-secondary-light">Random Text gateway to the Origin al the Works Platform, &amp; your unique block chain gateway identity.</p>
                                <a className="btn text-danger-600 hover:underline px-0 py-2.5 inline-flex items-center gap-2">
                                    Read More <iconify-icon icon="iconamoon:arrow-right-2" className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
