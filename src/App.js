import Navbar from "../src/components/Navbar.jsx"
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx"
import List from "./components/List"
import {useState} from 'react'

export default function App() {
  const appTitle = "Test App"
  const [countries, setCountry] = useState(['Poland'])
  const [cities, setCity] = useState(['Lodz'])

function addCountry(country) {
  setCountry([country, ...countries])
}
function addCity(city) {
  setCity([city, ...cities])
}

  return (
    <div className="App">
      <Header title={appTitle}/>
      <Navbar />
      <Form countries={countries[0]}
            addCountry={addCountry}
            cities={cities[0]}
            addCity={addCity}
            />
      <List countries={countries}
            cities={cities}
            />
      </div>
  );
}
