"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is SynecX AI Labs?",
      answer: "SynecX AI Labs is a leading AI-driven technology company specializing in computer vision and deep learning solutions. We provide AI-powered automation for various industries, including retail, manufacturing, and logistics, to enhance efficiency, accuracy, and productivity.",
    },
    {
      question: "What makes SynecX AI Labs a great place to work?",
      answer: "At SynecX AI Labs, we combine cutting-edge AI innovation with a collaborative, growth-driven culture. Our team enjoys flexibility, continuous learning, and impactful projects. With supportive leadership, a passion for technology, and a shared vision, we empower every individual to make a difference..",
    },
    {
      question: "How accurate are your AI-powered solutions?",
      answer: "Our AI models are trained using high-quality datasets to ensure high accuracy. They continuously improve through deep learning to adapt to evolving business needs.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support, technical assistance, and regular updates to ensure smooth operations.",
    },
    {
      question: "What are your pricing plans?",
      answer: "We offer flexible pricing plans based on credits and usage, ensuring businesses of all sizes can leverage AI automation affordably.",
    },
    {
      question: "How do I request a demo?",
      answer: "To request a demo, fill out the demo request form on our support page. Once submitted, our support team will review your request and reach out to schedule a personalized walkthrough tailored to your business needs.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-600">
        Our FAQ section offers quick answers to common questions about SynecX AI Labs services and processes, providing the essential information you need for a seamless experience.
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
              <div className="ml-4 bg-red-400 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
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
