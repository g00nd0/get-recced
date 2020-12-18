import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BandSearchPage from "./components/BandSearchPage";
import BandGetInfo from "./components/BandGetInfo";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [selectedArtist, setSelectedArtist] = useState("0");
  const handleBandClick = (bandObj) => {
    setSelectedArtist(bandObj);
  };
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Music Recommender App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Start Searching</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/about">
            <h2>APIS USED</h2>
            <ul>
              <li>
                <a href="https://musicbrainz.org/doc/MusicBrainz_API">
                  MusicBrainz Search API
                </a>
              </li>
              <li>
                <a href="https://musicbrainz.org/doc/Cover_Art_Archive/API">
                  Cover Art Archive API
                </a>
              </li>
              <li>
                <a href="https://tastedive.com/read/api">
                  TasteDive Recommendation API
                </a>
              </li>
            </ul>
          </Route>
          <Route path="/search">
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
          </Route>
          <Route path="/">
            <h1>WELCOME!</h1>
            <p>
              The Music Search and Recommender App let's you search for your
              favourite artists and get detailed information on their work, as
              well as recommendations for similar sounding artists!{" "}
            </p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
