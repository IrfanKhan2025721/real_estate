import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/apartement.jpg";

function ActionPlan() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col md:flex-row-reverse items-center md:justify-center my-20  px-4 py-20 md:px-8 gap-6 md:gap-36">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="apartment"
          className="w-full sm:w-80 md:w-72 rounded-lg object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="text-black text-center md:text-left max-w-md z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Putting a plan to action, to assure your satisfaction!
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-4">
          Ultrices quis at enim in tristique in id diam suspendisse. Sed
          fermentum velit id et donec dui. Sed nulla neque at phasellus in
          adipiscing dictum.
        </p>
        <button
          onClick={handleLearnMore}
          className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition z-10"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default ActionPlan;
