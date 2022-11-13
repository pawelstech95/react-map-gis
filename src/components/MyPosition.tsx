import React, { useState, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { CurrentLocation } from "tabler-icons-react";
import L, { LatLng } from "leaflet";
import { ActionIcon } from "@mantine/core";

import { LeafletControl } from "../utils/LeafletControl";
import { IconLocation } from "../utils/Icon";

export function MyPosition() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const [bbox, setBbox] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);

      setBbox(e.bounds.toBBoxString().split(","));
      setLoading(false);
    });
  }, [map]);

  return position === null ? null : (
    <div className="my-position">
      <LeafletControl position={"bottomright"} cssName="my-position">
        <ActionIcon
          onClick={() => {
            map.locate();
            setLoading(true);
          }}
          loading={loading}
          variant={"default"}
        >
          <CurrentLocation />
          <Marker position={position} icon={IconLocation}>
            <Popup>
              You are here. <br />
              Map bbox: <br />
              <b>Southwest lng</b>: {bbox[0]} <br />
              <b>Southwest lat</b>: {bbox[1]} <br />
              <b>Northeast lng</b>: {bbox[2]} <br />
              <b>Northeast lat</b>: {bbox[3]}
            </Popup>
          </Marker>
        </ActionIcon>
      </LeafletControl>
    </div>
  );
}
