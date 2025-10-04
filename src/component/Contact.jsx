// pages/contact.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      details: 'hello@nnretreats.com',
      link: 'mailto:hello@nnretreats.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Mon to Fri, 9am to 6pm',
      details: '+603-1234 5678',
      link: 'tel:+60312345678',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Quick responses',
      details: '+6012-345 6789',
      link: 'https://wa.me/60123456789',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: '🏢',
      title: 'Visit Us',
      description: 'Come say hello',
      details: 'Kuala Lumpur, Malaysia',
      link: 'https://maps.google.com',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: '💬' },
    { value: 'property-management', label: 'Property Management', icon: '🏠' },
    { value: 'interior-design', label: 'Interior Design', icon: '🎨' },
    { value: 'consultancy', label: 'Property Consultancy', icon: '💼' },
    { value: 'partnership', label: 'Partnership', icon: '🤝' },
    { value: 'careers', label: 'Careers', icon: '🚀' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-gray-800">
      {/* NAV */}

      {/* HERO */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501117716987-c8e1ecb21024?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Let’s Start a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your property experience? Our team is here to help you every step of
            the way.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FORM */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 p-4 rounded-xl mb-6">
                <p className="text-green-700 font-semibold">
                  ✅ Message sent successfully! We’ll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                  className="px-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="px-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="px-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject *"
                className="px-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message..."
                className="px-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
              <p className="text-gray-600">
                Prefer a different way to connect? Choose a method that suits you. We’re always
                ready to assist!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition group"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition`}
                  >
                    <span className="text-white text-xl">{method.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{method.description}</p>
                  <p className="text-blue-600 font-semibold">{method.details}</p>
                </a>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Follow Our Journey</h3>
              <div className="flex space-x-4">
                {[
                  { icon: '📘', name: 'Facebook', color: 'bg-blue-500' },
                  { icon: '📷', name: 'Instagram', color: 'bg-pink-500' },
                  { icon: '💼', name: 'LinkedIn', color: 'bg-blue-600' },
                  { icon: '🐦', name: 'Twitter', color: 'bg-sky-500' },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-200 text-gray-500 text-sm">
        © {new Date().getFullYear()} NN Retreats. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
