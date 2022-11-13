import { Icon, icon } from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export const IconLocation = icon({
  iconUrl: "img/marker-icon-2x.png",
  iconSize: [16, 24],
});

export const shopIcon = new Icon({
  iconUrl: "img/pin-shop.png",
  iconSize: [24, 48],
  popupAnchor: [0, -20],
  shadowUrl: iconShadow,
  shadowAnchor: [13, 28],
});
export const parkIcon = new Icon({
  iconUrl: "img/pin-park.png",
  iconSize: [24, 48],

  popupAnchor: [0, -20],
  shadowUrl: iconShadow,
  shadowAnchor: [13, 28],
});
export const shadowIcon = new Icon({
  iconUrl: iconShadow,
  iconSize: [24, 48],
});
