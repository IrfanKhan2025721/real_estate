import React from "react";
import cities from "./CityData";

function Cities() {
  return (
    <div className="my-20 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-bold text-2xl md:text-3xl">
          What city will you live in?
        </h1>
        <p className="text-gray-600 mt-2 max-w-md">
          Which city feels like home to you? <br />
          Explore our listings and find the perfect place to live.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-auto lg:h-[500px]">
        {/* Kabul */}
        <div className="relative rounded-xl overflow-hidden lg:col-span-2">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110 hover:z-20 relative"
            style={{ backgroundImage: `url(${cities[0].image})` }}
          ></div>
          <Overlay city={cities[0]} />
        </div>

        {/* Balkh */}
        <div className="relative rounded-xl overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110 hover:z-20 relative"
            style={{ backgroundImage: `url(${cities[2].image})` }}
          ></div>
          <Overlay city={cities[2]} />
        </div>

        {/* Jalalabad */}
        <div className="relative rounded-xl overflow-hidden lg:row-span-2">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110 hover:z-20 relative"
            style={{ backgroundImage: `url(${cities[4].image})` }}
          ></div>
          <Overlay city={cities[4]} />
        </div>

        {/* Kandahar */}
        <div className="relative rounded-xl overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110 hover:z-20 relative"
            style={{ backgroundImage: `url(${cities[3].image})` }}
          ></div>
          <Overlay city={cities[3]} />
        </div>

        {/* Herat */}
        <div className="relative rounded-xl overflow-hidden lg:col-span-2">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110 hover:z-20 relative"
            style={{ backgroundImage: `url(${cities[1].image})` }}
          ></div>
          <Overlay city={cities[1]} />
        </div>
      </div>
    </div>
  );
}

function Overlay({ city }) {
  return (
    <div className="absolute inset-0 z-10 bg-black/20 flex flex-col justify-end p-4 transition-all duration-300 hover:bg-black/40">
      <p className="text-white text-lg font-semibold">{city.provience}</p>
      <h2 className="text-gray-200 text-sm">{city.properties} properties</h2>
    </div>
  );
}

export default Cities;
