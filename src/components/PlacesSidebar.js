import React, { Component } from 'react';

class PlacesSidebar extends Component {

  handleChange = (event) => {
    this.props.onInputChange(event.target.value);
  }
  render() {

    return (
      <div className="sidebar">
        <h3 className="center">Restaurants Locations</h3>
        <br/>
        <input type="text" className="inputFilter" placeholder="Filter by name..." onChange={this.handleChange} />
        <br/>
        <ul className="places-list">
        {this.props.places.map((place) => place.display?<li key={place.id} onClick={() => this.props.onLocationClick(place)} className="place-item">{place.name}</li>:null)}
        </ul>
        <p className="dataCredits">Data from <a href="https://developer.foursquare.com" target="_blank" rel="noopener noreferrer">FourSquare</a></p>
      </div>
    )
  }
}
export default PlacesSidebar;
