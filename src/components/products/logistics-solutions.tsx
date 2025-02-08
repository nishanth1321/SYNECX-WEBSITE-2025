import {  FaStackExchange, FaTruck } from 'react-icons/fa';
import { FaUserDoctor } from "react-icons/fa6";
import Link from 'next/link';

// Sub-services data for Enterprise Solutions
const logisticsSubServices = [
  {
    title: "AI-Powered Tax Invoice",
    description: 
      "Our smart Tax Invoice agent captures invoice details, contracts, and receipts, reducing errors and effortlessly syncing data into ERP, SAP, or custom systems. ",
    icon: <FaStackExchange className="text-4xl text-teal-500 mb-4" />,
    href: "/", // example route
  },
  {
    title: "Smart Logicx",
    description: 
      "Our Logicx solution automates data entry by scanning and extracting barcodes, addresses, and tracking details, ensuring faster processing and quicker deliveries.",
    icon: <FaTruck className="text-4xl text-teal-500 mb-4" />,
    href: "/", // example route
  },
  {
    title: "HealthCare",
    description: 
      "Our HealthCare agent scans prescriptions, intelligently extracting medicines, dosages, and patient details, eliminating manual entry and streamlining medication dispensing.",
    icon: <FaUserDoctor  className="text-4xl text-teal-500 mb-4" />,
    href: "/", // example route
  },
  
  
];
interface ServiceSubpageProps {
  setDropdownOpen?: (isOpen: boolean) => void;
}

const Logostics:React.FC<ServiceSubpageProps> = ({ setDropdownOpen }) => {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {logisticsSubServices.map((service, index) => (
            <Link href={service.href} key={index}
            onClick={() => setDropdownOpen && setDropdownOpen(false)}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:bg-blue-50 hover:shadow-xl">
              {service.icon}
              <h2 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logostics;
