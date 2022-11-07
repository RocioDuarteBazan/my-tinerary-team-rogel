import React from 'react'
import './Checkbox.css'

export default function Checkbox(props) {

    let { continent , key , refId ,valor ,fx} = props
    

    return (
        <label className='container'>
            <input type="checkbox" name={continent} id={key} ref={refId} value={valor} onClick={fx}/>
            <span className="checkmark"></span>
            {continent}
        </label>
    )
}


