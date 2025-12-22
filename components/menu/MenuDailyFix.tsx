import React from 'react';
import gsap from 'gsap';
import { Clock, Coffee, ArrowRight } from 'lucide-react';

const DAILY_FIX = [
  { id: '01', time: '08:00', name: 'MORNING LATTE', status: 'ON TIME', price: '¥550' },
  { id: '02', time: '10:30', name: 'AMERICANO', status: 'BREWING', price: '¥500' },
  { id: '03', time: '13:00', name: 'MATCHA LATTE', status: 'DELAYED', price: '¥600' },
  { id: '04', time: '15:45', name: 'COLD BREW', status: 'READY', price: '¥580' }
];

const MenuDailyFix: React.FC = () => {

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const arrow = target.querySelector('.arrow-icon');

    // Main Row Animation - Optimized with force3D and Power3 easing
    gsap.to(target, { 
      x: 20, 
      backgroundColor: '#004632', 
      color: '#FEF8DD', 
      duration: 0.4, 
      ease: 'power3.out',
      force3D: true, 
      overwrite: 'auto' 
    });
    
    // Arrow Animation
    if(arrow) {
      gsap.to(arrow, { 
        opacity: 1, 
        x: 0, 
        duration: 0.4, 
        ease: 'power3.out',
        overwrite: 'auto' 
      });
    }
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const arrow = target.querySelector('.arrow-icon');

    // Reset Row Animation
    gsap.to(target, { 
      x: 0, 
      backgroundColor: 'transparent', 
      color: '#004632', 
      duration: 0.4, 
      ease: 'power3.out',
      force3D: true,
      overwrite: 'auto' 
    });
    
    // Hide Arrow
    if(arrow) {
      gsap.to(arrow, { 
        opacity: 0, 
        x: -10, 
        duration: 0.4, 
        ease: 'power3.out',
        overwrite: 'auto' 
      });
    }
  };

  return (
    <section className="w-full bg-[#FEF8DD] py-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b-4 border-[#004632] pb-4">
            <div>
               <div className="flex items-center gap-2 mb-2 text-[#004632]">
                  <Clock className="animate-pulse" size={20} />
                  <span className="font-mono text-sm tracking-widest uppercase">Live Schedule</span>
               </div>
               <h2 className="font-heading text-6xl md:text-8xl text-[#004632] leading-none">
                  DAILY FIX
               </h2>
            </div>
            <div className="text-right hidden md:block">
               <span className="font-mono text-xs text-[#004632] bg-[#BDD0A0] px-2 py-1">PLATFORM 1</span>
            </div>
        </div>

        {/* The Board */}
        <div className="flex flex-col border-t-2 border-[#004632]">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 py-4 border-b-2 border-[#004632] font-mono text-xs text-[#004632] opacity-70 uppercase tracking-widest px-4">
               <div className="col-span-2 md:col-span-1">No.</div>
               <div className="col-span-2">Time</div>
               <div className="col-span-4 md:col-span-5">Destination (Drink)</div>
               <div className="col-span-2 hidden md:block">Status</div>
               <div className="col-span-4 md:col-span-2 text-right">Fare</div>
            </div>

            {/* Rows */}
            {DAILY_FIX.map((item) => (
              <div 
                  key={item.id}
                  className="group grid grid-cols-12 gap-4 py-6 border-b border-[#004632]/20 items-center font-heading text-xl md:text-3xl text-[#004632] px-4 cursor-pointer transform-gpu will-change-transform"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
              >
                  <div className="col-span-2 md:col-span-1 font-mono text-sm">{item.id}</div>
                  <div className="col-span-2 font-mono text-sm">{item.time}</div>
                  <div className="col-span-4 md:col-span-5 flex items-center gap-4">
                     {item.name} 
                     <ArrowRight size={24} className="arrow-icon hidden md:block opacity-0 -translate-x-2 will-change-transform" />
                  </div>
                  <div className="col-span-2 hidden md:block">
                     <span className={`font-mono text-[10px] md:text-xs px-2 py-1 rounded-sm ${
                        item.status === 'ON TIME' ? 'bg-[#BDD0A0] text-[#004632]' : 
                        item.status === 'DELAYED' ? 'bg-red-200 text-red-800' : 'bg-[#004632] text-[#FEF8DD]'
                     }`}>
                        {item.status}
                     </span>
                  </div>
                  <div className="col-span-4 md:col-span-2 text-right">{item.price}</div>
              </div>
            ))}

        </div>

        

      </div>
    </section>
  );
};

export default MenuDailyFix;