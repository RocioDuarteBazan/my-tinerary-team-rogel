import React from 'react'
import { useRef, useEffect, useState } from 'react'
import './SignUp.css';
import InputSignUp from '../components/InputSignUp'
import ButtonSubmit from '../components/ButtonSubmit';
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseURL } from "../url";
import { useSelector } from "react-redux";


export default function NewTinerary() {

    const form = useRef()
    const name = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const photo3 = useRef()
    const description = useRef()
    const price = useRef()
    const duration = useRef()
    const citiId = useRef();
    const [cities, setCities] = useState([]);
    const { id, token } = useSelector(store => store.userReducer)

    useEffect(() => {
        axios.get(`${baseURL}api/cities`)
            .then((res) => setCities(res.data.data));
        // eslint-disable-next-line
    }, []);

    async function createTinerary(event) {
        event.preventDefault()
        let newtinerary = {
            citiId: citiId.current.value,
            name: name.current.value,
            photo:[photo1.current.value, photo2.current.value, photo3.current.value],
            description: description.current.value,
            price: price.current.value,
            duration: duration.current.value,
            userId: id,
        }
        let header = { headers: { Authorization: `Bearer ${token}` } };
        try {
            let response = await axios.post(`${baseURL}api/itineraries/`, newtinerary, header)
            console.log(response);
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Tinerary created!',
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
                                <img id="logoAccess" src="./img/logoAccess.png" alt="logo_access" />
                            </div>
                            <h1>New Tinerary</h1>
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
                                <InputSignUp className="input-text" type="text" placeholder="Name" refId={name} />
                                <select ref={citiId} id="cityId">
                                    <option>Select the city</option>
                                    {cities.map((city) => (<option key={city._id} value={city._id}> {city.name}</option>))}
                                </select>
                                <InputSignUp className="input-text" type="text" placeholder=" Photo 1" refId={photo1} />
                                <InputSignUp className="input-text" type="text" placeholder=" Photo 2" refId={photo2} />
                                <InputSignUp className="input-text" type="text" placeholder=" Photo 3" refId={photo3} />
                                <InputSignUp className="input-text" type="text" placeholder=" Description" refId={description} />
                                <InputSignUp className="input-text" type="text" placeholder=" Price" refId={price} />
                                <InputSignUp className="input-text" type="text" placeholder=" Duration" refId={duration} />
                                <ButtonSubmit type='submit' text='Sign Up' fx={createTinerary} />
                            </form>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}
