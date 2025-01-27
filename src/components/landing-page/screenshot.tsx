"use client";

import Image from "next/image";
import { useState } from "react";

export default function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first image as the active one

  const images = [
    { src: "/screen-1.webp", alt: "Screenshot 1" },
    { src: "/screen-m-2.webp", alt: "Screenshot 2" }, // This will be the fixed image
    { src: "/screen-3.webp", alt: "Screenshot 3" },
    { src: "/screen-4.webp", alt: "Screenshot 4" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white py-16 flex flex-col items-center justify-center px-4 lg:px-24">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center">
        App Screenshots
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
        tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
        maximus.
      </p>

      <div className="relative flex items-center justify-center w-full">
        {/* The fixed (absolute) second image */}
        <div className="relative z-20 w-[150px] h-[300px] lg:w-[200px] lg:h-[400px] transform scale-110">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        {/* Sliding Images */}
        <div className="absolute flex items-center justify-center w-full">
          {images.map((image, index) => {
            if (index === 1) return null; // Skip rendering the fixed image here

            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`transition-all duration-500 w-[150px] h-[300px] lg:w-[200px] lg:h-[400px] ${
                  isActive ? "transform  z-10" : "opacity-50"
                }`}
                style={{
                  transform: `translateX(${(index - activeIndex) }px)`, // Adjusted to fit properly within the frame without gaps
                  zIndex: isActive ? 10 : 5,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="bg-indigo-500 text-white p-1 w-8 h-8 rounded-full hover:bg-indigo-600 transition"
        >
          ←
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-indigo-500 text-white p-1 w-8 h-8 rounded-full hover:bg-indigo-600 transition"
        >
          →
        </button>
      </div>
    </div>
  );
}

