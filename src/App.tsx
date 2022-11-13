import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MapContainer } from "react-leaflet";

import Map from "./containers/Map";
import { DefaultMapTileLayer } from "./components/DefaultMapTileLayer";

import { defaultPositionLatLng } from "./utils/positions";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MapContainer
        center={defaultPositionLatLng}
        zoom={12}
        minZoom={3}
        // @todo TS
        // @ts-ignore
        fullscreenControl
        scrollWheelZoom
        preferCanvas
      >
        <DefaultMapTileLayer />
        <Map />
      </MapContainer>
    </QueryClientProvider>
  );
}
