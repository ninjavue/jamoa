import React from 'react';
import { Link } from 'react-router-dom';

const FormLayout = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Input Layout</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Input Layout</li>
                    </ul>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="md:col-span-6 col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h5 className="text-lg font-semibold mb-0">Vertical Input Form</h5>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <label className="form-label">First Name</label>
                                        <input type="text" name="#0" className="form-control" placeholder="Enter First Name" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" name="#0" className="form-control" placeholder="Enter Last Name" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Email</label>
                                        <input type="email" name="#0" className="form-control" placeholder="Enter Email" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Phone</label>
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
                                    <div className="col-span-12">
                                        <label className="form-label">Password</label>
                                        <input type="password" name="#0" className="form-control" placeholder="*******" />
                                    </div>
                                    <div className="col-span-12">
                                        <button type="submit" className="btn btn-primary-600">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h5 className="text-lg font-semibold mb-0">Input Form With Icons</h5>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <label className="form-label">First Name</label>
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="f7:person" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="Enter First Name" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Last Name</label>
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="f7:person" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="Enter Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Email</label>
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="mage:email" />
                                            </span>
                                            <input type="email" name="#0" className="form-control" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Phone</label>
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="solar:phone-calling-linear" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="+1 (555) 000-0000" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Password</label>
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="solar:lock-password-outline" />
                                            </span>
                                            <input type="password" name="#0" className="form-control" placeholder="*******" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <button type="submit" className="btn btn-primary-600">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h5 className="text-lg font-semibold mb-0">Horizontal Input Form</h5>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">First Name</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <input type="text" name="#0" className="form-control" placeholder="Enter First Name" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">Last Name</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <input type="text" name="#0" className="form-control" placeholder="Enter Last Name" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">Email</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <input type="email" name="#0" className="form-control" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">Phone</label>
                                    <div className="sm:col-span-10 col-span-12">
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
                                </div>
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">Password</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <input type="password" name="#0" className="form-control" placeholder="*******" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary-600">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h5 className="text-lg font-semibold mb-0">Horizontal Input Form With Icons</h5>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">First Name</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="f7:person" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="Enter First Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">Last Name</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="f7:person" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="Enter Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">Email</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="mage:email" />
                                            </span>
                                            <input type="email" name="#0" className="form-control" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">Phone</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="solar:phone-calling-linear" />
                                            </span>
                                            <input type="text" name="#0" className="form-control" placeholder="+1 (555) 000-0000" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-y-4 items-center mb-6">
                                    <label className="form-label mb-0 sm:col-span-2 col-span-12">Password</label>
                                    <div className="sm:col-span-10 col-span-12">
                                        <div className="icon-field">
                                            <span className="icon">
                                                <iconify-icon icon="solar:lock-password-outline" />
                                            </span>
                                            <input type="password" name="#0" className="form-control" placeholder="*******" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary-600">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default FormLayout;