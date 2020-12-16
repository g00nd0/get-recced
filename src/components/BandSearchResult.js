import React from "react";

const BandSearchResult = ({ bandList = [] }) => {
  return (
    <>
      {bandList === null ? (
        <p> Type in search field</p>
      ) : (
        bandList.map((band) => (
          <p bandId={band.band_id} key={band.band_id}>
            <b>{band.band_name}</b> ({band.band_country}), {band.band_genre}
          </p>
        ))
      )}
    </>
  );
};

export default BandSearchResult;
