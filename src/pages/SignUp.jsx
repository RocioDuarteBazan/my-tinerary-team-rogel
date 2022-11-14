import React from 'react';
import './SignUp.css';
import InputSignUp from '../components/InputSignUp';
import ButtonSubmit from '../components/ButtonSubmit';
import { useRef } from 'react'
import { Link as NavLink } from 'react-router-dom'


export default function SignUp() {


    const form = useRef()
    const fullName = useRef()
    const email = useRef()
    const password = useRef()
    
    const enviarFormulario = () => {


        let newUser= (
            {
                fullName: fullName.current.value,
                email: email.current.value,
                password: password.current.value,
            }
        )


        localStorage.setItem('newUser', JSON.stringify(newUser))
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
                            <p>Are you already registered? Access your account here</p>
                            <NavLink to='/signIn' style={{ textDecoration: 'none' }}>
                                <a href="" className="btn">Sign In</a>
                            </NavLink>
                        </div>
                    </article>
                    <aside>
                        <div className="inner">
                            <h2>Create Account</h2>
                            <nav id="socialLogin">
                                <a href="" className="google"></a>
                            </nav>
                            <p>or use your email for Registration</p>
                            <form action="" method="get" ref={form}>
                                <InputSignUp type='text' placeholder='Full Name' refId={fullName} />
                                <InputSignUp type='email' placeholder='Email' refId={email} />
                                <InputSignUp type='password' placeholder='Password' refId={password} />
                                <ButtonSubmit type='submit' text='Sign Up' fx={enviarFormulario} />
                            </form>
                        </div>
                    </aside>
                </section>
            </div>
        </body>
    )
}
