import React from "react";

function FeatureProperty({ image, title, description }) {
  return (
    <section
      className="w-full mt-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="w-full h-full bg-black/50">
        <div className="max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 md:px-8 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 max-w-2xl">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureProperty;
