import React, { useState } from "react";
import "./App.css";
import MapDisplay from "./components/MapDisplay";
import BandSearchPage from "./components/BandSearchPage";
// import MapMarker from "./components/MapMarker";

const App = () => {
  const [countryCoords, setCountryCoords] = useState();

  const handleBandClick = (band) => {
    console.log("band");
    console.log(band);
  };
  return (
    <div className="App">
      <h3>Search Here</h3>
      <BandSearchPage onBandClick={handleBandClick}></BandSearchPage>
      {/* <MapDisplay></MapDisplay> */}
      {/* <MapMarker></MapMarker> */}

      {/* <MapOverlay></MapOverlay> */}
      {/* <Sidebar></Sidebar> */}
      {/* <BandInfo></BandInfo> */}
      {/* <BandSearch></BandSearch> */}
      {/* <BandSearchPage onBandClick={handleBandClick}></BandSearchPage> */}
    </div>
  );
};

export default App;
