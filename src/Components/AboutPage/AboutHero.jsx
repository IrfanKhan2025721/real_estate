import React from "react";
import { BiHomeHeart } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import video from "../../assets/images/REAL ESTATE VIDEO.mp4";

function AboutHero() {
  const hero = [
    {
      videoText: "Discover Your Dream Home with Us",
      propertiesSold: 1250,
      apartmentSold: 320,
      houseSold: 125,
      villaSold: 120,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto shadow-xl rounded-xl overflow-hidden bg-white">
      {hero.map((heroData, index) => (
        <div key={index}>
          {/* LOCAL VIDEO */}
          <div className="relative w-full h-[80vh] overflow-hidden">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* LIGHT OVERLAY */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* TEXT TOP-LEFT */}
            <div className="absolute inset-0 flex items-start justify-start text-white px-16 pt-16">
              <h1 className="text-3xl md:text-5xl font-bold max-w-xl">
                {heroData.videoText}
              </h1>
            </div>
          </div>

          {/* STATS BELOW VIDEO */}
          <div className="py-10 px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <BiHomeHeart className="text-4xl text-purple-600" />
                <span className="text-3xl font-bold text-gray-900">
                  {heroData.propertiesSold}+
                </span>
                <p className="text-sm text-gray-600">Properties Sold</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <MdApartment className="text-4xl text-blue-600" />
                <span className="text-3xl font-bold text-gray-900">
                  {heroData.apartmentSold}+
                </span>
                <p className="text-sm text-gray-600">Apartments</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FaHouseUser className="text-4xl text-green-600" />
                <span className="text-3xl font-bold text-gray-900">
                  {heroData.houseSold}+
                </span>
                <p className="text-sm text-gray-600">Houses</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <GiHouse className="text-4xl text-orange-600" />
                <span className="text-3xl font-bold text-gray-900">
                  {heroData.villaSold}+
                </span>
                <p className="text-sm text-gray-600">Villas</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AboutHero;
