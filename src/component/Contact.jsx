'use client';
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Get in{' '}
            <span className="bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you — whether it’s about property management, partnership, or
            investment opportunities.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-gray-200">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-5 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-8">
            <div className="bg-black text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_white_0%,_transparent_70%)] opacity-10"></div>
              <h3 className="text-2xl font-black mb-6">Contact Details</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm uppercase mb-1 tracking-wider">Email</p>
                  <p className="text-lg font-semibold">contact@nnretreats.com</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase mb-1 tracking-wider">Phone</p>
                  <p className="text-lg font-semibold">+60 12-345 6789</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase mb-1 tracking-wider">Office</p>
                  <p className="text-lg font-semibold">Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              {['facebook', 'instagram', 'linkedin', 'twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-12 h-12 bg-white border border-gray-300 rounded-2xl flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <i className={`ri-${platform}-fill text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css');
      `}</style>
    </section>
  );
};

export default Contact;
