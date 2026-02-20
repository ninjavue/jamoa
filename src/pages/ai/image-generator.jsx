import React from 'react'
import { Link } from 'react-router-dom'

const ImageGenerator = () => {
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
                  <label htmlFor="resulation" className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Image Resolution</label>
                  <input type="text" className="form-control px-4 py-3.5 border text-neutral-600 dark:text-white h-12" id="resulation" defaultValue="1024 x 1024px" />
                </div>
                <div className="mb-5">
                  <label htmlFor="style" className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Image Resolution</label>
                  <select className="form-select form-control px-4 py-1 text-neutral-600 dark:text-white h-12" id="style">
                    <option value>Carton</option>
                    <option value>Oil painting</option>
                    <option value>Pencil sketch</option>
                    <option value>Paper collage</option>
                    <option value>Street art</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="LightingStyle" className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Lighting Style</label>
                  <select className="form-select form-control px-4 py-1 text-neutral-600 dark:text-white h-12" id="LightingStyle">
                    <option value>Back lighting</option>
                    <option value>None</option>
                    <option value>Chiaroscuro</option>
                    <option value>God rays</option>
                    <option value>Studio lighting</option>
                    <option value>Candlelight</option>
                    <option value>Street lighting</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="Mood" className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Mood</label>
                  <select className="form-select form-control px-4 py-1 text-neutral-600 dark:text-white h-12" id="Mood">
                    <option value>None</option>
                    <option value>Chiaroscuro</option>
                    <option value>God rays</option>
                    <option value>Studio lighting</option>
                    <option value>Candlelight</option>
                    <option value>Street lighting</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="imageNumber" className="text-sm font-semibold text-neutral-600 dark:text-neutral-200 mb-2 inline-block">Number Of Image</label>
                  <input type="number" className="form-control px-4 py-3.5 text-neutral-600 dark:text-white h-12" id="imageNumber" defaultValue={4} />
                </div>
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
                      <h6 className="mb-0 text-lg">Please, Make 4 variant of this image Quickly As Soon As possible</h6>
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
                          <p className="mb-0 text-secondary-light text-sm">Please, Make 4 variant of this image Quickly As Soon As possible</p>
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
                          <div className="grid sm:grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                              <div className="generated-image-item rounded-lg overflow-hidden relative">
                                <img src="../assets/images/chatgpt/image-generator1.png" alt className="w-full h-full object-fit-cover" />
                                <div className="form-check style-check flex items-center absolute top-0 start-0 ms-8 mt-2">
                                  <input className="form-check-input rounded border border-neutral-400" id="image1" type="checkbox" name="checkbox" />
                                </div>
                                <label htmlFor="image1" className="absolute start-0 top-0 w-full h-full" />
                              </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                              <div className="generated-image-item rounded-lg overflow-hidden relative">
                                <img src="../assets/images/chatgpt/image-generator2.png" alt className="w-full h-full object-fit-cover" />
                                <div className="form-check style-check flex items-center absolute top-0 start-0 ms-8 mt-2">
                                  <input className="form-check-input rounded border border-neutral-400" id="image2" type="checkbox" name="checkbox" />
                                </div>
                                <label htmlFor="image2" className="absolute start-0 top-0 w-full h-full" />
                              </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                              <div className="generated-image-item rounded-lg overflow-hidden relative">
                                <img src="../assets/images/chatgpt/image-generator3.png" alt className="w-full h-full object-fit-cover" />
                                <div className="form-check style-check flex items-center absolute top-0 start-0 ms-8 mt-2">
                                  <input className="form-check-input rounded border border-neutral-400" id="image3" type="checkbox" name="checkbox" />
                                </div>
                                <label htmlFor="image3" className="absolute start-0 top-0 w-full h-full" />
                              </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                              <div className="generated-image-item rounded-lg overflow-hidden relative">
                                <img src="../assets/images/chatgpt/image-generator4.png" alt className="w-full h-full object-fit-cover" />
                                <div className="form-check style-check flex items-center absolute top-0 start-0 ms-8 mt-2">
                                  <input className="form-check-input rounded border border-neutral-400" id="image4" type="checkbox" name="checkbox" />
                                </div>
                                <label htmlFor="image4" className="absolute start-0 top-0 w-full h-full" />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-6 flex-wrap">
                            <button type="button" className="btn btn-outline-primary-600">🚀 Upscale (2x)</button>
                            <button type="button" className="btn btn-outline-primary-600">🎲 Make Square</button>
                            <button type="button" className="btn btn-outline-primary-600">⭐ Zoom Out 2x</button>
                            <button type="button" className="btn btn-outline-primary-600">🎉️ Upscale (4x) </button>
                            <button type="button" className="btn btn-outline-primary-600">🎁 Upscale (6x)</button>
                          </div>
                          <div className="mt-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-5 bg-neutral-50 dark:bg-neutral-600 rounded-lg px-4 py-2.5 line-height-1">
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-up-line line-height-1" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-down-line" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-share-forward-line" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-download-2-fill" /></button>
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
                          <p className="mb-0 text-secondary-light text-sm">Please, Make 4 variant of this image Quickly As Soon As possible</p>
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
                          <div className="grid sm:grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                              <div className="generated-image-item radius-8 overflow-hidden relative">
                                <img src="../assets/images/chatgpt/image-generator5.png" alt className="w-100 h-100 object-fit-cover" />
                                <button type="button" className="download-btn absolute top-0 end-0 me-8 mt-8 w-[50px] h-[50px] bg-primary-600 text-white d-flex justify-content-center align-items-center rounded-lg text-2xl bg-hover-primary-700">
                                  <i className="ri-download-2-fill" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-5 bg-neutral-50 dark:bg-neutral-600 rounded-lg px-4 py-2.5 line-height-1">
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-up-line line-height-1" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-thumb-down-line" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-share-forward-line" /></button>
                              <button type="button" className="text-secondary-light text-2xl flex text-hover-info-600"><i className="ri-download-2-fill" /></button>
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

export default ImageGenerator
