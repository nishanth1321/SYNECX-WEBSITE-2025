import { notFound } from "next/navigation";
import Navbar from "@/layouts/navbar";
import React from "react";

// Blog Data (same as used in the listing page)
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

// 🔹 Required function for static exports
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    title: blog.title,
  }));
}

// Props for getting dynamic route parameters
interface BlogPageProps {
  params: {
    title: string;
  };
}

const BlogPost: React.FC<BlogPageProps> = ({ params }) => {
  const blog = blogData.find((post) => post.title === decodeURIComponent(params.title));

  if (!blog) {
    return notFound(); // Returns a 404 error page if the blog is not found
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
