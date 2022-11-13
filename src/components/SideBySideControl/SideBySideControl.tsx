import React, { useState } from "react";
import { useMap } from "react-leaflet";
import { ActionIcon } from "@mantine/core";
import { BorderVertical } from "tabler-icons-react";

import { SideBySideMode } from "../SideBySideMode";

import { LeafletControl } from "../../utils/LeafletControl";
import { stamenLayer } from "../../utils/sideBysideTileLayers";

import "./sideBySideControl.css";

export const SideBySideControl = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const map = useMap();

  if (map.hasLayer(stamenLayer)) map.removeLayer(stamenLayer); //@todo

  return (
    <LeafletControl position={"bottomleft"} cssName="side-by-side-control">
      <ActionIcon
        size={44}
        variant={"default"}
        className="side-by-side-control"
      >
        <BorderVertical onClick={() => setIsOpen(!isOpen)} />
        {isOpen && <SideBySideMode />}
      </ActionIcon>
    </LeafletControl>
  );
};
