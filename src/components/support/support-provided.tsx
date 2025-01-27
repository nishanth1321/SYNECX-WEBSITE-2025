"use client";

import React from "react";
import { FaQuestionCircle, FaPlayCircle, FaFileAlt } from "react-icons/fa";

export default function SupportSection() {
  const steps = [
    {
      icon: <FaQuestionCircle className="text-blue-600 text-4xl" />,
      title: "Query Support",
      description:
        "Get answers to your questions quickly with our expert query support team available to assist you.",
    },
    {
      icon: <FaPlayCircle className="text-blue-600 text-4xl" />,
      title: "Schedule a Demo",
      description:
        "Experience our solutions in action by scheduling a personalized demo tailored to your business needs.",
    },
    {
      icon: <FaFileAlt className="text-blue-600 text-4xl" />,
      title: "Request a Quotation",
      description:
        "Receive a detailed quotation for your desired solutions, crafted to match your business requirements.",
    },
  ];

  return (
    <div className="bg-white py-16 flex flex-col items-center justify-center px-4 lg:px-60">
      <h1 className="flex justify-center items-center text-4xl text-black font-bold mb-4">
        Supports Provided
      </h1>
      {/* Wrapper for all steps in a single background card */}
      <div className="p-8 w-full sm:w-[1200px] lg:h-96">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 py-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center max-w-xs transition-transform transform hover:-translate-y-1 hover:scale-105 group"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-slate-100 rounded-2xl w-20 h-20 flex items-center justify-center transition-colors duration-300 ">
                  {React.cloneElement(step.icon, {
                    className: "text-blue-500 ",
                  })}
                </div>
              </div>
              {/* Heading changes color on card hover */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
