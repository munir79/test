// pages/service-details/interior-design.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const EntDesign = () => {
  const [activeCategory, setActiveCategory] = useState('residential');

  const categories = {
    residential: {
      title: 'Residential Design',
      projects: [
        {
          image:
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
          title: 'Modern Apartment Makeover',
          description: 'Complete transformation of a 2BHK apartment',
        },
        {
          image:
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
          title: 'Luxury Villa Interior',
          description: 'Premium interior design for luxury living',
        },
        {
          image:
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
          title: 'Studio Apartment Optimization',
          description: 'Smart space utilization for compact living',
        },
      ],
    },
    commercial: {
      title: 'Commercial Design',
      projects: [
        {
          image:
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
          title: 'Corporate Office Space',
          description: 'Productivity-focused office design',
        },
        {
          image:
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
          title: 'Retail Store Design',
          description: 'Customer-engaging retail environment',
        },
        {
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
          title: 'Co-working Space',
          description: 'Collaborative and flexible workspace design',
        },
      ],
    },
  };

  const processSteps = [
    {
      number: '01',
      title: 'Consultation & Vision',
      description: 'We understand your needs, budget, and design preferences',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Create mood boards and 3D visualizations of your space',
    },
    {
      number: '03',
      title: 'Design Execution',
      description: 'Source materials and coordinate with trusted contractors',
    },
    {
      number: '04',
      title: 'Final Reveal',
      description: 'Transform your space into your dream environment',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      {/* Navigation */}
      {/* <nav className="bg-white/80 backdrop-blur-lg border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">PrimeProperties</span>
            </Link>
            <Link
              href="/#services"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300"
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-200">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🎨</span>
                </div>
                <span className="text-gray-700 font-semibold">Interior Design & Makeovers</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Transform
                <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Your Space
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                We transform properties into inviting, market-ready spaces that attract both guests
                and tenants. From residential makeovers to commercial designs, we create
                environments that inspire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Book Design Consultation
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80"
                      alt="Modern Design"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-gray-800">Modern Living</h3>
                  </div>
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 delay-100">
                    <img
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80"
                      alt="Office Design"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-gray-800">Office Spaces</h3>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 delay-200">
                    <img
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80"
                      alt="Luxury Design"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-gray-800">Luxury Interiors</h3>
                  </div>
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500 delay-300">
                    <img
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80"
                      alt="Retail Design"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-gray-800">Retail Design</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Design Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A seamless journey from concept to completion, ensuring your vision comes to life
            perfectly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transform translate-x-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {categories[category].title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's create a space that reflects your style and meets your needs perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Design Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntDesign;
