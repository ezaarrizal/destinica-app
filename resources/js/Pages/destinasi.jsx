import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'; // Make sure this path is correct
import { Head } from '@inertiajs/react';

export default function Destinasi(props) {
    return (
        <AuthenticatedLayout
            user={props.auth.user} // Assuming 'user' is part of the props
            style={{ backgroundColor: 'lightblue' }} // Optional: you can add custom styles here
        >
            <Head title="Destination" />
            <div>
                <div className="flex w-full h-screen bg-ijo text-white align">
                    <div className="w-1/2 h-1/2 bg-white">
                        <img className='object-contain w-full'
                            src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}



