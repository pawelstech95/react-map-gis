import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

import { DefaultMapTileLayer } from "../DefaultMapTileLayer";

const { BaseLayer } = LayersControl;

export const MapLayer = () => {
  return (
    <>
      <LayersControl.BaseLayer name="Standard map">
        <BaseLayer name="Standard map">
          <DefaultMapTileLayer />
        </BaseLayer>
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="NASA Gibs Blue Marble">
        <BaseLayer name="NASA Gibs Blue Marble">
          <TileLayer
            url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
            attribution="&copy; NASA Blue Marble, image service by OpenGeo"
            maxNativeZoom={8}
          />
        </BaseLayer>
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Stamen Design">
        <BaseLayer name="Stamen Design">
          <TileLayer
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; '
            maxNativeZoom={8}
          />
        </BaseLayer>
      </LayersControl.BaseLayer>
    </>
  );
};
