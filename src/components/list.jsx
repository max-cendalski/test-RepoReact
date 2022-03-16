import React from "react";

export default function List(props) {
    return (
      <div className="list-element">
        <ul>
          {props.places.map((place) => (
            <li key={place}>{place}</li>
          ))
          }
        </ul>
      </div>
    )
}
