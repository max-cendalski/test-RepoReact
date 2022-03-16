import React from 'react'

export default function Form()  {

  function handleCountryChange(event) {
    console.log(event.target.value)
  }

  function handleCityChange(event) {
  console.log(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    /* let localStorageData = JSON.parse(localStorage.getItem('list-of-places'))
    let placesToSave;
    if (!localStorageData) {
    placesToSave = []
    } else {
      placesToSave = localStorageData
    }
      let place = {
      country: this.state.country,
      city: this.state.city
    }
    placesToSave.push(place)
    this.setState({
      country: '',
      city: '',
      placesArray: placesToSave
    })
    localStorage.setItem('list-of-places',JSON.stringify(placesToSave ))*/
  }

    return (
      <section className='form-container'>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='country-input'>Country</label>
          <input
            id="country-input"
            onChange={handleCountryChange}
            type="text"
            name="country">
          </input>
          <label htmlFor='city-input'>City</label>
          <input
            id="city-input"
            onChange={handleCityChange}
            name="city">
          </input>
          <button
            type='Submit'
          >
          Submit
          </button>
        </form>
      </section>
    )
}
