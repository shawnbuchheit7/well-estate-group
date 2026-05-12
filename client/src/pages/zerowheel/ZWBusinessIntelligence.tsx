/*
 * ZeroWheel Business Intelligence Dashboard
 * Design: Light premium — white bg, gold (#B8860B) accents, teal highlights
 * Features: Date range picker, rep filter, line-of-business filter, dynamic charts
 * Data: $1,095/unit DTC MSRP. 9 macro LOBs per boss's ZeroWheel GTM framework.
 * Revenue target: $1,095 x 1,000 units = ~$1.095M Year 1
 */

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, ReferenceLine,
} from "recharts";
import {
  TrendingUp, TrendingDown, Users, Target, DollarSign,
  BarChart3, Filter, Calendar, ChevronDown, X, Check,
  ArrowUpRight, ArrowDownRight, Minus, Activity, Award,
  ShoppingCart, Zap, RefreshCw,
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Color Palette ───────────────────────────────────────────────────────────
const GOLD = "#B8860B";
const GOLD_DIM = "#8B7D3C";
const TEAL = "#2DD4BF";
const RED = "#F87171";
const PURPLE = "#A78BFA";
const ORANGE = "#FB923C";
const GREEN = "#4ADE80";
const CARD_BG = "#FFFFFF";
const CARD_BORDER = "rgba(0,0,0,0.10)";

// ─── Filter Options ───────────────────────────────────────────────────────────
const DATE_RANGES = ["MTD", "QTD", "YTD", "Last 30 Days", "Last 90 Days", "Last 12 Months"];
const REPS = ["All Reps", "A. Torres", "M. Chen", "J. Williams", "S. Patel", "R. Davis", "K. Johnson"];
const LINES_OF_BUSINESS = [
  "All LOBs",
  "Private Clubs",
  "Maritime / Cruise",
  "Hospitality",
  "Sports Performance",
  "Senior Living",
  "Healthcare / Rehab",
  "Corporate Wellness",
  "Government / Military",
  "Consumer DTC",
];

// ─── Full Dataset ─────────────────────────────────────────────────────────────
const ALL_DATA = {
  monthly: [
    { month: "Jan", leads: 210, opps: 88, installs: 38, revenue: 41610, budget: 50000, calls: 412, demos: 24 },
    { month: "Feb", leads: 268, opps: 112, installs: 52, revenue: 56940, budget: 65000, calls: 498, demos: 31 },
    { month: "Mar", leads: 341, opps: 143, installs: 71, revenue: 77745, budget: 80000, calls: 621, demos: 44 },
    { month: "Apr", leads: 389, opps: 163, installs: 84, revenue: 91980, budget: 90000, calls: 702, demos: 52 },
    { month: "May", leads: 421, opps: 178, installs: 98, revenue: 107310, budget: 100000, calls: 754, demos: 61 },
    { month: "Jun", leads: 398, opps: 167, installs: 91, revenue: 99645, budget: 110000, calls: 698, demos: 57 },
    { month: "Jul", leads: 312, opps: 131, installs: 72, revenue: 78840, budget: 115000, calls: 541, demos: 45 },
    { month: "Aug", leads: 344, opps: 144, installs: 79, revenue: 86505, budget: 120000, calls: 588, demos: 49 },
    { month: "Sep", leads: 401, opps: 168, installs: 92, revenue: 100740, budget: 125000, calls: 712, demos: 58 },
    { month: "Oct", leads: 456, opps: 191, installs: 105, revenue: 114975, budget: 130000, calls: 801, demos: 66 },
    { month: "Nov", leads: 489, opps: 205, installs: 113, revenue: 123735, budget: 115000, calls: 842, demos: 71 },
    { month: "Dec", leads: 412, opps: 173, installs: 95, revenue: 104025, budget: 110000, calls: 698, demos: 60 },
  ],
  reps: [
    { rep: "A. Torres",   installs: 68, revenue: 74460,  leads: 312, calls: 487, demos: 42, winRate: 0.62, lob: "Private Clubs" },
    { rep: "M. Chen",     installs: 54, revenue: 59130,  leads: 261, calls: 398, demos: 34, winRate: 0.58, lob: "Maritime / Cruise" },
    { rep: "J. Williams", installs: 41, revenue: 44895,  leads: 198, calls: 312, demos: 26, winRate: 0.54, lob: "Hospitality" },
    { rep: "S. Patel",    installs: 33, revenue: 36135,  leads: 159, calls: 248, demos: 21, winRate: 0.51, lob: "Sports Performance" },
    { rep: "R. Davis",    installs: 28, revenue: 30660,  leads: 134, calls: 211, demos: 18, winRate: 0.49, lob: "Healthcare / Rehab" },
    { rep: "K. Johnson",  installs: 21, revenue: 22995,  leads: 102, calls: 162, demos: 14, winRate: 0.45, lob: "Consumer DTC" },
    { rep: "A. Torres",   installs: 12, revenue: 13140,  leads: 58,  calls: 91,  demos: 8,  winRate: 0.55, lob: "Senior Living" },
    { rep: "S. Patel",    installs: 9,  revenue: 9855,   leads: 43,  calls: 68,  demos: 6,  winRate: 0.50, lob: "Corporate Wellness" },
    { rep: "R. Davis",    installs: 6,  revenue: 6570,   leads: 28,  calls: 44,  demos: 4,  winRate: 0.48, lob: "Government / Military" },
  ],
  channels: [
    { name: "Private Clubs",       leads: 458, installs: 93, revenue: 101835, convRate: 0.203, color: GOLD },
    { name: "Maritime / Cruise",   leads: 266, installs: 54, revenue: 59130,  convRate: 0.203, color: TEAL },
    { name: "Hospitality",         leads: 217, installs: 44, revenue: 48180,  convRate: 0.203, color: PURPLE },
    { name: "Sports Performance",  leads: 145, installs: 29, revenue: 31755,  convRate: 0.200, color: ORANGE },
    { name: "Healthcare / Rehab",  leads: 72,  installs: 15, revenue: 16425,  convRate: 0.208, color: GREEN },
    { name: "Consumer DTC",        leads: 50,  installs: 10, revenue: 10950,  convRate: 0.200, color: RED },
    { name: "Senior Living",        leads: 38,  installs: 8,  revenue: 8760,   convRate: 0.211, color: "#60A5FA" },
    { name: "Corporate Wellness",   leads: 29,  installs: 6,  revenue: 6570,   convRate: 0.207, color: "#F472B6" },
    { name: "Government / Military",leads: 18,  installs: 4,  revenue: 4380,   convRate: 0.222, color: "#34D399" },
  ],
  pipeline: [
    { stage: "Discovery",   count: 142, value: 142000 },
    { stage: "Demo",        count: 89,  value: 89000 },
    { stage: "Proposal",    count: 54,  value: 54000 },
    { stage: "Negotiation", count: 31,  value: 31000 },
    { stage: "Contract",    count: 18,  value: 18000 },
  ],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function fmt$(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
}

function pct(n: number) { return `${(n * 100).toFixed(1)}%`; }

// ─── Custom Tooltip ──────────────────────────────────────────────────────────
const DarkTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#B8860B]/40 rounded-xl px-4 py-3 shadow-xl min-w-[140px]">
      <p className="font-mono text-[10px] text-black/55 uppercase tracking-wider mb-2">{label}</p>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color || p.fill }} />
          <span className="font-body text-xs text-black/65">{p.name}:</span>
          <span className="font-mono text-xs text-black font-semibold">
            {typeof p.value === "number" && (p.name?.toLowerCase().includes("rev") || p.name?.toLowerCase().includes("budget"))
              ? fmt$(p.value) : p.value ?? "—"}
          </span>
        </div>
      ))}
    </div>
  );
};

