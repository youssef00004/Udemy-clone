import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GoDotFill } from "react-icons/go";

const Navigator = ({ totalDots = 4, activeIndex = 0 }) => {
  return (
    <div className="flex items-center justify-center gap-8 mt-6">
      {/* Left arrow */}
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
        <ArrowLeft size={20} strokeWidth={1.25} className="text-gray-900" />
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-3">
        {/* First dot as wide active */}
        <div
          className={`rounded-lg w-10 h-2.5 ${
            activeIndex === 0 ? "bg-purple-600" : "bg-gray-400"
          }`}
        ></div>

        {/* Other dots */}
        {Array.from({ length: totalDots - 1 }).map((_, idx) => (
          <GoDotFill
            key={idx}
            className={`${
              activeIndex === idx + 1 ? "text-purple-600" : "text-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Right arrow */}
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
        <ArrowRight size={20} strokeWidth={1.25} className="text-gray-900" />
      </div>
    </div>
  );
};

export default Navigator;
