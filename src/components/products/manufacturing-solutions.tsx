import { FaCog, FaChartLine, FaDatabase, FaMobileAlt, FaCloud, FaLock, FaIndustry } from 'react-icons/fa';
import Link from 'next/link';

// Sub-services data for ERP solutions
const manufacturingSubServices = [
  {
    title: "AI-Driven Manufacturing Solutions",
    description: 
      "Optimize production processes, reduce waste, and enhance operational efficiency with AI-powered manufacturing technologies.",
    icon: <FaIndustry className="text-4xl text-orange-500 mb-4" />,
    href: "/", // example route
  },
  
  
];
interface ServiceSubpageProps {
  setDropdownOpen?: (isOpen: boolean) => void;
}

const Manufacturing: React.FC<ServiceSubpageProps> = ({ setDropdownOpen }) => {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {manufacturingSubServices.map((service, index) => (
             <Link
             href="/manufacturing"
             key={index}
             onClick={() => {
               if (setDropdownOpen) setDropdownOpen(false);
             }}
             className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
           >
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

export default Manufacturing;
