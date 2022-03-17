import Navbar from "../src/components/Navbar.jsx"
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx"
import List from "./components/List"
import {useState} from 'react'


export default function App() {
  const appTitle = "Test App"
  let countries = []
  let cities = []

  const [locations, setLocation] = useState([])
  console.log('locations',locations)

  function addLocation(location) {
    setLocation([...location])
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
