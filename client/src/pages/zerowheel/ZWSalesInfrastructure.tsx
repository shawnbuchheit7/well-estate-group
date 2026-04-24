/*
 * ZeroWheel Sales Infrastructure
 * Design: Dark premium — #0A0A0A bg, gold (#C9A962) accents, teal highlights
 * Data: $1,000/unit, 1,000 unit / $1M revenue target for 2026
 * Sections: Hero → Tech Stack → Lead Intake Flow → Lead→Opp Flow → Opp→Close Flow
 *           → Funnel Data → Pipeline → Sales Team → Channels → Forecasting → Win/Loss
 */

import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart,
} from "recharts";
import {
  TrendingUp, Users, Target, DollarSign,
  CheckCircle2, XCircle, AlertCircle, Activity, BarChart3,
  Zap, MessageSquare, Database, Globe, ArrowRight, ArrowDown,
  Layers, Settings, Filter, Mail, Phone, Calendar, Award,
  GitBranch, Cpu, BarChart2, RefreshCw, ShoppingCart, Link2,
  Workflow, Bot, FormInput, CloudCog,
} from "lucide-react";
import Layout from "@/components/Layout";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Section Nav ────────────────────────────────────────────────────────────
const sections = [
  { id: "hero", label: "Overview" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "lead-intake", label: "Lead Intake" },
  { id: "lead-to-opp", label: "Lead → Opp" },
  { id: "opp-to-close", label: "Opp → Close" },
  { id: "lead-funnel", label: "Funnel Data" },
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
const PURPLE = "#A78BFA";
const ORANGE = "#FB923C";
const GREEN = "#4ADE80";
const CARD_BG = "#111111";
const CARD_BORDER = "rgba(201,169,98,0.12)";

// ─── Data ($1,000/unit, 1,000 unit / $1M target for 2026) ───────────────────
const funnelStages = [
  { name: "Website Visitors",   value: 48000, fill: GOLD },
  { name: "Typeform Leads",     value: 1208,  fill: GOLD_DIM },
  { name: "Intercom Qualified", value: 506,   fill: TEAL },
  { name: "Salesforce Opps",    value: 334,   fill: PURPLE },
  { name: "Demos Completed",    value: 198,   fill: ORANGE },
  { name: "Proposals Sent",     value: 142,   fill: GREEN },
  { name: "Installs (Won)",     value: 245,   fill: TEAL },
];

const sourceData = [
  { name: "Direct Sales",        value: 38, fill: GOLD },
  { name: "E-Commerce",          value: 22, fill: TEAL },
  { name: "Partner / Referral",  value: 18, fill: PURPLE },
  { name: "Inbound / Marketing", value: 12, fill: ORANGE },
  { name: "Trade Show",          value: 6,  fill: GREEN },
  { name: "Social / Content",    value: 4,  fill: RED },
];

const monthlyData = [
  { month: "Jan", leads: 210, opps: 88, installs: 38, revenue: 38000, budget: 50000 },
  { month: "Feb", leads: 268, opps: 112, installs: 52, revenue: 52000, budget: 65000 },
  { month: "Mar", leads: 341, opps: 143, installs: 71, revenue: 71000, budget: 80000 },
  { month: "Apr", leads: 389, opps: 163, installs: 84, revenue: 84000, budget: 90000 },
  { month: "May", leads: null, opps: null, installs: null, revenue: null, budget: 100000 },
  { month: "Jun", leads: null, opps: null, installs: null, revenue: null, budget: 110000 },
  { month: "Jul", leads: null, opps: null, installs: null, revenue: null, budget: 115000 },
  { month: "Aug", leads: null, opps: null, installs: null, revenue: null, budget: 120000 },
  { month: "Sep", leads: null, opps: null, installs: null, revenue: null, budget: 125000 },
  { month: "Oct", leads: null, opps: null, installs: null, revenue: null, budget: 130000 },
  { month: "Nov", leads: null, opps: null, installs: null, revenue: null, budget: 115000 },
  { month: "Dec", leads: null, opps: null, installs: null, revenue: null, budget: 110000 },
];

const pipelineStages = [
  { stage: "Discovery",    count: 142, value: 142000, color: GOLD },
  { stage: "Demo",         count: 89,  value: 89000,  color: "#B8963E" },
  { stage: "Proposal",     count: 54,  value: 54000,  color: "#A69050" },
  { stage: "Negotiation",  count: 31,  value: 31000,  color: "#8B7D3C" },
  { stage: "Contract",     count: 18,  value: 18000,  color: TEAL },
];

const repData = [
  { rep: "A. Torres",   installs: 68, revenue: 68000, leads: 312, calls: 487 },
  { rep: "M. Chen",     installs: 54, revenue: 54000, leads: 261, calls: 398 },
  { rep: "J. Williams", installs: 41, revenue: 41000, leads: 198, calls: 312 },
  { rep: "S. Patel",    installs: 33, revenue: 33000, leads: 159, calls: 248 },
  { rep: "R. Davis",    installs: 28, revenue: 28000, leads: 134, calls: 211 },
  { rep: "K. Johnson",  installs: 21, revenue: 21000, leads: 102, calls: 162 },
];

const winLossReasons = [
  { reason: "Price / Budget",      won: 0,  lost: 34, color: RED },
  { reason: "Competitor",          won: 0,  lost: 28, color: ORANGE },
  { reason: "Timeline",            won: 0,  lost: 19, color: PURPLE },
  { reason: "No Decision",         won: 0,  lost: 15, color: GOLD_DIM },
  { reason: "Product Fit",         won: 48, lost: 0,  color: TEAL },
  { reason: "Relationship / Trust",won: 42, lost: 0,  color: GREEN },
  { reason: "ROI Clarity",         won: 38, lost: 0,  color: GOLD },
  { reason: "Demo Quality",        won: 31, lost: 0,  color: PURPLE },
];

const forecastData = [
  { period: "May",  low: 78,  mid: 92,  high: 108, budget: 100 },
  { period: "Jun",  low: 88,  mid: 104, high: 121, budget: 110 },
  { period: "Q3",   low: 248, mid: 298, high: 341, budget: 360 },
  { period: "Q4",   low: 271, mid: 321, high: 368, budget: 355 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function fmt$(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
}

// ─── Custom Tooltip ──────────────────────────────────────────────────────────
const DarkTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1A1A1A] border border-[rgba(201,169,98,0.2)] rounded-xl px-4 py-3 shadow-2xl min-w-[140px]">
      <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider mb-2">{label}</p>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color || p.fill }} />
          <span className="font-body text-xs text-white/60">{p.name}:</span>
          <span className="font-mono text-xs text-white font-semibold">
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

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">{title}</h2>
      <p className="font-body text-white/40 max-w-2xl leading-relaxed">{description}</p>
    </div>
  );
}

