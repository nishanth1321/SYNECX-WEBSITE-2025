"use client";

export default function FeatureTwo() {
  return (
    <div className="bg-white py-16 px-4 lg:px-24" style={{ height: "80%" }}>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Left Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-blue-600 text-2xl font-medium mb-2">
            Paper-Free Billing
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            For a Greener Tomorrow
          </h5>
          <p className="text-gray-600 text-center">
            Make sustainability a priority with eco-friendly e-receipts.
            Instantly send digital bills to customers’ phones, ensuring a
            smooth and paperless checkout process. Reduce waste and embrace a
            smarter way to bill.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-blue-600 text-2xl font-medium mb-2">
            Smart Suggestions
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            For Better Shopping
          </h5>
          <p className="text-gray-600 text-center">
            Enhance the shopping journey with personalized recommendations. Our
            system highlights complementary products and alerts customers to
            soon-to-expire items, helping them save money and shop smarter.
          </p>
        </div>
      </div>
    </div>
  );
}
