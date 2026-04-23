/*
 * ZeroWheel Sales Infrastructure — Lead Funnel, Opportunity Pipeline, Sales Performance & Revenue Forecasting
 * Design: Dark premium dashboard — #0A0A0A background, gold (#C9A962) accents, teal highlights
 * Layout: Full-width dark dashboard sections, recharts for all data visualizations
 */

import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import {
  TrendingUp, Users, Target, DollarSign,
  CheckCircle2, XCircle, AlertCircle, Activity, BarChart3,
} from "lucide-react";
import Layout from "@/components/Layout";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Section Nav ────────────────────────────────────────────────────────────
const sections = [
  { id: "hero", label: "Overview" },
  { id: "lead-funnel", label: "Lead Funnel" },
  { id: "opportunity-pipeline", label: "Pipeline" },
  { id: "sales-team", label: "Sales Team" },
  { id: "channel-performance", label: "Channels" },
  { id: "revenue-forecast", label: "Forecasting" },
  { id: "win-loss", label: "Win / Loss" },
];

// ─── Color Palette ───────────────────────────────────────────────────────────
const GOLD = "#C9A962";
const GOLD_DIM = "#8B7D3C";
const TEAL = "#2DD4BF";
const RED = "#F87171";
const CARD_BG = "#111111";
const CARD_BORDER = "rgba(201,169,98,0.12)";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const leadSourceData = [
  { month: "Nov", "Private Clubs": 42, "Medical": 18, "Sports Perf.": 12, "Corporate": 8, "Consumer": 22, "Hospitality": 14 },
  { month: "Dec", "Private Clubs": 55, "Medical": 24, "Sports Perf.": 16, "Corporate": 11, "Consumer": 28, "Hospitality": 19 },
  { month: "Jan", "Private Clubs": 68, "Medical": 31, "Sports Perf.": 22, "Corporate": 15, "Consumer": 35, "Hospitality": 26 },
  { month: "Feb", "Private Clubs": 74, "Medical": 38, "Sports Perf.": 28, "Corporate": 19, "Consumer": 41, "Hospitality": 31 },
  { month: "Mar", "Private Clubs": 89, "Medical": 45, "Sports Perf.": 33, "Corporate": 24, "Consumer": 52, "Hospitality": 38 },
  { month: "Apr", "Private Clubs": 102, "Medical": 52, "Sports Perf.": 41, "Corporate": 29, "Consumer": 61, "Hospitality": 44 },
];

const funnelStages = [
  { name: "Raw Leads", value: 1240, fill: GOLD },
  { name: "Qualified", value: 742, fill: GOLD_DIM },
  { name: "Demo Scheduled", value: 418, fill: "#6B5E2E" },
  { name: "Proposal Sent", value: 231, fill: "#4A4020" },
  { name: "Negotiation", value: 118, fill: "#2D2714" },
  { name: "Closed Won", value: 64, fill: TEAL },
];

const pipelineStages = [
  { stage: "Discovery", count: 87, value: 2.1, color: GOLD },
  { stage: "Demo", count: 54, value: 3.4, color: "#B8963E" },
  { stage: "Proposal", count: 38, value: 4.8, color: "#A69050" },
  { stage: "Negotiation", count: 22, value: 3.9, color: "#8B7D3C" },
  { stage: "Contract", count: 11, value: 2.7, color: "#0D9488" },
  { stage: "Won", count: 64, value: 8.2, color: TEAL },
];

const salesTeamData = [
  { rep: "A. Torres", leads: 142, opps: 58, won: 18, revenue: 1.84, calls: 312, emails: 487 },
  { rep: "M. Chen", leads: 118, opps: 47, won: 14, revenue: 1.43, calls: 278, emails: 391 },
  { rep: "J. Williams", leads: 97, opps: 39, won: 11, revenue: 1.12, calls: 241, emails: 334 },
  { rep: "S. Patel", leads: 84, opps: 33, won: 9, revenue: 0.92, calls: 198, emails: 287 },
  { rep: "R. Davis", leads: 76, opps: 28, won: 7, revenue: 0.71, calls: 176, emails: 243 },
  { rep: "K. Johnson", leads: 61, opps: 22, won: 5, revenue: 0.51, calls: 143, emails: 198 },
];

