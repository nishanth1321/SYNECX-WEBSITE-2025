"use client";

import Navbar from "@/layouts/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";
import ParticlesComponent from "../ParticlsJs/particle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen">
        {/* Particles Background */}
        <div className="absolute inset-0 -z-10">
          <ParticlesComponent id="particles-js" />
        </div>

        {/* Main Content */}
        <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start bg-white/40 backdrop-blur-sm px-6 lg:px-28 ml-12">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 lg:mr-8 md:mb-5 mt-6 sm:mt-0">
            <h2 className="text-lg lg:text-lg font-medium text-gray-600 mb-4 lg:mb-2 py-4">
              Revolutionizing Industries with AI-Powered Solutions
            </h2>
            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-10">
              Built for <span className="text-indigo-300">Innovation</span>,{" "}
              <span className="text-indigo-400">Efficiency</span>, and{" "}
              <span className="text-indigo-600">Excellence</span>.
            </h1>

            <p className="text-black font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4">
              At SynecX AI Labs, we are revolutionizing industries with
              cutting-edge AI solutions with the potential of computer vision
              and deep learning. We deliver AI-driven solutions like Defect
              Detection, AI Self-Checkout, and Smart Logistic Scanners,
              leveraging deep learning and computer vision to solve real-world
              challenges with precision and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/" legacyBehavior>
                <a className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center">
                  <span className="mr-2">Start Your Transformation</span>
                  <FaRocket />
                </a>
              </Link>
              <Link href="/" legacyBehavior>
                <a className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
                  Explore Our Solutions
                </a>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative ml-2 w-full lg:w-auto flex justify-center lg:justify-end">
            {/* Image */}
            <div className="relative sm:-right-32 mt-6 sm:mt-0 left-0 sm:left-11">
              <Image
                src="/aiLogo.png"
                alt="Phone preview"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
