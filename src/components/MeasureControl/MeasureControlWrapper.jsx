import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-measure-v2";

import "leaflet-measure-v2/dist/leaflet-measure.css";

import "./MeasureControlWrapper.css";

export const MeasureControlWrapper = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const measureControl = L.control.measure({
      position: "topright",
      primaryLengthUnit: "meters",
      secondaryLengthUnit: "kilometers",
      primaryAreaUnit: "sqmeters",
      secondaryAreaUnit: "acres",
      activeColor: "#1fd4d4",
      completedColor: "#09ece5",
    });
    measureControl.addTo(map);

    return () => {
      measureControl.remove();
    };
  }, [map]);

  return null;
};
