import React from "react";

export default function List(props) {
    return (
      <div className="list-element">
        <ul>
          {
            props.locations.map(location => (
            <li key={location.country}>{location.country} : {location.city}</li>
          ))
          }
        </ul>
      </div>
    )
}
