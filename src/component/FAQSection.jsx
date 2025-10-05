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
          'NN Retreats is the hospitality brand of Permodalan NN Sdn Bhd, offering property management, interior design, consultancy, and short-term rental solutions across Malaysia.',
      },
      {
        id: 'gen-2',
        question: 'Are you a Bumiputera-owned company?',
        answer:
          'Yes, we are proudly 100% Bumiputera-owned, founded by two passionate Gen-Z entrepreneurs, Aima and Hezreen.',
      },
      {
        id: 'gen-3',
        question: 'Which areas in Malaysia do you operate?',
        answer:
          'We operate across Kuala Lumpur, Penang, Johor Bahru, Malacca, and other strategic cities in Malaysia.',
      },
      {
        id: 'gen-4',
        question: 'How can I get started with NN Retreats?',
        answer:
          'Getting started is easy! Contact us via website, call, or visit our office to schedule a consultation.',
      },
    ],
    'property-owners': [
      {
        id: 'po-1',
        question: 'How does your property management service work?',
        answer:
          'We manage guest communication, tenant screening, maintenance, marketing, and revenue optimization while you earn a share of the profits.',
      },
      {
        id: 'po-2',
        question: 'Short-term vs long-term rentals?',
        answer:
          'Short-term rentals offer higher income but require active management. Long-term rentals provide stable income with less turnover.',
      },
      {
        id: 'po-3',
        question: 'How do you determine rental pricing?',
        answer:
          'We use dynamic pricing strategies based on market demand, seasonality, local events, and competitor analysis.',
      },
      {
        id: 'po-4',
        question: 'What if there is damage to my property?',
        answer:
          'We have insurance, security deposits, regular inspections, and a dedicated maintenance team for repairs.',
      },
      {
        id: 'po-5',
        question: "Can I use my property while it&apos;s under management?",
        answer:
          'Yes! We can block dates for personal use with advance notice to ensure availability.',
      },
    ],
    guests: [
      {
        id: 'guest-1',
        question: 'How do I book a stay?',
        answer:
          'Book directly via our website, Airbnb, or Booking.com. Our team is available 24/7 for assistance.',
      },
      {
        id: 'guest-2',
        question: 'What amenities are included?',
        answer:
          'All properties have WiFi, fully equipped kitchens, premium linens, toiletries, cleaning, and smart home features.',
      },
      {
        id: 'guest-3',
        question: 'Cancellation policy?',
        answer:
          'Flexible cancellation options vary by property and platform, usually up to 24-48 hours before check-in.',
      },
      {
        id: 'guest-4',
        question: 'Do you offer long-term stays?',
        answer: 'Yes! Discounted rates for 28+ nights. Contact us for custom pricing.',
      },
    ],
    services: [
      {
        id: 'serv-1',
        question: 'What interior design services do you offer?',
        answer:
          'Turnkey design solutions for rental units, residences, commercial spaces, and offices, maximizing appeal and functionality.',
      },
      {
        id: 'serv-2',
        question: 'Property consultancy service?',
        answer:
          'End-to-end strategies including revenue management, multi-platform optimization, market analysis, and growth planning.',
      },
      {
        id: 'serv-3',
        question: 'Do you manage both residential and commercial properties?',
        answer:
          'Yes, we manage apartments, condos, landed houses, and commercial spaces with tailored strategies.',
      },
    ],
    billing: [
      {
        id: 'bill-1',
        question: 'What are your management fees?',
        answer:
          'Competitive and transparent, typically 15-25% of generated revenue depending on services.',
      },
      {
        id: 'bill-2',
        question: 'How and when will I receive payments?',
        answer:
          'Owners receive monthly statements; payments are processed 10-15 days after month-end.',
      },
      {
        id: 'bill-3',
        question: 'Any hidden costs?',
        answer:
          'No hidden costs. All fees are outlined in the management agreement; maintenance/utilities are approved separately.',
      },
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <div className="py-12 md:py-20 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Find quick answers to common questions about our services and processes.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-2"
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
              className={`flex items-center space-x-2 px-4 py-3 md:px-6 md:py-4 rounded-xl font-semibold transition-all duration-300 border text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-white text-black shadow-2xl border-white'
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
        <motion.div className="max-w-4xl mx-auto space-y-3 md:space-y-4 px-2 sm:px-0">
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
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-4 md:p-6 flex items-center justify-between"
                >
                  <h3 className="text-base md:text-lg font-semibold text-white">{item.question}</h3>
                  <motion.div
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
                </button>

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
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black mb-4">Still have questions?</h3>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Please reach out to our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300">
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