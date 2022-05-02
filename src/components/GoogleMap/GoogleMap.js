import './googlemaps.css'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import React from 'react';
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'hidden',
      locationsFromLocalStorage : [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      address: 'Japan, Tokyo',
      addressToSave: [],
      cityToSave: '',
      countryToSave: '',
      mapCenter: {
        lat: 33.5685,
        lng: -117.7263
      },
      map:'hidden'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleAddLocation = this.handleAddLocation.bind(this)
    this.handleClickLocation = this.handleClickLocation.bind(this)
  }


componentDidMount() {
  const previousLocalStorageData = localStorage.getItem('locations')
  if (!previousLocalStorageData) {
    this.setState({
    address: '',
    locationsFromLocalStorage: [],
    map: 'hidden'
  })
  } if(previousLocalStorageData) {
    let localStorageDataToSave = JSON.parse(previousLocalStorageData)
    console.log('localStorageData',localStorageDataToSave)
    this.setState({
      address: '',
      locationsFromLocalStorage: localStorageDataToSave,
      map: 'hidden'
    })
  }

}

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
      this.setState({address});
      this.setState({ mapCenter: latLng })
      })
      .catch(error => console.error('Error', error));
  };

  handleOnSubmit(event) {
    event.preventDefault()
    const newLocation = this.state.address
    const newLocationArray = newLocation.split(',')
    if (newLocationArray.length === 2) {
       const [city, country] = newLocationArray
      this.setState({
        cityToSave: city,
        countryToSave: country
      })
    }
    if (newLocationArray.length > 2) {
       const [city,, country] = newLocationArray
       this.setState({
         cityToSave:city,
         countryToSave:country
       })
    }
  }

  handleAddLocation(event) {
    event.preventDefault()
    const objectToSave = {
      city: this.state.cityToSave,
      country: this.state.countryToSave
    }
    if (!this.state.cityToSave) return
    let localStorageArray = []
    localStorageArray = this.state.locationsFromLocalStorage
    console.log('objectToSave',objectToSave)
    console.log('localStorageArray',localStorageArray)
    console.log('whee')
    localStorageArray.forEach((location) => {
      if (location.country === objectToSave.country || location.city === objectToSave.city) {
        this.setState({
          modal:'modal'
        })
      }
    })
/*     localStorageArray.push(objectToSave)
    this.setState({
      locationsFromLocalStorage: localStorageArray,
      cityToSave: '',
      countryToSave: ''
    }) */
    var localStorageArrayToSave = JSON.stringify(localStorageArray)
    localStorage.setItem('locations',localStorageArrayToSave)
  }

  handleClickLocation(event) {
    event.preventDefault()
    let cityName = event.target.getAttribute('data-city')
    let countryName = event.target.getAttribute('data-country')
    let addressToShowOnMap = `${cityName}, ${countryName}`
    this.setState({
      address: addressToShowOnMap,
      cityToSave: cityName,
      countryToSave: countryName,
      map:''
    })

  geocodeByAddress(cityName, countryName)
  .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) => {
   this.setState({
    mapCenter: {lat,lng}
   })
  })
}

  render() {
    const containerStyle= {
      width: '600px',
      height:'60%'
    }
    return (
      <>
      <article id="placespage">
       <section className='search-section'>
        <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            handleOnSubmit = {this.handleOnSubmit}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
               <form onSubmit={this.handleOnSubmit}>
                 <input type="text"
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                  })}
                />
                <button>Submit</button>
               </form>
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion,index) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        key = {index + 1}
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                      <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
      </section>


      <section className='location-name'>
        <h3>Location to save: {this.state.placeToSave}</h3>
        <h4>City: {this.state.cityToSave}</h4>
        <h4>Country: {this.state.countryToSave}</h4>
        <button onClick={this.handleAddLocation}>Add to locations list</button>
      </section>


      <section className='locations-list'>
        <h2>Click to see location on a map</h2>
          <ul>
            {
              this.state.locationsFromLocalStorage.map((location, index) => {
                return <li onClick={this.handleClickLocation} data-city={location.city} data-country={location.country} key={index}>{location.city} : {location.country}</li>
              })
            }
          </ul>
        </section>


        <section id="map" className={this.state.map}>
          <Map
            containerStyle={containerStyle}
            google={this.props.google}
            initialCenter = {{
              lat:this.state.mapCenter.lat,
              lng:this.state.mapCenter.lng
            }}
            center={{
              lat:this.state.mapCenter.lat,
              lng:this.state.mapCenter.lng
            }}
            >
            <Marker
            position= {{
              lat:this.state.mapCenter.lat,
              lng:this.state.mapCenter.lng
            }}
            />
          </Map>
        </section>

        <section className={this.state.modal}>
            <h2>Location already added to the list!</h2>
        </section>
      </article>
    </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_api_key
})(MapContainer)
