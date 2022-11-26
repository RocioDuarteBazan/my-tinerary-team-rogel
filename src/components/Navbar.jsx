import React from 'react';
import { useState } from 'react';
import ButtonNav from './ButtonNav';
import './Navbar.css';
import { Link as NavLink } from 'react-router-dom';



function Navbar() {
    let [mostrar, setMostrar] = useState(false)

    let ocultarBoton = () => {
        setMostrar(!mostrar)
    }
    return (

        <nav className="menu">
            <section className="menu__container">
                <NavLink to="/">
                    <img src="../img/logomytineraryh.png" className="logo" alt="logo_tinerary" />
                </NavLink>
                <ul className="menu__links">
                    <div className="menu__hamburguer">
                        <img src="./img/menu.svg" className="menu__img" onClick={ocultarBoton} />
                        {mostrar && (
                            <div className='flex'>
                                <ButtonNav name='Home' subname='Cities' subname2='Hotels' />
                                <ButtonNav name='Users' subname='Sign In' subname2='Sign Up' />
                                <ButtonNav name='Activities' subname='Itineraries' subname2='Shows' />
                                <ButtonNav name='My Space' subname='My Cities' subname2='My Hotels' />
                            </div>)}
                    </div>
                    <div className='menu__nohamburguer'>
                        <ButtonNav name='Home' subname='Cities' subname2='Hotels' />
                        <ButtonNav name='Users' subname='Sign In' subname2='Sign Up' />
                    </div>
                    <div className='menu__nohamburguer'>
                        <ButtonNav name='Activities' subname='Itineraries' subname2='Shows' />
                        <ButtonNav name='My Space' subname='My Cities' subname2='My Hotels' />
                    </div>
                </ul>
            </section>
        </nav>


    )
}

export default Navbar


