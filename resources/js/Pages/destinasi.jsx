import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link, Head, useForm, router, usePage } from '@inertiajs/react';
import PopupDelete from './PopupDelete';
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Destinasi = (props) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false)
    const [selectedArticleId, setSelectedArticleId] = useState(null);

    // const [articleProps, setArticleProps] = useState({
    //     id: "",
    //     judul_artikel: "",
    //     isi_artikel: "",
    //     gambar: "",
    // })

    const handleButtonClick = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    const handleShowConfirmation = (id, nama_destinasi, deskripsi, lokasi, tanggal, gambar ) => {
        setSelectedArticleId(id);
        setShowConfirm(true);
    };

    // const handleDelete = (id) => {
    //     if (!window.confirm('Are you sure want to delete the weather data?')) {
    //         return;
    //     }
    //     router.delete(route('articles.destroy', id))
    // }


    return (
        <div>
            <div className="flex w-full h-fit bg-ijo text-white align flex-col">
                <div className="flex">
                    <h3 className="w-3/4 text-4xl font-black mx-20 pt-10"><strong>DESTINATION</strong></h3>
                    <a href="/upload" class="inline-block bg-warnabutton hover:bg-button-hover hover:text-white text-black font-bold py-2 px-4 rounded w-25 h-10 mt-10">
                        Upload
                    </a>
                </div>

                {props.destinations ? props.destinations.map((data, i) => {
                    return (
                        <div key={i} className="flex h-3/6  mt-20 content-center">
                            <div className="w-5/12">
                                <img src={data.gambar}
                                    className='my-auto mx-20 h-5/6 rounded-md drop-shadow-md object-center' />
                            </div>
                            <div className="w-1/2">
                                <div className="relative flex justify-between items-center">
                                    <h1 className="text-2xl font-bold">{data.nama_destinasi}</h1>

                                    <button id="dropdownMenuIconButton" onClick={() => handleButtonClick(i)} data-dropdown-toggle="dropdownDots" class="ms-60 inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                        </svg>
                                    </button>
                                    {activeDropdown === i && (
                                        <div
                                            id="dropdownDots"
                                            className="absolute top-0 right-10 z-10 mt-2 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                        >
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                <li>
                                                    <Link href={`/destinations/edit/${data.id}`}>
                                                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                            Edit
                                                        </div>
                                                    </Link>{" "}
                                                </li>
                                                <li>
                                                    <Link href="#" onClick={(e) => { e.preventDefault(); handleShowConfirmation(data.id, data.nama_destinasi, data.deskripsi, data.lokasi, data.tanggal, data.gambar); }}>
                                                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                            Delete
                                                        </div>
                                                    </Link>
                                                    {showConfirm && (
                                                        <PopupDelete
                                                            setShowConfirm={setShowConfirm}
                                                            id={selectedArticleId}
                                                        />
                                                    )}

                                                </li>

                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className='flex'>
                                <MdDateRange className='text-white/70 mt-1 mr-2'/>
                                <h1 className='text-white/70'>{data.tanggal}</h1>
                                <FaLocationDot className='text-white/70 ml-5 mt-1 mr-2'/>
                                <h1 className='text-white/70'>{data.lokasi}</h1>
                                </div>

                                <p className="mt-5 font-thin">
                                    {data.deskripsi}
                                </p>
                                <div className="mt-10">
                                    <Link href={`destinations/${data.id}`} className="text-white hover:text-button-hover underline underline-offset-2">Read Full Post</Link>
                                </div>

                            </div>
                        </div>
                    );
                }) : ""}

            </div>
        </div>
    )
}

export default Destinasi
