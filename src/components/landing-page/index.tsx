// "use client";

// import Navbar from "@/layouts/navbar";
// import Image from "next/image";
// import Link from "next/link";
// import { FaRocket } from "react-icons/fa";
// import ParticlesComponent from "../ParticlsJs/particle";

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <div className="relative min-h-screen">
//         {/* Particles Background */}
//         <div className="absolute inset-0 -z-10">
//           <ParticlesComponent id="particles-js" />
//         </div>

//         {/* Main Content */}
//         <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start bg-white/30 backdrop-blur-sm px-6 lg:px-28">
//           {/* Text Section */}
//           <div className="text-center  bg-white/70 lg:text-left max-w-xl mb-12 lg:mb-0 lg:mr-8 md:mb-5 mt-6 sm:mt-0 rounded-xl">
//             <h2 className="text-lg lg:text-lg font-medium text-gray-600 mb-4 lg:mb-2 py-4 pl-6">
//               Revolutionizing Industries with AI-Powered Solutions
//             </h2>
//             <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-8 pl-6">
//               Built for <span className="text-red-300">Innovation</span>,{" "}
//               <span className="text-red-400">Efficiency</span>, and{" "}
//               <span className="text-red-600">Excellence</span>.
//             </h1>

//             <p className="text-gray-700 font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4 pl-6 text-justify pr-6">
//               At SynecX AI Labs, we are pioneering the future of industries with
//               transformative AI solutions, harnessing the power of deep learning
//               and computer vision. Our cutting-edge technology drives automation
//               in Self-Checkout, AI OCR and AI-powered quality inspection blending innovation with intelligent automation, we enable
//               businesses to unlock efficiency, accuracy, and scalability.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pl-6 pb-4">
//               <Link href="/" legacyBehavior>
//                 <a className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center">
//                   <span className="mr-2">Start Your Transformation</span>
//                   <FaRocket />
//                 </a>
//               </Link>
//               <Link href="/" legacyBehavior>
//                 <a className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
//                   Explore Our Solutions
//                 </a>
//               </Link>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="relative ml-2 w-full lg:w-auto flex justify-center lg:justify-end">
//             {/* Image */}
//             <div className="relative sm:-right-32 mt-6 sm:mt-0 left-0 sm:left-11">
//               <Image
//                 src="/landingheader.svg"
//                 alt="Phone preview"
//                 width={900}
//                 height={600}
//                 className="rounded-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Navbar from "@/layouts/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";
import ParticlesComponent from "../ParticlsJs/particle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen">
        {/* Particles Background */}
        <div className="absolute inset-0 -z-10">
          <ParticlesComponent id="particles-js" />
        </div>

        {/* Main Content */}
        <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[40%_60%] items-center justify-center bg-white/30 backdrop-blur-sm px-6 lg:px-28">
          {/* Text Section (30% on Desktop) */}
          <div className="order-2 lg:order-1 text-center bg-white/70 lg:text-left max-w-xl lg:max-w-none mb-12 lg:mb-0 lg:mr-8 md:mb-5 mt-6 sm:mt-0 rounded-xl">
            <h2 className="text-lg lg:text-lg font-medium text-gray-600 mb-4 lg:mb-2 py-4 pl-6">
              Revolutionizing Industries with AI-Powered Solutions
            </h2>
            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-8 pl-6">
              Built for <span className="text-red-300">Innovation</span>,{" "}
              <span className="text-red-400">Efficiency</span>, and{" "}
              <span className="text-red-600">Excellence</span>.
            </h1>

            <p className="text-gray-700 font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4 pl-6 text-justify pr-6">
              At SynecX AI Labs, we are pioneering the future of industries with
              transformative AI solutions, harnessing the power of deep learning
              and computer vision. Our cutting-edge technology drives automation
              in Self-Checkout, AI OCR, and AI-powered quality inspection.
              Blending innovation with intelligent automation, we enable
              businesses to unlock efficiency, accuracy, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pl-6 pb-4">
              <Link href="/contact#demo" legacyBehavior>
                <a className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center">
                  <span className="mr-2">Get Your Demo</span>
                  <FaRocket />
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="bg-white border border-gray-400 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>

          {/* Image Section (70% on Desktop) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-[100%]">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/ailogo.png"
                alt="Phone preview"
                className="rounded-lg object-cover h-[650px] w-[900px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
