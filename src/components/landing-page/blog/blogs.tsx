"use client";
import Navbar from "@/layouts/navbar";
import React from "react";
import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      title: "Camera-Based-AI-Self-Checkout",
      displayTitle: "Camera-Based-AI-Self-Checkout",
      description:
        "Imagine a world where checkout lines disappear, scanning barcodes becomes a thing of the past, and paying for your items is as simple as placing them on a counter",
      image: "/blog1.svg",
    },
    {
      title: "Customer-Experience-with-AI-Powered-Self-Checkout-Kiosk",
      displayTitle: "Customer Experience with AI-Powered Self-Checkout Kiosk",
      description:
        "AI-powered self-checkout kiosks, fuelled by cutting-edge technologies like AI, deep learning, and computer vision, are revolutionizing the retail experience. ",
      image: "/blog3.svg",
    },
    {
      title:
        "How-AI-Deep-Learning-and-Computer-Vision-Are-Revolutionizing-Retail-Checkout",
      displayTitle: "How our technologies are Revolutionizing Retail Checkout",
      description:
        "The world of AI-driven self-checkout kiosks, where complex algorithms and high-performance computing meet everyday convenience.",
      image: "/blog6.svg",
    },
  ];

  return (
    <div className="bg-white h-full">
      <Navbar />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 mt-20">
          Latest Blogs
        </h1>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="bg-white h-full shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.displayTitle}
                className="w-full h-52 object-contain rounded-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {blog.displayTitle}
                </h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <div className="sm:mt-10 mt-10">
                  <Link href={`/blog/${blog.title}`}>
                    <button className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 ">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
