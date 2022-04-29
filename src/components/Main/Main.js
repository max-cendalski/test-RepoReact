import './main.css'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'


export default function Main(props) {
  const[location, setLocation] = useState(props.data)
  const [searchResult, setSearchResult] = useState([])

 useEffect(()=> {

},[searchResult])

 function changed(ev) {
   let letter = ev.target.value
   const newLocation = [...location]
   console.log('onInput',letter)
   let newArray = []
   newLocation.forEach(place => {
     console.log('place',place.country)
     console.log('letter',letter)
     if (letter === '') {
       setSearchResult([])
     }
     if (place.country.includes(letter)) {
       console.log('bingo')
       newArray.push(place.country)
       console.log('newArray',newArray)
       setSearchResult(newArray)
       console.log('searchResult',searchResult)
     } else {
       console.log('no-bingo')
     }
   })
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
      <ul className='search-result'>
        {
          searchResult && searchResult.map((location,index) => {
            return <li key={index}>{location}</li>
          })
        }
      </ul>
      <ul className='locations-list'>
        {
           props.data.map((place, index) => {
           return  <li key={index}>My location is :{place.country}</li>
        })
        }
      </ul>
    </article>
  )
}
