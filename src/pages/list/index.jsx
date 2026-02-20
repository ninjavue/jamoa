import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">List</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / List</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Default List</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="rounded-lg border border-neutral-200 dark:border-neutral-600 overflow-hidden">
                                <li className="text-secondary-light p-4 bg-neutral-50 dark:bg-neutral-600 border-b border-neutral-200 dark:border-neutral-600">1. This is list trust fund seitan letterpress, keytar raw denim keffiye</li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">2. This is list trust fund seitan letterpress, keytar raw denim </li>
                                <li className="text-secondary-light p-4 bg-neutral-50 dark:bg-neutral-600 border-b border-neutral-200 dark:border-neutral-600">3. This is list trust fund seitan letterpress, keytar raw </li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">4. This is list trust fund seitan letterpress, keytar raw denim keffiye</li>
                                <li className="text-secondary-light p-4 bg-neutral-50 dark:bg-neutral-600">5. This is list trust fund seitan letterpress, keytar raw denim </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Active List</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="rounded-lg border border-neutral-200 dark:border-neutral-600 overflow-hidden">
                                <li className="text-secondary-light p-4 bg-primary-600 border-b border-neutral-200 dark:border-neutral-600 text-white">1. This is list trust fund seitan letterpress, keytar raw denim keffiye</li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">2. This is list trust fund seitan letterpress, keytar raw denim </li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">3. This is list trust fund seitan letterpress, keytar raw </li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">4. This is list trust fund seitan letterpress, keytar raw denim keffiye</li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700">5. This is list trust fund seitan letterpress, keytar raw denim </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Active List</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="rounded-lg border border-neutral-200 dark:border-neutral-600 overflow-hidden">
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="ci:bell-notification" className="text-xl" /></span>
                                        Push Notification (This is push notifications)
                                    </div>
                                </li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="mynaui:cart-check" className="text-xl" /></span>
                                        New Orders confirmed (This is Orders confirmed)
                                    </div>
                                </li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="mdi:security-lock-outline" className="text-xl" /></span>
                                        Security Access (This is Security Access)
                                    </div>
                                </li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="tabler:folder-open" className="text-xl" /></span>
                                        Storage Folder (This is Storage Folder)
                                    </div>
                                </li>
                                <li className="text-secondary-light p-4 bg-white dark:bg-neutral-700">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="flowbite:forward-outline" className="text-xl" /></span>
                                        Forward Message (This is Forward Message)
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">List Icons &amp; label</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="rounded-lg border border-neutral-200 dark:border-neutral-600 overflow-hidden">
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="ci:bell-notification" className="text-xl" /></span>
                                        Push Notification (This is push notifications)
                                    </div>
                                    <span className="text-xs bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded px-2.5 py-1 font-semibold">Low</span>
                                </li>
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="mynaui:cart-check" className="text-xl" /></span>
                                        New Orders confirmed (This is Orders confirmed)
                                    </div>
                                    <span className="text-xs bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded px-2.5 py-1 font-semibold">High</span>
                                </li>
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="mdi:security-lock-outline" className="text-xl" /></span>
                                        Security Access (This is Security Access)
                                    </div>
                                    <span className="text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded px-2.5 py-1 font-semibold">Medium</span>
                                </li>
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="tabler:folder-open" className="text-xl" /></span>
                                        Storage Folder (This is Storage Folder)
                                    </div>
                                    <span className="text-xs bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded px-2.5 py-1 font-semibold">Low</span>
                                </li>
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700">
                                    <div className="flex items-center gap-2">
                                        <span className="flex"><iconify-icon icon="flowbite:forward-outline" className="text-xl" /></span>
                                        Forward Message (This is Forward Message)
                                    </div>
                                    <span className="text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded px-2.5 py-1 font-semibold">Medium</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Colored Lists</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="rounded-lg border border-neutral-200 dark:border-neutral-600 overflow-hidden">
                                <li className="text-secondary-light p-4 bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img1.png" className="w-8 h-8 rounded-full" alt />
                                        Push Notification (This is push notifications)
                                    </div>
                                </li>
                                <li className="text-secondary-light p-4 bg-info-100 dark:bg-info-600/25 text-info-600 dark:text-info-400 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img2.png" className="w-8 h-8 rounded-full" alt />
                                        New Orders confirmed (This is Orders confirmed)
                                    </div>
                                </li>
                                <li className="text-secondary-light p-4 bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img3.png" className="w-8 h-8 rounded-full" alt />
                                        Security Access (This is Security Access)
                                    </div>
                                </li>
                                <li className="text-secondary-light p-4 bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img4.png" className="w-8 h-8 rounded-full" alt />
                                        Storage Folder (This is Storage Folder)
                                    </div>
                                </li>
                                <li className="text-secondary-light p-4 bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img5.png" className="w-8 h-8 rounded-full" alt />
                                        Forward Message (This is Forward Message)
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">List Icons &amp; label</h6>
                        </div>
                        <div className="card-body p-6">
                            <ul className="rounded-lg border border-neutral-200 dark:border-neutral-600 overflow-hidden">
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img1.png" className="w-8 h-8 rounded-full" alt />
                                        Push Notification (This is push notifications)
                                    </div>
                                    <span className="text-xs bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded px-2.5 py-1 font-semibold">Low</span>
                                </li>
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img2.png" className="w-8 h-8 rounded-full" alt />
                                        New Orders confirmed (This is Orders confirmed)
                                    </div>
                                    <span className="text-xs bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 rounded px-2.5 py-1 font-semibold">High</span>
                                </li>
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img3.png" className="w-8 h-8 rounded-full" alt />
                                        Security Access (This is Security Access)
                                    </div>
                                    <span className="text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded px-2.5 py-1 font-semibold">Medium</span>
                                </li>
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img4.png" className="w-8 h-8 rounded-full" alt />
                                        Storage Folder (This is Storage Folder)
                                    </div>
                                    <span className="text-xs bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 rounded px-2.5 py-1 font-semibold">Low</span>
                                </li>
                                <li className="flex items-center justify-between text-secondary-light p-4 bg-white dark:bg-neutral-700">
                                    <div className="flex items-center gap-2">
                                        <img src="../assets/images/lists/list-img5.png" className="w-8 h-8 rounded-full" alt />
                                        Forward Message (This is Forward Message)
                                    </div>
                                    <span className="text-xs bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 rounded px-2.5 py-1 font-semibold">Medium</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default List
