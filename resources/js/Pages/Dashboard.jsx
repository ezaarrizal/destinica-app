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

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Destinica</h2>
                    <nav>
                        <ul className="navbar-nav flex">
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="/article">Article</a>
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="/upload">Upload</a>
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="/destinations">Destinations</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        >
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
}





