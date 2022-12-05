import React from 'react'
import './MiReaction.css'

export default function MyReactions(props) {

    let { item, name, icon, fx, tgt } = props

    console.log(item);

    return (
        <div className='container-card'>
            <div className="card">
                <div className="imgbox">
                    <div className="img"> <img src={item.photo[0]} alt="" /></div>
                </div>
                <h2 className="title">{name}</h2>
                <div className="details-card-reaction">
                    <img src={icon} alt="icon"
                        className={name === 'love' ? ('love')
                            : name === 'like' ? ('like')
                                : name === 'not-like' ? ('not-like')
                                    : name === 'surprise' ? ('surprise')
                                        : null
                        } />
                    <button className='bottom-cardsOne' name={tgt} onClick={fx}>Delete</button>
                </div>
            </div>
        </div>
    )
}
