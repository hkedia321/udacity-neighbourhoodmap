import React, { Component } from 'react';
import GoogleMapDisplay from './components/GoogleMapDisplay';
import PlacesSidebar from './components/PlacesSidebar';
import placesData from './placesData';
import './HomePageMap.css';
class HomePageMap extends Component {
  constructor() {
    super();
    this.state = {
      places: placesData
    }
  }
  // take input from user and filter places
  handleOnInput = (input) =>{
    let places = this.state.places.map((place) => {
      if (place.name.toLowerCase().indexOf(input.toLowerCase()) < 0)
        place.display = false;
      else
        place.display = true;
      return place;
    });
    this.setState({places});
  }
  // show Information Dialog and animate Marker
  onMarkerClick = (placeClicked) => {
    let places = this.state.places.map((place) => {
      if (place.id === placeClicked.id) {
       place.animation = true;
       place.selected = true;
       this.removeAnimationTimeOut();
      }
      else {
        place.animation = false;
        place.selected = false;
      }
      return place;
    });
    this.setState({places});
  }
  //
  closeInfoWindow = () => {
    let places = this.state.places.map((place) => {
      place.selected = false;
      return place;
    });
    this.setState({places});
  }
  // remove animation after 1sec
  removeAnimationTimeOut = () =>{
    setTimeout(() => {
      let places = this.state.places.map((place) => {
        place.animation = false;
        return place;
      });
      this.setState({places});
    },1000);
  }
  render() {
    return (
      <div className="App">
        <PlacesSidebar places={this.state.places} onInputChange={this.handleOnInput} onLocationClick={this.onMarkerClick} />
        <div className="mapContainer">
        <GoogleMapDisplay places={this.state.places} closeInfoWindow={this.closeInfoWindow} onMarkerClick={this.onMarkerClick} />
        </div>
      </div>
    );
  }
}

export default HomePageMap;
