import React from 'react'
import { Link } from 'react-router-dom'

const VideoGenerator = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <h6 className="font-semibold mb-0 dark:text-white">Image Generator</h6>
          <ul className="flex items-center gap-[6px]">
            <li className="font-medium">
              <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                Dashboard
              </Link>
            </li>
            <li className="dark:text-white">-</li>
            <li className="font-medium dark:text-white">Image Generator</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
            <div className="card h-full p-0 border-0">
              <div className="card-body p-6">
                <div className="mb-5">
                  <label htmlFor="Title" className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Title</label>
                  <input type="text" className="form-control px-4 py-3.5 h-12" id="Title" placeholder="Enter Title" />
                </div>
                <div className="mb-5">
                  <label htmlFor="Voice" className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Language</label>
                  <select className="form-select form-control px-4 py-1 text-neutral-600 dark:text-white h-12" id="Voice">
                    <option value>Male</option>
                    <option value>Female</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="Desc" className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Desc</label>
                  <textarea className="form-control px-4 py-3.5 " id="Desc" placeholder="Write something... " defaultValue={""} />
                </div>
                <div className="mb-5">
                  <label className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Upload Avatar</label>
                  <div id="fileUpload" className="fileUpload image-upload max-w-[220px]" />
                </div>
                <button type="button" className="btn btn-primary flex items-center gap-2 px-5 shrink-0">
                  Generate
                  <i className="ri-ai-generate" />
                </button>
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
                      <h6 className="mb-0 text-lg">Alright guys, so I've just seen this website...</h6>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-secondary-light flex"><iconify-icon icon="mi:print" className="icon text-2xl line-height-1" /></button>
                      <button className="text-secondary-light flex"><iconify-icon icon="mdi:star-outline" className="icon text-2xl line-height-1" /></button>
                      <button className="text-secondary-light flex"><iconify-icon icon="material-symbols:delete-outline" className="icon text-2xl line-height-1" /></button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="py-4 px-6 flex items-start justify-between gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="img overflow-hidden shrink-0">
                          <img src="../assets/images/chat/1.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                        </div>
                        <div className="info grow">
                          <h6 className="text-lg mb-1.5">Adam Milner</h6>
                          <p className="mb-0 text-secondary-light text-sm">Alright guys, so I've just seen this website, Fortunanest website, it's an investment website and you invest there. So I actually tried it some months, I tried it just for 3 months and I realized everything was working correct. I was thinking it was this fake website, I never met this website.                                      </p>
                        </div>
                      </div>
                      <button type="button" className="flex items-center gap-1.5 px-2 py-1.5 bg-primary-50 dark:bg-primary-600/25 rounded bg-hover-primary-100 shrink-0"> <i className="ri-edit-2-fill" />  Edit</button>
                    </div>
                    <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600">
                      <div className="flex items-start gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                        <div className="img overflow-hidden shrink-0">
                          <img src="../assets/images/wow-dash-favicon.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                        </div>
                        <div className="info grow">
                          <h6 className="text-lg mb-4 mt-2">WowDash</h6>
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                              <div className="generated-image-item rounded-lg overflow-hidden relative">
                                <img src="../assets/images/chatgpt/image-generator5.png" alt className="w-full h-full object-fit-cover" />
                                <button className="w-[72px] h-[72px] bg-primary-600 hover:bg-primary-700 rounded-full text-white text-3xl flex items-center justify-center bg-hover-primary-700 absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2">
                                  <i className="ri-play-fill" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="btn btn-primary flex items-center gap-2 px-5 shrink-0 mt-4">
                            Download
                            <i className="ri-download-2-line" />
                          </button>
                          <div className="mt-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-5 bg-neutral-50 dark:bg-neutral-600 rounded-lg px-4 py-2.5 line-height-1">
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-up-line line-height-1" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-down-line" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-share-forward-line" /></button>
                            </div>
                            <button type="button" className="btn btn-outline-primary flex items-center gap-2"> <i className="ri-repeat-2-line" /> Regenerate</button>
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
                          <p className="mb-0 text-secondary-light text-sm">Alright guys, so I've just seen this website, Fortunanest website, it's an investment website and you invest there. So I actually tried it some months, I tried it just for 3 months and I realized everything was working correct. I was thinking it was this fake website, I never met this website.                                      </p>
                        </div>
                      </div>
                      <button type="button" className="flex items-center gap-1.5 px-2 py-1.5 bg-primary-50 dark:bg-primary-600/25 rounded bg-hover-primary-100 shrink-0"> <i className="ri-edit-2-fill" />  Edit</button>
                    </div>
                    <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600">
                      <div className="flex items-start gap-4 border-b border-neutral-200 dark:border-neutral-600 pb-4 mb-4">
                        <div className="img overflow-hidden shrink-0">
                          <img src="../assets/images/wow-dash-favicon.png" alt="image" className="w-[44px] h-[44px] rounded-full object-fit-cover" />
                        </div>
                        <div className="info grow">
                          <h6 className="text-lg mb-4 mt-2">WowDash</h6>
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
                              <div className="generated-image-item rounded-lg overflow-hidden relative">
                                <img src="../assets/images/chatgpt/image-generator5.png" alt className="w-full h-full object-fit-cover" />
                                <button className="w-[72px] h-[72px] bg-primary-600 hover:bg-primary-700 rounded-full text-white text-3xl flex items-center justify-center bg-hover-primary-700 absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2">
                                  <i className="ri-play-fill" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="btn btn-primary flex items-center gap-2 px-5 shrink-0 mt-4">
                            Download
                            <i className="ri-download-2-line" />
                          </button>
                          <div className="mt-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-5 bg-neutral-50 dark:bg-neutral-600 rounded-lg px-4 py-2.5 line-height-1">
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-up-line line-height-1" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-down-line" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-share-forward-line" /></button>
                            </div>
                            <button type="button" className="btn btn-outline-primary flex items-center gap-2"> <i className="ri-repeat-2-line" /> Regenerate</button>
                          </div>
                        </div>
                      </div>
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

export default VideoGenerator
