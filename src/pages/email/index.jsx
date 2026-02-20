import React from 'react'
import { Link } from 'react-router-dom'

const Email = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Email</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Email</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
                        <div className="card h-full p-0 border-0">
                            <div className="card-body p-6">
                                <button type="button" className="btn bg-primary-600 hover:bg-primary-700 text-white dark:text-white text-sm btn-sm px-3 py-3 w-full rounded-lg flex items-center gap-2 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <iconify-icon icon="fa6-regular:square-plus" className="icon text-lg line-height-1" />
                                    Compose
                                </button>
                                <div className="mt-4">
                                    <ul>
                                        <li className="item-active mb-1.5">
                                            <Link to="/email" className="hover:bg-primary-50 dark:hover:bg-primary-800/25 group hover:text-neutral-900 px-2.5 py-2.5 w-full rounded-lg text-neutral-600 flex items-center">
                                                <span className="flex items-center gap-2.5 justify-between w-full">
                                                    <span className="flex items-center gap-2.5">
                                                        <span className="icon text-2xl line-height-1 flex group-hover:text-primary-600"><iconify-icon icon="uil:envelope" className="icon line-height-1" /></span>
                                                        <span className="font-semibold">Inbox</span>
                                                    </span>
                                                    <span className="font-medium">800</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="mb-1.5">
                                            <Link to="/starred" className="hover:bg-primary-50 dark:hover:bg-primary-800/25 group hover:text-neutral-900 px-2.5 py-2.5 w-full rounded-lg text-neutral-600 flex items-center">
                                                <span className="flex items-center gap-2.5 justify-between w-full">
                                                    <span className="flex items-center gap-2.5">
                                                        <span className="icon text-2xl line-height-1 flex group-hover:text-primary-600"><iconify-icon icon="ph:star-bold" className="icon line-height-1" /></span>
                                                        <span className="font-semibold">Starred</span>
                                                    </span>
                                                    <span className="font-medium">250</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="mb-1.5">
                                            <Link href="/email" className="hover:bg-primary-50 dark:hover:bg-primary-800/25 group hover:text-neutral-900 px-2.5 py-2.5 w-full rounded-lg text-neutral-600 flex items-center">
                                                <span className="flex items-center gap-2.5 justify-between w-full">
                                                    <span className="flex items-center gap-2.5">
                                                        <span className="icon text-2xl line-height-1 flex group-hover:text-primary-600"><iconify-icon icon="ion:paper-plane-outline" className="icon line-height-1" /></span>
                                                        <span className="font-semibold">Sent</span>
                                                    </span>
                                                    <span className="font-medium">80</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="mb-1.5">
                                            <Link to="/email" className="hover:bg-primary-50 dark:hover:bg-primary-800/25 group hover:text-neutral-900 px-2.5 py-2.5 w-full rounded-lg text-neutral-600 flex items-center">
                                                <span className="flex items-center gap-2.5 justify-between w-full">
                                                    <span className="flex items-center gap-2.5">
                                                        <span className="icon text-2xl line-height-1 flex group-hover:text-primary-600"><iconify-icon icon="lucide:pencil" className="icon line-height-1" /></span>
                                                        <span className="font-semibold">Draft</span>
                                                    </span>
                                                    <span className="font-medium">50</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="mb-1.5">
                                            <Link to="/email" className="hover:bg-primary-50 dark:hover:bg-primary-800/25 group hover:text-neutral-900 px-2.5 py-2.5 w-full rounded-lg text-neutral-600 flex items-center">
                                                <span className="flex items-center gap-2.5 justify-between w-full">
                                                    <span className="flex items-center gap-2.5">
                                                        <span className="icon text-2xl line-height-1 flex group-hover:text-primary-600"><iconify-icon icon="ph:warning-bold" className="icon line-height-1" /></span>
                                                        <span className="font-semibold">Spam</span>
                                                    </span>
                                                    <span className="font-medium">30</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/email" className="hover:bg-primary-50 dark:hover:bg-primary-800/25 group hover:text-neutral-900 px-2.5 py-2.5 w-full rounded-lg text-neutral-600 flex items-center">
                                                <span className="flex items-center gap-2.5 justify-between w-full">
                                                    <span className="flex items-center gap-2.5">
                                                        <span className="icon text-2xl line-height-1 flex group-hover:text-primary-600"><iconify-icon icon="material-symbols:delete-outline" className="icon line-height-1" /></span>
                                                        <span className="font-semibold">Bin</span>
                                                    </span>
                                                    <span className="font-medium">20</span>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <h6 className="text-lg font-semibold text-neutral-600 dark:text-neutral-200 mb-4">TAGS</h6>
                                        <ul>
                                            <li className="mb-5">
                                                <span className="line-height-1 font-medium text-secondary-light text-sm flex items-center gap-2.5">
                                                    <span className="w-2 h-2 bg-primary-600 rounded-full" />
                                                    Personal
                                                </span>
                                            </li>
                                            <li className="mb-5">
                                                <span className="line-height-1 font-medium text-secondary-light text-sm flex items-center gap-2.5">
                                                    <span className="w-2 h-2 bg-purple-600 rounded-full" />
                                                    Social
                                                </span>
                                            </li>
                                            <li className="mb-5">
                                                <span className="line-height-1 font-medium text-secondary-light text-sm flex items-center gap-2.5">
                                                    <span className="w-2 h-2 bg-success-600 rounded-full" />
                                                    Promotions
                                                </span>
                                            </li>
                                            <li className="mb-5">
                                                <span className="line-height-1 font-medium text-secondary-light text-sm flex items-center gap-2.5">
                                                    <span className="w-2 h-2 bg-warning-600 rounded-full" />
                                                    Business
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                        <div className="card h-full p-0 border-0 email-card">
                            <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" id="selectAll" />
                                            <div className>
                                                <button data-dropdown-toggle="dropdownArrowDown" className="focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full w-4 h-4 flex items-center justify-center" type="button">
                                                    <iconify-icon icon="typcn:arrow-sorted-down" className="icon line-height-1" />
                                                </button>
                                                {/* Dropdown menu */}
                                                <div id="dropdownArrowDown" className="sm:min-w-max z-10 hidden border border-transparent dark:border-neutral-600 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700">
                                                    <ul className="rounded-lg bg-white dark:bg-neutral-700 shadow p-4 text-sm text-gray-700 dark:text-gray-200">
                                                        <li>
                                                            <button type="button" className="px-4 py-2 rounded text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 block w-full text-start text-hover-neutral-900" data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                                                All
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="px-4 py-2 rounded text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 block w-full text-start text-hover-neutral-900" data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                                                None
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="px-4 py-2 rounded text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 block w-full text-start text-hover-neutral-900" data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                                                Read
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="px-4 py-2 rounded text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 block w-full text-start text-hover-neutral-900" data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                                                Unread
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="px-4 py-2 rounded text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 block w-full text-start text-hover-neutral-900" data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                                                Starred
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="px-4 py-2 rounded text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-600 block w-full text-start text-hover-neutral-900" data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                                                Unstarred
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" className="delete-button hidden text-secondary-light text-xl flex">
                                            <iconify-icon icon="material-symbols:delete-outline" className="icon line-height-1" />
                                        </button>
                                        <button type="button" className="reload-button text-secondary-light text-xl flex">
                                            <iconify-icon icon="tabler:reload" className="icon" />
                                        </button>
                                        <div className>
                                            <button data-dropdown-toggle="dropdownThreeDots" className="focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full w-4 h-4 flex items-center justify-center" type="button">
                                                <iconify-icon icon="entypo:dots-three-vertical" className="icon text-secondary-light" />
                                            </button>
                                            {/* Dropdown menu */}
                                            <div id="dropdownThreeDots" className="sm:min-w-max z-10 hidden border border-transparent dark:border-neutral-600 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700">
                                                <ul className="p-4 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <button type="button" className="dropdown-item px-4 py-2 rounded text-secondary-light hover:bg-neutral-200 dark:hover:bg-neutral-600 text-hover-neutral-900 flex items-center text-start gap-2.5" data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                                            <iconify-icon icon="gravity-ui:envelope-open" className="icon text-lg line-height-1" />
                                                            Mark all as read
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <p className="ms-10 mt-2 text-neutral-500 mb-0">
                                                            Select messages to see more actions
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <form className="navbar-search lg:block hidden">
                                            <input type="text" className="bg-white dark:text-white dark:bg-neutral-700 h-10 w-auto" name="search" placeholder="Search" />
                                            <iconify-icon icon="ion:search-outline" className="icon dark:text-white" />
                                        </form>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-secondary-light line-height-1">1-12 of 1,253</span>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination flex">
                                                <li className="page-item">
                                                    <a className="page-link flex bg-white dark:bg-neutral-700 border text-secondary-light text-xl" href="javascript:void(0)"><iconify-icon icon="iconamoon:arrow-left-2" className="icon" /> </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link flex bg-white dark:bg-neutral-700 border text-secondary-light text-xl" href="javascript:void(0)"><iconify-icon icon="iconamoon:arrow-right-2" className="icon" /> </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <ul className="overflow-x-auto">
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Jerome Bell</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Kristin Watson</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Cody Fisher</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Dianne Russell</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Floyd Miles</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Devon Lane</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Dianne Russell</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Annette Black</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Bessie Cooper</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Courtney Henry</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                    <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                        <div className="form-check style-check flex items-center">
                                            <input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                        </div>
                                        <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                            <i className="ri-star-line" />
                                        </button>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Wade Warren</Link>
                                        <Link to="/veiw-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                        <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Email