const activityData = [
  { week: "W1", calls: 148, emails: 312, demos: 24, proposals: 11 },
  { week: "W2", calls: 162, emails: 341, demos: 28, proposals: 14 },
  { week: "W3", calls: 139, emails: 298, demos: 21, proposals: 9 },
  { week: "W4", calls: 178, emails: 387, demos: 33, proposals: 17 },
  { week: "W5", calls: 191, emails: 412, demos: 38, proposals: 21 },
  { week: "W6", calls: 204, emails: 441, demos: 42, proposals: 24 },
  { week: "W7", calls: 187, emails: 398, demos: 36, proposals: 19 },
  { week: "W8", calls: 218, emails: 467, demos: 45, proposals: 27 },
];

const channelData = [
  { channel: "Private Clubs", leads: 102, opps: 41, installs: 18, convRate: 17.6, avgDeal: 48500 },
  { channel: "Consumer", leads: 61, opps: 28, installs: 9, convRate: 14.8, avgDeal: 12800 },
  { channel: "Medical", leads: 52, opps: 24, installs: 11, convRate: 21.2, avgDeal: 62000 },
  { channel: "Hospitality", leads: 44, opps: 19, installs: 7, convRate: 15.9, avgDeal: 54000 },
  { channel: "Sports Perf.", leads: 41, opps: 18, installs: 8, convRate: 19.5, avgDeal: 41000 },
  { channel: "Corporate", leads: 29, opps: 12, installs: 4, convRate: 13.8, avgDeal: 38000 },
  { channel: "Gov / Military", leads: 18, opps: 8, installs: 3, convRate: 16.7, avgDeal: 72000 },
  { channel: "Amenities", leads: 31, opps: 14, installs: 4, convRate: 12.9, avgDeal: 29000 },
];

const forecastData = [
  { month: "Jan", actual: 0.82, budget: 0.90, forecast: null },
  { month: "Feb", actual: 1.14, budget: 1.20, forecast: null },
  { month: "Mar", actual: 1.48, budget: 1.50, forecast: null },
  { month: "Apr", actual: 1.91, budget: 2.00, forecast: null },
  { month: "May", actual: null, budget: 2.40, forecast: 2.28 },
  { month: "Jun", actual: null, budget: 2.80, forecast: 2.71 },
  { month: "Jul", actual: null, budget: 3.20, forecast: 3.18 },
  { month: "Aug", actual: null, budget: 3.60, forecast: 3.64 },
  { month: "Sep", actual: null, budget: 4.10, forecast: 4.22 },
];

const cumulativeData = [
  { month: "Jan", actual: 0.82, budget: 0.90, prior: 0.61 },
  { month: "Feb", actual: 1.96, budget: 2.10, prior: 1.38 },
  { month: "Mar", actual: 3.44, budget: 3.60, prior: 2.29 },
  { month: "Apr", actual: 5.35, budget: 5.60, prior: 3.42 },
  { month: "May", actual: null, budget: 8.00, prior: 4.88 },
  { month: "Jun", actual: null, budget: 10.80, prior: 6.71 },
  { month: "Jul", actual: null, budget: 14.00, prior: 8.94 },
  { month: "Aug", actual: null, budget: 17.60, prior: 11.52 },
  { month: "Sep", actual: null, budget: 21.70, prior: 14.48 },
];

const winReasons = [
  { reason: "Product Demo Performance", count: 28, pct: 43.8 },
  { reason: "Competitive Pricing", count: 16, pct: 25.0 },
  { reason: "Relationship / Referral", count: 12, pct: 18.8 },
  { reason: "Clinical Evidence", count: 8, pct: 12.5 },
];

const lossReasons = [
  { reason: "Budget Constraints", count: 31, pct: 35.6 },
  { reason: "Chose Competitor", count: 24, pct: 27.6 },
  { reason: "No Decision / Stalled", count: 18, pct: 20.7 },
  { reason: "Timing Not Right", count: 14, pct: 16.1 },
];

const winLossTrend = [
  { month: "Nov", won: 8, lost: 14 },
  { month: "Dec", won: 11, lost: 18 },
  { month: "Jan", won: 14, lost: 21 },
  { month: "Feb", won: 16, lost: 19 },
  { month: "Mar", won: 19, lost: 22 },
  { month: "Apr", won: 22, lost: 18 },
];

