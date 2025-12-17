import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
// import { useCursor } from '../context/CursorContext';

const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const rotatingIconRef = useRef<HTMLDivElement>(null);
  // const { setCursorVariant, setCursorText } = useCursor();
  
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entry Animation (Split Screen Slide In)
      const tl = gsap.timeline();
      
      tl.from(leftPanelRef.current, {
        xPercent: -100,
        duration: 1.5,
        ease: 'power4.inOut'
      })
      .from(rightPanelRef.current, {
        xPercent: 100,
        duration: 1.5,
        ease: 'power4.inOut'
      }, "<"); // Run simultaneously

      // 2. Rotating Icon Animation
      const rotateTween = gsap.to(rotatingIconRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear'
      });

      // Store tween reference for hover interaction
      if (rotatingIconRef.current) {
        rotatingIconRef.current.addEventListener('mouseenter', () => {
            gsap.to(rotateTween, { timeScale: 5, duration: 1 });
        });
        rotatingIconRef.current.addEventListener('mouseleave', () => {
            gsap.to(rotateTween, { timeScale: 1, duration: 1 });
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@tokyosip.club');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isTouchDevice = () => {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
  };

  return (
    <div ref={containerRef} className="flex min-h-screen w-full flex-col overflow-hidden md:flex-row">
      
      {/* --- LEFT PANEL: VISUAL HOOK --- */}
      <div 
        ref={leftPanelRef} 
        className="relative flex h-[50vh] w-full flex-col items-center justify-center bg-deep-matcha text-creamy-vanilla md:h-screen md:w-1/2"
      >
        <div className="relative z-10 flex flex-col items-center leading-none">
            <h1 className="font-heading text-[12vw] md:text-[8vw]">SAY</h1>
            <h1 className="font-heading text-[12vw] md:text-[8vw]">HELLO.</h1>
        </div>

        {/* Rotating Graphic: Takeout Cup SVG */}
        <div 
          ref={rotatingIconRef}
          className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-overlay"
        >
           <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified Cup Graphic */}
                <path d="M50 60 L60 160 C60 170 70 180 100 180 C130 180 140 170 140 160 L150 60" stroke="#BDD0A0" strokeWidth="4"/>
                <path d="M45 60 L155 60" stroke="#BDD0A0" strokeWidth="4"/>
                <path d="M55 50 L145 50 L140 60 L60 60 Z" fill="#BDD0A0" fillOpacity="0.2" stroke="#BDD0A0" strokeWidth="2"/>
                {/* Straw */}
                <path d="M120 50 L130 10" stroke="#BDD0A0" strokeWidth="4"/>
                {/* Label */}
                <circle cx="100" cy="120" r="20" stroke="#BDD0A0" strokeWidth="2" />
                <path d="M90 120 L110 120" stroke="#BDD0A0" strokeWidth="2" />
           </svg>
        </div>

        {/* Email Interaction */}
        <div className="absolute bottom-12 z-20">
            <button
                onClick={handleCopyEmail}
                className="group relative flex items-center gap-2 rounded-full border border-creamy-vanilla/20 bg-white/5 px-6 py-3 font-body text-sm font-bold tracking-widest backdrop-blur-md transition-all hover:bg-white/10"
                onMouseEnter={() => { if(!isTouchDevice()) { setCursorText('COPY'); setCursorVariant('hover'); } }}
                onMouseLeave={() => { if(!isTouchDevice()) setCursorVariant('default'); }}
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>HELLO@TOKYOSIP.CLUB</span>
                
                {/* Tooltip */}
                <div className={`absolute -top-12 left-1/2 -translate-x-1/2 rounded-md bg-soft-sage px-3 py-1 text-xs text-deep-matcha transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>
                    COPIED! 📋
                </div>
            </button>
        </div>
      </div>


      {/* --- RIGHT PANEL: APPLICATION FORM --- */}
      <div 
        ref={rightPanelRef} 
        className="relative flex min-h-[50vh] w-full flex-col justify-between bg-creamy-vanilla p-8 text-deep-matcha md:h-screen md:w-1/2 md:p-20 md:pt-32"
      >
        <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-12 font-heading text-3xl md:text-5xl">THE APPLICATION</h2>
            
            <form className="flex flex-col gap-8">
                {/* Input: Name */}
                <div className="group relative">
                    <input 
                        type="text" 
                        placeholder="YOUR NAME" 
                        className="w-full bg-transparent px-4 py-4 font-body text-xl font-medium outline-none transition-colors placeholder:text-deep-matcha/30 focus:bg-soft-sage"
                    />
                    <div className="absolute bottom-0 h-0.5 w-full bg-deep-matcha"></div>
                </div>

                {/* Input: Vibe */}
                <div className="group relative">
                    <input 
                        type="text" 
                        placeholder="YOUR VIBE (SUBJECT)" 
                        className="w-full bg-transparent px-4 py-4 font-body text-xl font-medium outline-none transition-colors placeholder:text-deep-matcha/30 focus:bg-soft-sage"
                    />
                    <div className="absolute bottom-0 h-0.5 w-full bg-deep-matcha"></div>
                </div>

                {/* Input: Message */}
                <div className="group relative">
                    <textarea 
                        rows={3}
                        placeholder="THE TEA (MESSAGE)" 
                        className="w-full resize-none bg-transparent px-4 py-4 font-body text-xl font-medium outline-none transition-colors placeholder:text-deep-matcha/30 focus:bg-soft-sage"
                    />
                    <div className="absolute bottom-0 h-0.5 w-full bg-deep-matcha"></div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <button 
                        type="button"
                        className="group flex w-full items-center justify-between border-2 border-deep-matcha bg-transparent px-8 py-6 font-heading text-2xl transition-all hover:bg-deep-matcha hover:text-creamy-vanilla"
                        onMouseEnter={() => { if(!isTouchDevice()) { setCursorText('SEND'); setCursorVariant('button'); } }}
                        onMouseLeave={() => { if(!isTouchDevice()) setCursorVariant('default'); }}
                    >
                        <span>SEND IT</span>
                        <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-45" size={32} />
                    </button>
                </div>
            </form>
        </div>

        {/* Location Visual */}
        <div className="mt-16 w-full border-t border-deep-matcha pt-8 md:mt-0">
            <div className="flex items-end justify-between font-body text-xs font-bold uppercase tracking-widest opacity-60">
                <div className="flex flex-col gap-1">
                    <span>Find Us:</span>
                    <span>Shibuya Crossing, Tokyo</span>
                    <span>35.6595° N, 139.7004° E</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-deep-matcha"></div>
                    <div className="h-px w-8 bg-deep-matcha"></div>
                </div>
            </div>
        </div>

      </div>

    </div>
  );
};

export default ContactPage;