import React, { useState } from "react";
import BandSearchBar from "./BandSearchBar";
import BandSearchResult from "./BandSearchResult";

const axios = require("axios").default;
const apiEndpoint = "https://musicbrainz.org/ws/2/";
const queryType = "artist";
const queryParam = "query=";

const BandSearchPage = (props) => {
  const [queryResults, setQueryResults] = useState([]);

  const handleSearchButton = (input) => {
    const url =
      apiEndpoint + queryType + "/?fmt=json&limit=10&" + queryParam + input;
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data.artists); // set search results
        setQueryResults(response.data.artists);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    // useEffect(() => {

    // }, []);
  };

  return (
    <div>
      <BandSearchBar
        onSearch={handleSearchButton}
        setSelectedArtist={props.setSelectedArtist}
      />
      {queryResults.length === 0 || props.SelectedArtist ? (
        <p>
          <b>Search for an artist to see results!</b>
        </p>
      ) : (
        <BandSearchResult
          bandList={queryResults}
          setBandList={setQueryResults}
          onBandClick={props.onBandClick}
          setSelectedArtist={props.setSelectedArtist}
        />
      )}
    </div>
  );
};

export default BandSearchPage;
