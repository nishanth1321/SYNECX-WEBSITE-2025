import React from "react";

export default function FeaturesHeader() {
  return (
    <div>
      <div className="h-full flex flex-col items-center justify-center bg-white px-6 lg:px-28 pt-20 sm:pt-0 text-center  ">
        {/* Centered Title */}
        <p className="text-5xl font-bold mb-4 mt-0 sm:mt-32">
          Explore Features Designed <br /> to Empower{" "}
          <span className="text-red-500">Retail Checkout</span>
        </p>

        {/* Centered Description */}
        {/* <span className="lg:text-lg font-semibold max-w-2xl pt-10">
          Our self-checkout features are crafted to address real retail
          challenges, ensuring precision, speed, and customer satisfaction at
          every step in operating and transforms the checkout experience.
        </span> */}
      </div>
    </div>
  );
}
