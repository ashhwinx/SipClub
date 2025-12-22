import React from 'react';
import gsap from 'gsap';
import { ScanLine, Binary, ArrowUpRight, ShieldCheck } from 'lucide-react';

const MenuBento: React.FC = () => {

  // --- Optimized Animation Handlers ---
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const img = target.querySelector('img');
    const details = target.querySelector('.details-panel');
    const stamp = target.querySelector('.stamp-spin');

    // 1. Image Zoom ONLY (No color change needed now)
    if (img) {
      gsap.to(img, { 
        scale: 1.05, 
        duration: 0.6, 
        ease: 'power2.out',
        force3D: true,
        overwrite: 'auto'
      });
    }
    
    // 2. Reveal Details Panel
    if (details) {
      gsap.to(details, { 
        y: 0, 
        opacity: 1, 
        duration: 0.4, 
        ease: 'power3.out',
        force3D: true,
        overwrite: 'auto'
      });
    }

    // 3. Spin the Stamp
    if (stamp) {
      gsap.to(stamp, { 
        rotation: 360, 
        duration: 0.8, 
        ease: 'back.out(1.7)',
        force3D: true,
        overwrite: 'auto'
      });
    }
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const img = target.querySelector('img');
    const details = target.querySelector('.details-panel');
    const stamp = target.querySelector('.stamp-spin');

    // Reset Zoom
    if (img) {
      gsap.to(img, { 
        scale: 1, 
        duration: 0.6, 
        ease: 'power2.out',
        force3D: true,
        overwrite: 'auto'
      });
    }

    // Hide Details
    if (details) {
      gsap.to(details, { 
        y: 20, 
        opacity: 0, 
        duration: 0.4, 
        ease: 'power3.in',
        force3D: true,
        overwrite: 'auto'
      });
    }

    // Reset Stamp
    if (stamp) {
      gsap.to(stamp, { 
        rotation: 0, 
        duration: 0.6,
        force3D: true,
        overwrite: 'auto'
      });
    }
  };

  return (
    <section className="w-full bg-[#FEF8DD] py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8 md:mb-12 border-b-2 border-[#004632] pb-4">
            <div>
                <div className="font-mono text-xs text-[#004632] mb-2 uppercase tracking-widest">/// Select Your Vibe</div>
                <h2 className="font-heading text-6xl md:text-8xl text-[#004632] leading-none">
                  ARCHIVE<span className="text-[#BDD0A0]">.01</span>
                </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-[#004632] text-right">
              <p>FIG. 2025-A</p>
              <p>STATUS: ACTIVE</p>
            </div>
        </div>

        {/* --- THE BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[450px] md:auto-rows-[500px] border-t-2 border-[#004632]">
            
            {/* ITEM 01: DIRTY MATCHA */}
            <div
  className="group relative col-span-1 md:col-span-6 border-l-2 border-r-2 border-b-2 border-[#004632] overflow-hidden bg-white cursor-pointer transform-gpu"
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}
>
  <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-20 pointer-events-none">
    <ArrowUpRight className="text-[#004632] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
  </div>

  <div className="w-full h-full relative overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=800&auto=format&fit=crop"
      alt="Matcha Latte"
      className="w-full h-full object-cover will-change-transform transform-gpu"
    />
  </div>

  <div className="details-panel absolute bottom-0 left-0 w-full bg-[#FEF8DD] border-t-2 border-[#004632] p-6 translate-y-full opacity-0 z-30 flex justify-between items-end will-change-transform">
    <div>
      <h3 className="font-heading text-4xl text-[#004632] leading-none">MATCHA LATTE</h3>
      <p className="font-mono text-xs text-[#004632] mt-1">JAPANESE STYLE • SILKY & SMOOTH</p>
    </div>
    <div className="text-right">
      <span className="font-heading text-4xl text-[#004632]">¥900</span>
    </div>
  </div>
</div>



            {/* ITEM 02: YUZU */}
            <div 
               className="group relative col-span-1 md:col-span-3 border-l-2 md:border-l-0 border-r-2 border-b-2 border-[#004632] overflow-hidden bg-[#F2F2F2] cursor-pointer transform-gpu"
               onMouseEnter={handleEnter}
               onMouseLeave={handleLeave}
            >
               <div className="absolute top-4 right-4 z-20">
                  <ScanLine size={20} className="text-[#004632]" />
               </div>

               <div className="w-full h-full relative flex items-center justify-center p-8 overflow-hidden">
                   <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#004632 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                   <img 
                      src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop" 
                      alt="Yuzu" 
                      // Removed 'filter grayscale' here
                      className="w-full h-[70%] object-cover rounded-full border-2 border-[#004632] will-change-transform transform-gpu"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <h3 className="font-heading text-6xl text-[#FEF8DD] mix-blend-difference tracking-tighter">YUZU</h3>
                  </div>
               </div>

               <div className="details-panel absolute bottom-4 left-4 right-4 bg-[#004632] text-[#FEF8DD] p-3 text-center translate-y-10 opacity-0 z-30 will-change-transform">
                  <span className="font-mono text-xs font-bold uppercase">Sparkling Citrus • ¥750</span>
               </div>
            </div>

            {/* ITEM 03: INFO BLOCK */}
            <div className="group relative col-span-1 md:col-span-3 border-l-2 md:border-l-0 border-r-2 border-b-2 border-[#004632] bg-[#FEF8DD] p-6 flex flex-col justify-between transform-gpu">
               <div className="font-mono text-[10px] text-[#004632] flex justify-between uppercase border-b border-[#004632] pb-2">
                  <span>Data_Sheet.03</span>
                  <Binary size={12} />
               </div>

               <div className="flex-grow flex flex-col justify-center items-center">
                  <div className="stamp-spin w-20 h-20 border-2 border-[#004632] rounded-full flex items-center justify-center mb-6 will-change-transform">
                      <ShieldCheck size={32} className="text-[#004632]" />
                  </div>
                  <ul className="w-full font-mono text-xs text-[#004632] space-y-3">
                     <li className="flex justify-between border-b border-[#004632]/20 pb-1">
                        <span>ORIGIN</span>
                        <span className="font-bold">UJI, JAPAN</span>
                     </li>
                     <li className="flex justify-between border-b border-[#004632]/20 pb-1">
                        <span>NOTES</span>
                        <span className="font-bold">UMAMI / NUTTY</span>
                     </li>
                     <li className="flex justify-between border-b border-[#004632]/20 pb-1">
                        <span>GRADE</span>
                        <span className="font-bold">PREMIUM</span>
                     </li>
                  </ul>
               </div>

               <div className="w-full py-3 bg-[#004632] mt-4 flex items-center justify-center overflow-hidden relative group-hover:bg-[#BDD0A0] transition-colors duration-300 cursor-pointer">
                  <div className="font-heading text-[#FEF8DD] group-hover:text-[#004632] text-lg uppercase transition-colors duration-300">Full Menu ↗</div>
               </div>
            </div>

            {/* ITEM 04: HOJICHA */}
            <div 
               className="group relative col-span-1 md:col-span-12 h-full min-h-[300px] border-l-2 border-r-2 border-b-2 border-[#004632] overflow-hidden bg-black cursor-pointer transform-gpu"
               onMouseEnter={handleEnter}
               onMouseLeave={handleLeave}
            >
               <div className="absolute inset-0 opacity-60 overflow-hidden">
                  <img 
                      src="https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1200&auto=format&fit=crop" 
                      alt="Hojicha" 
                      // Removed 'filter grayscale' here
                      className="w-full h-full object-cover will-change-transform transform-gpu"
                  />
               </div>
               
               <div className="absolute inset-0 flex items-center justify-between px-6 md:px-16 z-10">
                  <div>
                      
                      <h2 className="font-heading text-6xl md:text-9xl text-[#FEF8DD] mix-blend-difference group-hover:tracking-widest transition-all duration-700">
                          HOJICHA
                      </h2>
                  </div>
                  
                  <div className="hidden md:block">
                      <div className="stamp-spin w-24 h-24 bg-[#BDD0A0] rounded-full flex items-center justify-center text-[#004632] font-heading text-xl border-2 border-[#004632] will-change-transform">
                          ROASTED
                      </div>
                  </div>
               </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default MenuBento;