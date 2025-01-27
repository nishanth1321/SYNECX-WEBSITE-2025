"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRocket } from "react-icons/fa";

export default function Selfcheckout() {
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

          {/* Background shapes */}
          <div className="absolute -left-10 -bottom-6 w-[400px] h-[300px] bg-indigo-200 rounded-3xl"></div>

          <div className="absolute -top-10 right-10 w-[50px] h-[50px] rounded-full bg-indigo-200"></div>
          <div className="absolute -bottom-0 -right-10 w-[80px] h-[80px] rounded-full bg-gradient-to-r from-pink-500 to-orange-300"></div>
        </div>
      </div>

      {/* Right side with the text content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left space-y-6 mt-6">
        <h2 className="text-blue-500 text-lg font-medium mb-2">
          Transform Retail with Smart Self-Checkout!
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Revolutionozing self-checkout
        </h1>
        <p className="text-gray-800 text-base lg:text-lg">
          Fast, accurate, and AI-driven item scanning for seamless payments.
        </p>

        <div className="space-y-6 ">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold mr-4">
              <FaRocket />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Smart Automation
              </h3>
              <p className="text-gray-600">
                Elevate the way customers shop with our advanced self-checkout
                solution. Using deep learning and computer vision, it scans
                items instantly, adds them to the cart, and enables quick
                payments. Enhance customer satisfaction, reduce waiting times,
                and streamline operations. It’s time for retail innovation.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 sm:mt-0 ml-0 sm:ml-12 space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-600 font-semibold mt-0 sm:mt-2">
              Step into the Future of Shopping
            </span>
            <Link className="bg-indigo-500 text-white py-2 px-4 w-32 rounded-md hover:bg-indigo-600 transition flex items-center justify-center space-x-2" href={"/retail"}>
              
              <span>Dive In</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
