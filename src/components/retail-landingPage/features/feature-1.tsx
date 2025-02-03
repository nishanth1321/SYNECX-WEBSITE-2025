export default function FeatureOne() {
  return (
    <div className="bg-white py-16 px-4 lg:px-24 -mt-10 " style={{ height: "80%" }}>
      <h1 className="flex justify-center items-center text-4xl text-red-500 font-bold mb-4">
        Features
      </h1>
      <p className="flex justify-center items-center text-2xl text-gray-500 font-semibold">
        The Innovations that transform your retail experience with
        <span className="text-red-500 ml-2 font-semibold">AI</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-24">
        {/* Left Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-red-500 text-2xl font-medium mb-2">
            Precision Weighing
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Seamless Experience
          </h5>
          <p className="text-gray-600 text-center">
            Ensure every product is weighed with pinpoint accuracy. From bulk
            items to fresh produce, our smart weighing system integrates
            smoothly into self-checkout, maintaining speed and efficiency. Say
            goodbye to errors and hello to effortless transactions.
          </p>
        </div>
        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-red-500 text-2xl font-medium mb-2">
            Smart Recommendations
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
