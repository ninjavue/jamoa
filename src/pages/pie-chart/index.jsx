import React from 'react'
import { Link } from 'react-router-dom'

const PieChart = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Pie Chart</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Components / Pie Chart</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Basic Pie Chart</h6>
                        </div>
                        <div className="card-body p-6 text-center">
                            <div id="pieChart" className="flex justify-center apexcharts-tooltip-z-none" />
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Donut Chart</h6>
                        </div>
                        <div className="card-body p-6 text-center flex flex-wrap items-start gap-5 justify-center">
                            <div className="relative">
                                <div id="basicDonutChart" className="w-auto inline-block apexcharts-tooltip-z-none" />
                                <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="text-lg text-secondary-light font-medium">Total Value</span>
                                    <h4 className="mb-0">72</h4>
                                </div>
                            </div>
                            <div className="max-w-[290px] w-full">
                                <div className="flex items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-600 pb-3 mb-3">
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">Label</span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">Value</span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">%</span>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm flex items-center gap-3">
                                        <span className="w-3 h-3 bg-success-600 rounded-full" /> Label 1
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">12</span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm"> 30.6% </span>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm flex items-center gap-3">
                                        <span className="w-3 h-3 bg-primary-600 rounded-full" /> Label 2
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">22</span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">  42.9%</span>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm flex items-center gap-3">
                                        <span className="w-3 h-3 bg-info-600 rounded-full" /> Label 3
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">12</span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm"> 24.6% </span>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm flex items-center gap-3">
                                        <span className="w-3 h-3 bg-danger-600 rounded-full" /> Label 4
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">12</span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm"> 26.6% </span>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm flex items-center gap-3">
                                        <span className="w-3 h-3 bg-orange-500 rounded-full" /> Label 5
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">7</span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm"> 13.3% </span>
                                </div>
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm flex items-center gap-3">
                                        <span className="w-3 h-3 bg-warning-600 rounded-full" /> Label 6
                                    </span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm">7</span>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm"> 15.3% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Radar Chart</h6>
                        </div>
                        <div className="card-body p-6 text-center">
                            <div id="radarChart" className="square-marker check-marker series-gap-6 flex justify-center" />
                        </div>
                    </div>
                    <div className="card h-full p-0 border-0 overflow-hidden">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <h6 className="text-lg font-semibold mb-0">Multiple series</h6>
                        </div>
                        <div className="card-body p-6 text-center">
                            <div id="multipleSeriesChart" className="apexcharts-tooltip-z-none square-marker check-marker series-gap-6 flex justify-center" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PieChart
