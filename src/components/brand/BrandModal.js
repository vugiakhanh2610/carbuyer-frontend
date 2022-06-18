import axios from "axios";
import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { fetchAPI } from "../../api/config";
import { BrandContext } from "./Brand";
import modal from "../../modal.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const FormModal = ({ children, id, brand }) => {
  // Modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // API
  const { fetchBrands } = useContext(BrandContext);
  const [name, setName] = useState(brand ? brand.name : "");
  const [logo, setLogo] = useState(brand ? brand.logo : "");
  const [retailer, setRetailer] = useState(brand ? brand.retailer : "");

  const handleSubmit = async () => {
    const data = {
      name: name,
      logo: logo,
      retailer: retailer,
    };
    if (id) await axios.put(fetchAPI.update("brand", id), data);
    else await axios.post(fetchAPI.add("brand"), data);
    closeModal();
    await fetchBrands();
  };

  return (
    <div>
      <button
        className="py-2 px-6 bg-btn_blue text-sm text-white font-medium rounded-3xl"
        onClick={openModal}
      >
        {children}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className=""
      >
        <div className="w-full mx-auto bg-white p-10 rounded-lg shadow-xl">
          <form className="w-full p-5" onSubmit={handleSubmit}>
            <h2 className="text-black text-center text-2xl font-bold mt-[-10px] mb-5 ">
              CARBUYER
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
            <div className="mb-5">
              <div className="text-[#d3d9ea]">Name</div>
              <input
                className="w-full py-2 px-5 bg-primary rounded-lg text-secondary outline-none"
                type="text"
                placeholder="Brand's name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <div className="text-[#d3d9ea]">Logo</div>
              <input
                className="w-full py-2 px-5 bg-primary rounded-lg text-secondary outline-none"
                type="text"
                placeholder="Brand's logo url..."
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <div className="text-[#d3d9ea]">Retailer</div>
              <input
                className="w-full py-2 px-5 bg-primary rounded-lg text-secondary outline-none"
                type="text"
                placeholder="Brand's retailer..."
                value={retailer}
                onChange={(e) => setRetailer(e.target.value)}
              />
            </div>
            <button className="w-full font-medium bg-btn_red py-2 rounded-3xl mt-5">
              SAVE BRAND
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
