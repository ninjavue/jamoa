import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Pricing</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Pricing</li>
                    </ul>
                </div>
                <div className="card h-full p-0 rounded-xl border-0 overflow-hidden">
                    <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                        <h6 className="mb-0 text-lg">Pricing Plan Multiple  Color</h6>
                    </div>
                    <div className="card-body p-10">
                        <div className="grid grid-cols-1 3xl:grid-cols-12">
                            <div className="col-span-12 3xl:col-span-10 3xl:col-start-2">
                                <div className="text-center">
                                    <h4 className="mb-4">Pricing Plan</h4>
                                    <p className="mb-0 text-lg text-secondary-light">No contracts. No surprise fees.</p>
                                </div>
                                <div className="mb-4 style-pill-button">
                                    <ul className="flex flex-wrap justify-center font-medium text-center mt-8 mb-12 2xl:mb-[110px]" id="button-tab" data-tabs-toggle="#button-tab-content" role="tablist">
                                        <li role="presentation">
                                            <button className="inline-block px-6 py-2.5 font-semibold rounded-full" id="button-monthly-tab" data-tabs-target="#button-monthly" type="button" role="tab" aria-controls="button-monthly" aria-selected="false">Monthly</button>
                                        </li>
                                        <li role="presentation">
                                            <button className="inline-block px-6 py-2.5 font-semibold rounded-full hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="button-yearly-tab" data-tabs-target="#button-yearly" type="button" role="tab" aria-controls="button-yearly" aria-selected="false">Yearly</button>
                                        </li>
                                    </ul>
                                </div>
                                <div id="button-tab-content">
                                    <div id="button-monthly" role="tabpanel" aria-labelledby="button-monthly-tab">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-0">
                                            <div className="pricing-plan-wrapper">
                                                <div className="relative rounded-[24px] overflow-hidden border py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 border-neutral-200 dark:border-neutral-600 bg-[#ebd7ff] dark:bg-purple-600/25">
                                                    <div className="flex items-center gap-4">
                                                        <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-white dark:bg-neutral-700">
                                                            <img src="../assets/images/pricing/price-icon1.png" alt />
                                                        </span>
                                                        <div className>
                                                            <span className="font-medium text-base text-secondary-light">For individuals</span>
                                                            <h6 className="mb-0">Basic</h6>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-secondary-light mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                                    <h3 className="mb-6">$99 <span className="font-medium text-base text-secondary-light">/monthly</span> </h3>
                                                    <span className="mb-5 font-medium">What's included</span>
                                                    <ul>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                            <span className="text-secondary-light text-lg">All analytics features</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                            <span className="text-secondary-light text-lg">Up to 250,000 tracked visits</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                            <span className="text-secondary-light text-lg">Normal support</span>
                                                        </li>
                                                        <li className="flex items-center gap-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                            <span className="text-secondary-light text-lg">Up to 3 team members</span>
                                                        </li>
                                                    </ul>
                                                    <a type="button" className="bg-purple-600 bg-hover-purple-700 text-white text-center border border-purple-600 text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                                                </div>
                                            </div>
                                            <div className="pricing-plan-wrapper">
                                                <div className="relative rounded-[24px] overflow-hidden border border-primary-200 dark:border-primary-600 py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 2xl:-mt-[50px] 2xl:scale-105 z-[1] bg-primary-600 text-white">
                                                    <span className="bg-white bg-opacity-25 text-white rounded-se-[24px] rounded-es-[24px] py-2 px-6 text-sm absolute end-0 top-0 z-1">Popular</span>
                                                    <div className="flex items-center gap-4">
                                                        <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-white dark:bg-neutral-700">
                                                            <img src="../assets/images/pricing/price-icon2.png" alt />
                                                        </span>
                                                        <div className>
                                                            <span className="font-medium text-base text-white">For startups</span>
                                                            <h6 className="mb-0 text-white">Pro</h6>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-white mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                                    <h3 className="mb-6 text-white">$199 <span className="font-medium text-base text-white">/monthly</span> </h3>
                                                    <span className="mb-5 font-medium">What's included</span>
                                                    <ul>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                            <span className="text-white text-lg">All analytics features</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                            <span className="text-white text-lg">Up to 250,000 tracked visits</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                            <span className="text-white text-lg">Normal support</span>
                                                        </li>
                                                        <li className="flex items-center gap-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                            <span className="text-white text-lg">Up to 3 team members</span>
                                                        </li>
                                                    </ul>
                                                    <a type="button" className="bg-white text-primary-600 text-center border border-white text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                                                </div>
                                            </div>
                                            <div className="pricing-plan-wrapper">
                                                <div className="relative rounded-[24px] overflow-hidden border py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 border-neutral-200 dark:border-neutral-600 bg-success-100 dark:bg-success-600/25">
                                                    <div className="flex items-center gap-4">
                                                        <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-white dark:bg-neutral-700">
                                                            <img src="../assets/images/pricing/price-icon3.png" alt />
                                                        </span>
                                                        <div className>
                                                            <span className="font-medium text-base text-secondary-light">For big companies</span>
                                                            <h6 className="mb-0">Enterprise</h6>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-secondary-light mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                                    <h3 className="mb-6">$399 <span className="font-medium text-base text-secondary-light">/monthly</span> </h3>
                                                    <span className="mb-5 font-medium">What’s included</span>
                                                    <ul>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                            <span className="text-secondary-light text-lg">All analytics features</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                            <span className="text-secondary-light text-lg">Up to 250,000 tracked visits</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                            <span className="text-secondary-light text-lg">Normal support</span>
                                                        </li>
                                                        <li className="flex items-center gap-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                            <span className="text-secondary-light text-lg">Up to 3 team members</span>
                                                        </li>
                                                    </ul>
                                                    <a type="button" className="bg-success-600 bg-hover-success-700 text-white text-center border border-success-600 text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="button-yearly" role="tabpanel" aria-labelledby="button-yearly-tab">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-0">
                                            <div className="pricing-plan-wrapper">
                                                <div className="relative rounded-[24px] overflow-hidden border py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 border-neutral-200 dark:border-neutral-600 bg-[#ebd7ff] dark:bg-purple-600/25">
                                                    <div className="flex items-center gap-4">
                                                        <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-white dark:bg-neutral-700">
                                                            <img src="../assets/images/pricing/price-icon1.png" alt />
                                                        </span>
                                                        <div className>
                                                            <span className="font-medium text-base text-secondary-light">For individuals</span>
                                                            <h6 className="mb-0">Basic</h6>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-secondary-light mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                                    <h3 className="mb-6">$399 <span className="font-medium text-base text-secondary-light">/monthly</span> </h3>
                                                    <span className="mb-5 font-medium">What's included</span>
                                                    <ul>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                            <span className="text-secondary-light text-lg">All analytics features</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                            <span className="text-secondary-light text-lg">Up to 250,000 tracked visits</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                            <span className="text-secondary-light text-lg">Normal support</span>
                                                        </li>
                                                        <li className="flex items-center gap-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                            <span className="text-secondary-light text-lg">Up to 3 team members</span>
                                                        </li>
                                                    </ul>
                                                    <a type="button" className="bg-purple-600 bg-hover-purple-700 text-white text-center border border-purple-600 text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                                                </div>
                                            </div>
                                            <div className="pricing-plan-wrapper">
                                                <div className="relative rounded-[24px] overflow-hidden border border-primary-200 dark:border-primary-600 py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 2xl:-mt-[50px] 2xl:scale-105 z-[1] bg-primary-600 text-white">
                                                    <span className="bg-white bg-opacity-25 text-white rounded-se-[24px] rounded-es-[24px] py-2 px-6 text-sm absolute end-0 top-0 z-1">Popular</span>
                                                    <div className="flex items-center gap-4">
                                                        <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-white dark:bg-neutral-700">
                                                            <img src="../assets/images/pricing/price-icon2.png" alt />
                                                        </span>
                                                        <div className>
                                                            <span className="font-medium text-base text-white">For startups</span>
                                                            <h6 className="mb-0 text-white">Pro</h6>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-white mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                                    <h3 className="mb-6 text-white">$399 <span className="font-medium text-base text-white">/monthly</span> </h3>
                                                    <span className="mb-5 font-medium">What's included</span>
                                                    <ul>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                            <span className="text-white text-lg">All analytics features</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                            <span className="text-white text-lg">Up to 250,000 tracked visits</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                            <span className="text-white text-lg">Normal support</span>
                                                        </li>
                                                        <li className="flex items-center gap-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                            <span className="text-white text-lg">Up to 3 team members</span>
                                                        </li>
                                                    </ul>
                                                    <a type="button" className="bg-white text-primary-600 text-center border border-white text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                                                </div>
                                            </div>
                                            <div className="pricing-plan-wrapper">
                                                <div className="relative rounded-[24px] overflow-hidden border py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 border-neutral-200 dark:border-neutral-600 bg-success-100 dark:bg-success-600/25">
                                                    <div className="flex items-center gap-4">
                                                        <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-white dark:bg-neutral-700">
                                                            <img src="../assets/images/pricing/price-icon3.png" alt />
                                                        </span>
                                                        <div className>
                                                            <span className="font-medium text-base text-secondary-light">For big companies</span>
                                                            <h6 className="mb-0">Enterprise</h6>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-secondary-light mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                                    <h3 className="mb-6">$999 <span className="font-medium text-base text-secondary-light">/monthly</span> </h3>
                                                    <span className="mb-5 font-medium">What’s included</span>
                                                    <ul>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                            <span className="text-secondary-light text-lg">All analytics features</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                            <span className="text-secondary-light text-lg">Up to 250,000 tracked visits</span>
                                                        </li>
                                                        <li className="flex items-center gap-4 mb-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                            <span className="text-secondary-light text-lg">Normal support</span>
                                                        </li>
                                                        <li className="flex items-center gap-4">
                                                            <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                            <span className="text-secondary-light text-lg">Up to 3 team members</span>
                                                        </li>
                                                    </ul>
                                                    <a type="button" className="bg-success-600 bg-hover-success-700 text-white text-center border border-success-600 text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card h-full p-0 rounded-xl border-0 overflow-hidden mt-6">
                    <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                        <h6 className="mb-0 text-lg">Pricing Plan Multiple  Color</h6>
                    </div>
                    <div className="card-body p-10">
                        <div className="grid grid-cols-1 3xl:grid-cols-12">
                            <div className="col-span-12 3xl:col-span-10 3xl:col-start-2">
                                <div className="text-center">
                                    <h4 className="mb-4">Simple, Transparent Pricing</h4>
                                    <p className="mb-0 text-lg text-secondary-light">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.</p>
                                </div>
                                <div className="mb-4 style-pill-button">
                                    <div className=" mt-8 mb-12 2xl:mb-[110px] flex flex-wrap justify-center">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <span className="me-3 text-sm font-medium dark:text-gray-300 text-neutral-900">Monthly</span>
                                            <input type="checkbox" defaultValue className="sr-only peer" />
                                            <span className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 peer-checked:text-primary-600">Annually</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-0">
                                    <div className="pricing-plan-wrapper">
                                        <div className="relative rounded-[24px] overflow-hidden border py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 border-neutral-200 dark:border-neutral-600">
                                            <div className="flex items-center gap-4">
                                                <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-primary-50 dark:bg-primary-600/25">
                                                    <img src="../assets/images/pricing/price-icon4.png" alt />
                                                </span>
                                                <div className>
                                                    <span className="font-medium text-base text-secondary-light">For individuals</span>
                                                    <h6 className="mb-0">Basic</h6>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-secondary-light mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                            <h3 className="mb-6">$99 <span className="font-medium text-base text-secondary-light">/monthly</span> </h3>
                                            <span className="mb-5 font-medium">What's included</span>
                                            <ul>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                    <span className="text-secondary-light text-lg">All analytics features</span>
                                                </li>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                    <span className="text-secondary-light text-lg">Up to 250,000 tracked visits</span>
                                                </li>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                    <span className="text-secondary-light text-lg">Normal support</span>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-purple-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg " /></span>
                                                    <span className="text-secondary-light text-lg">Up to 3 team members</span>
                                                </li>
                                            </ul>
                                            <a type="button" className="bg-purple-600 bg-hover-purple-700 text-white text-center border border-purple-600 text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                                        </div>
                                    </div>
                                    <div className="pricing-plan-wrapper">
                                        <div className="relative rounded-[24px] overflow-hidden border border-primary-200 dark:border-primary-600 py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 2xl:-mt-[50px] 2xl:scale-105 z-[1] bg-primary-600 text-white">
                                            <span className="bg-white bg-opacity-25 text-white rounded-se-[24px] rounded-es-[24px] py-2 px-6 text-sm absolute end-0 top-0 z-1">Popular</span>
                                            <div className="flex items-center gap-4">
                                                <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-white dark:bg-neutral-700">
                                                    <img src="../assets/images/pricing/price-icon2.png" alt />
                                                </span>
                                                <div className>
                                                    <span className="font-medium text-base text-white">For startups</span>
                                                    <h6 className="mb-0 text-white">Pro</h6>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-white mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                            <h3 className="mb-6 text-white">$199 <span className="font-medium text-base text-white">/monthly</span> </h3>
                                            <span className="mb-5 font-medium">What's included</span>
                                            <ul>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                    <span className="text-white text-lg">All analytics features</span>
                                                </li>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                    <span className="text-white text-lg">Up to 250,000 tracked visits</span>
                                                </li>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                    <span className="text-white text-lg">Normal support</span>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-white rounded-full text-primary-600 dark:text-primary-600"><iconify-icon icon="iconamoon:check-light" className="text-lg   " /></span>
                                                    <span className="text-white text-lg">Up to 3 team members</span>
                                                </li>
                                            </ul>
                                            <a type="button" className="bg-white text-primary-600 text-center border border-white text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
                                        </div>
                                    </div>
                                    <div className="pricing-plan-wrapper">
                                        <div className="relative rounded-[24px] overflow-hidden border py-6 lg:py-8 xl:py-10 2xl:py-[50px] px-5 lg:px-6 3xl:px-10 border-neutral-200 dark:border-neutral-600">
                                            <div className="flex items-center gap-4">
                                                <span className="w-[72px] h-[72px] flex justify-center items-center rounded-2xl bg-primary-50 dark:bg-primary-600/25">
                                                    <img src="../assets/images/pricing/price-icon5.png" alt />
                                                </span>
                                                <div className>
                                                    <span className="font-medium text-base text-secondary-light">For big companies</span>
                                                    <h6 className="mb-0">Enterprise</h6>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-secondary-light mb-7">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                                            <h3 className="mb-6">$399 <span className="font-medium text-base text-secondary-light">/monthly</span> </h3>
                                            <span className="mb-5 font-medium">What’s included</span>
                                            <ul>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                    <span className="text-secondary-light text-lg">All analytics features</span>
                                                </li>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                    <span className="text-secondary-light text-lg">Up to 250,000 tracked visits</span>
                                                </li>
                                                <li className="flex items-center gap-4 mb-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                    <span className="text-secondary-light text-lg">Normal support</span>
                                                </li>
                                                <li className="flex items-center gap-4">
                                                    <span className="w-6 h-6 flex justify-center items-center bg-success-600 rounded-full"><iconify-icon icon="iconamoon:check-light" className="text-white text-lg   " /></span>
                                                    <span className="text-secondary-light text-lg">Up to 3 team members</span>
                                                </li>
                                            </ul>
                                            <a type="button" className="bg-success-600 bg-hover-success-700 text-white text-center border border-success-600 text-sm btn-sm px-3 py-2.5 w-full rounded-lg mt-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</a>
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

export default Pricing
