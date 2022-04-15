import './googlemaps.css'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
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
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChangeLocation = this.handleChangeLocation.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleAddLocation = this.handleAddLocation.bind(this)
  }


componentDidMount() {
  const localStorageData = localStorage.getItem('locations')
  console.log('typeof',typeof localStorageData)
  if (typeof localStorageData !== Object) {
    console.log('whe1')

    this.setState({
    address: 'Paris, France',
    locationsFromLocalStorage: []
  })
  } if (typeof localStorageData === Object) {
    console.log('whe2')

    this.setState({
      address: 'Paris, France',
      locationsFromLocalStorage: []
    })
  }

    //console.log('this.state.address',this.state.address)
}
/* componentDidUpdate() {
 geocodeByAddress(this.state.address)
  .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) => {
    this.setState({
      mapCenter: {
        lat: lat,
        lng: lng
      }
    })
  })
} */

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

  handleChangeLocation() {
    this.setState({
      address: 'Aliso Viejo, CA, USA'
    })
    console.log(this.props.value)
  }

  handleOnSubmit(event) {
    event.preventDefault()
    const newLocation = this.state.address
    const [city, country] = newLocation.split(',')
    this.setState({
      cityToSave: city,
      countryToSave:country
    })
  }

  handleAddLocation(event) {
    event.preventDefault()
    const resultArray = {}
    let localStorageArray = []
    if( this.state.locationsFromLocalStorage.length === 0) {
      localStorageArray = []
    } /* if (this.state.locationsFromLocalStorage.length > 1) {
      localStorageArray = [...this.state.locationsFromLocalStorage]
    } */
    console.log('localstoragearray',localStorageArray)
    const newLocation = this.state.address
    const locationArray = newLocation.split(',')
    if (locationArray.length === 2 ){
      resultArray.city= locationArray[0]
      resultArray.country= locationArray[1]
      localStorageArray.push(resultArray)
      console.log('localstoragearray',localStorageArray)
      localStorage.setItem('locations',localStorageArray)
      this.setState({
        cityToSave: resultArray[0],
        countryToSave: resultArray[1],
        locationsFromLocalStorage: localStorageArray
      })
    } if (locationArray.length > 2) {
      resultArray.city = (locationArray[0])
      resultArray.country = (locationArray[2])
      localStorage.setItem('locations', localStorageArray)

      this.setState({
        cityToSave: resultArray[0],
        countryToSave: resultArray[2],
        locationsFromLocalStorage: localStorageArray
      })
    }
  }

  render() {
    const containerStyle= {
      width: '40%',
      height: '40%'
    }
    return (
      <>
        <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            handleOnSubmit = {this.handleOnSubmit}
            >

            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
               <TestComponent placeToSave={this.state.address}
                              cityToSave ={this.state.cityToSave}
                              countryToSave = {this.state.countryToSave}
                              handleAddLocation = {this.handleAddLocation}
               />
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
      <div id = "googleMap">
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

      </div>
               <button onClick={this.handleChangeLocation}>Click to change location</button>

      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCfY6ZRvXRb8M7sKT5QM2pWZmuF6NCECEM")
})(MapContainer)
