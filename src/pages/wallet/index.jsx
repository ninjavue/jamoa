import React from 'react'
import { Link } from 'react-router-dom'

const Wallet = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Wallet</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Wallet</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-9">
                        <div className="card h-full border-0 p-0 rounded-xl">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center flex-wrap gap-3 justify-between">
                                <div className="flex items-center flex-wrap gap-3">
                                    <span className="text-base font-medium text-secondary-light mb-0">Show</span>
                                    <select className="form-select form-select-sm w-auto dark:text-white">
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
                                    <div className="icon-field relative">
                                        <input type="text" name="#0" className="form-control rounded-lg w-auto" placeholder="Search" />
                                        <span className="icon absolute top-1/2 left-0 text-lg flex">
                                            <iconify-icon icon="ion:search-outline" />
                                        </span>
                                    </div>
                                    <select className="form-select form-select-sm w-auto dark:text-white">
                                        <option>Status</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                                <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="btn btn-primary text-sm btn-sm px-3 py-3 rounded-lg flex items-center gap-2" type="button">
                                    <iconify-icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
                                    Connect Wallet
                                </button>
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
                                                <th scope="col">Aset</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Change %</th>
                                                <th scope="col">Allocation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='01' />
                                                        </div>
                                                        01
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img1.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Bitcoin</span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">BTC</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.3464 BTC</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-up-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '40%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='02' />
                                                        </div>
                                                        02
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img2.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Ethereum</span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">ETH</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 ETH</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-up-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '20%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='03' />
                                                        </div>
                                                        03
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img3.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Litecoin</span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">LTC</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 LTC</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-up-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '50%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='04' />
                                                        </div>
                                                        04
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img4.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Binance</span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">BNB</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 BNB</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-up-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '30%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='05' />
                                                        </div>
                                                        05
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img6.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Dogecoin</span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">DOGE</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 DOGE</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-down-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '75%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='06' />
                                                        </div>
                                                        06
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Polygon </span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">MATIC</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 MATIC</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-down-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '60%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='066' />
                                                        </div>
                                                        06
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Polygon </span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">MATIC</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 MATIC</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-down-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '25%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='016' />
                                                        </div>
                                                        06
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Polygon </span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">MATIC</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 MATIC</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-down-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '45%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='026' />
                                                        </div>
                                                        06
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Polygon </span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">MATIC</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 MATIC</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-down-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '65%' }} />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-10">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id='061' />
                                                        </div>
                                                        06
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../assets/images/crypto/crypto-img5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                                        <div className="grow flex flex-col">
                                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Polygon </span>
                                                            <span className="text-xs mb-0 font-normal text-secondary-light">MATIC</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>0.5464 MATIC</td>
                                                <td>$2,753.00</td>
                                                <td>
                                                    <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-4 py-1.5 rounded-full font-semibold text-xs">
                                                        <i className="ri-arrow-down-s-fill" />
                                                        1.37%
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="w-full max-w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                        <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '40%' }} />
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
                                            <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)"><iconify-icon icon="ep:d-arrow-left" className /></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link text-secondary-light font-semibold rounded-lg border-0 flex items-center justify-center h-8 w-8 text-base bg-primary-600 text-white" href="javascript:void(0)">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8" href="javascript:void(0)">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)">5</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-primary-50 dark:bg-primary-600/25 text-secondary-light font-medium rounded border-0 px-2.5 py-2.5 flex items-center justify-center h-8 w-8 text-base" href="javascript:void(0)"> <iconify-icon icon="ep:d-arrow-right" className /> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <div className="card h-full border-0">
                            <div className="card-body p-0">
                                <div className="px-6 py-5">
                                    <span className="mb-2">WowDash</span>
                                    <h5 className="text-2xl">$40,570.85</h5>
                                    <div className="mt-6 pb-6 mb-6 border-b border-neutral-200 dark:border-neutral-600 flex items-center gap-4 justify-between flex-wrap">
                                        <div className="text-center flex items-center  flex-col">
                                            <span className="w-[60px] h-[60px] bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400 text-2xl inline-flex justify-center items-center rounded-full ">
                                                <i className="ri-add-line" />
                                            </span>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-medium mt-6">Buy</span>
                                        </div>
                                        <div className="text-center flex items-center  flex-col">
                                            <span className="w-[60px] h-[60px] bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400 text-2xl inline-flex justify-center items-center rounded-full ">
                                                <i className="ri-arrow-left-right-line" />
                                            </span>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-medium mt-6">Swap</span>
                                        </div>
                                        <div className="text-center flex items-center  flex-col">
                                            <span className="w-[60px] h-[60px] bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400 text-2xl inline-flex justify-center items-center rounded-full ">
                                                <i className="ri-upload-2-line" />
                                            </span>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-medium mt-6">Send</span>
                                        </div>
                                        <div className="text-center flex items-center  flex-col">
                                            <span className="w-[60px] h-[60px] bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400 text-2xl inline-flex justify-center items-center rounded-full ">
                                                <i className="ri-download-2-line" />
                                            </span>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-medium mt-6">Receive</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-2 pb-6 border-b border-neutral-200 dark:border-neutral-600">
                                        <h6 className="text-lg mb-0">Watchlist</h6>
                                        <a className="text-primary-600 font-medium text-base">Sell all</a>
                                    </div>
                                    <div className="flex items-center justify-between flex-wrap gap-2 py-4 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className="flex items-center">
                                            <img src="../assets/images/crypto/crypto-img1.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                            <div className="grow flex flex-col">
                                                <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Bitcoin</span>
                                                <span className="text-xs mb-0 font-normal text-secondary-light">BTC</span>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col">
                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">$1,236.21</span>
                                            <span className="text-xs mb-0 font-normal text-secondary-light">1.4363 BTC </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between flex-wrap gap-2 py-4 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className="flex items-center">
                                            <img src="../assets/images/crypto/crypto-img2.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                            <div className="grow flex flex-col">
                                                <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Ethereum</span>
                                                <span className="text-xs mb-0 font-normal text-secondary-light">ETH</span>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col">
                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">$1,236.21</span>
                                            <span className="text-xs mb-0 font-normal text-secondary-light">1.4363 ETH </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between flex-wrap gap-2 py-4 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className="flex items-center">
                                            <img src="../assets/images/crypto/crypto-img5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                            <div className="grow flex flex-col">
                                                <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Dogecoin</span>
                                                <span className="text-xs mb-0 font-normal text-secondary-light">DOGE</span>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col">
                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">$1,658</span>
                                            <span className="text-xs mb-0 font-normal text-secondary-light">1.4363 DOGE</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between flex-wrap gap-2 py-4">
                                        <div className="flex items-center">
                                            <img src="../assets/images/crypto/crypto-img6.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                                            <div className="grow flex flex-col">
                                                <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">Digibyte</span>
                                                <span className="text-xs mb-0 font-normal text-secondary-light">DGB</span>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col">
                                            <span className="text-base mb-0 font-medium text-neutral-600 dark:text-neutral-200 block">$165,8</span>
                                            <span className="text-xs mb-0 font-normal text-secondary-light">1.4363 DGB</span>
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

export default Wallet
