import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronDown,
  Activity,
  Heart,
  Flame,
  Droplets,
  Shield,
  Zap,
  X,
  Plus,
  BarChart3,
  ArrowRight,
  Calendar,
  Layers,
  Eye,
  EyeOff,
  SlidersHorizontal,
  Stethoscope,
  Scan,
  Pill,
  Dumbbell,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Types ─── */
interface HistoryPoint {
  date: string | Date;
  value: number;
}

interface TrendBiomarker {
  name: string;
  category: string;
  currentValue: number;
  unit: string;
  refMin: number | null;
  refMax: number | null;
  status: string;
  trend: "up" | "down" | "stable";
  history: HistoryPoint[];
  notes: string | null;
}

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  category: string;
  status?: string;
  result?: string;
  resultStatus?: string;
}

interface BiomarkerTrendsProps {
  dbBiomarkers: TrendBiomarker[];
  timelineEvents?: TimelineEvent[];
  goals?: { biomarkerName: string; targetValue: number }[];
}

/* ─── Category config ─── */
const CATEGORY_CONFIG: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  metabolic: { label: "Metabolic", icon: Flame, color: "#F59E0B" },
  cardiovascular: { label: "Cardiovascular", icon: Heart, color: "#EF4444" },
  inflammatory: { label: "Inflammatory", icon: Shield, color: "#9A7B4F" },
  hormonal: { label: "Hormonal", icon: Zap, color: "#06B6D4" },
  nutritional: { label: "Liver & Kidney", icon: Droplets, color: "#10B981" },
  immune: { label: "Longevity", icon: Activity, color: "#EC4899" },
};

/* ─── Timeline event category config ─── */
const EVENT_CATEGORY_CONFIG: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  screening: { icon: Scan, color: "#B8860B", label: "Screening" },
  assessment: { icon: Stethoscope, color: "#10B981", label: "Assessment" },
  milestone: { icon: TrendingUp, color: "#F59E0B", label: "Milestone" },
  intervention: { icon: Pill, color: "#9A7B4F", label: "Intervention" },
  lab: { icon: FlaskConical, color: "#EC4899", label: "Lab Work" },
  lifestyle: { icon: Dumbbell, color: "#06B6D4", label: "Lifestyle" },
};

/* ─── Chart colors for multi-line comparison ─── */
const CHART_COLORS = [
  "#B8860B", // cyan
  "#10B981", // emerald
  "#F59E0B", // amber
  "#EC4899", // pink
  "#9A7B4F", // violet
  "#EF4444", // red
];

