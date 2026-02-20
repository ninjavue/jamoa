import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Invoice List</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Invoice List</li>
                    </ul>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="card border-0">
                            <div className="card-header flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <span>Show</span>
                                        <select className="form-select form-select-sm w-auto dark:bg-dark-2 dark:text-white">
                                            <option>10</option>
                                            <option>15</option>
                                            <option>20</option>
                                        </select>
                                    </div>
                                    <div className="icon-field relative">
                                        <input type="text" name="#0" className="bg-white dark:bg-dark-2 ps-10 border-neutral-200 dark:border-neutral-500 rounded-lg w-auto" placeholder="Search" />
                                        <span className="icon absolute top-1/2 left-0 text-lg flex">
                                            <iconify-icon icon="ion:search-outline" />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <select className="form-select form-select-sm w-auto dark:bg-dark-2 dark:text-white border-neutral-200 dark:border-neutral-500">
                                        <option>Satatus</option>
                                        <option>Paid</option>
                                        <option>Pending</option>
                                    </select>
                                    <Link href="/invoice-add" className="btn btn-sm text-white bg-primary-600 hover:bg-primary-700 flex items-center gap-2"><i className="ri-add-line" /> Create Invoice</Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive scroll-sm">
                                    <table className="table bordered-table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
                                                        <label className="form-check-label" htmlFor="checkAll">
                                                            S.L
                                                        </label>
                                                    </div>
                                                </th>
                                                <th scope="col">Invoice</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check1" />
                                                        <label className="form-check-label" htmlFor="check1">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check2" />
                                                        <label className="form-check-label" htmlFor="check2">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check3" />
                                                        <label className="form-check-label" htmlFor="check3">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check4" />
                                                        <label className="form-check-label" htmlFor="check4">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check5" />
                                                        <label className="form-check-label" htmlFor="check5">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check6" />
                                                        <label className="form-check-label" htmlFor="check6">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check7" />
                                                        <label className="form-check-label" htmlFor="check7">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check8" />
                                                        <label className="form-check-label" htmlFor="check8">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check9" />
                                                        <label className="form-check-label" htmlFor="check9">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check style-check flex items-center gap-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="check110" />
                                                        <label className="form-check-label" htmlFor="check110">
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
                                                    <div className="flex items-center gap-2">
                                                        <a className="w-8 h-8 bg-primary-50 dark:bg-primary-600/25 text-primary-600 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="iconamoon:eye-light" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="lucide:edit" />
                                                        </a>
                                                        <a className="w-8 h-8 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded-full inline-flex items-center justify-center">
                                                            <iconify-icon icon="mingcute:delete-2-line" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex flex-wrap items-center justify-between gap-2 mt-6">
                                    <span>Showing 1 to 10 of 12 entries</span>
                                    <ul className="pagination flex flex-wrap items-center gap-2 justify-center">
                                        <li className="page-item">
                                            <a className="page-link text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8 bg-white dark:bg-neutral-700" href="javascript:void(0)"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-primary-600 text-white font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8" href="javascript:void(0)">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8" href="javascript:void(0)">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8" href="javascript:void(0)">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8 bg-white dark:bg-neutral-700" href="javascript:void(0)"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default List
