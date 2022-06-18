import React from "react";
import { useNavigate } from "react-router";

const Car = ({ data }) => {
  const navigate = useNavigate();
  const { id, name, img, price, name_brand } = data;
  return (
    <div className="w-full h-[180px] bg-white p-1 flex gap-x-3 items-center justify-around rounded-lg mx-auto mb-2 shadow-lg">
      <div className="w-[30%] h-full ">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-[30%] h-full flex flex-col justify-around">
        <div>
          <h3 className="text-secondary text-xl font-bold">{name}</h3>
          <div className="text-secondary text-sm font-medium">{name_brand}</div>
        </div>
        <div className="text-[#ffd68b] text-lg font-extrabold">${price}</div>
      </div>
      <div className="w-[40%] h-full flex items-end justify-end gap-x-2 p-3">
        <button
          className="font-medium py-2 px-8 rounded-md bg-primary text-secondary"
          onClick={() => navigate(`/car/${id}`)}
        >
          View Details
        </button>
        <button className="font-medium py-2 px-8 rounded-md bg-btn_blue text-white cursor-default">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Car;
