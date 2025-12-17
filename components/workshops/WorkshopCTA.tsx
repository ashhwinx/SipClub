import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Sparkles, Star, ArrowRight, Sticker } from 'lucide-react';

const WorkshopCTA: React.FC = () => {
  const stampRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Rotating Stamp
      gsap.to(stampRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 12,
        ease: 'linear'
      });

      // 2. Background Marquee Scroll
      if (marqueeRef.current) {
         gsap.to(marqueeRef.current, {
            xPercent: -20,
            ease: "none",
            duration: 10,
            repeat: -1,
            yoyo: true
         });
      }
    });
    return () => ctx.revert();
  }, []);

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
     gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'back.out(1.7)' });
     const icon = e.currentTarget.querySelector('.btn-icon');
     if(icon) gsap.to(icon, { x: 10, duration: 0.3 });
  };

  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
     gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
     const icon = e.currentTarget.querySelector('.btn-icon');
     if(icon) gsap.to(icon, { x: 0, duration: 0.3 });
  };

  return (
    <section className="relative w-full bg-[#004632] overflow-hidden py-24 md:py-32 border-t-2 border-[#FEF8DD]/20">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Background Marquee Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 opacity-10 pointer-events-none">
          <div ref={marqueeRef} className="whitespace-nowrap font-heading text-[20vw] text-[#FEF8DD] leading-none">
              BOOKINGS OPEN • PRIVATE SESSIONS • CORPORATE • 
          </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 border border-[#BDD0A0] text-[#BDD0A0] px-4 py-1 rounded-full font-mono text-xs uppercase tracking-widest mb-8 bg-[#004632]/50 backdrop-blur-md">
            <Sparkles size={12} />
            <span>Private Events & Catering</span>
        </div>

        {/* Main Typography */}
        <div className="mb-10 relative">
            <h2 className="font-heading text-[15vw] md:text-[10vw] leading-[0.85] text-[#FEF8DD] mix-blend-lighten">
                HOST THE<br/>
                <span className="text-[#BDD0A0]">VIBE.</span>
            </h2>
            
            {/* Rotating Stamp (Positioned relative to text) */}
            <div ref={stampRef} className="absolute -top-6 -right-6 md:-top-12 md:-right-20 w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-[#BDD0A0] flex items-center justify-center bg-[#004632] text-[#BDD0A0] shadow-lg">
               <svg viewBox="0 0 100 100" className="absolute h-full w-full p-2">
                  <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                  <text className="text-[13px] font-bold uppercase tracking-widest fill-current">
                      <textPath href="#curve">• Let's Collab • Tokyo Sip Club •</textPath>
                  </text>
               </svg>
               <Mail size={32} />
            </div>
        </div>

        {/* Description */}
        <p className="font-sans text-[#FEF8DD]/80 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            From latte art throwdowns to private tasting sessions. 
            Bring the Tokyo Sip Club energy to your next event.
        </p>

        {/* Giant Action Button */}
        <button 
            className="group relative flex items-center gap-4 bg-[#FEF8DD] text-[#004632] px-10 py-6 md:px-16 md:py-8 rounded-full font-heading text-2xl md:text-4xl hover:bg-[#BDD0A0] transition-colors duration-300 shadow-[0px_10px_40px_-10px_rgba(189,208,160,0.5)]"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <span>GET IN TOUCH</span>
            <ArrowRight className="btn-icon" size={32} />
        </button>

      </div>
    </section>
  );
};

export default WorkshopCTA;