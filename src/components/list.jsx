import React from "react";

export default function List(props) {
    return (
      <div className="list-element">
        <ul>
          {
            props.countries.map(country => (
            <li key={country}>{country}</li>
          ))
          }
        </ul>
      </div>
    )
}
