import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import {
  Search,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronDown,
  Activity,
  Heart,
  Flame,
  Droplets,
  Pill,
  Shield,
  Zap,
  Filter,
  ArrowUpDown,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Info,
  X,
  Sparkles,
  Loader2,
  Target,
  Gauge,
  ArrowUp,
  ArrowDown,
  Users,
  Link2,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Types ─── */
interface BiomarkerValue {
  date: string;
  value: number;
}

interface Biomarker {
  name: string;
  value: number;
  unit: string;
  refLow: number;
  refHigh: number;
  optimalLow: number;
  optimalHigh: number;
  trend: "up" | "down" | "stable";
  history: BiomarkerValue[];
  description: string;
}

interface BiomarkerCategory {
  key: string;
  label: string;
  icon: React.ElementType;
  color: string;
  biomarkers: Biomarker[];
}

/* ─── Demo Biomarker Data ─── */
const BIOMARKER_CATEGORIES: BiomarkerCategory[] = [
  {
    key: "metabolic",
    label: "Metabolic",
    icon: Flame,
    color: "#F59E0B",
    biomarkers: [
      { name: "Fasting Glucose", value: 88, unit: "mg/dL", refLow: 70, refHigh: 100, optimalLow: 72, optimalHigh: 90, trend: "stable", history: [{ date: "Jul 2025", value: 92 }, { date: "Sep 2025", value: 90 }, { date: "Nov 2025", value: 87 }, { date: "Jan 2026", value: 88 }], description: "Blood sugar level after fasting. Key indicator of metabolic health and diabetes risk." },
      { name: "HbA1c", value: 5.2, unit: "%", refLow: 4.0, refHigh: 5.7, optimalLow: 4.0, optimalHigh: 5.3, trend: "down", history: [{ date: "Jul 2025", value: 5.5 }, { date: "Sep 2025", value: 5.4 }, { date: "Nov 2025", value: 5.3 }, { date: "Jan 2026", value: 5.2 }], description: "Average blood sugar over 2-3 months. Gold standard for long-term glucose control." },
      { name: "Fasting Insulin", value: 4.8, unit: "µIU/mL", refLow: 2.6, refHigh: 24.9, optimalLow: 2.0, optimalHigh: 6.0, trend: "down", history: [{ date: "Jul 2025", value: 7.2 }, { date: "Sep 2025", value: 6.1 }, { date: "Nov 2025", value: 5.3 }, { date: "Jan 2026", value: 4.8 }], description: "Insulin levels during fasting. Lower values indicate better insulin sensitivity." },
      { name: "HOMA-IR", value: 1.04, unit: "", refLow: 0, refHigh: 2.5, optimalLow: 0, optimalHigh: 1.5, trend: "down", history: [{ date: "Jul 2025", value: 1.64 }, { date: "Sep 2025", value: 1.36 }, { date: "Nov 2025", value: 1.14 }, { date: "Jan 2026", value: 1.04 }], description: "Insulin resistance index. Lower is better for metabolic health." },
      { name: "Uric Acid", value: 7.8, unit: "mg/dL", refLow: 3.5, refHigh: 7.2, optimalLow: 3.5, optimalHigh: 5.5, trend: "up", history: [{ date: "Jul 2025", value: 6.1 }, { date: "Sep 2025", value: 6.8 }, { date: "Nov 2025", value: 7.3 }, { date: "Jan 2026", value: 7.8 }], description: "Byproduct of purine metabolism. Elevated levels linked to gout and cardiovascular risk." },
    ],
  },
  {
    key: "cardiovascular",
    label: "Cardiovascular",
    icon: Heart,
    color: "#EF4444",
    biomarkers: [
      { name: "Total Cholesterol", value: 185, unit: "mg/dL", refLow: 125, refHigh: 200, optimalLow: 150, optimalHigh: 190, trend: "down", history: [{ date: "Jul 2025", value: 210 }, { date: "Sep 2025", value: 198 }, { date: "Nov 2025", value: 192 }, { date: "Jan 2026", value: 185 }], description: "Total blood cholesterol. Includes HDL, LDL, and VLDL components." },
      { name: "LDL Cholesterol", value: 98, unit: "mg/dL", refLow: 0, refHigh: 130, optimalLow: 0, optimalHigh: 100, trend: "down", history: [{ date: "Jul 2025", value: 128 }, { date: "Sep 2025", value: 115 }, { date: "Nov 2025", value: 105 }, { date: "Jan 2026", value: 98 }], description: "'Bad' cholesterol. Lower levels reduce cardiovascular disease risk." },
      { name: "HDL Cholesterol", value: 62, unit: "mg/dL", refLow: 40, refHigh: 100, optimalLow: 55, optimalHigh: 80, trend: "up", history: [{ date: "Jul 2025", value: 52 }, { date: "Sep 2025", value: 55 }, { date: "Nov 2025", value: 59 }, { date: "Jan 2026", value: 62 }], description: "'Good' cholesterol. Higher levels are protective against heart disease." },
      { name: "Triglycerides", value: 78, unit: "mg/dL", refLow: 0, refHigh: 150, optimalLow: 0, optimalHigh: 100, trend: "down", history: [{ date: "Jul 2025", value: 120 }, { date: "Sep 2025", value: 102 }, { date: "Nov 2025", value: 88 }, { date: "Jan 2026", value: 78 }], description: "Blood fat levels. Elevated triglycerides increase cardiovascular risk." },
      { name: "ApoB", value: 82, unit: "mg/dL", refLow: 40, refHigh: 120, optimalLow: 40, optimalHigh: 90, trend: "down", history: [{ date: "Jul 2025", value: 105 }, { date: "Sep 2025", value: 95 }, { date: "Nov 2025", value: 88 }, { date: "Jan 2026", value: 82 }], description: "Apolipoprotein B. Best single predictor of cardiovascular risk." },
      { name: "Lp(a)", value: 85, unit: "nmol/L", refLow: 0, refHigh: 75, optimalLow: 0, optimalHigh: 30, trend: "up", history: [{ date: "Jul 2025", value: 78 }, { date: "Sep 2025", value: 80 }, { date: "Nov 2025", value: 83 }, { date: "Jan 2026", value: 85 }], description: "Lipoprotein(a). Genetically determined cardiovascular risk factor." },
      { name: "hs-CRP", value: 0.6, unit: "mg/L", refLow: 0, refHigh: 3.0, optimalLow: 0, optimalHigh: 1.0, trend: "down", history: [{ date: "Jul 2025", value: 1.8 }, { date: "Sep 2025", value: 1.2 }, { date: "Nov 2025", value: 0.8 }, { date: "Jan 2026", value: 0.6 }], description: "High-sensitivity C-reactive protein. Marker of systemic inflammation and cardiac risk." },
    ],
  },
  {
    key: "inflammatory",
    label: "Inflammatory",
    icon: Shield,
    color: "#8B5CF6",
    biomarkers: [
      { name: "IL-6", value: 1.2, unit: "pg/mL", refLow: 0, refHigh: 5.0, optimalLow: 0, optimalHigh: 1.8, trend: "down", history: [{ date: "Jul 2025", value: 2.8 }, { date: "Sep 2025", value: 2.1 }, { date: "Nov 2025", value: 1.5 }, { date: "Jan 2026", value: 1.2 }], description: "Interleukin-6. Pro-inflammatory cytokine linked to chronic disease and aging." },
      { name: "TNF-alpha", value: 0.8, unit: "pg/mL", refLow: 0, refHigh: 2.2, optimalLow: 0, optimalHigh: 1.0, trend: "stable", history: [{ date: "Jul 2025", value: 1.1 }, { date: "Sep 2025", value: 0.9 }, { date: "Nov 2025", value: 0.8 }, { date: "Jan 2026", value: 0.8 }], description: "Tumor necrosis factor alpha. Key inflammatory mediator in immune response." },
      { name: "Homocysteine", value: 16.8, unit: "µmol/L", refLow: 5.0, refHigh: 15.0, optimalLow: 5.0, optimalHigh: 10.0, trend: "up", history: [{ date: "Jul 2025", value: 12.5 }, { date: "Sep 2025", value: 14.2 }, { date: "Nov 2025", value: 15.5 }, { date: "Jan 2026", value: 16.8 }], description: "Amino acid linked to cardiovascular risk. Elevated by B-vitamin deficiency." },
      { name: "Ferritin", value: 85, unit: "ng/mL", refLow: 20, refHigh: 300, optimalLow: 40, optimalHigh: 150, trend: "stable", history: [{ date: "Jul 2025", value: 92 }, { date: "Sep 2025", value: 88 }, { date: "Nov 2025", value: 84 }, { date: "Jan 2026", value: 85 }], description: "Iron storage protein. Also an acute phase reactant indicating inflammation." },
    ],
  },
  {
    key: "hormonal",
    label: "Hormonal",
    icon: Zap,
    color: "#06B6D4",
    biomarkers: [
      { name: "Free Testosterone", value: 15.2, unit: "pg/mL", refLow: 5.0, refHigh: 21.0, optimalLow: 12.0, optimalHigh: 20.0, trend: "up", history: [{ date: "Jul 2025", value: 11.5 }, { date: "Sep 2025", value: 12.8 }, { date: "Nov 2025", value: 14.1 }, { date: "Jan 2026", value: 15.2 }], description: "Bioavailable testosterone. Critical for energy, muscle mass, and cognitive function." },
      { name: "DHEA-S", value: 320, unit: "µg/dL", refLow: 100, refHigh: 500, optimalLow: 250, optimalHigh: 450, trend: "up", history: [{ date: "Jul 2025", value: 245 }, { date: "Sep 2025", value: 270 }, { date: "Nov 2025", value: 295 }, { date: "Jan 2026", value: 320 }], description: "Dehydroepiandrosterone sulfate. Longevity-associated adrenal hormone." },
      { name: "Cortisol (AM)", value: 19.2, unit: "µg/dL", refLow: 6.0, refHigh: 18.0, optimalLow: 10.0, optimalHigh: 16.0, trend: "up", history: [{ date: "Jul 2025", value: 15.8 }, { date: "Sep 2025", value: 17.1 }, { date: "Nov 2025", value: 18.5 }, { date: "Jan 2026", value: 19.2 }], description: "Morning cortisol. Stress hormone that follows a circadian rhythm." },
      { name: "TSH", value: 1.8, unit: "mIU/L", refLow: 0.4, refHigh: 4.0, optimalLow: 1.0, optimalHigh: 2.5, trend: "stable", history: [{ date: "Jul 2025", value: 2.1 }, { date: "Sep 2025", value: 1.9 }, { date: "Nov 2025", value: 1.8 }, { date: "Jan 2026", value: 1.8 }], description: "Thyroid stimulating hormone. Primary marker for thyroid function." },
      { name: "Free T3", value: 3.2, unit: "pg/mL", refLow: 2.0, refHigh: 4.4, optimalLow: 2.8, optimalHigh: 3.8, trend: "stable", history: [{ date: "Jul 2025", value: 3.0 }, { date: "Sep 2025", value: 3.1 }, { date: "Nov 2025", value: 3.2 }, { date: "Jan 2026", value: 3.2 }], description: "Active thyroid hormone. Drives metabolism, energy, and body temperature." },
      { name: "IGF-1", value: 185, unit: "ng/mL", refLow: 80, refHigh: 280, optimalLow: 150, optimalHigh: 220, trend: "up", history: [{ date: "Jul 2025", value: 145 }, { date: "Sep 2025", value: 158 }, { date: "Nov 2025", value: 172 }, { date: "Jan 2026", value: 185 }], description: "Insulin-like growth factor 1. Mediates growth hormone effects on tissue repair." },
    ],
  },
  {
    key: "liver_kidney",
    label: "Liver & Kidney",
    icon: Droplets,
    color: "#10B981",
    biomarkers: [
      { name: "ALT", value: 22, unit: "U/L", refLow: 7, refHigh: 56, optimalLow: 7, optimalHigh: 30, trend: "down", history: [{ date: "Jul 2025", value: 35 }, { date: "Sep 2025", value: 28 }, { date: "Nov 2025", value: 24 }, { date: "Jan 2026", value: 22 }], description: "Alanine aminotransferase. Primary liver enzyme for detecting hepatocellular damage." },
      { name: "AST", value: 24, unit: "U/L", refLow: 10, refHigh: 40, optimalLow: 10, optimalHigh: 30, trend: "stable", history: [{ date: "Jul 2025", value: 28 }, { date: "Sep 2025", value: 26 }, { date: "Nov 2025", value: 25 }, { date: "Jan 2026", value: 24 }], description: "Aspartate aminotransferase. Liver and muscle enzyme marker." },
      { name: "GGT", value: 72, unit: "U/L", refLow: 0, refHigh: 65, optimalLow: 0, optimalHigh: 25, trend: "up", history: [{ date: "Jul 2025", value: 45 }, { date: "Sep 2025", value: 55 }, { date: "Nov 2025", value: 64 }, { date: "Jan 2026", value: 72 }], description: "Gamma-glutamyl transferase. Sensitive marker for liver stress and alcohol use." },
      { name: "eGFR", value: 95, unit: "mL/min", refLow: 60, refHigh: 120, optimalLow: 90, optimalHigh: 120, trend: "stable", history: [{ date: "Jul 2025", value: 93 }, { date: "Sep 2025", value: 94 }, { date: "Nov 2025", value: 95 }, { date: "Jan 2026", value: 95 }], description: "Estimated glomerular filtration rate. Gold standard for kidney function assessment." },
      { name: "Creatinine", value: 0.95, unit: "mg/dL", refLow: 0.7, refHigh: 1.3, optimalLow: 0.7, optimalHigh: 1.1, trend: "stable", history: [{ date: "Jul 2025", value: 0.98 }, { date: "Sep 2025", value: 0.96 }, { date: "Nov 2025", value: 0.95 }, { date: "Jan 2026", value: 0.95 }], description: "Muscle metabolism byproduct filtered by kidneys. Key kidney function marker." },
    ],
  },
  {
    key: "longevity",
    label: "Longevity",
    icon: Activity,
    color: "#EC4899",
    biomarkers: [
      { name: "Vitamin D (25-OH)", value: 62, unit: "ng/mL", refLow: 30, refHigh: 100, optimalLow: 50, optimalHigh: 80, trend: "up", history: [{ date: "Jul 2025", value: 38 }, { date: "Sep 2025", value: 45 }, { date: "Nov 2025", value: 55 }, { date: "Jan 2026", value: 62 }], description: "Critical for immune function, bone health, and longevity. Most people are deficient." },
      { name: "Omega-3 Index", value: 8.5, unit: "%", refLow: 4.0, refHigh: 12.0, optimalLow: 8.0, optimalHigh: 12.0, trend: "up", history: [{ date: "Jul 2025", value: 5.2 }, { date: "Sep 2025", value: 6.5 }, { date: "Nov 2025", value: 7.8 }, { date: "Jan 2026", value: 8.5 }], description: "EPA+DHA as percentage of red blood cell membranes. >8% is cardioprotective." },
      { name: "NAD+ Levels", value: 32.5, unit: "µM", refLow: 10, refHigh: 50, optimalLow: 25, optimalHigh: 45, trend: "up", history: [{ date: "Jul 2025", value: 18.2 }, { date: "Sep 2025", value: 23.5 }, { date: "Nov 2025", value: 28.8 }, { date: "Jan 2026", value: 32.5 }], description: "Nicotinamide adenine dinucleotide. Critical coenzyme that declines with age." },
      { name: "Telomere Length", value: 7.2, unit: "kb", refLow: 5.0, refHigh: 10.0, optimalLow: 6.5, optimalHigh: 9.0, trend: "stable", history: [{ date: "Jul 2025", value: 7.1 }, { date: "Sep 2025", value: 7.1 }, { date: "Nov 2025", value: 7.2 }, { date: "Jan 2026", value: 7.2 }], description: "Chromosome end-cap length. Biological aging marker — longer is younger." },
      { name: "GlycanAge", value: 37, unit: "years", refLow: 25, refHigh: 60, optimalLow: 25, optimalHigh: 40, trend: "down", history: [{ date: "Jul 2025", value: 42 }, { date: "Sep 2025", value: 40 }, { date: "Nov 2025", value: 38 }, { date: "Jan 2026", value: 37 }], description: "Glycan-based biological age. Reflects immune system aging and inflammation." },
    ],
  },
];

/* ─── SVG Score Arc Gauge ─── */
function ScoreGauge({ value, max, color, size = 72, label }: { value: number; max: number; color: string; size?: number; label: string }) {
  const pct = Math.min(value / max, 1);
  const r = (size - 8) / 2;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference * (1 - pct);
  const uid = `gauge-${label.replace(/\s/g, '')}`;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id={`${uid}-grad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
          <filter id={`${uid}-glow`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Background track */}
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="5" />
        {/* Progress arc */}
        <circle
          cx={size/2} cy={size/2} r={r}
          fill="none"
          stroke={`url(#${uid}-grad)`}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          filter={`url(#${uid}-glow)`}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-black tabular-nums" style={{ color, fontFamily: "'Space Mono', monospace" }}>{value}</span>
      </div>
    </div>
  );
}

/* ─── Animated Number Counter Hook ─── */
function useAnimatedCounter(target: number, duration = 1200, decimals = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Number((eased * target).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return { count, ref };
}

/* ─── Radial Biomarker Gauge ─── */
function RadialBiomarkerGauge({ value, min, max, optimalLow, optimalHigh, color, size = 48 }: {
  value: number; min: number; max: number; optimalLow: number; optimalHigh: number; color: string; size?: number;
}) {
  const range = max - min || 1;
  const pct = Math.max(0, Math.min(1, (value - min) / range));
  const isOptimal = value >= optimalLow && value <= optimalHigh;
  const isInRange = value >= min && value <= max;
  const gaugeColor = isOptimal ? '#10B981' : isInRange ? '#F59E0B' : '#EF4444';
  const r = (size - 6) / 2;
  const circumference = Math.PI * r; // Semi-circle
  const dashOffset = circumference * (1 - pct);
  const uid = `rg-${Math.random().toString(36).slice(2, 6)}`;

  return (
    <div className="relative" style={{ width: size, height: size * 0.6 }}>
      <svg width={size} height={size * 0.6} viewBox={`0 0 ${size} ${size * 0.6}`}>
        <defs>
          <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {/* Background arc */}
        <path
          d={`M 3 ${size * 0.55} A ${r} ${r} 0 0 1 ${size - 3} ${size * 0.55}`}
          fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="4" strokeLinecap="round"
        />
        {/* Progress arc */}
        <path
          d={`M 3 ${size * 0.55} A ${r} ${r} 0 0 1 ${size - 3} ${size * 0.55}`}
          fill="none" stroke={`url(#${uid}-g)`} strokeWidth="4" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={dashOffset}
          style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)', filter: `drop-shadow(0 0 4px ${gaugeColor}40)` }}
        />
        {/* Needle */}
        {(() => {
          const angle = -180 + pct * 180;
          const cx = size / 2, cy = size * 0.55;
          const needleLen = r - 4;
          const rad = (angle * Math.PI) / 180;
          const nx = cx + needleLen * Math.cos(rad);
          const ny = cy + needleLen * Math.sin(rad);
          return (
            <g>
              <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={gaugeColor} strokeWidth="2" strokeLinecap="round"
                style={{ transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)', filter: `drop-shadow(0 0 3px ${gaugeColor}60)` }} />
              <circle cx={cx} cy={cy} r="3" fill={gaugeColor} />
              <circle cx={cx} cy={cy} r="1.5" fill="white" />
            </g>
          );
        })()}
      </svg>
    </div>
  );
}

/* ─── Velocity Indicator ─── */
function VelocityIndicator({ history, upIsGood }: { history: BiomarkerValue[]; upIsGood: boolean }) {
  if (history.length < 2) return null;
  const recent = history.slice(-2);
  const change = recent[1].value - recent[0].value;
  const pctChange = recent[0].value !== 0 ? (change / recent[0].value) * 100 : 0;
  const absChange = Math.abs(pctChange);

  let label: string, velocityColor: string, icon: React.ReactNode;
  if (absChange < 1) {
    label = 'Stable';
    velocityColor = '#6B7280';
    icon = <Minus className="w-2.5 h-2.5" />;
  } else if (absChange < 5) {
    const improving = (change > 0 && upIsGood) || (change < 0 && !upIsGood);
    label = improving ? 'Improving' : 'Declining';
    velocityColor = improving ? '#10B981' : '#EF4444';
    icon = improving ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />;
  } else {
    const improving = (change > 0 && upIsGood) || (change < 0 && !upIsGood);
    label = improving ? 'Improving Fast' : 'Declining Fast';
    velocityColor = improving ? '#059669' : '#DC2626';
    icon = improving ? <Rocket className="w-2.5 h-2.5" /> : <ArrowDown className="w-2.5 h-2.5" />;
  }

  return (
    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-bold" style={{
      color: velocityColor,
      background: `${velocityColor}10`,
      border: `1px solid ${velocityColor}20`,
    }}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

/* ─── Percentile Badge ─── */
function PercentileBadge({ biomarker }: { biomarker: Biomarker }) {
  // Simulate percentile based on how close to optimal center the value is
  const optCenter = (biomarker.optimalLow + biomarker.optimalHigh) / 2;
  const optRange = biomarker.optimalHigh - biomarker.optimalLow;
  const distFromCenter = Math.abs(biomarker.value - optCenter) / (optRange / 2);
  const basePercentile = Math.max(5, Math.min(99, Math.round(95 - distFromCenter * 45)));
  // Add deterministic variation based on name hash
  const nameHash = biomarker.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const percentile = Math.max(5, Math.min(99, basePercentile + (nameHash % 11) - 5));
  const flPercentile = Math.min(99, percentile + Math.round((nameHash % 7) + 3));

  const pctColor = percentile >= 75 ? '#10B981' : percentile >= 50 ? '#06B6D4' : percentile >= 25 ? '#F59E0B' : '#EF4444';

  return (
    <div className="flex items-center gap-2">
      {/* Population percentile bar */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <Users className="w-2.5 h-2.5" style={{ color: 'var(--fl-text-muted)' }} />
          <div className="relative w-16 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
            <div className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000" style={{
              width: `${percentile}%`,
              background: `linear-gradient(90deg, ${pctColor}40, ${pctColor})`,
            }} />
          </div>
          <span className="text-[9px] font-bold tabular-nums" style={{ color: pctColor, fontFamily: "'Space Mono', monospace" }}>
            Top {100 - percentile}%
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px]" style={{ color: 'var(--fl-accent)' }}>FL</span>
          <div className="relative w-16 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
            <div className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000" style={{
              width: `${flPercentile}%`,
              background: 'linear-gradient(90deg, rgba(34,211,238,0.4), rgba(34,211,238,1))',
            }} />
          </div>
          <span className="text-[9px] font-bold tabular-nums" style={{ color: 'var(--fl-accent)', fontFamily: "'Space Mono', monospace" }}>
            Top {100 - flPercentile}%
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Biomarker Interconnection Data ─── */
const BIOMARKER_CONNECTIONS: Record<string, string[]> = {
  'Fasting Glucose': ['HbA1c', 'Fasting Insulin', 'HOMA-IR', 'Triglycerides'],
  'HbA1c': ['Fasting Glucose', 'Fasting Insulin', 'HOMA-IR'],
  'Fasting Insulin': ['Fasting Glucose', 'HbA1c', 'HOMA-IR', 'Triglycerides'],
  'HOMA-IR': ['Fasting Glucose', 'Fasting Insulin', 'HbA1c'],
  'Total Cholesterol': ['LDL Cholesterol', 'HDL Cholesterol', 'Triglycerides', 'ApoB'],
  'LDL Cholesterol': ['Total Cholesterol', 'ApoB', 'Lp(a)', 'hs-CRP'],
  'HDL Cholesterol': ['Total Cholesterol', 'Triglycerides', 'ApoB'],
  'Triglycerides': ['Fasting Glucose', 'Fasting Insulin', 'HDL Cholesterol', 'Total Cholesterol'],
  'ApoB': ['LDL Cholesterol', 'Total Cholesterol', 'Lp(a)', 'Triglycerides'],
  'Lp(a)': ['LDL Cholesterol', 'ApoB', 'hs-CRP'],
  'hs-CRP': ['IL-6', 'TNF-alpha', 'Homocysteine', 'LDL Cholesterol', 'Ferritin'],
  'IL-6': ['hs-CRP', 'TNF-alpha', 'Ferritin'],
  'TNF-alpha': ['hs-CRP', 'IL-6', 'Ferritin'],
  'Homocysteine': ['hs-CRP', 'Vitamin D (25-OH)'],
  'Ferritin': ['hs-CRP', 'IL-6', 'TNF-alpha', 'ALT'],
  'Free Testosterone': ['DHEA-S', 'Cortisol (AM)', 'IGF-1'],
  'DHEA-S': ['Free Testosterone', 'Cortisol (AM)', 'IGF-1'],
  'Cortisol (AM)': ['Free Testosterone', 'DHEA-S', 'TSH'],
  'TSH': ['Free T3', 'Cortisol (AM)'],
  'Free T3': ['TSH', 'Free Testosterone'],
  'IGF-1': ['Free Testosterone', 'DHEA-S', 'NAD+ Levels'],
  'ALT': ['AST', 'GGT', 'Ferritin'],
  'AST': ['ALT', 'GGT'],
  'GGT': ['ALT', 'AST', 'Uric Acid'],
  'eGFR': ['Uric Acid', 'hs-CRP'],
  'Uric Acid': ['eGFR', 'GGT', 'Fasting Glucose'],
  'Vitamin D (25-OH)': ['Omega-3 Index', 'hs-CRP', 'Homocysteine'],
  'Omega-3 Index': ['Vitamin D (25-OH)', 'hs-CRP', 'Triglycerides'],
  'NAD+ Levels': ['Telomere Length', 'GlycanAge', 'IGF-1'],
  'Telomere Length': ['NAD+ Levels', 'GlycanAge', 'hs-CRP'],
  'GlycanAge': ['NAD+ Levels', 'Telomere Length', 'hs-CRP'],
};

/* ─── Interconnection Map ─── */
function InterconnectionMap({ biomarker, onNavigate }: { biomarker: Biomarker; onNavigate?: (name: string) => void }) {
  const connections = BIOMARKER_CONNECTIONS[biomarker.name] || [];
  if (connections.length === 0) return null;

  return (
    <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="flex items-center gap-2 mb-3">
        <Link2 className="w-3.5 h-3.5" style={{ color: 'var(--fl-accent)' }} />
        <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--fl-text-muted)' }}>Connected Biomarkers</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {connections.map((name) => (
          <button
            key={name}
            onClick={(e) => { e.stopPropagation(); onNavigate?.(name); }}
            className="group/conn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: 'rgba(34,211,238,0.04)',
              border: '1px solid rgba(34,211,238,0.1)',
              color: 'var(--fl-text-secondary)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--fl-accent)', boxShadow: '0 0 4px rgba(34,211,238,0.4)' }} />
            {name}
            <svg className="w-2.5 h-2.5 opacity-0 group-hover/conn:opacity-100 transition-opacity" viewBox="0 0 10 10" fill="none">
              <path d="M3 1L7 5L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Health Momentum Score ─── */
