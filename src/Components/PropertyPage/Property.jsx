import React, { useState } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { TbSquare } from "react-icons/tb";
import data from "../PropertyPage/Data";
import Hero from "../PropertyPage/Hero";

function Property() {
  const [filteredData, setFilteredData] = useState(data);

  // Callback function for Hero component
  const handleSearch = (filters) => {
    const { category, propertyType, location } = filters;

    const filtered = data.filter((item) => {
      return (
        (category ? item.category === category : true) &&
        (propertyType ? item.propertyType === propertyType : true) &&
        (location ? item.city === location : true)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />

      <section className="mt-28 mb-16">
        {/* Heading */}
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="font-bold text-2xl md:text-3xl">
            Discover your featured property
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl">
            Explore our handpicked properties and find your perfect home today.
          </p>
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              No properties found
            </h2>
            <p className="text-gray-500 mt-2">
              Try changing your search filters
            </p>
          </div>
        )}

        {/* Properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6 mt-12 px-4 justify-items-center">
          {filteredData.map((info) => (
            <div
              key={info.id}
              className="w-[350px] h-[400px] max-w-full bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.3)]
              hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-[200px] relative overflow-hidden">
                <img
                  src={info.image}
                  alt={info.propertyName}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                <span
                  className="absolute top-2 left-2 text-white px-6 py-1 rounded-[6px] text-[16px] font-bold"
                  style={{
                    backgroundColor:
                      info.status === "For Rent" ? "#9653DA" : "#8EDA53",
                  }}
                >
                  {info.status}
                </span>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{info.propertyName}</h3>
                <p className="text-sm text-gray-500">{info.location}</p>
                <span className="text-blue-600 font-bold text-lg">
                  {info.price}
                </span>
              </div>

              {/* Features */}
              <div className="mt-auto px-4 py-4 border-t flex justify-around text-gray-600">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-xl" />
                    <span className="text-sm font-semibold">
                      {info.bedrooms}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    Bedrooms
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <FaBath className="text-xl" />
                    <span className="text-sm font-semibold">
                      {info.bathrooms}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    Bathrooms
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <TbSquare className="text-xl" />
                    <span className="text-sm font-semibold">
                      {info.totalArea}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    Total Area
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Property;
