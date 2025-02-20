"use client";

import React, { useEffect, useState } from "react";
import { FaChartBar } from "react-icons/fa";

const DemoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    company: "",
    product: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState(""); // State for message color

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#demo") {
      const element = document.getElementById("demo");
      if (element) {
        const offset = 140; // Adjust this value as needed
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setMessageColor("");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          companyName: formData.company,
          product: formData.product,
          requirement: formData.requirement,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Demo request submitted successfully!");
        setMessageColor("text-green-600"); // Success message color
        setFormData({
          firstName: "",
          email: "",
          phoneNumber: "",
          company: "",
          product: "",
          requirement: "",
        });
      } else {
        setMessage(data.message || "Failed to submit demo request.");
        setMessageColor("text-red-600"); // Error message color
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
      setMessageColor("text-red-600"); // Error message color
    } finally {
      setIsSubmitting(false); // Re-enable submit button
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12" id="demo">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 order-2 lg:order-1 ">
        <div className="h-auto flex justify-center items-center p-6 ml-4 sm:ml-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-full max-w-full shadow-indigo-200 "
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Request a Demo
            </h2>
            <div className="">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            {/* First Name and Last Name (same row) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              
             
            </div>

            {/* Email and Phone Number (same row) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Company Name and Business Type (same row) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="company"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
              <label
                htmlFor="product"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Product *
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">Select Product</option>
                <option value="RETAIL_SOLUTION">Retail Solution</option>
                <option value="MANUFACTURING_SOLUTION">
                  Manufacturing Solution
                </option>
                <option value="LOGISTICS_SOLUTION">Logistics Solution</option>
              </select>
            </div>
             
            </div>

       
            <div className="mb-4">
              <label
                htmlFor="requirement"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Requirement *
              </label>
              <textarea
                id="requirement"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                rows={1}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

          

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>

            {/* Message */}
            {message && (
              <p className={`text-center text-sm mt-4 ${messageColor}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Right Section - Text */}
      <div className="lg:w-1/2 order-1 lg:order-2">
        <div className="text-left sm:mx-0 mx-6">
          <h1 className="text-red-500 font-semibold">Book a Demo</h1>
          <h2 className="text-3xl font-semibold text-gray-900">
            Experience Our AI Solutions 
          </h2>
          <p className="mt-4 text-gray-600">
            Schedule a personalized demo with our experts to see how SynecX AI
            Labs can streamline your operations. Get hands-on experience and
            answers to all your questions.
          </p>

          {/* Demo Feature Highlight */}
          <div className="flex items-start mt-10">
            <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold mr-4">
              <FaChartBar />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Live AI-Powered Demo
              </h3>
              <p className="text-gray-600">
                Discover how our AI-driven solutions can optimize your workflow,
                enhance accuracy, and save time. Book a live session and explore
                real-world applications tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
