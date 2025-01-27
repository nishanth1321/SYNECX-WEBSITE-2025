"use client";

export default function FeatureThree() {
  return (
    <div className="bg-white py-10 px-4 lg:px-24" style={{ height: "80%" }}>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Left Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-blue-600 text-2xl font-medium mb-2">
            Real-Time Insights
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
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
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-blue-600 text-2xl font-medium mb-2">
            On-Screen Promotions
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            That Captivate
          </h5>
          <p className="text-gray-600 text-center">
            Boost engagement with in-the-moment offers. Display rotating
            promotions and trending deals during checkout, keeping customers
            excited and informed as they complete their purchase. Turn every
            interaction into an opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}
