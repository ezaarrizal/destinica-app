import React from 'react';

import { Link, Head } from '@inertiajs/react';

export default function LoginPage(props) {
    /*const navigate = useNavigate()*/
    return (
        <div>
            <Head title={props.title} />
            <body class="flex">
                <div class="w-1/2 bg-gray-200">
                <img src="https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="ini gambar" className="gambar w-auto h-screen mx-auto object-cover justify-center item-center" />
                </div>
                <div class="w-1/2 bg-black bg-left bg-right bg-no-repeat bg-contain bg-auto">
                    <div className='wrapper w-96 bg-transparent border-2 border-white backdrop-blur-30 shadow-md text-white rounded-lg px-5 py-12 fixed right-14 top-1/2 transform -translate-x-20 -translate-y-1/2'>
                        <form action="">
                            <h1 className="text-3xl text-center">Welcome Back!</h1>
                            <div className="input-box">
                                <input className="w-full h-full bg-transparent outline-none border border-white border-opacity-20 rounded-full text-white text-lg px-8 py-6 placeholder-white" type="text" placeholder='Email or Username' required />
                            </div>

                            <div className='input-box'>
                                <input className="w-full h-full bg-transparent outline-none border border-white border-opacity-20 rounded-full text-white text-lg px-8 py-6 placeholder-white" type="password" placeholder='Password' required />
                            </div>

                            <div className="forgot">
                                <a href="#" className="text-white">Forgot password?</a>
                            </div>

                            <button type='submit' className="w-full h-12 bg-white rounded-full shadow-md mt-8 text-lg font-semibold text-gray-800">Login</button>

                            <div className="register-link mt-8">
                                <p>Don't have an account?<Link to="/register" className="text-white font-semibold">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </body>

        </div>
    );
};

