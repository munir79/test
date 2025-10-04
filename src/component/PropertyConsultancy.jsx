// pages/service-details/property-consultancy.js
'use client';
import React from 'react';
import Link from 'next/link';

const PropertyConsultancy = () => {
  const services = [
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'Comprehensive market research and competitive analysis',
      features: [
        'Demand forecasting',
        'Competitor analysis',
        'Pricing strategies',
        'Market trends',
      ],
    },
    {
      icon: '💡',
      title: 'Investment Strategy',
      description: 'Data-driven investment recommendations and portfolio optimization',
      features: ['ROI analysis', 'Risk assessment', 'Portfolio diversification', 'Exit strategies'],
    },
    {
      icon: '🚀',
      title: 'Revenue Optimization',
      description: "Maximize your property's earning potential across all platforms",
      features: [
        'Multi-platform listing',
        'Dynamic pricing',
        'Occupancy optimization',
        'Revenue forecasting',
      ],
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: 'Protect your investments with comprehensive risk assessment',
      features: [
        'Legal compliance',
        'Insurance optimization',
        'Market volatility',
        'Contingency planning',
      ],
    },
  ];

  const caseStudies = [
    {
      metric: '45%',
      description: 'Revenue increase for downtown apartment complex',
      duration: '6 months',
    },
    {
      metric: '92%',
      description: 'Occupancy rate achieved for luxury villa portfolio',
      duration: '1 year',
    },
    {
      metric: '3.2x',
      description: 'ROI improvement for commercial property investment',
      duration: '2 years',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Navigation */}
      {/* <nav className="bg-white/80 backdrop-blur-lg border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">PrimeProperties</span>
            </Link>
            <Link href="/#services" className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
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
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💼</span>
                </div>
                <span className="text-gray-700 font-semibold">Property Consultancy</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Unlock Your
                <span className="block bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                  Property's Potential
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Our consultancy team helps you unlock the full earning potential of your property.
                From revenue management strategies to multi-platform optimization, we ensure your
                property stands out in a competitive market.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-green-500 hover:text-green-600 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  {caseStudies.map((study, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                        <span className="text-white text-xl font-bold">{study.metric}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{study.description}</p>
                        <p className="text-sm text-gray-600">{study.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl transform -rotate-1 scale-105 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Expert Consultancy Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to maximize your property investments and ensure long-term
            success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-2xl text-white">{service.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Data-Driven Approach</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine market intelligence with cutting-edge technology to deliver actionable
                insights that drive real results for your property investments.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time market data analysis',
                  'AI-powered predictive modeling',
                  'Competitive benchmarking',
                  'Customized strategy development',
                  'Continuous performance monitoring',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Consultancy?</h3>
              <div className="space-y-4">
                {[
                  { stat: '15+', label: 'Years Industry Experience' },
                  { stat: '500+', label: 'Properties Optimized' },
                  { stat: '98%', label: 'Client Satisfaction Rate' },
                  { stat: '45%', label: 'Average Revenue Increase' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-green-400/30 last:border-b-0"
                  >
                    <span className="text-green-100">{item.label}</span>
                    <span className="text-2xl font-bold">{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Maximize Your Returns?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let our experts analyze your property and create a customized strategy for maximum
            profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Schedule Strategy Session
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyConsultancy;
