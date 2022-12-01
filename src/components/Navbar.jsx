import React from 'react';
import { useState } from 'react';
import ButtonNav from './ButtonNav';
import LogOutBtn from './LogOutBtn';
import './Navbar.css';
import { Link as NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import userAction from '../redux/actions/userAction'
import Swal from 'sweetalert2'


function Navbar() {
    let { role, logged, token, name } = useSelector(state => state.userReducer)
    let dispatch = useDispatch()
    const { signOff } = userAction

    let [mostrar, setMostrar] = useState(false)

    let ocultarBoton = () => {
        setMostrar(!mostrar)
    }

    function logOut() {
        Swal.fire({
            title: 'Are you sure you want to log out?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(signOff(token))
                    Swal.fire(
                        'Logged out!',
                        'You have been logged out',
                        'success'
                    )
                }
            })
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
                                <ButtonNav name='Home' subname='Cities' rute='/cities' subname2='Hotels' ruteDos='/hotels' />
                                {!logged && (
                                    <>
                                        <ButtonNav name='Users' subname='Sign In' rute='/signin' subname2='Sign Up' ruteDos='/signup' />
                                        <img src="https://cdn.icon-icons.com/icons2/20/PNG/256/business_man_usersearch_thesearch_theclient_2356.png" alt="logoUser" />
                                    </>
                                )
                                }
                                {logged && (
                                    <>
                                        <ButtonNav name='Activities' subname='Itineraries' rute='/mytineraries' subname2='Shows' ruteDos='/myshows' />
                                        <img src="https://cdn.icon-icons.com/icons2/20/PNG/256/business_application_addmale_useradd_insert_add_user_client_2312.png" alt="logoUser" />
                                        <p className='texto-nav-user'>{name}</p>
                                        <NavLink to="/">
                                            <LogOutBtn type={"text"} text={"Exit"} fx={logOut} ></LogOutBtn>
                                        </NavLink>
                                    </>
                                )
                                }
                                {logged && role === 'admi' && (
                                    <>
                                        <ButtonNav name='Activities' subname='My Citys' rute='/mycitys' subname2='My Hoteles' ruteDos='/myHotels'/>
                                        <ButtonNav name='Activities' subname='New City' rute='/newcity' subname2='New Hotel' ruteDos='/newhotel' />
                                        <img src="https://cdn.icon-icons.com/icons2/20/PNG/256/business_application_addmale_useradd_insert_add_user_client_2312.png" alt="logoUser" />
                                        <p className='texto-nav-user'>{name}</p>
                                        <NavLink to="/">
                                            <LogOutBtn type={"text"} text={"Exit"} fx={logOut} className='custom-btn btn-8' ></LogOutBtn>
                                        </NavLink>
                                    </>
                                )
                                }
                            </div>)}
                    </div>
                    <div className='menu__nohamburguer'>
                        <ButtonNav name='Home' subname='Cities'  rute='/cities' subname2='Hotels' ruteDos='/hotels' />
                        {!logged && (
                            <>
                                <ButtonNav name='Users' subname='Sign In' rute='/signin' subname2='Sign Up' ruteDos='/signup' />
                                <img src="https://cdn.icon-icons.com/icons2/20/PNG/256/business_man_usersearch_thesearch_theclient_2356.png" alt="logoUser" />
                            </>
                        )
                        }
                    </div>
                    <div className='menu__nohamburguer'>
                        {logged && (
                            <>
                                <ButtonNav name='Activities' subname='Itineraries' rute='/mytineraries' subname2='Shows' ruteDos='/myshows' />
                                <img src="https://cdn.icon-icons.com/icons2/20/PNG/256/business_application_addmale_useradd_insert_add_user_client_2312.png" alt="logoUser" />
                                <p className='texto-nav-user'>{name}</p>
                                <NavLink to="/">
                                    <LogOutBtn type={"text"} text={"Exit"} fx={logOut} className='custom-btn btn-8' ></LogOutBtn>
                                </NavLink>
                            </>
                        )
                        }
                        {logged && role === 'admi' && (
                            <>
                                <ButtonNav name='Activities' subname='My Citys' rute='/mycitys' subname2='My Hoteles' ruteDos='/myHotels'/>
                                <img src="https://cdn.icon-icons.com/icons2/20/PNG/256/business_application_addmale_useradd_insert_add_user_client_2312.png" alt="logoUser" />
                                <p className='texto-nav-user'>{name}</p>
                                <NavLink to="/">
                                    <LogOutBtn type={"text"} text={"Exit"} fx={logOut} className='custom-btn btn-8' ></LogOutBtn>
                                </NavLink>
                            </>
                        )
                        }
                    </div>
                </ul>
            </section>
        </nav>


    )
}

export default Navbar


