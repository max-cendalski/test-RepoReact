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
    let places = []
    let place = {
      country: this.state.country,
      city: this.state.city
    }
    places.push(place)
    this.setState({
      placesArray: places
    })
    console.log('places',places)
  }
  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.handleFormSubmit}>
          <label>Country</label>
          <input id="country-input" onChange={this.handleCountryChange} name="country"></input>
          <label>City</label>
          <input id="city-input" onChange={this.handleCityChange} name="city"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
