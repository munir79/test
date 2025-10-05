// components/FAQSection.js
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqCategories = [
    { id: 'general', name: 'General', icon: '💬' },
    { id: 'property-owners', name: 'Property Owners', icon: '🏠' },
    { id: 'guests', name: 'Guests', icon: '👨‍👩‍👧‍👦' },
    { id: 'services', name: 'Our Services', icon: '🎯' },
    { id: 'billing', name: 'Billing', icon: '💰' },
  ];

  const faqData = {
    general: [
      {
        id: 'gen-1',
        question: 'What is NN Retreats and what services do you offer?',
        answer:
          'NN Retreats is the hospitality brand of Permodalan NN Sdn Bhd, offering comprehensive property and hospitality solutions. We provide property management, interior design services, property consultancy, and short-term rental management across Malaysia.',
      },
      {
        id: 'gen-2',
        question: 'Are you a Bumiputera-owned company?',
        answer:
          'Yes, we are proudly 100% Bumiputera-owned, founded by two passionate Gen-Z entrepreneurs, Aima and Hezreen, who are redefining the property and hosting experience in Malaysia.',
      },
      {
        id: 'gen-3',
        question: 'Which areas in Malaysia do you currently operate in?',
        answer:
          'We are rapidly expanding across Kuala Lumpur and now extending to strategic cities throughout Malaysia, including Penang, Johor Bahru, and Malacca.',
      },
      {
        id: 'gen-4',
        question: 'How can I get started with NN Retreats?',
        answer:
          "Getting started is easy! You can contact us through our website, call us directly, or visit our office. We'll schedule a consultation to understand your needs and provide tailored solutions.",
      },
    ],
    'property-owners': [
      {
        id: 'po-1',
        question: 'How does your property management service work?',
        answer:
          'We handle everything from guest communication and tenant screening to maintenance and revenue optimization. As an owner, you earn a share of the profits while we manage all day-to-day operations, including marketing, cleaning, and 24/7 guest support.',
      },
      {
        id: 'po-2',
        question: 'What are the benefits of short-term vs long-term rentals?',
        answer:
          'Short-term rentals typically generate higher income potential but require more active management. Long-term rentals provide stable, consistent income with less turnover. We analyze your property and market to recommend the best strategy for maximum returns.',
      },
      {
        id: 'po-3',
        question: 'How do you determine rental pricing for my property?',
        answer:
          'We use dynamic pricing strategies based on market demand, seasonality, local events, and competitor analysis. Our revenue management system optimizes pricing to maximize your occupancy and income throughout the year.',
      },
      {
        id: 'po-4',
        question: 'What happens if there is damage to my property?',
        answer:
          'We have comprehensive insurance coverage and security deposits in place. Our team conducts regular inspections and immediately addresses any issues. We also have a dedicated maintenance team for quick repairs.',
      },
      {
        id: 'po-5',
        question: "Can I use my property while it's under management?",
        answer:
          "Absolutely! We can block out dates for your personal use. Just give us advance notice, and we'll ensure the property is available and prepared for your stay.",
      },
    ],
    guests: [
      {
        id: 'guest-1',
        question: 'How do I book a stay with NN Retreats?',
        answer:
          'You can book directly through our website, or through platforms like Airbnb and Booking.com. Our booking process is simple, and our team is available 24/7 to assist with any questions.',
      },
      {
        id: 'guest-2',
        question: 'What amenities are included in your properties?',
        answer:
          'All our properties include high-speed WiFi, fully equipped kitchens, premium linens, toiletries, and cleaning services. Many properties also feature smart home technology, workspaces, and unique local touches.',
      },
      {
        id: 'guest-3',
        question: 'What is your cancellation policy?',
        answer:
          'Our cancellation policy varies by property and booking platform. Generally, we offer flexible cancellation options up to 24-48 hours before check-in. Specific details are provided during the booking process.',
      },
      {
        id: 'guest-4',
        question: 'Do you offer long-term stays?',
        answer:
          'Yes! We offer discounted rates for stays of 28 nights or longer. Contact us directly for long-term stay inquiries and custom pricing.',
      },
    ],
    services: [
      {
        id: 'serv-1',
        question: 'What interior design services do you offer?',
        answer:
          'We offer turnkey design solutions for rental units, residences, commercial spaces, trade areas, malls, and offices. Our focus is on cost-effective, high-quality designs that maximize appeal and functionality.',
      },
      {
        id: 'serv-2',
        question: 'How does your property consultancy service work?',
        answer:
          "Our consultancy team provides end-to-end strategies including revenue management, multi-platform listing optimization, market analysis, and growth planning to maximize your property's earning potential.",
      },
      {
        id: 'serv-3',
        question: 'Do you manage both residential and commercial properties?',
        answer:
          'Yes, we manage various property types including apartments, condos, landed houses, and commercial spaces. Each property type receives tailored management strategies.',
      },
    ],
    billing: [
      {
        id: 'bill-1',
        question: 'What are your management fees?',
        answer:
          'Our fees are competitive and transparent, typically ranging from 15-25% of generated revenue depending on the services required. We offer customized packages to suit different property types and owner needs.',
      },
      {
        id: 'bill-2',
        question: 'How and when will I receive payments?',
        answer:
          'Owners receive detailed monthly statements and payments are processed within 10-15 days after the end of each month. We provide transparent reporting of all income and expenses.',
      },
      {
        id: 'bill-3',
        question: 'Are there any hidden costs?',
        answer:
          'No hidden costs. All fees are clearly outlined in our management agreement. Additional costs like maintenance and utilities are separately itemized and require owner approval.',
      },
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="py-12 md:py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(30deg,_transparent_49%,_white_50%,_transparent_51%)] bg-[length:50px_50px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(60deg,_transparent_49%,_white_50%,_transparent_51%)] bg-[length:30px_30px]"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(white_1px,_transparent_1px),_linear-gradient(90deg,_white_1px,_transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-white font-semibold text-sm">FAQ</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Find quick answers to common questions about our services and processes.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 px-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variants={categoryVariants}
              className={`flex items-center space-x-2 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 border text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-white text-black shadow-2xl transform -translate-y-1 border-white'
                  : 'bg-white/10 backdrop-blur-lg text-white border-white/20 hover:bg-white/15 hover:border-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg md:text-xl">{category.icon}</span>
              <span className="whitespace-nowrap">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-4xl mx-auto space-y-3 md:space-y-4 px-2 sm:px-0"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {faqData[activeCategory]?.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30"
              >
                <motion.button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-4 md:p-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-white/30">
                      <span className="text-white text-xs md:text-sm font-bold">?</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    className={`transform transition-transform duration-300 ${
                      openItems[item.id] ? 'rotate-180' : ''
                    }`}
                    animate={{ rotate: openItems[item.id] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openItems[item.id] && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={faqItemVariants}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6 pt-0 border-t border-white/20">
                        <div className="pl-0 md:pl-12">
                          <motion.p
                            className="text-gray-300 leading-relaxed text-sm md:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.answer}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-12 text-white max-w-4xl mx-auto">
            <motion.h3
              className="text-xl md:text-2xl font-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Still have questions?
            </motion.h3>
            <motion.p
              className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                variants={itemVariants}
                className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                variants={itemVariants}
                className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
