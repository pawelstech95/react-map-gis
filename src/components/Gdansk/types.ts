import { LatLngExpression } from "leaflet";
// @todo for the further development of the application it is necessary to rewrite the types

export interface GdanskDataType {
  type: string;
  features: GdanskGeoJsonObject[];
}

export interface GdanskGeoJsonObject {
  type: FeatureType;
  properties: Properties;
  geometry: Geometry;
}

export interface Geometry {
  type: GeometryType;
  coordinates: LatLngExpression;
}

export enum GeometryType {
  LineString = "LineString",
  Point = "Point",
  Polygon = "Polygon",
}

export interface Properties {
  "marker-color"?: string;
  "marker-size"?: string;
  "marker-symbol"?: MarkerSymbol;
  name: string;
  square?: string;
  address?: string;
  bicycleParking?: boolean | string;
  carParking?: boolean | string;
  destiny?: Destiny;
  type?: MarkerSymbol;
  openingHours?: string;
  description?: string;
  stroke?: string;
  "stroke-width"?: number;
  "stroke-opacity"?: number;
  fill?: string;
  "fill-opacity"?: number;
}

export enum Destiny {
  Recreation = "recreation",
  Shopping = "shopping",
  Work = "work",
}

export enum MarkerSymbol {
  Office = "office",
  Park = "park",
  Shop = "shop",
}

export type PropertiesWithImg = ["forum", "baltycka", "obc"];

export enum FeatureType {
  Feature = "Feature",
}
