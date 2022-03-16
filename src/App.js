import Navbar from "../src/components/Navbar.jsx"
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx"
import List from "./components/List"
import {useState} from 'react'

export default function App() {
  const appTitle = "Test App"
  const [places, setPlaces] = useState(['Poland'])

function addPlace(place) {
  setPlaces([place, ...places])
}

  return (
    <div className="App">
      <Header title={appTitle}/>
      <Navbar />
      <Form place={places[0]} addPlace={addPlace} />
      <List  places={places}/>
      </div>
  );
}
