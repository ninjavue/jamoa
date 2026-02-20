import React from 'react'
import { Link } from 'react-router-dom'

const LineChart = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Line Chart</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Line Chart</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Default Line Chart</h6>
                        </div>
                        <div className="card-body p-6">
                            <div id="defaultLineChart" className="apexcharts-tooltip-style-1" />
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Zoomable Chart</h6>
                        </div>
                        <div className="card-body p-6">
                            <div id="zoomAbleLineChart" />
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Line Chart with Data Labels</h6>
                        </div>
                        <div className="card-body p-6">
                            <div id="lineDataLabel" />
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Line Chart Animation</h6>
                        </div>
                        <div className="card-body p-6">
                            <div id="doubleLineChart" />
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Stepline Charts</h6>
                        </div>
                        <div className="card-body p-6">
                            <div id="stepLineChart" />
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Gradient Charts</h6>
                        </div>
                        <div className="card-body p-6">
                            <div id="gradientLineChart" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LineChart
