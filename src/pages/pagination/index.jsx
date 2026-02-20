import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Pagination</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Pagination</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-md-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Default Solid</h6>
                            </div>
                            <div className="card-body p-6">
                                <ul className="pagination flex flex-wrap items-center gap-2 justify-center">
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48]" href="#">First</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48]" href="#">Previous</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48] w-[48px] bg-primary-600 text-white" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48] w-[48px]" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48]" href="#">Next</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48]" href="#">Last</a>
                                    </li>
                                </ul>
                                <ul className="pagination flex flex-wrap items-center gap-2 justify-center mt-6">
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Previous</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] bg-primary-600 text-white" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Outline</h6>
                            </div>
                            <div className="card-body p-6">
                                <ul className="pagination flex flex-wrap items-center gap-2 justify-center">
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">First</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Previous</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] border-primary-400 text-primary-600" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Next</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Last</a>
                                    </li>
                                </ul>
                                <ul className="pagination flex flex-wrap items-center gap-2 justify-center mt-6">
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Previous</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] border-primary-400 text-primary-600" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-secondary-light font-medium rounded-lg px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Square with icon</h6>
                            </div>
                            <div className="card-body p-6">
                                <ul className="pagination flex flex-wrap items-center gap-2 justify-center">
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="iconamoon:arrow-left-2-light" className="text-2xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] bg-primary-600 text-white" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">4</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">5</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="iconamoon:arrow-right-2-light" className="text-2xl" /> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                </ul>
                                <ul className="pagination flex flex-wrap items-center gap-2 justify-center mt-6">
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] bg-primary-600 text-white" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Rounded with icon</h6>
                            </div>
                            <div className="card-body p-6">
                                <ul className="pagination flex flex-wrap items-center gap-2 justify-center">
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="iconamoon:arrow-left-2-light" className="text-2xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] bg-primary-600 text-white" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">4</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">5</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="iconamoon:arrow-right-2-light" className="text-2xl" /> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                </ul>
                                <ul className="pagination flex flex-wrap items-center gap-2 justify-center mt-6">
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] bg-primary-600 text-white" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded-full border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">Default Solid</h6>
                            </div>
                            <div className="card-body p-6 text-center">
                                <div className="p-6 bg-primary-50 dark:bg-primary-600/25 inline-block rounded-xl bg-primary-success-gradient justify-center mx-auto">
                                    <ul className="pagination flex flex-wrap items-center gap-2 justify-center">
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Page 1of 11</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] bg-primary-600 text-white" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">5</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">...</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:bg-neutral-700 text-secondary-light font-medium rounded-lg border-0 px-5 py-2.5 flex items-center justify-center h-[48px]" href="#">Last</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-0 overflow-hidden relative rounded-xl border-0">
                            <div className="card-header py-4 px-6 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                <h6 className="text-lg mb-0">No Spacing</h6>
                            </div>
                            <div className="card-body text-center p-6">
                                <ul className="pagination flex flex-wrap items-center justify-center">
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] rounded-s-full" href="#"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"><iconify-icon icon="iconamoon:arrow-left-2-light" className="text-2xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] bg-primary-600 text-white" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">4</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">5</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#"> <iconify-icon icon="iconamoon:arrow-right-2-light" className="text-2xl" /> </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] rounded-e-full" href="#"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                    </li>
                                </ul>
                                <ul className="pagination flex flex-wrap items-center justify-center mt-6">
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]  rounded-s-full" href="#"><iconify-icon icon="iconamoon:arrow-left-2-light" className="text-2xl" /></a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] bg-primary-600 text-white" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">4</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px]" href="#">5</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium border-0 px-5 py-2.5 flex items-center justify-center h-[48px] w-[48px] rounded-e-full" href="#"> <iconify-icon icon="iconamoon:arrow-right-2-light" className="text-2xl" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pagination
