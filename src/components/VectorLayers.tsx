import React from "react";
import { Circle, CircleMarker, Popup } from "react-leaflet";

export const VectorLayers = () => {
  const fillBlueOptions = { fillColor: "blue" };
  const redOptions = { color: "red" };

  return (
    <div>
      <Circle
        center={[54.348053, 18.055372]}
        pathOptions={fillBlueOptions}
        radius={800}
      >
        <Popup>Popup in Circle</Popup>
      </Circle>
      <CircleMarker
        center={[54.178053, 18.485372]}
        pathOptions={redOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
    </div>
  );
};
