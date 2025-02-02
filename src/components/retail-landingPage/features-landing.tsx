"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {  Autoplay } from "swiper/modules";

const FeaturesLanding = () => {
  return (
    <div className="h-full bg-white mx-4 sm:mx-0 flex flex-col lg:flex-row relative">
      {/* Left Half - Carousel */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative">
        <Swiper
          modules={[ Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src="/sample.png"
              alt="Slide 1"
              width={500} // Set explicit width
              height={300} // Set explicit height
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src="/sample.png"
              alt="Slide 2"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src="/ui-test.png"
              alt="Slide 3"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Right Half - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 lg:px-12 py-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-indigo-800 text-center lg:text-left">
          Our Amazing Features
        </h1>
        <p className="mt-4 text-base lg:text-lg text-gray-700 text-center lg:text-left">
          Discover the latest innovations and technologies that will transform
          your experience. Stay ahead with our cutting-edge features designed to
          make your life easier.
        </p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700">
          <a href="/retail/features">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default FeaturesLanding;
