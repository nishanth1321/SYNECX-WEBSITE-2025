
"use client";
import Navbar from "@/layouts/navbar";
import React from "react";
import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      title: "Camera-Based-AI-Self-Checkout",
      displayTitle: "Camera-Based-AI-Self-Checkout",
      description: "A deep dive into the latest trends in web technologies.",
      image: "/blogs.svg",
    },
    {
      title: "Customer-Experience-with-AI-Powered-Self-Checkout-Kiosk",
      displayTitle: "Customer Experience with AI-Powered Self-Checkout Kiosk",
      description: "Learn how TypeScript enhances React development.",
      image: "/blogs.svg",
    },
    {
      title: "How AI-Deep-Learning-and-Computer-Vision-Are-Revolutionizing-Retail-Checkout",
      displayTitle: "How our technologies are Revolutionizing Retail Checkout",
      description: "How Tailwind CSS simplifies styling and speeds up UI design.",
      image: "/blogs.svg",
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
              className="bg-white h-[55vh] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
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
                <Link href={`/blog/${blog.title}`}>
                  <button className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
