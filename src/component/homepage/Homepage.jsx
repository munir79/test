'use client';
import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  const services = [
    {
      id: 1,
      title: 'Property Management',
      description: 'Complete management solutions for residential and commercial properties.',
      icon: '🏠',
      link: 'property-management',
    },
    {
      id: 2,
      title: 'Interior Design & Makeovers',
      description:
        'Transform properties into inviting, market-ready spaces that attract guests and tenants.',
      icon: '🎨',
      link: 'interior-design',
    },
    {
      id: 3,
      title: 'Property Consultancy',
      description: 'Unlock the full earning potential of your property with expert strategies.',
      icon: '💼',
      link: 'property-consultancy',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[600px] md:h-[700px] bg-cover bg-center flex flex-col justify-center items-start px-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <span className="text-blue-600 text-xl mb-2 font-semibold">Premium Properties</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Find Your Perfect <br /> Dream Home
        </h1>
        <p className="text-white mb-6 max-w-lg">
          Discover exceptional properties, professional management services, and seamless rental
          experiences.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
            Browse Properties
          </button>
          <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition duration-300">
            List Your Property
          </button>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Properties Managed</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Tenant Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We provide a full suite of property and hospitality solutions designed to meet the needs
            of property owners, investors, and travellers alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={service.link}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer group">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl group-hover:text-white">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of your existing sections... */}
    </div>
  );
};

export default Homepage;
