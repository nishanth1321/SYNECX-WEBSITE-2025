"use client";

import { useState } from "react";

export default function FAQFeatures() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What makes SynecX AI Labs' features unique?",
      answer:
        "Our AI-powered self-checkout combines deep learning, computer vision, and real-time analytics to deliver precise weighing, seamless payments, smart product recommendations, and interactive engagement, making transactions faster, smarter, and more efficient.",
    },
    {
      question: "How does the self-checkout ensure accurate weighing?",
      answer:
        "Our Self-Checkout Weighing Precision feature seamlessly integrates with advanced weighing scales, ensuring precise weight measurements without slowing down the checkout process.",
    },
    {
      question: "Can the system suggest additional products during checkout?",
      answer:
        "Yes! Our Smart Product Pairings & Expiry Alerts feature automatically recommends complementary products and expiring items, enhancing customer experience and boosting sales.",
    },
    {
      question: "Does the self-checkout provide real-time business insights?",
      answer:
        "Absolutely! The Real-Time Retail Analytics Dashboard allows retailers to track inventory, monitor sales, and analyse customer behaviour for smarter decision-making.",
    },
    {
      question: "Can businesses use self-checkout screens for advertising?",
      answer:
        "Yes! The Interactive Ad Space feature enables retailers to display dynamic ads, promotions, and trending products on the checkout screen to engage customers and drive sales when on sleep screen.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="text-left">
            <h1 className="text-indigo-700 font-semibold">Answeres to</h1>
            <h2 className="text-3xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Our FAQ section offers quick answers to questions about
              the features of the AI Powered Self-Checkout .
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full px-4 sm:px-8 py-4 text-left flex justify-between items-center text-gray-900 font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <div className="ml-4 bg-indigo-400 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
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
    </div>
  );
}
