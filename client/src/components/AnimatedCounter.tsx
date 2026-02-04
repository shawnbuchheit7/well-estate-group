import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.5,
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Format the display value
  const formatValue = (val: number) => {
    const fixed = val.toFixed(decimals);
    return Number(fixed).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  useEffect(() => {
    // Start animation after a short delay to ensure component is mounted
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 100);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Cubic ease-out for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(easeOut * value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formatValue(displayValue)}{suffix}
    </span>
  );
}

export default AnimatedCounter;
