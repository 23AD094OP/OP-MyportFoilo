import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="omp.jpg" alt="Om" className="rounded-full w-56 h-56 object-cover mx-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Hey There! I'm OM Prakash Sah Teli</h3>
            <p className="text-lg mb-4">
              I'm a web designer, developer, and motion graphic designer based in Coimbatore. I am passionate about creating dynamic and user-friendly websites.
            </p>
            <a href="#" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full hover:bg-yellow-600">See More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
