import React from 'react';
import { Link, Head } from '@inertiajs/react';


export default function article(props) {
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
    return (
        <div>
            <Head title={props.title} />
            {props.articles ? props.articles.map((data, i) => {
                return (
                    <div key={i} class="flex w-full">
                        <div class="w-1.5/4 bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1514351606796-9d81063e482d?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="ini gambar" className="gambar w-auto h-screen mx-auto object-cover justify-center item-center" />
                        </div>
                        <div className="w-3/4 bg-black text-white">
                            <h1 className="font-poppins font-bold text-5xl mt-20 ml-10">{data.judul_artikel}</h1>
                            <p className="font-poppins font-normal text-md ml-10 pt-2">{data.author}</p>
                            <p class="font-poppins font-normal text-2xl ml-10 mr-20 pt-10">
                                {data.isi_artikel}
                            </p>
                        </div>
                    </div>
                )
            }) : ""}

        </div>
    )
}

// div class="w-1/3 bg-gray-200 p-4">
//                 <img src="logo.png" alt="Logo" class="logo w-24 h-auto my-4 ml-10 border-4 border-red-500" />
//                 <img src="gambar.jpg" alt="ini gambar" class="gambar w-auto h-auto mx-auto object-cover mt-auto" />

//             </div>
//             <div class="w-2/3 bg-black -300 p-4 text-white">
//             <h1 class="font-poppins font-semibold text-6xl ml-16 pt-8">Judul Artikel</h1>
//             </div>
