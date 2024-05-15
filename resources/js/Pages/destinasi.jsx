import React from 'react';

export default function destinasi(props) {
    console.log(props)
    return (
        <div>
            <div className="flex w-full h-screen bg-ijo text-white align">
                <div className="w-1/2 h-1/2 bg-white">
                    <img className='object-contain w-full'
                        src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D"
                    />
                </div>
            </div>
        </div>
    )
}

import { Link, Head } from '@inertiajs/react';
