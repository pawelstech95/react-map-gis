/* eslint-disable import/first */
// @ts-ignore
window.CESIUM_BASE_URL = "/Cesium/";

import React, { useCallback, useEffect } from "react";

import "cesium/Build/Cesium/Widgets/widgets.css";
import * as Cesium from "cesium";

import { LidarButtons } from "../components/Lidar/LidarButtons";

import "./../components/Lidar/LidarLayers.css";

export const LidarLayers = () => {
  const runCesium = useCallback(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      terrainProvider: Cesium.createWorldTerrain(),
    });

    viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(16421),
      })
    );

    viewer.scene.camera.setView({
      destination: new Cesium.Cartesian3(
        4401744.644145314,
        225051.41078911052,
        4595420.374784433
      ),
      orientation: new Cesium.HeadingPitchRoll(
        5.646733805039757,
        -0.276607153839886,
        6.281110875400085
      ),
    });

    return viewer;
  }, []);

  useEffect(() => {
    const viewer = runCesium();

    return () => {
      viewer.destroy();
    };
  }, [runCesium]);

  return (
    <div id="cesiumContainer">
      <LidarButtons />
    </div>
  );
};
