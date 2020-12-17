import React, { useState, useEffect } from "react";
const axios = require("axios").default;
const apiEndpoint = "https://tastedive.com/api/similar?";
const apiKey = "k=" + process.env.REACT_APP_MUSIC_API_KEY;
const resultLimit = "limit=5";
const queryInfo = "info=1";

const SimilarBands = ({ artist }) => {
  const [similarArtists, setSimilarArtists] = useState([]);
  const queryArtist = "q=" + artist;

  const url =
    apiEndpoint +
    apiKey +
    "&" +
    queryInfo +
    "&" +
    queryArtist +
    "&" +
    resultLimit;

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        // console.log(response.data.Similar.Results); // set search results
        setSimilarArtists(response.data.Similar.Results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      {similarArtists.map((artist) => (
        <div>
          <h3>
            <b>{artist["Name"]}</b>
          </h3>
          <a href={artist["wUrl"]}>Wikipedia</a>
          <br />
          <a href={artist["yUrl"]}>Music on YouTube</a>
          <p>{artist["wTeaser"]}</p>
        </div>
      ))}
    </div>
  );
};

export default SimilarBands;
