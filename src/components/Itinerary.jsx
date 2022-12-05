import React from "react";
import { useEffect, useState } from "react";
import CardItinerary from "./CardItinerary";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from '../url';


export default function Itinerary() {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}api/itineraries?citiId=${id}`)
      .then((res) => setItineraries(res.data.data));
    // eslint-disable-next-line
  }, []);
  /* console.log(itineraries); */

  useEffect(() => {
    let interval = setInterval(() => {
      count < 2 ? setCount(++count) : setCount(0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="flex j-center wrap ">
      {itineraries.map((item) => (
        <CardItinerary
          key={item._id}
          name={item.name}
          photo={item.photo[count]}
          description={item.description}
          price={item.price} duration={item.duration}
          id={item._id}
        />
      ))}
    </div>
  );
}
