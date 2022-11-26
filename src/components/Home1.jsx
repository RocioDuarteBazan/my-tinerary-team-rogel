import React from 'react'
import CallToAction from './CallToAction';
import iniciovideo from "../assets/iniciovideo.mp4"





export default function Home1() {
    return (
        <>
            <div className='w-100 vh-100 '>
                <video className='bg-img-1' src={iniciovideo} autoPlay muted loop></video>
                <div className="contenedor">
                    <h1>My Tinerary</h1>
                    <h3>Find your perfect trip, designed by insiders who know and love their cities!</h3>
                    <div className='container-button'>
                        <CallToAction text='Cities' className='custom-btn btn-8' rute='/cities'/>
                        <CallToAction text='Hotels' className='custom-btn btn-8' rute='/hotels'/>
                    </div>
                </div>
            </div>
        </>
    )
}