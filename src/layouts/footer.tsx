
// "use client";
// import EmailSubscribe from "@/components/subscribe-newsletter/email-subscribe";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaGithub,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-700">
//       <div>
//         <EmailSubscribe />
//       </div>

//       {/* Main Footer - Responsive Layout */}
//       <div className="container mx-auto py-12 px-4 md:px-5 flex flex-col sm:flex-row  bg-white text-gray-700">
//         {/* Logo and Description */}
//         <div className="w-full sm:w-auto text-center sm:text-left flex-shrink-0 sm:ml-20 ml-0 mb-6 sm:mb-0 sm:mr-20 mr-0">
//           <Image
//             src="/logo.svg"
//             alt="Company Logo"
//             height={220}
//             width={220}
//             className="mx-auto sm:mx-0 mt-0 sm:-mt-20"
//           />
//           <p className="mb-6 text-sm md:text-base max-w-xs transition-colors duration-300 hover:text-black mt-0 sm:-mt-20">
//             Empowering industries with smart, scalable solutions since 2024,
//             turning challenges into opportunities for growth.
//           </p>
//           {/* Social Icons */}
//           <div className="flex justify-center sm:justify-start space-x-4">
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black transition-colors duration-300"
//             >
//               <FaFacebookF size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black transition-colors duration-300"
//             >
//               <FaTwitter size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black transition-colors duration-300"
//             >
//               <FaInstagram size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black transition-colors duration-300"
//             >
//               <FaGithub size={24} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black transition-colors duration-300"
//             >
//               <FaLinkedinIn size={24} />
//             </a>
//           </div>
//         </div>

//         {/* Links Section - Stacked on Mobile */}
//         <div className="flex flex-col sm:flex-row flex-wrap gap-8 text-center sm:text-left w-full sm:w-auto space-x-14">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="/"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/about-us"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/blog"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/support"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="">
//             <h3 className="text-lg font-semibold mb-4 ">Products</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="/retail"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Retail
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Smart OCR
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Manufacturing
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <p className="mb-4 text-sm md:text-base transition-colors duration-300 hover:text-black">
//               <b>Address:</b> Coimbatore, India 641108
//             </p>
//             <p className="mb-4 text-sm md:text-base">
//               <b>Email:</b>
//               <a
//                 href="mailto:info@synecxailabs.io"
//                 className="text-gray-700 hover:text-black transition-colors duration-300 pl-1"
//               >
//                 info@synecxailabs.io
//               </a>
//             </p>
//             <p className="text-sm md:text-base">
//               <b>Phone:</b> 0422 2212342
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Support</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   FAQs
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-black transition-colors duration-300"
//                 >
//                   Terms & Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="text-center py-4 border-t border-gray-200 text-sm w-full mx-auto">
//         <p className="transition-colors duration-300 hover:text-black">
//           © {new Date().getFullYear()} Sample Company. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";
import EmailSubscribe from "@/components/subscribe-newsletter/email-subscribe";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div>
        <EmailSubscribe />
      </div>

      {/* Main Footer - Responsive Layout */}
      <div className="container mx-auto py-12 px-4 md:px-5 flex flex-col sm:flex-row bg-white text-gray-700">
        {/* Logo and Description */}
        <div className="w-full sm:w-auto text-center sm:text-left flex-shrink-0 sm:ml-20 ml-0 mb-6 sm:mb-0 sm:mr-20 mr-0">
          <Image
            src="/logo.svg"
            alt="Company Logo"
            height={220}
            width={220}
            className="mx-auto sm:mx-0 mt-0 sm:-mt-20"
          />
          <p className="mb-6 text-sm md:text-base max-w-xs transition-colors duration-300 hover:text-black mt-0 sm:-mt-20">
            Empowering industries with smart, scalable solutions since 2024,
            turning challenges into opportunities for growth.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Links Section - Centered on Mobile, Left-Aligned on Desktop */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 text-center sm:text-left w-full sm:w-auto sm:space-x-14 items-center sm:items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-black transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:text-black transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-black transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-black transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/retail"
                  className="hover:text-black transition-colors duration-300"
                >
                  Retail
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-black transition-colors duration-300"
                >
                  Smart OCR
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-black transition-colors duration-300"
                >
                  Manufacturing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="mb-4 text-sm md:text-base transition-colors duration-300 hover:text-black">
              <b>Address:</b> Coimbatore, India 641108
            </p>
            <p className="mb-4 text-sm md:text-base">
              <b>Email:</b>
              <a
                href="mailto:info@synecxailabs.io"
                className="text-gray-700 hover:text-black transition-colors duration-300 pl-1"
              >
                info@synecxailabs.io
              </a>
            </p>
            <p className="text-sm md:text-base">
              <b>Phone:</b> 0422 2212342
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-black transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-gray-200 text-sm w-full mx-auto">
        <p className="transition-colors duration-300 hover:text-black">
          © {new Date().getFullYear()} Sample Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
