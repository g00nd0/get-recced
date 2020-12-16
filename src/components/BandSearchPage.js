import React, { useState, useEffect } from "react";
import BandSearchBar from "./BandSearchBar";
import BandSearchResult from "./BandSearchResult";
import BandShowInfo from "./BandShowInfo";
const axios = require("axios").default;
const apiEndpoint = "http://localhost:4000/bands/";

const BandSearchPage = (props) => {
  const [input, setInput] = useState("");
  const [filteredList, setFilteredList] = useState(); //only show filtered options

  const searchBand = (query) => {
    let url = apiEndpoint + "?name=";

    if (query === null) {
      url += "&length=0";
    } else {
      url += query + "&length=5";
    }

    axios
      .get(url)
      .then(function (response) {
        setFilteredList(response.data.data.bands); // set search results
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const updateInput = (input) => {
    console.log(input);
    searchBand(input);
    // setInput(input);
  };

  useEffect(() => {
    // searchBand();
    updateInput();
  }, []);

  return (
    <>
      <h1>Band List</h1>
      <BandSearchBar input={input} onChange={updateInput} />
      <BandSearchResult bandList={filteredList} />
      <BandShowInfo />
    </>
  );
};

export default BandSearchPage;
