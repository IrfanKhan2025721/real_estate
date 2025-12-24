import React, { useState } from "react";
import heroImage from "../../../assets/images/Hero.jpg";
import { CiSearch } from "react-icons/ci";

function Hero({ onSearch }) {
  const [filters, setFilters] = useState({
    category: "",
    propertyType: "",
    city: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <section
      className="relative w-[95%] h-[550px] mx-auto mt-8 rounded-lg flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Find a Home That Suits Your Lifestyle
        </h1>
        <p className="text-lg">
          Explore properties that match your needs and dreams.
        </p>
      </div>

      {/* Search Bar */}
      <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-2 bg-white shadow-lg p-4 rounded-lg w-[90%] max-w-[1000px]">
        <select
          name="category"
          onChange={handleChange}
          className="flex-1 p-2 rounded-md bg-gray-100"
        >
          <option value="">Category</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>

        <select
          name="propertyType"
          onChange={handleChange}
          className="flex-1 p-2 rounded-md bg-gray-100"
        >
          <option value="">Property Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Office">Office</option>
          <option value="Shop">Shop</option>
          <option value="Warehouse">Warehouse</option>
        </select>

        <select
          name="city"
          onChange={handleChange}
          className="flex-1 p-2 rounded-md bg-gray-100"
        >
          <option value="">City</option>
          <option value="Kabul">Kabul</option>
          <option value="Herat">Herat</option>
          <option value="Mazar">Mazar</option>
          <option value="Jalalabad">Jalalabad</option>
          <option value="Kandahar">Kandahar</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold flex items-center justify-center"
        >
          <CiSearch className="mr-2" />
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;
