import React from "react";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import kabulOffice from "../../assets/images/Kabul_office.jpg";
import heratOffice from "../../assets/images/Herat_office.jpg";
import mazar from "../../assets/images/Mazar.jpg";

function Office() {
  const officeData = [
    {
      id: 0,
      officeName: "Kabul Office",
      location: "Kabul",
      description:
        "Explore the latest trends in the housing market and learn how home sales are starting to pick up again.",
      officeImage: kabulOffice,
      phone: "+93 78 140 4483",
      email: "kabuloffice@gmail.com",
    },
    {
      id: 1,
      officeName: "Herat Office",
      location: "Herat",
      description:
        "Discover practical tips to make apartment living more comfortable and stylish.",
      officeImage: heratOffice,
      phone: "+93 78 140 4499",
      email: "heratoffice@gmail.com",
    },
    {
      id: 2,
      officeName: "Mazar Office",
      location: "Mazar-i-Sharif",
      description:
        "Get inspiration for designing your perfect home with modern and functional layouts.",
      officeImage: mazar,
      phone: "+93 78 140 4477",
      email: "mazaroffice@gmail.com",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Offices</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with our offices across Afghanistan.
        </p>
      </div>

      {/* Office */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {officeData.map((office) => (
          <div
            key={office.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={office.officeImage}
              alt={office.officeName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{office.officeName}</h2>
              <p className="text-gray-600 text-sm">{office.description}</p>
              <div className="flex items-center gap-2 text-gray-600">
                <HiLocationMarker className="text-blue-500" />
                <span>{office.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <HiPhone className="text-blue-500" />
                <span>{office.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <HiMail className="text-blue-500" />
                <span>{office.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Office;
