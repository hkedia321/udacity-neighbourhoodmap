import React, { Component } from 'react';
import GoogleMapDisplay from './components/GoogleMapDisplay';
import PlacesSidebar from './components/PlacesSidebar';
import placesData from './placesData';
import './HomePageMap.css';
class HomePageMap extends Component {
  constructor() {
    super();
    this.state = {
      places: placesData/* holds array of places*/
    }
  }
  // take input from user and filter places
  handleOnInput = (input) =>{
    let places = this.state.places.map((place) => {
      if (place.name.toLowerCase().indexOf(input.toLowerCase()) < 0)
        place.display = false;// hide this place
      else
        place.display = true;// show this place
      return place;
    });
    this.setState({places});
  }
  // show Information Dialog and animate Marker
  onMarkerClick = (placeClicked) => {
    let places = this.state.places.map((place) => {
      if (place.id === placeClicked.id) {
       place.animation = true;// temporary animation
       place.selected = true;// for displaying info window
       // remove animation automatically after 1sec
       this.removeAnimationTimeOut();
      }
      else {
        place.animation = false;// remove animation
        place.selected = false;// hide info window
      }
      return place;
    });
    this.setState({places});
  }
  // close all info windows
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
