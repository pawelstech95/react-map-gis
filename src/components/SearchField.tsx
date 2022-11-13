import { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { GeoSearchControl } from "leaflet-geosearch";

import "font-awesome/css/font-awesome.min.css";
import "leaflet-geosearch/dist/geosearch.css";

import { IconLocation } from "../utils/Icon";

export const SearchField = () => {
  const provider = useMemo(() => new OpenStreetMapProvider(), []);

  const map = useMap();

  useEffect(() => {
    const control = GeoSearchControl({
      provider,
      style: "bar",
      marker: {
        icon: IconLocation,
        draggable: false,
      },
    });

    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map, provider]);

  return null;
};
