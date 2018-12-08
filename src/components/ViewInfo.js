import React, { Component } from 'react';
import axios from 'axios';
import placesData from './../placesData';
import LoadingGif from '../images/loading.gif';
import './viewInfo.css';
class ViewInfo extends Component {
  constructor() {
    super();
    this.state = {
      photos: null,/* holds array of photos*/
      error: false,/* contains error message if any*/
      name: ""/* name of the location*/
    }
  }
  // load data from Flickr API
  componentWillMount() {
    var urlParams = new URLSearchParams(window.location.search);
    let tag = "";
    if (!(urlParams.get('id'))) {
      this.setState({error: "Invalid id parameter provided"});
      return;
    }
    // extract id from the url
    let id = urlParams.get('id');
    for (let i = 0; i < placesData.length; i++) {
      if (placesData[i].id === id) {
        tag = placesData[i].tag;
        this.setState({name: placesData[i].name,address: placesData[i].address});
        break;
      }
    }
    // get images from flickr API by passing the "tag" of the location
    axios.get(`https://api.flickr.com/services/rest/`, {
      params: {
        api_key: "fa159dc5a9fdeef0834826bba76bbc74",
        method: "flickr.photos.search",
        format: "json",
        nojsoncallback: "1",
        per_page: "10",
        tag_mode: "all",
        tags: tag
      }
    })
    .then((response) => {
      this.setState({
        photos: response.data.photos.photo
      })
    })
    .catch((error) => {
      this.setState({error: "Couldn't get valid response from Flickr API"});
      console.log(error);
    });


  }
  render() {
    return (
      <div className="view-info-container">
      <h2 className="center">{this.state.name}</h2>
      <h4 className="center">{this.state.address}</h4>
      <a href="/"><button className="back-button">&#8678; Go Back</button></a>
      <br/><br/>
      <p className="courtesy">Images taken from <a href="https://www.flickr.com/">Flickr</a></p>
      <div className="img-container">
      {/*Display images*/}
      {this.state.photos && this.state.photos.map((photo) => {
        let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return <a key={photo.id} href={url}><img
        src={url}
        alt={photo.title}
        className="img-item" /></a>;
      })}
      {/*Error message handling*/}
      {this.state.photos && this.state.photos.length === 0 && <div className="zero-photos-container">No Image available for this</div>}
      {this.state.error && <div className="error-container">Error: {this.state.error}</div>}
      {/*Loading animation*/}
      {this.state.photos===null && this.state.error===false && <div className="loading-div"><img src={LoadingGif} alt="loading" /></div>}
      </div>
      </div>
    )
  }
}
export default ViewInfo;
