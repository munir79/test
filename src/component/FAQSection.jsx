// components/FAQSection.js
'use client';
import React, { useState } from 'react';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    { id: 'general', name: 'General', icon: '💬', color: 'from-blue-500 to-cyan-500' },
    { id: 'property-owners', name: 'Property Owners', icon: '🏠', color: 'from-green-500 to-emerald-500' },
    { id: 'guests', name: 'Guests', icon: '👨‍👩‍👧‍👦', color: 'from-purple-500 to-pink-500' },
    { id: 'services', name: 'Our Services', icon: '🎯', color: 'from-orange-500 to-red-500' },
    { id: 'billing', name: 'Billing', icon: '💰', color: 'from-teal-500 to-blue-500' }
  ];

  const faqData = {
    general: [
      {
        id: 'gen-1',
        question: 'What is NN Retreats and what services do you offer?',
        answer: 'NN Retreats is the hospitality brand of Permodalan NN Sdn Bhd, offering comprehensive property and hospitality solutions. We provide property management, interior design services, property consultancy, and short-term rental management across Malaysia.'
      },
      {
        id: 'gen-2',
        question: 'Are you a Bumiputera-owned company?',
        answer: 'Yes, we are proudly 100% Bumiputera-owned, founded by two passionate Gen-Z entrepreneurs, Aima and Hezreen, who are redefining the property and hosting experience in Malaysia.'
      },
      {
        id: 'gen-3',
        question: 'Which areas in Malaysia do you currently operate in?',
        answer: 'We are rapidly expanding across Kuala Lumpur and now extending to strategic cities throughout Malaysia, including Penang, Johor Bahru, and Malacca.'
      },
      {
        id: 'gen-4',
        question: 'How can I get started with NN Retreats?',
        answer: 'Getting started is easy! You can contact us through our website, call us directly, or visit our office. We\'ll schedule a consultation to understand your needs and provide tailored solutions.'
      }
    ],
    'property-owners': [
      {
        id: 'po-1',
        question: 'How does your property management service work?',
        answer: 'We handle everything from guest communication and tenant screening to maintenance and revenue optimization. As an owner, you earn a share of the profits while we manage all day-to-day operations, including marketing, cleaning, and 24/7 guest support.'
      },
      {
        id: 'po-2',
        question: 'What are the benefits of short-term vs long-term rentals?',
        answer: 'Short-term rentals typically generate higher income potential but require more active management. Long-term rentals provide stable, consistent income with less turnover. We analyze your property and market to recommend the best strategy for maximum returns.'
      },
      {
        id: 'po-3',
        question: 'How do you determine rental pricing for my property?',
        answer: 'We use dynamic pricing strategies based on market demand, seasonality, local events, and competitor analysis. Our revenue management system optimizes pricing to maximize your occupancy and income throughout the year.'
      },
      {
        id: 'po-4',
        question: 'What happens if there is damage to my property?',
        answer: 'We have comprehensive insurance coverage and security deposits in place. Our team conducts regular inspections and immediately addresses any issues. We also have a dedicated maintenance team for quick repairs.'
      },
      {
        id: 'po-5',
        question: 'Can I use my property while it\'s under management?',
        answer: 'Absolutely! We can block out dates for your personal use. Just give us advance notice, and we\'ll ensure the property is available and prepared for your stay.'
      }
    ],
    guests: [
      {
        id: 'guest-1',
        question: 'How do I book a stay with NN Retreats?',
        answer: 'You can book directly through our website, or through platforms like Airbnb and Booking.com. Our booking process is simple, and our team is available 24/7 to assist with any questions.'
      },
      {
        id: 'guest-2',
        question: 'What amenities are included in your properties?',
        answer: 'All our properties include high-speed WiFi, fully equipped kitchens, premium linens, toiletries, and cleaning services. Many properties also feature smart home technology, workspaces, and unique local touches.'
      },
      {
        id: 'guest-3',
        question: 'What is your cancellation policy?',
        answer: 'Our cancellation policy varies by property and booking platform. Generally, we offer flexible cancellation options up to 24-48 hours before check-in. Specific details are provided during the booking process.'
      },
      {
        id: 'guest-4',
        question: 'Do you offer long-term stays?',
        answer: 'Yes! We offer discounted rates for stays of 28 nights or longer. Contact us directly for long-term stay inquiries and custom pricing.'
      }
    ],
    services: [
      {
        id: 'serv-1',
        question: 'What interior design services do you offer?',
        answer: 'We offer turnkey design solutions for rental units, residences, commercial spaces, trade areas, malls, and offices. Our focus is on cost-effective, high-quality designs that maximize appeal and functionality.'
      },
      {
        id: 'serv-2',
        question: 'How does your property consultancy service work?',
        answer: 'Our consultancy team provides end-to-end strategies including revenue management, multi-platform listing optimization, market analysis, and growth planning to maximize your property\'s earning potential.'
      },
      {
        id: 'serv-3',
        question: 'Do you manage both residential and commercial properties?',
        answer: 'Yes, we manage various property types including apartments, condos, landed houses, and commercial spaces. Each property type receives tailored management strategies.'
      }
    ],
    billing: [
      {
        id: 'bill-1',
        question: 'What are your management fees?',
        answer: 'Our fees are competitive and transparent, typically ranging from 15-25% of generated revenue depending on the services required. We offer customized packages to suit different property types and owner needs.'
      },
      {
        id: 'bill-2',
        question: 'How and when will I receive payments?',
        answer: 'Owners receive detailed monthly statements and payments are processed within 10-15 days after the end of each month. We provide transparent reporting of all income and expenses.'
      },
      {
        id: 'bill-3',
        question: 'Are there any hidden costs?',
        answer: 'No hidden costs. All fees are clearly outlined in our management agreement. Additional costs like maintenance and utilities are separately itemized and require owner approval.'
      }
    ]
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-blue-600 font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and processes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl transform -translate-y-1`
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData[activeCategory]?.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className={`transform transition-transform duration-300 ${
                  openItems[item.id] ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${
                openItems[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="pl-12">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;