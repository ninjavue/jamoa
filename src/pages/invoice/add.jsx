import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
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
                <div className="card border-0">
                    <div className="card-header">
                        <div className="flex flex-wrap items-center justify-end gap-2">
                            <button type="button" className="btn btn-sm btn-primary-600 rounded-lg inline-flex items-center gap-1">
                                <iconify-icon icon="simple-line-icons:check" className="text-xl" />
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="card-body py-[60px]">
                        <div className="grid grid-cols-1" id="invoice">
                            <div className="max-w-[1174px] mx-auto w-full">
                                <div className="shadow-4 border border-neutral-200 dark:border-neutral-600 rounded-lg">
                                    <div className="p-5 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className="flex flex-wrap justify-between gap-4">
                                            <div className>
                                                <h3 className="text-xl">Invoice #3492</h3>
                                                <p className="mb-1 text-sm">Date Issued: <span className="editable underline">25/08/2020</span> <span className="text-success-600"><iconify-icon icon="mage:edit" /></span></p>
                                                <p className="mb-0 text-sm">Date Due: <span className="editable underline">29/08/2020</span> <span className="text-success-600"><iconify-icon icon="mage:edit" /></span></p>
                                            </div>
                                            <div className>
                                                <img src="../assets/images/logo.png" alt="image" className="mb-2" />
                                                <p className="mb-1 text-sm">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                                <p className="mb-0 text-sm">random@gmail.com, +1 543 2198</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-7 px-5">
                                        <div className="flex flex-wrap justify-between align-items-end gap-3">
                                            <div>
                                                <h6 className="text-base">Issus For:</h6>
                                                <table className="text-sm text-secondary-light">
                                                    <tbody>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="ps-2">: <span className="editable underline">Will Marthas</span> <span className="text-success-600"><iconify-icon icon="mage:edit" /></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address</td>
                                                            <td className="ps-2">: <span className="editable underline">4517 Washington Ave.USA</span> <span className="text-success-600"><iconify-icon icon="mage:edit" /></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone number</td>
                                                            <td className="ps-2">: <span className="editable underline">+1 543 2198</span> <span className="text-success-600"><iconify-icon icon="mage:edit" /></span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div>
                                                <table className="text-sm text-secondary-light">
                                                    <tbody>
                                                        <tr>
                                                            <td>Issus Date</td>
                                                            <td className="ps-2">:25 Jan 2024</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Order ID</td>
                                                            <td className="ps-2">:#653214</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipment ID</td>
                                                            <td className="ps-2">:#965215</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <div className="table-responsive scroll-sm">
                                                <table className="table bordered-table text-sm" id="invoice-table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="text-sm">SL.</th>
                                                            <th scope="col" className="text-sm">Items</th>
                                                            <th scope="col" className="text-sm">Qty</th>
                                                            <th scope="col" className="text-sm">Units</th>
                                                            <th scope="col" className="text-sm">Unit Price</th>
                                                            <th scope="col" className="text-sm">Price</th>
                                                            <th scope="col" className="text-center text-sm">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>01</td>
                                                            <td>Apple's Shoes</td>
                                                            <td>5</td>
                                                            <td>PC</td>
                                                            <td>$200</td>
                                                            <td>$1000.00</td>
                                                            <td className="text-center">
                                                                <button type="button" className="remove-row"><iconify-icon icon="ic:twotone-close" className="text-danger-600 text-xl" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>02</td>
                                                            <td>Apple's Shoes</td>
                                                            <td>5</td>
                                                            <td>PC</td>
                                                            <td>$200</td>
                                                            <td>$1000.00</td>
                                                            <td className="text-center">
                                                                <button type="button" className="remove-row"><iconify-icon icon="ic:twotone-close" className="text-danger-600 text-xl" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03</td>
                                                            <td>Apple's Shoes</td>
                                                            <td>5</td>
                                                            <td>PC</td>
                                                            <td>$200</td>
                                                            <td>$1000.00</td>
                                                            <td className="text-center">
                                                                <button type="button" className="remove-row"><iconify-icon icon="ic:twotone-close" className="text-danger-600 text-xl" /></button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>04</td>
                                                            <td>Apple's Shoes</td>
                                                            <td>5</td>
                                                            <td>PC</td>
                                                            <td>$200</td>
                                                            <td>$1000.00</td>
                                                            <td className="text-center">
                                                                <button type="button" className="remove-row"><iconify-icon icon="ic:twotone-close" className="text-danger-600 text-xl" /></button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div>
                                                <button type="button" id="addRow" className="btn btn-sm btn-primary-600 rounded-lg inline-flex items-center gap-1 mt-6">
                                                    <iconify-icon icon="simple-line-icons:plus" className="text-xl" />
                                                    Add New
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap justify-between gap-3 mt-6">
                                                <div>
                                                    <p className="text-sm mb-0"><span className="text-neutral-600 dark:text-neutral-200 font-semibold">Sales By:</span> Jammal</p>
                                                    <p className="text-sm mb-0">Thanks for your business</p>
                                                </div>
                                                <div>
                                                    <table className="text-sm">
                                                        <tbody>
                                                            <tr>
                                                                <td className="pe-[64px]">Subtotal:</td>
                                                                <td className="ps-6">
                                                                    <span className="text-neutral-600 dark:text-neutral-200 font-semibold">$4000.00</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pe-[64px]">Discount:</td>
                                                                <td className="ps-6">
                                                                    <span className="text-neutral-600 dark:text-neutral-200 font-semibold">$0.00</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pe-[64px] border-b border-neutral-200 dark:border-neutral-600 pb-4">Tax:</td>
                                                                <td className="ps-6 border-b border-neutral-200 dark:border-neutral-600 pb-4">
                                                                    <span className="text-neutral-600 dark:text-neutral-200 font-semibold">0.00</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pe-[64px] pt-4">
                                                                    <span className="text-neutral-600 dark:text-neutral-200 font-semibold">Total:</span>
                                                                </td>
                                                                <td className="ps-6 pt-4">
                                                                    <span className="text-neutral-600 dark:text-neutral-200 font-semibold">$1690</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-16">
                                            <p className="text-center text-secondary-light text-sm font-semibold">Thank you for your purchase!</p>
                                        </div>
                                        <div className="flex flex-wrap justify-between align-items-end mt-16">
                                            <div className="text-sm border-t border-neutral-200 dark:border-neutral-600 inline-block px-3">Signature of Customer</div>
                                            <div className="text-sm border-t border-neutral-200 dark:border-neutral-600 inline-block px-3">Signature of Authorized</div>
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

export default Add
