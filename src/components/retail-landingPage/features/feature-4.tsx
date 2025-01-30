"use client";

export default function FeatureFour() {
  return (
    <div className="bg-white py-10 px-4 lg:px-24" style={{ height: "80%" }}>
      <div className="flex flex-wrap justify-center gap-4">
        {/* First Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-blue-600 text-2xl font-medium mb-2">
            Interactive Ad Space
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            For Enhanced Engagement
          </h5>
          <p className="text-gray-600 text-center">
            Turn every second into a sales opportunity! Capture customer
            attention during checkout with rotating, dynamic ads that showcase
            the latest deals, trending products, or special promotions right on
            the payment screen.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-blue-600 text-2xl font-medium mb-2">
            Hassle Free Checkout
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Stay in Control
          </h5>
          <p className="text-gray-600 text-center">
          Our hassle-free self-checkout combines speed, accuracy, and an interactive,
          user-friendly UI, making it effortless. Customers can scan, pay, 
          and go seamlessly, while businesses enjoy efficience 
          with an intuitive experience.
          </p>
        </div>
      </div>
    </div>
  );
}
