import React from "react";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Marker,
  Popup,
  Rectangle,
} from "react-leaflet";

import { IconLocation } from "../../utils/Icon";

export const GroupedLayers = () => {
  return (
    <>
      <LayersControl.Overlay name="Marker with popup">
        <Marker position={[54.37812, 18.472183]} icon={IconLocation}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Layer group with circles">
        <LayerGroup>
          <Circle
            center={[54.405106, 18.373649]}
            pathOptions={{ fillColor: "blue" }}
            radius={400}
          />
          <Circle
            center={[54.405106, 18.373649]}
            pathOptions={{ fillColor: "red" }}
            radius={200}
            stroke={false}
          >
            <Popup>Popup in Circle</Popup>
          </Circle>
          <LayerGroup>
            <Circle
              center={[54.376521, 18.386009]}
              pathOptions={{ color: "green", fillColor: "green" }}
              radius={100}
            >
              <Popup>Popup in Circle</Popup>
            </Circle>
          </LayerGroup>
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Feature group">
        <FeatureGroup pathOptions={{ color: "purple" }}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[54.36012, 18.439224]} radius={200} />
          <Rectangle
            bounds={[
              [54.330734, 18.359533],
              [54.317831, 18.384424],
            ]}
          >
            <Popup>Popup in Rectangle</Popup>
          </Rectangle>
        </FeatureGroup>
      </LayersControl.Overlay>
    </>
  );
};
