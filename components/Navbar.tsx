import React, { useEffect, useState } from 'react';
import { Star, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- SCROLL LOGIC (Kept as requested) ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down more than 50px
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // Show if scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    // OUTER WRAPPER: Handles Positioning (Centering). NO TRANSITION here.
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-max max-w-[calc(100%-24px)] sm:max-w-none">
      
      {/* INNER WRAPPER: Handles Hide/Show Animation. */}
      <div 
        className={`transition-transform duration-500 ease-in-out 
          ${isVisible ? 'translate-y-0' : '-translate-y-[200%]'}`}
      >
        <div className="flex items-center gap-2 rounded-full border-2 border-[#004632] bg-[#FEF8DD] p-2 pr-4 sm:pr-6 shadow-[0px_8px_20px_-5px_rgba(0,70,50,0.2)]">
          
          {/* Brand / Home Button */}
          <button
            onClick={() => navigate('/')}
            className={`group flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 
              ${location.pathname === '/' ? 'bg-[#BDD0A0] text-[#004632]' : 'bg-[#004632] text-[#FEF8DD] hover:bg-[#BDD0A0] hover:text-[#004632]'}`}
          >
            <Star size={18} fill="currentColor" className="group-hover:rotate-180 transition-transform duration-500" />
          </button>
          
          {/* Divider */}
          <div className="h-4 w-[1px] bg-[#004632]/20 mx-1 flex-shrink-0"></div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            
            {['MENU', 'WORKSHOPS', 'CONTACT'].map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <button
                  key={item}
                  onClick={() => navigate(path)}
                  className={`relative px-3 sm:px-4 py-2 font-heading text-[10px] sm:text-sm tracking-wider transition-colors group overflow-hidden rounded-full flex-shrink-0
                    ${isActive ? 'text-[#FEF8DD]' : 'text-[#004632] hover:text-[#FEF8DD]'}`} 
                >
                  {/* Text Layer */}
                  <span className="relative z-10">{item}</span>
                  
                  {/* Background Fill */}
                  <span 
                    className={`absolute inset-0 z-0 bg-[#004632] transition-transform duration-300 ease-out 
                    ${isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}
                  ></span>
                </button>
              );
            })}

          </div>

          {/* Decor Icon (Hidden on mobile) */}
          <div className="hidden sm:block ml-2 text-[#BDD0A0] animate-pulse flex-shrink-0">
            <Sparkles size={16} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;