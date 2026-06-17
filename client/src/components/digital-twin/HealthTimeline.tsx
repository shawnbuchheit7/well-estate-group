import { useState, useMemo, useRef, useEffect } from "react";
import {
  Heart,
  Brain,
  Wind,
  Dumbbell,
  Pill,
  Droplets,
  ShieldCheck,
  Activity,
  Scan,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Stethoscope,
  Syringe,
  Dna,
  FlaskConical,
  ChevronDown,
  ChevronUp,
  Filter,
  Clock,
  Sparkles,
  ArrowRight,
  X,
} from "lucide-react";

/* ─── Types ─── */
interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: "screening" | "assessment" | "milestone" | "intervention" | "lab" | "lifestyle";
  organ?: string;
  status?: "completed" | "upcoming" | "in_progress";
  result?: string;
  resultStatus?: "positive" | "neutral" | "attention";
  details?: string[];
}

/* ─── Demo Timeline Data ─── */
const DEMO_TIMELINE: TimelineEvent[] = [
  {
    id: "1",
    date: "2026-01-15",
    title: "Initial Comprehensive Health Assessment",
    description: "Full Well Estate Group executive health evaluation including 150+ biomarkers, advanced cardiac imaging, and cognitive testing.",
    category: "assessment",
    status: "completed",
    result: "Health Score: 88%",
    resultStatus: "positive",
    details: [
      "Biological age calculated at 37 (chronological: 40)",
      "150+ biomarkers analyzed — 142 in optimal range",
      "Cardiovascular risk: Low",
      "Metabolic panel: All within normal limits",
    ],
  },
  {
    id: "2",
    date: "2026-01-15",
    title: "Full-Body MRI Cancer Screening",
    description: "AI-enhanced full-body MRI scan covering 500+ conditions including solid tumors, aneurysms, and organ abnormalities.",
    category: "screening",
    organ: "Full Body",
    status: "completed",
    result: "Clear — No Abnormalities Detected",
    resultStatus: "positive",
    details: [
      "Brain: No masses, lesions, or structural abnormalities",
      "Chest: Lungs clear, no nodules detected",
      "Abdomen: Liver, kidneys, pancreas all normal",
      "Pelvis: No concerning findings",
      "Spine: Mild degenerative changes (age-appropriate)",
    ],
  },
  {
    id: "3",
    date: "2026-01-16",
    title: "Coronary CT Angiography (CCTA)",
    description: "Advanced cardiac imaging to assess coronary artery health and detect early plaque buildup.",
    category: "screening",
    organ: "Heart",
    status: "completed",
    result: "Calcium Score: 0 — Excellent",
    resultStatus: "positive",
    details: [
      "No coronary artery calcification detected",
      "All coronary arteries patent with no stenosis",
      "Ejection fraction: 62% (normal)",
      "No pericardial effusion",
    ],
  },
  {
    id: "4",
    date: "2026-01-17",
    title: "GRAIL Galleri Multi-Cancer Blood Test",
    description: "Liquid biopsy screening for 50+ cancer types through a simple blood draw, detecting cancer signals before symptoms appear.",
    category: "screening",
    status: "completed",
    result: "No Cancer Signal Detected",
    resultStatus: "positive",
    details: [
      "Screened for 50+ cancer types via cell-free DNA analysis",
      "No methylation patterns associated with cancer detected",
      "Recommended: Repeat annually",
    ],
  },
  {
    id: "5",
    date: "2026-01-20",
    title: "Neurocognitive Assessment",
    description: "Comprehensive brain health evaluation including cognitive testing, brain MRI volumetrics, and neurotransmitter analysis.",
    category: "assessment",
    organ: "Brain",
    status: "completed",
    result: "Brain Age: 39 — Above Average",
    resultStatus: "positive",
    details: [
      "Cognitive performance: 92nd percentile for age group",
      "Brain volume: Within normal range, no atrophy",
      "Memory recall: Excellent",
      "Processing speed: Above average",
    ],
  },
  {
    id: "6",
    date: "2026-01-22",
    title: "Advanced Metabolic Panel & Gut Microbiome",
    description: "Deep metabolic analysis including insulin sensitivity, inflammatory markers, and comprehensive gut microbiome sequencing.",
    category: "lab",
    organ: "Liver",
    status: "completed",
    result: "Metabolic Health: Optimal",
    resultStatus: "positive",
    details: [
      "Fasting glucose: 88 mg/dL (optimal)",
      "HbA1c: 5.1% (excellent)",
      "hsCRP: 0.4 mg/L (low inflammation)",
      "Liver enzymes: ALT 22, AST 19 (normal)",
      "Gut diversity score: 78th percentile",
    ],
  },
  {
    id: "7",
    date: "2026-02-01",
    title: "Personalized Longevity Protocol Initiated",
    description: "Based on assessment results, a customized supplement and lifestyle protocol was designed to optimize healthspan.",
    category: "intervention",
    status: "completed",
    result: "Protocol Active",
    resultStatus: "neutral",
    details: [
      "CoQ10 supplementation (200mg/day) for cardiac support",
      "Omega-3 (2g EPA/DHA) for inflammation management",
      "Vitamin D3+K2 optimization protocol",
      "Personalized exercise prescription: 4x/week strength + 3x cardio",
      "Sleep optimization protocol with magnesium glycinate",
    ],
  },
  {
    id: "8",
    date: "2026-02-05",
    title: "Kidney Function Deep Dive",
    description: "Specialized renal assessment including cystatin C, microalbumin, and advanced kidney biomarkers.",
    category: "assessment",
    organ: "Kidneys",
    status: "completed",
    result: "eGFR: >90 mL/min — Normal",
    resultStatus: "positive",
    details: [
      "Cystatin C: 0.82 mg/L (optimal)",
      "Microalbumin: <10 mg/L (normal)",
      "BUN/Creatinine ratio: Normal",
      "Kidney age: 38 years",
    ],
  },
  {
    id: "9",
    date: "2026-02-10",
    title: "Pulmonary Function Testing",
    description: "Comprehensive lung capacity and function assessment including spirometry and DLCO.",
    category: "assessment",
    organ: "Lungs",
    status: "completed",
    result: "Lung Age: 40 — On Track",
    resultStatus: "positive",
    details: [
      "FEV1: 102% predicted (excellent)",
      "FVC: 98% predicted (normal)",
      "DLCO: Normal gas exchange",
      "No evidence of obstructive or restrictive disease",
    ],
  },
  {
    id: "10",
    date: "2026-04-15",
    title: "3-Month Progress Review",
    description: "Follow-up assessment to measure the impact of the longevity protocol on key biomarkers.",
    category: "milestone",
    status: "upcoming",
    details: [
      "Re-test inflammatory markers (hsCRP, IL-6)",
      "Repeat metabolic panel",
      "Body composition analysis (DEXA scan)",
      "Cardiovascular fitness assessment (VO2 max)",
    ],
  },
  {
    id: "11",
    date: "2026-07-15",
    title: "Semi-Annual Full-Body MRI",
    description: "Follow-up cancer screening MRI to monitor for any new findings and track existing conditions.",
    category: "screening",
    organ: "Full Body",
    status: "upcoming",
    details: [
      "Full-body MRI with AI comparison to baseline",
      "Track any interval changes",
      "Updated cancer risk assessment",
    ],
  },
  {
    id: "12",
    date: "2027-01-15",
    title: "Annual Comprehensive Re-Assessment",
    description: "Full annual health evaluation to update all organ ages, biomarkers, and health score.",
    category: "assessment",
    status: "upcoming",
    details: [
      "Complete 150+ biomarker panel",
      "All organ age recalculations",
      "Updated longevity protocol",
      "Annual Galleri cancer screening",
    ],
  },
];

