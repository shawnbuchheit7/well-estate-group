import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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
  duration = 2,
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Use a smaller margin and trigger earlier
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    // Start animation immediately when in view
    setHasAnimated(true);
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setDisplayValue(easeOut * value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Ensure we end at the exact value
        setDisplayValue(value);
      }
    };

    // Small delay to ensure component is mounted
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 50);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration, hasAnimated]);

  const formattedValue = displayValue.toFixed(decimals);
  const formattedWithCommas = Number(formattedValue).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {prefix}{formattedWithCommas}{suffix}
    </motion.span>
  );
}

export default AnimatedCounter;
