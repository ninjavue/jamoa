import React from 'react'
import { Link } from 'react-router-dom'

const Crm = () => {
  return (
    <>
     <div>
  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
    <h6 className="font-semibold mb-0 dark:text-white">Dashboard</h6>
    <ul className="flex items-center gap-[6px]">
      <li className="font-medium">
        <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
          <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
          Dashboard
        </Link>
      </li>
      <li className="dark:text-white">-</li>
      <li className="font-medium dark:text-white">CRM</li>
    </ul>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
    <div className="lg:col-span-12 2xl:col-span-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-primary-600/10 to-bg-white">
          <div className="card-body p-0">
            <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <span className="mb-0 w-[44px] h-[44px] bg-primary-600 shrink-0 text-white flex justify-center items-center rounded-full h6">
                  <iconify-icon icon="mingcute:user-follow-fill" className="icon" />
                </span>
                <div>
                  <span className="mb-2 font-medium text-secondary-light text-sm">New Users</span>
                  <h6 className="font-semibold">15,000</h6>
                </div>
              </div>
              <div id="new-user-chart" className="remove-tooltip-title rounded-tooltip-value" />
            </div>
            <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+200</span> this week</p>
          </div>
        </div>
        <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-success-600/10 to-bg-white">
          <div className="card-body p-0">
            <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <span className="mb-0 w-[44px] h-[44px] bg-success-600 shrink-0 text-white flex justify-center items-center rounded-full h6">
                  <iconify-icon icon="mingcute:user-follow-fill" className="icon" />
                </span>
                <div>
                  <span className="mb-2 font-medium text-secondary-light text-sm">Active Users</span>
                  <h6 className="font-semibold">8,000</h6>
                </div>
              </div>
              <div id="active-user-chart" className="remove-tooltip-title rounded-tooltip-value" />
            </div>
            <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+200</span> this week</p>
          </div>
        </div>
        <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-warning-600/10 to-bg-white">
          <div className="card-body p-0">
            <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <span className="mb-0 w-[44px] h-[44px] bg-warning-600 text-white shrink-0 flex justify-center items-center rounded-full h6">
                  <iconify-icon icon="iconamoon:discount-fill" className="icon" />
                </span>
                <div>
                  <span className="mb-2 font-medium text-secondary-light text-sm">Total Sales</span>
                  <h6 className="font-semibold">$5,00,000</h6>
                </div>
              </div>
              <div id="total-sales-chart" className="remove-tooltip-title rounded-tooltip-value" />
            </div>
            <p className="text-sm mb-0">Increase by  <span className="bg-danger-100 dark:bg-danger-600/25 px-1 py-px rounded font-medium text-danger-600 dark:text-danger-400 text-sm">-$10k</span> this week</p>
          </div>
        </div>
        <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-purple-600/10 to-bg-white">
          <div className="card-body p-0">
            <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <span className="mb-0 w-[44px] h-[44px] bg-purple-600 text-white shrink-0 flex justify-center items-center rounded-full h6">
                  <iconify-icon icon="mdi:message-text" className="icon" />
                </span>
                <div>
                  <span className="mb-2 font-medium text-secondary-light text-sm">Conversion</span>
                  <h6 className="font-semibold">25%</h6>
                </div>
              </div>
              <div id="conversion-user-chart" className="remove-tooltip-title rounded-tooltip-value" />
            </div>
            <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+5%</span> this week</p>
          </div>
        </div>
        <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-pink-600/10 to-bg-white">
          <div className="card-body p-0">
            <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <span className="mb-0 w-[44px] h-[44px] bg-pink-600 text-white shrink-0 flex justify-center items-center rounded-full h6">
                  <iconify-icon icon="mdi:leads" className="icon" />
                </span>
                <div>
                  <span className="mb-2 font-medium text-secondary-light text-sm">Leads</span>
                  <h6 className="font-semibold">250</h6>
                </div>
              </div>
              <div id="leads-chart" className="remove-tooltip-title rounded-tooltip-value" />
            </div>
            <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+20</span> this week</p>
          </div>
        </div>
        <div className="card px-4 py-5 shadow-2 rounded-lg border-gray-200 dark:border-neutral-600 h-full bg-gradient-to-l from-cyan-600/10 to-bg-white">
          <div className="card-body p-0">
            <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <span className="mb-0 w-[44px] h-[44px] bg-cyan-600 text-white shrink-0 flex justify-center items-center rounded-full h6">
                  <iconify-icon icon="streamline:bag-dollar-solid" className="icon" />
                </span>
                <div>
                  <span className="mb-2 font-medium text-secondary-light text-sm">Total Profit</span>
                  <h6 className="font-semibold">$3,00,700</h6>
                </div>
              </div>
              <div id="total-profit-chart" className="remove-tooltip-title rounded-tooltip-value" />
            </div>
            <p className="text-sm mb-0">Increase by  <span className="bg-success-100 dark:bg-success-600/25 px-1 py-px rounded font-medium text-success-600 dark:text-success-400 text-sm">+$15k</span> this week</p>
          </div>
        </div>
      </div>
    </div>
    {/* Revenue Growth start */}
    <div className="lg:col-span-12 2xl:col-span-4">
      <div className="card h-full rounded-lg border-0">
        <div className="card-body p-6">
          <div className="flex items-center flex-wrap gap-2 justify-between">
            <div>
              <h6 className="mb-2 font-bold text-lg">Revenue Growth</h6>
              <span className="text-sm font-medium text-secondary-light">Weekly Report</span>
            </div>
            <div className="text-end">
              <h6 className="mb-2 font-bold text-lg">$50,000.00</h6>
              <span className="bg-success-100 dark:bg-success-600/25 px-3 py-1 rounded font-medium text-success-600 dark:text-success-400 text-sm">$10k</span>
            </div>
          </div>
          <div id="revenue-chart" className="mt-0" />
        </div>
      </div>
    </div>
    {/* Revenue Growth End */}
    {/* Earning Static start */}
    <div className="lg:col-span-12 2xl:col-span-8">
      <div className="card h-full rounded-lg border-0">
        <div className="card-body p-6">
          <div className="flex items-center flex-wrap gap-2 justify-between">
            <div>
              <h6 className="mb-2 font-bold text-lg">Earning Statistic</h6>
              <span className="text-sm font-medium text-secondary-light">Yearly earning overview</span>
            </div>
            <div className>
              <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Today</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex justify-center flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
              <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-secondary-light group-hover:text-white group-hover:bg-primary-600">
                <iconify-icon icon="fluent:cart-16-filled" className="icon" />
              </span>
              <div>
                <span className="text-secondary-light text-sm font-medium">Sales</span>
                <h6 className="text-base font-semibold mb-0">$200k</h6>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
              <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-secondary-light group-hover:text-white group-hover:bg-primary-600">
                <iconify-icon icon="uis:chart" className="icon" />
              </span>
              <div>
                <span className="text-secondary-light text-sm font-medium">Income</span>
                <h6 className="text-base font-semibold mb-0">$200k</h6>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
              <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-secondary-light group-hover:text-white group-hover:bg-primary-600">
                <iconify-icon icon="ph:arrow-fat-up-fill" className="icon" />
              </span>
              <div>
                <span className="text-secondary-light text-sm font-medium">Profit</span>
                <h6 className="text-base font-semibold mb-0">$200k</h6>
              </div>
            </div>
          </div>
          <div id="barChart" />
        </div>
      </div>
    </div>
    {/* Earning Static End */}
    {/* Campaign Static start */}
    <div className="lg:col-span-12 2xl:col-span-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
          <div className="card h-full rounded-lg border-0">
            <div className="card-body p-6">
              <div className="flex items-center flex-wrap gap-2 justify-between">
                <h6 className="mb-2 font-bold text-lg">Campaigns</h6>
                <div className>
                  <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                    <option>Yearly</option>
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Today</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl line-height-1 flex align-content-center shrink-0 text-orange-500 dark:text-orange-500">
                      <iconify-icon icon="majesticons:mail" className="icon" />
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm ps-4">Email</span>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div className="ms-auto">
                      <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '80%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl line-height-1 flex align-content-center shrink-0 text-success-500 dark:text-success-500">
                      <iconify-icon icon="eva:globe-2-fill" className="icon" />
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm ps-4">Website</span>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div className="ms-auto">
                      <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div className="bg-success-500 h-2.5 rounded-full" style={{width: '80%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl line-height-1 flex align-content-center shrink-0 text-blue-600 dark:text-blue-500">
                      <iconify-icon icon="fa6-brands:square-facebook" className="icon" />
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm ps-4">Facebook</span>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div className="ms-auto">
                      <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '80%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center">
                    <span className="text-2xl line-height-1 flex align-content-center shrink-0 text-purple-600 dark:text-purple-500">
                      <iconify-icon icon="fluent:location-off-20-filled" className="icon" />
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-200 font-medium text-sm ps-4">Email</span>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div className="ms-auto">
                      <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '80%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
          <div className="card h-full rounded-lg border-0 overflow-hidden">
            <div className="card-body p-6">
              <div className="flex items-center flex-wrap gap-2 justify-between">
                <h6 className="mb-2 font-bold text-lg">Customer Overview</h6>
                <div className>
                  <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                    <option>Yearly</option>
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Today</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-4">
                <ul className="shrink-0">
                  <li className="flex items-center gap-2 mb-7">
                    <span className="w-3 h-3 rounded-full bg-success-600" />
                    <span className="text-secondary-light text-sm font-medium">Total: 400</span>
                  </li>
                  <li className="flex items-center gap-2 mb-7">
                    <span className="w-3 h-3 rounded-full bg-warning-600" />
                    <span className="text-secondary-light text-sm font-medium">New: 400</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary-600" />
                    <span className="text-secondary-light text-sm font-medium">Active: 1400</span>
                  </li>
                </ul>
                <div id="donutChart" className="grow apexcharts-tooltip-z-none title-style circle-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Campaign Static End */}
    {/* Client Payment Status Start */}
    <div className="lg:col-span-6 2xl:col-span-4">
      <div className="card h-full rounded-lg border-0">
        <div className="card-body p-6">
          <h6 className="mb-2 font-bold text-lg">Client Payment Status</h6>
          <span className="text-sm font-medium text-secondary-light">Weekly Report</span>
          <ul className="flex flex-wrap items-center justify-center mt-8">
            <li className="flex items-center gap-2 me-7">
              <span className="w-3 h-3 rounded-full bg-success-600" />
              <span className="text-secondary-light text-sm font-medium">Paid: 400</span>
            </li>
            <li className="flex items-center gap-2 me-7">
              <span className="w-3 h-3 rounded-full bg-info-600" />
              <span className="text-secondary-light text-sm font-medium">Pending: 400</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-warning-600" />
              <span className="text-secondary-light text-sm font-medium">Overdue: 1400</span>
            </li>
          </ul>
          <div className="mt-[60px]">
            <div id="paymentStatusChart" className="margin-16-minus" />
          </div>
        </div>
      </div>
    </div>
    {/* Client Payment Status End */}
    {/* Country Status Start */}
    <div className="lg:col-span-6 2xl:col-span-4">
      <div className="card rounded-lg border-0">
        <div className="card-body">
          <div className="flex items-center flex-wrap gap-2 justify-between">
            <h6 className="mb-2 font-bold text-lg">Countries Status</h6>
            <div className>
              <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Today</option>
              </select>
            </div>
          </div>
        </div>
        <div id="world-map" className="h-[200px] bg-neutral-100 dark:bg-neutral-600/30" />
        <div className="card-body p-6 max-h-[266px] scroll-sm overflow-y-auto">
          <div className>
            <div className="flex items-center justify-between gap-3 mb-3 pb-2">
              <div className="flex items-center w-full">
                <img src="../assets/images/flags/flag1.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-sm mb-0">USA</h6>
                  <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                  <div className="bg-primary-600 h-2.5 rounded-full" style={{width: '80%'}} />
                </div>
                <span className="text-secondary-light font-xs font-semibold">80%</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 mb-3 pb-2">
              <div className="flex items-center w-full">
                <img src="../assets/images/flags/flag2.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-sm mb-0">Japan</h6>
                  <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '60%'}} />
                </div>
                <span className="text-secondary-light font-xs font-semibold">60%</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 mb-3 pb-2">
              <div className="flex items-center w-full">
                <img src="../assets/images/flags/flag3.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-sm mb-0">France</h6>
                  <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                  <div className="bg-warning-600 h-2.5 rounded-full" style={{width: '49%'}} />
                </div>
                <span className="text-secondary-light font-xs font-semibold">49%</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center w-full">
                <img src="../assets/images/flags/flag4.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-sm mb-0">Germany</h6>
                  <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                  <div className="bg-success-600 h-2.5 rounded-full" style={{width: '100%'}} />
                </div>
                <span className="text-secondary-light font-xs font-semibold">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Country Status End */}
    {/* Top performance Start */}
    <div className="lg:col-span-12 2xl:col-span-4">
      <div className="card border-0 overflow-hidden">
        <div className="card-body">
          <div className="flex items-center flex-wrap gap-2 justify-between">
            <h6 className="mb-2 font-bold text-lg">Top Performer</h6>
            <a className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
              View All
              <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
            </a>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between gap-3 mb-8">
              <div className="flex items-center">
                <img src="../assets/images/users/user1.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0">Dianne Russell</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">60/80</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-8">
              <div className="flex items-center">
                <img src="../assets/images/users/user2.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0">Wade Warren</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">50/70</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-8">
              <div className="flex items-center">
                <img src="../assets/images/users/user3.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0">Albert Flores</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">55/75</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-8">
              <div className="flex items-center">
                <img src="../assets/images/users/user4.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0">Bessie Cooper</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">60/80</span>
            </div>
            <div className="flex items-center justify-between gap-3 mb-8">
              <div className="flex items-center">
                <img src="../assets/images/users/user5.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0">Arlene McCoy</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">55/75</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center">
                <img src="../assets/images/users/user1.png" alt className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0">Arlene McCoy</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">50/70</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Top performance End */}
    {/* Latest Performance Start */}
    <div className="lg:col-span-12 2xl:col-span-6">
      <div className="card h-full border-0 overflow-hidden">
        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 ps-0 py-0 pe-6 flex items-center justify-between">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
              <li className role="presentation">
                <button className="inline-block p-4 border-b-2 rounded-t-lg transition-colors ease-in-out duration-300 text-neutral-600 dark:text-white" id="todoList-styled-tab" data-tabs-target="#styled-todoList" type="button" role="tab" aria-controls="styled-todoList" aria-selected="false">To Do List</button>
              </li>
              <li className role="presentation">
                <button className="inline-block p-4 border-b-2 rounded-t-lg transition-colors ease-in-out duration-300 text-neutral-600 dark:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="recentLead-styled-tab" data-tabs-target="#styled-recentLead" type="button" role="tab" aria-controls="styled-recentLead" aria-selected="false">Recent Leads</button>
              </li>
            </ul>
          </div>
          <a className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
            View All
            <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
          </a>
        </div>
        <div className="card-body p-6">
          <div id="default-styled-tab-content">
            <div className="hidden rounded-lg" id="styled-todoList" role="tabpanel">
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Task Name </th>
                      <th scope="col">Assigned To </th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Kathryn Murphy</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown1" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown1" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Darlene Robertson</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown2" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Courtney Henry</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown3" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown3" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Jenny Wilson</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown4" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown4" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Leslie Alexander</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown5" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown5" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="hidden rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-recentLead" role="tabpanel">
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Task Name </th>
                      <th scope="col">Assigned To </th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Kathryn Murphy</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown6" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown6" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Darlene Robertson</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown7" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown7" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Courtney Henry</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown8" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown8" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Jenny Wilson</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown9" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown9" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="text-base block line-height-1 font-medium text-neutral-600 dark:text-neutral-200 text-w-200-px">Hotel Management System</span>
                          <span className="text-sm block font-normal text-secondary-light">#5632</span>
                        </div>
                      </td>
                      <td>Leslie Alexander</td>
                      <td>27 Mar 2024</td>
                      <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span> </td>
                      <td className="text-center text-neutral-700 text-xl">
                        <button data-dropdown-toggle="dropdown10" className="focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-lg px-4 py-2.5 text-neutral-700 text-2xl dark:text-white" type="button">
                          <i className="ri-more-2-fill" />
                        </button>
                        {/* Dropdown menu */}
                        <div id="dropdown10" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-lg w-44 dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Another Actions</a>
                            </li>
                            <li>
                              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Something else</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:col-span-12 2xl:col-span-6">
      <div className="card h-full border-0 overflow-hidden">
        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center justify-between">
          <h6 className="text-lg font-semibold mb-0">Last Transaction</h6>
          <a className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
            View All
            <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
          </a>
        </div>
        <div className="card-body p-6">
          <div className="table-responsive scroll-sm">
            <table className="table bordered-table style-two mb-0">
              <thead>
                <tr>
                  <th scope="col">Transaction ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td> <span className="bg-warning-100 dark:bg-warning-600/25 text-warning-600 dark:text-warning-400 px-6 py-1.5 rounded-full font-medium text-sm">Pending</span> </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td> <span className="bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 px-6 py-1.5 rounded-full font-medium text-sm">Rejected</span> </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Completed</span> </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Completed</span> </td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>5986124445445</td>
                  <td>27 Mar 2024</td>
                  <td> <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Completed</span> </td>
                  <td>$20,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* Latest Performance End */}
  </div>
</div>

    </>
  )
}

export default Crm
