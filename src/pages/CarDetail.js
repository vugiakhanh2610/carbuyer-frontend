import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { fetchAPI, fetcher } from "../api/config";

const CarDetail = () => {
  const { id } = useParams();
  const { data, error } = useSWR(fetchAPI.getAll("car", id), fetcher);
  if (!data) return null;
  const car = data.data;
  const { name, img, description, price, name_brand } = car[0];
  return (
    <div className="w-[900px] mx-auto bg-white rounded-lg py-10 shadow-lg">
      <div className="w-[50%] h-[300px] max-w-[800px] mx-auto">
        <img
          src={img}
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-black mb-2">{name}</h1>
      <h2 className="text-center text-btn_red font-bold mb-10">{name_brand}</h2>
      <p className="text-center text-secondary leading-relaxed max-w-[600px] mx-auto mb-10">
        {description}
      </p>
      <div className="max-w-[600px] mx-auto flex items-center justify-end gap-x-3">
        <span className="text-secondary text-lg font-medium">${price}</span>
        <button className="py-1 px-5 bg-btn_blue rounded-md cursor-default">
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default CarDetail;
