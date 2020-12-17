import React, { useState, useEffect } from "react";
const axios = require("axios").default;
const apiEndpoint = "http://coverartarchive.org/";

const BandRenderAlbums = ({ albumList }) => {
  return (
    <div>
      {/* {console.log(albumList)} */}
      {/* {console.log(albumList["release-groups"])} */}
      {albumList.map((album) => (
        <div>
          <img src={apiEndpoint + "release-group/" + album.id + "/front-250"} />
          <p>
            <b>{album.title}</b> ({album["first-release-date"]})
          </p>
        </div>
      ))}
      {/* <div></div>
      <img />
      <img src={apiEndpoint+"release-group/" + "e4f11dc7-ed0c-4fb2-bdf7-b1a6240bd167" + "/front-250"} /> */}
      {/* <img src="http://coverartarchive.org/release-group/e4f11dc7-ed0c-4fb2-bdf7-b1a6240bd167/front-250" /> */}
    </div>
  );
};

export default BandRenderAlbums;
