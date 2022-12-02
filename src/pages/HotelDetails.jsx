import axios from "axios";
import { baseURL } from '../url';
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Events from "../components/Events";
import DetailsHotel from "./DetailsHotel";

export default function HotelDetails() {
  let [hotels, setHotels] = useState([]);
  let { id } = useParams();



  useEffect(() => {
    axios.get(`${baseURL}api/hotels/${id}`)
      .then((res) => setHotels(res.data.response));
    // eslint-disable-next-line
  }, []);


  console.log(id);
  return (
    <>
      <DetailsHotel
        img={hotels.photo}
        name={hotels.name}
        capacity={hotels.capacity}

      />
      <div className="p-2 flex column justify-center align-center">
        <Events className="p-2" id={hotels._id}></Events>
        <button className='bottom-cards' >View Comments</button>
      </div>

    </>


  );
}

