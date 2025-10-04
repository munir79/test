// 'use client';
// import React from 'react';
// import Link from 'next/link';

// const Homepage = () => {
//   const services = [
//     {
//       id: 1,
//       title: 'Property Management',
//       description:
//         'Complete management solutions for residential and commercial properties. From guest communication to revenue optimization.',
//       icon: '🏢',
//       link: 'property-management',
//       image:
//         'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
//       features: ['Short-Term Rentals', 'Long-Term Rentals', 'Maintenance', 'Revenue Optimization'],
//     },
//     {
//       id: 2,
//       title: 'Interior Design & Makeovers',
//       description:
//         'Transform properties into inviting, market-ready spaces that attract guests and tenants.',
//       icon: '🎨',
//       link: 'interior-design',
//       image:
//         'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
//       features: ['Residential Design', 'Commercial Spaces', 'Cost-Effective', 'High-Quality'],
//     },
//     {
//       id: 3,
//       title: 'Property Consultancy',
//       description: 'Unlock the full earning potential of your property with expert strategies.',
//       icon: '💼',
//       link: 'property-consultancy',
//       image:
//         'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
//       features: [
//         'Revenue Management',
//         'Market Analysis',
//         'Growth Strategies',
//         'Listing Optimization',
//       ],
//     },
//   ];

//   const stats = [
//     { number: '500+', label: 'Properties Managed' },
//     { number: '95%', label: 'Tenant Satisfaction' },
//     { number: '24/7', label: 'Support Available' },
//     { number: '15+', label: 'Years Experience' },
//   ];

//   const testimonials = [
//     {
//       name: 'Sarah Chen',
//       role: 'Property Owner',
//       image:
//         'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80',
//       comment:
//         'NN Retreats transformed my property into a profitable investment. Their management is exceptional!',
//       rating: 5,
//     },
//     {
//       name: 'Ahmad Rizal',
//       role: 'Real Estate Investor',
//       image:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
//       comment:
//         'The interior design team created a stunning space that attracts premium guests consistently.',
//       rating: 5,
//     },
//     {
//       name: 'Priya Sharma',
//       role: 'Business Owner',
//       image:
//         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
//       comment:
//         'Their consultancy services helped me maximize returns across my property portfolio.',
//       rating: 5,
//     },
//   ];

//   return (
//     <div className="w-full bg-white">
//       {/* Hero Section */}
//       <div className="relative w-full min-h-screen bg-black">
//         {/* Background Image with Overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-90"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1950&q=80')`,
//           }}
//         />
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* Navigation */}
//         <nav className="relative z-20 bg-transparent">
//           <div className="max-w-7xl mx-auto px-4 py-6">
//             <div className="flex items-center justify-between">
//               <Link href="/" className="flex items-center space-x-3 group">
//                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
//                   <span className="text-black font-bold text-xl">NN</span>
//                 </div>
//                 <span className="text-2xl font-bold text-white">NN Retreats</span>
//               </Link>
//               <div className="hidden md:flex space-x-8">
//                 <Link
//                   href="/services"
//                   className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
//                 >
//                   Services
//                 </Link>
//                 <Link
//                   href="/properties"
//                   className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
//                 >
//                   Properties
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
//                 >
//                   About
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 text-center">
//           <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8">
//             <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//             <span className="text-white font-semibold text-sm">PREMIUM PROPERTY SOLUTIONS</span>
//           </div>

//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
//             <span className="block">ELEVATE YOUR</span>
//             <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               PROPERTY EXPERIENCE
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Discover exceptional properties, professional management services, and seamless rental
//             experiences with Malaysia's fastest-growing hospitality brand.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Browse Properties
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
//               List Your Property
//             </button>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="relative inline-block mb-4">
//                   <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//                     <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
//                       <div className="text-2xl font-bold text-black">{stat.number}</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="py-20 bg-white relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-[0.02]">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
//           <div className="absolute top-0 right-0 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           {/* Section Header */}
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-3 border border-gray-200 mb-6">
//               <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
//               <span className="text-gray-800 font-semibold text-sm">OUR SERVICES</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
//               Premium Property
//               <span className="block bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
//                 Solutions
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We provide a full suite of property and hospitality solutions designed to meet the
//               needs of property owners, investors, and travellers alike.
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//             {services.map((service) => (
//               <Link key={service.id} href={service.link}>
//                 <div className="group relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:-translate-y-4">
//                   {/* Image Section */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

