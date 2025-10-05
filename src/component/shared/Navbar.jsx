'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Navbar scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 Universal Scroll Function
  const scrollToSection = (sectionId) => {
    setMenuOpen(false);

    if (pathname !== '/') {
      router.push(`/?scroll=${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', type: 'link', path: '/' },
    { name: 'Properties', type: 'scroll', id: 'properties' },
    { name: 'Services', type: 'scroll', id: 'services' },
    { name: 'About', type: 'link', path: '/about' },
    { name: 'Contact', type: 'link', path: '/contact-support' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-black/5'
          : 'bg-white/80 backdrop-blur-sm border-b border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-12 h-12 bg-black text-white font-bold text-2xl rounded-2xl flex items-center justify-center shadow-md group-hover:bg-gray-800 transition-all duration-300">
            NN
          </div>
          <div>
            <h1 className="text-black text-xl font-extrabold tracking-wide group-hover:text-gray-700 transition-colors">
              NN RETREATS
            </h1>
            <p className="text-gray-500 text-xs tracking-wide">Property Management</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) =>
            link.type === 'scroll' ? (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-black font-medium transition-colors duration-300"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-black font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Contact Button */}
        <Link href="/contact-support">
          <div className="hidden md:flex">
            <button className="px-5 py-2 bg-black text-white font-semibold rounded-xl border border-transparent hover:bg-white hover:border-black hover:text-black transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center space-y-1"
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-black/10 shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) =>
              link.type === 'scroll' ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-black text-lg font-medium transition-colors duration-300"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-black text-lg font-medium transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            )}

            <Link href="/contact-support">
              <button className="px-5 py-2 bg-black text-white font-semibold rounded-xl hover:bg-transparent hover:text-black hover:border border-black transition-all duration-300">
                Get in Touch
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
