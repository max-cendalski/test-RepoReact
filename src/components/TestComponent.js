
import './test.css'

export default function TestComponent (props) {
  return (
    <>
    <section className='test-component-header'>
      <h1>Test Component</h1>
      <h3>Location to save: {props.placeToSave}</h3>
      <h4>City: {props.cityToSave}</h4>
      <h4>Country: {props.countryToSave}</h4>
      <button onClick={props.handleAddLocation}>Add to locations list</button>
    </section>
    <section className='locations-list'>
      <h2>Locations you can check on a map</h2>
        <ul>
          {
            props.locationsList.map((location, index) => {
              return <li onClick={props.handleClickLocation} data-city={location.city} data-country={location.country} key={index}>{location.city} : {location.country}</li>
            })
          }
        </ul>
      </section>

    </>
  )
}
