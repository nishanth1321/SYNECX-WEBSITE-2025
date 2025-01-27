"use client";

export default function ContactForm() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Let & aposs Stay Connected
        </h2>
        <p className="mt-4 text-center text-gray-600">
        Join the Synecx community to stay updated on the latest innovations, tips, and exclusive offers. Subscribe to our newsletter and follow us on social media to keep in touch and never miss out on what&aposs new.
        </p>

        <form className="mt-8 space-y-6 bg-gradient-to-r from-indigo-500 to-indigo-700 lg:bg-indigo-600 p-8 rounded-lg shadow-lg text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company (optional)"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900"
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Tell us about yourself"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-900"
            ></textarea>
          </div>
          <div className="text-center">
            <p className="text-gray-200 text-sm mb-4">
              By clicking contact us button, you agree to our terms and policy.
            </p>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-indigo-400 transition-colors hover:text-white"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
