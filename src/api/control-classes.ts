export const ControlClasses = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

export type ControlPosition = keyof typeof ControlClasses;

export interface LeafLetControlProps {
  position?: ControlPosition;
  cssName?: string;
}
