import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedChartProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedChart({ children, className = '', delay = 0 }: AnimatedChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedBarProps {
  height: string | number;
  className?: string;
  delay?: number;
  direction?: 'up' | 'right';
}

export function AnimatedBar({ height, className = '', delay = 0, direction = 'up' }: AnimatedBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const isVertical = direction === 'up';

  return (
    <motion.div
      ref={ref}
      className={className}
      style={isVertical ? { height } : { width: height }}
      initial={isVertical ? { scaleY: 0 } : { scaleX: 0 }}
      animate={isInView ? (isVertical ? { scaleY: 1 } : { scaleX: 1 }) : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        ...(isVertical ? { height, transformOrigin: 'bottom' } : { width: height, transformOrigin: 'left' }),
      }}
    />
  );
}

interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggeredList({ children, className = '', staggerDelay = 0.1 }: StaggeredListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: 'easeOut',
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

interface AnimatedProgressProps {
  value: number;
  max?: number;
  className?: string;
  barClassName?: string;
  delay?: number;
}

export function AnimatedProgress({
  value,
  max = 100,
  className = '',
  barClassName = '',
  delay = 0,
}: AnimatedProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const percentage = (value / max) * 100;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className={barClassName}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : {}}
        transition={{
          duration: 1,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </div>
  );
}

interface PulsingDotProps {
  className?: string;
  color?: string;
}

export function PulsingDot({ className = '', color = 'bg-primary' }: PulsingDotProps) {
  return (
    <span className={`relative flex h-3 w-3 ${className}`}>
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`}
      />
      <span className={`relative inline-flex rounded-full h-3 w-3 ${color}`} />
    </span>
  );
}

export default AnimatedChart;
