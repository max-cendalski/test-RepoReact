import './main.css'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'


export default function Main(props) {
  const[location, setLocation] = useState(props.data)
  const [searchResult, setSearchResult] = useState([])

/*  useEffect(()=> {

},[searchResult]) */

 function changed(ev) {
   let letter = ev.target.value
   const newLocation = [...location]
   let newArray = []
   if (letter === '') {
     setSearchResult(newArray)
   } else {
     newLocation.forEach(place => {
     if (place.country.includes(letter)) {
       newArray.push(place.country)
       setSearchResult(newArray)
     }
   })
  }
}
function handleSearchClick() {
  console.log('wheeee')
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
            return <li onClick={handleSearchClick} className='searched-location' key={index}>{location}</li>
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
