import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
class GoogleMapDisplay extends Component {

  render() {
    const markers = this.props.places.map((place) => <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }} />)
    const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyATTO9JI5ZAivMckVM8xJW5e-CBmN3IpXY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `calc(100vh - 5px)` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 22.6210486, lng: 88.43195509999998 }}>
    {markers}
    <Marker animation="BOUNCE" position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));
    return (
      <MyMapComponent />
    )
  }
}
export default GoogleMapDisplay;
