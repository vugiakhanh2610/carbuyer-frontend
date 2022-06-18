import React from "react";
import useSWR from "swr";
import { fetchAPI, fetcher } from "../../api/config";
import Car from "./Car";

const CarList = () => {
  const { data, error } = useSWR(fetchAPI.getAll("cars"), fetcher);
  if (!data) return null;
  const cars = data.data;

  return (
    <>{cars && cars.map((item) => <Car key={item.id} data={item}></Car>)}</>
  );
};

export default CarList;
