import React from 'react'
import { Link } from 'react-router-dom'

const Nft = () => {
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
                        <li className="font-medium dark:text-white">NFT &amp; Gaming</li>
                    </ul>
                </div>
                <div className="gap-6 grid grid-cols-1 2xl:grid-cols-12">
                    <div className="col-span-12 2xl:col-span-8">
                        <div className="gap-6 grid grid-cols-1 sm:grid-cols-12">
                            <div className="col-span-12">
                                <div className="nft-promo-card card border-0 rounded-xl overflow-hidden relative z-1 py-6 3xl:px-[76px] 2xl:px-[56px] xl:px-[40px] lg:px-[28px] px-4">
                                    <img src="../assets/images/nft/nft-gradient-bg.png" className="absolute start-0 top-0 w-full h-full z-[1]" alt />
                                    <div className="nft-promo-card__inner flex 3xl:gap-[80px] 2xl:gap-[48px] xl:gap-[32px] lg:gap-6 gap-4 items-center relative z-[1]">
                                        <div className="nft-promo-card__thumb w-full">
                                            <img src="../assets/images/nft/nf-card-img.png" alt className="w-full h-full object-fit-cover" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h4 className="mb-4 text-white">Discover The Largest  NFTs Marketplace</h4>
                                            <p className="text-white text-base">The largest NFT (Non-Fungible Token) marketplace is OpenSea. Established in 2017, OpenSea has grown to become the leading platform for buying, selling, and trading digital assets,</p>
                                            <div className="flex items-center flex-wrap mt-6 gap-4">
                                                <a className="btn rounded-full border br-white text-white px-[32px] py-[11px] hover:bg-white hover:text-neutral-900">Explore</a>
                                                <a className="btn rounded-full btn-primary-600 px-[28px] py-[11px]">Create Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <h6 className="mb-4">Trending Bids</h6>
                                <div className="gap-6 grid grid-cols-1 sm:grid-cols-12">
                                    {/* Dashboard Widget Start */}
                                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                        <div className="card border-0 px-6 py-4 shadow-none rounded-xl h-full bg-gradient-start-3">
                                            <div className="card-body p-0">
                                                <div className="flex flex-wrap items-center justify-between gap-1">
                                                    <div className="flex items-center flex-wrap gap-4">
                                                        <span className="w-10 h-10 bg-primary-600 flex-shrink-0 text-white flex justify-center items-center rounded-full h6 mb-0">
                                                            <iconify-icon icon="flowbite:users-group-solid" className="icon" />
                                                        </span>
                                                        <div className="flex-grow-1">
                                                            <h6 className="font-semibold mb-0">24,000</h6>
                                                            <span className="font-medium text-secondary-light text-base">Artworks</span>
                                                            <p className="text-sm mb-0 flex items-center flex-wrap gap-3 mt-3">
                                                                <span className="bg-success-focus px-1.5 py-0.5 rounded-sm font-medium text-success-600 dark:text-success-600 text-sm flex items-center gap-2">
                                                                    +168.001%
                                                                    <i className="ri-arrow-up-line" />
                                                                </span> This week
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dashboard Widget End */}
                                    {/* Dashboard Widget Start */}
                                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                        <div className="card border-0 px-6 py-4 shadow-none rounded-xl h-full bg-gradient-start-5">
                                            <div className="card-body p-0">
                                                <div className="flex flex-wrap items-center justify-between gap-1">
                                                    <div className="flex items-center flex-wrap gap-4">
                                                        <span className="w-10 h-10 bg-primary-600 flex-shrink-0 text-white flex justify-center items-center rounded-full h6 mb-0">
                                                            <iconify-icon icon="flowbite:users-group-solid" className="icon" />
                                                        </span>
                                                        <div className="flex-grow-1">
                                                            <h6 className="font-semibold mb-0">82,000</h6>
                                                            <span className="font-medium text-secondary-light text-base">Auction</span>
                                                            <p className="text-sm mb-0 flex items-center flex-wrap gap-3 mt-3">
                                                                <span className="bg-danger-focus px-1.5 py-0.5 rounded-sm font-medium text-danger-600 dark:text-danger-600 text-sm flex items-center gap-2">
                                                                    +168.001%
                                                                    <i className="ri-arrow-down-line" />
                                                                </span> This week
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dashboard Widget End */}
                                    {/* Dashboard Widget Start */}
                                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                        <div className="card border-0 px-6 py-4 shadow-none rounded-xl h-full bg-gradient-start-2">
                                            <div className="card-body p-0">
                                                <div className="flex flex-wrap items-center justify-between gap-1">
                                                    <div className="flex items-center flex-wrap gap-4">
                                                        <span className="w-10 h-10 bg-primary-600 flex-shrink-0 text-white flex justify-center items-center rounded-full h6 mb-0">
                                                            <iconify-icon icon="flowbite:users-group-solid" className="icon" />
                                                        </span>
                                                        <div className="flex-grow-1">
                                                            <h6 className="font-semibold mb-0">800</h6>
                                                            <span className="font-medium text-secondary-light text-base">Creators</span>
                                                            <p className="text-sm mb-0 flex items-center flex-wrap gap-3 mt-3">
                                                                <span className="bg-success-focus px-1.5 py-0.5 rounded-sm font-medium text-success-600 dark:text-success-600 text-sm flex items-center gap-2">
                                                                    +168.001%
                                                                    <i className="ri-arrow-up-line" />
                                                                </span> This week
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Dashboard Widget End */}
                                </div>
                            </div>
                            <div className="col-span-12">
                                <div className="mb-4 mt-8 flex flex-wrap justify-between gap-4">
                                    <h6 className="mb-0">Trending NFTs</h6>
                                    <ul className="style-pill-button flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                        <li className=" border-0 me-2" role="presentation">
                                            <button className="font-semibold rounded-full px-5 py-1.5 border border-neutral-300 text-neutral-900 dark:border-neutral-300 dark:text-white" id="all-tab" data-tabs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="false">All</button>
                                        </li>
                                        <li className=" border-0 me-2" role="presentation">
                                            <button className="font-semibold rounded-full px-5 py-1.5 border border-neutral-300 text-neutral-900 dark:border-neutral-300 dark:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="art-tab" data-tabs-target="#art" type="button" role="tab" aria-controls="art" aria-selected="false">Art</button>
                                        </li>
                                        <li className=" border-0 me-2" role="presentation">
                                            <button className="font-semibold rounded-full px-5 py-1.5 border border-neutral-300 text-neutral-900 dark:border-neutral-300 dark:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="music-tab" data-tabs-target="#music" type="button" role="tab" aria-controls="music" aria-selected="false">Music</button>
                                        </li>
                                        <li className=" border-0 me-2" role="presentation">
                                            <button className="font-semibold rounded-full px-5 py-1.5 border border-neutral-300 text-neutral-900 dark:border-neutral-300 dark:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="utility-tab" data-tabs-target="#utility" type="button" role="tab" aria-controls="utility" aria-selected="false">Utility</button>
                                        </li>
                                        <li className=" border-0 me-2" role="presentation">
                                            <button className="font-semibold rounded-full px-5 py-1.5 border border-neutral-300 text-neutral-900 dark:border-neutral-300 dark:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="fashion-tab" data-tabs-target="#fashion" type="button" role="tab" aria-controls="fashion" aria-selected="false">Fashion</button>
                                        </li>
                                    </ul>
                                </div>
                                <div id="default-tab-content">
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="all" role="tabpanel" aria-labelledby="all-tab">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img1.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">Fantastic Alien</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img1.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img2.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img2.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img3.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img3.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img4.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img4.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="art" role="tabpanel" aria-labelledby="art-tab">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img3.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img3.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img1.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">Fantastic Alien</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img1.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img4.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img4.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img2.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img2.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="music" role="tabpanel" aria-labelledby="music-tab">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img1.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">Fantastic Alien</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img1.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img2.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img2.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img3.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img3.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img4.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img4.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="utility" role="tabpanel" aria-labelledby="utility-tab">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img4.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img4.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img1.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">Fantastic Alien</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img1.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img3.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img3.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img2.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img2.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="fashion" role="tabpanel" aria-labelledby="fashion-tab">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img2.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img2.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img1.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">Fantastic Alien</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img1.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img4.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img4.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden">
                                                <div className="rounded overflow-hidden">
                                                    <img src="../assets/images/nft/nft-img3.png" alt className="w-full h-full object-fit-cover" />
                                                </div>
                                                <div className="p-2.5">
                                                    <h6 className="text-base font-bold text-primary-light">New Figures</h6>
                                                    <div className="flex items-center gap-2">
                                                        <img src="../assets/images/nft/nft-user-img3.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                        <span className="text-sm text-secondary-light font-medium">Watson Kristin</span>
                                                    </div>
                                                    <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap">
                                                        <span className="text-sm text-secondary-light font-medium">
                                                            Price:
                                                            <span className="text-sm text-primary-light font-semibold">1.44 ETH</span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-primary-600">$4,224.96</span>
                                                    </div>
                                                    <div className="flex items-center flex-wrap mt-3 gap-2">
                                                        <a className="btn rounded-full border text-neutral-500 border-neutral-500 px-3 py-1.5 hover:bg-neutral-500 hover:text-white flex-grow-1">History</a>
                                                        <a className="btn rounded-full btn-primary-600 px-3 py-1.5 flex-grow-1">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <div className="card border-0 h-full">
                                    <div className="card-body p-6">
                                        <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                                            <h6 className="font-bold text-lg mb-0">Recent Bid</h6>
                                            <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light rounded-full">
                                                <option>All Items </option>
                                                <option>New Item</option>
                                                <option>Trending Item</option>
                                                <option>Old Item</option>
                                            </select>
                                        </div>
                                        <div className="table-responsive scroll-sm">
                                            <div className="table-responsive scroll-sm">
                                                <table className="table bordered-table sm-table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Items </th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Your Offer</th>
                                                            <th scope="col">Recent Offer</th>
                                                            <th scope="col">Time Left</th>
                                                            <th scope="col" className="text-center">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-items-img1.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold">Spanky &amp; Friends</h6>
                                                                        <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>1.44 ETH</td>
                                                            <td>3.053 ETH</td>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-offer-img1.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold text-primary-light">1.44.00 ETH</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>2h 5m 40s</td>
                                                            <td>
                                                                <div className="d-inline-flex items-center gap-3">
                                                                    <button type="button" className="text-xl text-success-600"><i className="ri-edit-line" /></button>
                                                                    <button type="button" className="text-xl text-danger-600 remove-btn"><i className="ri-delete-bin-6-line" /></button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-items-img2.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold">Nike Air Shoe</h6>
                                                                        <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>1.44 ETH</td>
                                                            <td>3.053 ETH</td>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-offer-img2.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold text-primary-light">1.44.00 ETH</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>2h 5m 40s</td>
                                                            <td>
                                                                <div className="d-inline-flex items-center gap-3">
                                                                    <button type="button" className="text-xl text-success-600"><i className="ri-edit-line" /></button>
                                                                    <button type="button" className="text-xl text-danger-600 remove-btn"><i className="ri-delete-bin-6-line" /></button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-items-img3.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold">Woman Dresses</h6>
                                                                        <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>1.44 ETH</td>
                                                            <td>3.053 ETH</td>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-offer-img3.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold text-primary-light">1.44.00 ETH</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>2h 5m 40s</td>
                                                            <td>
                                                                <div className="d-inline-flex items-center gap-3">
                                                                    <button type="button" className="text-xl text-success-600"><i className="ri-edit-line" /></button>
                                                                    <button type="button" className="text-xl text-danger-600 remove-btn"><i className="ri-delete-bin-6-line" /></button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-items-img4.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold">Smart Watch</h6>
                                                                        <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>1.44 ETH</td>
                                                            <td>3.053 ETH</td>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-offer-img4.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold text-primary-light">1.44.00 ETH</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>2h 5m 40s</td>
                                                            <td>
                                                                <div className="d-inline-flex items-center gap-3">
                                                                    <button type="button" className="text-xl text-success-600"><i className="ri-edit-line" /></button>
                                                                    <button type="button" className="text-xl text-danger-600 remove-btn"><i className="ri-delete-bin-6-line" /></button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-items-img5.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold">Hoodie Rose</h6>
                                                                        <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>1.44 ETH</td>
                                                            <td>3.053 ETH</td>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-offer-img5.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold text-primary-light">1.44.00 ETH</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>2h 5m 40s</td>
                                                            <td>
                                                                <div className="d-inline-flex items-center gap-3">
                                                                    <button type="button" className="text-xl text-success-600"><i className="ri-edit-line" /></button>
                                                                    <button type="button" className="text-xl text-danger-600 remove-btn"><i className="ri-delete-bin-6-line" /></button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-items-img6.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold">Hoodie Rose</h6>
                                                                        <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>1.44 ETH</td>
                                                            <td>3.053 ETH</td>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-offer-img6.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold text-primary-light">1.44.00 ETH</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>2h 5m 40s</td>
                                                            <td>
                                                                <div className="d-inline-flex items-center gap-3">
                                                                    <button type="button" className="text-xl text-success-600"><i className="ri-edit-line" /></button>
                                                                    <button type="button" className="text-xl text-danger-600 remove-btn"><i className="ri-delete-bin-6-line" /></button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-items-img2.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold">Hoodie Rose</h6>
                                                                        <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>1.44 ETH</td>
                                                            <td>3.053 ETH</td>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <img src="../assets/images/nft/nft-offer-img7.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="text-base mb-0 font-semibold text-primary-light">1.44.00 ETH</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>2h 5m 40s</td>
                                                            <td>
                                                                <div className="d-inline-flex items-center gap-3">
                                                                    <button type="button" className="text-xl text-success-600"><i className="ri-edit-line" /></button>
                                                                    <button type="button" className="text-xl text-danger-600 remove-btn"><i className="ri-delete-bin-6-line" /></button>
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
                    </div>
                    <div className="col-span-12 2xl:col-span-4">
                        <div className="gap-6 grid grid-cols-1 sm:grid-cols-12">
                            <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                                <div className="card border-0 h-full">
                                    <div className="card-header border-bottom flex items-center flex-wrap gap-2 justify-between">
                                        <h6 className="font-bold text-lg mb-0">ETH Price</h6>
                                        <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-secondary-light rounded-full">
                                            <option>November </option>
                                            <option>December</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                        </select>
                                    </div>
                                    <div className="card-body">
                                        <div id="enrollmentChart" className="apexcharts-tooltip-style-1 yaxies-more" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                                <div className="card border-0 h-full">
                                    <div className="card-header border-bottom flex items-center flex-wrap gap-2 justify-between">
                                        <h6 className="font-bold text-lg mb-0">Statistics</h6>
                                        <a className="text-primary-600 hover:text-primary-700 flex items-center gap-1">
                                            View All
                                            <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="flex items-center gap-1 justify-between mb-[44px]">
                                            <div>
                                                <h5 className="font-semibold mb-3">145</h5>
                                                <span className="text-secondary-light font-normal text-xl">Total Art Sold</span>
                                            </div>
                                            <div id="dailyIconBarChart" />
                                        </div>
                                        <div className="flex items-center gap-1 justify-between">
                                            <div>
                                                <h5 className="font-semibold mb-3">750 ETH</h5>
                                                <span className="text-secondary-light font-normal text-xl">Total Earnings</span>
                                            </div>
                                            <div id="areaChart" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                                <div className="card border-0 h-full">
                                    <div className="card-header border-bottom flex items-center flex-wrap gap-2 justify-between">
                                        <h6 className="font-bold text-lg mb-0">Featured Creators</h6>
                                        <a className="text-primary-600 hover:text-primary-700 flex items-center gap-1">
                                            View All
                                            <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="flex items-center justify-between gap-2 flex-wrap">
                                            <div className="flex items-center">
                                                <img src="../assets/images/nft/nft-items-img1.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-semibold">Theresa Webb</h6>
                                                    <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-outline-primary-600 px-6 rounded-full follow-btn">Follow</button>
                                        </div>
                                        <div className="mt-6">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden shadow-4">
                                                    <div className="rounded overflow-hidden">
                                                        <img src="../assets/images/nft/featured-creator1.png" alt className="w-full h-full object-fit-cover" />
                                                    </div>
                                                    <div className="p-3">
                                                        <h6 className="text-base font-bold text-primary-light mb-3">New Figures</h6>
                                                        <div className="flex items-center gap-2">
                                                            <img src="../assets/images/nft/bitcoin.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                            <span className="text-sm text-secondary-light font-medium">0.10 BTC</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nft-card bg-white dark:bg-neutral-700 rounded overflow-hidden shadow-4">
                                                    <div className="rounded overflow-hidden">
                                                        <img src="../assets/images/nft/featured-creator2.png" alt className="w-full h-full object-fit-cover" />
                                                    </div>
                                                    <div className="p-3">
                                                        <h6 className="text-base font-bold text-primary-light mb-3">Abstrac Girl</h6>
                                                        <div className="flex items-center gap-2">
                                                            <img src="../assets/images/nft/bitcoin.png" className="w-28-px h-28-px rounded-full object-fit-cover" alt />
                                                            <span className="text-sm text-secondary-light font-medium">0.10 BTC</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 2xl:col-span-12">
                                <div className="card border-0 h-full">
                                    <div className="card-header border-bottom flex items-center flex-wrap gap-2 justify-between">
                                        <h6 className="font-bold text-lg mb-0">Featured Creators</h6>
                                        <a className="text-primary-600 hover:text-primary-700 flex items-center gap-1">
                                            View All
                                            <iconify-icon icon="solar:alt-arrow-right-linear" className="icon" />
                                        </a>
                                    </div>
                                    <div className="card-body pt-6">
                                        <div className="flex items-center justify-between gap-2 flex-wrap mb-[32px]">
                                            <div className="flex items-center">
                                                <img src="../assets/images/nft/creator-img1.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-semibold">Theresa Webb</h6>
                                                    <span className="text-sm text-secondary-light font-normal">@wishon</span>
                                                </div>
                                            </div>
                                            <button type="button" className="btn bg-primary-600 border-primary-600 text-white px-6 rounded-full follow-btn transition-2">Follow</button>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 flex-wrap mb-[32px]">
                                            <div className="flex items-center">
                                                <img src="../assets/images/nft/creator-img2.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-semibold">Arlene McCoy</h6>
                                                    <span className="text-sm text-secondary-light font-normal">@nemccoy</span>
                                                </div>
                                            </div>
                                            <button type="button" className="btn bg-primary-600 border-primary-600 text-white px-6 rounded-full follow-btn transition-2">Follow</button>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 flex-wrap mb-[32px]">
                                            <div className="flex items-center">
                                                <img src="../assets/images/nft/creator-img3.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-semibold">Kathryn Murphy</h6>
                                                    <span className="text-sm text-secondary-light font-normal">@kathrynmur</span>
                                                </div>
                                            </div>
                                            <button type="button" className="btn bg-primary-600 border-primary-600 text-white px-6 rounded-full follow-btn transition-2">Follow</button>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 flex-wrap mb-[32px]">
                                            <div className="flex items-center">
                                                <img src="../assets/images/nft/creator-img4.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-semibold">Marvin McKinney</h6>
                                                    <span className="text-sm text-secondary-light font-normal">@marvinckin</span>
                                                </div>
                                            </div>
                                            <button type="button" className="btn bg-primary-600 border-primary-600 text-white px-6 rounded-full follow-btn transition-2">Follow</button>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 flex-wrap mb-[32px]">
                                            <div className="flex items-center">
                                                <img src="../assets/images/nft/creator-img1.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-semibold">Theresa Webb</h6>
                                                    <span className="text-sm text-secondary-light font-normal">@wishon</span>
                                                </div>
                                            </div>
                                            <button type="button" className="btn bg-primary-600 border-primary-600 text-white px-6 rounded-full follow-btn transition-2">Follow</button>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 flex-wrap mb-0">
                                            <div className="flex items-center">
                                                <img src="../assets/images/nft/creator-img5.png" alt className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                                <div className="flex-grow-1">
                                                    <h6 className="text-base mb-0 font-semibold">Dianne Russell</h6>
                                                    <span className="text-sm text-secondary-light font-normal">@dinne_r</span>
                                                </div>
                                            </div>
                                            <button type="button" className="btn bg-primary-600 border-primary-600 text-white px-6 rounded-full follow-btn transition-2">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Nft
