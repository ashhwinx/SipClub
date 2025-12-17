import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Barcode, Zap } from 'lucide-react';
// import { useCursor } from '../context/CursorContext';

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
  // const { setCursorVariant, setCursorText } = useCursor();

  return (
    <section ref={containerRef} className="relative w-full bg-[#FEF8DD] py-12 md:py-20 overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 right-4 h-full hidden lg:flex flex-col justify-center items-center gap-8 pointer-events-none opacity-20 z-0">
         <div className="rotate-90 origin-center whitespace-nowrap font-heading text-6xl text-[#004632]">
            FRESH DROPS • FRESH DROPS • FRESH DROPS •
         </div>
      </div>

      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 md:px-12 mb-12 md:mb-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end border-b-4 border-[#004632] pb-6 md:pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <span className="bg-[#004632] text-[#FEF8DD] px-2 py-1 font-mono text-[10px] md:text-xs font-bold uppercase">Vol. 2025</span>
               <span className="font-mono text-xs md:text-sm font-bold text-[#004632] uppercase tracking-widest">/// Curated List</span>
            </div>
            <h2 className="font-heading text-5xl mr-[60px] md:text-9xl text-[#004632] leading-[0.85] tracking-tighter">
              CURRENT<br/>ROTATION
            </h2>
          </div>
          <div className="text-right mt-6 md:mt-0 flex flex-row md:flex-col justify-between w-full md:w-auto items-end">
             <div className="font-mono text-xs text-[#004632] uppercase md:hidden">Scroll Down ↓</div>
             <div>
                <div className="font-heading text-3xl md:text-4xl text-[#BDD0A0]">0{drinks.length}</div>
                <div className="font-mono text-xs md:text-sm text-[#004632] uppercase hidden md:block">Items in Stack</div>
             </div>
          </div>
        </div>
      </div>

      {/* --- STICKY CARDS CONTAINER --- */}
      <div className="container mx-auto px-4 md:px-12 pb-24 relative z-10">
        {drinks.map((drink, index) => (
          <div 
            key={drink.id}
            className="sticky top-20 md:top-28 w-full mb-8 group perspective-1000" // Sticky behavior only
            style={{ zIndex: index + 1 }}
          >
            {/* Card Content with Hover Lift Animation */}
            <div 
              className={`
                relative overflow-hidden rounded-[2rem] 
                ${drink.bg} ${drink.text} 
                border-2 md:border-4 border-[#004632] 
                shadow-[4px_4px_0px_#000000] md:shadow-[8px_8px_0px_#000000] 
                transition-all duration-500 ease-out 
                hover:-translate-y-4 hover:shadow-[12px_12px_0px_#000000] md:hover:shadow-[16px_16px_0px_#000000]
              `}
              style={{ height: '75vh', maxHeight: '800px' }} 
            >
              
              {/* Texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
              </div>

              {/* Card Header */}
              <div className="flex justify-between items-center p-3 md:p-4 border-b-2 border-current opacity-70 font-mono text-[10px] md:text-sm uppercase tracking-widest h-[8%] md:h-[10%]">
                 <div className="flex gap-2 md:gap-4">
                    <span>No. {drink.id}</span>
                    <span>///</span>
                    <span className="truncate max-w-[100px] md:max-w-none">{drink.sub}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Barcode className="w-6 h-3 md:w-8 md:h-4" />
                    <span className="hidden md:inline">JP-TYO-25</span>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row h-[92%] md:h-[90%]">
                
                {/* Image Section */}
                <div className="w-full md:w-5/12 h-[35%] md:h-full relative border-b-2 md:border-b-0 md:border-r-2 border-current p-3 md:p-4">
                   <div className="w-full h-full relative overflow-hidden rounded-xl border-2 border-current">
                       <img 
                         src={drink.image} 
                         alt={drink.name} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                       />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 border-4 border-white/80 rounded-full flex items-center justify-center -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                           <span className="font-heading text-lg md:text-2xl text-white uppercase">{drink.stamp}</span>
                       </div>
                   </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-7/12 p-5 md:p-12 flex flex-col justify-between relative h-[65%] md:h-full">
                   
                   <div>
                     <div className="flex justify-between items-start mb-1 md:mb-2">
                       <h3 className="font-heading text-4xl md:text-8xl leading-[0.85] uppercase tracking-tighter">
                         {drink.name}
                       </h3>
                     </div>
                     <div className="font-heading text-2xl md:text-5xl mb-3 md:mb-4 opacity-80" style={{ color: drink.accent }}>
                        {drink.price}
                     </div>
                     
                     <p className="font-sans text-base md:text-2xl font-medium leading-relaxed opacity-90 max-w-lg mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                       {drink.description}
                     </p>

                     {/* VIBE STATS - Added Hover Interaction here */}
                     <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-full md:max-w-sm">
                        
                        {/* Box 1 */}
                        <div className="border border-current p-2 md:p-3 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:bg-current hover:text-inherit hover:shadow-[4px_4px_0px_#BDD0A0] cursor-default group/stat">
                            <div className="text-[10px] md:text-xs font-mono uppercase opacity-70 mb-1 group-hover/stat:text-[#FEF8DD]">Caffeine</div>
                            <div className="font-bold text-sm md:text-base group-hover/stat:text-[#FEF8DD]">{drink.caffeine}</div>
                        </div>

                        {/* Box 2 */}
                        <div className="border border-current p-2 md:p-3 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:bg-current hover:shadow-[4px_4px_0px_#BDD0A0] cursor-default group/stat">
                            <div className="text-[10px] md:text-xs font-mono uppercase opacity-70 mb-1 group-hover/stat:text-[#FEF8DD]">Vibe</div>
                            <div className="h-3 md:h-4 w-full border border-current rounded-full p-0.5 group-hover/stat:border-[#FEF8DD]">
                                <div className="h-full bg-current rounded-full group-hover/stat:bg-[#BDD0A0]" style={{ width: `${drink.vibe}%` }}></div>
                            </div>
                        </div>

                     </div>
                   </div>

                   {/* Decorative Icon */}
                   <div className="absolute bottom-6 left-6 opacity-30 animate-pulse hidden md:block">
                      <Zap size={32} />
                   </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER BUTTON --- */}
      <div className="flex justify-center pb-12 md:pb-20 relative z-20">
        <Link to="/menu">
           <button 
             className="relative px-8 py-4 md:px-12 md:py-6 bg-[#004632] text-[#FEF8DD] rounded-full font-heading text-lg md:text-2xl overflow-hidden shadow-[4px_4px_0px_#BDD0A0] md:shadow-[8px_8px_0px_#BDD0A0] transition-transform hover:shadow-none hover:translate-x-1 hover:translate-y-1"
             onMouseEnter={() => { setCursorText('OPEN'); setCursorVariant('hover'); }}
             onMouseLeave={() => setCursorVariant('default')}
           >
             VIEW FULL ARCHIVE ↗
           </button>
        </Link>
      </div>

    </section>
  );
};

export default Menu;