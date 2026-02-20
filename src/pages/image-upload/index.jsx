import React from 'react'
import { Link } from 'react-router-dom'

const ImageUpload = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Radio</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Radio</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Basic Upload</h6>
                        </div>
                        <div className="card-body p-6">
                            <label htmlFor="basic-upload" className="border border-primary-600 font-medium text-primary-600 px-4 py-3 rounded-xl inline-flex items-center gap-2 cursor-pointer hover:bg-primary-50">
                                <iconify-icon icon="solar:upload-linear" className="text-xl" />
                                Click to upload
                            </label>
                            <input type="file" id="basic-upload" className="block w-full text-sm  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mt-6" />
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Image Upload</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="upload-image-wrapper flex items-center gap-3">
                                <div className="uploaded-img hidden relative h-[120px] w-[120px] border input-form-light rounded-lg overflow-hidden border-dashed bg-neutral-50 dark:bg-neutral-600">
                                    <button type="button" className="uploaded-img__remove absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-2 flex">
                                        <iconify-icon icon="radix-icons:cross-2" className="text-xl text-danger-600" />
                                    </button>
                                    <img id="uploaded-img__preview" className="w-full h-full object-fit-cover" src="../assets/images/user.png" alt="image" />
                                </div>
                                <label className="upload-file h-[120px] w-[120px] border input-form-light rounded-lg overflow-hidden border-dashed bg-neutral-50 dark:bg-neutral-600 hover:bg-neutral-200 flex items-center flex-col justify-center gap-1" htmlFor="upload-file">
                                    <iconify-icon icon="solar:camera-outline" className="text-xl text-secondary-light" />
                                    <span className="font-semibold text-secondary-light">Upload</span>
                                    <input id="upload-file" type="file" hidden />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Upload With image preview</h6>
                        </div>
                        <div className="card-body p-6">
                            <div className="upload-image-wrapper flex items-center gap-3 flex-wrap">
                                <div className="uploaded-imgs-container flex gap-3 flex-wrap" />
                                <label className="upload-file-multiple h-[120px] w-[120px] border input-form-light rounded-lg overflow-hidden border-dashed bg-neutral-50 dark:bg-neutral-600 hover:bg-neutral-200 flex items-center flex-col justify-center gap-1" htmlFor="upload-file-multiple">
                                    <iconify-icon icon="solar:camera-outline" className="text-xl text-secondary-light" />
                                    <span className="font-semibold text-secondary-light">Upload</span>
                                    <input id="upload-file-multiple" type="file" hidden multiple />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Upload With image preview</h6>
                        </div>
                        <div className="card-body p-6">
                            <label htmlFor="file-upload-name" className="mb-4 border border-neutral-600 font-medium text-secondary-light px-4 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-neutral-200">
                                <iconify-icon icon="solar:upload-linear" className="text-xl" />
                                Click to upload
                                <input type="file" className="form-control w-auto mt-6 form-control-lg" id="file-upload-name" multiple hidden />
                            </label>
                            <ul id="uploaded-img-names" className />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ImageUpload
