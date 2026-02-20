import React from 'react'
import { Link } from 'react-router-dom'

const Calendar = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Calendar</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Calendar</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
                        <div className="card h-full p-0 border-0">
                            <div className="card-body p-6">
                                <button type="button" data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="btn btn-primary text-sm btn-sm px-3 py-3 w-full rounded-lg flex items-center gap-2 mb-8">
                                    <iconify-icon icon="fa6-regular:square-plus" className="icon text-lg line-height-1" />
                                    Add Currency
                                </button>
                                <div className="mt-8">
                                    <div className="event-item flex items-center justify-between gap-4 pb-4 mb-4 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className>
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-3 h-3 bg-warning-600 rounded-full font-medium" />
                                                <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mt-1.5">Design Conference</span>
                                        </div>
                                        <div className="dropdown">
                                            <button data-dropdown-toggle="dropdownDotsZero" className="inline-flex items-center p-2 text-xl font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                                <i className="ri-more-2-fill" />
                                            </button>
                                            <div id="dropdownDotsZero" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <button data-modal-target="view-popup-modal" data-modal-toggle="view-popup-modal" type="submit" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-eye-line" /></span>
                                                            View
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="edit-popup-modal" data-modal-toggle="edit-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-edit-line" /></span>
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="delete-popup-modal" data-modal-toggle="delete-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-delete-bin-5-line" /></span>
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-item flex items-center justify-between gap-4 pb-4 mb-4 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className>
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-3 h-3 bg-success-600 rounded-full font-medium" />
                                                <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mt-1.5">Weekend Festival</span>
                                        </div>
                                        <div className="dropdown">
                                            <button data-dropdown-toggle="dropdownDotsOne" className="inline-flex items-center p-2 text-xl font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                                <i className="ri-more-2-fill" />
                                            </button>
                                            <div id="dropdownDotsOne" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <button data-modal-target="view-popup-modal" data-modal-toggle="view-popup-modal" type="submit" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-eye-line" /></span>
                                                            View
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="edit-popup-modal" data-modal-toggle="edit-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-edit-line" /></span>
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="delete-popup-modal" data-modal-toggle="delete-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-delete-bin-5-line" /></span>
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-item flex items-center justify-between gap-4 pb-4 mb-4 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className>
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-3 h-3 bg-info-600 rounded-full font-medium" />
                                                <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mt-1.5">Design Conference</span>
                                        </div>
                                        <div className="dropdown">
                                            <button data-dropdown-toggle="dropdownDotsTwo" className="inline-flex items-center p-2 text-xl font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                                <i className="ri-more-2-fill" />
                                            </button>
                                            <div id="dropdownDotsTwo" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <button data-modal-target="view-popup-modal" data-modal-toggle="view-popup-modal" type="submit" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-eye-line" /></span>
                                                            View
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="edit-popup-modal" data-modal-toggle="edit-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-edit-line" /></span>
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="delete-popup-modal" data-modal-toggle="delete-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-delete-bin-5-line" /></span>
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-item flex items-center justify-between gap-4 pb-4 mb-4 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className>
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-3 h-3 bg-warning-600 rounded-full font-medium" />
                                                <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mt-1.5">Ultra Europe 2019</span>
                                        </div>
                                        <div className="dropdown">
                                            <button data-dropdown-toggle="dropdownDotsThree" className="inline-flex items-center p-2 text-xl font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                                <i className="ri-more-2-fill" />
                                            </button>
                                            <div id="dropdownDotsThree" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <button data-modal-target="view-popup-modal" data-modal-toggle="view-popup-modal" type="submit" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-eye-line" /></span>
                                                            View
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="edit-popup-modal" data-modal-toggle="edit-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-edit-line" /></span>
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="delete-popup-modal" data-modal-toggle="delete-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-delete-bin-5-line" /></span>
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-item flex items-center justify-between gap-4 pb-4 mb-4 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className>
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-3 h-3 bg-warning-600 rounded-full font-medium" />
                                                <span className="text-secondary-light">Today, 10:30 PM - 02:30 AM</span>
                                            </div>
                                            <span className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mt-1.5">Design Conference</span>
                                        </div>
                                        <div className="dropdown">
                                            <button data-dropdown-toggle="dropdownDotsFour" className="inline-flex items-center p-2 text-xl font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                                <i className="ri-more-2-fill" />
                                            </button>
                                            <div id="dropdownDotsFour" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <button data-modal-target="view-popup-modal" data-modal-toggle="view-popup-modal" type="submit" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-eye-line" /></span>
                                                            View
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="edit-popup-modal" data-modal-toggle="edit-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-edit-line" /></span>
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button data-modal-target="delete-popup-modal" data-modal-toggle="delete-popup-modal" type="button" className="w-full text-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2">
                                                            <span className="text-lg flex"><i className="ri-delete-bin-5-line" /></span>
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
                        <div className="card h-full p-0 border-0">
                            <div className="card-body p-6">
                                <div id="wrap">
                                    <div id="calendar" />
                                    <div style={{ clear: 'both' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Add Event */}
                <div id="popup-modal" tabIndex={-1} className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="rounded-2xl bg-white dark:bg-neutral-700 max-w-[800px] w-full">
                        <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600 flex items-center justify-between">
                            <h1 className="text-xl">Add New Event</h1>
                            <button data-modal-hide="popup-modal" type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6">
                            <form action="#">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    <div className="col-span-12 mb-5">
                                        <label htmlFor="title" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Event Title : </label>
                                        <input type="text" id="title" className="form-control bg-white dark:bg-neutral-700 rounded-lg" placeholder="Enter Event Title " />
                                    </div>
                                    <div className="col-span-12 md:col-span-6 mb-5">
                                        <label htmlFor="startDate" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Start Date</label>
                                        <div className=" relative">
                                            <input className="form-control rounded-lg bg-white dark:bg-neutral-700" id="startDate" type="text" placeholder="03/12/2024, 10:30 AM" />
                                            <span className="absolute end-0 top-1/2 -translate-y-1/2 me-3 line-height-1"><iconify-icon icon="solar:calendar-linear" className="icon text-lg" /></span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 mb-5">
                                        <label htmlFor="endDate" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">End Date </label>
                                        <div className=" relative">
                                            <input className="form-control rounded-lg bg-white dark:bg-neutral-700" id="endDate" type="text" placeholder="03/12/2024, 2:30 PM" />
                                            <span className="absolute end-0 top-1/2 -translate-y-1/2 me-3 line-height-1"><iconify-icon icon="solar:calendar-linear" className="icon text-lg" /></span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <label htmlFor="endDate" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Label </label>
                                        <div className="flex items-center flex-wrap gap-7">
                                            <div className="form-check checked-success flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="Personal" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Personal">
                                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                                    Personal
                                                </label>
                                            </div>
                                            <div className="form-check checked-primary flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="Business" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Business">
                                                    <span className="w-2 h-2 bg-primary-600 rounded-full" />
                                                    Business
                                                </label>
                                            </div>
                                            <div className="form-check checked-warning flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="Family" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Family">
                                                    <span className="w-2 h-2 bg-warning-600 rounded-full" />
                                                    Family
                                                </label>
                                            </div>
                                            <div className="form-check checked-secondary flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="Important" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Important">
                                                    <span className="w-2 h-2 bg-purple-600 rounded-full" />
                                                    Important
                                                </label>
                                            </div>
                                            <div className="form-check checked-danger flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="Holiday" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="Holiday">
                                                    <span className="w-2 h-2 bg-danger-600 rounded-full" />
                                                    Holiday
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <label htmlFor="desc" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Description</label>
                                        <textarea className="form-control bg-white dark:bg-neutral-700" id="desc" rows={4} cols={50} placeholder="Write some text" defaultValue={""} />
                                    </div>
                                    <div className="col-span-12">
                                        <div className="flex items-center justify-center gap-3 mt-6">
                                            <button type="reset" data-modal-hide="edit-popup-modal" className="border border-danger-600 hover:bg-danger-100 text-danger-600 text-base px-10 py-[11px] rounded-lg">
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn btn-primary border border-primary-600 text-base px-6 py-3 rounded-lg">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* View Details Event */}
                <div id="view-popup-modal" tabIndex={-1} className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="rounded-2xl bg-white dark:bg-neutral-700 max-w-[600px] w-full">
                        <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600 flex items-center justify-between">
                            <h1 className="text-xl">View Details</h1>
                            <button data-modal-hide="view-popup-modal" type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="mb-3">
                                <span className="text-secondary-light txt-sm font-medium">Title</span>
                                <h6 className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mb-0 mt-6">Design Conference</h6>
                            </div>
                            <div className="mb-3">
                                <span className="text-secondary-light txt-sm font-medium">Start Date</span>
                                <h6 className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mb-0 mt-6">25 Jan 2024, 10:30AM</h6>
                            </div>
                            <div className="mb-3">
                                <span className="text-secondary-light txt-sm font-medium">End Date</span>
                                <h6 className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mb-0 mt-6">25 Jan 2024, 2:30AM</h6>
                            </div>
                            <div className="mb-3">
                                <span className="text-secondary-light txt-sm font-medium">Description</span>
                                <h6 className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mb-0 mt-6">N/A</h6>
                            </div>
                            <div className="mb-3">
                                <span className="text-secondary-light txt-sm font-medium">Label</span>
                                <h6 className="text-neutral-600 dark:text-neutral-200 font-semibold text-base mb-0 mt-6 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                    Business
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Edit Modal Event */}
                <div id="edit-popup-modal" tabIndex={-1} className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="rounded-2xl bg-white dark:bg-neutral-700 max-w-[800px] w-full">
                        <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600 flex items-center justify-between">
                            <h1 className="text-xl">Edit Event</h1>
                            <button data-modal-hide="edit-popup-modal" type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6">
                            <form action="#">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    <div className="col-span-12 mb-5">
                                        <label className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Event Title : </label>
                                        <input type="text" className="form-control bg-white dark:bg-neutral-700 rounded-lg" placeholder="Enter Event Title " />
                                    </div>
                                    <div className="col-span-12 md:col-span-6 mb-5">
                                        <label htmlFor="editstartDate" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Start Date</label>
                                        <div className=" relative">
                                            <input className="form-control rounded-lg bg-white dark:bg-neutral-700" id="editstartDate" type="text" placeholder="03/12/2024, 10:30 AM" />
                                            <span className="absolute end-0 top-1/2 -translate-y-1/2 me-3 line-height-1"><iconify-icon icon="solar:calendar-linear" className="icon text-lg" /></span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 mb-5">
                                        <label htmlFor="editendDate" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">End Date </label>
                                        <div className=" relative">
                                            <input className="form-control rounded-lg bg-white dark:bg-neutral-700" id="editendDate" type="text" placeholder="03/12/2024, 2:30 PM" />
                                            <span className="absolute end-0 top-1/2 -translate-y-1/2 me-3 line-height-1"><iconify-icon icon="solar:calendar-linear" className="icon text-lg" /></span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <label className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Label </label>
                                        <div className="flex items-center flex-wrap gap-7">
                                            <div className="form-check checked-success flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="editPersonal" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="editPersonal">
                                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                                    Personal
                                                </label>
                                            </div>
                                            <div className="form-check checked-primary flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="editBusiness" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="editBusiness">
                                                    <span className="w-2 h-2 bg-primary-600 rounded-full" />
                                                    Business
                                                </label>
                                            </div>
                                            <div className="form-check checked-warning flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="editFamily" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="editFamily">
                                                    <span className="w-2 h-2 bg-warning-600 rounded-full" />
                                                    Family
                                                </label>
                                            </div>
                                            <div className="form-check checked-secondary flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="editImportant" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="editImportant">
                                                    <span className="w-2 h-2 bg-purple-600 rounded-full" />
                                                    Important
                                                </label>
                                            </div>
                                            <div className="form-check checked-danger flex items-center gap-2">
                                                <input className="form-check-input rounded-full" type="radio" name="label" id="editHoliday" />
                                                <label className="form-check-label line-height-1 font-medium text-secondary-light text-sm flex items-center gap-1" htmlFor="editHoliday">
                                                    <span className="w-2 h-2 bg-danger-600 rounded-full" />
                                                    Holiday
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mb-5">
                                        <label htmlFor="desc" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Description</label>
                                        <textarea className="form-control bg-white dark:bg-neutral-700" id="editdesc" rows={4} cols={50} placeholder="Write some text" defaultValue={""} />
                                    </div>
                                    <div className="col-span-12">
                                        <div className="flex items-center justify-center gap-3 mt-6">
                                            <button type="reset" data-modal-hide="edit-popup-modal" className="border border-danger-600 hover:bg-danger-100 text-danger-600 text-base px-10 py-[11px] rounded-lg">
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn btn-primary border border-primary-600 text-base px-6 py-3 rounded-lg">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Delete Modal Event */}
                <div id="delete-popup-modal" tabIndex={-1} className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="rounded-2xl bg-white dark:bg-neutral-700 max-w-[400px] w-full">
                        <div className="p-6 text-center">
                            <span className="mb-4 text-[40px] line-height-1 text-danger-600">
                                <iconify-icon icon="fluent:delete-24-regular" className="menu-icon" />
                            </span>
                            <h6 className="text-lg font-semibold text-neutral-600 dark:text-neutral-200 mb-0">Are your sure you want to delete this event</h6>
                            <div className="flex items-center justify-center gap-3 mt-6">
                                <button type="reset" data-modal-hide="delete-popup-modal" className="w-1/2 border border-danger-600 hover:bg-danger-100 text-danger-600 text-base px-10 py-[11px] rounded-lg">
                                    Cancel
                                </button>
                                <button type="button" className="w-1/2 btn btn-primary border border-primary-600 text-base px-6 py-3 rounded-lg">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calendar
