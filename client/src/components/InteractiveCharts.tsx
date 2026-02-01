import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  maxValue?: number;
  height?: number;
  showValues?: boolean;
  className?: string;
}

// Animated bar chart with hover effects
export function AnimatedBarChart({ 
  data, 
  maxValue,
  height = 200,
  showValues = true,
  className = "" 
}: BarChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const max = maxValue || Math.max(...data.map(d => d.value));

  return (
    <div ref={ref} className={`${className}`}>
      <div className="flex items-end gap-3" style={{ height }}>
        {data.map((item, i) => {
          const barHeight = (item.value / max) * 100;
          const isHovered = hoveredIndex === i;
          
          return (
            <div 
              key={i} 
              className="flex-1 flex flex-col items-center gap-2"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {showValues && (
                <motion.span
                  className="font-mono text-xs text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  {item.value.toLocaleString()}
                </motion.span>
              )}
              <motion.div
                className={`w-full rounded-t-lg cursor-pointer transition-all duration-200 ${
                  item.color || 'bg-primary'
                } ${isHovered ? 'shadow-lg shadow-primary/30' : ''}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isInView ? `${barHeight}%` : 0,
                  opacity: isInView ? 1 : 0,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
              <span className="font-body text-xs text-muted-foreground text-center mt-2">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface LineChartProps {
  data: { label: string; value: number }[];
  height?: number;
  color?: string;
  showDots?: boolean;
  showArea?: boolean;
  className?: string;
}

// Animated line chart with drawing effect
export function AnimatedLineChart({
  data,
  height = 200,
  color = "#C9A962",
  showDots = true,
  showArea = true,
  className = ""
}: LineChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const max = Math.max(...data.map(d => d.value));
  const min = Math.min(...data.map(d => d.value));
  const range = max - min || 1;
  
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 100 - ((d.value - min) / range) * 80 - 10,
  }));
  
  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    return `${acc} L ${point.x} ${point.y}`;
  }, "");
  
  const areaD = `${pathD} L 100 100 L 0 100 Z`;

  return (
    <div ref={ref} className={`relative ${className}`} style={{ height }}>
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Area fill */}
        {showArea && (
          <motion.path
            d={areaD}
            fill={`${color}20`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        )}
        
        {/* Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Dots */}
        {showDots && points.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={hoveredIndex === i ? 2 : 1.2}
            fill={color}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isInView ? 1 : 0, 
              opacity: isInView ? 1 : 0 
            }}
            transition={{ delay: i * 0.1 + 0.8 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer"
          />
        ))}
      </svg>
      
      {/* Labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
        {data.map((item, i) => (
          <span key={i} className="font-body text-xs text-muted-foreground">
            {item.label}
          </span>
        ))}
      </div>
      
      {/* Tooltip */}
      {hoveredIndex !== null && (
        <motion.div
          className="absolute bg-card border border-border rounded-lg px-3 py-2 shadow-lg pointer-events-none"
          style={{
            left: `${points[hoveredIndex].x}%`,
            top: `${points[hoveredIndex].y}%`,
            transform: "translate(-50%, -120%)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-mono text-sm font-bold text-primary">
            {data[hoveredIndex].value.toLocaleString()}
          </p>
          <p className="font-body text-xs text-muted-foreground">
            {data[hoveredIndex].label}
          </p>
        </motion.div>
      )}
    </div>
  );
}

interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  size?: number;
  thickness?: number;
  className?: string;
}

// Animated donut/pie chart
export function AnimatedDonutChart({
  data,
  size = 200,
  thickness = 30,
  className = ""
}: DonutChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  
  let cumulativePercent = 0;

  return (
    <div ref={ref} className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        {data.map((item, i) => {
          const percent = item.value / total;
          const strokeDasharray = `${circumference * percent} ${circumference}`;
          const strokeDashoffset = -circumference * cumulativePercent;
          cumulativePercent += percent;
          
          return (
            <motion.circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth={hoveredIndex === i ? thickness + 5 : thickness}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              initial={{ strokeDasharray: `0 ${circumference}` }}
              animate={{ 
                strokeDasharray: isInView ? strokeDasharray : `0 ${circumference}`,
                strokeWidth: hoveredIndex === i ? thickness + 5 : thickness,
              }}
              transition={{ 
                duration: 1, 
                delay: i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer transition-all duration-200"
            />
          );
        })}
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {hoveredIndex !== null ? (
          <>
            <motion.span 
              className="font-display text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.round((data[hoveredIndex].value / total) * 100)}%
            </motion.span>
            <span className="font-body text-xs text-muted-foreground text-center px-4">
              {data[hoveredIndex].label}
            </span>
          </>
        ) : (
          <span className="font-display text-2xl font-bold text-gradient">
            {total.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}

interface ProgressRingProps {
  value: number;
  max?: number;
  size?: number;
  thickness?: number;
  color?: string;
  label?: string;
  className?: string;
}

// Animated progress ring
export function AnimatedProgressRing({
  value,
  max = 100,
  size = 120,
  thickness = 8,
  color = "#C9A962",
  label,
  className = ""
}: ProgressRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = value / max;
  const strokeDashoffset = circumference * (1 - percent);

  return (
    <div ref={ref} className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          className="text-muted/30"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          className="font-display text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(percent * 100)}%
        </motion.span>
        {label && (
          <span className="font-body text-xs text-muted-foreground">{label}</span>
        )}
      </div>
    </div>
  );
}

interface DataTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

// Real-time looking data ticker
export function DataTicker({
  value,
  prefix = "",
  suffix = "",
  label,
  trend = "neutral",
  trendValue,
  className = ""
}: DataTickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Animate counting
  useState(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(easeOut * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  });

  const trendColors = {
    up: "text-emerald-500",
    down: "text-red-500",
    neutral: "text-muted-foreground",
  };

  const trendIcons = {
    up: "↑",
    down: "↓",
    neutral: "→",
  };

  return (
    <motion.div 
      ref={ref}
      className={`bg-card border border-border rounded-xl p-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-baseline gap-1">
        <span className="font-display text-3xl font-bold text-gradient">
          {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
        {trendValue && (
          <span className={`font-mono text-sm ${trendColors[trend]}`}>
            {trendIcons[trend]} {trendValue}
          </span>
        )}
      </div>
      <p className="font-body text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
}

export default AnimatedBarChart;
