import React from 'react'
import { Link } from 'react-router-dom'

const DataTable = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Basic Table</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Basic Table</li>
                    </ul>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="card border-0 overflow-hidden">
                            <div className="card-header">
                                <h6 className="card-title mb-0 text-lg">Default Datatables</h6>
                            </div>
                            <div className="card-body">
                                <table id="selection-table" className="border border-neutral-200 dark:border-neutral-600 rounded-lg border-separate	">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-neutral-800 dark:text-white">
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" id="serial" type="checkbox" />
                                                    <label className="ms-2 form-check-label" htmlFor="serial">
                                                        S.L
                                                    </label>
                                                </div>
                                            </th>
                                            <th scope="col" className="text-neutral-800 dark:text-white">
                                                <div className="flex items-center gap-2">
                                                    Invoice
                                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th scope="col" className="text-neutral-800 dark:text-white">
                                                <div className="flex items-center gap-2">
                                                    Name
                                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th scope="col" className="text-neutral-800 dark:text-white">
                                                <div className="flex items-center gap-2">
                                                    Issued Date
                                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th scope="col" className="text-neutral-800 dark:text-white">
                                                <div className="flex items-center gap-2">
                                                    Amount
                                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th scope="col" className="text-neutral-800 dark:text-white">
                                                <div className="flex items-center gap-2">
                                                    Status
                                                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th scope="col" className="text-neutral-800 dark:text-white">
                                                <div className="flex items-center gap-2">
                                                    Action
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        01
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526534</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list1.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Kathryn Murphy</h6>
                                                </div>
                                            </td>
                                            <td>25 Jan 2024</td>
                                            <td>$200.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        02
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#696589</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list2.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Annette Black</h6>
                                                </div>
                                            </td>
                                            <td>25 Jan 2024</td>
                                            <td>$200.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        03
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#256584</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list3.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Ronald Richards</h6>
                                                </div>
                                            </td>
                                            <td>10 Feb 2024</td>
                                            <td>$200.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        04
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526587</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list4.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Eleanor Pena</h6>
                                                </div>
                                            </td>
                                            <td>10 Feb 2024</td>
                                            <td>$150.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        05
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#105986</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list5.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Leslie Alexander</h6>
                                                </div>
                                            </td>
                                            <td>15 March 2024</td>
                                            <td>$150.00</td>
                                            <td> <span className="bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 px-6 py-1.5 rounded-full font-medium text-sm">Pending</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        06
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526589</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list6.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Albert Flores</h6>
                                                </div>
                                            </td>
                                            <td>15 March 2024</td>
                                            <td>$150.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        07
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526520</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list7.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Jacob Jones</h6>
                                                </div>
                                            </td>
                                            <td>27 April 2024</td>
                                            <td>$250.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        08
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#256584</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list8.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Jerome Bell</h6>
                                                </div>
                                            </td>
                                            <td>27 April 2024</td>
                                            <td>$250.00</td>
                                            <td> <span className="bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 px-6 py-1.5 rounded-full font-medium text-sm">Pending</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        09
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#200257</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list9.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Marvin McKinney</h6>
                                                </div>
                                            </td>
                                            <td>30 April 2024</td>
                                            <td>$250.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        10
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526525</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list10.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Cameron Williamson</h6>
                                                </div>
                                            </td>
                                            <td>30 April 2024</td>
                                            <td>$250.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        01
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526534</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list1.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Kathryn Murphy</h6>
                                                </div>
                                            </td>
                                            <td>25 Jan 2024</td>
                                            <td>$200.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        02
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#696589</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list2.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Annette Black</h6>
                                                </div>
                                            </td>
                                            <td>25 Jan 2024</td>
                                            <td>$200.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        03
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#256584</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list3.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Ronald Richards</h6>
                                                </div>
                                            </td>
                                            <td>10 Feb 2024</td>
                                            <td>$200.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        04
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526587</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list4.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Eleanor Pena</h6>
                                                </div>
                                            </td>
                                            <td>10 Feb 2024</td>
                                            <td>$150.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        05
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#105986</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list5.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Leslie Alexander</h6>
                                                </div>
                                            </td>
                                            <td>15 March 2024</td>
                                            <td>$150.00</td>
                                            <td> <span className="bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 px-6 py-1.5 rounded-full font-medium text-sm">Pending</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        06
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526589</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list6.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Albert Flores</h6>
                                                </div>
                                            </td>
                                            <td>15 March 2024</td>
                                            <td>$150.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        07
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526520</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list7.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Jacob Jones</h6>
                                                </div>
                                            </td>
                                            <td>27 April 2024</td>
                                            <td>$250.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        08
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#256584</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list8.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Jerome Bell</h6>
                                                </div>
                                            </td>
                                            <td>27 April 2024</td>
                                            <td>$250.00</td>
                                            <td> <span className="bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 px-6 py-1.5 rounded-full font-medium text-sm">Pending</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        09
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#200257</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list9.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Marvin McKinney</h6>
                                                </div>
                                            </td>
                                            <td>30 April 2024</td>
                                            <td>$250.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check style-check flex items-center">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="ms-2 form-check-label">
                                                        10
                                                    </label>
                                                </div>
                                            </td>
                                            <td><a className="text-primary-600">#526525</a></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src="../assets/images/user-list/user-list10.png" alt className="shrink-0 me-3 rounded-lg" />
                                                    <h6 className="text-base mb-0 font-medium grow">Cameron Williamson</h6>
                                                </div>
                                            </td>
                                            <td>30 April 2024</td>
                                            <td>$250.00</td>
                                            <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span> </td>
                                            <td>
                                                <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="iconamoon:eye-light" />
                                                </a>
                                                <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="lucide:edit" />
                                                </a>
                                                <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                    <iconify-icon icon="mingcute:delete-2-line" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DataTable
