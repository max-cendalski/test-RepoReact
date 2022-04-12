import "./places.css"
import "../Form/Form"
import "../Places/Places"
import Navbar from "../Navbar/Navbar"
import Form from '../Form/Form'
import GoogleMaps from '../GoogleMap/GoogleMap.js'
import { useState, useEffect } from "react"




export default function Places(props) {
let countries = []
let cities = []


const [locations, setLocation] = useState([])
console.log('locations',locations)

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
            locations.map(location => (
            <li onClick={handlePlaceClick} className="list-element" key={location.country} id={location.city}>{location.country} : {location.city}</li>
          ))
          }
        </ul>
        <GoogleMaps handlePlaceClick={handlePlaceClick}/>
      </div>
      </>
    )
}
