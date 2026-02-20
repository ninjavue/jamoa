import React from 'react'
import { Link } from 'react-router-dom'

const Wizard = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Wizard</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Wizard</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card border-0">
                        <div className="card-body">
                            <h6 className="mb-1.5 text-xl">Numbering wizard</h6>
                            <p className="text-neutral-400">Fill up your details and proceed next steps.</p>
                            {/* Form Wizard Start */}
                            <div className="form-wizard">
                                <form action="#" method="post">
                                    <div className="form-wizard-header overflow-x-auto scroll-sm pb-2 mt-8 mb-8">
                                        <ul className="list-unstyled form-wizard-list">
                                            <li className="form-wizard-list__item active">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">1</span>
                                                </div>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">2</span>
                                                </div>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">3</span>
                                                </div>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">4</span>
                                                </div>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">5</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <fieldset className="wizard-fieldset show">
                                        <h6 className="text-base text-neutral-400 mb-3">Personal Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">First Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter First Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Last Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Last Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Email*</label>
                                                <div className="relative">
                                                    <input type="email" className="form-control wizard-required" placeholder="Enter Email" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Confirm Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Confirm Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group text-end">
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Account Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">User Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter User Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">Card Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Number " required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">Card Expiration(MM/YY)*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Expiration" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">CVV Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="CVV Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Bank Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Bank Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Bank Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Branch Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Branch Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Account Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Account Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Account Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Account Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Payment Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Holder Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Holder Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Card Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">CVC Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="CVC Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Expiry Date*</label>
                                                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                                                    <div className="col-span-12 sm:col-span-4">
                                                        <div className="relative">
                                                            <select className="form-control form-select">
                                                                <option value>Date</option>
                                                                <option value>1</option>
                                                                <option value>2</option>
                                                                <option value>3</option>
                                                                <option value>4</option>
                                                                <option value>5</option>
                                                                <option value>6</option>
                                                                <option value>7</option>
                                                                <option value>8</option>
                                                                <option value>9</option>
                                                                <option value>10</option>
                                                                <option value>11</option>
                                                                <option value>12</option>
                                                                <option value>13</option>
                                                                <option value>14</option>
                                                                <option value>15</option>
                                                                <option value>16</option>
                                                                <option value>17</option>
                                                                <option value>18</option>
                                                                <option value>19</option>
                                                                <option value>20</option>
                                                                <option value>21</option>
                                                                <option value>22</option>
                                                                <option value>23</option>
                                                                <option value>24</option>
                                                                <option value>25</option>
                                                                <option value>26</option>
                                                                <option value>27</option>
                                                                <option value>28</option>
                                                                <option value>29</option>
                                                                <option value>30</option>
                                                                <option value>31</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12 sm:col-span-4">
                                                        <div className="relative">
                                                            <select className="form-control form-select">
                                                                <option value>Month</option>
                                                                <option value>jan</option>
                                                                <option value>Feb</option>
                                                                <option value>March</option>
                                                                <option value>April</option>
                                                                <option value>May</option>
                                                                <option value>June</option>
                                                                <option value>Jully</option>
                                                                <option value>August</option>
                                                                <option value>Sept</option>
                                                                <option value>Oct</option>
                                                                <option value>Nov</option>
                                                                <option value>Dec</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12 sm:col-span-4">
                                                        <div className="relative">
                                                            <select className="form-control form-select">
                                                                <option value>Years</option>
                                                                <option value>2019</option>
                                                                <option value>2020</option>
                                                                <option value>2021</option>
                                                                <option value>2022</option>
                                                                <option value>2023</option>
                                                                <option value>2024</option>
                                                                <option value>2025</option>
                                                                <option value>2026</option>
                                                                <option value>2027</option>
                                                                <option value>2028</option>
                                                                <option value>2029</option>
                                                                <option value>2030</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <div className="text-center mb-2.5">
                                            <img src="../assets/images/gif/success-img3.gif" alt className="gif-image mb-6 mx-auto" />
                                            <h6 className="text-base text-neutral-600">Congratulations </h6>
                                            <p className="text-neutral-400 text-sm mb-0">Well done! You have successfully completed.</p>
                                        </div>
                                        <div className="form-group flex items-center justify-end gap-2">
                                            <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                            <button type="button" className="form-wizard-submit btn btn-primary-600 px-8">Publish</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            {/* Form Wizard End */}
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body">
                            <h6 className="mb-1.5 text-xl">Numbering wizard with label</h6>
                            <p className="text-neutral-400">Fill up your details and proceed next steps.</p>
                            {/* Form Wizard Start */}
                            <div className="form-wizard">
                                <form action="#" method="post">
                                    <div className="form-wizard-header overflow-x-auto scroll-sm pb-2 mt-8 mb-8">
                                        <ul className="list-unstyled form-wizard-list">
                                            <li className="form-wizard-list__item active">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">1</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Create Account </span>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">2</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Import Data</span>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">3</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Setup Privacy</span>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">4</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Add Location</span>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">5</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Completed</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <fieldset className="wizard-fieldset show">
                                        <h6 className="text-base text-neutral-400 mb-3">Personal Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">First Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter First Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Last Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Last Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Email*</label>
                                                <div className="relative">
                                                    <input type="email" className="form-control wizard-required" placeholder="Enter Email" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Confirm Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Confirm Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group text-end">
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Account Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">User Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter User Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">Card Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Number " required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">Card Expiration(MM/YY)*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Expiration" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">CVV Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="CVV Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Bank Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Bank Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Bank Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Branch Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Branch Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Account Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Account Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Account Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Account Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Payment Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Holder Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Holder Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Card Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">CVC Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="CVC Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Expiry Date*</label>
                                                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                                                    <div className="col-span-12 sm:col-span-4">
                                                        <div className="relative">
                                                            <select className="form-control form-select">
                                                                <option value>Date</option>
                                                                <option value>1</option>
                                                                <option value>2</option>
                                                                <option value>3</option>
                                                                <option value>4</option>
                                                                <option value>5</option>
                                                                <option value>6</option>
                                                                <option value>7</option>
                                                                <option value>8</option>
                                                                <option value>9</option>
                                                                <option value>10</option>
                                                                <option value>11</option>
                                                                <option value>12</option>
                                                                <option value>13</option>
                                                                <option value>14</option>
                                                                <option value>15</option>
                                                                <option value>16</option>
                                                                <option value>17</option>
                                                                <option value>18</option>
                                                                <option value>19</option>
                                                                <option value>20</option>
                                                                <option value>21</option>
                                                                <option value>22</option>
                                                                <option value>23</option>
                                                                <option value>24</option>
                                                                <option value>25</option>
                                                                <option value>26</option>
                                                                <option value>27</option>
                                                                <option value>28</option>
                                                                <option value>29</option>
                                                                <option value>30</option>
                                                                <option value>31</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12 sm:col-span-4">
                                                        <div className="relative">
                                                            <select className="form-control form-select">
                                                                <option value>Month</option>
                                                                <option value>jan</option>
                                                                <option value>Feb</option>
                                                                <option value>March</option>
                                                                <option value>April</option>
                                                                <option value>May</option>
                                                                <option value>June</option>
                                                                <option value>Jully</option>
                                                                <option value>August</option>
                                                                <option value>Sept</option>
                                                                <option value>Oct</option>
                                                                <option value>Nov</option>
                                                                <option value>Dec</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12 sm:col-span-4">
                                                        <div className="relative">
                                                            <select className="form-control form-select">
                                                                <option value>Years</option>
                                                                <option value>2019</option>
                                                                <option value>2020</option>
                                                                <option value>2021</option>
                                                                <option value>2022</option>
                                                                <option value>2023</option>
                                                                <option value>2024</option>
                                                                <option value>2025</option>
                                                                <option value>2026</option>
                                                                <option value>2027</option>
                                                                <option value>2028</option>
                                                                <option value>2029</option>
                                                                <option value>2030</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <div className="text-center mb-2.5">
                                            <img src="../assets/images/gif/success-img3.gif" alt className="gif-image mb-6 mx-auto" />
                                            <h6 className="text-base text-neutral-600">Congratulations </h6>
                                            <p className="text-neutral-400 text-sm mb-0">Well done! You have successfully completed.</p>
                                        </div>
                                        <div className="form-group flex items-center justify-end gap-2">
                                            <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                            <button type="button" className="form-wizard-submit btn btn-primary-600 px-8">Publish</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            {/* Form Wizard End */}
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body">
                            <h6 className="mb-1.5 text-xl">Order By Following Step</h6>
                            <p className="text-neutral-400">Fill up your details and proceed next steps.</p>
                            {/* Form Wizard Start */}
                            <div className="form-wizard">
                                <form action="#" method="post">
                                    <div className="form-wizard-header overflow-x-auto scroll-sm pb-2 mt-8 mb-8">
                                        <ul className="list-unstyled form-wizard-list style-two">
                                            <li className="form-wizard-list__item active">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">1</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Order Details </span>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">2</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Manufactures</span>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">3</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Order Plan</span>
                                            </li>
                                            <li className="form-wizard-list__item">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">4</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Completed</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <fieldset className="wizard-fieldset show">
                                        <h6 className="text-base text-neutral-400 mb-3">Personal Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">First Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter First Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Last Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Last Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Email*</label>
                                                <div className="relative">
                                                    <input type="email" className="form-control wizard-required" placeholder="Enter Email" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Confirm Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Confirm Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group text-end">
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Account Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">User Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter User Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">Card Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Number " required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">Card Expiration(MM/YY)*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Expiration" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">CVV Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="CVV Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Bank Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Bank Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Bank Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Branch Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Branch Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Account Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Account Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Account Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Account Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <div className="text-center mb-2.5">
                                            <img src="../assets/images/gif/success-img3.gif" alt className="gif-image mb-6 mx-auto" />
                                            <h6 className="text-base text-neutral-600">Congratulations </h6>
                                            <p className="text-neutral-400 text-sm mb-0">Well done! You have successfully completed.</p>
                                        </div>
                                        <div className="form-group flex items-center justify-end gap-2">
                                            <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                            <button type="button" className="form-wizard-submit btn btn-primary-600 px-8">Publish</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            {/* Form Wizard End */}
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body">
                            <h6 className="mb-1.5 text-xl">Wizard with beside label</h6>
                            <p className="text-neutral-400">Fill up your details and proceed next steps.</p>
                            {/* Form Wizard Start */}
                            <div className="form-wizard">
                                <form action="#" method="post">
                                    <div className="form-wizard-header overflow-x-auto scroll-sm pb-2 mt-8 mb-8">
                                        <ul className="list-unstyled form-wizard-list style-three">
                                            <li className="form-wizard-list__item flex items-center gap-2 active">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">1</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Order Details </span>
                                            </li>
                                            <li className="form-wizard-list__item flex items-center gap-2">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">2</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Manufactures</span>
                                            </li>
                                            <li className="form-wizard-list__item flex items-center gap-2">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">3</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Order Plan</span>
                                            </li>
                                            <li className="form-wizard-list__item flex items-center gap-2">
                                                <div className="form-wizard-list__line">
                                                    <span className="count">4</span>
                                                </div>
                                                <span className="text text-xs font-semibold">Completed</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <fieldset className="wizard-fieldset show">
                                        <h6 className="text-base text-neutral-400 mb-3">Personal Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">First Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter First Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Last Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Last Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Email*</label>
                                                <div className="relative">
                                                    <input type="email" className="form-control wizard-required" placeholder="Enter Email" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Confirm Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Confirm Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group text-end">
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Account Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">User Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter User Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">Card Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Number " required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">Card Expiration(MM/YY)*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Card Expiration" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-4">
                                                <label className="inline-block mb-2">CVV Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="CVV Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <label className="inline-block mb-2">Password*</label>
                                                <div className="relative">
                                                    <input type="password" className="form-control wizard-required" placeholder="Enter Password" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <h6 className="text-base text-neutral-400 mb-3">Bank Information</h6>
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Bank Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Bank Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Branch Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Branch Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Account Name*</label>
                                                <div className="relative">
                                                    <input type="text" className="form-control wizard-required" placeholder="Enter Account Name" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <label className="inline-block mb-2">Account Number*</label>
                                                <div className="relative">
                                                    <input type="number" className="form-control wizard-required" placeholder="Enter Account Number" required />
                                                    <div className="wizard-form-error" />
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="form-group flex items-center justify-end gap-2">
                                                    <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                                    <button type="button" className="form-wizard-next-btn btn btn-primary-600 px-8">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="wizard-fieldset">
                                        <div className="text-center mb-2.5">
                                            <img src="../assets/images/gif/success-img3.gif" alt className="gif-image mb-6 mx-auto" />
                                            <h6 className="text-base text-neutral-600">Congratulations </h6>
                                            <p className="text-neutral-400 text-sm mb-0">Well done! You have successfully completed.</p>
                                        </div>
                                        <div className="form-group flex items-center justify-end gap-2">
                                            <button type="button" className="form-wizard-previous-btn btn bg-neutral-400 border-neutral-400 hover:bg-neutral-500 hover:border-neutral-500 text-white px-8">Back</button>
                                            <button type="button" className="form-wizard-submit btn btn-primary-600 px-8">Publish</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            {/* Form Wizard End */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Wizard