function ProgressBar({ value, max, color = GOLD }: { value: number; max: number; color?: string }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}

// ─── Flow Node ───────────────────────────────────────────────────────────────
function FlowNode({ icon: Icon, title, subtitle, color = GOLD, badge, system }: {
  icon: any; title: string; subtitle: string; color?: string; badge?: string; system?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative rounded-2xl border p-5 flex flex-col gap-2"
      style={{ background: CARD_BG, borderColor: `${color}30` }}
    >
      {badge && (
        <span className="absolute -top-2.5 left-4 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: color, color: "#0A0A0A" }}>
          {badge}
        </span>
      )}
      {system && (
        <span className="absolute -top-2.5 right-4 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border" style={{ borderColor: `${color}40`, color: `${color}80`, background: "#0A0A0A" }}>
          {system}
        </span>
      )}
      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <p className="font-display text-sm font-semibold text-white leading-tight">{title}</p>
      <p className="font-body text-[11px] text-white/40 leading-relaxed">{subtitle}</p>
    </motion.div>
  );
}

function FlowArrow({ vertical = false, label }: { vertical?: boolean; label?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${vertical ? "py-1" : "px-1"}`}>
      {vertical
        ? <ArrowDown className="w-4 h-4" style={{ color: GOLD_DIM }} />
        : <ArrowRight className="w-4 h-4" style={{ color: GOLD_DIM }} />}
      {label && <span className="font-mono text-[8px] text-white/20 uppercase tracking-wider">{label}</span>}
    </div>
  );
}

function StageStep({ number, title, owner, actions, color = GOLD }: {
  number: string; title: string; owner: string; actions: string[]; color?: string;
}) {
  return (
    <motion.div variants={fadeInUp} className="rounded-2xl border p-5" style={{ background: CARD_BG, borderColor: `${color}25` }}>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold font-mono flex-shrink-0" style={{ background: `${color}20`, color }}>
          {number}
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-white">{title}</p>
          <p className="font-mono text-[9px] uppercase tracking-wider mt-0.5" style={{ color: `${color}90` }}>{owner}</p>
        </div>
      </div>
      <ul className="space-y-1.5">
        {actions.map((a, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
            <span className="font-body text-[11px] text-white/45 leading-relaxed">{a}</span>
          </li>
        ))}
      </ul>
    </motion.div>
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
        </div>
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.p variants={fadeInUp} className="font-mono text-[10px] uppercase tracking-[0.25em] mb-6" style={{ color: GOLD }}>
              ZeroWheel · Sales Infrastructure
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-semibold text-white leading-[1.05] mb-6">
              Revenue Operations<br />
              <span style={{ color: GOLD }}>Infrastructure</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg text-white/40 max-w-2xl leading-relaxed mb-10">
              A fully integrated sales and marketing infrastructure for ZeroWheel — from first website visit to closed install.
              Built on Salesforce CRM, Typeform lead intake, and Intercom AI, this system tracks every lead, opportunity, and
              revenue dollar across all channels and sales team members.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              {[
                { label: "Unit Price", value: "$1,000" },
                { label: "2026 Target", value: "1,000 units" },
                { label: "Revenue Goal", value: "$1M" },
                { label: "Active Channels", value: "6" },
              ].map((kpi, i) => (
                <div key={i} className="rounded-2xl border px-5 py-3" style={{ background: CARD_BG, borderColor: CARD_BORDER }}>
                  <p className="font-mono text-[9px] text-white/25 uppercase tracking-wider">{kpi.label}</p>
                  <p className="font-display text-2xl font-semibold mt-1" style={{ color: GOLD }}>{kpi.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────────────── */}
      <section id="tech-stack" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Technology Stack"
            title="Three Platforms. One Unified System."
            description="The ZeroWheel revenue infrastructure is built on three best-in-class platforms that integrate seamlessly — Salesforce as the CRM backbone, Typeform for intelligent lead capture, and Intercom with FinAI for AI-powered lead qualification and real-time engagement."
          />

          <motion.div className="grid md:grid-cols-3 gap-6 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {/* Salesforce */}
            <motion.div variants={fadeInUp} className="rounded-2xl border p-8" style={{ background: CARD_BG, borderColor: `${GOLD}25` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${GOLD}15` }}>
                <Database className="w-6 h-6" style={{ color: GOLD }} />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-display text-xl font-semibold text-white">Salesforce CRM</p>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full" style={{ background: `${GOLD}20`, color: GOLD }}>CORE</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider mb-4" style={{ color: GOLD_DIM }}>Lead & Opportunity Management</p>
              <p className="font-body text-sm text-white/40 leading-relaxed mb-5">
                Central CRM for all lead records, opportunity tracking, pipeline management, and revenue forecasting. Every lead from every channel flows into Salesforce with full campaign attribution, rep assignment, and stage tracking.
              </p>
              <ul className="space-y-2">
                {[
                  "Lead & Contact records with source attribution",
                  "Opportunity stages: Discovery → Contract",
                  "Campaign tracking with ROI reporting",
                  "Sales team activity logging (calls, emails, tasks)",
                  "Revenue forecasting and pipeline analytics",
                  "Win/loss reason capture and reporting",
                  "Automated lead routing and rep assignment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                    <span className="font-body text-xs text-white/45">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Typeform */}
            <motion.div variants={fadeInUp} className="rounded-2xl border p-8" style={{ background: CARD_BG, borderColor: `${TEAL}25` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${TEAL}15` }}>
                <FormInput className="w-6 h-6" style={{ color: TEAL }} />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-display text-xl font-semibold text-white">Typeform</p>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full" style={{ background: `${TEAL}20`, color: TEAL }}>INTAKE</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider mb-4" style={{ color: `${TEAL}80` }}>Lead Capture & Qualification</p>
              <p className="font-body text-sm text-white/40 leading-relaxed mb-5">
                Conversational lead intake forms embedded on the ZeroWheel website and landing pages. Typeform's conditional logic routes prospects through tailored question flows based on their segment (club, medical, corporate, consumer), capturing rich qualification data before the lead ever reaches a rep.
              </p>
              <ul className="space-y-2">
                {[
                  "Segment-specific intake forms (B2B vs. consumer)",
                  "Conditional logic for intelligent branching",
                  "UTM parameter capture for campaign attribution",
                  "Automatic Salesforce lead creation via Zapier/API",
                  "Lead scoring based on form responses",
                  "Multi-step forms with progress indicators",
                  "Mobile-optimized for consumer direct channel",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
                    <span className="font-body text-xs text-white/45">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Intercom / FinAI */}
            <motion.div variants={fadeInUp} className="rounded-2xl border p-8" style={{ background: CARD_BG, borderColor: `${PURPLE}25` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${PURPLE}15` }}>
                <Bot className="w-6 h-6" style={{ color: PURPLE }} />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-display text-xl font-semibold text-white">Intercom + FinAI</p>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full" style={{ background: `${PURPLE}20`, color: PURPLE }}>AI</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider mb-4" style={{ color: `${PURPLE}80` }}>AI-Enabled Engagement & Qualification</p>
              <p className="font-body text-sm text-white/40 leading-relaxed mb-5">
                Intercom's FinAI layer provides 24/7 AI-powered chat on the ZeroWheel website and post-form experience. FinAI answers product questions, qualifies intent, books demos, and routes high-intent leads directly to the right sales rep — all in real time, without human intervention.
              </p>
              <ul className="space-y-2">
                {[
                  "AI chat for instant lead response (24/7)",
                  "Product Q&A from ZeroWheel knowledge base",
                  "Intent scoring and lead qualification",
                  "Automated demo booking via calendar integration",
                  "Lead routing to correct rep by segment/territory",
                  "Handoff to live rep with full conversation context",
                  "Re-engagement sequences for dormant leads",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: PURPLE }} />
                    <span className="font-body text-xs text-white/45">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Integration Architecture */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>Integration Architecture</p>
            <p className="font-display text-lg font-semibold text-white mb-6">How the Three Systems Connect</p>
            <div className="grid md:grid-cols-5 gap-2 items-center">
              <div className="rounded-xl border p-4 text-center" style={{ borderColor: `${TEAL}30`, background: `${TEAL}08` }}>
                <Globe className="w-5 h-5 mx-auto mb-2" style={{ color: TEAL }} />
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-wider">Website</p>
                <p className="font-body text-xs text-white/30 mt-1">Typeform embed + Intercom widget</p>
              </div>
              <FlowArrow label="webhook" />
              <div className="rounded-xl border p-4 text-center" style={{ borderColor: `${PURPLE}30`, background: `${PURPLE}08` }}>
                <Bot className="w-5 h-5 mx-auto mb-2" style={{ color: PURPLE }} />
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-wider">Intercom FinAI</p>
                <p className="font-body text-xs text-white/30 mt-1">Qualify, route, book demo</p>
              </div>
              <FlowArrow label="API / Zapier" />
              <div className="rounded-xl border p-4 text-center" style={{ borderColor: `${GOLD}30`, background: `${GOLD}08` }}>
                <Database className="w-5 h-5 mx-auto mb-2" style={{ color: GOLD }} />
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-wider">Salesforce</p>
                <p className="font-body text-xs text-white/30 mt-1">Lead → Opp → Close</p>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                { title: "Typeform → Salesforce", desc: "Form submission triggers Zapier webhook → creates Lead record in Salesforce with all form fields, UTM source, and lead score mapped to custom fields.", color: TEAL },
                { title: "Intercom → Salesforce", desc: "FinAI conversation data syncs to Salesforce contact/lead record. Demo bookings create Tasks. Rep handoffs create Activities with full chat transcript.", color: PURPLE },
                { title: "Salesforce → Reporting", desc: "All pipeline, activity, and revenue data flows into Salesforce Reports & Dashboards, with custom BI views for leadership on channel ROI and team performance.", color: GOLD },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${item.color}20`, background: `${item.color}06` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Link2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: item.color }} />
                    <p className="font-mono text-[10px] font-semibold" style={{ color: item.color }}>{item.title}</p>
                  </div>
                  <p className="font-body text-[11px] text-white/35 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ── LEAD INTAKE FLOW ─────────────────────────────────────────────── */}
      <section id="lead-intake" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Lead Intake Flow"
            title="Website Visitor → Salesforce Lead"
            description="Every lead starts with a touchpoint — a website visit, a social click, a trade show scan, or a referral. This flow captures, qualifies, and routes that lead into Salesforce with full attribution before a human ever gets involved."
          />


          {/* Row 1: Website Visit → UTM Capture → FinAI Engagement → Typeform Intake */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 items-start mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <FlowNode icon={Globe} title="Website Visit" subtitle="Organic, paid, referral, or direct traffic lands on ZeroWheel site" color={TEAL} badge="Entry" />
            <FlowArrow />
            <FlowNode icon={Cpu} title="UTM Capture" subtitle="Source, medium, campaign, and content parameters captured automatically" color={TEAL} system="Typeform" />
            <FlowArrow />
            <FlowNode icon={Bot} title="FinAI Engagement" subtitle="Intercom AI responds instantly, answers questions, and scores visitor intent" color={PURPLE} system="Intercom" />
            <FlowArrow />
            <FlowNode icon={FormInput} title="Typeform Intake" subtitle="Segment-specific form: B2B (club/medical/corporate) or consumer direct" color={GOLD} system="Typeform" />
          </motion.div>
          {/* Row 2: SF Lead Created → Rep Notified → Sales Team Reachout */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 items-start" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <FlowNode icon={Database} title="SF Lead Created" subtitle="Zapier/API creates Lead record in Salesforce with all fields, score, and source — routed to the right rep" color={GOLD} system="Salesforce" />
            <FlowArrow />
            <FlowNode icon={Mail} title="Rep Notified" subtitle="Assigned rep receives email + Salesforce task within 5 minutes of lead creation" color={GOLD} system="Salesforce" />
            <FlowArrow />
            <FlowNode icon={Phone} title="Sales Team Reachout" subtitle="Rep calls or emails within SLA. All activity logged in Salesforce automatically" color={GREEN} system="Salesforce" badge="SLA: 1hr" />
          </motion.div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { title: "Lead Source Delineation", items: ["Direct Sales outreach (rep-initiated)", "E-Commerce (website purchase / inquiry)", "Partner & Referral (gym, clinic, facility)", "Inbound Marketing (SEO, content, email)", "Trade Show & Events", "Social Media & Paid Ads"], color: GOLD },
              { title: "Campaign Tracking Fields", items: ["UTM Source (google, instagram, partner)", "UTM Medium (cpc, email, organic, referral)", "UTM Campaign (spring-launch, trade-show-2026)", "UTM Content (ad variant / creative ID)", "Landing Page URL at time of conversion", "Typeform form ID (segment identifier)"], color: TEAL },
              { title: "Lead Scoring Criteria", items: ["Segment match (B2B club/medical = high)", "Budget indicated in form (>$1K = qualified)", "Timeline (within 90 days = hot)", "Decision-maker role (owner/GM = priority)", "FinAI intent score (1–10)", "Prior engagement (return visitor, email open)"], color: PURPLE },
            ].map((col, i) => (
              <DarkCard key={i}>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: col.color }}>{col.title}</p>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: col.color }} />
                      <span className="font-body text-xs text-white/45">{item}</span>
                    </li>
                  ))}
                </ul>
              </DarkCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD → OPPORTUNITY FLOW ──────────────────────────────────────── */}
      <section id="lead-to-opp" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Lead Process Management"
            title="Lead → Opportunity Conversion Flow"
            description="Once a lead is created in Salesforce, it enters a structured qualification and conversion process. Each stage has defined entry criteria, required activities, and exit criteria before the lead is converted to an opportunity."
          />

          <motion.div className="grid md:grid-cols-5 gap-4 mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <StageStep
              number="01"
              title="New Lead"
              owner="System Auto-Assign"
              color={GOLD}
              actions={[
                "Lead created from Typeform/Intercom/manual entry",
                "Source, campaign, and score fields populated",
                "Rep assigned by territory/segment rules",
                "Rep notified via email + SF task",
                "SLA clock starts (1-hour first contact)",
              ]}
            />
            <div className="flex items-center justify-center">
              <FlowArrow vertical />
            </div>
            <StageStep
              number="02"
              title="Contacted"
              owner="Sales Rep"
              color={TEAL}
              actions={[
                "Rep logs first call or email in Salesforce",
                "FinAI conversation reviewed for context",
                "Initial needs assessment completed",
                "Interest level confirmed (hot / warm / cold)",
                "Follow-up task scheduled within 24 hours",
              ]}
            />
            <div className="flex items-center justify-center">
              <FlowArrow vertical />
            </div>
            <StageStep
              number="03"
              title="Qualified"
              owner="Sales Rep"
              color={PURPLE}
              actions={[
                "BANT confirmed: Budget, Authority, Need, Timeline",
                "Segment and use case documented",
                "Decision-maker identified and engaged",
                "Product fit validated (ZeroWheel specs reviewed)",
                "Lead converted → Opportunity created in Salesforce",
              ]}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: GOLD }}>Lead Process Rules</p>
              <div className="space-y-3">
                {[
                  { rule: "1-Hour First Contact SLA", desc: "All new leads must receive first contact within 1 business hour of creation. Overdue leads escalate to manager." },
                  { rule: "3-Touch Minimum Before Disqualify", desc: "Leads must receive at least 3 documented contact attempts (call + email + FinAI re-engage) before being marked as unresponsive." },
                  { rule: "Lead Recycling at 30 Days", desc: "Leads with no activity for 30 days are recycled into a nurture sequence via Intercom email automation." },
                  { rule: "Disqualification Requires Reason", desc: "Reps must select a disqualification reason (no budget, wrong segment, competitor, timing) before closing a lead as lost." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-3" style={{ borderColor: `${GOLD}15`, background: `${GOLD}05` }}>
                    <p className="font-mono text-[10px] font-semibold mb-1" style={{ color: GOLD }}>{item.rule}</p>
                    <p className="font-body text-[11px] text-white/35 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </DarkCard>
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: TEAL }}>Lead Activity Tracking</p>
              <div className="space-y-2">
                {[
                  { activity: "Outbound Call", tracked: "Duration, outcome, next step", icon: Phone },
                  { activity: "Email Sent / Received", tracked: "Open rate, click-through, reply", icon: Mail },
                  { activity: "Demo Scheduled", tracked: "Date, attendees, product focus", icon: Calendar },
                  { activity: "FinAI Chat Session", tracked: "Intent score, questions asked, outcome", icon: Bot },
                  { activity: "Proposal Sent", tracked: "Document version, value, expiry date", icon: Activity },
                  { activity: "Follow-Up Task", tracked: "Due date, priority, completion status", icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    <item.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: TEAL }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs text-white/60">{item.activity}</p>
                      <p className="font-body text-[10px] text-white/25">{item.tracked}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── OPPORTUNITY → CLOSE FLOW ─────────────────────────────────────── */}
      <section id="opp-to-close" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Opportunity Process Management"
            title="Opportunity → Closed Won / Lost"
            description="Once a lead converts to an opportunity, it enters the formal sales pipeline. Each stage has defined criteria, required documentation, and probability weighting for revenue forecasting."
          />

          <motion.div className="grid md:grid-cols-5 gap-3 mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { stage: "Discovery", prob: "20%", color: GOLD, actions: ["Needs assessment completed", "Use case documented", "Key stakeholders identified", "ZeroWheel demo scheduled"] },
              { stage: "Demo", prob: "40%", color: "#B8963E", actions: ["Product demo delivered", "Technical specs reviewed", "Objections documented", "ROI case presented"] },
              { stage: "Proposal", prob: "60%", color: TEAL, actions: ["Formal proposal sent", "Pricing confirmed ($1,000/unit)", "Installation timeline agreed", "Decision timeline set"] },
              { stage: "Negotiation", prob: "80%", color: PURPLE, actions: ["Contract terms reviewed", "Legal/procurement engaged", "Final pricing agreed", "Install date confirmed"] },
              { stage: "Closed Won", prob: "100%", color: GREEN, actions: ["Contract signed", "Payment processed", "Install team scheduled", "Onboarding initiated"] },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className="rounded-2xl border p-5" style={{ background: CARD_BG, borderColor: `${s.color}25` }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-display text-sm font-semibold text-white">{s.stage}</p>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: `${s.color}20`, color: s.color }}>{s.prob}</span>
                </div>
                <ul className="space-y-1.5">
                  {s.actions.map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
                      <span className="font-body text-[11px] text-white/40 leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: GREEN }}>Closed Won — Requirements</p>
              <div className="space-y-2">
                {[
                  "Signed contract or purchase order on file",
                  "Payment confirmed (deposit or full payment)",
                  "Installation address and contact verified",
                  "Install date scheduled with operations team",
                  "Win reason selected (product fit, relationship, ROI, demo quality)",
                  "Referral request sent to customer",
                  "NPS survey scheduled for 30 days post-install",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                    <span className="font-body text-xs text-white/45">{item}</span>
                  </div>
                ))}
              </div>
            </DarkCard>
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: RED }}>Closed Lost — Requirements</p>
              <div className="space-y-2">
                {[
                  "Loss reason selected (required field — no blank closes)",
                  "Competitor identified if applicable",
                  "Budget objection amount documented",
                  "Timeline for potential re-engagement noted",
                  "Lead recycled to nurture sequence if future potential",
                  "Manager review required for deals >$5K lost",
                  "Loss analysis added to quarterly win/loss report",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: RED }} />
                    <span className="font-body text-xs text-white/45">{item}</span>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>
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
            </DarkCard>

            {/* Source Pie */}
            <DarkCard className="lg:col-span-1">
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Lead Source Mix</p>
              <p className="font-display text-lg font-medium text-white mb-4">YTD Distribution</p>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                  <Pie data={sourceData} dataKey="value" nameKey="name" cx="50%" cy="45%" outerRadius={75} innerRadius={38} paddingAngle={3}>
                    {sourceData.map((s, i) => <Cell key={i} fill={s.fill} />)}
                  </Pie>
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                </PieChart>
              </ResponsiveContainer>
            </DarkCard>

            {/* Monthly Leads */}
            <DarkCard className="lg:col-span-1">
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Lead Volume</p>
              <p className="font-display text-lg font-medium text-white mb-4">Monthly Leads & Opps</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={monthlyData.slice(0, 4)} barSize={14} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                  <Bar dataKey="leads" fill={GOLD} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="opps" fill={TEAL} radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── OPPORTUNITY PIPELINE ─────────────────────────────────────────── */}
      <section id="opportunity-pipeline" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Pipeline Management"
            title="Opportunity Pipeline"
            description="Real-time view of all open opportunities by stage, with weighted pipeline value for accurate revenue forecasting."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Pipeline Stages</p>
              <p className="font-display text-lg font-medium text-white mb-6">Open Opportunities</p>
              <div className="space-y-4">
                {pipelineStages.map((stage, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: stage.color }} />
                        <span className="font-body text-sm text-white/60">{stage.stage}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-white/30">{stage.count} deals</span>
                        <span className="font-mono text-sm font-semibold" style={{ color: stage.color }}>{fmt$(stage.value)}</span>
                      </div>
                    </div>
                    <ProgressBar value={stage.count} max={pipelineStages[0].count} color={stage.color} />
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t flex justify-between" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div>
                  <p className="font-mono text-[9px] text-white/25 uppercase tracking-wider">Total Pipeline</p>
                  <p className="font-display text-2xl font-semibold mt-1" style={{ color: GOLD }}>{fmt$(pipelineStages.reduce((s, d) => s + d.value, 0))}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-white/25 uppercase tracking-wider">Weighted Value</p>
                  <p className="font-display text-2xl font-semibold mt-1 text-white">{fmt$(Math.round(pipelineStages.reduce((s, d, i) => s + d.value * [0.2, 0.4, 0.6, 0.8, 1][i], 0)))}</p>
                </div>
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Pipeline Value</p>
              <p className="font-display text-lg font-medium text-white mb-4">Value by Stage ($)</p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={pipelineStages} layout="vertical" barSize={18}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}K`} />
                  <YAxis type="category" dataKey="stage" tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip content={<DarkTooltip />} />
                  <Bar dataKey="value" name="Pipeline Value" radius={[0, 4, 4, 0]}>
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
            eyebrow="Sales Team Performance"
            title="Rep Activity & Results"
            description="Track individual rep performance across installs, revenue, lead volume, and activity metrics. Identify top performers and coaching opportunities."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Team Leaderboard</p>
              <p className="font-display text-lg font-medium text-white mb-6">YTD Installs</p>
              <div className="space-y-4">
                {repData.map((rep, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold font-mono flex-shrink-0" style={{ background: i === 0 ? `${GOLD}20` : "rgba(255,255,255,0.05)", color: i === 0 ? GOLD : "rgba(255,255,255,0.3)" }}>
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <span className="font-body text-sm text-white/70">{rep.rep}</span>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs text-white/30">{rep.leads} leads</span>
                          <span className="font-mono text-xs" style={{ color: TEAL }}>{rep.installs} units</span>
                          <span className="font-mono text-xs" style={{ color: GOLD }}>{fmt$(rep.revenue)}</span>
                        </div>
                      </div>
                      <ProgressBar value={rep.installs} max={repData[0].installs} color={i === 0 ? GOLD : GOLD_DIM} />
                    </div>
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Activity Tracking</p>
              <p className="font-display text-lg font-medium text-white mb-4">Calls & Installs by Rep</p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={repData} barSize={16} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="rep" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 9, fontFamily: "monospace" }} axisLine={false} tickLine={false} tickFormatter={v => v.split(".")[1]?.trim() ?? v} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                  <Bar dataKey="installs" name="Installs" fill={GOLD} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="calls" name="Calls" fill={GOLD_DIM} radius={[3, 3, 0, 0]} opacity={0.5} />
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── CHANNEL PERFORMANCE ──────────────────────────────────────────── */}
      <section id="channel-performance" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Channel Attribution"
            title="Which Channels Are Working"
            description="Compare lead volume, conversion rates, and revenue contribution across all six go-to-market channels. Identify where to double down and where to cut."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            <DarkCard className="lg:col-span-2">
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Channel Performance</p>
              <p className="font-display text-lg font-medium text-white mb-4">Installs by Channel — YTD</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={sourceData} barSize={32}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 9, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Bar dataKey="value" name="Installs" radius={[4, 4, 0, 0]}>
                    {sourceData.map((s, i) => <Cell key={i} fill={s.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Channel Scorecard</p>
              <p className="font-display text-lg font-medium text-white mb-4">Revenue Share</p>
              <div className="space-y-3">
                {sourceData.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="font-body text-xs text-white/50">{s.name}</span>
                      <span className="font-mono text-xs font-semibold" style={{ color: s.fill }}>{s.value} units</span>
                    </div>
                    <ProgressBar value={s.value} max={sourceData[0].value} color={s.fill} />
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── REVENUE FORECAST ─────────────────────────────────────────────── */}
      <section id="revenue-forecast" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Revenue Forecasting"
            title="Pipeline-Based Revenue Forecast"
            description="Forward-looking revenue projections based on current pipeline, historical conversion rates, and seasonal patterns. Forecast ranges reflect low, mid, and high scenarios."
          />

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Revenue vs Budget</p>
              <p className="font-display text-lg font-medium text-white mb-4">Monthly — Actual vs Target ($)</p>
              <ResponsiveContainer width="100%" height={260}>
                <ComposedChart data={monthlyData}>
                  <defs>
                    <linearGradient id="revGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={GOLD} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}K`} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                  <Area type="monotone" dataKey="revenue" name="Revenue" stroke={GOLD} strokeWidth={2.5} fill="url(#revGrad2)" dot={{ fill: GOLD, r: 4 }} connectNulls={false} />
                  <Line type="monotone" dataKey="budget" name="Budget" stroke="rgba(255,255,255,0.2)" strokeWidth={1.5} strokeDasharray="6 3" dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Forward Forecast</p>
              <p className="font-display text-lg font-medium text-white mb-4">Units — Low / Mid / High vs Budget</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={forecastData} barSize={14} barGap={3}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="period" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "monospace" }} axisLine={false} tickLine={false} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }} />
                  <Bar dataKey="low" name="Low" fill={RED} radius={[3, 3, 0, 0]} opacity={0.7} />
                  <Bar dataKey="mid" name="Mid" fill={GOLD} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="high" name="High" fill={TEAL} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="budget" name="Budget" fill="rgba(255,255,255,0.15)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </DarkCard>
          </div>

          {/* Forecast Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { period: "Next 30 Days", low: "$78K", mid: "$92K", high: "$108K", color: GOLD },
              { period: "Next 90 Days", low: "$248K", mid: "$298K", high: "$341K", color: TEAL },
              { period: "H2 2026", low: "$519K", mid: "$619K", high: "$709K", color: PURPLE },
              { period: "Full Year 2026", low: "$764K", mid: "$864K", high: "$954K", color: GREEN },
            ].map((f, i) => (
              <DarkCard key={i}>
                <p className="font-mono text-[9px] text-white/25 uppercase tracking-wider mb-3">{f.period}</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="font-body text-xs text-white/30">Low</span>
                    <span className="font-mono text-xs text-red-400">{f.low}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-xs text-white/60">Mid</span>
                    <span className="font-mono text-sm font-semibold" style={{ color: f.color }}>{f.mid}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-xs text-white/30">High</span>
                    <span className="font-mono text-xs" style={{ color: TEAL }}>{f.high}</span>
                  </div>
                </div>
              </DarkCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── WIN / LOSS ───────────────────────────────────────────────────── */}
      <section id="win-loss" className="py-20 pb-32 bg-[#0A0A0A]">
        <div className="container">
          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />
          <SectionHeader
            eyebrow="Win / Loss Analysis"
            title="Why We Win. Why We Lose."
            description="Structured win/loss tracking is required on every closed opportunity. This data drives product, pricing, and sales coaching decisions."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Win Reasons</p>
              <p className="font-display text-lg font-medium text-white mb-6">Why Customers Choose ZeroWheel</p>
              <div className="space-y-3">
                {winLossReasons.filter(r => r.won > 0).map((r, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-sm text-white/60">{r.reason}</span>
                      <span className="font-mono text-xs font-semibold" style={{ color: r.color }}>{r.won} wins</span>
                    </div>
                    <ProgressBar value={r.won} max={Math.max(...winLossReasons.map(x => x.won))} color={r.color} />
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">Loss Reasons</p>
              <p className="font-display text-lg font-medium text-white mb-6">Why Deals Are Lost</p>
              <div className="space-y-3">
                {winLossReasons.filter(r => r.lost > 0).map((r, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-sm text-white/60">{r.reason}</span>
                      <span className="font-mono text-xs font-semibold" style={{ color: r.color }}>{r.lost} losses</span>
                    </div>
                    <ProgressBar value={r.lost} max={Math.max(...winLossReasons.map(x => x.lost))} color={r.color} />
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>
        </div>
      </section>

    </Layout>
  );
}