//                     {/* Icon Badge */}
//                     <div className="absolute top-6 right-6 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                       <span className="text-2xl">{service.icon}</span>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-8">
//                     <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
//                       {service.title}
//                     </h3>

//                     <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

//                     {/* Features List */}
//                     <div className="mb-6">
//                       <div className="flex flex-wrap gap-2">
//                         {service.features.map((feature, index) => (
//                           <span
//                             key={index}
//                             className="px-3 py-2 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200"
//                           >
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* CTA */}
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                       <span className="font-semibold text-black group-hover:text-gray-600 transition-colors duration-300">
//                         Discover More
//                       </span>
//                       <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                         <span className="text-white transform group-hover:translate-x-1 transition-transform duration-300">
//                           →
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hover Border Effect */}
//                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Bottom CTA */}
//           <div className="text-center">
//             <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-12 text-white relative overflow-hidden">
//               <div className="absolute inset-0 bg-black/50"></div>
//               <div className="relative z-10">
//                 <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h3>
//                 <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
//                   Join hundreds of property owners who trust us with their investments and
//                   experience the NN Retreats difference.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
//                     Schedule Consultation
//                   </button>
//                   <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300">
//                     View All Services
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
//               <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//               <span className="font-semibold text-sm">CLIENT TESTIMONIALS</span>
//             </div>
//             <h2 className="text-5xl font-bold mb-4">What Our Clients Say</h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Discover why property owners and investors choose NN Retreats for their hospitality
//               needs.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2"
//               >
//                 <div className="flex items-center space-x-4 mb-6">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
//                     <p className="text-gray-300 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <div className="flex mb-4 text-yellow-400">{'★'.repeat(testimonial.rating)}</div>
//                 <p className="text-gray-300 italic leading-relaxed">"{testimonial.comment}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Final CTA Section */}
//       <div className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-5xl font-bold text-black mb-6">Start Your Property Journey Today</h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Whether you're looking to maximize your property's potential or find the perfect stay,
//             we're here to make it happen.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Get Started Now
//             </button>
//             <button className="border-2 border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300">
//               Contact Our Team
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .shadow-3xl {
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Homepage;

// second ###############################################################

// 'use client';
// import React from 'react';
// import Link from 'next/link';

// const Homepage = () => {
//   const services = [
//     {
//       id: 1,
//       title: 'Property Management',
//       description:
//         'Complete management solutions for residential and commercial properties. From guest communication to revenue optimization.',
//       icon: '🏢',
//       link: 'property-management',
//       image:
//         'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
//       features: ['Short-Term Rentals', 'Long-Term Rentals', 'Maintenance', 'Revenue Optimization'],
//     },
//     {
//       id: 2,
//       title: 'Interior Design',
//       description:
//         'Transform properties into inviting, market-ready spaces that attract guests and tenants.',
//       icon: '🎨',
//       link: 'interior-design',
//       image:
//         'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
//       features: ['Residential Design', 'Commercial Spaces', 'Cost-Effective', 'High-Quality'],
//     },
//     {
//       id: 3,
//       title: 'Property Consultancy',
//       description: 'Unlock the full earning potential of your property with expert strategies.',
//       icon: '💼',
//       link: 'property-consultancy',
//       image:
//         'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
//       features: [
//         'Revenue Management',
//         'Market Analysis',
//         'Growth Strategies',
//         'Listing Optimization',
//       ],
//     },
//   ];

//   const properties = [
//     {
//       id: 1,
//       title: 'Luxury Apartments',
//       type: 'APARTMENTS',
//       image:
//         'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
//       description: 'Modern urban living with premium amenities',
//     },
//     {
//       id: 2,
//       title: 'Family Houses',
//       type: 'HOUSES',
//       image:
//         'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80',
//       description: 'Spacious homes perfect for family living',
//     },
//     {
//       id: 3,
//       title: 'Vacation Villas',
//       type: 'HOUSES',
//       image:
//         'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80',
//       description: 'Luxury retreats for memorable getaways',
//     },
//   ];

//   const stats = [
//     { number: '500+', label: 'Properties Managed' },
//     { number: '95%', label: 'Client Satisfaction' },
//     { number: '24/7', label: 'Support Available' },
//     { number: '15+', label: 'Years Experience' },
//   ];

//   return (
//     <div className="w-full bg-white">
//       {/* Hero Section */}
//       <div className="relative w-full min-h-screen bg-white">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

//         {/* Navigation */}
//         <nav className="relative z-20 bg-transparent">
//           <div className="max-w-7xl mx-auto px-4 py-8">
//             <div className="flex items-center justify-between">
//               <Link href="/" className="flex items-center space-x-4 group">
//                 <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                   <span className="text-white font-bold text-2xl">NN</span>
//                 </div>
//                 <div className="text-left">
//                   <div className="text-3xl font-black text-black tracking-tight">NN RETREATS</div>
//                   <div className="text-sm text-gray-600 font-medium">Property Management</div>
//                 </div>
//               </Link>
//               <div className="hidden md:flex space-x-8">
//                 <Link
//                   href="/properties"
//                   className="text-gray-700 hover:text-black transition-colors duration-300 font-semibold text-lg"
//                 >
//                   PROPERTIES
//                 </Link>
//                 <Link
//                   href="/services"
//                   className="text-gray-700 hover:text-black transition-colors duration-300 font-semibold text-lg"
//                 >
//                   SERVICES
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="text-gray-700 hover:text-black transition-colors duration-300 font-semibold text-lg"
//                 >
//                   ABOUT
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="text-gray-700 hover:text-black transition-colors duration-300 font-semibold text-lg"
//                 >
//                   CONTACT
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Text Content */}
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <div className="inline-block bg-black text-white px-6 py-3 rounded-2xl font-bold text-sm tracking-wider">
//                   PREMIUM PROPERTY SOLUTIONS
//                 </div>
//                 <h1 className="text-6xl md:text-8xl font-black text-black leading-none tracking-tight">
//                   <span className="block">APARTMENTS</span>
//                   <span className="block text-gray-400">AND</span>
//                   <span className="block">HOUSES</span>
//                 </h1>
//               </div>

