import React from 'react'
import { Link } from 'react-router-dom'

const Lms = () => {
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
                        <li className="font-medium dark:text-white">LMS / Learning System</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                    {/* ======================= First Row Cards Start =================== */}
                    <div className="col-span-12 2xl:col-span-8">
                        <div className="card border-0 rounded-lg p-5">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                                    <div className="card border-0 p-4 rounded-lg shadow-none bg-gradient-to-l from-[#ffeaf480] dark:from-[#ffeaf41c] to-[#ffe2f0] dark:to-[#ffe2f018] mb-3">
                                        <div className="card-body p-0">
                                            <div className="flex flex-wrap items-center justify-between gap-1 mb-0">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="mb-0 w-11 h-11 bg-white dark:bg-neutral-900 text-[#de3ace] dark:text-[#de3ace] text-2xl flex-shrink-0 flex justify-center items-center rounded-full
                                       h6">
                                                        <i className="ri-group-fill" />
                                                    </span>
                                                    <div>
                                                        <span className="mb-0 font-medium text-neutral-600 text-lg">Total Students</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between flex-wrap gap-8">
                                                <h5 className="font-semibold mb-0">15,000</h5>
                                                <p className="text-sm mb-0 flex items-center gap-2 text-neutral-500">
                                                    <span className="text-white px-1 rounded font-medium bg-success-main text-sm">+2.5k</span>
                                                    This Month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 p-4 rounded-lg shadow-none bg-gradient-to-l from-[#ecddff4d] dark:from-[#ecddff17] to-[#ecddff] dark:to-[#ecddff26] mb-3">
                                        <div className="card-body p-0">
                                            <div className="flex flex-wrap items-center justify-between gap-1 mb-0">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="mb-0 w-11 h-11 bg-white dark:bg-neutral-900 text-lilac-600 dark:text-lilac-600 text-2xl flex-shrink-0 flex justify-center items-center rounded-full
                                       h6">
                                                        <i className="ri-youtube-fill" />
                                                    </span>
                                                    <div>
                                                        <span className="mb-0 font-medium text-neutral-600 text-lg">Total Courses</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between flex-wrap gap-8">
                                                <h5 className="font-semibold mb-0">420</h5>
                                                <p className="text-sm mb-0 flex items-center gap-2 text-neutral-500">
                                                    <span className="text-white px-1 rounded font-medium bg-success-main text-sm">+30</span>
                                                    This Month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0 p-4 rounded-lg shadow-none bg-gradient-to-l from-[#ebfaff] dark:from-[#ebfaff2c] to-[#c0f0ff] dark:to-[#c0f0ff23] mb-0">
                                        <div className="card-body p-0">
                                            <div className="flex flex-wrap items-center justify-between gap-1 mb-0">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="mb-0 w-11 h-11 bg-white dark:bg-neutral-900 text-cyan-600 dark:text-cyan-600 text-2xl flex-shrink-0 flex justify-center items-center rounded-full
                                           h6">
                                                        <i className="ri-money-dollar-circle-fill" />
                                                    </span>
                                                    <div>
                                                        <span className="mb-0 font-medium text-neutral-600 text-lg">Overall Revenue</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between flex-wrap gap-8">
                                                <h5 className="font-semibold mb-0">$50,000</h5>
                                                <p className="text-sm mb-0 flex items-center gap-2 text-neutral-500">
                                                    <span className="text-white px-1 rounded font-medium bg-success-main text-sm">+1.5k</span>
                                                    This Month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 2xl:col-span-8">
                                    <div className="card-body p-0">
                                        <div className="flex items-center flex-wrap gap-2 justify-between">
                                            <h6 className="mb-2 font-bold text-lg">
                                                Average Enrollment Rate
                                            </h6>
                                            <div className>
                                                <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-800 dark:text-white border text-neutral-600">
                                                    <option>Yearly</option>
                                                    <option>Monthly</option>
                                                    <option>Weekly</option>
                                                    <option>Today</option>
                                                </select>
                                            </div>
                                        </div>
                                        <ul className="flex flex-wrap items-center justify-center mt-3 gap-3">
                                            <li className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full
                                   bg-primary-600" />
                                                <span className="text-neutral-600 text-sm font-semibold">
                                                    Paid Course:
                                                    <span className="text-primary-light font-bold">350</span>
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full
                                   bg-success-main" />
                                                <span className="text-neutral-600 text-sm font-semibold">
                                                    Free Course:
                                                    <span className="text-primary-light font-bold">70</span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="mt-10">
                                            <div id="enrollmentChart" className="apexcharts-tooltip-style-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                        <div className="card border-0 h-full rounded-lg">
                            <div className="card-body p-6 flex flex-col justify-between gap-8">
                                <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                                    <h6 className="font-bold text-lg mb-0">Traffic Sources</h6>
                                    <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-800 dark:text-white border text-neutral-600">
                                        <option>Yearly</option>
                                        <option>Monthly</option>
                                        <option>Weekly</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                                <div id="userOverviewDonutChart" className="margin-16-minus y-value-left apexcharts-tooltip-z-none" />
                                <ul className="flex flex-wrap items-center justify-between mt-3 gap-3">
                                    <li className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full
                               bg-warning-600" />
                                            <span className="text-neutral-600 text-sm font-semibold">Organic Search</span>
                                        </div>
                                        <span className="text-primary-light font-bold">875</span>
                                    </li>
                                    <li className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full
                               bg-success-600" />
                                            <span className="text-neutral-600 text-sm font-semibold">Referrals</span>
                                        </div>
                                        <span className="text-primary-light font-bold">450</span>
                                    </li>
                                    <li className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full
                               bg-primary-600" />
                                            <span className="text-neutral-600 text-sm font-semibold">Social Media</span>
                                        </div>
                                        <span className="text-primary-light font-bold">4,305</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* ======================= First Row Cards End =================== */}
                    {/* ================== Second Row Cards Start ======================= */}
                    {/* Top Categories Card border-0 Start */}
                    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                        <div className="card border-0 h-full">
                            <div className="card-header">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="font-bold text-lg mb-0">Top Categories</h6>
                                    <a className="text-primary-600 dark:text-primary-600 hover:text-primary-600 flex items-center gap-1">
                                        View All
                                        <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between gap-3 mb-[26px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-info-50 dark:bg-info-600/20 flex justify-center items-center">
                                            <img src="../assets/images/home-six/category-icon1.png" alt className />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="text-base mb-0 font-normal">Web Development</h6>
                                            <span className="text-sm text-neutral-600 font-normal">40+ Courses</span>
                                        </div>
                                    </div>
                                    <a className="w-6 h-6 bg-primary-600/10 text-primary-600 dark:text-primary-600 flex justify-center items-center text-lg hover:bg-primary-600/20 rounded">
                                        <i className="ri-arrow-right-s-line" />
                                    </a>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-[26px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-success-50 dark:bg-success-600/20 flex justify-center items-center">
                                            <img src="../assets/images/home-six/category-icon2.png" alt className />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="text-base mb-0 font-normal">Graphic Design</h6>
                                            <span className="text-sm text-neutral-600 font-normal">40+ Courses</span>
                                        </div>
                                    </div>
                                    <a className="w-6 h-6 bg-primary-600/10 text-primary-600 dark:text-primary-600 flex justify-center items-center text-lg hover:bg-primary-600/20 rounded">
                                        <i className="ri-arrow-right-s-line" />
                                    </a>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-[26px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-lilac-50 dark:bg-lilac-600/20 flex justify-center items-center">
                                            <img src="../assets/images/home-six/category-icon3.png" alt className />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="text-base mb-0 font-normal">UI/UX Design</h6>
                                            <span className="text-sm text-neutral-600 font-normal">40+ Courses</span>
                                        </div>
                                    </div>
                                    <a className="w-6 h-6 bg-primary-600/10 text-primary-600 dark:text-primary-600 flex justify-center items-center text-lg hover:bg-primary-600/20 rounded">
                                        <i className="ri-arrow-right-s-line" />
                                    </a>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-[26px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-warning-50 dark:bg-warning-600/20 flex justify-center items-center">
                                            <img src="../assets/images/home-six/category-icon4.png" alt className />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="text-base mb-0 font-normal">Digital Marketing</h6>
                                            <span className="text-sm text-neutral-600 font-normal">40+ Courses</span>
                                        </div>
                                    </div>
                                    <a className="w-6 h-6 bg-primary-600/10 text-primary-600 dark:text-primary-600 flex justify-center items-center text-lg hover:bg-primary-600/20 rounded">
                                        <i className="ri-arrow-right-s-line" />
                                    </a>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-[26px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-danger-50 dark:bg-danger-600/20 flex justify-center items-center">
                                            <img src="../assets/images/home-six/category-icon5.png" alt className />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="text-base mb-0 font-normal">3d Illustration &amp; Art Design</h6>
                                            <span className="text-sm text-neutral-600 font-normal">40+ Courses</span>
                                        </div>
                                    </div>
                                    <a className="w-6 h-6 bg-primary-600/10 text-primary-600 dark:text-primary-600 flex justify-center items-center text-lg hover:bg-primary-600/20 rounded">
                                        <i className="ri-arrow-right-s-line" />
                                    </a>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg flex-shrink-0 bg-primary-600/10 flex justify-center items-center">
                                            <img src="../assets/images/home-six/category-icon6.png" alt className />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="text-base mb-0 font-normal">Logo Design</h6>
                                            <span className="text-sm text-neutral-600 font-normal">40+ Courses</span>
                                        </div>
                                    </div>
                                    <a className="w-6 h-6 bg-primary-600/10 text-primary-600 dark:text-primary-600 flex justify-center items-center text-lg hover:bg-primary-600/20 rounded">
                                        <i className="ri-arrow-right-s-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Top Categories Card border-0 End */}
                    {/* Instructor Card border-0 Start */}
                    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                        <div className="card border-0">
                            <div className="card-header">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="font-bold text-lg mb-0">Top Instructors</h6>
                                    <a className="text-primary-600 dark:text-primary-600 hover:text-primary-600 flex items-center gap-1">
                                        View All
                                        <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/users/user1.png" alt className="w-10 h-10 rounded-full
                           flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Dianne Russell</h6>
                                            <span className="text-sm text-neutral-600 font-medium">Agent ID: 36254</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                        </div>
                                        <span className="text-primary-light text-sm block text-right">25 Reviews</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/users/user2.png" alt className="w-10 h-10 rounded-full
                           flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Wade Warren</h6>
                                            <span className="text-sm text-neutral-600 font-medium">Agent ID: 36254</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                        </div>
                                        <span className="text-primary-light text-sm block text-right">25 Reviews</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/users/user3.png" alt className="w-10 h-10 rounded-full
                           flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Albert Flores</h6>
                                            <span className="text-sm text-neutral-600 font-medium">Agent ID: 36254</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                        </div>
                                        <span className="text-primary-light text-sm block text-right">25 Reviews</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/users/user4.png" alt className="w-10 h-10 rounded-full
                           flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Bessie Cooper</h6>
                                            <span className="text-sm text-neutral-600 font-medium">Agent ID: 36254</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                        </div>
                                        <span className="text-primary-light text-sm block text-right">25 Reviews</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/users/user5.png" alt className="w-10 h-10 rounded-full
                           flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Arlene McCoy</h6>
                                            <span className="text-sm text-neutral-600 font-medium">Agent ID: 36254</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                        </div>
                                        <span className="text-primary-light text-sm block text-right">25 Reviews</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center">
                                        <img src="../assets/images/users/user1.png" alt className="w-10 h-10 rounded-full
                           flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Arlene McCoy</h6>
                                            <span className="text-sm text-neutral-600 font-medium">Agent ID: 36254</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                            <span className="text-lg text-warning-600 dark:text-warning-600 flex line-height-1"><i className="ri-star-fill" /></span>
                                        </div>
                                        <span className="text-primary-light text-sm block text-right">25 Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Instructor Card border-0 End */}
                    {/* Student Progress Card border-0 Start */}
                    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                        <div className="card border-0 h-full">
                            <div className="card-header">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="font-bold text-lg mb-0">Student's Progress</h6>
                                    <a className="text-primary-600 dark:text-primary-600 hover:text-primary-600 flex items-center gap-1">
                                        View All
                                        <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/home-six/student-img1.png" alt className="w-10 h-10 rounded-lg flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Theresa Webb</h6>
                                            <span className="text-sm text-neutral-600 font-medium">UI/UX Design Course</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <span className="text-primary-light text-sm block text-right">
                                            <svg className="radial-progress" data-percentage={33} viewBox="0 0 80 80">
                                                <circle className="incomplete" cx={40} cy={40} r={35} />
                                                <circle className="complete" cx={40} cy={40} r={35} style={{ strokeDashoffset: '39.58406743523136' }} />
                                                <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">33</text>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/home-six/student-img2.png" alt className="w-10 h-10 rounded-lg flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Robert Fox</h6>
                                            <span className="text-sm text-neutral-600 font-medium">Graphic Design Course</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <span className="text-primary-light text-sm block text-right">
                                            <svg className="radial-progress" data-percentage={70} viewBox="0 0 80 80">
                                                <circle className="incomplete" cx={40} cy={40} r={35} />
                                                <circle className="complete" cx={40} cy={40} r={35} style={{ strokeDashoffset: '39.58406743523136' }} />
                                                <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">70</text>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/home-six/student-img3.png" alt className="w-10 h-10 rounded-lg flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Guy Hawkins</h6>
                                            <span className="text-sm text-neutral-600 font-medium">Web developer Course</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <span className="text-primary-light text-sm block text-right">
                                            <svg className="radial-progress" data-percentage={80} viewBox="0 0 80 80">
                                                <circle className="incomplete" cx={40} cy={40} r={35} />
                                                <circle className="complete" cx={40} cy={40} r={35} style={{ strokeDashoffset: '39.58406743523136' }} />
                                                <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">80</text>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/home-six/student-img4.png" alt className="w-10 h-10 rounded-lg flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Cody Fisher</h6>
                                            <span className="text-sm text-neutral-600 font-medium">UI/UX Design Course</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <span className="text-primary-light text-sm block text-right">
                                            <svg className="radial-progress" data-percentage={20} viewBox="0 0 80 80">
                                                <circle className="incomplete" cx={40} cy={40} r={35} />
                                                <circle className="complete" cx={40} cy={40} r={35} style={{ strokeDashoffset: '39.58406743523136' }} />
                                                <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">20</text>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className="flex items-center">
                                        <img src="../assets/images/home-six/student-img5.png" alt className="w-10 h-10 rounded-lg flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Jacob Jones</h6>
                                            <span className="text-sm text-neutral-600 font-medium">UI/UX Design Course</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <span className="text-primary-light text-sm block text-right">
                                            <svg className="radial-progress" data-percentage={40} viewBox="0 0 80 80">
                                                <circle className="incomplete" cx={40} cy={40} r={35} />
                                                <circle className="complete" cx={40} cy={40} r={35} style={{ strokeDashoffset: '39.58406743523136' }} />
                                                <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">40</text>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-0">
                                    <div className="flex items-center">
                                        <img src="../assets/images/home-six/student-img6.png" alt className="w-10 h-10 rounded-lg flex-shrink-0 me-3 overflow-hidden" />
                                        <div className="flex-grow-1">
                                            <h6 className="sm:text-base text-xs mb-0 font-medium">Darlene Robertson</h6>
                                            <span className="text-sm text-neutral-600 font-medium">UI/UX Design Course</span>
                                        </div>
                                    </div>
                                    <div className>
                                        <span className="text-primary-light text-sm block text-right">
                                            <svg className="radial-progress" data-percentage={24} viewBox="0 0 80 80">
                                                <circle className="incomplete" cx={40} cy={40} r={35} />
                                                <circle className="complete" cx={40} cy={40} r={35} style={{ strokeDashoffset: '39.58406743523136' }} />
                                                <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">24</text>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Student Progress Card border-0 End */}
                    {/* ================== Second Row Cards End ======================= */}
                    {/* ================== Third Row Cards Start ======================= */}
                    <div className="col-span-12 2xl:col-span-8">
                        <div className="card border-0 h-full">
                            <div className="card-header">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="font-bold text-lg mb-0">Courses</h6>
                                    <a className="text-primary-600 dark:text-primary-600 hover:text-primary-600 flex items-center gap-1">
                                        View All
                                        <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body p-6">
                                <div className="table-responsive scroll-sm">
                                    <table className="table bordered-table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Registered On</th>
                                                <th scope="col">Instructors</th>
                                                <th scope="col">Users</th>
                                                <th scope="col">Enrolled</th>
                                                <th scope="col">Price </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="text-neutral-600">24 Jun 2024</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">Ronald Richards</span>
                                                </td>
                                                <td>
                                                    <div className="text-neutral-600">
                                                        <h6 className="text-base mb-0 font-normal">3d Illustration &amp; Art Design</h6>
                                                        <span className="text-sm font-normal">34 Lessons</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">257</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">$29.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="text-neutral-600">24 Jun 2024</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">Jerome Bell</span>
                                                </td>
                                                <td>
                                                    <div className="text-neutral-600">
                                                        <h6 className="text-base mb-0 font-normal">Advanced JavaScript Development</h6>
                                                        <span className="text-sm font-normal">20 Lessons</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">375</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">$29.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="text-neutral-600">24 Jun 2024</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">Cody Fisher</span>
                                                </td>
                                                <td>
                                                    <div className="text-neutral-600">
                                                        <h6 className="text-base mb-0 font-normal">Portrait Drawing Fundamentals </h6>
                                                        <span className="text-sm font-normal">16 Lessons</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">220</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">$29.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="text-neutral-600">24 Jun 2024</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">Floyd Miles</span>
                                                </td>
                                                <td>
                                                    <div className="text-neutral-600">
                                                        <h6 className="text-base mb-0 font-normal">Advanced App Development</h6>
                                                        <span className="text-sm font-normal">25 Lessons</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">57</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">$29.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="text-neutral-600">24 Jun 2024</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">Ralph Edwards</span>
                                                </td>
                                                <td>
                                                    <div className="text-neutral-600">
                                                        <h6 className="text-base mb-0 font-normal">HTML Fundamental Course</h6>
                                                        <span className="text-sm font-normal">17 Lessons&nbsp;</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">27</span>
                                                </td>
                                                <td>
                                                    <span className="text-neutral-600">$29.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-4">
                        <div className="card border-0 h-full">
                            <div className="card-header">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <h6 className="font-bold text-lg mb-0">Course Activity</h6>
                                    <a className="text-primary-600 dark:text-primary-600 hover:text-primary-600 flex items-center gap-1">
                                        View All
                                        <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body p-6">
                                <ul className="flex flex-wrap items-center justify-center my-3 gap-3">
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full
                       bg-warning-600" />
                                        <span className="text-neutral-600 text-sm font-semibold">
                                            Paid Course:
                                            <span className="text-primary-light font-bold">500</span>
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full
                       bg-success-main" />
                                        <span className="text-neutral-600 text-sm font-semibold">
                                            Free Course:
                                            <span className="text-primary-light font-bold">300</span>
                                        </span>
                                    </li>
                                </ul>
                                <div id="paymentStatusChart" className="margin-16-minus y-value-left" />
                            </div>
                        </div>
                    </div>
                    {/* ================== Third Row Cards End ======================= */}
                </div>
            </div>

        </>
    )
}

export default Lms
