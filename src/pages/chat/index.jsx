import React from 'react'
import { Link } from 'react-router-dom'

const Chat = () => {


    
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Chat</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link href="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Chat</li>
                    </ul>
                </div>
                <div className="chat-wrapper grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="card border-0 overflow-hidden col-span-12 md:col-span-4 xl:col-span-3">
                        <div className="flex items-center justify-between gap-2 px-5 pt-5 pb-4">
                            <div className="flex items-center gap-4">
                                <div className>
                                    <img src="../assets/images/chat/1.png" alt="image" />
                                </div>
                                <div className>
                                    <h6 className="text-base mb-0">Kathryn Murphy</h6>
                                    <p className="mb-0">Available</p>
                                </div>
                            </div>{/* chat-sidebar-single end */}
                            <div className="dropdown">
                                <button data-dropdown-toggle="dropdown1" className="text-neutral-800 dark:text-white" type="button">
                                    <i className="ri-more-2-fill" />
                                </button>
                                <div id="dropdown1" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                    <ul className="p-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <button type="submit" className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2">
                                                <i className="text-base flex ri-user-line" />
                                                Profile
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2">
                                                <i className="text-base flex ri-settings-4-line" />
                                                Setting
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="chat-search w-full relative">
                            <span className="icon absolute start-5 top-1/2 -translate-y-1/2 text-xl flex">
                                <iconify-icon icon="iconoir:search" />
                            </span>
                            <input type="text" className="border-0 border-t border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 w-full focus:outline-none focus:ring-0 ps-12 pe-6" autoComplete="off" placeholder="Search..." />
                        </div>
                        <div className="chat-all-list flex flex-col gap-1.5 mt-3 max-h-[580px] overflow-y-auto">
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/2.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Kathryn Murphy</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/3.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">James Michael</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/4.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Russell Lucas</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/5.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Caleb Bradley</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/6.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Bobby Roy</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/7.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Vincent Liam</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/8.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Randy Mason</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/9.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Albert Wayne</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/10.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Elijah Willie</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/2.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Kathryn Murphy</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/3.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">James Michael</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/4.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Russell Lucas</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/5.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Caleb Bradley</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/6.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Bobby Roy</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/7.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Vincent Liam</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/8.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Randy Mason</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/9.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Albert Wayne</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                            <a className="flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-600 px-6 py-2.5 active">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/10.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-sm mb-1 line-clamp-1">Elijah Willie</h6>
                                        <p className="mb-0 text-xs line-clamp-1">hey! there i'm...</p>
                                    </div>
                                </div>
                                <div className="shrink-0 text-end">
                                    <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                    <span className="w-4 h-4 text-xs rounded-full bg-warning-600 text-white inline-flex items-center justify-center">8</span>
                                </div>
                            </a>{/* chat-sidebar-single end */}
                        </div>
                    </div>
                    <div className=" col-span-12 md:col-span-8 xl:col-span-9">
                        <div className="card border-0 overflow-hidden flex flex-col">
                            <div className="flex items-center justify-between gap-2  px-6 py-2.5 active border-b border-neutral-200 dark:border-neutral-600">
                                <div className="flex items-center gap-2">
                                    <div className="img">
                                        <img src="../assets/images/chat/11.png" alt="image" />
                                    </div>
                                    <div className="info">
                                        <h6 className="text-base mb-0">Kathryn Murphy</h6>
                                        <p className="mb-0">Available</p>
                                    </div>
                                </div>
                                <div className="action inline-flex items-center gap-3">
                                    <button type="button" className="text-xl text-neutral-600 dark:text-neutral-200">
                                        <iconify-icon icon="mi:call" />
                                    </button>
                                    <button type="button" className="text-xl text-neutral-600 dark:text-neutral-200">
                                        <iconify-icon icon="fluent:video-32-regular" />
                                    </button>
                                    <div className="dropdown">
                                        <button data-dropdown-toggle="dropdown2" className="text-neutral-800 dark:text-white text-xl" type="button">
                                            <i className="ri-more-2-fill" />
                                        </button>
                                        <div id="dropdown2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-600 w-44 dark:bg-gray-700">
                                            <ul className="p-2 text-sm text-gray-700 dark:text-gray-200">
                                                <li>
                                                    <button type="submit" className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2">
                                                        <i className="ri-close-circle-line" />
                                                        All Clear
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" className="w-full text-start px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded dark:hover:text-white flex items-center gap-2">
                                                        <iconify-icon icon="ic:baseline-block" />
                                                        Block
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* chat-sidebar-single end */}
                            <div className="chat-message-list max-h-[568px] overflow-y-auto flex flex-col p-6 gap-6">
                                <div className="max-w-[700px] text-neutral-900 flex items-end gap-3">
                                    <img src="../assets/images/chat/11.png" alt="image" className="avatar-lg object-fit-cover rounded-full" />
                                    <div className="bg-neutral-50 dark:bg-dark-3 rounded-2xl rounded-es-none p-5">
                                        <p className="mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                        <p className="chat-time mb-0 text-xs text-end text-neutral-500">
                                            <span>6.30 pm</span>
                                        </p>
                                    </div>
                                </div>{/* end */}
                                <div className="max-w-[700px] ms-auto text-white">
                                    <div className="bg-primary-600 rounded-2xl rounded-ee-none p-5">
                                        <p className="mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                        <p className="chat-time mb-0 text-xs">
                                            <span>6.30 pm</span>
                                        </p>
                                    </div>
                                </div>{/* end */}
                                <div className="max-w-[700px] text-neutral-900 flex items-end gap-3">
                                    <img src="../assets/images/chat/11.png" alt="image" className="avatar-lg object-fit-cover rounded-full" />
                                    <div className="bg-neutral-50 dark:bg-dark-3 rounded-2xl rounded-es-none p-5">
                                        <p className="mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                        <p className="chat-time mb-0 text-xs text-end text-neutral-500">
                                            <span>6.30 pm</span>
                                        </p>
                                    </div>
                                </div>{/* end */}
                                <div className="max-w-[700px] ms-auto text-white">
                                    <div className="bg-primary-600 rounded-2xl rounded-ee-none p-5">
                                        <p className="mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                        <p className="chat-time mb-0 text-xs">
                                            <span>6.30 pm</span>
                                        </p>
                                    </div>
                                </div>{/* end */}
                            </div>
                            <form className="chat-message-box flex items-center justify-between py-4 border-t border-neutral-200 dark:border-neutral-600 mt-auto">
                                <input type="text" className="border-0 grow bg-white dark:bg-transparent focus:border-0 focus:outline-none focus:ring-0" autoComplete="off" name="chatMessage" placeholder="Write message" />
                                <div className="chat-message-box-action flex items-center gap-4">
                                    <button type="button" className="text-xl flex">
                                        <iconify-icon icon="ph:link" />
                                    </button>
                                    <button type="button" className="text-xl flex">
                                        <iconify-icon icon="solar:gallery-linear" />
                                    </button>
                                    <button type="submit" className="btn btn-sm btn-primary-600 rounded-lg inline-flex items-center gap-1">
                                        Send
                                        <iconify-icon icon="f7:paperplane" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Chat
