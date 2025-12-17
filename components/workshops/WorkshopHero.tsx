import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Binary, ArrowDownRight, CircleDashed } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WorkshopHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLHeadingElement>(null);
  const textRightRef = useRef<HTMLHeadingElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Kinetic Typography (Parallax)
      gsap.to(textLeftRef.current, {
        xPercent: -10,
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
      });
      
      gsap.to(textRightRef.current, {
        xPercent: 10,
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
      });

      // 2. Background Shapes Floating
      gsap.to(shapesRef.current, {
        yPercent: 30,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      // 3. Rotating Elements
      gsap.to(".spin-element", {
        rotation: 360,
        repeat: -1,
        duration: 20,
        ease: "linear"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative flex h-[100vh] md:h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-[#FEF8DD] pt-20 border-b-4 border-[#004632]">
        
        {/* --- BACKGROUND TEXTURE --- */}
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply z-0" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
        </div>

        {/* --- FLOATING BLURRED SHAPES --- */}
        <div ref={shapesRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
             <div className="absolute top-10 right-10 w-64 h-64 bg-[#BDD0A0] rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
             <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#004632] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
        </div>

        {/* --- JAPANESE BACKGROUND TEXT --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[25vw] text-[#BDD0A0] opacity-20 pointer-events-none select-none z-0 mix-blend-multiply whitespace-nowrap">
            ワークショップ
        </div>

        {/* --- TECHNICAL CORNERS --- */}
        <div className="absolute top-24 left-6 md:left-12 font-mono text-xs text-[#004632] flex flex-col gap-1 z-20">
            <div className="flex items-center gap-2">
                <Binary size={12} />
                <span>EDUCATION_DEPT</span>
            </div>
            <span>CLASS_VOL.01</span>
        </div>

        <div className="absolute top-24 right-6 md:right-12 font-mono text-xs text-[#004632] text-right z-20">
            <div className="border border-[#004632] px-2 py-1 inline-block bg-[#FEF8DD]">
                OPEN REGISTRATION
            </div>
        </div>

        {/* --- MAIN TYPOGRAPHY --- */}
        <div className="relative z-10 flex w-full flex-col items-center leading-[0.85] select-none mix-blend-darken">
           
           <Sparkles className="absolute -top-12 right-[20%] text-[#004632] w-12 h-12 animate-pulse hidden md:block" />

           <h1 
               ref={textLeftRef}
               className="font-heading text-[16vw] md:text-[15vw] text-transparent [-webkit-text-stroke:1px_#004632] md:[-webkit-text-stroke:2px_#004632] whitespace-nowrap"
           >
               CULTURE
           </h1>
           
           <div className="flex items-center gap-4 w-full justify-center my-2 md:my-4">
                <div className="h-[2px] w-20 md:w-40 bg-[#004632]"></div>
                <div className="spin-element">
                    <CircleDashed size={30} className="text-[#004632]" />
                </div>
                <div className="h-[2px] w-20 md:w-40 bg-[#004632]"></div>
           </div>

           <h1 
               ref={textRightRef}
               className="font-heading text-[18vw] md:text-[15vw] text-[#004632] whitespace-nowrap"
           >
               CLUB
           </h1>
        </div>

        {/* --- BOTTOM BADGE --- */}
        <div className="absolute bottom-8 left-6 md:left-12 z-20">
            <div className="flex items-start gap-4">
                <ArrowDownRight size={32} className="text-[#004632]" />
                <p className="font-mono text-xs md:text-sm font-bold uppercase text-[#004632] max-w-[150px] leading-tight opacity-80">
                    Learn the art of brewing, tasting, and creating.
                </p>
            </div>
        </div>
        
    </section>
  );
};

export default WorkshopHero;