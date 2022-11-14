import React from 'react';
import './SignUp.css';
import InputSignUp from '../components/InputSignUp';
import ButtonSubmit from '../components/ButtonSubmit';
import { useRef } from 'react'


export default function NewHotel() {


    const form = useRef()
    const name = useRef()
    const city = useRef()
    const photo = useRef()
    const capacity = useRef()
    const cityId= useRef()
    const userId = useRef()
    const newHotel = []


    const sendForm = () => {
        newHotel.push(
            {
                name: name.current.value,
                city: city.current.value,
                photo: photo.current.value,
                capacity: capacity.current.value,
                cityId: cityId.current.value,
                userId: userId.current.value,
            }
        )
        localStorage.setItem('newHotel', JSON.stringify(newHotel))
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
                                <InputSignUp type='text' placeholder='city' refId={city} />
                                <InputSignUp type='text' placeholder='capacity' refId={capacity} />
                                <InputSignUp type='text' placeholder='photo' refId={photo} />
                                <InputSignUp type='text' placeholder='cityId' refId={cityId} />
                                <InputSignUp type='text' placeholder='userId' refId={userId} />
                                <ButtonSubmit type='submit' text='Create' fx={sendForm} />
                            </form>
                        </div>
                    </aside>
                </section>
            </div>
        </body>
    )
}
