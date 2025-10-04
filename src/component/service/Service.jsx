"use client";
import React from "react";

export default function Service() {
  const services = [
    {
      icon: "⚙️",
      title: "Specialty Products & Supplies",
      description:
        "High-grade piping systems, pumps, motors, and steel fabrications engineered for industrial and offshore projects.",
    },
    {
      icon: "⚓",
      title: "Marine & Offshore Equipment",
      description:
        "Anchors, winches, subsea valves, and mooring systems to support safe and reliable offshore operations.",
    },
    {
      icon: "🛟",
      title: "Safety & Survival Equipment",
      description:
        "Life rafts, firefighting gear, and emergency kits designed to protect crews in critical environments.",
    },
    {
      icon: "🏭",
      title: "Industrial & Engineering Solutions",
      description:
        "Bearings, conveyor systems, and non-sparking tools with expert testing and inspection services.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-5"
      style={{
        backgroundImage: "url('/services-bg.png')", // optional local background (put in public/)
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      {/* ===== Title Section ===== */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
          Our Services
        </h2>
        <div className="w-20 h-[3px] bg-yellow-500 mx-auto mb-5"></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          We deliver specialized products and solutions for the Oil & Gas,
          Marine, and Industrial sectors. From piping systems and offshore
          equipment to safety gear and energy supply, we provide reliable
          support that meets global standards.
        </p>
      </div>

      {/* ===== Cards Section ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-200"
          >
            <div className="text-5xl text-green-700 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* ===== Button ===== */}
      <div className="mt-10">
        <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition duration-300 shadow-md">
          See All Services
        </button>
      </div>
    </div>
  );
}
