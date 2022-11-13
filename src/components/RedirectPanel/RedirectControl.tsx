import React, { useCallback, useState } from "react";
import { useMap } from "react-leaflet";
import { ActionIcon } from "@mantine/core";
import { HandMove } from "tabler-icons-react";

import { LeafletControl } from "../../utils/LeafletControl";
import {
  defaultPositionLatLng,
  leicesterLatLng,
  ukrBordersLatLng,
} from "../../utils/positions";

import "./redirectControl.css";

export const RedirectControl = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const map = useMap();

  const handleOnSetView = useCallback(() => {
    map?.setView(defaultPositionLatLng, 12);
  }, [map]);

  const handleOnFlyTo = useCallback(() => {
    map?.setView(ukrBordersLatLng, 6);

    map?.flyTo(ukrBordersLatLng, 6, {
      duration: 2,
    });
  }, [map]);

  const handleOnFlyToLeicester = useCallback(() => {
    map?.setView(leicesterLatLng, 12);

    map?.flyTo(leicesterLatLng, 12, {
      duration: 2,
    });
  }, [map]);

  return (
    <LeafletControl position={"bottomleft"} cssName="redirect-control">
      <ActionIcon
        size={44}
        variant={"default"}
        className="redirect-control-icon"
      >
        <HandMove onClick={() => setIsOpen(true)} />
      </ActionIcon>
      {isOpen && (
        <div className="sidebar">
          <button className="close-button" onClick={() => setIsOpen(false)}>
            X
          </button>
          <h2>Gdańsk</h2>
          <p>
            <button onClick={handleOnSetView}>Set View to Gdańsk</button>
          </p>
          <h2>Ukraine</h2>
          <p>
            <button onClick={handleOnFlyTo}>Fly to Ukraine</button>
          </p>

          <h2>Leicester</h2>
          <p>
            <button onClick={handleOnFlyToLeicester}>Fly to Leicester</button>
          </p>
        </div>
      )}
    </LeafletControl>
  );
};
