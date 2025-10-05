// pages/service-details/property-management.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const PropertyManagement = () => {
  const [activeTab, setActiveTab] = useState('short-term');

  const features = {
    'short-term': {
      title: 'Short-Term Rentals',
      subtitle: 'Maximize returns with fully managed Airbnb-style hosting',
      items: [
        {
          icon: '📸',
          title: 'Professional Photography',
          description: "High-quality photos that showcase your property's best features",
        },
        {
          icon: '💬',
          title: '24/7 Guest Communication',
          description: 'Instant response to guest inquiries and support requests',
        },
        {
          icon: '💰',
          title: 'Dynamic Pricing',
          description: 'AI-powered pricing optimization for maximum occupancy and revenue',
        },
        {
          icon: '🧹',
          title: 'Cleaning Coordination',
          description: 'Professional cleaning services between every guest stay',
        },
        {
          icon: '📊',
          title: 'Performance Analytics',
          description: 'Detailed reports on occupancy rates and revenue performance',
        },
        {
          icon: '🛡️',
          title: 'Damage Protection',
          description: 'Comprehensive insurance and security deposit management',
        },
      ],
    },
    'long-term': {
      title: 'Long-Term Rentals',
      subtitle: 'Hassle-free tenant management with consistent rental income',
      items: [
        {
          icon: '🔍',
          title: 'Tenant Screening',
          description: 'Comprehensive background and credit checks for reliable tenants',
        },
        {
          icon: '📝',
          title: 'Lease Management',
          description: 'Professional lease agreements and legal documentation',
        },
        {
          icon: '💳',
          title: 'Rent Collection',
          description: 'Automated rent collection with multiple payment options',
        },
        {
          icon: '⚡',
          title: 'Maintenance Coordination',
          description: '24/7 emergency repair services and scheduled maintenance',
        },
        {
          icon: '📈',
          title: 'Rent Optimization',
          description: 'Market analysis to ensure competitive rental pricing',
        },
        {
          icon: '⚖️',
          title: 'Legal Compliance',
          description: 'Stay updated with local rental laws and regulations',
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🏠</span>
                </div>
                <span className="text-gray-700 font-semibold">Property Management</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Stress-Free
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Property Ownership
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Enjoy the benefits of property ownership without the daily hassles. We handle
                everything from guest communication to revenue optimization while you earn passive
                income.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Managing My Property
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                    <div className="text-3xl mb-2">95%</div>
                    <div className="text-blue-100">Occupancy Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                    <div className="text-3xl mb-2">30%</div>
                    <div className="text-purple-100">Higher Revenue</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
                    <div className="text-3xl mb-2">24/7</div>
                    <div className="text-green-100">Support</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                    <div className="text-3xl mb-2">4.9★</div>
                    <div className="text-orange-100">Guest Rating</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform -rotate-2 scale-105"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-12">
          <div className="grid grid-cols-2 gap-2">
            {['short-term', 'long-term'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tab === 'short-term' ? 'Short-Term Rentals' : 'Long-Term Rentals'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{features[activeTab].title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{features[activeTab].subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features[activeTab].items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of property owners who are already enjoying stress-free property
            management and increased revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Free Property Analysis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;
