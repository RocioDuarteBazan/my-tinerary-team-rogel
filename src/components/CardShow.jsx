import React from "react";
import "./CardItinerary.css"

export default function CardShow(props) {
  let { name, price, description, photo, date } = props;
  return (
    <div className="divShow">
      <div className="mainShow">
        <div className="imgshow">
          <img className="" src={photo} alt="foto" />
        </div>
        <div className="divInfo">
          <p>{name} </p>
          <p>{description}</p>
          <p>Date: {date}</p>
          <p>Price: U$D{price}</p>
        </div>
      </div>
    </div>
  )
}
