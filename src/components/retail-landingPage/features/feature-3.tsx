"use client";

export default function FeatureThree() {
  return (
    <div className="bg-white py-10 px-4 lg:px-24" style={{ height: "80%" }}>
      <div className="flex flex-wrap justify-center gap-4">
        
        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-lg w-full md:w-5/12 h-[50vh] flex flex-col p-6 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-1/3 border-2 border-dashed border-gray-300 mb-4 flex justify-center items-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          {/* Content */}
          <h6 className="text-red-500 text-2xl font-medium mb-2">
            Seamless Payments
          </h6>
          <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            For Everyone
          </h5>
          <p className="text-gray-600 text-center">
            Offer customers the freedom to pay their way! With integrated
            support for cards, mobile wallets, and QR codes, our system makes
            every payment secure, swift, and stress-free. Convenience is just a
            tap away.
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
