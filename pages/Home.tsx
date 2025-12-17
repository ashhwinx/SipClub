import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import VibeCheck from '../components/VibeCheck';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
        {/* 
          Main Content Wrapper 
          z-10 ensures it sits on top of the fixed footer.
          mb-[80vh] ensures there is scroll space to reveal the footer.
          bg-creamy-vanilla ensures it is opaque.
        */}
        <div className="relative z-10 mb-[100vh] rounded-b-[3rem] bg-creamy-vanilla shadow-2xl">
          <Hero />
          <About />
          <Menu />
          <VibeCheck />
         
        </div>

        <Footer />
        
       
    </>
  );
};

export default Home;
