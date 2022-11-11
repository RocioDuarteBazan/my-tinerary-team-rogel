import React from 'react'
import { Link as LinkRouter} from 'react-router-dom'


export default function HotelsCards(props) {
    let {hotels} = props
    return (
        <div className='container-card'>
            <div className="card">
                <div className="imgbox">
                    <div className="img"> <img src={hotels.photo[0]} alt="" /></div>
                </div>
                <div className="details">
                    <h2 className="title">{hotels.name}</h2>
                    <span className="caption">{hotels.capacity}</span>
                    <div>
                    <LinkRouter className='bottom-cards' to={`/hotels/${hotels.id}`}>Discover</LinkRouter>
                    </div>
                </div>
            </div>
        </div>
    )
}
