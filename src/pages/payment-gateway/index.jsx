import React from 'react';
import { Link } from 'react-router-dom';

const PaymentGateway = () => {
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
                <div className="card h-full p-0 rounded-xl border-0">
                    <div className="card-body p-6">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="2xl:col-span-6 col-span-12">
                                <div className="card rounded-xl shadow-none border-neutral-200 dark:border-neutral-600 overflow-hidden">
                                    <div className="card-header bg-neutral-100 border-b border-neutral-200 dark:border-neutral-600 dark:bg-dark-2 py-4 px-6 flex items-center flex-wrap gap-3 justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="w-9 h-9 bg-white dark:bg-neutral-700 rounded-full flex justify-center items-center">
                                                <img src="../assets/images/payment/payment-gateway1.png" alt className />
                                            </span>
                                            <span className="text-lg font-semibold text-neutral-600 dark:text-neutral-200">Paypal</span>
                                        </div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                                            <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                        </label>
                                    </div>
                                    <div className="card-body p-6">
                                        <div className="grid grid-cols-12 gap-5">
                                            <div className="sm:col-span-6 col-span-12">
                                                <span className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Environment <span className="text-danger-600">*</span></span>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-3 font-medium text-lg">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="sandbox" defaultChecked />
                                                        </div>
                                                        <label htmlFor="sandbox" className="inline-block font-medium text-lg text-neutral-600 dark:text-neutral-200 mb-0">Sandbox</label>
                                                    </div>
                                                    <div className="flex items-center gap-3 font-medium text-lg">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="Production" />
                                                        </div>
                                                        <label htmlFor="Production" className="inline-block font-medium text-lg text-neutral-600 dark:text-neutral-200 mb-0">Production</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="currency" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Currency <span className="text-danger-600">*</span></label>
                                                <select className="form-control rounded-lg form-select" id="currency">
                                                    <option selected disabled>USD</option>
                                                    <option>TK</option>
                                                    <option>Rupee</option>
                                                </select>
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="secretKey" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Secret Key <span className="text-danger-600">*</span></label>
                                                <input type="text" className="form-control rounded-lg" id="secretKey" placeholder="Secret Key" defaultValue="EGtgNkjt3I5lkhEEzicdot8gVH_PcFiKxx6ZBiXpVrp4QLDYcVQQMLX6MMG_fkS9_H0bwmZzBovb4jLP" />
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="publicKey" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Publics Key<span className="text-danger-600">*</span></label>
                                                <input type="text" className="form-control rounded-lg" id="publicKey" placeholder="Publics Key" defaultValue="AcRx7vvy79nbNxBemacGKmnnRe_CtxkItyspBS_eeMIPREwfCEIfPg1uX-bdqPrS_ZFGocxEH_SJRrIJ" />
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="logo" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Logo <span className="text-danger-600">*</span></label>
                                                <input type="file" className="border border-neutral-200 dark:border-neutral-600 w-full rounded-lg" id="logo" />
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="logo" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white"><span className="visibility-hidden">Save</span></label>
                                                <button type="submit" className="btn btn-primary border border-primary-600 text-base px-6 py-2 rounded-lg w-full justify-center">
                                                    Save Change
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="2xl:col-span-6 col-span-12">
                                <div className="card rounded-xl shadow-none border-neutral-200 dark:border-neutral-600 overflow-hidden">
                                    <div className="card-header bg-neutral-100 border-b border-neutral-200 dark:border-neutral-600 dark:bg-dark-2 py-4 px-6 flex items-center flex-wrap gap-3 justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="w-9 h-9 bg-white dark:bg-neutral-700 rounded-full flex justify-center items-center">
                                                <img src="../assets/images/payment/payment-gateway2.png" alt className />
                                            </span>
                                            <span className="text-lg font-semibold text-neutral-600 dark:text-neutral-200">RazorPay</span>
                                        </div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
                                            <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                        </label>
                                    </div>
                                    <div className="card-body p-6">
                                        <div className="grid grid-cols-12 gap-5">
                                            <div className="sm:col-span-6 col-span-12">
                                                <span className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Environment <span className="text-danger-600">*</span></span>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-3 font-medium text-lg">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="sandbox2" defaultChecked />
                                                        </div>
                                                        <label htmlFor="sandbox2" className="inline-block font-medium text-lg text-neutral-600 dark:text-neutral-200 mb-0">Sandbox</label>
                                                    </div>
                                                    <div className="flex items-center gap-3 font-medium text-lg">
                                                        <div className="form-check style-check flex items-center">
                                                            <input className="form-check-input rounded border border-neutral-400" type="checkbox" name="checkbox" id="Production2" />
                                                        </div>
                                                        <label htmlFor="Production2" className="inline-block font-medium text-lg text-neutral-600 dark:text-neutral-200 mb-0">Production</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="currencyTwo" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Currency <span className="text-danger-600">*</span></label>
                                                <select className="form-control rounded-lg form-select" id="currencyTwo">
                                                    <option selected disabled>USD</option>
                                                    <option>TK</option>
                                                    <option>Rupee</option>
                                                </select>
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="secretKeyTwo" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Secret Key <span className="text-danger-600">*</span></label>
                                                <input type="text" className="form-control rounded-lg" id="secretKeyTwo" placeholder="Secret Key" defaultValue="EGtgNkjt3I5lkhEEzicdot8gVH_PcFiKxx6ZBiXpVrp4QLDYcVQQMLX6MMG_fkS9_H0bwmZzBovb4jLP" />
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="publicKeyTwo" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Publics Key<span className="text-danger-600">*</span></label>
                                                <input type="text" className="form-control rounded-lg" id="publicKeyTwo" placeholder="Publics Key" defaultValue="AcRx7vvy79nbNxBemacGKmnnRe_CtxkItyspBS_eeMIPREwfCEIfPg1uX-bdqPrS_ZFGocxEH_SJRrIJ" />
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label htmlFor="logoTwo" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Logo <span className="text-danger-600">*</span></label>
                                                <input type="file" className="border border-neutral-200 dark:border-neutral-600 w-full rounded-lg" id="logoTwo" />
                                            </div>
                                            <div className="sm:col-span-6 col-span-12">
                                                <label className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white"><span className="visibility-hidden">Save</span></label>
                                                <button type="submit" className="btn btn-primary border border-primary-600 text-base px-6 py-2 rounded-lg w-full justify-center">
                                                    Save Change
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

        </>
    )
}
export default PaymentGateway;