import React from "react";

const BandSearchResult = ({ bandList = [], onBandClick }) => {
  return (
    <div>
      {bandList === null ? (
        <p> Type in search field</p>
      ) : (
        bandList.map((band) => (
          <p
            id={band.band_id}
            key={band.band_id}
            onBandClick={() => onBandClick(band.band_name)}
          >
            <b>{band.band_name}</b> ({band.band_country}), {band.band_genre}
          </p>
        ))
      )}
    </div>
  );
};

export default BandSearchResult;
