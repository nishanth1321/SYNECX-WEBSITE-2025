// "use client";

// import Image from "next/image";
// import {
//   FaArrowRight,
//   FaChartBar,
//   FaFileInvoice,
//   FaHeadphonesAlt,
//   FaRegMap,
//   FaStethoscope,
// } from "react-icons/fa";

// export default function Logistics() {
//   return (
//     <div className="bg-white py-16 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-24">
//       <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left space-y-6 sm:ml-24 ml-0">
//         <h2 className="text-red-500 text-lg font-semibold mb-2">
//         Seamless Data Capture with AI OCR!
//         </h2>
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
//           AI-OCR
//         </h1>
//         <p className="text-gray-600 text-base lg:text-lg text-justify ">
//         Our AI-powered OCR automatically extracts the tax invoices, prescriptions, and shipping labels 
//         seamlessly storing them in your system. Accelerate tax invoice, logistics operations, enhance healthcare operations, 
//         and streamline enterprise workflows with greater accuracy and efficiency.
//         </p>

//         <div className="space-y-6">
//         <div className="flex items-start">
//             <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
//               <FaFileInvoice />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 AI Tax Invoice
//               </h3>
//               <p className="text-gray-600 text-justify mt-8 sm:mt-4 -ml-12 sm:-ml-0">
//               Our Gen AI-powered intelligent agent automates invoice extraction, ensuring seamless, 
//               error-free integration—boosting efficiency without vendor lock-in integrating with existing SAP & ERP Solutions.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start">
//             <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
//               <FaChartBar />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Smart LogiX
//               </h3>
//               <p className="text-gray-600 text-justify mt-8 sm:mt-4 -ml-12 sm:-ml-0">
//               Our Gen AI-powered OCR solution extracts the shipping carrier lables key feilds like to/from
//                 addresses ,services, tracking numbers seamlessly. Speeding up your logistics, reducing errors, and
//                 improving efficiency.{" "}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
//               <FaStethoscope />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Health Care
//               </h3>
//               <p className="text-gray-600 text-justify mt-8 sm:mt-4 -ml-12 sm:-ml-0">
//               Our smart AI agent scans prescriptions, extracts key data and automates billing, 
//               ensuring real-time processing so healthcare staff can focus on patient, not 
//               paperwork.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 sm:mt-0 ml-0 sm:ml-12 space-y-4 sm:space-y-0 sm:space-x-4">
//             <span className="text-gray-600 font-semibold mt-0 sm:mt-2">
//               Enhance Your Workflow
//             </span>
//             <button className="bg-red-500 text-white py-2 px-4 w-32 rounded-md hover:bg-red-600 transition flex items-center justify-center space-x-2">
//               <span>Discover </span>
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className=" w-full lg:w-1/2 flex justify-center lg:justify-center mb-12 lg:mb-0 ml-0 sm:ml-20">
//          <div className="relative w-[280px] h-[200px] sm:w-[320px] sm:h-[550px] lg:w-[600px] lg:h-[500px] bg-green-200">
//                  <Image
//                    src="/blog1.svg"
//                    alt="Mobile App Preview"
//                    layout="fill"
//                    objectFit="cover"
//                    className="rounded-lg shadow-lg"
//                  />
//                </div>
//       </div>

      
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import {
  FaArrowRight,
  FaChartBar,
  FaFileInvoice,
  FaStethoscope,
} from "react-icons/fa";

export default function Logistics() {
  return (
    <div className="bg-white py-16 flex flex-col-reverse lg:flex-row items-center justify-center px-4 lg:px-24">
      {/* Right Side (Text Content) */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left space-y-6 sm:ml-24 ml-0">
        <h2 className="text-red-500 text-lg font-semibold mb-2">
          Seamless Data Capture with AI OCR!
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          AI-OCR
        </h1>
        <p className="text-gray-600 text-base lg:text-lg text-justify">
          Our AI-powered OCR automatically extracts the tax invoices,
          prescriptions, and shipping labels seamlessly storing them in your
          system. Accelerate tax invoice, logistics operations, enhance
          healthcare operations, and streamline enterprise workflows with
          greater accuracy and efficiency.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
              <FaFileInvoice />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                AI Tax Invoice
              </h3>
              <p className="text-gray-600 text-justify mt-8 sm:mt-4 -ml-12 sm:-ml-0">
                Our Gen AI-powered intelligent agent automates invoice
                extraction, ensuring seamless, error-free integration—boosting
                efficiency without vendor lock-in integrating with existing SAP
                & ERP Solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
              <FaChartBar />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Smart LogiX
              </h3>
              <p className="text-gray-600 text-justify mt-8 sm:mt-4 -ml-12 sm:-ml-0">
                Our Gen AI-powered OCR solution extracts the shipping carrier
                labels’ key fields like to/from addresses, services, tracking
                numbers seamlessly. Speeding up your logistics, reducing errors,
                and improving efficiency.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold mr-4">
              <FaStethoscope />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Health Care</h3>
              <p className="text-gray-600 text-justify mt-8 sm:mt-4 -ml-12 sm:-ml-0">
                Our smart AI agent scans prescriptions, extracts key data, and
                automates billing, ensuring real-time processing so healthcare
                staff can focus on patients, not paperwork.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 sm:mt-0 ml-0 sm:ml-12 space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-600 font-semibold">
              Enhance Your Workflow
            </span>
            <button className="bg-red-500 text-white py-2 px-4 w-32 rounded-md hover:bg-red-600 transition flex items-center justify-center space-x-2">
              <span>Discover</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Left Side (Image) - Appears on Top in Mobile View */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-center mb-12 lg:mb-0 ml-0 sm:ml-20">
        <div className="relative w-[280px] h-[200px] sm:w-[320px] sm:h-[550px] lg:w-[600px] lg:h-[500px] ">
          <Image
            src="/ailogo.png"
            alt="Mobile App Preview"
            layout="fill"
            objectFit="cover"
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
