import { motion, useInView, Variants } from "framer-motion";
import { useRef, useMemo } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

// Text that reveals word by word
export function WordReveal({ 
  text, 
  className = "",
  delay = 0,
  staggerDelay = 0.05
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Text that reveals letter by letter
export function LetterReveal({ 
  text, 
  className = "",
  delay = 0,
  staggerDelay = 0.02
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const letters = text.split("");

  return (
    <span ref={ref} className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}

// Typewriter effect
export function Typewriter({ 
  text, 
  className = "",
  speed = 50,
  delay = 0,
  cursor = true
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const letters = text.split("");

  return (
    <span ref={ref} className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0,
            delay: delay + (i * speed) / 1000,
          }}
        >
          {letter}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-primary ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </span>
  );
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animated?: boolean;
}

// Animated gradient text
export function GradientText({ 
  children, 
  className = "",
  colors = ["#C9A962", "#E8D5A3", "#C9A962"],
  animated = true
}: GradientTextProps) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: animated ? "200% 100%" : "100% 100%",
      }}
      animate={animated ? {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      } : undefined}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
}

// Text with animated highlight underline
export function HighlightText({ 
  children, 
  className = "",
  highlightColor = "#C9A962"
}: HighlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-[0.15em] rounded-full"
        style={{ backgroundColor: highlightColor }}
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </span>
  );
}

interface CountUpTextProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

// Counting up number animation
export function CountUpText({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className = ""
}: CountUpTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {isInView && (
          <CountingNumber value={value} decimals={decimals} duration={duration} />
        )}
      </motion.span>
      {suffix}
    </span>
  );
}

function CountingNumber({ value, decimals, duration }: { value: number; decimals: number; duration: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(easeOut * value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <>{displayValue.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</>;
}

// Need to import these
import { useState, useEffect } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  lineClassName?: string;
}

// Split text into lines with staggered animation
export function SplitLines({ 
  children, 
  className = "",
  lineClassName = ""
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const lines = children.split("\n");

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            className={lineClassName}
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Text that reveals from blur
export function BlurReveal({ 
  children, 
  className = "",
  delay = 0
}: BlurRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

export default WordReveal;
