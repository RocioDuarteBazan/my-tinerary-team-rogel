import React from 'react';
import './Navbar.css';

function SubButton(props) {

    let {nombre}= props

    return (
        <li className="menu__inside">
            <a href="#" className="menu__link menu__link--inside">{nombre}</a>
        </li>
    )
}

export default SubButton