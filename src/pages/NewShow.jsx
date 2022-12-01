import React from 'react'
import { useRef, useEffect, useState } from 'react'
import InputSignUp from '../components/InputSignUp'
import ButtonSubmit from '../components/ButtonSubmit'
import './SignUp.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseURL } from "../url";
import { useSelector } from "react-redux";


export default function NewShow() {

    const form = useRef()
    const name = useRef()
    const photo = useRef()
    const description = useRef()
    const price = useRef()
    const date = useRef()
    const hotelId = useRef();
    const [hotels, setHotels] = useState([]);
    const { id, token } = useSelector(store => store.userReducer)

    useEffect(() => {
        console.log(id)
        axios.get(`${baseURL}api/hotels`)
            .then((res) => setHotels(res.data.data));
        // eslint-disable-next-line
    }, []);

    async function createShow(event) {
        event.preventDefault()
        let newtinerary = {
            hotelId: hotelId.current.value,
            name: name.current.value,
            photo: photo.current.value,
            description: description.current.value,
            price: price.current.value,
            date: date.current.value,
            userId: id,
        }
        let header = { headers: { Authorization: `Bearer ${token}` } };
        try {
            let response = await axios.post(`${baseURL}api/shows/`, newtinerary, header)
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Show created!',
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
        <div className="body-form">
        <div id="container">
            <section>
                <article>
                    <div className="inner">
                        <div>
                            <img id="logoAccess" src="./img/new-show-logo.png" alt="logo_access" />
                        </div>
                    </div>
                </article>
                <aside>
                    <div className="inner">
                        <h2>Create a New Show:</h2>
                        <form action="" method="get" ref={form}>
                            <InputSignUp className="input-text" type="text" placeholder="Name" refId={name} />
                            <select ref={hotelId} id="hotelId">
                                <option>Select the hotel</option>
                                {hotels.map((hotels) => (<option key={hotels._id} value={hotels._id}> {hotels.name}</option>))}
                            </select>
                            <InputSignUp className="input-text" type="text" placeholder=" Photo" refId={photo} />
                            <InputSignUp className="input-text" type="text" placeholder=" Description" refId={description} />
                            <InputSignUp className="input-text" type="text" placeholder=" Price" refId={price} />
                            <InputSignUp className="input-text" type="date" placeholder=" date" refId={date} />
                            <ButtonSubmit type='submit' text='Sign Up' fx={createShow} />
                        </form>
                    </div>
                </aside>
            </section>
        </div>
    </div>

    )
}