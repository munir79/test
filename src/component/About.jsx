// pages/about.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const About = () => {
  const [activeFounder, setActiveFounder] = useState(0);

  const founders = [
    {
      name: 'Aima',
      role: 'Co-Founder',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=500&q=80',
      bio: 'Visionary entrepreneur with a passion for creating exceptional hospitality experiences. Aima brings creative direction and strategic growth to NN Retreats.',
      traits: ['Creative Vision', 'Strategic Planning', 'Brand Development'],
      quote:
        "We're not just managing properties; we're creating memories and building communities.",
    },
    {
      name: 'Hezreen',
      role: 'Co-Founder',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      bio: 'Tech-savvy innovator driving operational excellence and digital transformation. Hezreen ensures seamless experiences for both property owners and guests.',
      traits: ['Operations Expert', 'Tech Innovation', 'Business Development'],
      quote:
        'Our mission is to bridge the gap between property ownership and exceptional hospitality through innovation.',
    },
  ];

  const milestones = [
    {
      year: '2023',
      event: 'NN Retreats Founded',
      description: 'Launched with first property in Kuala Lumpur',
    },
    {
      year: '2024',
      event: 'Portfolio Expansion',
      description: 'Expanded to 50+ properties across Malaysia',
    },
    {
      year: '2025',
      event: 'Nationwide Presence',
      description: 'Strategic expansion to major cities in Malaysia',
    },
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Leveraging technology to revolutionize the hospitality experience',
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'Driven by genuine love for creating memorable stays',
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Building connections between property owners and travelers',
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'Committed to sustainable expansion and local empowerment',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Navigation */}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🌟</span>
                </div>
                <span className="text-gray-700 font-semibold">100% Bumiputera-Owned</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Redefining
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hospitality
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                NN Retreats is the hospitality brand of Permodalan NN Sdn Bhd, rapidly expanding
                across Kuala Lumpur and now extending to strategic cities throughout Malaysia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join Our Journey
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-300">
                  View Properties
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
                      alt="Luxury Property"
                      className="w-full h-32 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-gray-800">Luxury Stays</h3>
                  </div>
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 delay-100">
                    <img
                      src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&q=80"
                      alt="City View"
                      className="w-full h-32 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-gray-800">City Centers</h3>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 delay-200">
                    <img
                      src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=400&q=80"
                      alt="Modern Interior"
                      className="w-full h-32 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-gray-800">Modern Design</h3>
                  </div>
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500 delay-300">
                    <img
                      src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80"
                      alt="Hospitality"
                      className="w-full h-32 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-gray-800">Premium Service</h3>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Gen-Z Founders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate young entrepreneurs reshaping Malaysia's hospitality landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Founder Navigation */}
          <div className="space-y-6">
            {founders.map((founder, index) => (
              <button
                key={index}
                onClick={() => setActiveFounder(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${
                  activeFounder === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl transform -translate-y-2'
                    : 'bg-white text-gray-800 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      activeFounder === index ? 'bg-white/20' : 'bg-purple-100'
                    }`}
                  >
                    <span
                      className={activeFounder === index ? 'text-2xl' : 'text-2xl text-purple-600'}
                    >
                      {founder.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                    <p className={activeFounder === index ? 'text-purple-100' : 'text-gray-600'}>
                      {founder.role}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Founder Details */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center space-x-6 mb-6">
              <img
                src={founders[activeFounder].image}
                alt={founders[activeFounder].name}
                className="w-20 h-20 rounded-2xl object-cover"
              />
              <div>
                <h3 className="text-3xl font-bold text-gray-800">{founders[activeFounder].name}</h3>
                <p className="text-purple-600 font-semibold">{founders[activeFounder].role}</p>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {founders[activeFounder].bio}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Key Strengths:</h4>
              <div className="flex flex-wrap gap-2">
                {founders[activeFounder].traits.map((trait, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
              <p className="text-gray-700 italic text-lg">"{founders[activeFounder].quote}"</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-purple-100 leading-relaxed max-w-4xl mx-auto">
            To create exceptional hospitality experiences that connect property owners with
            travelers, while empowering local communities and driving innovation in Malaysia's
            property sector.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at NN Retreats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup to nationwide presence - our growth story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Empty space for alignment */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the NN Retreats Journey</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Whether you're a property owner ready to list with us, or a traveler looking for a
            welcoming stay, we invite you to be part of our story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              List Your Property
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-10 w-6 h-6 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="fixed bottom-1/3 right-10 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
      <div className="fixed top-1/2 left-20 w-4 h-4 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
};

export default About;
