import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Main1 from './Main1';
import Work from './Work';

function Index() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Main1 />
      <About />
      <Skills />
      <Services />
      <Work/>
      <Footer />
    </div>
  );
}

export default Index;
