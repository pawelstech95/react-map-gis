import React from "react";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet/dist/leaflet.css";

import { LayersControlWrapper } from "../components/LayersControl/LayersControlWrapper";
import { LeafletControlWrapper } from "./LeafletControlWrapper";
import { DataLayersWrapper } from "../components/DataLayersWrapper";
import { SideBySideControl } from "../components/SideBySideControl/SideBySideControl";

// @todo to generate point clouds we can use https://www.potree.org/potree/examples/elevation_profile.html, but the best way to do it is to write own profiler as same as ruler and measure tools
// @todo https://threejs.org/docs/#examples/en/loaders/PCDLoader
// @todo fix package.json conflicts
// @todo check if problem with npm install still occurred
// @todo readme file
// @todo support other languages
// @todo add files and display it on external browser window
// @todo fix css
// @todo imageOverlay show only in openStreetMAppView
// @todo myPosition Mark fix display
// @todo its to much similar names here (LeafletControl, LayersControl, LeafletControlWrapper, LayersControlWrapper...)

export default function Map() {
  return (
    <>
      <LeafletControlWrapper />
      <LayersControlWrapper />
      <DataLayersWrapper />
      <SideBySideControl />
    </>
  );
}
