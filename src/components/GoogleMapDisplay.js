import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const MyMapComponent = withGoogleMap(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 22.6210486, lng: 88.43195509999998 }}>
    {props.places.map((place) => place.display?(
      <Marker
        key={place.id}
        position={{ lat: place.lat, lng: place.lng }}
        onClick={() => props.onMarkerClick(place)}
        animation={place.animation?1:0}
        >
        {place.selected && <InfoWindow onCloseClick={props.closeInfoWindow}>
            <div>
              <h2>{place.name}</h2>
              <p>{place.address}</p>
              <a href={"/viewinfo?id=" + place.id}><button>View Photos</button></a>
            </div>
          </InfoWindow>}
        </Marker>
    ):null)}
  </GoogleMap>
));
class GoogleMapDisplay extends Component {
  render() {

    return (
      <MyMapComponent
        places = {this.props.places}
        onMarkerClick = {this.props.onMarkerClick}
        closeInfoWindow = {this.props.closeInfoWindow}
        loadingElement = {<div style={{ height: `100%` }} />}
        containerElement = {<div className="map-container" style={{ height: `calc(100vh - 5px)` }} />}
        mapElement = {<div style={{ height: `100%` }} />} />
    )
  }
}
export default GoogleMapDisplay;
