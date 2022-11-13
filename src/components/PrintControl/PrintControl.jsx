import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.browser.print/dist/leaflet.browser.print";

import "./PrintControl.css";

export const PrintControl = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const browserControl = L.control.browserPrint({
      color: "gray",
      dashArray: "5, 10",
      pane: "customPrintPane",
    });
    browserControl.addTo(map);

    return () => {
      browserControl.remove();
    };
  }, [map]);

  return null;
};
