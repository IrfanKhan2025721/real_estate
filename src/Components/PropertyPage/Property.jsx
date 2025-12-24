import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Bed, Bath, Maximize2 } from "lucide-react";
import data from "../PropertyPage/Data";
import Hero from "../PropertyPage/Hero";

function Property() {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (filters) => {
    const { category, propertyType, location } = filters;

    const filtered = data.filter(
      (item) =>
        (category ? item.category === category : true) &&
        (propertyType ? item.propertyType === propertyType : true) &&
        (location ? item.city === location : true)
    );

    setFilteredData(filtered);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />

      <section className="mt-28 mb-20 bg-white">
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

        {/* Property Cards */}
        <div className="mt-14 max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((info) => (
            <div
              key={info.id}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={info.image}
                  alt={info.propertyName}
                  className="h-56 w-full object-cover"
                />

                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {info.propertyType}
                  </span>
                  <span
                    className={`text-white text-xs px-3 py-1 rounded-full ${
                      info.status === "For Rent"
                        ? "bg-purple-600"
                        : "bg-green-600"
                    }`}
                  >
                    {info.status}
                  </span>
                </div>

                {/* Heart */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  <Heart className="w-4 h-4 text-slate-500" />
                </button>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Link
                    to={`/property/${info.id}`}
                    className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="font-bold text-slate-900 leading-snug">
                  {info.propertyName}
                </h3>

                <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  {info.location}
                </p>

                {/* Details */}
                <div className="mt-4 flex justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {info.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {info.bathrooms} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="w-4 h-4" />
                    {info.totalArea}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-blue-600 font-extrabold text-lg">
                    {info.price}
                  </p>

                  <Link
                    to={`/property/${info.id}`}
                    className="text-sm text-blue-600 font-semibold hover:underline"
                  >
                    Purchase
                  </Link>
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
