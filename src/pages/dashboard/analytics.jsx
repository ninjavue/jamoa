import React from 'react'
import { Link } from 'react-router-dom'

const Analytics = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Dashboard</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Medical</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    <div className="col-span-12 2xl:col-span-6">
                        <div className="card border-0">
                            <div className="card-body p-5">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="trail-bg h-full text-center flex flex-col justify-between items-center p-4 rounded-lg bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("assets/images/home-nine/trail-bg.png")' }}>
                                            <h6 className="text-white text-xl">Upgrade Your Plan</h6>
                                            <div className>
                                                <p className="text-white mb-2">Your free trial expired in 7 days</p>
                                                <a href="#" className="btn py-2 rounded-[50rem] w-full bg-gradient-to-r from-[#CBFFF9] to-[#FFEEB1] text-sm justify-center dark:text-neutral-900 hover:scale-[1.06]">Upgrade Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="rounded-lg h-full text-center p-5 bg-purple-light">
                                                    <span className="w-[44px] h-[44px] rounded-lg inline-flex justify-center items-center text-xl mb-3 bg-purple-200 dark:bg-purple-600/20 border border-purple-400 text-purple-600">
                                                        <i className="ri-price-tag-3-fill" />
                                                    </span>
                                                    <span className="text-neutral-700 block">Total Sales</span>
                                                    <h6 className="mb-0 mt-1">$170,500.09</h6>
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="rounded-lg h-full text-center p-5 bg-success-100 dark:bg-success-600/10">
                                                    <span className="w-[44px] h-[44px] rounded-lg inline-flex justify-center items-center text-xl mb-3 bg-success-200 dark:bg-success-600/20 border border-success-400 text-success-600">
                                                        <i className="ri-shopping-cart-2-fill" />
                                                    </span>
                                                    <span className="text-neutral-700 block">Total Orders</span>
                                                    <h6 className="mb-0 mt-1">1,500</h6>
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="rounded-lg h-full text-center p-5 bg-info-focus">
                                                    <span className="w-[44px] h-[44px] rounded-lg inline-flex justify-center items-center text-xl mb-3 bg-info-200 dark:bg-info-600/20 border border-info-400 text-info-600">
                                                        <i className="ri-group-fill" />
                                                    </span>
                                                    <span className="text-neutral-700 block">Visitor</span>
                                                    <h6 className="mb-0 mt-1">12,300</h6>
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="rounded-lg h-full text-center p-5 bg-danger-100 dark:bg-danger-600/10">
                                                    <span className="w-[44px] h-[44px] rounded-lg inline-flex justify-center items-center text-xl mb-3 bg-danger-200 dark:bg-danger-600/20 border border-danger-400 text-danger-600">
                                                        <i className="ri-refund-2-line" />
                                                    </span>
                                                    <span className="text-neutral-700 block">Refunded</span>
                                                    <h6 className="mb-0 mt-1">2756</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                        <div className="card h-full border-0">
                            <div className="card-body p-6">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="font-bold text-lg mb-0">Revenue Statistic</h6>
                                    <select className="form-select form-select-sm w-auto bg-base border text-neutral-600 dark:text-white dark:bg-neutral-800">
                                        <option>Yearly</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                                <ul className="flex flex-wrap items-center justify-center my-3 gap-6">
                                    <li className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <span className="w-[8px] h-[8px] rounded-[50rem] bg-primary-600" />
                                            <span className="text-neutral-600 text-sm font-semibold">Profit </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h6 className="mb-0">$26,201</h6>
                                            <span className="text-success-600 flex items-center gap-1 text-sm font-bolder">
                                                10%
                                                <i className="ri-arrow-up-s-fill flex" />
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <span className="w-[8px] h-[8px] rounded-[50rem] bg-purple-600" />
                                            <span className="text-neutral-600 text-sm font-semibold">Loss </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h6 className="mb-0">$18,120</h6>
                                            <span className="text-danger-600 flex items-center gap-1 text-sm font-bolder">
                                                10%
                                                <i className="ri-arrow-down-s-fill flex" />
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                                <div id="revenueChart" className="apexcharts-tooltip-style-1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6 2xl:col-span-4">
                        <div className="card h-full border-0">
                            <div className="card-body p-6">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="mb-2 font-bold text-lg">Support Tracker</h6>
                                    <select className="form-select form-select-sm w-auto bg-base border text-neutral-600 dark:text-white dark:bg-neutral-800">
                                        <option>Yearly</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                                <div className="mt-8 flex flex-wrap gap-6 items-center justify-between">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-primary-100 dark:bg-primary-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/ticket1.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-bold">172</h6>
                                                <span className="text-sm text-neutral-600 font-normal">New Tickets </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-warning-100 dark:bg-warning-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/ticket2.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-bold">172</h6>
                                                <span className="text-sm text-neutral-600 font-normal">Open Tickets</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-purple-100 dark:bg-purple-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/ticket3.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-bold">172</h6>
                                                <span className="text-sm text-neutral-600 font-normal">Response Time</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div id="userOverviewDonutChart" className="apexcharts-tooltip-z-none" />
                                        <div className="text-center max-w-[135px] max-h-[135px] bg-warning-focus rounded-[50%] p-4 aspect-ratio-1 flex flex-col justify-center items-center absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-[1] rtl:translate-x-1/2">
                                            <h6 className="font-bold">120</h6>
                                            <span className="text-neutral-600">Total Tickets</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6 2xl:col-span-4">
                        <div className="card h-full border-0">
                            <div className="card-body p-6">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="font-bold text-lg mb-0">Average Daily Sales</h6>
                                    <select className="form-select form-select-sm w-auto bg-base border text-neutral-600 dark:text-white dark:bg-neutral-800">
                                        <option>Yearly</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                                <h6 className="text-center my-5">$27,500.00</h6>
                                <div id="barChart" className="barChart" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-4">
                        <div className="card h-full border-0">
                            <div className="card-body p-6">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="mb-2 font-bold text-lg">Transactions</h6>
                                    <a className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                        View All
                                        <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                    </a>
                                </div>
                                <div className="mt-8">
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-success-200 dark:bg-success-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/payment1.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-normal">Wallet</h6>
                                                <span className="text-sm text-neutral-600 font-normal">Payment</span>
                                            </div>
                                        </div>
                                        <span className="text-neutral-600 text-base font-medium">+$6200</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-info-200 dark:bg-info-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/payment2.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-normal">PayPal</h6>
                                                <span className="text-sm text-neutral-600 font-normal">Payment</span>
                                            </div>
                                        </div>
                                        <span className="text-neutral-600 text-base font-medium">+$6200</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-warning-200 dark:bg-warning-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/payment3.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-normal">Credit Card </h6>
                                                <span className="text-sm text-neutral-600 font-normal">Bill Payment</span>
                                            </div>
                                        </div>
                                        <span className="text-neutral-600 text-base font-medium">-$6200</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 mb-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-purple-200 dark:bg-purple-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/payment4.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-normal">Bank</h6>
                                                <span className="text-sm text-neutral-600 font-normal">Bill Payment</span>
                                            </div>
                                        </div>
                                        <span className="text-neutral-600 text-base font-medium">+$6200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                        <div className="card h-full border-0">
                            <div className="card-body">
                                <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                                    <h6 className="font-bold text-lg mb-0">Sales by Countries</h6>
                                    <select className="form-select form-select-sm w-auto bg-base border text-neutral-600 dark:text-white dark:bg-neutral-800">
                                        <option>This Month</option>
                                        <option>This Week</option>
                                        <option>This Year</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                    <div className="col-span-12 lg:col-span-6">
                                        <div id="world-map" className="border border-neutral-300 dark:border-neutral-300/20 rounded-lg bg-neutral-50 dark:bg-neutral-600/20 h-full" />
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="h-full border border-neutral-300 dark:border-neutral-300/20 p-4 pe-0 rounded-lg">
                                            <div className="max-h-[266px] overflow-y-auto scroll-sm pe-1">
                                                <div className="flex items-center justify-between gap-4 mb-2 pb-2">
                                                    <div className="flex items-center w-full">
                                                        <img src="../assets/images/flags/flag1.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-sm mb-0">USA</h6>
                                                            <span className="text-xs text-neutral-600 font-medium">1,240 Users</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="w-full max-w-66 ms-auto">
                                                            <div className="progress progress-sm rounded-[50rem]" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <div className="progress-bar bg-primary-600 rounded-[50rem]" style={{ width: '80%' }} />
                                                            </div>
                                                        </div>
                                                        <span className="text-neutral-600 font-xs font-semibold">80%</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 mb-2 pb-2">
                                                    <div className="flex items-center w-full">
                                                        <img src="../assets/images/flags/flag2.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-sm mb-0">Japan</h6>
                                                            <span className="text-xs text-neutral-600 font-medium">1,240 Users</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="w-full max-w-66 ms-auto">
                                                            <div className="progress progress-sm rounded-[50rem]" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <div className="progress-bar bg-orange rounded-[50rem]" style={{ width: '60%' }} />
                                                            </div>
                                                        </div>
                                                        <span className="text-neutral-600 font-xs font-semibold">60%</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 mb-2 pb-2">
                                                    <div className="flex items-center w-full">
                                                        <img src="../assets/images/flags/flag3.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-sm mb-0">France</h6>
                                                            <span className="text-xs text-neutral-600 font-medium">1,240 Users</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="w-full max-w-66 ms-auto">
                                                            <div className="progress progress-sm rounded-[50rem]" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <div className="progress-bar bg-yellow rounded-[50rem]" style={{ width: '49%' }} />
                                                            </div>
                                                        </div>
                                                        <span className="text-neutral-600 font-xs font-semibold">49%</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 mb-2 pb-2">
                                                    <div className="flex items-center w-full">
                                                        <img src="../assets/images/flags/flag4.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-sm mb-0">Germany</h6>
                                                            <span className="text-xs text-neutral-600 font-medium">1,240 Users</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="w-full max-w-66 ms-auto">
                                                            <div className="progress progress-sm rounded-[50rem]" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <div className="progress-bar bg-success-main rounded-[50rem]" style={{ width: '100%' }} />
                                                            </div>
                                                        </div>
                                                        <span className="text-neutral-600 font-xs font-semibold">100%</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between gap-4 mb-2 pb-2">
                                                    <div className="flex items-center w-full">
                                                        <img src="../assets/images/flags/flag5.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-sm mb-0">South Korea</h6>
                                                            <span className="text-xs text-neutral-600 font-medium">1,240 Users</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="w-full max-w-66 ms-auto">
                                                            <div className="progress progress-sm rounded-[50rem]" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <div className="progress-bar bg-info-main rounded-[50rem]" style={{ width: '30%' }} />
                                                            </div>
                                                        </div>
                                                        <span className="text-neutral-600 font-xs font-semibold">30%</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between gap-4">
                                                    <div className="flex items-center w-full">
                                                        <img src="../assets/images/flags/flag1.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-sm mb-0">USA</h6>
                                                            <span className="text-xs text-neutral-600 font-medium">1,240 Users</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 w-full">
                                                        <div className="w-full max-w-66 ms-auto">
                                                            <div className="progress progress-sm rounded-[50rem]" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <div className="progress-bar bg-primary-600 rounded-[50rem]" style={{ width: '80%' }} />
                                                            </div>
                                                        </div>
                                                        <span className="text-neutral-600 font-xs font-semibold">80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                        <div className="card h-full border-0">
                            <div className="card-header border-bottom-0 pb-3 flex items-center flex-wrap gap-2 justify-between">
                                <h6 className="font-bold text-lg mb-0">Source Visitors</h6>
                                <select className="form-select form-select-sm w-auto bg-base border text-neutral-600 dark:text-white dark:bg-neutral-800">
                                    <option>Last Month</option>
                                    <option>Last Week</option>
                                    <option>Last Year</option>
                                </select>
                            </div>
                            <div className="card-body">
                                <div className="relative h-full min-h-[320px]">
                                    <div className="md:absolute start-0 top-0 mt-5">
                                        <h6 className="mb-1">524,756</h6>
                                        <span className="text-neutral-600">Total Platform Visitors</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 min-h-[inherit]">
                                        <div className="col-span-12 md:col-span-3 sm:col-span-6 flex flex-col justify-end">
                                            <div className="flex flex-col items-center p-6 pt-4 rounded-t-xl bg-gradient-to-b from-[#ffba4540] to-[#f4743540]" style={{ minHeight: '50%' }}>
                                                <span className="w-[40px] h-[40px] flex shrink-0 justify-center items-center bg-warning-600 rounded-[50%] mb-3">
                                                    <img src="../assets/images/home-nine/source-icon1.png" alt />
                                                </span>
                                                <span className="text-neutral-600">TikTok</span>
                                                <h6 className="mb-0">50%</h6>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-3 sm:col-span-6 flex flex-col justify-end">
                                            <div className="flex flex-col items-center p-6 pt-4 rounded-t-xl bg-gradient-to-b from-[#fc788a40] to-[#98168b40]" style={{ minHeight: '66%' }}>
                                                <span className="w-[40px] h-[40px] flex shrink-0 justify-center items-center bg-purple-600 rounded-[50%] mb-3">
                                                    <img src="../assets/images/home-nine/source-icon2.png" alt />
                                                </span>
                                                <span className="text-neutral-600">Instagram</span>
                                                <h6 className="mb-0">66%</h6>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-3 sm:col-span-6 flex flex-col justify-end">
                                            <div className="flex flex-col items-center p-6 pt-4 rounded-t-xl bg-gradient-to-b from-[#19cfef40] to-[#0d6ab840]" style={{ minHeight: '82%' }}>
                                                <span className="w-[40px] h-[40px] flex shrink-0 justify-center items-center bg-primary-600 rounded-[50%] mb-3">
                                                    <img src="../assets/images/home-nine/source-icon3.png" alt />
                                                </span>
                                                <span className="text-neutral-600">Facebook</span>
                                                <h6 className="mb-0">82%</h6>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-3 sm:col-span-6 flex flex-col justify-end">
                                            <div className="flex flex-col items-center p-6 pt-4 rounded-t-xl bg-gradient-to-b from-[#86dd6640] to-[#028c4b40]" style={{ minHeight: '96%' }}>
                                                <span className="w-[40px] h-[40px] flex shrink-0 justify-center items-center bg-success-600 rounded-[50%] mb-3">
                                                    <img src="../assets/images/home-nine/source-icon4.png" alt />
                                                </span>
                                                <span className="text-neutral-600">Website</span>
                                                <h6 className="mb-0">96%</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-4">
                        <div className="card h-full border-0">
                            <div className="card-body p-6">
                                <div className="flex align-items-start flex-col gap-2">
                                    <h6 className="mb-2 font-bold text-lg">Monthly Campaign State</h6>
                                    <span className="text-neutral-600">7.2k Social visitors</span>
                                </div>
                                <div className="flex flex-col gap-[22px] mt-8">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-purple-100 dark:bg-purple-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/socials1.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-semibold">Email</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-neutral-600 text-base font-medium">6,200</span>
                                            <span className="text-success-600 text-base font-medium">0.3%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-warning-100 dark:bg-warning-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/socials2.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-semibold">Clicked</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-neutral-600 text-base font-medium">Clicked</span>
                                            <span className="text-danger-600 text-base font-medium">1.3%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-info-100 dark:bg-info-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/socials3.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-semibold">Subscribe</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-neutral-600 text-base font-medium">5,175</span>
                                            <span className="text-success-600 text-base font-medium">0.3%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-success-100 dark:bg-success-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/socials4.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-semibold">Complaints </h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-neutral-600 text-base font-medium">3,780</span>
                                            <span className="text-success-600 text-base font-medium">0.3%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-danger-100 dark:bg-danger-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/socials5.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-semibold">Unsubscribe</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-neutral-600 text-base font-medium">4,120</span>
                                            <span className="text-success-600 text-base font-medium">0.3%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-info-100 dark:bg-info-600/20 shrink-0">
                                                <img src="../assets/images/home-nine/socials3.png" alt className />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="text-base mb-0 font-semibold">Subscribe</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-neutral-600 text-base font-medium">5,175</span>
                                            <span className="text-success-600 text-base font-medium">0.3%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-8">
                        <div className="card h-full border-0">
                            <div className="card-header border-bottom bg-base py-4 px-6 flex items-center justify-between">
                                <h6 className="text-lg font-semibold mb-0">Recent Activity</h6>
                                <a className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                    View All
                                    <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                </a>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive scroll-sm">
                                    <table className="table bordered-table mb-0 rounded-0 border-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="bg-transparent rounded-0 !py-5">Customer</th>
                                                <th scope="col" className="bg-transparent rounded-0 !py-5">ID</th>
                                                <th scope="col" className="bg-transparent rounded-0 !py-5">Retained</th>
                                                <th scope="col" className="bg-transparent rounded-0 !py-5">Amount</th>
                                                <th scope="col" className="bg-transparent rounded-0 !py-5">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-grid/user-grid-img1.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3 overflow-hidden" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-base mb-0">Kristin Watson</h6>
                                                            <span className="text-sm text-neutral-600 font-medium">ulfaha@mail.ru</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>#63254</td>
                                                <td>5 min ago</td>
                                                <td>$12,408.12</td>
                                                <td> <span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Member</span> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-grid/user-grid-img2.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3 overflow-hidden" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-base mb-0">Theresa Webb</h6>
                                                            <span className="text-sm text-neutral-600 font-medium">joie@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>#63254</td>
                                                <td>12 min ago</td>
                                                <td>$12,408.12</td>
                                                <td> <span className="bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-600 px-2.5 py-1 rounded-lg font-medium text-sm">New Customer</span> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-grid/user-grid-img3.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3 overflow-hidden" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-base mb-0">Brooklyn Simmons</h6>
                                                            <span className="text-sm text-neutral-600 font-medium">warn@mail.ru</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>#63254</td>
                                                <td>15 min ago</td>
                                                <td>$12,408.12</td>
                                                <td> <span className="bg-warning-focus text-warning-main dark:text-warning-main px-2.5 py-1 rounded-lg font-medium text-sm">Signed Up </span> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-grid/user-grid-img4.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3 overflow-hidden" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-base mb-0">Robert Fox</h6>
                                                            <span className="text-sm text-neutral-600 font-medium">fellora@mail.ru</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>#63254</td>
                                                <td>17 min ago</td>
                                                <td>$12,408.12</td>
                                                <td> <span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Member</span> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-grid/user-grid-img5.png" alt className="w-[40px] h-[40px] rounded-[50%] shrink-0 me-3 overflow-hidden" />
                                                        <div className="flex-grow-1">
                                                            <h6 className="text-base mb-0">Jane Cooper</h6>
                                                            <span className="text-sm text-neutral-600 font-medium">zitka@mail.ru</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>#63254</td>
                                                <td>25 min ago</td>
                                                <td>$12,408.12</td>
                                                <td> <span className="bg-warning-focus text-warning-main dark:text-warning-main px-2.5 py-1 rounded-lg font-medium text-sm">Signed Up </span> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Analytics
