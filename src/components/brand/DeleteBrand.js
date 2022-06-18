import axios from "axios";
import React, { useContext } from "react";
import { fetchAPI } from "../../api/config";
import { BrandContext } from "./Brand";

const DeleteBrand = ({ id }) => {
  const { fetchBrands } = useContext(BrandContext);
  const handleOnclick = async () => {
    await axios.delete(fetchAPI.delete("brand", id));
    await fetchBrands();
  };
  return (
    <button
      className="py-2 px-6 bg-btn_red text-sm text-white font-medium rounded-3xl"
      onClick={handleOnclick}
    >
      Delete
    </button>
  );
};

export default DeleteBrand;
