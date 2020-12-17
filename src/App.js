import React, { useState } from "react";
import "./App.css";
import MapDisplay from "./components/MapDisplay";
import BandSearchPage from "./components/BandSearchPage";
import BandGetInfo from "./components/BandGetInfo";
import ArtistSearch from "./components/ArtistSearch";
import ArtistDetails from "./components/ArtistDetails";
import SimilarBands from "./components/SimilarBands";
// import MapMarker from "./components/MapMarker";

const App = () => {
  const [selectedArtist, setSelectedArtist] = useState("0");
  const handleBandClick = (bandObj) => {
    setSelectedArtist(bandObj);
  };
  return (
    <div className="App">
      <h3>Search Here</h3>
      <BandSearchPage
        onBandClick={handleBandClick}
        selectedArtist={selectedArtist}
        setSelectedArtist={setSelectedArtist}
      />
      {selectedArtist === "0" ? (
        <p>No Artist Selected</p>
      ) : (
        <BandGetInfo selectedArtist={selectedArtist} />
      )}
      {/* <img src="http://coverartarchive.org/release-group/e4f11dc7-ed0c-4fb2-bdf7-b1a6240bd167/front-250" /> */}
      {/* <MapDisplay></MapDisplay> */}
      {/* <MapMarker></MapMarker> */}
      {/* <MapOverlay></MapOverlay> */}
      {/* <Sidebar></Sidebar> */}
      {/* <BandSearch></BandSearch> */}
    </div>
  );
};

export default App;
