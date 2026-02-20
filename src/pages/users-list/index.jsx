import React from 'react'
import { Link } from 'react-router-dom'

const UsersList = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Users List</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Users List</li>
                    </ul>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="card h-full p-0 rounded-xl border-0 overflow-hidden">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center flex-wrap gap-3 justify-between">
                                <div className="flex items-center flex-wrap gap-3">
                                    <span className="text-base font-medium text-secondary-light mb-0">Show</span>
                                    <select className="form-select form-select-sm w-auto dark:bg-neutral-600 dark:text-white border-neutral-200 dark:border-neutral-500 rounded-lg">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                    <form className="navbar-search">
                                        <input type="text" className="bg-white dark:bg-neutral-700 h-10 w-auto" name="search" placeholder="Search" />
                                        <iconify-icon icon="ion:search-outline" className="icon" />
                                    </form>
                                    <select className="form-select form-select-sm w-auto dark:bg-neutral-600 dark:text-white border-neutral-200 dark:border-neutral-500 rounded-lg">
                                        <option>Status</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <Link to="/add-user" className="btn btn-primary text-sm btn-sm px-3 py-3 rounded-lg flex items-center gap-2">
                                    <iconify-icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
                                    Add New User
                                </Link>
                            </div>
                            <div className="card-body p-6">
                                <div className="table-responsive scroll-sm">
                                    <table className="table bordered-table sm-table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border input-form-dark" type="checkbox" name="checkbox" id="selectAll" />
                                                        </div>
                                                        S.L
                                                    </div>
                                                </th>
                                                <th scope="col">Join Date</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Designation</th>
                                                <th scope="col" className="text-center">Status</th>
                                                <th scope="col" className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-1" />
                                                        </div>
                                                        01
                                                    </div>
                                                </td>
                                                <td>25 Jan 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list1.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Kathryn Murphy</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">osgoodwy@gmail.com</span></td>
                                                <td>HR</td>
                                                <td>Manager</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-600 px-6 py-1.5 rounded font-medium text-sm">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-2" />
                                                        </div>
                                                        02
                                                    </div>
                                                </td>
                                                <td>25 Jan 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list2.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Annette Black</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">redaniel@gmail.com</span></td>
                                                <td>Design</td>
                                                <td>UI UX Designer</td>
                                                <td className="text-center">
                                                    <span className="bg-neutral-200 dark:bg-neutral-600 text-neutral-600 border border-neutral-400 px-6 py-1.5 rounded font-medium text-sm">Inactive</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-3" />
                                                        </div>
                                                        03
                                                    </div>
                                                </td>
                                                <td>10 Feb 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list3.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Ronald Richards</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">seannand@mail.ru</span></td>
                                                <td>Design</td>
                                                <td>UI UX Designer</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-600 px-6 py-1.5 rounded font-medium text-sm">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-4" />
                                                        </div>
                                                        04
                                                    </div>
                                                </td>
                                                <td>10 Feb 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list4.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Eleanor Pena</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">miyokoto@mail.ru</span></td>
                                                <td>Design</td>
                                                <td>UI UX Designer</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-600 px-6 py-1.5 rounded font-medium text-sm">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-5" />
                                                        </div>
                                                        05
                                                    </div>
                                                </td>
                                                <td>15 March 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Leslie Alexander</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">icadahli@gmail.com</span></td>
                                                <td>Design</td>
                                                <td>UI UX Designer</td>
                                                <td className="text-center">
                                                    <span className="bg-neutral-200 dark:bg-neutral-600 text-neutral-600 border border-neutral-400 px-6 py-1.5 rounded font-medium text-sm">Inactive</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-6" />
                                                        </div>
                                                        06
                                                    </div>
                                                </td>
                                                <td>15 March 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list6.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Albert Flores</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">warn@mail.ru</span></td>
                                                <td>Design</td>
                                                <td>UI UX Designer</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-600 px-6 py-1.5 rounded font-medium text-sm">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-7" />
                                                        </div>
                                                        07
                                                    </div>
                                                </td>
                                                <td>27 April 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list7.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Jacob Jones</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">zitka@mail.ru</span></td>
                                                <td>Development</td>
                                                <td>Frontend developer</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-600 px-6 py-1.5 rounded font-medium text-sm">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-8" />
                                                        </div>
                                                        08
                                                    </div>
                                                </td>
                                                <td>25 Jan 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list8.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Jerome Bell</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">igerrin@gmail.com</span></td>
                                                <td>Development</td>
                                                <td>Frontend developer</td>
                                                <td className="text-center">
                                                    <span className="bg-neutral-200 dark:bg-neutral-600 text-neutral-600 border border-neutral-400 px-6 py-1.5 rounded font-medium text-sm">Inactive</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-9" />
                                                        </div>
                                                        09
                                                    </div>
                                                </td>
                                                <td>30 April 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list2.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Marvin McKinney</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">maka@yandex.ru</span></td>
                                                <td>Development</td>
                                                <td>Frontend developer</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-600 px-6 py-1.5 rounded font-medium text-sm">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="SL-10" />
                                                        </div>
                                                        10
                                                    </div>
                                                </td>
                                                <td>30 April 2024</td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/user-list/user-list10.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow">
                                                            <span className="text-base mb-0 font-normal text-secondary-light">Cameron Williamson</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-base mb-0 font-normal text-secondary-light">danten@mail.ru</span></td>
                                                <td>Development</td>
                                                <td>Frontend developer</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-600 px-6 py-1.5 rounded font-medium text-sm">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-info-100 dark:bg-info-600/25 hover:bg-info-200 text-info-600 dark:text-info-400 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="majesticons:eye-line" className="icon text-xl" />
                                                        </button>
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-btn bg-danger-100 dark:bg-danger-600/25 hover:bg-danger-200 text-danger-600 dark:text-danger-500 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex items-center justify-between flex-wrap gap-2 mt-6">
                                    <span>Showing 1 to 10 of 12 entries</span>
                                    <ul className="pagination flex flex-wrap items-center gap-2 justify-center">
                                        <li className="page-item">
                                            <a className="page-link bg-neutral-300 dark:bg-neutral-600 text-secondary-light font-semibold rounded-lg border-0 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)"><iconify-icon icon="ep:d-arrow-left" className /></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link text-secondary-light font-semibold rounded-lg border-0 flex items-center justify-center h-8 w-8 text-base bg-primary-600 text-white" href="javascript:void(0)">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-neutral-300 dark:bg-neutral-600 text-secondary-light font-semibold rounded-lg border-0 flex items-center justify-center h-8 w-8" href="javascript:void(0)">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-neutral-300 dark:bg-neutral-600 text-secondary-light font-semibold rounded-lg border-0 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-neutral-300 dark:bg-neutral-600 text-secondary-light font-semibold rounded-lg border-0 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-neutral-300 dark:bg-neutral-600 text-secondary-light font-semibold rounded-lg border-0 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)">5</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-neutral-300 dark:bg-neutral-600 text-secondary-light font-semibold rounded-lg border-0 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)"> <iconify-icon icon="ep:d-arrow-right" className /> </a>
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

export default UsersList
