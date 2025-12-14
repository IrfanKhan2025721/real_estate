import React from "react";
import heroImage from "../../../assets/images/Hero.jpg";
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <section
      className="relative w-[95%] max-w-[1920px] h-[550px] mx-auto mt-8 mb-10 rounded-lg  overflow-visible flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Text */}
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      <div className="relative z-10 text-center px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Find a Home That Suits Your Lifestyle
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white">
          Explore our curated listings and discover a space where your dreams
          come true.
        </p>
      </div>

      {/* Search Bar */}
      <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-2 bg-white shadow-lg p-4 rounded-lg w-[90%] max-w-[1000px] items-center justify-between">
        <select className="flex-1 p-2 rounded-md bg-[#F6F6F6]">
          <option>Category</option>
          <option>Residential</option>
          <option>Commercial</option>
        </select>

        <select className="flex-1 p-2 rounded-md bg-[#F6F6F6]">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Office</option>
        </select>

        <select className="flex-1 p-2 rounded-md bg-[#F6F6F6]">
          <option>Location</option>
          <option>Kabul</option>
          <option>Herat</option>
          <option>Mazar</option>
          <option>Jalalabad</option>
          <option>Kandahar</option>
        </select>

        <button className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700 mt-2 sm:mt-0">
          <CiSearch className="mr-2" />
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;
