import React, { useState, useEffect } from "react";
import BandRenderAlbums from "./BandRenderAlbums";
import SimilarBands from "./SimilarBands";
import similarBandsButton from "react-bootstrap/Button";
import discogButton from "react-bootstrap/Button";
const axios = require("axios").default;
const apiEndpoint = "https://musicbrainz.org/ws/2/";

const BandShowInfo = (props) => {
  const [artist, setArtist] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [whichPage, setWhichPage] = useState("discog");

  const handWhichPageClick = (whichPage) => {
    console.log(`Setting whichPage to ${whichPage}`);
    setWhichPage(whichPage);
  };

  const getBandDiscogUrl = (artistId) => {
    const url =
      apiEndpoint +
      "release-group?artist=" +
      artistId +
      "&type=album|ep&fmt=json";
    axios
      .get(url)
      .then(function (response) {
        setAlbumList(response.data["release-groups"]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const getBandDetails = (artistId) => {
    const url = apiEndpoint + "artist/" + artistId + "/?fmt=json";
    axios
      .get(url)
      .then(function (response) {
        setArtist(response.data);
        getBandDiscogUrl(artistId);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getBandDetails(props.selectedArtist.id);
  });

  return (
    <div>
      <h3>{artist.name + " (" + artist.country + ")"}</h3>
      <h4>Genre: {artist.disambiguation}</h4>
      <discogButton
        className="subButton"
        variant="primary"
        onClick={() => handWhichPageClick("discog")}
      >
        Show Discography
      </discogButton>
      <similarBandsButton
        className="subButton"
        variant="primary"
        onClick={() => handWhichPageClick("similar")}
      >
        Show Similar Bands
      </similarBandsButton>
      {whichPage === "discog" ? (
        <BandRenderAlbums albumList={albumList} />
      ) : (
        <SimilarBands artist={artist.name}></SimilarBands>
      )}
    </div>
  );
};

export default BandShowInfo;
