"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "How do we work together?.",
      answer: "This is the answer to the question. It will be revealed when the question is clicked.",
    },
    {
      question: "Why Sycnex AI Labs is the best?",
      answer: "Its excels with innovative solutions, expert service, and a commitment to your business success.",
    },
    {
      question: "Do we get the best support?",
      answer: "Yes, Sycnex AI Labs offers top-tier support from consultation to post-implementation, ensuring your success.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-600">
        Our FAQ section offers quick answers to common questions about Sycnex AI Labs&a services and processes, providing the essential information you need for a seamless experience.
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
