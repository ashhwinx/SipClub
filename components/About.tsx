import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Zap, sticker } from 'lucide-react'; // Ensure you have lucide-react or generic icons
// import { useCursor } from '../context/CursorContext';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const vibeMeterRef = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);
  
  // const { setCursorVariant, setCursorText } = useCursor();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. The Image "Pop" and Rotate Effect
      gsap.fromTo(imageWrapperRef.current, 
        { scale: 0.8, rotation: -10, opacity: 0 },
        {
          scale: 1,
          rotation: 3, // Lands slightly tilted
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );

      // 2. Text Highlight Reveal (The "Karaoke" Effect)
      if (textRef.current) {
        const words = textRef.current.innerText.split(' ');
        textRef.current.innerHTML = '';
        words.forEach((word) => {
          const span = document.createElement('span');
          span.innerText = word + ' ';
          span.style.opacity = '0.2'; 
          textRef.current?.appendChild(span);
        });
        const spans = textRef.current.querySelectorAll('span');
        gsap.to(spans, {
          opacity: 1,
          color: "#004632", // Deep Matcha
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 0.5,
          }
        });
      }

      // 3. Vibe Meter Fill Animation
      gsap.fromTo(vibeMeterRef.current,
        { width: "0%" },
        {
          width: "100%",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      // 4. Rotating Sticker Badge
      gsap.to(stickerRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "linear"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-[#FEF8DD] py-32"
    >
      {/* --- BACKGROUND CHAOS (Grid & Lines) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#004632 1px, transparent 1px), linear-gradient(90deg, #004632 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT: VISUAL STACK (The "Cool" Part) --- */}
          <div className="lg:col-span-6 relative">
            
            {/* 1. The Main Image (Polaroid Style) */}
            <div ref={imageWrapperRef} className="relative z-20 group cursor-none">
              <div className="bg-white p-4 pb-16 rounded shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-0 border-2 border-[#004632]">
                <div className="overflow-hidden border border-[#004632] h-[500px]">
                   <img 
                     src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
                     alt="Cafe Vibe" 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                   />
                </div>
                {/* Handwritten Note */}
                <div className="absolute bottom-4 left-6 font-heading text-[#004632] text-xl">
                  Shibuya, 2025 (Original)
                </div>
              </div>

              {/* 2. Floating "Receipt" Card (Overlap) */}
              <div className="absolute -right-12 -bottom-12 bg-[#FEF8DD] border-2 border-[#004632] p-6 w-64 shadow-[8px_8px_0px_#004632] hidden md:block rotate-6 z-30">
                <div className="flex justify-between border-b border-[#004632] border-dashed pb-2 mb-2 font-mono text-xs text-[#004632]">
                  <span>ORDER #001</span>
                  <span>12:45 PM</span>
                </div>
                <div className="font-bold text-[#004632] mb-1">1x MATCHA LATTE</div>
                <div className="font-bold text-[#004632] mb-1">1x GOOD VIBES</div>
                <div className="font-bold text-[#004632] mb-4">1x LO-FI BEATS</div>
                <div className="text-right font-black text-2xl text-[#004632]">¥1,200</div>
              </div>

              {/* 3. Rotating Sticker */}
              <div ref={stickerRef} className="absolute -top-12 -left-12 z-40 text-[#BDD0A0]">
                 <svg width="140" height="140" viewBox="0 0 100 100" className="fill-current drop-shadow-lg">
                    <path d="M50,0 L61,35 L98,35 L68,57 L79,91 L50,70 L21,91 L32,57 L2,35 L39,35 Z" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center font-bold text-[#004632] text-xs uppercase tracking-wider transform -rotate-12">
                   Certified<br/>Fresh
                 </div>
              </div>
            </div>

          </div>

          {/* --- RIGHT: TYPOGRAPHY & STORY --- */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Header with Outline Effect */}
            <h2 className="text-7xl md:text-8xl font-heading leading-[0.9] text-[#004632] mb-8 relative">
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px #004632' }}>NOT JUST</span>
              <span className="block text-[#BDD0A0]">COFFEE.</span>
            </h2>

            {/* The Story */}
            <p 
              ref={textRef}
              className="text-2xl md:text-3xl font-medium leading-tight text-[#004632] opacity-100 mb-12 font-sans"
            >
              We blend traditional Japanese precision with the chaotic energy of Tokyo streets. Minimalist flavors, maximalist vibes. A space created for the digital nomads, the dreamers, and the matcha obsessives.
            </p>

            {/* --- THE VIBE METER (New Cool Element) --- */}
            <div className="mb-12">
              <div className="flex justify-between text-[#004632] font-bold font-mono text-sm mb-2 uppercase">
                <span>Vibe Check</span>
                <span>Immaculate</span>
              </div>
              <div className="h-6 w-full border-2 border-[#004632] rounded-full p-1 relative overflow-hidden">
                {/* The Fill */}
                <div 
                  ref={vibeMeterRef} 
                  className="h-full bg-[#004632] rounded-full relative"
                >
                   {/* Animated Stripes inside the bar */}
                   <div className="absolute inset-0 opacity-20" 
                        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #FEF8DD 10px, #FEF8DD 20px)' }}>
                   </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-6">
              <button 
                className="group relative px-8 py-4 bg-[#004632] text-[#FEF8DD] font-heading text-lg rounded-full overflow-hidden"
                onMouseEnter={() => { setCursorText('GO'); setCursorVariant('hover'); }}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="absolute inset-0 bg-[#BDD0A0] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 group-hover:text-[#004632] transition-colors duration-300">READ MANIFESTO</span>
              </button>

              <div className="flex items-center gap-2 text-[#004632]">
                 <Zap className="fill-[#004632]" size={20}/>
                 <span className="font-bold text-sm">EST. 2025</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;