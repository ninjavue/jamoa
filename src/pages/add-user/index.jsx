import React from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Add User</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Add User</li>
                    </ul>
                </div>
                <div className="card h-full p-0 rounded-xl border-0 overflow-hidden">
                    <div className="card-body p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 justify-center">
                            <div className="col-span-12 lg:col-span-10 xl:col-span-8 2xl:col-span-6 2xl:col-start-4">
                                <div className="card border border-neutral-200 dark:border-neutral-600">
                                    <div className="card-body">
                                        <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">Profile Image</h6>
                                        {/* Upload Image Start */}
                                        <div className="mb-6 mt-4">
                                            <div className="avatar-upload">
                                                <div className="avatar-edit absolute bottom-0 end-0 me-6 mt-4 z-[1] cursor-pointer ">
                                                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" hidden />
                                                    <label htmlFor="imageUpload" className="w-8 h-8 flex justify-center items-center bg-primary-50 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400 border border-primary-600 hover:bg-primary-100 text-lg rounded-full">
                                                        <iconify-icon icon="solar:camera-outline" className="icon" />
                                                    </label>
                                                </div>
                                                <div className="avatar-preview">
                                                    <div id="imagePreview"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Upload Image End */}
                                        <form action="#">
                                            <div className="mb-5">
                                                <label htmlFor="name" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Full Name <span className="text-danger-600">*</span></label>
                                                <input type="text" className="form-control rounded-lg" id="name" placeholder="Enter Full Name" />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="email" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Email <span className="text-danger-600">*</span></label>
                                                <input type="email" className="form-control rounded-lg" id="email" placeholder="Enter email address" />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="number" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Phone</label>
                                                <input type="email" className="form-control rounded-lg" id="number" placeholder="Enter phone number" />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="depart" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Department <span className="text-danger-600">*</span> </label>
                                                <select className="form-control rounded-lg form-select" id="depart">
                                                    <option>Enter Event Title </option>
                                                    <option>Enter Event Title One </option>
                                                    <option>Enter Event Title Two</option>
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="desig" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Designation <span className="text-danger-600">*</span> </label>
                                                <select className="form-control rounded-lg form-select" id="desig">
                                                    <option>Enter Designation Title </option>
                                                    <option>Enter Designation Title One </option>
                                                    <option>Enter Designation Title Two</option>
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="desc" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Description</label>
                                                <textarea name="#0" className="form-control rounded-lg" id="desc" placeholder="Write description..." defaultValue={""} />
                                            </div>
                                            <div className="flex items-center justify-center gap-3">
                                                <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-base px-14 py-[11px] rounded-lg">
                                                    Cancel
                                                </button>
                                                <button type="submit" className="btn btn-primary border border-primary-600 text-base px-14 py-3 rounded-lg">
                                                    Save
                                                </button>
                                            </div>
                                        </form>
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

export default AddUser
