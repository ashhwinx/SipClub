import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Barcode, Zap } from 'lucide-react';

const drinks = [
  {
    id: '01',
    name: 'DIRTY MATCHA',
    sub: 'THE OG CLASSIC',
    price: '¥800',
    description: 'Ceremonial grade matcha floating on oat milk with a double shot of espresso.',
    vibe: 90,
    caffeine: 'HIGH',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop',
    bg: 'bg-[#004632]', 
    text: 'text-[#FEF8DD]',
    accent: '#BDD0A0',
    stamp: 'BESTSELLER'
  },
  {
    id: '02',
    name: 'YUZU TONIC',
    sub: 'SPARKLING HIT',
    price: '¥750',
    description: 'Cold brew coffee mixed with sparkling yuzu citrus, mint, and a dash of honey.',
    vibe: 85,
    caffeine: 'MED',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    bg: 'bg-[#BDD0A0]', 
    text: 'text-[#004632]',
    accent: '#FEF8DD',
    stamp: 'REFRESH'
  },
  {
    id: '03',
    name: 'STRAWBERRY CLOUD',
    sub: 'SWEET DREAMS',
    price: '¥900',
    description: 'Fresh strawberry puree, hokkaido milk, topped with thick matcha cold foam.',
    vibe: 100,
    caffeine: 'LOW',
    image: 'https://images.unsplash.com/photo-1579389083175-247ef70153ba?q=80&w=800&auto=format&fit=crop',
    bg: 'bg-[#FEF8DD]', 
    text: 'text-[#004632]',
    accent: '#BDD0A0',
    stamp: 'SWEET'
  },
  {
    id: '04',
    name: 'BLACK SESAME',
    sub: 'GOTH LATTE',
    price: '¥850',
    description: 'Roasted black sesame paste, charcoal bamboo, and steamed soy milk.',
    vibe: 95,
    caffeine: 'NONE',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    bg: 'bg-[#004632]', 
    text: 'text-[#FEF8DD]',
    accent: '#BDD0A0',
    stamp: 'LIMITED'
  },
  {
    id: '05',
    name: 'BLUE PEA FOG',
    sub: 'MAGIC TEA',
    price: '¥780',
    description: 'Butterfly pea flower tea that changes color with lemon, topped with vanilla foam.',
    vibe: 80,
    caffeine: 'LOW',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop',
    bg: 'bg-[#BDD0A0]', 
    text: 'text-[#004632]',
    accent: '#FEF8DD',
    stamp: 'NEW'
  }
];

