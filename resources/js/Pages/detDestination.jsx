import React from 'react';
import { usePage, Link, Head } from '@inertiajs/react';
import { MdDateRange } from "react-icons/md";



const detDestination = () => {
    const { destination } = usePage().props;

    return (
        <div className="detailDest h-screen w-full overflow-y-auto flex flex-col bg-ijo">
            <section className="sect1 w-auto h-auto grid mt-20 flex">
                <div className="review w-full pt-5 h-auto flex flex-row items-start">
                    <div className="text-container w-3/4 mr-5">
                        <h1 className="header-title text-white font-bold text-left mb-1 text-4xl pl-20">Top places with reviews</h1>
                        <p className="secondary-title text-left text-white text-md pl-20">Travelers want to see more reviews of these places.</p>
                    </div>
                    <div className="w-1/2">
                    <a href="/upload" class="inline-block bg-warnabutton hover:bg-button-hover hover:text-white text-black font-bold py-2 px-4 rounded w-25 h-10 ml-96 mr-10">
                        Upload
                    </a>
                    </div>
                </div>
            </section>

            <section className="sect2">
                <div className="flex">
                    <div className="left w-1/2">
                        <img src={destination.gambar} className="pict-dest mt-10 w-9/10 h-2/3 border-b border-gray-300 overflow-hidden relative ml-20 rounded-lg" />
                    </div>
                    <div className="right w-1/2">
                        <h2 className="dest-title text-left mb-1 mt-10 text-2xl text-white font-bold">{destination.nama_destinasi}</h2>
                        <p className="dest-desc text-justify mb-1 text-md mr-40 text-white mt-5">{destination.deskripsi}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default detDestination;

{/* <div>
            <div class="flex w-full h-fit bg-ijo text-white align">

                <div class="w-1/2 h-screen bg-gray-200 flex flex-col">
                <h1 className='m-auto'>Top Places With Review</h1>
                    <img src={destination.gambar}
                        alt="ini gambar" className="w-11/12 m-auto object-cover justify-center item-center rounded-lg" />
                </div>
                <div className="w-3/4 bg-ijo text-white pl-20">
                    <h1 className="font-poppins font-bold text-5xl mt-48 ">{destination.nama_destinasi}</h1>
                    <div className="flex mt-3">
                    <MdDateRange className="text-xl"/>
                    <p className="font-poppins font-normal text-grey text-md ml-2 ">{destination.tanggal}</p>
                    </div>

                    <p class="font-poppins font-normal text-2xl mr-20 pt-10">
                        {destination.deskripsi}
                    </p>
                </div>
            </div>
        </div> */}


