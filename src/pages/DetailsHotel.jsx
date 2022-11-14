import React from "react";
import "./Details.css"

export default function DetailsHotel(props) {
  let { img } = props;
  let { name } = props;
  let { capacity } = props;

  return (
    <>
      <div className="cardDetPadre">
        <div className="cardDet">
          <div className="contimg">
            <img src={img} alt="foto" />
          </div>
          <div class="cardinfo">
            <h1>{name}</h1>
            <h2>Capacity: {capacity}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
