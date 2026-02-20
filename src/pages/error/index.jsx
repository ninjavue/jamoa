import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">404</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">404</li>
                    </ul>
                </div>
                <div className="card basic-data-table border-0 overflow-hidden">
                    <div className="card-body py-10 lg:py-[60px] xl:py-[80px] px-8 text-center">
                        <img src="../assets/images/error-img.png" alt className="mb-6 mx-auto" />
                        <h6 className="mb-4">Page not Found</h6>
                        <p className="text-secondary-light">Sorry, the page you are looking for doesn't exist </p>
                        <Link to="/" className="btn btn-primary-600 rounded-lg px-5 py-[11px] mt-10">Back to Home</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Error
