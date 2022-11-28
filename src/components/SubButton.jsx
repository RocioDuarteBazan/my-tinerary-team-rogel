import React from 'react';
import './Navbar.css';
import { Link as NavLink } from 'react-router-dom';

function SubButton(props) {

    let {nombre, rute}= props

    return (
        <li className="menu__inside">
            <p className="menu__link menu__link--inside">{nombre}</p>
        </li>
    )
}

export default SubButton