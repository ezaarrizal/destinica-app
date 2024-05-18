/*import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

           
        </AuthenticatedLayout>
    );
}*/

import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import tes1 from '/resources/image/article1.jpg';
import tes2 from '/resources/image/dest1.jpg';
import tes3 from '/resources/image/dest3.jpg';
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Dashboard({ auth }) {
    const images = [tes1, tes2, tes3];
    const [backgroundImage, setBackgroundImage] = useState(images[0]);

    const changeBackground = () => {
        const currentIndex = images.indexOf(backgroundImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setBackgroundImage(images[nextIndex]);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Head title="Dashboard" />
            <button
                onClick={changeBackground}
                className="fixed bottom-9 right-9 text-white hover:text-gray-300 focus:outline-none p-2"
            >
                <FaCircleArrowRight className="h-9 w-9" />
            </button>
        </AuthenticatedLayout>
    );
}





