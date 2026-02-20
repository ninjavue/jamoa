import React from 'react'
import { Link } from 'react-router-dom'

const TextGenerator = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <h6 className="font-semibold mb-0 dark:text-white">Text Generator</h6>
          <ul className="flex items-center gap-[6px]">
            <li className="font-medium">
              <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                Dashboard
              </Link>
            </li>
            <li className="dark:text-white">-</li>
            <li className="font-medium dark:text-white">Text Generator</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 flex-wrap-reverse">
          <div className="col-span-1 lg:col-span-4 2xl:col-span-3">
            <div className="card p-0 border-0">
              <div className="card-body p-0">
                <div className="p-6">
                  <Link to="text-generator-new" className="btn btn-primary text-sm btn-sm px-3 py-3 w-full rounded-lg flex items-center justify-center gap-2">
                    <i className="ri-messenger-line" />
                    New Chat
                  </Link>
                </div>
                <ul className="ai-chat-list scroll-sm px-6 pb-6 max-h-[644px] overflow-y-auto">
                  <li className="mb-4 mt-0"><span className="text-primary-600 dark:text-primary-600 text-sm font-semibold">Today</span></li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">UI/UX Design Roadmap write me the roadmap right now </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4 mt-6"><span className="text-primary-600 text-sm font-semibold">Yesterday</span></li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Online School Education Learning</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4 mt-6"><span className="text-primary-600 text-sm font-semibold">17/06/2024</span></li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Online School Education Learning</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4 mt-6"><span className="text-primary-600 text-sm font-semibold">15/06/2024</span></li>
                  <li className="mb-0">
                    <a href className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-8 2xl:col-span-9">
            <div className="chat-600 card overflow-hidden border-0">
              <div className="chat-sidebar-single gap-2 flex items-center px-6 py-5 justify-between cursor-default flex-nowrap">
                <div className="flex items-center gap-4">
                  <Link to="/text-generator-new" className="text-neutral-600 dark:text-neutral-200 text-2xl line-height-1"><i className="ri-arrow-left-line" /></Link>
                  <h6 className="text-lg mb-0 text-line-1">UI/UX Design Roadmap write me</h6>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <button type="button" className="text-secondary-light text-xl line-height-1 text-hover-primary-600"><i className="ri-edit-2-line" /></button>
                  <button type="button" className="text-secondary-light text-xl line-height-1 text-hover-primary-600"><i className="ri-delete-bin-6-line" /></button>
                </div>
              </div>{/* chat-sidebar-single end */}
              <div className="chat-message-list px-6 py-5 max-h-[612px] min-h-[612px] overflow-y-auto">
                {/* User generated Text Start */}
                <div className="flex items-start justify-between gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="img overflow-hidden shrink-0">
                      <img src="../assets/images/chat/1.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                    </div>
                    <div className="info grow">
                      <h6 className="text-lg mb-1.5">Adam Milner</h6>
                      <p className="mb-0 text-secondary-light text-sm">UI/UX Design Roadmap write me the roadmap right now </p>
                    </div>
                  </div>
                  <button type="button" className="flex items-center gap-1.5 px-2 py-1.5 bg-primary-50 dark:bg-primary-600/25 rounded bg-hover-primary-100 shrink-0"> <i className="ri-edit-2-fill" />  Edit</button>
                </div>
                {/* User generated Text End */}
                {/* WowDash generated Text Start */}
                <div className="flex items-start gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                  <div className="img overflow-hidden shrink-0">
                    <img src="../assets/images/wow-dash-favicon.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                  </div>
                  <div className="info grow">
                    <h6 className="text-lg mb-4 mt-2">WowDash</h6>
                    <p className="mb-4 text-secondary-light text-sm">Creating a UI/UX Design roadmap involves several key stages, from initial research to final testing and iteration. Here’s a detailed roadmap that outlines the typical steps and best practices in a UI/UX design project:</p>
                    <p className="font-semibold text-neutral-600 dark:text-neutral-200 my-4">1. Research and Discovery</p>
                    <p className="text-neutral-600 dark:text-neutral-200 my-4">a. Understand the Business Goals</p>
                    <ul className="list-style">
                      <li className="text-neutral-600 dark:text-neutral-200 m-0"> <span className="font-semibold text-neutral-600 dark:text-neutral-200">Kickoff Meeting:</span> Meet with stakeholders to understand the business objectives, target audience, and project scope.</li>
                      <li className="text-neutral-600 dark:text-neutral-200 m-0"> <span className="font-semibold text-neutral-600 dark:text-neutral-200">Kickoff Meeting:</span> Meet with stakeholders to understand the business objectives, target audience, and project scope.</li>
                    </ul>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5 bg-neutral-50 dark:bg-neutral-600 rounded-lg px-4 py-2.5 line-height-1">
                        <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-up-line line-height-1" /></button>
                        <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-down-line" /></button>
                        <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-share-forward-line" /></button>
                        <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-file-copy-line" /></button>
                      </div>
                      <button type="button" className="btn btn-outline-primary flex items-center gap-2"> <i className="ri-repeat-2-line" /> Regenerate</button>
                    </div>
                  </div>
                </div>
                {/* WowDash generated Text End */}
                {/* User generated Text Start */}
                <div className="flex items-start justify-between gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="img overflow-hidden shrink-0">
                      <img src="../assets/images/chat/1.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                    </div>
                    <div className="info grow">
                      <h6 className="text-lg mb-1.5">Adam Milner</h6>
                      <p className="mb-0 text-secondary-light text-sm">UI/UX Design Roadmap write me the roadmap right now </p>
                    </div>
                  </div>
                  <button type="button" className="flex items-center gap-1.5 px-2 py-1.5 bg-primary-50 dark:bg-primary-600/25 rounded bg-hover-primary-100 shrink-0"> <i className="ri-edit-2-fill" />  Edit</button>
                </div>
                {/* User generated Text End */}
                {/* WowDash generated Text Start */}
                <div className="flex items-start gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                  <div className="img overflow-hidden shrink-0">
                    <img src="../assets/images/wow-dash-favicon.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                  </div>
                  <div className="info grow">
                    <h6 className="text-lg mb-4 mt-2">WowDash</h6>
                    <p className="mb-4 text-secondary-light text-sm">Creating a UI/UX Design roadmap involves several key stages, from initial research to final testing and iteration. Here’s a detailed roadmap that outlines the typical steps and best practices in a UI/UX design project:</p>
                    <p className="font-semibold text-neutral-600 dark:text-neutral-200 my-4">1. Research and Discovery</p>
                    <p className="text-neutral-600 dark:text-neutral-200 my-4">a. Understand the Business Goals</p>
                    <ul className="list-style">
                      <li className="text-neutral-600 dark:text-neutral-200 m-0"> <span className="font-semibold text-neutral-600 dark:text-neutral-200">Kickoff Meeting:</span> Meet with stakeholders to understand the business objectives, target audience, and project scope.</li>
                      <li className="text-neutral-600 dark:text-neutral-200 m-0"> <span className="font-semibold text-neutral-600 dark:text-neutral-200">Kickoff Meeting:</span> Meet with stakeholders to understand the business objectives, target audience, and project scope.</li>
                    </ul>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-5 bg-neutral-50 dark:bg-neutral-600 rounded-lg px-4 py-2.5 line-height-1">
                        <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-up-line line-height-1" /></button>
                        <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-down-line" /></button>
                        <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-share-forward-line" /></button>
                        <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-file-copy-line" /></button>
                      </div>
                      <button type="button" className="btn btn-outline-primary flex items-center gap-2"> <i className="ri-repeat-2-line" /> Regenerate</button>
                    </div>
                  </div>
                </div>
                {/* WowDash generated Text End */}
              </div>
              <form className="chat-message-box border-t border-neutral-200 dark:border-neutral-600 flex items-center gap-4 p-6">
                <input type="text" className="w-full border-0 focus:ring-0 bg-transparent dark:bg-transparent px-0" name="chatMessage" placeholder="Message wowdash..." />
                <button type="submit" className="w-[44px] h-[44px] flex justify-center items-center rounded-lg bg-primary-600 text-white bg-hover-primary-700 text-xl">
                  <iconify-icon icon="f7:paperplane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TextGenerator
