import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">My Portfolio</a>
        <div className="flex space-x-6">
          <a href="#main" className="hover:text-yellow-500">Home</a>
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#skills" className="hover:text-yellow-500">Skills</a>
          <a href="#services" className="hover:text-yellow-500">My Hobby</a>
          <a href="#work" className="hover:text-yellow-500">Certification & Achievements</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
