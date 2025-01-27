"use client";

import React from 'react';
import { FaApple, FaLayerGroup, FaBuilding, FaShieldAlt, FaDraftingCompass, FaCheckCircle } from "react-icons/fa"; // Updated icons

export default function Service() {
  const features = [
    {
      icon: <FaApple className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
      title: "SAP Solutions",
      description: "Optimize our business with Synecx AI's expert SAP services for enhanced efficiency and growth.",
    },
    {
      icon: <FaLayerGroup className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
      title: "ERP Solutions",
      description: "Streamline our operations with Synecx AI's seamless ERP solutions for superior business performance.",
    },
    {
      icon: <FaBuilding className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
      title: "Enterprise Solutions",
      description: "Tailored, scalable solutions to support our business growth and help you adapt to changing market needs.",
    },
    {
      icon: <FaShieldAlt className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
      title: "Cybersecurity Solutions",
      description: "Protect our business with comprehensive security services that ensure robust protection and peace of mind.",
    },
    {
      icon: <FaDraftingCompass className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
      title: "Design & Engineering Solutions",
      description: "Innovate with Synecx AI's expert design and engineering services for creative and technical excellence.",
    },
    {
      icon: <FaCheckCircle className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
      title: "Testing Solutions",
      description: "Ensure the reliability and quality of our software with comprehensive testing services tailored to your needs.",
    },
  ];

  return (
    <div>
      <div className="w-full bg-white py-6 flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900 mb-2">
          Elevate our Digital Presence with Expert Services
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mb-4">
          Elevate our brand with Synecx AI Labs innovative services, crafting standout digital experiences that captivate and convert in a competitive market.
        </p>
      </div>
      <div className="py-10 flex justify-center items-center">
        <div className="bg-indigo-100 rounded-3xl shadow-lg p-8 sm:p-12 max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First three features */}
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-6 transition-colors hover:text-indigo-500"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-slate-100 rounded-2xl pt-2 w-16 h-16 flex items-center justify-center transition-colors hover:text-white">
                    {React.cloneElement(feature.icon, {
                      className: "text-indigo-500",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Last three features */}
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-6 transition-colors hover:text-indigo-500"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-slate-100 rounded-2xl pt-2 w-16 h-16 flex items-center justify-center transition-colors hover:text-white">
                    {React.cloneElement(feature.icon, {
                      className: "text-indigo-500",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
