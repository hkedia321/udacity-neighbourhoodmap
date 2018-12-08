import React, { Component } from 'react';
import hamburger from './images/hamburger.png';
import GoogleMapDisplay from './components/GoogleMapDisplay';
import PlacesSidebar from './components/PlacesSidebar';
import placesData from './placesData';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      places: placesData
    }
  }
  // take input from user and filter places
  handleOnInput = (input) =>{
    let  places = this.state.places.map((place) => {
      if (place.name.toLowerCase().indexOf(input.toLowerCase()) < 0)
        place.display = false;
      else
        place.display = true;
      return place;
    });
    this.setState({places});
  }
  render() {
    return (
      <div className="App">
        <PlacesSidebar places={this.state.places} onInputChange={this.handleOnInput} />
        <div className="mapContainer">
        <GoogleMapDisplay places={this.state.places} />
        </div>
      </div>
    );
  }
}

export default App;
