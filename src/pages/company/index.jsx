import React from 'react'
import { Link } from 'react-router-dom'

const Company = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Company</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link href="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Settings - Company</li>
                    </ul>
                </div>
                <div className="card h-full rounded-lg border-0">
                    <div className="card-body p-10">
                        <form action="#">
                            <div className="grid md:grid-cols-2 gap-x-5">
                                <div className="mb-5">
                                    <label htmlFor="name" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Full Name <span className="text-danger-600">*</span></label>
                                    <input type="text" className="form-control rounded-lg" id="name" placeholder="Enter Full Name" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Email <span className="text-danger-600">*</span></label>
                                    <input type="email" className="form-control rounded-lg" id="email" placeholder="Enter email address" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="number" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Phone Number</label>
                                    <input type="email" className="form-control rounded-lg" id="number" placeholder="Enter phone number" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="Website" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white"> Website</label>
                                    <input type="url" className="form-control rounded-lg" id="Website" placeholder="Website URL" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="country" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Country <span className="text-danger-600">*</span> </label>
                                    <select className="form-control rounded-lg form-select" id="country">
                                        <option selected disabled>Select Country</option>
                                        <option>USA</option>
                                        <option>Bangladesh</option>
                                        <option>Pakistan</option>
                                        <option>India</option>
                                        <option>Canada</option>
                                    </select>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="city" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">City <span className="text-danger-600">*</span> </label>
                                    <select className="form-control rounded-lg form-select" id="city">
                                        <option selected disabled>Select City</option>
                                        <option>Washington</option>
                                        <option>Dhaka</option>
                                        <option>Lahor</option>
                                        <option>Panjab</option>
                                    </select>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="state" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">State <span className="text-danger-600">*</span> </label>
                                    <select className="form-control rounded-lg form-select" id="state">
                                        <option selected disabled>Select State</option>
                                        <option>Washington</option>
                                        <option>Dhaka</option>
                                        <option>Lahor</option>
                                        <option>Panjab</option>
                                    </select>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="zip" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white"> Zip Code <span className="text-danger-600">*</span></label>
                                    <input type="text" className="form-control rounded-lg" id="zip" placeholder="Zip Code" />
                                </div>
                                <div className="mb-5 col-span-2">
                                    <label htmlFor="address" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white"> Address* <span className="text-danger-600">*</span></label>
                                    <input type="text" className="form-control rounded-lg" id="address" placeholder="Enter Your Address" />
                                </div>
                                <div className="col-span-2 flex items-center justify-center gap-3 mt-6">
                                    <button type="reset" className="border border-danger-600 hover:bg-danger-200 text-danger-600 text-base px-10 py-[11px] rounded-lg">
                                        Reset
                                    </button>
                                    <button type="submit" className="btn btn-primary border border-primary-600 text-base px-6 py-3 !rounded-lg">
                                        Save Change
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Company
