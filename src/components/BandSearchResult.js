import React from "react";
import { Button } from "@material-ui/core";

const BandSearchResult = ({ bandList, setBandList, onBandClick }) => {
  return (
    <div border={"1px, solid, black"}>
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
