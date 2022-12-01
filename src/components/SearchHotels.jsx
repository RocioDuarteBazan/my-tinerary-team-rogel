import React from 'react'
import "./SearchCss.css"

export default function SearchHotels(props) {
    let {fx, selectId} = props
    return (
        <div className="select">
            <select name="format" id="format" onChange={fx} ref={selectId} className='input'>
                <option  value="asc">Smallest to largest</option>
                <option  value="desc">Highest to lowest</option>
            </select>
        </div>
    )
}
