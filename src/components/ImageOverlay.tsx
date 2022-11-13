import { useMap } from "react-leaflet";
import L, { LatLngBoundsExpression } from "leaflet";

export const ImageOverlay = () => {
  const map = useMap();

  const imageUrl = "img/refinery.jpg";
  const imageBounds: LatLngBoundsExpression = [
    [54.365581, 18.699873],
    [54.339344, 18.778065],
  ];
  const options = {
    opacity: 0.85,
  };
  L.imageOverlay(imageUrl, imageBounds, options).addTo(map);

  return null;
};
