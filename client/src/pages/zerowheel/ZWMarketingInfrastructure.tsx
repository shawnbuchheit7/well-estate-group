/*
 * ZeroWheel Marketing Infrastructure — Full GTM Engine
 * Design: Dark luxury — #0A0A0A bg, #C9A962 gold, #2DD4BF teal, #A78BFA purple
 * Sections:
 *   1. Hero
 *   2. Lead Intake Flow (Website Visit → UTM → FinAI → Typeform → SF Lead → Rep Notified → Reachout)
 *   3. Multi-Channel Acquisition Funnel (with stage-level data)
 *   4. Channel Playbooks (B2B Direct, Partnerships, Thought Leadership, Digital, Influencer, Events)
 *   5. LOB-Specific Strategies (8 macro LOBs with named targets)
 *   6. Salesforce CRM Architecture (objects, fields, automation rules)
 *   7. Influencer & Affiliate Program ($250/unit)
 *   8. Team Accountability & Weekly Cadence
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Cpu, Bot, FormInput, Database, Mail, Phone,
  Users, Handshake, GraduationCap, Star, Award, Building2,
  Dumbbell, Stethoscope, Trophy, Briefcase, UserCircle, Home, Landmark,
  ArrowRight, ArrowDown, CheckCircle2,
  Target, DollarSign, Activity,
  ChevronDown, ChevronUp,
  Bell, Megaphone,
} from "lucide-react";
import Layout from "@/components/Layout";
import DarkHero from "@/components/DarkHero";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Colors ──────────────────────────────────────────────────────────────────
const GOLD = "#C9A962";
const GOLD_DIM = "#8B7D3C";
const TEAL = "#2DD4BF";
const PURPLE = "#A78BFA";
const GREEN = "#4ADE80";
const RED = "#F87171";
const ORANGE = "#FB923C";
const CARD_BG = "#111111";
const CARD_BORDER = "rgba(201,169,98,0.12)";

// ─── Section Nav ─────────────────────────────────────────────────────────────
const sections = [
  { id: "hero", label: "Overview" },
  { id: "lead-intake", label: "Lead Intake Flow" },
  { id: "funnel", label: "Acquisition Funnel" },
  { id: "channels", label: "Channel Playbooks" },
  { id: "lob-strategy", label: "LOB Strategies" },
  { id: "salesforce", label: "Salesforce Architecture" },
  { id: "influencer", label: "Influencer Program" },
  { id: "accountability", label: "Team Accountability" },
];

// ─── Shared UI Components ─────────────────────────────────────────────────────
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

function Divider() {
  return <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent)" }} />;
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

function FlowNode({ icon: Icon, step, title, subtitle, detail, color = GOLD, badge, system }: {
  icon: any; step?: string; title: string; subtitle: string; detail?: string[];
  color?: string; badge?: string; system?: string;
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
      {step && <span className="font-mono text-[9px] font-bold" style={{ color: `${color}60` }}>STEP {step}</span>}
      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <p className="font-display text-sm font-semibold text-white leading-tight">{title}</p>
      <p className="font-body text-[11px] text-white/40 leading-relaxed">{subtitle}</p>
      {detail && detail.length > 0 && (
        <ul className="mt-1 space-y-1">
          {detail.map((d, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
              <span className="font-body text-[10px] text-white/30 leading-relaxed">{d}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
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

// ─── Lead Intake Flow Data ────────────────────────────────────────────────────
const intakeSteps = [
  {
    icon: Globe, step: "01", title: "Website Visit", color: TEAL, badge: "Entry Point", system: "Any Channel",
    subtitle: "Visitor arrives via organic search, paid ad, partner referral, QR code at trade show, or direct URL.",
    detail: [
      "Organic: SEO content, LinkedIn post, YouTube video",
      "Paid: Meta lead form, Google PMax, LinkedIn Sponsored",
      "Referral: Partner link, influencer promo code, CMAA newsletter",
      "Direct: Business card, trade show badge scan, email campaign",
    ],
  },
  {
    icon: Cpu, step: "02", title: "UTM Capture", color: TEAL, system: "Typeform + GA4",
    subtitle: "Every inbound URL carries UTM parameters that are auto-captured and stored against the lead record.",
    detail: [
      "utm_source: google | instagram | linkedin | cmaa | partner",
      "utm_medium: cpc | organic | email | referral | event",
      "utm_campaign: spring-launch-2026 | cmaa-regional | golf-series",
      "utm_content: ad variant or creative ID for A/B tracking",
      "Landing page URL stored as custom SF field at conversion",
    ],
  },
  {
    icon: Bot, step: "03", title: "FinAI Engagement", color: PURPLE, system: "Intercom",
    subtitle: "Intercom's FinAI chat widget activates immediately. AI answers product questions, scores intent, and routes high-value visitors before they leave.",
    detail: [
      "Responds in <5 seconds, 24/7 — no rep required",
      "Pulls answers from ZeroWheel product knowledge base",
      "Asks qualifying questions: segment, facility size, timeline",
      "Intent score 1–10 assigned based on conversation depth",
      "High-intent (7+): auto-books demo via calendar integration",
      "Passes full chat transcript to Salesforce on lead creation",
    ],
  },
  {
    icon: FormInput, step: "04", title: "Typeform Intake", color: GOLD, system: "Typeform",
    subtitle: "Segment-specific intake form captures structured lead data. B2B form (club/medical/corporate) differs from consumer direct form.",
    detail: [
      "B2B Form: Facility name, segment (club/hotel/medical/maritime), role, # of units, timeline, budget range",
      "Consumer Form: Name, email, phone, use case, purchase timeline",
      "Conditional logic routes to correct form variant by referral source",
      "Partial completions trigger FinAI re-engagement sequence",
      "Form ID stored in SF to identify which segment funnel the lead entered",
    ],
  },
  {
    icon: Database, step: "05", title: "SF Lead Created", color: GOLD, system: "Salesforce",
    subtitle: "Zapier webhook fires on Typeform submission. Lead record created in Salesforce within 60 seconds with all fields, score, and routing logic applied.",
    detail: [
      "Lead Source field: auto-populated from UTM source",
      "Lead Score: calculated from segment match + budget + timeline + FinAI score",
      "Territory/segment routing rules assign rep automatically",
      "Duplicate check runs — merges if existing contact found",
      "Campaign Member created to attribute lead to active campaign",
    ],
  },
  {
    icon: Bell, step: "06", title: "Rep Notified", color: GOLD, system: "Salesforce",
    subtitle: "Assigned rep receives immediate notification via email and a Salesforce task with full lead context, FinAI transcript, and SLA clock.",
    detail: [
      "Email alert: lead name, company, segment, score, source",
      "SF Task created: 'First Contact — SLA: 1 Business Hour'",
      "FinAI conversation transcript attached to lead record",
      "Manager CC'd if lead score ≥ 8 (high-priority flag)",
      "SLA timer starts — overdue tasks escalate to manager at 2 hours",
    ],
  },
  {
    icon: Phone, step: "07", title: "Sales Team Reachout", color: GREEN, badge: "SLA: 1hr", system: "Salesforce",
    subtitle: "Rep initiates contact within 1 business hour. All activity logged in Salesforce. Three-touch minimum before any disqualification.",
    detail: [
      "Touch 1: Phone call — outcome logged (connected / VM / no answer)",
      "Touch 2: Personalized email referencing FinAI conversation context",
      "Touch 3: FinAI re-engagement sequence if no reply after 48 hours",
      "Minimum 3 documented touches before marking 'Unresponsive'",
      "Unresponsive leads enter 30-day nurture sequence via Intercom",
    ],
  },
];

// ─── Funnel Stage Data ────────────────────────────────────────────────────────
const funnelStages = [
  { label: "Website Visitors",   count: 48000, pct: null,  color: GOLD,     desc: "All inbound traffic across all channels and campaigns" },
  { label: "FinAI Engaged",      count: 9600,  pct: "20%", color: TEAL,     desc: "Visitors who interacted with FinAI chat widget" },
  { label: "Typeform Submitted", count: 1208,  pct: "13%", color: PURPLE,   desc: "Completed intake form — B2B or consumer variant" },
  { label: "SF Lead Created",    count: 1208,  pct: "100%",color: GOLD,     desc: "Every Typeform submission creates a Salesforce Lead" },
  { label: "MQL (Qualified)",    count: 506,   pct: "42%", color: ORANGE,   desc: "Lead score ≥ 6, segment match, budget indicated" },
  { label: "SQL (Opportunity)",  count: 334,   pct: "66%", color: TEAL,     desc: "BANT confirmed, demo scheduled, converted to Opportunity" },
  { label: "Demo Completed",     count: 198,   pct: "59%", color: PURPLE,   desc: "Full product demo delivered, ROI case presented" },
  { label: "Proposal Sent",      count: 142,   pct: "72%", color: GREEN,    desc: "Formal proposal at $1,000/unit with install timeline" },
  { label: "Closed Won (Install)",count: 245,  pct: "—",   color: GOLD,     desc: "$245K revenue · 245 units · $1,000 ASP · YTD" },
];

const channelMix = [
  { id: "b2b-direct",        label: "B2B Direct Sales",       color: GOLD,   pct: 35, target: "350 installs" },
  { id: "partnerships",      label: "Strategic Partnerships", color: TEAL,   pct: 20, target: "200 installs" },
  { id: "thought-leadership",label: "Thought Leadership",     color: PURPLE, pct: 15, target: "150 installs" },
  { id: "digital",           label: "Digital / Paid",         color: ORANGE, pct: 12, target: "120 installs" },
  { id: "influencer",        label: "Influencer Network",     color: "#F472B6", pct: 10, target: "100 installs" },
  { id: "events",            label: "Events & Trade Shows",   color: GREEN,  pct: 8,  target: "80 installs" },
];

// ─── Channel Playbook Data ────────────────────────────────────────────────────
interface ChannelPlaybook {
  id: string;
  title: string;
  icon: typeof Users;
  color: string;
  target: string;
  owner: string;
  tactics: { label: string; detail: string }[];
  sfFields: string[];
  kpis: { label: string; target: string }[];
  sequences: { step: string; action: string; timing: string }[];
}

const channelPlaybooks: ChannelPlaybook[] = [
  {
    id: "b2b-direct",
    title: "B2B Direct Sales",
    icon: Users,
    color: GOLD,
    target: "350 installs · 35% of 2026 goal",
    owner: "Sales Reps by Territory (Clubs / Maritime / Medical / Corporate)",
    tactics: [
      { label: "CMAA Chapters — National, State & Local", detail: "Sponsor CMAA regional conferences (Philadelphia, Florida, Mile High chapters). Booth presence + private demos + follow-up sequences. Target GMs, fitness directors, and club presidents. CMAA preferred vendor status pursuit for directory access and newsletter placement." },
      { label: "Troon & Club Corp Account Mapping", detail: "Build named-account lists for Troon Golf and Club Corp managed properties. Each rep owns a territory of 50+ named accounts with relationship scores, last-activity dates, and next-action tasks in Salesforce. Platinum Clubs and Distinguished Clubs prioritized." },
      { label: "Maritime: One Spa World & Delos", detail: "Leverage WEG's existing maritime relationships. One Spa World operates across 144 vessels — target in-room wellness and fitness center upgrades. Delos (Alfredo Carvajal) is a named relationship. KT Lim and Sea Trade contacts in Salesforce as named accounts." },
      { label: "Medical: PT & Hospital Wellness Centers", detail: "Target physical therapists, Crohn's Association, Alzheimer's Association, and hospital-supported wellness centers. ZeroWheel's rotational core and longevity positioning is a natural fit for rehab and preventive care programs. Dr. Mike Clark (NASM) is a named relationship for sports performance crossover." },
      { label: "Country Club Fitness Director Sequences", detail: "Personalized cold + warm outreach sequences to fitness directors and GMs. Reference CMAA membership tier, club demographics, and member age profile. Sequence: Day 1 — LinkedIn connect + email. Day 3 — Phone call. Day 7 — FinAI re-engage. Day 14 — Case study email. Day 21 — Final call." },
    ],
    sfFields: [
      "Account: LOB (Private Club / Maritime / Medical), Sub-LOB, Territory, Owner, Relationship Score (1–5)",
      "Contact: Role (GM / Fitness Director / Owner), Decision Maker flag, Last Activity Date",
      "Lead Source: 'B2B Direct — [Rep Name] — [Territory]'",
      "Campaign: CMAA-2026, Maritime-Q1, Medical-Channel, Club-Corp-Outreach",
      "Activity: Call outcome (Connected / VM / No Answer), Email open, Demo scheduled",
      "Custom Field: Account Tier (Platinum / Gold / Standard), CMAA Member (Y/N)",
    ],
    kpis: [
      { label: "Named Accounts Mapped", target: "500 by Q1" },
      { label: "Active Sequences per Rep", target: "8 concurrent" },
      { label: "Demo Rate (qualified leads)", target: "15%" },
      { label: "Win Rate (B2B Direct)", target: "25%" },
      { label: "1-Hour First Contact SLA", target: "≥ 90% compliance" },
    ],
    sequences: [
      { step: "Day 1", action: "LinkedIn connect + personalized email referencing club tier", timing: "Morning" },
      { step: "Day 3", action: "Phone call — reference FinAI conversation if applicable", timing: "10am–12pm" },
      { step: "Day 7", action: "FinAI re-engagement triggered if no reply", timing: "Automated" },
      { step: "Day 14", action: "Case study email (club or maritime install story)", timing: "Morning" },
      { step: "Day 21", action: "Final call — offer demo or mark as 30-day nurture", timing: "Afternoon" },
    ],
  },
  {
    id: "partnerships",
    title: "Strategic Partnerships",
    icon: Handshake,
    color: TEAL,
    target: "200 installs · 20% of 2026 goal",
    owner: "Business Development Lead + Channel Partner Manager",
    tactics: [
      { label: "CMAA Preferred Vendor / Allied Association", detail: "Pursue CMAA preferred vendor or allied association status. This unlocks member directory access, newsletter placement, conference speaking slots, and co-branded content opportunities. Target: approved status by Q2 2026." },
      { label: "Golf & Pickleball Trainer Networks", detail: "Seed ZeroWheels with 10–15 certified golf and pickleball trainers at private clubs. Trainers integrate ZeroWheel into their programs, generate testimonials, and refer facility purchases. Titleist Performance Institute (TPI) and AMPD Golf Performance are named partnership targets." },
      { label: "Cruise Line Wellness Partnerships", detail: "Formal preferred supplier agreements with cruise line fitness and spa operators. One Spa World (144 vessels), Sea Trade, and Delos are named targets. Revenue share or preferred pricing in exchange for multi-vessel commitments." },
      { label: "Management Company Alliances", detail: "Partner with top fitness and wellness management companies: Troon Golf, Peacock & Lewis, Club Wellness Evolutions, The Salus Group, Kopplin Kuebler & Wallace, McMahon Group. These companies manage hundreds of facilities and can embed ZeroWheel into their standard equipment recommendations." },
      { label: "Commission-Based Affiliate Program", detail: "Structured $250/unit affiliate commission for partners who drive sales via unique promo codes. Not just social posts — full sales partnership with Salesforce tracking, monthly commission reporting, and tiered bonuses at 10, 25, and 50 unit milestones." },
    ],
    sfFields: [
      "Partner Account Type: Partner Tier (Gold / Silver / Bronze), Partner Category (Management Co / Association / Trainer)",
      "Referral Lead Source: 'Partner — [Partner Name] — [Promo Code]'",
      "Custom Object: Partner Commission — units referred, commission rate, payment status",
      "Partner Performance Dashboard: leads referred, conversion rate, revenue attributed",
      "Campaign: Partner-Referral-2026, CMAA-Allied, TPI-Trainer-Program",
    ],
    kpis: [
      { label: "Active Signed Partners", target: "20 by Q2" },
      { label: "Partner-Sourced Pipeline", target: "20% of total" },
      { label: "Affiliate Codes Active", target: "15 by Q2" },
      { label: "Commission Paid YTD", target: "Tracked per partner" },
      { label: "Management Co. Agreements", target: "3 by Q3" },
    ],
    sequences: [
      { step: "Week 1", action: "Outreach to target partner — intro email + one-pager", timing: "BD Lead" },
      { step: "Week 2", action: "Discovery call — understand their client base and referral flow", timing: "BD Lead" },
      { step: "Week 3", action: "Proposal: commission structure, co-marketing, Salesforce tracking setup", timing: "BD Lead" },
      { step: "Week 4", action: "Agreement signed — promo code created, SF partner record created", timing: "Ops" },
      { step: "Ongoing", action: "Monthly partner performance review — leads, conversions, commission", timing: "Monthly" },
    ],
  },
  {
    id: "thought-leadership",
    title: "Thought Leadership",
    icon: GraduationCap,
    color: PURPLE,
    target: "150 installs · 15% of 2026 goal",
    owner: "Content Lead + Sales Reps (co-creation)",
    tactics: [
      { label: "Golf & Pickleball Performance Content Series", detail: "Publish ZeroWheel-specific training programs for golf rotation and pickleball core stability. 2x per week on YouTube, LinkedIn, and club newsletters. Target: fitness directors, club GMs, and wellness-conscious members aged 45–70. Trainers from TPI and AMPD Golf co-create content for credibility." },
      { label: "Longevity & Core Strength Positioning", detail: "Research-backed content on rotational core training and longevity. Reference Crohn's Association, Alzheimer's Association, and Blue Zone (Dan Buettner) connections. Position ZeroWheel as the performance tool for aging athletes and preventive wellness programs." },
      { label: "Case Study Library — 5 Stories by Q3", detail: "Document 5–10 early installation stories with measurable outcomes: member engagement rates, trainer adoption, revenue impact for the facility, and before/after performance data. Publish as sales collateral, LinkedIn articles, and email campaign content." },
      { label: "CMAA & PGA Conference Speaking Slots", detail: "Submit speaker proposals to CMAA regional conferences (Philadelphia, Florida, Mile High), PGA Merchandise Show, and NRPA Annual Conference. Speaking slots build brand authority and generate warm leads from attendees." },
      { label: "Trainer Seeding Program", detail: "Seed ZeroWheels with 15 key trainers across golf, pickleball, and sports performance. Structured feedback program: monthly check-ins, testimonial collection, co-created content. These trainers become credibility anchors for B2B sales conversations." },
    ],
    sfFields: [
      "Lead Source: 'Content — [Article/Video Title] — [Platform]'",
      "UTM: source=content, medium=organic|linkedin|youtube, campaign=[topic-series]",
      "Contact: Content Engagement Score (email opens, video views, article shares)",
      "Campaign: Thought-Leadership-Q1, Golf-Performance-Series, Case-Study-Library",
      "Custom Field: Content Attribution — which piece drove the lead",
    ],
    kpis: [
      { label: "Content Pieces Published", target: "2/week (100+ by EOY)" },
      { label: "Trainer Advocates Active", target: "15 by Q2" },
      { label: "Content-Sourced Leads", target: "15% of total pipeline" },
      { label: "Case Studies Published", target: "5 by Q3" },
      { label: "Conference Speaking Slots", target: "3 by Q2" },
    ],
    sequences: [
      { step: "Week 1–2", action: "Publish 2 golf performance videos + LinkedIn articles", timing: "Content Lead" },
      { step: "Week 3", action: "Email case study to warm leads in relevant LOB", timing: "Sales Rep" },
      { step: "Week 4", action: "Trainer co-created content published + tagged on social", timing: "Content Lead" },
      { step: "Monthly", action: "Content performance review — top pieces repurposed for email", timing: "Content Lead" },
      { step: "Quarterly", action: "New case study published + distributed to sales team", timing: "BD Lead" },
    ],
  },
  {
    id: "digital",
    title: "Digital & Paid Campaigns",
    icon: Globe,
    color: ORANGE,
    target: "120 installs · 12% of 2026 goal",
    owner: "Marketing Manager + Agency (if applicable)",
    tactics: [
      { label: "Meta Lead Forms — 3 Persona Campaigns", detail: "Campaign 1: Club GMs and fitness directors (B2B) — targeting by job title, company size, interests (golf, club management). Campaign 2: Golf/pickleball enthusiasts aged 45–65 — lookalike audiences from existing customer list. Campaign 3: Cruise/hospitality procurement — targeting by industry and seniority. Each persona has unique creative, copy, and Typeform intake." },
      { label: "Dedicated Landing Pages per LOB", detail: "Separate landing pages for: Private Clubs, Maritime/Hospitality, Sports Performance, Medical/PT, Consumer Direct. Each page has unique UTM, Typeform embed, and FinAI chat widget. A/B test headlines and proof points at $500–$1,000/month before scaling winners." },
      { label: "LinkedIn Sales Navigator Outreach", detail: "Targeted outreach to GMs, fitness directors, and wellness VPs at CMAA member clubs, Troon properties, and Club Corp facilities. Personalized connection requests + message sequences tied to Salesforce activities. 50 new connections/week per rep." },
      { label: "Google PMax for High-Intent Search", detail: "Performance Max campaigns targeting searches for 'club fitness equipment', 'rotational core training', 'wellness facility equipment'. Conversion tracking via Typeform submission. Budget: $1,000/month test, scale to $5K/month if CPL < $50." },
      { label: "Retargeting — Social Proof Sequences", detail: "Pixel all landing pages. Retarget non-converters with testimonial ads (trainer endorsements, club install photos). Email retargeting via Typeform partial completions. Sequence: Day 3 — testimonial ad. Day 7 — case study. Day 14 — limited offer." },
    ],
    sfFields: [
      "UTM Source / Medium / Campaign / Content / Term — all mapped to SF Lead on creation",
      "Campaign ROI: cost-per-lead, cost-per-opportunity, cost-per-install by campaign",
      "Landing Page URL stored as custom field — identifies which LOB page converted",
      "A/B Test Results documented in Campaign Notes field",
      "Ad Creative ID stored in UTM Content for creative performance analysis",
    ],
    kpis: [
      { label: "Cost Per Lead (Digital)", target: "< $50" },
      { label: "Cost Per Install (Digital)", target: "< $200" },
      { label: "Landing Page Conv. Rate", target: "> 3%" },
      { label: "LinkedIn Connections/Week", target: "50 per rep" },
      { label: "Meta ROAS", target: "> 5x by Q3" },
    ],
    sequences: [
      { step: "Week 1–2", action: "Launch 3 Meta campaigns at $500/month each — test creatives", timing: "Marketing" },
      { step: "Week 3", action: "Review CPL data — kill underperformers, double winners", timing: "Marketing" },
      { step: "Week 4", action: "Scale winning campaigns to $2,000/month", timing: "Marketing" },
      { step: "Day 3", action: "Retargeting: testimonial ad to non-converters", timing: "Automated" },
      { step: "Day 7", action: "Retargeting: case study ad to non-converters", timing: "Automated" },
    ],
  },
  {
    id: "influencer",
    title: "Influencer Network",
    icon: Star,
    color: "#F472B6",
    target: "100 installs · 10% of 2026 goal",
    owner: "Business Development Lead",
    tactics: [
      { label: "Delos — Alfredo Carvajal (Maritime)", detail: "Named relationship. Alfredo Carvajal at Delos is a key influencer in the maritime wellness space. Seed ZeroWheel for in-cabin wellness programs. Co-create content for cruise line audiences. Unique promo code tracked in Salesforce." },
      { label: "Blue Zone — Dan Buettner (Longevity)", detail: "Named relationship. Dan Buettner's Blue Zone brand has massive reach in the longevity and wellness space. ZeroWheel's core-strength and aging-athlete positioning aligns directly. Co-branded content and affiliate arrangement." },
      { label: "Top 2–3 Trainers per Macro LOB", detail: "Identify and seed 2–3 key influencers per macro LOB: golf performance trainers (TPI certified), pickleball coaches, sports performance specialists (NASM/Dr. Mike Clark network), PT influencers. Each receives a ZeroWheel unit, structured feedback program, and $250/unit affiliate commission." },
      { label: "Structured Affiliate Program", detail: "$250/unit commission for every install driven via unique promo code. Tiered bonuses: 10 units = $500 bonus, 25 units = $1,500 bonus, 50 units = $3,500 bonus. Monthly commission reports sent automatically. All tracked via custom Salesforce object." },
    ],
    sfFields: [
      "Influencer Account Type in Salesforce — Tier (Anchor / Active / Prospect)",
      "Custom Object: Influencer Commission — promo code, units driven, commission owed, payment status",
      "Lead Source: 'Influencer — [Name] — [Promo Code]'",
      "Campaign: Influencer-Program-2026, Delos-Partnership, Blue-Zone-Collab",
      "Monthly Report: units per influencer, conversion rate, total commission paid",
    ],
    kpis: [
      { label: "Active Influencer Partners", target: "15 by Q2" },
      { label: "Influencer-Sourced Installs", target: "100 by EOY" },
      { label: "Avg. Units per Influencer", target: "7" },
      { label: "Commission Paid YTD", target: "~$25K at 100 installs" },
      { label: "Anchor Influencers (Delos, Blue Zone)", target: "Signed by Q1" },
    ],
    sequences: [
      { step: "Week 1", action: "Outreach to anchor influencers (Delos, Blue Zone, Dr. Mike Clark)", timing: "BD Lead" },
      { step: "Week 2", action: "Ship ZeroWheel unit + onboarding kit + promo code", timing: "Ops" },
      { step: "Week 3", action: "Co-create first content piece — video or article", timing: "Content Lead" },
      { step: "Monthly", action: "Commission report + performance review with influencer", timing: "BD Lead" },
      { step: "Quarterly", action: "Tier review — promote top performers, add new influencers", timing: "BD Lead" },
    ],
  },
  {
    id: "events",
    title: "Events & Trade Shows",
    icon: Award,
    color: GREEN,
    target: "80 installs · 8% of 2026 goal",
    owner: "Sales Reps + BD Lead",
    tactics: [
      { label: "CMAA Regional Conferences", detail: "Sponsor and exhibit at CMAA Philadelphia, CMAA Florida, and CMAA Mile High chapter conferences. Booth with live ZeroWheel demo station. Private demos for GMs and fitness directors. Badge scan → Salesforce Lead via Zapier integration. Follow-up sequence starts within 24 hours of event." },
      { label: "PGA Merchandise Show", detail: "Exhibit at PGA Merchandise Show in Orlando. Target golf performance trainers, club pros, and fitness directors. Co-exhibit with TPI or AMPD Golf Performance for credibility. Demo station + QR code → Typeform intake." },
      { label: "NRPA Annual Conference", detail: "Attend NRPA Annual Conference targeting Parks & Recreation directors and local government wellness program managers. Tampa (Well Certified District) and City of Denver are named targets. Focus on public authority LOB." },
      { label: "Sea Trade Cruise Global", detail: "Attend Sea Trade Cruise Global for maritime LOB. Target cruise line procurement, spa operators, and wellness directors. One Spa World and Delos contacts pre-scheduled for meetings." },
      { label: "Post-Event Lead Sequence", detail: "All badge scans and QR code submissions create Salesforce Leads within 24 hours. Rep assigned by event/territory. Sequence: Day 1 — 'Great meeting you' email with product one-pager. Day 3 — Phone call. Day 7 — FinAI re-engage. Day 14 — Case study relevant to their LOB." },
    ],
    sfFields: [
      "Lead Source: 'Event — [Event Name] — [Year]'",
      "Campaign: CMAA-Regional-2026, PGA-Show-2026, NRPA-2026, SeaTrade-2026",
      "Custom Field: Event Badge Scan (Y/N), QR Code Variant",
      "Activity: Event Meeting logged with attendee name, company, discussion notes",
      "Campaign Member: All event leads added to event campaign for ROI tracking",
    ],
    kpis: [
      { label: "Events Attended", target: "6 in 2026" },
      { label: "Leads per Event", target: "50+ qualified scans" },
      { label: "Event Lead → Opp Rate", target: "20%" },
      { label: "Event-Sourced Installs", target: "80 by EOY" },
      { label: "Post-Event Follow-Up SLA", target: "24 hours" },
    ],
    sequences: [
      { step: "Day 1 (at event)", action: "Badge scan → Typeform → SF Lead created automatically", timing: "Automated" },
      { step: "Day 1 (post-event)", action: "'Great meeting you' email + product one-pager", timing: "Rep" },
      { step: "Day 3", action: "Phone call — reference event conversation", timing: "Rep" },
      { step: "Day 7", action: "FinAI re-engagement if no reply", timing: "Automated" },
      { step: "Day 14", action: "LOB-specific case study email", timing: "Rep" },
    ],
  },
];

// ─── LOB Strategy Data ────────────────────────────────────────────────────────
const lobStrategies = [
  {
    name: "Private Clubs",
    icon: Building2,
    color: GOLD,
    priority: "Tier 1",
    subLobs: ["Golf & Country Clubs", "City Clubs", "Yacht Clubs", "Athletic Clubs", "Stadium/Alumni Clubs"],
    namedTargets: ["CMAA Chapters (National, State & Local)", "Platinum Clubs of America", "Distinguished Clubs", "Troon Golf (managed properties)", "Club Corp (managed properties)", "Club Benchmarking", "McMahon Group", "Kopplin Kuebler & Wallace"],
    primaryChannel: "B2B Direct + CMAA Partnership",
    entryPoint: "Fitness Director or GM — typically CMAA member",
    message: "ZeroWheel is the only rotational core training tool built for the aging athlete demographic that defines private club membership. Clubs that add ZeroWheel differentiate their fitness programming, increase member engagement, and reduce churn.",
    sequence: ["CMAA chapter conference sponsorship → booth demo → badge scan → SF Lead", "Fitness director LinkedIn outreach → personalized email → phone call → demo", "Troon/Club Corp account mapping → rep-owned territory → quarterly business review"],
    installs2026: 200,
  },
  {
    name: "Amenities",
    icon: Home,
    color: TEAL,
    priority: "Tier 1",
    subLobs: ["Multi-Family BTR", "Condominium BTO", "HOA", "Destination Resorts", "City Hotels", "Maritime", "Live/Work/Play"],
    namedTargets: ["One Spa World (144 vessels)", "Delos — Alfredo Carvajal", "KT Lim", "Sea Trade", "National Apartment Association", "State Apartment Associations", "ISPA", "Z Capital & Ownership Groups"],
    primaryChannel: "B2B Direct (Maritime) + Digital (Residential)",
    entryPoint: "Wellness/Spa Director (Maritime) or Property Manager (Residential)",
    message: "For maritime: ZeroWheel is a compact, premium wellness amenity that fits in-cabin and fitness center formats across any vessel class. For residential: ZeroWheel differentiates amenity packages in BTR and condo developments targeting wellness-conscious residents.",
    sequence: ["Maritime: One Spa World + Delos direct outreach → vessel pilot → fleet agreement", "Residential: Meta ads targeting property managers + Typeform intake → rep follow-up", "Hotel: ISPA conference + Z Capital ownership group outreach"],
    installs2026: 150,
  },
  {
    name: "Sports Performance",
    icon: Trophy,
    color: PURPLE,
    priority: "Tier 1",
    subLobs: ["Sports Agencies (NFL/NBA/NHL)", "Sports Performance Facilities (HOA & Exos-style)", "Golf Performance", "Pickleball Performance"],
    namedTargets: ["PGA TOUR", "PGA of America", "PGA Southwest Section", "NASM — Dr. Mike Clark", "Titleist Performance Institute (TPI)", "AMPD Golf Performance", "Exos-style performance facilities", "Sports agencies (NFL/NBA/NHL)"],
    primaryChannel: "Thought Leadership + Partnerships (TPI, NASM)",
    entryPoint: "Head of Performance or Athletic Trainer",
    message: "ZeroWheel is the rotational core training tool that elite golf and pickleball athletes use to build the foundation for power and injury prevention. TPI-certified trainers and NASM professionals are the credibility gateway to facility adoption.",
    sequence: ["TPI trainer seeding program → testimonials → club facility referrals", "PGA Merchandise Show exhibit → fitness director demos → SF Lead pipeline", "Dr. Mike Clark / NASM network outreach → co-created content → affiliate arrangement"],
    installs2026: 120,
  },
  {
    name: "Medical",
    icon: Stethoscope,
    color: RED,
    priority: "Tier 2",
    subLobs: ["Physical Therapists", "Hospital-Supported Wellness Centers", "Health Care Facilities"],
    namedTargets: ["Crohn's & Colitis Foundation", "Alzheimer's Association", "Hospital wellness center networks", "PT clinic chains", "Executive Team medical referrals"],
    primaryChannel: "B2B Direct + Thought Leadership",
    entryPoint: "Physical Therapist or Wellness Director",
    message: "ZeroWheel's low-impact rotational core training is clinically relevant for post-surgical rehab, Crohn's management, and cognitive health programs. The longevity and core-strength positioning bridges fitness and medical wellness seamlessly.",
    sequence: ["Executive team medical referrals → warm intro → clinical pilot program", "PT association outreach → case study distribution → facility adoption", "Hospital wellness center direct outreach → demo → department head approval"],
    installs2026: 80,
  },
  {
    name: "Public Authorities",
    icon: Landmark,
    color: ORANGE,
    priority: "Tier 2",
    subLobs: ["Parks & Recreation", "YMCA", "JCC", "Police & Fire Wellness"],
    namedTargets: ["NRPA Annual Conference", "Tampa — Well Certified District", "City of Denver", "Local governments with wellness centers", "YMCA national + regional"],
    primaryChannel: "Events (NRPA) + B2B Direct",
    entryPoint: "Parks & Recreation Director or Wellness Program Manager",
    message: "ZeroWheel fits the public wellness mandate — accessible, durable, and effective for community fitness programs. GSA procurement pathway available for government facilities.",
    sequence: ["NRPA Annual Conference → booth demo → badge scan → SF Lead", "Tampa and Denver named-account outreach → city wellness program pilot", "YMCA national account team → program integration proposal"],
    installs2026: 60,
  },
  {
    name: "Commercial Clubs",
    icon: Dumbbell,
    color: GOLD_DIM,
    priority: "Tier 2",
    subLobs: ["National Key Accounts", "Regional Key Accounts", "Boutique Studios", "Local Club Chains"],
    namedTargets: ["National account yearly company meetings", "Appropriate industry trade shows", "Premium member journey programs", "Boutique studio chains"],
    primaryChannel: "B2B Direct + Trade Shows",
    entryPoint: "VP of Fitness or Regional Operations Director",
    message: "ZeroWheel redefines the premium member journey. For commercial clubs targeting the 45+ demographic, rotational core training is a differentiator that drives member retention and premium tier upgrades.",
    sequence: ["National account meetings → corporate fitness VP outreach → pilot program", "Trade show presence → fitness director demos → regional rollout proposal", "Boutique studio direct outreach → trainer seeding → member program integration"],
    installs2026: 50,
  },
  {
    name: "Corporate Wellness",
    icon: Briefcase,
    color: TEAL,
    priority: "Tier 3",
    subLobs: ["Mid/Large Corporation Wellness Programs", "Corporate Wellness Facilities"],
    namedTargets: ["Top recognized employers in corporate wellness space", "Sports agencies as resellers", "Top management companies as channel partners"],
    primaryChannel: "Partnerships + B2B Direct",
    entryPoint: "VP of HR or Corporate Wellness Director",
    message: "ZeroWheel is a premium wellness benefit that signals investment in employee longevity. For corporations building best-in-class wellness facilities, ZeroWheel is the signature piece that differentiates the program.",
    sequence: ["Corporate wellness conference outreach → HR director demos", "Management company partnerships → embedded in wellness facility specs", "Sports agency channel partner → reseller agreement"],
    installs2026: 40,
  },
  {
    name: "Consumer Direct",
    icon: UserCircle,
    color: "#F472B6",
    priority: "Tier 3",
    subLobs: ["Individual Consumer", "Influencer Networks"],
    namedTargets: ["Delos — Alfredo Carvajal", "Blue Zone — Dan Buettner", "Top 2–3 influencers per macro LOB", "Golf/pickleball enthusiasts 45–70"],
    primaryChannel: "Influencer Network + Digital Paid",
    entryPoint: "Individual purchase via website or influencer promo code",
    message: "For the serious golfer, pickleball player, or longevity-focused individual, ZeroWheel is the at-home or studio training tool that elite athletes use. Influencer credibility + Meta targeting drives direct consumer acquisition.",
    sequence: ["Meta ads targeting golf/pickleball enthusiasts 45–65 → Typeform → SF Lead", "Influencer promo code → website purchase → onboarding email sequence", "Blue Zone / Delos co-branded content → direct consumer awareness"],
    installs2026: 30,
  },
];

// ─── Salesforce Architecture ──────────────────────────────────────────────────
const sfObjects = [
  {
    name: "Lead",
    color: GOLD,
    icon: Target,
    description: "Every inbound inquiry — from Typeform, FinAI, trade show, or manual entry — starts as a Lead. Leads are qualified and converted to Contacts + Opportunities.",
    fields: [
      { field: "Lead Source", type: "Picklist", values: "B2B Direct, E-Commerce, Partner/Referral, Inbound/Marketing, Trade Show, Social/Content, Influencer" },
      { field: "Lead Score", type: "Number (1–10)", values: "Auto-calculated: segment match (3pts) + budget (2pts) + timeline (2pts) + FinAI score (3pts)" },
      { field: "Segment", type: "Picklist", values: "Private Club, Maritime, Medical, Sports Performance, Public Authority, Commercial Club, Corporate, Consumer" },
      { field: "Sub-Segment", type: "Text", values: "e.g., Golf & Country Club, PT Clinic, Cruise Line, BTR Residential" },
      { field: "UTM Source / Medium / Campaign", type: "Text (3 fields)", values: "Auto-populated from Typeform hidden fields via Zapier" },
      { field: "Landing Page URL", type: "URL", values: "Page URL at time of Typeform submission" },
      { field: "FinAI Intent Score", type: "Number (1–10)", values: "Passed from Intercom via API on lead creation" },
      { field: "Typeform Form ID", type: "Text", values: "Identifies which segment form variant was completed" },
      { field: "Territory", type: "Picklist", values: "Auto-assigned by segment + geography routing rules" },
    ],
  },
  {
    name: "Account",
    color: TEAL,
    icon: Building2,
    description: "Accounts represent facilities, companies, or organizations. Named accounts are pre-loaded for Troon, Club Corp, CMAA chapters, One Spa World, and other key targets.",
    fields: [
      { field: "Account Type", type: "Picklist", values: "Prospect, Customer, Partner, Influencer, Competitor" },
      { field: "LOB", type: "Picklist", values: "Private Club, Maritime, Medical, Sports Performance, etc." },
      { field: "Sub-LOB", type: "Text", values: "e.g., Golf & Country Club, Cruise Line, PT Clinic" },
      { field: "Account Tier", type: "Picklist", values: "Platinum, Gold, Standard (maps to Platinum Clubs, Distinguished Clubs tiers)" },
      { field: "CMAA Member", type: "Checkbox", values: "Y/N — flags accounts for CMAA campaign targeting" },
      { field: "Relationship Score", type: "Number (1–5)", values: "Rep-assigned: 1=Cold, 3=Warm, 5=Active Relationship" },
      { field: "Territory Owner", type: "Lookup: User", values: "Assigned rep — drives all activity routing and reporting" },
      { field: "Partner Tier", type: "Picklist", values: "Gold, Silver, Bronze — for Partner Account Type" },
    ],
  },
  {
    name: "Opportunity",
    color: PURPLE,
    icon: DollarSign,
    description: "Opportunities represent active sales cycles. Created when a Lead is converted after BANT qualification. Each opportunity tracks stage, probability, unit count, and close date.",
    fields: [
      { field: "Stage", type: "Picklist", values: "Discovery (20%), Demo (40%), Proposal (60%), Negotiation (80%), Closed Won (100%), Closed Lost (0%)" },
      { field: "Amount", type: "Currency", values: "Unit Count × $1,000 — auto-calculated" },
      { field: "Unit Count", type: "Number", values: "Number of ZeroWheel units in the deal" },
      { field: "Close Date", type: "Date", values: "Expected close — drives forecast reports" },
      { field: "Win Reason", type: "Picklist", values: "Product Fit, Relationship/Trust, ROI Clarity, Demo Quality, Competitive Win" },
      { field: "Loss Reason", type: "Picklist", values: "Price/Budget, Competitor, Timeline, No Decision, Product Fit — required for Closed Lost" },
      { field: "Lead Source (inherited)", type: "Text", values: "Carried from Lead — preserves channel attribution through close" },
      { field: "Campaign Source", type: "Lookup: Campaign", values: "Links opportunity to originating campaign for ROI reporting" },
    ],
  },
  {
    name: "Campaign",
    color: ORANGE,
    icon: Megaphone,
    description: "Campaigns track every marketing initiative — CMAA conferences, Meta campaigns, influencer programs, content series. Every lead and opportunity is attributed to a campaign.",
    fields: [
      { field: "Campaign Type", type: "Picklist", values: "Event, Email, Paid Social, Content, Partner, Influencer, Trade Show" },
      { field: "Start / End Date", type: "Date", values: "Campaign active window" },
      { field: "Budget", type: "Currency", values: "Planned spend for the campaign" },
      { field: "Actual Cost", type: "Currency", values: "Actual spend — updated monthly" },
      { field: "Expected Revenue", type: "Currency", values: "Projected revenue from campaign-attributed opportunities" },
      { field: "Leads Generated", type: "Roll-up", values: "Count of Campaign Members with 'Responded' status" },
      { field: "Opportunities Created", type: "Roll-up", values: "Count of Opportunities attributed to campaign" },
      { field: "Revenue Won", type: "Roll-up", values: "Sum of Closed Won opportunity amounts attributed to campaign" },
    ],
  },
];

const sfAutomations = [
  { trigger: "Typeform Submitted", action: "Zapier webhook → Create Lead in Salesforce with all fields, UTM, and FinAI score", system: "Zapier + Typeform" },
  { trigger: "Lead Created (Score ≥ 6)", action: "Auto-assign to rep by territory/segment rules. Create SF Task: 'First Contact — SLA: 1hr'. Email alert to rep.", system: "Salesforce Flow" },
  { trigger: "Lead Created (Score ≥ 8)", action: "All above + CC manager on email alert. Flag as 'High Priority' in lead record.", system: "Salesforce Flow" },
  { trigger: "Task Overdue (> 2 hours)", action: "Escalation email to manager. Lead flagged 'SLA Breach' in dashboard.", system: "Salesforce Flow" },
  { trigger: "FinAI Demo Booked", action: "Create SF Task: 'Demo Confirmed — [Date]'. Update Lead Stage to 'Demo Scheduled'.", system: "Intercom → Salesforce API" },
  { trigger: "Lead Inactive (30 days)", action: "Enroll in Intercom 30-day nurture email sequence. Update Lead Status to 'Nurture'.", system: "Salesforce Flow → Intercom" },
  { trigger: "Lead Converted to Opportunity", action: "Create Contact + Account + Opportunity. Inherit Lead Source and Campaign. Notify rep.", system: "Salesforce Native" },
  { trigger: "Opportunity Closed Won", action: "Create onboarding task. Schedule NPS survey (30 days post-install). Send referral request email.", system: "Salesforce Flow" },
  { trigger: "Opportunity Closed Lost", action: "Require Loss Reason selection. If future potential: enroll in 90-day re-engagement sequence.", system: "Salesforce Flow" },
  { trigger: "Partner Promo Code Used", action: "Create Lead with Source = 'Influencer — [Name] — [Code]'. Create Commission record in custom object.", system: "Zapier + Salesforce" },
];

// ─── Accountability Data ──────────────────────────────────────────────────────
const weeklyRhythm = [
  {
    day: "Monday",
    color: GOLD,
    meetings: [
      { time: "9:00 AM", title: "Weekly Pipeline Review", attendees: "All Sales Reps + Manager", agenda: "Review all opportunities in Proposal + Negotiation stages. Identify deals at risk. Assign action items for the week." },
      { time: "10:00 AM", title: "New Lead Assignment Review", attendees: "Manager", agenda: "Review all leads created in prior week. Confirm rep assignment, score accuracy, and SLA compliance. Flag any uncontacted leads." },
    ],
  },
  {
    day: "Wednesday",
    color: TEAL,
    meetings: [
      { time: "9:00 AM", title: "Channel Performance Check", attendees: "Marketing + BD Lead", agenda: "Review digital campaign CPL, Meta ad performance, content engagement. Kill underperformers. Scale winners. Review partner referral volume." },
    ],
  },
  {
    day: "Friday",
    color: PURPLE,
    meetings: [
      { time: "2:00 PM", title: "Weekly Wins & Losses Debrief", attendees: "All Sales Reps + Manager", agenda: "Review all Closed Won and Closed Lost from the week. Win reasons, loss reasons, competitive intel. Lessons applied to next week's sequences." },
    ],
  },
];

const monthlyReviews = [
  { title: "Monthly Revenue vs. Budget Review", owner: "Manager + Finance", items: ["Actual installs vs. monthly target (pace to 1,000)", "Revenue vs. budget by channel and LOB", "Pipeline coverage ratio (3x target minimum)", "Forecast accuracy review — adjust Q2/Q3 targets if needed"] },
  { title: "Monthly Channel ROI Report", owner: "Marketing Manager", items: ["Cost per lead by channel (B2B Direct, Digital, Events, Influencer)", "Cost per install by channel", "Campaign-attributed revenue vs. spend", "Top 3 performing campaigns — scale decisions"] },
  { title: "Monthly Partner & Influencer Report", owner: "BD Lead", items: ["Units driven per partner/influencer", "Commission owed and paid", "New partners onboarded", "Partner tier reviews — promotions and exits"] },
  { title: "Monthly Win/Loss Analysis", owner: "Manager", items: ["Win rate by channel, LOB, and rep", "Top 3 win reasons — reinforce in training", "Top 3 loss reasons — address in product/pricing/messaging", "Competitive win/loss tracking"] },
];

const repKPIs = [
  { kpi: "Monthly Installs", target: "Per quota (varies by territory)", tracking: "Salesforce Opportunity — Closed Won" },
  { kpi: "Pipeline Coverage", target: "3× monthly quota minimum", tracking: "Salesforce Pipeline Report — open opportunities" },
  { kpi: "First Contact SLA", target: "≥ 90% within 1 business hour", tracking: "Salesforce Task completion time vs. lead creation" },
  { kpi: "Demo Rate", target: "≥ 15% of qualified leads", tracking: "Salesforce — leads with Demo stage reached" },
  { kpi: "Win Rate", target: "≥ 25% of opportunities", tracking: "Salesforce — Closed Won / Total Closed" },
  { kpi: "Activity Volume", target: "50 calls + 100 emails/week", tracking: "Salesforce Activity Report" },
  { kpi: "Sequence Compliance", target: "3-touch minimum before disqualify", tracking: "Salesforce — leads with < 3 activities flagged" },
  { kpi: "Lead Recycling", target: "0 leads inactive > 30 days", tracking: "Salesforce — leads with no activity in 30 days" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ZWMarketingInfrastructure() {
  const [activeChannel, setActiveChannel] = useState<string | null>(null);
  const [activeLob, setActiveLob] = useState<number | null>(null);
  const [activeSfObject, setActiveSfObject] = useState<number>(0);

  const activePlaybook = channelPlaybooks.find(c => c.id === activeChannel) ?? null;

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* ── HERO ── */}
      <DarkHero
        eyebrow="ZEROWHEEL · MARKETING INFRASTRUCTURE"
        title="Go-To-Market Engine"
        description="A fully operational acquisition infrastructure — from first website visit to installed unit. Every channel, every lead stage, every Salesforce field, and every team accountability mechanism documented and ready to execute."
        stats={[
          { value: "7", label: "Lead Intake Steps" },
          { value: "6", label: "Acquisition Channels" },
          { value: "8", label: "LOB Playbooks" },
          { value: "$1M", label: "2026 Revenue Target" },
        ]}
      />

      {/* ── LEAD INTAKE FLOW ── */}
      <section id="lead-intake" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Lead Intake Flow · Step by Step"
            title="Website Visit → Salesforce Lead → Sales Reachout"
            description="Every lead — regardless of channel — flows through this exact 7-step sequence. No lead enters the pipeline without UTM attribution, FinAI qualification, and a Salesforce record. No rep touches a lead without a task, a score, and a transcript."
          />

          {/* Steps 1–4 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-2 items-start mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {intakeSteps.slice(0, 4).map((step, i) => (
              <div key={i} className="contents">
                <FlowNode {...step} />
                {i < 3 && <div className="hidden lg:flex items-center justify-center"><FlowArrow /></div>}
              </div>
            ))}
          </motion.div>

          {/* Steps 5–7 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 items-start mb-10"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {intakeSteps.slice(4).map((step, i) => (
              <div key={i} className="contents">
                <FlowNode {...step} />
                {i < 2 && <div className="hidden lg:flex items-center justify-center"><FlowArrow /></div>}
              </div>
            ))}
          </motion.div>

          {/* Three supporting detail cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: GOLD }}>Lead Source Delineation</p>
              <div className="space-y-2">
                {[
                  { src: "B2B Direct Sales", detail: "Rep-initiated outreach — logged manually or via sequence" },
                  { src: "E-Commerce / Website", detail: "Typeform submission from website — no rep involved at entry" },
                  { src: "Partner & Referral", detail: "Gym, clinic, facility, or management company referral" },
                  { src: "Inbound / Marketing", detail: "SEO, content, email nurture, or organic social" },
                  { src: "Trade Show & Events", detail: "Badge scan or QR code at CMAA, PGA Show, NRPA, Sea Trade" },
                  { src: "Social / Paid Ads", detail: "Meta lead form, LinkedIn Sponsored, Google PMax" },
                  { src: "Influencer / Affiliate", detail: "Promo code from Delos, Blue Zone, TPI trainer, or affiliate" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: GOLD }} />
                    <div>
                      <p className="font-body text-xs text-white/60 font-medium">{item.src}</p>
                      <p className="font-body text-[10px] text-white/25">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: TEAL }}>Lead Scoring Criteria</p>
              <div className="space-y-3">
                {[
                  { factor: "Segment Match", points: "+3 pts", desc: "B2B club / medical / maritime = high-value segment" },
                  { factor: "Budget Indicated", points: "+2 pts", desc: "Form response indicates budget ≥ $1,000" },
                  { factor: "Timeline ≤ 90 Days", points: "+2 pts", desc: "Purchase timeline within current quarter" },
                  { factor: "FinAI Intent Score", points: "Up to +3 pts", desc: "Intercom AI scores 1–10 based on conversation depth" },
                  { factor: "Decision-Maker Role", points: "+1 pt", desc: "GM, Owner, Director, VP — not staff-level contact" },
                  { factor: "Return Visitor", points: "+1 pt", desc: "Second or subsequent website visit before conversion" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-3" style={{ borderColor: `${TEAL}15`, background: `${TEAL}05` }}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-mono text-[10px] font-semibold text-white/70">{item.factor}</p>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: `${TEAL}20`, color: TEAL }}>{item.points}</span>
                    </div>
                    <p className="font-body text-[10px] text-white/30">{item.desc}</p>
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: PURPLE }}>Lead Process Rules</p>
              <div className="space-y-3">
                {[
                  { rule: "1-Hour First Contact SLA", desc: "All new leads must receive first contact within 1 business hour. Overdue leads escalate to manager at 2 hours." },
                  { rule: "3-Touch Minimum Before Disqualify", desc: "Leads must receive at least 3 documented contact attempts (call + email + FinAI re-engage) before being marked unresponsive." },
                  { rule: "30-Day Nurture Recycling", desc: "Leads with no activity for 30 days are automatically enrolled in Intercom nurture sequence. Status updated to 'Nurture'." },
                  { rule: "Disqualification Requires Reason", desc: "Reps must select a disqualification reason before closing a lead. No blank closes. Options: no budget, wrong segment, competitor, timing." },
                  { rule: "High-Score Leads (≥ 8) — Manager CC", desc: "Any lead scoring 8 or above triggers a manager CC on the rep notification email and a 'High Priority' flag in Salesforce." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-3" style={{ borderColor: `${PURPLE}15`, background: `${PURPLE}05` }}>
                    <p className="font-mono text-[10px] font-semibold mb-1" style={{ color: PURPLE }}>{item.rule}</p>
                    <p className="font-body text-[10px] text-white/30 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── ACQUISITION FUNNEL ── */}
      <section id="funnel" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Acquisition Funnel · 2026 Targets"
            title="From 48,000 Visitors to 1,000 Installs"
            description="Every stage of the funnel has a defined conversion rate, a responsible system, and a Salesforce record. The funnel is not aspirational — it is the operational target that drives weekly pipeline reviews and monthly forecasting."
          />

          <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
            {/* Funnel stages */}
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-6" style={{ color: GOLD }}>Funnel Stages · YTD Actuals + 2026 Targets</p>
              <div className="space-y-4">
                {funnelStages.map((stage, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: stage.color }} />
                        <span className="font-body text-sm text-white/70">{stage.label}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs font-bold text-white">{stage.count.toLocaleString()}</span>
                        {stage.pct && (
                          <span className="font-mono text-[10px] w-10 text-right" style={{ color: stage.color }}>{stage.pct}</span>
                        )}
                      </div>
                    </div>
                    <ProgressBar value={stage.count} max={funnelStages[0].count} color={stage.color} />
                    <p className="font-body text-[10px] text-white/25 mt-1 ml-5">{stage.desc}</p>
                  </div>
                ))}
              </div>
            </DarkCard>

            {/* Channel mix */}
            <div className="space-y-4">
              <DarkCard>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>Channel Mix · 2026 Install Targets</p>
                <div className="space-y-4">
                  {channelMix.map((ch) => (
                    <div key={ch.id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-body text-xs text-white/60">{ch.label}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px]" style={{ color: ch.color }}>{ch.target}</span>
                          <span className="font-mono text-xs font-bold text-white">{ch.pct}%</span>
                        </div>
                      </div>
                      <ProgressBar value={ch.pct} max={100} color={ch.color} />
                    </div>
                  ))}
                </div>
              </DarkCard>

              <DarkCard>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: TEAL }}>Key Conversion Benchmarks</p>
                <div className="space-y-2">
                  {[
                    { label: "Visitor → FinAI Engaged", rate: "20%", note: "Industry avg: 8–12%" },
                    { label: "FinAI → Typeform Submit", rate: "13%", note: "Qualified intent threshold" },
                    { label: "Lead → MQL", rate: "42%", note: "Score ≥ 6 + segment match" },
                    { label: "MQL → SQL (Opportunity)", rate: "66%", note: "BANT confirmed by rep" },
                    { label: "SQL → Demo", rate: "59%", note: "Demo scheduled + completed" },
                    { label: "Demo → Proposal", rate: "72%", note: "Proposal sent after demo" },
                    { label: "Overall: Visitor → Install", rate: "2.1%", note: "Target: 1,000 / 48,000" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                      <span className="font-body text-[11px] text-white/40">{item.label}</span>
                      <div className="text-right">
                        <span className="font-mono text-xs font-bold" style={{ color: TEAL }}>{item.rate}</span>
                        <p className="font-mono text-[9px] text-white/20">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </DarkCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHANNEL PLAYBOOKS ── */}
      <section id="channels" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Channel Playbooks · Execution Detail"
            title="Six Channels. Six Distinct Playbooks."
            description="Each channel has a defined owner, specific tactics with named targets, a Salesforce tracking setup, outreach sequences, and measurable KPIs. Select a channel to see the full playbook."
          />

          {/* Channel selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {channelPlaybooks.map((ch) => (
              <motion.button
                key={ch.id}
                onClick={() => setActiveChannel(activeChannel === ch.id ? null : ch.id)}
                whileHover={{ y: -2 }}
                className={`p-4 rounded-2xl border text-left transition-all ${activeChannel === ch.id ? "border-opacity-60" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"}`}
                style={activeChannel === ch.id ? { borderColor: ch.color, background: `${ch.color}10` } : {}}
              >
                <ch.icon className="w-5 h-5 mb-2" style={{ color: ch.color }} />
                <p className="font-body text-xs font-semibold text-white/80 leading-tight">{ch.title}</p>
                <p className="font-mono text-[9px] mt-1" style={{ color: ch.color }}>{ch.target.split("·")[0].trim()}</p>
              </motion.button>
            ))}
          </div>

          {/* Active playbook detail */}
          <AnimatePresence>
            {activePlaybook && (
              <motion.div
                key={activePlaybook.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border p-8"
                style={{ background: CARD_BG, borderColor: `${activePlaybook.color}25` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <activePlaybook.icon className="w-6 h-6" style={{ color: activePlaybook.color }} />
                      <h3 className="font-display text-2xl font-semibold text-white">{activePlaybook.title}</h3>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: activePlaybook.color }}>{activePlaybook.target}</p>
                    <p className="font-body text-xs text-white/30 mt-1">Owner: {activePlaybook.owner}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Tactics */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/40">Tactics & Execution</p>
                    <div className="space-y-3">
                      {activePlaybook.tactics.map((t, i) => (
                        <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${activePlaybook.color}15`, background: `${activePlaybook.color}05` }}>
                          <p className="font-mono text-[10px] font-semibold mb-2" style={{ color: activePlaybook.color }}>{t.label}</p>
                          <p className="font-body text-[11px] text-white/35 leading-relaxed">{t.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Outreach Sequence */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/40">Outreach Sequence</p>
                      <div className="space-y-2">
                        {activePlaybook.sequences.map((seq, i) => (
                          <div key={i} className="flex items-start gap-3 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                            <span className="font-mono text-[9px] px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style={{ background: `${activePlaybook.color}20`, color: activePlaybook.color }}>{seq.step}</span>
                            <div className="flex-1">
                              <p className="font-body text-xs text-white/55">{seq.action}</p>
                              <p className="font-mono text-[9px] text-white/20">{seq.timing}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* KPIs */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/40">KPIs & Targets</p>
                      <div className="space-y-2">
                        {activePlaybook.kpis.map((kpi, i) => (
                          <div key={i} className="flex items-center justify-between py-1.5 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                            <span className="font-body text-xs text-white/45">{kpi.label}</span>
                            <span className="font-mono text-xs font-semibold" style={{ color: activePlaybook.color }}>{kpi.target}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SF Tracking */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/40">Salesforce Tracking Fields</p>
                      <div className="space-y-1.5">
                        {activePlaybook.sfFields.map((field, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Database className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: GOLD_DIM }} />
                            <span className="font-body text-[10px] text-white/30 leading-relaxed">{field}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!activePlaybook && (
            <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
              <p className="font-body text-sm text-white/20">Select a channel above to view the full playbook</p>
            </div>
          )}
        </div>
      </section>

      {/* ── LOB STRATEGIES ── */}
      <section id="lob-strategy" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="LOB-Specific Strategies · Named Targets"
            title="8 Macro LOBs. Specific Playbooks for Each."
            description="Each line of business has a defined priority tier, named target accounts and associations, primary acquisition channel, messaging framework, and 2026 install target. These are not generic segments — they are operational playbooks."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {lobStrategies.map((lob, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveLob(activeLob === i ? null : i)}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className={`p-5 rounded-2xl border text-left transition-all ${activeLob === i ? "" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"}`}
                style={activeLob === i ? { borderColor: lob.color, background: `${lob.color}10` } : {}}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${lob.color}18` }}>
                    <lob.icon className="w-5 h-5" style={{ color: lob.color }} />
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${lob.color}20`, color: lob.color }}>{lob.priority}</span>
                </div>
                <p className="font-display text-sm font-semibold text-white mb-1">{lob.name}</p>
                <p className="font-mono text-[10px] mb-3" style={{ color: lob.color }}>{lob.installs2026} installs · 2026</p>
                <p className="font-body text-[10px] text-white/30 leading-relaxed line-clamp-2">{lob.primaryChannel}</p>
                <div className="mt-2 flex items-center gap-1 text-white/20">
                  {activeLob === i ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  <span className="font-mono text-[9px]">{activeLob === i ? "collapse" : "expand"}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {activeLob !== null && (
              <motion.div
                key={activeLob}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border p-8"
                style={{ background: CARD_BG, borderColor: `${lobStrategies[activeLob].color}25` }}
              >
                {(() => {
                  const lob = lobStrategies[activeLob];
                  return (
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${lob.color}18` }}>
                            <lob.icon className="w-5 h-5" style={{ color: lob.color }} />
                          </div>
                          <div>
                            <p className="font-display text-lg font-semibold text-white">{lob.name}</p>
                            <p className="font-mono text-[10px]" style={{ color: lob.color }}>{lob.installs2026} installs · {lob.priority}</p>
                          </div>
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 text-white/30">Sub-LOBs</p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {lob.subLobs.map((s, i) => (
                            <span key={i} className="font-body text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: `${lob.color}30`, color: `${lob.color}80` }}>{s}</span>
                          ))}
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 text-white/30">Primary Channel</p>
                        <p className="font-body text-xs text-white/50 mb-4">{lob.primaryChannel}</p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 text-white/30">Entry Point</p>
                        <p className="font-body text-xs text-white/50">{lob.entryPoint}</p>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/30">Named Targets & Associations</p>
                        <div className="space-y-1.5 mb-6">
                          {lob.namedTargets.map((t, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: lob.color }} />
                              <span className="font-body text-xs text-white/50">{t}</span>
                            </div>
                          ))}
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3 text-white/30">Messaging Framework</p>
                        <div className="rounded-xl border p-4" style={{ borderColor: `${lob.color}20`, background: `${lob.color}06` }}>
                          <p className="font-body text-xs text-white/45 leading-relaxed">{lob.message}</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/30">Acquisition Sequences</p>
                        <div className="space-y-3">
                          {lob.sequence.map((seq, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${lob.color}20` }}>
                                <span className="font-mono text-[9px] font-bold" style={{ color: lob.color }}>{i + 1}</span>
                              </div>
                              <p className="font-body text-xs text-white/45 leading-relaxed">{seq}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── SALESFORCE ARCHITECTURE ── */}
      <section id="salesforce" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Salesforce CRM Architecture"
            title="Objects, Fields, and Automation Rules"
            description="The Salesforce data model that powers ZeroWheel's entire GTM operation. Every lead, account, opportunity, and campaign is structured to support attribution, forecasting, and accountability reporting."
          />

          {/* Object tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {sfObjects.map((obj, i) => (
              <button
                key={i}
                onClick={() => setActiveSfObject(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-xs transition-all ${activeSfObject === i ? "" : "border-white/5 text-white/40 hover:text-white/60"}`}
                style={activeSfObject === i ? { borderColor: obj.color, color: obj.color, background: `${obj.color}10` } : {}}
              >
                <obj.icon className="w-3.5 h-3.5" />
                {obj.name}
              </button>
            ))}
          </div>

          {/* Active object detail */}
          <div className="rounded-2xl border p-8 mb-8" style={{ background: CARD_BG, borderColor: `${sfObjects[activeSfObject].color}25` }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${sfObjects[activeSfObject].color}18` }}>
                {(() => { const Ic = sfObjects[activeSfObject].icon; return <Ic className="w-5 h-5" style={{ color: sfObjects[activeSfObject].color }} />; })()}
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-white mb-1">{sfObjects[activeSfObject].name} Object</p>
                <p className="font-body text-sm text-white/40 leading-relaxed max-w-2xl">{sfObjects[activeSfObject].description}</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3 pr-6">Field Name</th>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3 pr-6">Type</th>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3">Values / Logic</th>
                  </tr>
                </thead>
                <tbody>
                  {sfObjects[activeSfObject].fields.map((field, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                      <td className="py-3 pr-6">
                        <span className="font-mono text-xs font-semibold" style={{ color: sfObjects[activeSfObject].color }}>{field.field}</span>
                      </td>
                      <td className="py-3 pr-6">
                        <span className="font-mono text-[10px] text-white/30">{field.type}</span>
                      </td>
                      <td className="py-3">
                        <span className="font-body text-[11px] text-white/40 leading-relaxed">{field.values}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Automation rules */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-6" style={{ color: GOLD }}>Salesforce Automation Rules & Flows</p>
            <div className="space-y-3">
              {sfAutomations.map((auto, i) => (
                <div key={i} className="grid md:grid-cols-[1fr_2fr_auto] gap-4 items-start py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                  <div>
                    <p className="font-mono text-[10px] font-semibold" style={{ color: GOLD }}>TRIGGER</p>
                    <p className="font-body text-xs text-white/60 mt-1">{auto.trigger}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold text-white/30">ACTION</p>
                    <p className="font-body text-xs text-white/45 mt-1 leading-relaxed">{auto.action}</p>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-1 rounded-full border whitespace-nowrap" style={{ borderColor: `${TEAL}30`, color: `${TEAL}80` }}>{auto.system}</span>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ── INFLUENCER & AFFILIATE PROGRAM ── */}
      <section id="influencer" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Influencer & Affiliate Program"
            title="$250/Unit Commission. Named Partners. Full Tracking."
            description="Not a social media campaign. A structured sales partnership program with named anchor influencers, tiered commission bonuses, and full Salesforce tracking from promo code to install."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Delos — Alfredo Carvajal", category: "Maritime Wellness", color: TEAL, tier: "Anchor", units: "25+ target", detail: "Named WEG relationship. Maritime wellness pioneer with reach across cruise line wellness programs. Co-create in-cabin wellness content. Unique promo code tracked in Salesforce. Target: 25 installs in 2026 via Delos network." },
              { name: "Blue Zone — Dan Buettner", category: "Longevity & Wellness", color: PURPLE, tier: "Anchor", units: "20+ target", detail: "Named WEG relationship. Blue Zone brand has massive reach in the longevity and aging-athlete space. ZeroWheel's core-strength and longevity positioning is a direct fit. Co-branded content + affiliate arrangement. Target: 20 installs in 2026." },
              { name: "Dr. Mike Clark / NASM Network", category: "Sports Performance", color: GOLD, tier: "Anchor", units: "15+ target", detail: "NASM founder and sports performance authority. Gateway to TPI-certified trainers, sports performance facilities, and professional athlete networks. Seed ZeroWheel for NASM program integration. Target: 15 installs via NASM/TPI network." },
            ].map((inf, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6"
                style={{ background: CARD_BG, borderColor: `${inf.color}25` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">{inf.name}</p>
                    <p className="font-mono text-[10px] mt-0.5" style={{ color: inf.color }}>{inf.category}</p>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${inf.color}20`, color: inf.color }}>{inf.tier}</span>
                </div>
                <p className="font-body text-[11px] text-white/35 leading-relaxed mb-4">{inf.detail}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/30">2026 Target</span>
                  <span className="font-mono text-sm font-bold" style={{ color: inf.color }}>{inf.units}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>Commission Structure</p>
              <div className="space-y-3">
                {[
                  { tier: "Base Commission", amount: "$250 / unit", condition: "Every install driven via unique promo code", color: GOLD },
                  { tier: "10-Unit Bonus", amount: "+$500", condition: "Cumulative bonus at 10 installs in a calendar year", color: TEAL },
                  { tier: "25-Unit Bonus", amount: "+$1,500", condition: "Cumulative bonus at 25 installs in a calendar year", color: PURPLE },
                  { tier: "50-Unit Bonus", amount: "+$3,500", condition: "Cumulative bonus at 50 installs — top-tier partner status", color: GREEN },
                ].map((tier, i) => (
                  <div key={i} className="rounded-xl border p-4 flex items-center justify-between" style={{ borderColor: `${tier.color}20`, background: `${tier.color}06` }}>
                    <div>
                      <p className="font-mono text-[10px] font-semibold" style={{ color: tier.color }}>{tier.tier}</p>
                      <p className="font-body text-[10px] text-white/30 mt-0.5">{tier.condition}</p>
                    </div>
                    <span className="font-mono text-lg font-bold" style={{ color: tier.color }}>{tier.amount}</span>
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: TEAL }}>Salesforce Tracking Architecture</p>
              <div className="space-y-3">
                {[
                  { label: "Custom Object: Influencer Commission", detail: "Tracks promo code, units driven, commission rate, payment status, and payment date for every influencer partner." },
                  { label: "Lead Source Field", detail: "'Influencer — [Name] — [Promo Code]' — every lead from an influencer is tagged at creation for full attribution through close." },
                  { label: "Campaign: Influencer-Program-2026", detail: "All influencer-sourced leads added as Campaign Members. Campaign ROI report shows units, revenue, and commission cost per influencer." },
                  { label: "Monthly Commission Report", detail: "Auto-generated Salesforce report: units per influencer, commission owed, commission paid, and outstanding balance. Sent to BD Lead on 1st of each month." },
                  { label: "Tier Review Dashboard", detail: "Real-time dashboard showing each influencer's progress toward 10/25/50-unit bonus thresholds. Visible to BD Lead and management." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-3" style={{ borderColor: `${TEAL}15`, background: `${TEAL}05` }}>
                    <p className="font-mono text-[10px] font-semibold mb-1" style={{ color: TEAL }}>{item.label}</p>
                    <p className="font-body text-[10px] text-white/30 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ── TEAM ACCOUNTABILITY ── */}
      <section id="accountability" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Team Accountability & Cadence"
            title="Weekly Rhythm. Monthly Reviews. Rep-Level KPIs."
            description="Accountability is not a quarterly check-in. It is a weekly rhythm of pipeline reviews, channel performance checks, and win/loss debriefs — all anchored to Salesforce data, not self-reported numbers."
          />

          {/* Weekly rhythm */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {weeklyRhythm.map((day, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6"
                style={{ background: CARD_BG, borderColor: `${day.color}25` }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: day.color }}>{day.day}</p>
                {day.meetings.map((mtg, j) => (
                  <div key={j} className={j > 0 ? "mt-4 pt-4 border-t" : ""} style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${day.color}20`, color: day.color }}>{mtg.time}</span>
                    </div>
                    <p className="font-display text-sm font-semibold text-white mb-1">{mtg.title}</p>
                    <p className="font-mono text-[10px] text-white/30 mb-2">{mtg.attendees}</p>
                    <p className="font-body text-[11px] text-white/35 leading-relaxed">{mtg.agenda}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Monthly reviews */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {monthlyReviews.map((review, i) => (
              <DarkCard key={i}>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: GOLD }}>Monthly Review</p>
                <p className="font-display text-sm font-semibold text-white mb-1">{review.title}</p>
                <p className="font-body text-[10px] text-white/30 mb-4">Owner: {review.owner}</p>
                <div className="space-y-2">
                  {review.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: GOLD_DIM }} />
                      <span className="font-body text-xs text-white/40">{item}</span>
                    </div>
                  ))}
                </div>
              </DarkCard>
            ))}
          </div>

          {/* Rep KPI table */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-6" style={{ color: GOLD }}>Rep-Level KPIs — Tracked Weekly in Salesforce</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3 pr-6">KPI</th>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3 pr-6">Target</th>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3">Salesforce Tracking Method</th>
                  </tr>
                </thead>
                <tbody>
                  {repKPIs.map((kpi, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                      <td className="py-3 pr-6">
                        <span className="font-body text-sm text-white/70">{kpi.kpi}</span>
                      </td>
                      <td className="py-3 pr-6">
                        <span className="font-mono text-xs font-semibold" style={{ color: GOLD }}>{kpi.target}</span>
                      </td>
                      <td className="py-3">
                        <span className="font-body text-xs text-white/35">{kpi.tracking}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DarkCard>
        </div>
      </section>
    </Layout>
  );
}
