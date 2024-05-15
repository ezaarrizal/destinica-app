import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link, Head, useForm, router, usePage } from '@inertiajs/react';

const ArticleUpload = (props) => {

    return (
        <div>
            <div className="flex w-full h-fit bg-ijo text-white align flex-col">
                <h1 className="text-4xl font-black mx-auto pt-10">ARTICLE OF THE WEEK</h1>
                {props.articles ? props.articles.map((data, i) => {
                    return (
                        <div key={i} className="flex h-3/6  mt-20 content-center">
                            <div className="w-5/12">
                                <img src={data.gambar}
                                    className='my-auto mx-20 h-5/6 rounded-md drop-shadow-md object-center' />
                            </div>
                            <div className="w-1/2">
                                <h1 className="text-2xl font-bold">{data.judul_artikel}</h1>
                                <p className="mt-5 font-thin">
                                    {data.isi_artikel}
                                </p>
                                <p className="text-purple mt-5"><a href="">Read Full Article</a></p>
                            </div>
                        </div>
                    );
                }) : ""}

            </div>
        </div>
    )
}

export default ArticleUpload
