import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Sparkles, Plus, Ticket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MenuHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroText1Ref = useRef<HTMLHeadingElement>(null);
  const heroText2Ref = useRef<HTMLHeadingElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Text Parallax (Subtle movement)
      gsap.to(heroText1Ref.current, {
        xPercent: -5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
      
      gsap.to(heroText2Ref.current, {
        xPercent: 5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // 2. Background Shapes Floating
      gsap.to(shapesRef.current, {
        yPercent: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      // 3. Sticker Rotation
      gsap.to(".est-sticker", {
        rotation: 360,
        repeat: -1,
        duration: 12,
        ease: "linear"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative flex h-[100vh] md:h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-[#FEF8DD] pt-20 md:pt-24 border-b-4 border-[#004632]">
      
      {/* --- BACKGROUND TEXTURE (Reduced Grain) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- FLOATING BLURRED SHAPES --- */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute top-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-[#BDD0A0] rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-60"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#004632] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-10"></div>
      </div>

      {/* --- DECORATIVE ELEMENTS --- */}
      
      {/* 1. Vertical Marquee (Hidden on Mobile) */}
      <div className="absolute left-6 top-0 h-full hidden lg:flex flex-col justify-center items-center gap-8 z-10 opacity-40 mix-blend-darken">
         <div className="rotate-180 writing-vertical-rl font-mono text-xs tracking-[0.4em] text-[#004632] h-full flex items-center border-l border-[#004632]/20 pl-4">
            SEASONAL DROPS • LIMITED EDITION • TOKYO VIBES •
         </div>
      </div>

      {/* 2. Top Right Ticket (Responsive Position) */}
      <div className="absolute top-20 right-4 md:top-32 md:right-16 z-20 scale-75 md:scale-100 origin-top-right">
         <div className="bg-[#FEF8DD] text-[#004632] px-3 py-4 rounded-sm font-mono text-[10px] leading-tight shadow-[4px_4px_0px_#004632] border-2 border-[#004632] rotate-3 hover:rotate-0 transition-transform cursor-default">
            <div className="flex justify-between items-center mb-2 border-b border-[#004632] border-dashed pb-1">
               <span className="font-bold">VOL. 25</span>
               <Ticket size={12} fill="currentColor" />
            </div>
            <div className="font-heading text-lg leading-none mb-2">FRESH<br/>MENU</div>
            <div className="w-full h-6 bg-[#004632] text-[#FEF8DD] flex items-center justify-center tracking-widest text-[8px]">
               ADMIT ONE
            </div>
         </div>
      </div>

      {/* 3. Japanese Big Text (Background Layer) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[25vw] text-[#BDD0A0] opacity-30 pointer-events-none select-none z-0 mix-blend-multiply">
         メニュー
      </div>

      {/* --- MAIN HERO TEXT (Responsive Sizing) --- */}
      <div className="z-10 flex flex-col items-center leading-[0.85] select-none relative mix-blend-darken w-full px-4">
          
          {/* Sparkle Icon */}
          <Sparkles className="absolute -top-8 left-[10%] text-[#004632] w-8 h-8 md:w-16 md:h-16 animate-pulse" />
          
          {/* Text 1: TASTE */}
          <h1 ref={heroText1Ref} className="font-heading text-[15vw] md:text-[12vw] text-[#004632] tracking-tighter whitespace-nowrap">
              TASTE
          </h1>
          
          {/* Divider Line */}
          <div className="flex items-center gap-4 w-full max-w-xs md:max-w-2xl justify-center my-2 md:my-4">
             <div className="h-1 md:h-2 flex-grow bg-[#004632]"></div>
             <Star size={20} fill="#004632" className="text-[#004632] animate-spin-slow" />
             <div className="h-1 md:h-2 flex-grow bg-[#004632]"></div>
          </div>
          
          {/* Text 2: THE HYPE */}
          <h1 ref={heroText2Ref} className="font-heading text-[15vw] md:text-[12vw] text-[#004632] tracking-tighter whitespace-nowrap">
             THE HYPE
          </h1>
          
      </div>

      {/* --- ROTATING STICKER (Bottom Right) --- */}
      <div className="est-sticker absolute bottom-8 right-4 md:bottom-12 md:right-12 z-20 flex h-20 w-20 md:h-28 md:w-28 items-center justify-center rounded-full bg-[#BDD0A0] p-1 text-[#004632] shadow-lg border-2 border-[#004632]">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
              <path id="circlePath" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
              <text className="text-[14px] font-bold uppercase tracking-widest fill-[#004632]">
                  <textPath href="#circlePath" startOffset="0%">• Est. 2025 • Tokyo Sip Club •</textPath>
              </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
             <Plus size={24} className="md:w-8 md:h-8" />
          </div>
      </div>

    </section>
  );
};

export default MenuHero;