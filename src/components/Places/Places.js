import "./places.css"
import "../Form/Form"
import "../Places/Places"
import Navbar from "../Navbar/Navbar"
import GoogleMaps from '../GoogleMap/GoogleMap.js'
import { useState, useEffect } from "react"




export default function Places(props) {
const [locations, setLocation] = useState([])

useEffect(() => {
  const data = localStorage.getItem('my-places')
  if (data) {
    setLocation(JSON.parse(data))
  }
},[]);

useEffect(()=> {
  localStorage.setItem('my-places',JSON.stringify(locations))
})

function handlePlaceClick(event) {
  event.preventDefault()
  console.log('event.target.value',event.target.closest('LI').id)
}

    return (
      <>
       <Navbar />
       <div className="list-container">
        <ul>
          {
            locations.map((location,index) => (
            <li onClick={handlePlaceClick} className="list-element" key={index + 1} id={location.city}>{location.country} : {location.city}</li>
          ))
          }
        </ul>
        <GoogleMaps handlePlaceClick={handlePlaceClick}/>
      </div>
      </>
    )
}
