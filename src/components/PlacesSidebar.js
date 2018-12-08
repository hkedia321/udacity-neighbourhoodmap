import React, { Component } from 'react';

class PlacesSidebar extends Component {
  constructor() {
    super();
  }
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
        {this.props.places.map((place) => place.display?<li key={place.id} className="place-item">{place.name}</li>:null)}
        </ul>
      </div>
    )
  }
}
export default PlacesSidebar;
