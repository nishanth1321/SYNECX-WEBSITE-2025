"use client";

import Image from "next/image";
import { FaArrowRight, FaChartBar, FaHeadphonesAlt, FaRegMap, FaStethoscope } from "react-icons/fa";

export default function Logistics() {
  return (
    <div className="bg-white py-16 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-24">
      <div className=" w-full lg:w-1/2 flex justify-center lg:justify-center mb-12 lg:mb-0">
        <div className="relative w-[200px] h-[400px] sm:w-[250px] sm:h-[450px] lg:w-[300px] lg:h-[550px] lg:translate-y-[-20px] lg:translate-x-[-20px]">
          <Image
            src="/aiLogo.png"
            alt="Mobile App Preview"
            layout="fill"
            objectFit="contain"
            className="absolute z-10 rounded-xl right-56"
          />
          <div className="absolute -left-10 -bottom-6 w-[400px] h-[300px] bg-indigo-200 rounded-3xl"></div>

          <div className="absolute -top-10 right-10 w-[50px] h-[50px] rounded-full bg-indigo-200"></div>
          <div className="absolute -bottom-0 -right-10 w-[80px] h-[80px] rounded-full bg-gradient-to-r from-pink-500 to-orange-300"></div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left space-y-6">
        <h2 className="text-indigo-900 text-lg font-medium mb-2">
          AI OCR Solutions by SynecX AI Labs
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          AI-OCR
        </h1>
        <p className="text-gray-600 text-base lg:text-lg">
          Smart-Logix redefines logistics with AI-driven automation, optimizing
          supply chains, enhancing route planning, and ensuring real-time
          shipment tracking for unparalleled efficiency.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold mr-4">
              <FaChartBar />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Smart Logix
              </h3>
              <p className="text-gray-600">
                Say goodbye to manual data entry! Our OCR solution automatically
                scans barcodes and QR codes, extracts key details like to/from
                addresses seamlessly. Speed up
                logistics, reduce errors, and improve efficiency.{" "}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold mr-4">
              <FaStethoscope />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Health Care
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate Smart-Logix with existing systems,
                leveraging AI to enhance data flow, predictive analytics, and
                operational efficiency.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 sm:mt-0 ml-0 sm:ml-12 space-y-4 sm:space-y-0 sm:space-x-4">
                     <span className="text-gray-600 font-semibold mt-0 sm:mt-2">
                     Enhance Your Workflow 
                     </span>
                     <button className="bg-indigo-500 text-white py-2 px-4 w-32 rounded-md hover:bg-indigo-600 transition flex items-center justify-center space-x-2">
                       <span>Discover </span>
                       <FaArrowRight />
                     </button>
                   </div>
        </div>
      </div>
    </div>
  );
}
