import React from 'react'
import { Link } from 'react-router-dom'

const BasicTable = () => {
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="card border-0 overflow-hidden h-full">
                            <div className="card-header">
                                <h5 className="card-title text-lg mb-0">Default Table</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table border-0 mb-0">
                                        <thead>
                                            <tr>
                                                <th className="!rounded-s-none">S.L</th>
                                                <th className>Invoice</th>
                                                <th className>Name</th>
                                                <th className>Issued Date</th>
                                                <th className="!rounded-e-none">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="!border-b-0">01</td>
                                                <td className="!border-b-0">
                                                    <a className="text-primary-600">#526534</a>
                                                </td>
                                                <td className="!border-b-0">Kathryn Murphy</td>
                                                <td className="!border-b-0">25 Jan 2024</td>
                                                <td className="!border-b-0">$200.00</td>
                                            </tr>
                                            <tr>
                                                <td className="!border-b-0">02</td>
                                                <td className="!border-b-0">
                                                    <a className="text-primary-600">#696589</a>
                                                </td>
                                                <td className="!border-b-0">Annette Black</td>
                                                <td className="!border-b-0">25 Jan 2024</td>
                                                <td className="!border-b-0">$200.00</td>
                                            </tr>
                                            <tr>
                                                <td className="!border-b-0">03</td>
                                                <td className="!border-b-0">
                                                    <a className="text-primary-600">#256584</a>
                                                </td>
                                                <td className="!border-b-0">Ronald Richards</td>
                                                <td className="!border-b-0">10 Feb 2024</td>
                                                <td className="!border-b-0">$200.00</td>
                                            </tr>
                                            <tr>
                                                <td className="!border-b-0">04</td>
                                                <td className="!border-b-0">
                                                    <a className="text-primary-600">#526587</a>
                                                </td>
                                                <td className="!border-b-0">Eleanor Pena</td>
                                                <td className="!border-b-0">10 Feb 2024</td>
                                                <td className="!border-b-0">$150.00</td>
                                            </tr>
                                            <tr>
                                                <td className="!border-b-0">05</td>
                                                <td className="!border-b-0">
                                                    <a className="text-primary-600">#105986</a>
                                                </td>
                                                <td className="!border-b-0">Leslie Alexander</td>
                                                <td className="!border-b-0">15 Mar 2024</td>
                                                <td className="!border-b-0">$150.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>{/* card end */}
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="card border-0 overflow-hidden">
                            <div className="card-header">
                                <h5 className="card-title text-lg mb-0">Bordered Tables</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table basic-border-table mb-0">
                                        <thead>
                                            <tr>
                                                <th className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Invoice </th>
                                                <th className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Name</th>
                                                <th className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Issued Date</th>
                                                <th className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Amount</th>
                                                <th className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">#526534</a>
                                                </td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Kathryn Murphy</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">25 Jan 2024</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">$200.00</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">View More &gt;</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">#696589</a>
                                                </td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Annette Black</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">25 Jan 2024</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">$200.00</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">View More &gt;</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">#256584</a>
                                                </td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">256584</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">10 Feb 2024</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">$200.00</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">View More &gt;</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">#526587</a>
                                                </td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Eleanor Pena</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">10 Feb 2024</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">$150.00</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">View More &gt;</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">#105986</a>
                                                </td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">Leslie Alexander</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">15 Mar 2024</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">$150.00</td>
                                                <td className="border-r border-neutral-200 dark:border-neutral-600 last:border-r-0">
                                                    <a className="text-primary-600">View More &gt;</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>{/* card end */}
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="card border-0 overflow-hidden">
                            <div className="card-header">
                                <h5 className="card-title text-lg mb-0">Striped Rows</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table striped-table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">Items</th>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">Price</th>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">Discount </th>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">Sold</th>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600 text-center">Total Orders</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/product/product-img1.png" alt className="shrink-0 me-3 rounded-lg me-3" />
                                                        <div className="grow">
                                                            <h6 className="text-base mb-0 font-normal">Blue t-shirt</h6>
                                                            <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$400.00</td>
                                                <td>15%</td>
                                                <td>300</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/product/product-img2.png" alt className="shrink-0 me-3 rounded-lg me-3" />
                                                        <div className="grow">
                                                            <h6 className="text-base mb-0 font-normal">Nike Air Shoe</h6>
                                                            <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$150.00</td>
                                                <td>N/A</td>
                                                <td>200</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/product/product-img3.png" alt className="shrink-0 me-3 rounded-lg me-3" />
                                                        <div className="grow">
                                                            <h6 className="text-base mb-0 font-normal">Woman Dresses</h6>
                                                            <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$300.00</td>
                                                <td>$50.00</td>
                                                <td>1400</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/product/product-img4.png" alt className="shrink-0 me-3 rounded-lg me-3" />
                                                        <div className="grow">
                                                            <h6 className="text-base mb-0 font-normal">Smart Watch</h6>
                                                            <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$400.00</td>
                                                <td>$50.00</td>
                                                <td>700</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/product/product-img5.png" alt className="shrink-0 me-3 rounded-lg me-3" />
                                                        <div className="grow">
                                                            <h6 className="text-base mb-0 font-normal">Hoodie Rose</h6>
                                                            <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$300.00</td>
                                                <td>25%</td>
                                                <td>400</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>{/* card end */}
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="card border-0 overflow-hidden">
                            <div className="card-header">
                                <h5 className="card-title text-lg mb-0">Striped Rows</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table vertical-striped-table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-b border-neutral-200 dark:border-neutral-600">Items</th>
                                                <th scope="col" className="border-b border-neutral-200 dark:border-neutral-600">Price</th>
                                                <th scope="col" className="border-b border-neutral-200 dark:border-neutral-600">Discount </th>
                                                <th scope="col" className="border-b border-neutral-200 dark:border-neutral-600">Sold</th>
                                                <th scope="col" className="border-b border-neutral-200 dark:border-neutral-600 text-center">Total Orders</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                    <h6 className="text-base mb-0 font-normal">Blue t-shirt</h6>
                                                    <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                </td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">$400.00</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">15%</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">300</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600 text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                    <h6 className="text-base mb-0 font-normal">Blue t-shirt</h6>
                                                    <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                </td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">$150.00</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">N/A</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">200</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600 text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                    <h6 className="text-base mb-0 font-normal">Blue t-shirt</h6>
                                                    <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                </td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">$300.00</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">$50.00</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">1400</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600 text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                    <h6 className="text-base mb-0 font-normal">Blue t-shirt</h6>
                                                    <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                </td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">$400.00</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">$50.00</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">700</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600 text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">
                                                    <h6 className="text-base mb-0 font-normal">Blue t-shirt</h6>
                                                    <span className="text-sm text-secondary-light font-normal">Fashion</span>
                                                </td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">$300.00</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">25%</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600">400</td>
                                                <td className="odd:bg-neutral-100 dark:odd:bg-neutral-600 text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">70</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>{/* card end */}
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="card border-0 overflow-hidden">
                            <div className="card-header">
                                <h5 className="card-title text-lg mb-0">Tables Border Colors</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table border-primary-600 mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-r border-b border-primary-600 last:border-r-0">
                                                    <div className="flex items-center">
                                                        <input id="sl" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-neutral-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="sl" className="ms-1.5 text-md font-medium text-gray-900 dark:text-gray-300">S.L</label>
                                                    </div>
                                                </th>
                                                <th scope="col" className="border-r border-b border-primary-600 last:border-r-0">Transaction ID</th>
                                                <th scope="col" className="border-r border-b border-primary-600 last:border-r-0">Date</th>
                                                <th scope="col" className="border-r border-b border-primary-600 last:border-r-0">Status</th>
                                                <th scope="col" className="border-r border-b border-primary-600 last:border-r-0">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <div className="flex items-center">
                                                        <input id="sl1" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-neutral-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="sl1" className="ms-1.5 text-md font-normal text-gray-600 dark:text-gray-300">S.L</label>
                                                    </div>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">5986124445445</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">27 Mar 2024</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <span className="bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 px-8 py-1.5 rounded-full font-medium text-sm">Pending</span>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">$20,000.00</td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <div className="flex items-center">
                                                        <input id="sl2" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-neutral-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="sl2" className="ms-1.5 text-md font-normal text-gray-600 dark:text-gray-300">S.L</label>
                                                    </div>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">5986124445445</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">27 Mar 2024</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-8 py-1.5 rounded-full font-medium text-sm">Rejected</span>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">$20,000.00</td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <div className="flex items-center">
                                                        <input id="sl3" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-neutral-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="sl3" className="ms-1.5 text-md font-normal text-gray-600 dark:text-gray-300">S.L</label>
                                                    </div>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">5986124445445</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">27 Mar 2024</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">Completed</span>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">$20,000.00</td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <div className="flex items-center">
                                                        <input id="sl4" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-neutral-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="sl4" className="ms-1.5 text-md font-normal text-gray-600 dark:text-gray-300">S.L</label>
                                                    </div>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">5986124445445</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">27 Mar 2024</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">Completed</span>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">$20,000.00</td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <div className="flex items-center">
                                                        <input id="sl5" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-neutral-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="sl5" className="ms-1.5 text-md font-normal text-gray-600 dark:text-gray-300">S.L</label>
                                                    </div>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">5986124445445</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">27 Mar 2024</td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-8 py-1.5 rounded-full font-medium text-sm">Completed</span>
                                                </td>
                                                <td className="border-r border-b !border-primary-600 last:border-r-0">$20,000.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>{/* card end */}
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="card border-0 overflow-hidden">
                            <div className="card-header">
                                <h5 className="card-title text-lg mb-0">Background Colors Variants</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table colored-row-table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700">Registered On</th>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700">Users</th>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700">Email</th>
                                                <th scope="col" className="!bg-white dark:!bg-neutral-700">Plan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="bg-primary-50 dark:bg-primary-600/10">27 Mar 2024</td>
                                                <td className="bg-primary-50 dark:bg-primary-600/10">
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user1.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <h6 className="text-base mb-0 font-medium grow">Dianne Russell</h6>
                                                    </div>
                                                </td>
                                                <td className="bg-primary-50 dark:bg-primary-600/10">random@gmail.com</td>
                                                <td className="bg-primary-50 dark:bg-primary-600/10">Free</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-success-100 dark:bg-success-600/10">27 Mar 2024</td>
                                                <td className="bg-success-100 dark:bg-success-600/10">
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user2.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <h6 className="text-base mb-0 font-medium grow">Wade Warren</h6>
                                                    </div>
                                                </td>
                                                <td className="bg-success-100 dark:bg-success-600/10">random@gmail.com</td>
                                                <td className="bg-success-100 dark:bg-success-600/10">Basic</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-info-100 dark:bg-info-600/10">27 Mar 2024</td>
                                                <td className="bg-info-100 dark:bg-info-600/10">
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user3.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <h6 className="text-base mb-0 font-medium grow">Albert Flores</h6>
                                                    </div>
                                                </td>
                                                <td className="bg-info-100 dark:bg-info-600/10">random@gmail.com</td>
                                                <td className="bg-info-100 dark:bg-info-600/10">Standard </td>
                                            </tr>
                                            <tr>
                                                <td className="bg-warning-100 dark:bg-warning-600/10">27 Mar 2024</td>
                                                <td className="bg-warning-100 dark:bg-warning-600/10">
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user4.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <h6 className="text-base mb-0 font-medium grow">Bessie Cooper</h6>
                                                    </div>
                                                </td>
                                                <td className="bg-warning-100 dark:bg-warning-600/10">random@gmail.com</td>
                                                <td className="bg-warning-100 dark:bg-warning-600/10">Business </td>
                                            </tr>
                                            <tr>
                                                <td className="bg-danger-100 dark:bg-danger-600/10">27 Mar 2024</td>
                                                <td className="bg-danger-100 dark:bg-danger-600/10">
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <h6 className="text-base mb-0 font-medium grow">Arlene McCoy</h6>
                                                    </div>
                                                </td>
                                                <td className="bg-danger-100 dark:bg-danger-600/10">random@gmail.com</td>
                                                <td className="bg-danger-100 dark:bg-danger-600/10">Enterprise </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>{/* card end */}
                    </div>
                    <div className="col-span-12">
                        <div className="card border-0 overflow-hidden">
                            <div className="card-header">
                                <h5 className="card-title text-lg mb-0">Card Tables</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table bordered-table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Users</th>
                                                <th scope="col">Invoice</th>
                                                <th scope="col">Items</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col" className="text-center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user1.png" alt className="shrink-0 me-3 rounded-lg" />
                                                        <span className="text-lg text-secondary-light font-semibold grow">Dianne Russell</span>
                                                    </div>
                                                </td>
                                                <td>#6352148</td>
                                                <td>iPhone 14 max</td>
                                                <td>2</td>
                                                <td>$5,000.00</td>
                                                <td className="text-center">
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Paid</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user2.png" alt className="shrink-0 me-3 rounded-lg" />
                                                        <span className="text-lg text-secondary-light font-semibold grow">Wade Warren</span>
                                                    </div>
                                                </td>
                                                <td>#6352148</td>
                                                <td>Laptop HPH </td>
                                                <td>3</td>
                                                <td>$1,000.00</td>
                                                <td className="text-center">
                                                    <span className="bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 px-6 py-1.5 rounded-full font-medium text-sm">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user3.png" alt className="shrink-0 me-3 rounded-lg" />
                                                        <span className="text-lg text-secondary-light font-semibold grow">Albert Flores</span>
                                                    </div>
                                                </td>
                                                <td>#6352148</td>
                                                <td>Smart Watch </td>
                                                <td>7</td>
                                                <td>$1,000.00</td>
                                                <td className="text-center">
                                                    <span className="bg-info-100 dark:bg-info-600/25 text-info-600 dark:text-info-400 px-6 py-1.5 rounded-full font-medium text-sm">Shipped</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user4.png" alt className="shrink-0 me-3 rounded-lg" />
                                                        <span className="text-lg text-secondary-light font-semibold grow">Bessie Cooper</span>
                                                    </div>
                                                </td>
                                                <td>#6352148</td>
                                                <td>Nike Air Shoe</td>
                                                <td>1</td>
                                                <td>$3,000.00</td>
                                                <td className="text-center">
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-6 py-1.5 rounded-full font-medium text-sm">Canceled</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/users/user5.png" alt className="shrink-0 me-3 rounded-lg" />
                                                        <span className="text-lg text-secondary-light font-semibold grow">Arlene McCoy</span>
                                                    </div>
                                                </td>
                                                <td>#6352148</td>
                                                <td>New Headphone </td>
                                                <td>5</td>
                                                <td>$4,000.00</td>
                                                <td className="text-center">
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-6 py-1.5 rounded-full font-medium text-sm">Canceled</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>{/* card end */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default BasicTable
