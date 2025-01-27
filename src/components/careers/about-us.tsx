"use client";

import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-start text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('/about-us1.png')`,
      }}
    >
      {/* Blue overlay on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isVisible ? "bg-white bg-opacity-70" : "bg-white bg-opacity-0"
        }`}
      ></div>

      <div
        className={`relative z-10 max-w-3xl text-left ml-10 transform transition-all duration-1000 ease-in-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-500 to-red-600">
          Building Diversity. Creating Change.
        </h1>

        <p className="text-lg mb-6 text-red-600 font-bold">
          Discover how we’re empowering the brightest minds from all walks of
          life.
        </p>

        <a
          href="#learn-more"
          className="inline-flex items-center md:z-0 px-6 py-3 bg-gradient-to-r from-red-300 via-red-500 to-red-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full transform transition-transform hover:-translate-y-1 duration-700 ease-in-out"
        >
          Learn more
          <svg
            className="ml-3 w-5 h-5 transition-transform duration-700 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7-7 7 7-7 7"
            ></path>
          </svg>
        </a>
      </div>

      <div className="absolute bottom-10 left-10 z-0">
        <p className="uppercase tracking-widest text-3xl font-bold hover:text-red-600 transition duration-300">
          About Us
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
