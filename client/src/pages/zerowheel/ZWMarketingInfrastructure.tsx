/*
 * ZeroWheel Marketing Plan — WEG Consulting Proposal
 * Design: Boss's exact light mode system
 *   - bg-white / bg-[#FAFAF8] alternating sections
 *   - text-black primary, text-black/55 body, text-black/40 muted
 *   - #C9A962 gold for all accents, eyebrows, icons
 *   - border-[#C9A962]/35 cards, rounded-2xl
 *   - font-mono labels, font-display headings, font-body body
 *   - LightHero + SectionNav + fadeInUp/staggerContainer/scaleIn
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target, Users, Mail, Megaphone, Star, Ship, Building2,
  Dumbbell, Stethoscope, Shield, Store, ChevronDown,
  CheckCircle2, ArrowRight, Database, Zap, Award,
  MessageSquare
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const GOLD = "#C9A962";

const sections = [
  { id: "hero",           label: "Overview"       },
  { id: "systems",        label: "Tech Stack"     },
  { id: "funnel",         label: "Lead Funnel"    },
  { id: "channels",       label: "Channels"       },
  { id: "email",          label: "Email Nurture"  },
  { id: "influencer",     label: "Affiliate"      },
  { id: "lob-strategy",   label: "LOB Strategies" },
  { id: "accountability", label: "Accountability" },
];

// ── Shared helpers ─────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
      <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">{eyebrow}</motion.span>
      <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">{title}</motion.h2>
      {body && <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">{body}</motion.p>}
    </motion.div>
  );
}

function Divider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />;
}

function AccordionCard({ title, subtitle, icon: Icon, color, children }: {
  title: string; subtitle: string; icon: React.ElementType; color: string; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeInUp} className="bg-white border border-[#C9A962]/35 rounded-2xl overflow-hidden hover:border-[#C9A962]/60 hover:shadow-lg transition-all duration-300">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <div>
            <p className="font-display text-base font-semibold text-black">{title}</p>
            <p className="font-body text-xs text-black/45 mt-0.5">{subtitle}</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-black/30 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <div className="px-6 pb-6 border-t border-[#C9A962]/20">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────
const techStack = [
  { name: "Salesforce CRM", role: "Pipeline & Relationship Hub", cost: "$500/mo", costNote: "5 seats", detail: "Custom ZeroWheel objects: Lead, Account, Opportunity, Campaign, Partner Commission. LOB picklists, UTM capture fields, SLA timers, and automated stage-progression rules. Every lead, contact, and deal tracked with owner assignment and activity logging.", icon: Database, color: "#0070D2" },
  { name: "Typeform", role: "Lead Capture — B2B & DTC", cost: "$75/mo", costNote: "Business plan", detail: "Two form variants: (1) B2B Facility Inquiry — captures facility name, LOB, unit volume estimate, decision timeline, and budget authority. (2) Consumer Interest — captures use case, fitness level, and referral source. Both push to Salesforce via Zapier within 60 seconds of submission.", icon: MessageSquare, color: "#262627" },
  { name: "Klaviyo", role: "Email Nurture & Drip Automation", cost: "$150/mo", costNote: "Up to 10K contacts", detail: "Native Salesforce sync maps Leads and Contacts to Klaviyo profiles. Separate flows for B2B (facility buyers) and DTC (consumer). Behavioral triggers: form fill, demo booked, demo no-show, quote sent, deal stalled 14+ days. Purpose-built for hybrid B2B/DTC brands at ZeroWheel's stage.", icon: Mail, color: "#1B9B6F" },
  { name: "Zapier", role: "Automation Backbone", cost: "$75/mo", costNote: "Professional plan", detail: "10 active Zaps: Typeform → Salesforce Lead (60s), Salesforce Lead Created → Klaviyo Profile, Demo Booked → Slack #new-leads, Deal Won → Klaviyo Customer segment, Affiliate Code Used → Commission Line Item, Stalled Opp (14d) → Rep task + Slack alert, and more.", icon: Zap, color: "#FF4A00" },
  { name: "Intercom", role: "Live Chat & Qualification", cost: "Included", costNote: "Via Zapier integration", detail: "Embedded on all landing pages and the ZeroWheel website. Qualifies inbound visitors with a 3-question bot (use case, facility type, timeline) before routing to a rep. Syncs conversation history to Salesforce Contact record via Zapier.", icon: MessageSquare, color: "#1F8DED" },
  { name: "Landing Pages / Website", role: "Traffic Entry Point", cost: "Included", costNote: "Existing infrastructure", detail: "Dedicated landing pages for each LOB and persona — Private Clubs, Maritime/Cruise, Sports Performance, Consumer DTC. Each page features a Typeform embed, UTM parameter capture, and clear call-to-action. All traffic sources (organic, referral, direct outreach, events, influencer links) route through these pages into the lead capture flow.", icon: Target, color: "#1877F2" },
];

const funnelStages = [
  { stage: "Awareness", volume: "", source: "CMAA events, influencer posts, thought leadership content, LinkedIn outreach, direct referrals, sponsorships", action: "Impression or content view — no action required", color: "#C9A962" },
  { stage: "Interest", volume: "", source: "Landing page visit, Typeform start, Intercom chat initiated", action: "UTM parameters captured, Intercom bot triggered, Klaviyo Awareness flow enrolled", color: "#B8A080" },
  { stage: "Lead Captured", volume: "", source: "Typeform submission (B2B or DTC), trade show badge scan, direct referral", action: "Salesforce Lead created via Zapier within 60s. LOB assigned, UTM fields populated, owner assigned by LOB", color: "#9A8060" },
  { stage: "Qualified", volume: "", source: "Rep call, Intercom qualification, or Klaviyo engagement score ≥ 60", action: "Lead converted to Contact + Opportunity in Salesforce. Stage = Qualified. Klaviyo flow switches to Nurture sequence", color: "#7A6040" },
  { stage: "Demo / Proposal", volume: "", source: "Demo booked via Calendly link in Klaviyo email or rep outreach", action: "Demo completed, proposal sent. Salesforce stage = Proposal Sent. 48-hour follow-up task auto-created", color: "#5A4020" },
  { stage: "Negotiation", volume: "", source: "Prospect responds to proposal, requests pricing adjustment or references", action: "Rep logs all activity in Salesforce. Manager notified if deal stalls > 7 days at this stage", color: "#3A2010" },
  { stage: "Closed Won", volume: "", source: "PO received, contract signed, or DTC purchase completed", action: "Opportunity marked Closed Won. Klaviyo Customer Onboarding flow triggered. Commission Line Item created if affiliate code used", color: "#1A1008" },
];

const channelPlaybooks = [
  {
    title: "B2B Direct — Private Clubs & Hospitality",
    subtitle: "CMAA chapters, Troon, Club Corp, One Spa World, Delos",
    icon: Building2, color: GOLD,
    content: (
      <div className="mt-4 space-y-4">
        <p className="font-body text-sm text-black/60 leading-relaxed">Primary B2B channel. WEG's existing relationships with CMAA chapter leaders, Troon regional directors, and Club Corp wellness VPs give ZeroWheel warm entry into 500+ private clubs. Strategy is relationship-first — no cold outreach. Every account is pre-mapped in Salesforce with a named WEG contact as the relationship owner.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#FAFAF8] rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-2">Named Targets</p>
            {["Troon Golf (200+ managed clubs)", "Club Corp / Invited (200+ clubs)", "One Spa World (cruise + resort spa operator)", "Delos (wellness real estate, 30+ properties)", "CMAA Chapter Presidents (15 key regions)"].map((t, i) => (
              <div key={i} className="flex items-start gap-2 mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A962] mt-0.5 flex-shrink-0" />
                <span className="font-body text-xs text-black/60">{t}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FAFAF8] rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-2">Outreach Sequence</p>
            {["Day 1: Warm intro email from WEG contact", "Day 3: LinkedIn connection + content share", "Day 7: Phone call — 5-min discovery", "Day 14: Demo invite (Zoom or on-site)", "Day 21: Proposal with LOB-specific pricing", "Day 30: Follow-up + reference intro"].map((s, i) => (
              <div key={i} className="flex items-start gap-2 mb-1.5">
                <span className="font-mono text-[10px] text-[#C9A962] w-4 flex-shrink-0">{i + 1}</span>
                <span className="font-body text-xs text-black/60">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[{ label: "Target Accounts", value: "500+" }, { label: "Avg Deal Size", value: "$8,760" }, { label: "Close Rate Target", value: "18%" }].map((m, i) => (
            <div key={i} className="text-center p-3 bg-white border border-[#C9A962]/25 rounded-xl">
              <p className="font-display text-xl font-bold text-black">{m.value}</p>
              <p className="font-mono text-[9px] text-black/40 uppercase tracking-wider mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Thought Leadership — Sports Performance",
    subtitle: "Golf & pickleball trainers, TPI, NASM, Dr. Mike Clark",
    icon: Dumbbell, color: "#22C55E",
    content: (
      <div className="mt-4 space-y-4">
        <p className="font-body text-sm text-black/60 leading-relaxed">ZeroWheel's core strength and rotational power application makes it a natural fit for golf and pickleball performance training. WEG will seed the device with 10–15 credentialed trainers (TPI-certified, NASM-certified) who will use it with clients, provide feedback, and co-create programming. This builds organic credibility and a content library simultaneously.</p>
        <div className="bg-[#FAFAF8] rounded-xl p-4">
          <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-3">Content & Seeding Plan</p>
          <div className="grid md:grid-cols-2 gap-3">
            {["Golf Rotation Series: 6-week core program for club members (co-branded with TPI trainer)", "Pickleball Power Series: 4-week program targeting private club pickleball courts", "Trainer Seed Program: 15 devices placed with credentialed trainers at no cost in exchange for content + feedback", "Case Study Library: 3 before/after performance case studies per quarter", "CMAA Regional Demos: Live device demos at 4 regional CMAA shows in 2026", "Dr. Mike Clark / NASM: Explore co-branded content and certification integration"].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <span className="font-body text-xs text-black/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Digital Paid — Meta & LinkedIn",
    subtitle: "3 persona campaigns, LOB-specific landing pages, UTM tracking",
    icon: Target, color: "#1877F2",
    content: (
      <div className="mt-4 space-y-4">
        <p className="font-body text-sm text-black/60 leading-relaxed">Paid digital is used for testing and lead generation at the DTC and facility buyer level. WEG recommends starting with small budgets ($1,500–$3,000/mo) across three persona campaigns, measuring CPL and conversion rate before scaling. All campaigns route to dedicated landing pages with Typeform embeds and full UTM tracking into Salesforce.</p>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { persona: "Club Wellness Director", platform: "Meta + LinkedIn", targeting: "CMAA members, club managers, 35–55, fitness/wellness", cta: "Request a Demo for Your Club", budget: "$1,500/mo" },
            { persona: "Sports Performance Trainer", platform: "Meta", targeting: "Golf/pickleball coaches, TPI-certified, 28–50", cta: "Add ZeroWheel to Your Training Programs", budget: "$1,000/mo" },
            { persona: "Active Consumer (DTC)", platform: "Meta Retargeting", targeting: "Website visitors, lookalike of past buyers", cta: "Train Smarter — $1,095", budget: "$500/mo" },
          ].map((p, i) => (
            <div key={i} className="bg-[#FAFAF8] rounded-xl p-4">
              <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-2">{p.platform}</p>
              <p className="font-display text-sm font-semibold text-black mb-1">{p.persona}</p>
              <p className="font-body text-xs text-black/50 mb-2">{p.targeting}</p>
              <p className="font-mono text-[10px] text-black/40">CTA: {p.cta}</p>
              <p className="font-mono text-[10px] text-[#C9A962] mt-1">Budget: {p.budget}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Influencer & Affiliate Network",
    subtitle: "Commission-based partners, $250/unit base, tiered bonuses",
    icon: Star, color: "#F59E0B",
    content: (
      <div className="mt-4 space-y-4">
        <p className="font-body text-sm text-black/60 leading-relaxed">WEG recommends a structured affiliate program for DTC sales only. Influencers and athletes receive a unique promo code tracked in Salesforce. Base commission is $250/unit sold. Tiered bonuses reward volume. See the dedicated Affiliate Program tab for full terms, onboarding kit, and Salesforce Commission object architecture.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#FAFAF8] rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-2">Anchor Partners (Target)</p>
            {["Delos / Alfredo Carvajal — wellness real estate", "Blue Zone / Dan Buettner — longevity audience", "Dr. Mike Clark / NASM — fitness professional network", "TPI-certified golf trainers (10–15 seeded)", "Pickleball influencers with club audiences (5–10)"].map((p, i) => (
              <div key={i} className="flex items-start gap-2 mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <span className="font-body text-xs text-black/60">{p}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FAFAF8] rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-2">Commission Tiers</p>
            {[["Base", "1–4 units/mo", "$250/unit"], ["Silver", "5–9 units/mo", "$275/unit"], ["Gold", "10–24 units/mo", "$300/unit"], ["Platinum", "25+ units/mo", "$325/unit"]].map(([tier, vol, rate], i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#C9A962]/20 last:border-0">
                <span className="font-mono text-[10px] text-[#C9A962]">{tier}</span>
                <span className="font-body text-xs text-black/50">{vol}</span>
                <span className="font-display text-sm font-bold text-black">{rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Events & Sponsorships",
    subtitle: "CMAA Regional, PGA Merchandise Show, NRPA, Sea Trade",
    icon: Award, color: "#8B5CF6",
    content: (
      <div className="mt-4 space-y-4">
        <p className="font-body text-sm text-black/60 leading-relaxed">WEG recommends a selective events strategy — 4–6 high-value events per year where ZeroWheel can demo the device to decision-makers in person. Priority is CMAA regional shows and Sea Trade. Each event is tracked as a Salesforce Campaign with all leads attributed to the event source.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { event: "CMAA Regional Shows (4)", timing: "Q1–Q3 2026", lob: "Private Clubs", goal: "Demo to 50+ club GMs per show, collect Typeform leads on-site" },
            { event: "PGA Merchandise Show", timing: "January 2026", lob: "Sports Performance / Golf", goal: "Brand presence, trainer seeding, 20+ qualified contacts" },
            { event: "NRPA Annual Conference", timing: "October 2026", lob: "Government / Municipal", goal: "Explore park & rec and municipal wellness applications" },
            { event: "Sea Trade Cruise Global", timing: "March 2026", lob: "Maritime / Cruise", goal: "In-room wellness pitch to cruise line procurement teams" },
          ].map((e, i) => (
            <div key={i} className="bg-[#FAFAF8] rounded-xl p-4">
              <p className="font-display text-sm font-semibold text-black">{e.event}</p>
              <p className="font-mono text-[10px] text-[#C9A962] mt-1">{e.timing} · {e.lob}</p>
              <p className="font-body text-xs text-black/50 mt-2">{e.goal}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Maritime & Cruise — Direct Outreach",
    subtitle: "One Spa World, Carnival, Norwegian, Royal Caribbean",
    icon: Ship, color: "#0EA5E9",
    content: (
      <div className="mt-4 space-y-4">
        <p className="font-body text-sm text-black/60 leading-relaxed">WEG has direct relationships with cruise line wellness and spa procurement teams. The strategy is in-room wellness placement (stateroom fitness amenity) and spa/fitness center bulk purchase. One Spa World manages spa operations for multiple major cruise lines — a single enterprise deal could place ZeroWheel on 50+ ships.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#FAFAF8] rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-2">Target Accounts</p>
            {["One Spa World (multi-line spa operator)", "Carnival Corporation (9 brands, 100+ ships)", "Norwegian Cruise Line Holdings", "Royal Caribbean Group", "MSC Cruises (European expansion)"].map((t, i) => (
              <div key={i} className="flex items-start gap-2 mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <span className="font-body text-xs text-black/60">{t}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FAFAF8] rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-2">Entry Points</p>
            {["In-room wellness amenity (stateroom placement)", "Fitness center bulk purchase (5–20 units/ship)", "Spa programming integration (core + recovery)", "Retail sale on-board (DTC at sea)", "Staff wellness program (crew fitness)"].map((t, i) => (
              <div key={i} className="flex items-start gap-2 mb-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <span className="font-body text-xs text-black/60">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const emailFlows = [
  {
    name: "B2B Facility Nurture",
    trigger: "Typeform B2B submission",
    audience: "Club GMs, Wellness Directors, Procurement",
    emails: [
      { day: 0, subject: "Thanks for your interest in ZeroWheel — here's what to expect", content: "Confirmation + WEG intro + link to product overview PDF" },
      { day: 2, subject: "How your facility can use ZeroWheel to differentiate its wellness offering", content: "LOB-specific use case (personalized by Salesforce LOB field) + 2-min demo video" },
      { day: 5, subject: "ZeroWheel in action at a comparable facility", content: "Case study or testimonial from comparable facility + pricing overview" },
      { day: 9, subject: "Ready to see it live? Book a 20-minute demo", content: "Calendly link + rep intro + 3 social proof points" },
      { day: 14, subject: "Quick question about your wellness program goals", content: "Plain-text reply-style email from rep — drives response" },
      { day: 21, subject: "ZeroWheel Q1 availability — limited demo units", content: "Urgency/scarcity + final CTA to book demo or request quote" },
    ],
    color: GOLD,
  },
  {
    name: "DTC Consumer Nurture",
    trigger: "Consumer Typeform or website opt-in",
    audience: "Active adults, golfers, pickleball players, home gym users",
    emails: [
      { day: 0, subject: "Welcome to ZeroWheel — your core training starts here", content: "Brand story + product overview + link to training programs" },
      { day: 3, subject: "Why core strength is the foundation of every sport", content: "Educational content — golf rotation, pickleball power, longevity" },
      { day: 7, subject: "See what ZeroWheel users are saying", content: "Social proof — 3 testimonials + before/after performance metrics" },
      { day: 12, subject: "Your ZeroWheel training program: Golf Edition", content: "Free 6-week golf rotation program PDF — value-add before ask" },
      { day: 18, subject: "Ready to invest in your performance?", content: "Product page link + $1,095 pricing + payment options" },
      { day: 25, subject: "Last chance: current inventory availability", content: "Urgency close + FAQ + direct purchase link" },
    ],
    color: "#22C55E",
  },
  {
    name: "Demo No-Show Re-Engagement",
    trigger: "Demo booked but not attended (Calendly + Salesforce)",
    audience: "Leads who booked but missed their demo",
    emails: [
      { day: 0, subject: "We missed you — want to reschedule?", content: "Simple reschedule link + 1-line note, no pressure" },
      { day: 3, subject: "Here's the ZeroWheel overview in case you missed it", content: "2-min product video + key specs — value without requiring a call" },
      { day: 7, subject: "Still interested? We have openings this week", content: "Final reschedule attempt + rep phone number" },
    ],
    color: "#F59E0B",
  },
  {
    name: "Stalled Deal Re-Activation",
    trigger: "Salesforce Opportunity stalled > 14 days at any stage",
    audience: "Qualified leads / open opportunities with no activity",
    emails: [
      { day: 0, subject: "Checking in on your ZeroWheel evaluation", content: "Rep-personalized plain-text email — asks if anything changed" },
      { day: 5, subject: "New: ZeroWheel Q1 2026 program options", content: "New content or offer (volume pricing, extended trial, new case study)" },
      { day: 10, subject: "Is this still a priority?", content: "Direct close — yes/no reply requested. If no reply, mark as Closed Lost in Salesforce" },
    ],
    color: "#EF4444",
  },
];

const lobStrategies = [
  { name: "Private Clubs", icon: Star, color: GOLD, entry: "CMAA chapter relationships, Troon/Club Corp enterprise", messaging: "Differentiate your wellness program — ZeroWheel is the only motorized core trainer on the market. Give members a reason to use your fitness center every day." },
  { name: "Maritime / Cruise", icon: Ship, color: "#0EA5E9", entry: "One Spa World relationship, Sea Trade conference", messaging: "In-room wellness and spa fitness — ZeroWheel fits in a stateroom, requires no floor space, and delivers a premium amenity guests will remember." },
  { name: "Hospitality", icon: Building2, color: "#8B5CF6", entry: "Delos relationship, luxury hotel wellness directors", messaging: "Elevate your in-room wellness offering. ZeroWheel is compact, silent, and positions your property as a leader in guest wellness." },
  { name: "Sports Performance", icon: Dumbbell, color: "#22C55E", entry: "TPI trainers, NASM/Dr. Mike Clark, club sports programs", messaging: "Core strength and rotational power are the foundation of every sport. ZeroWheel gives trainers a programmable, measurable tool for athlete development." },
  { name: "Healthcare / Rehab", icon: Stethoscope, color: "#EF4444", entry: "Physical therapy networks, hospital wellness programs", messaging: "Controlled resistance and motorized assistance make ZeroWheel ideal for core rehabilitation. Programmable difficulty supports progressive recovery protocols." },
  { name: "Senior Living", icon: Users, color: "#60A5FA", entry: "Senior living wellness directors, CCRC networks", messaging: "Low-impact core training for longevity. ZeroWheel's motorized assistance makes it accessible for older adults focused on balance, stability, and independence." },
  { name: "Corporate Wellness", icon: Building2, color: "#F472B6", entry: "HR wellness program directors, corporate gym operators", messaging: "Give employees a reason to use the corporate gym. ZeroWheel is compact, engaging, and supports the core strength that desk workers need most." },
  { name: "Government / Military", icon: Shield, color: "#34D399", entry: "GSA schedule, military fitness program contacts", messaging: "ZeroWheel supports the functional core strength requirements of military fitness standards and government wellness programs." },
  { name: "Consumer DTC", icon: Store, color: "#F59E0B", entry: "Affiliate/influencer program, organic search, thought leadership", messaging: "Train like a professional athlete from home. ZeroWheel delivers motorized core resistance that no other home fitness device can match." },
];

const accountabilityKPIs = [
  { metric: "Leads Created (Weekly)", owner: "Marketing", target: "25+/week", sfField: "Lead.CreatedDate + Lead.LeadSource", cadence: "Monday pipeline review" },
  { metric: "Lead Response Time", owner: "Sales Rep", target: "< 1 hour", sfField: "Lead.First_Response_Time__c", cadence: "Daily SLA report" },
  { metric: "Demo Conversion Rate", owner: "Sales Rep", target: "> 35% of qualified leads", sfField: "Opportunity.Demo_Completed__c / Leads Qualified", cadence: "Weekly" },
  { metric: "Klaviyo Open Rate (B2B)", owner: "Marketing", target: "> 28%", sfField: "Klaviyo dashboard → Salesforce Campaign", cadence: "Weekly" },
  { metric: "Pipeline by Stage", owner: "Sales Manager", target: "3x quota in pipeline at all times", sfField: "Opportunity.StageName + Amount", cadence: "Monday review" },
  { metric: "Closed Won (Monthly)", owner: "Sales Rep", target: "Per LOB quota", sfField: "Opportunity.CloseDate + StageName = Closed Won", cadence: "Monthly" },
  { metric: "Affiliate Units Sold", owner: "Marketing", target: "20+ units/mo by Q3", sfField: "Commission__c.Units_Sold__c", cadence: "Monthly" },
  { metric: "Win Rate", owner: "Sales Manager", target: "> 22%", sfField: "Closed Won / Total Closed Opportunities", cadence: "Monthly" },
];

// ── Page ───────────────────────────────────────────────────────────────────
export default function ZWMarketingInfrastructure() {
  const [activeEmail, setActiveEmail] = useState(0);

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div id="hero">
        <LightHero
          logoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png"
          logoAlt="ZeroWheel"
          
          eyebrow="WEG Marketing Execution Plan"
          title="Go-To-Market Systems & Channel Strategy"
          description="WEG's proposed marketing infrastructure for ZeroWheel — covering the full lead funnel from awareness to closed won, the tech stack that powers it (Salesforce, Klaviyo, Typeform, Zapier), channel-by-channel execution playbooks across all 9 macro LOBs, and the accountability framework that keeps the team on track."
          stats={[
            { value: "9",      label: "Macro LOBs Covered" },
            { value: "6",      label: "Active Channels"    },
            { value: "4",      label: "Klaviyo Drip Flows" },
            { value: "$1,095", label: "DTC MSRP"           },
          ]}
        />
      </div>

      {/* ── TECH STACK ───────────────────────────────────────────────────── */}
      <section id="systems" className="py-18 bg-white">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Marketing Tech Stack"
            title="The Systems That Power the Funnel"
            body="WEG recommends a lean, integrated stack purpose-built for ZeroWheel's hybrid B2B/DTC model. Every tool connects to Salesforce as the single source of truth."
          />
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {techStack.map((tool, i) => (
              <motion.div
                key={i} variants={scaleIn}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.07)" }}
                className="bg-white border border-[#C9A962]/35 rounded-2xl p-6 hover:border-[#C9A962]/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${tool.color}15` }}>
                    <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-sm font-semibold text-black">{tool.name}</p>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 ${
                        tool.cost === "Included" ? "bg-black/5 text-black/40" : "bg-[#C9A962]/10 text-[#C9A962]"
                      }`}>{tool.cost}</span>
                    </div>
                    <p className="font-mono text-[10px] text-black/35 uppercase tracking-[0.12em] mt-0.5">{tool.role}</p>
                    {tool.costNote && <p className="font-mono text-[9px] text-black/30 mt-0.5">{tool.costNote}</p>}
                  </div>
                </div>
                <p className="font-body text-xs text-black/55 leading-relaxed">{tool.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Cost Summary */}
          <motion.div
            className="max-w-6xl mx-auto mt-6 mb-2"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="bg-[#FAFAF8] border border-[#C9A962]/20 rounded-2xl px-8 py-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#C9A962]" />
                <div>
                  <p className="font-mono text-[10px] text-black/35 uppercase tracking-[0.15em]">Estimated Monthly Stack Cost</p>
                  <p className="font-body text-xs text-black/50 mt-0.5">Based on 5 teammates — scales with team growth</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { label: "Salesforce", value: "$500" },
                  { label: "Klaviyo",    value: "$150" },
                  { label: "Zapier",     value: "$75"  },
                  { label: "Typeform",   value: "$75"  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="font-display text-lg font-semibold text-black">{item.value}</p>
                    <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
                <div className="h-8 w-px bg-black/10" />
                <div className="text-center">
                  <p className="font-display text-xl font-bold text-[#C9A962]">$800<span className="text-sm font-normal text-black/40">/mo</span></p>
                  <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider">Total</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Integration flow */}
          <motion.div
            className="max-w-4xl mx-auto mt-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="bg-[#FAFAF8] border border-[#C9A962]/25 rounded-2xl p-8">
              <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.2em] text-center mb-6">Data Flow Architecture</p>
              {/* Row 1: Intake pipeline */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 flex-wrap mb-5">
                {[
                  { label: "Landing Pages / Website", sub: "All traffic sources" },
                  { label: "Typeform",                sub: "Lead capture"        },
                  { label: "Zapier",                  sub: "60s automation"      },
                  { label: "Salesforce",              sub: "Source of truth"     },
                ].map((node, i, arr) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-center px-4 py-3 bg-white border border-[#C9A962]/35 rounded-xl shadow-sm min-w-[130px]">
                      <p className="font-display text-xs font-semibold text-black">{node.label}</p>
                      <p className="font-mono text-[9px] text-black/35 mt-0.5">{node.sub}</p>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#C9A962] flex-shrink-0" />}
                  </div>
                ))}
              </div>
              {/* Divider label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 border-t border-dashed border-[#C9A962]/30" />
                <p className="font-mono text-[9px] text-black/30 uppercase tracking-widest px-2">Once in Salesforce — nurture & convert</p>
                <div className="flex-1 border-t border-dashed border-[#C9A962]/30" />
              </div>
              {/* Row 2: Nurture + conversion engine */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-center px-5 py-4 bg-white border border-[#C9A962]/35 rounded-xl shadow-sm min-w-[150px]">
                  <p className="font-display text-sm font-semibold text-black">Sales Team</p>
                  <p className="font-mono text-[9px] text-black/40 mt-0.5">Direct outreach & conversion</p>
                </div>
                <span className="font-mono text-xs text-black/30">+</span>
                <div className="text-center px-5 py-4 bg-white border border-[#C9A962]/35 rounded-xl shadow-sm min-w-[150px]">
                  <p className="font-display text-sm font-semibold text-black">Klaviyo</p>
                  <p className="font-mono text-[9px] text-black/40 mt-0.5">Email nurture engine</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C9A962] flex-shrink-0" />
                <div className="text-center px-5 py-4 bg-white border-2 border-[#C9A962]/50 rounded-xl shadow-sm min-w-[170px]">
                  <p className="font-display text-sm font-semibold text-[#C9A962]">Leads → Accounts → Sales</p>
                  <p className="font-mono text-[9px] text-black/40 mt-0.5">Conversion goal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD FUNNEL ──────────────────────────────────────────────────── */}
      <section id="funnel" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Lead Funnel Architecture"
            title="From Awareness to Closed Won"
            body="Every lead follows a defined path through 7 stages. Each stage has a specific trigger, action, and Salesforce field update — no leads fall through the cracks."
          />
          <div className="max-w-4xl mx-auto space-y-3">
            {funnelStages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-[#C9A962]/35 rounded-2xl p-5 hover:border-[#C9A962]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-display text-sm font-bold flex-shrink-0" style={{ background: stage.color }}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-black">{stage.stage}</p>

                    </div>
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider mb-1">Source / Trigger</p>
                      <p className="font-body text-xs text-black/60 leading-relaxed">{stage.source}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider mb-1">System Action</p>
                      <p className="font-body text-xs text-black/60 leading-relaxed">{stage.action}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* ── CHANNEL PLAYBOOKS ────────────────────────────────────────────── */}
      <section id="channels" className="py-18 bg-white">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Channel Execution Playbooks"
            title="Six Channels, One Integrated System"
            body="Each channel has a defined outreach sequence, named target accounts, KPIs, and Salesforce tracking method. Click any channel to expand the full playbook."
          />
          <motion.div
            className="max-w-4xl mx-auto space-y-3"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {channelPlaybooks.map((ch, i) => (
              <AccordionCard key={i} title={ch.title} subtitle={ch.subtitle} icon={ch.icon} color={ch.color}>
                {ch.content}
              </AccordionCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EMAIL NURTURE ────────────────────────────────────────────────── */}
      <section id="email" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Klaviyo Email Nurture"
            title="Automated Drip Flows"
            body="WEG recommends Klaviyo as the email platform — native Salesforce sync, $150/mo, and built for hybrid B2B/DTC brands. The examples below illustrate what can be built — actual flows, sequences, and messaging will be developed collaboratively with the ZeroWheel team."
          />
          <div className="max-w-3xl mx-auto mb-8 px-5 py-4 bg-[#C9A962]/[0.07] border border-[#C9A962]/25 rounded-xl text-center">
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.15em] mb-1">Note</p>
            <p className="font-body text-xs text-black/55">The flows shown here are illustrative examples of what can be built in Klaviyo. Specific sequences, copy, timing, and triggers will be defined and refined as part of the WEG engagement.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {emailFlows.map((flow, i) => (
                <button
                  key={i} onClick={() => setActiveEmail(i)}
                  className={`px-4 py-2 rounded-full border font-mono text-xs transition-all ${activeEmail === i ? "bg-[#C9A962] text-white border-[#C9A962]" : "border-[#C9A962]/25 text-black/55 hover:border-[#C9A962]/50 hover:text-black"}`}
                >
                  {flow.name}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeEmail} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                <div className="bg-white border border-[#C9A962]/35 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-[#C9A962]/25 flex items-center justify-between">
                    <div>
                      <p className="font-display text-base font-semibold text-black">{emailFlows[activeEmail].name}</p>
                      <p className="font-mono text-[10px] text-[#C9A962] mt-0.5">Trigger: {emailFlows[activeEmail].trigger}</p>
                    </div>
                    <span className="font-mono text-[10px] text-black/40 bg-black/[0.04] px-3 py-1.5 rounded-full hidden md:block">{emailFlows[activeEmail].audience}</span>
                  </div>
                  <div className="divide-y divide-black/[0.06]">
                    {emailFlows[activeEmail].emails.map((email, j) => (
                      <div key={j} className="px-6 py-4 flex items-start gap-4">
                        <div className="w-12 flex-shrink-0 text-center">
                          <span className="font-mono text-[10px] text-[#C9A962]">Day {email.day}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-display text-sm font-semibold text-black mb-1">"{email.subject}"</p>
                          <p className="font-body text-xs text-black/50">{email.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── AFFILIATE / INFLUENCER ───────────────────────────────────────── */}
      <section id="influencer" className="py-18 bg-white">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Affiliate & Influencer Program"
            title="Commission-Based Partner Network"
            body="WEG recommends a DTC-only affiliate program anchored at $250/unit base commission. Tiered bonuses reward volume. Full program details and Salesforce Commission object are in the Affiliate Program tab."
          />
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {[
              { tier: "Base",     units: "1–4 units/mo",   rate: "$250/unit", earn: "$250–$1,000/mo",   color: "#C9A962" },
              { tier: "Silver",   units: "5–9 units/mo",   rate: "$275/unit", earn: "$1,375–$2,475/mo", color: "#94A3B8" },
              { tier: "Gold",     units: "10–24 units/mo", rate: "$300/unit", earn: "$3,000–$7,200/mo", color: "#F59E0B" },
            ].map((t, i) => (
              <motion.div
                key={i} variants={scaleIn}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.07)" }}
                className="bg-white border border-[#C9A962]/35 rounded-2xl p-6 text-center hover:border-[#C9A962]/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${t.color}15` }}>
                  <Star className="w-6 h-6" style={{ color: t.color }} />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: t.color }}>{t.tier}</p>
                <p className="font-display text-2xl font-bold text-black">{t.rate}</p>
                <p className="font-body text-xs text-black/50 mt-1">{t.units}</p>
                <div className="mt-4 pt-4 border-t border-[#C9A962]/25">
                  <p className="font-mono text-[10px] text-black/35 uppercase tracking-wider">Monthly Earnings</p>
                  <p className="font-display text-sm font-semibold text-black mt-1">{t.earn}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="max-w-5xl mx-auto mt-6 p-5 bg-[#FAFAF8] border border-[#C9A962]/25 rounded-2xl"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.2em] mb-2">Important: DTC Only</p>
            <p className="font-body text-sm text-black/60">This affiliate program applies exclusively to DTC consumer sales at $1,095 MSRP. B2B facility and institutional sales are handled separately through WEG's direct sales team at Commercial ($695) and Vertical ($825) pricing tiers. Mixing channels would undermine the pricing architecture.</p>
          </motion.div>
        </div>
      </section>

      {/* ── LOB STRATEGIES ───────────────────────────────────────────────── */}
      <section id="lob-strategy" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="LOB Marketing Strategies"
            title="Nine Markets, Nine Approaches"
            body="Each macro line of business has a distinct buyer, entry point, and messaging framework. WEG maps every LOB to the right channel, pricing tier, and Salesforce owner."
          />
          <motion.div
            className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {lobStrategies.map((lob, i) => (
              <motion.div
                key={i} variants={scaleIn}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.07)" }}
                className="bg-white border border-[#C9A962]/35 rounded-2xl p-5 hover:border-[#C9A962]/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${lob.color}15` }}>
                    <lob.icon className="w-4 h-4" style={{ color: lob.color }} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-black">{lob.name}</p>

                  </div>
                </div>
                <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider mb-1">Entry Point</p>
                <p className="font-body text-xs text-black/55 mb-3">{lob.entry}</p>
                <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider mb-1">Messaging</p>
                <p className="font-body text-xs text-black/55 leading-relaxed italic">"{lob.messaging}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ACCOUNTABILITY ───────────────────────────────────────────────── */}
      <section id="accountability" className="py-18 bg-white">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Team Accountability Framework"
            title="KPIs, Cadence & Salesforce Tracking"
            body="WEG recommends a weekly rhythm with clear KPI ownership. Every metric has a named owner, a Salesforce field that tracks it, and a review cadence."
          />

          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { day: "Monday", title: "Pipeline Review", items: ["All open opportunities reviewed by stage", "Leads created last week vs. target", "SLA compliance — any > 1hr response?", "Channel performance vs. weekly targets"] },
                { day: "Wednesday", title: "Channel & Campaign Check", items: ["Meta ad CPL and conversion rate", "Klaviyo open rates and click rates", "Affiliate code usage and commission accrual", "Event pipeline — upcoming shows prep"] },
                { day: "Friday", title: "Win / Loss Debrief", items: ["All closed won deals logged with win reason", "All closed lost deals logged with loss reason", "Rep activity log review (calls, demos, emails)", "Next week priorities set in Salesforce tasks"] },
              ].map((d, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-[#FAFAF8] border border-[#C9A962]/25 rounded-2xl p-5">
                  <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.2em] mb-1">{d.day}</p>
                  <p className="font-display text-base font-semibold text-black mb-3">{d.title}</p>
                  {d.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A962] mt-0.5 flex-shrink-0" />
                      <span className="font-body text-xs text-black/60">{item}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="bg-white border border-[#C9A962]/35 rounded-2xl overflow-hidden">
              <div className="bg-[#F5F4F1] px-6 py-3 flex items-center justify-between">
                <span className="font-mono text-xs text-black">KPI Tracking Matrix — Salesforce Field Reference</span>
                <span className="font-mono text-[10px] text-[#C9A962]">Updated Weekly</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#C9A962]/25">
                      {["Metric", "Owner", "Target", "Salesforce Field", "Cadence"].map(h => (
                        <th key={h} className="px-4 py-3 text-left font-mono text-[9px] text-black/35 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {accountabilityKPIs.map((kpi, i) => (
                      <tr key={i} className={`border-b border-[#C9A962]/20 hover:bg-[#FAFAF8] transition-colors ${i % 2 === 0 ? "" : "bg-[#FAFAF8]/40"}`}>
                        <td className="px-4 py-3 font-display text-sm font-semibold text-black">{kpi.metric}</td>
                        <td className="px-4 py-3 font-mono text-[10px] text-[#C9A962]">{kpi.owner}</td>
                        <td className="px-4 py-3 font-body text-xs text-black/70">{kpi.target}</td>
                        <td className="px-4 py-3 font-mono text-[9px] text-black/40">{kpi.sfField}</td>
                        <td className="px-4 py-3 font-mono text-[10px] text-black/50">{kpi.cadence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
