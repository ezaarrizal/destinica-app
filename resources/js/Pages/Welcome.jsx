import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-bold text-white hover:text-white-900 dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-bold text-white hover:text-white dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("https://images.unsplash.com/photo-1613382237354-eaebbebe6eba?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
                    background-size: cover; /* or contain */
    background-position: center; /* centers the image */
    background-repeat: no-repeat; /* prevents the image from repeating */
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
                        background-size: cover; /* or contain */
    background-position: center; /* centers the image */
    background-repeat: no-repeat; /* prevents the image from repeating */
                    }
                }
                
            `}</style>
        </>
    );
}
