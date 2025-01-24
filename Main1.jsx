import React from 'react';

const Main1 = () => {
  return (
    <section id="main" className="bg-gray-900 text-white h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-semibold">Hello, I'm <span className="text-yellow-500">OM Prakash sah Teli</span></h2>
        <div className="text-xl md:text-2xl mt-4">
          <h3 className="text-yellow-500">Web Designer</h3>
          <h3 className="text-yellow-500">Web Developer</h3>
          <h3 className="text-yellow-500">Motion Graphic Designer</h3>
        </div>
        <a href="#" className="mt-6 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-full hover:bg-yellow-600">See My Work</a>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://www.facebook.com/" className="text-xl hover:text-yellow-500"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/accounts/login/" className="text-xl hover:text-yellow-500"><i className="fab fa-instagram"></i></a>
          <a href="https://web.whatsapp.com/" className="text-xl hover:text-yellow-500"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Main1;
