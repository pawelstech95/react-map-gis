import React from "react";
import { LayersControl } from "react-leaflet";

import { MapLayer } from "./MapLayer";
import { GroupedLayers } from "./GroupedLayers";

export const LayersControlWrapper = () => {
  return (
    <LayersControl position={"topright"}>
      <MapLayer />
      <GroupedLayers />
    </LayersControl>
  );
};
