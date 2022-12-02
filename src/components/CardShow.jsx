import React from "react";
import "./CardItinerary.css"
import CommentsCard from "./CommentsCards";
import Reaction from '../components/Reaction'

/* export default function CardShow(props) {
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
} */

export default function CardShow(props) {
  let { name, price, description, photo, date, id } = props;
  console.log(id)
  return (
      <div className="card-event">
          <div className="card-header">
              <img src={photo} alt="hotel" />
          </div>
          <div className="card-body">
              <h3>
                  {name}
              </h3>
              <h5>
                  {description}
              </h5>
              <h5>USD $
                  {price}
              </h5>
              <h5>Date: {date} </h5>
              <div className="flex gap-1 cont-reactions">
                  <Reaction type='show' eventid={id} />
              </div>
              <div className="input-comment">
                  <CommentsCard eventId={id}></CommentsCard>
              </div>
          </div>
      </div>
  )
}
