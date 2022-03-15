import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country : '',
      city: '',
      placesArray: []
    }
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleFormSubmit= this.handleFormSubmit.bind(this)
  }
  handleCountryChange(event) {
    this.setState({
      country: event.target.value
    })
  }

  handleCityChange(event) {
    this.setState({
      city: event.target.value
    })
  }

  handleFormSubmit(event) {
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
    console.log('placesArrau',placesToSave)
    localStorage.setItem('list-of-places',JSON.stringify(placesToSave))
  }
  render() {
    return (
      <div className='form-container'>
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
      </div>
    )
  }
}