const conversionTrend = [
  { month: "Nov", "Lead→Opp": 38, "Opp→Install": 14 },
  { month: "Dec", "Lead→Opp": 41, "Opp→Install": 16 },
  { month: "Jan", "Lead→Opp": 44, "Opp→Install": 17 },
  { month: "Feb", "Lead→Opp": 47, "Opp→Install": 19 },
  { month: "Mar", "Lead→Opp": 51, "Opp→Install": 21 },
  { month: "Apr", "Lead→Opp": 54, "Opp→Install": 23 },
];

// ─── Custom Tooltip ──────────────────────────────────────────────────────────
const DarkTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1A1A1A] border border-[rgba(201,169,98,0.2)] rounded-xl px-4 py-3 shadow-2xl">
      <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">{label}</p>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ background: p.color || p.fill }} />
          <span className="font-body text-xs text-white/60">{p.name}:</span>
          <span className="font-mono text-xs text-white font-semibold">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

// ─── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, sub, trend, trendUp }: {
  icon: any; label: string; value: string; sub?: string; trend?: string | null; trendUp?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl p-5 border"
      style={{ background: CARD_BG, borderColor: CARD_BORDER }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,169,98,0.1)" }}>
          <Icon className="w-4 h-4" style={{ color: GOLD }} />
        </div>
        {trend && (
          <span className={`font-mono text-[10px] px-2 py-1 rounded-full ${trendUp ? "bg-teal-500/10 text-teal-400" : "bg-red-500/10 text-red-400"}`}>
            {trend}
          </span>
        )}
      </div>
      <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">{label}</p>
      <p className="font-display text-3xl font-semibold text-white">{value}</p>
      {sub && <p className="font-body text-xs text-white/35 mt-1">{sub}</p>}
    </motion.div>
  );
}

// ─── Section Header ──────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      <motion.span variants={fadeInUp} className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: GOLD }}>
        {eyebrow}
      </motion.span>
      <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium text-white mt-3 mb-4">
        {title}
      </motion.h2>
      <motion.div variants={fadeInUp} className="h-[1px] w-12 mb-4" style={{ background: GOLD }} />
      <motion.p variants={fadeInUp} className="font-body text-sm text-white/40 max-w-2xl leading-relaxed">
        {description}
      </motion.p>
    </motion.div>
  );
}

