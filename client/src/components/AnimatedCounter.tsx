/**
 * AnimatedCounter - Counts up numbers when scrolled into view
 * Supports both:
 *   1. Explicit props: value (number), prefix, suffix, decimals
 *   2. String-based: valueStr (e.g., "$6.7T", "30+", "144+") with auto-parsing
 * 
 * FIX: Handles elements already visible on page load (hero stats)
 * FIX: Adds comma formatting for numbers >= 1,000
 */

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value?: number;
  valueStr?: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

function parseValueStr(str: string): { prefix: string; number: number; suffix: string; decimals: number; useCommas: boolean; isStatic: boolean } {
  // Strip commas for parsing but remember they were there
  const stripped = str.replace(/,/g, "");
  const numMatch = stripped.match(/([0-9]+\.?[0-9]*)/);
  
  // If no number found at all, return as static text
  if (!numMatch || numMatch[1] === "0" && stripped !== "0") {
    return { prefix: str, number: 0, suffix: "", decimals: 0, useCommas: false, isStatic: true };
  }
  
  const numStr = numMatch[1];
  const number = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  
  // Extract prefix (everything before the number)
  const numIndex = stripped.indexOf(numStr);
  const prefix = stripped.substring(0, numIndex);
  const suffix = stripped.substring(numIndex + numStr.length);
  
  // Detect if original string uses commas (e.g., "$1,095")
  const useCommas = str.includes(",") || number >= 1000;
  return { prefix, number, suffix, decimals, useCommas, isStatic: false };
}

export function AnimatedCounter({
  value,
  valueStr,
  prefix: propPrefix = '',
  suffix: propSuffix = '',
  duration = 1.5,
  decimals: propDecimals,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse the value source
  const parsed = valueStr ? parseValueStr(valueStr) : null;
  const isStatic = parsed?.isStatic ?? false;
  const numValue = parsed ? parsed.number : (value ?? 0);
  const prefix = parsed ? parsed.prefix : propPrefix;
  const suffix = parsed ? parsed.suffix : propSuffix;
  const decimals = propDecimals ?? (parsed ? parsed.decimals : 0);
  const useCommas = parsed ? parsed.useCommas : false;

  // If the value is purely static text (no number), just render it
  if (isStatic && valueStr) {
    return <span ref={elementRef} className={className}>{valueStr}</span>;
  }

  // Format a number for display
  const formatValue = (val: number) => {
    const fixed = val.toFixed(decimals);
    if (useCommas) {
      const parts = fixed.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return fixed;
  };

  // Intersection Observer to trigger animation when in view
  // Also checks if element is already visible on mount
  useEffect(() => {
    const el = elementRef.current;
    if (!el || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Fallback: if element is in viewport on mount but observer didn't fire,
  // start after a short delay
  useEffect(() => {
    if (hasStarted) return;
    const timer = setTimeout(() => {
      const el = elementRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (inViewport) {
          setHasStarted(true);
        }
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [hasStarted]);

  // Animate the counter
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
      const current = easeOut * numValue;
      setDisplayValue(formatValue(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(formatValue(numValue));
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, numValue, duration, decimals]);

  return (
    <span ref={elementRef} className={`${className} ${hasStarted ? 'stat-shimmer' : ''}`}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default AnimatedCounter;
