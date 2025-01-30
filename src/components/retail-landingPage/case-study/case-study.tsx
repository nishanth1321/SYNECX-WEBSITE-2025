
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import RetailNavbar from "@/layouts/retailnavbar";
import { FaChartLine, FaIndustry, FaLightbulb, FaTools } from "react-icons/fa";

const images = [
  "/team-1.avif",
  "/team-2.jpg",
  "/unit-test.png",
  "/ui-test.png",
];

const CaseStudy = () => {
  return (
    <div>
      <RetailNavbar />
      <div className="h-full bg-white flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-16">
        {/* Carousel on the Left (Centered & Larger) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[25rem] sm:h-[30rem] lg:h-[35rem]">
          <div className="w-full max-w-xl sm:max-w-md md:max-w-lg lg:w-[900px] lg:h-[450px] ml-0 sm:-ml-20"> 
            <Swiper
              modules={[Navigation,  Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-lg sm:h-[25rem] h-full w-full sm:w-[40rem]"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} className="h-full w-[2000px] object-cover rounded-lg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Content on the Right */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:-mt-12 text-center lg:text-left sm:ml-12 ml-0">
          <h2 className="text-2xl sm:text-5xl font-semibold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Explore our successful implementations and how our solutions have helped businesses optimize efficiency.
          </p>
          <div className="grid sm:grid-row-2 grid-col-2 gap-6 text-gray-600 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <FaChartLine className="text-xl text-blue-600" />
              <span>Market</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaIndustry className="text-xl text-green-600" />
              <span>Field</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaLightbulb className="text-xl text-yellow-600" />
              <span>Innovation</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTools className="text-xl text-red-600" />
              <span>Solution</span>
            </div>
            <div className=""> View more of our case studies  {" "} 
              <button className="ml-4 bg-blue-700 text-white font-semibold w-28 h-8 rounded-md" ><a href="/retail/case-study">Read More </a> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

