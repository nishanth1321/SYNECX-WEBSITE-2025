"use client"; 

import React from 'react'; 
import { FaDownload, FaUserCircle, FaHeart } from "react-icons/fa";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FaDownload className="text-indigo-500 text-4xl" />, 
      title: "Discover Your Solution",
      description:
        "Find the perfect SynecX AI Labs solution with advanced AI to transform your business operations seamlessly.",
    },
    {
      icon: <FaUserCircle className="text-indigo-500 text-4xl" />, 
      title: "Customize Precisely",
      description:
        "Work with our experts to tailor each solution, ensuring it aligns perfectly with your business needs.",
    },
    {
      icon: <FaHeart className="text-indigo-500 text-4xl" />, 
      title: "Launch and Grow",
      description:
        "Implement with ease and watch your business thrive with SynecX AI Labs innovative, growth-focused solutions.",
    },
  ];

  return (
    <div className="bg-white py-16 flex flex-col items-center justify-center px-4 lg:px-60">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
        How We Work?
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mb-12">
      At SynecX AI Labs, we collaborate closely to understand your needs, craft tailored solutions, and implement them with precision and ongoing support.
      </p>
      {/* Wrapper for all steps in a single background card */}
      <div className="bg-indigo-100 shadow-lg rounded-lg p-8 w-full sm:w-[1200px] lg:h-96">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 py-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center max-w-xs transition-transform transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-slate-100 rounded-2xl w-20 h-20 flex items-center justify-center transition-colors duration-300 ">
                  {React.cloneElement(step.icon, {
                    className: "text-indigo-500 ",
                  })}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 hover:text-blue-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
