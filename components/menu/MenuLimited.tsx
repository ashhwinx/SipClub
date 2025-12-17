import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock, Unlock, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MenuLimited: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal Animation (Fade Up)
      gsap.from(containerRef.current, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 85%" }
      });

      // 2. Marquee Animation (Infinite Loop)
      if (marqueeRef.current) {
         // Clone content for seamless loop
         const content = marqueeRef.current.innerHTML;
         marqueeRef.current.innerHTML = content + content + content + content;

         gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: 20,
            ease: "linear",
            repeat: -1
         });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      // Image: Grayscale -> Color & Zoom
      const img = e.currentTarget.querySelector('img');
      gsap.to(img, { filter: 'grayscale(0%)', scale: 1.05, duration: 0.6, ease: 'power2.out' });

      // Lock Icon: Spin & Swap (Handled via CSS group-hover mostly, but GSAP for smoothness)
      const lockBox = e.currentTarget.querySelector('.lock-box');
      gsap.to(lockBox, { backgroundColor: '#BDD0A0', color: '#004632', duration: 0.3 });
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      // Reset Image
      const img = e.currentTarget.querySelector('img');
      gsap.to(img, { filter: 'grayscale(100%)', scale: 1, duration: 0.6, ease: 'power2.out' });

      // Reset Lock
      const lockBox = e.currentTarget.querySelector('.lock-box');
      gsap.to(lockBox, { backgroundColor: '#004632', color: '#FEF8DD', duration: 0.3 });
  };

  return (
    <section ref={containerRef} className="w-full bg-[#FEF8DD] py-20 border-t-2 border-[#004632]">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
            <h2 className="font-heading text-4xl md:text-6xl text-[#004632]">
                SEASONAL<span className="text-[#BDD0A0]">.LTD</span>
            </h2>
            <div className="font-mono text-xs text-[#004632] uppercase tracking-widest hidden md:block">
                Availability: Low
            </div>
        </div>

        {/* The Card */}
        <div 
            className="group relative w-full h-[50vh] md:h-[60vh] overflow-hidden border-2 border-[#004632] bg-[#004632] cursor-pointer"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            
            {/* 1. The Image (Background) */}
            <img 
                src="https://images.unsplash.com/photo-1525453288416-d36c57f5c531?q=80&w=1600&auto=format&fit=crop"
                alt="Sakura Fizz"
                className="w-full h-full object-cover filter grayscale transition-all duration-700 opacity-80 group-hover:opacity-100"
            />

            {/* 2. Overlay Gradient (For text readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#004632] via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* 3. Center Marquee (The Tape) */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 bg-[#BDD0A0] text-[#004632] py-2 md:py-4 rotate-2 scale-110 shadow-lg border-y-2 border-[#004632] z-20 group-hover:rotate-0 group-hover:scale-100 transition-all duration-500">
                <div className="overflow-hidden w-full">
                    <div ref={marqueeRef} className="whitespace-nowrap font-heading text-4xl md:text-6xl leading-none">
                        SAKURA FIZZ • LIMITED EDITION • SPRING HARVEST • DO NOT MISS • 
                    </div>
                </div>
            </div>

            {/* 4. Top Right: Lock Status */}
            <div className="lock-box absolute top-6 right-6 z-30 bg-[#004632] text-[#FEF8DD] p-3 border-2 border-[#FEF8DD] group-hover:border-[#004632] transition-colors">
                <div className="relative w-6 h-6 md:w-8 md:h-8">
                    <Lock className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300" size={24} />
                    <Unlock className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
            </div>

            {/* 5. Bottom Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex justify-between items-end z-30 text-[#FEF8DD]">
                <div>
                    <div className="font-mono text-xs mb-2 flex items-center gap-2">
                        <Sparkles size={14} className="text-[#BDD0A0]" />
                        <span>FLAVOR PROFILE_04</span>
                    </div>
                    <h3 className="font-heading text-5xl md:text-7xl leading-none mb-2">SAKURA FIZZ</h3>
                    <p className="font-sans text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Cherry blossom syrup, sparkling soda, and a hint of salted plum. A fleeting taste of spring.
                    </p>
                </div>
                <div className="text-right hidden md:block">
                     <span className="font-heading text-5xl md:text-6xl text-[#BDD0A0]">¥700</span>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default MenuLimited;