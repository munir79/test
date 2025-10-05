'use client';
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const features = [
    {
      icon: '🌍',
      title: 'Nationwide Presence',
      description: 'Serving major oil & gas hubs across Malaysia.',
    },
    {
      icon: '✅',
      title: 'Quality Assured',
      description: 'Products and services that meet global standards.',
    },
    {
      icon: '👥',
      title: 'Trusted Expertise',
      description: 'Decades of experience in Oil & Gas and Marine supply.',
    },
  ];

  const aboutData = {
    title: 'About Us',
    description:
      'Lagenda Muda Sdn Bhd is a Malaysia-incorporated company specializing in high-quality products and solutions for the Oil & Gas, Marine, and Industrial sectors. With global partnerships and nationwide presence, we deliver reliability, innovation, and excellence to leading energy companies.',
  };

  const missionVision = [
    {
      icon: '🎯',
      title: 'Mission',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: '👁️',
      title: 'Vision',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Features */}
      <div className="max-w-6xl mx-auto -mt-16 z-10 relative">
        <div className="grid md:grid-cols-3 bg-white shadow-lg rounded-xl overflow-hidden">
          {features.map((item, index) => (
            <div
              key={index}
              className={`p-8 text-center border-b md:border-b-0 ${
                index !== features.length - 1 ? 'md:border-r border-gray-200' : ''
              }`}
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-20 px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{aboutData.title}</h2>
        <div className="w-20 h-[3px] bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-700 leading-relaxed">{aboutData.description}</p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-5 pb-20">
        {/* Left Image */}
        <div>
          <Image
            src="/about.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Mission & Vision */}
        <div className="space-y-10">
          {missionVision.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="text-3xl text-green-700" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-green-800">{item.title}</h4>
                <p className="text-gray-700 mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
