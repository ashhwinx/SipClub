import React, { useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, UtensilsCrossed, Sticker, Ticket } from 'lucide-react';

const SWEETS = [
  { id: 'S1', name: 'BASQUE CHEESECAKE', desc: 'Burnt Matcha Top / Creamy Center', price: '¥850', status: 'LIMITED' },
  { id: 'S2', name: 'STRAWBERRY MOCHI', desc: 'Handmade / Red Bean Paste', price: '¥400', status: 'FRESH' },
  { id: 'S3', name: 'BLACK SESAME COOKIE', desc: 'Chewy / Sea Salt Finish', price: '¥350', status: 'VEGAN' },
  { id: 'S4', name: 'YUZU TART', desc: 'Zesty Curd / Butter Crust', price: '¥600', status: 'SOLD OUT' }
];

const MenuSweetTooth: React.FC = () => {

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    // Zoom Image & Color
    const img = e.currentTarget.querySelector('img');
    if (img) gsap.to(img, { scale: 1.1, duration: 0.8, ease: 'power2.out' });
    
    // Tape Peel Effect
    const tape = e.currentTarget.querySelector('.tape-strip');
    if (tape) gsap.to(tape, { rotation: -5, scale: 1.1, duration: 0.3 });
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (img) gsap.to(img, { scale: 1, duration: 0.8, ease: 'power2.out' });

    const tape = e.currentTarget.querySelector('.tape-strip');
    if (tape) gsap.to(tape, { rotation: 0, scale: 1, duration: 0.3 });
  };

  return (
    <section className="w-full bg-[#FEF8DD] py-20 border-t-2 border-[#004632]">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b-2 border-[#004632] pb-4">
           <div>
              <div className="flex items-center gap-2 mb-2 text-[#004632]">
                 <UtensilsCrossed size={20} />
                 <span className="font-mono text-sm tracking-widest uppercase">The Bakery</span>
              </div>
              <h2 className="font-heading text-6xl md:text-8xl text-[#004632] leading-none">
                 SWEET TOOTH
              </h2>
           </div>
           <div className="hidden md:block text-right font-mono text-xs text-[#004632]">
              <p>BATCH NO. 849</p>
              <p>BAKED: 05:00 AM</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT: THE HERO IMAGE (Polaroid Style) */}
            <div 
               className="col-span-1 lg:col-span-7 relative group cursor-pointer"
               onMouseEnter={handleEnter}
               onMouseLeave={handleLeave}
            >
               {/* Tape Strip */}
               <div className="tape-strip absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#BDD0A0]/80 z-20 rotate-2 shadow-sm backdrop-blur-sm"></div>
               
               <div className="w-full h-[500px] md:h-[600px] bg-white p-4 pb-16 shadow-[8px_8px_0px_#004632] border-2 border-[#004632] rotate-1 transition-transform duration-500 group-hover:rotate-0 group-hover:shadow-[12px_12px_0px_#004632]">
                  <div className="w-full h-full overflow-hidden border-2 border-[#004632] grayscale group-hover:grayscale-0 transition-all duration-700">
                     <img 
                        src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=1200&auto=format&fit=crop"
                        alt="Matcha Cheesecake"
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="absolute bottom-4 left-6 flex justify-between w-[90%] items-end">
                     <div>
                        <div className="font-heading text-3xl text-[#004632]">BASQUE CHEESECAKE</div>
                        <div className="font-mono text-xs text-[#004632] opacity-70">DATE: 2025.12.17</div>
                     </div>
                     <div className="stamp-spin hidden md:block">
                        <Sticker size={32} className="text-[#004632] opacity-50" />
                     </div>
                  </div>
               </div>
            </div>

            {/* RIGHT: THE RECEIPT MENU */}
            <div className="col-span-1 lg:col-span-5 relative mt-8 lg:mt-0">
               <div className="w-full bg-white border-2 border-[#004632] p-6 shadow-[8px_8px_0px_#BDD0A0] relative overflow-hidden">
                  
                  {/* Receipt Header */}
                  <div className="text-center border-b-2 border-dashed border-[#004632] pb-6 mb-6">
                     <div className="font-heading text-4xl text-[#004632] mb-2">DAILY BAKES</div>
                     <div className="font-mono text-xs text-[#004632] uppercase tracking-widest">Tokyo Sip Club • Patisserie</div>
                  </div>

                  {/* Receipt Items */}
                  <div className="space-y-6">
                     {SWEETS.map((item, index) => (
                        <div key={item.id} className="group/item flex justify-between items-start cursor-default">
                           <div className="flex-1">
                              <div className="flex items-center gap-2">
                                 <h3 className="font-heading text-xl md:text-2xl text-[#004632] group-hover/item:underline decoration-wavy decoration-[#BDD0A0]">
                                    {item.name}
                                 </h3>
                                 {item.status === 'SOLD OUT' && (
                                    <span className="bg-[#004632] text-[#FEF8DD] text-[8px] px-1 py-0.5 font-mono rotate-12">SOLD</span>
                                 )}
                              </div>
                              <p className="font-mono text-xs text-[#004632] opacity-60 mt-1">{item.desc}</p>
                           </div>
                           <div className="text-right">
                              <div className="font-heading text-xl text-[#004632]">{item.price}</div>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Receipt Footer */}
                  <div className="mt-8 pt-6 border-t-2 border-dashed border-[#004632] text-center font-mono text-xs text-[#004632] opacity-70">
                     <p>THANK YOU FOR VISITING</p>
                     <div className="flex justify-center mt-2">
                        <div className="h-8 w-48 bg-[#004632]">
                           {/* Fake Barcode Lines */}
                           <div className="w-full h-full flex gap-[2px] px-1 items-center overflow-hidden bg-white">
                              {[...Array(30)].map((_, i) => (
                                 <div key={i} className="h-full bg-black" style={{ width: Math.random() * 4 + 'px' }}></div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Decorative Ticket Stub */}
                  <div className="absolute -top-3 -right-3 rotate-12 bg-[#BDD0A0] text-[#004632] px-3 py-1 border-2 border-[#004632] shadow-sm z-10">
                     <div className="flex items-center gap-1 font-mono text-[10px] font-bold">
                        <Ticket size={12} />
                        <span>FRESH</span>
                     </div>
                  </div>

               </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default MenuSweetTooth;