// ─── Shared Components ───────────────────────────────────────────────────────
function DarkCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border p-6 ${className}`} style={{ background: CARD_BG, borderColor: CARD_BORDER }}>
      {children}
    </div>
  );
}

function KPICard({ label, value, sub, trend, trendVal, color = GOLD }: {
  label: string; value: string; sub?: string; trend?: "up" | "down" | "flat"; trendVal?: string; color?: string;
}) {
  const TrendIcon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
  const trendColor = trend === "up" ? GREEN : trend === "down" ? RED : "rgba(0,0,0,0.35)";
  return (
    <DarkCard>
      <p className="font-mono text-[9px] text-black/55 uppercase tracking-wider mb-2">{label}</p>
      <p className="font-display text-3xl font-semibold mb-1" style={{ color }}>{value}</p>
      {sub && <p className="font-body text-xs text-black/55 mb-2">{sub}</p>}
      {trendVal && (
        <div className="flex items-center gap-1">
          <TrendIcon className="w-3 h-3" style={{ color: trendColor }} />
          <span className="font-mono text-[10px]" style={{ color: trendColor }}>{trendVal} vs prior period</span>
        </div>
      )}
    </DarkCard>
  );
}

function ProgressBar({ value, max, color = GOLD }: { value: number; max: number; color?: string }) {
  const pct2 = Math.min(100, (value / max) * 100);
  return (
    <div className="h-1.5 rounded-full bg-black/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct2}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}

// ─── Filter Dropdown ─────────────────────────────────────────────────────────
function FilterDropdown({ label, options, value, onChange, color = GOLD }: {
  label: string; options: string[]; value: string; onChange: (v: string) => void; color?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-mono transition-colors"
        style={{ background: CARD_BG, borderColor: open ? `${color}50` : CARD_BORDER, color: value === options[0] ? "rgba(0,0,0,0.40)" : color }}
      >
        <span className="text-black/55">{label}:</span>
        <span>{value}</span>
        <ChevronDown className="w-3 h-3 ml-1" style={{ color: "rgba(0,0,0,0.40)" }} />
      </button>
      {open && (
        <div className="absolute top-full mt-1 left-0 z-50 rounded-xl border border-[#B8860B]/40 shadow-xl bg-white overflow-hidden min-w-[180px]">
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-mono text-left hover:bg-[#FAFAF8] transition-colors"
              style={{ color: opt === value ? color : "rgba(0,0,0,0.45)" }}
            >
              {opt}
              {opt === value && <Check className="w-3 h-3" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
export default function ZWBusinessIntelligence() {
  const [dateRange, setDateRange] = useState("YTD");
  const [selectedRep, setSelectedRep] = useState("All Reps");
  const [selectedLOB, setSelectedLOB] = useState("All LOBs");

  // Simulate filtered data based on selections
  const multiplier = useMemo(() => {
    const dateMultipliers: Record<string, number> = {
      "MTD": 0.08, "Last 30 Days": 0.10, "QTD": 0.28, "Last 90 Days": 0.32, "YTD": 1, "Last 12 Months": 1.15,
    };
    const repMultipliers: Record<string, number> = {
      "All Reps": 1, "A. Torres": 0.28, "M. Chen": 0.22, "J. Williams": 0.17, "S. Patel": 0.14, "R. Davis": 0.11, "K. Johnson": 0.09,
    };
    const lobMultipliers: Record<string, number> = {
      "All LOBs": 1, "Private Clubs": 0.38, "Maritime / Cruise": 0.22, "Hospitality": 0.18, "Sports Performance": 0.12, "Senior Living": 0.05, "Healthcare / Rehab": 0.06, "Corporate Wellness": 0.04, "Government / Military": 0.03, "Consumer DTC": 0.04,
    };
    return (dateMultipliers[dateRange] ?? 1) * (repMultipliers[selectedRep] ?? 1) * (lobMultipliers[selectedLOB] ?? 1);
  }, [dateRange, selectedRep, selectedLOB]);

  const isFiltered = selectedRep !== "All Reps" || selectedLOB !== "All LOBs" || dateRange !== "YTD";

  const kpis = useMemo(() => ({
    revenue: Math.round(990000 * multiplier),
    installs: Math.round(245 * multiplier),
    leads: Math.round(1208 * multiplier),
    convRate: 0.203,
    pipeline: Math.round(334000 * multiplier),
    avgDeal: 1000,
  }), [multiplier]);

  // Slice monthly data based on date range
  const monthlySlice = useMemo(() => {
    const slices: Record<string, number> = {
      "MTD": 1, "Last 30 Days": 1, "QTD": 3, "Last 90 Days": 3, "YTD": 12, "Last 12 Months": 12,
    };
    const count = slices[dateRange] ?? 12;
    return ALL_DATA.monthly.slice(0, count);
  }, [dateRange]);

  const filteredReps = useMemo(() => {
    if (selectedRep !== "All Reps") return ALL_DATA.reps.filter(r => r.rep === selectedRep);
    if (selectedLOB !== "All LOBs") return ALL_DATA.reps.filter(r => r.lob === selectedLOB);
    return ALL_DATA.reps;
  }, [selectedRep, selectedLOB]);

  const filteredChannels = useMemo(() => {
    if (selectedLOB !== "All LOBs") return ALL_DATA.channels.filter(c => c.name === selectedLOB);
    return ALL_DATA.channels;
  }, [selectedLOB]);

  function resetFilters() {
    setDateRange("YTD");
    setSelectedRep("All Reps");
    setSelectedLOB("All LOBs");
  }

  return (
    <Layout section="gtm-zerowheel">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div >
        <LightHero
          eyebrow="WEG Proposed BI Platform"
          title="Revenue Operations Dashboard"
          description="WEG's recommended business intelligence dashboard for ZeroWheel — providing real-time visibility into every lead, opportunity, and revenue dollar across all channels, reps, and lines of business."
          stats={[
            { value: "$990K", label: "Revenue YTD" },
            { value: "245", label: "Installs YTD" },
            { value: "1,208", label: "Total Leads" },
            { value: "20.3%", label: "Conversion Rate" },
          ]}
        />
      </div>

      {/* ── HEADER + FILTERS ─────────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 border-b" style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderColor: CARD_BORDER }}>
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5" style={{ color: GOLD }} />
              <div>
                <p className="font-display text-base font-semibold text-black leading-none">Business Intelligence</p>
                <p className="font-mono text-[9px] text-black/55 uppercase tracking-wider mt-0.5">ZeroWheel · Revenue Operations</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-3.5 h-3.5" style={{ color: "rgba(0,0,0,0.40)" }} />
              <FilterDropdown label="Period" options={DATE_RANGES} value={dateRange} onChange={setDateRange} />
              <FilterDropdown label="Rep" options={REPS} value={selectedRep} onChange={setSelectedRep} color={TEAL} />
              <FilterDropdown label="Channel" options={LINES_OF_BUSINESS} value={selectedLOB} onChange={setSelectedLOB} color={PURPLE} />
              {isFiltered && (
                <button onClick={resetFilters} className="flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-mono transition-colors hover:bg-black/5" style={{ borderColor: "rgba(0,0,0,0.10)", color: "rgba(0,0,0,0.40)" }}>
                  <X className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen pb-32">
        <div className="container py-10 space-y-10">

          {/* ── KPI SUMMARY ──────────────────────────────────────────────── */}
          <motion.div className="grid grid-cols-2 lg:grid-cols-6 gap-4" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <KPICard label="Revenue" value={fmt$(kpis.revenue)} sub={`of $1M target`} trend={kpis.revenue > 500000 ? "up" : "down"} trendVal="+14%" color={GOLD} />
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <KPICard label="Installs" value={kpis.installs.toLocaleString()} sub={`of 1,000 target`} trend="up" trendVal="+22%" color={TEAL} />
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <KPICard label="Total Leads" value={kpis.leads.toLocaleString()} trend="up" trendVal="+31%" color={PURPLE} />
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <KPICard label="Conv. Rate" value={pct(kpis.convRate)} sub="Lead → Install" trend="flat" trendVal="+0.4pp" color={ORANGE} />
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <KPICard label="Open Pipeline" value={fmt$(kpis.pipeline)} trend="up" trendVal="+18%" color={GREEN} />
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <KPICard label="Avg Deal Size" value={fmt$(kpis.avgDeal)} sub="per unit" color="rgba(0,0,0,0.50)" />
            </motion.div>
          </motion.div>

          {/* ── REVENUE vs BUDGET ────────────────────────────────────────── */}
          <DarkCard>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Revenue Performance</p>
                <p className="font-display text-xl font-semibold text-black">Revenue vs Budget — {dateRange}</p>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-mono text-[9px] text-black/55 uppercase tracking-wider">Actual</p>
                  <p className="font-display text-xl font-semibold" style={{ color: GOLD }}>{fmt$(kpis.revenue)}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-black/55 uppercase tracking-wider">Budget</p>
                  <p className="font-display text-xl font-semibold text-black/60">{fmt$(Math.round(monthlySlice.reduce((s, d) => s + d.budget, 0) * (selectedRep !== "All Reps" ? 0.17 : 1) * (selectedLOB !== "All LOBs" ? 0.2 : 1)))}</p>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <ComposedChart data={monthlySlice}>
                <defs>
                  <linearGradient id="revGradBI" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={GOLD} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}K`} />
                <Tooltip content={<DarkTooltip />} />
                <Legend wrapperStyle={{ fontSize: 10, color: "rgba(0,0,0,0.45)", fontFamily: "monospace" }} />
                <Area type="monotone" dataKey="revenue" name="Revenue" stroke={GOLD} strokeWidth={2.5} fill="url(#revGradBI)" dot={{ fill: GOLD, r: 3 }} />
                <Line type="monotone" dataKey="budget" name="Budget" stroke="rgba(0,0,0,0.15)" strokeWidth={1.5} strokeDasharray="6 3" dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </DarkCard>

          {/* ── LEADS + INSTALLS TREND ───────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Lead Volume</p>
              <p className="font-display text-lg font-semibold text-black mb-4">Leads & Opportunities — {dateRange}</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={monthlySlice} barSize={14} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(0,0,0,0.45)", fontFamily: "monospace" }} />
                  <Bar dataKey="leads" name="Leads" fill={GOLD} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="opps" name="Opportunities" fill={TEAL} radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Install Velocity</p>
              <p className="font-display text-lg font-semibold text-black mb-4">Monthly Installs — {dateRange}</p>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={monthlySlice}>
                  <defs>
                    <linearGradient id="installGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={TEAL} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={TEAL} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Area type="monotone" dataKey="installs" name="Installs" stroke={TEAL} strokeWidth={2.5} fill="url(#installGrad)" dot={{ fill: TEAL, r: 3 }} />
                  <ReferenceLine y={Math.round(1000 / 12)} stroke={GOLD} strokeDasharray="4 2" strokeWidth={1} label={{ value: "Monthly Target", fill: "rgba(201,169,98,0.5)", fontSize: 9, fontFamily: "monospace" }} />
                </AreaChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>

          {/* ── CHANNEL PERFORMANCE ─────────────────────────────────────── */}
          <DarkCard>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Channel Attribution</p>
                <p className="font-display text-xl font-semibold text-black">
                  {selectedLOB === "All LOBs" ? "All LOBs" : selectedLOB} — Performance Breakdown
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={filteredChannels} barSize={28}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 9, fontFamily: "monospace" }} axisLine={false} tickLine={false} tickFormatter={v => v.split(" ")[0]} />
                    <YAxis tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<DarkTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 10, color: "rgba(0,0,0,0.45)", fontFamily: "monospace" }} />
                    <Bar dataKey="leads" name="Leads" fill={GOLD_DIM} radius={[3, 3, 0, 0]} opacity={0.7} />
                    <Bar dataKey="installs" name="Installs" radius={[3, 3, 0, 0]}>
                      {filteredChannels.map((c, i) => <Cell key={i} fill={c.color} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {filteredChannels.map((c, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
                        <span className="font-body text-sm text-black/65">{c.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-black/55">{c.leads} leads</span>
                        <span className="font-mono text-xs" style={{ color: TEAL }}>{c.installs} installs</span>
                        <span className="font-mono text-xs" style={{ color: GOLD }}>{fmt$(c.revenue)}</span>
                        <span className="font-mono text-xs text-black/55">{pct(c.convRate)} CR</span>
                      </div>
                    </div>
                    <ProgressBar value={c.installs} max={filteredChannels[0].installs} color={c.color} />
                  </div>
                ))}
              </div>
            </div>
          </DarkCard>

          {/* ── SALES TEAM ───────────────────────────────────────────────── */}
          <DarkCard>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Sales Team</p>
                <p className="font-display text-xl font-semibold text-black">
                  {selectedRep === "All Reps" ? "All Reps" : selectedRep} — Activity & Results
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" style={{ color: GOLD }} />
                <span className="font-mono text-xs text-black/55">Top Rep: A. Torres — 68 installs</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {filteredReps.map((rep, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold font-mono flex-shrink-0" style={{ background: i === 0 && selectedRep === "All Reps" ? `${GOLD}20` : "rgba(0,0,0,0.04)", color: i === 0 && selectedRep === "All Reps" ? GOLD : "rgba(0,0,0,0.35)" }}>
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <span className="font-body text-sm text-black/70">{rep.rep}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-black/55">{rep.calls} calls</span>
                          <span className="font-mono text-xs text-black/55">{rep.demos} demos</span>
                          <span className="font-mono text-xs" style={{ color: TEAL }}>{rep.installs} units</span>
                          <span className="font-mono text-xs" style={{ color: GOLD }}>{fmt$(rep.revenue)}</span>
                          <span className="font-mono text-xs text-black/55">{pct(rep.winRate)} WR</span>
                        </div>
                      </div>
                      <ProgressBar value={rep.installs} max={filteredReps[0].installs} color={i === 0 ? GOLD : GOLD_DIM} />
                    </div>
                  </div>
                ))}
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={filteredReps} barSize={14} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                  <XAxis dataKey="rep" tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 9, fontFamily: "monospace" }} axisLine={false} tickLine={false} tickFormatter={v => v.split(".")[1]?.trim() ?? v} />
                  <YAxis tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(0,0,0,0.45)", fontFamily: "monospace" }} />
                  <Bar dataKey="installs" name="Installs" fill={GOLD} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="demos" name="Demos" fill={TEAL} radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </DarkCard>

          {/* ── PIPELINE ─────────────────────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Pipeline Stages</p>
              <p className="font-display text-lg font-semibold text-black mb-6">Open Opportunities</p>
              <div className="space-y-4">
                {ALL_DATA.pipeline.map((stage, i) => {
                  const colors = [GOLD, "#B8963E", TEAL, PURPLE, GREEN];
                  return (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: colors[i] }} />
                          <span className="font-body text-sm text-black/65">{stage.stage}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs text-black/55">{stage.count} deals</span>
                          <span className="font-mono text-sm font-semibold" style={{ color: colors[i] }}>{fmt$(stage.value)}</span>
                        </div>
                      </div>
                      <ProgressBar value={stage.count} max={ALL_DATA.pipeline[0].count} color={colors[i]} />
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t flex justify-between" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <div>
                  <p className="font-mono text-[9px] text-black/55 uppercase tracking-wider">Total Pipeline</p>
                  <p className="font-display text-2xl font-semibold mt-1" style={{ color: GOLD }}>{fmt$(ALL_DATA.pipeline.reduce((s, d) => s + d.value, 0))}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-black/55 uppercase tracking-wider">Weighted Value</p>
                  <p className="font-display text-2xl font-semibold mt-1 text-black">{fmt$(Math.round(ALL_DATA.pipeline.reduce((s, d, i) => s + d.value * [0.2, 0.4, 0.6, 0.8, 1][i], 0)))}</p>
                </div>
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Activity Metrics</p>
              <p className="font-display text-lg font-semibold text-black mb-4">Calls & Demos — {dateRange}</p>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={monthlySlice}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(0,0,0,0.40)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(0,0,0,0.45)", fontFamily: "monospace" }} />
                  <Line type="monotone" dataKey="calls" name="Calls" stroke={GOLD} strokeWidth={2} dot={{ fill: GOLD, r: 3 }} />
                  <Line type="monotone" dataKey="demos" name="Demos" stroke={TEAL} strokeWidth={2} dot={{ fill: TEAL, r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>

          {/* ── CHANNEL PIE + FORECAST SUMMARY ──────────────────────────── */}
          <div className="grid lg:grid-cols-3 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Revenue Mix</p>
              <p className="font-display text-lg font-semibold text-black mb-4">By Channel</p>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={filteredChannels} dataKey="revenue" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={40} paddingAngle={3}>
                    {filteredChannels.map((c, i) => <Cell key={i} fill={c.color} />)}
                  </Pie>
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 9, color: "rgba(0,0,0,0.45)", fontFamily: "monospace" }} />
                </PieChart>
              </ResponsiveContainer>
            </DarkCard>

            <DarkCard className="lg:col-span-2">
              <p className="font-mono text-[10px] text-black/55 uppercase tracking-[0.15em] mb-1">Revenue Forecast</p>
              <p className="font-display text-lg font-semibold text-black mb-4">Forward-Looking Projections</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { period: "Next 30 Days", low: "$78K", mid: "$92K", high: "$108K", color: GOLD },
                  { period: "Next 90 Days", low: "$248K", mid: "$298K", high: "$341K", color: TEAL },
                  { period: "H2 2026", low: "$519K", mid: "$619K", high: "$709K", color: PURPLE },
                  { period: "Full Year 2026", low: "$764K", mid: "$864K", high: "$954K", color: GREEN },
                ].map((f, i) => (
                  <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${f.color}20`, background: `${f.color}06` }}>
                    <p className="font-mono text-[9px] text-black/55 uppercase tracking-wider mb-2">{f.period}</p>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="font-body text-xs text-black/55">Low</span>
                        <span className="font-mono text-xs text-red-400">{f.low}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-xs text-black/65">Mid</span>
                        <span className="font-mono text-sm font-semibold" style={{ color: f.color }}>{f.mid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-xs text-black/55">High</span>
                        <span className="font-mono text-xs" style={{ color: TEAL }}>{f.high}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>

        </div>
      </div>
    </Layout>
  );
}
