import React from 'react'
import { Link } from 'react-router-dom'

const Videos = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Videos</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Videos</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                    <div className="col-span-1 2xl:col-span-6">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <h6 className="text-lg font-semibold mb-0">Default Video</h6>
                            </div>
                            <div className="card-body p-6 relative">
                                <img src="../assets/images/videos/video-img1.png" className="w-full h-full object-fit-cover rounded-lg overflow-hidden" alt />
                                <a href="https://www.youtube.com/watch?v=Vr9WoWXkKeE" className="magnific-video shadow-[0px_0px_0px_5px_rgba(255,255,255,0.5)] w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
                                    <iconify-icon icon="ion:play" className="text-primary-600 text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 2xl:col-span-6">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <h6 className="text-lg font-semibold mb-0">Videos With Content</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="col-sm-6">
                                        <div className="border bg-white dark:bg-neutral-700 rounded-lg overflow-hidden ">
                                            <div className="relative max-h-258-px overflow-hidden">
                                                <img src="../assets/images/videos/video-img2.png" className="w-full object-fit-cover" alt />
                                                <a href="https://www.youtube.com/watch?v=Vr9WoWXkKeE" className="magnific-video shadow-[0px_0px_0px_5px_rgba(255,255,255,0.5)] w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
                                                    <iconify-icon icon="ion:play" className="text-primary-600 text-2xl" />
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <h6 className="text-xl mb-1.5 ">This is Video title</h6>
                                                <p className="text-secondary-light mb-0">We quickly learn to fear and thus autom atically avo id potentially stressful</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="border bg-white dark:bg-neutral-700 rounded-lg overflow-hidden ">
                                            <div className="relative max-h-258-px overflow-hidden">
                                                <img src="../assets/images/videos/video-img3.png" className="w-full object-fit-cover" alt />
                                                <a href="https://www.youtube.com/watch?v=Vr9WoWXkKeE" className="magnific-video shadow-[0px_0px_0px_5px_rgba(255,255,255,0.5)] w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
                                                    <iconify-icon icon="ion:play" className="text-primary-600 text-2xl" />
                                                </a>
                                            </div>
                                            <div className="p-4">
                                                <h6 className="text-xl mb-1.5 ">This is Video title here</h6>
                                                <p className="text-secondary-light mb-0">We quickly learn to fear and thus autom atically avo id potentially stressful</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 2xl:col-span-12">
                        <div className="card h-full p-0 border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <h6 className="text-lg font-semibold mb-0">Video</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="relative">
                                    <img src="../assets/images/videos/video-img4.png" className="w-full h-full object-fit-cover rounded-lg" alt />
                                    <a href="https://www.youtube.com/watch?v=Vr9WoWXkKeE" className="magnific-video shadow-[0px_0px_0px_5px_rgba(255,255,255,0.5)] w-[56px] h-[56px] bg-white rounded-full flex justify-center items-center absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
                                        <iconify-icon icon="ion:play" className="text-primary-600 text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Videos
