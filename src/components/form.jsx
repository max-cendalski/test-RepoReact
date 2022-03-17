import React from 'react'

export default function Form(props)  {

  function handleCountryChange(event) {
    console.log(event.target.value)
  }

  function handleCityChange(event) {
    console.log(event.target.value)
  }

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
            type="text"
            name="city">
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


/*   <label htmlFor='city-input'>City</label>
          <input
            id="city-input"
            onChange={handleCityChange}
            type="text"
            name="city">
          </input> */
