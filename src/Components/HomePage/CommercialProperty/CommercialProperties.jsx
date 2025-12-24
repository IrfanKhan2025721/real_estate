import React from "react";
import { Heart, MapPin, Bath, Maximize2 } from "lucide-react";

function CommercialProperties({ data }) {
  return (
    <section className="mt-24 mb-20 bg-white">
      {/* Heading */}
      <div className="text-center px-4">
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
          Commercial Properties
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          Premium business spaces designed for growth and success
        </p>
      </div>

      {/* No Results */}
      {data.length === 0 && (
        <div className="mt-16 text-center text-gray-600">
          No commercial properties found
        </div>
      )}

      {/* Cards */}
      <div className="mt-14 max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((info) => (
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
                  Commercial
                </span>
                <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                  {info.status || "For Sale"}
                </span>
              </div>

              {/* Heart */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                <Heart className="w-4 h-4 text-slate-500" />
              </button>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200">
                  View Details
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 text-left">
              <h3 className="font-bold text-slate-900 leading-snug truncate">
                {info.propertyName}
              </h3>

              <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                <MapPin className="w-4 h-4" />
                {info.city}
              </p>

              {/* Details */}
              <div className="mt-4 flex justify-between text-sm text-slate-600">
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

                <button className="text-sm text-blue-600 font-semibold hover:underline">
                  Enquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommercialProperties;
