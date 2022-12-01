import React from 'react';
import './SignUp.css';
import InputSignUp from '../components/InputSignUp';
import ButtonSubmit from '../components/ButtonSubmit';
import { useRef } from 'react'
import { Link as NavLink } from 'react-router-dom'
import axios from 'axios';
import { baseURL } from '../url';
import Swal from 'sweetalert2';

export default function SignUp() {


    const form = useRef()
    const name = useRef()
    const lastName = useRef()
    const photo = useRef()
    const age = useRef()
    const email = useRef()
    const password = useRef()

    async function enviarFormulario(event) {
        event.preventDefault()
        let newUser =
        {
            name: name.current.value,
            lastName: lastName.current.value,
            photo: photo.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        try {
            let response = await axios.post(`${baseURL}api/auth/sign-up`, newUser)
            console.log(response);
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'User created!',
                    showConfirmButton: true,
                })
                    .then(make => {
                        if (make.isConfirmed) {
                            form.current.reset();
                        }
                    })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration error',
                    text: response.data.message
                })
            }

        } catch (error) {
            console.log(error);
        }
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
                                <InputSignUp type='text' placeholder='Name' refId={name} />
                                <InputSignUp type='text' placeholder='Lastname' refId={lastName} />
                                <InputSignUp type='text' placeholder='Photo' refId={photo} />
                                <InputSignUp type='text' placeholder='Age' refId={age} />
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
