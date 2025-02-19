"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaTimes, FaThumbsUp } from "react-icons/fa"; // Import FaThumbsUp icon
import { FiMenu } from "react-icons/fi";

type DropdownState = {
  services: boolean;
};

export default function RetailNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    services: false,
  });
  const handleScrollToServices = () => {
    const targetDiv = document.getElementById("services");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the div
    }


  };

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

  return (
    <nav className="bg-white/30 backdrop-blur-md fixed max-w-screen w-screen z-10 shadow-lg h-20 flex items-center gap-10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mx-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={250}
              height={100}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/retail"
              className="text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/retail/features"
              className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>

            <Link
              href="/retail#services"
              onClick={handleScrollToServices}
              className="text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            >
              Industries
            </Link>
            <Link
              href="/retail/case-Study"
              className="text-gray-600 font-bold hover:text-black transition text-sm duration-200"
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 font-bold hover:text-black transition text-sm duration-200"
            >
              contact
            </Link>
          </div>

          <Link href="/contact#demo">
            <button className="bg-black text-white h-10 w-28 rounded-md p-1 hidden sm:block">
              <span className="mr-2">Try Demo</span>
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
            href="/"
            className="block text-gray-600 mb-2 font-bold hover:text-black text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
            <Link
              href="/retail/features"
              className="block mb-2  text-gray-600 font-bold hover:text-black text-sm transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
          </div>

          <Link
            href="/"
            className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Case Studies
          </Link>
          
          <Link
            href="/contact"
            className="block text-gray-600 font-bold hover:text-black text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            contact
          </Link>
          <Link href="/contact#demo">
            <button
              className={`block w-full px-4 py-2 border border-black rounded-lg shadow-lg transition duration-200 mt-2 $`}
              onClick={() => setIsOpen(false)} // Close mobile menu on contact button click
            >
              <span className="mr-2">Demo Now</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
