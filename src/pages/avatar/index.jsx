import React from 'react'
import { Link } from 'react-router-dom'

const Avatar = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Avatars</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Avatars</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="col-span-12 xl:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Avatar Sizes</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex items-center flex-wrap gap-3">
                                    <img src="../assets/images/avatar/avatar1.png" className="w-6 h-6 rounded-full object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar1.png" className="w-8 h-8 rounded-full object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar1.png" className="w-10 h-10 rounded-full object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar1.png" className="w-[44px] h-[44px] rounded-full object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar1.png" className="w-[56px] h-[56px] rounded-full object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar1.png" className="w-[64px] h-[64px] rounded-full object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar1.png" className="w-[72px] h-[72px] rounded-full object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar1.png" className="w-[80px] h-[80px] rounded-full object-fit-cover" alt="Avatar" />
                                </div>
                                <div className="flex items-center flex-wrap gap-3 mt-6">
                                    <img src="../assets/images/avatar/avatar2.png" className="w-6 h-6 rounded-lg object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar2.png" className="w-8 h-8 rounded-lg object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar2.png" className="w-10 h-10 rounded-lg object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar2.png" className="w-[44px] h-[44px] rounded-lg object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar2.png" className="w-[56px] h-[56px] rounded-lg object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar2.png" className="w-[64px] h-[64px] rounded-lg object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar2.png" className="w-[72px] h-[72px] rounded-lg object-fit-cover" alt="Avatar" />
                                    <img src="../assets/images/avatar/avatar2.png" className="w-[80px] h-[80px] rounded-lg object-fit-cover" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Avatar With content</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex items-center flex-wrap gap-3">
                                    <span className="w-6 h-6 rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400">24</span>
                                    <span className="w-8 h-8 rounded-full object-fit-cover flex justify-center items-center font-semibold text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400">32</span>
                                    <span className="w-10 h-10 rounded-full object-fit-cover flex justify-center items-center font-semibold text-sm bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400">40</span>
                                    <span className="w-[44px] h-[44px] rounded-full object-fit-cover flex justify-center items-center font-semibold text-base bg-info-100 dark:bg-info-600/25 text-info-600 dark:text-info-400">44</span>
                                    <span className="w-[56px] h-[56px] rounded-full object-fit-cover flex justify-center items-center font-semibold text-lg bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400">56</span>
                                    <span className="w-[64px] h-[64px] rounded-full object-fit-cover flex justify-center items-center font-semibold text-xl bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400">64</span>
                                </div>
                                <div className="flex items-center flex-wrap gap-3 mt-6">
                                    <span className="w-6 h-6 rounded object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400">24</span>
                                    <span className="w-8 h-8 rounded-lg object-fit-cover flex justify-center items-center font-semibold text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400">32</span>
                                    <span className="w-10 h-10 rounded-lg object-fit-cover flex justify-center items-center font-semibold text-sm bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400">40</span>
                                    <span className="w-[44px] h-[44px] rounded-lg object-fit-cover flex justify-center items-center font-semibold text-base bg-info-100 dark:bg-info-600/25 text-info-600 dark:text-info-400">44</span>
                                    <span className="w-[56px] h-[56px] rounded-lg object-fit-cover flex justify-center items-center font-semibold text-lg bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400">56</span>
                                    <span className="w-[64px] h-[64px] rounded-lg object-fit-cover flex justify-center items-center font-semibold text-xl bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400">64</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Avatar Shape Style</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex items-center flex-wrap justify-between gap-3">
                                    <img src="../assets/images/avatar/avatar-shape1.png" alt className="w-[120px] h-[120px] rounded-lg object-fit-cover" />
                                    <img src="../assets/images/avatar/avatar-shape2.png" alt className="w-[120px] h-[120px] rounded-full object-fit-cover" />
                                    <img src="../assets/images/avatar/avatar-shape3.png" alt className="w-auto h-[120px]  object-fit-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0 h-full">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Status Indicator</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex items-center flex-wrap gap-3">
                                    <div className="relative">
                                        <img src="../assets/images/avatar/status-avatar.png" className="w-6 h-6 rounded-full object-fit-cover" alt="Avatar" />
                                        <span className="w-2 h-2 bg-primary-600 border br-white rounded-full absolute end-0 bottom-[3px]" />
                                    </div>
                                    <div className="relative">
                                        <img src="../assets/images/avatar/status-avatar.png" className="w-8 h-8 rounded-full object-fit-cover" alt="Avatar" />
                                        <span className="w-2 h-2 bg-primary-600 border br-white rounded-full absolute end-0 bottom-[3px]" />
                                    </div>
                                    <div className="relative">
                                        <img src="../assets/images/avatar/status-avatar.png" className="w-10 h-10 rounded-full object-fit-cover" alt="Avatar" />
                                        <span className="w-2 h-2 bg-primary-600 border br-white rounded-full absolute end-0 bottom-[3px]" />
                                    </div>
                                    <div className="relative">
                                        <img src="../assets/images/avatar/status-avatar.png" className="w-[44px] h-[44px] rounded-full object-fit-cover" alt="Avatar" />
                                        <span className="w-2 h-2 bg-primary-600 border br-white rounded-full absolute end-0 bottom-[3px]" />
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-3 mt-6">
                                    <div className="relative">
                                        <span className="w-6 h-6 rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400">24</span>
                                        <span className="w-2 h-2 bg-primary-600 border br-white rounded-full absolute end-0 bottom-[3px]" />
                                    </div>
                                    <div className="relative">
                                        <span className="w-8 h-8 rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400">24</span>
                                        <span className="w-2 h-2 bg-purple-600 border br-white rounded-full absolute end-0 bottom-[3px]" />
                                    </div>
                                    <div className="relative">
                                        <span className="w-10 h-10 rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400">24</span>
                                        <span className="w-2 h-2 bg-success-600 border br-white rounded-full absolute end-0 bottom-[3px]" />
                                    </div>
                                    <div className="relative">
                                        <span className="w-[44px] h-[44px] rounded-full object-fit-cover flex justify-center items-center font-semibold text-[10px] bg-info-100 dark:bg-info-600/25 text-info-600 dark:text-info-400">24</span>
                                        <span className="w-2 h-2 bg-info-600 border br-white rounded-full absolute end-0 bottom-[3px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0 h-full">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Avatar Group</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex -space-x-2 overflow-hidden">
                                    <img src="../assets/images/avatar/avatar-group1.png" alt className="w-6 h-6 rounded-full object-fit-cover relative" />
                                    <img src="../assets/images/avatar/avatar-group2.png" alt className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group3.png" alt className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group4.png" alt className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group5.png" alt className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group6.png" alt className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group6.png" alt className="w-6 h-6 rounded-full object-fit-cover relative ms--10px" />
                                    <span className="w-6 h-6 rounded-full object-fit-cover relative ms--10px border bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-white dark:border-neutral-500 text-xs inline-flex items-center justify-center">
                                        +5
                                    </span>
                                    <button type="button" className="w-6 h-6 rounded-full border border-primary-600 text-primary-600 ms-8 border-dashed text-secondary-light text-xs inline-flex items-center justify-center">
                                        <iconify-icon icon="ic:baseline-plus" className />
                                    </button>
                                </div>
                                <div className="flex -space-x-2 overflow-hidden mt-6">
                                    <img src="../assets/images/avatar/avatar-group1.png" alt className="w-8 h-8 rounded-full object-fit-cover relative" />
                                    <img src="../assets/images/avatar/avatar-group2.png" alt className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group3.png" alt className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group4.png" alt className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group5.png" alt className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group6.png" alt className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
                                    <img src="../assets/images/avatar/avatar-group6.png" alt className="w-8 h-8 rounded-full object-fit-cover relative ms--10px" />
                                    <span className="w-8 h-8 rounded-full object-fit-cover relative ms--10px border bg-neutral-100 text-neutral-600 dark:bg-neutral-600 dark:text-white dark:border-neutral-500 text-xs inline-flex items-center justify-center">
                                        +5
                                    </span>
                                    <button type="button" className="w-8 h-8 rounded-full border border-primary-600 text-primary-600 ms-8 border-dashed text-secondary-light text-lg inline-flex items-center justify-center">
                                        <iconify-icon icon="ic:baseline-plus" className />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0 h-full">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Images With content</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/avatar/avatar1.png" alt className="w-8 h-8 rounded-full object-fit-cover shrink-0" />
                                        <div className="grow inline-flex flex-col">
                                            <h6 className="text-sm mb-0">Will mart</h6>
                                            <span className="text-xs text-secondary-light">random@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/avatar/avatar1.png" alt className="w-8 h-8 rounded-full object-fit-cover shrink-0" />
                                        <div className="grow inline-flex flex-col">
                                            <h6 className="text-sm mb-0">Will mart</h6>
                                            <span className="text-xs text-secondary-light">random@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/avatar/avatar2.png" alt className="w-8 h-8 rounded-full object-fit-cover shrink-0" />
                                        <div className="grow inline-flex flex-col">
                                            <h6 className="text-sm mb-0">Sangeeta</h6>
                                            <span className="text-xs text-secondary-light">random@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/avatar/avatar2.png" alt className="w-8 h-8 rounded-full object-fit-cover shrink-0" />
                                        <div className="grow inline-flex flex-col">
                                            <h6 className="text-sm mb-0">Sangeeta</h6>
                                            <span className="text-xs text-secondary-light">random@gmail.com</span>
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

export default Avatar
