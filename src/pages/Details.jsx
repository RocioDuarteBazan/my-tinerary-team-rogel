import React from "react";
import "./Details.css"

export default function Details(props) {
  let { img } = props;
  let { name } = props;
  let { population } = props
  let { continent} = props
  return (
    <>
      <div className="cardDetPadre">
        <div className="cardDet">
          <div className="contimg">
            <img src={img} alt="" />
          </div>
          <div class="cardinfo">
            <h1>{name}</h1>
            <h2>Continent: {continent}</h2>
            <h2>Population: {population}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
