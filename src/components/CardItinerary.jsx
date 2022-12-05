import React from "react";
import "./CardItinerary.css"
import Reaction from "./Reaction";


export default function CardItinerary(props) {
  let { name, price, description, photo, duration, id } = props;
  return (
    <>
      <div className="divShow">
        <div className="mainShow">
          <div className="imgshow">
            <img className="" src={photo} alt="foto" />
          </div>
          <div className="divInfo">
            <h2>{name} </h2>
            <p>{description}</p>
            <p>Duration:{duration}</p>
            <p>Price: U$D{price}</p>
          </div>
          <div className="flex gap-1 cont-reactions">
            <Reaction eventId={id} type="itineraryId"/>
          </div>
        </div>
      </div>
    </>
  )
}
