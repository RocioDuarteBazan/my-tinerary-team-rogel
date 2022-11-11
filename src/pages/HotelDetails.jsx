import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Events from "../components/Events";
import DetailsHotel from "./DetailsHotel";

export default function HotelDetails() {
  let [hotels, setHotels] = useState([]);
  let { id } = useParams();
  


  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((res) => setHotels(res.find((e) => e.id === id)));


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
      <Events className="p-2" id={hotels.id}></Events>
     <button className='bottom-cards'>View Comments</button>
      </div>
    
    </>
     
 
  );
}

