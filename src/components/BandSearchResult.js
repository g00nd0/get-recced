import React from "react";

const BandSearchResult = ({ bandList = [] }) => {
  return (
    <>
      {bandList.map((band) => (
        <p key={band.band_id}>
          <b>{band.band_name}</b>({band.band_country}), {band.band_genre}
        </p>
      ))}
    </>
  );
};

export default BandSearchResult;
