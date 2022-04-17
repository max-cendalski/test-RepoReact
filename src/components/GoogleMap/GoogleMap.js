import './googlemaps.css'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import React from 'react';
import TestComponent from '../TestComponent';
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationsFromLocalStorage : [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      address: '',
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
    this.setState({
      address: '',
      locationsFromLocalStorage: localStorageDataToSave,
      map: 'hidden'
    })
  }
}

  handleChange = address => {
    this.setState({ address });
    console.log('this.state.address',this.state.address)
    console.log('this.props.value',this.props.value)
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
    const ObjectToSave = {
      city: this.state.cityToSave,
      country: this.state.countryToSave
    }
    if (!this.state.cityToSave) return
    let localStorageArray = []
    localStorageArray = this.state.locationsFromLocalStorage
    localStorageArray.push(ObjectToSave)
    this.setState({
      locationsFromLocalStorage: localStorageArray,
      cityToSave: '',
      countryToSave: ''
    })
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
      countryToSave: countryName
    })
  geocodeByAddress(cityName, countryName)
  .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) => {
   this.setState({
    mapCenter: {lat,lng},
    map:'map'
   })
  })
}

  render() {
    const containerStyle= {
      width: '40%',
      height: '40%'
    }
    return (
      <>
      <article id="placesPage">
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
      <article>
        <section>
          <TestComponent addressToSave={this.state.address}
                  cityToSave ={this.state.cityToSave}
                  countryToSave = {this.state.countryToSave}
                  handleAddLocation = {this.handleAddLocation}
                  locationsList = {this.state.locationsFromLocalStorage}
                  handleClickLocation = {this.handleClickLocation}
          />
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
      </article>
      </article>
    </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCfY6ZRvXRb8M7sKT5QM2pWZmuF6NCECEM")
})(MapContainer)
