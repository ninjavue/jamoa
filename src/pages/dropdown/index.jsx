import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Dropdown</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Dropdown</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Basic Dropdown Primary</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPill" data-dropdown-placement="bottom" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Default Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPill" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="outlineActionPill" data-dropdown-placement="bottom" className="text-primary-600 focus:bg-primary-600 hover:bg-primary-700 border border-primary-600 hover:text-white focus:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-primary-400 dark:hover:text-white dark:focus:text-white dark:focus:ring-primary-800" type="button">
                                        Outline Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="outlineActionPill" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPill" data-dropdown-placement="bottom" className="bg-primary-50 hover:bg-primary-600 focus:ring-4 focus:outline-none hover:text-white text-primary-600 focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-primary-600/25 dark:text-primary-400 dark:hover:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Focus Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPill" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillTwo" data-dropdown-placement="bottom" className="hover:bg-primary-600 focus:ring-4 focus:outline-none hover:text-white text-primary-600 focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-primary-400 dark:hover:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Focus Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillTwo" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Dropup Primary</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPillDroppop" data-dropdown-placement="top" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Default Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPillDroppop" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="outlineActionPillDroppop" data-dropdown-placement="top" className="text-primary-600 focus:bg-primary-600 hover:bg-primary-700 border border-primary-600 hover:text-white focus:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-primary-400 dark:hover:text-white dark:focus:text-white dark:focus:ring-primary-800" type="button">
                                        Outline Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="outlineActionPillDroppop" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillDroppop" data-dropdown-placement="top" className="bg-primary-50 hover:bg-primary-600 focus:ring-4 focus:outline-none hover:text-white text-primary-600 focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-primary-600/25 dark:text-primary-400 dark:hover:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Focus Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillDroppop" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillTwoDroppop" data-dropdown-placement="top" className="hover:bg-primary-600 focus:ring-4 focus:outline-none hover:text-white text-primary-600 focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-primary-400 dark:hover:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Focus Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillTwoDroppop" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Dropright Warning</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPillDropRight" data-dropdown-placement="right" className="text-white bg-warning-600 hover:bg-warning-700 focus:ring-4 focus:outline-none focus:ring-warning-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-warning-600 dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                        Default Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPillDropRight" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">warning Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="outlineActionPillDropRight" data-dropdown-placement="right" className="text-warning-600 focus:bg-warning-600 hover:bg-warning-700 border border-warning-600 hover:text-white focus:text-white focus:ring-4 focus:outline-none focus:ring-warning-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-warning-400 dark:hover:text-white dark:focus:text-white dark:focus:ring-warning-800" type="button">
                                        Outline Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="outlineActionPillDropRight" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">warning Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillDropRight" data-dropdown-placement="right" className="bg-warning-100 hover:bg-warning-600 focus:ring-4 focus:outline-none hover:text-white text-warning-600 focus:ring-warning-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-warning-600/25 dark:text-warning-400 dark:hover:text-white dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                        Focus Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillDropRight" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">warning Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillTwoDropRight" data-dropdown-placement="right" className="hover:bg-warning-600 focus:ring-4 focus:outline-none hover:text-white text-warning-600 focus:ring-warning-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-warning-400 dark:hover:text-white dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                        Focus Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillTwoDropRight" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">warning Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Dropright Warning</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPillDropLeft" data-dropdown-placement="left" className="text-white bg-warning-600 hover:bg-warning-700 focus:ring-4 focus:outline-none focus:ring-warning-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-warning-600 dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                        <svg className="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                                        </svg>
                                        Default Action
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPillDropLeft" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">warning Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="outlineActionPillDropLeft" data-dropdown-placement="left" className="text-warning-600 focus:bg-warning-600 hover:bg-warning-700 border border-warning-600 hover:text-white focus:text-white focus:ring-4 focus:outline-none focus:ring-warning-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-warning-400 dark:hover:text-white dark:focus:text-white dark:focus:ring-warning-800" type="button">
                                        <svg className="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                                        </svg>
                                        Outline Action
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="outlineActionPillDropLeft" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">warning Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillDropLeft" data-dropdown-placement="left" className="bg-warning-100 hover:bg-warning-600 focus:ring-4 focus:outline-none hover:text-white text-warning-600 focus:ring-warning-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-warning-600/25 dark:text-warning-400 dark:hover:text-white dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                        <svg className="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                                        </svg>
                                        Focus Action
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillDropLeft" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">warning Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillTwoDropLeft" data-dropdown-placement="left" className="hover:bg-warning-600 focus:ring-4 focus:outline-none hover:text-white text-warning-600 focus:ring-warning-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-warning-400 dark:hover:text-white dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                        <svg className="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                                        </svg>
                                        Focus Action
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillTwoDropLeft" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">warning Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Placement</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPillDropPlacement" data-dropdown-placement="bottom" className="text-white bg-success-600 hover:bg-success-700 focus:ring-4 focus:outline-none focus:ring-success-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-success-600 dark:hover:bg-success-700 dark:focus:ring-success-800" type="button">
                                        Default Action
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPillDropPlacement" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">success Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="outlineActionPillDropPlacement" data-dropdown-placement="bottom" className="text-success-600 focus:bg-success-600 hover:bg-success-700 border border-success-600 hover:text-white focus:text-white focus:ring-4 focus:outline-none focus:ring-success-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:text-success-400 dark:hover:text-white dark:focus:text-white dark:focus:ring-success-800" type="button">
                                        Outline Action
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="outlineActionPillDropPlacement" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">success Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillDropPlacement" data-dropdown-placement="bottom" className="bg-success-100 hover:bg-success-600 focus:ring-4 focus:outline-none hover:text-white text-success-600 focus:ring-success-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-success-600/25 dark:text-success-400 dark:hover:text-white dark:hover:bg-success-700 dark:focus:ring-success-800" type="button">
                                        Focus Action
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillDropPlacement" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">success Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Grouped Dropdown Buttons</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Dropdown Start */}
                                <div className>
                                    <div className="flex">
                                        <button className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-s-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                            1
                                        </button>
                                        <button className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-base px-5 py-4 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                            2
                                        </button>
                                        <button data-dropdown-toggle="defaultActionPillDropGroup" data-dropdown-placement="bottom" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-e-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                            Default Action
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPillDropGroup" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <div className="flex">
                                        <button className="hover:bg-warning-600 border hover:text-white border-warning-600 text-warning-600  focus:ring-4 focus:outline-none focus:ring-warning-300 font-medium rounded-s-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-warning-600 dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                            1
                                        </button>
                                        <button className="hover:bg-warning-600 border border-x-0 hover:text-white border-warning-600 text-warning-600  focus:ring-4 focus:outline-none focus:ring-warning-300 font-medium text-base px-5 py-4 text-center inline-flex items-center dark:bg-warning-600 dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                            2
                                        </button>
                                        <button data-dropdown-toggle="outlineActionPillDropGroup" data-dropdown-placement="bottom" className="hover:bg-warning-600 border hover:text-white border-warning-600 text-warning-600  focus:ring-4 focus:outline-none focus:ring-warning-300 font-medium rounded-e-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-warning-600 dark:hover:bg-warning-700 dark:focus:ring-warning-800" type="button">
                                            Default Action
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Dropdown menu */}
                                    <div id="outlineActionPillDropGroup" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">success Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Custom Dropdown</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPillDropCustom" data-dropdown-placement="right" className="text-neutral-600 text-xl d-flex items-center justify-center w-10 h-10 ring-4 ring-transparent focus:ring-primary-300 rounded-lg" type="button">
                                        <iconify-icon icon="entypo:dots-three-vertical" className="menu-icon" />
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPillDropCustom" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">success Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="outlineActionPillDropCustom" data-dropdown-placement="bottom" className="text-neutral-600 text-xl d-flex items-center justify-center w-10 h-10 ring-4 ring-transparent focus:ring-primary-300 rounded-lg" type="button">
                                        <iconify-icon icon="ph:dots-three-outline-fill" className="menu-icon" />
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="outlineActionPillDropCustom" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">success Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="focusActionPillDropCustom" data-dropdown-placement="bottom" className="text-neutral-600 text-xl d-flex items-center justify-center w-10 h-10 ring-4 ring-transparent focus:ring-primary-300 rounded-lg" type="button">
                                        <iconify-icon icon="entypo:dots-three-vertical" className="menu-icon" />
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="focusActionPillDropCustom" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">success Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="lastActionPillDropCustom" data-dropdown-placement="bottom" className="text-neutral-600 text-xl d-flex items-center justify-center w-10 h-10 ring-4 ring-transparent focus:ring-primary-300 rounded-lg" type="button">
                                        <iconify-icon icon="ph:dots-three-outline-fill" className="menu-icon" />
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="lastActionPillDropCustom" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">success Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Dropdown Sizes</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPillOneee" data-dropdown-placement="bottom" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Default Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPillOneee" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPilltwoo" data-dropdown-placement="bottom" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-3 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Default Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPilltwoo" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                                {/* Dropdown Start */}
                                <div className>
                                    <button data-dropdown-toggle="defaultActionPillThreee" data-dropdown-placement="bottom" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                        Default Action
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div id="defaultActionPillThreee" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-base text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Action</a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something Else</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dropdown
