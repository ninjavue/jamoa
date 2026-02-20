import React from 'react'
import { Link } from 'react-router-dom'

const Notification = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <h6 className="font-semibold mb-0 dark:text-white">Notification</h6>
                    <ul className="flex items-center gap-[6px]">
                        <li className="font-medium">
                            <Link to="/" className="flex items-center gap-2 hover:text-primary-600 dark:text-white">
                                <iconify-icon icon="solar:home-smile-angle-outline" className="icon text-lg" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="dark:text-white">-</li>
                        <li className="font-medium dark:text-white">Settings - Notification</li>
                    </ul>
                </div>
                <div className="card h-full rounded-xl overflow-hidden border-0">
                    <div className="card-body p-10">
                        <form action="#">
                            <div className="grid md:grid-cols-2 gap-x-5">
                                <div className="mb-5">
                                    <label htmlFor="firebaseSecretKey" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase secret key</label>
                                    <input type="text" className="form-control rounded-lg" id="firebaseSecretKey" placeholder="Firebase secret key" defaultValue="AAAAxGHw9lE:APA91bHKj6OsrD6EhnG5p26oTiQkXvOxTZwZEfVuuuipyUSNM-a8NB_CugVwfvvaosOvWgFAhQJOLMvxtv7e3Sw8DYpaWKwJIN3kjyIPoNRAe541sBz3x7E6sXZkA-ebueqnQiqNtbdP" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="firebasePublicVapidKey" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase public vapid key (key pair)</label>
                                    <input type="text" className="form-control rounded-lg" id="firebasePublicVapidKey" placeholder="Firebase public vapid key (key pair)" defaultValue="BKAvKJbnB3QATdp8n1aUo_uhoNK3exVKLVzy7MP8VKydjjzthdlAWdlku6LQISxm4zA7dWoRACI9AHymf4V64kA" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="firebaseAPIKey" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  API Key</label>
                                    <input type="text" className="form-control rounded-lg" id="firebaseAPIKey" placeholder="Firebase  API Key" defaultValue="AIzaSyDg1xBSwmHKV0usIKxTFL5a6fFTb4s3XVM" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="firebaseAuthDomain" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  AUTH Domain</label>
                                    <input type="text" className="form-control rounded-lg" id="firebaseAuthDomain" placeholder="Firebase  AUTH Domain" defaultValue="wowdash.firebaseapp.com" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="firebaseProjectID" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase Project ID</label>
                                    <input type="text" className="form-control rounded-lg" id="firebaseProjectID" placeholder="Firebase Project ID" defaultValue="wowdash.com" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="firebaseStorageBucket" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase Storage Bucket</label>
                                    <input type="text" className="form-control rounded-lg" id="firebaseStorageBucket" placeholder="Firebase Storage Bucket" defaultValue="wowdash.appsport.com" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="firebaseMessageSenderID" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  Message Sender ID</label>
                                    <input type="text" className="form-control rounded-lg" id="firebaseMessageSenderID" placeholder="Firebase  Message Sender ID" defaultValue={52362145} />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="firebaseAppID" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  App ID</label>
                                    <input type="text" className="form-control rounded-lg" id="firebaseAppID" placeholder="Firebase  App ID" defaultValue="1:843456771665:web:ac1e3115e9e17ee1582a70" />
                                </div>
                                <div className="mb-5 col-span-2">
                                    <label htmlFor="firebaseMeasurmentID" className="text-sm font-semibold mb-2 block text-neutral-900 dark:text-white">Firebase  Measurement ID</label>
                                    <input type="text" className="form-control rounded-lg" id="firebaseMeasurmentID" placeholder="Firebase  Measurement ID" defaultValue="G-GSJPS921XW" />
                                </div>
                                <div className="flex items-center justify-center gap-3 mt-6 col-span-2">
                                    <button type="reset" className="border border-danger-600 hover:bg-danger-200 text-danger-600 text-base px-10 py-[11px] rounded-lg">
                                        Reset
                                    </button>
                                    <button type="submit" className="btn btn-primary border border-primary-600 text-base px-6 py-3 rounded-lg">
                                        Save Change
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Notification
