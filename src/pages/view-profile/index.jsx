import React from 'react'
import { Link } from 'react-router-dom'

const ViewProfile = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">View Profile</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">View Profile</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-4">
                        <div className="user-grid-card relative border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden bg-white dark:bg-neutral-700 h-full">
                            <img src="../assets/images/user-grid/user-grid-bg1.png" alt className="w-full object-fit-cover" />
                            <div className="pb-6 ms-6 mb-6 me-6 -mt-[100px]">
                                <div className="text-center border-b border-neutral-200 dark:border-neutral-600">
                                    <img src="../assets/images/user-grid/user-grid-img14.png" alt className="border br-white border-width-2-px w-200-px h-[200px] rounded-full object-fit-cover mx-auto" />
                                    <h6 className="mb-0 mt-4">Jacob Jones</h6>
                                    <span className="text-secondary-light mb-4">ifrandom@gmail.com</span>
                                </div>
                                <div className="mt-6">
                                    <h6 className="text-xl mb-4">Personal Info</h6>
                                    <ul>
                                        <li className="flex items-center gap-1 mb-3">
                                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">Full Name</span>
                                            <span className="w-[70%] text-secondary-light font-medium">: Will Jonto</span>
                                        </li>
                                        <li className="flex items-center gap-1 mb-3">
                                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Email</span>
                                            <span className="w-[70%] text-secondary-light font-medium">: willjontoax@gmail.com</span>
                                        </li>
                                        <li className="flex items-center gap-1 mb-3">
                                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Phone Number</span>
                                            <span className="w-[70%] text-secondary-light font-medium">: (1) 2536 2561 2365</span>
                                        </li>
                                        <li className="flex items-center gap-1 mb-3">
                                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Department</span>
                                            <span className="w-[70%] text-secondary-light font-medium">: Design</span>
                                        </li>
                                        <li className="flex items-center gap-1 mb-3">
                                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Designation</span>
                                            <span className="w-[70%] text-secondary-light font-medium">: UI UX Designer</span>
                                        </li>
                                        <li className="flex items-center gap-1 mb-3">
                                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Languages</span>
                                            <span className="w-[70%] text-secondary-light font-medium">: English</span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Bio</span>
                                            <span className="w-[70%] text-secondary-light font-medium">: Lorem Ipsum&nbsp;is simply dummy text of the       printing and typesetting industry.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="card h-full border-0">
                            <div className="card-body p-6">
                                <ul className="tab-style-gradient flex flex-wrap text-sm font-medium text-center mb-5" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                    <li className role="presentation">
                                        <button className="py-2.5 px-4 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600" id="edit-profile-tab" data-tabs-target="#edit-profile" type="button" role="tab" aria-controls="edit-profile" aria-selected="false">
                                            Edit Profile
                                        </button>
                                    </li>
                                    <li className role="presentation">
                                        <button className="py-2.5 px-4 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="change-password-tab" data-tabs-target="#change-password" type="button" role="tab" aria-controls="change-password" aria-selected="false">
                                            Change Password
                                        </button>
                                    </li>
                                    <li className role="presentation">
                                        <button className="py-2.5 px-4 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="notification-password-tab" data-tabs-target="#notification-password" type="button" role="tab" aria-controls="notification-password" aria-selected="false">
                                            Notification Password
                                        </button>
                                    </li>
                                </ul>
                                <div id="default-tab-content">
                                    <div className="hidden" id="edit-profile" role="tabpanel" aria-labelledby="edit-profile-tab">
                                        <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">Profile Image</h6>
                                        {/* Upload Image Start */}
                                        <div className="mb-6 mt-4">
                                            <div className="avatar-upload">
                                                <div className="avatar-edit absolute bottom-0 end-0 me-6 mt-4 z-[1] cursor-pointer">
                                                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" hidden />
                                                    <label htmlFor="imageUpload" className="w-8 h-8 flex justify-center items-center bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400 border border-primary-600 hover:bg-primary-100 text-lg rounded-full">
                                                        <iconify-icon icon="solar:camera-outline" className="icon" />
                                                    </label>
                                                </div>
                                                <div className="avatar-preview">
                                                    <div id="imagePreview">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Upload Image End */}
                                        <form action="#">
                                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
                                                <div className="col-span-12 sm:col-span-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="name" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Full Name <span className="text-danger-600">*</span></label>
                                                        <input type="text" className="form-control rounded-lg" id="name" placeholder="Enter Full Name" />
                                                    </div>
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="email" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Email <span className="text-danger-600">*</span></label>
                                                        <input type="email" className="form-control rounded-lg" id="email" placeholder="Enter email address" />
                                                    </div>
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="number" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Phone</label>
                                                        <input type="email" className="form-control rounded-lg" id="number" placeholder="Enter phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="depart" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Department <span className="text-danger-600">*</span> </label>
                                                        <select className="form-control rounded-lg form-select" id="depart">
                                                            <option>Enter Event Title </option>
                                                            <option>Enter Event Title One </option>
                                                            <option>Enter Event Title Two</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="desig" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Designation <span className="text-danger-600">*</span> </label>
                                                        <select className="form-control rounded-lg form-select" id="desig">
                                                            <option>Enter Designation Title </option>
                                                            <option>Enter Designation Title One </option>
                                                            <option>Enter Designation Title Two</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 sm:col-span-6">
                                                    <div className="mb-5">
                                                        <label htmlFor="Language" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Language <span className="text-danger-600">*</span> </label>
                                                        <select className="form-control rounded-lg form-select" id="Language">
                                                            <option> English</option>
                                                            <option> Bangla </option>
                                                            <option> Hindi</option>
                                                            <option> Arabic</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-span-12">
                                                    <div className="mb-5">
                                                        <label htmlFor="desc" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Description</label>
                                                        <textarea name="#0" className="form-control rounded-lg" id="desc" placeholder="Write description..." defaultValue={""} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-3">
                                                <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-base px-14 py-[11px] rounded-lg">
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary border border-primary-600 text-base px-14 py-3 rounded-lg">
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="hidden" id="change-password" role="tabpanel" aria-labelledby="change-password-tab">
                                        <div className="mb-5">
                                            <label htmlFor="your-password" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">New Password <span className="text-danger-600">*</span></label>
                                            <div className="relative">
                                                <input type="password" className="form-control rounded-lg" id="your-password" placeholder="Enter New Password*" />
                                                <span className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light" data-toggle="#your-password" />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="confirm-password" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Confirmed Password <span className="text-danger-600">*</span></label>
                                            <div className="relative">
                                                <input type="password" className="form-control rounded-lg" id="confirm-password" placeholder="Confirm Password*" />
                                                <span className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light" data-toggle="#confirm-password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden" id="notification-password" role="tabpanel" aria-labelledby="notification-password-tab">
                                        <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                            <label htmlFor="companzNew" className="absolute w-full h-full start-0 top-0" />
                                            <div className="flex items-center gap-3 justify-between">
                                                <span className="form-check-label line-height-1 font-medium text-secondary-light">Company News</span>
                                                <input className="form-check-input" type="checkbox" role="switch" id="companzNew" />
                                            </div>
                                        </div>
                                        <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                            <label htmlFor="pushNotifcation" className="absolute w-full h-full start-0 top-0" />
                                            <div className="flex items-center gap-3 justify-between">
                                                <span className="form-check-label line-height-1 font-medium text-secondary-light">Push Notification</span>
                                                <input className="form-check-input" type="checkbox" role="switch" id="pushNotifcation" defaultChecked />
                                            </div>
                                        </div>
                                        <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                            <label htmlFor="weeklyLetters" className="absolute w-full h-full start-0 top-0" />
                                            <div className="flex items-center gap-3 justify-between">
                                                <span className="form-check-label line-height-1 font-medium text-secondary-light">Weekly News Letters</span>
                                                <input className="form-check-input" type="checkbox" role="switch" id="weeklyLetters" defaultChecked />
                                            </div>
                                        </div>
                                        <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                            <label htmlFor="meetUp" className="absolute w-full h-full start-0 top-0" />
                                            <div className="flex items-center gap-3 justify-between">
                                                <span className="form-check-label line-height-1 font-medium text-secondary-light">Meetups Near you</span>
                                                <input className="form-check-input" type="checkbox" role="switch" id="meetUp" />
                                            </div>
                                        </div>
                                        <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                            <label htmlFor="orderNotification" className="absolute w-full h-full start-0 top-0" />
                                            <div className="flex items-center gap-3 justify-between">
                                                <span className="form-check-label line-height-1 font-medium text-secondary-light">Orders Notifications</span>
                                                <input className="form-check-input" type="checkbox" role="switch" id="orderNotification" defaultChecked />
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

export default ViewProfile
