import React from 'react';
import './SignUp.css';
import InputSignUp from '../components/InputSignUp';
import ButtonSubmit from '../components/ButtonSubmit';
import { useRef } from 'react'
import { Link as NavLink } from 'react-router-dom'


export default function SignUp() {

    const form = useRef()
    const userName = useRef()
    const password = useRef()
    const user = []


    const enviarFormulario = () => {


        user.push(
            {
                user: user.current.value,
                password: password.current.value,
            }
        )

        localStorage.setItem('user', JSON.stringify(user))
    }



    return (
        <body className="body-form">
            <div id="container">
                <section>
                    <article>
                        <div className="inner">
                            <div>
                                <img id="logoAccess" src="./img/logoAccess.png" alt="logo_access" />
                            </div>
                            <h1>Welcome</h1>
                            <p>You do not have an account? Sign up here!</p>
                            <NavLink to='/signUp' style={{ textDecoration: 'none' }}>
                                <a href="" className="btn">Sign Up</a>
                            </NavLink>
                        </div>
                    </article>
                    <aside>
                        <div className="inner">
                            <h2>Access Google Account</h2>
                            <nav id="socialLogin">
                                <a href="" className="google"></a>
                            </nav>
                            <p>or sign in with your username</p>
                            <form action="" method="get" ref={form}>
                                <InputSignUp type='text' placeholder='Username or email' refId={user} />
                                <InputSignUp type='password' placeholder='Password' refId={password} />
                                <ButtonSubmit type='submit' text='Login' fx={enviarFormulario} />
                            </form>
                        </div>
                    </aside>
                </section>
            </div>
        </body>
    )
}