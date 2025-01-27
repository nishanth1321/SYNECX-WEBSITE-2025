"use client";

import React from 'react';
import { FaApple, FaLayerGroup, FaBuilding, FaShieldAlt, FaDraftingCompass, FaCheckCircle, FaShoppingCart, FaTicketAlt, FaTshirt, FaPizzaSlice, FaGasPump, FaHospital, FaStore } from "react-icons/fa"; // Updated icons

export default function RetailPageServices() {

    const features = [
      {
        icon: <FaPizzaSlice className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
        title: "Quick Service Restaurants",
        description: "Enable faster order processing and payment handling with AI-driven self-checkout solutions.",
      },
      {
        icon: <FaShoppingCart className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
        title: "Retail Stores",
        description: "Enhance customer experiences with AI-powered self-checkout systems in retail environments.",
      },
      {
        icon: <FaTicketAlt className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
        title: "Entertainment Venues",
        description: "Simplify ticket purchases and concessions with seamless self-checkout systems powered by AI.",
      },
      {
        icon: <FaTshirt className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
        title: "Sports Stadiums",
        description: "Reduce wait times and improve fan experiences with efficient self-checkout kiosks.",
      },
      
      {
        icon: <FaStore className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
        title: "Convenience Stores",
        description: "Streamline convenience store purchases with integrated AI-powered self-checkouts.",
      },
      {
        icon: <FaHospital className="text-indigo-500 text-3xl mb-4 transition-colors" />, 
        title: "Healthcare",
        description: "Optimize patient and visitor experiences with intuitive self-checkout systems for payments and services.",
      },
    ];
    

  return (
    <div>
      <div className="w-full bg-white py-6 flex flex-col items-center text-center" id='services'>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900 mb-2">
          Elevate our Digital Presence with Expert Services
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mb-4">
          Elevate our brand with Synecx AI Labs innovative services, crafting standout digital experiences that captivate and convert in a competitive market.
        </p>
      </div>
      <div className="py-10 flex justify-center items-center">
        <div className="bg-indigo-100/50 rounded-3xl shadow-lg p-8 sm:p-12 max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First three features */}
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-6 transition-colors hover:text-indigo-500"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-2xl pt-2 w-16 h-16 flex items-center justify-center transition-colors hover:text-white">
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
                  <div className="bg-white rounded-2xl pt-2 w-16 h-16 flex items-center justify-center transition-colors hover:text-white">
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
