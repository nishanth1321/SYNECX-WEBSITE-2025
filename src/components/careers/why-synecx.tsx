"use client"; // Ensures this component runs on the client side

import React, { useState } from "react";
import { FaArrowRight, FaLightbulb, FaRocket } from "react-icons/fa";
import SnowParticles from "../ParticlsJs/snowparticles";

const Whysycenx = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <SnowParticles id="particles-js" />
      </div>
      <section className="text-gray-800 py-12 relative overflow-hidden bg-white">
      
    <div className="container mx-auto py-12 mt-20">
      {/* Background Accent */}

      <h1 className="text-3xl md:text-6xl font-bold mb-12 relative text-center z-0 -mt-12">
        <span className="text-[55px]">Why</span>{" "}
        <span className="bg-clip-text text-5xl text-red-500">
          SYNECX AI LABS
        </span>
      </h1>

      {/* Tab Content */}
      <div className="relative z-0 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-6 md:mb-0 ml-0 sm:ml-28 mt-0 sm:mt-1">
          <img
            src={"/careerheader.svg"}
            className="w-full h-[200px] md:h-[400px] object-cover  rounded-md "
          />
        </div>
        <div className="md:w-1/2 md:ml-8 sm:mx-0 mx-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Opportunities at Synecx AI
          </h2>

          {/* Learn Section */}
          <div className="text-base md:text-lg text-blue-500 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
                <FaLightbulb />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Learn</h3>
                <p className="text-gray-600">
                  Gain hands-on experience with cutting-edge technologies and
                  methodologies that shape the future of industries.
                </p>
              </div>
            </div>
          </div>

          {/* Thrive Section */}
          <div className="text-base md:text-lg text-blue-500 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
                <FaArrowRight />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Thrive</h3>
                <p className="text-gray-600">
                  Collaborate with an innovative team and contribute to meaningful
                  projects in a supportive environment designed for your growth.
                </p>
              </div>
            </div>
          </div>

            {/* Lead Section */}
            <div className="text-base md:text-lg text-blue-500">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
                  <FaRocket />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Lead</h3>
                  <p className="text-gray-600">
                    Take initiative and drive innovation as you lead projects and make
                    impactful contributions to industry advancements.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
    </div>
  );
};

export default Whysycenx;
