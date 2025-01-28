"use client";

import React from "react";

const Openings = () => {
  return (
    <div className="bg-transparent my-12 flex justify-center items-center">
      <div className="w-[1000px] bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6 bg-clip-text">
          Greater Futures Through Innovation
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-8">
          Watching the world of next-tech unfold? It’s time to be part of it.
          Explore challenging and exciting opportunities across the globe.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-block bg-transparent border-2 border-gray-900 text-gray-900 text-base md:text-lg font-medium py-2 px-6 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Search Open Roles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Openings;
