import React from "react";
import useSWR from "swr";
import { fetchAPI, fetcher } from "../../api/config";
import Loading from "../Loading";
import Car from "./Car";

const CarList = () => {
  const { data, error } = useSWR(fetchAPI.getAll("car"), fetcher);
  const loading = !data && !error;
  if (!data) return null;
  const cars = data.data;

  return (
    <>
      {loading && <Loading></Loading>}
      {cars && cars[0].map((item) => <Car key={item.id} data={item}></Car>)}
    </>
  );
};

export default CarList;
