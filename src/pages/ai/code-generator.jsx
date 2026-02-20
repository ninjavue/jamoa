import React from 'react'
import { Link } from 'react-router-dom'

const CodeGenerator = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <h6 className="font-semibold mb-0 dark:text-white">Code Generator</h6>
          <ul className="flex items-center gap-[6px]">
            <li className="font-medium">
              <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                Dashboard
              </Link>
            </li>
            <li className="dark:text-white">-</li>
            <li className="font-medium dark:text-white">Code Generator</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
            <div className="card p-0 border-0">
              <div className="card-body p-0">
                <div className="p-6">
                  <Link to="/text-generator-new" className="btn btn-primary text-sm btn-sm px-3 py-3 w-full rounded-lg flex items-center justify-center gap-2">
                    <i className="ri-messenger-line" />
                    New Chat
                  </Link>
                </div>
                <ul className="ai-chat-list scroll-sm px-6 pb-6 max-h-[644px] overflow-y-auto">
                  <li className="mb-4 mt-0"><span className="text-primary-600 dark:text-primary-600 text-sm font-semibold">Today</span></li>
                  <li className="mb-4">
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Please create a 5 Column table with HTM</Link>
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
                    <Link to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</Link>
                  </li>
                  <li className="mb-4">
                    <a to="/text-generator" className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</a>
                  </li>
                  <li className="mb-4 mt-6"><span className="text-primary-600 text-sm font-semibold">15/06/2024</span></li>
                  <li className="mb-0">
                    <a  className="line-clamp-1 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover: text-hover-primary-600">Calorie-dense foods: Needs, healthy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
            <div className="card h-full p-0 email-card overflow-x-auto block border-0">
              <div className="min-w-[450px] flex flex-col justify-between h-full">
                <div className>
                  <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center gap-3 justify-between flex-wrap">
                    <div className="flex items-center gap-2">
                      <button className="text-secondary-light flex me-2"><iconify-icon icon="mingcute:arrow-left-line" className="icon text-xl line-height-1" /></button>
                      <h6 className="mb-0 text-lg">Please create a 5 Column table with HTML Css and js</h6>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-secondary-light flex"><iconify-icon icon="mi:print" className="icon text-2xl line-height-1" /></button>
                      <button className="text-secondary-light flex"><iconify-icon icon="mdi:star-outline" className="icon text-2xl line-height-1" /></button>
                      <button className="text-secondary-light flex"><iconify-icon icon="material-symbols:delete-outline" className="icon text-2xl line-height-1" /></button>
                    </div>
                  </div>
                  <div className="card-body p-0 max-h-[612px] min-h-[612px] overflow-y-auto">
                    <div className="py-4 px-6 flex items-start justify-between gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="img overflow-hidden shrink-0">
                          <img src="../assets/images/chat/1.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                        </div>
                        <div className="info grow">
                          <h6 className="text-lg mb-1.5">Adam Milner</h6>
                          <p className="mb-0 text-secondary-light text-sm">Please create a 5 Column table with HTML Css and js</p>
                        </div>
                      </div>
                      <button type="button" className="flex items-center gap-1.5 px-2 py-1.5 bg-primary-50 dark:bg-primary-600/25 rounded bg-hover-primary-100 shrink-0"> <i className="ri-edit-2-fill" />  Edit</button>
                    </div>
                    <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600">
                      <div className="flex items-start gap-3">
                        <img src="../assets/images/wow-dash-favicon.png" alt className="w-10 h-10 rounded-full" />
                        <div className>
                          <div className="flex items-center flex-wrap gap-2">
                            <h6 className="mb-0 text-lg">WowDash</h6>
                          </div>
                          <div className="info grow">
                            <pre className="language-html mb-4 text-secondary-light text-sm">{"                                                    "}<code>{"\n"}{"        "}{"\n"}{"            "}{"\n"}{"                "}<meta charSet="UTF-8" />{"\n"}{"                "}<meta name="viewport" content="width=device-width, initial-scale=1.0" />{"\n"}{"                "}<link rel="stylesheet" href="styles.css" />{"\n"}{"                "}<title>5 Column Table</title>{"\n"}{"            "}{"\n"}{"            "}{"\n"}{"                "}<div className="table-container">{"\n"}{"                    "}<table id="data-table">{"\n"}{"                        "}<thead>{"\n"}{"                        "}<tr>{"\n"}{"                            "}<th>Column 1</th>{"\n"}{"                            "}<th>Column 2</th>{"\n"}{"                            "}<th>Column 3</th>{"\n"}{"                            "}<th>Column 4</th>{"\n"}{"                            "}<th>Column 5</th>{"\n"}{"                        "}</tr>{"\n"}{"                        "}</thead>{"\n"}{"                        "}<tbody>{"\n"}{"                        "}{/* Table content goes here */}{"            "}{"\n"}{"                        "}</tbody>{"\n"}{"                    "}</table>{"\n"}{"                "}</div>{"\n"}{"                "}{"\n"}{"            "}{"\n"}{"        "}{"\n"}{"                "}</code>{"\n"}{"            "}</pre>
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
                      </div>
                    </div>
                    <div className="py-4 px-6 flex items-start justify-between gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="img overflow-hidden shrink-0">
                          <img src="../assets/images/chat/1.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                        </div>
                        <div className="info grow">
                          <h6 className="text-lg mb-1.5">Adam Milner</h6>
                          <p className="mb-0 text-secondary-light text-sm">Please create a 5 Column table with HTML Css and js</p>
                        </div>
                      </div>
                      <button type="button" className="flex items-center gap-1.5 px-2 py-1.5 bg-primary-50 dark:bg-primary-600/25 rounded bg-hover-primary-100 shrink-0"> <i className="ri-edit-2-fill" />  Edit</button>
                    </div>
                  </div>
                </div>
                <div className="card-footer py-4 px-6 bg-white dark:bg-neutral-700 border-t border-neutral-200 dark:border-neutral-600">
                  <form action="#">
                    <div className="flex items-center justify-between">
                      <textarea className="textarea-max-height bg-transparent focus:ring-0 w-full p-0 rounded-lg border-0 py-2 ps-2 resize-none scroll-sm" oninput="adjustHeight(this)" placeholder="Write massage" defaultValue={""} />
                      <div className="flex items-center gap-4 ms-4">
                        <div className>
                          <label htmlFor="attatchment" className="text-secondary-light text-xl">
                            <iconify-icon icon="octicon:link-16" className="icon line-height-1" />
                          </label>
                          <input type="file" id="attatchment" hidden />
                        </div>
                        <div className>
                          <label htmlFor="gallery" className="text-secondary-light text-xl">
                            <iconify-icon icon="solar:gallery-bold" className="icon line-height-1" />
                          </label>
                          <input type="file" id="gallery" hidden />
                        </div>
                        <button type="submit" className="btn bg-primary-600 hover:bg-primary-700 text-white text-sm px-3 py-3 w-full rounded-lg flex items-center justify-center gap-1 h-[44px]">
                          <iconify-icon icon="ion:paper-plane-outline" className="icon text-lg line-height-1" />
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CodeGenerator
