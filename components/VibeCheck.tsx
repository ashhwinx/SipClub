import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MessageCircle, Heart, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const reviews = [
  { id: 1, user: "@matcha_queen", text: "This place is literally a pinterest board.", rating: "★★★★★", tag: "VIBE" },
  { id: 2, user: "@tokyo_drifter", text: "Best Dirty Matcha in Shibuya. No cap.", rating: "★★★★★", tag: "TASTE" },
  { id: 3, user: "@design_nerd", text: "The typography here heals my soul.", rating: "★★★★★", tag: "DESIGN" },
  { id: 4, user: "@caffeine_addict", text: "I live here now. Send rent money.", rating: "★★★★★", tag: "MOOD" },
];

const images = [
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
];

const VibeCheck: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const createMarquee = (element: HTMLDivElement | null, direction: 'left' | 'right', speed: number) => {
        if (!element) return;
        
        const content = element.firstElementChild as HTMLElement;
        if (!content) return;
        
        // Clone for infinite loop
        const clone = content.cloneNode(true);
        element.appendChild(clone);
        
        const totalWidth = content.offsetWidth;
        gsap.set(element, { x: direction === 'right' ? -totalWidth : 0 });
        
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        
        tl.to(element, {
             x: direction === 'right' ? 0 : -totalWidth,
             duration: speed,
        });

        // Pause on Hover Interaction
        element.addEventListener('mouseenter', () => tl.pause());
        element.addEventListener('mouseleave', () => tl.play());

        // Scroll Velocity Effect (Speeds up when you scroll)
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const timeScale = 1 + Math.abs(velocity / 500);
            gsap.to(tl, { timeScale: timeScale, duration: 0.2 });
            gsap.to(tl, { timeScale: 1, duration: 0.5, delay: 0.2, overwrite: 'auto' });
          }
        });
      };

      createMarquee(row1Ref.current, 'left', 40); 
      createMarquee(row2Ref.current, 'right', 45);

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#FEF8DD] py-32 overflow-hidden flex flex-col justify-center gap-16">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-20 left-10 opacity-20 pointer-events-none">
         <Star size={80} className="text-[#004632] animate-spin-slow" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none">
         <Zap size={80} className="text-[#BDD0A0] fill-current animate-bounce" />
      </div>

      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block border-2 border-[#004632] px-4 py-1 rounded-full text-[#004632] font-mono text-sm font-bold uppercase tracking-widest mb-4">
           /// Community Feed
        </div>
        <h2 className="font-heading text-[#004632] text-6xl md:text-8xl leading-none">
          THE HYPE IS REAL
        </h2>
      </div>

      {/* --- ROW 1: THE GALLERY (Moving Left) --- */}
      <div className="relative w-full overflow-hidden z-10 border-y-2 border-[#004632] bg-white">
         <div ref={row1Ref} className="flex w-max">
            <div className="flex">
              {images.map((src, i) => (
                <div key={i} className="group relative w-[300px] h-[300px] md:w-[450px] md:h-[350px] flex-shrink-0 border-r-2 border-[#004632] overflow-hidden">
                   {/* Image - Hover par sirf scale hoga ab */}
                   <img 
                    src={src} 
                    alt="Vibe" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   
                   {/* Play Button Overlay Hata Diya Gaya Hai */}
                   
                   
                </div>
              ))}
            </div>
         </div>
      </div>

      {/* --- ROW 2: THE REVIEWS (Moving Right) --- */}
      <div className="relative w-full overflow-hidden z-10">
         <div ref={row2Ref} className="flex w-max gap-8 px-4 py-8">
            <div className="flex gap-8">
               {reviews.map((review) => (
                  <div key={review.id} className="relative w-[350px] md:w-[500px] flex-shrink-0 bg-white border-2 border-[#004632] p-8 shadow-[8px_8px_0px_#BDD0A0] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all rounded-xl">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-center mb-6 border-b border-dashed border-[#004632]/30 pb-4">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#004632] rounded-full flex items-center justify-center text-[#FEF8DD]">
                               <MessageCircle size={18} />
                            </div>
                            <div>
                               <div className="font-bold text-[#004632] text-sm md:text-base">{review.user}</div>
                               <div className="text-[10px] uppercase tracking-wider text-[#004632]/60">Verified Sipper</div>
                            </div>
                         </div>
                         <div className="bg-[#BDD0A0] text-[#004632] px-3 py-1 rounded-full text-xs font-bold border border-[#004632]">
                            {review.tag}
                         </div>
                      </div>
                      
                      {/* Review Text */}
                      <p className="font-heading text-2xl md:text-3xl text-[#004632] leading-tight mb-6">
                        "{review.text}"
                      </p>
                      
                      {/* Footer Info */}
                      <div className="flex justify-between items-center">
                         <div className="flex text-[#004632] gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                         </div>
                         
                      </div>

                  </div>
               ))}
            </div>
         </div>
      </div>

    </section>
  );
};

export default VibeCheck;