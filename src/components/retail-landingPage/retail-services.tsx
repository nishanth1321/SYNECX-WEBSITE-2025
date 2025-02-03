"use client";

import React from 'react';
import { FaApple, FaLayerGroup, FaBuilding, FaShieldAlt, FaDraftingCompass, FaCheckCircle, FaShoppingCart, FaTicketAlt, FaTshirt, FaPizzaSlice, FaGasPump, FaHospital, FaStore } from "react-icons/fa"; // Updated icons

export default function RetailPageServices() {

    const features = [
      {
        icon: <FaPizzaSlice className="text-red-500 text-3xl mb-4 transition-colors" />, 
        title: "Quick Service Restaurants",
        description: "Say goodbye to long lines & hello to effortless dining! Self-checkout lets customers savour meals faster than ever.",
      },
      {
        icon: <FaShoppingCart className="text-red-500 text-3xl mb-4 transition-colors" />, 
        title: "Retail Stores",
        description: "Self-checkout are the heartbeat of modern supermarkets. Skip the lines and bag them your way—shopping made simple.",
      },
      {
        icon: <FaTicketAlt className="text-red-500 text-3xl mb-4 transition-colors" />, 
        title: "Entertainment Venues",
        description: "Enhance the cinema food court experience! Self-checkout kiosks enable quick snack orders and payments, reducing wait times.",
      },
      {
        icon: <FaTshirt className="text-red-500 text-3xl mb-4 transition-colors" />, 
        title: "Sports Stadiums",
        description: "Streamline stadium dining! Self-checkout let fans order food and drinks quickly, reducing lines and keeping them in the action.",
      },
      
      {
        icon: <FaStore className="text-red-500 text-3xl mb-4 transition-colors" />, 
        title: "Convenience Stores",
        description: "Perfect for on-the-go shoppers, self-checkout ensure what you need, with zero hassle and maximum efficiency",
      },
      {
        icon: <FaHospital className="text-red-500 text-3xl mb-4 transition-colors" />, 
        title: "Hospitality and Healthcare",
        description: "Fueling healthcare professionals on the go! Self-checkout in healthcare cafeterias let medical staff and visitors order quickly.",
      },
    ];
    

  return (
    <div>
      <div className="w-full bg-white py-6 flex flex-col items-center text-center" id='services'>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900 mb-2">
          Elevate our Digital Presence with Expertise in Industries
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl ">
          Elevate our brand with Synecx AI Labs innovative services, crafting standout digital experiences that captivate and convert in a competitive market.
        </p>
      </div>
      <div className="py-10 flex justify-center items-center">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 sm:p-12 max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First three features */}
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-6 transition-colors hover:text-red-500"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-2xl pt-2 w-16 h-16 flex items-center justify-center transition-colors hover:text-white">
                    {React.cloneElement(feature.icon, {
                      className: "text-red-500",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {/* Last three features */}
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-6 transition-colors hover:text-red-500"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-2xl pt-2 w-16 h-16 flex items-center justify-center transition-colors hover:text-white">
                    {React.cloneElement(feature.icon, {
                      className: "text-red-500",
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
