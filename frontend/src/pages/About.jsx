import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-red-300 to-transparent rounded-full blur-2xl opacity-50 mt-20 ml-24 "></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-red-300 to-transparent rounded-full blur-2xl opacity-50"></div>
      {/* New orange gradients */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-l from-orange-300 to-transparent rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-gradient-to-r from-orange-300 to-transparent rounded-full blur-2xl opacity-50"></div>
      <div className="container mx-auto px-6 py-16 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center logo-font">
          About MoneyMate
        </h1>
        <div className="text-xl">
          Founded in 2020, MoneyMate is dedicated to empowering individuals with
          the tools and insights needed to make informed financial decisions.
          Our platform simplifies personal finance management with features such
          as intuitive expense tracking, customizable budgeting tools, and
          comprehensive investment management capabilities. We provide real-time
          market data and advanced analytics to help users understand their
          financial habits and optimize their financial strategies. With a
          commitment to security, MoneyMate ensures that user data remains safe
          and confidential. Our goal is to support our users in achieving
          financial stability and success, offering round-the-clock customer
          support and a user-friendly interface designed to make managing
          finances effortless.
        </div>
        <br />
        <NavLink
          to="/contact"
          className="bg-black text-white py-3 px-8 rounded-full text-lg font-medium mb-4 sm:mb-0 sm:mr-4 hover:bg-gray-800"
        >
          Contact →
        </NavLink>
      </div>
    </div>
  );
}

export default About;
