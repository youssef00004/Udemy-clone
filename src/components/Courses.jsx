import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Artificial Intelligence (AI)");

  const tabs = [
    "Artificial Intelligence (AI)",
    "Python",
    "Microsoft Excel",
    "AI Agents & Agentic AI",
    "Digital Marketing",
    "Amazon AWS",
  ];

  const courses = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
      instructor: "365 Careers",
      tag: "Bestseller",
      rating: 4.6,
      ratingCount: "11,725 ratings",
      price: "E£309.99",
      originalPrice: "E£349.99",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=250&fit=crop",
      title: "Intro to AI Agents and Agentic AI",
      instructor: "365 Careers",
      tag: "RolePlay",
      rating: 4.4,
      ratingCount: "1,727 ratings",
      price: "E£309.99",
      originalPrice: "E£349.99",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
      title: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
      instructor: "Hadelin de Ponteves, Kirill Eremenko,...",
      tag: "Premium",
      rating: 4.4,
      ratingCount: "4,856 ratings",
      price: "E£579.99",
      originalPrice: "E£719.99",
      isPremium: true,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      title: "AI Engineer Explorer Certificate Course",
      instructor: "School of AI",
      tag: "Premium",
      rating: 4.5,
      ratingCount: "187 ratings",
      price: "E£309.99",
      originalPrice: "E£349.99",
      isPremium: true,
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            Skills to transform your career and life
          </h2>
          <p className="text-gray-600 text-lg">
            From critical skills to technical topics, Udemy supports your
            professional development.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 ">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group cursor-pointer flex flex-col border-2 border-grey-100 rounded-lg p-4"
              >
                {/* Course Image */}
                <div className="relative mb-2 overflow-hidden rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Course Info */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {course.instructor}
                  </p>
                </div>
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    {course.isPremium ? (
                      <span className="inline-flex items-center gap-1 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                        <FaStar />
                        Premium
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-lg">
                        {course.tag}
                      </span>
                    )}
                    <div className="flex items-center gap-1 px-2 py-0.75">
                      <FaStar className="text-yellow-400 mx-0.5" />
                      <span className="text-sm font-thin text-gray-900 mx-0.5 ">
                        {course.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 font-thin">
                      {course.ratingCount}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-lg font-bold text-gray-900">
                      {course.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show All Link */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 transition-colors"
          >
            Show all Artificial Intelligence (AI) courses
            <FaArrowRightLong />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
