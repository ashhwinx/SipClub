import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Counter Speed (thoda fast kiya hai agar zarurat ho toh 20ms wapis kar sakte ho)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Thoda random increment natural lagne k liye
        const increment = Math.floor(Math.random() * 3) + 1; 
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      // 1. Text Exit (Faster & No Initial Delay)
      tl.to(textRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5, // Reduced from 0.8
        ease: 'power3.in',
      })
      // 2. Curtain Slide (Starts slightly before text finishes)
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2, // Reduced from 1.5
        ease: 'power4.inOut',
      }, "-=0.4"); // <--- YE KEY HAI: 0.4s pehle shuru hoga
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex h-screen w-full items-center justify-center bg-[#004632] text-[#FEF8DD]"
    >
      <div ref={textRef} className="flex flex-col items-center">
        <h1 className="font-heading text-[12vw] leading-none tracking-tighter tabular-nums">
          {progress}%
        </h1>
        <p className="mt-4 font-body text-sm uppercase tracking-widest opacity-60 animate-pulse">
          Brewing Assets
        </p>
      </div>
    </div>
  );
};

export default Preloader;