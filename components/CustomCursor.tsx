import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useCursor } from '../context/CursorContext';
import { Instagram } from 'lucide-react';

const CustomCursor: React.FC = () => {
  const { cursorVariant, cursorText } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Basic movement
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out',
        });
      }
      
      // Follower movement (slightly delayed)
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    if (cursorRef.current && followerRef.current) {
      const tl = gsap.timeline();

      if (cursorVariant === 'hover' || cursorVariant === 'button') {
        tl.to(cursorRef.current, { scale: 0.5, opacity: 0, duration: 0.3 })
          .to(followerRef.current, { 
            scale: 3, 
            backgroundColor: 'transparent', 
            borderColor: '#004632',
            borderWidth: '1px',
            opacity: 1,
            borderRadius: '9999px',
            duration: 0.3 
          }, "<");
      } else if (cursorVariant === 'icon') {
        // Icon mode (e.g., for Instagram)
        tl.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 })
          .to(followerRef.current, { 
            scale: 1,
            width: 60,
            height: 60,
            backgroundColor: '#004632', 
            borderColor: 'transparent',
            borderWidth: '0px',
            opacity: 1,
            borderRadius: '12px', // Square-ish for icon
            duration: 0.3 
          }, "<");
      } else {
        // Default
        tl.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 })
          .to(followerRef.current, { 
            scale: 1,
            width: 32,
            height: 32, 
            backgroundColor: 'transparent', 
            borderColor: 'transparent',
            borderWidth: '0px',
            opacity: 0,
            borderRadius: '9999px',
            duration: 0.3 
          }, "<");
      }
    }
  }, [cursorVariant]);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep-matcha mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full overflow-hidden"
      >
        {/* Text Mode */}
        {(cursorVariant === 'hover' || cursorVariant === 'button') && (
          <span className="text-[4px] font-bold tracking-widest text-deep-matcha">{cursorText}</span>
        )}
        
        {/* Icon Mode */}
        {cursorVariant === 'icon' && (
           <Instagram className="text-creamy-vanilla w-6 h-6" />
        )}
      </div>
    </>
  );
};

export default CustomCursor;
