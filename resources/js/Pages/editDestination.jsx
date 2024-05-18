import React, { useState, useRef } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link, Head, useForm, router, usePage } from '@inertiajs/react';


const editDestination = ({destination}) => {
    const {flash} = usePage().props;
    console.log(flash.message);

    const {data, setData} = useForm({
        nama_destinasi: destination.nama_destinasi,
        deskripsi: destination.deskripsi,
        lokasi: destination.lokasi,
        gambar: null,
        tanggal: destination.tanggal
    })

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setData('gambar', e.target.files[0]);
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PUT');
        if (data.nama_destinasi !== destination.nama_destinasi) {
            formData.append('nama_destinasi', data.nama_destinasi);
        }
        if (data.deskripsi !== destination.deskripsi) {
            formData.append('deskripsi', data.deskripsi);
        }
        if (data.lokasi !== destination.lokasi) {
            formData.append('lokasi', data.lokasi);
        }
        if (data.tanggal !== destination.tanggal) {
            formData.append('tanggal', data.tanggal);
        }
        if (data.gambar) {
            formData.append('gambar', data.gambar);
        } else {
            formData.append('gambar_existing', destination.gambar);
        }

        router.post(`/destinations/edit/${destination.id}`, formData, {
            forceFormData: true,
            onFinish: () => {
                setData({
                    nama_destinasi: destination.nama_destinasi,
                    deskripsi: destination.deskripsi,
                    lokasi: destination.lokasi,
                    tanggal: destination.tanggal,
                    gambar: null,
                });
            }
        });
    }


    return (
        <div>
            <div className="flex w-full h-screen bg-ijo text-white align">
                <div className="w-1/2 h-1/1 bg-black-200 m-auto">
                    <h1 className="header-title w-auto text-left -mt-5 mb-5 ml-28 text-4xl text-white font-bold">Want to share your moments?</h1>
                    <div className="cardup bg-black-500 shadow-md overflow-hidden px-5 py-5 flex-col justify-center items-center text-white ml-14">
                        <div className="card-content-up bg-card-bg rounded-banyak p-8 text-center ml-10 w-3/4 h-auto">
                            <IoCloudUploadOutline className="m-auto text-5xl mb-5 mt-5" />
                            <h1 className="upload-text text-2xl mb-5 text-white opacity-100">Drop Your Files Here</h1>
                            <h1 className="upload-text text-2xl mb-5">Or</h1>
                            <button className="mb-5 px-8 py-2 bg-black" onClick={handleFileClick}>Browse Files</button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
                <form className="w-1/2  m-auto" onSubmit={handleUpdate}>
                        <div class="input-box">
                            {flash.message &&(
                                <div className="rounded-md bg-white text-center text-black w-5/6 h-2/5">
                                    {flash.message}
                                </div>
                            )}
                            <h1>Title of your Review</h1>
                            <input type="text" id="title-form" name="nama_destinasi" className="rounded-md mt-1 w-5/6 bg-card-bg"
                            onChange={(e)=>setData('nama_destinasi', e.target.value)}
                            value={data.nama_destinasi}/>

                            <h1 className="mt-3">What Do You Think?</h1>
                            <textarea id="description-form" name="description" className="rounded-md mt-1 w-5/6 h-24 bg-card-bg placeholder:text-tiara" placeholder='Say something and explain how your best memories were made at that place'
                            onChange={(e)=>setData('deskripsi', e.target.value)}
                            value={data.deskripsi}></textarea>

                            <div className="flex flex-row">
                                <div className="basis-1/2">
                                    <h1 className="mt-2">Location</h1>
                                    <input type="text" id="location-form" name="location" className="rounded-md mt-1 w-5/6 bg-card-bg flex placeholder:text-tiara" placeholder='Enter review location'
                                    onChange={(e)=>setData('lokasi', e.target.value)}
                                    value={data.lokasi}/>
                                </div>
                                <div className="basis-1/2">
                                    <h1 className="mt-3">When Did You Visit?</h1>
                                    <input type="date" id="day" name="day" className="rounded-md mt-1 w-64 bg-card-bg text-tiara"
                                    onChange={(e)=>setData('tanggal', e.target.value)}
                                    value={data.tanggal}/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="font-bold w-1/5 text-black bg-warnabutton hover:bg-warnabutton focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none mt-8"
                           >Yes, I want to!</button>
                </form>
            </div>
        </div>
    )
}

export default editDestination
