// components/Navbar.js
'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  //   const [isScrolled, setIsScrolled] = useState(false);
  //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setIsScrolled(window.scrollY > 50);
  //     };
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">NN Retreats</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                Our Story
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
