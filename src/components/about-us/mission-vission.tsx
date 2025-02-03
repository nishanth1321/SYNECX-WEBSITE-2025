"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaRegEye } from "react-icons/fa";
import Image from "next/image";

const MissionVission = () => {
  return (
    <div className="h-full w-full bg-white flex items-center justify-center px-6 lg:px-24 overflow-hidden mt-16 py-4">
      {/* Container */}
      <div className="relative flex flex-col lg:flex-row w-full max-w-6xl">
        {/* Mission - Moves from left */}
        <motion.div
          initial={{ x: "-10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="flex items-center mb-4 space-x-2">
          <Image  className="text-indigo-500 text-3xl" src={"/mission.svg"} alt={""}  height={24} width={40}/>
            <h2 className="text-3xl font-bold text-red-500">Our Mission</h2>
          </div>
          <p className="text-gray-700">
            Empowering businesses with intelligent vision AI solutions to make
            the world a safer, more efficient, and insights-driven place.
          </p>
        </motion.div>

        {/* Vision - Moves from right */}
        <motion.div
          initial={{ x: "10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 lg:ml-6 flex flex-col items-center lg:items-start"
        >
          <div className="flex items-center mb-4 space-x-2">
            <Image  className="text-indigo-500 text-3xl" src={"/vission.svg"} alt={""}  height={24} width={40}/>
            <h2 className="text-3xl font-bold text-indigo-500">Our Vision</h2>
          </div>
          <p className="text-gray-700">
            To be the leading provider of intelligent vision AI solutions,
            transforming industries and empowering a future where machines see
            and understand the world like humans.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVission;
