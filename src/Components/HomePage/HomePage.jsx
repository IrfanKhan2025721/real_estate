import React, { useState } from "react";
import Hero from "./HeroSection/Hero";
import DiscoverProperty from "./DiscoverPropertySection/DiscoverProperty";
import CommercialProperties from "./CommercialProperty/CommercialProperties";
import data from "./DiscoverPropertySection/Data";
import Testimonial from "./testimonials/testimonial";
import ActionPlan from "./ActionPlan";

function HomePage() {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (filters) => {
    const result = data.filter((item) => {
      return (
        (!filters.category || item.category === filters.category) &&
        (!filters.propertyType || item.propertyType === filters.propertyType) &&
        (!filters.location || item.city === filters.location)
      );
    });

    setFilteredData(result);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />

      <DiscoverProperty
        data={filteredData.filter((item) => item.category === "Residential")}
      />

      <ActionPlan />
      <Testimonial />

      <CommercialProperties
        data={filteredData.filter((item) => item.category === "Commercial")}
      />
    </>
  );
}

export default HomePage;
