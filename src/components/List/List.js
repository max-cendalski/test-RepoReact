import "./list.css"

export default function List(props) {
    return (
      <div className="list-container">
        <ul>
          {
            props.locations.map(location => (
            <li className="list-element" key={location.country}>{location.country} : {location.city}</li>
          ))
          }
        </ul>
      </div>
    )
}
