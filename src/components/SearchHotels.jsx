import React from 'react'
import "./SearchCss.css"

export default function SearchHotels(props) {
    let {fx, selectId} = props
    return (
        <div className="select">
            <select name="format" id="format" onChange={fx} ref={selectId} className='input'>
                <option  value="asc">Highest to lowest</option>
                <option  value="desc">Smallest to largest</option>
            </select>
        </div>
    )
}
