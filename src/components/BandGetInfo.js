import React, { useState, useEffect } from "react";
import BandRenderAlbums from "./BandRenderAlbums";
const axios = require("axios").default;
const apiEndpoint = "https://musicbrainz.org/ws/2/";

const BandShowInfo = (props) => {
  const [artist, setArtist] = useState([]);
  const [albumList, setAlbumList] = useState([]);

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
        console.log("this runs once");
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
  }, []);

  return (
    <div>
      <h3>{artist.name + " (" + artist.country + ")"}</h3>
      <h4>Genre: {artist.disambiguation}</h4>
      {}
      <BandRenderAlbums albumList={albumList} />
      {/* {console.log(albumUrl)} */}
    </div>
  );
};

export default BandShowInfo;
