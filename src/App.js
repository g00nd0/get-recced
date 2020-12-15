import logo from "./logo.svg";
import "./App.css";
import MapDisplay from "./components/MapDisplay";
import BandSearch from "./components/BandSearch";
import BandSearchPage from "./components/BandSearchPage";
import MapMarker from "./components/MapMarker";

function App() {
  return (
    <div className="App">
      <h1>Search Here</h1>
      <MapDisplay></MapDisplay>
      {/* <MapMarker></MapMarker> */}

      {/* <MapOverlay></MapOverlay> */}
      {/* <Sidebar></Sidebar> */}
      {/* <BandInfo></BandInfo> */}
      {/* <BandSearch></BandSearch> */}
      {/* <BandSearchPage></BandSearchPage> */}
    </div>
  );
}

export default App;
