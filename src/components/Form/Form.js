import React from 'react'

export default function Form(props)  {

  function handleFormSubmit(event) {
    event.preventDefault()
    props.addCountry(event.target['country'].value);
    props.addCity(event.target['city'].value)
    for(var i = 0; i < props.countries.length; i++) {
      let obj = {}
      obj.country = props.countries[i]
      obj.city = props.cities[i]
      props.locations.push(obj)
    }
    props.addLocation(props.locations)
  }

  return (
    <section className='form-container'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='country-input'>Country</label>
        <input
          id="country-input"
          type="text"
          name="country"
          required
          >
        </input>
        <label htmlFor='city-input'>City</label>
        <input
          id="city-input"
          type="text"
          name="city"
          required
          >
        </input>
        <button
          type='submit'
          name="save-button"
        >
        Submit
        </button>
      </form>
    </section>
  )
}



 /*  function handleCountryChange(event) {
    console.log(event.target.value)
  }

  function handleCityChange(event) {
    console.log(event.target.value)
  } */
