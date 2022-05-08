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
       <article id="placescontainer">

        <GoogleMaps handlePlaceClick={handlePlaceClick}/>
        </article>
      </>
    )
}
