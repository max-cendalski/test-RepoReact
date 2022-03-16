import React from 'react'

export default function Form()  {

  function handleCountryChange(event) {
    event.preventDefault()
  }

  function handleCityChange(event) {
    this.setState({
      city: event.target.value
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    let localStorageData = JSON.parse(localStorage.getItem('list-of-places'))
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
    localStorage.setItem('list-of-places',JSON.stringify(placesToSave))
  }
    return (
      <section className='form-container'>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='country-input'>Country</label>
          <input id="country-input" onChange={this.handleCountryChange} value={this.state.country} type="text" name="country"></input>
          <label htmlFor='city-input'>City</label>
          <input id="city-input" onChange={this.handleCityChange} value={this.state.city}type="text" name="city"></input>
          <button>Submit</button>
        </form>
        <div>
          <div className='list-container'>
            <h1>Places to visit</h1>
          </div>
        </div>
      </section>
    )

}


/* <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          name="keyword"
          className="searchText"
          placeholder="keyword"
          onFocus={focused}
          onInput={(ev) => changed(ev)}
        />
        <button
          type="submit"
          className="searchBtn"
          name="searchBtn"
          onClick={clicked}
        >
          Search
        </button>
      </form>
      {props.term ? <p>You searched for {props.term}</p> : ''}
    </section>
  ); */
