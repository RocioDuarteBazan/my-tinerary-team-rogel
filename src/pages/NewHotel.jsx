import React from 'react';
import './SignUp.css';
import InputSignUp from '../components/InputSignUp';
import ButtonSubmit from '../components/ButtonSubmit';
import { useRef } from 'react'
import axios from "axios";
import { baseURL } from '../url';



export default function NewHotel() {


    const form = useRef()
    const name = useRef()
    const photo = useRef()
    const capacity = useRef()
    const cityId= useRef()
    const userId = useRef()

    const sendForm = () => {
        axios.post(`${baseURL}api/hotels`,
            {
                name: name.current.value,
                photo: photo.current.value,
                capacity: capacity.current.value,
                cityId: "636e9b1f37a6690656b36ec4",
                userId: "636e67769d2ec6759994acc2",
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
                                <img id="logoAccess" src="./img/new-hotel-logo.png" alt="logo_newHotel" />
                            </div>
                            <h1>¡Welcome!</h1>
                        </div>
                    </article>
                    <aside>
                        <div className="inner">
                            <h2>Create New City</h2>
                            <form action="" method="get" ref={form}>
                                <InputSignUp type='text' placeholder='name' refId={name} />
                                <InputSignUp type='text' placeholder='capacity' refId={capacity} />
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
