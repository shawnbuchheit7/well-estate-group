import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Heart,
  Wind,
  Dumbbell,
  Pill,
  Droplets,

  Activity,
  TrendingUp,
  TrendingDown,
  Minus,
  Info,
  AlertCircle,
  Plus,
  Search,
  RotateCcw,
  RefreshCw,
  Move,
  GitCompare,
  Clock,
  X,
  ShieldCheck,
  Scan,
  Download,
  Zap,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  BarChart3,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { exportHealthTwinPdf } from "./exportPdf";

/* ─── Types ─── */
interface OrganAssessment {
  id: number;
  organName: string;
  organCategory: string;
  healthScore: string;
  status: "excellent" | "good" | "fair" | "attention_needed" | "critical";
  assessmentDate: Date;
  findings?: string | null;
  recommendations?: string | null;
  imageUrl?: string | null;
}

interface DigitalHealthTwinProps {
  organAssessments: OrganAssessment[];
  /** Optional: force a specific organ to be selected (for testing) */
  initialOrgan?: string;
  /** Optional: callback to switch dashboard tabs (e.g., to Health Timeline) */
  onTabChange?: (tab: string) => void;
  /** Gender for body visualization - defaults to male */
  gender?: "male" | "female";
}

/* ─── AI-Generated Organ Body Images (CDN URLs) ─── */
const MALE_ORGAN_IMAGES: Record<string, string> = {
  default: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/XxnmpVUGSXOgBGFy.png",
  Brain: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/hLsmiEuFVwRuFZJP.png",
  Heart: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/dGxiOcyqWcgZkAgb.png",
  Lungs: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/KaKJRkPDVXPGSQho.png",
  Muscle: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/YjjXAdnqJBgNookF.png",
  Liver: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/ULzBHdoUOvQCKHPu.png",
  Kidneys: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/YfcEXUHITSGgTHHl.png",
};

const FEMALE_ORGAN_IMAGES: Record<string, string> = {
  default: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/hJdRuYddDEkAIrpQ.png",
  Brain: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/PQStaftFKZzXvtCu.png",
  Heart: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/rBuYpVYOxoOEQCTc.png",
  Lungs: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/ELVqRTyFRuEtwNHe.png",
  Muscle: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/GhQPRedToIXlPSGQ.png",
  Liver: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/jIXojvsXcrgsnPUO.png",
  Kidneys: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/dJnSOHWrFsrogNJM.png",
};

/* ─── Organ Config ─── */
interface OrganConfig {
  key: string;
  label: string;
  ageLabel: string;
  icon: typeof Heart;
  color: string;
  glowColor: string;
  bgColor: string;
  borderColor: string;
  /** Center point for connection line origin (% of body image) */
  connectX: number;
  connectY: number;
  /** Per-organ mask center offset (% position for radial gradient) */
  maskCenterX: number;
  maskCenterY: number;
  /** Image brightness (0-1, lower = dimmer) */
  brightness: number;
  /** Medical readout type */
  readoutType: "ecg" | "brainwave" | "breathing" | "emg" | "metabolic" | "filtration";
  /** Readout position relative to body image (%) */
  readoutX: number;
  readoutY: number;
  trend: number[];
  defaultAge: number;
  keyFactors: { label: string; value: string }[];
  recommendations: { title: string; description: string; benefit: string }[];
}

/* ─── Base Organ Configs (shared across genders) ─── */
const BASE_ORGAN_CONFIGS: OrganConfig[] = [
  {
    key: "Brain", label: "Brain", ageLabel: "BRAIN AGE", icon: Brain,
    color: "#818CF8", glowColor: "rgba(129, 140, 248, 0.35)",
    bgColor: "rgba(129, 140, 248, 0.08)", borderColor: "rgba(129, 140, 248, 0.5)",
    connectX: 50, connectY: 7,
    maskCenterX: 50, maskCenterY: 30,
    brightness: 0.95,
    readoutType: "brainwave", readoutX: 72, readoutY: 10,
    trend: [42, 41, 40, 40, 39, 40, 40], defaultAge: 40,
    keyFactors: [
      { label: "Cognitive Score", value: "92/100" },
      { label: "Brain Volume", value: "Normal" },
    ],
    recommendations: [
      { title: "Optimize Sleep Quality", description: "Aim for 7-9 hours of quality sleep. Poor sleep accelerates brain aging and cognitive decline.", benefit: "Can reduce brain age by 1-3 years" },
      { title: "Cognitive Training", description: "Regular mental exercises and learning new skills strengthen neural pathways and build cognitive reserve.", benefit: "Supports neuroplasticity" },
    ],
  },
  {
    key: "Heart", label: "Heart", ageLabel: "HEART AGE", icon: Heart,
    color: "#EF4444", glowColor: "rgba(239, 68, 68, 0.35)",
    bgColor: "rgba(239, 68, 68, 0.08)", borderColor: "rgba(239, 68, 68, 0.5)",
    connectX: 48, connectY: 30,
    maskCenterX: 50, maskCenterY: 38,
    brightness: 0.95,
    readoutType: "ecg", readoutX: 72, readoutY: 25,
    trend: [43, 42, 41, 41, 40, 40, 40], defaultAge: 40,
    keyFactors: [
      { label: "Resting HR", value: "68 bpm" },
      { label: "HRV", value: "42 ms" },
    ],
    recommendations: [
      { title: "Improve Cardiovascular Fitness", description: "Regular aerobic exercise (150+ min/week) can lower resting heart rate and improve cardiac output.", benefit: "Can reduce heart age by 2-4 years" },
      { title: "Consider CoQ10 Supplementation", description: "CoQ10 supports mitochondrial function in heart cells and may improve heart energy metabolism.", benefit: "Supports heart energy production" },
      { title: "Monitor Blood Pressure", description: "Regular blood pressure monitoring helps catch hypertension early. Target: <120/80 mmHg.", benefit: "Early detection prevents damage" },
    ],
  },
  {
    key: "Lungs", label: "Lungs", ageLabel: "LUNG AGE", icon: Wind,
    color: "#3B82F6", glowColor: "rgba(59, 130, 246, 0.35)",
    bgColor: "rgba(59, 130, 246, 0.08)", borderColor: "rgba(59, 130, 246, 0.5)",
    connectX: 58, connectY: 26,
    maskCenterX: 50, maskCenterY: 35,
    brightness: 0.95,
    readoutType: "breathing", readoutX: 72, readoutY: 20,
    trend: [42, 41, 41, 40, 40, 40, 40], defaultAge: 40,
    keyFactors: [
      { label: "FEV1", value: "Normal" },
      { label: "Lung Capacity", value: "98%" },
    ],
    recommendations: [
      { title: "Breathing Exercises", description: "Practice diaphragmatic breathing and box breathing techniques daily to strengthen respiratory muscles.", benefit: "Improves lung capacity by 10-15%" },
    ],
  },
  {
    key: "Muscle", label: "Muscle", ageLabel: "MUSCLE AGE", icon: Dumbbell,
    color: "#F59E0B", glowColor: "rgba(245, 158, 11, 0.25)",
    bgColor: "rgba(245, 158, 11, 0.08)", borderColor: "rgba(245, 158, 11, 0.5)",
    connectX: 50, connectY: 30,
    maskCenterX: 50, maskCenterY: 48,
    brightness: 0.85,
    readoutType: "emg", readoutX: 72, readoutY: 25,
    trend: [41, 41, 40, 40, 39, 40, 40], defaultAge: 40,
    keyFactors: [
      { label: "Lean Mass", value: "72 kg" },
      { label: "Grip Strength", value: "Above Avg" },
    ],
    recommendations: [
      { title: "Resistance Training", description: "Strength train 3-4x per week targeting all major muscle groups with progressive overload.", benefit: "Can reduce muscle age by 3-5 years" },
    ],
  },
  {
    key: "Liver", label: "Liver", ageLabel: "LIVER AGE", icon: Pill,
    color: "#10B981", glowColor: "rgba(16, 185, 129, 0.25)",
    bgColor: "rgba(16, 185, 129, 0.08)", borderColor: "rgba(16, 185, 129, 0.5)",
    connectX: 44, connectY: 36,
    maskCenterX: 48, maskCenterY: 42,
    brightness: 0.9,
    readoutType: "metabolic", readoutX: 25, readoutY: 35,
    trend: [38, 39, 39, 40, 40, 41, 40], defaultAge: 40,
    keyFactors: [
      { label: "ALT", value: "22 U/L" },
      { label: "AST", value: "19 U/L" },
    ],
    recommendations: [
      { title: "Reduce Alcohol Intake", description: "Limiting alcohol to <7 drinks/week supports liver regeneration and reduces fatty liver risk.", benefit: "Protects liver function long-term" },
    ],
  },
  {
    key: "Kidneys", label: "Kidneys", ageLabel: "KIDNEY AGE", icon: Droplets,
    color: "#EC4899", glowColor: "rgba(236, 72, 153, 0.3)",
    bgColor: "rgba(236, 72, 153, 0.08)", borderColor: "rgba(236, 72, 153, 0.5)",
    connectX: 50, connectY: 40,
    maskCenterX: 50, maskCenterY: 44,
    brightness: 0.9,
    readoutType: "filtration", readoutX: 25, readoutY: 40,
    trend: [41, 41, 40, 40, 40, 40, 40], defaultAge: 40,
    keyFactors: [
      { label: "eGFR", value: ">90 mL/min" },
      { label: "Creatinine", value: "0.9 mg/dL" },
    ],
    recommendations: [
      { title: "Stay Hydrated", description: "Drink 2-3L of water daily to support kidney filtration and reduce stone formation risk.", benefit: "Maintains optimal kidney function" },
    ],
  },
];

