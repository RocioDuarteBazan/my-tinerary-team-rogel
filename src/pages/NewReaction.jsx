import React from 'react'
import { useRef, useEffect, useState } from 'react'
import './SignUp.css';
import InputSignUp from '../components/InputSignUp';
import ButtonSubmit from '../components/ButtonSubmit';
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseURL } from "../url";
import { useSelector } from "react-redux";


export default function NewReaction() {

    const form = useRef()
    const name = useRef()
    const icon = useRef()
    const iconBack = useRef()
    const itineraryId = useRef();
    const [itineraries, setItineraries] = useState([]);
    const { id } = useSelector(store => store.userReducer)

    useEffect(() => {
        axios.get(`${baseURL}api/itineraries`)
            .then((res) => setItineraries(res.data.data));
        // eslint-disable-next-line
    }, []);

    async function createReaction(event) {
        event.preventDefault()
        let newtinerary = {
            itineraryId: itineraryId.current.value,
            name: name.current.value,
            icon: icon.current.value,
            iconBack: iconBack.current.value,
            userId: [id],
        }
        try {

            let response = await axios.post(`${baseURL}api/reactions/`, newtinerary)
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Reaction created!',
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
                    title: 'Oops...',
                    text: response.data.message,
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
                        </div>
                    </article>
                    <aside>
                        <div className="inner">
                            <h2>Create New Reaction</h2>
                            <form action="" method="get" ref={form}>
                                <InputSignUp type='text' placeholder='name' refId={name} />
                                <select ref={itineraryId} id="hotelId">
                                    <option>Select the itinerary</option>
                                    {itineraries.map((itineraries) => (<option key={itineraries._id} value={itineraries._id}> {itineraries.name}</option>))}
                                </select>
                                <InputSignUp type='text' placeholder='Icon' refId={icon} />
                                <InputSignUp type='text' placeholder='IconBack' refId={iconBack} />
                                <ButtonSubmit type='submit' text='Create' fx={createReaction} />
                            </form>
                        </div>
                    </aside>
                </section>
            </div>
        </body>
    )
}