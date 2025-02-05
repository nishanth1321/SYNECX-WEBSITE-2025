"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Manufacturing() {
  return (
    <div className="bg-white py-16 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-60">
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
       <div className="relative w-[280px] h-[200px] sm:w-[320px] sm:h-[550px] lg:w-[600px] lg:h-[400px]  my-0 sm:mt-32">
               <Image
                 src="/ailogo.png"
                 alt="Mobile App Preview"
                 layout="fill"
                 objectFit="cover"
                 className="rounded-lg "
               />
             </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left space-y-6 mb-12 lg:mb-0 mt-20 pl-0 sm:pl-20">
        <h2 className="text-red-500 text-lg font-semibold mt-2">
          Seamless Quality - Zero Defects with AI
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          AI-Manufacture Suite
        </h1>
        <p className="text-gray-600 text-base lg:text-lg text-justify">
          Imagine a production line where every product meets the highest
          quality standards. Our technology makes this a reality by identifying
          and removing defective items in real-time. Say goodbye to
          post-production inspections and hello to efficient, high-quality
          manufacturing. Its time to produce with perfection.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 sm:mt-0  space-y-4 sm:space-y-0 sm:space-x-4">
          <span className="text-gray-600 font-semibold mt-0 sm:mt-2">
            Transform Your Manufacturing Today !
          </span>
          <button className="bg-red-500 text-white py-2 px-4 w-32 rounded-md hover:bg-red-600 transition flex items-center justify-center space-x-2">
            <span>Explore</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
