import React from 'react'
import './CityCards.css'
import { Link as LinkRouter} from 'react-router-dom'

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
                        <LinkRouter className='bottom-cards' to={`/cities/${city.id}`}>Discover</LinkRouter>
                    </div>
                </div>
            </div>
        </div>


    )
}





