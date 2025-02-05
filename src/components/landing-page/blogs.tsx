
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Pagination, Autoplay } from "swiper/modules";
// import React from "react";

// export default function LatestBlog() {
//   const blogs = [
//     {
//       title: "Camera-Based AI Self-Checkout: A Vision of Retail Efficiency",
//       description:
//         "Say goodbye to queues and barcode scanning! Discover how AI-powered self-checkout kiosks revolutionize retail with frictionless, no-scan technology for a faster, smarter shopping experience. 🚀",
//         images: ["/blog1.svg", "/blog2.svg", "/blog3.svg"],
//       date: "Apr 28 2024",
//     },
//     {
//       title: "The Untold Story of Shipping Labels: Making the World Go Round ",
//       description:
//         "Have you ever wondered what ensures your package, whether a gift or an important document, arrives at just the right doorstep? The hero behind the scenes is that simple yet powerful shipping label glued to the box.  🚀",
//       images: ["/news-img2.jpeg", "/news-img3.webp", "/news-img1.jpeg"],
//       date: "Apr 28 2024",
//     },
//     {
//       title: "The Future of Checkout: AI-Powered & Seamless",
//       description:
//         "Explore how AI and computer vision are revolutionizing retail with smart, seamless self-checkout kiosks for a faster and more efficient shopping experience. 🚀",
//         images: ["/blog4.svg", "/blog5.svg", "/blog6.svg"],
//       date: "Apr 28 2024",
//     },
//   ];

//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-semibold text-gray-900 text-center">
//           Latest News & Blogs
//         </h2>
//         <p className="mt-4 text-center text-gray-600 max-w-xl mx-auto text-sm">
//           Stay informed with SynecX AI Labs latest news and insightful blogs,
//           covering industry trends, expert tips, and updates on our innovative
//           solutions.
//         </p>

//         <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-md flex flex-col h-full"
//             >
//               {/* Swiper Carousel for Blog Images */}
//               <Swiper
//                 spaceBetween={10}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide every 3 seconds
//                 modules={[Pagination, Autoplay]}
//                 className="h-40"
//               >
//                 {blog.images.map((image, imgIndex) => (
//                   <SwiperSlide key={imgIndex}>
//                     <img
//                       src={image}
//                       alt={`Slide ${imgIndex}`}
//                       className="w-full h-40 object-cover"
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Blog Content */}
//               <div className="p-4 flex flex-col flex-grow">
//                 <div className="flex items-center text-gray-500 text-sm mb-2">
//                   <div className="flex items-center">
//                     <svg
//                       className="w-4 h-4 mr-2"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M19 3h-14c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm0 2v7h-5v-7h5zm-7 0v7h-5v-7h5zm-7 0v7h-5v-7h5zm0 9v7h-5v-7h5zm2 7v-7h5v7h-5zm12 0v-7h-5v7h5zm-2-9v-7h-5v7h5zm0 2h-7v7h7v-7zm0 2v3h-3v-3h3zm-12-12h-3v3h3v-3zm0 4h-3v3h3v-3z" />
//                     </svg>
//                     <span>{blog.date}</span>
//                   </div>
//                 </div>

//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {blog.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2 text-sm flex-grow">
//                   {blog.description}
//                 </p>

//                 {/* "Read More" button always at bottom-right */}
//                 <div className="flex justify-end mt-auto">
//                   <a
//                     href="/blog"
//                     className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 transition-colors text-sm"
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import React from "react";

export default function LatestBlog() {
  const blogs = [
    {
      title: "Camera-Based AI Self-Checkout: A Vision of Retail Efficiency",
      description:
        "Say goodbye to queues and barcode scanning! Discover how AI-powered self-checkout kiosks revolutionize retail with frictionless, no-scan technology for a faster, smarter shopping experience. 🚀",
      images: ["/blog1.svg", "/blog2.svg", "/blog3.svg"],
      date: "Apr 28 2024",
    },
    {
      title: "The Untold Story of Shipping Labels: Making the World Go Round ",
      description:
        "Have you ever wondered what ensures your package, whether a gift or an important document, arrives at just the right doorstep? The hero behind the scenes is that simple yet powerful shipping label glued to the box.  🚀",
      images: ["/news-img2.jpeg", "/news-img3.webp", "/news-img1.jpeg"],
      date: "Apr 28 2024",
    },
    {
      title: "The Future of Checkout: AI-Powered & Seamless",
      description:
        "Explore how AI and computer vision are revolutionizing retail with smart, seamless self-checkout kiosks for a faster and more efficient shopping experience. 🚀",
      images: ["/blog6.svg", "/blog5.svg", "/blog4.svg"],
      date: "Apr 28 2024",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Latest News & Blogs
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-xl mx-auto text-sm">
          Stay informed with SynecX AI Labs latest news and insightful blogs,
          covering industry trends, expert tips, and updates on our innovative
          solutions.
        </p>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-md flex flex-col h-full"
            >
              {/* Swiper Carousel for Blog Images */}
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="w-full h-56"
              >
                {blog.images.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex} className="w-full h-56">
                    <img
                      src={image}
                      alt={`Slide ${imgIndex}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Blog Content */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3h-14c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm0 2v7h-5v-7h5zm-7 0v7h-5v-7h5zm-7 0v7h-5v-7h5zm0 9v7h-5v-7h5zm2 7v-7h5v7h-5zm12 0v-7h-5v7h5zm-2-9v-7h-5v7h5zm0 2h-7v7h7v-7zm0 2v3h-3v-3h3zm-12-12h-3v3h3v-3zm0 4h-3v3h3v-3z" />
                  </svg>
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm flex-grow">
                  {blog.description}
                </p>

                {/* "Read More" button always at bottom-right */}
                <div className="flex justify-end mt-auto">
                  <a
                    href="/blog"
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 transition-colors text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
