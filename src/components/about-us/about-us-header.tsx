"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function AboutUs() {
  return (
    <div className="h-full flex flex-col lg:flex-row items-center justify-center bg-white px-6 lg:px-28 pt-12 sm:pt-20">
      {/* 📝 Left Section: About Us Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-5xl font-bold">
          About <br />
          <span className="text-red-500">SynecX AI Labs</span>
        </h1>
        <p className="text-gray-700 text-lg text-justify">
          At SynecX AI Labs, we are at the forefront of AI innovation,
          leveraging computer vision, deep learning, and artificial intelligence
          to revolutionize industries.Our team of AI specialists and computer
          vision scientists is dedicated to pushing the boundaries of machine
          learning, automation, and advanced analytics. At SynecX AI Labs, we
          don’t just innovate—we transform the future. 🚀
        </p>
      </div>

      {/* 🖼 Right Section: Swiper Carousel */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-lg"
        >
          <SwiperSlide className="">
            <Image
              src="/aboutus.svg"
              alt="AI Innovation"
              width={1200}
              height={100}
              className="rounded-xl w-full "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/aboutuslogo.svg"
              alt="Machine Learning"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/aboutus3.svg"
              alt="Tech Team"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
