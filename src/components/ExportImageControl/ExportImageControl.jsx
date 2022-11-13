import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.bigimage/dist/Leaflet.BigImage.min";
import "leaflet.bigimage/dist/Leaflet.BigImage.min.css";

import "./ExportImageControl.css";

export const ExportImageControl = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const exportImage = L.control.BigImage({ position: "topleft" }).addTo(map);

    return () => {
      exportImage.remove();
    };
  }, [map]);

  return null;
};
