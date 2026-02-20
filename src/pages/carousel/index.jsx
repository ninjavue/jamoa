import React from 'react'
import { Link } from 'react-router-dom'

const Carousel = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Carousel</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Carousel</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Default Carousel</h6>
                            </div>
                            <div className="card-body p-0 default-carousel">
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img1.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-6 z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide One</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img2.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-6 z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Two</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img3.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-6 z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Three</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Carousel With Arrows</h6>
                            </div>
                            <div className="card-body p-0 arrow-carousel">
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img2.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-6 z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide One</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img4.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-6 z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Two</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img3.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-6 z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Three</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Carousel With Pagination</h6>
                            </div>
                            <div className="card-body p-0 pagination-carousel slick-dots-style-two absolute-dots">
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img3.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-[64px] z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide One</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img4.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-[64px] z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Two</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img1.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-[64px] z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Three</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                                <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                    <img src="../assets/images/carousel/carousel-img2.png" alt className="w-full h-full object-fit-cover" />
                                    <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-[64px] z-[2] text-center w-full max-w-[440px]">
                                        <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Four</h5>
                                        <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Carousel with progress</h6>
                            </div>
                            <div className="card-body p-0 relative">
                                <div className="p-0 progress-carousel dots-style-circle dots-positioned">
                                    <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full relative">
                                        <img src="../assets/images/carousel/carousel-img4.png" alt className="w-full h-full object-fit-cover" />
                                        <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-[64px] z-[2] text-center w-full max-w-[440px]">
                                            <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide One</h5>
                                            <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                        </div>
                                    </div>
                                    <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                        <img src="../assets/images/carousel/carousel-img2.png" alt className="w-full h-full object-fit-cover" />
                                        <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-[64px] z-[2] text-center w-full max-w-[440px]">
                                            <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Two</h5>
                                            <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                        </div>
                                    </div>
                                    <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                        <img src="../assets/images/carousel/carousel-img3.png" alt className="w-full h-full object-fit-cover" />
                                        <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-[64px] z-[2] text-center w-full max-w-[440px]">
                                            <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Three</h5>
                                            <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                        </div>
                                    </div>
                                    <div className="before:absolute before:w-full before:h-full before:bg-gradient-to-t from-neutral-900/75 before:z-[1] z-1 relative bottom-0 start-0 h-full">
                                        <img src="../assets/images/carousel/carousel-img1.png" alt className="w-full h-full object-fit-cover" />
                                        <div className="absolute start-1/2 -translate-x-1/2 bottom-0 pb-[64px] z-[2] text-center w-full max-w-[440px]">
                                            <h5 className="card-title text-white text-lg mb-1.5">Carousel Slide Four</h5>
                                            <p className="card-text text-white mx-auto text-sm">User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-progress">
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Multiple slides</h6>
                            </div>
                            <div className="card-body py-6 px-4 multiple-carousel slick-dots-style-two">
                                <div className="mx-2 mb-6">
                                    <img src="../assets/images/carousel/mutiple-carousel-img1.png" className="w-full h-full object-fit-cover" alt />
                                </div>
                                <div className="mx-2 mb-6">
                                    <img src="../assets/images/carousel/mutiple-carousel-img2.png" className="w-full h-full object-fit-cover" alt />
                                </div>
                                <div className="mx-2 mb-6">
                                    <img src="../assets/images/carousel/mutiple-carousel-img3.png" className="w-full h-full object-fit-cover" alt />
                                </div>
                                <div className="mx-2 mb-6">
                                    <img src="../assets/images/carousel/mutiple-carousel-img4.png" className="w-full h-full object-fit-cover" alt />
                                </div>
                                <div className="mx-2 mb-6">
                                    <img src="../assets/images/carousel/mutiple-carousel-img2.png" className="w-full h-full object-fit-cover" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel
