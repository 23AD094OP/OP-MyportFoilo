import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">My Hobby</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
              <p>I create beautiful, user-friendly, and responsive web designs that meet the needs of my clients.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p>I develop websites with modern technologies and ensure they work smoothly across all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
