import React from 'react'
import { Link } from 'react-router-dom'

const StarRating = () => {
    return (
        <>

            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Star Ratings</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Star Ratings</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Default Star Ratings</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="flex flex-wrap items-center gap-3">
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Half Star</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="flex flex-wrap items-center gap-3">
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="mdi:star-outline" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="mdi:star-outline" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Multi Color</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="flex flex-wrap items-center gap-3">
                                <li className="text-[32px] line-height-1 text-primary-600"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-[32px] line-height-1 dark:text-purple-400"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-[32px] line-height-1 text-success-600"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-[32px] line-height-1 text-info-600"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-[32px] line-height-1 text-danger-600"><iconify-icon icon="material-symbols:star" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Rating</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="flex flex-wrap items-center gap-3">
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-warning-600 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-neutral-400 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-neutral-400 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                                <li className="text-neutral-400 text-[32px] line-height-1"><iconify-icon icon="material-symbols:star" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StarRating
