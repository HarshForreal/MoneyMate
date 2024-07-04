import React, { useState } from "react";
import SvgComponent from "./SvgComponent";
import login from "../../components/Auth/Login";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-gray-800 logo-font text-xl font-bold ">
          <SvgComponent />
          <span className="ml-2 text-orange-500">Money</span>
          <span>Mate</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6 mr-2 mt-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navbar Links and Buttons */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto absolute md:static top-0 inset-x-0 bg-white md:bg-transparent md:mt-0 mt-16 p-4 md:p-0 z-50`}
        >
          {/* Close button for small devices */}

          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-gray-800  justify-center items-center">
            <li>
              <a
                href="#home"
                className="block py-2 px-4 hover:text-orange-500 font-medium lg:text-lg"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-4 hover:text-orange-500 font-medium lg:text-lg"
                onClick={closeMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 px-4 hover:text-orange-500 font-medium lg:text-lg"
                onClick={closeMenu}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block py-2 px-4 hover:text-orange-500 font-medium lg:text-lg"
                onClick={closeMenu}
              >
                Features
              </a>
            </li>
          </ul>
          <div className="flex mt-4 md:mt-0 md:ml-4 flex justify-center items-center lg:p-10  ">
            <NavLink
              to="/login"
              className="block py-2 px-4 bg-black text-white hover:text-orange-500 font-medium rounded-lg lg:text-lg"
              onClick={closeMenu}
            >
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
