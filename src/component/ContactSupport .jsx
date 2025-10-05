// // components/ContactSupport.jsx
// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const ContactSupport = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//   };

//   const contactInfo = [
//     {
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//         </svg>
//       ),
//       title: 'Our Location',
//       description: '123 Support Street, Tech City\nDigital Valley, DV 12345',
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//           />
//         </svg>
//       ),
//       title: 'Phone Number',
//       description: '+1 (555) 123-4567\nMon-Fri from 8am to 6pm',
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//           />
//         </svg>
//       ),
//       title: 'Email Address',
//       description: 'support@example.com\nWe reply within 24 hours',
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: (
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//         </svg>
//       ),
//       href: '#',
//     },
//     {
//       icon: (
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path
//             fillRule="evenodd"
//             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//       href: '#',
//     },
//     {
//       icon: (
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path
//             fillRule="evenodd"
//             d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//       href: '#',
//     },
//     {
//       icon: (
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//         </svg>
//       ),
//       href: '#',
//     },
//   ];

//   return (
//     <div className="min-h-screen  bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-20">
//       <div className="w-full mx-auto max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden relative">
//         {/* Static Overlay */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.05)_1px,transparent_1px),radial-gradient(circle_at_90%_80%,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:30px_30px] pointer-events-none z-10" />

//         {/* Header */}
//         <div className="relative bg-gradient-to-r from-white to-gray-50 px-8 py-12 border-b border-gray-100 overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-800 to-black" />
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Get In Touch{' '}
//               <span className="inline-block w-3 h-3 bg-black rounded-full animate-pulse" />
//             </h1>
//             <p className="text-lg text-gray-600 max-w-2xl">
//               Our support team is here to help you with any questions or issues you might have.
//             </p>
//           </motion.div>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col lg:flex-row">
//           {/* Contact Info */}
//           <div className="lg:w-1/2 bg-gray-50 p-8 lg:p-12 border-r border-gray-100">
//             <div className="space-y-8">
//               {contactInfo.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="flex items-start space-x-4"
//                 >
//                   <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
//                     <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="flex justify-center space-x-4 mt-12"
//             >
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1"
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </motion.div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:w-1/2 p-8 lg:p-12">
//             <motion.form
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full placeholder-gray-400 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border  placeholder-gray-400 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full placeholder-gray-400 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
//                   placeholder="What is this regarding?"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className="w-full px-4 py-3 placeholder-gray-400 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
//                   placeholder="Please describe your issue or question"
//                   required
//                 />
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                   />
//                 </svg>
//                 <span>Send Message</span>
//               </motion.button>
//             </motion.form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSupport;

// components/ContactSupport.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Our Location',
      description: '123 Support Street, Tech City\nDigital Valley, DV 12345',
    },
    {
      icon: (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: 'Phone Number',
      description: '+1 (555) 123-4567\nMon-Fri from 8am to 6pm',
    },
    {
      icon: (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email Address',
      description: 'support@example.com\nWe reply within 24 hours',
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      href: '#',
    },
    {
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: '#',
    },
    {
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: '#',
    },
    {
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-20">
      <div className="w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden relative mx-auto">
        {/* Static Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.05)_1px,transparent_1px),radial-gradient(circle_at_90%_80%,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:20px_20px] sm:bg-[length:30px_30px] pointer-events-none z-10" />

        {/* Header */}
        <div className="relative bg-gradient-to-r from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 border-b border-gray-100 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-800 to-black" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get In Touch{' '}
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full animate-pulse" />
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Our support team is here to help you with any questions or issues you might have.
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-1/2 bg-gray-50 p-4 sm:p-6 lg:p-8 xl:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 whitespace-pre-line leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mt-8 sm:mt-10 lg:mt-12"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12">
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full placeholder-gray-400 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base placeholder-gray-400 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full placeholder-gray-400 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base placeholder-gray-400 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Please describe your issue or question"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base lg:text-lg rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
