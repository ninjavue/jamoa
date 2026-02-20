import React from 'react'
import { Link } from 'react-router-dom'

const Colors = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Colors</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Colors</li>
                    </ul>
                </div>
                <div className="row gy-4">
                    <div className="col-12">
                        <div className="card border-0">
                            <div className="card-body p-6">
                                {/* Shade Start */}
                                <div className="mb-8">
                                    <h6 className="text-base mb-6">Shades</h6>
                                    <div className="flex flex-wrap">
                                        <div className="color-box h-[190px] cursor-pointer max-w-[150px] w-full bg-white dark:bg-neutral-700 relative p-7 grow border border-neutral-200 dark:border-neutral-600">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-white block">100</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-white block" data-clipboard-text="bg-white dark:bg-neutral-700">#FFFFFF</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer max-w-[150px] w-full bg-neutral-900 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">100</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-neutral-900">#111827</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Shade End */}
                                {/* Neutral Start */}
                                <div className="mb-8">
                                    <h6 className="text-base mb-6">Neutral Color</h6>
                                    <div className="flex flex-wrap">
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-50 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">50</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-neutral-50 dark:bg-neutral-600">#FAFAFA</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-100 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">100</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-neutral-100">#F5F5F5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-200 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">200</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-neutral-200">#E5E5E5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-300 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">300</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-neutral-300">#D4D4D4</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-400 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 d-bloc">400</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-neutral-400">#A3A3A3</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-500 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">500</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-neutral-400">#737373</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-600 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">600</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-neutral-600">#525252</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-700 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">700</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-neutral-700">#404040</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-800 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">800</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-neutral-800">#262626</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-neutral-900 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">900</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-neutral-900">#171717</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Neutral End */}
                                {/* Primary Start */}
                                <div className="mb-8">
                                    <h6 className="text-base mb-6">Primary Color</h6>
                                    <div className="flex flex-wrap">
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-50 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">50</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-primary-50 dark:bg-primary-600">#FAFAFA</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-100 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">100</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-primary-100">#F5F5F5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-200 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">200</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-primary-200">#E5E5E5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-300 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">300</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-primary-300">#D4D4D4</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-400 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 d-bloc">400</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-primary-400">#A3A3A3</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-500 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">500</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-primary-400">#737373</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-600 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">600</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-primary-600">#525252</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-700 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">700</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-primary-700">#404040</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-800 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">800</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-primary-800">#262626</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-primary-900 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">900</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-primary-900">#171717</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Primary End */}
                                {/* Error Start */}
                                <div className="mb-8">
                                    <h6 className="text-base mb-6">Error Color</h6>
                                    <div className="flex flex-wrap">
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-50 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">50</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-danger-50 dark:bg-danger-600">#FAFAFA</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-100 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">100</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-danger-100">#F5F5F5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-200 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">200</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-danger-200">#E5E5E5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-300 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">300</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-danger-300">#D4D4D4</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-400 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 d-bloc">400</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-danger-400">#A3A3A3</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-500 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">500</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-danger-400">#737373</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-600 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">600</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-danger-600">#525252</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-700 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">700</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-danger-700">#404040</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-800 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">800</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-danger-800">#262626</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-danger-900 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">900</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-danger-900">#171717</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Error End */}
                                {/* Success Start */}
                                <div className="mb-8">
                                    <h6 className="text-base mb-6">Success Color</h6>
                                    <div className="flex flex-wrap">
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-50 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">50</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-success-50 dark:bg-success-600">#FAFAFA</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-100 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">100</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-success-100">#F5F5F5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-200 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">200</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-success-200">#E5E5E5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-300 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">300</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-success-300">#D4D4D4</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-400 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 d-bloc">400</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-success-400">#A3A3A3</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-500 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">500</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-success-400">#737373</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-600 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">600</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-success-600">#525252</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-700 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">700</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-success-700">#404040</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-800 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">800</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-success-800">#262626</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-success-900 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">900</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-success-900">#171717</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Success End */}
                                {/* warning Start */}
                                <div className="mb-8">
                                    <h6 className="text-base mb-6">Warning Color</h6>
                                    <div className="flex flex-wrap">
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-50 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">50</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-warning-50 dark:bg-warning-600">#FAFAFA</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-100 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">100</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-warning-100">#F5F5F5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-200 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">200</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-warning-200">#E5E5E5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-300 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">300</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-warning-300">#D4D4D4</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-400 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 d-bloc">400</span>
                                                <span className="font-medium text-base text-neutral-600 dark:text-neutral-600 block" data-clipboard-text="bg-warning-400">#A3A3A3</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-500 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">500</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-warning-400">#737373</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-600 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">600</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-warning-600">#525252</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-700 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">700</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-warning-700">#404040</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-800 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">800</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-warning-800">#262626</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-warning-900 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">900</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-warning-900">#171717</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* warning End */}
                                {/* info Start */}
                                <div className="mb-8">
                                    <h6 className="text-base mb-6">Info Color</h6>
                                    <div className="flex flex-wrap">
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-50 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">50</span>
                                                <span className="font-medium text-base text-info-neutral dark:text-neutral-600 block" data-clipboard-text="bg-info-50 dark:bg-info-600">#FAFAFA</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-100 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">100</span>
                                                <span className="font-medium text-base text-info-neutral dark:text-neutral-600 block" data-clipboard-text="bg-info-100">#F5F5F5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-200 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">200</span>
                                                <span className="font-medium text-base text-info-neutral dark:text-neutral-600 block" data-clipboard-text="bg-info-200">#E5E5E5</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-300 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 block">300</span>
                                                <span className="font-medium text-base text-info-neutral dark:text-neutral-600 block" data-clipboard-text="bg-info-300">#D4D4D4</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-400 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-neutral-600 dark:text-neutral-600 d-bloc">400</span>
                                                <span className="font-medium text-base text-info-neutral dark:text-neutral-600 block" data-clipboard-text="bg-info-400">#A3A3A3</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-500 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">500</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-info-400">#737373</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-600 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">600</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-info-600">#525252</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-700 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">700</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-info-700">#404040</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-800 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">800</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-info-800">#262626</span>
                                            </div>
                                        </div>
                                        <div className="color-box h-[190px] cursor-pointer min-w-[120px] bg-info-900 relative p-7 grow">
                                            <div className="absolute start-1/2 -translate-x-1/2 bottom-0 text-center mb-7">
                                                <span className="font-medium text-lg text-white dark:text-white block">900</span>
                                                <span className="font-medium text-base text-white dark:text-white block" data-clipboard-text="bg-info-900">#171717</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* info End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Colors
