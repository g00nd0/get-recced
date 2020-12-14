import logo from "./logo.svg";
import "./App.css";
import MapDisplay from "./components/MapDisplay";
import BandSearch from "./components/BandSearch";

function App() {
  return (
    <div className="App">
      <MapDisplay></MapDisplay>
      {/* <MapOverlay></MapOverlay> */}
      {/* <Sidebar></Sidebar> */}
      {/* <BandInfo></BandInfo> */}
      <BandSearch></BandSearch>
    </div>
  );
}

export default App;
