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
    const [shows, setShows] = useState([]);
    const { id } = useSelector(store => store.userReducer)
    const allEvents = itineraries.concat(shows)

    useEffect(() => {
        axios.get(`${baseURL}api/itineraries`)
            .then((res) => setItineraries(res.data.data));

        axios.get(`${baseURL}api/shows`)
            .then((res) => setShows(res.data.data));

        // eslint-disable-next-line
    }, []);


    async function createReaction(event) {
        event.preventDefault()
        let itinerary = itineraries.find(itinerary => itinerary._id === itineraryId.current.value )
        let show= shows.find(show => show._id === itineraryId.current.value )
        let newtinerary = {
            name: name.current.value,
            icon: icon.current.value,
            iconBack: iconBack.current.value,
            userId: [id],
        }

        if (itinerary) {
            newtinerary.itineraryId = itineraryId.current.value 
        }
        if (show) {
            newtinerary.showId = itineraryId.current.value 
        }
        console.log(newtinerary);

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
                                    <option>Select the events</option>
                                    {allEvents.map((event) => (<option key={event._id} value={event._id}> {event.name}</option>))}
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