/* ─── Format date for display ─── */
function formatDate(d: string | Date): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatDateShort(d: string | Date): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/* ─── Date Range Slider ─── */
function DateRangeSlider({
  dates,
  startIdx,
  endIdx,
  onRangeChange,
}: {
  dates: string[];
  startIdx: number;
  endIdx: number;
  onRangeChange: (start: number, end: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<"start" | "end" | null>(null);

  const handleMouseDown = (handle: "start" | "end") => (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(handle);
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const idx = Math.round(pct * (dates.length - 1));

      if (dragging === "start") {
        onRangeChange(Math.min(idx, endIdx - 1), endIdx);
      } else {
        onRangeChange(startIdx, Math.max(idx, startIdx + 1));
      }
    };

    const handleMouseUp = () => setDragging(null);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, dates.length, startIdx, endIdx, onRangeChange]);

  if (dates.length < 2) return null;

  const startPct = (startIdx / (dates.length - 1)) * 100;
  const endPct = (endIdx / (dates.length - 1)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Date Range</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded-md bg-amber-600/10 text-amber-700 font-medium border border-amber-600/20">
            {formatDate(dates[startIdx])}
          </span>
          <ArrowRight className="w-3 h-3 text-gray-600" />
          <span className="px-2 py-0.5 rounded-md bg-amber-600/10 text-amber-700 font-medium border border-amber-600/20">
            {formatDate(dates[endIdx])}
          </span>
        </div>
      </div>

      {/* Slider track */}
      <div className="relative flex flex-col" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        {/* Track area with handles */}
        <div className="relative h-6 flex items-center" ref={trackRef}>
          {/* Background track */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-white/[0.04]" />

          {/* Active range */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full"
            style={{
              left: `${startPct}%`,
              width: `${endPct - startPct}%`,
              background: "linear-gradient(90deg, #B8860B, #06B6D4)",
              boxShadow: "0 0 10px rgba(34,211,238,0.3)",
            }}
          />

          {/* Date tick dots (on the track line, no labels here) */}
          {dates.map((_, i) => {
            const pct = (i / (dates.length - 1)) * 100;
            const isInRange = i >= startIdx && i <= endIdx;
            return (
              <div
                key={i}
                className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all ${isInRange ? "bg-amber-600" : "bg-white/10"}`}
                style={{ left: `${pct}%`, transform: 'translate(-50%, -50%)' }}
              />
            );
          })}

          {/* Start handle */}
          <div
            className="absolute w-5 h-5 rounded-full border-2 border-amber-600 cursor-grab active:cursor-grabbing z-10 hover:scale-110 transition-transform"
            style={{ left: `${startPct}%`, top: '50%', transform: "translate(-50%, -50%)", boxShadow: "0 0 12px rgba(184,134,11,0.3)", background: 'var(--fl-bg-deep)' }}
            onMouseDown={handleMouseDown("start")}
          />

          {/* End handle */}
          <div
            className="absolute w-5 h-5 rounded-full border-2 border-amber-600 cursor-grab active:cursor-grabbing z-10 hover:scale-110 transition-transform"
            style={{ left: `${endPct}%`, top: '50%', transform: "translate(-50%, -50%)", boxShadow: "0 0 12px rgba(184,134,11,0.3)", background: 'var(--fl-bg-deep)' }}
            onMouseDown={handleMouseDown("end")}
          />
        </div>

        {/* Date labels row - below the track, never overlapped by thumbs */}
        <div className="relative h-4 mt-1">
          {dates.map((date, i) => {
            const pct = (i / (dates.length - 1)) * 100;
            const isInRange = i >= startIdx && i <= endIdx;
            // Offset first/last labels to avoid clipping at edges
            const align = i === 0 ? 'left' : i === dates.length - 1 ? 'right' : 'center';
            const transform = align === 'left' ? 'translateX(0)' : align === 'right' ? 'translateX(-100%)' : 'translateX(-50%)';
            return (
              <span
                key={i}
                className={`absolute text-[9px] whitespace-nowrap ${isInRange ? "text-gray-600" : "text-gray-600"}`}
                style={{ left: `${pct}%`, transform }}
              >
                {formatDate(date)}
              </span>
            );
          })}
        </div>
      </div>

      {/* Quick range presets */}
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] text-gray-600 mr-1">Quick:</span>
        {dates.length >= 2 && (
          <button
            className="text-[10px] px-2 py-0.5 rounded-md border border-gray-200 text-gray-600 hover:text-amber-700 hover:border-amber-600/20 transition-colors"
            onClick={() => onRangeChange(dates.length - 2, dates.length - 1)}
          >
            Last 2
          </button>
        )}
        {dates.length >= 3 && (
          <button
            className="text-[10px] px-2 py-0.5 rounded-md border border-gray-200 text-gray-600 hover:text-amber-700 hover:border-amber-600/20 transition-colors"
            onClick={() => onRangeChange(dates.length - 3, dates.length - 1)}
          >
            Last 3
          </button>
        )}
        <button
          className="text-[10px] px-2 py-0.5 rounded-md border border-gray-200 text-gray-600 hover:text-amber-700 hover:border-amber-600/20 transition-colors"
          onClick={() => onRangeChange(0, dates.length - 1)}
        >
          All Time
        </button>
      </div>
    </div>
  );
}

/* ─── SVG Line Chart with Event Overlays ─── */
function TrendChart({
  biomarkers,
  events,
  showEvents,
  goals = [],
  width = 800,
  height = 360,
}: {
  biomarkers: { name: string; color: string; history: { date: string; value: number }[]; refMin: number | null; refMax: number | null; unit: string }[];
  events?: { date: string; title: string; category: string; color: string; icon: string }[];
  showEvents: boolean;
  goals?: { biomarkerName: string; targetValue: number }[];
  width?: number;
  height?: number;
}) {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const padding = { top: 24, right: 30, bottom: 55, left: 60 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  // Collect all dates across all biomarkers
  const allDates = useMemo(() => {
    const dateSet = new Set<string>();
    biomarkers.forEach((bm) => bm.history.forEach((h) => dateSet.add(h.date)));
    return Array.from(dateSet).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  }, [biomarkers]);

  // Normalize values to 0-100 scale for each biomarker (since units differ)
  const normalizedData = useMemo(() => {
    return biomarkers.map((bm) => {
      const values = bm.history.map((h) => h.value);
      const min = Math.min(...values) * 0.9;
      const max = Math.max(...values) * 1.1;
      const range = max - min || 1;

      return {
        ...bm,
        normalizedHistory: bm.history.map((h) => ({
          date: h.date,
          value: h.value,
          normalized: ((h.value - min) / range) * 100,
        })),
        min,
        max,
        range,
      };
    });
  }, [biomarkers]);

  // Map events to chart X positions
  const eventPositions = useMemo(() => {
    if (!events || !showEvents || allDates.length < 2) return [];

    const dateRange = {
      start: new Date(allDates[0]).getTime(),
      end: new Date(allDates[allDates.length - 1]).getTime(),
    };
    const totalRange = dateRange.end - dateRange.start;

    return events
      .map((evt) => {
        const evtTime = new Date(evt.date).getTime();
        if (evtTime < dateRange.start || evtTime > dateRange.end) return null;
        const pct = totalRange > 0 ? (evtTime - dateRange.start) / totalRange : 0;
        const x = padding.left + pct * chartW;
        return { ...evt, x };
      })
      .filter(Boolean) as (typeof events[0] & { x: number })[];
  }, [events, showEvents, allDates, chartW, padding.left]);

  if (allDates.length < 2 || biomarkers.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-600 text-sm">
        Select biomarkers to compare trends
      </div>
    );
  }

  // If single biomarker, use actual values on Y axis
  const isSingle = biomarkers.length === 1;

  return (
    <svg width={width} height={height} className="w-full" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      <defs>
        {normalizedData.map((bm, i) => (
          <linearGradient key={`grad-${i}`} id={`trend-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={bm.color} stopOpacity="0.15" />
            <stop offset="100%" stopColor={bm.color} stopOpacity="0" />
          </linearGradient>
        ))}
        {/* Glow filter for lines */}
        <filter id="trend-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Event marker glow */}
        <filter id="event-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((pct) => {
        const y = padding.top + chartH - (pct / 100) * chartH;
        return (
          <g key={pct}>
            <line x1={padding.left} y1={y} x2={padding.left + chartW} y2={y} stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray={pct === 0 || pct === 100 ? "0" : "4 4"} />
            {isSingle && normalizedData[0] && (
              <text x={padding.left - 10} y={y + 4} textAnchor="end" fill="rgba(0,0,0,0.4)" fontSize="10" fontFamily="monospace">
                {(normalizedData[0].min + (pct / 100) * normalizedData[0].range).toFixed(1)}
              </text>
            )}
          </g>
        );
      })}

      {/* X axis labels */}
      {allDates.map((date, i) => {
        const x = padding.left + (i / (allDates.length - 1)) * chartW;
        return (
          <g key={date}>
            <line x1={x} y1={padding.top} x2={x} y2={padding.top + chartH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
            <text x={x} y={height - 12} textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="11" fontWeight="500">
              {formatDate(date)}
            </text>
          </g>
        );
      })}

      {/* Reference range band (for single biomarker) */}
      {isSingle && normalizedData[0]?.normalizedHistory && normalizedData[0].refMin !== null && normalizedData[0].refMax !== null && (
        <>
          <rect
            x={padding.left}
            y={padding.top + chartH - ((normalizedData[0].refMax! - normalizedData[0].min) / normalizedData[0].range) * chartH}
            width={chartW}
            height={Math.abs(((normalizedData[0].refMax! - normalizedData[0].refMin!) / normalizedData[0].range) * chartH)}
            fill="rgba(16,185,129,0.05)"
            rx="4"
          />
          <text
            x={padding.left + chartW - 4}
            y={padding.top + chartH - ((normalizedData[0].refMax! - normalizedData[0].min) / normalizedData[0].range) * chartH + 12}
            textAnchor="end"
            fill="rgba(16,185,129,0.3)"
            fontSize="9"
          >
            Optimal Range
          </text>
        </>
      )}

      {/* Event vertical lines */}
      {eventPositions.map((evt, i) => (
        <g key={`event-${i}`} onMouseEnter={() => setHoveredEvent(evt.title)} onMouseLeave={() => setHoveredEvent(null)}>
          <line
            x1={evt.x}
            y1={padding.top}
            x2={evt.x}
            y2={padding.top + chartH}
            stroke={evt.color}
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity={hoveredEvent === evt.title ? 0.8 : 0.3}
          />
          {/* Event marker diamond */}
          <g transform={`translate(${evt.x}, ${padding.top - 2})`}>
            <polygon
              points="0,-7 7,0 0,7 -7,0"
              fill={evt.color}
              opacity={hoveredEvent === evt.title ? 1 : 0.6}
              filter="url(#event-glow)"
              style={{ cursor: "pointer" }}
            />
            <text
              x="0"
              y="-12"
              textAnchor="middle"
              fill={evt.color}
              fontSize="8"
              fontWeight="600"
              opacity={hoveredEvent === evt.title ? 1 : 0}
            >
              {evt.title.length > 25 ? evt.title.slice(0, 25) + "…" : evt.title}
            </text>
          </g>
          {/* Bottom label on hover */}
          {hoveredEvent === evt.title && (
            <g>
              <rect
                x={evt.x - 60}
                y={padding.top + chartH + 4}
                width={120}
                height={20}
                rx={4}
                fill="var(--fl-bg-deep)"
                stroke={evt.color}
                strokeWidth={0.5}
                opacity={0.95}
              />
              <text x={evt.x} y={padding.top + chartH + 17} textAnchor="middle" fill={evt.color} fontSize="8" fontWeight="500">
                {formatDateShort(evt.date)} · {evt.category}
              </text>
            </g>
          )}
        </g>
      ))}

      {/* Goal target lines */}
      {normalizedData.map((bm, bmIdx) => {
        const goal = goals.find(g => g.biomarkerName === bm.name);
        if (!goal) return null;
        const goalNorm = ((goal.targetValue - bm.min) / bm.range) * 100;
        if (goalNorm < 0 || goalNorm > 100) return null;
        const goalY = padding.top + chartH - (goalNorm / 100) * chartH;
        return (
          <g key={`goal-${bmIdx}`}>
            <line
              x1={padding.left}
              y1={goalY}
              x2={padding.left + chartW}
              y2={goalY}
              stroke={bm.color}
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.5"
            />
            <rect x={padding.left + chartW - 52} y={goalY - 10} width={52} height={16} rx={4} fill="var(--fl-bg-deep)" stroke={bm.color} strokeWidth={0.5} opacity={0.9} />
            <text x={padding.left + chartW - 26} y={goalY + 1} textAnchor="middle" fill={bm.color} fontSize="8" fontWeight="700" opacity={0.8}>
              GOAL {goal.targetValue}
            </text>
          </g>
        );
      })}

      {/* Lines and areas */}
      {normalizedData.map((bm, bmIdx) => {
        const points = bm.normalizedHistory.map((h) => {
          const dateIdx = allDates.indexOf(h.date);
          const x = padding.left + (dateIdx / (allDates.length - 1)) * chartW;
          const y = padding.top + chartH - (h.normalized / 100) * chartH;
          return { x, y, value: h.value };
        });

        if (points.length < 2) return null;

        // Create smooth curve path using cardinal spline
        const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
        const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;

        return (
          <g key={bmIdx}>
            {/* Area fill */}
            <path d={areaPath} fill={`url(#trend-grad-${bmIdx})`} />
            {/* Glow line */}
            <path d={linePath} fill="none" stroke={bm.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" filter="url(#trend-glow)" />
            {/* Main line */}
            <path d={linePath} fill="none" stroke={bm.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Data points */}
            {points.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="6" fill="var(--fl-bg-deep)" stroke={bm.color} strokeWidth="2" />
                <circle cx={p.x} cy={p.y} r="3" fill={bm.color} />
                {/* Value label */}
                <text x={p.x} y={p.y - 14} textAnchor="middle" fill={bm.color} fontSize="10" fontWeight="700" fontFamily="monospace">
                  {p.value % 1 === 0 ? p.value : p.value.toFixed(1)}
                </text>
              </g>
            ))}
          </g>
        );
      })}

      {/* Y axis label */}
      {isSingle && normalizedData[0] && (
        <text
          x={14}
          y={padding.top + chartH / 2}
          textAnchor="middle"
          fill="rgba(0,0,0,0.3)"
          fontSize="10"
          transform={`rotate(-90, 14, ${padding.top + chartH / 2})`}
        >
          {normalizedData[0].unit}
        </text>
      )}
    </svg>
  );
}

/* ─── Biomarker Selector Pill ─── */
function BiomarkerPill({
  name,
  color,
  onRemove,
}: {
  name: string;
  color: string;
  onRemove: () => void;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-[1.02]"
      style={{ background: `${color}12`, color, borderColor: `${color}25`, boxShadow: `0 0 8px ${color}10` }}
    >
      <span className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}60` }} />
      {name}
      <button onClick={onRemove} className="ml-0.5 hover:opacity-70 transition-opacity">
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}

/* ─── Change Summary Card ─── */
function ChangeSummary({ biomarker, color }: { biomarker: TrendBiomarker; color: string }) {
  if (biomarker.history.length < 2) return null;

  const first = biomarker.history[0].value;
  const last = biomarker.history[biomarker.history.length - 1].value;
  const changePct = ((last - first) / first) * 100;
  const changeAbs = last - first;

  const higherIsBetter = ["HDL Cholesterol", "Free Testosterone", "DHEA-S", "Vitamin D (25-OH)", "Omega-3 Index", "NAD+ Levels", "Telomere Length", "eGFR", "IGF-1", "Free T3"].includes(biomarker.name);
  const isPositiveChange = higherIsBetter ? changeAbs > 0 : changeAbs < 0;

  const TrendIcon = changeAbs > 0 ? TrendingUp : changeAbs < 0 ? TrendingDown : Minus;

  return (
    <div
      className="relative rounded-xl overflow-hidden p-4 transition-all hover:shadow-lg"
      style={{ background: "linear-gradient(135deg, #0B1120, #0F172A)", border: `1px solid ${color}15` }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5 }} />

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-600 font-medium">{biomarker.name}</span>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
          style={{
            background: isPositiveChange ? "rgba(16,185,129,0.1)" : changePct === 0 ? "rgba(0,0,0,0.04)" : "rgba(245,158,11,0.1)",
            color: isPositiveChange ? "#10B981" : changePct === 0 ? "#6B7280" : "#F59E0B",
            border: `1px solid ${isPositiveChange ? "rgba(16,185,129,0.2)" : changePct === 0 ? "rgba(0,0,0,0.04)" : "rgba(245,158,11,0.2)"}`,
          }}
        >
          {isPositiveChange ? "Improving" : changePct === 0 ? "Stable" : "Monitor"}
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black tabular-nums" style={{ color: 'var(--fl-text-primary)' }}>{last % 1 === 0 ? last : last.toFixed(1)}</span>
            <span className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>{biomarker.unit}</span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <TrendIcon className="w-3 h-3" style={{ color: isPositiveChange ? "#10B981" : "#F59E0B" }} />
            <span className="text-xs font-semibold tabular-nums" style={{ color: isPositiveChange ? "#10B981" : "#F59E0B" }}>
              {changeAbs > 0 ? "+" : ""}{changeAbs % 1 === 0 ? changeAbs : changeAbs.toFixed(1)} ({changePct > 0 ? "+" : ""}{changePct.toFixed(1)}%)
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm tabular-nums" style={{ color: 'var(--fl-text-secondary)' }}>{first % 1 === 0 ? first : first.toFixed(1)}</p>
          <p className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>{formatDate(biomarker.history[0].date)}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Event Legend Item ─── */
function EventLegendItem({ event }: { event: { date: string; title: string; category: string; color: string } }) {
  const config = EVENT_CATEGORY_CONFIG[event.category];
  const Icon = config?.icon || Calendar;
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
      <div className="w-1.5 h-1.5 rotate-45" style={{ background: event.color }} />
      <Icon className="w-3 h-3" style={{ color: event.color }} />
      <span className="text-[10px] truncate max-w-[140px]" style={{ color: 'var(--fl-text-secondary)' }}>{event.title}</span>
      <span className="text-[9px] ml-auto" style={{ color: 'var(--fl-text-muted)' }}>{formatDateShort(event.date)}</span>
    </div>
  );
}

/* ─── Main Component ─── */
export function BiomarkerTrends({ dbBiomarkers, timelineEvents = [], goals = [] }: BiomarkerTrendsProps) {
  const [selectedBiomarkers, setSelectedBiomarkers] = useState<string[]>([]);
  const [showPicker, setShowPicker] = useState(false);
  const [pickerSearch, setPickerSearch] = useState("");
  const [pickerCategory, setPickerCategory] = useState<string>("all");
  const [showEvents, setShowEvents] = useState(true);

  // Collect all unique assessment dates across biomarkers
  const allAssessmentDates = useMemo(() => {
    const dateSet = new Set<string>();
    for (const bm of dbBiomarkers) {
      for (const h of bm.history) {
        const d = typeof h.date === "string" ? h.date : h.date.toISOString();
        dateSet.add(d);
      }
    }
    return Array.from(dateSet).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  }, [dbBiomarkers]);

  const [dateStartIdx, setDateStartIdx] = useState(0);
  const [dateEndIdx, setDateEndIdx] = useState(allAssessmentDates.length - 1);

  // Update end idx when dates change
  useEffect(() => {
    setDateEndIdx(allAssessmentDates.length - 1);
  }, [allAssessmentDates.length]);

  const handleRangeChange = useCallback((start: number, end: number) => {
    setDateStartIdx(Math.max(0, start));
    setDateEndIdx(Math.min(allAssessmentDates.length - 1, end));
  }, [allAssessmentDates.length]);

  // Filter biomarker history by date range
  const filteredBiomarkers = useMemo(() => {
    if (allAssessmentDates.length < 2) return dbBiomarkers;
    const startDate = new Date(allAssessmentDates[dateStartIdx]).getTime();
    const endDate = new Date(allAssessmentDates[dateEndIdx]).getTime();

    return dbBiomarkers.map((bm) => ({
      ...bm,
      history: bm.history.filter((h) => {
        const t = new Date(typeof h.date === "string" ? h.date : h.date.toISOString()).getTime();
        return t >= startDate && t <= endDate;
      }),
    }));
  }, [dbBiomarkers, allAssessmentDates, dateStartIdx, dateEndIdx]);

  // Group biomarkers by category
  const categorized = useMemo(() => {
    const map = new Map<string, TrendBiomarker[]>();
    for (const bm of dbBiomarkers) {
      const existing = map.get(bm.category) || [];
      existing.push(bm);
      map.set(bm.category, existing);
    }
    return map;
  }, [dbBiomarkers]);

  const selectedData = useMemo(() => {
    return selectedBiomarkers
      .map((name) => filteredBiomarkers.find((bm) => bm.name === name))
      .filter(Boolean) as TrendBiomarker[];
  }, [selectedBiomarkers, filteredBiomarkers]);

  const chartData = useMemo(() => {
    return selectedData.map((bm, i) => ({
      name: bm.name,
      color: CHART_COLORS[i % CHART_COLORS.length],
      history: bm.history.map((h) => ({
        date: formatDate(h.date),
        value: h.value,
      })),
      refMin: bm.refMin,
      refMax: bm.refMax,
      unit: bm.unit,
    }));
  }, [selectedData]);

  // Map timeline events for chart overlay
  const chartEvents = useMemo(() => {
    if (!showEvents || timelineEvents.length === 0) return [];
    return timelineEvents.map((evt) => {
      const config = EVENT_CATEGORY_CONFIG[evt.category];
      return {
        date: evt.date,
        title: evt.title,
        category: config?.label || evt.category,
        color: config?.color || "#6B7280",
        icon: evt.category,
      };
    });
  }, [timelineEvents, showEvents]);

  // Filter events to date range
  const filteredEvents = useMemo(() => {
    if (allAssessmentDates.length < 2) return chartEvents;
    const startDate = new Date(allAssessmentDates[dateStartIdx]).getTime();
    const endDate = new Date(allAssessmentDates[dateEndIdx]).getTime();
    return chartEvents.filter((evt) => {
      const t = new Date(evt.date).getTime();
      return t >= startDate - 86400000 * 30 && t <= endDate + 86400000 * 30; // ±30 days buffer
    });
  }, [chartEvents, allAssessmentDates, dateStartIdx, dateEndIdx]);

  const toggleBiomarker = useCallback(
    (name: string) => {
      setSelectedBiomarkers((prev) => {
        if (prev.includes(name)) return prev.filter((n) => n !== name);
        if (prev.length >= 6) return prev;
        return [...prev, name];
      });
    },
    []
  );

  // Overall stats
  const improvingCount = filteredBiomarkers.filter((bm) => {
    if (bm.history.length < 2) return false;
    const first = bm.history[0].value;
    const last = bm.history[bm.history.length - 1].value;
    const higherIsBetter = ["HDL Cholesterol", "Free Testosterone", "DHEA-S", "Vitamin D (25-OH)", "Omega-3 Index", "NAD+ Levels", "Telomere Length", "eGFR", "IGF-1", "Free T3"].includes(bm.name);
    return higherIsBetter ? last > first : last < first;
  }).length;

  const optimalCount = dbBiomarkers.filter((bm) => bm.status === "optimal").length;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: 'var(--fl-text-gold)' }}>Longitudinal Analysis</p>
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', color: 'var(--fl-text-primary)' }}>
            <BarChart3 className="w-5 h-5" style={{ color: 'var(--fl-accent)' }} />
            Biomarker Trends
          </h2>
          <p className="text-[13px] mt-1" style={{ color: 'var(--fl-text-muted)' }}>
            Compare biomarker changes over time. Select up to 6 biomarkers and adjust the date range to analyze specific periods.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-card)', backgroundImage: 'var(--fl-card-gradient)' }}>
            <div className="absolute inset-0" style={{ background: 'var(--fl-bg-card)' }} />
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)' }} />
            <div className="relative px-5 py-3 text-center">
              <p className="text-3xl font-black text-emerald-400 tabular-nums" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', textShadow: "0 0 15px rgba(16,185,129,0.2)" }}>
                {improvingCount}
              </p>
              <p className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: 'var(--fl-text-muted)' }}>Improving</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-card)', backgroundImage: 'var(--fl-card-gradient)' }}>
            <div className="absolute inset-0" style={{ background: 'var(--fl-bg-card)' }} />
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)' }} />
            <div className="relative px-5 py-3 text-center">
              <p className="text-3xl font-black text-amber-700 tabular-nums" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', textShadow: "0 0 15px rgba(34,211,238,0.2)" }}>
                {optimalCount}/{dbBiomarkers.length}
              </p>
              <p className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: 'var(--fl-text-muted)' }}>Optimal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Date Range Slider */}
      {allAssessmentDates.length >= 2 && (
        <div className="rounded-xl p-4" style={{ background: 'var(--fl-bg-card)', backgroundImage: 'var(--fl-card-gradient)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-card)' }}>
          <DateRangeSlider
            dates={allAssessmentDates}
            startIdx={dateStartIdx}
            endIdx={dateEndIdx}
            onRangeChange={handleRangeChange}
          />
        </div>
      )}

      {/* Selected biomarkers + Add button + Event toggle */}
      <div className="flex items-center gap-2 flex-wrap">
        {selectedBiomarkers.map((name, i) => (
          <BiomarkerPill key={name} name={name} color={CHART_COLORS[i % CHART_COLORS.length]} onRemove={() => toggleBiomarker(name)} />
        ))}
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs rounded-full gap-1 border-dashed border-amber-600/30 text-amber-700 hover:bg-amber-600/10"
          onClick={() => setShowPicker(!showPicker)}
        >
          <Plus className="w-3 h-3" />
          {selectedBiomarkers.length === 0 ? "Select Biomarkers" : "Add More"}
        </Button>
        {selectedBiomarkers.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs rounded-full gap-1 border-gray-600 text-gray-600 hover:bg-white/5"
            onClick={() => setSelectedBiomarkers([])}
          >
            Clear All
          </Button>
        )}

        {/* Event overlay toggle */}
        {timelineEvents.length > 0 && selectedBiomarkers.length > 0 && (
          <div className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className={`h-7 text-xs rounded-full gap-1.5 transition-all ${
                showEvents
                  ? "border-amber-600/30 text-amber-700 bg-amber-600/10"
                  : "border-gray-200 text-gray-600"
              }`}
              onClick={() => setShowEvents(!showEvents)}
            >
              {showEvents ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <Layers className="w-3 h-3" />
              Health Events
            </Button>
          </div>
        )}
      </div>

      {/* Biomarker Picker */}
      {showPicker && (
        <div className="rounded-2xl border border-amber-600/10 p-5 space-y-4" style={{ background: 'var(--fl-bg-card)' }}>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search biomarkers..."
              value={pickerSearch}
              onChange={(e) => setPickerSearch(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg text-sm placeholder-gray-600 focus:outline-none focus:border-amber-600/30 focus:ring-1 focus:ring-amber-600/15 transition-all"
              style={{ background: 'var(--fl-bg-deep)', border: '1px solid var(--fl-border)', color: 'var(--fl-text-primary)' }}
            />
            <div className="flex items-center gap-1 flex-wrap">
              <Button
                variant="outline"
                size="sm"
                className={`h-7 text-xs rounded-lg ${pickerCategory === "all" ? "bg-amber-600/15 text-amber-700 border-amber-600/25" : "border-gray-200 text-gray-600"}`}
                onClick={() => setPickerCategory("all")}
              >
                All
              </Button>
              {Array.from(categorized.keys()).map((cat) => {
                const config = CATEGORY_CONFIG[cat];
                if (!config) return null;
                const Icon = config.icon;
                return (
                  <Button
                    key={cat}
                    variant="outline"
                    size="sm"
                    className={`h-7 text-xs rounded-lg gap-1 ${pickerCategory === cat ? "" : "border-gray-200 text-gray-600"}`}
                    style={pickerCategory === cat ? { background: `${config.color}15`, color: config.color, borderColor: `${config.color}30` } : undefined}
                    onClick={() => setPickerCategory(cat)}
                  >
                    <Icon className="w-3 h-3" />
                    {config.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-60 overflow-y-auto">
            {dbBiomarkers
              .filter((bm) => {
                const matchesSearch = !pickerSearch || bm.name.toLowerCase().includes(pickerSearch.toLowerCase());
                const matchesCat = pickerCategory === "all" || bm.category === pickerCategory;
                return matchesSearch && matchesCat;
              })
              .map((bm) => {
                const isSelected = selectedBiomarkers.includes(bm.name);
                const config = CATEGORY_CONFIG[bm.category];
                return (
                  <button
                    key={bm.name}
                    onClick={() => toggleBiomarker(bm.name)}
                    disabled={!isSelected && selectedBiomarkers.length >= 6}
                    className={`text-left px-3 py-2.5 rounded-lg border transition-all duration-200 ${
                      isSelected
                        ? "border-amber-600/25 bg-amber-600/8"
                        : "border-gray-100 hover:border-white/10 hover:bg-white/[0.03] disabled:opacity-30 disabled:cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium ${isSelected ? "text-cyan-300" : "text-gray-900"}`}>{bm.name}</span>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-amber-600" style={{ boxShadow: "0 0 6px rgba(34,211,238,0.6)" }} />}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-gray-600">{bm.currentValue}{bm.unit ? ` ${bm.unit}` : ""}</span>
                      <span className="text-[10px]" style={{ color: config?.color || "#6B7280" }}>
                        {config?.label || bm.category}
                      </span>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      )}

      {/* Chart Area */}
      {selectedBiomarkers.length > 0 ? (
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-elevated)' }}>
          <div className="h-[1px] w-full" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(34,211,238,0.5), transparent 90%)' }} />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-bold tracking-tight" style={{ color: 'var(--fl-text-primary)' }}>Trend Comparison</h3>
              {/* Legend */}
              <div className="flex items-center gap-4">
                {chartData.map((bm) => (
                  <div key={bm.name} className="flex items-center gap-1.5">
                    <div className="w-3 h-[2px] rounded-full" style={{ background: bm.color }} />
                    <span className="text-[10px] text-gray-600">{bm.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <TrendChart biomarkers={chartData} events={filteredEvents} showEvents={showEvents} goals={goals} />

            {/* Event legend below chart */}
            {showEvents && filteredEvents.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-3.5 h-3.5 text-amber-700" />
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold">Health Events in Range</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                  {filteredEvents.map((evt, i) => (
                    <EventLegendItem key={i} event={evt} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed p-12 text-center" style={{ borderColor: 'var(--fl-border)', background: 'var(--fl-bg-card)', boxShadow: 'var(--fl-shadow-card)' }}>
          <BarChart3 className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--fl-text-muted)' }} />
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--fl-text-secondary)' }}>Select Biomarkers to Compare</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--fl-text-muted)' }}>
            Click "Select Biomarkers" above to pick up to 6 biomarkers and visualize their trends over time.
          </p>
          {/* Quick presets */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              className="text-xs rounded-full gap-1 border-amber-600/20 text-amber-700 hover:bg-amber-600/10"
              onClick={() => setSelectedBiomarkers(["LDL Cholesterol", "HDL Cholesterol", "Triglycerides"])}
            >
              <Heart className="w-3 h-3" />
              Lipid Panel
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs rounded-full gap-1 border-amber-500/20 text-amber-400 hover:bg-amber-500/10"
              onClick={() => setSelectedBiomarkers(["Fasting Glucose", "HbA1c", "Fasting Insulin", "HOMA-IR"])}
            >
              <Flame className="w-3 h-3" />
              Metabolic Health
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs rounded-full gap-1 border-amber-600/20 text-amber-700 hover:bg-amber-600/10"
              onClick={() => setSelectedBiomarkers(["IL-6", "hs-CRP", "TNF-alpha", "Homocysteine"])}
            >
              <Shield className="w-3 h-3" />
              Inflammation
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs rounded-full gap-1 border-pink-500/20 text-pink-400 hover:bg-pink-500/10"
              onClick={() => setSelectedBiomarkers(["Vitamin D (25-OH)", "NAD+ Levels", "Telomere Length", "GlycanAge"])}
            >
              <Activity className="w-3 h-3" />
              Longevity
            </Button>
          </div>
        </div>
      )}

      {/* Change Summary Cards */}
      {selectedData.length > 0 && (
        <div>
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--fl-text-primary)' }}>
            <ArrowRight className="w-4 h-4 text-amber-700" />
            Change Summary
            <span className="text-[10px] text-gray-600 font-normal ml-1">
              ({formatDate(allAssessmentDates[dateStartIdx])} → {formatDate(allAssessmentDates[dateEndIdx])})
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {selectedData.map((bm, i) => (
              <ChangeSummary key={bm.name} biomarker={bm} color={CHART_COLORS[i % CHART_COLORS.length]} />
            ))}
          </div>
        </div>
      )}

      {/* Quick Overview: All biomarkers with trend indicators */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-elevated)' }}>
        <div className="h-[1px] w-full" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(16,185,129,0.5), transparent 90%)' }} />
        <div className="px-5 py-4">
          <h3 className="text-[14px] font-bold tracking-tight mb-4" style={{ color: 'var(--fl-text-primary)' }}>All Biomarker Trends at a Glance</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {filteredBiomarkers.map((bm) => {
              const config = CATEGORY_CONFIG[bm.category];
              const first = bm.history.length > 0 ? bm.history[0].value : bm.currentValue;
              const changePct = first !== 0 ? ((bm.currentValue - first) / first) * 100 : 0;
              const higherIsBetter = ["HDL Cholesterol", "Free Testosterone", "DHEA-S", "Vitamin D (25-OH)", "Omega-3 Index", "NAD+ Levels", "Telomere Length", "eGFR", "IGF-1", "Free T3"].includes(bm.name);
              const isPositive = higherIsBetter ? changePct > 0 : changePct < 0;
              const TrendIcon = changePct > 2 ? TrendingUp : changePct < -2 ? TrendingDown : Minus;
              const isSelected = selectedBiomarkers.includes(bm.name);

              return (
                <button
                  key={bm.name}
                  onClick={() => toggleBiomarker(bm.name)}
                  className={`text-left px-3 py-2.5 rounded-lg border transition-all duration-200 ${
                    isSelected
                      ? "border-amber-600/25 bg-amber-600/8 shadow-sm"
                      : "border-gray-100 hover:border-white/10 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium truncate" style={{ color: 'var(--fl-text-primary)' }}>{bm.name}</span>                   <TrendIcon
                      className="w-3 h-3 flex-shrink-0"
                      style={{ color: isPositive ? "#10B981" : Math.abs(changePct) < 2 ? "#6B7280" : "#F59E0B" }}
                    />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold tabular-nums" style={{ fontFamily: "'Space Mono', monospace", color: 'var(--fl-text-primary)' }}>
                      {bm.currentValue % 1 === 0 ? bm.currentValue : bm.currentValue.toFixed(1)}
                    </span>
                    <span className="text-[9px]" style={{ color: 'var(--fl-text-muted)' }}>{bm.unit}</span>
                    <span
                      className="text-[9px] font-medium ml-auto tabular-nums"
                      style={{ color: isPositive ? "#10B981" : Math.abs(changePct) < 2 ? "#6B7280" : "#F59E0B" }}
                    >
                      {changePct > 0 ? "+" : ""}{changePct.toFixed(0)}%
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
