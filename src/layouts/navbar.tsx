"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaTimes, FaThumbsUp } from "react-icons/fa"; // Import FaThumbsUp icon
import { FiMenu } from "react-icons/fi";
import ServiceSubpage from "@/components/products/service-sub-page";

type DropdownState = {
  services: boolean;
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    services: false,
  });

  const [isContact, setisContact] = useState<boolean>(false); // State to handle subscribe button click

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen({ services: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen({ services: false });
  }, [pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleDropdown = (dropdown: keyof DropdownState) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const navItems = useMemo(
    () => [
      {
        label: "Products",
        component: (
          <div
            ref={dropdownRef}
            className="absolute left-0 md:left-40 transform md:-translate-x-1/2  w-full md:w-[80rem] h-auto md:h-[30rem] bg-white shadow-lg rounded-lg p-6 z-50 flex flex-col md:flex-row mt-10"
          >
            <ServiceSubpage
              setDropdownOpen={() => setDropdownOpen({ services: false })}
            />
          </div>
        ),
      },
    ],
    []
  );

  return (
    <nav className="bg-white/30 backdrop-blur-md fixed max-w-screen w-screen z-10 shadow-lg h-20 flex items-center gap-10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mx-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/sycenxlogo.png"
              alt="Logo"
              width={220}
              height={100}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/about-us"
              className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            {navItems.map((item, idx) => (
              <div key={idx} className="relative">
                <button
                  onClick={() =>
                    toggleDropdown(
                      item.label.toLowerCase() as keyof DropdownState
                    )
                  }
                  className="text-gray-600 text-sm font-bold hover:text-black transition duration-200 flex items-center"
                >
                  {item.label} <FaChevronDown className="ml-1" />
                </button>
                {dropdownOpen[
                  item.label.toLowerCase() as keyof DropdownState
                ] && item.component}
              </div>
            ))}

            <Link
              href="/event"
              className="text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            >
              Events
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            >
              Blogs
            </Link>
            <Link
              href="/career"
              className="text-gray-600 font-bold hover:text-black transition text-sm duration-200"
            >
              Career
            </Link>
            <Link
              href="/support"
              className="text-gray-600 font-bold hover:text-black transition text-sm duration-200"
            >
              Support
            </Link>
          </div>

          <Link href="/contact">
            <button
              className={`hidden md:flex px-4 py-2 border border-black rounded-lg shadow-lg transition duration-200 ${
                isContact ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <span className="mr-2">Contact Us</span>
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 font-bold focus:outline-none hover:text-black transition duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-20 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50`}
      >
        <div className="px-4 pt-4 pb-3 space-y-2">
          {/* Services with Dropdown */}
          <div className="block">
          <Link
            href="/about-us"
            className="block mb-2  text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
           About Us
          </Link>
            <button
              onClick={() => toggleDropdown("services")}
              className="text-gray-600 font-bold hover:text-black text-sm transition duration-200 flex justify-between w-full"
            >
              Products
              <FaChevronDown
                className={`ml-1 transition-transform ${
                  dropdownOpen.services ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen.services && (
              <div className="mt-2 space-y-2 pl-4">
                <Link
                  href="/"
                  className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Retail
                </Link>
                <Link
                  href="/"
                  className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Manufacturing
                </Link> <Link
                  href="/"
                  className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Logistics
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/"
            className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
           Events
          </Link>
          <Link
            href="/career"
            className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Career
          </Link>
          <Link
            href="/support"
            className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
          <Link href="/contact">
            <button
              className={`block w-full px-4 py-2 border border-black rounded-lg shadow-lg transition duration-200 mt-2 ${
                isContact ? "bg-white text-black" : "bg-black text-white"
              }`}
              onClick={() => setIsOpen(false)} // Close mobile menu on contact button click
            >
              <span className="mr-2">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
