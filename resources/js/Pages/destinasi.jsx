import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function destinasi(props){
    console.log(props)
    return(
        <div>
            <Head title = {props.title}/>
            <h1>INDONESIA</h1>
        </div>
    )
}
