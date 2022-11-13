import React from "react";
import { GeoJSON } from "react-leaflet";
import { useGeoJSONApi } from "../../hooks/useGeoJSONApi";
import { BordersGeoJsonObject } from "./types";

export const GeoJSONBorders = () => {
  const geoJsonDataBorders: BordersGeoJsonObject = useGeoJSONApi(
    "https://raw.githubusercontent.com/wmgeolab/geoBoundaries/6b002b1eee2fd9599f1a3af8fe076d694e6decee/releaseData/gbOpen/UKR/ADM1/geoBoundaries-UKR-ADM1_simplified.geojson"
  );
  return (
    <>
      {geoJsonDataBorders && (
        <GeoJSON
          eventHandlers={{
            click: (options) => {
              options.propagatedFrom
                .bindPopup(
                  ` <h5>${options.sourceTarget.feature.properties.shapeName}</h5> `
                )
                .openPopup();
            },
          }}
          data={geoJsonDataBorders}
        />
      )}
    </>
  );
};
