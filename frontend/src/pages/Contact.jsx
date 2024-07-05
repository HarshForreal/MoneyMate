import React from "react";
import {
  FaEnvelope,
  FaCalendarAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-red-300 to-transparent rounded-full blur-2xl opacity-50 mt-20 ml-24 "></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-red-300 to-transparent rounded-full blur-2xl opacity-50"></div>
      {/* New orange gradients */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-l from-orange-300 to-transparent rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-gradient-to-r from-orange-300 to-transparent rounded-full blur-2xl opacity-50"></div>
      <div className="container mx-auto px-6 py-16 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between"></div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Me<span className="text-orange-500 text-4xl">.</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-green-600 sm:mt-4">
            Open to work | Full Stack Developer
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<FaTwitter />}
            title="Twitter"
            link="https://twitter.com/Harsh_forreal"
            linkText="Connect on Twitter"
          />
          <ContactCard
            icon={<FaCalendarAlt />}
            title="Arrange meet"
            link="https://cal.com/harsh-patel/30min"
            linkText="Schedule a meeting"
          />
          <ContactCard
            icon={<FaGithub />}
            title="Contribute"
            link="https://github.com/HarshForreal"
            linkText="View GitHub profile"
          />
          <ContactCard
            icon={<FaLinkedin />}
            title="Contact me"
            link="https://www.linkedin.com/in/harsh-patel-7228381b2/"
            linkText="Connect on LinkedIn"
          />
        </div>
      </div>
    </div>
  );
}
function ContactCard({ icon, title, link, linkText }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="text-orange-500 mb-4">
          {React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      </div>
      <div className="px-6 py-4 bg-orange-50">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-600 hover:text-orange-500 text-sm font-medium"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default Contact;
