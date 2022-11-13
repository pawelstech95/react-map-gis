import React, { useEffect, useRef } from "react";
import { ControlClasses, LeafLetControlProps } from "../api/control-classes";
import L from "leaflet";

export const LeafletControl = ({
  position,
  children,
  cssName,
}: React.PropsWithChildren<LeafLetControlProps>) => {
  const divRef = useRef(null);

  // @todo do we need that everywhere?
  useEffect(() => {
    if (divRef.current) {
      L.DomEvent.disableClickPropagation(divRef.current);
      L.DomEvent.disableScrollPropagation(divRef.current);
    }
  });

  return (
    <div
      ref={divRef}
      className={`${position && ControlClasses[position]} ${cssName}`}
    >
      <div className={"leaflet-control"}>{children}</div>
    </div>
  );
};
