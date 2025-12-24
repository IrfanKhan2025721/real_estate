import React from "react";
import video from "../../assets/images/realEstate (2).MP4";

const propertyData = {
  description:
    "This beautifully designed property offers a perfect balance of comfort and functionality. Featuring spacious living areas, natural light throughout, and high-quality finishes, it is ideal for modern living. Located in a well-connected neighborhood, the home provides easy access to essential amenities, schools, shopping centers, and public transport.",

  details: [
    { label: "Property ID", value: "RT48" },
    { label: "Rooms", value: "4" },
    { label: "Beds", value: "3" },
    { label: "Baths", value: "2" },
    { label: "Garage", value: "1" },
    { label: "Size", value: "220 m²" },
  ],

  nearby: {
    Education: ["University (1.2 km)", "School (2.3 km)"],
    "Health & Medical": ["Hospital (1.5 km)", "Clinic (2.1 km)"],
    Food: ["Restaurant (0.5 km)", "Cafe (1 km)"],
    Culture: ["Museum (1.8 km)", "Library (2.4 km)"],
  },

  apartmentPlan: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",

  featured: [
    {
      title: "Modern Apartment",
      price: "$120,000",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    },
    {
      title: "Luxury House",
      price: "$180,000",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
      title: "Family Home",
      price: "$95,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
  ],

  related: {
    title: "Luxury House",
    price: "$180,000",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  },
};

function PropertyDetails() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-8">
        {/* Description */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600 text-sm leading-6">
            {propertyData.description}
          </p>
        </section>

        {/* Property Details */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Property Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {propertyData.details.map((item, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What's Nearby */}
        <section>
          <h2 className="text-lg font-semibold mb-4">What’s Nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {Object.entries(propertyData.nearby).map(([category, places]) => (
              <div key={category}>
                <h4 className="font-medium mb-2">{category}</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {places.map((place, i) => (
                    <li key={i}>{place}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Apartment Plan */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Apartment Plan</h2>
          <img
            src={propertyData.apartmentPlan}
            alt="Apartment Plan"
            className="w-full h-72 object-cover rounded-lg"
          />
        </section>

        {/* Real Estate Video */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Property Video Tour</h2>
          <div className="w-full h-72 rounded-lg overflow-hidden shadow">
            <video src={video} muted className="w-full h-full object-cover" />
          </div>
        </section>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">
        {/* Contact Agent */}
        <div className="bg-[#100E2C] text-white p-6 rounded-xl">
          <h3 className="font-semibold mb-4">Contact Agent</h3>
          <input
            className="w-full mb-3 p-2 rounded text-black"
            placeholder="Name"
          />
          <input
            className="w-full mb-3 p-2 rounded text-black"
            placeholder="Phone"
          />
          <textarea
            className="w-full mb-3 p-2 rounded text-black"
            placeholder="Message"
          />
          <button className="w-full bg-blue-600 py-2 rounded font-semibold">
            Send Message
          </button>
        </div>

        {/* Featured Listings */}
        <div>
          <h3 className="font-semibold mb-3">Featured Listings</h3>
          {propertyData.featured.map((item, index) => (
            <div key={index} className="flex gap-3 mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <span className="text-xs text-gray-500">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Related Property */}
        <div>
          <h3 className="font-semibold mb-3">Related Property</h3>
          <div className="bg-white rounded-lg shadow">
            <img
              src={propertyData.related.image}
              alt={propertyData.related.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <p className="font-medium text-sm">
                {propertyData.related.title}
              </p>
              <span className="text-xs text-gray-500">
                {propertyData.related.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
