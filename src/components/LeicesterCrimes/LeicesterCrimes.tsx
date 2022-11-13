import React, { useCallback, useEffect, useState } from "react";
import L, { DivIcon } from "leaflet";
import { Marker, useMap } from "react-leaflet";
import useSupercluster from "use-supercluster";

import { useQuery } from "react-query";
import { BBox } from "geojson";
import { LeicesterCrimesType } from "./types";

import "./LeicesterCrimes.css";

const icons: Record<string | number, DivIcon> = {};

const fetchIcon = (count: string | number, size: number) => {
  if (!icons[count]) {
    icons[count] = L.divIcon({
      html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
        ${count}
      </div>`,
    });
  }

  return icons[count];
};

const cuffs = new L.Icon({
  iconUrl: "img/handcuffs.svg",
  iconSize: [25, 25],
});

export function LeicesterCrimes() {
  const maxZoom = 22;
  const [bounds, setBounds] = useState<BBox | undefined>(undefined);
  const [zoom, setZoom] = useState(12);
  const map = useMap();

  const updateMap = useCallback(() => {
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);
    setZoom(map.getZoom());
  }, [map]);

  const onMove = useCallback(() => {
    updateMap();
  }, [updateMap]);

  useEffect(() => {
    updateMap();
  }, [updateMap, map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  const { isLoading, error, data } = useQuery<LeicesterCrimesType[]>(
    "leicester-crimes",
    () =>
      fetch(
        "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10"
      ).then((res) => res.json())
  );

  const points =
    data?.map((crime) => ({
      type: "Feature",
      properties: {
        cluster: false,
        crimeId: crime.id,
        category: crime.category,
      },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(crime.location.longitude),
          parseFloat(crime.location.latitude),
        ],
      },
    })) ?? [];

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: bounds,
    zoom: zoom,
    options: { radius: 75, maxZoom: 17 },
  });

  if (isLoading) return <>Loading...</>;

  if (error) {
    if (error instanceof Error) {
      return <>An error has occurred: {error.message}</>;
    }

    return <>An unknown error occurred</>;
  }

  return (
    <>
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={fetchIcon(
                pointCount,
                10 + (pointCount / points.length) * 40
              )}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    maxZoom
                  );
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true,
                  });
                },
              }}
            />
          );
        }

        return (
          <Marker
            key={`crime-${cluster.properties.crimeId}`}
            position={[latitude, longitude]}
            icon={cuffs}
          />
        );
      })}
    </>
  );
}
