import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Price from "./Price";
import PropertyDetails from "./PropertyDetails";

function SingleProperty() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 mt-9">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-700 hover:text-black mb-6"
      >
        <IoArrowBack className="text-xl" />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Content */}
      <Price />
      <PropertyDetails />
    </div>
  );
}

export default SingleProperty;
