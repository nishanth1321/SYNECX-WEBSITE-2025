"use client";

import Image from "next/image";

export default function FeatureOne() {
  return (
    <div className="bg-white py-10 px-4 lg:px-24" style={{ height: "80%" }}>
      <div className="flex flex-wrap justify-center gap-4">
        
        {/* Left Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
           <div className="w-full h-48 relative mb-4 flex justify-center items-center">
                      <Image 
                        src="/inst.svg" 
                        alt="Dynamic Cart Updates" 
                        layout="fill" 
                        objectFit="contain"
                      />
                    </div>
          {/* Content */}
          <h6 className="text-red-500 text-2xl font-medium mb-2">
          Instant Item Recognition
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          AI-Powered Checkout Efficiency
          </h5>
          <p className="text-gray-600 text-center">
          Our advanced AI system recognizes items instantly, eliminating the need for manual scanning.
            Customers enjoy a frictionless checkout experience, while businesses reduce losses and boost efficiency
            with accurate, automated recognition.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
           <div className="w-full h-48 relative mb-4 flex justify-center items-center">
                      <Image 
                        src="/multi.svg" 
                        alt="Instant Item Recognition" 
                        layout="fill" 
                        objectFit="contain"
                      />
                    </div>
          {/* Content */}
          <h6 className="text-red-500 text-2xl font-medium mb-2">
          Dynamic Cart Updates
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Seamless AI-Powered Transactions
          </h5>
          <p className="text-gray-600 text-center">
          Our AI-driven self-checkout system ensures that customers carts update in real-time,
            providing accurate pricing, discounts, and item availability. Say goodbye to checkout
            delays and experience smooth, automated shopping.
          </p>
        </div>
      </div>
    </div>
  );
}
