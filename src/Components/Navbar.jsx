// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      {/* Desktop view */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Navbar</div>
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 rounded-md text-black outline-purple-500"
          />
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-500 bg-opacity-90 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md text-black w-3/4"
          />
          <a href="#" className="text-white text-xl">
            Home
          </a>
          <a href="#" className="text-white text-xl">
            About
          </a>
          <a href="#" className="text-white text-xl">
            Services
          </a>
          <a href="#" className="text-white text-xl">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
