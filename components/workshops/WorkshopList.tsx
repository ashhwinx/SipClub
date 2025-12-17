import React, { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MapPin, Calendar, Clock, Disc } from 'lucide-react';
// import { useCursor } from '../../context/CursorContext';

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const WORKSHOPS = [
  {
    id: '01',
    date: '20 DEC',
    title: 'LATTE ART 101',
    category: 'SKILL LAB',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
    desc: 'Master the mechanics of micro-foam. Learn to pour hearts, tulips, and rosettas with precision. A hands-on session for beginners.',
    price: '¥3000',
    location: 'LAB A',
    time: '10:00 AM'
  },
  {
    id: '02',
    date: '24 DEC',
    title: 'MATCHA CEREMONY',
    category: 'CULTURE',
    image: 'https://images.unsplash.com/photo-1536637706725-c96e8837df7d?q=80&w=1200&auto=format&fit=crop',
    desc: 'A deep dive into Uji tea culture. Learn traditional whisking techniques, water temperature control, and ceremonial etiquette.',
    price: '¥4500',
    location: 'TATAMI ROOM',
    time: '02:00 PM'
  },
  {
    id: '03',
    date: '05 JAN',
    title: 'SENSORY CUPPING',
    category: 'TASTING',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop',
    desc: 'Calibrate your palate. A guided blind tasting of 5 single-origin beans from our seasonal rotation. Identify notes like a pro.',
    price: '¥2500',
    location: 'MAIN BAR',
    time: '11:00 AM'
  },
];

const WorkshopList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { setCursorVariant, setCursorText } = useCursor();
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Only run ScrollTrigger logic on Desktop (lg screens)
      // On mobile, we just stack them naturally
      if (window.innerWidth >= 1024) {
        const sections = gsap.utils.toArray('.workshop-text-section');
        sections.forEach((section: any, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: 'top center', 
            end: 'bottom center',
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#FEF8DD] py-12 md:py-24 relative border-b-4 border-[#004632]">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row items-start md:items-end justify-between border-b-2 border-[#004632] pb-6">
            <div>
                <div className="bg-[#004632] text-[#FEF8DD] inline-block px-3 py-1 font-mono text-xs uppercase tracking-widest mb-4">
                    /// Interactive Syllabus
                </div>
                <h2 className="font-heading text-5xl md:text-7xl text-[#004632] leading-none">
                    UPCOMING<br/>SESSIONS
                </h2>
            </div>
            <div className="hidden md:block text-right font-mono text-xs text-[#004632]">
                <p>SCROLL TO EXPLORE ↓</p>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* === LEFT SIDE: STICKY IMAGE (Visible only on Desktop) === */}
          <div className="hidden lg:block w-1/2 h-[600px] sticky top-32">
             <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-[#004632] shadow-[10px_10px_0px_#004632]">
                
                {/* Images Stack */}
                {WORKSHOPS.map((item, index) => (
                    <div 
                        key={item.id}
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out bg-black ${
                            activeIndex === index 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-10 scale-105'
                        }`}
                    >
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover opacity-90"
                        />
                        
                        {/* Overlay Details */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#004632] via-transparent to-transparent opacity-60"></div>
                        
                        {/* Top Label */}
                        <div className="absolute top-6 left-6 flex gap-2">
                             <div className="bg-[#FEF8DD] text-[#004632] px-3 py-1 font-mono text-xs font-bold uppercase border border-[#004632]">
                                 FIG. {item.id}
                             </div>
                             <div className="bg-[#004632] text-[#FEF8DD] px-3 py-1 font-mono text-xs uppercase border border-[#FEF8DD]">
                                 {item.category}
                             </div>
                        </div>

                        {/* Bottom Big Text */}
                        <div className="absolute bottom-6 right-6 font-heading text-[#FEF8DD] text-8xl leading-none opacity-20">
                             {item.id}
                        </div>
                    </div>
                ))}
             </div>
          </div>

          {/* === RIGHT SIDE: SCROLLABLE TEXT (Desktop) / STACKED (Mobile) === */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16 lg:gap-0">
             
             {WORKSHOPS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`workshop-text-section flex flex-col justify-center min-h-auto lg:min-h-[600px] py-0 lg:py-12 ${
                        // On desktop, dim inactive text
                        activeIndex === index ? 'lg:opacity-100' : 'lg:opacity-30'
                    } transition-opacity duration-500`}
                >
                    {/* MOBILE ONLY IMAGE (Standard Card Style) */}
                    <div className="lg:hidden w-full h-64 rounded-2xl overflow-hidden border-2 border-[#004632] mb-6 relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#FEF8DD] text-[#004632] px-2 py-1 font-mono text-xs font-bold border border-[#004632]">
                             {item.category}
                        </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="border-l-2 border-[#004632] pl-6 md:pl-10 relative">
                        
                        {/* Active Indicator Line (Desktop) */}
                        <div className={`hidden lg:block absolute left-[-2px] top-0 w-[2px] bg-[#004632] transition-all duration-500 ${
                            activeIndex === index ? 'h-full bg-[#BDD0A0]' : 'h-0'
                        }`}></div>

                        <div className="flex items-center gap-4 mb-4 font-mono text-xs text-[#004632] opacity-70 uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Calendar size={12}/> {item.date}</span>
                            <span className="flex items-center gap-1"><Clock size={12}/> {item.time}</span>
                        </div>

                        <h3 className="font-heading text-4xl md:text-6xl text-[#004632] mb-6 leading-[0.9]">
                            {item.title}
                        </h3>

                        <p className="font-sans text-lg text-[#004632]/80 leading-relaxed mb-8 max-w-md">
                            {item.desc}
                        </p>

                        <div className="flex items-center gap-6 font-mono text-xs text-[#004632] mb-8 border-y border-[#004632]/20 py-4">
                            <div className="flex items-center gap-2">
                                <MapPin size={14} /> {item.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Disc size={14} className="animate-spin-slow" /> OPEN
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                             <div className="font-heading text-3xl text-[#004632]">{item.price}</div>
                             <button 
                                className="group bg-[#004632] text-[#FEF8DD] px-6 py-3 rounded-full font-heading text-lg flex items-center gap-2 hover:bg-[#BDD0A0] hover:text-[#004632] transition-all"
                                onMouseEnter={() => { setCursorText('BOOK'); setCursorVariant('hover'); }}
                                onMouseLeave={() => setCursorVariant('default')}
                             >
                                 RESERVE
                                 <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                             </button>
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

export default WorkshopList;