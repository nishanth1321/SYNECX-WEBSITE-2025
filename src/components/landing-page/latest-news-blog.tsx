"use client"; 

import Image from "next/image";

export default function LatestBlog() {
  const blogs = [
    {
      title: "Laboris nisi aliquip dium exiuliyim commodo...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun",
      image: "/news-img1.jpeg", // Replace with actual image path
      author: "Juhan",
      date: "Apr 28 2024",
    },
    {
      title: "Quis nostrud exercitati ullamc laboris n...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun",
      image: "/news-img2.jpeg", // Replace with actual image path
      author: "Juhan",
      date: "Apr 28 2024",
    },
    {
      title: "Expenses as material bre mate insisted b...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun",
      image: "/news-img3.webp", // Replace with actual image path
      author: "Juhan",
      date: "Apr 28 2024",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Latest News & Blogs
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-xl mx-auto text-sm">
        Stay informed with Sycnex AI Labs latest news and insightful blogs, covering industry trends, expert tips, and updates on our innovative solutions.
        </p>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto transform transition-transform duration-300 hover:scale-95 hover:shadow-md"
            >
              <div className="relative h-36">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out hover:scale-95"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"
                      />
                    </svg>
                    <span>{blog.author}</span>
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 3h-14c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm0 2v7h-5v-7h5zm-7 0v7h-5v-7h5zm-7 0v7h-5v-7h5zm0 9v7h-5v-7h5zm2 7v-7h5v7h-5zm12 0v-7h-5v7h5zm-2-9v-7h-5v7h5zm0 2h-7v7h7v-7zm0 2v3h-3v-3h3zm-12-12h-3v3h3v-3zm0 4h-3v3h3v-3z"
                      />
                    </svg>
                    <span>{blog.date}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 mb-4 text-sm">{blog.description}</p>
                <a
                  href="#"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors text-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
