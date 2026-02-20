import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { METHOD } from '../../api/zirhrpc';
import { useZirhStref } from '../../context/ZirhContext';
import { sendRpcRequest } from '../../api/webClient';

const Dashboard = () => {


  
  const { stRef } = useZirhStref();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const resU = await sendRpcRequest(stRef, METHOD.USER_GET, {});
      if(resU.status === METHOD.OK){
      }else if(resU.status === METHOD.Not_Found){
        localStorage.removeItem("checkUser")
        navigate("/login");
      }
    };

    getUser();
  }, []);


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
      <li className="font-medium dark:text-white">AI</li>
    </ul>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
    <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-cyan-600/10 to-bg-white">
      <div className="card-body p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Users</p>
            <h6 className="mb-0 dark:text-white">20,000</h6>
          </div>
          <div className="w-[50px] h-[50px] bg-cyan-600 rounded-full flex justify-center items-center">
            <iconify-icon icon="gridicons:multiple-users" className="text-white text-2xl mb-0" />
          </div>
        </div>
        <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-success-600 dark:text-success-400"><iconify-icon icon="bxs:up-arrow" className="text-xs" /> +4000</span>
          Last 30 days users
        </p>
      </div>
    </div>{/* card end */}
    <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-purple-600/10 to-bg-white">
      <div className="card-body p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Subscription</p>
            <h6 className="mb-0 dark:text-white">15,000</h6>
          </div>
          <div className="w-[50px] h-[50px] bg-purple-600 rounded-full flex justify-center items-center">
            <iconify-icon icon="fa-solid:award" className="text-white text-2xl mb-0" />
          </div>
        </div>
        <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-danger-600 dark:text-danger-400"><iconify-icon icon="bxs:down-arrow" className="text-xs" /> -800</span>
          Last 30 days subscription
        </p>
      </div>
    </div>{/* card end */}
    <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-blue-600/10 to-bg-white">
      <div className="card-body p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Free Users</p>
            <h6 className="mb-0 dark:text-white">5,000</h6>
          </div>
          <div className="w-[50px] h-[50px] bg-blue-600 rounded-full flex justify-center items-center">
            <iconify-icon icon="fluent:people-20-filled" className="text-white text-2xl mb-0" />
          </div>
        </div>
        <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-success-600 dark:text-success-400"><iconify-icon icon="bxs:up-arrow" className="text-xs" /> +200</span>
          Last 30 days users
        </p>
      </div>
    </div>{/* card end */}
    <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-success-600/10 to-bg-white">
      <div className="card-body p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Income</p>
            <h6 className="mb-0 dark:text-white">$42,000</h6>
          </div>
          <div className="w-[50px] h-[50px] bg-success-600 rounded-full flex justify-center items-center">
            <iconify-icon icon="solar:wallet-bold" className="text-white text-2xl mb-0" />
          </div>
        </div>
        <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-success-600 dark:text-success-400"><iconify-icon icon="bxs:up-arrow" className="text-xs" /> +$20,000</span>
          Last 30 days income
        </p>
      </div>
    </div>{/* card end */}
    <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-red-600/10 to-bg-white">
      <div className="card-body p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Expense</p>
            <h6 className="mb-0 dark:text-white">$30,000</h6>
          </div>
          <div className="w-[50px] h-[50px] bg-red-600 rounded-full flex justify-center items-center">
            <iconify-icon icon="fa6-solid:file-invoice-dollar" className="text-white text-2xl mb-0" />
          </div>
        </div>
        <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-success-600 dark:text-success-400"><iconify-icon icon="bxs:up-arrow" className="text-xs" /> +$5,000</span>
          Last 30 days expense
        </p>
      </div>
    </div>{/* card end */}
  </div>
  <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
    <div className="xl:col-span-12 2xl:col-span-6">
      <div className="card h-full rounded-lg border-0">
        <div className="card-body">
          <div className="flex flex-wrap items-center justify-between">
            <h6 className="text-lg mb-0">Sales Statistic</h6>
            <select className="form-select bg-white dark:bg-neutral-700 form-select-sm w-auto">
              <option>Yearly</option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Today</option>
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <h6 className="mb-0">$27,200</h6>
            <span className="text-sm font-semibold rounded-full bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-200 dark:border-success-600/50 px-2 py-1.5 line-height-1 flex items-center gap-1">
              10% <iconify-icon icon="bxs:up-arrow" className="text-xs" />
            </span>
            <span className="text-xs font-medium">+ $1400 Per Day</span>
          </div>
          <div id="chart" className="pt-[28px] apexcharts-tooltip-style-1" />
        </div>
      </div>
    </div>
    <div className="xl:col-span-6 2xl:col-span-3">
      <div className="card h-full rounded-lg border-0">
        <div className="card-body p-6">
          <h6 className="mb-3 font-semibold text-lg">Total Subscriber</h6>
          <div className="flex items-center gap-2 mb-5">
            <h6 className="font-semibold mb-0">5,000</h6>
            <span className="text-sm font-semibold rounded-full bg-danger-100 dark:bg-danger-600/25 text-danger-600 dark:text-danger-400 border border-danger-200 dark:border-danger-600/50 px-2 py-1.5 line-height-1 flex items-center gap-1">
              10% <iconify-icon icon="iconamoon:arrow-down-2-fill" className="icon" />
            </span>
            - 20 Per Day
          </div>
          <div id="barChart" />
        </div>
      </div>
    </div>
    <div className="xl:col-span-6 2xl:col-span-3">
      <div className="card h-full rounded-lg border-0 overflow-hidden">
        <div className="card-body p-6">
          <div className="flex items-center flex-wrap gap-2 justify-between">
            <h6 className="mb-2 font-bold text-lg">Users Overview</h6>
            <div className>
              <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
                <option>Today</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
          <div id="userOverviewDonutChart" className="apexcharts-tooltip-z-none" />
          <ul className="flex flex-wrap items-center justify-between mt-4 gap-3">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-primary-600" />
              <span className="text-secondary-light text-sm font-normal">
                New:
                <span className="text-neutral-600 dark:text-neutral-200 font-semibold">400</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-warning-600" />
              <span className="text-secondary-light text-sm font-normal">
                Subscribed:
                <span className="text-neutral-600 dark:text-neutral-200 font-semibold">300</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="xl:col-span-12 2xl:col-span-9">
      <div className="card h-full border-0">
        <div className="card-body p-6">
          <div className="mb-4">
            <ul className="tab-style-gradient flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
              <li className role="presentation">
                <button className="py-2.5 px-4 border-t-2 font-semibold text-lg inline-flex items-center gap-3 text-neutral-600" id="registered-tab" data-tabs-target="#registered" type="button" role="tab" aria-controls="registered" aria-selected="false">
                  Latest Registered
                  <span className="text-white px-2 py-0.5 bg-neutral-600 rounded-full text-sm">20</span>
                </button>
              </li>
              <li className role="presentation">
                <button className="py-2.5 px-4 border-t-2 font-semibold text-lg inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="subscribe-tab" data-tabs-target="#subscribe" type="button" role="tab" aria-controls="subscribe" aria-selected="false">
                  Latest Subscribe
                  <span className="text-white px-2 py-0.5 bg-neutral-600 rounded-full text-sm">20</span>
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div id="registered" role="tabpanel" aria-labelledby="registered-tab">
              <div className="overflow-x-auto">
                <table className="table bordered-table sm-table mb-0 table-auto">
                  <thead>
                    <tr>
                      <th scope="col">Users </th>
                      <th scope="col">Registered On</th>
                      <th scope="col">Plan</th>
                      <th scope="col" className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user1.png" alt='image'  className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Dianne Russell</h6>
                            <span className="text-sm text-secondary-light font-medium">redaniel@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Free</td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user2.png" alt='image'  className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Wade Warren</h6>
                            <span className="text-sm text-secondary-light font-medium">xterris@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Basic</td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user3.png" alt='image'  className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Albert Flores</h6>
                            <span className="text-sm text-secondary-light font-medium">seannand@mail.ru</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Standard</td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user4.png" alt='image'  className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Bessie Cooper </h6>
                            <span className="text-sm text-secondary-light font-medium">igerrin@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Business</td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user5.png" alt='image'  className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Arlene McCoy</h6>
                            <span className="text-sm text-secondary-light font-medium">fellora@mail.ru</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Enterprise </td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="hidden" id="subscribe" role="tabpanel" aria-labelledby="subscribe-tab">
              <div className="overflow-x-auto">
                <table className="table bordered-table sm-table mb-0 table-auto">
                  <thead>
                    <tr>
                      <th scope="col">Users Name </th>
                      <th scope="col">Registered On</th>
                      <th scope="col">Plan</th>
                      <th scope="col" className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user1.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Dianne Russell</h6>
                            <span className="text-sm text-secondary-light font-medium">redaniel@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Free</td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user2.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Wade Warren</h6>
                            <span className="text-sm text-secondary-light font-medium">xterris@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Basic</td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user3.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Albert Flores</h6>
                            <span className="text-sm text-secondary-light font-medium">seannand@mail.ru</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Standard</td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user4.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Bessie Cooper </h6>
                            <span className="text-sm text-secondary-light font-medium">igerrin@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Business</td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <img src="../assets/images/users/user5.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-2 overflow-hidden" />
                          <div className="grow">
                            <h6 className="text-base mb-0 font-medium">Arlene McCoy</h6>
                            <span className="text-sm text-secondary-light font-medium">fellora@mail.ru</span>
                          </div>
                        </div>
                      </td>
                      <td>27 Mar 2024</td>
                      <td>Enterprise </td>
                      <td className="text-center">
                        <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">Active</span>
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
    <div className="xl:col-span-6 2xl:col-span-3">
      <div className="card h-full border-0">
        <div className="card-body">
          <div className="flex items-center flex-wrap gap-2 justify-between">
            <h6 className="font-bold text-lg mb-0">Top Performer</h6>
            <a className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1">
              View All
              <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
            </a>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-3">
                <img src="../assets/images/users/user1.png" alt='image' className="w-10 h-10 rounded-full shrink-0 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0 font-medium">Dianne Russell</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">$20</span>
            </div>
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-3">
                <img src="../assets/images/users/user2.png" alt='image' className="w-10 h-10 rounded-full shrink-0 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0 font-medium">Wade Warren</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">$20</span>
            </div>
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-3">
                <img src="../assets/images/users/user3.png" alt='image' className="w-10 h-10 rounded-full shrink-0 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0 font-medium">Albert Flores</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">$30</span>
            </div>
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-3">
                <img src="../assets/images/users/user4.png" alt='image' className="w-10 h-10 rounded-full shrink-0 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0 font-medium">Bessie Cooper</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">$40</span>
            </div>
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-3">
                <img src="../assets/images/users/user5.png" alt='image' className="w-10 h-10 rounded-full shrink-0 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0 font-medium">Arlene McCoy</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">$10</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <img src="../assets/images/users/user1.png" aalt='image'lt className="w-10 h-10 rounded-full shrink-0 overflow-hidden" />
                <div className="grow">
                  <h6 className="text-base mb-0 font-medium">Arlene McCoy</h6>
                  <span className="text-sm text-secondary-light font-medium">Agent ID: 36254</span>
                </div>
              </div>
              <span className="text-neutral-600 dark:text-neutral-200 text-base font-medium">$10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="xl:col-span-6 2xl:col-span-6">
      <div className="card h-full border-0">
        <div className="card-body">
          <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
            <h6 className="font-bold text-lg mb-0">Top Countries</h6>
            <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
              <option>Today</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div id="world-map" className="h-full border border-neutral-200 dark:border-neutral-600 rounded-lg" />
            <div className="h-full border border-neutral-200 dark:border-neutral-600 p-4 pe-0 rounded-lg">
              <div className="max-h-[266px] overflow-y-auto scroll-sm pe-6">
                <div className="flex items-center justify-between gap-3 mb-3 pb-2">
                  <div className="flex items-center">
                    <img src="../assets/images/flags/flag1.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-4" />
                    <div className="grow">
                      <h6 className="text-sm mb-0">USA</h6>
                      <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full max-w-66 ms-auto">
                      <div className="progress progress-sm rounded-full" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-primary-600 rounded-full" style={{width: '80%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-3 pb-2">
                  <div className="flex items-center">
                    <img src="../assets/images/flags/flag2.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-4" />
                    <div className="grow">
                      <h6 className="text-sm mb-0">Japan</h6>
                      <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full max-w-66 ms-auto">
                      <div className="progress progress-sm rounded-full" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-orange rounded-full" style={{width: '60%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-3 pb-2">
                  <div className="flex items-center">
                    <img src="../assets/images/flags/flag3.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-4" />
                    <div className="grow">
                      <h6 className="text-sm mb-0">France</h6>
                      <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full max-w-66 ms-auto">
                      <div className="progress progress-sm rounded-full" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-warning-600 rounded-full" style={{width: '49%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">49%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-3 pb-2">
                  <div className="flex items-center">
                    <img src="../assets/images/flags/flag4.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-4" />
                    <div className="grow">
                      <h6 className="text-sm mb-0">Germany</h6>
                      <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full max-w-66 ms-auto">
                      <div className="progress progress-sm rounded-full" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-success-600 rounded-full" style={{width: '100%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">100%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mb-3 pb-2">
                  <div className="flex items-center">
                    <img src="../assets/images/flags/flag5.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-4" />
                    <div className="grow">
                      <h6 className="text-sm mb-0">South Korea</h6>
                      <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full max-w-66 ms-auto">
                      <div className="progress progress-sm rounded-full" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-info-600 rounded-full" style={{width: '30%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">30%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center">
                    <img src="../assets/images/flags/flag1.png" alt='image' className="w-10 h-10 rounded-full shrink-0 me-4" />
                    <div className="grow">
                      <h6 className="text-sm mb-0">USA</h6>
                      <span className="text-xs text-secondary-light font-medium">1,240 Users</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full max-w-66 ms-auto">
                      <div className="progress progress-sm rounded-full" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-primary-600 rounded-full" style={{width: '80%'}} />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs font-semibold">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="xl:col-span-6 2xl:col-span-6">
      <div className="card h-full border-0">
        <div className="card-body">
          <div className="flex items-center flex-wrap gap-2 justify-between">
            <h6 className="font-bold text-lg mb-0">Generated Content</h6>
            <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light">
              <option>Today</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <ul className="flex flex-wrap items-center mt-4 gap-3">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary-600" />
              <span className="text-secondary-light text-sm font-semibold">
                Word:
                <span className="text-neutral-600 dark:text-neutral-200 font-bold">400</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-warning-600" />
              <span className="text-secondary-light text-sm font-semibold">
                Image:
                <span className="text-neutral-600 dark:text-neutral-200 font-bold">300</span>
              </span>
            </li>
          </ul>
          <div className="mt-[60px]">
            <div id="paymentStatusChart" className="margin-16-minus" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Dashboard
