import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Heart, Brain, Droplet, Wind, Zap, TrendingUp, TrendingDown, Minus, ChevronRight, Shield, AlertTriangle, ChevronDown, Sparkles, Target, Clock } from "lucide-react";
import { useState } from "react";

interface OrganAssessment {
  id: number;
  organName: string;
  organCategory: string;
  healthScore: string;
  status: "excellent" | "good" | "fair" | "attention_needed" | "critical";
  assessmentDate: Date;
  findings?: string | null;
  recommendations?: string | null;
}

interface OrganGridProps {
  organAssessments: OrganAssessment[];
}

const statusConfig = {
  excellent: { label: "Excellent", color: "#34d399", textClass: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30", glow: "shadow-emerald-500/10", ring: "from-emerald-500 to-emerald-400", icon: Shield, emoji: "✓" },
  good: { label: "Good", color: "#4ade80", textClass: "text-green-400", bg: "bg-green-500/15", border: "border-green-500/30", glow: "shadow-green-500/10", ring: "from-green-500 to-green-400", icon: Shield, emoji: "✓" },
  fair: { label: "Fair", color: "#facc15", textClass: "text-yellow-400", bg: "bg-yellow-500/15", border: "border-yellow-500/30", glow: "shadow-yellow-500/10", ring: "from-yellow-500 to-yellow-400", icon: AlertTriangle, emoji: "!" },
  attention_needed: { label: "Attention", color: "#fb923c", textClass: "text-orange-400", bg: "bg-orange-500/15", border: "border-orange-500/30", glow: "shadow-orange-500/10", ring: "from-orange-500 to-orange-400", icon: AlertTriangle, emoji: "!" },
  critical: { label: "Critical", color: "#f87171", textClass: "text-red-400", bg: "bg-red-500/15", border: "border-red-500/30", glow: "shadow-red-500/10", ring: "from-red-500 to-red-400", icon: AlertTriangle, emoji: "!" },
};

const organIcons: Record<string, any> = {
  "Brain": Brain,
  "Heart": Heart,
  "Lungs": Wind,
  "Liver": Activity,
  "Kidneys": Droplet,
  "Muscle": Zap,
  "Stomach": Activity,
  "Pancreas": Zap,
  "Intestines": Activity,
  "Thyroid": Zap,
  "Adrenal Glands": Zap,
};

const organColors: Record<string, string> = {
  "Brain": "#818CF8",
  "Heart": "#EF4444",
  "Lungs": "#3B82F6",
  "Liver": "#10B981",
  "Kidneys": "#EC4899",
  "Muscle": "#F59E0B",
  "Stomach": "#B8860B",
  "Pancreas": "#A855F7",
  "Intestines": "#F97316",
  "Thyroid": "#14B8A6",
  "Adrenal Glands": "#8B5CF6",
};

function getScoreColor(score: number): string {
  if (score >= 85) return "#34d399";
  if (score >= 70) return "#B8860B";
  if (score >= 55) return "#facc15";
  return "#f87171";
}

/* ─── Animated Circular Score Ring ─── */
function ScoreRing({ value, size = 72, strokeWidth = 5, color }: { value: number; size?: number; strokeWidth?: number; color: string }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={strokeWidth}
        />
        {/* Glow layer */}
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={strokeWidth + 2}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" opacity={0.15}
          className="transition-all duration-1000 ease-out"
        />
        {/* Main progress */}
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{ filter: `drop-shadow(0 0 4px ${color}60)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-black tabular-nums leading-none" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', color: 'var(--fl-text-primary)' }}>{value.toFixed(0)}</span>
        <span className="text-[7px] font-semibold mt-0.5 tracking-widest" style={{ color: 'var(--fl-text-muted)' }}>SCORE</span>
      </div>
    </div>
  );
}

/* ─── Mini Sparkline ─── */
function MiniSparkline({ color }: { color: string }) {
  // Generate a simple upward trend sparkline
  const points = [35, 30, 38, 25, 32, 20, 28, 15, 22, 18];
  const width = 60;
  const height = 24;
  const path = points.map((p, i) => `${(i / (points.length - 1)) * width},${p}`).join(" ");

  return (
    <svg width={width} height={height + 4} viewBox={`0 -2 ${width} ${height + 4}`} className="opacity-40">
      <polyline
        points={path}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Organ Detail Card ─── */
function OrganCard({ organ, isExpanded, onToggle }: { organ: OrganAssessment; isExpanded: boolean; onToggle: () => void }) {
  const Icon = organIcons[organ.organName] || Activity;
  const score = parseFloat(organ.healthScore);
  const config = statusConfig[organ.status];
  const organColor = organColors[organ.organName] || "#22d3ee";
  const scoreColor = getScoreColor(score);

  return (
    <div
      onClick={onToggle}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
        isExpanded
          ? "shadow-2xl scale-[1.01]"
          : "hover:scale-[1.005] hover:shadow-xl"
      }`}
      style={{
        border: isExpanded ? `1px solid ${organColor}40` : '1px solid var(--fl-border)',
        boxShadow: isExpanded ? `0 8px 32px ${organColor}15, 0 0 0 1px ${organColor}20` : 'var(--fl-shadow-card)',
      }}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--fl-bg-card)', backgroundImage: 'var(--fl-card-gradient)' }} />
      
      {/* Subtle organ-colored ambient glow */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none" style={{ background: organColor, opacity: isExpanded ? 0.06 : 0.03 }} />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent 10%, ${organColor}80, transparent 90%)`, opacity: isExpanded ? 0.7 : 0.3 }} />

      <div className="relative p-5">
        {/* Header Row */}
        <div className="flex items-start gap-4">
          {/* Organ Icon */}
          <div className="relative flex-shrink-0">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${organColor}20, ${organColor}08)`,
                border: `1px solid ${organColor}25`,
                boxShadow: isExpanded ? `0 0 20px ${organColor}15` : undefined,
              }}
            >
              <Icon className="w-6 h-6" style={{ color: organColor }} />
            </div>
            {/* Status indicator dot */}
            <div
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: 'var(--fl-bg-deep)', background: config.color }}
            >
              <span className="text-[7px] font-bold text-gray-900">{config.emoji}</span>
            </div>
          </div>

          {/* Organ Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[15px] font-bold tracking-tight transition-colors" style={{ color: 'var(--fl-text-primary)' }}>{organ.organName}</h3>
              <span
                className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-semibold"
                style={{ background: `${config.color}15`, color: config.color, border: `1px solid ${config.color}25` }}
              >
                <config.icon className="w-2.5 h-2.5" />
                {config.label}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] capitalize" style={{ color: 'var(--fl-text-muted)' }}>{organ.organCategory}</span>
              <span className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>•</span>
              <span className="text-[10px] flex items-center gap-1" style={{ color: 'var(--fl-text-muted)' }}>
                <Clock className="w-2.5 h-2.5" />
                {new Date(organ.assessmentDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>

          {/* Score Ring */}
          <div className="flex-shrink-0">
            <ScoreRing value={score} size={68} strokeWidth={4} color={scoreColor} />
          </div>
        </div>

        {/* Score Progress Bar */}
          <div className="mt-4 relative">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: 'var(--fl-text-muted)' }}>Health Score</span>
            <span className="text-[10px] font-bold tabular-nums" style={{ color: scoreColor, fontFamily: "'Space Mono', monospace" }}>{score.toFixed(1)}%</span>
          </div>
          <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--fl-border)' }}>
            {/* Optimal zone indicator */}
            <div className="absolute inset-y-0 bg-emerald-500/[0.06] rounded-full" style={{ left: '70%', right: '0%' }} />
            {/* Score bar */}
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${score}%`,
                background: `linear-gradient(90deg, ${scoreColor}40, ${scoreColor})`,
                boxShadow: `0 0 12px ${scoreColor}30, inset 0 1px 0 rgba(184,134,11,0.15)`,
              }}
            />
          </div>
        </div>

        {/* Findings Preview */}
        {organ.findings && !isExpanded && (
          <p className="mt-3 text-xs line-clamp-2 leading-relaxed" style={{ color: 'var(--fl-text-secondary)' }}>{organ.findings}</p>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Findings Section */}
            {organ.findings && (
              <div className="rounded-xl p-4" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-crisp)' }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${organColor}15` }}>
                    <Target className="w-3 h-3" style={{ color: organColor }} />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider font-bold" style={{ color: `${organColor}CC` }}>Key Findings</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--fl-text-secondary)' }}>{organ.findings}</p>
              </div>
            )}

            {/* Recommendations Section */}
            {organ.recommendations && (
              <div className="rounded-xl border p-4" style={{ background: `${organColor}05`, borderColor: `${organColor}15` }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${organColor}15` }}>
                    <Sparkles className="w-3 h-3" style={{ color: organColor }} />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider font-bold" style={{ color: `${organColor}CC` }}>Recommendations</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--fl-text-secondary)' }}>{organ.recommendations}</p>
              </div>
            )}

            {/* Quick Stats Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg p-3 text-center" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-crisp)' }}>
                <p className="text-[8px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--fl-text-muted)' }}>Status</p>
                <p className="text-xs font-bold" style={{ color: config.color }}>{config.label}</p>
              </div>
              <div className="rounded-lg p-3 text-center" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-crisp)' }}>
                <p className="text-[8px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--fl-text-muted)' }}>Category</p>
                <p className="text-xs font-bold capitalize" style={{ color: 'var(--fl-text-primary)' }}>{organ.organCategory}</p>
              </div>
              <div className="rounded-lg p-3 text-center" style={{ background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-crisp)' }}>
                <p className="text-[8px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--fl-text-muted)' }}>Trend</p>
                <div className="flex items-center justify-center gap-1">
                  <MiniSparkline color={organColor} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expand indicator */}
        {(organ.recommendations || organ.findings) && (
          <div className="flex justify-center mt-3">
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-medium transition-all duration-300 ${
              isExpanded ? "text-amber-700" : "text-gray-600 group-hover:text-gray-600"
            }`} style={isExpanded ? { background: `${organColor}10`, color: organColor } : { background: 'var(--fl-bg-card)' }}>
              {isExpanded ? "Show less" : "View details"}
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function OrganGrid({ organAssessments }: OrganGridProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Summary stats
  const avgScore = organAssessments.length > 0
    ? organAssessments.reduce((sum, o) => sum + parseFloat(o.healthScore), 0) / organAssessments.length
    : 0;
  const attentionCount = organAssessments.filter(o => o.status === "attention_needed" || o.status === "critical" || o.status === "fair").length;
  const excellentCount = organAssessments.filter(o => o.status === "excellent" || o.status === "good").length;

  // Sort: attention-needed first, then by score descending
  const sortedOrgans = [...organAssessments].sort((a, b) => {
    const aAttention = a.status === "attention_needed" || a.status === "critical" || a.status === "fair" ? 0 : 1;
    const bAttention = b.status === "attention_needed" || b.status === "critical" || b.status === "fair" ? 0 : 1;
    if (aAttention !== bAttention) return aAttention - bAttention;
    return parseFloat(b.healthScore) - parseFloat(a.healthScore);
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: 'var(--fl-text-gold)' }}>Precision Diagnostics</p>
          <h2 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', color: 'var(--fl-text-primary)' }}>Organ Health Assessment</h2>
          <p className="text-[13px] mt-1" style={{ color: 'var(--fl-text-muted)' }}>Detailed analysis of {organAssessments.length} organ systems from your latest evaluation</p>
        </div>
      </div>

      {/* Summary Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Average Score */}
        <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-card)', backgroundImage: 'var(--fl-card-gradient)' }}>
          <div className="absolute inset-0" style={{ background: 'var(--fl-bg-card)' }} />
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)' }} />
          <div className="relative p-4 flex items-center gap-4">
            <ScoreRing value={avgScore} size={56} strokeWidth={3} color="#22d3ee" />
            <div>
              <p className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: 'var(--fl-text-muted)' }}>Average Score</p>
              <p className="text-xl font-black" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em', color: 'var(--fl-text-primary)' }}>{avgScore.toFixed(1)}<span className="text-sm font-normal ml-0.5" style={{ color: 'var(--fl-text-muted)' }}>%</span></p>
              <p className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>Across all organs</p>
            </div>
          </div>
        </div>

        {/* Healthy Organs */}
        <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-card)', backgroundImage: 'var(--fl-card-gradient)' }}>
          <div className="absolute inset-0" style={{ background: 'var(--fl-bg-card)' }} />
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.3), transparent)' }} />
          <div className="relative p-4 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/15 flex items-center justify-center">
              <Shield className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: 'var(--fl-text-muted)' }}>Healthy Organs</p>
              <p className="text-xl font-black text-emerald-400" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.03em' }}>{excellentCount} <span className="text-sm font-normal" style={{ color: 'var(--fl-text-muted)' }}>of {organAssessments.length}</span></p>
              <p className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>{Math.round((excellentCount / organAssessments.length) * 100)}% in good condition</p>
            </div>
          </div>
        </div>

        {/* Need Attention */}
        <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid var(--fl-border)', boxShadow: 'var(--fl-shadow-card)', backgroundImage: 'var(--fl-card-gradient)' }}>
          <div className="absolute inset-0" style={{ background: 'var(--fl-bg-card)' }} />
          {attentionCount > 0 && <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.3), transparent)' }} />}
          <div className="relative p-4 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${attentionCount > 0 ? 'bg-orange-500/10 border border-orange-500/20' : ''}`} style={attentionCount > 0 ? undefined : { background: 'var(--fl-bg-card)', border: '1px solid var(--fl-border)' }}>
              <AlertTriangle className={`w-7 h-7 ${attentionCount > 0 ? 'text-orange-400' : 'text-gray-600'}`} />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: 'var(--fl-text-muted)' }}>Need Attention</p>
              <p className={`text-xl font-black ${attentionCount > 0 ? 'text-orange-400' : ''}`} style={{ fontFamily: "'Space Mono', monospace", color: attentionCount > 0 ? undefined : 'var(--fl-text-muted)' }}>{attentionCount} <span className="text-sm font-normal" style={{ color: 'var(--fl-text-muted)' }}>organ{attentionCount !== 1 ? "s" : ""}</span></p>
                      <p className="text-[10px]" style={{ color: 'var(--fl-text-muted)' }}>{attentionCount > 0 ? 'Review recommended' : 'All systems nominal'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Organ Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {sortedOrgans.map((organ) => (
          <OrganCard
            key={organ.id}
            organ={organ}
            isExpanded={expandedId === organ.id}
            onToggle={() => setExpandedId(expandedId === organ.id ? null : organ.id)}
          />
        ))}
      </div>
    </div>
  );
}
