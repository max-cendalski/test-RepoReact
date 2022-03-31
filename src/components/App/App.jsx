import Navbar from '../Navbar/Navbar.js'
import Form from '../Form/Form.js'
import Header from '../Header/Header.js'
import List from "../List/List.js"
import {useState, useEffect} from 'react'


export default function App() {
  const appTitle = "Test App"
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

  function addLocation(locations) {
    setLocation([...locations])
  }

  function addCountry(country) {
    countries.push(country)
  }

  function addCity(city) {
    cities.push(city)
  }

  return (
    <div className="App">
      <Header title={appTitle}/>
      <Navbar />
      <Form countries={countries}
            addCountry={addCountry}
            cities={cities}
            addCity={addCity}
            addLocation={addLocation}
            locations = {locations}
            />
      <List countries={countries}
            cities={cities}
            locations={locations}
            />
      </div>
  );
}
