import React from 'react'

const Login = () => {
    return (
        <div className='flex justify-center items-center w-full min-h-screen bg-gradient-to-r from-blue-100 to-purple-100'>
            <div className='max-w-md relative w-full'>

                <img className='absolute top-[-40px] right-[-40px] z-0' src="/assets/images/bgfon.svg" alt="" />
                <img className='absolute bottom-[-70px] left-[-74px] z-0' src="/assets/images/bgfonf.svg" alt="" />

                <div className="login-form bg-white p-8 rounded-lg shadow-md w-full relative z-10">

                    <div className="flex justify-center mb-4 flex-col items-center">
                        <img src="/assets/images/cyber.jpg" className='items-center' style={{ width: "150px" }} alt="" />
                        <h2 className="text-2xl mb-6 text-[#566a7f] dark:text-[#566a7f] mt-10">Kiberxavfsizlik markazi</h2>
                    </div>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="username">Login</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-transparent" type="text" id="username" placeholder="Login" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="password">Parol</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-transparent" type="password" id="password" placeholder="..........." />
                        </div>
                        <button className="w-full mt-10 bg-[#9d9fff] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#8a8cfd] transition-colors" type="submit">Kirish</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
