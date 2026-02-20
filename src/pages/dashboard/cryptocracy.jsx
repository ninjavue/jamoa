import React from 'react'
import { Link } from 'react-router-dom'

const Cryptocracy = () => {
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
                        <li className="font-medium dark:text-white">Cryptocracy</li>
                    </ul>
                </div>
                {/* Crypto Home Widgets Start */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
                    <div className="card shadow-none border-gray-200 dark:border-neutral-600 bg-gradient-to-l from-warning-600/10 to-bg-white">
                        <div className="card-body p-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <img src="../assets/images/currency/crypto-img1.png" alt className="w-10 h-10 rounded-full shrink-0" />
                                <div className="grow">
                                    <h6 className="text-xl mb-1">Bitcoin</h6>
                                    <p className="font-medium text-secondary-light mb-0">BTC</p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap justify-between items-center gap-1">
                                <div className>
                                    <h6 className="mb-2">$45,138</h6>
                                    <span className="text-success-600 text-base">+ 27%</span>
                                </div>
                                <div id="bitcoinAreaChart" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-none border-gray-200 dark:border-neutral-600 bg-gradient-to-l from-blue-600/10 to-bg-white">
                        <div className="card-body p-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <img src="../assets/images/currency/crypto-img2.png" alt className="w-10 h-10 rounded-full shrink-0" />
                                <div className="grow">
                                    <h6 className="text-xl mb-1">Ethereum </h6>
                                    <p className="font-medium text-secondary-light mb-0">ETH</p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap justify-between items-center gap-1">
                                <div className>
                                    <h6 className="mb-2">$45,138</h6>
                                    <span className="text-danger-600 text-base">- 27%</span>
                                </div>
                                <div id="ethereumAreaChart" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-none border-gray-200 dark:border-neutral-600 bg-gradient-to-l from-purple-600/10 to-bg-white">
                        <div className="card-body p-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <img src="../assets/images/currency/crypto-img3.png" alt className="w-10 h-10 rounded-full shrink-0" />
                                <div className="grow">
                                    <h6 className="text-xl mb-1">Solana</h6>
                                    <p className="font-medium text-secondary-light mb-0">SOL</p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap justify-between items-center gap-1">
                                <div className>
                                    <h6 className="mb-2">$45,138</h6>
                                    <span className="text-success-600 text-base">+ 27%</span>
                                </div>
                                <div id="solanaAreaChart" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-none border-gray-200 dark:border-neutral-600 bg-gradient-to-l from-primary-600/10 to-bg-white">
                        <div className="card-body p-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <img src="../assets/images/currency/crypto-img4.png" alt className="w-10 h-10 rounded-full shrink-0" />
                                <div className="grow">
                                    <h6 className="text-xl mb-1">Litecoin</h6>
                                    <p className="font-medium text-secondary-light mb-0">LTE</p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap justify-between items-center gap-1">
                                <div className>
                                    <h6 className="mb-2">$45,138</h6>
                                    <span className="text-success-600 text-base">+ 27%</span>
                                </div>
                                <div id="litecoinAreaChart" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-none border-gray-200 dark:border-neutral-600 bg-gradient-to-l from-warning-600/10 to-bg-white">
                        <div className="card-body p-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <img src="../assets/images/currency/crypto-img5.png" alt className="w-10 h-10 rounded-full shrink-0" />
                                <div className="grow">
                                    <h6 className="text-xl mb-1">Dogecoin</h6>
                                    <p className="font-medium text-secondary-light mb-0">DOGE</p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap justify-between items-center gap-1">
                                <div className>
                                    <h6 className="mb-2">$45,138</h6>
                                    <span className="text-success-600 text-base">+ 27%</span>
                                </div>
                                <div id="dogecoinAreaChart" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Crypto Home Widgets End */}
                <div className="grid grid-cols-1 3xl:grid-cols-12 gap-6 mt-6">
                    {/* Crypto Home Widgets Start */}
                    <div className="2xl:col-span-12 3xl:col-span-8">
                        <div className="grid grid-cols-1 3xl:grid-cols-12 gap-6">
                            <div className="col-span-12">
                                <div className="card h-full rounded-lg border-0">
                                    <div className="card-body p-6">
                                        <div className="flex items-center flex-wrap gap-2 justify-between">
                                            <h6 className="mb-2 font-bold text-lg">Coin Analytics</h6>
                                            <div className="flex flex-wrap items-center gap-4">
                                                <div className="form-check flex items-center gap-2">
                                                    <input className="form-check-input dark:bg-neutral-600" type="radio" name="crypto" id="BTC" />
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="BTC"> BTC </label>
                                                </div>
                                                <div className="form-check flex items-center gap-2">
                                                    <input className="form-check-input dark:bg-neutral-600" type="radio" name="crypto" id="ETH" />
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="ETH"> ETH </label>
                                                </div>
                                                <div className="form-check flex items-center gap-2">
                                                    <input className="form-check-input dark:bg-neutral-600" type="radio" name="crypto" id="SOL" />
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="SOL"> SOL </label>
                                                </div>
                                                <div className="form-check flex items-center gap-2">
                                                    <input className="form-check-input dark:bg-neutral-600" type="radio" name="crypto" id="LTE" />
                                                    <label className="form-check-label line-height-1 font-medium text-secondary-light" htmlFor="LTE"> LTE </label>
                                                </div>
                                            </div>
                                            <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                                                <option>Yearly</option>
                                                <option>Monthly</option>
                                                <option>Weekly</option>
                                                <option>Today</option>
                                            </select>
                                        </div>
                                        <div className="flex items-center gap-2 mt-3">
                                            <h6 className="font-semibold mb-0">$25,000</h6>
                                            <p className="text-sm mb-0 flex items-center gap-1">
                                                Bitcoin (BTC)
                                                <span className="bg-success-100 dark:bg-success-600/25 border border-success-600/25 px-2 py-2 rounded-full font-semibold text-success-600 dark:text-success-500 text-sm inline-flex items-center gap-1">
                                                    10%
                                                    <iconify-icon icon="iconamoon:arrow-up-2-fill" className="icon" />
                                                </span>
                                            </p>
                                        </div>
                                        <div id="candleStickChart" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 3xl:col-span-6">
                                <div className="card h-full rounded-lg border-0">
                                    <div className="card-body p-6">
                                        <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                                            <h6 className="mb-2 font-bold text-lg">Coin Analytics</h6>
                                            <div className="border border-neutral-200 dark:border-neutral-500 rounded px-4 py-2 pe-0 flex items-center gap-1 text-sm text-secondary-light">
                                                Currency:
                                                <select className="form-select form-select-sm text-neutral-700 dark:text-white w-auto bg-white dark:bg-neutral-700 border-0 font-semibold">
                                                    <option>USD</option>
                                                    <option>BDT</option>
                                                    <option>RUP</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200 dark:bg-neutral-600 px-2 py-2 rounded mb-4">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <img src="../assets/images/currency/crypto-img1.png" alt className="w-9 h-9 rounded-full shrink-0" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Bitcoin</h6>
                                                </div>
                                            </div>
                                            <h6 className="text-base font-medium mb-0">$55,000.00</h6>
                                            <span className="text-success-600 text-base font-medium">+3.85%</span>
                                            <div id="markerBitcoinChart" className="remove-tooltip-title rounded-tooltip-value" />
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200 dark:bg-neutral-600 px-2 py-2 rounded mb-4">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <img src="../assets/images/currency/crypto-img2.png" alt className="w-9 h-9 rounded-full shrink-0" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Ethereum</h6>
                                                </div>
                                            </div>
                                            <h6 className="text-base font-medium mb-0">$55,000.00</h6>
                                            <span className="text-danger-600 text-base font-medium">-2.85%</span>
                                            <div id="markerEthereumChart" className="remove-tooltip-title rounded-tooltip-value" />
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200 dark:bg-neutral-600 px-2 py-2 rounded mb-4">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <img src="../assets/images/currency/crypto-img3.png" alt className="w-9 h-9 rounded-full shrink-0" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Solana</h6>
                                                </div>
                                            </div>
                                            <h6 className="text-base font-medium mb-0">$55,000.00</h6>
                                            <span className="text-success-600 text-base font-medium">+3.85%</span>
                                            <div id="markerSolanaChart" className="remove-tooltip-title rounded-tooltip-value" />
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200 dark:bg-neutral-600 px-2 py-2 rounded mb-4">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <img src="../assets/images/currency/crypto-img4.png" alt className="w-9 h-9 rounded-full shrink-0" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Litecoin</h6>
                                                </div>
                                            </div>
                                            <h6 className="text-base font-medium mb-0">$55,000.00</h6>
                                            <span className="text-success-600 text-base font-medium">+3.85%</span>
                                            <div id="markerLitecoinChart" className="remove-tooltip-title rounded-tooltip-value" />
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200 dark:bg-neutral-600 px-2 py-2 rounded mb-4">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <img src="../assets/images/currency/crypto-img5.png" alt className="w-9 h-9 rounded-full shrink-0" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Dogecoin</h6>
                                                </div>
                                            </div>
                                            <h6 className="text-base font-medium mb-0">$15,000.00</h6>
                                            <span className="text-danger-600 text-base font-medium">-2.85%</span>
                                            <div id="markerDogecoinChart" className="remove-tooltip-title rounded-tooltip-value" />
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200 dark:bg-neutral-600 px-2 py-1.5 rounded">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <img src="../assets/images/currency/crypto-img1.png" alt className="w-9 h-9 rounded-full shrink-0" />
                                                <div className="grow">
                                                    <h6 className="text-base mb-0">Crypto</h6>
                                                </div>
                                            </div>
                                            <h6 className="text-base font-medium mb-0">$15,000.00</h6>
                                            <span className="text-danger-600 text-base font-medium">-2.85%</span>
                                            <div id="markerCryptoChart" className="remove-tooltip-title rounded-tooltip-value" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 3xl:col-span-6">
                                <div className="card h-full rounded-lg border-0">
                                    <div className="card-body p-6">
                                        <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                                            <h6 className="mb-2 font-bold text-lg">My Orders</h6>
                                            <div className>
                                                <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                                                    <option>Today</option>
                                                    <option>Monthly</option>
                                                    <option>Weekly</option>
                                                    <option>Today</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="table-responsive scroll-sm">
                                            <table className="table bordered-table mb-0 style-three">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Rate</th>
                                                        <th scope="col">Amount ETH </th>
                                                        <th scope="col">Price PLN</th>
                                                        <th scope="col" className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="text-success-600">0.265415.00</span></td>
                                                        <td>29.4251512</td>
                                                        <td>2.154</td>
                                                        <td className="text-center line-height-1">
                                                            <button type="button" className="text-lg text-danger-600 remove-btn"><iconify-icon icon="radix-icons:cross-2" className="icon" /> </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-success-600">0.265415.00</span></td>
                                                        <td>29.4251512</td>
                                                        <td>2.154</td>
                                                        <td className="text-center line-height-1">
                                                            <button type="button" className="text-lg text-danger-600 remove-btn"><iconify-icon icon="radix-icons:cross-2" className="icon" /> </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-danger-600">0.265415.00</span></td>
                                                        <td>29.4251512</td>
                                                        <td>2.154</td>
                                                        <td className="text-center line-height-1">
                                                            <button type="button" className="text-lg text-danger-600 remove-btn"><iconify-icon icon="radix-icons:cross-2" className="icon" /> </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-success-600">0.265415.00</span></td>
                                                        <td>29.4251512</td>
                                                        <td>2.154</td>
                                                        <td className="text-center line-height-1">
                                                            <button type="button" className="text-lg text-danger-600 remove-btn"><iconify-icon icon="radix-icons:cross-2" className="icon" /> </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-danger-600">0.265415.00</span></td>
                                                        <td>29.4251512</td>
                                                        <td>2.154</td>
                                                        <td className="text-center line-height-1">
                                                            <button type="button" className="text-lg text-danger-600 remove-btn"><iconify-icon icon="radix-icons:cross-2" className="icon" /> </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-danger-600">0.265415.00</span></td>
                                                        <td>29.4251512</td>
                                                        <td>2.154</td>
                                                        <td className="text-center line-height-1">
                                                            <button type="button" className="text-lg text-danger-600 remove-btn"><iconify-icon icon="radix-icons:cross-2" className="icon" /> </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <div className="card h-full border-0">
                                    <div className="card-body p-6">
                                        <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                                            <h6 className="font-bold text-lg mb-0">Recent Transaction</h6>
                                            <a className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
                                                View All
                                                <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                            </a>
                                        </div>
                                        <div className="table-responsive scroll-sm">
                                            <table className="table bordered-table mb-0 xsm-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Ast</th>
                                                        <th scope="col">Date &amp; Time</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col" className="text-center">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-success-600 bg-success-100 dark:bg-success-600/25 dark:text-success-400 w-8 h-8 flex items-center justify-center rounded-full text-xl">
                                                                    <iconify-icon icon="tabler:arrow-up-right" className="icon" />
                                                                </span>
                                                                <span className="font-medium">Bitcoin</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">10:34 AM</span>
                                                            <span className="text-secondary-light text-sm">27 Mar 2024</span>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">+ 0.431 BTC</span>
                                                            <span className="text-secondary-light text-sm">$3,480.90</span>
                                                        </td>
                                                        <td>Abc.........np562</td>
                                                        <td className="text-center">
                                                            <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-4 py-1.5 rounded font-medium text-sm">Completed</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-danger-600 bg-danger-100 dark:bg-danger-600/25 dark:text-danger-400 w-8 h-8 flex items-center justify-center rounded-full text-xl">
                                                                    <iconify-icon icon="tabler:arrow-down-left" className="icon" />
                                                                </span>
                                                                <span className="font-medium">Bitcoin</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">10:34 AM</span>
                                                            <span className="text-secondary-light text-sm">27 Mar 2024</span>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">+ 0.431 BTC</span>
                                                            <span className="text-secondary-light text-sm">$3,480.90</span>
                                                        </td>
                                                        <td>Abc.........np562</td>
                                                        <td className="text-center">
                                                            <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-4 py-1.5 rounded font-medium text-sm">Terminated</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-success-600 bg-success-100 dark:bg-success-600/25 dark:text-success-400 w-8 h-8 flex items-center justify-center rounded-full text-xl">
                                                                    <iconify-icon icon="tabler:arrow-up-right" className="icon" />
                                                                </span>
                                                                <span className="font-medium">Bitcoin</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">10:34 AM</span>
                                                            <span className="text-secondary-light text-sm">27 Mar 2024</span>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">+ 0.431 BTC</span>
                                                            <span className="text-secondary-light text-sm">$3,480.90</span>
                                                        </td>
                                                        <td>Abc.........np562</td>
                                                        <td className="text-center">
                                                            <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-4 py-1.5 rounded font-medium text-sm">Completed</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-danger-600 bg-danger-100 dark:bg-danger-600/25 dark:text-danger-400 w-8 h-8 flex items-center justify-center rounded-full text-xl">
                                                                    <iconify-icon icon="tabler:arrow-down-left" className="icon" />
                                                                </span>
                                                                <span className="font-medium">Bitcoin</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">10:34 AM</span>
                                                            <span className="text-secondary-light text-sm">27 Mar 2024</span>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">+ 0.431 BTC</span>
                                                            <span className="text-secondary-light text-sm">$3,480.90</span>
                                                        </td>
                                                        <td>Abc.........np562</td>
                                                        <td className="text-center">
                                                            <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-4 py-1.5 rounded font-medium text-sm">Terminated</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-success-600 bg-success-100 dark:bg-success-600/25 dark:text-success-400 w-8 h-8 flex items-center justify-center rounded-full text-xl">
                                                                    <iconify-icon icon="tabler:arrow-up-right" className="icon" />
                                                                </span>
                                                                <span className="font-medium">Bitcoin</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">10:34 AM</span>
                                                            <span className="text-secondary-light text-sm">27 Mar 2024</span>
                                                        </td>
                                                        <td>
                                                            <span className="text-neutral-600 dark:text-neutral-200 block font-medium">+ 0.431 BTC</span>
                                                            <span className="text-secondary-light text-sm">$3,480.90</span>
                                                        </td>
                                                        <td>Abc.........np562</td>
                                                        <td className="text-center">
                                                            <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-4 py-1.5 rounded font-medium text-sm">Completed</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Crypto Home Widgets End */}
                    <div className="2xl:col-span-12 3xl:col-span-4">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="card h-full rounded-lg border-0">
                                <div className="card-body">
                                    <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                                        <h6 className="mb-2 font-bold text-lg">My Cards</h6>
                                        <a href className="border border-primary-600 text-primary-600 hover:text-white hover:bg-primary-600 inline-flex items-center gap-2 text-sm btn-sm px-2 py-1.5 rounded transition">
                                            <iconify-icon icon="ph:plus-circle" className="icon text-xl" /> Button
                                        </a>
                                    </div>
                                    <div>
                                        <div className="card-slider">
                                            <div className="p-5 h-[240px] rounded-lg overflow-hidden relative z-[1]">
                                                <img src="../assets/images/card/card-bg.png" alt className="absolute start-0 top-0 w-full h-full object-fit-cover -z-[1]" />
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className="flex items-center justify-between flex-wrap">
                                                        <img src="../assets/images/card/card-logo.png" alt />
                                                    </div>
                                                    <div>
                                                        <span className="text-white text-xs font-normal text-opacity-75">Credit Card Number</span>
                                                        <h6 className="text-white text-xl font-semibold mt-1 mb-0">2356 9854 3652 5612</h6>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <span className="text-white text-xs font-normal text-opacity-75">Name</span>
                                                            <h6 className="text-white text-xl font-semibold mb-0">Arlene McCoy</h6>
                                                        </div>
                                                        <div>
                                                            <span className="text-white text-xs font-normal text-opacity-75">Exp. Date</span>
                                                            <h6 className="text-white text-xl font-semibold mb-0">05/26</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 h-[240px] rounded-lg overflow-hidden relative z-[1]">
                                                <img src="../assets/images/card/card-bg.png" alt className="absolute start-0 top-0 w-full h-full object-fit-cover -z-[1]" />
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className="flex items-center justify-between flex-wrap">
                                                        <h6 className="text-white mb-0">Master Card</h6>
                                                        <img src="../assets/images/card/card-logo.png" alt />
                                                    </div>
                                                    <div>
                                                        <span className="text-white text-xs font-normal text-opacity-75">Credit Card Number</span>
                                                        <h6 className="text-white text-xl font-semibold mt-1 mb-0">2356 9854 3652 5612</h6>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <span className="text-white text-xs font-normal text-opacity-75">Name</span>
                                                            <h6 className="text-white text-xl font-semibold mb-0">Arlene McCoy</h6>
                                                        </div>
                                                        <div>
                                                            <span className="text-white text-xs font-normal text-opacity-75">Exp. Date</span>
                                                            <h6 className="text-white text-xl font-semibold mb-0">05/26</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 h-[240px] rounded-lg overflow-hidden relative z-[1]">
                                                <img src="../assets/images/card/card-bg.png" alt className="absolute start-0 top-0 w-full h-full object-fit-cover -z-[1]" />
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className="flex items-center justify-between flex-wrap">
                                                        <h6 className="text-white mb-0">Master Card</h6>
                                                        <img src="../assets/images/card/card-logo.png" alt />
                                                    </div>
                                                    <div>
                                                        <span className="text-white text-xs font-normal text-opacity-75">Credit Card Number</span>
                                                        <h6 className="text-white text-xl font-semibold mt-1 mb-0">2356 9854 3652 5612</h6>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <span className="text-white text-xs font-normal text-opacity-75">Name</span>
                                                            <h6 className="text-white text-xl font-semibold mb-0">Arlene McCoy</h6>
                                                        </div>
                                                        <div>
                                                            <span className="text-white text-xs font-normal text-opacity-75">Exp. Date</span>
                                                            <h6 className="text-white text-xl font-semibold mb-0">05/26</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-full border-0">
                                <div className="card-body p-6">
                                    <span className="mb-1.5 text-sm text-secondary-light">Total Balance</span>
                                    <h6 className="mb-1.5">$320,320.00</h6>
                                    <div className="tab-style-button mb-6 mt-7 border border-neutral-200 dark:border-neutral-500 input-form-light p-1 rounded-lg bg-neutral-50 dark:bg-neutral-600">
                                        <ul className="grid grid-cols-2 -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                            <li role="presentation">
                                                <button className="px-3 py-2.5 text-base w-full text-center rounded-lg" id="buy-tab" data-tabs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="false">Buy</button>
                                            </li>
                                            <li role="presentation">
                                                <button className="px-3 py-2.5 text-base w-full text-center rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="sell-tab" data-tabs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false">Sell</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="default-tab-content">
                                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="buy" role="tabpanel" aria-labelledby="buy-tab">
                                            <div className>
                                                <div className="mb-5">
                                                    <label htmlFor="estimatedValue" className="font-semibold mb-2 block text-neutral-600 dark:text-white">Estimated Purchase Value</label>
                                                    <div className="flex justify-content-between border border-neutral-200 dark:border-neutral-500 rounded-lg">
                                                        <input type="text" className="grow w-full rounded-tr-none rounded-br-none form-control  border-0" id="estimatedValue" placeholder="Estimated Value" />
                                                        <div className="shrink-0 bg-neutral-50 dark:bg-neutral-600 rounded-tr-lg rounded-br-lg border-0 font-normal ps-1 pe-1 flex justify-center items-center">
                                                            <select className="form-select form-select-sm w-auto bg-transparent dark:text-white font-bolder border-0 text-secondary-light">
                                                                <option className="bg-white dark:bg-neutral-700">BTC</option>
                                                                <option className="bg-white dark:bg-neutral-700">LTC</option>
                                                                <option className="bg-white dark:bg-neutral-700">ETC</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="tradeValue" className="font-semibold mb-2 block text-neutral-600 dark:text-white">Trade Value</label>
                                                    <div className="flex justify-content-between border border-neutral-200 dark:border-neutral-500 rounded-lg">
                                                        <input type="text" className="grow w-full  rounded-tr-none rounded-br-none  form-control border-0" id="tradeValue" placeholder="Trade Value" />
                                                        <div className="shrink-0 bg-neutral-50 dark:bg-neutral-600 rounded-tr-lg rounded-br-lg border-0 font-normal ps-1 pe-1 flex justify-center items-center">
                                                            <select className="form-select form-select-sm w-auto bg-transparent dark:text-white font-bolder border-0 text-secondary-light">
                                                                <option className="bg-white dark:bg-neutral-700">USD</option>
                                                                <option className="bg-white dark:bg-neutral-700">BTC</option>
                                                                <option className="bg-white dark:bg-neutral-700">LTC</option>
                                                                <option className="bg-white dark:bg-neutral-700">ETC</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="tradeValue" className="font-semibold mb-2 block text-neutral-600 dark:text-white">Trade Value</label>
                                                    <textarea className="form-control w-full border h-[80px] rounded-lg" placeholder="Enter Address" defaultValue={""} />
                                                </div>
                                                <div className="mb-6">
                                                    <span className="mb-1.5 text-sm text-secondary-light">Total Balance</span>
                                                    <h6 className="mb-1.5 font-semibold text-xl text-warning-600 dark:text-warning-600">$320,320.00</h6>
                                                </div>
                                                <a href className="btn bg-primary-600 hover:bg-primary-700 text-white text-sm px-2 py-3 w-full justify-center rounded-lg transition"> Transfer Now</a>
                                            </div>
                                        </div>
                                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="sell" role="tabpanel" aria-labelledby="sell-tab">
                                            <div className>
                                                <div className="mb-5">
                                                    <label htmlFor="estimatedValueTwo" className="font-semibold mb-2 block text-neutral-600 dark:text-white">Estimated Purchase Sell Value</label>
                                                    <div className="flex justify-content-between border border-neutral-200 dark:border-neutral-500 rounded-lg">
                                                        <input type="text" className="grow w-full rounded-tl-lg rounded-bl-lg  form-control bg-white dark:bg-neutral-700 border-0" id="estimatedValueTwo" placeholder="Estimated Value" />
                                                        <div className="shrink-0 bg-neutral-50 dark:bg-neutral-600 rounded-tr-lg rounded-br-lg border-0 font-normal ps-1 pe-1">
                                                            <select className="form-select form-select-sm w-auto bg-transparent dark:text-white font-bolder border-0 text-secondary-light">
                                                                <option className="bg-white dark:bg-neutral-700">BTC</option>
                                                                <option className="bg-white dark:bg-neutral-700">LTC</option>
                                                                <option className="bg-white dark:bg-neutral-700">ETC</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="tradeValueTwo" className="font-semibold mb-2 block text-neutral-600 dark:text-white">Trade Value</label>
                                                    <div className="flex justify-content-between border border-neutral-200 dark:border-neutral-500 rounded-lg">
                                                        <input type="text" className="grow w-full rounded-tl-lg rounded-bl-lg  form-control bg-white dark:bg-neutral-700 border-0" id="tradeValueTwo" placeholder="Trade Value" />
                                                        <div className="shrink-0 bg-neutral-50 dark:bg-neutral-600 rounded-tr-lg rounded-br-lg border-0 font-normal ps-1 pe-1">
                                                            <select className="form-select form-select-sm w-auto bg-transparent dark:text-white font-bolder border-0 text-secondary-light">
                                                                <option className="bg-white dark:bg-neutral-700">USD</option>
                                                                <option className="bg-white dark:bg-neutral-700">BTC</option>
                                                                <option className="bg-white dark:bg-neutral-700">LTC</option>
                                                                <option className="bg-white dark:bg-neutral-700">ETC</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-5">
                                                    <label className="font-semibold mb-2 block text-neutral-600 dark:text-white">Address</label>
                                                    <textarea className="form-control w-full bg-white border border-neutral-200 dark:border-neutral-500 dark:bg-neutral-700 h-[80px] rounded-lg" placeholder="Enter Address" defaultValue={""} />
                                                </div>
                                                <div className="mb-6">
                                                    <span className="mb-1.5 text-sm text-secondary-light">Total Balance</span>
                                                    <h6 className="mb-1.5 font-semibold text-xl text-warning-600 dark:text-warning-600">$320,320.00</h6>
                                                </div>
                                                <a href className="btn bg-primary-600 hover:bg-primary-700 text-white text-sm px-2 py-3 w-full rounded-lg transition justify-center"> Transfer Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-full rounded-lg border-0">
                                <div className="card-body p-6">
                                    <div className="flex items-center flex-wrap gap-2 justify-between">
                                        <h6 className="mb-2 font-bold text-lg">User Activates</h6>
                                        <div className>
                                            <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                                                <option>This Week</option>
                                                <option>This Month</option>
                                                <option>This Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <span className="w-[80px] h-[80px] bg-white dark:bg-neutral-700 shadow-xl text-neutral-600 dark:text-neutral-200 font-semibold text-xl flex justify-center items-center rounded-full absolute end-0 top-0 z-1">+30%</span>
                                        <div id="statisticsDonutChart" className="mt-9 grow apexcharts-tooltip-z-none title-style circle-none" />
                                        <span className="w-[80px] h-[80px] bg-white dark:bg-neutral-700 shadow-xl text-neutral-600 dark:text-neutral-200 font-semibold text-xl flex justify-center items-center rounded-full absolute start-0 bottom-0 z-1">+25%</span>
                                    </div>
                                    <ul className="flex flex-wrap items-center justify-between mt-4 gap-3">
                                        <li className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-sm bg-primary-600" />
                                            <span className="text-secondary-light text-sm font-normal">
                                                Visits By Day:
                                                <span className="text-neutral-600 dark:text-neutral-200 font-bold">20,000</span>
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-sm bg-warning-600" />
                                            <span className="text-secondary-light text-sm font-normal">
                                                Referral Join:
                                                <span className="text-neutral-600 dark:text-neutral-200 font-bold">25,000</span>
                                            </span>
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

export default Cryptocracy
