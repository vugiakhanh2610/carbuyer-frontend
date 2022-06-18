import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useSWR from "swr";
import { fetchAPI, fetcher } from "../../api/config";

const Brand = () => {
  const navigate = useNavigate();

  const [brands, setBrands] = useState();
  const { data, error } = useSWR(fetchAPI.getAll("brand"), fetcher);

  useEffect(() => {
    data && setBrands(data.data);
  }, [data]);

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-10">
        {brands &&
          brands[0].map((item, index) => (
            <div
              key={index}
              className="p-3 bg-white rounded-lg select-none shadow-md"
            >
              <img
                src={item.logo}
                alt=""
                className="w-[100%] h-[200px] object-contain rounded-lg mb-5"
              />
              <h3 className="text-center text-secondary text-lg font-medium mb-3">
                {item.name}
              </h3>
              <div className="flex items-center justify-between text-white text-sm font-medium mb-2 ">
                <button
                  className="w-[80px] bg-primary py-2 px-4 rounded-md"
                  onClick={() => navigate(`/brand/${item.id}`)}
                >
                  View
                </button>
                <button
                  className="w-[80px] bg-btn_blue py-2 px-4 rounded-md"
                  onClick={() => navigate(`/brand/${item.id}`)}
                >
                  Update
                </button>
                <button
                  className="w-[80px] bg-btn_red py-2 px-4 rounded-md"
                  onClick={() => navigate(`/brand/${item.id}`)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Brand;
