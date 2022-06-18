import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { fetchAPI, fetcher } from "../api/config";

const BrandDetail = () => {
  const { id } = useParams();
  const { data, error } = useSWR(fetchAPI.getAll("brand", id), fetcher);
  if (!data) return null;
  const brand = data.data;
  const { logo, name, retailer } = brand[0];
  return (
    <div className="w-[500px] mx-auto bg-white rounded-lg py-10 shadow-xl">
      <img
        src={logo}
        alt=""
        className="w-[100%] h-[200px] object-contain rounded-lg mb-5"
      />
      <h2 className="text-center text-lg text-black font-bold">
        {retailer}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline text-btn_red"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </h2>
      <h3 className="text-center text-secondary text-lg font-medium mb-3">
        ({name})
      </h3>
    </div>
  );
};

export default BrandDetail;
