import React from 'react';
import './SignUp.css';
import InputSignUp from '../components/InputSignUp';
import ButtonSubmit from '../components/ButtonSubmit';
import { useRef } from 'react'
import hotelsAction from '../redux/actions/hotelsAction';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'



export default function NewHotel() {
    const dispatch = useDispatch()

    const form = useRef()
    const name = useRef()
    const photo = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const capacity = useRef()
    



    const { createNewHotel } = hotelsAction

    async function sendForm(event) {
        event.preventDefault()
        let newHotel = {
            name: name.current.value,
            photo: [photo.current.value, photo1.current.value, photo2.current.value],
            capacity: capacity.current.value,
            cityId: "636e9b1f37a6690656b36ec4",
            userId: "636e67769d2ec6759994acc2",
        }
        try {
            let respuesta = await dispatch(createNewHotel(newHotel))
            if (respuesta.payload.success) {
                Swal.fire({
                    icon: "success",
                    title: "Hotel created successfully",
                    showConfirmButton: "true"
                })
                    .then(create => {
                        if (create.isConfirmed) {
                            window.location.href = `/hotels/${respuesta.payload.id}`
                        }
                    })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error in the creation of the Hotel",
                    text: respuesta.payload.messages
                })
            }
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <body className="body-form">
            <div id="container">
                <section>
                    <article>
                        <div className="inner">
                            <div>
                                <img id="logoAccess" src="../img/new-hotel-logo.png" alt="logo_newHotel" />
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
                                <InputSignUp type='text' placeholder='photo1' refId={photo} />
                                <InputSignUp type='text' placeholder='photo2' refId={photo1} />
                                <InputSignUp type='text' placeholder='photo3' refId={photo2} />
                                <ButtonSubmit type='submit' text='Create' fx={sendForm} />
                            </form>
                        </div>
                    </aside>
                </section>
            </div>
        </body>
    )
}
