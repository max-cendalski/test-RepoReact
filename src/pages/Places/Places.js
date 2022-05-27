import "./places.css"
import GoogleMaps from "../../components/GoogleMap/GoogleMap";
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
      <article id="placescontainer">
        <GoogleMaps handlePlaceClick={handlePlaceClick}/>
      </article>
    )
}
