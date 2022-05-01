import './main.css'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'


export default function Main(props) {
  const[location, setLocation] = useState(props.data)
  const [searchResult, setSearchResult] = useState([])

/*  useEffect(()=> {

},[searchResult]) */

 function changed(ev) {
   let letter = ev.target.value.toLowerCase()
   const newLocation = [...location]
   console.log('location',location)
   let newCountryArray = []
   let newArray = []
   if (letter === '') {
     setSearchResult(newCountryArray)
   } else {
     newLocation.forEach(place => {
       console.log('place',place)
     if (place.country.toLowerCase().includes(letter) || place.city.toLowerCase().includes(letter)) {
        newArray.push(place)
       setSearchResult(newArray)
     }
   })
  }
}
function handleSearchClick(event) {
  console.log('dataCountry console',event.target.getAttribute('data-country'))
  console.log('dataCountry console',event.target.getAttribute('data-city'))
}

  return (
    <article id="main-container">
    <Navbar />
      <h1>Homepage</h1>
      <form>
        <p>
          <label>Search for a location</label>
          <input
            type="search"
            name="keyword"
            placeholder="keyword"
            onInput={(ev) => changed(ev)}
          />
        </p>
      </form>
      <section id="search-section">
        <ul className='search-result'>
          {
            searchResult && searchResult.map((location,index) => {
            return <li onClick={handleSearchClick} data-country={location.country} data-city={location.city} className='searched-location' key={index}>{location.country}: {location.city}</li>
            })
          }
        </ul>
      </section>

      <ul className='my-locations-list'>
        {
           props.data.map((place, index) => {
           return  <li key={index}>My location is :{place.country}</li>
        })
        }
      </ul>
    </article>
  )
}
