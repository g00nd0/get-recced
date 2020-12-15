import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import MapMarker from "./MapMarker";
const dotenv = require("dotenv").config();
const api_key = process.env.REACT_APP_MAPS_API_KEY;
// const google = { Google };
const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapDisplay extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3} // use this zoom level for init zoom
        minZoom={3} //min zoom for maps
        maxZoom={5} // max zoom for maps
        style={mapStyles}
        fullscreenControlOptions={false}
        streetViewControlOptions={false}
        // draggable={false}
        // initialCenter={{ lat: 47.444, lng: -122.176 }}
        initialCenter={{ lat: 17.607789, lng: 8.081666 }} // use these coords for center map
      >
        <Marker
          position={{ lat: 61.92411, lng: 25.748151 }}
          text="My Marker"
          color="blue"
        />
        <Marker
          position={{ lat: 40.463667, lng: -3.74922 }}
          text="Spain"
          color="red"
        />
      </Map>
    );
  }
}

//use hooks instead?
// const MapDisplay = () => {
//   return (
//     <Map
//       google={google}
//       zoom={8}
//       style={mapStyles}
//       initialCenter={{ lat: 47.444, lng: -122.176 }}
//     />
//   );
// };

export default GoogleApiWrapper({
  apiKey: api_key,
})(MapDisplay);
