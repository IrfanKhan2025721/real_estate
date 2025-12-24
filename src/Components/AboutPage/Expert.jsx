import React from "react";
import image from "../../assets/images/apartement3.webp";

function Expert() {
  return (
    <section className="mt-20 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={image}
            alt="Apartment"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-black text-center md:text-left max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Expert Advice for All Your Real Estate Needs
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Our team of experienced real estate professionals provides
            personalized guidance for buying, selling, or renting properties.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Expert;
