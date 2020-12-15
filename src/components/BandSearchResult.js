import React from "react";

const BandSearchResult = ({ bandList = [] }) => {
  return (
    <>
      {console.log("this is bandlist")}
      {console.log({ bandList })}
      {bandList === null ? (
        <p> Type in search field</p>
      ) : (
        bandList.map((band) => (
          <p key={band.band_id}>
            <b>{band.band_name}</b> ({band.band_country}), {band.band_genre}
          </p>
        ))
      )}
    </>
  );
};

export default BandSearchResult;
