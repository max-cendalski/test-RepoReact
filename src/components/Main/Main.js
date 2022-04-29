import './main.css'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'


export default function Main(props) {
  const[location, setLocation] = useState([props.data])
  const [searchResult, setSearchResult] = useState('')
  console.log('location',location)

 function changed(ev) {
   let letter = ev.target.value
   console.log('onInput',letter)
   setSearchResult('letter')
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
