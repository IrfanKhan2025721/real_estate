import React, { useState } from "react";

function Price() {
  const [showImages, setShowImages] = useState(false);

  const propertyData = {
    status: "For Sale",
    propertyName: "Amazing modern apartment",
    location: "43 W Wellington Road Fairhope, AL 36532",
    price: "120,000",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    ],
    map: "https://maps.google.com/maps?q=Fairhope&t=&z=13&ie=UTF8&iwloc=&output=embed",
  };

  return (
    <>
      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <span className="inline-block text-white px-4 py-1 rounded-md text-sm font-bold bg-green-500 mb-2">
            {propertyData.status}
          </span>

          <h1 className="text-xl font-semibold">
            {propertyData.propertyName}
          </h1>

          <p className="text-gray-500 text-sm mb-4">
            {propertyData.location}
          </p>

          {/* Main Image */}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowImages(true)}
          >
            <img
              src={propertyData.images[0]}
              alt={propertyData.propertyName}
              className="rounded-lg object-cover w-full h-[300px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <span className="text-white font-semibold">
                Show all images
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[300px] space-y-4">
          <div className="text-right">
            <span className="text-2xl font-bold text-gray-900">
              ${propertyData.price}
            </span>
          </div>

          <img
            src={propertyData.images[1]}
            alt="Interior"
            className="w-full h-32 rounded-lg object-cover"
          />

          <div className="h-32 rounded-lg overflow-hidden">
            <iframe
              title="map"
              src={propertyData.map}
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {showImages && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full relative">
            <button
              onClick={() => setShowImages(false)}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {propertyData.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Property"
                  className="w-full h-60 rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Price;
