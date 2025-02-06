"use client";

import Image from "next/image";

export default function FeatureThree() {
  return (
    <div className="bg-white py-16 px-4 lg:px-24">
      

      <div className="flex flex-wrap justify-center gap-8">
        {/* Left Card */}
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-10/12 md:w-5/12 h-auto flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-48 relative mb-4 flex justify-center items-center">
            <Image 
              src="/inv.svg" 
              alt="Real-Time Inventory Management" 
              layout="fill" 
              objectFit="contain"
            />
          </div>
          {/* Content */}
          <h6 className="text-red-500 text-2xl font-medium text-center mb-2">
            Real-Time Inventory Management
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 text-center mb-4">
            Smarter Decisions
          </h5>
          <p className="text-gray-600 text-center">
            Empower your business with actionable analytics. Monitor sales
            trends, track inventory, and understand customer preferences with
            our live dashboard. Stay ahead by making informed, data-driven
            decisions.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-10/12 md:w-5/12 h-auto flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-48 relative mb-4 flex justify-center items-center">
            <Image 
              src="/add.svg" 
              alt="Interactive Ad Space" 
              layout="fill" 
              objectFit="contain"
            />
          </div>
          {/* Content */}
          <h6 className="text-red-500 text-2xl font-medium text-center mb-2">
            Interactive Ad Space
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 text-center mb-4">
            For Enhanced Engagement
          </h5>
          <p className="text-gray-600 text-center">
            Turn every second into a sales opportunity! Capture customer
            attention during checkout with rotating, dynamic ads that showcase
            the latest deals, trending products, or special promotions right on
            the payment screen.
          </p>
        </div>
      </div>
    </div>
  );
}
