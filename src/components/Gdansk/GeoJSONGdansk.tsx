import React from "react";
import {
  GdanskGeoJsonObject,
  MarkerSymbol,
  Properties,
  PropertiesWithImg,
} from "./types";
import { GeoJSON } from "react-leaflet";
import L, { DivIcon, Icon } from "leaflet";

import { parkIcon, shopIcon } from "../../utils/Icon";
import { useGeoJSONApi } from "../../hooks/useGeoJSONApi";

export const GeoJSONGdansk = () => {
  const geoJsonDataGdansk: GdanskGeoJsonObject = useGeoJSONApi(
    "data/map-gdansk.geojson"
  );

  return (
    <>
      {geoJsonDataGdansk && (
        <GeoJSON
          eventHandlers={{
            click: (options) => {
              const propertiesWithImg: PropertiesWithImg = [
                "forum",
                "baltycka",
                "obc",
              ]; //@todo rewrite it
              const properties: Properties =
                options.sourceTarget.feature.properties;
              const { name } = properties;

              options.propagatedFrom
                .bindPopup(
                  propertiesWithImg.find((prop) => name.includes(prop))
                    ? ` 
                    <h3>${name}</h3>
                    <p>Front</p>
                    <img src="img/${name}-front.jpg"  width="250" height="150" alt="Front view" >
                    <p>Rear</p>
                    <img src="img/${name}-rear.jpg" width="250" height="150" alt="Rear view">
                `
                    : `
                    <h3>${name}</h3>
                    <p><b>Warning!</b> <br />
                     Some of the locations have oblique aerial photos, eg "OBC",
                      "Bałtycka" Shopping Center and "Forum" shopping center. 
                      Click on one of them and check.
                    </p>`
                )
                .openPopup();
            },
          }}
          data={geoJsonDataGdansk}
          pointToLayer={(geoJsonPoint, latlng) => {
            const checkType = geoJsonPoint.properties.type as MarkerSymbol;

            return L.marker(latlng, {
              icon: ((checkType === "park" && parkIcon) ||
                (checkType === "shop" && shopIcon)) as
                | Icon
                | DivIcon
                | undefined,
            });
          }}
        />
      )}
    </>
  );
};
