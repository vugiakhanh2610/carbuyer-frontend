import React, { useEffect, useState } from "react";
import { fetchAPI } from "../api/config";
import Brand from "../components/brand/Brand";
import FormModal from "../components/brand/BrandModal";
import useDebounce from "../hook/useDebounce";

const BrandPage = () => {
  const [url, setUrl] = useState(fetchAPI.getAll("brand"));

  const [filter, setFilter] = useState("");
  const debounceFilter = useDebounce(filter, 500);
  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (debounceFilter) {
      setUrl(fetchAPI.search("brand", debounceFilter));
    } else {
      setUrl(fetchAPI.getAll("brand"));
    }
  }, [debounceFilter]);

  return (
    <div className="container ">
      <div className="w-full h-[60px] flex items-center justify-between gap-x-3 bg-white p-8 mb-5 rounded-lg shadow-xl">
        <FormModal children="ADD BRAND"></FormModal>
        <div className="w-[40%] relative">
          <input
            type="text"
            className="w-full py-2 px-5 pr-10 outline-none bg-primary text-secondary rounded-3xl "
            placeholder="Brand's name or retailer..."
            onChange={handleOnChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-[50%] right-3 translate-y-[-50%]  text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <Brand url={url}></Brand>
    </div>
  );
};

export default BrandPage;
