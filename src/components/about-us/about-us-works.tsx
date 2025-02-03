"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaUsers, FaProjectDiagram, FaUserTie } from "react-icons/fa";

const AboutUsWorks = () => {
  const stats = [
    { label: "Happy Clients", icon: <FaUsers />, end: 14 },
    { label: "Projects Completed", icon: <FaProjectDiagram />, end: 100 },
    { label: "Team Members", icon: <FaUserTie />, end: 10 },
  ];

  return (
    <div className="w-full h-full bg-white py-16 px-6 lg:px-24 text-center mt-0 sm:mt-12">
      {/* 🔹 Section Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        What Makes <span className="text-red-500">Us Stand Out?</span>
      </h2>

      {/* 🔹 Stats Counter */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-3"
          >
            <div className="text-4xl text-red-500">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-900">
              <CountUp start={0} end={stat.end} duration={3} />
            </h3>
            <p className="text-gray-600 font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 🔹 Client Testimonials Section */}
    
      
    </div>
  );
};

export default AboutUsWorks;
