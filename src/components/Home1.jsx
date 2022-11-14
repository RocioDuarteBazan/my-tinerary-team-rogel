import React from 'react'
import CallToAction from './CallToAction';





export default function Home1() {
    return (
        <>
            <div className='bg-img-1 w-100 vh-100 '>
                <div className="contenedor">
                    <h1 >My Tinerary</h1>
                    <h3>Find your perfect trip, designed by insiders who know and love their cities!</h3>
                    <div className='container-buttom'>
                        <CallToAction text='Cities' className='button-64' rute='/cities'/>
                        <CallToAction text='Hotels' className='button-64' rute='/hotels'/>
                    </div>
                </div>
            </div>
        </>
    )
}