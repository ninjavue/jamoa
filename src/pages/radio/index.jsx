import React from 'react'
import { Link } from 'react-router-dom'

const Radio = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Radio</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Radio</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Default Radio</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex items-center flex-wrap gap-7">
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio1" id="radio1" defaultChecked />
                                    <label className="peer-checked:text-primary-600 leading-[1] font-medium" htmlFor="radio1"> Radio Active </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio2" id="radio2" defaultChecked />
                                    <label className="peer-checked:text-purple-600 leading-[1] font-medium" htmlFor="radio2"> Radio Active </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-success-600 bg-gray-100 border-gray-300 focus:ring-success-500 dark:focus:ring-success-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio3" id="radio3" defaultChecked />
                                    <label className="peer-checked:text-success-600 leading-[1] font-medium" htmlFor="radio3"> Radio Active </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-warning-600 bg-gray-100 border-gray-300 focus:ring-warning-500 dark:focus:ring-warning-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio4" id="radio4" defaultChecked />
                                    <label className="peer-checked:text-warning-600 leading-[1] font-medium" htmlFor="radio4"> Radio Active </label>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap gap-7 mt-6">
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio" id="radio11" />
                                    <label className="peer-checked:text-primary-600 leading-[1] font-medium" htmlFor="radio11"> Radio Inactive </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio" id="radio22" />
                                    <label className="peer-checked:text-purple-600 leading-[1] font-medium" htmlFor="radio22"> Radio Inactive </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-success-600 bg-gray-100 border-gray-300 focus:ring-success-500 dark:focus:ring-success-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio" id="radio33" />
                                    <label className="peer-checked:text-success-600 leading-[1] font-medium" htmlFor="radio33"> Radio Inactive </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-warning-600 bg-gray-100 border-gray-300 focus:ring-warning-500 dark:focus:ring-warning-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio" id="radio44" />
                                    <label className="peer-checked:text-warning-600 leading-[1] font-medium" htmlFor="radio44"> Radio Inactive </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Radio Disable</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex items-center flex-wrap gap-7">
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 opacity-75 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio11" id="radio111" defaultChecked disabled />
                                    <label className="peer-disabled:opacity-75 peer-checked:text-primary-600 leading-[1] font-medium" htmlFor="radio111"> Radio Active </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 opacity-75 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio22" id="radio222" defaultChecked disabled />
                                    <label className="peer-disabled:opacity-75 peer-checked:text-purple-600 leading-[1] font-medium" htmlFor="radio222"> Radio Active </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 opacity-75 text-success-600 bg-gray-100 border-gray-300 focus:ring-success-500 dark:focus:ring-success-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio33" id="radio333" defaultChecked disabled />
                                    <label className="peer-disabled:opacity-75 peer-checked:text-success-600 leading-[1] font-medium" htmlFor="radio333"> Radio Active </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 opacity-75 text-warning-600 bg-gray-100 border-gray-300 focus:ring-warning-500 dark:focus:ring-warning-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio44" id="radio444" defaultChecked disabled />
                                    <label className="peer-disabled:opacity-75 peer-checked:text-warning-600 leading-[1] font-medium" htmlFor="radio444"> Radio Active </label>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap gap-7 mt-6">
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 disabled:opacity-75 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio0" id="radio1011" disabled />
                                    <label className="peer-disabled:opacity-75 peer-checked:text-primary-600 leading-[1] font-medium" htmlFor="radio1011"> Radio Inactive </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 disabled:opacity-75 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio0" id="radio2022" disabled />
                                    <label className="peer-disabled:opacity-75 peer-checked:text-purple-600 leading-[1] font-medium" htmlFor="radio2022"> Radio Inactive </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 disabled:opacity-75 text-success-600 bg-gray-100 border-gray-300 focus:ring-success-500 dark:focus:ring-success-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio0" id="radio3033" disabled />
                                    <label className="peer-disabled:opacity-75 peer-checked:text-success-600 leading-[1] font-medium" htmlFor="radio3033"> Radio Inactive </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 disabled:opacity-75 text-warning-600 bg-gray-100 border-gray-300 focus:ring-warning-500 dark:focus:ring-warning-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio0" id="radio4044" disabled />
                                    <label className="peer-disabled:opacity-75 peer-checked:text-warning-600 leading-[1] font-medium" htmlFor="radio4044"> Radio Inactive </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Radio With Button</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex items-center flex-wrap gap-6">
                                <div className="bg-primary-50 dark:bg-primary-600/25 px-5 py-3 rounded-lg">
                                    <span className="flex items-center gap-2">
                                        <input className="peer w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio100" id="radio100" defaultChecked />
                                        <label className="peer-checked:text-primary-600 leading-[1] font-medium" htmlFor="radio100"> Radio Active </label>
                                    </span>
                                </div>
                                <div className="bg-neutral-100 dark:bg-neutral-600/25 px-5 py-3 rounded-lg">
                                    <span className="flex items-center gap-2">
                                        <input className="peer w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio200" id="radio200" defaultChecked />
                                        <label className="peer-checked:text-purple-600 leading-[1] font-medium" htmlFor="radio200"> Radio Active </label>
                                    </span>
                                </div>
                                <div className="bg-success-100 dark:bg-success-600/25 px-5 py-3 rounded-lg">
                                    <span className="flex items-center gap-2">
                                        <input className="peer w-4 h-4 text-success-600 bg-gray-100 border-gray-300 focus:ring-success-500 dark:focus:ring-success-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio300" id="radio300" defaultChecked />
                                        <label className="peer-checked:text-success-600 leading-[1] font-medium" htmlFor="radio300"> Radio Active </label>
                                    </span>
                                </div>
                                <div className="bg-warning-100 dark:bg-warning-600/25 px-5 py-3 rounded-lg">
                                    <span className="flex items-center gap-2">
                                        <input className="peer w-4 h-4 text-warning-600 bg-gray-100 border-gray-300 focus:ring-warning-500 dark:focus:ring-warning-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio4000" id="radio4000" defaultChecked />
                                        <label className="peer-checked:text-warning-600 leading-[1] font-medium" htmlFor="radio4000"> Radio Active </label>
                                    </span>
                                </div>
                                <div className="bg-danger-100 dark:bg-danger-600/25 px-5 py-3 rounded-lg">
                                    <span className="flex items-center gap-2">
                                        <input className="peer w-4 h-4 text-danger-600 bg-gray-100 border-gray-300 focus:ring-danger-500 dark:focus:ring-danger-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="radio400" id="radio400" defaultChecked />
                                        <label className="peer-checked:text-danger-600 leading-[1] font-medium" htmlFor="radio400"> Radio Active </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-7">
                            <h6 className="text-lg font-semibold mb-0">Radio Horizontal</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex items-center flex-wrap gap-7">
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="horizontal" id="horizontal1" />
                                    <label className="peer-checked:text-primary-600 leading-[1] font-medium" htmlFor="horizontal1"> Horizontal 1 </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="horizontal" id="horizontal2" />
                                    <label className="peer-checked:text-purple-600 leading-[1] font-medium" htmlFor="horizontal2"> Horizontal 2 </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-success-600 bg-gray-100 border-gray-300 focus:ring-success-500 dark:focus:ring-success-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="horizontal" id="horizontal3" />
                                    <label className="peer-checked:text-success-600 leading-[1] font-medium" htmlFor="horizontal3"> Horizontal 3 </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-warning-600 bg-gray-100 border-gray-300 focus:ring-warning-500 dark:focus:ring-warning-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="horizontal" id="horizontal4" />
                                    <label className="peer-checked:text-warning-600 leading-[1] font-medium" htmlFor="horizontal4"> Horizontal 4 </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Radio Vertical</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex items-start flex-col flex-wrap gap-6">
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="vertical" id="vertical11" />
                                    <label className="peer-checked:text-primary-600 leading-[1] font-medium" htmlFor="vertical11"> Vertical 1 </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="vertical" id="vertical22" />
                                    <label className="peer-checked:text-purple-600 leading-[1] font-medium" htmlFor="vertical22"> Vertical 2 </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-success-600 bg-gray-100 border-gray-300 focus:ring-success-500 dark:focus:ring-success-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="vertical" id="vertical33" />
                                    <label className="peer-checked:text-success-600 leading-[1] font-medium" htmlFor="vertical33"> Vertical 3 </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input className="peer w-4 h-4 text-warning-600 bg-gray-100 border-gray-300 focus:ring-warning-500 dark:focus:ring-warning-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="vertical" id="vertical44" />
                                    <label className="peer-checked:text-warning-600 leading-[1] font-medium" htmlFor="vertical44"> Vertical 4 </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Radio