// ─── Dark Card ───────────────────────────────────────────────────────────────
function DarkCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border p-6 ${className}`} style={{ background: CARD_BG, borderColor: CARD_BORDER }}>
      {children}
    </div>
  );
}

// ─── Progress Bar ────────────────────────────────────────────────────────────
function ProgressBar({ value, max, color = GOLD }: { value: number; max: number; color?: string }) {
  return (
    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / max) * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
export default function ZWSalesInfrastructure() {
  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(201,169,98,0.12),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(45,212,191,0.05),transparent)]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="infra-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A962" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#infra-grid)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: GOLD }}>
              ZeroWheel · Sales Operations
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mt-4 mb-6 text-white leading-[1.1]">
              Sales Infrastructure
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-16 mx-auto mb-6"
              style={{ background: GOLD }}
            />
            <motion.p variants={fadeInUp} className="font-body text-base md:text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
              A full-stack view of how we manage our lead funnel, opportunity pipeline, and ZeroWheel installs —
              from first touch to closed deal. Real-time visibility into what's working, who's producing,
              and where revenue is heading.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <StatCard icon={Target} label="Total Leads (MTD)" value="329" sub="↑ 18% vs last month" trend="+18%" trendUp={true} />
            <StatCard icon={Activity} label="Active Opportunities" value="212" sub="$17.0M pipeline value" trend="+12%" trendUp={true} />
            <StatCard icon={CheckCircle2} label="Installs (YTD)" value="64" sub="vs 48 budget" trend="+33%" trendUp={true} />
            <StatCard icon={DollarSign} label="Revenue (YTD)" value="$5.35M" sub="vs $5.60M budget" trend="-4.5%" trendUp={false} />
          </motion.div>
        </div>
      </section>

      {/* ── LEAD FUNNEL ─────────────────────────────────────────────────── */}
      <section id="lead-funnel" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Lead Management"
            title="Lead Funnel & Source Attribution"
            description="Track every lead from first touch through qualification, demo, proposal, and close. Understand which channels are generating volume and which are converting."
          />

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Funnel */}
            <DarkCard className="lg:col-span-1">
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Funnel Stages</p>
              <p className="font-display text-lg font-medium text-white mb-6">Lead → Install</p>
              <div className="space-y-3">
                {funnelStages.map((stage, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-xs text-white/50">{stage.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-white font-semibold">{stage.value.toLocaleString()}</span>
                        {i > 0 && (
                          <span className="font-mono text-[10px] text-white/25">
                            {Math.round((stage.value / funnelStages[i - 1].value) * 100)}%
                          </span>
                        )}
                      </div>
                    </div>
                    <ProgressBar value={stage.value} max={funnelStages[0].value} color={stage.fill} />
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex justify-between">
                  <div>
                    <p className="font-mono text-[10px] text-white/25 uppercase tracking-wider">Lead → Install</p>
                    <p className="font-display text-2xl font-semibold mt-1" style={{ color: TEAL }}>5.2%</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/25 uppercase tracking-wider">Opp → Install</p>
                    <p className="font-display text-2xl font-semibold mt-1" style={{ color: GOLD }}>30.2%</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/25 uppercase tracking-wider">Avg Days</p>
                    <p className="font-display text-2xl font-semibold mt-1 text-white">47</p>
                  </div>
                </div>
              </div>
            </DarkCard>

            {/* Lead Volume by Source */}
            <DarkCard className="lg:col-span-2">
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Lead Source Delineation</p>
              <p className="font-display text-lg font-medium text-white mb-6">Monthly Lead Volume by Channel</p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={leadSourceData} barSize={8} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                  <Bar dataKey="Private Clubs" fill={GOLD} radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Medical" fill="#4ADECD" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Sports Perf." fill="#818CF8" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Corporate" fill="#FB923C" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Consumer" fill={GOLD_DIM} radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Hospitality" fill="#34D399" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>

          {/* Conversion Rate Trend */}
          <DarkCard>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Funnel Efficiency</p>
            <p className="font-display text-lg font-medium text-white mb-6">Lead → Opportunity & Opportunity → Install Conversion Rates (%)</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={conversionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip content={<DarkTooltip />} />
                <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                <Line type="monotone" dataKey="Lead→Opp" stroke={GOLD} strokeWidth={2} dot={{ fill: GOLD, r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="Opp→Install" stroke={TEAL} strokeWidth={2} dot={{ fill: TEAL, r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </DarkCard>
        </div>
      </section>

      {/* ── OPPORTUNITY PIPELINE ─────────────────────────────────────────── */}
      <section id="opportunity-pipeline" className="py-20 bg-[#080808]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Opportunity Management"
            title="Pipeline Stages & Velocity"
            description="Track every opportunity through discovery, demo, proposal, negotiation, and close. Monitor stage-by-stage conversion and identify where deals are stalling."
          />

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {pipelineStages.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl p-4 border text-center"
                style={{ background: CARD_BG, borderColor: `${s.color}30` }}
              >
                <div className="w-2 h-2 rounded-full mx-auto mb-3" style={{ background: s.color }} />
                <p className="font-mono text-[9px] text-white/30 uppercase tracking-wider mb-2">{s.stage}</p>
                <p className="font-display text-2xl font-semibold text-white">{s.count}</p>
                <p className="font-mono text-[10px] mt-1" style={{ color: s.color }}>${s.value}M</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Pipeline Value</p>
              <p className="font-display text-lg font-medium text-white mb-6">$ Value by Stage ($M)</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={pipelineStages} layout="vertical" barSize={14}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} unit="M" />
                  <YAxis type="category" dataKey="stage" tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip content={<DarkTooltip />} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {pipelineStages.map((s, i) => <Cell key={i} fill={s.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Deal Count</p>
              <p className="font-display text-lg font-medium text-white mb-6">Opportunities by Stage</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={pipelineStages} barSize={28}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="stage" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 9, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {pipelineStages.map((s, i) => <Cell key={i} fill={s.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── SALES TEAM ───────────────────────────────────────────────────── */}
      <section id="sales-team" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Team Performance"
            title="Sales Team Tracking"
            description="Individual rep performance across leads generated, opportunities created, installs closed, and revenue produced. Activity metrics show call volume, email cadence, and demo frequency."
          />

          <DarkCard className="mb-6">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Rep Leaderboard</p>
            <p className="font-display text-lg font-medium text-white mb-6">Individual Performance — YTD</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    {["Rep", "Leads", "Opps", "Installs", "Revenue", "Conv. Rate", "Calls", "Emails"].map(h => (
                      <th key={h} className="text-left pb-3 font-mono text-[9px] text-white/25 uppercase tracking-wider pr-6">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {salesTeamData.map((rep, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                      <td className="py-4 pr-6">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                            style={{ background: i === 0 ? `${GOLD}20` : "rgba(255,255,255,0.05)", color: i === 0 ? GOLD : "rgba(255,255,255,0.4)" }}
                          >
                            {i + 1}
                          </div>
                          <span className="font-body text-sm text-white">{rep.rep}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-6 font-mono text-sm text-white/60">{rep.leads}</td>
                      <td className="py-4 pr-6 font-mono text-sm text-white/60">{rep.opps}</td>
                      <td className="py-4 pr-6">
                        <span className="font-mono text-sm font-semibold" style={{ color: TEAL }}>{rep.won}</span>
                      </td>
                      <td className="py-4 pr-6">
                        <span className="font-mono text-sm font-semibold" style={{ color: GOLD }}>${rep.revenue}M</span>
                      </td>
                      <td className="py-4 pr-6">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm text-white/60">{Math.round((rep.won / rep.leads) * 100)}%</span>
                          <div className="w-16">
                            <ProgressBar value={rep.won} max={salesTeamData[0].won} color={i === 0 ? GOLD : GOLD_DIM} />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-6 font-mono text-sm text-white/40">{rep.calls}</td>
                      <td className="py-4 font-mono text-sm text-white/40">{rep.emails}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DarkCard>

          <div className="grid lg:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Activity Tracking</p>
              <p className="font-display text-lg font-medium text-white mb-6">Weekly Sales Activity</p>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={activityData} barSize={10} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="week" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                  <Bar dataKey="calls" fill={GOLD} radius={[2, 2, 0, 0]} />
                  <Bar dataKey="emails" fill={GOLD_DIM} radius={[2, 2, 0, 0]} />
                  <Bar dataKey="demos" fill={TEAL} radius={[2, 2, 0, 0]} />
                  <Bar dataKey="proposals" fill="#818CF8" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Rep Revenue</p>
              <p className="font-display text-lg font-medium text-white mb-6">Revenue by Rep ($M) — YTD</p>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={salesTeamData} layout="vertical" barSize={14}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} unit="M" />
                  <YAxis type="category" dataKey="rep" tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} width={72} />
                  <Tooltip content={<DarkTooltip />} />
                  <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                    {salesTeamData.map((_, i) => <Cell key={i} fill={i === 0 ? GOLD : i === 1 ? GOLD_DIM : "#6B5E2E"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── CHANNEL PERFORMANCE ─────────────────────────────────────────── */}
      <section id="channel-performance" className="py-20 bg-[#080808]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Channel Attribution"
            title="Which Channels Are Working"
            description="Compare lead volume, opportunity creation, install conversion, and average deal size across every ZeroWheel go-to-market channel. Identify where to double down and where to optimize."
          />

          <DarkCard className="mb-6">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Channel Scorecard</p>
            <p className="font-display text-lg font-medium text-white mb-6">Leads → Opportunities → Installs by Channel (MTD)</p>
            <div className="space-y-4">
              {channelData.map((ch, i) => (
                <div key={i} className="grid grid-cols-5 gap-4 items-center py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <div>
                    <p className="font-body text-sm text-white">{ch.channel}</p>
                    <p className="font-mono text-[9px] text-white/25 mt-0.5">Avg deal: ${(ch.avgDeal / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 mb-1">Leads</p>
                    <p className="font-mono text-sm text-white/70">{ch.leads}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 mb-1">Opps</p>
                    <p className="font-mono text-sm text-white/70">{ch.opps}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 mb-1">Installs</p>
                    <p className="font-mono text-sm font-semibold" style={{ color: TEAL }}>{ch.installs}</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <p className="font-mono text-[10px] text-white/30">Conv. Rate</p>
                      <p className="font-mono text-[10px]" style={{ color: ch.convRate > 18 ? TEAL : GOLD }}>{ch.convRate}%</p>
                    </div>
                    <ProgressBar value={ch.convRate} max={25} color={ch.convRate > 18 ? TEAL : GOLD} />
                  </div>
                </div>
              ))}
            </div>
          </DarkCard>

          <div className="grid lg:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Channel Volume</p>
              <p className="font-display text-lg font-medium text-white mb-6">Leads vs Installs by Channel</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={channelData} barSize={12} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="channel" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 8, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                  <Bar dataKey="leads" fill={GOLD_DIM} radius={[2, 2, 0, 0]} />
                  <Bar dataKey="installs" fill={TEAL} radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Install Mix</p>
              <p className="font-display text-lg font-medium text-white mb-6">Installs by Channel — Share</p>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={channelData}
                    dataKey="installs"
                    nameKey="channel"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={55}
                    paddingAngle={3}
                  >
                    {channelData.map((_, i) => (
                      <Cell key={i} fill={[GOLD, TEAL, "#818CF8", "#FB923C", "#34D399", GOLD_DIM, "#F472B6", "#60A5FA"][i % 8]} />
                    ))}
                  </Pie>
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                </PieChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── REVENUE FORECAST ────────────────────────────────────────────── */}
      <section id="revenue-forecast" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Revenue Intelligence"
            title="Forecasting & Budget Tracking"
            description="Revenue actuals vs budget with pipeline-based forward projections. See how we're tracking to plan and where we expect to land in 1, 3, and 6 months based on current opportunity stages and historical conversion rates."
          />

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <StatCard icon={TrendingUp} label="Next 30 Days (Forecast)" value="$2.28M" sub="vs $2.40M budget" trend="-5%" trendUp={false} />
            <StatCard icon={BarChart3} label="Next 90 Days (Forecast)" value="$8.17M" sub="vs $8.60M budget" trend="-5%" trendUp={false} />
            <StatCard icon={DollarSign} label="Next 180 Days (Forecast)" value="$18.9M" sub="vs $19.8M budget" trend="-4.5%" trendUp={false} />
            <StatCard icon={Target} label="Pipeline Coverage" value="3.2×" sub="of remaining budget" trend="Healthy" trendUp={true} />
          </motion.div>

          <DarkCard className="mb-6">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Monthly Revenue</p>
            <p className="font-display text-lg font-medium text-white mb-6">Actual vs Budget vs Forecast ($M)</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={forecastData} barSize={22} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} unit="M" />
                <Tooltip content={<DarkTooltip />} />
                <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                <Bar dataKey="actual" name="Actual" fill={GOLD} radius={[3, 3, 0, 0]} />
                <Bar dataKey="budget" name="Budget" fill="rgba(255,255,255,0.08)" radius={[3, 3, 0, 0]} />
                <Bar dataKey="forecast" name="Forecast" fill={TEAL} radius={[3, 3, 0, 0]} opacity={0.8} />
              </BarChart>
            </ResponsiveContainer>
          </DarkCard>

          <DarkCard>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Cumulative Revenue</p>
            <p className="font-display text-lg font-medium text-white mb-2">YTD Cumulative — Actual vs Budget vs Prior Year ($M)</p>
            <div className="flex gap-6 mb-6">
              <div>
                <p className="font-mono text-[10px] text-white/25 uppercase tracking-wider">YTD Actual</p>
                <p className="font-display text-2xl font-semibold mt-1" style={{ color: GOLD }}>$5.35M</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/25 uppercase tracking-wider">vs Budget</p>
                <p className="font-display text-2xl font-semibold mt-1 text-red-400">−$0.25M</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/25 uppercase tracking-wider">vs Prior Year</p>
                <p className="font-display text-2xl font-semibold mt-1" style={{ color: TEAL }}>+$1.93M</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={cumulativeData}>
                <defs>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={GOLD} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={TEAL} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={TEAL} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} unit="M" />
                <Tooltip content={<DarkTooltip />} />
                <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                <Area type="monotone" dataKey="budget" name="Budget" stroke="rgba(255,255,255,0.2)" strokeWidth={1.5} strokeDasharray="6 3" fill="none" dot={false} />
                <Area type="monotone" dataKey="actual" name="Actual" stroke={GOLD} strokeWidth={2.5} fill="url(#goldGrad)" dot={{ fill: GOLD, r: 4 }} connectNulls={false} />
                <Area type="monotone" dataKey="prior" name="Prior Year" stroke={TEAL} strokeWidth={1.5} fill="url(#tealGrad)" dot={false} strokeDasharray="4 2" />
              </AreaChart>
            </ResponsiveContainer>
          </DarkCard>
        </div>
      </section>

      {/* ── WIN / LOSS ───────────────────────────────────────────────────── */}
      <section id="win-loss" className="py-20 bg-[#080808]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Closed Opportunities"
            title="Win / Loss Analysis"
            description="Understand why deals close and why they don't. Track win and loss rates over time, identify the top reasons for each outcome, and use this intelligence to sharpen messaging, pricing, and process."
          />

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <StatCard icon={CheckCircle2} label="Closed Won (YTD)" value="64" sub="vs 48 target" trend="+33%" trendUp={true} />
            <StatCard icon={XCircle} label="Closed Lost (YTD)" value="87" sub="87 total losses" trend={null} />
            <StatCard icon={Activity} label="Win Rate" value="42.4%" sub="of closed opportunities" trend="+4.2pp" trendUp={true} />
            <StatCard icon={AlertCircle} label="Avg Deal Cycle" value="47 days" sub="from opp create to close" trend="−3 days" trendUp={true} />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <DarkCard>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4" style={{ color: TEAL }} />
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em]">Win Reasons</p>
              </div>
              <p className="font-display text-lg font-medium text-white mb-6">Why We Win</p>
              <div className="space-y-5">
                {winReasons.map((r, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-sm text-white/60">{r.reason}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-white/40">{r.count} deals</span>
                        <span className="font-mono text-xs font-semibold" style={{ color: TEAL }}>{r.pct}%</span>
                      </div>
                    </div>
                    <ProgressBar value={r.pct} max={100} color={TEAL} />
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard>
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-4 h-4 text-red-400" />
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em]">Loss Reasons</p>
              </div>
              <p className="font-display text-lg font-medium text-white mb-6">Why We Lose</p>
              <div className="space-y-5">
                {lossReasons.map((r, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-sm text-white/60">{r.reason}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-white/40">{r.count} deals</span>
                        <span className="font-mono text-xs font-semibold text-red-400">{r.pct}%</span>
                      </div>
                    </div>
                    <ProgressBar value={r.pct} max={100} color={RED} />
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>

          <DarkCard>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Win / Loss Trend</p>
            <p className="font-display text-lg font-medium text-white mb-6">Monthly Closed Won vs Closed Lost</p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={winLossTrend} barSize={28} barGap={6}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                <Tooltip content={<DarkTooltip />} />
                <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                <Bar dataKey="won" name="Closed Won" fill={TEAL} radius={[4, 4, 0, 0]} />
                <Bar dataKey="lost" name="Closed Lost" fill={RED} radius={[4, 4, 0, 0]} opacity={0.7} />
              </BarChart>
            </ResponsiveContainer>
          </DarkCard>

          <motion.div
            className="mt-12 rounded-2xl p-8 border text-center"
            style={{ background: "rgba(201,169,98,0.04)", borderColor: "rgba(201,169,98,0.15)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>Infrastructure Vision</p>
            <p className="font-display text-xl md:text-2xl font-medium text-white mb-4 max-w-3xl mx-auto">
              This is what we build for ZeroWheel leadership
            </p>
            <p className="font-body text-sm text-white/40 max-w-2xl mx-auto leading-relaxed">
              Every chart, metric, and table shown here represents a live data system we configure and maintain —
              CRM pipeline hygiene, campaign attribution, rep scorecards, and rolling forecasts.
              Leadership gets a single source of truth on where revenue is coming from, who's driving it,
              and what to expect next quarter.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
