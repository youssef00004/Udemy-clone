import React from "react";
// Import your actual photo
import firstPhoto from "../Material/firstPhoto.jpg";

const Hero = () => {
  return (
    <section className="bg-white lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full">
          {/* Main Image */}
          <img
            src={firstPhoto}
            alt="Students learning online through interactive courses"
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />

          {/* Floating Card */}
          <div
            className="absolute left-4 sm:left-20 top-1/2 -translate-y-1/2 
                          bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl 
                          p-6 max-w-xs w-[85%] sm:w-auto z-10 border border-gray-100"
          >
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Start Learning Today
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Join millions of learners already growing with our platform
              </p>
              <button
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold 
                                 hover:bg-purple-700 transition-colors w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
