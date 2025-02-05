import Navbar from "@/layouts/navbar";
import { useRouter } from "next/router";
import React from "react";

const blogData = [
  {
    title: "exploring-the-future-of-web-development",
    displayTitle: "Exploring the Future of Web Development",
    content: "Web development is evolving rapidly, with new frameworks, tools, and trends shaping the future of the industry...",
    image: "/blogs.svg",
  },
  {
    title: "mastering-react-with-typescript",
    displayTitle: "Mastering React with TypeScript",
    content: "Using TypeScript with React enhances type safety and improves code maintainability...",
    image: "/blogs.svg",
  },
  {
    title: "the-power-of-tailwind-css",
    displayTitle: "The Power of Tailwind CSS",
    content: "Tailwind CSS provides utility-first styling, allowing developers to build beautiful UIs with minimal CSS...",
    image: "/blogs.svg",
  },
  {
    title: "building-scalable-applications",
    displayTitle: "Building Scalable Applications",
    content: "Scalability is key in modern applications, ensuring performance under heavy load...",
    image: "/blogs.svg",
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { title } = router.query;

  // Find the blog post by its title
  const blog = blogData.find((post) => post.title === title);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-6">
        <img src={blog.image} alt={blog.displayTitle} className="w-full rounded-lg" />
        <h1 className="text-4xl font-bold text-gray-900 mt-6">{blog.displayTitle}</h1>
        <p className="text-gray-700 mt-4 text-lg">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
