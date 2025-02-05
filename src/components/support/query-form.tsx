"use client";

import React, { useState } from "react";
import axios from "axios";

const QueryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    phoneNumber: "",
    companyName: "",
    product: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Reset any previous message

    try {
      const response = await axios.post(
        "/api/query", // Replace with the actual path to your API
        formData
      );

      // Handle success response
      setMessage(response.data.message);
      setLoading(false);

      // Clear the form after successful submission
      setFormData({
        fullName: "",
        emailId: "",
        phoneNumber: "",
        companyName: "",
        product: "",
        description: "",
      });

      // Hide the message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("Failed to submit query request. Please try again.");
      setLoading(false);

      // Hide the error message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-4 flex flex-col lg:flex-row items-start gap-12 mt-24 sm:mx-auto">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 order-1 lg:order-1">
        <div className="text-left pl-12">
          <h1 className="text-red-500 font-semibold">Have a Query?</h1>
          <h2 className="text-3xl font-semibold text-gray-900">
            We are Here to Help!
          </h2>
          <p className="mt-4 text-gray-600">
            Have questions about our AI solutions, services, or processes? Fill
            out the form, and our team will get back to you with the answers you
            need. We are happy to assist!
          </p>
        </div>
      </div>

      {/* Right Section - Text */}
      <div className="lg:w-1/2 order-2 lg:order-2 hidden lg:block">
        <div className="h-auto flex justify-center items-center p-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-full max-w-lg shadow-indigo-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Submit Your Query
            </h2>

            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>

            {/* Email and Phone Number - Grouped in one column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email Address */}
              <div className="mb-4">
                <label
                  htmlFor="emailId"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailId"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Company Name and Product - Grouped in one column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Company Name */}
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>

              {/* Product */}
              <div className="mb-4">
                <label
                  htmlFor="product"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Product
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                >
                  <option value="" disabled>
                    Select Product
                  </option>
                  <option value="RETAIL_SOLUTION">RETAIL_SOLUTION</option>
                  <option value="MANUFACTURING_SOLUTION">
                    MANUFACTURING_SOLUTION
                  </option>
                  <option value="LOGISTICS_SOLUTION">LOGISTICS_SOLUTION</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={1}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              >
                {loading ? "Submitting..." : "Submit Query"}
              </button>
            </div>

            {/* Display Message */}
            {message && (
              <div className="mt-4 text-center text-gray-700">
                <p>{message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
