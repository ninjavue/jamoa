import React from 'react'
import { Link } from 'react-router-dom'

const Tags = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Tags</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Tags</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Default Tags</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="flex flex-wrap items-center gap-4 md:gap-8">
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium">Label</li>
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium">Label</li>
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium">Label</li>
                            </ul>
                            <ul className="tag-list flex flex-wrap items-center gap-3 sm:gap-5 mt-5">
                                <li className="text-secondary-light border rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-1">
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-1">
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-1">
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Colors tags</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="flex flex-wrap items-center gap-4 md:gap-8">
                                <li className="text-white bg-primary-600 border border-primary-600 rounded px-2 py-1.5 text-sm line-height-1 font-medium">Label</li>
                                <li className="text-white bg-purple-600 border border-purple-600 rounded px-2 py-1.5 text-sm line-height-1 font-medium">Label</li>
                                <li className="text-white bg-warning-600 border border-warning-600 rounded px-2 py-1.5 text-sm line-height-1 font-medium">Label</li>
                            </ul>
                            <ul className="tag-list flex flex-wrap items-center gap-3 sm:gap-5 mt-5">
                                <li className="text-primary-600 border border-primary-600 rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-1">
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                                <li className="dark:text-purple-400 border border-purple-600 rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-1">
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                                <li className="text-warning-600 border border-warning-600 rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-1">
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Tags With Image</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="flex flex-wrap items-center gap-3 sm:gap-5 mt-5">
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <img src="../assets/images/flags/flag-tag.png" className="w-4 h-4 rounded-full" alt />
                                    Label
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <img src="../assets/images/flags/flag-tag.png" className="w-4 h-4 rounded-full" alt />
                                    Label
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <img src="../assets/images/flags/flag-tag.png" className="w-4 h-4 rounded-full" alt />
                                    Label
                                </li>
                            </ul>
                            <ul className="tag-list flex flex-wrap items-center gap-3 sm:gap-5 mt-5">
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <img src="../assets/images/flags/flag-tag.png" className="w-4 h-4 rounded-full" alt />
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <img src="../assets/images/flags/flag-tag.png" className="w-4 h-4 rounded-full" alt />
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <img src="../assets/images/flags/flag-tag.png" className="w-4 h-4 rounded-full" alt />
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Tags Indicator </h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="flex flex-wrap items-center gap-4 md:gap-8">
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                    Label
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                    Label
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-1.5 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                    Label
                                </li>
                            </ul>
                            <ul className="tag-list flex flex-wrap items-center gap-3 sm:gap-5 mt-5">
                                <li className="text-secondary-light border rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                                <li className="text-secondary-light border rounded px-2 py-2 text-sm line-height-1 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                    Label
                                    <button className="remove-tag text-lg flex justify-center items-center" type="button"><iconify-icon icon="iconamoon:sign-times-light" className="icon line-height-1" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tags