function HealthMomentum({ categories }: { categories: BiomarkerCategory[] }) {
  const allBiomarkers = categories.flatMap(c => c.biomarkers);
  let improving = 0, stable = 0, declining = 0;

  for (const b of allBiomarkers) {
    if (b.history.length < 2) { stable++; continue; }
    const first = b.history[0].value;
    const last = b.history[b.history.length - 1].value;
    const pctChange = first !== 0 ? ((last - first) / first) * 100 : 0;
    const upIsGood = ['HDL Cholesterol', 'Free Testosterone', 'DHEA-S', 'Free T3', 'IGF-1', 'Vitamin D (25-OH)', 'Omega-3 Index', 'NAD+ Levels', 'Telomere Length', 'eGFR'].includes(b.name);
    const isImproving = upIsGood ? pctChange > 1 : pctChange < -1;
    const isDeclining = upIsGood ? pctChange < -1 : pctChange > 1;
    if (isImproving) improving++;
    else if (isDeclining) declining++;
    else stable++;
  }

  const total = allBiomarkers.length;
  const momentumScore = Math.round(((improving - declining) / total) * 100);
  const momentumLabel = momentumScore > 20 ? 'Strong Upward' : momentumScore > 5 ? 'Improving' : momentumScore > -5 ? 'Steady' : momentumScore > -20 ? 'Declining' : 'Needs Attention';
  const momentumColor = momentumScore > 20 ? '#059669' : momentumScore > 5 ? '#10B981' : momentumScore > -5 ? '#06B6D4' : momentumScore > -20 ? '#F59E0B' : '#EF4444';

  // Arrow angle: -90 (straight up) at +100, 0 (right) at 0, +90 (down) at -100
  const arrowAngle = -90 + ((100 - momentumScore) / 200) * 180;

  return (
    <div className="flex items-center gap-4 px-4 py-3 rounded-xl" style={{
      background: `${momentumColor}08`,
      border: `1px solid ${momentumColor}15`,
    }}>
      {/* Animated arrow gauge */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48">
          {/* Background circle */}
          <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
          {/* Colored arc */}
          <circle cx="24" cy="24" r="20" fill="none" stroke={momentumColor} strokeWidth="2.5" strokeLinecap="round"
            strokeDasharray={`${Math.PI * 20}`} strokeDashoffset={`${Math.PI * 20 * 0.25}`}
            style={{ filter: `drop-shadow(0 0 4px ${momentumColor}50)`, transition: 'all 1s ease' }}
            transform="rotate(-90 24 24)" />
          {/* Arrow */}
          <g transform={`rotate(${arrowAngle} 24 24)`} style={{ transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <line x1="24" y1="24" x2="38" y2="24" stroke={momentumColor} strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="38,20 44,24 38,28" fill={momentumColor} />
          </g>
          {/* Center dot */}
          <circle cx="24" cy="24" r="3" fill={momentumColor} />
          <circle cx="24" cy="24" r="1.5" fill="white" />
        </svg>
      </div>

      {/* Labels */}
      <div className="flex flex-col">
        <span className="text-[8px] uppercase tracking-widest font-bold" style={{ color: 'var(--fl-text-muted)' }}>Health Momentum</span>
        <span className="text-sm font-black" style={{ color: momentumColor }}>{momentumLabel}</span>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[9px] font-semibold flex items-center gap-1">
            <ArrowUp className="w-2.5 h-2.5 text-emerald-400" />
            <span className="text-emerald-400">{improving}</span>
          </span>
          <span className="text-[9px] font-semibold flex items-center gap-1">
            <Minus className="w-2.5 h-2.5 text-gray-600" />
            <span className="text-gray-600">{stable}</span>
          </span>
          <span className="text-[9px] font-semibold flex items-center gap-1">
            <ArrowDown className="w-2.5 h-2.5 text-red-400" />
            <span className="text-red-400">{declining}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Enhanced Sparkline with Reference Band ─── */
function Sparkline({ data, color, refLow, refHigh, optimalLow, optimalHigh, width = 140, height = 44 }: {
  data: BiomarkerValue[]; color: string; refLow?: number; refHigh?: number; optimalLow?: number; optimalHigh?: number; width?: number; height?: number;
}) {
  if (data.length < 2) return null;
  const values = data.map((d) => d.value);
  const allVals = [...values];
  if (optimalLow !== undefined) allVals.push(optimalLow);
  if (optimalHigh !== undefined) allVals.push(optimalHigh);
  const min = Math.min(...allVals);
  const max = Math.max(...allVals);
  const range = max - min || 1;
  const pad = 6;

  const points = values.map((v, i) => ({
    x: pad + (i / (values.length - 1)) * (width - pad * 2),
    y: height - pad - ((v - min) / range) * (height - pad * 2),
  }));

  const lineStr = points.map(p => `${p.x},${p.y}`).join(" ");
  const uid = `spark-${color.replace("#", "")}-${Math.random().toString(36).slice(2, 6)}`;

  // Optimal band Y positions
  const optTopY = optimalHigh !== undefined ? height - pad - ((optimalHigh - min) / range) * (height - pad * 2) : 0;
  const optBotY = optimalLow !== undefined ? height - pad - ((optimalLow - min) / range) * (height - pad * 2) : height;

  return (
    <svg width={width} height={height} className="flex-shrink-0">
      <defs>
        <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${uid}-stroke`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="50%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      {/* Optimal zone band */}
      {optimalLow !== undefined && optimalHigh !== undefined && (
        <rect x={pad} y={optTopY} width={width - pad * 2} height={Math.max(0, optBotY - optTopY)} rx="2"
          fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.1)" strokeWidth="0.5" strokeDasharray="3 3" />
      )}
      {/* Area fill */}
      <polygon
        points={`${pad},${height - pad} ${lineStr} ${width - pad},${height - pad}`}
        fill={`url(#${uid}-fill)`}
      />
      {/* Main line */}
      <polyline points={lineStr} fill="none" stroke={`url(#${uid}-stroke)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Data points */}
      {points.map((p, i) => (
        <g key={i}>
          {i === points.length - 1 ? (
            <>
              <circle cx={p.x} cy={p.y} r="5" fill={color} opacity="0.15" />
              <circle cx={p.x} cy={p.y} r="3" fill={color} />
              <circle cx={p.x} cy={p.y} r="1.5" fill="white" />
            </>
          ) : (
            <circle cx={p.x} cy={p.y} r="1.5" fill="rgba(0,0,0,0.4)" />
          )}
        </g>
      ))}
    </svg>
  );
}

/* ─── Range Bar (horizontal reference + optimal + value) ─── */
function RangeBar({ value, refLow, refHigh, optimalLow, optimalHigh, color }: {
  value: number; refLow: number; refHigh: number; optimalLow: number; optimalHigh: number; color: string;
}) {
  const totalRange = refHigh - refLow;
  const barMin = refLow - totalRange * 0.2;
  const barMax = refHigh + totalRange * 0.2;
  const barRange = barMax - barMin;

  const optLeftPct = ((optimalLow - barMin) / barRange) * 100;
  const optWidthPct = ((optimalHigh - optimalLow) / barRange) * 100;
  const refLeftPct = ((refLow - barMin) / barRange) * 100;
  const refWidthPct = ((refHigh - refLow) / barRange) * 100;
  const valuePct = Math.max(1, Math.min(99, ((value - barMin) / barRange) * 100));

  const isOptimal = value >= optimalLow && value <= optimalHigh;
  const isInRange = value >= refLow && value <= refHigh;
  const markerColor = isOptimal ? "#10B981" : isInRange ? color : "#EF4444";

  return (
    <div className="relative w-full">
      {/* Bar container */}
      <div className="relative h-2 w-full rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.04)' }}>
        {/* Reference range */}
        <div className="absolute top-0 h-full rounded-full" style={{ left: `${refLeftPct}%`, width: `${refWidthPct}%`, background: 'rgba(0,0,0,0.06)' }} />
        {/* Optimal zone - green */}
        <div className="absolute top-0 h-full rounded-full" style={{
          left: `${optLeftPct}%`, width: `${optWidthPct}%`,
          background: 'linear-gradient(90deg, rgba(16,185,129,0.15), rgba(16,185,129,0.25), rgba(16,185,129,0.15))',
        }} />
      </div>
      {/* Value marker */}
      <div className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-out" style={{ left: `calc(${valuePct}% - 7px)` }}>
        <div className="relative">
          <div className="w-3.5 h-3.5 rounded-full border-[2.5px]" style={{
            background: markerColor,
            borderColor: '#FFFFFF',
            boxShadow: `0 0 12px ${markerColor}60, 0 0 4px ${markerColor}`,
          }} />
        </div>
      </div>
      {/* Labels */}
      <div className="flex justify-between mt-1.5">
        <span className="text-[8px] text-gray-600 tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>{refLow}</span>
        <span className="text-[8px] text-emerald-500/40 tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>optimal</span>
        <span className="text-[8px] text-gray-600 tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>{refHigh}</span>
      </div>
    </div>
  );
}

/* ─── Expanded Detail Chart ─── */
function DetailChart({ biomarker, color, goal }: { biomarker: Biomarker; color: string; goal?: number }) {
  const data = biomarker.history;
  if (data.length < 2) return null;

  const w = 480, h = 160, pad = { top: 20, right: 20, bottom: 30, left: 50 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;

  const values = data.map(d => d.value);
  const allVals = [...values, biomarker.optimalLow, biomarker.optimalHigh, biomarker.refLow, biomarker.refHigh, ...(goal !== undefined ? [goal] : [])];
  const min = Math.min(...allVals) * 0.95;
  const max = Math.max(...allVals) * 1.05;
  const range = max - min || 1;

  const toX = (i: number) => pad.left + (i / (data.length - 1)) * plotW;
  const toY = (v: number) => pad.top + plotH - ((v - min) / range) * plotH;

  const points = data.map((d, i) => ({ x: toX(i), y: toY(d.value) }));
  const lineStr = points.map(p => `${p.x},${p.y}`).join(" ");

  const optTop = toY(biomarker.optimalHigh);
  const optBot = toY(biomarker.optimalLow);
  const refTop = toY(biomarker.refHigh);
  const refBot = toY(biomarker.refLow);

  const uid = `detail-${biomarker.name.replace(/\s/g, '')}`;

  // Y-axis ticks
  const tickCount = 4;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => min + (range / tickCount) * i);

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id={`${uid}-area`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${uid}-line`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        <filter id={`${uid}-glow`}>
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Grid lines */}
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={pad.left} y1={toY(t)} x2={w - pad.right} y2={toY(t)} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          <text x={pad.left - 8} y={toY(t) + 3} textAnchor="end" fill="rgba(0,0,0,0.4)" fontSize="9" fontFamily="'Space Mono', monospace">
            {t < 10 ? t.toFixed(1) : Math.round(t)}
          </text>
        </g>
      ))}

      {/* Reference range band */}
      <rect x={pad.left} y={refTop} width={plotW} height={Math.max(0, refBot - refTop)} fill="rgba(0,0,0,0.02)" rx="2" />

      {/* Optimal zone band */}
      <rect x={pad.left} y={optTop} width={plotW} height={Math.max(0, optBot - optTop)} fill="rgba(16,185,129,0.08)" rx="2" />
      <line x1={pad.left} y1={optTop} x2={w - pad.right} y2={optTop} stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1={pad.left} y1={optBot} x2={w - pad.right} y2={optBot} stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Optimal label */}
      <text x={w - pad.right + 4} y={(optTop + optBot) / 2 + 3} fill="rgba(16,185,129,0.4)" fontSize="8" fontFamily="'Space Mono', monospace">OPT</text>

      {/* Goal target line */}
      {goal !== undefined && (() => {
        const goalY = toY(goal);
        return (
          <g>
            <line x1={pad.left} y1={goalY} x2={w - pad.right} y2={goalY} stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx={pad.left} cy={goalY} r="3" fill="#22D3EE" />
            <text x={w - pad.right + 4} y={goalY + 3} fill="rgba(34,211,238,0.7)" fontSize="8" fontWeight="700" fontFamily="'Space Mono', monospace">GOAL</text>
          </g>
        );
      })()}

      {/* Area fill */}
      <polygon points={`${points[0].x},${pad.top + plotH} ${lineStr} ${points[points.length-1].x},${pad.top + plotH}`} fill={`url(#${uid}-area)`} />

      {/* Glow line */}
      <polyline points={lineStr} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" filter={`url(#${uid}-glow)`} />

      {/* Main line */}
      <polyline points={lineStr} fill="none" stroke={`url(#${uid}-line)`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Data points */}
      {points.map((p, i) => {
        const isLast = i === data.length - 1;
        const val = data[i].value;
        const isOpt = val >= biomarker.optimalLow && val <= biomarker.optimalHigh;
        const dotColor = isLast ? color : isOpt ? "#10B981" : "rgba(255,255,255,0.4)";
        return (
          <g key={i}>
            {isLast && <circle cx={p.x} cy={p.y} r="8" fill={color} opacity="0.12" />}
            <circle cx={p.x} cy={p.y} r={isLast ? 5 : 3} fill={dotColor} />
            {isLast && <circle cx={p.x} cy={p.y} r="2" fill="white" />}
            {/* Value label */}
            <text x={p.x} y={p.y - 10} textAnchor="middle" fill={isLast ? "#0A0A0A" : "rgba(0,0,0,0.5)"} fontSize={isLast ? "11" : "9"} fontWeight={isLast ? "800" : "500"} fontFamily="'Space Mono', monospace">
              {val}
            </text>
          </g>
        );
      })}

      {/* X-axis labels */}
      {data.map((d, i) => (
        <text key={i} x={toX(i)} y={h - 5} textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="9" fontFamily="'Space Mono', monospace">
          {d.date.split(' ')[0]}
        </text>
      ))}
    </svg>
  );
}

/* ─── Biomarker Row ─── */
function BiomarkerRow({ biomarker, color, expanded, onToggle, index, goal, goalTargetDate, onSetGoal, onAskZori, onNavigateBiomarker }: {
  biomarker: Biomarker; color: string; expanded: boolean; onToggle: () => void; index: number;
  goal?: number; goalTargetDate?: string; onSetGoal?: (biomarker: Biomarker) => void;
  onAskZori?: (biomarker: Biomarker) => Promise<string>;
  onNavigateBiomarker?: (name: string) => void;
}) {
  const [zoriResponse, setZoriResponse] = useState<string | null>(null);
  const [zoriLoading, setZoriLoading] = useState(false);
  const isOptimal = biomarker.value >= biomarker.optimalLow && biomarker.value <= biomarker.optimalHigh;
  const isInRange = biomarker.value >= biomarker.refLow && biomarker.value <= biomarker.refHigh;
  const statusColor = isOptimal ? "#10B981" : isInRange ? "#F59E0B" : "#EF4444";
  const statusLabel = isOptimal ? "Optimal" : isInRange ? "In Range" : "Attention";
  const StatusIcon = isOptimal ? CheckCircle2 : isInRange ? AlertTriangle : XCircle;

  const TrendIcon = biomarker.trend === "up" ? TrendingUp : biomarker.trend === "down" ? TrendingDown : Minus;

  const firstVal = biomarker.history.length > 0 ? biomarker.history[0].value : biomarker.value;
  const pctChange = firstVal !== 0 ? ((biomarker.value - firstVal) / firstVal) * 100 : 0;

  // Determine if trend is positive (depends on biomarker — for most, down is good except HDL, Testosterone, etc.)
  const upIsGood = ["HDL Cholesterol", "Free Testosterone", "DHEA-S", "Free T3", "IGF-1", "Vitamin D (25-OH)", "Omega-3 Index", "NAD+ Levels", "Telomere Length", "eGFR"].includes(biomarker.name);
  const trendIsPositive = upIsGood ? pctChange > 0 : pctChange < 0;
  const trendColor = Math.abs(pctChange) < 1 ? "#6B7280" : trendIsPositive ? "#10B981" : "#EF4444";

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 40);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`relative transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div
        className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${expanded ? "ring-1" : ""}`}
        style={{
          background: expanded ? 'var(--fl-bg-card)' : 'transparent',
          boxShadow: expanded ? `0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px ${color}15` : undefined,
        }}
      >
        {/* Left accent */}
        {expanded && (
          <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: `linear-gradient(180deg, ${color}, ${color}20)` }} />
        )}

        <button onClick={onToggle} className="w-full px-3 md:px-4 py-3 md:py-4 flex items-center gap-2 md:gap-4 text-left transition-colors">
          {/* Status icon */}
          <div className="flex-shrink-0 w-5">
            <StatusIcon className="w-4 h-4" style={{ color: statusColor }} />
          </div>

          {/* Name + Status badge */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[12px] md:text-[13px] font-semibold truncate" style={{ color: 'var(--fl-text-primary)' }}>{biomarker.name}</span>
              <span className="text-[9px] px-1.5 py-[2px] rounded-md font-bold tracking-wide uppercase" style={{
                background: `${statusColor}15`,
                color: statusColor,
                border: `1px solid ${statusColor}20`,
              }}>
                {statusLabel}
              </span>
            </div>
          </div>

          {/* Range bar (centered, enlarged) */}
          <div className="flex-[3] hidden lg:flex items-center justify-center pb-5">
            <div className="relative h-5 w-[90%] rounded-full" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
              {(() => {
                const totalRange = biomarker.refHigh - biomarker.refLow;
                const barMin = biomarker.refLow - totalRange * 0.3;
                const barMax = biomarker.refHigh + totalRange * 0.3;
                const barRange = barMax - barMin;
                const refL = ((biomarker.refLow - barMin) / barRange) * 100;
                const refW = ((biomarker.refHigh - biomarker.refLow) / barRange) * 100;
                const optL = ((biomarker.optimalLow - barMin) / barRange) * 100;
                const optW = ((biomarker.optimalHigh - biomarker.optimalLow) / barRange) * 100;
                const valPct = Math.max(1, Math.min(99, ((biomarker.value - barMin) / barRange) * 100));
                return (
                  <>
                    {/* Reference range (lighter) */}
                    <div className="absolute top-0 h-full rounded-full" style={{ left: `${refL}%`, width: `${refW}%`, background: 'rgba(0,0,0,0.06)' }} />
                    {/* Optimal range (green) */}
                    <div className="absolute top-0 h-full rounded-full" style={{ left: `${optL}%`, width: `${optW}%`, background: 'rgba(16,185,129,0.25)' }} />
                    {/* Value dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-300" style={{
                      left: `calc(${valPct}% - 10px)`,
                      width: '20px',
                      height: '20px',
                      background: statusColor,
                      boxShadow: `0 0 14px ${statusColor}60, 0 0 6px ${statusColor}40`,
                      border: '2.5px solid var(--fl-bg-deep)',
                    }} />
                    {/* Zone labels: Low | Optimal | High */}
                    <span className="absolute -bottom-4.5 text-[9px] font-semibold uppercase tracking-wider" style={{ left: `${refL / 2}%`, bottom: '-18px', color: 'rgba(239,68,68,0.5)', transform: 'translateX(-50%)' }}>Low</span>
                    <span className="absolute -bottom-4.5 text-[9px] font-semibold uppercase tracking-wider" style={{ left: `${optL + optW / 2}%`, bottom: '-18px', color: 'rgba(16,185,129,0.6)', transform: 'translateX(-50%)' }}>Optimal</span>
                    <span className="absolute -bottom-4.5 text-[9px] font-semibold uppercase tracking-wider" style={{ left: `${refL + refW + (100 - refL - refW) / 2}%`, bottom: '-18px', color: 'rgba(239,68,68,0.5)', transform: 'translateX(-50%)' }}>High</span>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Sparkline - only shown when expanded */}

          {/* Value + Trend */}
          <div className="text-right min-w-[60px] md:min-w-[80px] flex-shrink-0">
            <div className="flex items-baseline gap-1 justify-end">
              <span className="text-base font-black tabular-nums" style={{ fontFamily: "'Space Mono', monospace", color: 'var(--fl-text-primary)' }}>
                {biomarker.value}
              </span>
              <span className="text-[9px] font-medium" style={{ color: 'var(--fl-text-muted)' }}>{biomarker.unit}</span>
            </div>
            <div className="flex items-center gap-1.5 justify-end mt-0.5" data-tour="velocity">
              <TrendIcon className="w-3 h-3" style={{ color: trendColor }} />
              <span className="text-[10px] font-semibold tabular-nums" style={{ color: trendColor, fontFamily: "'Space Mono', monospace" }}>
                {pctChange > 0 ? '+' : ''}{pctChange.toFixed(1)}%
              </span>
              <VelocityIndicator history={biomarker.history} upIsGood={upIsGood} />
            </div>
          </div>

          {/* Expand/Collapse indicator */}
          {expanded ? (
            <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all" style={{ background: 'var(--fl-accent-glow)', border: '1px solid var(--fl-border-accent)' }}>
              <X className="w-3.5 h-3.5" style={{ color: 'var(--fl-accent)' }} />
            </div>
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-300 flex-shrink-0" style={{ color: 'var(--fl-text-muted)' }} />
          )}
        </button>

        {/* Expanded Detail */}
        {expanded && (
          <div className="px-3 md:px-5 pb-4 md:pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Close bar */}
            <div className="flex justify-end mb-2 -mt-1">
              <button
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all hover:scale-105"
                style={{ border: '1px solid var(--fl-border-accent)', color: 'var(--fl-accent)', background: 'var(--fl-accent-glow)' }}
              >
                <X className="w-3 h-3" />
                Close
              </button>
            </div>
            <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, transparent, ${color}20, transparent)` }} />

            {/* Description */}
            <div className="flex items-start gap-2 mb-5 p-3 rounded-lg" style={{ background: `${color}05`, border: `1px solid ${color}08` }}>
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: `${color}80` }} />
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--fl-text-secondary)' }}>{biomarker.description}</p>
            </div>

            {/* Mini Range Bar Preview */}
            <div className="mb-4 md:mb-5 p-3 md:p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--fl-text-muted)' }}>Range Position</span>
                <span className="text-[11px] font-bold tabular-nums" style={{ fontFamily: "'Space Mono', monospace", color }}>{biomarker.value} <span className="text-[9px] font-normal text-gray-600">{biomarker.unit}</span></span>
              </div>
              <div className="relative mx-auto" style={{ maxWidth: '100%' }}>
                {/* Full range bar */}
                <div className="relative h-3 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.08)' }}>
                  {/* Optimal zone highlight */}
                  <div className="absolute top-0 bottom-0 rounded-full" style={{
                    left: `${Math.max(0, ((biomarker.optimalLow - biomarker.refLow) / (biomarker.refHigh - biomarker.refLow)) * 100)}%`,
                    width: `${Math.min(100, ((biomarker.optimalHigh - biomarker.optimalLow) / (biomarker.refHigh - biomarker.refLow)) * 100)}%`,
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                  }} />
                  {/* Value dot */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full" style={{
                    left: `${Math.max(2, Math.min(98, ((biomarker.value - biomarker.refLow) / (biomarker.refHigh - biomarker.refLow)) * 100))}%`,
                    background: color,
                    boxShadow: `0 0 8px ${color}60, 0 0 16px ${color}30`,
                    border: '2px solid var(--fl-bg-card)',
                  }} />
                </div>
                {/* Labels */}
                <div className="flex justify-between mt-1.5">
                  <span className="text-[9px]" style={{ color: 'var(--fl-text-muted)' }}>{biomarker.refLow}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(16,185,129,0.4)' }} />
                    <span className="text-[9px] text-emerald-400/70">Optimal: {biomarker.optimalLow}–{biomarker.optimalHigh}</span>
                  </div>
                  <span className="text-[9px]" style={{ color: 'var(--fl-text-muted)' }}>{biomarker.refHigh}</span>
                </div>
              </div>
            </div>

            {/* Two-column layout: Chart + Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Chart (2 cols) */}
              <div className="lg:col-span-2 rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold">Trend History</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(16,185,129,0.3)' }} />
                      <span className="text-[9px] text-gray-600">Optimal Zone</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-0.5 rounded" style={{ background: color }} />
                      <span className="text-[9px] text-gray-600">Your Values</span>
                    </div>
                    {goal !== undefined && (
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-0.5 rounded" style={{ background: '#22D3EE', opacity: 0.5 }} />
                        <span className="text-[9px] text-amber-700/60">Goal</span>
                      </div>
                    )}
                  </div>
                </div>
                <DetailChart biomarker={biomarker} color={color} goal={goal} />
              </div>

              {/* Stats column */}
                <div className="space-y-3" data-tour="gauges">
                {/* Current + Radial Gauge */}
                <div className="rounded-xl p-4 text-center" style={{ background: `${color}06`, border: `1px solid ${color}10` }}>
                  <p className="text-[9px] uppercase tracking-widest font-bold mb-2" style={{ color: `${color}` }}>Current Value</p>
                  <div className="flex items-center justify-center gap-3">
                    <RadialBiomarkerGauge value={biomarker.value} min={biomarker.refLow} max={biomarker.refHigh} optimalLow={biomarker.optimalLow} optimalHigh={biomarker.optimalHigh} color={color} size={56} />
                    <div>
                      <p className="text-2xl font-black tabular-nums" style={{ fontFamily: "'Space Mono', monospace", color: 'var(--fl-text-primary)' }}>{biomarker.value}</p>
                      <p className="text-[10px] text-gray-600 mt-0.5">{biomarker.unit}</p>
                    </div>
                  </div>
                </div>

                {/* Percentile Ranking */}
                <div className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <p className="text-[9px] uppercase tracking-widest font-bold mb-3" style={{ color: 'var(--fl-text-muted)' }}>Percentile Ranking</p>
                  <PercentileBadge biomarker={biomarker} />
                </div>

                {/* Ranges */}
                <div className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <p className="text-[9px] text-gray-600 uppercase tracking-widest font-bold mb-3">Reference Ranges</p>
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-emerald-400 font-medium">Optimal</span>
                      <span className="text-[12px] text-emerald-300 font-bold tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>
                        {biomarker.optimalLow} – {biomarker.optimalHigh}
                      </span>
                    </div>
                    <div className="h-px bg-white/[0.04]" />
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-gray-600 font-medium">Normal</span>
                      <span className="text-[12px] text-gray-300 font-bold tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>
                        {biomarker.refLow} – {biomarker.refHigh}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Change */}
                <div className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <p className="text-[9px] text-gray-600 uppercase tracking-widest font-bold mb-2">Since Baseline</p>
                  <div className="flex items-center gap-2">
                    <TrendIcon className="w-4 h-4" style={{ color: trendColor }} />
                    <span className="text-lg font-black tabular-nums" style={{ color: trendColor, fontFamily: "'Space Mono', monospace" }}>
                      {pctChange > 0 ? '+' : ''}{pctChange.toFixed(1)}%
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 mt-1">
                    {firstVal} → {biomarker.value} {biomarker.unit}
                  </p>
                </div>
              </div>
            </div>

            {/* Goal + Set Goal Button */}
            <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <div className="flex items-center gap-3">
                {goal !== undefined && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.1)' }}>
                    <Target className="w-3.5 h-3.5 text-amber-700" />
                    <span className="text-[10px] text-gray-600 font-medium">Goal:</span>
                    <span className="text-sm font-bold text-amber-700 tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>{goal}</span>
                    <span className="text-[10px] text-gray-600">{biomarker.unit}</span>
                    {(() => {
                      const progress = Math.min(100, Math.max(0, ((biomarker.value - (biomarker.history[0]?.value || biomarker.value)) / (goal - (biomarker.history[0]?.value || biomarker.value))) * 100));
                      return progress >= 100 ? (
                        <span className="text-[10px] text-emerald-400 font-bold ml-1">✓ Achieved</span>
                      ) : (
                        <span className="text-[10px] text-amber-700/70 font-semibold ml-1">{Math.round(progress)}% there</span>
                      );
                    })()}
                    {goalTargetDate && (() => {
                      const days = Math.ceil((new Date(goalTargetDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
                      return days > 0 ? (
                        <span className="text-[10px] text-amber-400/80 font-medium ml-2 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                          {days}d left
                        </span>
                      ) : days === 0 ? (
                        <span className="text-[10px] text-orange-400 font-bold ml-2">Due today</span>
                      ) : (
                        <span className="text-[10px] text-red-400/80 font-medium ml-2">{Math.abs(days)}d overdue</span>
                      );
                    })()}
                  </div>
                )}
              </div>
              {onSetGoal && (
                <button
                  onClick={(e) => { e.stopPropagation(); onSetGoal(biomarker); }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold text-amber-700 hover:bg-amber-700/10 transition-all"
                  style={{ border: '1px solid rgba(34,211,238,0.15)' }}
                >
                  <Target className="w-3 h-3" />
                  {goal !== undefined ? 'Edit Goal' : 'Set Goal'}
                </button>
              )}
            </div>

            {/* Ask WEG AI AI Section */}
             {onAskZori && (
              <div className="mt-4 pt-4" data-tour="zori" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                {!zoriResponse && !zoriLoading && (
                  <button
                    onClick={async (e) => {
                      e.stopPropagation();
                      setZoriLoading(true);
                      try {
                        const resp = await onAskZori(biomarker);
                        setZoriResponse(resp);
                      } catch { setZoriResponse('Unable to get analysis right now.'); }
                      setZoriLoading(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(34,211,238,0.08))', border: '1px solid rgba(139,92,246,0.2)' }}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span className="text-amber-700">Ask WEG AI</span>
                    <span className="text-gray-600 text-[10px]">— AI analysis of {biomarker.name}</span>
                  </button>
                )}
                {zoriLoading && (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)' }}>
                    <div className="relative">
                      <Loader2 className="w-4 h-4 text-amber-700 animate-spin" />
                    </div>
                    <span className="text-xs text-amber-700 font-medium">WEG AI is analyzing {biomarker.name}...</span>
                  </div>
                )}
                {zoriResponse && (
                  <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(34,211,238,0.03))', border: '1px solid rgba(139,92,246,0.12)' }}>
                    <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(34,211,238,0.2), transparent)' }} />
                    <div className="px-4 py-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                        <span className="text-[10px] text-amber-700 uppercase tracking-widest font-bold">Zori's Analysis</span>
                        <button
                          onClick={(e) => { e.stopPropagation(); setZoriResponse(null); }}
                          className="ml-auto text-gray-600 hover:text-gray-300 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-[13px] text-gray-200 leading-relaxed">{zoriResponse}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Full Range Bar */}
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <p className="text-[9px] text-gray-600 uppercase tracking-widest font-bold mb-3">Position in Range</p>
              <RangeBar
                value={biomarker.value}
                refLow={biomarker.refLow}
                refHigh={biomarker.refHigh}
                optimalLow={biomarker.optimalLow}
                optimalHigh={biomarker.optimalHigh}
                color={color}
              />
            </div>

            {/* Interconnection Map */}
            <div data-tour="connections">
              <InterconnectionMap biomarker={biomarker} onNavigate={onNavigateBiomarker} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Biomarker Descriptions ─── */
const BIOMARKER_DESCRIPTIONS: Record<string, string> = {
  "Fasting Glucose": "Blood sugar level after fasting. Key indicator of metabolic health and diabetes risk.",
  "HbA1c": "Average blood sugar over 2-3 months. Gold standard for long-term glucose control.",
  "Fasting Insulin": "Insulin levels during fasting. Lower values indicate better insulin sensitivity.",
  "HOMA-IR": "Insulin resistance index. Lower is better for metabolic health.",
  "Uric Acid": "Byproduct of purine metabolism. Elevated levels linked to gout and cardiovascular risk.",
  "Total Cholesterol": "Total blood cholesterol. Includes HDL, LDL, and VLDL components.",
  "LDL Cholesterol": "'Bad' cholesterol. Lower levels reduce cardiovascular disease risk.",
  "HDL Cholesterol": "'Good' cholesterol. Higher levels are protective against heart disease.",
  "Triglycerides": "Blood fat levels. Elevated triglycerides increase cardiovascular risk.",
  "ApoB": "Apolipoprotein B. Best single predictor of cardiovascular risk.",
  "Lp(a)": "Lipoprotein(a). Genetically determined cardiovascular risk factor.",
  "hs-CRP": "High-sensitivity C-reactive protein. Marker of systemic inflammation and cardiac risk.",
  "IL-6": "Interleukin-6. Pro-inflammatory cytokine linked to chronic disease and aging.",
  "TNF-alpha": "Tumor necrosis factor alpha. Key inflammatory mediator in immune response.",
  "Homocysteine": "Amino acid linked to cardiovascular risk. Elevated by B-vitamin deficiency.",
  "Ferritin": "Iron storage protein. Also an acute phase reactant indicating inflammation.",
  "Free Testosterone": "Bioavailable testosterone. Critical for energy, muscle mass, and cognitive function.",
  "DHEA-S": "Dehydroepiandrosterone sulfate. Longevity-associated adrenal hormone.",
  "Cortisol (AM)": "Morning cortisol. Stress hormone that follows a circadian rhythm.",
  "TSH": "Thyroid stimulating hormone. Primary marker for thyroid function.",
  "Free T3": "Active thyroid hormone. Drives metabolism, energy, and body temperature.",
  "IGF-1": "Insulin-like growth factor 1. Mediates growth hormone effects on tissue repair.",
  "ALT": "Alanine aminotransferase. Primary liver enzyme for detecting hepatocellular damage.",
  "AST": "Aspartate aminotransferase. Liver and muscle enzyme marker.",
  "GGT": "Gamma-glutamyl transferase. Sensitive marker for liver stress and alcohol use.",
  "eGFR": "Estimated glomerular filtration rate. Gold standard for kidney function assessment.",
  "Creatinine": "Muscle metabolism byproduct filtered by kidneys. Key kidney function marker.",
  "Vitamin D (25-OH)": "Critical for immune function, bone health, and longevity. Most people are deficient.",
  "Omega-3 Index": "EPA+DHA as percentage of red blood cell membranes. >8% is cardioprotective.",
  "NAD+ Levels": "Nicotinamide adenine dinucleotide. Critical coenzyme that declines with age.",
  "Telomere Length": "Chromosome end-cap length. Biological aging marker — longer is younger.",
  "GlycanAge": "Glycan-based biological age. Reflects immune system aging and inflammation.",
};

const OPTIMAL_RANGES: Record<string, { low: number; high: number }> = {
  "Fasting Glucose": { low: 72, high: 90 }, "HbA1c": { low: 4.0, high: 5.3 }, "Fasting Insulin": { low: 2.0, high: 6.0 },
  "HOMA-IR": { low: 0, high: 1.5 }, "Uric Acid": { low: 3.5, high: 5.5 }, "Total Cholesterol": { low: 150, high: 190 },
  "LDL Cholesterol": { low: 0, high: 100 }, "HDL Cholesterol": { low: 55, high: 80 }, "Triglycerides": { low: 0, high: 100 },
  "ApoB": { low: 40, high: 90 }, "Lp(a)": { low: 0, high: 30 }, "hs-CRP": { low: 0, high: 1.0 },
  "IL-6": { low: 0, high: 1.8 }, "TNF-alpha": { low: 0, high: 1.0 }, "Homocysteine": { low: 5.0, high: 10.0 },
  "Ferritin": { low: 40, high: 150 }, "Free Testosterone": { low: 12.0, high: 20.0 }, "DHEA-S": { low: 250, high: 450 },
  "Cortisol (AM)": { low: 10.0, high: 16.0 }, "TSH": { low: 1.0, high: 2.5 }, "Free T3": { low: 2.8, high: 3.8 },
  "IGF-1": { low: 150, high: 220 }, "ALT": { low: 7, high: 30 }, "AST": { low: 10, high: 30 },
  "GGT": { low: 0, high: 25 }, "eGFR": { low: 90, high: 120 }, "Creatinine": { low: 0.7, high: 1.1 },
  "Vitamin D (25-OH)": { low: 50, high: 80 }, "Omega-3 Index": { low: 8.0, high: 12.0 }, "NAD+ Levels": { low: 25, high: 45 },
  "Telomere Length": { low: 6.5, high: 9.0 }, "GlycanAge": { low: 25, high: 40 },
};

const DB_CATEGORY_MAP: Record<string, { key: string; label: string; icon: React.ElementType; color: string }> = {
  metabolic: { key: "metabolic", label: "Metabolic", icon: Flame, color: "#F59E0B" },
  cardiovascular: { key: "cardiovascular", label: "Cardiovascular", icon: Heart, color: "#EF4444" },
  inflammatory: { key: "inflammatory", label: "Inflammatory", icon: Shield, color: "#8B5CF6" },
  hormonal: { key: "hormonal", label: "Hormonal", icon: Zap, color: "#06B6D4" },
  nutritional: { key: "liver_kidney", label: "Liver & Kidney", icon: Droplets, color: "#10B981" },
  immune: { key: "longevity", label: "Longevity", icon: Activity, color: "#EC4899" },
  genetic: { key: "genetic", label: "Genetic", icon: Activity, color: "#A855F7" },
};

interface DbBiomarker {
  name: string;
  category: string;
  currentValue: number;
  unit: string;
  refMin: number | null;
  refMax: number | null;
  status: string;
  trend: 'up' | 'down' | 'stable';
  history: { date: string | Date; value: number }[];
  notes: string | null;
}

function transformDbToCategories(dbBiomarkers: DbBiomarker[]): BiomarkerCategory[] {
  const categoryMap = new Map<string, Biomarker[]>();
  for (const bm of dbBiomarkers) {
    const catInfo = DB_CATEGORY_MAP[bm.category];
    if (!catInfo) continue;
    const optimal = OPTIMAL_RANGES[bm.name] || { low: bm.refMin || 0, high: bm.refMax || 100 };
    const biomarker: Biomarker = {
      name: bm.name, value: bm.currentValue, unit: bm.unit,
      refLow: bm.refMin || 0, refHigh: bm.refMax || 100,
      optimalLow: optimal.low, optimalHigh: optimal.high, trend: bm.trend,
      history: bm.history.map(h => {
        const d = typeof h.date === 'string' ? new Date(h.date) : h.date;
        return { date: d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }), value: h.value };
      }),
      description: BIOMARKER_DESCRIPTIONS[bm.name] || bm.notes || "Health biomarker tracked over time.",
    };
    const existing = categoryMap.get(catInfo.key) || [];
    existing.push(biomarker);
    categoryMap.set(catInfo.key, existing);
  }
  const result: BiomarkerCategory[] = [];
  for (const [, catInfo] of Object.entries(DB_CATEGORY_MAP)) {
    const biomarkers = categoryMap.get(catInfo.key);
    if (biomarkers && biomarkers.length > 0) {
      result.push({ key: catInfo.key, label: catInfo.label, icon: catInfo.icon, color: catInfo.color, biomarkers });
    }
  }
  return result;
}

/* ─── Goal Setting Dialog ─── */
function GoalDialog({ biomarker, currentGoal, currentTargetDate, onSave, onClose }: {
  biomarker: Biomarker;
  currentGoal?: number;
  currentTargetDate?: string;
  onSave: (name: string, target: number, targetDate?: string) => void;
  onClose: () => void;
}) {
  const [target, setTarget] = useState(currentGoal?.toString() || biomarker.optimalLow.toString());
  const [targetDate, setTargetDate] = useState(currentTargetDate || '');
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-sm mx-4 rounded-2xl p-6" onClick={(e) => e.stopPropagation()}
        style={{ background: 'var(--fl-bg-card)', backgroundImage: 'var(--fl-card-gradient)', border: '1px solid var(--fl-border)' }}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-bold text-gray-900">Set Target Goal</h3>
          <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/[0.06] transition-colors">
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">{biomarker.name} ({biomarker.unit})</p>
        <div className="mb-4">
          <label className="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-2 block">Target Value</label>
          <input
            type="number"
            step="any"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-gray-200 text-gray-900 text-lg font-bold focus:outline-none focus:border-amber-600/40 focus:ring-1 focus:ring-amber-600/10 transition-all"
            style={{ fontFamily: "'Space Mono', monospace" }}
          />
        </div>
        <div className="mb-4">
          <label className="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-2 block">Target Date (optional)</label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-amber-600/40 focus:ring-1 focus:ring-amber-600/10 transition-all [color-scheme:dark]"
          />
        </div>
        <div className="flex items-center gap-2 mb-5 text-[11px] text-gray-600">
          <span>Optimal range:</span>
          <span className="text-emerald-400 font-semibold" style={{ fontFamily: "'Space Mono', monospace" }}>
            {biomarker.optimalLow} – {biomarker.optimalHigh} {biomarker.unit}
          </span>
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 border border-gray-200 hover:bg-white/[0.04] transition-all">
            Cancel
          </button>
          <button
            onClick={() => { const val = parseFloat(target); if (!isNaN(val)) { onSave(biomarker.name, val, targetDate || undefined); onClose(); } }}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-amber-600 text-gray-900 hover:bg-amber-700 transition-all shadow-[0_0_20px_rgba(184,134,11,0.15)]"
          >
            Save Goal
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── AI Insights Panel ─── */
function AIInsightsPanel({ insights, isLoading, onGenerate }: {
  insights?: { summary: string; recommendations: string[]; riskFactors: string[]; generatedAt: string };
  isLoading: boolean;
  onGenerate: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--fl-bg-card)', backgroundImage: 'var(--fl-card-gradient)', border: '1px solid var(--fl-border)' }}>
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(139,92,246,0.4), rgba(34,211,238,0.3), transparent 95%)' }} />
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(34,211,238,0.1))', border: '1px solid rgba(139,92,246,0.15)' }}>
              <Sparkles className="w-4.5 h-4.5 text-amber-700" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 tracking-tight">AI Health Insights</h3>
              <p className="text-[10px] text-gray-600">Personalized analysis powered by AI</p>
            </div>
          </div>
          <button
            onClick={onGenerate}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all disabled:opacity-50"
            style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#A78BFA' }}
          >
            {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            {isLoading ? 'Analyzing...' : insights ? 'Refresh' : 'Generate Insights'}
          </button>
        </div>

        {insights ? (
          <div className="space-y-4">
            {/* Summary */}
            <div className="p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <p className="text-[13px] text-gray-200 leading-relaxed">{insights.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Recommendations */}
              {insights.recommendations.length > 0 && (
                <div className="p-4 rounded-xl" style={{ background: 'rgba(16,185,129,0.03)', border: '1px solid rgba(16,185,129,0.08)' }}>
                  <p className="text-[9px] text-emerald-400 uppercase tracking-widest font-bold mb-3">Recommendations</p>
                  <ul className="space-y-2">
                    {insights.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-[12px] text-gray-300 leading-relaxed">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Risk Factors */}
              {insights.riskFactors.length > 0 && (
                <div className="p-4 rounded-xl" style={{ background: 'rgba(245,158,11,0.03)', border: '1px solid rgba(245,158,11,0.08)' }}>
                  <p className="text-[9px] text-yellow-400 uppercase tracking-widest font-bold mb-3">Areas of Attention</p>
                  <ul className="space-y-2">
                    {insights.riskFactors.map((risk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-[12px] text-gray-300 leading-relaxed">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <p className="text-[10px] text-gray-600 text-right">Generated {new Date(insights.generatedAt).toLocaleDateString()}</p>
          </div>
        ) : !isLoading ? (
          <div className="text-center py-6">
            <p className="text-sm text-gray-600">Click "Generate Insights" to get personalized AI analysis of your biomarker data.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ─── Main Biomarkers Component ─── */
export function Biomarkers({ dbBiomarkers, goals, insights, insightsLoading, onSetGoal, onGenerateInsights, onAskZori, expandBiomarkerName }: {
  dbBiomarkers?: DbBiomarker[];
  goals?: { biomarkerName: string; targetValue: number; targetDate?: string }[];
  insights?: { summary: string; recommendations: string[]; riskFactors: string[]; generatedAt: string };
  insightsLoading?: boolean;
  onSetGoal?: (name: string, target: number, targetDate?: string) => void;
  onGenerateInsights?: () => void;
  onAskZori?: (biomarker: { name: string; value: number; unit: string; trend: string; history: { date: string; value: number }[]; refLow: number; refHigh: number; optimalLow: number; optimalHigh: number }) => Promise<string>;
  expandBiomarkerName?: string | null;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedBiomarker, setExpandedBiomarker] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Auto-expand biomarker for tour
  useEffect(() => {
    if (expandBiomarkerName) {
      setExpandedBiomarker(expandBiomarkerName);
    }
  }, [expandBiomarkerName]);
  const [sortBy, setSortBy] = useState<"name" | "status">("name");
  const [goalDialog, setGoalDialog] = useState<Biomarker | null>(null);

  const categories = useMemo(() => {
    if (dbBiomarkers && dbBiomarkers.length > 0) return transformDbToCategories(dbBiomarkers);
    return BIOMARKER_CATEGORIES;
  }, [dbBiomarkers]);

  const totalBiomarkers = categories.reduce((sum, c) => sum + c.biomarkers.length, 0);
  const optimalCount = categories.reduce(
    (sum, c) => sum + c.biomarkers.filter((b) => b.value >= b.optimalLow && b.value <= b.optimalHigh).length, 0
  );
  const inRangeCount = categories.reduce(
    (sum, c) => sum + c.biomarkers.filter((b) => {
      const isOpt = b.value >= b.optimalLow && b.value <= b.optimalHigh;
      const isInR = b.value >= b.refLow && b.value <= b.refHigh;
      return !isOpt && isInR;
    }).length, 0
  );
  const outOfRangeCount = totalBiomarkers - optimalCount - inRangeCount;
  const optimalPct = Math.round((optimalCount / totalBiomarkers) * 100);

  const filteredCategories = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      biomarkers: cat.biomarkers.filter((b) => {
        const matchesSearch = !searchQuery || b.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || cat.key === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    })).filter((cat) => cat.biomarkers.length > 0);
  }, [searchQuery, selectedCategory, categories]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* ── Hero Header ── */}
      <div className="relative rounded-2xl overflow-hidden" style={{ background: `linear-gradient(135deg, var(--fl-bg-deep), var(--fl-bg-card), var(--fl-bg-deep))`, border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-elevated)' }}>
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(34,211,238,0.05), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(16,185,129,0.04), transparent 60%)' }} />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, var(--fl-accent), var(--fl-gold), transparent)' }} />
        <div className="relative px-4 md:px-6 py-4 md:py-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left: Title + subtitle */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: 'var(--fl-text-gold)' }}>Precision Health</p>
              <h2 className="text-lg md:text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', color: 'var(--fl-text-primary)' }}>Biomarker Analysis</h2>
              <p className="text-xs mt-1" style={{ color: 'var(--fl-text-muted)' }}>{totalBiomarkers} biomarkers across {categories.length} categories · Last updated Jan 2026</p>
            </div>

            {/* Center: Health Momentum */}
            <div className="hidden md:block" data-tour="momentum">
              <HealthMomentum categories={categories} />
            </div>

            {/* Right: Score gauge + stats */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-5">
                {/* Optimal gauge */}
                <div className="flex flex-col items-center">
                  <ScoreGauge value={optimalPct} max={100} color="#10B981" size={56} label="optimal" />
                  <span className="text-[8px] text-emerald-400/50 uppercase tracking-widest font-bold mt-1">Optimal</span>
                </div>

                {/* Stat pills */}
                <div className="flex flex-row md:flex-col gap-2">
                  <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.1)' }}>
                    <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-400" />
                    <span className="text-[11px] md:text-xs font-bold text-emerald-400 tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>{optimalCount}</span>
                    <span className="text-[9px] md:text-[10px] text-emerald-400/80 hidden sm:inline">optimal</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg" style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.08)' }}>
                    <AlertTriangle className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400" />
                    <span className="text-[11px] md:text-xs font-bold text-yellow-400 tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>{inRangeCount}</span>
                    <span className="text-[9px] md:text-[10px] text-yellow-400/80 hidden sm:inline">in range</span>
                  </div>
                  {outOfRangeCount > 0 && (
                    <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.08)' }}>
                      <XCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-red-400" />
                      <span className="text-[11px] md:text-xs font-bold text-red-400 tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>{outOfRangeCount}</span>
                      <span className="text-[9px] md:text-[10px] text-red-400/80 hidden sm:inline">attention</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search & Filters ── */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search biomarkers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm placeholder-[var(--fl-text-muted)] focus:outline-none focus:border-[var(--fl-accent)]/30 focus:ring-1 focus:ring-[var(--fl-accent)]/10 transition-all"
            style={{ background: 'var(--fl-bg-deep)', border: '1px solid var(--fl-border)', color: 'var(--fl-text-primary)', boxShadow: 'var(--fl-shadow-crisp)' }}
          />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0 flex-wrap md:flex-nowrap">
          <Button
            variant="outline"
            size="sm"
            className={`h-8 text-xs rounded-lg px-3 ${selectedCategory === "all" ? "bg-white/[0.08] text-gray-900 border-white/[0.12]" : "border-white/[0.05] text-gray-600 hover:text-gray-300 hover:border-gray-200"}`}
            onClick={() => setSelectedCategory("all")}
          >
            All ({totalBiomarkers})
          </Button>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            const Icon = cat.icon;
            return (
              <Button
                key={cat.key}
                variant="outline"
                size="sm"
                className={`h-8 text-xs rounded-lg gap-1.5 px-3 transition-all ${isActive ? "" : "border-white/[0.05] text-gray-600 hover:text-gray-300 hover:border-gray-200"}`}
                style={isActive ? { background: `${cat.color}12`, color: cat.color, borderColor: `${cat.color}25` } : undefined}
                onClick={() => setSelectedCategory(cat.key)}
              >
                <Icon className="w-3 h-3" />
                {cat.label}
              </Button>
            );
          })}
          <div className="w-px h-5 bg-white/[0.06] mx-1" />
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs rounded-lg border-white/[0.05] text-gray-600 gap-1.5 hover:text-gray-300 hover:border-gray-200"
            onClick={() => setSortBy(sortBy === "name" ? "status" : "name")}
          >
            <ArrowUpDown className="w-3 h-3" />
            {sortBy === "name" ? "A-Z" : "Status"}
          </Button>
        </div>
      </div>

      {/* ── Category Panels ── */}
      {filteredCategories.map((cat) => {
        const Icon = cat.icon;
        const catOptimal = cat.biomarkers.filter((b) => b.value >= b.optimalLow && b.value <= b.optimalHigh).length;
        const catPct = Math.round((catOptimal / cat.biomarkers.length) * 100);

        return (
          <div key={cat.key} className="rounded-2xl overflow-hidden transition-all duration-300 fl-card-hover" style={{ background: 'var(--fl-bg-deep)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-card)' }}>
            {/* Top accent line */}
            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent 5%, ${cat.color}50, transparent 95%)` }} />

            {/* Category Header */}
            <div className="px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{
                  background: `linear-gradient(135deg, ${cat.color}15, ${cat.color}05)`,
                  border: `1px solid ${cat.color}15`,
                }}>
                  <Icon className="w-4.5 h-4.5" style={{ color: cat.color }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight" style={{ color: 'var(--fl-text-primary)' }}>{cat.label}</h3>
                  <p className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>{cat.biomarkers.length} markers</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Score */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">
                    <span className="font-bold" style={{ color: cat.color, fontFamily: "'Space Mono', monospace" }}>{catOptimal}</span>
                    <span className="text-gray-600">/{cat.biomarkers.length}</span>
                  </span>
                </div>
                {/* Progress */}
                <div className="w-20 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
                  <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{
                    width: `${catPct}%`,
                    background: `linear-gradient(90deg, ${cat.color}40, ${cat.color})`,
                    boxShadow: `0 0 8px ${cat.color}30`,
                  }} />
                </div>
                <span className="text-xs font-bold tabular-nums min-w-[28px] text-right" style={{ color: cat.color, fontFamily: "'Space Mono', monospace" }}>{catPct}%</span>
              </div>
            </div>

            {/* Column headers */}
            <div className="px-5 pb-1 flex items-center gap-4 text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--fl-text-muted)' }}>
              <div className="w-5" />
              <div className="flex-1">Biomarker</div>
              <div className="flex-[3] hidden lg:block text-center">Range</div>
              <div className="min-w-[80px] text-right">Value</div>
              <div className="w-4" />
            </div>

            {/* Divider */}
            <div className="mx-5 h-px" style={{ background: 'var(--fl-border)' }} />

            {/* Biomarker Rows */}
            <div className="px-3 pb-3 pt-1 space-y-0.5">
              {cat.biomarkers
                .sort((a, b) => {
                  if (sortBy === "status") {
                    const aOpt = a.value >= a.optimalLow && a.value <= a.optimalHigh ? 0 : a.value >= a.refLow && a.value <= a.refHigh ? 1 : 2;
                    const bOpt = b.value >= b.optimalLow && b.value <= b.optimalHigh ? 0 : b.value >= b.refLow && b.value <= b.refHigh ? 1 : 2;
                    return bOpt - aOpt; // Show attention items first
                  }
                  return a.name.localeCompare(b.name);
                })
                .map((biomarker, idx) => (
                  <BiomarkerRow
                    key={biomarker.name}
                    biomarker={biomarker}
                    color={cat.color}
                    expanded={expandedBiomarker === biomarker.name}
                    onToggle={() => setExpandedBiomarker(expandedBiomarker === biomarker.name ? null : biomarker.name)}
                    index={idx}
                    goal={goals?.find(g => g.biomarkerName === biomarker.name)?.targetValue}
                    goalTargetDate={goals?.find(g => g.biomarkerName === biomarker.name)?.targetDate}
                    onSetGoal={onSetGoal ? (b) => setGoalDialog(b) : undefined}
                    onAskZori={onAskZori}
                    onNavigateBiomarker={(name) => {
                      setExpandedBiomarker(name);
                      // Also switch to the right category
                      const targetCat = categories.find(c => c.biomarkers.some(b => b.name === name));
                      if (targetCat) setSelectedCategory(targetCat.key);
                    }}
                  />
                ))}
            </div>
          </div>
        );
      })}

      {/* AI Insights Panel */}
      {onGenerateInsights && (
        <AIInsightsPanel
          insights={insights}
          isLoading={insightsLoading || false}
          onGenerate={onGenerateInsights}
        />
      )}

      {/* Goal Setting Dialog */}
      {goalDialog && onSetGoal && (
        <GoalDialog
          biomarker={goalDialog}
          currentGoal={goals?.find(g => g.biomarkerName === goalDialog.name)?.targetValue}
          currentTargetDate={goals?.find(g => g.biomarkerName === goalDialog.name)?.targetDate}
          onSave={onSetGoal!}
          onClose={() => setGoalDialog(null)}
        />
      )}
    </div>
  );
}
