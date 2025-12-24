import React from "react";
import agentsData from "./AgentsData";

function Agents() {
  return (
    <section className="mt-20 px-4 md:px-8">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Our professional agents
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet our dedicated agents who are committed to helping <br /> you find your
          dream property with ease.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {agentsData.map((agent, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
          >
            {/* Agent Image */}
            <img
              src={agent.image}
              alt={agent.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />

            {/* Agent Info */}
            <h1 className="text-xl font-semibold">{agent.name}</h1>
            <p className="text-sm text-gray-500">{agent.office}</p>
            <p className="mt-2 text-sm">{agent.mobile}</p>
            <p className="text-sm break-all">{agent.email}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4 text-lg">
              {agent.socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    className="text-gray-600 hover:text-black transition"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Agents;
