import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countryInput : '',
      cityInput: ''
    }
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
  }
  handleCountryChange(event) {
    this.setState({
      countryInput: event.target.value
    })
  }

  handleCityChange(event) {
    this.setState({
      cityInput: event.target.value
    })
  }

  handleFormSubmit(event) {
    this.setState({
      countryInput: event.target.country.value,
      cityInput: event.target.city.value
    })
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
