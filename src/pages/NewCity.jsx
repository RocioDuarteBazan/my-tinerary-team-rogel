import React from 'react';
import './SignUp.css';
import InputSignUp from '../components/InputSignUp';
import ButtonSubmit from '../components/ButtonSubmit';
import { useRef } from 'react'
import axios from "axios";
import { baseURL } from '../url';


export default function NewCity() {

    const form = useRef()
    const name = useRef()
    const continent = useRef()
    const photo = useRef()
    const population = useRef()

    const sendForm = () => {
        axios.post(`${baseURL}api/cities`,
            {
                name: name.current.value,
                continent: continent.current.value,
                photo: photo.current.value,
                population: population.current.value,
                userId: "636e67769d2ec6759994acc1"
            }
        )
    }

    return (
        <body className="body-form">
            <div id="container">
                <section>
                    <article>
                        <div className="inner">
                            <div>
                                <img id="logoAccess" src="./img/new-city-logo.png" alt="logo_newCity" />
                            </div>
                            <h1>¡Welcome!</h1>
                        </div>
                    </article>
                    <aside>
                        <div className="inner">
                            <h2>Create New City</h2>
                            <form action="" method="get" ref={form}>
                                <InputSignUp type='text' placeholder='name' refId={name} />
                                <InputSignUp type='text' placeholder='continent' refId={continent} />
                                <InputSignUp type='text' placeholder='population' refId={population} />
                                <InputSignUp type='text' placeholder='photo' refId={photo} />
                                <ButtonSubmit type='submit' text='Create' fx={sendForm} />
                            </form>
                        </div>
                    </aside>
                </section>
            </div>
        </body>
    )
}
