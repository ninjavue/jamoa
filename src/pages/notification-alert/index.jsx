import React from 'react';
import { Link } from 'react-router-dom';

const NotificationAlert = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Notification Alert</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Settings - Notification Alert</li>
                    </ul>
                </div>
                <div className="card h-full rounded-lg border-0">
                    <div className="card-body p-10">
                        <form action="#">
                            <div className="mb-6">
                                <h6 className="mb-4">Mail Notification Messages</h6>
                                <div className="flex flex-wrap justify-between gap-1">
                                    <label className="inline-block font-medium text-secondary-light text-base mb-2">Admin New Order Message</label>
                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">On</span>
                                    </label>
                                </div>
                                <textarea className="form-control rounded-lg h-[80px]" placeholder="You have a new order." defaultValue={""} />
                            </div>
                            <div className="mb-6">
                                <h6 className="mb-4">Sms Notification Messages</h6>
                                <div className="flex flex-wrap justify-between gap-1">
                                    <label className="inline-block font-medium text-secondary-light text-base mb-2">Admin New Order Message</label>
                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">On</span>
                                    </label>
                                </div>
                                <textarea className="form-control rounded-lg h-[80px]" placeholder="You have a new order." defaultValue={""} />
                            </div>
                            <div className="mb-6">
                                <h6 className="mb-4">Push Notification Messages</h6>
                                <div className="flex flex-wrap justify-between gap-1">
                                    <label className="inline-block font-medium text-secondary-light text-base mb-2">Admin New Order Message</label>
                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" defaultValue className="sr-only peer" />
                                        <span className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-neutral-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">On</span>
                                    </label>
                                </div>
                                <textarea className="form-control rounded-lg h-[80px]" placeholder="You have a new order." defaultValue={""} />
                            </div>
                            <div className="flex items-center justify-center gap-3 mt-6">
                                <button type="reset" className="border border-danger-600 hover:bg-danger-200 text-danger-600 text-base px-10 py-[11px] rounded-lg">
                                    Reset
                                </button>
                                <button type="submit" className="btn btn-primary border border-primary-600 text-base px-6 py-3 rounded-lg">
                                    Save Change
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default NotificationAlert;