/* ─── Category Config ─── */
const CATEGORY_CONFIG: Record<string, { icon: typeof Heart; color: string; label: string; gradient: string }> = {
  screening: { icon: Scan, color: "#10B981", label: "Screening", gradient: "linear-gradient(135deg, #10B981, #059669)" },
  assessment: { icon: Stethoscope, color: "#3B82F6", label: "Assessment", gradient: "linear-gradient(135deg, #3B82F6, #2563EB)" },
  milestone: { icon: TrendingUp, color: "#F59E0B", label: "Milestone", gradient: "linear-gradient(135deg, #F59E0B, #D97706)" },
  intervention: { icon: Syringe, color: "#9A7B4F", label: "Intervention", gradient: "linear-gradient(135deg, #9A7B4F, #7A5E3A)" },
  lab: { icon: FlaskConical, color: "#EC4899", label: "Lab Results", gradient: "linear-gradient(135deg, #EC4899, #DB2777)" },
  lifestyle: { icon: Activity, color: "#B8860B", label: "Lifestyle", gradient: "linear-gradient(135deg, #B8860B, #8B6508)" },
};

const ORGAN_ICONS: Record<string, typeof Heart> = {
  Heart: Heart,
  Brain: Brain,
  Lungs: Wind,
  Muscle: Dumbbell,
  Liver: Pill,
  Kidneys: Droplets,
  "Full Body": ShieldCheck,
};

