// Classes used by Leaflet to position controls
import {
  MapContainer,
  Rectangle,
  TileLayer,
  useMapEvent,
  useMap,
} from "react-leaflet";
import { useCallback, useMemo, useState } from "react";
import { useEventHandlers } from "@react-leaflet/core";
import { ControlClasses } from "../api/control-classes";
import { LeafletMouseEvent, Map } from "leaflet";

const BOUNDS_STYLE = { weight: 1 };

type MinimapBoundsProps = {
  parentMap: Map;
};

function MinimapBounds({ parentMap }: MinimapBoundsProps) {
  const minimap = useMap();

  const onClick = useCallback(
    (e: LeafletMouseEvent) => {
      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap]
  );
  useMapEvent("click", onClick);

  const [bounds, setBounds] = useState(parentMap.getBounds());
  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds());
    minimap.setView(parentMap.getCenter(), parentMap.getZoom() / 4);
  }, [minimap, parentMap]);

  const handlers = useMemo(
    () => ({ move: onChange, zoom: onChange }),
    [onChange]
  );
  useEventHandlers(
    { context: parentMap as any, instance: parentMap },
    handlers
  );

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
}

export function MinimapControl() {
  const parentMap = useMap();

  const positionClass = ControlClasses.topright;
  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">
        <MapContainer
          style={{ height: 80, width: 80 }}
          center={parentMap.getCenter()}
          zoom={parentMap.getZoom() / 4}
          dragging={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MinimapBounds parentMap={parentMap} />
        </MapContainer>
      </div>
    </div>
  );
}
