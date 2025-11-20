import React from "react";

// Import your logo images here
import Volkswagen from "../Material/volkswagen.svg";
import samsung from "../Material/samsung.svg";
import Cisco from "../Material/cisco.svg";
import viemo from "../Material/vimeo.svg";
import PG from "../Material/procter-gamble-1.svg";
import HP from "../Material/hewlett-packard-enterprise-logo.svg";
import citi from "../Material/citi-2.svg";
import Ericsson from "../Material/ericsson-logo.svg";

const TrustedCompanies = () => {
  // Replace these placeholder paths with your actual imported logos
  const companies = [
    {
      name: "Volkswagen",
      logo: Volkswagen, // Replace with: VolkswagenLogo
    },
    {
      name: "Samsung",
      logo: samsung, // Replace with: SamsungLogo
    },
    {
      name: "Cisco",
      logo: Cisco, // Replace with: CiscoLogo
    },
    {
      name: "Vimeo",
      logo: viemo, // Replace with: VimeoLogo
    },
    {
      name: "Procter & Gamble",
      logo: PG, // Replace with: PGLogo
    },
    {
      name: "Hewlett Packard Enterprise",
      logo: HP, // Replace with: HPELogo
    },
    {
      name: "Citi",
      logo: citi, // Replace with: CitiLogo
    },
    {
      name: "Ericsson",
      logo: Ericsson, // Replace with: EricssonLogo
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-gray-600 font-semibold text-m md:text-lg mb-2 px-2">
          Trusted by over 17,000 companies and millions of learners around the
          world
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-20 w-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
