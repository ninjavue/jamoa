import React from 'react'
import { Link } from 'react-router-dom'

const TermsCondition = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Terms &amp; Conditions</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Terms &amp; Conditions</li>
                    </ul>
                </div>
                <div className="card basic-data-table rounded-xl overflow-hidden border-0">
                    <div className="card-body p-0">
                        {/* Editor Toolbar Start */}
                        <div id="toolbar-container">
                            <span className="ql-formats">
                                <select className="ql-font" />
                                <select className="ql-size" />
                            </span>
                            <span className="ql-formats">
                                <button className="ql-bold" />
                                <button className="ql-italic" />
                                <button className="ql-underline" />
                                <button className="ql-strike" />
                            </span>
                            <span className="ql-formats">
                                <select className="ql-color" />
                                <select className="ql-background" />
                            </span>
                            <span className="ql-formats">
                                <button className="ql-script" value="sub" />
                                <button className="ql-script" value="super" />
                            </span>
                            <span className="ql-formats">
                                <button className="ql-header" value={1} />
                                <button className="ql-header" value={2} />
                                <button className="ql-blockquote" />
                                <button className="ql-code-block" />
                            </span>
                            <span className="ql-formats">
                                <button className="ql-list" value="ordered" />
                                <button className="ql-list" value="bullet" />
                                <button className="ql-indent" value={-1} />
                                <button className="ql-indent" value={+1} />
                            </span>
                            <span className="ql-formats">
                                <button className="ql-direction" value="rtl" />
                                <select className="ql-align" />
                            </span>
                            <span className="ql-formats">
                                <button className="ql-link" />
                                <button className="ql-image" />
                                <button className="ql-video" />
                                <button className="ql-formula" />
                            </span>
                            <span className="ql-formats">
                                <button className="ql-clean" />
                            </span>
                        </div>
                        {/* Editor Toolbar Start */}
                        {/* Editor start */}
                        <div id="editor">
                            <p className>This policy explains how 6amMart website and related applications (the “Site”, “we” or “us”) collects, uses, shares and protects the personal information that we collect through this site or different channels. 6amMart has established the site to link up the users </p>
                            <p><br /></p>
                            <h1>Using ChatGPT</h1>
                            <p className>This policy explains how 6amMart website and related applications (the “Site”, “we” or “us”) collects, uses, shares and protects the personal information that we collect through this site or different channels. 6amMart has established the site to link up the users who need foods or grocery items to be shipped or </p>
                            <p><br /></p>
                            <h1>Intellectual Property</h1>
                            <p className>This policy explains how 6amMart website and related applications (the “Site”, “we” or “us”) collects, uses, shares and protects the personal information that we collect through this site or different channels. 6amMart has established the site to link up the users who need foods or grocery items to be shipped or delivered by the riders from the affiliated restaurants or shops to the desired location. This policy also applies to any mobile applications that we develop for use </p>
                            <p><br /></p>
                            <h1>Using ChatGPT</h1>
                            <p className>This policy explains how 6amMart website and related applications (the “Site”, “we” or “us”) collects, uses, shares and protects the personal information that we collect through this site or different channels. 6amMart has established the site to link up the users who need foods or grocery items to be shipped or delivered by the riders from the affiliated restaurants or shops to the desired location. This policy also applies to any mobile applications that we develop for use with </p>
                            <p><br /></p>
                            <p> our services on the Site, and references to this “Site”, “we” or “us” is intended .  grocery items to be shipped or delivered by the riders from the affiliated restaurants or shops to the desired location. This policy also applies to any mobile applications that we develop for use</p>
                            <p>Some initial <strong>bold</strong> text</p>
                            <p><br /></p>
                        </div>
                        {/* Edit End */}
                    </div>
                    <div className="card-footer p-6 bg-white dark:bg-neutral-700 border border-b border-neutral-200 dark:border-neutral-600 border-end-0 border-start-0">
                        <div className="flex items-center justify-center gap-3">
                            <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-base px-[50px] py-[11px] rounded-lg">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary border border-primary-600 text-base px-7 py-3 rounded-lg">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TermsCondition
