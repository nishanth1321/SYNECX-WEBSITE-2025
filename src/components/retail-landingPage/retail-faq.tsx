"use client";

import { useState } from "react";

export default function RetailLandingPageFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What makes Sycnex AI Labs' features unique?",
      answer:
        "Our features are designed with cutting-edge AI to streamline retail operations, enhance customer experiences, and drive business growth through data-driven insights.",
    },
    {
      question: "How does Sycnex AI Labs improve retail efficiency?",
      answer:
        "We leverage AI automation to optimize processes like inventory management, checkout experiences, and customer analytics, saving time and reducing errors.",
    },
    {
      question: "Can Sycnex AI Labs solutions scale with my business?",
      answer:
        "Absolutely! Our solutions are built to adapt and scale seamlessly as your business grows, ensuring consistent performance and reliability at any size.",
    },
    {
      question: "How quickly can I implement Sycnex AI Labs features?",
      answer:
        "Our implementation process is designed to be quick and efficient, with most features ready to use in days, not weeks, depending on your business needs.",
    },
  ];
  

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-600">
        Our FAQ section offers quick answers to common questions about Sycnex AI Labs&aposs services and processes, providing the essential information you need for a seamless experience.
        </p>
      </div>

      <div className="mt-12 mx-auto bg-white rounded-xl shadow-lg w-full max-w-lg sm:max-w-2xl lg:max-w-3xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200"
          >
            <button
              className="w-full px-4 sm:px-8 py-4 text-left flex justify-between items-center text-gray-900 font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <div className="ml-4 bg-indigo-400 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">{activeIndex === index ? "-" : "+"}</span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="px-4 sm:px-8 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
