  "use client";

import { useState } from "react";

export default function RetailLandingPageFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is AI-powered self-checkout?",
      answer:
        "Our AI-driven self-checkout uses deep learning and computer vision to instantly recognize items, enabling a seamless place, pay, and go experience.",
    },
    {
      question: "How does the self-checkout system work?",
      answer:
        "Simply place your items, let the AI auto-detect and scan, make a quick digital payment, and you're ready to go—no manual barcode scanning required!",
    },
    {
      question: "How does AI recognize items without barcodes?",
      answer:
        "Our deep learning models analyze shape, size, color, and packaging details to detect and classify items with high accuracy.",
    },
    
    {
      question: "Is the self-checkout system secure?",
      answer:
        "Yes! Our solution ensures secure transactions with encrypted payments, real-time fraud detection, and seamless POS integration.",
    },
    {
      question: "Can self-checkout work in any retail environment?",
      answer:
        "Absolutely! Our self-checkout system is customizable and designed for supermarkets, QSRs, stadiums, convenience stores, and entertainment venues, ensuring faster, more efficient, and seamless transactions tailored to any business need.",
    },
    
  ];
  

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-600">
        Our Self-Checkout FAQ provides quick answers to common questions, ensuring a seamless, hassle-free shopping experience with AI-powered efficiency.
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
