"use client";

import React from "react";
import { motion } from "framer-motion";

const InnovationSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-300 text-gray-900 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start relative mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl"></div>
          <motion.img
            src="/inovation-img.jpeg"
            alt="Innovation"
            className="w-full h-64 md:h-auto object-cover rounded-lg relative z-1"
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 md:ml-16"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-900 text-center md:text-left">
            Greater Futures Through Innovation
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-center md:text-left">
            Watching the world of next-tech unfold? It’s time to be part of it.
            Explore challenging and exciting opportunities across the globe.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="inline-block bg-transparent border-2 border-gray-900 text-gray-900 text-base md:text-lg font-medium py-2 px-6 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Search Open Roles
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;
