import React from 'react'
import { router } from '@inertiajs/react';
import route from 'ziggy-js';

const PopupDelete = ({ setShowConfirm, id, handleDelete }) => {


    
    return (
        <section className="w-full fixed left-0 top-0 flex flex-col justify-center items-center h-screen">
            <div className="w-full fixed bg-black/70 left-0 top-0 h-screen" onClick={() => setShowConfirm(false)}></div>
            <div className="bg-white relative rounded-md">
                <header className="border-b py-2 px-9 text-black m-auto font-bold"> Delete  this Data? </header>
                <div className="p-6 text-black">
                    <div className='flex '>
                        <button onClick={() => handleDelete(id)} className="mx-3 border border-red text-red bg-white p-2 rounded-md hover:bg-red hover:text-white">Yes</button>
                        <button onClick={() => setShowConfirm(false)} className="border border-black text-black bg-white p-2 rounded-md hover:bg-black hover:text-white">Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopupDelete
