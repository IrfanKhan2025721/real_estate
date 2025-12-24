import React, { useState } from "react";
import Hero from "./HeroSection/Hero";
import DiscoverProperty from "./DiscoverPropertySection/DiscoverProperty";
import CommercialProperties from "./CommercialProperty/CommercialProperties";
import data from "./DiscoverPropertySection/Data";
import Testimonial from "./Testimonials/Testimonial";
import ActionPlan from "./ActionPlan";
import Form from "./ContactForm/Form";
import Cities from "./CitySection/Cities";

function HomePage() {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (filters) => {
    const result = data.filter((item) => {
      return (
        (!filters.category || item.category === filters.category) &&
        (!filters.propertyType ||
          item.propertyType === filters.propertyType) &&
        (!filters.city || item.city === filters.city)
      );
    });

    setFilteredData(result);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />

      <DiscoverProperty
        data={filteredData.filter(
          (item) => item.category === "Residential"
        )}
      />

      <ActionPlan />
      <Testimonial />

      <CommercialProperties
        data={filteredData.filter(
          (item) => item.category === "Commercial"
        )}
      />

      <Form />
      <Cities />
    </>
  );
}

export default HomePage;
