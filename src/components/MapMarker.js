import React from "react";
import "./MapMarker.css";

const MapMarker = (props: any) => {
  const { color, name, id } = props;
  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      title={name}
    />
  );
};

export default MapMarker;
