import React, { Component } from 'react';

class PlacesSidebar extends Component {

  // handle change of text input
  handleChange = (event) => {
    this.props.onInputChange(event.target.value);
  }
  render() {

    return (
      <div className="sidebar">
        <p className="dataCredits">Powered by <a href="https://developers.google.com/maps/documentation" target="_blank" rel="noopener noreferrer">Google Maps</a> & <a href="https://developer.foursquare.com" target="_blank" rel="noopener noreferrer">FourSquare</a></p>
        <h3 className="center">Restaurants Locations</h3>
        {/*Input text box*/}
        <input type="text" className="inputFilter" placeholder="Filter by name..." onChange={this.handleChange} />
        {/*Places list*/}
        <ul className="places-list">
        {this.props.places.map((place) => place.display?<li key={place.id} onClick={() => this.props.onLocationClick(place)} className="place-item">{place.name}</li>:null)}
        </ul>
      </div>
    )
  }
}
export default PlacesSidebar;
