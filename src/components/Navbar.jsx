import React, { useState } from "react";
import { ReactComponent as Logo } from "../Material/Logo.svg";
import { ShoppingCart, Search, Globe } from "lucide-react";

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-[72px] gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Logo width={80} height={80} />
          </div>

          {/* Categories Dropdown */}
          <div className="hidden lg:block relative">
            <button className="flex items-center text-sm text-gray-900 hover:text-[#5624d0] transition-colors py-2">
              <span className="font-normal">Explore</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[750px] hidden md:block">
            <div
              className={`relative rounded-full ${
                isSearchFocused
                  ? "ring-2 ring-gray-900"
                  : "border border-gray-900"
              } bg-white transition-all`}
            >
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Search />
              </div>
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full bg-transparent border-0 rounded-full py-3 px-5 pl-14 text-sm text-gray-900 placeholder-gray-600 focus:outline-none"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Right side Navigation */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-4">
              <a
                href="#"
                className="text-sm text-gray-900 hover:text-[#5624d0] transition-colors whitespace-nowrap"
              >
                Plans & Pricing
              </a>
              <a
                href="#"
                className="text-sm text-gray-900 hover:text-[#5624d0] transition-colors whitespace-nowrap"
              >
                Udemy Business
              </a>
              <a
                href="#"
                className="text-sm text-gray-900 hover:text-[#5624d0] transition-colors whitespace-nowrap"
              >
                Teach on Udemy
              </a>
            </div>

            {/* Shopping Cart */}
            <button className="p-2 text-gray-900 hover:text-[#5624d0] transition-colors">
              <ShoppingCart />
            </button>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button className="px-4 py-2.5 text-sm font-bold text-[#5624D0] border border-[#5624D0] rounded hover:bg-purple-50 transition-colors whitespace-nowrap">
                Log in
              </button>

              <button className="px-4 py-2.5 text-sm font-bold text-white bg-[#5624D0] rounded hover:bg-[#4019A8] transition-colors whitespace-nowrap">
                Sign up
              </button>
            </div>

            {/* Language Button */}
            <button className="hidden lg:block p-2.5 border border-gray-900 rounded hover:bg-gray-100 transition-colors">
              <Globe />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative rounded-full border border-gray-900 bg-white">
                  <div className="absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for anything"
                    className="w-full bg-transparent border-0 rounded-full py-3 px-5 pl-14 text-sm text-gray-900 placeholder-gray-600 focus:outline-none"
                  />
                </div>
              </div>

              <a
                href="#"
                className="text-gray-900 hover:text-[#5624d0] text-sm px-2 py-2 hover:bg-gray-50 rounded transition-colors"
              >
                Plans & Pricing
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-[#5624d0] text-sm px-2 py-2 hover:bg-gray-50 rounded transition-colors"
              >
                Udemy Business
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-[#5624d0] text-sm px-2 py-2 hover:bg-gray-50 rounded transition-colors"
              >
                Teach on Udemy
              </a>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <button className="px-4 py-2.5 text-sm font-bold text-gray-900 border border-gray-900 rounded hover:bg-gray-100 transition-colors">
                  Log in
                </button>
                <button className="px-4 py-2.5 text-sm font-bold text-white bg-gray-900 rounded hover:bg-gray-800 transition-colors">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
