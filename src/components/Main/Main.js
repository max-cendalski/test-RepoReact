import './main.css'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'


export default function Main(props) {
  const[location, setLocation] = useState(props.data)
  const [searchResult, setSearchResult] = useState([])

useEffect(()=> {
  const newLocation = [...location]
   let newArray = []
   newLocation.forEach(place => {
     if (place.country.includes('j')) {
       console.log('bingo')
       newArray.push(place.country)
       setSearchResult(newArray)
     } else {
       console.log('no-bingo')
     }
    })
},[location])

 function changed(ev) {
   let letter = ev.target.value
   let word = 'japan'
   const newLocation = [...location]
   console.log('onInput',letter)
   let newArray = []
   newLocation.forEach(place => {
     console.log('place',place.country)
     if (place.country.includes('poland')) {
       console.log('bingo')
       newArray.push(place.country)
       setSearchResult(newArray)
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
        <p>{searchResult}</p>
        <ul className='results-list'>
          {
            searchResult && searchResult.map((result,index) => {
              return <li key={index}>{result.country}</li>
            })
          }
        </ul>

      </form>
      {
        props.data.map((place, index) => {
        return  <li key={index}>My location is :{place.country}</li>
        })
      }
    </article>
  )
}
