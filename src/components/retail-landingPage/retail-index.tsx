"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRocket } from "react-icons/fa"; // Importing FaRocket icon

export default function RetailIndex() {
  return (
    <div className="min-h-screen bg-white px-6 lg:px-28 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl">
        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/aiLogo.png" // Updated to reflect retail-specific image
            alt="AI solutions for retail"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-lg font-medium text-gray-600 mb-4">
            Transforming Retail with AI-Driven Innovation
          </h2>
          <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Empowering <span className="text-indigo-300">Retailers</span> with{" "}
            {/* <span className="text-indigo-400">Intelligent</span>{" "} */}
            <span className="text-indigo-500">AI Powered</span>{" "}
            <span className="text-indigo-700">Self-Checkout</span>.
          </h1>

          <p className="text-gray-500 text-base lg:text-lg mb-6 text-justify">
            Skip the lines and reclaim your time with our AI-powered self-checkout. 
            Designed for speed and convenience, it ensures a <b>seamless shopping powered by AI</b> with
            instant item recognition, quick payments, and minimal effort. 
            Just place, pay, and go—no waiting, no hassle. Revolutionize your retail journey with fast, accurate, 
            and intuitive checkout technology built for modern shoppers.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link href="#" legacyBehavior>
              <a className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                <span className="mr-2">Faster. Smarter. Easier. </span>
                <FaRocket />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
