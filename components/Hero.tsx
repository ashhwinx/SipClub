import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from './Marquee';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textLine1Ref = useRef<HTMLHeadingElement>(null);
  const textLine2Ref = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const bgShapesRef = useRef<HTMLDivElement>(null);
  const kanjiRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Badge Rotation (Infinite)
      gsap.to(badgeRef.current, {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: 'linear',
      });

      // 2. Background Shapes Floating
      const shapes = bgShapesRef.current?.children;
      if (shapes) {
        Array.from(shapes).forEach((shape, i) => {
          gsap.to(shape, {
            x: 'random(-30, 30)', 
            y: 'random(-30, 30)',
            rotation: 'random(-90, 90)',
            duration: 'random(5, 10)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.5,
          });
        });
      }

      // --- 3. ENTRANCE ANIMATION (ONLY NON-TEXT ELEMENTS) ---
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Kanji Fade (Subtle)
      if (kanjiRef.current) {
        tl.fromTo(kanjiRef.current, 
            { opacity: 0, scale: 0.9 }, 
            { opacity: 0.05, scale: 1, duration: 2, ease: 'power2.out' }, 
            0
        );
      }

      // Image Pop
      if (imageRef.current) {
        tl.from(imageRef.current, {
            scale: 0,
            rotation: -15,
            opacity: 0,
            duration: 1.2,
            ease: 'back.out(1.5)',
        }, 0.5);

        // Scroll Parallax for Image
        gsap.to(imageRef.current, {
            y: 100,
            rotation: 5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5, 
            },
        });
      }

      // --- 4. SCROLL INTERACTIONS FOR TEXT (ONLY MOVEMENT, NO ENTRANCE) ---
      if (textLine1Ref.current) {
        gsap.to(textLine1Ref.current, {
            xPercent: -15, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5, 
            },
        });
      }

      if (textLine2Ref.current) {
        gsap.to(textLine2Ref.current, {
            xPercent: 15,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5, 
            },
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-[#FEF8DD] pt-20">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Grain Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 2. Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10"
           style={{ backgroundImage: 'radial-gradient(#004632 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* 3. Background Kanji */}
      <div ref={kanjiRef} className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none opacity-5">
        <h1 className="font-sans text-[40vw] font-bold text-[#004632] blur-sm">東京</h1>
      </div>

      {/* 4. Floating Shapes */}
      <div ref={bgShapesRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#BDD0A0] blur-3xl opacity-60 mix-blend-multiply"></div>
        <div className="absolute -right-20 bottom-40 h-80 w-80 rounded-full bg-[#E8C547] blur-3xl opacity-40 mix-blend-multiply"></div>
        <svg className="absolute left-[15%] top-[20%] w-12 h-12 text-[#004632] opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* --- FOREGROUND CONTENT --- */}

      {/* Badge */}
      <div className="absolute right-8 top-8 z-30 hidden md:block">
        <div ref={badgeRef} className="relative flex h-32 w-32 items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute h-full w-full fill-[#004632]">
            <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
            <text className="text-[11px] font-bold uppercase tracking-widest">
              <textPath href="#curve">
                Est. 2025 • Gen Z Brews • Tokyo Sip Club •
              </textPath>
            </text>
          </svg>
          <div className="flex items-center justify-center text-[#004632]">
             <span className="text-3xl">★</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center w-full">
        
        {/* Text Line 1 - Now Static on Load */}
        <div className="relative">
          <h1
            ref={textLine1Ref}
            className="font-heading text-[15vw] leading-[0.85] text-[#004632] tracking-tighter text-center py-2"
            style={{ textShadow: '4px 4px 0px #BDD0A0' }}
          >
            TOKYO
          </h1>
        </div>

        {/* Text Line 2 - Now Static on Load */}
        <div className="relative">
          <h1
            ref={textLine2Ref}
            className="font-heading text-[15vw] leading-[0.85] text-[#004632] tracking-tighter text-center py-2"
            style={{ textShadow: '4px 4px 0px #BDD0A0' }}
          >
            SIP CLUB
          </h1>
        </div>

      </div>

      {/* Marquee */}
      <div className="relative z-20 w-full border-t-2 border-[#004632] bg-[#BDD0A0]">
        <Marquee text=" FRESH BREWS • NO BAD VIBES • MATCHA HEAVEN • OPEN LATE • " />
      </div>
    </section>
  );
};

export default Hero;