/* ─── Result Badge ─── */
function ResultBadge({ result, status }: { result: string; status?: string }) {
  const styles: Record<string, { bg: string; text: string; border: string; icon: typeof CheckCircle2 }> = {
    positive: { bg: "rgba(16,185,129,0.08)", text: "#10B981", border: "rgba(16,185,129,0.25)", icon: CheckCircle2 },
    neutral: { bg: "rgba(184,134,11,0.08)", text: "#B8860B", border: "rgba(184,134,11,0.25)", icon: Sparkles },
    attention: { bg: "rgba(245,158,11,0.08)", text: "#F59E0B", border: "rgba(245,158,11,0.25)", icon: AlertCircle },
  };
  const s = styles[(status as string) || "neutral"] || styles.neutral;
  const Icon = s.icon;
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold"
      style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}
    >
      <Icon className="w-3.5 h-3.5" />
      {result}
    </div>
  );
}

/* ─── Animated Timeline Node ─── */
function TimelineNode({ color, gradient, isCompleted, isUpcoming, isExpanded }: {
  color: string; gradient: string; isCompleted: boolean; isUpcoming: boolean; isExpanded: boolean;
}) {
  return (
    <div className="relative flex-shrink-0 w-12 flex flex-col items-center z-10">
      {/* Outer ring */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isExpanded ? 'scale-110' : ''}`}
        style={{
          background: isUpcoming ? 'transparent' : gradient,
          border: isUpcoming ? `2px dashed ${color}60` : `2px solid ${color}`,
          boxShadow: isExpanded
            ? `0 0 20px ${color}40, 0 0 40px ${color}15`
            : isCompleted
              ? `0 0 12px ${color}25`
              : 'none',
        }}
      >
        {isCompleted && (
          <CheckCircle2 className="w-4.5 h-4.5 text-gray-900" />
        )}
        {isUpcoming && (
          <Clock className="w-4 h-4" style={{ color: `${color}80` }} />
        )}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export function HealthTimeline({ dbTimeline = [] }: { dbTimeline?: Array<{ id: number; eventType: string; eventDate: string | Date; title: string; description?: string | null; relatedOrgan?: string | null }> }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const timelineRef = useRef<HTMLDivElement>(null);

  // Use demo data when no DB data, otherwise merge
  const events = useMemo(() => {
    if (dbTimeline.length > 0) {
      const dbMapped: TimelineEvent[] = dbTimeline.map((e) => ({
        id: `db-${e.id}`,
        date: typeof e.eventDate === "string" ? e.eventDate : e.eventDate.toISOString().split("T")[0],
        title: e.title,
        description: e.description || "",
        category: (e.eventType as TimelineEvent["category"]) || "assessment",
        organ: e.relatedOrgan || undefined,
        status: "completed" as const,
      }));
      return [...dbMapped, ...DEMO_TIMELINE].sort((a, b) => a.date.localeCompare(b.date));
    }
    return DEMO_TIMELINE;
  }, [dbTimeline]);

  const filtered = useMemo(() => {
    if (filterCategory === "all") return events;
    return events.filter((e) => e.category === filterCategory);
  }, [events, filterCategory]);

  const categories = ["all", ...Object.keys(CATEGORY_CONFIG)];

  // Group events by month
  const groupedByMonth = useMemo(() => {
    const groups: { month: string; label: string; events: TimelineEvent[] }[] = [];
    let currentMonth = "";
    for (const event of filtered) {
      const month = event.date.substring(0, 7);
      if (month !== currentMonth) {
        currentMonth = month;
        const d = new Date(event.date + "T00:00:00");
        groups.push({
          month,
          label: d.toLocaleDateString("en-US", { year: "numeric", month: "long" }),
          events: [event],
        });
      } else {
        groups[groups.length - 1].events.push(event);
      }
    }
    return groups;
  }, [filtered]);

  const completedCount = events.filter(e => e.status === "completed").length;
  const upcomingCount = events.filter(e => e.status === "upcoming").length;

  return (
    <div className="max-w-5xl mx-auto">

      {/* ═══ Hero Header ═══ */}
      <div className="mb-8 rounded-2xl p-6 relative overflow-hidden" style={{
        background: 'var(--fl-bg-card)',
        backgroundImage: 'var(--fl-card-gradient)',
        border: '1px solid var(--fl-border)',
        boxShadow: 'var(--fl-shadow-elevated)',
      }}>
        {/* Decorative gradient */}
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(34,211,238,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(16,185,129,0.06) 0%, transparent 60%)',
        }} />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, var(--fl-accent), var(--fl-gold), transparent)' }} />

        <div className="relative flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center relative" style={{
                background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(16,185,129,0.15))',
                border: '1px solid rgba(34,211,238,0.2)',
              }}>
                <div className="absolute inset-0 rounded-xl blur-[8px]" style={{ background: 'rgba(34,211,238,0.08)' }} />
                <Calendar className="w-5 h-5 text-amber-700 relative z-10" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: 'var(--fl-text-gold)' }}>Your Journey</p>
                <h2 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', color: 'var(--fl-text-primary)' }}>
                  Health Journey
                </h2>
                <p className="text-xs" style={{ color: 'var(--fl-text-muted)' }}>
                  Your complete Well Estate Group health optimization timeline
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-3xl font-black text-amber-700 tabular-nums" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', textShadow: '0 0 20px rgba(34,211,238,0.3)' }}>
                {events.length}
              </p>
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--fl-text-muted)' }}>Total</p>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--fl-border)' }} />
            <div className="text-center">
              <p className="text-3xl font-black text-emerald-400 tabular-nums" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', textShadow: '0 0 20px rgba(16,185,129,0.3)' }}>
                {completedCount}
              </p>
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--fl-text-muted)' }}>Done</p>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--fl-border)' }} />
            <div className="text-center">
              <p className="text-3xl font-black text-amber-400 tabular-nums" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', textShadow: '0 0 20px rgba(245,158,11,0.3)' }}>
                {upcomingCount}
              </p>
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: 'var(--fl-text-muted)' }}>Upcoming</p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5 relative">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--fl-text-muted)' }}>Journey Progress</span>
            <span className="text-xs font-bold text-amber-700 tabular-nums" style={{ fontFamily: "'Space Mono', monospace" }}>
              {Math.round((completedCount / events.length) * 100)}%
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--fl-bg-deep)', border: '1px solid var(--fl-border)' }}>
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${(completedCount / events.length) * 100}%`,
                background: 'linear-gradient(90deg, #B8860B, #10B981)',
                boxShadow: '0 0 12px rgba(34,211,238,0.4)',
              }}
            />
          </div>
        </div>
      </div>

      {/* ═══ Category Filters ═══ */}
      <div className="flex flex-wrap gap-2 mb-4 md:mb-6 p-2 md:p-3 rounded-xl overflow-x-auto no-scrollbar" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-card)' }}>
        {categories.map((cat) => {
          const config = CATEGORY_CONFIG[cat];
          const isActive = filterCategory === cat;
          const count = cat === "all" ? events.length : events.filter((e) => e.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                isActive ? "shadow-md" : "hover:opacity-80"
              }`}
              style={isActive ? {
                background: config ? `${config.color}18` : 'rgba(34,211,238,0.12)',
                color: config ? config.color : '#22d3ee',
                border: `1px solid ${config ? config.color : '#22d3ee'}30`,
                boxShadow: `0 0 16px ${config ? config.color : '#22d3ee'}12`,
              } : {
                color: 'var(--fl-text-muted)',
                border: '1px solid transparent',
              }}
            >
              {config ? <config.icon className="w-3.5 h-3.5" /> : <Filter className="w-3.5 h-3.5" />}
              {cat === "all" ? "All Events" : config?.label}
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                isActive ? "bg-white/15" : "bg-white/5"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ═══ Timeline ═══ */}
      <div ref={timelineRef} className="relative">
        {groupedByMonth.map((group, gi) => (
          <div key={group.month} className="mb-8">
            {/* Month Header */}
            <div className="flex items-center gap-4 mb-5 pl-[18px]">
              <div className="w-6 h-6 rounded-full flex items-center justify-center z-10 relative" style={{
                background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))',
                border: '2px solid rgba(34,211,238,0.3)',
              }}>
                <div className="absolute inset-0 rounded-full blur-[6px]" style={{ background: 'rgba(34,211,238,0.15)' }} />
                <div className="w-2 h-2 rounded-full bg-amber-600 relative z-10" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--fl-accent)' }}>
                {group.label}
              </h3>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--fl-accent), transparent)' }} />
              <span className="text-[10px] font-semibold tabular-nums px-2.5 py-1 rounded-full" style={{
                color: 'var(--fl-text-muted)',
                background: 'var(--fl-bg-card)',
                border: '1px solid var(--fl-border)',
              }}>
                {group.events.length} event{group.events.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Events */}
            <div className="space-y-3">
              {group.events.map((event, idx) => {
                const config = CATEGORY_CONFIG[event.category] || CATEGORY_CONFIG.assessment;
                const Icon = config.icon;
                const OrganIcon = event.organ ? ORGAN_ICONS[event.organ] : null;
                const isExpanded = expandedId === event.id;
                const isUpcoming = event.status === "upcoming";
                const isCompleted = event.status === "completed";

                return (
                  <div key={event.id} className="relative flex gap-0">
                    {/* Vertical connector line */}
                    {idx < group.events.length - 1 && (
                      <div
                        className="absolute left-[38px] top-[48px] bottom-[-12px] w-[2px]"
                        style={{
                          background: `linear-gradient(180deg, ${config.color}40, ${config.color}10)`,
                        }}
                      />
                    )}
                    {/* Connect to next group */}
                    {idx === group.events.length - 1 && gi < groupedByMonth.length - 1 && (
                      <div
                        className="absolute left-[38px] top-[48px] bottom-[-44px] w-[2px]"
                        style={{
                          background: `linear-gradient(180deg, ${config.color}30, transparent)`,
                        }}
                      />
                    )}

                    {/* Timeline Node */}
                    <div className="flex-shrink-0 w-[78px] pt-3 flex justify-center">
                      <TimelineNode
                        color={config.color}
                        gradient={config.gradient}
                        isCompleted={isCompleted || false}
                        isUpcoming={isUpcoming || false}
                        isExpanded={isExpanded}
                      />
                    </div>

                    {/* Event Card */}
                    <div
                      className={`flex-1 rounded-xl transition-all duration-300 cursor-pointer group ${
                        isUpcoming ? "opacity-70" : ""
                      }`}
                      onClick={() => setExpandedId(isExpanded ? null : event.id)}
                      style={{
                        background: 'var(--fl-bg-card)',
                        backgroundImage: 'var(--fl-card-gradient)',
                        border: `1px solid ${isExpanded ? `${config.color}30` : 'var(--fl-border)'}`,
                        boxShadow: isExpanded
                          ? `0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px ${config.color}10, 0 0 24px ${config.color}08`
                          : 'var(--fl-shadow-card)',
                      }}
                    >
                      {/* Card top accent line */}
                      {isExpanded && (
                        <div className="h-[2px] rounded-t-xl" style={{ background: config.gradient }} />
                      )}

                      <div className="p-4">
                        {/* Top row: Category badge + Date + Expand icon */}
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="flex items-center gap-2">
                            {/* Category icon badge */}
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center"
                              style={{
                                background: `${config.color}12`,
                                border: `1px solid ${config.color}25`,
                              }}
                            >
                              <Icon className="w-3.5 h-3.5" style={{ color: config.color }} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: config.color }}>
                              {config.label}
                            </span>
                            {OrganIcon && (
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium" style={{
                                background: 'var(--fl-bg-deep)',
                                color: 'var(--fl-text-secondary)',
                                border: '1px solid var(--fl-border)',
                              }}>
                                <OrganIcon className="w-2.5 h-2.5" />
                                {event.organ}
                              </span>
                            )}
                            {isUpcoming && (
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold" style={{
                                background: 'rgba(245,158,11,0.1)',
                                color: '#F59E0B',
                                border: '1px solid rgba(245,158,11,0.25)',
                              }}>
                                <Clock className="w-2.5 h-2.5" />
                                Upcoming
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold tabular-nums" style={{ color: 'var(--fl-text-muted)', fontFamily: "'Space Mono', monospace" }}>
                              {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </span>
                            {event.details && event.details.length > 0 && (
                              <div className="w-6 h-6 rounded-md flex items-center justify-center transition-colors" style={{
                                background: isExpanded ? `${config.color}15` : 'transparent',
                              }}>
                                {isExpanded
                                  ? <ChevronUp className="w-3.5 h-3.5" style={{ color: config.color }} />
                                  : <ChevronDown className="w-3.5 h-3.5" style={{ color: 'var(--fl-text-muted)' }} />
                                }
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="text-sm font-bold mb-1.5 group-hover:text-amber-700 transition-colors leading-snug" style={{ color: 'var(--fl-text-primary)' }}>
                          {event.title}
                        </h4>

                        {/* Description */}
                        <p className={`text-xs leading-relaxed mb-3 ${isExpanded ? '' : 'line-clamp-2'}`} style={{ color: 'var(--fl-text-secondary)' }}>
                          {event.description}
                        </p>

                        {/* Result badge */}
                        {event.result && <ResultBadge result={event.result} status={event.resultStatus} />}

                        {/* Expanded Details */}
                        {isExpanded && event.details && (
                          <div className="mt-4 pt-4" style={{ borderTop: `1px solid var(--fl-border)` }}>
                            <p className="text-[9px] uppercase tracking-widest font-bold mb-3" style={{ color: 'var(--fl-text-muted)' }}>
                              Detailed Findings
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {event.details.map((detail, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2.5 p-2.5 rounded-lg text-xs"
                                  style={{
                                    background: 'var(--fl-bg-deep)',
                                    border: '1px solid var(--fl-border)',
                                    color: 'var(--fl-text-secondary)',
                                  }}
                                >
                                  <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5" style={{
                                    background: `${config.color}15`,
                                  }}>
                                    <CheckCircle2 className="w-2.5 h-2.5" style={{ color: config.color }} />
                                  </div>
                                  <span className="leading-relaxed">{detail}</span>
                                </div>
                              ))}
                            </div>

                            {/* Close button */}
                            <button
                              onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
                              className="mt-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all hover:opacity-80"
                              style={{
                                background: `${config.color}10`,
                                color: config.color,
                                border: `1px solid ${config.color}20`,
                              }}
                            >
                              <X className="w-3 h-3" />
                              Close Details
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ═══ Summary Stats ═══ */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Screenings", value: events.filter((e) => e.category === "screening").length, icon: Scan, color: "#10B981", gradient: "linear-gradient(135deg, #10B981, #059669)" },
          { label: "Assessments", value: events.filter((e) => e.category === "assessment").length, icon: Stethoscope, color: "#3B82F6", gradient: "linear-gradient(135deg, #3B82F6, #2563EB)" },
          { label: "Lab Results", value: events.filter((e) => e.category === "lab").length, icon: FlaskConical, color: "#EC4899", gradient: "linear-gradient(135deg, #EC4899, #DB2777)" },
          { label: "Upcoming", value: events.filter((e) => e.status === "upcoming").length, icon: Calendar, color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #D97706)" },
        ].map((stat, i) => (
          <div key={i} className="rounded-xl p-5 text-center group transition-all duration-300 hover:scale-[1.02]" style={{
            background: 'var(--fl-bg-card)',
            border: '1px solid var(--fl-border)',
            boxShadow: 'var(--fl-shadow-card)',
          }}>
            <div
              className="w-11 h-11 rounded-xl mx-auto mb-3 flex items-center justify-center"
              style={{
                background: `${stat.color}12`,
                border: `1px solid ${stat.color}20`,
              }}
            >
              <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
            </div>
            <p className="text-3xl font-black tabular-nums" style={{
              fontFamily: "'Space Mono', monospace",
              color: stat.color,
              textShadow: `0 0 20px ${stat.color}30`,
            }}>
              {stat.value}
            </p>
            <p className="text-[9px] uppercase tracking-widest font-bold mt-1" style={{ color: 'var(--fl-text-muted)' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
