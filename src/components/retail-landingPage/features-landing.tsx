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
              src="/1.svg"
              alt="Slide 1"
              width={500} // Set explicit width
              height={300} // Set explicit height
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src="/2.svg"
              alt="Slide 2"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src="/3.svg"
              alt="Slide 3"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src="/4.svg"
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
        <h1 className="text-3xl lg:text-4xl font-bold text-black text-center lg:text-left">
          Our <span className='text-red-500'>Amazing Features</span>
        </h1>
        <p className="mt-4 text-base lg:text-lg text-gray-700 text-center lg:text-left">
          Discover the latest innovations and technologies that will transform
          your experience. Stay ahead with our cutting-edge features designed to
          make your Retail easier.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600">
          <a href="/retail/features">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default FeaturesLanding;
