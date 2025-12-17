import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
// import { useCursor } from '../context/CursorContext';
import Footer from '../components/Footer';

// Components
import MenuHero from '../components/menu/MenuHero';
import MenuBento from '../components/menu/MenuBento';
import MenuDailyFix from '../components/menu/MenuDailyFix';
import MenuSweetTooth from '../components/menu/MenuSweetTooth';
import MenuLimited from '../components/menu/MenuLimited';

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  // const { setCursorVariant, setCursorText } = useCursor();
  
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Curtain Reveal Animation
      gsap.fromTo(curtainRef.current, 
        { yPercent: 0 }, 
        {
          yPercent: -100,
          duration: 1.5,
          ease: 'power4.inOut',
          delay: 0.2
        }
      );
    }, pageContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* FIXED WRAPPER:
         1. overflow-x-hidden: Prevents horizontal scroll that breaks the footer.
         2. mb-[100vh]: Creates the window for the footer to be revealed.
         3. bg-[#FEF8DD]: Solid background prevents footer from showing through content.
      */}
      <div 
        ref={pageContainerRef} 
        className="relative z-10 mb-[100vh] w-full overflow-x-hidden rounded-b-[3rem] bg-[#FEF8DD] shadow-2xl"
      >
          
          {/* Green Curtain Overlay (For transition) */}
          <div 
            ref={curtainRef}
            className="fixed inset-0 z-[60] h-full w-full bg-[#004632] pointer-events-none"
          />

          {/* --- PAGE CONTENT --- */}
          
          <MenuHero />
          
          <MenuBento />
          
          <MenuDailyFix />
          
          <MenuSweetTooth />
          
          <MenuLimited />

          {/* Back Button Area */}
          <div className="flex justify-center py-20 bg-[#FEF8DD]">
              <button
                  onClick={() => navigate('/')}
                  className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#004632] px-8 py-4 font-heading text-[#FEF8DD] transition-all hover:bg-[#BDD0A0] hover:text-[#004632]"
                  onMouseEnter={() => { setCursorText('HOME'); setCursorVariant('hover'); }}
                  onMouseLeave={() => setCursorVariant('default')}
              >
                  <ArrowLeft className="relative z-10 transition-transform group-hover:-translate-x-1" />
                  <span className="relative z-10">BACK TO BASE</span>
              </button>
          </div>

      </div>
      
      {/* Footer Fixed Behind */}
      <Footer />
    </>
  );
};

export default MenuPage;