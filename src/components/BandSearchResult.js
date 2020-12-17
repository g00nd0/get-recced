import React from "react";

const BandSearchResult = ({
  bandList,
  setBandList,
  onBandClick,
  setSelectedArtist,
}) => {
  return (
    <div>
      {bandList.length === 0 ? (
        <></>
      ) : (
        bandList.map((band) => (
          <p
            id={band.id}
            key={band.id}
            onClick={() => {
              onBandClick(band);
              setBandList([]);
            }}
          >
            <b>{band.name}</b> ({band.country}), {band.disambiguation}
          </p>
        ))
      )}
    </div>
  );
};

export default BandSearchResult;
