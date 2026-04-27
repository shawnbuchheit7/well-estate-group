/**
 * ZeroWheel GTM Marketing Plan
 * THE definitive marketing infrastructure document. No duplication with Sales Infrastructure.
 * Sales Infrastructure owns: pipeline analytics, rep performance, forecasting, win/loss.
 * This page owns: systems architecture, lead funnel, channels, LOB playbooks, email nurture, influencer, accountability.
 *
 * Design: Dark luxury, #0A0A0A bg, gold/teal/purple accents
 * Sections:
 *   1. Hero (mission statement + targets)
 *   2. Systems Architecture (Salesforce + Typeform + Intercom + Klaviyo + Zapier + Meta/LinkedIn)
 *   3. Lead Funnel (7-step intake + stage conversion)
 *   4. Channel Execution (6 channels with playbooks)
 *   5. LOB Playbooks (8 macro LOBs with named targets)
 *   6. Email Nurture Architecture (Klaviyo sequences by segment)
 *   7. Influencer & Affiliate Program
 *   8. Quarterly Execution Timeline
 *   9. Accountability Framework
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Cpu, Bot, FormInput, Database, Mail, Phone,
  Users, Handshake, GraduationCap, Star, Award, Building2,
  Dumbbell, Stethoscope, Trophy, Briefcase, UserCircle, Home, Landmark,
  ArrowRight, ArrowDown, CheckCircle2,
  Target, DollarSign, Megaphone,
  ChevronDown, ChevronUp, Bell, Zap, Send, Clock,
  BarChart3, Calendar, Layers, Filter,
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
const PINK = "#F472B6";
const CARD_BG = "#111111";
const CARD_BORDER = "rgba(201,169,98,0.12)";

// ─── Section Nav ─────────────────────────────────────────────────────────────
const sections = [
  { id: "hero", label: "Overview" },
  { id: "systems", label: "Systems" },
  { id: "lead-funnel", label: "Lead Funnel" },
  { id: "channels", label: "Channels" },
  { id: "lob-playbooks", label: "LOB Playbooks" },
  { id: "email-nurture", label: "Email Nurture" },
  { id: "influencer", label: "Influencer" },
  { id: "timeline", label: "Timeline" },
  { id: "accountability", label: "Accountability" },
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

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 2: SYSTEMS ARCHITECTURE
// ════════════════════════════════════════════════════════════════════════════════
const systemsStack = [
  {
    name: "Salesforce CRM",
    role: "Source of Truth",
    icon: Database,
    color: GOLD,
    description: "Every lead, contact, account, opportunity, and campaign lives here. Salesforce is the single source of truth for pipeline, attribution, and revenue reporting. All other systems feed into it.",
    responsibilities: [
      "Lead records with source attribution and scoring",
      "Opportunity stages: Discovery, Demo, Proposal, Negotiation, Closed",
      "Account records with LOB, sub-LOB, tier, and territory owner",
      "Campaign tracking with ROI (leads generated, revenue won, cost)",
      "Automated lead routing by segment and territory",
      "Win/loss reason capture for competitive intelligence",
      "Custom objects: Partner Commission, Influencer Tracking",
    ],
  },
  {
    name: "Intercom + FinAI",
    role: "AI Engagement Layer",
    icon: Bot,
    color: PURPLE,
    description: "24/7 AI chat on the ZeroWheel website. FinAI answers product questions from the knowledge base, qualifies visitor intent with a 1 to 10 score, books demos via calendar integration, and passes full transcripts to Salesforce on lead creation.",
    responsibilities: [
      "Instant AI response to all website visitors (under 5 seconds)",
      "Product Q&A from ZeroWheel knowledge base",
      "Intent scoring: conversation depth, segment match, timeline",
      "Automated demo booking for high-intent visitors (score 7+)",
      "Full chat transcript synced to Salesforce Lead record",
      "Re-engagement sequences for dormant leads (30-day trigger)",
      "Handoff to live rep with full conversation context",
    ],
  },
  {
    name: "Typeform",
    role: "Lead Capture",
    icon: FormInput,
    color: TEAL,
    description: "Conversational intake forms embedded on the website and landing pages. Conditional logic routes visitors through B2B (club, medical, maritime, corporate) or consumer forms. Every submission creates a Salesforce Lead via Zapier within 60 seconds.",
    responsibilities: [
      "B2B form: facility name, segment, role, unit count, timeline, budget",
      "Consumer form: name, email, phone, use case, purchase timeline",
      "UTM parameter capture (hidden fields) for campaign attribution",
      "Conditional logic routes to correct form variant by referral source",
      "Partial completion triggers FinAI re-engagement",
      "Form ID stored in Salesforce to identify segment funnel",
      "Mobile-optimized for consumer direct and trade show QR codes",
    ],
  },
  {
    name: "Klaviyo",
    role: "Email Nurture Engine",
    icon: Mail,
    color: PINK,
    description: "Email marketing and drip automation platform. Syncs with Salesforce to pull Lead and Contact data into segmented lists. Handles all automated nurture sequences, campaign blasts, and lifecycle emails. Chosen over Pardot for cost efficiency ($150/mo vs. $1,250/mo) and hybrid B2B/DTC capability.",
    responsibilities: [
      "Salesforce sync: Leads and Contacts flow into Klaviyo profiles",
      "Segment-specific nurture flows (Club, Maritime, Medical, Consumer)",
      "30-day re-engagement sequence for unresponsive leads",
      "Post-demo follow-up sequence (3 emails over 7 days)",
      "Monthly newsletter to all contacts (thought leadership content)",
      "Event-triggered emails: trade show follow-up, case study delivery",
      "Influencer welcome sequence for new affiliate partners",
    ],
  },
  {
    name: "Zapier",
    role: "Integration Layer",
    icon: Zap,
    color: ORANGE,
    description: "Connects all systems without custom code. Zapier webhooks fire on Typeform submissions to create Salesforce Leads, sync Salesforce data to Klaviyo, trigger Slack notifications, and log partner promo code usage to the custom Commission object.",
    responsibilities: [
      "Typeform submission → Salesforce Lead creation (60 seconds)",
      "Salesforce Lead creation → Klaviyo profile sync + list assignment",
      "Salesforce Lead creation → rep email notification",
      "Trade show badge scan → Salesforce Lead + Klaviyo event list",
      "Partner promo code used → Salesforce Commission record",
      "Salesforce Opportunity Closed Won → Klaviyo onboarding sequence",
      "FinAI demo booked → Salesforce Task creation",
    ],
  },
  {
    name: "Meta + LinkedIn Ads",
    role: "Paid Acquisition",
    icon: Globe,
    color: TEAL,
    description: "Paid channels for targeted lead generation. Meta for consumer and B2B persona campaigns via lead forms. LinkedIn for Sales Navigator outreach and Sponsored Content targeting fitness directors, GMs, and wellness VPs at named accounts.",
    responsibilities: [
      "Meta: 3 persona campaigns (Club GMs, Golf Enthusiasts, Hospitality)",
      "Meta lead forms → Typeform redirect → Salesforce Lead",
      "LinkedIn Sales Navigator: 50 connections/week per rep",
      "LinkedIn Sponsored Content for thought leadership amplification",
      "Retargeting pixel on all landing pages for non-converters",
      "UTM parameters on every ad for full Salesforce attribution",
      "Budget: $1,500/month test → scale winners to $5K/month",
    ],
  },
];

const systemConnections = [
  { from: "Website Visitor", to: "Intercom FinAI", method: "Widget loads on page", color: PURPLE },
  { from: "Intercom FinAI", to: "Typeform", method: "High-intent → form redirect", color: TEAL },
  { from: "Typeform", to: "Salesforce", method: "Zapier webhook (60 sec)", color: GOLD },
  { from: "Salesforce", to: "Klaviyo", method: "Native sync (profiles + lists)", color: PINK },
  { from: "Salesforce", to: "Rep Inbox", method: "Email alert + SF Task", color: GOLD },
  { from: "Klaviyo", to: "Lead Inbox", method: "Nurture emails (automated)", color: PINK },
  { from: "Meta/LinkedIn", to: "Landing Pages", method: "Paid traffic with UTMs", color: TEAL },
  { from: "Trade Show Scan", to: "Salesforce", method: "Zapier (badge scan app)", color: ORANGE },
  { from: "Partner Promo Code", to: "Salesforce", method: "Zapier → Commission object", color: GREEN },
];

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 3: LEAD FUNNEL
// ════════════════════════════════════════════════════════════════════════════════
const funnelSteps = [
  {
    step: "01", icon: Globe, title: "Website Visit", system: "Any Channel", color: TEAL,
    description: "Visitor arrives via organic search, paid ad, partner referral, QR code at trade show, or direct URL. Every entry point carries UTM parameters.",
    details: ["Organic: SEO content, LinkedIn post, YouTube video", "Paid: Meta lead form, Google PMax, LinkedIn Sponsored", "Referral: Partner link, influencer promo code, CMAA newsletter", "Direct: Business card, trade show badge scan, email campaign"],
  },
  {
    step: "02", icon: Cpu, title: "UTM Capture", system: "Typeform + GA4", color: TEAL,
    description: "Every inbound URL carries UTM parameters that are auto-captured and stored against the lead record in Salesforce.",
    details: ["utm_source: google, instagram, linkedin, cmaa, partner", "utm_medium: cpc, organic, email, referral, event", "utm_campaign: spring-launch-2026, cmaa-regional, golf-series", "utm_content: ad variant or creative ID for A/B tracking"],
  },
  {
    step: "03", icon: Bot, title: "FinAI Engagement", system: "Intercom", color: PURPLE,
    description: "Intercom's FinAI chat widget activates immediately. AI answers product questions, scores intent (1 to 10), and routes high-value visitors before they leave.",
    details: ["Responds in under 5 seconds, 24/7, no rep required", "Asks qualifying questions: segment, facility size, timeline", "Intent score 7+ auto-books demo via calendar integration", "Full chat transcript passes to Salesforce on lead creation"],
  },
  {
    step: "04", icon: FormInput, title: "Typeform Intake", system: "Typeform", color: GOLD,
    description: "Segment-specific intake form captures structured lead data. B2B form (club/medical/corporate) differs from consumer direct form.",
    details: ["B2B: Facility name, segment, role, unit count, timeline, budget", "Consumer: Name, email, phone, use case, purchase timeline", "Conditional logic routes to correct form by referral source", "Partial completions trigger FinAI re-engagement sequence"],
  },
  {
    step: "05", icon: Database, title: "Salesforce Lead Created", system: "Salesforce", color: GOLD,
    description: "Zapier webhook fires on Typeform submission. Lead record created in Salesforce within 60 seconds with all fields, score, and routing logic applied.",
    details: ["Lead Source auto-populated from UTM source", "Lead Score calculated: segment (3pts) + budget (2pts) + timeline (2pts) + FinAI (3pts)", "Territory/segment routing assigns rep automatically", "Campaign Member created for attribution"],
  },
  {
    step: "06", icon: Bell, title: "Rep Notified", system: "Salesforce", color: GOLD,
    description: "Assigned rep receives immediate notification via email and a Salesforce task with full lead context, FinAI transcript, and SLA clock.",
    details: ["Email alert: lead name, company, segment, score, source", "SF Task: 'First Contact, SLA: 1 Business Hour'", "FinAI transcript attached to lead record", "Manager CC'd if lead score is 8 or above (high-priority flag)"],
  },
  {
    step: "07", icon: Phone, title: "Sales Team Reachout", system: "Salesforce", color: GREEN,
    description: "Rep initiates contact within 1 business hour. All activity logged in Salesforce. Three-touch minimum before any disqualification.",
    details: ["Touch 1: Phone call, outcome logged (connected, VM, no answer)", "Touch 2: Personalized email referencing FinAI conversation", "Touch 3: FinAI re-engagement if no reply after 48 hours", "Unresponsive leads enter Klaviyo 30-day nurture sequence"],
  },
];

const funnelMetrics = [
  { stage: "Website Visitors (all channels)", count: "48,000/yr", convRate: null, color: GOLD },
  { stage: "FinAI Engaged (chat interaction)", count: "9,600", convRate: "20% of visitors", color: PURPLE },
  { stage: "Typeform Submitted (form complete)", count: "1,200", convRate: "13% of engaged", color: TEAL },
  { stage: "Salesforce Lead Created", count: "1,200", convRate: "100% of submissions", color: GOLD },
  { stage: "MQL (Lead Score 6+)", count: "500", convRate: "42% of leads", color: ORANGE },
  { stage: "SQL (BANT confirmed, Opportunity)", count: "330", convRate: "66% of MQLs", color: TEAL },
  { stage: "Demo Completed", count: "200", convRate: "60% of SQLs", color: PURPLE },
  { stage: "Proposal Sent", count: "145", convRate: "72% of demos", color: GREEN },
  { stage: "Closed Won (Installed)", count: "1,000 target", convRate: "2.1% overall", color: GOLD },
];

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 4: CHANNEL EXECUTION
// ════════════════════════════════════════════════════════════════════════════════
interface ChannelData {
  id: string;
  title: string;
  icon: typeof Users;
  color: string;
  allocation: string;
  installTarget: string;
  owner: string;
  strategy: string;
  tactics: { name: string; detail: string }[];
  sequence: { timing: string; action: string }[];
  kpis: { metric: string; target: string }[];
}

const channels: ChannelData[] = [
  {
    id: "b2b-direct",
    title: "B2B Direct Sales",
    icon: Users,
    color: GOLD,
    allocation: "35%",
    installTarget: "350 units",
    owner: "Sales Reps by Territory",
    strategy: "Strategic account mapping with named targets in Salesforce. Reps own territories of 50+ named accounts with relationship scores, last-activity dates, and next-action tasks. Every outreach is tracked, every conversation logged, every deal progressed through defined stages.",
    tactics: [
      { name: "CMAA Chapter Sponsorships", detail: "Sponsor CMAA regional conferences (Philadelphia, Florida, Mile High chapters). Booth presence, private demos, badge scan to Salesforce Lead. Target GMs, fitness directors, and club presidents. Pursue CMAA preferred vendor status for directory access." },
      { name: "Troon and Club Corp Account Mapping", detail: "Named-account lists for Troon Golf and Club Corp managed properties. Each rep owns a territory. Platinum Clubs and Distinguished Clubs prioritized. Quarterly business reviews with key contacts." },
      { name: "Maritime: One Spa World and Delos", detail: "Leverage WEG's existing relationships. One Spa World operates across 144 vessels. Target in-room wellness and fitness center upgrades. Delos (Alfredo Carvajal) and KT Lim are named relationships in Salesforce." },
      { name: "Medical Channel", detail: "Target physical therapists, hospital wellness centers, and association partnerships (Crohn's, Alzheimer's). Dr. Mike Clark (NASM) is a named relationship for sports performance crossover into medical." },
      { name: "Fitness Director Outreach Sequences", detail: "5-touch sequence over 21 days: Day 1 LinkedIn + email, Day 3 phone call, Day 7 FinAI re-engage, Day 14 case study email, Day 21 final call or 30-day nurture." },
    ],
    sequence: [
      { timing: "Day 1", action: "LinkedIn connect + personalized email referencing club tier or segment" },
      { timing: "Day 3", action: "Phone call referencing FinAI conversation if applicable" },
      { timing: "Day 7", action: "FinAI re-engagement triggered if no reply" },
      { timing: "Day 14", action: "Case study email relevant to their LOB" },
      { timing: "Day 21", action: "Final call. If no response, enter Klaviyo 30-day nurture" },
    ],
    kpis: [
      { metric: "Named Accounts Mapped", target: "500 by Q1" },
      { metric: "Active Sequences per Rep", target: "8 concurrent" },
      { metric: "Demo Rate (qualified leads)", target: "15%" },
      { metric: "Win Rate", target: "25%" },
      { metric: "First Contact SLA Compliance", target: "90%+" },
    ],
  },
  {
    id: "partnerships",
    title: "Strategic Partnerships",
    icon: Handshake,
    color: TEAL,
    allocation: "20%",
    installTarget: "200 units",
    owner: "Business Development Lead",
    strategy: "Build formal partner agreements with management companies, associations, and trainer networks that can embed ZeroWheel into their standard recommendations. Every partner gets a unique promo code, Salesforce tracking, and monthly commission reporting.",
    tactics: [
      { name: "CMAA Preferred Vendor Status", detail: "Pursue CMAA preferred vendor or allied association status. Unlocks member directory access, newsletter placement, conference speaking slots, and co-branded content. Target: approved by Q2 2026." },
      { name: "Management Company Alliances", detail: "Partner with Troon Golf, Peacock and Lewis, Club Wellness Evolutions, The Salus Group, Kopplin Kuebler and Wallace, McMahon Group. These companies manage hundreds of facilities and can embed ZeroWheel into equipment specs." },
      { name: "Trainer Network Seeding", detail: "Seed ZeroWheels with 10 to 15 certified golf and pickleball trainers at private clubs. TPI (Titleist Performance Institute) and AMPD Golf Performance are named targets. Trainers integrate ZeroWheel into programs and refer facility purchases." },
      { name: "Cruise Line Supplier Agreements", detail: "Formal preferred supplier agreements with One Spa World, Sea Trade, and Delos. Revenue share or preferred pricing in exchange for multi-vessel commitments." },
      { name: "Affiliate Commission Program", detail: "$250/unit commission for partners who drive sales via unique promo codes. Tiered bonuses at 10, 25, and 50 unit milestones. Full Salesforce tracking via custom Commission object." },
    ],
    sequence: [
      { timing: "Week 1", action: "Outreach to target partner with intro email + one-pager" },
      { timing: "Week 2", action: "Discovery call to understand their client base and referral flow" },
      { timing: "Week 3", action: "Proposal: commission structure, co-marketing, SF tracking setup" },
      { timing: "Week 4", action: "Agreement signed. Promo code created. SF partner record created." },
      { timing: "Monthly", action: "Partner performance review: leads, conversions, commission" },
    ],
    kpis: [
      { metric: "Active Signed Partners", target: "20 by Q2" },
      { metric: "Partner-Sourced Pipeline", target: "20% of total" },
      { metric: "Affiliate Codes Active", target: "15 by Q2" },
      { metric: "Management Co. Agreements", target: "3 by Q3" },
      { metric: "Commission Paid (monthly)", target: "Tracked per partner" },
    ],
  },
  {
    id: "thought-leadership",
    title: "Thought Leadership",
    icon: GraduationCap,
    color: PURPLE,
    allocation: "15%",
    installTarget: "150 units",
    owner: "Content Lead + Sales Reps",
    strategy: "Position ZeroWheel as the authority in rotational core training for golf, pickleball, and longevity. Publish 2x per week. Co-create content with seeded trainers for credibility. Build a case study library that sales reps use as closing collateral.",
    tactics: [
      { name: "Golf and Pickleball Performance Series", detail: "ZeroWheel-specific training programs for golf rotation and pickleball core stability. 2x/week on YouTube, LinkedIn, and club newsletters. Target: fitness directors, club GMs, and wellness-conscious members aged 45 to 70." },
      { name: "Longevity and Core Strength Positioning", detail: "Research-backed content on rotational core training and longevity. Reference Blue Zone (Dan Buettner) connections. Position ZeroWheel as the performance tool for aging athletes and preventive wellness." },
      { name: "Case Study Library (5 by Q3)", detail: "Document early installations with measurable outcomes: member engagement, trainer adoption, revenue impact. Publish as sales collateral, LinkedIn articles, and email campaign content." },
      { name: "Conference Speaking Slots", detail: "Submit speaker proposals to CMAA regional conferences, PGA Merchandise Show, and NRPA Annual Conference. Speaking slots build brand authority and generate warm leads from attendees." },
      { name: "Trainer Seeding Program", detail: "Seed ZeroWheels with 15 key trainers. Structured feedback: monthly check-ins, testimonial collection, co-created content. These trainers become credibility anchors for B2B conversations." },
    ],
    sequence: [
      { timing: "Weekly", action: "Publish 2 pieces: 1 video + 1 article (LinkedIn or newsletter)" },
      { timing: "Bi-weekly", action: "Trainer co-created content published and tagged on social" },
      { timing: "Monthly", action: "Content performance review. Top pieces repurposed for email." },
      { timing: "Quarterly", action: "New case study published and distributed to sales team" },
      { timing: "Quarterly", action: "Conference speaking slot (CMAA, PGA, NRPA rotation)" },
    ],
    kpis: [
      { metric: "Content Pieces Published", target: "2/week (100+ EOY)" },
      { metric: "Trainer Advocates Active", target: "15 by Q2" },
      { metric: "Content-Sourced Leads", target: "15% of pipeline" },
      { metric: "Case Studies Published", target: "5 by Q3" },
      { metric: "Conference Slots Secured", target: "3 by Q2" },
    ],
  },
  {
    id: "digital",
    title: "Digital and Paid Campaigns",
    icon: Globe,
    color: ORANGE,
    allocation: "12%",
    installTarget: "120 units",
    owner: "Marketing Manager",
    strategy: "Test fast, learn, scale winners. Start with $1,500/month across 3 Meta persona campaigns. Each persona has unique creative, copy, and Typeform intake. Kill underperformers at week 3. Scale winners to $5K/month. Full UTM attribution to Salesforce.",
    tactics: [
      { name: "Meta Lead Forms: 3 Persona Campaigns", detail: "Campaign 1: Club GMs and fitness directors (B2B, job title targeting). Campaign 2: Golf/pickleball enthusiasts aged 45 to 65 (lookalike audiences). Campaign 3: Cruise/hospitality procurement (industry + seniority targeting)." },
      { name: "LOB-Specific Landing Pages", detail: "Separate pages for Private Clubs, Maritime, Sports Performance, Medical, Consumer. Each has unique UTM, Typeform embed, and FinAI widget. A/B test headlines at $500 to $1,000/month before scaling." },
      { name: "LinkedIn Sales Navigator", detail: "Targeted outreach to GMs, fitness directors, and wellness VPs at CMAA member clubs, Troon properties, and Club Corp facilities. 50 new connections/week per rep." },
      { name: "Google PMax (High-Intent Search)", detail: "Performance Max targeting 'club fitness equipment', 'rotational core training', 'wellness facility equipment'. Budget: $1,000/month test, scale if CPL under $50." },
      { name: "Retargeting Sequences", detail: "Pixel all landing pages. Non-converters see: Day 3 testimonial ad, Day 7 case study, Day 14 limited offer. Email retargeting via Klaviyo for Typeform partial completions." },
    ],
    sequence: [
      { timing: "Week 1-2", action: "Launch 3 Meta campaigns at $500/month each. Test creatives." },
      { timing: "Week 3", action: "Review CPL data. Kill underperformers. Double winners." },
      { timing: "Week 4", action: "Scale winning campaigns to $2,000/month." },
      { timing: "Day 3", action: "Retargeting: testimonial ad to non-converters (automated)" },
      { timing: "Day 7", action: "Retargeting: case study ad to non-converters (automated)" },
    ],
    kpis: [
      { metric: "Cost Per Lead (Digital)", target: "Under $50" },
      { metric: "Cost Per Install", target: "Under $200" },
      { metric: "Landing Page Conversion Rate", target: "Above 3%" },
      { metric: "LinkedIn Connections/Week", target: "50 per rep" },
      { metric: "Meta ROAS", target: "5x+ by Q3" },
    ],
  },
  {
    id: "influencer",
    title: "Influencer Network",
    icon: Star,
    color: PINK,
    allocation: "10%",
    installTarget: "100 units",
    owner: "Business Development Lead",
    strategy: "Not a social media campaign. A structured sales partnership with named anchor influencers, tiered commission bonuses, and full Salesforce tracking from promo code to install. Every influencer is a revenue partner, not a content creator.",
    tactics: [
      { name: "Delos (Alfredo Carvajal)", detail: "Named WEG relationship. Maritime wellness pioneer. Seed ZeroWheel for in-cabin wellness programs. Co-create content for cruise line audiences. Unique promo code. Target: 25 installs via Delos network." },
      { name: "Blue Zone (Dan Buettner)", detail: "Named WEG relationship. Massive reach in longevity and wellness. ZeroWheel's core-strength positioning aligns directly. Co-branded content + affiliate arrangement. Target: 20 installs." },
      { name: "Dr. Mike Clark / NASM Network", detail: "NASM founder and sports performance authority. Gateway to TPI-certified trainers and sports performance facilities. Seed ZeroWheel for NASM program integration. Target: 15 installs." },
      { name: "Top 2 to 3 Trainers per Macro LOB", detail: "Identify and seed key influencers per LOB: golf performance (TPI), pickleball coaches, sports performance (NASM), PT influencers. Each receives a unit, feedback program, and $250/unit commission." },
    ],
    sequence: [
      { timing: "Week 1", action: "Outreach to anchor influencers (Delos, Blue Zone, Dr. Mike Clark)" },
      { timing: "Week 2", action: "Ship ZeroWheel unit + onboarding kit + promo code" },
      { timing: "Week 3", action: "Co-create first content piece (video or article)" },
      { timing: "Monthly", action: "Commission report + performance review" },
      { timing: "Quarterly", action: "Tier review. Promote top performers. Add new influencers." },
    ],
    kpis: [
      { metric: "Active Influencer Partners", target: "15 by Q2" },
      { metric: "Influencer-Sourced Installs", target: "100 by EOY" },
      { metric: "Avg Units per Influencer", target: "7" },
      { metric: "Commission Paid YTD", target: "~$25K" },
      { metric: "Anchor Influencers Signed", target: "3 by Q1" },
    ],
  },
  {
    id: "events",
    title: "Events and Trade Shows",
    icon: Award,
    color: GREEN,
    allocation: "8%",
    installTarget: "80 units",
    owner: "Sales Reps + BD Lead",
    strategy: "Sponsor and exhibit at 6 key events in 2026. Every badge scan creates a Salesforce Lead within 24 hours. Post-event sequence starts immediately. Events are lead generation machines, not brand awareness exercises.",
    tactics: [
      { name: "CMAA Regional Conferences", detail: "Sponsor and exhibit at CMAA Philadelphia, Florida, and Mile High chapters. Booth with live ZeroWheel demo station. Private demos for GMs and fitness directors. Badge scan to Salesforce via Zapier." },
      { name: "PGA Merchandise Show", detail: "Exhibit in Orlando. Target golf performance trainers, club pros, and fitness directors. Co-exhibit with TPI or AMPD Golf Performance. Demo station + QR code to Typeform." },
      { name: "NRPA Annual Conference", detail: "Target Parks and Recreation directors and local government wellness managers. Tampa (Well Certified District) and City of Denver are named targets." },
      { name: "Sea Trade Cruise Global", detail: "Maritime LOB. Target cruise line procurement, spa operators, and wellness directors. One Spa World and Delos contacts pre-scheduled for meetings." },
      { name: "Post-Event Lead Sequence", detail: "Day 1: 'Great meeting you' email + one-pager. Day 3: Phone call. Day 7: FinAI re-engage. Day 14: LOB-specific case study. All tracked in Salesforce Campaign." },
    ],
    sequence: [
      { timing: "At Event", action: "Badge scan or QR code → Typeform → SF Lead (automated)" },
      { timing: "Day 1 (post)", action: "'Great meeting you' email with product one-pager" },
      { timing: "Day 3", action: "Phone call referencing event conversation" },
      { timing: "Day 7", action: "FinAI re-engagement if no reply" },
      { timing: "Day 14", action: "LOB-specific case study email" },
    ],
    kpis: [
      { metric: "Events Attended", target: "6 in 2026" },
      { metric: "Leads per Event", target: "50+ qualified" },
      { metric: "Event Lead to Opp Rate", target: "20%" },
      { metric: "Event-Sourced Installs", target: "80 by EOY" },
      { metric: "Post-Event Follow-Up SLA", target: "24 hours" },
    ],
  },
];

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 5: LOB PLAYBOOKS
// ════════════════════════════════════════════════════════════════════════════════
const lobPlaybooks = [
  {
    name: "Private Clubs", icon: Building2, color: GOLD, tier: "Tier 1", installs: 200,
    subLobs: ["Golf and Country Clubs", "City Clubs", "Yacht Clubs", "Athletic Clubs", "Stadium/Alumni Clubs"],
    namedTargets: ["CMAA Chapters (National, State, Local)", "Platinum Clubs of America", "Distinguished Clubs", "Troon Golf", "Club Corp", "Club Benchmarking", "McMahon Group", "Kopplin Kuebler and Wallace"],
    primaryChannel: "B2B Direct + CMAA Partnership",
    entryPoint: "Fitness Director or GM (typically CMAA member)",
    message: "ZeroWheel is the only rotational core training tool built for the aging athlete demographic that defines private club membership. Clubs that add ZeroWheel differentiate their fitness programming, increase member engagement, and reduce churn.",
  },
  {
    name: "Amenities (Maritime + Residential)", icon: Home, color: TEAL, tier: "Tier 1", installs: 150,
    subLobs: ["Multi-Family BTR", "Condominium BTO", "HOA", "Destination Resorts", "City Hotels", "Maritime (Cruise)", "Live/Work/Play"],
    namedTargets: ["One Spa World (144 vessels)", "Delos (Alfredo Carvajal)", "KT Lim", "Sea Trade", "National Apartment Association", "ISPA", "Z Capital"],
    primaryChannel: "B2B Direct (Maritime) + Digital (Residential)",
    entryPoint: "Wellness/Spa Director (Maritime) or Property Manager (Residential)",
    message: "Maritime: ZeroWheel is a compact, premium wellness amenity for in-cabin and fitness center formats across any vessel class. Residential: ZeroWheel differentiates amenity packages in BTR and condo developments targeting wellness-conscious residents.",
  },
  {
    name: "Sports Performance", icon: Trophy, color: PURPLE, tier: "Tier 1", installs: 120,
    subLobs: ["Sports Agencies (NFL/NBA/NHL)", "Sports Performance Facilities", "Golf Performance", "Pickleball Performance"],
    namedTargets: ["PGA TOUR", "PGA of America", "PGA Southwest Section", "NASM (Dr. Mike Clark)", "Titleist Performance Institute", "AMPD Golf Performance", "Exos-style facilities"],
    primaryChannel: "Thought Leadership + Partnerships (TPI, NASM)",
    entryPoint: "Head of Performance or Athletic Trainer",
    message: "ZeroWheel is the rotational core training tool that elite golf and pickleball athletes use to build the foundation for power and injury prevention. TPI-certified trainers and NASM professionals are the credibility gateway to facility adoption.",
  },
  {
    name: "Medical", icon: Stethoscope, color: RED, tier: "Tier 2", installs: 80,
    subLobs: ["Physical Therapists", "Hospital Wellness Centers", "Health Care Facilities"],
    namedTargets: ["Crohn's and Colitis Foundation", "Alzheimer's Association", "Hospital wellness networks", "PT clinic chains", "Executive Team medical referrals"],
    primaryChannel: "B2B Direct + Thought Leadership",
    entryPoint: "Physical Therapist or Wellness Director",
    message: "ZeroWheel's low-impact rotational core training is clinically relevant for post-surgical rehab, digestive health management, and cognitive health programs. The longevity positioning bridges fitness and medical wellness seamlessly.",
  },
  {
    name: "Public Authorities", icon: Landmark, color: ORANGE, tier: "Tier 2", installs: 60,
    subLobs: ["Parks and Recreation", "YMCA", "JCC", "Police and Fire Wellness"],
    namedTargets: ["NRPA Annual Conference", "Tampa (Well Certified District)", "City of Denver", "YMCA national + regional"],
    primaryChannel: "Events (NRPA) + B2B Direct",
    entryPoint: "Parks and Recreation Director or Wellness Program Manager",
    message: "ZeroWheel fits the public wellness mandate: accessible, durable, and effective for community fitness programs. GSA procurement pathway available for government facilities.",
  },
  {
    name: "Commercial Clubs", icon: Dumbbell, color: GOLD_DIM, tier: "Tier 2", installs: 50,
    subLobs: ["National Key Accounts", "Regional Key Accounts", "Boutique Studios", "Local Club Chains"],
    namedTargets: ["National account yearly meetings", "Industry trade shows", "Premium member journey programs"],
    primaryChannel: "B2B Direct + Trade Shows",
    entryPoint: "VP of Fitness or Regional Operations Director",
    message: "ZeroWheel redefines the premium member journey. For commercial clubs targeting the 45+ demographic, rotational core training drives member retention and premium tier upgrades.",
  },
  {
    name: "Corporate Wellness", icon: Briefcase, color: TEAL, tier: "Tier 3", installs: 40,
    subLobs: ["Mid/Large Corporation Wellness Programs", "Corporate Wellness Facilities"],
    namedTargets: ["Top recognized employers in corporate wellness", "Sports agencies as resellers", "Management companies as channel partners"],
    primaryChannel: "Partnerships + B2B Direct",
    entryPoint: "VP of HR or Corporate Wellness Director",
    message: "ZeroWheel is a premium wellness benefit that signals investment in employee longevity. The signature piece that differentiates a corporate wellness program.",
  },
  {
    name: "Consumer Direct", icon: UserCircle, color: PINK, tier: "Tier 3", installs: 30,
    subLobs: ["Individual Consumer", "Influencer Networks"],
    namedTargets: ["Delos (Alfredo Carvajal)", "Blue Zone (Dan Buettner)", "Top 2 to 3 influencers per LOB", "Golf/pickleball enthusiasts 45 to 70"],
    primaryChannel: "Influencer Network + Digital Paid",
    entryPoint: "Individual purchase via website or influencer promo code",
    message: "For the serious golfer, pickleball player, or longevity-focused individual, ZeroWheel is the at-home training tool that elite athletes use. Influencer credibility + Meta targeting drives direct consumer acquisition at $1,000/unit.",
  },
];

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 6: EMAIL NURTURE (KLAVIYO)
// ════════════════════════════════════════════════════════════════════════════════
const klaviyoFlows = [
  {
    name: "New Lead Welcome (B2B)",
    trigger: "Salesforce Lead created with segment = B2B",
    color: GOLD,
    emails: [
      { day: "Day 0", subject: "Welcome to ZeroWheel. Here's what to expect.", content: "Intro to ZeroWheel, link to product video, what happens next in the sales process." },
      { day: "Day 2", subject: "How [Club Name] increased member engagement by 40%", content: "Case study relevant to their LOB segment. Social proof from similar facility." },
      { day: "Day 5", subject: "Your ZeroWheel ROI calculator", content: "Interactive ROI tool link. Show revenue impact at their facility size." },
      { day: "Day 8", subject: "Questions? Your dedicated rep is ready.", content: "Rep intro with photo, direct calendar link, and phone number." },
    ],
  },
  {
    name: "30-Day Nurture (Unresponsive Leads)",
    trigger: "Lead has no activity for 30 days in Salesforce",
    color: TEAL,
    emails: [
      { day: "Day 1", subject: "Still thinking about ZeroWheel?", content: "Soft re-engagement. New content piece or case study. No hard sell." },
      { day: "Day 7", subject: "What trainers are saying about rotational core training", content: "Trainer testimonial video. Social proof from TPI or AMPD Golf." },
      { day: "Day 14", subject: "ZeroWheel at [CMAA/PGA Show]: See what you missed", content: "Event recap with photos, demo video, and attendee quotes." },
      { day: "Day 21", subject: "Limited: Private demo for [Company Name]", content: "Personalized demo offer. Calendar link. Urgency without pressure." },
      { day: "Day 30", subject: "We'll check back in 60 days", content: "Graceful exit. Let them know you'll follow up later. Keep door open." },
    ],
  },
  {
    name: "Post-Demo Follow-Up",
    trigger: "Salesforce Opportunity stage = Demo Completed",
    color: PURPLE,
    emails: [
      { day: "Day 0", subject: "Great demo today. Here's your summary.", content: "Demo recap, key points discussed, ROI numbers reviewed, next steps." },
      { day: "Day 3", subject: "Your custom proposal is ready", content: "Proposal PDF attached. Pricing, timeline, and installation details." },
      { day: "Day 7", subject: "Questions about the proposal?", content: "Address common objections. Link to FAQ. Rep availability." },
    ],
  },
  {
    name: "Event Follow-Up Sequence",
    trigger: "Lead Source = Event (badge scan or QR code)",
    color: GREEN,
    emails: [
      { day: "Day 0", subject: "Great meeting you at [Event Name]!", content: "Personal note referencing the event. Product one-pager attached." },
      { day: "Day 3", subject: "The ZeroWheel demo you asked about", content: "Video demo link. Calendar link for private session." },
      { day: "Day 7", subject: "Case study: [Relevant LOB] facility results", content: "LOB-specific case study with measurable outcomes." },
    ],
  },
  {
    name: "Influencer Onboarding",
    trigger: "Partner Agreement signed (manual trigger)",
    color: PINK,
    emails: [
      { day: "Day 0", subject: "Welcome to the ZeroWheel Partner Program", content: "Program overview, commission structure, promo code details, content guidelines." },
      { day: "Day 3", subject: "Your ZeroWheel unit is shipping", content: "Tracking info. Onboarding video. Suggested first content piece." },
      { day: "Day 14", subject: "How's your first 2 weeks with ZeroWheel?", content: "Feedback request. Testimonial template. Content co-creation scheduling." },
    ],
  },
  {
    name: "Consumer Direct (DTC)",
    trigger: "Typeform submission with segment = Consumer",
    color: ORANGE,
    emails: [
      { day: "Day 0", subject: "ZeroWheel: Built for athletes who refuse to slow down", content: "Product story, athlete testimonials, training program preview." },
      { day: "Day 2", subject: "See ZeroWheel in action (2-min video)", content: "Product demo video. Training program highlights." },
      { day: "Day 5", subject: "What golfers and pickleball players are saying", content: "User testimonials from golf and pickleball athletes." },
      { day: "Day 8", subject: "Your ZeroWheel is waiting", content: "Direct purchase link. Promo code if applicable. Free shipping offer." },
    ],
  },
  {
    name: "Monthly Newsletter (All Contacts)",
    trigger: "1st of every month (scheduled blast)",
    color: GOLD_DIM,
    emails: [
      { day: "Monthly", subject: "ZeroWheel Insider: [Month] Edition", content: "New case study, upcoming events, trainer spotlight, product updates, thought leadership article." },
    ],
  },
];

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 8: QUARTERLY TIMELINE
// ════════════════════════════════════════════════════════════════════════════════
const quarterlyTimeline = [
  {
    quarter: "Q1 2026",
    color: GOLD,
    theme: "Foundation and Launch",
    milestones: [
      "Salesforce configured: all custom objects, fields, routing rules, and automations live",
      "Typeform forms built: B2B and Consumer variants with conditional logic",
      "Intercom FinAI trained on ZeroWheel knowledge base and deployed on website",
      "Klaviyo connected to Salesforce. Welcome and nurture flows live.",
      "500 named accounts loaded into Salesforce with LOB, tier, and territory owner",
      "3 anchor influencers signed (Delos, Blue Zone, Dr. Mike Clark)",
      "First 2 Meta campaigns launched at $500/month each",
      "Content publishing cadence established: 2x/week",
    ],
  },
  {
    quarter: "Q2 2026",
    color: TEAL,
    theme: "Scale and Optimize",
    milestones: [
      "CMAA preferred vendor status approved (directory + newsletter access)",
      "15 influencer partners active with promo codes and Salesforce tracking",
      "3 CMAA regional conferences attended (Philadelphia, Florida, Mile High)",
      "PGA Merchandise Show exhibit completed. 50+ leads generated.",
      "5 case studies published and distributed to sales team",
      "Meta campaigns scaled: top performers at $2,000 to $5,000/month",
      "20 signed partners (management companies, associations, trainers)",
      "3 conference speaking slots secured",
    ],
  },
  {
    quarter: "Q3 2026",
    color: PURPLE,
    theme: "Accelerate and Expand",
    milestones: [
      "3 management company alliances signed (Troon, Peacock and Lewis, Club Wellness Evolutions)",
      "Maritime pilot: One Spa World multi-vessel agreement in negotiation",
      "NRPA Annual Conference attended. Public authority pipeline built.",
      "Sea Trade Cruise Global attended. Maritime pipeline expanded.",
      "Klaviyo flows optimized: A/B tested subject lines, send times, content",
      "LinkedIn Sales Navigator outreach scaled: 50 connections/week per rep",
      "Retargeting sequences refined based on Q2 conversion data",
      "Monthly revenue run rate on track for $1M annual target",
    ],
  },
  {
    quarter: "Q4 2026",
    color: GREEN,
    theme: "Close and Plan 2027",
    milestones: [
      "1,000 install target achieved (or clear path to close gap in Q1 2027)",
      "Full year channel ROI analysis: cost per install by channel",
      "Partner program review: tier promotions, new partner recruitment for 2027",
      "Influencer program review: top performers renewed, underperformers exited",
      "2027 budget and target planning based on 2026 learnings",
      "Salesforce data hygiene audit: clean up stale leads, update account tiers",
      "Content library audit: top performing pieces identified for 2027 repurposing",
      "Team performance reviews: rep KPI attainment, territory adjustments",
    ],
  },
];

// ════════════════════════════════════════════════════════════════════════════════
// SECTION 9: ACCOUNTABILITY
// ════════════════════════════════════════════════════════════════════════════════
const weeklyRhythm = [
  { day: "Monday", time: "9:00 AM", title: "Pipeline Review", attendees: "All Reps + Manager", agenda: "Review opportunities in Proposal + Negotiation stages. Identify deals at risk. Assign weekly action items. Check SLA compliance from prior week.", color: GOLD },
  { day: "Wednesday", time: "9:00 AM", title: "Channel Performance", attendees: "Marketing + BD Lead", agenda: "Review Meta/LinkedIn CPL, content engagement, partner referral volume. Kill underperforming campaigns. Scale winners. Review Klaviyo open/click rates.", color: TEAL },
  { day: "Friday", time: "2:00 PM", title: "Wins and Losses Debrief", attendees: "All Reps + Manager", agenda: "Review all Closed Won and Closed Lost from the week. Win reasons, loss reasons, competitive intel. Lessons applied to next week.", color: PURPLE },
];

const repKPIs = [
  { kpi: "Monthly Installs", target: "Per quota (territory-based)", method: "SF Opportunity: Closed Won count" },
  { kpi: "Pipeline Coverage", target: "3x monthly quota minimum", method: "SF Pipeline Report: open opportunity value" },
  { kpi: "First Contact SLA", target: "90%+ within 1 business hour", method: "SF Task completion time vs. lead creation time" },
  { kpi: "Demo Rate", target: "15%+ of qualified leads", method: "SF: leads reaching Demo stage / total MQLs" },
  { kpi: "Win Rate", target: "25%+ of opportunities", method: "SF: Closed Won / Total Closed" },
  { kpi: "Activity Volume", target: "50 calls + 100 emails/week", method: "SF Activity Report (logged calls + emails)" },
  { kpi: "Sequence Compliance", target: "3-touch minimum before disqualify", method: "SF: leads with fewer than 3 activities flagged" },
  { kpi: "Lead Recycling", target: "Zero leads inactive over 30 days", method: "SF: leads with no activity in 30 days (auto-nurture)" },
];

const processRules = [
  { rule: "1-Hour First Contact SLA", detail: "All new leads must receive first contact within 1 business hour. Overdue leads escalate to manager at 2 hours. SLA breach flagged in dashboard." },
  { rule: "3-Touch Minimum Before Disqualify", detail: "Leads must receive at least 3 documented contact attempts (call + email + FinAI re-engage) before being marked unresponsive." },
  { rule: "30-Day Nurture Recycling", detail: "Leads with no activity for 30 days automatically enter Klaviyo nurture sequence. Status updated to 'Nurture' in Salesforce." },
  { rule: "Disqualification Requires Reason", detail: "Reps must select a disqualification reason before closing a lead. No blank closes. Options: no budget, wrong segment, competitor, timing." },
  { rule: "High-Score Leads (8+) Get Manager CC", detail: "Any lead scoring 8 or above triggers manager CC on notification email and 'High Priority' flag in Salesforce." },
  { rule: "Closed Lost Requires Loss Reason", detail: "Every lost opportunity must have a loss reason selected. Data feeds monthly win/loss analysis and competitive intelligence." },
];

// ════════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════════════════════════════════════════════════════════
export default function ZWMarketingInfrastructure() {
  const [activeChannel, setActiveChannel] = useState<string | null>(null);
  const [activeLob, setActiveLob] = useState<number | null>(null);
  const [activeFlow, setActiveFlow] = useState<number | null>(null);

  const selectedChannel = channels.find(c => c.id === activeChannel) ?? null;

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* ═══ HERO ═══ */}
      <div id="hero">
        <DarkHero
          eyebrow="ZEROWHEEL GTM MARKETING PLAN"
          title="Dominate Through Precision"
          description="A calculated, measured go-to-market engine built for a $1,000 product at startup scale. Six acquisition channels feeding into one unified CRM. Eight LOB playbooks with named targets. Full email nurture architecture. Every lead tracked, every dollar attributed, every rep accountable."
          stats={[
            { value: "1,000", label: "Unit Target (2026)" },
            { value: "$1M", label: "Revenue Target" },
            { value: "6", label: "Channels" },
            { value: "8", label: "LOB Playbooks" },
          ]}
        />
      </div>

      {/* ═══ SYSTEMS ARCHITECTURE ═══ */}
      <section id="systems" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Systems Architecture"
            title="Six Platforms. One Unified Machine."
            description="Every system has a defined role. No overlap, no redundancy. Salesforce is the source of truth. Intercom qualifies. Typeform captures. Klaviyo nurtures. Zapier connects. Meta and LinkedIn acquire. Data flows in one direction: into Salesforce for attribution and reporting."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
            {systemsStack.map((sys, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6"
                style={{ background: CARD_BG, borderColor: `${sys.color}20` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${sys.color}15` }}>
                    <sys.icon className="w-5 h-5" style={{ color: sys.color }} />
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${sys.color}15`, color: sys.color }}>{sys.role}</span>
                </div>
                <p className="font-display text-base font-semibold text-white mb-2">{sys.name}</p>
                <p className="font-body text-[11px] text-white/35 leading-relaxed mb-4">{sys.description}</p>
                <div className="space-y-1.5">
                  {sys.responsibilities.slice(0, 5).map((r, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: sys.color }} />
                      <span className="font-body text-[10px] text-white/30">{r}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection map */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>System Integration Map</p>
            <div className="grid md:grid-cols-3 gap-3">
              {systemConnections.map((conn, i) => (
                <div key={i} className="flex items-center gap-2 py-2 px-3 rounded-xl" style={{ background: `${conn.color}06`, border: `1px solid ${conn.color}15` }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: conn.color }} />
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[9px] text-white/50 truncate">{conn.from} → {conn.to}</p>
                    <p className="font-body text-[9px] text-white/25">{conn.method}</p>
                  </div>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ═══ LEAD FUNNEL ═══ */}
      <section id="lead-funnel" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Lead Funnel"
            title="7 Steps. Every Lead. Every Time."
            description="Regardless of channel, every lead flows through this exact sequence. No lead enters the pipeline without UTM attribution, FinAI qualification, and a Salesforce record. No rep touches a lead without a task, a score, and a transcript."
          />

          {/* 7-step flow */}
          <div className="space-y-4 mb-12">
            {funnelSteps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="grid md:grid-cols-[auto_1fr_2fr] gap-4 items-start rounded-2xl border p-5"
                style={{ background: CARD_BG, borderColor: `${step.color}15` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${step.color}15` }}>
                    <step.icon className="w-4 h-4" style={{ color: step.color }} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-bold" style={{ color: `${step.color}60` }}>STEP {step.step}</p>
                    <p className="font-display text-sm font-semibold text-white">{step.title}</p>
                    <span className="font-mono text-[8px] px-1.5 py-0.5 rounded" style={{ background: `${step.color}15`, color: `${step.color}80` }}>{step.system}</span>
                  </div>
                </div>
                <p className="font-body text-[11px] text-white/40 leading-relaxed">{step.description}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {step.details.map((d, j) => (
                    <div key={j} className="flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: step.color }} />
                      <span className="font-body text-[10px] text-white/25">{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Funnel metrics */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-6" style={{ color: GOLD }}>Funnel Stage Targets (2026 Annual)</p>
            <div className="space-y-3">
              {funnelMetrics.map((m, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                      <span className="font-body text-sm text-white/60">{m.stage}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-white">{m.count}</span>
                      {m.convRate && <span className="font-mono text-[10px]" style={{ color: m.color }}>{m.convRate}</span>}
                    </div>
                  </div>
                  <ProgressBar value={parseInt(m.count.replace(/[^0-9]/g, "")) || 1000} max={48000} color={m.color} />
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ═══ CHANNELS ═══ */}
      <section id="channels" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Channel Execution"
            title="Six Channels. Six Playbooks. One Goal."
            description="Each channel has a defined owner, allocation percentage, install target, specific tactics with named accounts, outreach sequences, and measurable KPIs. Click any channel to see the full execution playbook."
          />

          {/* Channel selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {channels.map((ch) => (
              <motion.button
                key={ch.id}
                onClick={() => setActiveChannel(activeChannel === ch.id ? null : ch.id)}
                whileHover={{ y: -2 }}
                className={`p-4 rounded-2xl border text-left transition-all ${activeChannel === ch.id ? "" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"}`}
                style={activeChannel === ch.id ? { borderColor: ch.color, background: `${ch.color}10` } : {}}
              >
                <ch.icon className="w-5 h-5 mb-2" style={{ color: ch.color }} />
                <p className="font-body text-xs font-semibold text-white/80 leading-tight">{ch.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-mono text-[10px] font-bold" style={{ color: ch.color }}>{ch.allocation}</span>
                  <span className="font-mono text-[9px] text-white/20">{ch.installTarget}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active channel playbook */}
          <AnimatePresence>
            {selectedChannel && (
              <motion.div
                key={selectedChannel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl border p-8"
                style={{ background: CARD_BG, borderColor: `${selectedChannel.color}25` }}
              >
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <selectedChannel.icon className="w-6 h-6" style={{ color: selectedChannel.color }} />
                      <h3 className="font-display text-xl font-semibold text-white">{selectedChannel.title}</h3>
                    </div>
                    <p className="font-mono text-[10px]" style={{ color: selectedChannel.color }}>{selectedChannel.allocation} allocation · {selectedChannel.installTarget} · Owner: {selectedChannel.owner}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-white/40 leading-relaxed mb-6 max-w-3xl">{selectedChannel.strategy}</p>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Tactics */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/30">Tactics and Execution</p>
                    <div className="space-y-3">
                      {selectedChannel.tactics.map((t, i) => (
                        <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${selectedChannel.color}12`, background: `${selectedChannel.color}04` }}>
                          <p className="font-mono text-[10px] font-semibold mb-1.5" style={{ color: selectedChannel.color }}>{t.name}</p>
                          <p className="font-body text-[11px] text-white/35 leading-relaxed">{t.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Sequence */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/30">Outreach Sequence</p>
                      <div className="space-y-2">
                        {selectedChannel.sequence.map((s, i) => (
                          <div key={i} className="flex items-start gap-3 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                            <span className="font-mono text-[9px] px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style={{ background: `${selectedChannel.color}15`, color: selectedChannel.color }}>{s.timing}</span>
                            <p className="font-body text-xs text-white/45">{s.action}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* KPIs */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/30">KPIs and Targets</p>
                      <div className="space-y-2">
                        {selectedChannel.kpis.map((k, i) => (
                          <div key={i} className="flex items-center justify-between py-1.5 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                            <span className="font-body text-xs text-white/40">{k.metric}</span>
                            <span className="font-mono text-xs font-semibold" style={{ color: selectedChannel.color }}>{k.target}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!selectedChannel && (
            <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
              <p className="font-body text-sm text-white/20">Select a channel above to view the full playbook</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══ LOB PLAYBOOKS ═══ */}
      <section id="lob-playbooks" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="LOB Playbooks"
            title="8 Lines of Business. Named Targets. Defined Entry Points."
            description="Each LOB has a priority tier, named target accounts, primary acquisition channel, entry point persona, and messaging framework. These are operational playbooks, not generic segments."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {lobPlaybooks.map((lob, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveLob(activeLob === i ? null : i)}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className={`p-5 rounded-2xl border text-left transition-all ${activeLob === i ? "" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"}`}
                style={activeLob === i ? { borderColor: lob.color, background: `${lob.color}08` } : {}}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${lob.color}15` }}>
                    <lob.icon className="w-4 h-4" style={{ color: lob.color }} />
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${lob.color}15`, color: lob.color }}>{lob.tier}</span>
                </div>
                <p className="font-display text-sm font-semibold text-white mb-1">{lob.name}</p>
                <p className="font-mono text-[10px]" style={{ color: lob.color }}>{lob.installs} installs</p>
                <p className="font-body text-[10px] text-white/25 mt-2 line-clamp-1">{lob.primaryChannel}</p>
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
                className="rounded-2xl border p-8"
                style={{ background: CARD_BG, borderColor: `${lobPlaybooks[activeLob].color}25` }}
              >
                {(() => {
                  const lob = lobPlaybooks[activeLob];
                  return (
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <lob.icon className="w-6 h-6" style={{ color: lob.color }} />
                          <div>
                            <p className="font-display text-lg font-semibold text-white">{lob.name}</p>
                            <p className="font-mono text-[10px]" style={{ color: lob.color }}>{lob.installs} installs · {lob.tier}</p>
                          </div>
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 text-white/30">Sub-LOBs</p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {lob.subLobs.map((s, i) => (
                            <span key={i} className="font-body text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: `${lob.color}25`, color: `${lob.color}70` }}>{s}</span>
                          ))}
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 text-white/30">Primary Channel</p>
                        <p className="font-body text-xs text-white/50 mb-3">{lob.primaryChannel}</p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 text-white/30">Entry Point</p>
                        <p className="font-body text-xs text-white/50">{lob.entryPoint}</p>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-white/30">Named Targets</p>
                        <div className="space-y-1.5">
                          {lob.namedTargets.map((t, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: lob.color }} />
                              <span className="font-body text-xs text-white/50">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-3 text-white/30">Messaging Framework</p>
                        <div className="rounded-xl border p-4" style={{ borderColor: `${lob.color}15`, background: `${lob.color}04` }}>
                          <p className="font-body text-xs text-white/45 leading-relaxed">{lob.message}</p>
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

      {/* ═══ EMAIL NURTURE (KLAVIYO) ═══ */}
      <section id="email-nurture" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Email Nurture Architecture (Klaviyo)"
            title="Automated Sequences for Every Stage of the Funnel"
            description="Klaviyo syncs with Salesforce to pull Lead and Contact data into segmented profiles. Seven automated flows handle every lifecycle stage from new lead welcome to post-install onboarding. Chosen over Pardot for cost efficiency ($150/mo vs. $1,250/mo) and hybrid B2B/DTC capability."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            {klaviyoFlows.map((flow, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveFlow(activeFlow === i ? null : i)}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className={`p-5 rounded-2xl border text-left transition-all ${activeFlow === i ? "" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"}`}
                style={activeFlow === i ? { borderColor: flow.color, background: `${flow.color}08` } : {}}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Send className="w-4 h-4" style={{ color: flow.color }} />
                  <p className="font-display text-sm font-semibold text-white">{flow.name}</p>
                </div>
                <p className="font-body text-[10px] text-white/30 mb-2">{flow.trigger}</p>
                <p className="font-mono text-[9px]" style={{ color: flow.color }}>{flow.emails.length} email{flow.emails.length > 1 ? "s" : ""} in sequence</p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {activeFlow !== null && (
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl border p-8"
                style={{ background: CARD_BG, borderColor: `${klaviyoFlows[activeFlow].color}25` }}
              >
                {(() => {
                  const flow = klaviyoFlows[activeFlow];
                  return (
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5" style={{ color: flow.color }} />
                        <h3 className="font-display text-lg font-semibold text-white">{flow.name}</h3>
                      </div>
                      <p className="font-mono text-[10px] text-white/30 mb-6">Trigger: {flow.trigger}</p>
                      <div className="space-y-3">
                        {flow.emails.map((email, i) => (
                          <div key={i} className="grid md:grid-cols-[80px_1fr_2fr] gap-4 items-start py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                            <span className="font-mono text-[10px] px-2 py-1 rounded-full text-center" style={{ background: `${flow.color}15`, color: flow.color }}>{email.day}</span>
                            <p className="font-body text-sm text-white/70 font-medium">{email.subject}</p>
                            <p className="font-body text-[11px] text-white/35 leading-relaxed">{email.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

          {activeFlow === null && (
            <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
              <p className="font-body text-sm text-white/20">Select a flow above to see the full email sequence</p>
            </div>
          )}

          {/* Klaviyo vs Pardot justification */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: PINK }}>Why Klaviyo (Not Pardot)</p>
              <div className="space-y-3">
                {[
                  { point: "Cost", detail: "$150/month for 10K subscribers vs. Pardot's $1,250/month minimum. At startup scale, this matters." },
                  { point: "Hybrid B2B + DTC", detail: "Klaviyo handles both B2B drip sequences and consumer DTC flows in one platform. Pardot is B2B-only." },
                  { point: "Salesforce Native Sync", detail: "Klaviyo has a native Salesforce CRM integration. Leads and Contacts sync into Klaviyo profiles for segmented nurture." },
                  { point: "Speed to Deploy", detail: "Klaviyo flows can be built and live in days. Pardot requires Salesforce enterprise licensing and longer setup." },
                  { point: "Scalability", detail: "When ZeroWheel scales past 50K contacts, evaluate upgrading to Pardot or Marketing Cloud for advanced scoring and ABM." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-3" style={{ borderColor: `${PINK}12`, background: `${PINK}04` }}>
                    <p className="font-mono text-[10px] font-semibold mb-1" style={{ color: PINK }}>{item.point}</p>
                    <p className="font-body text-[10px] text-white/30 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: TEAL }}>Klaviyo + Salesforce Integration</p>
              <div className="space-y-3">
                {[
                  { point: "Sync Direction", detail: "Salesforce → Klaviyo (one-way). New Leads and Contacts auto-sync into Klaviyo profiles with all custom fields." },
                  { point: "List Assignment", detail: "Salesforce segment field maps to Klaviyo lists: Club, Maritime, Medical, Sports Performance, Consumer, Partner." },
                  { point: "Flow Triggers", detail: "Klaviyo flows trigger based on Salesforce field changes: Lead Status = 'Nurture', Opportunity Stage = 'Demo Completed', etc." },
                  { point: "Suppression", detail: "Closed Won contacts auto-suppressed from sales sequences. Moved to 'Customer' list for onboarding and retention." },
                  { point: "Reporting", detail: "Klaviyo email engagement (opens, clicks) synced back to Salesforce Contact record for rep visibility." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-3" style={{ borderColor: `${TEAL}12`, background: `${TEAL}04` }}>
                    <p className="font-mono text-[10px] font-semibold mb-1" style={{ color: TEAL }}>{item.point}</p>
                    <p className="font-body text-[10px] text-white/30 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ═══ INFLUENCER PROGRAM ═══ */}
      <section id="influencer" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Influencer and Affiliate Program"
            title="$250/Unit Commission. Named Partners. Full Tracking."
            description="A structured sales partnership program. Not social media posts. Every influencer has a unique promo code, a Salesforce record, monthly commission reporting, and tiered bonuses that reward volume."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Delos (Alfredo Carvajal)", category: "Maritime Wellness", color: TEAL, tier: "Anchor", target: "25 installs", detail: "Named WEG relationship. Maritime wellness pioneer with reach across cruise line wellness programs. Co-create in-cabin wellness content. Unique promo code tracked in Salesforce." },
              { name: "Blue Zone (Dan Buettner)", category: "Longevity", color: PURPLE, tier: "Anchor", target: "20 installs", detail: "Named WEG relationship. Blue Zone brand has massive reach in longevity. ZeroWheel's core-strength positioning aligns directly. Co-branded content + affiliate arrangement." },
              { name: "Dr. Mike Clark / NASM", category: "Sports Performance", color: GOLD, tier: "Anchor", target: "15 installs", detail: "NASM founder. Gateway to TPI-certified trainers and sports performance facilities. Seed ZeroWheel for NASM program integration." },
            ].map((inf, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6"
                style={{ background: CARD_BG, borderColor: `${inf.color}20` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">{inf.name}</p>
                    <p className="font-mono text-[10px] mt-0.5" style={{ color: inf.color }}>{inf.category}</p>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${inf.color}15`, color: inf.color }}>{inf.tier}</span>
                </div>
                <p className="font-body text-[11px] text-white/35 leading-relaxed mb-4">{inf.detail}</p>
                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="font-mono text-[10px] text-white/30">2026 Target</span>
                  <span className="font-mono text-sm font-bold" style={{ color: inf.color }}>{inf.target}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>Commission Structure</p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { tier: "Base", amount: "$250/unit", condition: "Every install via promo code", color: GOLD },
                { tier: "10-Unit Bonus", amount: "+$500", condition: "Cumulative at 10 installs", color: TEAL },
                { tier: "25-Unit Bonus", amount: "+$1,500", condition: "Cumulative at 25 installs", color: PURPLE },
                { tier: "50-Unit Bonus", amount: "+$3,500", condition: "Cumulative at 50 installs", color: GREEN },
              ].map((t, i) => (
                <div key={i} className="rounded-xl border p-4 text-center" style={{ borderColor: `${t.color}20`, background: `${t.color}06` }}>
                  <p className="font-mono text-[9px] uppercase tracking-wider mb-2" style={{ color: t.color }}>{t.tier}</p>
                  <p className="font-display text-2xl font-bold mb-1" style={{ color: t.color }}>{t.amount}</p>
                  <p className="font-body text-[10px] text-white/30">{t.condition}</p>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ═══ QUARTERLY TIMELINE ═══ */}
      <section id="timeline" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Quarterly Execution Timeline"
            title="4 Quarters. Clear Milestones. Measurable Progress."
            description="The 2026 execution plan broken into quarterly themes with specific, verifiable milestones. Each quarter builds on the last. By Q4, the machine is running at full capacity."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {quarterlyTimeline.map((q, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6"
                style={{ background: CARD_BG, borderColor: `${q.color}20` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${q.color}15` }}>
                    <Calendar className="w-5 h-5" style={{ color: q.color }} />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-white">{q.quarter}</p>
                    <p className="font-mono text-[10px]" style={{ color: q.color }}>{q.theme}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {q.milestones.map((m, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: `${q.color}60` }} />
                      <span className="font-body text-xs text-white/45 leading-relaxed">{m}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACCOUNTABILITY ═══ */}
      <section id="accountability" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Accountability Framework"
            title="Weekly Cadence. Rep KPIs. Process Rules."
            description="Accountability is not a quarterly check-in. It is a weekly rhythm of pipeline reviews, channel checks, and win/loss debriefs. All anchored to Salesforce data, not self-reported numbers. Every rep knows their KPIs and every process rule is enforced."
          />

          {/* Weekly rhythm */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {weeklyRhythm.map((mtg, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6"
                style={{ background: CARD_BG, borderColor: `${mtg.color}20` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${mtg.color}15`, color: mtg.color }}>{mtg.day} · {mtg.time}</span>
                </div>
                <p className="font-display text-sm font-semibold text-white mb-1">{mtg.title}</p>
                <p className="font-mono text-[10px] text-white/30 mb-3">{mtg.attendees}</p>
                <p className="font-body text-[11px] text-white/35 leading-relaxed">{mtg.agenda}</p>
              </motion.div>
            ))}
          </div>

          {/* Rep KPIs */}
          <DarkCard className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-6" style={{ color: GOLD }}>Rep-Level KPIs (Tracked Weekly in Salesforce)</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3 pr-6">KPI</th>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3 pr-6">Target</th>
                    <th className="text-left font-mono text-[10px] uppercase tracking-wider text-white/30 pb-3">Salesforce Tracking</th>
                  </tr>
                </thead>
                <tbody>
                  {repKPIs.map((kpi, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                      <td className="py-3 pr-6"><span className="font-body text-sm text-white/60">{kpi.kpi}</span></td>
                      <td className="py-3 pr-6"><span className="font-mono text-xs font-semibold" style={{ color: GOLD }}>{kpi.target}</span></td>
                      <td className="py-3"><span className="font-body text-xs text-white/35">{kpi.method}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DarkCard>

          {/* Process Rules */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-6" style={{ color: TEAL }}>Non-Negotiable Process Rules</p>
            <div className="grid md:grid-cols-2 gap-4">
              {processRules.map((rule, i) => (
                <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${TEAL}12`, background: `${TEAL}04` }}>
                  <p className="font-mono text-[10px] font-semibold mb-1.5" style={{ color: TEAL }}>{rule.rule}</p>
                  <p className="font-body text-[11px] text-white/35 leading-relaxed">{rule.detail}</p>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>
    </Layout>
  );
}
