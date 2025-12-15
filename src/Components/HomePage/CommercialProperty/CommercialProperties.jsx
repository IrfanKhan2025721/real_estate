import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { TbSquare } from "react-icons/tb";

function CommercialProperties({ data }) {
  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-bold text-2xl">Commercial Property</h1>
        <p className="text-gray-600 mt-2 max-w-md">
          Explore prime commercial spaces designed to elevate your business.
        </p>
      </div>

      {/* No Results */}
      {data.length === 0 && (
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            No properties found
          </h2>
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
        {data.map((info) => (
          <div
            key={info.id}
            className="w-64 h-[330px] bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-40 relative overflow-hidden">
              <img
                src={info.image}
                alt={info.propertyName}
                className="w-full h-full object-cover"
              />
              <span
                className="absolute top-2 left-2 text-white px-3 py-1 rounded-md text-xs font-semibold"
                style={{
                  backgroundColor:
                    info.status === "For Rent" ? "#9653DA" : "#8EDA53",
                }}
              >
                {info.status}
              </span>
            </div>

            {/* Info */}
            <div className="p-3 flex flex-col gap-1 text-sm">
              <h3 className="font-semibold truncate">{info.propertyName}</h3>
              <p className="text-gray-500 truncate">{info.location}</p>
              <span className="text-blue-600 font-bold text-base">
                {info.price}
              </span>
            </div>

            {/* Features */}
            <div className="mt-auto px-3 py-3 border-t flex justify-between text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <FaBed />
                <span>{info.bedrooms}</span>
              </div>

              <div className="flex items-center gap-1">
                <FaBath />
                <span>{info.bathrooms}</span>
              </div>

              <div className="flex items-center gap-1">
                <TbSquare />
                <span>{info.totalArea}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommercialProperties;
