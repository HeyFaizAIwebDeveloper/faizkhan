import React, { useEffect, useState, useRef, useCallback } from 'react';

interface ScrambleProps {
  children: string;
  mode: 'appear-hover' | 'hover' | 'appear' | 'loop';
  className?: string;
}

const letters = "abcdefghijklmnopqrstuvwxyz-.,+*!?@&%/=";
const loopDelay = 3000; // Delay between loops in ms

const EncryptText: React.FC<ScrambleProps> = ({ children, mode, className }) => {
  const [displayText, setDisplayText] = useState(children);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const intersectionRef = useRef<HTMLParagraphElement>(null);

  const scramble = (progress: number) => {
    return children
      .split("")
      .map((char, index) => {
        if (index < progress) {
          return children[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
  };

  const animateScramble = useCallback(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setDisplayText(scramble(progress));
      if (progress >= children.length) {
        clearInterval(interval);
      }
    }, 30);
    return interval;
  }, [children, scramble]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isVisible && (mode === 'appear' || mode === 'appear-hover' || mode === 'loop')) {
      interval = animateScramble();
    }

    if (mode === 'loop' && isVisible) {
      const loopInterval = setInterval(() => {
        interval = animateScramble();
      }, loopDelay);

      return () => {
        clearInterval(loopInterval);
        if (interval) clearInterval(interval);
      };
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible, mode, animateScramble]);

  useEffect(() => {
    if ((mode === 'hover' || mode === 'appear-hover') && isHovering) {
      animateScramble();
    }
  }, [isHovering, mode, animateScramble]);

  const handleMouseEnter = () => {
    if (mode === 'hover' || mode === 'appear-hover') {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (mode === 'hover' || mode === 'appear-hover') {
      setIsHovering(false);
    }
  };

  return (
    <p 
      ref={intersectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className}`}
    >
      {displayText}
    </p>
  );
};

export default EncryptText;