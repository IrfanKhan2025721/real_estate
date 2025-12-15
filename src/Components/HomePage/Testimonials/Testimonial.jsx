import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import testimonialData from "./TestamonialData";

function Testimonial() {
  const [current, setCurrent] = useState(0);

  const slidesPerView = 2;
  const totalSlides = Math.ceil(testimonialData.length / slidesPerView);
  const autoSlideDuration = 5000;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideDuration);
    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  return (
    <div className="py-10 px-4 mt-16">
      {/* Slider */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, groupIndex) => {
            const start = groupIndex * slidesPerView;
            const visibleCards = testimonialData.slice(
              start,
              start + slidesPerView
            );

            return (
              <div
                key={groupIndex}
                className="min-w-full flex flex-col md:flex-row gap-8 justify-center"
              >
                {visibleCards.map((test, index) => (
                  <div key={index}>
                    {/* Card */}
                    <div className="flex flex-col sm:flex-row items-center rounded-2xl overflow-hidden bg-white shadow-md w-full md:w-[28rem] lg:w-[32rem]">
                      {/* Text Section */}
                      <div className="flex-1 p-4 text-center sm:text-left">
                        <div className="flex justify-between items-start p-1">
                          <FaQuoteLeft className="text-xl text-gray-400" />
                          <div className="flex gap-1 text-[#448611]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                        <h1 className="text-lg font-semibold">{test.name}</h1>
                        <p className="text-gray-600 text-sm mt-2">
                          {test.description}
                        </p>
                      </div>

                      {/* Image */}
                      <div className="w-full sm:w-[200px] flex-shrink-0">
                        <img
                          src={test.image}
                          alt={test.name}
                          className="w-full h-46 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Progress Line */}
        <div className="mt-6 relative h-[2px] bg-gray-200 w-1/2 mx-auto rounded">
          <div
            className="absolute h-[2px] bg-black transition-all duration-700"
            style={{
              width: `${100 / totalSlides}%`,
              transform: `translateX(${current * (100 / totalSlides)}%)`,
            }}
          ></div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-3 bg-white shadow-sm border rounded-full hover:bg-gray-100 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-[#100E2C] text-white shadow-sm rounded-full hover:bg-indigo-900 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
