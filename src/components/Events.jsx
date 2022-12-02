import React from "react";
import { useEffect, useState } from "react";
import CardShow from "./CardShow";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from '../url';

export default function Events() {
  let { id } = useParams();
  let [hotelsShow, setHotelsShow] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}api/shows?hotelId=${id}`)
      .then((res) => setHotelsShow(res.data.data));
    // eslint-disable-next-line
    console.log(hotelsShow);
  }, []);


  return (
    <div className="flex j-center wrap ">
      {hotelsShow.map((item) => (
        <CardShow
          idShow={item._id}
          key={item.id}
          name={item.name}
          photo={item.photo}
          description={item.description}
          price={item.price} capacity={item.capacity}
        />
      ))}
    </div>
  );
}
