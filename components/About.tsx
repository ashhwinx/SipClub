import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const vibeMeterRef = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Image Entrance
      gsap.fromTo(imageWrapperRef.current, 
        { scale: 0.9, rotation: -5, opacity: 0 },
        {
          scale: 1,
          rotation: 3,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // 2. Karaoke Highlight Text
      const words = textRef.current?.querySelectorAll('.word-span');
      if (words) {
        gsap.to(words, {
          opacity: 1,
          color: "#004632",
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 0.5,
          }
        });
      }

      // 3. Vibe Meter Fill
      gsap.fromTo(vibeMeterRef.current,
        { width: "0%" },
        {
          width: "100%",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      // 4. Slow Sticker Rotation (20s)
      gsap.to(stickerRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const storyText = "We blend traditional Japanese precision with the chaotic energy of Tokyo streets. Minimalist flavors, maximalist vibes. A space created for the digital nomads, the dreamers, and the matcha obsessives.";

  return (
    <section 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-[#FEF8DD] py-16 md:py-32"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#004632 1px, transparent 1px), linear-gradient(90deg, #004632 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* --- LEFT: VISUAL STACK --- */}
          <div className="lg:col-span-6 relative">
            
            <div ref={imageWrapperRef} className="relative z-20 will-change-transform max-w-[550px] mx-auto lg:mx-0">
              {/* Polaroid Frame */}
              <div className="bg-white p-3 md:p-4 pb-12 md:pb-16 rounded shadow-2xl border-2 border-[#004632]">
                <div className="overflow-hidden border border-[#004632] h-[350px] md:h-[500px]">
                   <img 
                     src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
                     alt="Cafe Vibe" 
                     className="w-full h-full object-cover transition-all duration-700"
                   />
                </div>
                <div className="absolute bottom-3 md:bottom-4 left-5 md:left-6 font-heading text-[#004632] text-lg md:text-xl">
                  Shibuya, 2025 
                </div>
              </div>

              {/* Receipt Card - Optimized for Mobile Alignment */}
              <div className="absolute -right-3 -bottom-6 md:-right-12 md:-bottom-12 bg-[#FEF8DD] border-2 border-[#004632] p-4 md:p-6 w-40 md:w-64 shadow-[6px_6px_0px_#004632] md:shadow-[8px_8px_0px_#004632] rotate-6 z-30">
                <div className="flex justify-between border-b border-[#004632] border-dashed pb-1 md:pb-2 mb-2 font-mono text-[8px] md:text-xs text-[#004632]">
                  <span>ORDER #001</span>
                  <span>12:45 PM</span>
                </div>
                <div className="font-bold text-[#004632] text-[10px] md:text-base leading-tight mb-1">1x MATCHA LATTE</div>
                <div className="font-bold text-[#004632] text-[10px] md:text-base leading-tight mb-1">1x GOOD VIBES</div>
                <div className="font-bold text-[#004632] text-[10px] md:text-base leading-tight mb-2 md:mb-4">1x LO-FI BEATS</div>
                <div className="text-right font-black text-lg md:text-2xl text-[#004632]">¥1,200</div>
              </div>

              {/* Slow Rotating Sticker */}
              <div ref={stickerRef} className="absolute -top-6 -left-6 md:-top-12 md:-left-12 z-40 text-[#BDD0A0] scale-[0.65] md:scale-100">
                 <svg width="140" height="140" viewBox="0 0 100 100" className="fill-current">
                    <path d="M50,0 L61,35 L98,35 L68,57 L79,91 L50,70 L21,91 L32,57 L2,35 L39,35 Z" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-[#004632] text-xs uppercase tracking-wider transform -rotate-12 text-center leading-tight">
                    <span>Certified</span>
                    <span>Fresh</span>
                 </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-5xl md:text-8xl font-heading leading-[0.9] text-[#004632] mb-6 md:mb-8">
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px #004632' }}>NOT JUST</span>
              <span className="block text-[#BDD0A0]">COFFEE.</span>
            </h2>

            <p 
              ref={textRef}
              className="text-xl md:text-3xl font-medium leading-tight text-[#004632]/20 mb-10 md:mb-12 font-sans"
            >
              {storyText.split(' ').map((word, i) => (
                <span key={i} className="word-span inline-block mr-1.5">{word}</span>
              ))}
            </p>

            {/* Vibe Meter */}
            <div className="mb-10 md:mb-12">
              <div className="flex justify-between text-[#004632] font-bold font-mono text-[10px] md:text-xs mb-2 uppercase">
                <span>Vibe Check</span>
                <span>Immaculate</span>
              </div>
              <div className="h-5 md:h-6 w-full border-2 border-[#004632] rounded-full p-1 overflow-hidden">
                <div ref={vibeMeterRef} className="h-full bg-[#004632] rounded-full relative will-change-[width]">
                   <div className="absolute inset-0 opacity-20" 
                        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #FEF8DD 10px, #FEF8DD 20px)' }}>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <button className="group relative px-8 py-4 md:px-10 md:py-5 bg-[#004632] text-[#FEF8DD] font-heading text-lg md:text-xl rounded-full overflow-hidden transition-all active:scale-95 w-full sm:w-auto">
                <div className="absolute inset-0 bg-[#BDD0A0] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 group-hover:text-[#004632] transition-colors duration-300">
                  READ MANIFESTO
                </span>
              </button>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;