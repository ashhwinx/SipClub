import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  text: string;
  theme?: 'light' | 'dark';
}

const Marquee: React.FC<MarqueeProps> = ({ text, theme = 'light' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Clone the text for seamless looping
    const content = textRef.current.innerHTML;
    textRef.current.innerHTML = content + content + content + content;

    const width = textRef.current.clientWidth;
    
    gsap.to(textRef.current, {
      x: -width / 4,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const bgColor = theme === 'light' ? 'bg-soft-sage' : 'bg-deep-matcha';
  const textColor = theme === 'light' ? 'text-deep-matcha' : 'text-creamy-vanilla';
  const borderColor = theme === 'light' ? 'border-deep-matcha' : 'border-creamy-vanilla/20';

  return (
    <div ref={containerRef} className={`w-full overflow-hidden py-3 border-t ${bgColor} ${borderColor}`}>
      <div ref={textRef} className={`whitespace-nowrap font-heading text-lg ${textColor}`}>
        {text}
      </div>
    </div>
  );
};

export default Marquee;
