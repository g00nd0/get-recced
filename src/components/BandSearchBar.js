import React, { useState } from "react";
import SearchButton from "react-bootstrap/Button";

const SearchBar = (props) => {
  const [input, setInput] = useState();
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };

  return (
    <>
      <input
        style={BarStyling}
        key="random1"
        // value={props.keyword}
        placeholder={"Enter search here"}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchButton
        variant="primary"
        type="click"
        onClick={() => {
          props.onSearch(input);
          props.setSelectedArtist("0");
        }}
      >
        Search
      </SearchButton>
    </>
  );
};

export default SearchBar;
