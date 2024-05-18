import React, { useState, useRef } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link, Head, useForm, router, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ArticleUpload = (props) => {
    const { flash } = usePage().props;
    console.log(flash.message);

    const { data, setData, reset } = useForm({
        judul_artikel: "",
        isi_artikel: "",
        author: null,
        gambar: ""
    });

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setData('gambar', e.target.files[0]);
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const storeArticle = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('judul_artikel', data.judul_artikel);
        formData.append('isi_artikel', data.isi_artikel);
        formData.append('gambar', data.gambar);

        router.post("/articleupload", formData, {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user} // Ensure 'user' is part of the props
            style={{ backgroundColor: 'lightblue' }} // Optional: Add custom styles if needed
        >
            <Head title="Article Upload" />
            <div className="flex w-full h-screen bg-ijo text-white align">
                <div className="w-1/2 h-1/1 bg-black-200 m-auto">
                    <h1 className="header-title w-auto text-left -mt-5 mb-5 ml-28 text-4xl text-white font-bold">Share your thoughts</h1>
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
                <form className="w-1/2  m-auto" onSubmit={storeArticle}>
                    <div className="input-box">
                        {flash.message && (
                            <div className="rounded-md bg-white text-center text-black w-5/6 h-2/5">
                                {flash.message}
                            </div>
                        )}
                        <h1>Title of your Review</h1>
                        <input
                            type="text"
                            id="title-form"
                            name="judul_artikel"
                            className="rounded-md mt-1 w-5/6 bg-card-bg"
                            onChange={(e) => setData('judul_artikel', e.target.value)}
                            value={data.judul_artikel}
                        />

                        <h1 className="mt-3">What Do You Think?</h1>
                        <textarea
                            id="description-form"
                            name="isi_artikel"
                            className="rounded-md mt-1 w-5/6 h-60 bg-card-bg placeholder:text-tiara"
                            placeholder='Say something and explain how your best memories were made at that place'
                            onChange={(e) => setData('isi_artikel', e.target.value)}
                            value={data.isi_artikel}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="font-bold w-1/5 text-black bg-warnabutton hover:bg-warnabutton focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none mt-8"
                    >
                        Share
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default ArticleUpload;
