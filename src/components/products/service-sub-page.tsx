  "use client";
  import React, { useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faChevronRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
  import Retail from "./retail-page";
  import Manufacturing from "./manufacturing-solutions";
  import Logostics from "./logistics-solutions";

  interface ServiceSubpageProps {
    setDropdownOpen?: (isOpen: boolean) => void;
  }

  const ServiceSubpage: React.FC<ServiceSubpageProps> = ({ setDropdownOpen }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [contentTitle, setContentTitle] = useState<string>("Retail Solutions");
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
    const sidebarItems = [
      { title: "Retail Solutions", component: Retail },
      { title: "Manufacturing Solutions", component: Manufacturing },
      { title: "Logistics Solutions", component: Logostics },
    ];
  
    const handleItemClick = (index: number, item: any) => {
      setActiveIndex(index);
      setContentTitle(item.title);
      setIsSidebarOpen(false); // Close the sidebar after selection in mobile view
    };
  
    const renderComponent = () => {
      const Component = sidebarItems[activeIndex].component;
      return <Component setDropdownOpen={setDropdownOpen} />;
    };
  
    return (
      <div className="flex flex-col lg:flex-row w-full h-auto md:h-[30rem] overflow-hidden">
        {/* Sidebar */}
        <div className="lg:w-64 w-full lg:p-4 p-2 bg-white border-r shadow-lg">
          <ul className="space-y-2 lg:space-y-4">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-between p-3 md:p-4 font-medium text-gray-900 rounded-md cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100"
                }`}
                onClick={() => handleItemClick(index, item)}
              >
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-white overflow-y-auto h-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
            {contentTitle}
          </h1>
          <div className="h-full">{renderComponent()}</div>
        </div>
      </div>
    );
  };
  
  export default ServiceSubpage;
  