/* ─── Static Organ Configs (6 organs, shared across genders) ─── */
const ORGAN_CONFIGS = BASE_ORGAN_CONFIGS;

/* ─── Animated Medical Readout SVG Components ─── */
function ECGReadout({ color, width = 150, height = 50 }: { color: string; width?: number; height?: number }) {
  const mid = height / 2;
  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <clipPath id="ecg-clip"><rect x="0" y="0" width={width} height={height} /></clipPath>
      </defs>
      {/* Main ECG trace */}
      <g clipPath="url(#ecg-clip)">
        <polyline
          points={`0,${mid} ${width*0.15},${mid} ${width*0.2},${mid-height*0.15} ${width*0.25},${mid} ${width*0.3},${mid} ${width*0.33},${mid-height*0.7} ${width*0.38},${mid+height*0.3} ${width*0.42},${mid} ${width*0.5},${mid} ${width*0.55},${mid-height*0.1} ${width*0.6},${mid} ${width*0.65},${mid} ${width*0.7},${mid-height*0.15} ${width*0.75},${mid} ${width*0.8},${mid} ${width*0.83},${mid-height*0.7} ${width*0.88},${mid+height*0.3} ${width*0.92},${mid} ${width},${mid}`}
          fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"
        />
        {/* Ghost trace (delayed) */}
        <polyline
          points={`0,${mid+2} ${width*0.15},${mid+2} ${width*0.2},${mid-height*0.12} ${width*0.25},${mid+2} ${width*0.3},${mid+2} ${width*0.33},${mid-height*0.55} ${width*0.38},${mid+height*0.25} ${width*0.42},${mid+2} ${width*0.5},${mid+2} ${width*0.55},${mid-height*0.08} ${width*0.6},${mid+2} ${width*0.65},${mid+2} ${width*0.7},${mid-height*0.12} ${width*0.75},${mid+2} ${width*0.8},${mid+2} ${width*0.83},${mid-height*0.55} ${width*0.88},${mid+height*0.25} ${width*0.92},${mid+2} ${width},${mid+2}`}
          fill="none" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.25"
        />
      </g>
      <text x="2" y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">ECG</text>
      <text x={width - 35} y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">72 bpm</text>
    </svg>
  );
}

