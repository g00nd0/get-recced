import React, { useState, useEffect } from "react";
const axios = require("axios").default;
const apiEndpoint = "https://tastedive.com/api/similar?";
const apiQuery = "k=";
const apiKey = "395290-MusicRec-2LRJJXPX";
const resultLimit = "limit=";
const queryArtist = "q=";
let queryArtistInput = "wormrot";
const queryInfo = "info=";

const SimilarBands = () => {
  const [artist, setArtist] = useState(queryArtist + queryArtistInput);
  const [api, setApi] = useState(apiQuery + apiKey);
  const [limit, setLimit] = useState(resultLimit + 5);
  const [info, setInfo] = useState(queryInfo + 1);

  const url = apiEndpoint + api + "&" + info + "&" + artist + "&" + limit;

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data.Similar.Results); // set search results
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return <div></div>;
};

export default SimilarBands;
