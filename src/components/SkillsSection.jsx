import React from "react";
import img1 from "../Material/data-science.webp";
import img2 from "../Material/certifications.webp";
import img3 from "../Material/generative-ai.webp";
import { Users, ArrowRight } from "lucide-react";
<Users size={16} strokeWidth={0.5} />;
<ArrowRight size={44} strokeWidth={0.5} />;
const SkillsSection = () => {
  return (
    <div className="mt-14 px-10 sm:px-12 lg:px-14 flex flex-col sm:flex-row gap-4">
      <div className="basis-80 p-4 flex flex-col justify-center">
        <div className="max-w-full mx-auto space-y-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            Learn essential career and life skills
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Udemy helps you build in-demand skills fast and advance your career
            in a changing job market.
          </p>
        </div>
      </div>
      <div className="relative basis-80 h-96">
        <img
          src={img1}
          alt="loading..."
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute bottom-4 left-4 right-4 bg-white  
                  rounded-lg  p-4 h-28 flex flex-col justify-center items-start z-10"
        >
          <div
            className="absolute top-3 left-3 bg-white border-2 border-gray-300 rounded-lg
             w-18 h-6 flex items-center justify-center gap-1 z-20 px-2"
          >
            <Users size={16} strokeWidth={1} className="text-gray-700" />
            <span className="text-xs font-normal text-gray-700">17.1m</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-2">
            IT Certifications
          </h3>
          <div className="absolute bottom-3 right-3">
            <ArrowRight size={20} strokeWidth={1} className="text-gray-900" />
          </div>
        </div>
      </div>
      <div className="relative basis-80 h-96">
        <img
          src={img2}
          alt="loading..."
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute bottom-4 left-4 right-4 bg-white  
                  rounded-lg  p-4 h-28 flex flex-col justify-center items-start z-10"
        >
          <div
            className="absolute top-3 left-3 bg-white border-2 border-gray-300 rounded-lg
             w-18 h-6 flex items-center justify-center gap-1 z-20 px-2"
          >
            <Users size={16} strokeWidth={1} className="text-gray-700" />
            <span className="text-xs font-normal text-gray-700">17.1m</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-2">
            Data Science
          </h3>
          <div className="absolute bottom-3 right-3">
            <ArrowRight size={20} strokeWidth={1} className="text-gray-900" />
          </div>
        </div>
      </div>
      <div className="relative basis-80 h-96">
        <img
          src={img3}
          alt="loading..."
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute bottom-4 left-4 right-4 bg-white  
                  rounded-lg  p-4 h-28 flex flex-col justify-center items-start z-10"
        >
          <div
            className="absolute top-3 left-3 bg-white border-2 border-gray-300 rounded-lg
             w-18 h-6 flex items-center justify-center gap-1 z-20 px-2"
          >
            <Users size={16} strokeWidth={1} className="text-gray-700" />
            <span className="text-xs font-normal text-gray-700">17.1m</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mt-2">
            Generative AI
          </h3>
          <div className="absolute bottom-3 right-3">
            <ArrowRight size={20} strokeWidth={1} className="text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
