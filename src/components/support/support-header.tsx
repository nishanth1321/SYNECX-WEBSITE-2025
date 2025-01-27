import React from "react";

export default function SupportHeader() {
  return (
    <div>
      <div className="h-96 flex flex-col items-center justify-center bg-white px-6 lg:px-28 pt-20 sm:pt-10 text-center">
        {/* Centered Title */}
        <p className="text-5xl font-bold mb-4">
          Explore Features Designed <br /> to Empower{" "}
          <span className="text-blue-600">Retail Checkout</span>
        
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-md">
            <a href="#" className="text-black underline  hover:text-blue-600">
            Quotation
            </a>
            <a href="#" className="text-black underline hover:text-blue-600">
            Schedule a Demo
            </a>
            <a href="#" className="text-black underline hover:text-blue-600">
            Quotation
            </a>
          </div>
      </div>
    </div>
  );
}
