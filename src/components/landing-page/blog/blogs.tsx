// "use client";
// import Navbar from "@/layouts/navbar";
// import React from "react";

// const Blogs = () => {
//   return (
//    <div>
//      <Navbar />
//      <div className=" flex justify-center items-center h-screen">
      
//     </div>
//    </div>
//   );
// };

// export default Blogs;
"use client";
import Navbar from "@/layouts/navbar";
import React from "react";

const Blogs = () => {
  // Sample blogs data
  const blogs = [
    {
      id: 1,
      title: "Exploring the Future of Web Development",
      description: "A deep dive into the latest trends in web technologies.",
      image: "/blogs.svg",
    },
    {
      id: 2,
      title: "Mastering React with TypeScript",
      description: "Learn how TypeScript enhances React development.",
      image: "/blogs.svg",
    },
    {
      id: 3,
      title: "The Power of Tailwind CSS",
      description: "How Tailwind CSS simplifies styling and speeds up UI design.",
      image: "/blogs.svg",
    },
    {
      id: 4,
      title: "Building Scalable Applications",
      description: "Best practices for creating scalable web applications.",
      image: "/blogs.svg",
    },
  ];

  return (
    <div className="bg-white h-full ">
      <Navbar />
      
      <div className="max-w-6xl mx-auto py-12 px-4 ">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 mt-20">
          Latest Blogs
        </h1>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white h-[55vh] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 "
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-contain rounded-lg  "
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <button className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
