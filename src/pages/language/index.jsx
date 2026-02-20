import React from 'react';
import { Link } from 'react-router-dom';

const Language = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Languages</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Settings - Languages</li>
                    </ul>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="card h-full p-0 rounded-xl border-0">
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
                                </div>
                                <button type="button" className="btn btn-primary text-sm btn-sm px-3 py-3 rounded-lg flex items-center gap-2" data-modal-target="add-language-modal" data-modal-toggle="add-language-modal">
                                    <iconify-icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
                                    Add Languages
                                </button>
                            </div>
                            <div className="card-body p-6">
                                <div className="table-responsive scroll-sm">
                                    <table className="table bordered-table sm-table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col"> S.L</th>
                                                <th scope="col" className="text-center">Name</th>
                                                <th scope="col" className="text-center">Status</th>
                                                <th scope="col" className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td className="text-center">English(Default)</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td className="text-center">Bangla</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03</td>
                                                <td className="text-center">Bangla</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>04</td>
                                                <td className="text-center">Bangla</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>05</td>
                                                <td className="text-center">German</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>06</td>
                                                <td className="text-center">German</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>07</td>
                                                <td className="text-center">German</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>08</td>
                                                <td className="text-center">Hindi</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
                                                            <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>09</td>
                                                <td className="text-center">Hindi</td>
                                                <td>
                                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                                    </label>
                                                </td>
                                                <td className="text-center">
                                                    <div className="flex items-center gap-3 justify-center">
                                                        <button type="button" className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 bg-hover-success-200 font-medium w-10 h-10 flex justify-center items-center rounded-full" data-modal-target="edit-language-modal" data-modal-toggle="edit-language-modal">
                                                            <iconify-icon icon="lucide:edit" className="menu-icon" />
                                                        </button>
                                                        <button type="button" className="remove-item-button bg-danger-100 bg-hover-danger-200 text-danger-600 font-medium w-10 h-10 flex justify-center items-center rounded-full">
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
export default Language;