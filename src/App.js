import React, { useState } from "react";
import "./App.css";
import BandSearchPage from "./components/BandSearchPage";
import BandGetInfo from "./components/BandGetInfo";

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
    </div>
  );
};

export default App;
