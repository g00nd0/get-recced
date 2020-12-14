import React, { useState, useEffect } from "react";

const axios = require("axios").default;
const insertQuery = "behemoth"; // change to input or prop, using search field?
const queryUrlStart = "http://localhost:4000/"; // need to change, as a prop?

const bandSearchUrl = (urlQuery) => {
  const searchType = "bands/?name=";
  const searchLength = "length=5";
  const url = queryUrlStart + searchType + urlQuery + "&" + searchLength;
  return url;
};

const renderOutput = (bandArr) => {
  return (
    <div>
      {bandArr.map((band) => (
        <p key={band.band_id}>
          <b>{band.band_name}</b>({band.band_country}), {band.band_genre}
        </p>
      ))}
    </div>
  );
};

const BandSearchRender = () => {
  const [searchResult, setSearchResult] = useState([]);
  const url = bandSearchUrl(insertQuery);

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setSearchResult(response.data.data.bands);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  console.log("output is below");
  console.log(searchResult);

  return (
    <div>{searchResult === [] ? "empty" : renderOutput(searchResult)}</div>
  );
};

export default BandSearchRender;
