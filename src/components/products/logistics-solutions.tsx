import { FaCog, FaTruck } from 'react-icons/fa';
import Link from 'next/link';

// Sub-services data for Enterprise Solutions
const logisticsSubServices = [
  {
    title: "AI-Powered Logistics Management",
    description: 
      "Transform your supply chain with intelligent logistics solutions that optimize routes, reduce costs, and enhance delivery efficiency.",
    icon: <FaTruck className="text-4xl text-teal-500 mb-4" />,
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
