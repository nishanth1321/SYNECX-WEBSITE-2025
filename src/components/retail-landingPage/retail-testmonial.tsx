"use client"; // Enable client-side functionality in Next.js

import { useState, useEffect } from "react";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Shabana",
    title: "Backend Engineer",
    quote:
      "The mentorship at Synecx AI Labs revolutionized my backend development skills. Learning Node.js and database management gave me the confidence to efficient APIs with ease.",
    image: "assets/femaleprofile.png",
    bgImage: "/assets/blu.png",
  },
  {
    id: 2,
    name: "Naveen",
    title: "DevOps Engineer",
    quote:
      "The DevOps mentorship at Synecx AI Labs completely transformed the way I approach software deployment. Hands-on experience helped me.",
    image: "/assets/maleprofile.png",
    bgImage: "/assets/blu.png",
  },
  {
    id: 3,
    name: "Arun",
    title: "Vision Engineer",
    quote:
      "The mentorship at Synecx AI Labs gave me real-world experience with cutting-edge computer vision technologies.",
    image: "/assets/maleprofile.png",
    bgImage: "/assets/blu.png",
  },
  {
    id: 4,
    name: "Jeffry",
    title: "Application Engineer",
    quote:
      "Thanks to Synecx AI Labs, I now have a solid foundation in building scalable applications with confidence.",
    image: "/assets/maleprofile.png",
    bgImage: "/assets/blu.png",
  },
];

const RetailTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  const totalSlides = testimonials.length;

  // Detect screen size and update `isMobile` state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Set to `true` for screens smaller than or equal to 640px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const transitionStyle = { transition: "transform 0.5s ease-in-out" };

  return (
    <div className="bg-white py-16 flex justify-center items-center flex-col">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black">
          Stories of <span className="text-indigo-500">AI Impact</span>
        </h1>
        <p className="text-lg text-gray-500 mt-2">See what people are saying.</p>
      </div>

      {/* Testimonial Slider */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 10)}%)`, // 100% for mobile, 33.33% for larger screens
            ...transitionStyle,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/3 p-4" // Full width on mobile, 1/3 width on larger screens
            >
              <div
                className="relative flex flex-col items-center justify-between p-8 shadow-lg rounded-lg text-center bg-cover bg-center"
                style={{
                  height: "430px",
                  backgroundImage: `url(${testimonial.bgImage})`,
                }}
              >
                {/* Testimonial Text */}
                <div className="text-center mb-4">
                  <p className="text-lg font-medium text-indigo-800 mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                {/* Testimonial Image */}
                <div className="relative z-10 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
                  />
                </div>

                {/* Name and Title Below Image */}
                <div>
                  <h3 className="text-xl font-semibold text-indigo-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-indigo-800">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-indigo-200 text-white p-2 rounded-full shadow-lg z-20"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-200 text-white p-2 rounded-full shadow-lg z-20"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Optional Dots */}
      <div className="flex mt-8 space-x-2 justify-center">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default RetailTestimonial;
