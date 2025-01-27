"use client"; // Ensures this component runs on the client side

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the valid tab names
type Tab = "Impact" | "Development" | "Support" | "Progress";

const Whysycenx = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Progress"); // Explicitly type the state

  const tabs: Tab[] = ["Impact", "Development", "Support", "Progress"];

  const tabContent: Record<Tab, { title: string; text: string; imgSrc: string }> = {
    Impact: {
      title: "Impact",
      text: "At Synecx AI Labs, you'll work on innovative projects, collaborate with a dynamic team, and make a meaningful impact in areas like ERP, cybersecurity, and enterprise solutions, all within a growth-focused and supportive environment.",
      imgSrc: "/imp-xylo1.png", // Ensure this path is correct
    },
    Development: {
      title: "Development",
      text: "We prioritize continuous learning and development for our employees. Through comprehensive training programs and challenging projects, we ensure that our teams are equipped with the skills needed to succeed in a fast-paced industry.",
      imgSrc: "/imp-xylo2.png", // Ensure this path is correct
    },
    Support: {
      title: "Support",
      text: "At Synecx AI Labs, support means providing our employees with the resources and guidance they need to thrive. From mentoring programs to wellness initiatives, we create an environment where everyone can achieve their full potential.",
      imgSrc: "/imp-xylo3.png", // Ensure this path is correct
    },
    Progress: {
      title: "Progress",
      text: "We see our people as long-term relationships that we build together and from which we all grow. We invest in them across the duration of their career and encourage them to strive for perpetual progress.",
      imgSrc: "/imp-xylo4.png",
    },
  };

  const motionConfig = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.3 },
  };

  // Get the content of the currently selected tab
  const selectedContent = tabContent[activeTab];

  return (
    <section className="bg-gray-100 text-gray-800 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 opacity-40 rounded-full blur-3xl z-0"></div>

        <h1 className="text-4xl md:text-6xl font-bold mb-12 relative text-center z-0">
        Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-600 to-red-700">SYNECX AI LABS</span>

        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 relative z-0">
          {tabs.map((tab) => (  
            <motion.div
              key={tab}
              whileHover={{ scale: 1.05 }}
              className={`cursor-pointer pb-2 mx-2 md:mx-4 ${
                activeTab === tab
                  ? "border-b-4 border-blue-400 text-gray-800"
                  : "border-b-4 border-transparent text-gray-500"
              } transition-all duration-200 ease-in-out`}
              onClick={() => setActiveTab(tab)} // Set the active tab when clicked
            >
              <p className="text-base md:text-lg font-semibold">{tab}</p>
            </motion.div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative z-0">
          <AnimatePresence mode="wait">
            {selectedContent && (
              <motion.div
                key={activeTab} // Use activeTab as key to ensure smooth transitions
                {...motionConfig}
                className="flex flex-col md:flex-row items-start md:items-center py-6 md:py-10"
              >
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <img
                    src={selectedContent.imgSrc}
                    alt={selectedContent.title}
                    className="w-full h-[200px] md:h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 md:ml-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {selectedContent.title}
                  </h2>
                  <p className="text-base md:text-lg text-blue-500">
                    {selectedContent.text}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Whysycenx;
