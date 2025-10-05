'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const slideInFromRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const Homepage = () => {
  const services = [
    {
      id: 1,
      title: 'Property Management',
      description:
        'Complete management solutions for residential and commercial properties. From guest communication to revenue optimization.',
      icon: '🏢',
      link: 'property-management',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
      serviceImage:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      features: ['Short-Term Rentals', 'Long-Term Rentals', 'Maintenance', 'Revenue Optimization'],
    },
    {
      id: 2,
      title: 'Interior Design',
      description:
        'Transform properties into inviting, market-ready spaces that attract guests and tenants.',
      icon: '🎨',
      link: 'interior-design',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      serviceImage:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      features: ['Residential Design', 'Commercial Spaces', 'Cost-Effective', 'High-Quality'],
    },
    {
      id: 3,
      title: 'Property Consultancy',
      description: 'Unlock the full earning potential of your property with expert strategies.',
      icon: '💼',
      link: 'property-consultancy',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      serviceImage:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
      features: [
        'Revenue Management',
        'Market Analysis',
        'Growth Strategies',
        'Listing Optimization',
      ],
    },
  ];

  const properties = [
    {
      id: 1,
      title: 'Luxury Apartments',
      type: 'APARTMENTS',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      description: 'Modern urban living with premium amenities',
    },
    {
      id: 2,
      title: 'Family Houses',
      type: 'HOUSES',
      image:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80',
      description: 'Spacious homes perfect for family living',
    },
    {
      id: 3,
      title: 'Vacation Villas',
      type: 'HOUSES',
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80',
      description: 'Luxury retreats for memorable getaways',
    },
  ];

  const stats = [
    { number: '500+', label: 'Properties Managed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Black & White Aesthetic */}
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
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

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-20"
            animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full opacity-30"
            animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full opacity-40"
            animate={{ y: [0, -15, 0], x: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-20 right-32 w-5 h-5 bg-white rounded-full opacity-25"
            animate={{ y: [0, -25, 0], x: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 lg:pt-20 pb-16 lg:pb-32">
          {/* Mobile: Image Grid First */}
          <div className="block max-lg:mt-11 lg:hidden mb-8">
            <motion.div
              className="relative"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden"
                    variants={slideInFromLeft}
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-full h-32 relative rounded-xl shadow-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80"
                        alt="Luxury Apartment"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden"
                    variants={slideInFromLeft}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  >
                    <div className="w-full h-32 relative rounded-xl shadow-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                        alt="Modern Interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                  </motion.div>
                </div>
                <div className="space-y-4 mt-8">
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden"
                    variants={slideInFromRight}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  >
                    <div className="w-full h-32 relative rounded-xl shadow-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80"
                        alt="Family House"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden"
                    variants={slideInFromRight}
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
                  >
                    <div className="w-full h-32 relative rounded-xl shadow-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
                        alt="Luxury Villa Interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile Floating Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl"
                variants={scaleIn}
                whileHover={{ scale: 1.1, rotate: 0 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  scale: { type: 'spring', stiffness: 300 },
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-xl font-black text-white mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                      delay: 1.5,
                    }}
                  >
                    15+
                  </motion.div>
                  <div className="text-xs text-gray-300">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content - Comes after image on mobile */}
            <motion.div
              className="space-y-6 lg:space-y-8 order-2 lg:order-1"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Badge/Tagline */}
                <motion.div
                  className="inline-block mt-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm tracking-wider shadow-2xl"
                  variants={fadeInUp}
                >
                  PREMIUM PROPERTY SOLUTIONS
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-black leading-tight sm:leading-none tracking-tight"
                  variants={fadeInUp}
                >
                  <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    APARTMENTS
                  </span>
                  <span className="block text-gray-500 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mt-1 sm:mt-2">
                    AND
                  </span>
                  <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                    HOUSES
                  </span>
                </motion.h1>
              </div>

              {/* Glass Description Card */}
              <motion.div
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl transform hover:scale-105 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p className="text-base lg:text-xl text-gray-300 leading-relaxed">
                  <strong>Property Owners:</strong> Earn more with our full-service property
                  management.
                  <strong> Travelers:</strong> Experience comfort and style in our curated spaces.
                  Join Malaysia&apos;s fastest-growing hospitality brand, proudly founded by Aima
                  and Hezreen.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6 lg:pt-8"
                variants={fadeInUp}
              >
                <motion.button
                  className="group relative bg-white text-black px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden text-sm lg:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">BROWSE PROPERTIES</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                <motion.button
                  className="group relative border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 overflow-hidden text-sm lg:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">LIST PROPERTY</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                className="flex items-center justify-between lg:justify-start lg:gap-8 pt-6 lg:pt-8"
                variants={fadeInUp}
              >
                {stats.slice(0, 3).map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="text-xl lg:text-2xl font-black text-white mb-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                        delay: index * 0.2 + 1,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Grid - Hidden on mobile (shown above) */}
            <motion.div
              className="relative hidden lg:block order-1 lg:order-2"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden"
                    variants={slideInFromLeft}
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-full h-48 relative rounded-2xl shadow-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80"
                        alt="Luxury Apartment"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden"
                    variants={slideInFromLeft}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  >
                    <div className="w-full h-48 relative rounded-2xl shadow-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                        alt="Modern Interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                  </motion.div>
                </div>
                <div className="space-y-6 mt-12">
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden"
                    variants={slideInFromRight}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  >
                    <div className="w-full h-48 relative rounded-2xl shadow-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80"
                        alt="Family House"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden"
                    variants={slideInFromRight}
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
                  >
                    <div className="w-full h-48 relative rounded-2xl shadow-2xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
                        alt="Luxury Villa Interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl"
                variants={scaleIn}
                whileHover={{ scale: 1.1, rotate: 0 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  scale: { type: 'spring', stiffness: 300 },
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-black text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                      delay: 1.5,
                    }}
                  >
                    15+
                  </motion.div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-500 text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="py-16 lg:py-20 bg-white border-t border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-3xl lg:text-4xl md:text-5xl font-black text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        id="services"
        className="py-16 lg:py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive property solutions tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-200"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                {/* Service Image */}
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image
                      src={service.serviceImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 400px) 100vw, 400px"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl text-2xl">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-5 lg:p-6">
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-3 lg:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 + index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-xs lg:text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href={`/${service.link}`}
                    className="inline-flex items-center font-bold text-gray-900 hover:text-black transition-colors duration-300 group-hover:translate-x-2 transition-transform duration-300 border-b-2 border-transparent hover:border-black pb-1 text-sm lg:text-base"
                  >
                    See Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Properties Showcase */}
      <motion.div
        id="properties"
        className="py-16 lg:py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of premium apartments and houses
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 lg:h-64 relative">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 400px) 100vw, 400px"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                    {property.type}
                  </div>
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">{property.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