function BrainwaveReadout({ color, width = 150, height = 50 }: { color: string; width?: number; height?: number }) {
  const mid = height / 2;
  // Alpha wave pattern
  const points = Array.from({ length: 40 }, (_, i) => {
    const x = (i / 39) * width;
    const y = mid + Math.sin(i * 0.8) * height * 0.25 + Math.sin(i * 2.1) * height * 0.1;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
        <animate attributeName="stroke-dashoffset" values="0;-200" dur="3s" repeatCount="indefinite" />
      </polyline>
      <text x="2" y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">EEG</text>
      <text x={width - 42} y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">α 10 Hz</text>
    </svg>
  );
}

function BreathingReadout({ color, width = 150, height = 50 }: { color: string; width?: number; height?: number }) {
  const mid = height / 2;
  const points = Array.from({ length: 30 }, (_, i) => {
    const x = (i / 29) * width;
    const y = mid + Math.sin(i * 0.42) * height * 0.35;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
        <animate attributeName="stroke-dashoffset" values="0;-150" dur="4s" repeatCount="indefinite" />
      </polyline>
      <text x="2" y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">RESP</text>
      <text x={width - 48} y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">16 br/min</text>
    </svg>
  );
}

function EMGReadout({ color, width = 150, height = 50 }: { color: string; width?: number; height?: number }) {
  const mid = height / 2;
  // Deterministic pseudo-random noise for EMG signal
  const points = useMemo(() => Array.from({ length: 50 }, (_, i) => {
    const x = (i / 49) * width;
    const burst = (i > 15 && i < 25) || (i > 35 && i < 45) ? 1 : 0.2;
    const noise = Math.sin(i * 12.9898 + 78.233) * 43758.5453 % 1; // deterministic hash
    const y = mid + (noise - 0.5) * height * 0.6 * burst;
    return `${x},${y}`;
  }).join(" "), [width, height]);
  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <text x="2" y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">EMG</text>
      <text x={width - 36} y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">Active</text>
    </svg>
  );
}

function MetabolicReadout({ color, width = 150, height = 50 }: { color: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} className="overflow-visible">
      {/* Bar chart style metabolic markers */}
      {[0.2, 0.5, 0.7, 0.4, 0.6, 0.3, 0.8, 0.5, 0.45, 0.65].map((v, i) => (
        <rect key={i} x={4 + i * 14.5} y={height - v * (height - 14)} width={9} height={v * (height - 14)} fill={color} opacity={0.5} rx={1}>
          <animate attributeName="height" values={`${v * (height - 14)};${v * (height - 14) * 0.7};${v * (height - 14)}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}
      <text x="2" y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">ALT/AST</text>
    </svg>
  );
}

function FiltrationReadout({ color, width = 150, height = 50 }: { color: string; width?: number; height?: number }) {
  const mid = height / 2;
  const points = Array.from({ length: 30 }, (_, i) => {
    const x = (i / 29) * width;
    const y = mid + Math.sin(i * 0.5) * height * 0.2 + Math.cos(i * 1.2) * height * 0.15;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <text x="2" y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">GFR</text>
      <text x={width - 48} y="10" fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">&gt;90 mL/m</text>
    </svg>
  );
}


function MedicalReadout({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "ecg": return <ECGReadout color={color} />;
    case "brainwave": return <BrainwaveReadout color={color} />;
    case "breathing": return <BreathingReadout color={color} />;
    case "emg": return <EMGReadout color={color} />;
    case "metabolic": return <MetabolicReadout color={color} />;
    case "filtration": return <FiltrationReadout color={color} />;
    default: return null;
  }
}

/* ─── Mini Sparkline Component ─── */
function Sparkline({ data, color, width = 80, height = 28 }: { data: number[]; color: string; width?: number; height?: number }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={width} height={height} className="flex-shrink-0">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Compare Organs Radar Chart Overlay ─── */
function CompareOrgansOverlay({
  organConfigs,
  getOrganAge,
  onClose,
}: {
  organConfigs: OrganConfig[];
  getOrganAge: (key: string) => number;
  onClose: () => void;
}) {
  const chronoAge = 40;
  const radarData = organConfigs.map((organ) => {
    const age = getOrganAge(organ.key);
    const score = Math.max(0, Math.min(100, 100 - (age - chronoAge + 10) * 5));
    return { organ: organ.label, score, age, color: organ.color, fullMark: 100 };
  });

  const renderCustomTick = ({ x, y, payload, index }: any) => {
    const organ = organConfigs[index];
    const age = getOrganAge(organ.key);
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={-8} textAnchor="middle" fill={organ.color} fontSize={11} fontWeight={600}>{payload.value}</text>
        <text x={0} y={8} textAnchor="middle" fill="#94A3B8" fontSize={10}>Age {age}</text>
      </g>
    );
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-[560px] max-w-[90%] rounded-2xl p-6" style={{ background: 'var(--fl-bg-card)', backgroundImage: 'var(--fl-card-gradient)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-elevated)' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--fl-text-primary)' }}>
              <GitCompare className="w-5 h-5" style={{ color: 'var(--fl-accent)' }} />Compare Organs
            </h3>
            <p className="text-xs mt-1" style={{ color: 'var(--fl-text-muted)' }}>Health scores across all organ systems (higher is better)</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', color: 'var(--fl-text-muted)' }}>
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="rgba(0,0,0,0.06)" strokeDasharray="3 3" />
              <PolarAngleAxis dataKey="organ" tick={renderCustomTick} tickLine={false} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="Health Score" dataKey="score" stroke="#B8860B" fill="#B8860B" fillOpacity={0.15} strokeWidth={2} dot={{ r: 4, fill: "#B8860B", stroke: "#0F172A", strokeWidth: 2 }} />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d = payload[0].payload;
                const organ = organConfigs.find((o) => o.label === d.organ);
                return (
                  <div className="rounded-lg px-3 py-2 shadow-xl" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                    <p className="text-sm font-bold" style={{ color: organ?.color }}>{d.organ}</p>
                    <p className="text-xs" style={{ color: 'var(--fl-text-secondary)' }}>Organ Age: <span className="font-semibold" style={{ color: 'var(--fl-text-primary)' }}>{d.age}</span></p>
                    <p className="text-xs" style={{ color: 'var(--fl-text-secondary)' }}>Health Score: <span className="text-amber-700 font-semibold">{d.score}</span></p>
                  </div>
                );
              }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {organConfigs.map((organ) => {
            const age = getOrganAge(organ.key);
            const diff = age - chronoAge;
            return (
              <div key={organ.key} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px]" style={{ borderColor: `${organ.color}30`, background: `${organ.color}08` }}>
                <div className="w-2 h-2 rounded-full" style={{ background: organ.color }} />
                <span style={{ color: 'var(--fl-text-secondary)' }}>{organ.label}</span>
                <span className="font-semibold" style={{ color: diff <= 0 ? "#10B981" : diff <= 3 ? "#F59E0B" : "#EF4444" }}>
                  {diff <= 0 ? `${Math.abs(diff)}y younger` : `${diff}y older`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Animated Vitals Bar ─── */
function VitalsBar() {
  const [hr, setHr] = useState(72);
  const [sys, setSys] = useState(120);
  const [dia, setDia] = useState(80);
  const [spo2, setSpo2] = useState(98);
  const [temp, setTemp] = useState(98.6);

  useEffect(() => {
    const interval = setInterval(() => {
      setHr(prev => {
        const delta = Math.random() < 0.5 ? -1 : 1;
        return Math.max(68, Math.min(76, prev + delta));
      });
      setSys(prev => {
        const delta = Math.random() < 0.3 ? (Math.random() < 0.5 ? -1 : 1) : 0;
        return Math.max(118, Math.min(124, prev + delta));
      });
      setDia(prev => {
        const delta = Math.random() < 0.3 ? (Math.random() < 0.5 ? -1 : 1) : 0;
        return Math.max(78, Math.min(82, prev + delta));
      });
      setSpo2(prev => {
        const delta = Math.random() < 0.2 ? (Math.random() < 0.7 ? 0 : -1) : (prev < 98 ? 1 : 0);
        return Math.max(97, Math.min(99, prev + delta));
      });
      setTemp(prev => {
        const delta = (Math.random() - 0.5) * 0.2;
        return Math.round(Math.max(98.2, Math.min(99.0, prev + delta)) * 10) / 10;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const vitals = [
    { label: "Heart Rate", value: `${hr}`, unit: "bpm", color: "text-red-400", pulse: true },
    { label: "Blood Pressure", value: `${sys}/${dia}`, unit: "mmHg", color: "text-red-400", pulse: false },
    { label: "SpO2", value: `${spo2}`, unit: "%", color: "text-amber-700", pulse: false },
    { label: "Temperature", value: `${temp.toFixed(1)}`, unit: "°F", color: "text-amber-400", pulse: false },
  ];

  const vitalColorMap: Record<string, string> = {
    'text-red-400': '#f87171',
    'text-amber-700': '#B8860B',
    'text-amber-400': '#fbbf24',
  };

  return (
    <div className="flex items-center justify-center gap-3 px-6 py-2" data-tour="vitals-bar" style={{ background: 'linear-gradient(180deg, transparent, rgba(5,10,18,0.95))', borderTop: '1px solid rgba(184, 134, 11, 0.15)' }}>
      {vitals.map((vital, i) => {
        const accentHex = vitalColorMap[vital.color] || '#B8860B';
        return (
          <div key={i} className="text-center px-5 py-2 rounded-xl relative group transition-all duration-300 overflow-hidden hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184, 134, 11, 0.15)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            {/* Top accent line with glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-14 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${accentHex}, transparent)`, opacity: 0.7 }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[6px] w-14 rounded-full blur-[4px]" style={{ background: `linear-gradient(90deg, transparent, ${accentHex}, transparent)`, opacity: 0.3 }} />
            {vital.pulse && (
              <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            )}
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: accentHex }}>{vital.label}</p>
            <p className="text-base font-bold tabular-nums transition-all duration-500" style={{ fontFamily: "'Space Mono', monospace", color: '#FFFFFF' }}>
              {vital.value} <span className="text-[10px] font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>{vital.unit}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * MAIN COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */
export default function DigitalHealthTwin({ organAssessments, initialOrgan, onTabChange, gender = "male" }: DigitalHealthTwinProps) {
  const ORGAN_IMAGES = gender === "female" ? FEMALE_ORGAN_IMAGES : MALE_ORGAN_IMAGES;
  const [selectedOrganKey, setSelectedOrganKey] = useState<string>(initialOrgan || "overview");
  useEffect(() => { if (initialOrgan) setSelectedOrganKey(initialOrgan); }, [initialOrgan]);
  const [zoom, setZoom] = useState(85);
  const [showCompare, setShowCompare] = useState(false);
  const [hoveredOrgan, setHoveredOrgan] = useState<string | null>(null);
  const [mobilePanel, setMobilePanel] = useState<'none' | 'details'>('none');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  const bodyContainerRef = useRef<HTMLDivElement>(null);
  const bodyImgRef = useRef<HTMLImageElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [bodyRect, setBodyRect] = useState<DOMRect | null>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);
  const [prevOrgan, setPrevOrgan] = useState<string>(initialOrgan || "overview");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload all organ images on mount and when gender changes
  useEffect(() => {
    Object.values(ORGAN_IMAGES).forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [ORGAN_IMAGES]);

  // Handle organ transitions with crossfade
  useEffect(() => {
    if (selectedOrganKey !== prevOrgan) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setPrevOrgan(selectedOrganKey);
        setIsTransitioning(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [selectedOrganKey, prevOrgan]);

  useEffect(() => {
    const updateRects = () => {
      if (bodyImgRef.current) setBodyRect(bodyImgRef.current.getBoundingClientRect());
      if (bodyContainerRef.current) setContainerRect(bodyContainerRef.current.getBoundingClientRect());
    };
    updateRects();
    window.addEventListener("resize", updateRects);
    const interval = setInterval(updateRects, 500);
    return () => { window.removeEventListener("resize", updateRects); clearInterval(interval); };
  }, [zoom]);

  const organMap = useMemo(() => {
    const map = new Map<string, OrganAssessment>();
    organAssessments.forEach((a) => map.set(a.organName, a));
    return map;
  }, [organAssessments]);

  const getOrganAge = useCallback((key: string) => {
    const assessment = organMap.get(key);
    if (assessment) {
      const score = parseFloat(assessment.healthScore);
      return Math.round(40 + (85 - score) * 0.5);
    }
    return ORGAN_CONFIGS.find(c => c.key === key)?.defaultAge || 40;
  }, [organMap]);

  const getOrganStatus = useCallback((key: string) => {
    const age = getOrganAge(key);
    if (age <= 35) return "Younger";
    if (age <= 42) return "On track";
    if (age <= 48) return "Attention";
    return "At risk";
  }, [getOrganAge]);

  const isOverview = selectedOrganKey === "overview";
  const selectedConfig = useMemo(
    () => ORGAN_CONFIGS.find(c => c.key === selectedOrganKey) || ORGAN_CONFIGS[1],
    [selectedOrganKey]
  );

  const selectedAge = isOverview ? 0 : getOrganAge(selectedOrganKey);
  const chronoAge = 42;
  const ageDiff = selectedAge - chronoAge;
  const ageDiffLabel = ageDiff === 0 ? "0y older" : ageDiff > 0 ? `${ageDiff}y older` : `${Math.abs(ageDiff)}y younger`;
  const ageDiffColor = ageDiff <= 0 ? "text-emerald-400" : ageDiff <= 3 ? "text-yellow-400" : "text-red-400";

  // Compute overall Biological Age as weighted average of all organ ages
  const biologicalAge = useMemo(() => {
    const ages = ORGAN_CONFIGS.map(c => getOrganAge(c.key));
    const avg = ages.reduce((sum, a) => sum + a, 0) / ages.length;
    return Math.round(avg);
  }, [getOrganAge]);
  // Animated counter for Bio Age hero
  const [animatedBioAge, setAnimatedBioAge] = useState(0);
  useEffect(() => {
    if (!isOverview) { setAnimatedBioAge(biologicalAge); return; }
    setAnimatedBioAge(0);
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedBioAge(Math.round(eased * biologicalAge));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isOverview, biologicalAge]);

  const bioAgeDiff = biologicalAge - chronoAge;
  const bioAgeDiffLabel = bioAgeDiff === 0 ? "Same as chronological" : bioAgeDiff > 0 ? `${bioAgeDiff}y older` : `${Math.abs(bioAgeDiff)}y younger`;
  const bioAgeDiffColor = bioAgeDiff <= 0 ? "text-emerald-400" : bioAgeDiff <= 3 ? "text-yellow-400" : "text-red-400";

  // Pixel offsets for the body image within its container
  const imgOffset = useMemo(() => {
    if (!bodyRect || !containerRect) return null;
    return {
      x: bodyRect.left - containerRect.left,
      y: bodyRect.top - containerRect.top,
      w: bodyRect.width,
      h: bodyRect.height,
    };
  }, [bodyRect, containerRect]);

  // Connection line from organ center to the right panel card
  const getConnectionLine = (organ: OrganConfig, cardIndex: number) => {
    if (!imgOffset || !containerRect) return null;
    const startX = imgOffset.x + (organ.connectX / 100) * imgOffset.w;
    const startY = imgOffset.y + (organ.connectY / 100) * imgOffset.h;
    const endX = containerRect.width;
    const cardHeight = 80;
    const cardGap = 8;
    const panelPaddingTop = 12;
    const endY = panelPaddingTop + cardIndex * (cardHeight + cardGap) + cardHeight / 2;
    return { startX, startY, endX, endY };
  };

  // Get the glow drop-shadow filter for the selected organ
  const getOrganGlowFilter = (organKey: string) => {
    const config = ORGAN_CONFIGS.find(c => c.key === organKey);
    if (!config) return "brightness(1.1) contrast(1.05) drop-shadow(0 0 20px rgba(184, 134, 11, 0.12))";
    return `brightness(1.15) contrast(1.05) saturate(1.1) drop-shadow(0 0 20px ${config.glowColor}) drop-shadow(0 0 50px ${config.glowColor.replace(/[\d.]+\)$/, '0.12)')})`;  
  };

  return (
    <div className="w-full h-full overflow-hidden flex flex-col relative fl-theme-transition" style={{ background: '#FFFFFF', boxShadow: '0 0 0 1px rgba(184, 134, 11, 0.1), 0 4px 24px rgba(0,0,0,0.06)', borderRadius: '16px' }}>
      {/* Compare Organs Overlay */}
      {showCompare && (
        <CompareOrgansOverlay organConfigs={ORGAN_CONFIGS} getOrganAge={getOrganAge} onClose={() => setShowCompare(false)} />
      )}

      {/* Top Bar - Organ Quick Select (Desktop) */}
      <div className="hidden md:flex items-center justify-between px-5 py-2" style={{ borderBottom: '1px solid rgba(184, 134, 11, 0.1)' }}>
        <div className="flex items-center gap-0.5">
          {/* Overview tab */}
          <button
            onClick={() => setSelectedOrganKey("overview")}
            className="px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all duration-200 flex items-center gap-1.5"
            style={isOverview ? {
              background: 'rgba(184, 134, 11, 0.08)',
              color: '#B8860B',
              boxShadow: '0 0 20px rgba(184, 134, 11, 0.06)',
              border: '1px solid rgba(184, 134, 11, 0.2)',
            } : { border: '1px solid transparent', color: '#6B7280' }}
          >
            <Activity className="w-3 h-3" />
            Overview
          </button>
          <div className="w-px h-4 mx-1" style={{ background: 'rgba(184, 134, 11, 0.15)' }} />
          {ORGAN_CONFIGS.map((organ) => {
            const isSelected = selectedOrganKey === organ.key;
            return (
              <button
                key={organ.key}
                onClick={() => setSelectedOrganKey(organ.key)}
                className="px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all duration-200 flex items-center gap-1.5"
                style={isSelected ? {
                  background: `${organ.color}12`,
                  color: organ.color,
                  boxShadow: `0 0 20px ${organ.color}08`,
                  border: `1px solid ${organ.color}30`,
                } : { border: '1px solid transparent', color: '#6B7280' }}
              >
                <organ.icon className="w-3 h-3" />
                {organ.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Organ Pill Strip — ultra-compact */}
      <div className="md:hidden fl-mobile-organ-strip" style={{ borderBottom: '1px solid rgba(184, 134, 11, 0.1)' }}>
        <button
          onClick={() => { setSelectedOrganKey("overview"); setMobilePanel('none'); }}
          className="flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap flex-shrink-0 transition-all"
          style={isOverview ? {
            background: 'rgba(184, 134, 11, 0.1)',
            color: '#B8860B',
            border: '1px solid rgba(184, 134, 11, 0.25)',
          } : { border: '1px solid rgba(0,0,0,0.08)', color: '#6B7280' }}
        >
          <Activity className="w-2.5 h-2.5" />
          Overview
        </button>
        {ORGAN_CONFIGS.map((organ) => {
          const isSelected = selectedOrganKey === organ.key;
          return (
            <button
              key={organ.key}
              onClick={() => { setSelectedOrganKey(organ.key); setMobilePanel('none'); }}
              className="flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap flex-shrink-0 transition-all"
              style={isSelected ? {
                background: `${organ.color}12`,
                color: organ.color,
                border: `1px solid ${organ.color}30`,
              } : { border: '1px solid rgba(0,0,0,0.08)', color: '#6B7280' }}
            >
              <organ.icon className="w-2.5 h-2.5" />
              {organ.label}
            </button>
          );
        })}
      </div>

      {/* Three Panel Layout */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* ═══ LEFT PANEL (Desktop only) ═══ */}
        <div className="hidden md:block w-[300px] flex-shrink-0 p-4 overflow-y-auto" style={{ borderRight: '1px solid rgba(184, 134, 11, 0.12)', background: '#FAFAFA' }}>
          {isOverview ? (
            /* ─── OVERVIEW LEFT PANEL — Streamlined ─── */
            <>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center relative" style={{ background: 'rgba(184, 134, 11, 0.08)', border: '1px solid rgba(184, 134, 11, 0.15)' }}>
                  <div className="absolute inset-0 rounded-lg blur-[8px]" style={{ background: 'rgba(184, 134, 11, 0.06)' }} />
                  <Activity className="w-5 h-5 relative z-10" style={{ color: 'var(--fl-accent)' }} />
                </div>
                <div>
                  <h2 className="text-[15px] font-bold tracking-tight" style={{ color: 'var(--fl-text-primary)' }}>Health Overview</h2>
                  <p className="text-[11px] font-medium" style={{ color: 'var(--fl-text-gold)' }}>Complete Health Summary</p>
                </div>
              </div>

              {/* Health Score Donut Chart */}
              <div className="mb-5">
                <h3 className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--fl-text-muted)' }}>Health Score</h3>
                {(() => {
                  let excellent = 0, good = 0, attention = 0;
                  ORGAN_CONFIGS.forEach(c => {
                    const a = getOrganAge(c.key);
                    if (a <= 37) excellent++;
                    else if (a <= 42) good++;
                    else attention++;
                  });
                  const total = ORGAN_CONFIGS.length;
                  const radius = 42;
                  const strokeWidth = 8;
                  const circumference = 2 * Math.PI * radius;
                  const excellentPct = excellent / total;
                  const goodPct = good / total;
                  const attentionPct = attention / total;
                  const gap = 0.02;
                  const excellentLen = excellentPct * circumference - (excellent > 0 ? gap * circumference : 0);
                  const goodLen = goodPct * circumference - (good > 0 ? gap * circumference : 0);
                  const attentionLen = attentionPct * circumference - (attention > 0 ? gap * circumference : 0);
                  const excellentOffset = 0;
                  const goodOffset = -(excellentPct * circumference + gap * circumference);
                  const attentionOffset = -((excellentPct + goodPct) * circumference + 2 * gap * circumference);
                  const overallScore = Math.round(((excellent * 100 + good * 75 + attention * 45) / total));
                  return (
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0" style={{ width: 100, height: 100 }}>
                        <svg width="100" height="100" viewBox="0 0 100 100" className="-rotate-90">
                          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={strokeWidth} />
                          {excellent > 0 && (
                            <circle cx="50" cy="50" r={radius} fill="none" stroke="#10B981" strokeWidth={strokeWidth}
                              strokeDasharray={`${excellentLen} ${circumference - excellentLen}`}
                              strokeDashoffset={excellentOffset}
                              strokeLinecap="round" className="transition-all duration-700"
                              style={{ filter: 'drop-shadow(0 0 4px rgba(16,185,129,0.4))' }}
                            />
                          )}
                          {good > 0 && (
                            <circle cx="50" cy="50" r={radius} fill="none" stroke="#B8860B" strokeWidth={strokeWidth}
                              strokeDasharray={`${goodLen} ${circumference - goodLen}`}
                              strokeDashoffset={goodOffset}
                              strokeLinecap="round" className="transition-all duration-700"
                              style={{ filter: 'drop-shadow(0 0 4px rgba(184,134,11,0.3))' }}
                            />
                          )}
                          {attention > 0 && (
                            <circle cx="50" cy="50" r={radius} fill="none" stroke="#F59E0B" strokeWidth={strokeWidth}
                              strokeDasharray={`${attentionLen} ${circumference - attentionLen}`}
                              strokeDashoffset={attentionOffset}
                              strokeLinecap="round" className="transition-all duration-700"
                              style={{ filter: 'drop-shadow(0 0 4px rgba(245,158,11,0.3))' }}
                            />
                          )}
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.04em', color: 'var(--fl-text-primary)' }}>{overallScore}</span>
                          <span className="text-[8px] uppercase tracking-widest font-semibold" style={{ color: 'var(--fl-text-muted)' }}>Score</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px rgba(16,185,129,0.5)' }} />
                          <span className="text-[10px]" style={{ color: 'var(--fl-text-secondary)' }}>Excellent</span>
                          <span className="text-[11px] font-bold ml-auto" style={{ fontFamily: "'Space Mono', monospace", color: '#10B981' }}>{excellent}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-600" style={{ boxShadow: '0 0 6px rgba(184,134,11,0.4)' }} />
                          <span className="text-[10px]" style={{ color: 'var(--fl-text-secondary)' }}>On Track</span>
                          <span className="text-[11px] font-bold ml-auto" style={{ fontFamily: "'Space Mono', monospace", color: '#B8860B' }}>{good}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-400" style={{ boxShadow: '0 0 6px rgba(245,158,11,0.4)' }} />
                          <span className="text-[10px]" style={{ color: 'var(--fl-text-secondary)' }}>Attention</span>
                          <span className="text-[11px] font-bold ml-auto" style={{ fontFamily: "'Space Mono', monospace", color: '#F59E0B' }}>{attention}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Organ System Ages */}
              <div className="mb-5" data-tour="organ-ages">
                <h3 className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--fl-text-muted)' }}>Organ System Ages</h3>
                <div className="space-y-1">
                  {ORGAN_CONFIGS.map(organ => {
                    const age = getOrganAge(organ.key);
                    const diff = age - 42;
                    const isYounger = diff < 0;
                    const isOlder = diff > 0;
                    return (
                      <button
                        key={organ.key}
                        onClick={() => setSelectedOrganKey(organ.key)}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg group transition-all duration-200 hover:translate-x-0.5"
                        style={{ background: 'transparent' }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--fl-bg-card)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <organ.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: organ.color }} />
                        <span className="text-[11px] font-medium flex-1 text-left" style={{ color: 'var(--fl-text-secondary)' }}>{organ.label}</span>
                        <span className="text-[13px] font-bold tabular-nums" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--fl-text-primary)' }}>{age}</span>
                        <span className="text-[9px] font-semibold min-w-[52px] text-right" style={{ color: isOlder ? '#EF4444' : isYounger ? '#10B981' : 'var(--fl-text-muted)' }}>
                          {isYounger ? `${Math.abs(diff)}y younger` : isOlder ? `${diff}y older` : 'On track'}
                        </span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: 'var(--fl-text-muted)' }} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Top Recommendations */}
              <div className="mb-5">
                <h3 className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--fl-text-muted)' }}>Top Recommendations</h3>
                <div className="space-y-2">
                  {(() => {
                    const ranked = [...ORGAN_CONFIGS]
                      .map(c => ({ ...c, age: getOrganAge(c.key) }))
                      .sort((a, b) => b.age - a.age);
                    const topRecs: { organ: typeof ORGAN_CONFIGS[0]; rec: typeof ORGAN_CONFIGS[0]['recommendations'][0] }[] = [];
                    for (const organ of ranked) {
                      if (topRecs.length >= 3) break;
                      if (organ.recommendations.length > 0) {
                        topRecs.push({ organ, rec: organ.recommendations[0] });
                      }
                    }
                    return topRecs.map(({ organ, rec }, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedOrganKey(organ.key)}
                        className="w-full text-left rounded-xl p-3 relative overflow-hidden group transition-all duration-200 hover:-translate-y-0.5"
                        style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-crisp)' }}
                      >
                        <div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: `linear-gradient(180deg, ${organ.color}, transparent)` }} />
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${organ.color}12` }}>
                            <Zap className="w-3 h-3" style={{ color: organ.color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[11px] font-bold" style={{ color: 'var(--fl-text-primary)' }}>{rec.title}</span>
                            <p className="text-[9px] mt-0.5" style={{ color: organ.color }}>{rec.benefit}</p>
                          </div>
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full flex-shrink-0" style={{ background: `${organ.color}10`, color: organ.color }}>{organ.label}</span>
                        </div>
                      </button>
                    ));
                  })()}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <h3 className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--fl-text-muted)' }}>Quick Actions</h3>
                <button
                  onClick={() => setShowCompare(true)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-crisp)' }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(184, 134, 11, 0.08)' }}>
                    <GitCompare className="w-3.5 h-3.5" style={{ color: 'var(--fl-accent)' }} />
                  </div>
                  <p className="text-[11px] font-semibold" style={{ color: 'var(--fl-text-primary)' }}>Compare Organs</p>
                </button>
                {onTabChange && (
                  <button
                    onClick={() => onTabChange('timeline')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-crisp)' }}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(184, 134, 11, 0.08)' }}>
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                    </div>
                    <p className="text-[11px] font-semibold" style={{ color: 'var(--fl-text-primary)' }}>Health Timeline</p>
                  </button>
                )}
              </div>
            </>
          ) : (
            /* ─── ORGAN-SPECIFIC LEFT PANEL ─── */
            <>
          <button
            onClick={() => setSelectedOrganKey('overview')}
            className="flex items-center gap-1.5 mb-3 px-2 py-1 -ml-1 rounded-md text-[11px] font-medium transition-all duration-200 hover:translate-x-[-2px] group"
            style={{ color: 'var(--fl-text-muted)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fl-accent)'; e.currentTarget.style.background = 'rgba(184,134,11,0.06)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fl-text-muted)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </button>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center relative" style={{ background: `${selectedConfig.color}12`, border: `1px solid ${selectedConfig.color}25` }}>
              <div className="absolute inset-0 rounded-lg blur-[8px]" style={{ background: `${selectedConfig.color}10` }} />
              <selectedConfig.icon className="w-5 h-5 relative z-10" style={{ color: selectedConfig.color }} />
            </div>
            <div>
              <h2 className="text-[15px] font-bold tracking-tight" style={{ color: 'var(--fl-text-primary)' }}>{selectedConfig.label} Health</h2>
              <p className="text-[11px] font-medium" style={{ color: selectedConfig.color }}>Personalized Insights</p>
            </div>
          </div>
          <div className="rounded-xl p-4 mb-4 border relative overflow-hidden" style={{ background: `${selectedConfig.color}08`, borderColor: `${selectedConfig.color}20`, boxShadow: `0 0 30px ${selectedConfig.color}08` }}>
            {/* Ambient glow behind age number */}
            <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[30px] pointer-events-none" style={{ background: `${selectedConfig.color}15` }} />
            <div className="flex items-end justify-between relative z-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--fl-text-gold)' }}>Organ Age</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.04em', color: 'var(--fl-text-primary)' }}>{selectedAge}</span>
                  <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>years</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--fl-text-muted)' }}>vs Chrono</p>
                <p className={`text-sm font-bold ${ageDiffColor}`}>{ageDiffLabel}</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--fl-text-muted)' }}>Key Factors</h3>
            <div className="grid grid-cols-2 gap-2">
              {selectedConfig.keyFactors.map((f, i) => (
                <div key={i} className="rounded-lg p-2.5 relative overflow-hidden" style={{ border: '1px solid var(--fl-border)', background: 'var(--fl-bg-card)' }}>
                  <div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: `linear-gradient(180deg, ${selectedConfig.color}, transparent)` }} />
                  <p className="text-[10px] mb-0.5 pl-2" style={{ color: 'var(--fl-text-muted)' }}>{f.label}</p>
                  <p className="text-[13px] font-bold pl-2" style={{ fontFamily: "'Space Mono', monospace", color: 'var(--fl-text-primary)' }}>{f.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {selectedConfig.recommendations.map((rec, i) => (
              <div key={i} className="rounded-xl p-4 relative overflow-hidden group transition-all duration-300" style={{ border: '1px solid var(--fl-border)', background: 'var(--fl-bg-card)', boxShadow: 'var(--fl-shadow-crisp)' }}>
                <div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: `linear-gradient(180deg, ${selectedConfig.color}, ${selectedConfig.color}30, transparent)` }} />
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${selectedConfig.color}12` }}>
                    <AlertCircle className="w-3.5 h-3.5" style={{ color: selectedConfig.color }} />
                  </div>
                  <h4 className="text-[13px] font-semibold leading-tight" style={{ color: 'var(--fl-text-primary)' }}>{rec.title}</h4>
                </div>
                <p className="text-xs leading-relaxed mb-2 ml-8" style={{ color: 'var(--fl-text-secondary)' }}>{rec.description}</p>
                <p className="text-xs font-medium ml-8" style={{ color: selectedConfig.color }}>{rec.benefit}</p>
              </div>
            ))}
          </div>

          {/* ─── Cancer Screening Callout ─── */}
          <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold" style={{ color: 'var(--fl-text-primary)' }}>Cancer Screening</h3>
                <p className="text-[10px] text-emerald-400 font-medium">Full-Body MRI + AI Analysis</p>
              </div>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>Screening Status</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Clear
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>Last Screening</span>
                <span className="text-xs font-medium" style={{ color: 'var(--fl-text-primary)' }}>Jan 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>Risk Assessment</span>
                <span className="text-xs text-amber-700 font-medium">Low Risk</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>Next Screening</span>
                <span className="text-xs font-medium" style={{ color: 'var(--fl-text-primary)' }}>Jul 2026</span>
              </div>
            </div>
            <div className="text-[10px] leading-relaxed border-t border-emerald-500/15 pt-2" style={{ color: 'var(--fl-text-secondary)' }}>
              <div className="flex items-start gap-1.5 mb-1">
                <Scan className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Full-body MRI with AI-powered early detection covers 500+ conditions including solid tumors, aneurysms, and organ abnormalities.</span>
              </div>
            </div>
          </div>

          {/* ─── Genomics & DNA Panel ─── */}
          <div className="mt-5 rounded-xl border border-amber-600/20 bg-amber-600/[0.04] p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-600/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600/20 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 15c6.667-6 13.333 0 20-6" />
                  <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
                  <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
                  <path d="M17 6l-2.5 2.5" />
                  <path d="M14 8l-1 1" />
                  <path d="M7 18l2.5-2.5" />
                  <path d="M3.5 14.5l.5-.5" />
                  <path d="M20 9l.5-.5" />
                  <path d="M6.5 12.5l1-1" />
                  <path d="M16.5 10.5l1-1" />
                  <path d="M10 16l1.5-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold" style={{ color: 'var(--fl-text-primary)' }}>Genomics & DNA</h3>
                <p className="text-[10px] text-amber-700 font-medium">Whole Genome Sequencing</p>
              </div>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>Genetic Risk Profile</span>
                <span className="text-xs font-semibold text-emerald-400">Low</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>Variants Analyzed</span>
                <span className="text-xs font-medium" style={{ color: 'var(--fl-text-primary)' }}>28,000+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>Pharmacogenomics</span>
                <span className="text-xs text-amber-700 font-medium">12 drug responses</span>
              </div>
            </div>
            {/* Risk Categories */}
            <div className="space-y-1.5 mb-3">
              <p className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--fl-text-muted)' }}>Key Genetic Markers</p>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                <span className="text-[11px]" style={{ color: 'var(--fl-text-secondary)' }}>APOE (Alzheimer's)</span>
                <span className="text-[11px] text-emerald-400 font-semibold">e3/e3 — Normal</span>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                <span className="text-[11px]" style={{ color: 'var(--fl-text-secondary)' }}>BRCA1/2 (Cancer)</span>
                <span className="text-[11px] text-emerald-400 font-semibold">No variants</span>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                <span className="text-[11px]" style={{ color: 'var(--fl-text-secondary)' }}>MTHFR (Methylation)</span>
                <span className="text-[11px] text-yellow-400 font-semibold">C677T — Hetero</span>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                <span className="text-[11px]" style={{ color: 'var(--fl-text-secondary)' }}>FTO (Metabolism)</span>
                <span className="text-[11px] text-emerald-400 font-semibold">Normal</span>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                <span className="text-[11px]" style={{ color: 'var(--fl-text-secondary)' }}>COMT (Stress)</span>
                <span className="text-[11px] text-amber-700 font-semibold">Val/Met — Balanced</span>
              </div>
            </div>
            <div className="text-[10px] leading-relaxed border-t border-amber-600/15 pt-2" style={{ color: 'var(--fl-text-secondary)' }}>
              <div className="flex items-start gap-1.5">
                <svg className="w-3 h-3 text-amber-700 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 15c6.667-6 13.333 0 20-6" />
                  <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
                  <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
                </svg>
                <span>Whole genome sequencing with pharmacogenomic analysis identifies drug sensitivities and hereditary risk factors for personalized treatment plans.</span>
              </div>
            </div>
          </div>
            </>
          )}
        </div>

        {/* ═══ CENTER PANEL — AI-Generated Organ Image Swapping ═══ */}
        <div className="flex-1 flex flex-col relative" ref={bodyContainerRef} style={{ minWidth: 0, background: '#000000', borderRadius: '0px', margin: '0', overflow: 'hidden' }}>
          {/* Layered ambient background */}
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{
            backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 45%, ${selectedConfig.color}15 0%, transparent 70%), radial-gradient(circle at 50% 40%, rgba(184, 134, 11, 0.04) 0%, transparent 60%), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '100% 100%, 100% 100%, 40px 40px',
            transition: 'background-image 0.6s ease',
          }} />
          <div className="flex-1 relative flex items-center justify-center overflow-hidden pt-2 md:pt-0">


            {/* Stacked organ images with crossfade transitions */}
            <div className="relative" style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Previous organ image (fading out during transition) */}
              {isTransitioning && prevOrgan !== selectedOrganKey && (
                <img
                  src={ORGAN_IMAGES[prevOrgan] || ORGAN_IMAGES.default}
                  alt=""
                  className="object-contain absolute"
                  style={{
                    filter: getOrganGlowFilter(prevOrgan),
                    transform: `scale(${zoom / 100})`,
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "contain" as React.CSSProperties["objectFit"],
                    opacity: 0,
                    transition: "opacity 0.6s ease-out",
                    WebkitMaskImage: `radial-gradient(ellipse 85% 95% at ${(ORGAN_CONFIGS.find(c => c.key === prevOrgan) || selectedConfig).maskCenterX}% ${(ORGAN_CONFIGS.find(c => c.key === prevOrgan) || selectedConfig).maskCenterY}%, black 50%, transparent 100%)`,
                    maskImage: `radial-gradient(ellipse 85% 95% at ${(ORGAN_CONFIGS.find(c => c.key === prevOrgan) || selectedConfig).maskCenterX}% ${(ORGAN_CONFIGS.find(c => c.key === prevOrgan) || selectedConfig).maskCenterY}%, black 50%, transparent 100%)`,
                  }}
                />
              )}

              {/* Current selected organ image */}
              <img
                ref={bodyImgRef}
                src={isOverview ? ORGAN_IMAGES.default : (ORGAN_IMAGES[selectedOrganKey] || ORGAN_IMAGES.default)}
                alt="Digital Health Twin"
                className="object-contain"
                onLoad={() => {
                  if (bodyImgRef.current) setBodyRect(bodyImgRef.current.getBoundingClientRect());
                  if (bodyContainerRef.current) setContainerRect(bodyContainerRef.current.getBoundingClientRect());
                }}
                style={{
                  filter: isOverview
                    ? 'brightness(1.05) contrast(1.08) sepia(0.15) hue-rotate(-10deg) saturate(0.9) drop-shadow(0 0 30px rgba(184, 134, 11, 0.12)) drop-shadow(0 0 60px rgba(184, 134, 11, 0.06))'
                    : getOrganGlowFilter(selectedOrganKey),
                  transform: `scale(${(zoom / 100) * (isTransitioning ? 0.93 : 1)})`,
                  height: "100%",
                  maxWidth: "100%",
                  objectFit: "contain" as React.CSSProperties["objectFit"],
                  opacity: isTransitioning ? 0.6 : 1,
                  transition: isTransitioning
                    ? "filter 0.3s ease-in, transform 0.3s ease-in, opacity 0.3s ease-in, mask-image 0.3s ease, -webkit-mask-image 0.3s ease"
                    : "filter 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out, mask-image 0.5s ease, -webkit-mask-image 0.5s ease",
                  WebkitMaskImage: isOverview
                    ? 'radial-gradient(ellipse 85% 95% at 50% 45%, black 50%, transparent 100%)'
                    : `radial-gradient(ellipse 85% 95% at ${selectedConfig.maskCenterX}% ${selectedConfig.maskCenterY}%, black 50%, transparent 100%)`,
                  maskImage: isOverview
                    ? 'radial-gradient(ellipse 85% 95% at 50% 45%, black 50%, transparent 100%)'
                    : `radial-gradient(ellipse 85% 95% at ${selectedConfig.maskCenterX}% ${selectedConfig.maskCenterY}%, black 50%, transparent 100%)`,
                }}
              />
            </div>

            {/* ─── Organ Label Pill (premium glassmorphism) ─── */}
            {isOverview ? (
              /* ─── HERO BIO AGE OVERLAY ─── */
              <>
                {/* Top: Bio Age Hero — compact horizontal strip on mobile, full card on desktop */}
                <div className="absolute top-2 md:top-4 left-2 right-2 md:left-4 md:right-auto z-10 flex flex-col items-center md:items-start" data-tour="bio-age-hero">
                  <div
                    className="w-full md:w-auto rounded-lg md:rounded-2xl px-3 py-2 md:px-8 md:py-5 border backdrop-blur-xl text-center relative overflow-hidden"
                    style={{
                      borderColor: 'rgba(184, 134, 11, 0.2)',
                      background: 'rgba(255, 255, 255, 0.92)',
                      boxShadow: '0 0 40px rgba(184, 134, 11, 0.08), 0 8px 32px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Ambient glow */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(184, 134, 11, 0.08), transparent 70%)' }} />
                    <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(184, 134, 11, 0.3), transparent)' }} />
                    {/* Mobile: compact horizontal layout */}
                    <div className="flex md:hidden items-center justify-center gap-3 relative z-10">
                      <p className="text-[9px] uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--fl-text-gold)' }}>Bio Age</p>
                      <span className="text-2xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.06em', color: 'var(--fl-text-primary)', textShadow: '0 0 40px rgba(184, 134, 11, 0.2)' }}>{animatedBioAge}</span>
                      <span className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>Chrono {chronoAge}</span>
                      <span className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>•</span>
                      <span className={`text-[11px] font-bold ${bioAgeDiffColor}`}>{bioAgeDiffLabel}</span>
                    </div>
                    {/* Desktop: original vertical layout */}
                    <div className="hidden md:block">
                      <p className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-1 relative z-10" style={{ color: 'var(--fl-text-gold)' }}>Bio Age</p>
                      <div className="flex items-baseline justify-center gap-3 relative z-10">
                        <span className="text-6xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.06em', color: 'var(--fl-text-primary)', textShadow: '0 0 40px rgba(184, 134, 11, 0.2)' }}>{animatedBioAge}</span>
                        <span className="text-base font-medium" style={{ color: 'var(--fl-text-muted)' }}>years</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-1.5 relative z-10">
                        <span className="text-[11px]" style={{ color: 'var(--fl-text-muted)' }}>Chronological {chronoAge}</span>
                        <span className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>•</span>
                        <span className={`text-sm font-bold ${bioAgeDiffColor}`}>{bioAgeDiffLabel}</span>
                      </div>
                    </div>
                    {/* Bio Age Trend Sparkline (desktop only) */}
                    <div className="hidden md:block mt-3 pt-3 relative z-10" style={{ borderTop: '1px solid rgba(184, 134, 11, 0.15)' }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] uppercase tracking-wider font-medium" style={{ color: 'var(--fl-text-muted)' }}>6-Assessment Trend</span>
                        <span className="text-[9px] font-semibold text-emerald-400">↓ Improving</span>
                      </div>
                      <svg width="180" height="40" viewBox="0 0 180 40" className="w-full">
                        {/* Grid lines */}
                        <line x1="0" y1="10" x2="180" y2="10" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="20" x2="180" y2="20" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="30" x2="180" y2="30" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
                        {/* Gradient fill under the line */}
                        <defs>
                          <linearGradient id="bioAgeTrendFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="bioAgeTrendLine" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        {/* Area fill - line goes DOWN because lower bio age = better */}
                        <path d="M 0 8 L 36 12 L 72 18 L 108 24 L 144 28 L 180 32 L 180 40 L 0 40 Z" fill="url(#bioAgeTrendFill)" />
                        {/* Trend line - Bio Age decreasing from 44 (top-left) to 40 (bottom-right) */}
                        <path d="M 0 8 L 36 12 L 72 18 L 108 24 L 144 28 L 180 32" fill="none" stroke="url(#bioAgeTrendLine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        {/* Data points */}
                        {[{ x: 0, y: 8 }, { x: 36, y: 12 }, { x: 72, y: 18 }, { x: 108, y: 24 }, { x: 144, y: 28 }, { x: 180, y: 32 }].map((pt, i) => (
                          <circle key={i} cx={pt.x} cy={pt.y} r={i === 5 ? 3.5 : 2} fill={i === 5 ? '#10B981' : 'rgba(16, 185, 129, 0.5)'} stroke={i === 5 ? '#fff' : 'none'} strokeWidth={i === 5 ? 1 : 0} />
                        ))}
                      </svg>
                      <div className="flex justify-between mt-1">
                        <span className="text-[8px]" style={{ color: 'var(--fl-text-muted)' }}>44y</span>
                        <span className="text-[8px]" style={{ color: 'var(--fl-text-muted)' }}>43y</span>
                        <span className="text-[8px]" style={{ color: 'var(--fl-text-muted)' }}>42y</span>
                        <span className="text-[8px]" style={{ color: 'var(--fl-text-muted)' }}>41y</span>
                        <span className="text-[8px]" style={{ color: 'var(--fl-text-muted)' }}>41y</span>
                        <span className="text-[8px] font-semibold" style={{ color: '#10B981' }}>40y</span>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            ) : (
              <div
                className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md transition-all duration-500"
                style={{
                  borderColor: `${selectedConfig.color}30`,
                  background: `${selectedConfig.color}10`,
                  boxShadow: `0 0 20px ${selectedConfig.color}10, 0 4px 12px rgba(0,0,0,0.2)`,
                }}
              >
                <selectedConfig.icon className="w-3.5 h-3.5" style={{ color: selectedConfig.color }} />
                <span className="text-xs font-semibold" style={{ color: selectedConfig.color }}>
                  {selectedConfig.label} System
                </span>
                <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
                <span className={`text-[10px] font-bold ${ageDiffColor}`}>
                  Age {selectedAge}
                </span>
              </div>
            )}




            {/* ─── Connection Lines SVG Overlay (Desktop only) ─── */}
            {!isOverview && !isMobile && <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 4 }}>
              <defs>
                {ORGAN_CONFIGS.map((organ) => (
                  <linearGradient key={`grad-${organ.key}`} id={`line-grad-${organ.key}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={organ.color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={organ.color} stopOpacity="0.15" />
                  </linearGradient>
                ))}
              </defs>

              {ORGAN_CONFIGS.map((organ, index) => {
                const line = getConnectionLine(organ, index);
                if (!line) return null;
                const isSelected = organ.key === selectedOrganKey;
                const midX = line.startX + (line.endX - line.startX) * 0.65;
                const pathD = `M ${line.startX} ${line.startY} L ${midX} ${line.startY} L ${midX} ${line.endY} L ${line.endX} ${line.endY}`;

                return (
                  <g key={`line-${organ.key}`}>
                    <circle cx={line.startX} cy={line.startY} r={isSelected ? 5 : 3} fill={organ.color} opacity={isSelected ? 0.9 : 0.3} />
                    {isSelected && (
                      <circle cx={line.startX} cy={line.startY} r={10} fill="none" stroke={organ.color} strokeWidth="1.5" opacity={0.4}>
                        <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    {isSelected && (
                      <path d={pathD} fill="none" stroke={organ.color} strokeWidth={6} opacity={0.15} className="transition-all duration-500" />
                    )}
                    <path d={pathD} fill="none" stroke={`url(#line-grad-${organ.key})`} strokeWidth={isSelected ? 2.5 : 0.8} strokeDasharray={isSelected ? "none" : "4 4"} opacity={isSelected ? 1 : 0.2} className="transition-all duration-500" />
                    {isSelected && (
                      <>
                        <circle r={3.5} fill={organ.color} opacity={0.85}>
                          <animateMotion dur="3s" repeatCount="indefinite" path={pathD} />
                        </circle>
                      </>
                    )}
                    <circle cx={line.endX} cy={line.endY} r={isSelected ? 4 : 2} fill={organ.color} opacity={isSelected ? 0.8 : 0.2} />
                  </g>
                );
              })}
            </svg>}


          </div>

          {/* Compare / Export floating buttons (hidden in overview and on mobile) */}
          {!isOverview && <div className="hidden md:flex items-center justify-center gap-3 py-1.5">
            <Button variant="outline" size="sm" className="rounded-lg px-4 gap-2 h-8 text-[11px] font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5" style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }} onClick={() => setShowCompare(true)}>
              <GitCompare className="w-3.5 h-3.5" /> Compare Organs
            </Button>

            <Button variant="outline" size="sm" className="rounded-lg px-4 gap-2 h-8 text-[11px] font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5" style={{ border: '1px solid rgba(184, 134, 11, 0.35)', background: 'rgba(184, 134, 11, 0.1)', color: '#B8860B', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }} onClick={() => {
              exportHealthTwinPdf({
                userName: "Member",
                biologicalAge: Math.round(ORGAN_CONFIGS.reduce((sum, c) => sum + getOrganAge(c.key), 0) / ORGAN_CONFIGS.length),
                chronologicalAge: 42,
                organs: ORGAN_CONFIGS.map(c => {
                  const oAge = getOrganAge(c.key);
                  const oStatus = oAge <= 37 ? "excellent" : oAge <= 40 ? "good" : oAge <= 43 ? "fair" : "attention_needed";
                  return {
                  name: c.label,
                  age: oAge,
                  status: oStatus,
                  findings: c.keyFactors?.map(f => `${f.label}: ${f.value}`).join("; "),
                  recommendations: c.recommendations?.map(r => r.title).join("; "),
                }; }),
                cancerScreening: { status: "Clear", lastDate: "January 2026", method: "Full-Body MRI + Galleri Liquid Biopsy" },
                genomics: { markers: [
                  { name: "APOE (Alzheimer's)", status: "ε3/ε3 — Standard risk", risk: "Low" },
                  { name: "BRCA1/BRCA2", status: "No pathogenic variants", risk: "Low" },
                  { name: "MTHFR", status: "C677T heterozygous", risk: "Moderate" },
                  { name: "FTO (Obesity)", status: "rs9939609 — AT variant", risk: "Moderate" },
                  { name: "COMT", status: "Val/Met — Balanced", risk: "Normal" },
                ] },
              });
            }}>
              <Download className="w-3.5 h-3.5" /> Export PDF
            </Button>
          </div>}

          {/* Bottom: Vitals Bar on desktop, Organ Bio Ages on mobile */}
          {isMobile ? (
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5" data-tour="vitals-bar" style={{ background: 'linear-gradient(180deg, transparent, rgba(5,10,18,0.95))', borderTop: '1px solid rgba(184, 134, 11, 0.15)' }}>
              {ORGAN_CONFIGS.map((organ) => {
                const age = getOrganAge(organ.key);
                const diff = age - chronoAge;
                const diffColor = diff <= 0 ? '#10B981' : diff <= 3 ? '#F59E0B' : '#EF4444';
                const diffLabel = diff <= 0 ? `${Math.abs(diff)}y\u2193` : `${diff}y\u2191`;
                const Icon = organ.icon;
                return (
                  <button
                    key={organ.key}
                    onClick={() => { setSelectedOrganKey(organ.key); }}
                    className="text-center px-1.5 py-1.5 rounded-lg relative transition-all duration-200 active:scale-95 flex-1"
                    style={{
                      background: selectedOrganKey === organ.key ? `${organ.color}20` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${selectedOrganKey === organ.key ? `${organ.color}50` : 'rgba(184, 134, 11, 0.12)'}`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] w-6 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${organ.color}, transparent)`, opacity: 0.5 }} />
                    <Icon className="w-2.5 h-2.5 mx-auto mb-0.5" style={{ color: organ.color }} />
                    <p className="text-[8px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: organ.color }}>{organ.label}</p>
                    <p className="text-sm font-bold tabular-nums" style={{ fontFamily: "'Space Mono', monospace", color: '#FFFFFF' }}>{age}</p>
                    <p className="text-[7px] font-semibold" style={{ color: diffColor }}>{diffLabel}</p>
                  </button>
                );
              })}
            </div>
          ) : (
            <VitalsBar />
          )}
        </div>

        {/* ═══ RIGHT PANEL (Desktop only) ═══ */}
        <div ref={rightPanelRef} className="hidden md:flex w-[220px] flex-shrink-0 p-3 overflow-y-auto flex-col gap-2" data-tour="organ-cards" style={{ borderLeft: '1px solid rgba(184, 134, 11, 0.12)', background: '#FAFAFA' }}>
          {ORGAN_CONFIGS.map((organ) => {
            const isSelected = selectedOrganKey === organ.key;
            const age = getOrganAge(organ.key);
            const status = getOrganStatus(organ.key);
            const Icon = organ.icon;
            return (
              <button
                key={organ.key}
                ref={(el) => { if (el) cardRefs.current.set(organ.key, el); }}
                onClick={() => setSelectedOrganKey(organ.key)}
                className={`w-full text-left rounded-xl p-3 border transition-all duration-300 relative overflow-hidden ${isSelected ? "shadow-lg" : "hover:-translate-y-0.5"}`}
                style={isSelected ? {
                  borderColor: `${organ.color}40`,
                  background: `linear-gradient(135deg, ${organ.color}0A, ${organ.color}04)`,
                  boxShadow: `0 0 25px ${organ.glowColor.replace("0.6", "0.10")}, var(--fl-shadow-crisp)`,
                } : {
                  border: '1px solid var(--fl-border)',
                  background: 'var(--fl-bg-card)',
                  backgroundImage: 'var(--fl-card-gradient)',
                  boxShadow: 'var(--fl-shadow-crisp)',
                }}
              >
                {/* Selected glow accent */}
                {isSelected && (
                  <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full blur-[20px] pointer-events-none" style={{ background: `${organ.color}15` }} />
                )}
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] mb-1.5 relative z-10" style={{ color: isSelected ? organ.color : 'var(--fl-text-muted)' }}>{organ.ageLabel}</p>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" style={{ color: organ.color }} />
                    <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', color: isSelected ? 'var(--fl-text-primary)' : 'var(--fl-text-secondary)' }}>{age}</span>
                  </div>
                  <Sparkline data={organ.trend} color={organ.color} width={60} height={22} />
                </div>
                <p className={`text-[10px] mt-1 relative z-10 ${status === "On track" ? "text-emerald-400" : status === "Younger" ? "text-amber-700" : status === "Attention" ? "text-yellow-400" : "text-red-400"}`}>{status}</p>
              </button>
            );
          })}

        </div>

        {/* ═══ MOBILE: Floating Detail Button ═══ */}
        {isMobile && !isOverview && mobilePanel === 'none' && (
          <button
            onClick={() => setMobilePanel('details')}
            className="absolute bottom-20 right-3 z-20 flex items-center gap-1.5 px-3 py-2 rounded-full border backdrop-blur-md shadow-lg transition-all active:scale-95"
            style={{
              background: `${selectedConfig.color}18`,
              borderColor: `${selectedConfig.color}40`,
              boxShadow: `0 0 20px ${selectedConfig.color}15, 0 4px 12px rgba(0,0,0,0.06)`,
            }}
          >
            <selectedConfig.icon className="w-3.5 h-3.5" style={{ color: selectedConfig.color }} />
            <span className="text-[11px] font-semibold" style={{ color: selectedConfig.color }}>Details</span>
            <ChevronDown className="w-3 h-3 rotate-180" style={{ color: selectedConfig.color }} />
          </button>
        )}

        {/* ═══ MOBILE: Bottom Sheet for Organ Details ═══ */}
        {isMobile && !isOverview && mobilePanel === 'details' && (
          <div className="absolute inset-0 z-30 flex flex-col">
            <div className="flex-shrink-0 h-[30%]" onClick={() => setMobilePanel('none')} style={{ background: 'rgba(0,0,0,0.15)' }} />
            <div className="flex-1 overflow-y-auto rounded-t-2xl fl-slide-up" style={{ background: 'var(--fl-bg-deep)', borderTop: `2px solid ${selectedConfig.color}30`, boxShadow: '0 -8px 40px rgba(0,0,0,0.08)' }}>
              <div className="sticky top-0 z-10 pt-2 pb-3 px-4" style={{ background: 'var(--fl-bg-deep)', borderBottom: '1px solid var(--fl-border)' }}>
                <div className="w-10 h-1 rounded-full mx-auto mb-3" style={{ background: 'var(--fl-border)' }} />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${selectedConfig.color}12` }}>
                      <selectedConfig.icon className="w-4 h-4" style={{ color: selectedConfig.color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold" style={{ color: 'var(--fl-text-primary)' }}>{selectedConfig.label} Health</h3>
                      <p className="text-[10px]" style={{ color: selectedConfig.color }}>Organ Age: {selectedAge} • {ageDiffLabel}</p>
                    </div>
                  </div>
                  <button onClick={() => setMobilePanel('none')} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                    <X className="w-3.5 h-3.5" style={{ color: 'var(--fl-text-muted)' }} />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <h4 className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--fl-text-muted)' }}>Key Factors</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedConfig.keyFactors.map((f, i) => (
                      <div key={i} className="rounded-lg p-2.5 relative overflow-hidden" style={{ border: '1px solid var(--fl-border)', background: 'var(--fl-bg-card)' }}>
                        <div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: `linear-gradient(180deg, ${selectedConfig.color}, transparent)` }} />
                        <p className="text-[10px] mb-0.5 pl-2" style={{ color: 'var(--fl-text-muted)' }}>{f.label}</p>
                        <p className="text-[13px] font-bold pl-2" style={{ fontFamily: "'Space Mono', monospace", color: 'var(--fl-text-primary)' }}>{f.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--fl-text-muted)' }}>Recommendations</h4>
                  <div className="space-y-2">
                    {selectedConfig.recommendations.map((rec, i) => (
                      <div key={i} className="rounded-xl p-3 relative overflow-hidden" style={{ border: '1px solid var(--fl-border)', background: 'var(--fl-bg-card)' }}>
                        <div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: `linear-gradient(180deg, ${selectedConfig.color}, transparent)` }} />
                        <h5 className="text-[12px] font-semibold mb-1" style={{ color: 'var(--fl-text-primary)' }}>{rec.title}</h5>
                        <p className="text-[11px] leading-relaxed mb-1" style={{ color: 'var(--fl-text-secondary)' }}>{rec.description}</p>
                        <p className="text-[11px] font-medium" style={{ color: selectedConfig.color }}>{rec.benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => { setShowCompare(true); setMobilePanel('none'); }} className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                    <GitCompare className="w-3.5 h-3.5" style={{ color: 'var(--fl-accent)' }} />
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--fl-text-primary)' }}>Compare</span>
                  </button>
                  {onTabChange && (
                    <button onClick={() => { onTabChange('biomarkers'); setMobilePanel('none'); }} className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
                      <BarChart3 className="w-3.5 h-3.5" style={{ color: 'var(--fl-accent)' }} />
                      <span className="text-[11px] font-semibold" style={{ color: 'var(--fl-text-primary)' }}>Biomarkers</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
