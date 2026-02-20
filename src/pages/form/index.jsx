import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Input From</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Input Form</li>
                    </ul>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="md:col-span-6 col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h6 className="text-lg font-semibold mb-0">Default Inputs</h6>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <label className="form-label">Basic Input</label>
                                        <input type="text" name="#0" className="form-control" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input with Placeholder</label>
                                        <input type="text" name="#0" className="form-control" placeholder="info@gmail.com" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input with Phone </label>
                                        <input type="text" className="form-control grow" placeholder="+1 (555) 253-08515" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input Date</label>
                                        <input type="date" name="#0" className="form-control" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input with Payment</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 border rounded-e-0 border-e-0 rounded-s-md border-neutral-200 dark:border-neutral-600">
                                                <img src="../assets/images/card/payment-icon.png" alt="image" />
                                            </span>
                                            <input type="text" className="form-control grow rounded-ss-none rounded-es-none" placeholder="Card Number" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* card end */}
                        <div className="card border-0 mt-6">
                            <div className="card-header">
                                <h6 className="text-lg font-semibold mb-0">Input Group</h6>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <label className="form-label">Input</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 border rounded-e-0 border-e-0 rounded-s-md border-neutral-200 dark:border-neutral-600">
                                                <iconify-icon icon="mynaui:envelope" />
                                            </span>
                                            <input type="text" className="form-control grow rounded-ss-none rounded-es-none" placeholder="info@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input</label>
                                        <div className="flex">
                                            <select className="form-select flex-grow-0 rounded-se-none rounded-ee-none border-e-0 w-auto">
                                                <option>US</option>
                                                <option>US</option>
                                                <option>US</option>
                                                <option>US</option>
                                                <option>US</option>
                                            </select>
                                            <input type="text" className="form-control grow rounded-ss-none rounded-es-none" placeholder="info@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input</label>
                                        <div className="flex">
                                            <input type="text" className="form-control grow rounded-se-none rounded-ee-none" placeholder="info@gmail.com" />
                                            <select className="form-select flex-grow-0 rounded-ss-none rounded-es-none border-s-0 w-auto">
                                                <option>US</option>
                                                <option>US</option>
                                                <option>US</option>
                                                <option>US</option>
                                                <option>US</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 border rounded-e-0 border-e-0 rounded-s-md border-neutral-200 dark:border-neutral-600">
                                                http://
                                            </span>
                                            <input type="text" className="form-control grow rounded-ss-none rounded-es-none" placeholder="www.random.com" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input</label>
                                        <div className="flex">
                                            <input type="text" className="form-control grow rounded-se-none rounded-ee-none" placeholder="www.random.com" />
                                            <button type="button" className="inline-flex items-center px-3 border rounded-s-0 border-s-0 rounded-e-md border-neutral-200 dark:border-neutral-600"><iconify-icon icon="lucide:copy" />Copy</button>
                                        </div>
                                        <p className="text-sm mt-2 mb-0">This is a hint text to help user.</p>
                                    </div>
                                </div>
                            </div>
                        </div>{/* card end */}
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h6 className="text-lg font-semibold mb-0">Input Sizing</h6>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <label className="form-label">Input Large</label>
                                        <input type="text" name="#0" className="form-control py-4" placeholder="info@gmail.com" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input Medium</label>
                                        <input type="text" name="#0" className="form-control" placeholder="info@gmail.com" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Input Small</label>
                                        <input type="text" name="#0" className="form-control py-2 text-sm" placeholder="info@gmail.com" />
                                    </div>
                                </div>
                            </div>
                        </div>{/* card end */}
                        <div className="card border-0 mt-6">
                            <div className="card-header">
                                <h6 className="text-lg font-semibold mb-0">File Input Sizing</h6>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <label className="form-label">Large Size File Input </label>
                                        <input className="border border-neutral-200 dark:border-neutral-600 w-full rounded-lg text-lg" name="#0" type="file" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Medium Size File Input </label>
                                        <input className="border border-neutral-200 dark:border-neutral-600 w-full rounded-lg" type="file" name="#0" />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="form-label">Small Size File Input </label>
                                        <input className="border border-neutral-200 dark:border-neutral-600 w-full rounded-lg text-xs" name="#0" type="file" />
                                    </div>
                                </div>
                            </div>
                        </div>{/* card end */}
                        <div className="card border-0 mt-6">
                            <div className="card-header">
                                <h6 className="text-lg font-semibold mb-0">Custom Forms</h6>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12">
                                        <label className="form-label">Readonly Input</label>
                                        <input type="text" name="#0" className="form-control" placeholder="info@gmail.com" defaultValue="info@gmail.com" readOnly />
                                    </div>
                                    <div className="col-span-12">
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
                                    <div className="col-span-12">
                                        <label className="form-label">Medium Size File Input </label>
                                        <input className="border border-neutral-200 dark:border-neutral-600 w-full rounded-lg" type="file" name="#0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="card border-0">
                            <div className="card-header">
                                <h5 className="text-lg font-semibold mb-0">Textarea input field</h5>
                            </div>
                            <div className="card-body">
                                <div className="grid grid-cols-12 gap-5">
                                    <div className="lg:col-span-4 col-span-12">
                                        <label className="form-label">Description</label>
                                        <textarea name="#0" className="form-control" rows={4} cols={50} placeholder="Enter a description..." defaultValue={""} />
                                    </div>
                                    <div className="lg:col-span-4 col-span-12">
                                        <label className="form-label">Description</label>
                                        <textarea name="#0" className="form-control" rows={4} cols={50} placeholder="Enter a description..." readOnly defaultValue={""} />
                                    </div>
                                    <div className="lg:col-span-4 col-span-12">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control border-danger-600" rows={4} cols={50} placeholder="Enter a description..." required defaultValue={""} />
                                        <div className="text-danger-600 text-sm">
                                            Please enter a message in the textarea.
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

export default Form
