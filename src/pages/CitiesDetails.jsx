import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itinerary from "../components/Itinerary";
import Details from "./Details";
import axios from "axios";
import { baseURL } from '../url';

export default function CitiesDetails() {
  let [cities, setCities] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}api/cities/${id}`)
      .then((res) => setCities(res.data.response));

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Details
        img={cities.photo}
        name={cities.name}
        continent={cities.continent}
        population={cities.population}
      />
      <div className="p-2 flex column justify-center align-center" >
        <Itinerary id={cities._id}></Itinerary>
        <button className='bottom-cards'>View Comments</button>
      </div>

    </>
  );
}
