'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">NN</span>
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">NN RETREATS</h3>
                <p className="text-gray-400 text-sm">Property Management</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Providing exceptional property management, design, and consultancy services across
              Malaysia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'Properties', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                'Property Management',
                'Interior Design',
                'Property Consultancy',
                'Revenue Optimization',
              ].map((service) => (
                <li key={service} className="hover:text-white transition-all duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Email
                </span>
                contact@nnretreats.com
              </li>
              <li>
                <span className="block text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Phone
                </span>
                +60 12-345 6789
              </li>
              <li>
                <span className="block text-gray-500 text-sm uppercase tracking-wider mb-1">
                  Office
                </span>
                Kuala Lumpur, Malaysia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          {/* Social Icons */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {['facebook', 'instagram', 'linkedin', 'twitter'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition-all duration-300"
              >
                <i className={`ri-${platform}-fill text-xl`}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NN Retreats. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Line Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <style jsx>{`
        @import url('https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css');
      `}</style>
    </footer>
  );
};

export default Footer;
