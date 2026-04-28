/**
 * ZeroWheel GTM Marketing Plan — WEG Proposed
 *
 * ALIGNMENT NOTES (do not contradict boss's pages):
 * - MSRP: $1,095 (NOT $1,000). Vertical floor: $825. Commercial floor: $695. GSA: $694.
 * - 9 Macro LOBs: Private Clubs, Commercial Fitness, Medical & Rehab, DTC, Corporate Wellness,
 *   Professional Sports, Hospitality & Amenities, Military & Government, Cruise & Maritime
 * - WEG framing: WEG is the consulting advisor, ZeroWheel is the client
 * - Sales Infrastructure page owns: Salesforce pipeline, rep performance, forecasting, win/loss
 * - Commercial Strategy page owns: pricing tiers, margin analysis, channel partner program
 * - B2B2C page owns: distribution model, consumer LTV, engagement flywheel
 * - Sales Enablement page owns: LOB targeting, named accounts, deal metrics
 * - THIS PAGE owns: demand generation, channel mix, content/thought leadership,
 *   Klaviyo email nurture (WEG recommendation), campaign architecture, event strategy,
 *   influencer/affiliate program (DTC track only), marketing accountability metrics
 *
 * Design: Dark luxury, #0A0A0A bg, gold/teal/purple accents
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Bot, Database, Mail, Phone,
  Users, Handshake, GraduationCap, Star, Award, Building2,
  Dumbbell, Stethoscope, Trophy, Briefcase, Landmark,
  ArrowRight, CheckCircle2,
  Target, DollarSign, Megaphone,
  ChevronDown, ChevronUp, Bell, Zap, Send, Clock,
  BarChart3, Calendar, Layers, Shield, Ship, UserCircle,
  TrendingUp, MapPin, Mic2, Video, Hash,
} from "lucide-react";
import Layout from "@/components/Layout";
import DarkHero from "@/components/DarkHero";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Colors ──────────────────────────────────────────────────────────────────
const GOLD    = "#C9A962";
const GOLD_DIM = "#8B7D3C";
const TEAL    = "#2DD4BF";
const PURPLE  = "#A78BFA";
const GREEN   = "#4ADE80";
const ORANGE  = "#FB923C";
const CARD_BG = "#111111";
const CARD_BORDER = "rgba(201,169,98,0.12)";

// ─── Section Nav ─────────────────────────────────────────────────────────────
const sections = [
  { id: "hero",           label: "Overview"      },
  { id: "systems",        label: "Tech Stack"    },
  { id: "lead-funnel",    label: "Lead Funnel"   },
  { id: "channels",       label: "Channels"      },
  { id: "content",        label: "Content"       },
  { id: "email-nurture",  label: "Email Nurture" },
  { id: "events",         label: "Events"        },
  { id: "timeline",       label: "Timeline"      },
  { id: "accountability", label: "Accountability"},
];

// ─── Shared UI ───────────────────────────────────────────────────────────────
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
      <p className="font-body text-white/40 max-w-3xl leading-relaxed">{description}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />;
}

function Tag({ label, color = GOLD }: { label: string; color?: string }) {
  return (
    <span className="font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full"
      style={{ background: `${color}18`, color }}>
      {label}
    </span>
  );
}

// ─── Expandable Channel Card ──────────────────────────────────────────────────
function ChannelCard({ title, tag, tagColor, icon: Icon, summary, kpis, tactics, sfFields }: {
  title: string; tag: string; tagColor: string; icon: any;
  summary: string; kpis: string[]; tactics: string[]; sfFields: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: CARD_BG, borderColor: CARD_BORDER }}>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${tagColor}18` }}>
            <Icon className="w-5 h-5" style={{ color: tagColor }} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <p className="font-display text-base font-semibold text-white">{title}</p>
              <Tag label={tag} color={tagColor} />
            </div>
            <p className="font-body text-xs text-white/35 leading-relaxed max-w-xl">{summary}</p>
          </div>
        </div>
        {open ? <ChevronUp className="w-4 h-4 flex-shrink-0 text-white/30" /> : <ChevronDown className="w-4 h-4 flex-shrink-0 text-white/30" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="px-6 pb-6 border-t" style={{ borderColor: CARD_BORDER }}>
              <div className="grid md:grid-cols-3 gap-6 pt-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: tagColor }}>Tactics</p>
                  <ul className="space-y-2">
                    {tactics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: tagColor }} />
                        <span className="font-body text-xs text-white/45 leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: GOLD }}>Marketing KPIs</p>
                  <ul className="space-y-2">
                    {kpis.map((k, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                        <span className="font-body text-xs text-white/45 leading-relaxed">{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: PURPLE }}>Salesforce Tracking</p>
                  <ul className="space-y-2">
                    {sfFields.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Database className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: PURPLE }} />
                        <span className="font-mono text-[10px] text-white/35 leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── LOB Playbook Card ────────────────────────────────────────────────────────
function LOBCard({ icon: Icon, name, price, priceLabel, color, demandChannels, contentAngles, kpiTarget }: {
  icon: any; name: string; price: string; priceLabel: string; color: string;
  demandChannels: string[]; contentAngles: string[]; kpiTarget: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: CARD_BG, borderColor: CARD_BORDER }}>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${color}18` }}>
            <Icon className="w-4.5 h-4.5" style={{ color }} />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-white">{name}</p>
            <p className="font-mono text-[9px] uppercase tracking-wider mt-0.5" style={{ color }}>{price} · {priceLabel}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] text-white/30 hidden md:block">Target: {kpiTarget}</span>
          {open ? <ChevronUp className="w-4 h-4 text-white/30" /> : <ChevronDown className="w-4 h-4 text-white/30" />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="px-5 pb-5 border-t" style={{ borderColor: CARD_BORDER }}>
              <div className="grid md:grid-cols-2 gap-5 pt-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color }}>Demand Generation Channels</p>
                  <ul className="space-y-2">
                    {demandChannels.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color }} />
                        <span className="font-body text-xs text-white/45 leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: GOLD }}>Content Angles</p>
                  <ul className="space-y-2">
                    {contentAngles.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                        <span className="font-body text-xs text-white/45 leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Email Sequence Card ──────────────────────────────────────────────────────
function EmailSequence({ name, segment, color, emails }: {
  name: string; segment: string; color: string;
  emails: { day: string; subject: string; goal: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: CARD_BG, borderColor: CARD_BORDER }}>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors">
        <div>
          <p className="font-display text-sm font-semibold text-white">{name}</p>
          <p className="font-mono text-[9px] uppercase tracking-wider mt-0.5" style={{ color }}>{segment} · {emails.length} emails</p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-white/30" /> : <ChevronDown className="w-4 h-4 text-white/30" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="px-5 pb-5 border-t" style={{ borderColor: CARD_BORDER }}>
              <div className="space-y-3 pt-4">
                {emails.map((e, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl p-3"
                    style={{ background: `${color}08`, borderLeft: `2px solid ${color}40` }}>
                    <span className="font-mono text-[10px] flex-shrink-0 mt-0.5" style={{ color }}>{e.day}</span>
                    <div>
                      <p className="font-body text-xs text-white/70 font-medium">{e.subject}</p>
                      <p className="font-body text-[11px] text-white/35 mt-0.5">{e.goal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ZWMarketingInfrastructure() {
  return (
    <Layout>
      <SectionNav sections={sections} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div id="hero">
        <DarkHero
          eyebrow="WEG Proposed Marketing Plan"
          title="Demand Generation Architecture"
          description="WEG's recommended marketing infrastructure for ZeroWheel — a full-funnel demand generation system that feeds the sales pipeline across all 9 macro lines of business. This plan covers channel mix, Klaviyo email nurture, content strategy, event activation, and the influencer program for the DTC channel. For pipeline management, rep performance, and revenue forecasting, see the Infrastructure page."
          stats={[
            { value: "9",      label: "Macro LOBs" },
            { value: "6",      label: "Demand Channels" },
            { value: "Klaviyo", label: "Email Platform" },
            { value: "$1,095", label: "DTC MSRP" },
          ]}
        />
      </div>

      {/* ── SYSTEMS ARCHITECTURE ─────────────────────────────────────────── */}
      <section id="systems" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="WEG Recommended Tech Stack"
            title="Marketing Systems Architecture"
            description="WEG recommends a four-platform marketing stack that integrates with ZeroWheel's existing Salesforce CRM and Typeform/Intercom infrastructure. Each platform has a defined role — no overlap, no duplication. Klaviyo is the new addition WEG proposes for email nurture and lifecycle marketing."
          />

          {/* Platform Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              {
                name: "Salesforce CRM", tag: "EXISTING", color: GOLD,
                role: "Single source of truth for all leads, opportunities, and revenue. Every marketing touchpoint flows into Salesforce with full UTM attribution. WEG's marketing plan is built to feed this system.",
                fields: ["Lead Source (UTM)", "Campaign Attribution", "LOB Classification", "Marketing Qualified Lead flag", "Klaviyo Sequence Enrolled"],
              },
              {
                name: "Typeform", tag: "EXISTING", color: TEAL,
                role: "Segment-specific intake forms for B2B (club, medical, corporate) and DTC channels. Conditional logic routes prospects through tailored flows. Zapier pushes all submissions to Salesforce within 60 seconds.",
                fields: ["B2B Intake (6 segments)", "DTC Consumer Form", "Event Lead Capture", "Partner Application Form", "Affiliate Signup Form"],
              },
              {
                name: "Intercom + FinAI", tag: "EXISTING", color: PURPLE,
                role: "AI-powered chat on ZeroWheel.com. FinAI qualifies intent, answers product questions, books demos, and routes high-intent leads to the right rep. All conversation data syncs to Salesforce.",
                fields: ["Intent Score (1–10)", "Segment Detection", "Demo Booking", "Rep Routing", "Dormant Re-engagement"],
              },
              {
                name: "Klaviyo", tag: "WEG RECOMMENDS", color: ORANGE,
                role: "Email lifecycle platform for all post-form nurture sequences. Integrates natively with Salesforce to sync Lead and Contact records into Klaviyo profiles. Handles both B2B drip sequences and DTC consumer flows in one platform. ~$150/month for 10K subscribers.",
                fields: ["B2B Nurture (5 sequences)", "DTC Welcome + Abandon", "Re-engagement Flows", "Post-Purchase Sequence", "Affiliate Partner Updates"],
              },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="rounded-2xl border p-6" style={{ background: CARD_BG, borderColor: `${p.color}25` }}>
                <div className="flex items-center gap-2 mb-4">
                  <p className="font-display text-base font-semibold text-white">{p.name}</p>
                  <Tag label={p.tag} color={p.color} />
                </div>
                <p className="font-body text-xs text-white/40 leading-relaxed mb-4">{p.role}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: p.color }}>Key Uses</p>
                <ul className="space-y-1.5">
                  {p.fields.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: p.color }} />
                      <span className="font-mono text-[10px] text-white/35">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Integration Flow */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>How the Stack Connects</p>
            <p className="font-display text-lg font-semibold text-white mb-6">From First Click to Salesforce Lead</p>
            <div className="overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max">
                {[
                  { label: "Website Visit", sub: "UTM captured", color: TEAL },
                  { label: "FinAI Chat", sub: "Intent scored", color: PURPLE },
                  { label: "Typeform", sub: "Segment qualified", color: TEAL },
                  { label: "Zapier", sub: "60-sec sync", color: ORANGE },
                  { label: "Salesforce Lead", sub: "Rep assigned", color: GOLD },
                  { label: "Klaviyo Enrolled", sub: "Nurture begins", color: ORANGE },
                  { label: "Rep Outreach", sub: "SLA: 1 hour", color: GREEN },
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="rounded-xl border px-4 py-3 text-center min-w-[100px]"
                      style={{ borderColor: `${step.color}30`, background: `${step.color}08` }}>
                      <p className="font-mono text-[10px] font-semibold" style={{ color: step.color }}>{step.label}</p>
                      <p className="font-body text-[10px] text-white/30 mt-0.5">{step.sub}</p>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-3 h-3 flex-shrink-0 text-white/20" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                { title: "UTM Taxonomy", desc: "Every marketing touchpoint tagged: utm_source (meta/linkedin/cmaa/email/partner), utm_medium (cpc/email/organic/referral/event), utm_campaign (lob-slug + quarter), utm_content (creative ID). Captured by Typeform, stored in Salesforce Lead Source fields.", color: TEAL },
                { title: "Klaviyo Enrollment Trigger", desc: "Zapier webhook fires on Salesforce Lead creation. Klaviyo profile created with LOB segment, lead score, and campaign source. Correct nurture sequence auto-enrolled based on LOB classification field.", color: ORANGE },
                { title: "Salesforce Attribution", desc: "Every Klaviyo email click, form fill, and demo booking writes back to the Salesforce Lead record via native Klaviyo-Salesforce connector. Marketing attribution is visible on every opportunity.", color: GOLD },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${item.color}20`, background: `${item.color}06` }}>
                  <p className="font-mono text-[10px] font-semibold mb-2" style={{ color: item.color }}>{item.title}</p>
                  <p className="font-body text-[11px] text-white/30 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ── LEAD FUNNEL ──────────────────────────────────────────────────── */}
      <section id="lead-funnel" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Demand Generation Funnel"
            title="Top-of-Funnel to Sales Handoff"
            description="WEG's proposed funnel tracks every lead from first marketing touchpoint to qualified sales opportunity. Marketing owns the top three stages. Sales owns Discovery through Contract. The Infrastructure page details the sales pipeline in full."
          />

          {/* Funnel Stages */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {[
              { stage: "Awareness", owner: "Marketing", desc: "Paid social, events, content, WOM, influencer posts reach target personas across all 9 LOBs", color: TEAL, tag: "Top of Funnel" },
              { stage: "Engagement", owner: "Marketing", desc: "Website visit, Intercom FinAI chat, content download, social follow, or email open", color: TEAL, tag: "Top of Funnel" },
              { stage: "Lead Capture", owner: "Marketing", desc: "Typeform submission or Meta lead form fill. UTM source captured. Klaviyo nurture sequence enrolled.", color: ORANGE, tag: "Mid Funnel" },
              { stage: "Discovery", owner: "Sales", desc: "Rep makes first contact within 1-hour SLA. Qualification call, needs assessment, LOB confirmed.", color: GOLD, tag: "Sales Pipeline" },
              { stage: "Demo / Proposal", owner: "Sales", desc: "Live or video demo. Proposal sent with unit count, pricing tier (DTC $1,095 / Vertical $825 / Commercial $695).", color: GOLD, tag: "Sales Pipeline" },
              { stage: "Contract / Close", owner: "Sales", desc: "Negotiation within pricing thresholds. PO received. Install scheduled. Win logged in Salesforce.", color: GREEN, tag: "Closed Won" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border p-4 flex flex-col"
                style={{ background: CARD_BG, borderColor: `${s.color}25` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: s.color }}>{s.tag}</span>
                </div>
                <p className="font-display text-sm font-semibold text-white mb-1">{s.stage}</p>
                <p className="font-mono text-[9px] text-white/30 mb-2">Owner: {s.owner}</p>
                <p className="font-body text-[11px] text-white/40 leading-relaxed flex-1">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Lead Source Classification */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>Salesforce Lead Source Classification</p>
            <p className="font-display text-lg font-semibold text-white mb-6">How Every Lead Gets Tagged in Salesforce</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { source: "Direct Sales Outreach", utm: "utm_source=direct-sales", sf: "Lead Source = Direct Sales", color: GOLD },
                { source: "Meta / Paid Social", utm: "utm_source=meta&utm_medium=cpc", sf: "Lead Source = Paid Social", color: TEAL },
                { source: "LinkedIn Sales Navigator", utm: "utm_source=linkedin&utm_medium=outbound", sf: "Lead Source = LinkedIn", color: PURPLE },
                { source: "CMAA / Trade Events", utm: "utm_source=cmaa&utm_medium=event", sf: "Lead Source = Event", color: ORANGE },
                { source: "Partner / Referral", utm: "utm_source=partner&utm_medium=referral", sf: "Lead Source = Partner Referral", color: GREEN },
                { source: "Influencer / Affiliate", utm: "utm_source=influencer&utm_medium=affiliate", sf: "Lead Source = Affiliate", color: TEAL },
                { source: "Organic / SEO", utm: "utm_source=organic&utm_medium=search", sf: "Lead Source = Organic", color: GOLD_DIM },
                { source: "Email / Klaviyo", utm: "utm_source=klaviyo&utm_medium=email", sf: "Lead Source = Email Marketing", color: ORANGE },
                { source: "Word of Mouth", utm: "utm_source=wom&utm_medium=referral", sf: "Lead Source = Word of Mouth", color: GREEN },
              ].map((row, i) => (
                <div key={i} className="rounded-xl border p-3" style={{ borderColor: `${row.color}20`, background: `${row.color}06` }}>
                  <p className="font-display text-xs font-semibold text-white mb-1">{row.source}</p>
                  <p className="font-mono text-[9px] text-white/30 mb-1">{row.utm}</p>
                  <p className="font-mono text-[9px]" style={{ color: row.color }}>{row.sf}</p>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ── DEMAND CHANNELS ──────────────────────────────────────────────── */}
      <section id="channels" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Demand Generation Channels"
            title="Six Channels. One Coordinated Attack."
            description="WEG recommends six demand generation channels for ZeroWheel, each with a defined role, target LOB, and Salesforce tracking field. These channels feed the sales pipeline — for LOB-specific targeting and named account strategy, see the Sales Enablement page."
          />
          <div className="space-y-3">
            <ChannelCard
              title="B2B Direct Outreach"
              tag="Primary Channel"
              tagColor={GOLD}
              icon={Handshake}
              summary="Structured outbound sales sequences targeting the 9 macro LOBs via LinkedIn Sales Navigator, cold email, and phone. WEG's existing relationships in Private Clubs (CMAA, Troon), Cruise (One Spa World), and Sports Performance (TPI, AMPD) are the primary entry points."
              tactics={[
                "LinkedIn Sales Navigator sequences targeting Fitness Directors, GMs, and Wellness Directors",
                "CMAA chapter outreach via WEG's existing chapter relationships (Philadelphia, Florida, Mile High)",
                "Troon Golf property-by-property outreach using WEG's Troon contacts",
                "One Spa World direct engagement for 144-vessel fleet rollout",
                "TPI and AMPD Golf Performance for sports performance channel entry",
                "3-touch minimum sequence before disqualification: email → LinkedIn → call",
                "All activity logged in Salesforce as Tasks with outcome codes",
              ]}
              kpis={[
                "Outbound sequences initiated per rep per week",
                "Response rate by LOB (target: 15%+ for warm contacts)",
                "Meeting set rate from outbound (target: 8%)",
                "Salesforce Tasks completed vs. target",
                "Pipeline created from outbound vs. inbound",
              ]}
              sfFields={[
                "Lead Source = Direct Sales",
                "Lead.Outbound_Sequence__c (sequence name)",
                "Lead.Touch_Count__c (1–3+)",
                "Activity: Call/Email/LinkedIn logged",
                "Campaign: LOB-specific outbound campaign",
              ]}
            />
            <ChannelCard
              title="Paid Social (Meta + LinkedIn)"
              tag="Demand Generation"
              tagColor={TEAL}
              icon={Target}
              summary="Meta campaigns targeting consumer and facility decision-maker personas. LinkedIn targeting Fitness Directors, Wellness Directors, and S&C coaches. All ads drive to LOB-specific landing pages with Typeform intake. Test-and-learn approach — small budgets, fast iteration."
              tactics={[
                "Meta: 3 persona campaigns — Private Club Fitness Director (golf/pickleball angle), Sports Performance Coach (rotational power angle), DTC Consumer (core strength/longevity angle)",
                "Meta Lead Ads for event pre-registration and demo requests — reduces friction vs. landing page",
                "LinkedIn Sponsored Content targeting job titles: Fitness Director, Director of Wellness, S&C Coach, Club Manager, Hotel GM",
                "Retargeting audiences: website visitors, Typeform abandons, video viewers (50%+)",
                "LOB-specific landing pages with Typeform embed — unique UTM per ad set",
                "A/B test creative: product demo video vs. athlete testimonial vs. facility installation photo",
                "Monthly budget review — scale winners, kill losers within 30 days",
              ]}
              kpis={[
                "Cost per Lead (CPL) by LOB — target: <$50 B2B, <$30 DTC",
                "Click-through rate by creative (target: 1.5%+ Meta, 0.5%+ LinkedIn)",
                "Typeform completion rate from ad traffic (target: 35%+)",
                "Lead-to-Opportunity conversion from paid social",
                "ROAS by campaign (target: 3x+ within 90 days)",
              ]}
              sfFields={[
                "Lead Source = Paid Social",
                "Lead.UTM_Source__c = meta / linkedin",
                "Lead.UTM_Campaign__c (LOB + quarter)",
                "Lead.UTM_Content__c (creative ID)",
                "Campaign: linked to SF Campaign record",
              ]}
            />
            <ChannelCard
              title="Partnerships & Sponsorships"
              tag="Strategic Channel"
              tagColor={PURPLE}
              icon={Award}
              summary="Strategic partnerships that provide access to concentrated target audiences — CMAA preferred vendor status, TPI affiliate program, and management company relationships. Not the PGA Tour level — focused on high-ROI, testable partnerships at the right scale for a startup."
              tactics={[
                "Pursue CMAA Preferred Vendor status — provides access to 7,000+ club managers and direct endorsement in CMAA communications",
                "TPI (Titleist Performance Institute) affiliate partnership — access to 20,000+ certified TPI professionals who work with golfers in private clubs",
                "AMPD Golf Performance partnership for sports performance channel credibility",
                "Troon Golf preferred equipment vendor pursuit — covers 700+ properties globally",
                "One Spa World preferred wellness equipment partner for maritime channel",
                "Management company relationships: Peacock & Lewis, Club Wellness Evolutions, The Salus Group",
                "Test small sponsorships at CMAA regional events before committing to national",
              ]}
              kpis={[
                "CMAA preferred vendor application submitted (Q2 2026)",
                "TPI partnership agreement signed (Q2 2026)",
                "Partner-sourced leads per quarter",
                "Partner-influenced revenue (opportunities where partner was involved)",
                "Number of active partnership agreements",
              ]}
              sfFields={[
                "Lead Source = Partner Referral",
                "Lead.Partner_Name__c (CMAA/TPI/Troon etc.)",
                "Opportunity.Partner_Influenced__c (checkbox)",
                "Campaign: partner-specific campaign record",
                "Account.Partner_Tier__c (Preferred/Affiliate/Referral)",
              ]}
            />
            <ChannelCard
              title="Events & Trade Shows"
              tag="Relationship Channel"
              tagColor={ORANGE}
              icon={MapPin}
              summary="Presence at key industry events where ZeroWheel's target buyers congregate. CMAA regional conferences are the highest-priority events. Each event requires a pre-event outreach sequence, on-site lead capture via Typeform, and a post-event Klaviyo nurture sequence."
              tactics={[
                "CMAA Regional Conferences (multiple per year) — booth presence, demo station, pre-scheduled meetings with chapter contacts",
                "CMAA Annual Conference — flagship event for Private Clubs channel",
                "PGA Merchandise Show — Sports Performance and Private Clubs channel exposure",
                "Seatrade Cruise Global — Cruise & Maritime channel entry",
                "NSCA National Conference — Sports Performance and Commercial Fitness channel",
                "HITEC / ALIS — Hospitality & Amenities channel",
                "NRPA Annual Conference — Corporate Wellness and Military/Government channel",
                "Pre-event: LinkedIn outreach to registered attendees 2 weeks prior",
                "On-site: Typeform QR code for lead capture, business card scanner backup",
                "Post-event: Klaviyo event follow-up sequence within 24 hours",
              ]}
              kpis={[
                "Leads captured per event (target: 30+ per CMAA regional)",
                "Meetings pre-scheduled before event (target: 10+ per event)",
                "Cost per lead from events vs. other channels",
                "Opportunities created within 30 days of event",
                "Revenue influenced by event attendance",
              ]}
              sfFields={[
                "Lead Source = Event",
                "Lead.Event_Name__c (CMAA-Regional-Q2 etc.)",
                "Lead.Event_Date__c",
                "Campaign: event-specific campaign record",
                "Klaviyo: Event Follow-Up sequence enrolled",
              ]}
            />
            <ChannelCard
              title="Content & Thought Leadership"
              tag="Long-Term Channel"
              tagColor={GREEN}
              icon={GraduationCap}
              summary="WEG recommends ZeroWheel establish thought leadership in golf performance, pickleball training, and longevity — the three content pillars that align with the highest-value LOBs. Content drives organic discovery, builds credibility with facility decision-makers, and supports the influencer program."
              tactics={[
                "Golf performance content series: 'Add 15 Yards to Your Drive' — rotational power training with ZeroWheel, targeting golf pros and club members",
                "Pickleball training series: 'Core Strength for Pickleball' — targeting the fastest-growing sport in private clubs (Life Time, CMAA properties)",
                "Longevity content: 'Core Training After 50' — targeting medical, hospitality, and DTC channels",
                "Seed ZeroWheel units with 5–10 TPI-certified trainers and AMPD Golf coaches for content creation and feedback",
                "Case study library: Rochester Athletic Club (6 units, 16K+ members), LA Rams, Aroldis Chapman — one case study per LOB",
                "YouTube channel: product demos, trainer testimonials, facility installation walkthroughs",
                "LinkedIn articles targeting club managers and fitness directors on ROI of core training equipment",
              ]}
              kpis={[
                "Content pieces published per month (target: 4+)",
                "Organic website sessions from content (target: 500+/month by Q3)",
                "Trainer seeding program: units placed with influencers (target: 10 by Q2)",
                "Case studies published per LOB (target: 1 per LOB by Q4)",
                "LinkedIn follower growth (target: 500+ by Q4)",
              ]}
              sfFields={[
                "Lead Source = Organic / Content",
                "Lead.Content_Piece__c (article/video title)",
                "Campaign: content campaign record",
                "Lead.Trainer_Referral__c (trainer name if applicable)",
                "Account.Case_Study_Published__c (checkbox)",
              ]}
            />
            <ChannelCard
              title="Word of Mouth + Referral"
              tag="Amplification Channel"
              tagColor={TEAL}
              icon={Users}
              summary="WOM is the highest-converting channel for ZeroWheel — a facility manager who sees the unit at a peer's club is pre-sold. WEG recommends a structured referral program for facility partners and a formal ask-for-referral process built into the post-install workflow in Salesforce."
              tactics={[
                "Post-install Salesforce automation: 30 days after install, rep receives task to ask for referral and testimonial",
                "Referral incentive for facility partners: $200 credit on next order for each qualified referral that closes",
                "Peer-to-peer introductions: WEG facilitates introductions between installed accounts and prospects in the same LOB",
                "CMAA member-to-member: leverage installed CMAA chapter members to introduce ZeroWheel at chapter meetings",
                "Testimonial program: video testimonials from Fitness Directors for use in sales decks and social proof",
                "Net Promoter Score survey at 60 days post-install — high scorers asked for referral immediately",
              ]}
              kpis={[
                "Referrals generated per quarter (target: 15%+ of new leads from referral)",
                "Referral close rate vs. other sources (target: 2x average)",
                "NPS score at 60 days post-install (target: 50+)",
                "Testimonials collected per quarter (target: 3+)",
                "Revenue from referral-sourced opportunities",
              ]}
              sfFields={[
                "Lead Source = Word of Mouth",
                "Lead.Referred_By__c (Account name)",
                "Opportunity.Referral_Source__c",
                "Campaign: referral program campaign",
                "Account.NPS_Score__c + Account.NPS_Date__c",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT & THOUGHT LEADERSHIP ─────────────────────────────────── */}
      <section id="content" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Content Strategy"
            title="Three Pillars. Nine LOBs. One Voice."
            description="WEG recommends ZeroWheel own three content pillars that map directly to the highest-value LOBs: Golf Performance (Private Clubs + Sports Performance), Pickleball & Racquet Sports (Private Clubs + Commercial Fitness), and Longevity & Rehab (Medical + Hospitality + DTC). Each pillar has a dedicated influencer/trainer seeding strategy."
          />

          {/* Three Pillars */}
          <motion.div className="grid md:grid-cols-3 gap-6 mb-10"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              {
                pillar: "Golf Performance",
                color: GOLD,
                lobs: ["Private Clubs", "Sports Performance", "DTC"],
                hook: "Add 15 yards to your drive through rotational core training",
                formats: ["Short-form video: trainer demo on ZeroWheel for golf rotation", "Long-form: 'Golf Core Training Protocol' PDF/guide", "Case study: Aroldis Chapman rotational power (crossover appeal)", "TPI trainer testimonials and programming"],
                influencers: ["TPI-certified trainers (20,000+ globally)", "AMPD Golf Performance coaches", "Golf pros at CMAA chapter clubs", "Golf Instagram/YouTube creators (50K–500K followers)"],
                icon: Trophy,
              },
              {
                pillar: "Pickleball & Racquet",
                color: TEAL,
                lobs: ["Private Clubs", "Commercial Fitness", "Corporate Wellness"],
                hook: "Core strength is the #1 predictor of pickleball performance — and injury prevention",
                formats: ["Short-form: pickleball trainer doing ZeroWheel core circuit", "Blog: 'Why Pickleball Players Need Core Training'", "Partnership with CMAA clubs that have pickleball programs", "Life Time Fitness pickleball program tie-in"],
                influencers: ["Pickleball pros and coaches on Instagram/TikTok", "CMAA club fitness directors with pickleball programs", "USA Pickleball association contacts", "Club tennis/pickleball pros at Troon properties"],
                icon: Dumbbell,
              },
              {
                pillar: "Longevity & Rehab",
                color: PURPLE,
                lobs: ["Medical & Rehab", "Hospitality", "DTC", "Military & Government"],
                hook: "The only core training device that works WITH your body — not against it",
                formats: ["Clinical content: Springback Mode for shoulder rehab and ROM", "Longevity angle: 'Core training after 50' for DTC and hospitality", "VA/military: 'Rehabilitation without impact' positioning", "Partnership with longevity centers and PT clinics for case studies"],
                influencers: ["Physical therapists and sports medicine doctors on social", "Longevity-focused fitness creators (Blue Zone angle)", "Delos wellness platform (in-room wellness tie-in)", "NASM-certified trainers (Dr. Mike Clark network)"],
                icon: Stethoscope,
              },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="rounded-2xl border p-6" style={{ background: CARD_BG, borderColor: `${p.color}25` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${p.color}18` }}>
                  <p.icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <p className="font-display text-lg font-semibold text-white mb-1">{p.pillar}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {p.lobs.map((l, j) => <Tag key={j} label={l} color={p.color} />)}
                </div>
                <p className="font-body text-xs text-white/40 italic mb-4">"{p.hook}"</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: p.color }}>Content Formats</p>
                <ul className="space-y-1.5 mb-4">
                  {p.formats.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Video className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: p.color }} />
                      <span className="font-body text-[11px] text-white/40 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: GOLD }}>Influencer Targets</p>
                <ul className="space-y-1.5">
                  {p.influencers.map((inf, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Mic2 className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                      <span className="font-body text-[11px] text-white/40 leading-relaxed">{inf}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Influencer / Affiliate Program Summary */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>Influencer & Affiliate Program</p>
            <p className="font-display text-lg font-semibold text-white mb-2">DTC Channel Only — Commission on $1,095 Sales</p>
            <p className="font-body text-sm text-white/40 leading-relaxed mb-6">
              WEG recommends a commission-based influencer program exclusively for the DTC channel at full MSRP ($1,095). This keeps the program separate from the B2B channel partner structure (Vertical $825 / Commercial $695) documented in the Commercial Strategy page. Influencers earn commission on consumer sales only — they are not B2B channel partners.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[
                { tier: "Standard", rate: "10%", unit: "$109.50/unit", threshold: "1–9 units/mo", color: GOLD },
                { tier: "Silver", rate: "12%", unit: "$131.40/unit", threshold: "10–24 units/mo", color: TEAL },
                { tier: "Gold", rate: "15%", unit: "$164.25/unit", threshold: "25–49 units/mo", color: PURPLE },
                { tier: "Platinum", rate: "18%", unit: "$197.10/unit", threshold: "50+ units/mo", color: ORANGE },
              ].map((t, i) => (
                <div key={i} className="rounded-xl border p-4 text-center"
                  style={{ borderColor: `${t.color}30`, background: `${t.color}08` }}>
                  <p className="font-mono text-[9px] uppercase tracking-wider mb-2" style={{ color: t.color }}>{t.tier}</p>
                  <p className="font-display text-2xl font-semibold text-white">{t.rate}</p>
                  <p className="font-mono text-[10px] text-white/50 mt-1">{t.unit}</p>
                  <p className="font-body text-[11px] text-white/30 mt-1">{t.threshold}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Tracking", items: ["Unique promo code per influencer (e.g., MIKE20)", "30-day cookie on referral link", "UTM: utm_source=influencer&utm_medium=affiliate", "Salesforce Lead Source = Affiliate + Influencer_Name__c"], color: TEAL },
                { title: "Payout", items: ["60-day hold after sale (fraud prevention)", "Monthly ACH/PayPal payout", "Minimum $100 threshold to trigger payout", "1099 issued for US influencers over $600/year"], color: GOLD },
                { title: "Onboarding Kit", items: ["ZeroWheel unit (seeded free for Tier 2+ influencers)", "Content brief: 3 approved talking points per content pillar", "Brand guidelines and approved hashtags", "Dedicated Klaviyo email sequence for affiliate updates"], color: PURPLE },
              ].map((col, i) => (
                <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${col.color}20`, background: `${col.color}06` }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: col.color }}>{col.title}</p>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: col.color }} />
                        <span className="font-body text-xs text-white/40 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-xl border p-4" style={{ borderColor: `${GOLD}30`, background: `${GOLD}06` }}>
              <Bell className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
              <p className="font-body text-xs text-white/50">For the full affiliate program structure, terms, and Salesforce Commission object schema, see the <a href="/gtm/zerowheel/affiliate-program" className="underline" style={{ color: GOLD }}>Affiliate Program page</a>.</p>
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ── EMAIL NURTURE ARCHITECTURE ────────────────────────────────────── */}
      <section id="email-nurture" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Klaviyo Email Nurture — WEG Recommended"
            title="Lifecycle Marketing by Segment"
            description="WEG recommends Klaviyo as the email platform for ZeroWheel's lifecycle marketing. At ~$150/month for 10K subscribers, it integrates natively with Salesforce and handles both B2B drip sequences and DTC consumer flows. Five sequences cover every lead segment from first form fill to post-purchase."
          />

          <div className="space-y-3">
            <EmailSequence
              name="Private Clubs & Commercial Fitness Nurture"
              segment="B2B — Private Clubs + Commercial Fitness LOBs"
              color={GOLD}
              emails={[
                { day: "Day 0", subject: "Your ZeroWheel inquiry — next steps", goal: "Confirm receipt, set expectations, link to product page and case studies. Introduce rep by name." },
                { day: "Day 2", subject: "How Rochester Athletic Club uses ZeroWheel for 16,000+ members", goal: "Social proof — club case study. Highlight member retention angle and fitness director ROI." },
                { day: "Day 5", subject: "Golf & Pickleball programming for your members", goal: "Content value — link to golf rotation training guide and pickleball core strength article." },
                { day: "Day 9", subject: "Pricing and pilot program options for [Club Name]", goal: "Soft CTA — invite to 15-min call. Include pricing tier reference (Commercial: from $695/unit)." },
                { day: "Day 14", subject: "One question about [Club Name]'s fitness program", goal: "Personal touch from rep. Direct question about their current core training equipment." },
                { day: "Day 21", subject: "ZeroWheel demo — 20 minutes, your schedule", goal: "Hard CTA — Calendly link for live demo. Last email before sequence ends." },
              ]}
            />
            <EmailSequence
              name="Medical & Rehabilitation Nurture"
              segment="B2B — Medical & Rehab LOB"
              color={TEAL}
              emails={[
                { day: "Day 0", subject: "ZeroWheel for rehabilitation — clinical overview", goal: "Clinical framing. Highlight Springback Mode for shoulder rehab and ROM improvement. Link to clinical spec sheet." },
                { day: "Day 3", subject: "Graduated assistance for post-surgical shoulder rehab", goal: "Clinical depth — how Springback Mode works for PT protocols. Link to clinical case study if available." },
                { day: "Day 7", subject: "How sports medicine clinics are using ZeroWheel", goal: "Social proof — sports medicine angle. Reference LA Rams and athlete rehab use cases." },
                { day: "Day 12", subject: "Pricing for clinical and PT settings", goal: "Vertical pricing reference ($825/unit, max 25% off list). Invite to clinical demo call." },
                { day: "Day 18", subject: "Can we schedule a clinical demonstration?", goal: "Hard CTA — demo request. Offer to bring unit to their facility for hands-on evaluation." },
              ]}
            />
            <EmailSequence
              name="Corporate Wellness & Hospitality Nurture"
              segment="B2B — Corporate Wellness + Hospitality & Amenities LOBs"
              color={PURPLE}
              emails={[
                { day: "Day 0", subject: "ZeroWheel for your wellness program — overview", goal: "Dual-angle: corporate (lower back pain = #1 workplace injury) and hospitality (in-room wellness opportunity)." },
                { day: "Day 3", subject: "The in-room wellness opportunity — next-gen alternative to Peloton", goal: "Hospitality angle: compact footprint, QR onboarding, no staff required. Technogym/Precor/Peloton comparison." },
                { day: "Day 8", subject: "ROI calculator: ZeroWheel for corporate wellness", goal: "Value quantification — link to ROI calculator or data on lower back pain cost savings." },
                { day: "Day 14", subject: "Pilot program options for [Company/Property Name]", goal: "Soft CTA — pilot framing reduces commitment anxiety. Vertical pricing ($825/unit)." },
                { day: "Day 20", subject: "15 minutes to explore a fit?", goal: "Hard CTA — direct meeting request from rep." },
              ]}
            />
            <EmailSequence
              name="Cruise & Maritime Nurture"
              segment="B2B — Cruise & Maritime LOB"
              color={ORANGE}
              emails={[
                { day: "Day 0", subject: "ZeroWheel for maritime wellness — compact, zero-maintenance", goal: "Maritime-specific framing: magnetic resistance (no hydraulics, no cables, no consumable parts). Zero maintenance at sea." },
                { day: "Day 4", subject: "One Spa World partnership — 144 vessels and growing", goal: "Social proof — One Spa World relationship as credibility signal for cruise procurement teams." },
                { day: "Day 10", subject: "In-cabin wellness: the next frontier for premium staterooms", goal: "In-cabin angle — compact size makes ZeroWheel ideal for premium stateroom wellness amenity." },
                { day: "Day 18", subject: "RFP support and fleet pilot program", goal: "Process alignment — acknowledge cruise RFP process. Offer to support RFP response and propose ship pilot." },
              ]}
            />
            <EmailSequence
              name="DTC Consumer Welcome + Nurture"
              segment="Direct-to-Consumer — E-commerce + Social"
              color={GREEN}
              emails={[
                { day: "Day 0", subject: "Welcome to ZeroWheel — your core training starts now", goal: "Welcome, product overview, app download link, quick-start guide. Warm and energetic tone." },
                { day: "Day 2", subject: "Your first ZeroWheel workout (10 minutes)", goal: "Activation — link to beginner workout video. Reduce time-to-first-use." },
                { day: "Day 5", subject: "Golf? Pickleball? Here's your program", goal: "Personalization — link to sport-specific training program based on form response." },
                { day: "Day 10", subject: "How [Customer Name] is using ZeroWheel", goal: "Social proof — customer story or UGC. Build community feeling." },
                { day: "Day 21", subject: "Upgrade to ZeroWheel Pro — $19.99/month", goal: "Subscription upsell — connected app features, progressive programs, progress tracking." },
                { day: "Day 45", subject: "Your 45-day check-in — how's your core?", goal: "Retention touchpoint. Invite to share progress. Referral ask for high-engagement users." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── EVENTS ───────────────────────────────────────────────────────── */}
      <section id="events" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Event Strategy"
            title="Where ZeroWheel's Buyers Gather"
            description="WEG has identified the key industry events across all 9 macro LOBs. CMAA conferences are the highest-priority events for Private Clubs. Each event requires a pre-event outreach sequence, on-site lead capture, and a post-event Klaviyo follow-up sequence within 24 hours."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { event: "CMAA Annual Conference", lob: "Private Clubs", timing: "Q1 annually", priority: "Tier 1", color: GOLD, action: "Booth + demo station + pre-scheduled meetings with chapter contacts. WEG facilitates introductions." },
              { event: "CMAA Regional Conferences", lob: "Private Clubs", timing: "Multiple per year", priority: "Tier 1", color: GOLD, action: "Attend all regional events where WEG has chapter relationships (Philadelphia, Florida, Mile High). Demo unit required." },
              { event: "PGA Merchandise Show", lob: "Private Clubs + Sports Performance", timing: "January annually", priority: "Tier 1", color: GOLD, action: "Golf performance angle. Target PGA professionals and club buyers. TPI partnership activation." },
              { event: "Seatrade Cruise Global", lob: "Cruise & Maritime", timing: "Q1 annually", priority: "Tier 1", color: ORANGE, action: "Primary cruise industry event. Target VP Onboard Experience and VP Newbuild contacts. One Spa World meeting." },
              { event: "NSCA National Conference", lob: "Sports Performance + Commercial Fitness", timing: "Q2 annually", priority: "Tier 2", color: TEAL, action: "S&C coach audience. Rotational power and eccentric overload positioning. AMPD Golf partnership activation." },
              { event: "HITEC", lob: "Hospitality & Amenities", timing: "Q2 annually", priority: "Tier 2", color: PURPLE, action: "Hospitality technology and amenities. In-room wellness angle. Target hotel chain procurement and design consultants." },
              { event: "ALIS (Americas Lodging)", lob: "Hospitality & Amenities", timing: "Q1 annually", priority: "Tier 2", color: PURPLE, action: "Luxury hotel ownership and management. Target hotel GMs and Directors of Rooms for in-room wellness pilot." },
              { event: "NRPA Annual Conference", lob: "Corporate Wellness + Military/Government", timing: "Q3 annually", priority: "Tier 2", color: GREEN, action: "Parks and recreation + community fitness. Government procurement contacts. GSA angle." },
              { event: "Club Leaders Forum", lob: "Private Clubs", timing: "Quarterly", priority: "Tier 2", color: GOLD, action: "Intimate club leadership event. WEG has existing relationships. Thought leadership speaking opportunity." },
            ].map((e, i) => (
              <div key={i} className="rounded-2xl border p-5" style={{ background: CARD_BG, borderColor: `${e.color}25` }}>
                <div className="flex items-start justify-between mb-2">
                  <p className="font-display text-sm font-semibold text-white">{e.event}</p>
                  <Tag label={e.priority} color={e.color} />
                </div>
                <p className="font-mono text-[9px] uppercase tracking-wider mb-1" style={{ color: e.color }}>{e.lob} · {e.timing}</p>
                <p className="font-body text-xs text-white/40 leading-relaxed">{e.action}</p>
              </div>
            ))}
          </div>

          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>Event Execution Playbook</p>
            <p className="font-display text-lg font-semibold text-white mb-6">Standard Operating Procedure for Every Event</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { phase: "Pre-Event (2 weeks out)", color: TEAL, steps: ["LinkedIn outreach to registered attendees using Sales Navigator event filter", "Schedule 10+ meetings before arriving on-site", "Klaviyo pre-event email to existing contacts in the LOB", "Prepare demo unit, QR code lead capture, and leave-behind materials"] },
                { phase: "On-Site", color: GOLD, steps: ["Demo unit operational at all times — no dark booth", "Typeform QR code for lead capture (scans to Salesforce within 60 sec)", "Business card scanner as backup — manual entry same day", "Rep logs all conversations as Salesforce Activities before end of day"] },
                { phase: "Post-Event (24 hours)", color: ORANGE, steps: ["All leads in Salesforce with Event_Name__c field populated", "Klaviyo event follow-up sequence enrolled for all new leads", "Hot leads (demo'd the product) flagged for same-day rep follow-up", "Event ROI report: leads captured, meetings held, pipeline created"] },
              ].map((p, i) => (
                <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${p.color}20`, background: `${p.color}06` }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: p.color }}>{p.phase}</p>
                  <ul className="space-y-2">
                    {p.steps.map((s, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: p.color }} />
                        <span className="font-body text-xs text-white/40 leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ── QUARTERLY TIMELINE ────────────────────────────────────────────── */}
      <section id="timeline" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="2026 Execution Timeline"
            title="Quarterly Marketing Roadmap"
            description="WEG's proposed quarterly marketing execution plan for ZeroWheel in 2026. Each quarter has a primary focus, key channel activations, and measurable milestones. The plan is designed to build momentum — Q1 establishes the foundation, Q2 accelerates, Q3 scales what works, Q4 harvests."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                quarter: "Q1 2026", theme: "Foundation", color: GOLD,
                focus: "Build the infrastructure, establish partnerships, launch first campaigns",
                milestones: [
                  "Klaviyo integrated with Salesforce — all 5 nurture sequences live",
                  "UTM taxonomy implemented across all channels",
                  "CMAA Annual Conference — booth + 10+ meetings",
                  "PGA Merchandise Show — golf performance positioning",
                  "Seatrade Cruise Global — One Spa World meeting",
                  "TPI partnership agreement signed",
                  "CMAA preferred vendor application submitted",
                  "5 trainer seeding units placed (golf/pickleball focus)",
                  "Meta campaigns launched: Private Clubs + Sports Performance personas",
                ],
              },
              {
                quarter: "Q2 2026", theme: "Acceleration", color: TEAL,
                focus: "Scale what's working, add content engine, activate CMAA regional presence",
                milestones: [
                  "CMAA Regional Conferences (Philadelphia, Florida, Mile High)",
                  "NSCA Conference — sports performance channel",
                  "HITEC — hospitality channel entry",
                  "Content engine: 4+ pieces/month publishing cadence",
                  "First LOB case study published (Private Clubs)",
                  "LinkedIn Sales Navigator sequences live for all reps",
                  "Referral program launched — post-install automation in Salesforce",
                  "Affiliate program: 10+ influencers onboarded",
                  "Meta: add DTC consumer campaign, test longevity angle",
                ],
              },
              {
                quarter: "Q3 2026", theme: "Scale", color: PURPLE,
                focus: "Scale top-performing channels, deepen LOB penetration, build pipeline",
                milestones: [
                  "NRPA Annual Conference — corporate wellness + government",
                  "Double down on top 2 performing Meta campaigns",
                  "Second LOB case study published (Medical or Sports Performance)",
                  "Klaviyo: optimize sequences based on open/click data",
                  "Affiliate program: 25+ influencers, first Platinum tier earner",
                  "Troon Golf preferred vendor pursuit — formal proposal",
                  "One Spa World pilot: first ship installation",
                  "YouTube channel: 10+ videos published",
                  "NPS program: first 60-day surveys sent to installed accounts",
                ],
              },
              {
                quarter: "Q4 2026", theme: "Harvest", color: ORANGE,
                focus: "Close pipeline, capture year-end budgets, plan 2027",
                milestones: [
                  "Year-end budget push: facility managers spending remaining CapEx",
                  "Club Leaders Forum — thought leadership presence",
                  "Case study library: 1 per LOB published",
                  "Klaviyo: holiday/year-end campaign for DTC channel",
                  "Annual marketing performance review vs. targets",
                  "2027 channel budget allocation based on Q1–Q4 ROAS data",
                  "CMAA Annual Conference planning for 2027",
                  "Affiliate program: annual top-performer recognition",
                  "Salesforce marketing attribution report: pipeline by source",
                ],
              },
            ].map((q, i) => (
              <div key={i} className="rounded-2xl border p-6" style={{ background: CARD_BG, borderColor: `${q.color}25` }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-lg font-semibold text-white">{q.quarter}</p>
                  <Tag label={q.theme} color={q.color} />
                </div>
                <p className="font-body text-xs text-white/40 italic mb-4">{q.focus}</p>
                <ul className="space-y-2">
                  {q.milestones.map((m, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: q.color }} />
                      <span className="font-body text-[11px] text-white/40 leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCOUNTABILITY FRAMEWORK ──────────────────────────────────────── */}
      <section id="accountability" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Marketing Accountability"
            title="Metrics, Cadence & Ownership"
            description="WEG recommends a weekly marketing accountability cadence with clear metric ownership. Marketing is accountable for top-of-funnel metrics (leads, CPL, channel mix). Sales is accountable for conversion metrics (lead-to-opp, close rate). Both teams review together weekly."
          />

          {/* KPI Table */}
          <DarkCard className="mb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: GOLD }}>Marketing KPI Dashboard — Tracked in Salesforce</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: CARD_BORDER }}>
                    {["Metric", "Owner", "Target", "Frequency", "Salesforce Field"].map((h, i) => (
                      <th key={i} className="pb-3 pr-6 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: CARD_BORDER }}>
                  {[
                    { metric: "Total Leads (MQLs)", owner: "Marketing", target: "100+/month by Q3", freq: "Weekly", sf: "Lead count by Created Date" },
                    { metric: "Cost Per Lead (CPL)", owner: "Marketing", target: "<$50 B2B / <$30 DTC", freq: "Monthly", sf: "Campaign.Cost / Lead count" },
                    { metric: "Lead Source Mix", owner: "Marketing", target: "No single source >40%", freq: "Monthly", sf: "Lead.LeadSource distribution" },
                    { metric: "Typeform Completion Rate", owner: "Marketing", target: "35%+ from paid traffic", freq: "Weekly", sf: "Typeform analytics + SF" },
                    { metric: "Klaviyo Open Rate", owner: "Marketing", target: "28%+ per sequence", freq: "Weekly", sf: "Klaviyo dashboard" },
                    { metric: "Klaviyo Click Rate", owner: "Marketing", target: "4%+ per sequence", freq: "Weekly", sf: "Klaviyo dashboard" },
                    { metric: "Event Leads Captured", owner: "Marketing", target: "30+ per Tier 1 event", freq: "Per event", sf: "Lead.Event_Name__c count" },
                    { metric: "Affiliate Sales", owner: "Marketing", target: "25+ units/month by Q3", freq: "Monthly", sf: "Opportunity.Affiliate_Code__c" },
                    { metric: "Content Published", owner: "Marketing", target: "4+ pieces/month", freq: "Monthly", sf: "Campaign record per piece" },
                    { metric: "Partner Leads", owner: "Marketing", target: "15%+ of total leads", freq: "Monthly", sf: "Lead Source = Partner Referral" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-3 pr-6 font-display text-sm text-white font-medium">{row.metric}</td>
                      <td className="py-3 pr-6"><Tag label={row.owner} color={row.owner === "Marketing" ? GOLD : TEAL} /></td>
                      <td className="py-3 pr-6 font-body text-xs text-white/50">{row.target}</td>
                      <td className="py-3 pr-6 font-mono text-[10px] text-white/30">{row.freq}</td>
                      <td className="py-3 font-mono text-[10px] text-white/25">{row.sf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DarkCard>

          {/* Weekly Rhythm */}
          <div className="grid md:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: GOLD }}>Weekly Marketing Cadence</p>
              <div className="space-y-3">
                {[
                  { day: "Monday", task: "Pull Salesforce lead report: new leads by source, LOB, and rep assignment. Flag any leads >24 hours without rep contact.", color: GOLD },
                  { day: "Wednesday", task: "Channel check: Meta ad performance (CPL, CTR, spend), Klaviyo sequence open/click rates, LinkedIn outreach response rates.", color: TEAL },
                  { day: "Friday", task: "Weekly marketing summary: leads generated, CPL by channel, Klaviyo performance, affiliate sales. Share with sales team before Monday pipeline review.", color: PURPLE },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl p-3"
                    style={{ background: `${d.color}08`, borderLeft: `2px solid ${d.color}40` }}>
                    <span className="font-mono text-[10px] flex-shrink-0 mt-0.5 w-20" style={{ color: d.color }}>{d.day}</span>
                    <p className="font-body text-xs text-white/45 leading-relaxed">{d.task}</p>
                  </div>
                ))}
              </div>
            </DarkCard>
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: TEAL }}>Monthly Marketing Review</p>
              <div className="space-y-3">
                {[
                  { item: "Channel ROI report: pipeline created and revenue influenced per channel vs. spend", color: GOLD },
                  { item: "Klaviyo sequence performance: open rate, click rate, conversion to demo by sequence", color: TEAL },
                  { item: "Affiliate program report: sales by influencer, commission payouts, new enrollments", color: PURPLE },
                  { item: "Content performance: page views, leads from content, case study downloads", color: ORANGE },
                  { item: "Event pipeline review: leads from last event, opportunities created, revenue influenced", color: GREEN },
                  { item: "Budget vs. actual: marketing spend by channel vs. plan. Reallocate based on ROAS.", color: GOLD },
                  { item: "Next month plan: channel priorities, campaigns launching, events attending", color: TEAL },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                    <span className="font-body text-xs text-white/45 leading-relaxed">{item.item}</span>
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
