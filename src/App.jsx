import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import TrustedCompanies from "./components/TrustedCompanies";
import SkillsSection from "./components/SkillsSection";
import Navigator from "./components/Navigator";
import CareerSection from "./components/CareerSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <SkillsSection />
        <Navigator />
        <CareerSection />
        <Courses />
      </div>
      <TrustedCompanies />
    </>
  );
}

export default App;
