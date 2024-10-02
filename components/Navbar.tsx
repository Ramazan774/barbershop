"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full py-6 flex justify-center font-sans z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      {/* Desktop Menu */}
      <div className="relative hidden merienda lg:flex items-center space-x-6 text-lg font-semibold">
        <Link href="/about" className="text-yellow-500 hover:bg-black hover:text-white rounded-lg px-3 py-2">
          About
        </Link>
        <Link href="/services" className="text-yellow-500 hover:bg-black hover:text-white rounded-lg px-3 py-2">
          Services
        </Link>
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.webp"
            alt="Company Logo"
            width={100}
            height={100}
            className="object-contain rounded-md"
          />
        </Link>
        <Link href="/work" className="text-yellow-500 hover:bg-black hover:text-white rounded-lg px-3 py-2">
          Our Work
        </Link>
        <Link href="/contact" className="text-yellow-500 hover:bg-black hover:text-white rounded-lg px-3 py-2">
          Contact
        </Link>
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden text-yellow-500 ml-auto mr-6"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-90 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/assets/logo.webp"
                alt="Company Logo"
                width={100}
                height={100}
                onClick={closeMenu} 
                className="object-contain rounded-md"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-yellow-500"
              onClick={closeMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="/about" onClick={closeMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-yellow-500 hover:bg-gray-800">About</Link>
                <Link href="/services" onClick={closeMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-yellow-500 hover:bg-gray-800">Services</Link>
                <Link href="/work" onClick={closeMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-yellow-500 hover:bg-gray-800">Our Work</Link>
                <Link href="/contact" onClick={closeMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-yellow-500 hover:bg-gray-800">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;