import { LatLngExpression } from "leaflet";
// @todo for the further development of the application it is necessary to rewrite the types

export interface BordersDataType {
  type: string;
  features: BordersGeoJsonObject[];
}

export interface BordersGeoJsonObject {
  type: FeatureType;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: GeometryType;
  coordinates: LatLngExpression;
}

export enum GeometryType {
  MultiPolygon = "MultiPolygon",
  Polygon = "Polygon",
}

export interface Properties {
  shapeName: string;
  Level: Level;
  shapeISO: string;
  shapeID: string;
  shapeGroup: ShapeGroup;
  shapeType: Level;
}

export enum Level {
  Adm1 = "ADM1",
}

export enum ShapeGroup {
  Ukr = "UKR",
}

export enum FeatureType {
  Feature = "Feature",
}
