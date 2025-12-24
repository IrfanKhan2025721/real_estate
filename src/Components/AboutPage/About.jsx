import React from "react";
import AboutHero from "./AboutHero";
import Expert from "./Expert";
import Clients from "./Clients";
import FeatureProperty from "./FeatureProperty";
import image from "../../assets/images/istockpho.webp";
import Agents from "./Agent/Agents";
import ActionPlan from "../AboutPage/ActionPlan";
import Blog from "./Blog";

function About() {
  return (
    <div className="my-10">
      <AboutHero />
      <Expert />
      <Clients />
      <FeatureProperty
        image={image}
        title="Discover Your Featured Property"
        description="Find exceptional properties designed for comfort, style, and modern living."
      />
      <Agents />
      <ActionPlan />
      <Blog />
    </div>
  );
}

export default About;
