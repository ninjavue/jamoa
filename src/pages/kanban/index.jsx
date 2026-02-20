import React from 'react'
import { Link } from 'react-router-dom'

const Kanban = () => {
    return (
        <>
            <div>
                <div className="dashboard-main-body">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                        <h6 className="font-semibold mb-0 dark:text-white">Kanban</h6>
                        <ul className="flex items-center gap-[6px]">
                            <li className="font-medium">
                                <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                    <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                    Dashboard
                                </Link>
                            </li>
                            <li className="dark:text-white">-</li>
                            <li className="font-medium dark:text-white">Kanban</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="overflow-x-auto scroll-sm pb-8">
                                <div className="kanban-wrapper min-w-[1560px]">
                                    <div className="flex items-start gap-6" id="sortable-wrapper">
                                        <div className="w-[25%] kanban-item rounded-xl progress-card">
                                            <div className="card p-0 rounded-xl overflow-hidden shadow-none border-0">
                                                <div className="card-body p-0 pb-6">
                                                    <div className="flex items-center gap-2 justify-between ps-6 pt-6 pe-6">
                                                        <h6 className="text-lg font-semibold mb-0">In Progress</h6>
                                                        <div className="flex items-center gap-3 justify-between mb-0">
                                                            <button type="button" className="text-2xl hover-text-primary add-task-button flex" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                <iconify-icon icon="ph:plus-circle" className="icon" />
                                                            </button>
                                                            <div className="dropdown">
                                                                <button data-dropdown-toggle="dropdown1" className="text-neutral-800 flex text-lg dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill" />
                                                                </button>
                                                                <div id="dropdown1" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                                                    <ul className="p-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <button type="submit" className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2 duplicate-button">
                                                                                <iconify-icon className="text-xl" icon="humbleicons:duplicate" />
                                                                                Duplicate
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button type="button" className="w-full text-start px-4 py-2.5 hover:bg-danger-100 dark:hover:bg-danger-600/25 rounded hover:text-danger-500 dark:hover:text-danger-600 flex items-center gap-2 delete-button">
                                                                                <iconify-icon className="text-xl" icon="mingcute:delete-2-line" />
                                                                                Delete
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="connectedSortable ps-6 pt-6 pe-6" id="sortable1">
                                                        <div className="kanban-card bg-neutral-50 dark:bg-dark-3 p-4 rounded-lg mb-6" id="kanban-1">
                                                            <div className="rounded-lg mb-3 max-h-[350px] overflow-hidden">
                                                                <img src="../assets/images/kanban/kanban-1.png" alt className="w-full h-full object-fit-cover" />
                                                            </div>
                                                            <h6 className="kanban-title text-lg font-semibold mb-2">Creating a new website</h6>
                                                            <p className="kanban-desc text-secondary-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                            <button type="button" className="btn text-primary-600 border rounded border-primary-600 bg-hover-primary-600 text-hover-white flex items-center gap-2 my-3">
                                                                <iconify-icon icon="lucide:tag" className="icon" />
                                                                <span className="kanban-tag font-semibold">UI Design</span>
                                                            </button>
                                                            <div className="mt-3 flex items-center justify-between gap-2.5">
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <iconify-icon icon="solar:calendar-outline" className="text-neutral-600 dark:text-neutral-200" />
                                                                    <span className="start-date text-secondary-light">25 Aug 2024</span>
                                                                </div>
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <button type="button" className="card-edit-button text-success-600" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                        <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                    <button type="button" className="card-delete-button text-danger-600">
                                                                        <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="kanban-card bg-neutral-50 dark:bg-dark-3 p-4 rounded-lg mb-6" id="kanban-2">
                                                            <div className="rounded-lg mb-3 max-h-[350px] overflow-hidden">
                                                                <img src="../assets/images/kanban/kanban-2.png" alt className="w-full h-full object-fit-cover" />
                                                            </div>
                                                            <h6 className="kanban-title text-lg font-semibold mb-2">Creating a new website</h6>
                                                            <p className="kanban-desc text-secondary-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                            <button type="button" className="btn text-primary-600 border rounded border-primary-600 bg-hover-primary-600 text-hover-white flex items-center gap-2 my-3">
                                                                <iconify-icon icon="lucide:tag" className="icon" />
                                                                <span className="kanban-tag font-semibold">UI Design</span>
                                                            </button>
                                                            <div className="mt-3 flex items-center justify-between gap-2.5">
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <iconify-icon icon="solar:calendar-outline" className="text-neutral-600 dark:text-neutral-200" />
                                                                    <span className="start-date text-secondary-light">25 Aug 2024</span>
                                                                </div>
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <button type="button" className="card-edit-button text-success-600" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                        <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                    <button type="button" className="card-delete-button text-danger-600">
                                                                        <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Add Task Button */}
                                                    <button type="button" className="flex items-center gap-2 font-medium w-full text-primary-600 justify-center text-hover-primary-800 add-task-button" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                        <iconify-icon icon="ph:plus-circle" className="icon text-xl" />
                                                        Add Task
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[25%] kanban-item rounded-xl pending-card">
                                            <div className="card p-0 rounded-xl overflow-hidden shadow-none border-0">
                                                <div className="card-body p-0 pb-6">
                                                    <div className="flex items-center gap-2 justify-between ps-6 pt-6 pe-6">
                                                        <h6 className="text-lg font-semibold mb-0">Pending</h6>
                                                        <div className="flex items-center gap-3 justify-between mb-0">
                                                            <button type="button" className="text-2xl hover-text-primary add-task-button flex" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                <iconify-icon icon="ph:plus-circle" className="icon" />
                                                            </button>
                                                            <div className="dropdown">
                                                                <button data-dropdown-toggle="dropdown2" className="text-neutral-800 flex text-lg dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill" />
                                                                </button>
                                                                <div id="dropdown2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                                                    <ul className="p-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <button type="submit" className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2">
                                                                                <iconify-icon className="text-xl" icon="humbleicons:duplicate" />
                                                                                Duplicate
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button type="button" className="w-full text-start px-4 py-2.5 hover:bg-danger-100 dark:hover:bg-danger-600/25 rounded hover:text-danger-500 dark:hover:text-danger-600 flex items-center gap-2">
                                                                                <iconify-icon className="text-xl" icon="mingcute:delete-2-line" />
                                                                                Delete
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="connectedSortable ps-6 pt-6 pe-6" id="sortable2">
                                                        <div className="kanban-card bg-neutral-50 dark:bg-dark-3 p-4 rounded-lg mb-6" id="kanban-3">
                                                            <h6 className="kanban-title text-lg font-semibold mb-2">Creating a new website</h6>
                                                            <p className="kanban-desc text-secondary-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                            <button type="button" className="btn text-primary-600 border rounded border-primary-600 bg-hover-primary-600 text-hover-white flex items-center gap-2 my-3">
                                                                <iconify-icon icon="lucide:tag" className="icon" />
                                                                <span className="kanban-tag font-semibold">UI Design</span>
                                                            </button>
                                                            <div className="mt-3 flex items-center justify-between gap-2.5">
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <iconify-icon icon="solar:calendar-outline" className="text-neutral-600 dark:text-neutral-200" />
                                                                    <span className="start-date text-secondary-light">25 Aug 2024</span>
                                                                </div>
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <button type="button" className="card-edit-button text-success-600" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                        <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                    <button type="button" className="card-delete-button text-danger-600">
                                                                        <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="kanban-card bg-neutral-50 dark:bg-dark-3 p-4 rounded-lg mb-6" id="kanban-4">
                                                            <div className="rounded-lg mb-3 max-h-[350px] overflow-hidden">
                                                                <img src="../assets/images/kanban/kanban-2.png" alt className="w-full h-full object-fit-cover" />
                                                            </div>
                                                            <h6 className="kanban-title text-lg font-semibold mb-2">Creating a new website</h6>
                                                            <p className="kanban-desc text-secondary-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                            <button type="button" className="btn text-primary-600 border rounded border-primary-600 bg-hover-primary-600 text-hover-white flex items-center gap-2 my-3">
                                                                <iconify-icon icon="lucide:tag" className="icon" />
                                                                <span className="kanban-tag font-semibold">UI Design</span>
                                                            </button>
                                                            <div className="mt-3 flex items-center justify-between gap-2.5">
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <iconify-icon icon="solar:calendar-outline" className="text-neutral-600 dark:text-neutral-200" />
                                                                    <span className="start-date text-secondary-light">25 Aug 2024</span>
                                                                </div>
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <button type="button" className="card-edit-button text-success-600" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                        <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                    <button type="button" className="card-delete-button text-danger-600">
                                                                        <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Add Task Button */}
                                                    <button type="button" className="flex items-center gap-2 font-medium w-full text-primary-600 justify-center text-hover-primary-800 add-task-button" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                        <iconify-icon icon="ph:plus-circle" className="icon text-xl" />
                                                        Add Task
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[25%] kanban-item rounded-xl done-card">
                                            <div className="card p-0 rounded-xl overflow-hidden shadow-none border-0">
                                                <div className="card-body p-0 pb-6">
                                                    <div className="flex items-center gap-2 justify-between ps-6 pt-6 pe-6">
                                                        <h6 className="text-lg font-semibold mb-0">Done</h6>
                                                        <div className="flex items-center gap-3 justify-between mb-0">
                                                            <button type="button" className="text-2xl hover-text-primary add-task-button flex" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                <iconify-icon icon="ph:plus-circle" className="icon" />
                                                            </button>
                                                            <div className="dropdown">
                                                                <button data-dropdown-toggle="dropdown3" className="text-neutral-800 flex text-lg dark:text-white" type="button">
                                                                    <i className="ri-more-2-fill" />
                                                                </button>
                                                                <div id="dropdown3" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                                                    <ul className="p-2 text-sm text-gray-700 dark:text-gray-200">
                                                                        <li>
                                                                            <button type="submit" className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2">
                                                                                <iconify-icon className="text-xl" icon="humbleicons:duplicate" />
                                                                                Duplicate
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button type="button" className="w-full text-start px-4 py-2.5 hover:bg-danger-100 dark:hover:bg-danger-600/25 rounded hover:text-danger-500 dark:hover:text-danger-600 flex items-center gap-2">
                                                                                <iconify-icon className="text-xl" icon="mingcute:delete-2-line" />
                                                                                Delete
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="connectedSortable ps-6 pt-6 pe-6" id="sortable3">
                                                        <div className="kanban-card bg-neutral-50 dark:bg-dark-3 p-4 rounded-lg mb-6" id="kanban-5">
                                                            <h6 className="kanban-title text-lg font-semibold mb-2">Creating a new website</h6>
                                                            <p className="kanban-desc text-secondary-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                            <button type="button" className="btn text-primary-600 border rounded border-primary-600 bg-hover-primary-600 text-hover-white flex items-center gap-2 my-3">
                                                                <iconify-icon icon="lucide:tag" className="icon" />
                                                                <span className="kanban-tag font-semibold">UI Design</span>
                                                            </button>
                                                            <div className="mt-3 flex items-center justify-between gap-2.5">
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <iconify-icon icon="solar:calendar-outline" className="text-neutral-600 dark:text-neutral-200" />
                                                                    <span className="start-date text-secondary-light">25 Aug 2024</span>
                                                                </div>
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <button type="button" className="card-edit-button text-success-600" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                        <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                    <button type="button" className="card-delete-button text-danger-600">
                                                                        <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="kanban-card bg-neutral-50 dark:bg-dark-3 p-4 rounded-lg mb-6" id="kanban-6">
                                                            <h6 className="kanban-title text-lg font-semibold mb-2">Creating a new website</h6>
                                                            <p className="kanban-desc text-secondary-light">Lorem ipsum dolor sit amet, consectetur </p>
                                                            <button type="button" className="btn text-primary-600 border rounded border-primary-600 bg-hover-primary-600 text-hover-white flex items-center gap-2 my-3">
                                                                <iconify-icon icon="lucide:tag" className="icon" />
                                                                <span className="kanban-tag font-semibold">UI Design</span>
                                                            </button>
                                                            <div className="mt-3 flex items-center justify-between gap-2.5">
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <iconify-icon icon="solar:calendar-outline" className="text-neutral-600 dark:text-neutral-200" />
                                                                    <span className="start-date text-secondary-light">25 Aug 2024</span>
                                                                </div>
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <button type="button" className="card-edit-button text-success-600" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                        <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                    <button type="button" className="card-delete-button text-danger-600">
                                                                        <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="kanban-card bg-neutral-50 dark:bg-dark-3 p-4 rounded-lg mb-6" id="kanban-7">
                                                            <div className="rounded-lg mb-3 max-h-[350px] overflow-hidden">
                                                                <img src="../assets/images/kanban/kanban-2.png" alt className="w-full h-full object-fit-cover" />
                                                            </div>
                                                            <h6 className="kanban-title text-lg font-semibold mb-2">Creating a new website</h6>
                                                            <p className="kanban-desc text-secondary-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                                            <button type="button" className="btn text-primary-600 border rounded border-primary-600 bg-hover-primary-600 text-hover-white flex items-center gap-2 my-3">
                                                                <iconify-icon icon="lucide:tag" className="icon" />
                                                                <span className="kanban-tag font-semibold">UI Design</span>
                                                            </button>
                                                            <div className="mt-3 flex items-center justify-between gap-2.5">
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <iconify-icon icon="solar:calendar-outline" className="text-neutral-600 dark:text-neutral-200" />
                                                                    <span className="start-date text-secondary-light">25 Aug 2024</span>
                                                                </div>
                                                                <div className="flex items-center justify-between gap-2.5">
                                                                    <button type="button" className="card-edit-button text-success-600" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                                        <iconify-icon icon="lucide:edit" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                    <button type="button" className="card-delete-button text-danger-600">
                                                                        <iconify-icon icon="fluent:delete-24-regular" className="icon text-lg line-height-1" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Add Task Button */}
                                                    <button type="button" className="flex items-center gap-2 font-medium w-full text-primary-600 justify-center text-hover-primary-800 add-task-button" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                                        <iconify-icon icon="ph:plus-circle" className="icon text-xl" />
                                                        Add Task
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[25%] kanban-item rounded-xl overflow-hidden">
                                            <div className="card p-0 rounded-xl overflow-hidden shadow-none border-0">
                                                <div className="card-body p-6">
                                                    <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="add-kanban flex items-center gap-2 font-medium w-full text-primary-600 justify-center text-hover-primary-800 line-height-1">
                                                        <iconify-icon icon="ph:plus-circle" className="icon text-xl flex" />
                                                        Add Task
                                                    </button>
                                                    {/* Modal toggle */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main modal */}
                <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-dark-2">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white"> Add New Task </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <form id="taskForm">
                                    <input type="hidden" id="editTaskId" defaultValue />
                                    <div className="mb-3">
                                        <label htmlFor="taskTitle" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Title</label>
                                        <input type="text" className="form-control" placeholder="Enter Event Title " id="taskTitle" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskTag" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Tag</label>
                                        <input type="text" className="form-control" placeholder="Enter tag" id="taskTag" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="startDate" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Start Date</label>
                                        <input type="date" className="form-control" id="startDate" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskDescription" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Description</label>
                                        <textarea className="form-control" id="taskDescription" rows={3} placeholder="Write some text" required defaultValue={""} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskImage" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Attachments <span className="text-sm">(Jpg, Png format)</span> </label>
                                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="taskImage" type="file" />
                                        <img id="taskImagePreview" src="../assets/images/carousel/carousel-img1.png" alt="Image Preview" />
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center gap-4 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button type="button" data-modal-hide="default-modal" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-base px-[50px] py-[11px] rounded-lg" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary border border-primary-600 text-base px-7 py-3 rounded-lg" id="saveTaskButton">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Kanban
