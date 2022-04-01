import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import React, {Component} from 'react';



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 33.5685,
      lng: -117.7263
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const containerStyle= {
      width: '40%',
      height: '40%'
    }
    return (
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
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCfY6ZRvXRb8M7sKT5QM2pWZmuF6NCECEM")
})(MapContainer)


/*  <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */
