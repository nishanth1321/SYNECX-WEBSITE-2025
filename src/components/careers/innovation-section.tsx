"use client";

import Image from "next/image";
import React from "react";

const Openings = () => {
  const openingss = [
    {
      name: "Computer Vision Engineer",
      image: "/CV.svg",
      text: "Seeking a Computer Vision Engineer with expertise in image processing and machine learning to develop innovative AI solutions.",
    },
    {
      name: "Deep Learning Engineer",
      image: "/DL.svg",
      text: "Looking for a Deep Learning Engineer to design, train, and optimize neural networks for various AI applications.",
    },
    {
      name: "Fullstack Web Developer",
      image: "/FS.svg",
      text: "We are looking for a skilled Fullstack Web Developer to build and maintain scalable web applications. ",
    },
    {
      name: "Business Development Executive",
      image: "/BD.svg",
      text: "Seeking a Business Development Manager to identify new market opportunities and build strategic partnerships.",
    },
    {
      name: "Sales Executive",
      image: "/sales.svg",
      text: "Join our team as a Sales Executive and drive business growth through effective client engagement and sales strategies.",
    },

    {
      name: "Digital Marketing Specialist",
      image: "/DM.svg",
      text: "We need a Digital Marketing Specialist to enhance our online presence and execute result-driven marketing campaigns.",
    },
  ];
  const handleApplyNowClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector("#careerform");
    if (target) {
      const offset = 150; // Adjust this value based on your navbar height
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-transparent my-12 flex justify-center items-center w-full">
      <div className="w-full mx-0 sm:mx-32 bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6 bg-clip-text">
          Greater Futures Through Innovation
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-0">
          Watching the world of next-tech unfold? Its time to be part of it.
          Explore challenging and exciting opportunities across the globe.
        </p>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
          {openingss.map((openings, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-sm p-8 rounded-xl shadow-lg flex flex-col justify-between text-black"
            >
              <div className="flex items-center">
                <div className="w-18 h-18 rounded-full overflow-hidden">
                  <Image
                    src={openings.image}
                    alt={openings.name}
                    width={72}
                    height={72}
                    className="object-cover -mt-2"
                  />
                </div>
                <div className=" -mt-4">
                  <p className="text-black font-semibold">{openings.name}</p>
                </div>
              </div>
              <div className="h-auto w-full ">
                <p className="text-black mx-2 text-[15px] text-justify">
                  {openings.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a
           onClick={handleApplyNowClick}
            href="#careerform"
            className="inline-block bg-transparent border-2 border-gray-900 text-gray-900 text-base md:text-lg font-medium py-2 px-6 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Openings;
