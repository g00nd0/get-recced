import logo from "./logo.svg";
import "./App.css";
import MapDisplay from "./components/MapDisplay";
import BandSearch from "./components/BandSearch";
import BandSearchPage from "./components/BandSearchPage";
import MapMarker from "./components/MapMarker";

const handleBandClick = (band) => {
  console.log("band");
  console.log(band.id);
};

function App() {
  return (
    <div className="App">
      <h1>Search Here</h1>
      {/* <MapDisplay></MapDisplay> */}
      {/* <MapMarker></MapMarker> */}

      {/* <MapOverlay></MapOverlay> */}
      {/* <Sidebar></Sidebar> */}
      {/* <BandInfo></BandInfo> */}
      {/* <BandSearch></BandSearch> */}
      <BandSearchPage onBandClick={handleBandClick}></BandSearchPage>
    </div>
  );
}

export default App;
