export default function ProjectsHighLight() {
  const services = [
    {
      icon: '🚢',
      title: 'Offshore Supply',
      desc: 'Reliable delivery of piping systems, equipment, and offshore components.',
    },
    {
      icon: '🦺',
      title: 'Marine Safety Solutions',
      desc: 'Supplying important safety and survival gear for marine operations.',
    },
    {
      icon: '⛽',
      title: 'Fuel & Energy Delivery',
      desc: 'Providing aviation fuels, diesel, and lubricants to major facilities.',
    },
  ];

  return (
    <div className="w-full bg-white py-16 flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center px-4">
        <h2 className="text-green-700 text-2xl font-bold">Project Highlights</h2>
        <div className="h-1 w-16 bg-yellow-500 mx-auto my-2"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We have successfully delivered products and solutions to some of the region’s most
          demanding energy and marine projects. Our proven track record includes partnerships with
          leading clients such as Petronas, Shell, Exxon, and MLNG.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
        {/* Images Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=600"
            alt="Main Port"
            className="w-[350px] h-[350px] object-cover rounded-xl shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600"
            alt="Overlay Port"
            className="w-[280px] h-[280px] object-cover rounded-xl shadow-xl absolute bottom-[-40px] left-[-40px]"
          />
        </div>

        {/* Services Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-3xl">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-green-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
