import React from "react";

import { LeicesterCrimes } from "./LeicesterCrimes/LeicesterCrimes";
import { VectorLayers } from "./VectorLayers";
import { GeoJSONGdansk } from "./Gdansk/GeoJSONGdansk";
import { GeoJSONBorders } from "./UkrBorders/GeoJSONBorders";
import { ImageOverlay } from "./ImageOverlay";

export const DataLayersWrapper = () => {
  return (
    <>
      <LeicesterCrimes />
      <VectorLayers />
      <GeoJSONGdansk />
      <GeoJSONBorders />
      <ImageOverlay />
    </>
  );
};
