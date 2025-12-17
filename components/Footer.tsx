import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Instagram, Music, ArrowUpRight, ArrowUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom'; // Added Link for internal navigation
import Marquee from './Marquee';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="fixed bottom-0 left-0 z-0 flex h-[100vh] w-full flex-col justify-between bg-[#004632] px-4 py-8 text-[#FEF8DD] md:px-12"
    >
      {/* Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03] z-0">
        <h1 className="font-heading text-[30vw] leading-none text-[#BDD0A0]">
          TOKYO
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 flex flex-col justify-between h-full flex-grow px-4 md:px-12">
        {/* Center Section */}
        <div className="flex flex-col items-center justify-center flex-grow py-10">
          <div ref={titleRef} className="text-center">
            <div className="font-mono text-xs md:text-base text-[#BDD0A0] uppercase tracking-[0.5em] mb-4">
              You've reached the bottom
            </div>
            <h2 className="font-heading text-[12vw] md:text-[10vw] leading-[0.85] text-[#FEF8DD] uppercase">
              SIP CLUB
            </h2>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-2xl mt-12">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-b-2 border-[#FEF8DD] pb-3">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-transparent font-heading text-xl sm:text-2xl md:text-4xl text-[#FEF8DD] placeholder-[#FEF8DD]/20 focus:outline-none uppercase"
              />
              <button
                className="bg-[#BDD0A0] text-[#004632] px-8 py-3 rounded-full font-heading text-lg hover:bg-[#FEF8DD] transition-all"
              >
                JOIN
              </button>
            </div>
            <div className="flex justify-between mt-2 font-mono text-[10px] uppercase opacity-50">
              <span>*No Spam, Only Vibe</span>
              <span>Secure Connection</span>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 border-t border-[#FEF8DD]/20 pt-8 pb-8">
          {/* Manifesto */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="w-12 h-12 bg-[#BDD0A0] rounded-full flex items-center justify-center text-[#004632] font-heading text-2xl">
              T
            </div>
            <p className="font-sans text-base md:text-lg leading-relaxed opacity-80 max-w-sm">
              Tokyo Sip Club is a digital experiment brewing culture, caffeine,
              and chaos. We believe in good design, strong matcha, and loud music.
            </p>
            <div className="flex gap-4">
              <span className="border border-[#BDD0A0] px-3 py-1 rounded-full text-xs font-mono text-[#BDD0A0]">
                EST. 2025
              </span>
              <span className="border border-[#BDD0A0] px-3 py-1 rounded-full text-xs font-mono text-[#BDD0A0]">
                JPN
              </span>
            </div>
          </div>

          {/* Sitemap – FIXED LINKS */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs text-[#BDD0A0] uppercase mb-4 tracking-widest">
              SITEMAP
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 font-heading text-lg sm:text-xl md:text-2xl md:block md:space-y-3">
              <li>
                <Link to="/menu" className="hover:text-[#BDD0A0] transition-colors block">Menu</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#BDD0A0] transition-colors block">About</Link>
              </li>
              <li>
                <Link to="/workshops" className="hover:text-[#BDD0A0] transition-colors block">Workshops</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#BDD0A0] transition-colors block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Socials – FIXED EXTERNAL LINKS */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs text-[#BDD0A0] uppercase mb-4 tracking-widest">
              CONNECT
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 font-heading text-lg sm:text-xl md:text-2xl md:block md:space-y-3">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#BDD0A0] transition-colors">
                  <Instagram size={18} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#BDD0A0] transition-colors">
                  <Music size={18} /> TikTok
                </a>
              </li>
              <li>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#BDD0A0] transition-colors">
                  <Zap size={18} /> Spotify
                </a>
              </li>
            </ul>
          </div>

          {/* Back To Top */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-between text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-4 mt-6"
            >
              <span className="font-mono text-xs uppercase tracking-widest group-hover:text-[#BDD0A0] transition-colors">
                Back to Top
              </span>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#FEF8DD] flex items-center justify-center group-hover:bg-[#BDD0A0] group-hover:text-[#004632] group-hover:border-[#BDD0A0] transition-all">
                <ArrowUp size={28} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;