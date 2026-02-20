import React from 'react'
import { Link } from 'react-router-dom'

const Theme = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Theme</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Settings - Theme</li>
                    </ul>
                </div>
                <div className="card h-full rounded-lg border-0">
                    <div className="card-body p-6">
                        <form action="#">
                            <div className="grid md:grid-cols-2 gap-x-5">
                                <div className="mb-5">
                                    <label className="inline-block font-semibold text-secondary-light text-base inline-block mb-2 dark:text-white" htmlFor="imageUpload">Logo (140px X 140px)</label>
                                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="imageUpload" type="file" />
                                    <div className="avatar-upload mt-4">
                                        <div className="avatar-preview">
                                            <div id="previewImage1" className=" w-[120px] h-[120px] rounded-lg border border-neutral-300 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("assets/images/payment/upload-image.png")' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="inline-block font-semibold text-secondary-light text-base inline-block mb-2 dark:text-white" htmlFor="imageUploadTwo">Logo (140px X 140px)</label>
                                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="imageUploadTwo" type="file" />
                                    <div className="avatar-upload mt-4">
                                        <div className="avatar-preview">
                                            <div id="previewImage2" className=" w-[120px] h-[120px] rounded-lg border border-neutral-300 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("assets/images/payment/upload-image.png")' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h6 className="text-xl mb-4">Theme Colors</h6>
                                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                                    <div className="2xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12 relative">
                                        <input className="form-check-input theme-setting-input" name="theme-setting" type="radio" id="blue" hidden />
                                        <label htmlFor="blue" className="theme-setting-label border border-neutral-200 dark:border-neutral-600 rounded-lg p-2 block">
                                            <span className="flex items-center gap-2">
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-primary-600 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Blue</span>
                                                </span>
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-primary-100 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Focus</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="2xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12 relative">
                                        <input className="form-check-input theme-setting-input" name="theme-setting" type="radio" id="magenta" hidden />
                                        <label htmlFor="magenta" className="theme-setting-label border border-neutral-200 dark:border-neutral-600 rounded-lg p-2 block">
                                            <span className="flex items-center gap-2">
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-purple-600 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Magenta</span>
                                                </span>
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-purple-600 dark:bg-purple-600/25 text-purple-600 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Focus</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="2xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12 relative">
                                        <input className="form-check-input theme-setting-input" name="theme-setting" type="radio" id="orange" hidden />
                                        <label htmlFor="orange" className="theme-setting-label border border-neutral-200 dark:border-neutral-600 rounded-lg p-2 block">
                                            <span className="flex items-center gap-2">
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-warning-600 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Orange</span>
                                                </span>
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-warning-100 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Focus</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="2xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12 relative">
                                        <input className="form-check-input theme-setting-input" name="theme-setting" type="radio" id="green" hidden />
                                        <label htmlFor="green" className="theme-setting-label border border-neutral-200 dark:border-neutral-600 rounded-lg p-2 block">
                                            <span className="flex items-center gap-2">
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-success-600 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Green</span>
                                                </span>
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-success-100 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Focus</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="2xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12 relative">
                                        <input className="form-check-input theme-setting-input" name="theme-setting" type="radio" id="red" hidden />
                                        <label htmlFor="red" className="theme-setting-label border border-neutral-200 dark:border-neutral-600 rounded-lg p-2 block">
                                            <span className="flex items-center gap-2">
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-danger-600 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Red</span>
                                                </span>
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-danger-100 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Focus</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="2xl:col-span-2 md:col-span-4 sm:col-span-6 col-span-12 relative">
                                        <input className="form-check-input theme-setting-input" name="theme-setting" type="radio" id="blueDark" hidden />
                                        <label htmlFor="blueDark" className="theme-setting-label border border-neutral-200 dark:border-neutral-600 rounded-lg p-2 block">
                                            <span className="flex items-center gap-2">
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-info-600 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Blue Dark</span>
                                                </span>
                                                <span className="w-1/2 text-center">
                                                    <span className="h-[72px] w-full bg-info-100 rounded" />
                                                    <span className="text-secondary-light text-base font-semibold mt-2">Focus</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 mt-6 col-span-12">
                                        <button type="reset" className="border border-danger-600 hover:bg-danger-200 text-danger-600 text-base px-10 py-[11px] rounded-lg">
                                            Reset
                                        </button>
                                        <button type="submit" className="btn btn-primary border border-primary-600 text-base px-6 py-3 rounded-lg">
                                            Save Change
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Theme