const Menu: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-[#FEF8DD] py-12 md:py-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-4 h-full hidden lg:flex flex-col justify-center items-center gap-8 pointer-events-none opacity-10 z-0">
         <div className="rotate-90 origin-center whitespace-nowrap font-heading text-6xl text-[#004632]">
            FRESH DROPS • FRESH DROPS • FRESH DROPS •
         </div>
      </div>

      {/* --- HEADER (FIXED FOR MOBILE CENTERING) --- */}
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-b-4 border-[#004632] pb-6 md:pb-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
               <span className="bg-[#004632] text-[#FEF8DD] px-2 py-1 font-mono text-[10px] md:text-xs font-bold uppercase">Vol. 2025</span>
               <span className="font-mono text-xs md:text-sm font-bold text-[#004632] uppercase tracking-widest">/// Curated List</span>
            </div>
            <h2 className="font-heading text-5xl md:text-9xl text-[#004632] leading-[0.85] tracking-tighter">
              CURRENT<br/>ROTATION
            </h2>
          </div>
          
          <div className="text-right mt-6 md:mt-0 flex flex-row md:flex-col justify-between w-full md:w-auto items-end">
             <div className="font-mono text-xs text-[#004632] uppercase md:hidden">Scroll Down ↓</div>
             <div className="text-right">
                <div className="font-heading text-3xl md:text-4xl text-[#BDD0A0]">0{drinks.length}</div>
                <div className="font-mono text-xs md:text-sm text-[#004632] uppercase hidden md:block">Items in Stack</div>
             </div>
          </div>
        </div>
      </div>

      {/* Sticky Cards Container */}
      <div className="container mx-auto px-6 md:px-12 pb-24 relative z-10">
        {drinks.map((drink, index) => (
          <div 
            key={drink.id}
            className="sticky top-24 md:top-28 w-full mb-12 md:mb-16 will-change-transform"
            style={{ zIndex: index + 1 }}
          >
            {/* Optimized Card */}
            <div 
              className={`
                relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]
                ${drink.bg} ${drink.text} 
                border-2 md:border-4 border-[#004632] 
                shadow-[6px_6px_0px_#000000] 
                transition-transform duration-500 ease-out will-change-transform
                hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-[10px_10px_0px_#000000]
              `}
              style={{ height: '65vh', minHeight: '450px', maxHeight: '700px' }} 
            >
              
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
              </div>

              <div className="flex justify-between items-center p-4 border-b-2 border-current opacity-70 font-mono text-[10px] md:text-sm uppercase h-[10%]">
                 <div className="flex gap-4">
                    <span>No. {drink.id}</span>
                    <span className="hidden sm:inline">/// {drink.sub}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Barcode className="w-8 h-4" />
                    <span className="hidden md:inline font-bold">JP-TYO-25</span>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row h-[90%]">
                <div className="w-full md:w-5/12 h-[40%] md:h-full relative border-b-2 md:border-b-0 md:border-r-2 border-current p-4">
                   <div className="w-full h-full relative overflow-hidden rounded-xl border-2 border-current bg-black/5">
                       <img 
                         src={drink.image} 
                         alt={drink.name} 
                         className="w-full h-full object-cover"
                         loading="lazy"
                       />
                       <div className="absolute top-4 right-4 bg-white/90 text-black px-3 py-1 rounded-full text-[10px] font-bold md:hidden">
                          {drink.stamp}
                       </div>
                   </div>
                </div>

                <div className="w-full md:w-7/12 p-6 md:p-12 flex flex-col justify-between relative h-[60%] md:h-full">
                   <div>
                     <h3 className="font-heading text-4xl md:text-8xl leading-[0.85] uppercase tracking-tighter mb-2">
                       {drink.name}
                     </h3>
                     <div className="font-heading text-2xl md:text-5xl mb-4" style={{ color: drink.accent }}>
                        {drink.price}
                     </div>
                     
                     <p className="font-sans text-sm md:text-xl font-medium leading-relaxed opacity-90 max-w-lg mb-6 line-clamp-3 md:line-clamp-none">
                       {drink.description}
                     </p>

                     <div className="flex gap-4 max-w-sm">
                        <div className="flex-1 border border-current p-2 rounded-lg">
                            <div className="text-[9px] md:text-xs font-mono uppercase opacity-70 mb-1">Caffeine</div>
                            <div className="font-bold text-xs md:text-base">{drink.caffeine}</div>
                        </div>
                        <div className="flex-1 border border-current p-2 rounded-lg">
                            <div className="text-[9px] md:text-xs font-mono uppercase opacity-70 mb-1">Vibe Level</div>
                            <div className="h-2 md:h-3 w-full border border-current rounded-full mt-1 overflow-hidden">
                                <div className="h-full bg-current" style={{ width: `${drink.vibe}%` }}></div>
                            </div>
                        </div>
                     </div>
                   </div>

                   <div className="absolute bottom-8 right-8 opacity-20 hidden md:block">
                      <Zap size={40} strokeWidth={1} />
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="flex justify-center pb-20 relative z-20">
        <Link to="/menu">
           <button className="group relative px-10 py-5 bg-[#004632] text-[#FEF8DD] rounded-full font-heading text-xl md:text-2xl shadow-[6px_6px_0px_#BDD0A0] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95">
             VIEW FULL ARCHIVE <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
           </button>
        </Link>
      </div>

    </section>
  );
};

export default Menu;