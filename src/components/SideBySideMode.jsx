import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-side-by-side";

import { osmLayer, stamenLayer } from "../utils/sideBysideTileLayers";
import { DefaultMapTileLayer } from "./DefaultMapTileLayer";

export const SideBySideMode = () => {
  const map = useMap();
  useEffect(() => {
    map.removeLayer(DefaultMapTileLayer);
    const control = L.control
      .sideBySide(stamenLayer.addTo(map), osmLayer.addTo(map))
      .addTo(map);
    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
};
