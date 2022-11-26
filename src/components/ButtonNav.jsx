import React from 'react';
import { useState } from 'react';
import SubButton from './SubButton';
import './Navbar.css';


function ButtonNav(props) {
    let {name, subname , subname2} = props
    let [mostrar, setMostrar] = useState(false)

    let ocultarBoton = () => {
        setMostrar(!mostrar)
    }
    return (
        <>
        <li className="menu__item menu__item--show">
            <a href="#" className="menu__link" onClick={ocultarBoton}>{name}<img src="../img/arrow.svg" className="menu__arrow" /></a>
            {mostrar && (
            <ul className="menu__nesting">
                <SubButton nombre={subname} />
                <SubButton nombre={subname2} />
            </ul>
            )}
        </li>
        </>
    )
}

export default ButtonNav