//               <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
//                 Discover exceptional properties, professional management services, and seamless
//                 rental experiences with Malaysia's fastest-growing hospitality brand.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 pt-8">
//                 <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
//                   BROWSE PROPERTIES
//                 </button>
//                 <button className="border-2 border-black text-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition-all duration-300 text-lg">
//                   LIST PROPERTY
//                 </button>
//               </div>
//             </div>

//             {/* Image Grid */}
//             <div className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-4">
//                   <div className="bg-gray-100 rounded-3xl p-6 aspect-square flex items-center justify-center">
//                     <img
//                       src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
//                       alt="Apartment"
//                       className="w-full h-48 object-cover rounded-2xl"
//                     />
//                   </div>
//                   <div className="bg-gray-100 rounded-3xl p-6 aspect-square flex items-center justify-center">
//                     <img
//                       src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
//                       alt="Modern Interior"
//                       className="w-full h-48 object-cover rounded-2xl"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-4 mt-12">
//                   <div className="bg-gray-100 rounded-3xl p-6 aspect-square flex items-center justify-center">
//                     <img
//                       src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80"
//                       alt="House"
//                       className="w-full h-48 object-cover rounded-2xl"
//                     />
//                   </div>
//                   <div className="bg-gray-100 rounded-3xl p-6 aspect-square flex items-center justify-center">
//                     <img
//                       src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80"
//                       alt="Luxury Villa"
//                       className="w-full h-48 object-cover rounded-2xl"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-20 bg-white border-t border-gray-200">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="text-5xl md:text-6xl font-black text-black mb-4 group-hover:scale-110 transition-transform duration-500">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Properties Showcase */}
//       <div className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
//               <span className="block">FEATURED</span>
//               <span className="block text-gray-400">PROPERTIES</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Explore our curated selection of premium apartments and houses
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {properties.map((property) => (
//               <div
//                 key={property.id}
//                 className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
//               >
//                 <div className="relative h-80 overflow-hidden">
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-2xl font-bold text-sm">
//                     {property.type}
//                   </div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-black text-black mb-3">{property.title}</h3>
//                   <p className="text-gray-600 mb-6">{property.description}</p>
//                   <button className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
//                     VIEW DETAILS
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
//               <span className="block">OUR</span>
//               <span className="block text-gray-400">SERVICES</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive property solutions for owners and investors
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {services.map((service) => (
//               <Link key={service.id} href={service.link}>
//                 <div className="group bg-white rounded-3xl border-2 border-gray-200 hover:border-black transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden">
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                       <span className="text-2xl">{service.icon}</span>
//                     </div>
//                   </div>

//                   <div className="p-8">
//                     <h3 className="text-2xl font-black text-black mb-4">{service.title}</h3>
//                     <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {service.features.map((feature, index) => (
//                         <span
//                           key={index}
//                           className="px-4 py-2 rounded-2xl text-sm font-semibold bg-gray-100 text-gray-800 border border-gray-300"
//                         >
//                           {feature}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-between pt-6 border-t border-gray-200">
//                       <span className="font-bold text-black group-hover:text-gray-600 transition-colors duration-300">
//                         LEARN MORE
//                       </span>
//                       <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                         <span className="text-white transform group-hover:translate-x-1 transition-transform duration-300 text-lg">
//                           →
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-20 bg-black text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-5xl md:text-6xl font-black mb-6">
//             <span className="block">READY TO</span>
//             <span className="block text-gray-400">GET STARTED?</span>
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Join hundreds of property owners who trust us with their investments and experience the
//             NN Retreats difference.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg">
//               SCHEDULE CONSULTATION
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 text-lg">
//               CONTACT OUR TEAM
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="py-12 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <div className="flex items-center justify-center space-x-4 mb-6">
//             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
//               <span className="text-black font-bold text-xl">NN</span>
//             </div>
//             <div className="text-2xl font-black">NN RETREATS</div>
//           </div>
//           <p className="text-gray-400 mb-4">Premium Property Management & Hospitality Solutions</p>
//           <p className="text-gray-500 text-sm">© 2024 NN Retreats. All rights reserved.</p>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Homepage;

// third ################################

'use client';
import React from 'react';
import Link from 'next/link';

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
          <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full opacity-30 animate-float-medium"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full opacity-40 animate-float-fast"></div>
          <div className="absolute bottom-20 right-32 w-5 h-5 bg-white rounded-full opacity-25 animate-float-slow"></div>
        </div>

        {/* Navigation with Glass Effect */}
        <nav className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <span className="text-white font-bold text-2xl">NN</span>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-black text-white tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    NN RETREATS
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Property Management</div>
                </div>
              </Link>
              <div className="hidden md:flex space-x-8">
                {['PROPERTIES', 'SERVICES', 'ABOUT', 'CONTACT'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 font-semibold text-lg hover:scale-105 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-2xl font-bold text-sm tracking-wider shadow-2xl">
                  PREMIUM PROPERTY SOLUTIONS
                </div>
                <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                  <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    APARTMENTS
                  </span>
                  <span className="block text-gray-500">AND</span>
                  <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    HOUSES
                  </span>
                </h1>
              </div>

              {/* Glass Description Card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Discover exceptional properties, professional management services, and seamless
                  rental experiences with Malaysia's fastest-growing hospitality brand.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group relative bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden">
                  <span className="relative z-10">BROWSE PROPERTIES</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group relative border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">LIST PROPERTY</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-8 pt-8">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-black text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
                      alt="Apartment"
                      className="w-full h-48 object-cover rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
                      alt="Modern Interior"
                      className="w-full h-48 object-cover rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80"
                      alt="House"
                      className="w-full h-48 object-cover rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 aspect-square flex items-center justify-center hover:bg-white/15 transition-all duration-500 group overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80"
                      alt="Luxury Villa"
                      className="w-full h-48 object-cover rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-2xl font-black text-white mb-2">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-500 text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the components remain the same */}
      {/* Stats Section */}
      <div className="py-20 bg-white border-t border-gray-200">
        {/* ... existing stats section ... */}
      </div>

      {/* Properties Showcase */}
      <div className="py-20 bg-gray-50">{/* ... existing properties section ... */}</div>

      {/* Services Section */}
      <div className="py-20 bg-white">{/* ... existing services section ... */}</div>

      {/* CTA Section */}
      <div className="py-20 bg-black text-white">{/* ... existing CTA section ... */}</div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">{/* ... existing footer ... */}</footer>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(-5px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(8px);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
