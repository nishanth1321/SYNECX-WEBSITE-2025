import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

interface ServiceItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface Producyone {
  setDropdownOpen?: (isOpen: boolean) => void;
}

const subServices: ServiceItem[] = [
  {
    title: "AI-Powered Self-Checkout",
    description:
      "Revolutionize the shopping experience with AI-driven self-checkout solutions that ensure speed, accuracy, and seamless transactions.",
    icon: (
      <FaShoppingCart className="text-4xl sm:text-4xl md:text-4xl text-green-600 mb-4" />
    ),
  },
];

const Retail: React.FC<Producyone> = ({ setDropdownOpen }) => {
  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center h-[15rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ">
          {subServices.map((service, index) => (
            <Link
              href="/retail"
              key={index}
              onClick={() => {
                if (setDropdownOpen) setDropdownOpen(false);
              }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300  transform hover:scale-105  h-[18rem]"
            >
              {service.icon}
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                {service.title}
              </h2>
              <p className="text-sm sm:text-md text-gray-700">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Retail;
