import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white pl-6 pr-4 lg:pl-28 lg:pr-24 pb-12 ">
      <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 lg:mr-8  ">
        <h2 className="text-xl lg:text-3xl font-medium text-gray-600 mb-4 lg:mb-8">
          Crafted for App, Software and SaaS Sites
        </h2>
        <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 lg:mb-8">
          Next.js Template and <span className="text-indigo-500">SaaS Starter Kit</span> Site.
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mb-6 lg:mb-8">
          Website template and starter kit crafted to build fully functional mobile app landing pages and software websites.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center">
            <span className="mr-2">Download Now</span> <FaApple />  
          </button>
          <Link href="#" legacyBehavior>
            <a className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12l7.5-5v10l-7.5-5z" />
              </svg>
              Watch Demo
            </a>
          </Link>
        </div>
      </div>
      <div className="relative mt-12 w-full lg:w-auto flex justify-center lg:justify-end">
        {/* Background Decorations */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-100 rounded-full absolute top-40 lg:top-52 transform -translate-y-1/2 -right-4 lg:-right-36"></div>
          <div className="absolute top-16 lg:top-20 lg:right-8">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.47803 2 2 6.47803 2 12C2 17.522 6.47803 22 12 22C17.522 22 22 17.522 22 12C22 6.47803 17.522 2 12 2ZM10 14L8.29297 12.293L7.70703 12.707L10 15L16 9L15.292 8.29297L10 13.586L8.70703 12.293L8.29297 12.707L10 14Z"
                fill="#FF3B3B"
              />
            </svg>
          </div>
        </div>
        <div className="relative left-0 lg:left-16">
          <Image
            src="/lan-img1.webp"
            alt="Phone preview"
            width={350}
            height={700}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
