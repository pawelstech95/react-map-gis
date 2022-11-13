import { useQuery } from "react-query";

export const useGeoJSONApi = (path: string) => {
  const { data } = useQuery(`${path}`, () =>
    fetch(`${path}`).then((res) => res.json())
  );

  return data;
};
