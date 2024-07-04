import React from "react";
import "../App.css";
import frame1 from "../assets/Frame-1.svg";
import phone from "../assets/Phone.svg";

function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="mx-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-red-300 to-transparent rounded-full blur-2xl opacity-50 mt-20 ml-24 "></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-red-300 to-transparent rounded-full blur-2xl opacity-50"></div>
        {/* New orange gradients */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-l from-orange-300 to-transparent rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-gradient-to-r from-orange-300 to-transparent rounded-full blur-2xl opacity-50"></div>
        <div className="container mx-auto px-6 py-16 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center lg:text-left lg:max-w-xl flex  flex-col mt-28">
            {" "}
            {/* Increased max-width */}
            <h1 className="text-6xl text-black mb-4 leading-tight font-bold">
              Make The Best <br /> Financial Decisions {/* Added line break */}
            </h1>
            <p className="text-gray-600 mb-6 text-lg logo-font">
              Keep track of your expenses and income to make the best financial
              outcomes.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start mb-6">
              <a
                href="#"
                className="bg-black text-white py-3 px-8 rounded-full text-lg font-medium mb-4 sm:mb-0 sm:mr-4 hover:bg-gray-800"
              >
                Get Started →
              </a>
            </div>
          </div>
          <div className="hidden lg:block mr-28 lg:mt-0">
            <img src={frame1} alt="Illustration" />
          </div>
        </div>
      </div>
      {/* Page 2 */}
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100">
        <div className="flex-grow flex items-center justify-center p-8">
          <div className="max-w-2xl text-center">
            {" "}
            {/* Increased max-width and added text-center */}
            <h2 className="text-sm uppercase tracking-wide text-red-500 font-semibold mb-2 logo-font">
              Features
            </h2>
            <h1 className="text-4xl font-bold mb-6 logo-font">
              MoneyMate Features
            </h1>
            <div className="space-y-8">
              {" "}
              {/* Increased space between items */}
              <FeatureItem
                icon="🚀"
                title="Advanced Analytics"
                description="Gain deep insights into your financial habits with our advanced analytics tools."
              />
              <FeatureItem
                icon="🔒"
                title="Enhanced Security"
                description="Rest easy with our state-of-the-art security measures protecting your sensitive data."
              />
              <FeatureItem
                icon="💼"
                title="Investment Tracking"
                description="Keep tabs on your investments and make informed decisions with real-time market data."
              />
              <h2>and many more...</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-center text-left">
      {" "}
      {/* Changed to flex and left-aligned */}
      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
