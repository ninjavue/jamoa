import React from 'react'
import { Link } from 'react-router-dom'

const Medical = () => {
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
                <div className="grid grid-cols-1 3xl:grid-cols-12 gap-6">
                    <div className="col-span-12 3xl:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3">
                                <div className="card border-0 p-4 shadow-[0_0.25rem_1.875rem_rgba(46,45,116,0.05)] rounded-lg h-full bg-gradient-to-l from-cyan-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-12 h-12 bg-cyan-600/25 text-cyan-600 dark:text-cyan-600 flex-shrink-0 flex justify-center items-center rounded-full h6 mb-0">
                                                    <i className="ri-group-fill" />
                                                </span>
                                                <div>
                                                    <h6 className="font-semibold mb-0.5">650</h6>
                                                    <span className="font-medium text-gray-600 text-sm">Doctors</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm mb-0 text-gray-600"><span className="text-cyan-600 dark:text-cyan-600">4</span> Doctors joined this week</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3">
                                <div className="card border-0 p-4 shadow-[0_0.25rem_1.875rem_rgba(46,45,116,0.05)] rounded-lg h-full bg-gradient-to-l from-lilac-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-12 h-12 bg-lilac-600/25 text-lilac-600 dark:text-lilac-600 flex-shrink-0 flex justify-center items-center rounded-full h6 mb-0">
                                                    <i className="ri-award-fill" />
                                                </span>
                                                <div>
                                                    <h6 className="font-semibold mb-0.5">570</h6>
                                                    <span className="font-medium text-gray-600 text-sm">Staffs</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm mb-0 text-gray-600"><span className="text-lilac-600 dark:text-lilac-600">8</span> Staffs on vacation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3">
                                <div className="card border-0 p-4 shadow-[0_0.25rem_1.875rem_rgba(46,45,116,0.05)] rounded-lg h-full bg-gradient-to-l from-primary-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-12 h-12 bg-primary-600/25 text-primary-600 dark:text-primary-600 flex-shrink-0 flex justify-center items-center rounded-full h6 mb-0">
                                                    <i className="ri-group-fill" />
                                                </span>
                                                <div>
                                                    <h6 className="font-semibold mb-0.5">15,750</h6>
                                                    <span className="font-medium text-gray-600 text-sm">Patients</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm mb-0 text-gray-600"><span className="text-primary-600 dark:text-primary-600">170</span> New patients admitted</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3">
                                <div className="card border-0 p-4 shadow-[0_0.25rem_1.875rem_rgba(46,45,116,0.05)] rounded-lg h-full bg-gradient-to-l from-success-600/10 to-bg-white">
                                    <div className="card-body p-0">
                                        <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-12 h-12 bg-success-600/25 text-success-600 dark:text-success-600 flex-shrink-0 flex justify-center items-center rounded-full h6 mb-0">
                                                    <i className="ri-wallet-3-fill" />
                                                </span>
                                                <div>
                                                    <h6 className="font-semibold mb-0.5">$42,400</h6>
                                                    <span className="font-medium text-gray-600 text-sm">Pharmacies </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm mb-0 text-gray-600"><span className="text-success-600 dark:text-success-600">60,000 </span> Medicine on reserve</p>
                                    </div>
                                </div>
                            </div>
                            {/* Earning Statistic */}
                            <div className="col-span-12 2xl:col-span-12">
                                <div className="card border-0 h-full">
                                    <div className="card-header">
                                        <div className="flex items-center gap-2 justify-between">
                                            <h6 className="mb-0 font-bold text-lg">Earning Statistic</h6>
                                            <select className="form-select form-select-sm w-auto bg-base border border-neutral-600/25 text-gray-600 dark:text-white dark:bg-gray-800 !pe-7">
                                                <option>This Month</option>
                                                <option>This Week</option>
                                                <option>This Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-body p-1.5">
                                        <ul className="flex flex-wrap items-center justify-center my-3 gap-3">
                                            <li className="flex items-center gap-2">
                                                <span className="w-3 h-2 rounded-[50rem] bg-primary-600" />
                                                <span className="text-gray-600 text-sm font-semibold">
                                                    New Patient:
                                                    <span className="text-gray-900 font-bold">50</span>
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-3 h-2 rounded-[50rem] bg-warning-600" />
                                                <span className="text-gray-600 text-sm font-semibold">
                                                    Old Patient:
                                                    <span className="text-gray-900 font-bold"> 500</span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div id="enrollmentChart" className="apexcharts-tooltip-style-1 apexcharts-yaxis" />
                                    </div>
                                </div>
                            </div>
                            {/* Earning Statistic */}
                            {/* Patient Visited by Department */}
                            <div className="col-span-12 lg:col-span-6">
                                <div className="card border-0 h-full">
                                    <div className="card-header">
                                        <div className="flex items-center gap-2 justify-between">
                                            <h6 className="mb-0 font-bold text-lg">Patient Visited by Department</h6>
                                        </div>
                                    </div>
                                    <div className="card-body p-1.5 flex items-center gap-4">
                                        <div id="radialMultipleBar" />
                                        <ul className="flex flex-col gap-3">
                                            <li>
                                                <span className="text-lg">Cardiology: <span className="text-primary-600 dark:text-primary-600 font-semibold">80%</span> </span>
                                            </li>
                                            <li>
                                                <span className="text-lg">Psychiatry: <span className="text-warning-600 dark:text-warning-600 font-semibold">40%</span> </span>
                                            </li>
                                            <li>
                                                <span className="text-lg">Pediatrics: <span className="text-success-600 dark:text-success-600 font-semibold">10%</span> </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Patient Visited by Department */}
                            {/* Patient Visit By Gender */}
                            <div className="col-span-12 lg:col-span-6">
                                <div className="card border-0 h-full">
                                    <div className="card-header">
                                        <div className="flex items-center gap-2 justify-between">
                                            <h6 className="mb-0 font-bold text-lg">Patient Visit By Gender</h6>
                                            <select className="form-select form-select-sm w-auto bg-base border border-neutral-600/25 text-gray-600 dark:text-white dark:bg-gray-800 !pe-7">
                                                <option>This Month</option>
                                                <option>This Week</option>
                                                <option>This Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-body p-1.5">
                                        <ul className="flex flex-wrap items-center justify-center my-3 gap-3">
                                            <li className="flex items-center gap-2">
                                                <span className="w-3 h-2 rounded-[50rem] bg-warning-600" />
                                                <span className="text-gray-600 text-sm font-semibold">
                                                    Male:
                                                    <span className="text-gray-900 font-bold">200</span>
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-3 h-2 rounded-[50rem] bg-success-600" />
                                                <span className="text-gray-600 text-sm font-semibold">
                                                    Female:
                                                    <span className="text-gray-900 font-bold"> 450</span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div id="paymentStatusChart" className="margin-16-minus y-value-left" />
                                    </div>
                                </div>
                            </div>
                            {/* Patient Visit By Gender */}
                            {/* Top performance Start */}
                            <div className="col-span-12 2xl:col-span-4">
                                <div className="card border-0">
                                    <div className="card-header border-bottom">
                                        <div className="flex items-center gap-2 justify-between">
                                            <h6 className="mb-0 font-bold text-lg">Doctors List</h6>
                                            <a className="flex-shrink-0 text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                                View All
                                                <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center">
                                                    <img src="../assets/images/home-eight/doctor-img1.png" alt className="w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden" />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0">Dr. Davis</h6>
                                                        <span className="text-sm text-gray-600 font-medium">Cardiology</span>
                                                    </div>
                                                </div>
                                                <span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Available</span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center">
                                                    <img src="../assets/images/home-eight/doctor-img2.png" alt className="w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden" />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0">Dr. Riead</h6>
                                                        <span className="text-sm text-gray-600 font-medium">Orthopedics</span>
                                                    </div>
                                                </div>
                                                <span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Available</span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center">
                                                    <img src="../assets/images/home-eight/doctor-img3.png" alt className="w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden" />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0">Albert Flores</h6>
                                                        <span className="text-sm text-gray-600 font-medium">Ophthalmology</span>
                                                    </div>
                                                </div>
                                                <span className="bg-danger-focus text-danger-main dark:text-danger-main px-2.5 py-1 rounded-lg font-medium text-sm">Not Available</span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center">
                                                    <img src="../assets/images/home-eight/doctor-img4.png" alt className="w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden" />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0">Dr. Smith</h6>
                                                        <span className="text-sm text-gray-600 font-medium">Cardiology</span>
                                                    </div>
                                                </div>
                                                <span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Available</span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center">
                                                    <img src="../assets/images/home-eight/doctor-img6.png" alt className="w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden" />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0">Dr. Johnson</h6>
                                                        <span className="text-sm text-gray-600 font-medium">Cardiology</span>
                                                    </div>
                                                </div>
                                                <span className="bg-danger-focus text-danger-main dark:text-danger-main px-2.5 py-1 rounded-lg font-medium text-sm">Not Available</span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center">
                                                    <img src="../assets/images/home-eight/doctor-img5.png" alt className="w-10 h-10 rounded-full flex-shrink-0 me-3 overflow-hidden" />
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0">Dr. Martinez</h6>
                                                        <span className="text-sm text-gray-600 font-medium">Cardiology</span>
                                                    </div>
                                                </div>
                                                <span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Available</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Top performance End */}
                            <div className="col-span-12 2xl:col-span-8">
                                <div className="card border-0 h-full">
                                    <div className="card-header border-bottom bg-base py-4 px-6 flex items-center justify-between">
                                        <h6 className="text-lg font-semibold mb-0">Latest Appointments</h6>
                                        <a className="flex-shrink-0 text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                            View All
                                            <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                        </a>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive scroll-sm">
                                            <table className="table bordered-table mb-0 rounded-0 border-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="bg-transparent rounded-0">Name</th>
                                                        <th scope="col" className="bg-transparent rounded-0">ID</th>
                                                        <th scope="col" className="bg-transparent rounded-0">Date</th>
                                                        <th scope="col" className="bg-transparent rounded-0">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>General Checkup</td>
                                                        <td>#63254</td>
                                                        <td>27 Mar 2024</td>
                                                        <td><span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Blood test results</td>
                                                        <td>3.053 ETH</td>
                                                        <td>2h 5m 40s</td>
                                                        <td><span className="bg-danger-focus text-danger-main dark:text-danger-main px-2.5 py-1 rounded-lg font-medium text-sm">Canceled</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heart Checkup</td>
                                                        <td>3.053 ETH</td>
                                                        <td>2h 5m 40s</td>
                                                        <td><span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vaccination</td>
                                                        <td>3.053 ETH</td>
                                                        <td>2h 5m 40s</td>
                                                        <td><span className="bg-danger-focus text-danger-main dark:text-danger-main px-2.5 py-1 rounded-lg font-medium text-sm">Canceled</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dental Cleanup</td>
                                                        <td>3.053 ETH</td>
                                                        <td>2h 5m 40s</td>
                                                        <td><span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Completed</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Follow up Appointment</td>
                                                        <td>3.053 ETH</td>
                                                        <td>2h 5m 40s</td>
                                                        <td><span className="bg-danger-focus text-danger-main dark:text-danger-main px-2.5 py-1 rounded-lg font-medium text-sm">Canceled</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>General Checkup</td>
                                                        <td>#63254</td>
                                                        <td>27 Mar 2024</td>
                                                        <td><span className="bg-success-focus text-success-main dark:text-success-main px-2.5 py-1 rounded-lg font-medium text-sm">Completed</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Latest Performance End */}
                        </div>
                    </div>
                    <div className="col-span-12 3xl:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="col-span-12 2xl:col-span-6 md:col-span-6 3xl:col-span-12">
                                <div className="card border-0 h-full rounded-lg">
                                    <div className="card-header border-bottom flex items-center flex-wrap gap-2 justify-between">
                                        <h6 className="mb-0 font-bold text-lg">Total Income</h6>
                                        <div className>
                                            <select className="form-select form-select-sm w-auto bg-base border border-neutral-600/25 text-gray-600 dark:text-white dark:bg-gray-800 !pe-7">
                                                <option>This Month</option>
                                                <option>This Week</option>
                                                <option>This Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-body p-1.5">
                                        <div className="relative">
                                            <div id="statisticsDonutChart" className="mt-9 flex-grow-1 apexcharts-tooltip-z-none title-style circle-none" />
                                            <div className="text-center absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
                                                <span className="text-gray-600">Income</span>
                                                <h6 className>$28,500</h6>
                                            </div>
                                        </div>
                                        <ul className="grid grid-cols-2 gap-6 mt-3">
                                            <li className="flex flex-col items-center">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-3 h-2 rounded-[50rem] bg-warning-600" />
                                                    <span className="text-gray-600 text-sm font-normal">Net Income</span>
                                                </div>
                                                <h6 className="text-gray-900 font-bold mb-0">$50,000</h6>
                                            </li>
                                            <li className="flex flex-col items-center">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-3 h-2 rounded-[50rem] bg-success-600" />
                                                    <span className="text-gray-600 text-sm font-normal">Commission </span>
                                                </div>
                                                <h6 className="text-gray-900 font-bold mb-0">$20,000</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 2xl:col-span-6 md:col-span-6 3xl:col-span-12">
                                <div className="card border-0">
                                    <div className="card-header">
                                        <div className="flex items-center gap-2 justify-between">
                                            <h6 className="mb-0 font-bold text-lg">Available Treatments</h6>
                                            <a className="flex-shrink-0 text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                                View All
                                                <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full flex-shrink-0 bg-info-600/10 flex justify-center items-center">
                                                    <img src="../assets/images/home-eight/treatment-icon1.png" alt className />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-normal">Psychiatry</h6>
                                                    <span className="text-sm text-gray-600 font-normal">57 Doctors</span>
                                                </div>
                                            </div>
                                            <span className="text-gray-600">08:45 AM</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full flex-shrink-0 bg-success-600/10 flex justify-center items-center">
                                                    <img src="../assets/images/home-eight/treatment-icon2.png" alt className />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-normal">Orthopedic</h6>
                                                    <span className="text-sm text-gray-600 font-normal">85 Doctors</span>
                                                </div>
                                            </div>
                                            <span className="text-gray-600">08:45 AM</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full flex-shrink-0 bg-lilac-600/10 flex justify-center items-center">
                                                    <img src="../assets/images/home-eight/treatment-icon3.png" alt className />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-normal">Cardiology</h6>
                                                    <span className="text-sm text-gray-600 font-normal">60 Doctors</span>
                                                </div>
                                            </div>
                                            <span className="text-gray-600">08:45 AM</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full flex-shrink-0 bg-warning-600/10 flex justify-center items-center">
                                                    <img src="../assets/images/home-eight/treatment-icon4.png" alt className />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-normal">Pediatrics</h6>
                                                    <span className="text-sm text-gray-600 font-normal">120 Doctors</span>
                                                </div>
                                            </div>
                                            <span className="text-gray-600">08:45 AM</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full flex-shrink-0 bg-danger-600/10 flex justify-center items-center">
                                                    <img src="../assets/images/home-eight/treatment-icon5.png" alt className />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-normal">Neurology</h6>
                                                    <span className="text-sm text-gray-600 font-normal">25 Doctors</span>
                                                </div>
                                            </div>
                                            <span className="text-gray-600">08:45 AM</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-3 mb-0">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full flex-shrink-0 bg-primary-600/10 flex justify-center items-center">
                                                    <img src="../assets/images/home-eight/treatment-icon6.png" alt className />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-normal">Gastroenterology</h6>
                                                    <span className="text-sm text-gray-600 font-normal">95 Doctors</span>
                                                </div>
                                            </div>
                                            <span className="text-gray-600">08:45 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 2xl:col-span-6 md:col-span-6 3xl:col-span-12">
                                <div className="card border-0">
                                    <div className="card-header">
                                        <div className="flex items-center gap-2 justify-between">
                                            <h6 className="mb-0 font-bold text-lg line-clamp-1">Health Reports Document</h6>
                                            <a className="flex-shrink-0 text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                                View All
                                                <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                        <img src="../assets/images/home-eight/icon-pdf.png" alt className />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0 font-normal">Checkup Result.pdf</h6>
                                                        <span className="text-xs text-gray-600 font-normal">2.5mb</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-danger-600/10 hover:bg-danger-600 hover:text-white duration-300 active:scale-75 text-danger-600 bg-hover-danger-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-delete-bin-5-line" />
                                                    </button>
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-success-600/10 hover:bg-success-600 active:scale-75 hover:text-white duration-300 text-success-600 bg-hover-success-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-download-2-fill" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                        <img src="../assets/images/home-eight/icon-text.png" alt className />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0 font-normal">Checkup Result.doc</h6>
                                                        <span className="text-xs text-gray-600 font-normal">2mb</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-danger-600/10 hover:bg-danger-600 hover:text-white duration-300 active:scale-75 text-danger-600 bg-hover-danger-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-delete-bin-5-line" />
                                                    </button>
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-success-600/10 hover:bg-success-600 active:scale-75 hover:text-white duration-300 text-success-600 bg-hover-success-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-download-2-fill" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                        <img src="../assets/images/home-eight/icon-pdf.png" alt className />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0 font-normal">Prescription.pdf</h6>
                                                        <span className="text-xs text-gray-600 font-normal">3mb</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-danger-600/10 hover:bg-danger-600 hover:text-white duration-300 active:scale-75 text-danger-600 bg-hover-danger-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-delete-bin-5-line" />
                                                    </button>
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-success-600/10 hover:bg-success-600 active:scale-75 hover:text-white duration-300 text-success-600 bg-hover-success-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-download-2-fill" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                        <img src="../assets/images/home-eight/icon-text.png" alt className />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0 font-normal">Xray Result.doc</h6>
                                                        <span className="text-xs text-gray-600 font-normal">3mb</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-danger-600/10 hover:bg-danger-600 hover:text-white duration-300 active:scale-75 text-danger-600 bg-hover-danger-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-delete-bin-5-line" />
                                                    </button>
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-success-600/10 hover:bg-success-600 active:scale-75 hover:text-white duration-300 text-success-600 bg-hover-success-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-download-2-fill" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                        <img src="../assets/images/home-eight/icon-pdf.png" alt className />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0 font-normal">Glucose Level Report.pdf</h6>
                                                        <span className="text-xs text-gray-600 font-normal">3mb</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-danger-600/10 hover:bg-danger-600 hover:text-white duration-300 active:scale-75 text-danger-600 bg-hover-danger-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-delete-bin-5-line" />
                                                    </button>
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-success-600/10 hover:bg-success-600 active:scale-75 hover:text-white duration-300 text-success-600 bg-hover-success-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-download-2-fill" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                        <img src="../assets/images/home-eight/icon-text.png" alt className />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-base mb-0 font-normal">Checkup Result.doc</h6>
                                                        <span className="text-xs text-gray-600 font-normal">2mb</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-danger-600/10 hover:bg-danger-600 hover:text-white duration-300 active:scale-75 text-danger-600 bg-hover-danger-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-delete-bin-5-line" />
                                                    </button>
                                                    <button type="button" className="w-8 h-8 d-inline-flex justify-center items-center bg-success-600/10 hover:bg-success-600 active:scale-75 hover:text-white duration-300 text-success-600 bg-hover-success-600 text-hover-white text-base rounded-full">
                                                        <i className="ri-download-2-fill" />
                                                    </button>
                                                </div>
                                            </div>
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

export default Medical
