import React from "react";
import aiCareerImage from "../Material/career-img.webp";
import { TbStarsFilled } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa6";
const CareerSection = () => {
  return (
    <div className="max-w-full py-16 mx-auto">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-16">
          {/* Left Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 mt-6">
              Reimagine your career in the
              <br />
              AI era
            </h2>

            <p className="text-gray-300 text-m mb-8">
              Future-proof your skills with Personal Plan. Get access to a
              variety of
              <br /> fresh content from real-world experts.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Learn AI */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center">
                  <TbStarsFilled />
                </div>
                <span className="text-white font-normal text-sm">
                  <span className="font-bold">Learn</span> AI and more
                </span>
              </div>

              {/* Prep for certification */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">
                  <GiTrophyCup />
                </div>
                <span className="text-white font-normal text-sm">
                  <span className="font-bold">Prep</span> for a certification
                </span>
              </div>

              {/* Practice with AI */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center">
                  <GoCommentDiscussion />
                </div>
                <span className="text-white font-normal text-sm">
                  <span className="font-bold">Practice</span> with AI coaching
                </span>
              </div>

              {/* Advance career */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaRegLightbulb />
                </div>
                <span className="text-white font-normal text-sm">
                  <span className="font-bold">Advance</span> your career
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-white text-gray-900 font-semibold text-sm px-10 py-1.5 rounded ">
                Learn more
              </button>
            </div>
            <p className="text-gray-400 text-xs py-1.5 mb-9">
              Starting at E£204.00/month
            </p>
          </div>

          {/* Right Visual Content */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <img
              src={aiCareerImage}
              alt="Professional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
