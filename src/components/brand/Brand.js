import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FormModal from "./BrandModal";
import DeleteBrand from "./DeleteBrand";

export const BrandContext = React.createContext({
  brands: [],
  fetchBrands: () => {},
});

const Brand = ({ url }) => {
  const navigate = useNavigate();

  const [brands, setBrands] = useState();
  const fetchBrands = async () => {
    const response = await axios.get(url);
    const data = response.data;
    setBrands(data.data);
  };

  useEffect(() => {
    fetchBrands();
  }, [url]);

  return (
    <BrandContext.Provider value={{ brands, fetchBrands }}>
      <div className="grid grid-cols-3 gap-10">
        {brands &&
          brands.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-white rounded-lg select-none shadow-xl"
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
                  className="py-2 px-6 bg-primary text-sm text-white font-medium rounded-3xl"
                  onClick={() => navigate(`/brand/${item.id}`)}
                >
                  View
                </button>
                <FormModal
                  children="Update"
                  id={item.id}
                  brand={item}
                ></FormModal>
                <DeleteBrand id={item.id}></DeleteBrand>
              </div>
            </div>
          ))}
      </div>
    </BrandContext.Provider>
  );
};

export default Brand;
