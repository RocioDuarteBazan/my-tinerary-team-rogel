import React from 'react'
import './CityCards.css'

export default function CityCard(props) {
    let { city } = props

    return (
        <div className='container-card'>
            <div className="card">
                <div className="imgbox">
                    <div className="img"> <img src={city.photo} alt="" /></div>
                </div>
                <div className="details">
                    <h2 className="title">{city.name}</h2>
                    <span className="caption">{city.continent}</span>
                    <div>
                        <a className='bottom-cards' href="#">Discover</a>
                    </div>
                </div>
            </div>
        </div>


    )
}





