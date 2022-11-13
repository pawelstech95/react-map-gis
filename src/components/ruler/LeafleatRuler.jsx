import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "./leaflet-ruler.css";
import "./leaflet-ruler";

export const LeafletRuler = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const ruler = L.control.ruler();

    ruler.addTo(map);

    return () => {
      ruler.remove();
    };
  }, [map]);

  return null;
};
