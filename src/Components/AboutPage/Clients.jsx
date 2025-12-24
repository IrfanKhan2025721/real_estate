import React from "react";
import { BiPurchaseTag } from "react-icons/bi";
import { FaSellcast } from "react-icons/fa";
import { MdOutlineHouseSiding } from "react-icons/md";

function Clients() {
  const clientData = [
    {
      id: 0,
      title: "Buy a Property",
      description:
        "Find your dream home with our expert guidance. We help you explore the best properties to fit your lifestyle and budget.",
      button: "Find Property",
      icon: <BiPurchaseTag className="text-3xl text-blue-400" />,
    },
    {
      id: 1,
      title: "Sell a Property",
      description:
        "Sell your property quickly and at the best price with our professional marketing and negotiation services.",
      button: "Sell Property",
      icon: <FaSellcast className="text-3xl text-green-400" />,
    },
    {
      id: 2,
      title: "Rent a Property",
      description:
        "Rent properties easily with our extensive listings and assistance in finding the perfect place to live.",
      button: "Rent Property",
      icon: <MdOutlineHouseSiding className="text-3xl text-purple-400" />,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Our Client's Success is Our Success
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide top-notch services for buying, selling, and renting
          properties, ensuring our clients' goals are met smoothly and
          efficiently.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {clientData.map((client) => (
          <div
            key={client.id}
            className="bg-[#100E2C] shadow-lg rounded-lg p-6 w-64 sm:w-72 md:w-72 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            style={{ minHeight: "280px" }}
          >
            {/* Icon */}
            <div className="mb-3">{client.icon}</div>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-2 text-white">
              {client.title}
            </h2>

            {/* Description */}
            <p className="text-gray-100 text-sm mb-4 flex-grow">
              {client.description}
            </p>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-[10px] rounded-md font-medium text-sm transition">
              {client.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
