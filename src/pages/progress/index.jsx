import React from 'react'
import { Link } from 'react-router-dom'

const Progress = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Progress Bar</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Progress Bar</li>
                    </ul>
                </div>
                <div className="grid sm:grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Default Progress</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex items-center flex-col gap-6">
                                    <div className="w-full bg-primary-600/10 rounded-full h-2">
                                        <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '20%' }} />
                                    </div>
                                    <div className="w-full bg-primary-600/10 rounded-full h-2">
                                        <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '35%' }} />
                                    </div>
                                    <div className="w-full bg-primary-600/10 rounded-full h-2">
                                        <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '50%' }} />
                                    </div>
                                    <div className="w-full bg-primary-600/10 rounded-full h-2">
                                        <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '75%' }} />
                                    </div>
                                    <div className="w-full bg-primary-600/10 rounded-full h-2">
                                        <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '90%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Progress with multiple color</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex items-center flex-col gap-6">
                                    <div className="w-full bg-primary-600/10 rounded-full h-2">
                                        <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '20%' }} />
                                    </div>
                                    <div className="w-full bg-success-600/10 rounded-full h-2">
                                        <div className="bg-success-600 h-2 rounded-full dark:bg-success-600" style={{ width: '35%' }} />
                                    </div>
                                    <div className="w-full bg-info-600/10 rounded-full h-2">
                                        <div className="bg-info-600 h-2 rounded-full dark:bg-info-600" style={{ width: '50%' }} />
                                    </div>
                                    <div className="w-full bg-warning-600/10 rounded-full h-2">
                                        <div className="bg-warning-600 h-2 rounded-full dark:bg-warning-600" style={{ width: '75%' }} />
                                    </div>
                                    <div className="w-full bg-danger-600/10 rounded-full h-2">
                                        <div className="bg-danger-600 h-2 rounded-full dark:bg-danger-600" style={{ width: '90%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Progress with right label</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="w-full bg-primary-600/10 rounded-full h-2">
                                            <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '20%' }} />
                                        </div>
                                        <span className="text-neutral-600 text-xs font-semibold line-height-1">20%</span>
                                    </div>
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="w-full bg-primary-600/10 rounded-full h-2">
                                            <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '35%' }} />
                                        </div>
                                        <span className="text-neutral-600 text-xs font-semibold line-height-1">35%</span>
                                    </div>
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="w-full bg-primary-600/10 rounded-full h-2">
                                            <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '50%' }} />
                                        </div>
                                        <span className="text-neutral-600 text-xs font-semibold line-height-1">50%</span>
                                    </div>
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="w-full bg-primary-600/10 rounded-full h-2">
                                            <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '75%' }} />
                                        </div>
                                        <span className="text-neutral-600 text-xs font-semibold line-height-1">75%</span>
                                    </div>
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="w-full bg-primary-600/10 rounded-full h-2">
                                            <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600" style={{ width: '90%' }} />
                                        </div>
                                        <span className="text-neutral-600 text-xs font-semibold line-height-1">90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Progress with multiple color</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex items-center flex-col gap-6 position-relative">
                                    <div className="w-full bg-primary-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-primary-600 h-2 rounded-full dark:bg-primary-600 animate-progress transition-all ease-out duration-1000" style={{ width: '20%' }} />
                                    </div>
                                    <div className="w-full bg-success-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-success-600 h-2 rounded-full dark:bg-success-600 animate-progress transition-all ease-out duration-1000" style={{ width: '35%' }} />
                                    </div>
                                    <div className="w-full bg-info-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-info-600 h-2 rounded-full dark:bg-info-600 animate-progress transition-all ease-out duration-1000" style={{ width: '50%' }} />
                                    </div>
                                    <div className="w-full bg-warning-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-warning-600 h-2 rounded-full dark:bg-warning-600 animate-progress transition-all ease-out duration-1000" style={{ width: '75%' }} />
                                    </div>
                                    <div className="w-full bg-danger-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-danger-600 h-2 rounded-full dark:bg-danger-600 animate-progress transition-all ease-out duration-1000" style={{ width: '90%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Gradient Progress</h6>
                            </div>
                            <div className="card-body p-6">
                                <div className="flex items-center flex-col gap-6 position-relative">
                                    <div className="w-full bg-gradient-to-l to-primary-600/50 from-primary-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-gradient-to-l to-primary-700 from-primary-500 h-2 rounded-full dark:bg-primary-600 animate-progress transition-all ease-out duration-1000" style={{ width: '20%' }} />
                                    </div>
                                    <div className="w-full bg-gradient-to-l to-success-600/50 from-success-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-gradient-to-l to-success-700 from-success-500 h-2 rounded-full dark:bg-success-600 animate-progress transition-all ease-out duration-1000" style={{ width: '35%' }} />
                                    </div>
                                    <div className="w-full bg-gradient-to-l to-info-600/50 from-info-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-gradient-to-l to-info-700 from-info-500 h-2 rounded-full dark:bg-info-600 animate-progress transition-all ease-out duration-1000" style={{ width: '50%' }} />
                                    </div>
                                    <div className="w-full bg-gradient-to-l to-warning-600/50 from-warning-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-gradient-to-l to-warning-700 from-warning-500 h-2 rounded-full dark:bg-warning-600 animate-progress transition-all ease-out duration-1000" style={{ width: '75%' }} />
                                    </div>
                                    <div className="w-full bg-gradient-to-l to-danger-600/50 from-danger-600/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-gradient-to-l to-danger-700 from-danger-500 h-2 rounded-full dark:bg-danger-600 animate-progress transition-all ease-out duration-1000" style={{ width: '90%' }} />
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

export default Progress
