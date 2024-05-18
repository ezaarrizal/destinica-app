import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout'; // Adjust the import path as necessary

const ArticleDetail = () => {
    const { article, auth } = usePage().props; // Assuming 'auth' contains the user data

    return (
        <Authenticated user={auth.user}>
            <Head title={article.judul_artikel} />
            <div className="flex w-full">
                <div className="w-1/4 bg-gray-200">
                    <img src={article.gambar}
                        alt="ini gambar" className="gambar w-auto h-screen mx-auto object-cover justify-center item-center" />
                </div>
                <div className="w-3/4 bg-black text-white">
                    <h1 className="font-poppins font-bold text-5xl mt-20 ml-10">{article.judul_artikel}</h1>
                    <p className="font-poppins font-normal text-md ml-10 pt-2">{article.author}</p>
                    <p className="font-poppins font-normal text-2xl ml-10 mr-20 pt-10">
                        {article.isi_artikel}
                    </p>
                </div>
            </div>
        </Authenticated>
    );
};

export default ArticleDetail;
