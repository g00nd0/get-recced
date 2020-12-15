import React, { useState, useEffect } from "react";
import BandSearchBar from "./BandSearchBar";
import BandSearchResult from "./BandSearchResult";
const axios = require("axios").default;
const apiEndpoint = "http://localhost:4000/bands/";

const BandSearchPage = (props) => {
  const [input, setInput] = useState("");
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();
  const [filteredList, setFilteredList] = useState(); //only show filtered options

  const searchBand = (query) => {
    const url = apiEndpoint + "?name=" + query + "&length=5";

    axios
      .get(url)
      .then(function (response) {
        console.log(response.data.data.bands); // array of bands
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

  const updateInput = async (input) => {
    console.log(input);
    if (input === null) {
      // searchBand();
      // setFilteredList();
    } else {
      searchBand(input);
      // setInput(input);
    }

    console.log(filteredList);
  };

  useEffect(() => {
    // use one or the other?
    // searchBand(input);
    // updateInput();
  }, []);

  return (
    <>
      <h1>Band List</h1>
      <BandSearchBar input={input} onChange={updateInput} />
      <BandSearchResult bandList={filteredList} />
    </>
  );
};

export default BandSearchPage;
