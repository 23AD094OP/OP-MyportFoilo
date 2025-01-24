import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">My Skills</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">HTML</h3>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">CSS</h3>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">JavaScript</h3>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Data Structure</h3>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
