import React from 'react'
import { Link } from 'react-router-dom'

const FormValidation = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Form Validation</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Form Validation</li>
                    </ul>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h5 className="text-lg font-semibold mb-0">Input Custom Styles</h5>
                            </div>
                            <div className="card-body">
                                <form className="grid grid-cols-12 gap-4">
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Input with Placeholder</label>
                                        <input type="text" name="#0" className="form-control" defaultValue="info@gmail.com" required />
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Medium Size File Input </label>
                                        <input className="border border-neutral-200 dark:border-neutral-600 w-full rounded-lg" type="file" name="#0" />
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Input with Icon</label>
                                        <input type="email" name="#0" className="form-control" placeholder="Enter Email" required />
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Input with Payment </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 border rounded-e-0 border-e-0 rounded-s-md border-neutral-200 dark:border-neutral-600">
                                                <img src="../assets/images/card/payment-icon.png" alt="image" />
                                            </span>
                                            <input type="text" className="form-control grow rounded-ss-none rounded-es-none" placeholder="Card Number" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Input with Phone </label>
                                        <div className="flex">
                                            <select className="form-select flex-grow-0 rounded-se-none rounded-ee-none border-e-0 w-auto">
                                                <option>US</option>
                                                <option>US</option>
                                                <option>US</option>
                                                <option>US</option>
                                            </select>
                                            <input type="text" name="#0" className="form-control grow rounded-ss-none rounded-es-none" placeholder="+1 (555) 000-0000" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Input</label>
                                        <div className="flex">
                                            <input type="text" className="form-control grow rounded-se-none rounded-ee-none" placeholder="www.random.com" />
                                            <button type="button" className="inline-flex items-center px-3 border rounded-s-0 border-s-0 rounded-e-md border-neutral-200 dark:border-neutral-600"><iconify-icon icon="lucide:copy" />Copy</button>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <button className="btn btn-primary-600" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h5 className="text-lg font-semibold mb-0">Input Status</h5>
                            </div>
                            <div className="card-body">
                                <form className="grid grid-cols-12 gap-4">
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">First Name</label>
                                        <div className="icon-field has-validation">
                                            <span className="icon">
                                                <iconify-icon icon="f7:person" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="Enter First Name" required />
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Last Name</label>
                                        <div className="icon-field has-validation">
                                            <span className="icon">
                                                <iconify-icon icon="f7:person" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="Enter Last Name" required />
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Email</label>
                                        <div className="icon-field has-validation">
                                            <span className="icon">
                                                <iconify-icon icon="mage:email" />
                                            </span>
                                            <input type="email" name="#0" className="form-control" placeholder="Enter Email" required />
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Phone</label>
                                        <div className="icon-field has-validation">
                                            <span className="icon">
                                                <iconify-icon icon="solar:phone-calling-linear" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="+1 (555) 000-0000" required />
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Password</label>
                                        <div className="icon-field has-validation">
                                            <span className="icon">
                                                <iconify-icon icon="solar:lock-password-outline" />
                                            </span>
                                            <input type="password" name="#0" className="form-control" placeholder="*******" required />
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label className="form-label">Confirm Password</label>
                                        <div className="icon-field has-validation">
                                            <span className="icon">
                                                <iconify-icon icon="solar:lock-password-outline" />
                                            </span>
                                            <input type="password" name="#0" className="form-control" placeholder="*******" required />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <button className="btn btn-primary-600" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormValidation
