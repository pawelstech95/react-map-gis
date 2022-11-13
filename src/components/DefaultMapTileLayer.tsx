import React from "react";
import { TileLayer } from "react-leaflet";

export const DefaultMapTileLayer = () => {
  return (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
  );
};
