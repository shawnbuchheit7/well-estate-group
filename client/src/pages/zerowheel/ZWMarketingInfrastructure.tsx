/*
 * ZeroWheel Marketing Infrastructure Page
 * Design: Dark luxury — #0A0A0A bg, #C9A962 gold accents, #00C9A7 teal highlights
 * Layout: Full-width sections, asymmetric grids, animated funnel diagram
 * Sections:
 *   1. Hero — strategic overview
 *   2. Multi-Channel Acquisition Funnel (visual diagram)
 *   3. Channel Deep-Dives (B2B Direct, Partnerships, Thought Leadership, Digital, Consumer)
 *   4. LOB-Specific Strategies (8 macro LOBs)
 *   5. Salesforce Architecture & Tracking
 *   6. Team Accountability & Cadence
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Dumbbell, Home, Landmark, Stethoscope, Trophy, Briefcase, UserCircle,
  Target, Users, Megaphone, Globe, Star, ArrowRight, ChevronDown, ChevronUp,
  Database, BarChart3, Bell, CheckCircle2, AlertCircle, TrendingUp, Zap,
  Ship, Hotel, GraduationCap, Handshake, Instagram, Mail, Phone, MapPin,
  Award, Activity, Eye, DollarSign, Calendar, Filter, RefreshCw, Shield
} from "lucide-react";
import Layout from "@/components/Layout";
import DarkHero from "@/components/DarkHero";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "funnel", label: "Acquisition Funnel" },
  { id: "channels", label: "Channel Strategy" },
  { id: "lob-strategy", label: "LOB Playbooks" },
  { id: "salesforce", label: "Salesforce Architecture" },
  { id: "accountability", label: "Team Accountability" },
];

// ─── Channel data ───────────────────────────────────────────────────────────
const funnelChannels = [
  { id: "b2b-direct", label: "B2B Direct Sales", color: "#C9A962", icon: Users, pct: 35 },
  { id: "partnerships", label: "Strategic Partnerships", color: "#00C9A7", icon: Handshake, pct: 20 },
  { id: "thought-leadership", label: "Thought Leadership", color: "#A78BFA", icon: GraduationCap, pct: 15 },
  { id: "digital", label: "Digital / Paid", color: "#F59E0B", icon: Globe, pct: 12 },
  { id: "influencer", label: "Influencer Network", color: "#F472B6", icon: Star, pct: 10 },
  { id: "events", label: "Events & Trade Shows", color: "#34D399", icon: Award, pct: 8 },
];

const funnelStages = [
  { label: "Awareness", width: "100%", count: "10,000+", color: "#C9A962", desc: "Impressions across all channels" },
  { label: "Interest", width: "60%", count: "6,000", color: "#B8963E", desc: "Engaged with content or outreach" },
  { label: "Lead", width: "35%", count: "3,500", color: "#A07830", desc: "Typeform intake or SF Lead created" },
  { label: "Qualified", width: "18%", count: "1,800", color: "#8B6020", desc: "MQL → SQL conversion via FinAI + rep" },
  { label: "Opportunity", width: "10%", count: "1,000", color: "#764808", desc: "Demo completed, proposal stage" },
  { label: "Install (Won)", width: "10%", count: "1,000", color: "#C9A962", desc: "$1M revenue · 1,000 units · $1K ASP" },
];

// ─── Channel deep-dive data ──────────────────────────────────────────────────
interface ChannelDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Users;
  color: string;
  tactics: { label: string; detail: string }[];
  sfTracking: string[];
  kpis: { label: string; target: string }[];
}

const channelDetails: ChannelDetail[] = [
  {
    id: "b2b-direct",
    title: "B2B Direct Sales",
    subtitle: "Relationship-led outreach across Private Clubs, Maritime, Hospitality & Medical",
    icon: Users,
    color: "#C9A962",
    tactics: [
      { label: "Strategic Account Mapping", detail: "Build Salesforce Account lists by LOB with named owners, relationship scores, and next-action dates. Every rep owns a territory with clear ICP criteria." },
      { label: "CMAA Sponsorship & Regional Shows", detail: "Sponsor CMAA regional conferences to get ZeroWheel in front of GMs and fitness directors at country clubs. Booth presence + private demos + follow-up sequences." },
      { label: "Cruise & Hospitality Direct", detail: "Leverage WEG's existing cruise and hospitality relationships. Target in-room wellness programs and fitness center upgrades. Dedicated rep with maritime/hospitality quota." },
      { label: "Country Club Fitness Director Outreach", detail: "Targeted cold + warm outreach to fitness directors and GMs at golf & country clubs. Personalized sequences referencing CMAA membership, club tier, and member demographics." },
      { label: "Medical & PT Channel", detail: "Target physical therapists, hospital-supported wellness centers, and health care facilities. ZeroWheel's core-strength and longevity positioning is a natural fit for rehab and preventive care." },
    ],
    sfTracking: [
      "Account: LOB, sub-LOB, territory, owner, relationship score",
      "Contact: Role, decision-maker flag, last activity date",
      "Lead Source: 'B2B Direct — [Rep Name]'",
      "Campaign: CMAA 2026, Cruise Outreach Q1, Medical Channel",
      "Activity: Call outcome, email open, demo scheduled",
    ],
    kpis: [
      { label: "Accounts Mapped", target: "500 by Q1" },
      { label: "Outreach Sequences Active", target: "8 per rep" },
      { label: "Demo Rate", target: "15% of qualified leads" },
      { label: "Win Rate (B2B)", target: "25%" },
    ],
  },
  {
    id: "partnerships",
    title: "Strategic Partnerships",
    subtitle: "Category-specific alliances that open doors at scale without mass spend",
    icon: Handshake,
    color: "#00C9A7",
    tactics: [
      { label: "CMAA Preferred Vendor Status", detail: "Pursue CMAA preferred vendor or allied association membership to gain credibility and access to member directories, newsletters, and conference speaking slots." },
      { label: "Golf & Pickleball Trainer Networks", detail: "Partner with certified golf and pickleball trainers in private clubs. Provide ZeroWheels for program integration. Trainers become product advocates and referral sources." },
      { label: "Cruise Line Wellness Partnerships", detail: "Formal partnerships with cruise line fitness and spa operators. Revenue share or preferred supplier agreements for in-room wellness and fitness center installations." },
      { label: "Sports Performance Facility Alliances", detail: "Partner with HOA-managed sports performance facilities and Exos-style training centers. Pilot programs with measurable outcome data to build case studies." },
      { label: "Commission-Based Influencer Partnerships", detail: "Structured affiliate program: $250/unit commission for influencers who drive sales via unique promo codes. Not just social posts — full sales partnership with tracking." },
    ],
    sfTracking: [
      "Partner Account type in Salesforce with partner tier (Gold/Silver/Bronze)",
      "Referral Lead Source: 'Partner — [Partner Name]'",
      "Partner-attributed Opportunity revenue tracked separately",
      "Commission tracking via custom Salesforce object",
      "Partner performance dashboard: leads referred, conversion rate, revenue",
    ],
    kpis: [
      { label: "Active Partners", target: "20 by Q2" },
      { label: "Partner-Sourced Leads", target: "20% of total pipeline" },
      { label: "Influencer Codes Active", target: "15 by Q2" },
      { label: "Commission Revenue Attributed", target: "Tracked per partner" },
    ],
  },
  {
    id: "thought-leadership",
    title: "Thought Leadership",
    subtitle: "Owning the conversation in sports performance, longevity, and club wellness",
    icon: GraduationCap,
    color: "#A78BFA",
    tactics: [
      { label: "Golf & Pickleball Performance Content", detail: "Create ZeroWheel-specific training programs for golf rotation and pickleball core stability. Publish via YouTube, LinkedIn, and club newsletters. Position ZeroWheel as the performance tool for aging athletes." },
      { label: "Longevity & Core Strength Positioning", detail: "Publish research-backed content on rotational core training and longevity. Target club fitness directors, physical therapists, and wellness-conscious consumers aged 45–70." },
      { label: "Trainer & Influencer Feedback Loop", detail: "Seed ZeroWheels with 10–15 key trainers in golf and pickleball. Gather structured feedback, build testimonials, co-create content. These trainers become credibility anchors." },
      { label: "Event Participation", detail: "Attend and present at CMAA regional shows, PGA merchandise shows, and sports performance conferences. Speaking slots and demo stations build brand authority." },
      { label: "Case Study Library", detail: "Document 5–10 early installation stories with measurable outcomes (member engagement, trainer adoption, revenue impact). Publish as sales collateral and content marketing." },
    ],
    sfTracking: [
      "Lead Source: 'Content — [Article/Video Title]'",
      "UTM parameters: source=content, medium=organic, campaign=[topic]",
      "Contact: Content engagement score (email opens, video views)",
      "Campaign: Thought Leadership Q1, Golf Performance Series",
    ],
    kpis: [
      { label: "Content Pieces Published", target: "2/week" },
      { label: "Trainer Advocates Active", target: "15 by Q2" },
      { label: "Content-Sourced Leads", target: "15% of total" },
      { label: "Case Studies Published", target: "5 by Q3" },
    ],
  },
  {
    id: "digital",
    title: "Digital & Paid Campaigns",
    subtitle: "Targeted, measurable, persona-driven campaigns tested at low cost before scaling",
    icon: Globe,
    color: "#F59E0B",
    tactics: [
      { label: "Meta Lead Forms by Persona", detail: "Run persona-specific Meta campaigns targeting: (1) Club GMs/fitness directors, (2) Golf/pickleball enthusiasts 45–65, (3) Cruise/hospitality procurement. Each persona gets its own creative, copy, and Typeform intake." },
      { label: "Multiple Landing Pages", detail: "Dedicated landing pages per LOB and persona. Each page has a unique UTM, Typeform embed, and FinAI chat widget. A/B test headlines, proof points, and CTAs at low budget before scaling winners." },
      { label: "LinkedIn Outreach for B2B", detail: "LinkedIn Sales Navigator for targeted outreach to GMs, fitness directors, and wellness VPs. Personalized connection requests + message sequences tied to Salesforce activities." },
      { label: "Retargeting Sequences", detail: "Pixel all landing pages. Retarget visitors who didn't convert with social proof ads (testimonials, case studies). Email retargeting via Typeform partial completions." },
      { label: "Test Fast, Scale Winners", detail: "Start with $500–$1,000/month per campaign. Kill underperformers at 2 weeks. Scale winners at 4x. Never commit large budget without 2-week test data." },
    ],
    sfTracking: [
      "UTM: source, medium, campaign, content, term — all mapped to SF Lead",
      "Campaign ROI: cost-per-lead, cost-per-opportunity, cost-per-install",
      "Landing page performance tracked via Salesforce Campaign Member",
      "A/B test results documented in Campaign Notes",
    ],
    kpis: [
      { label: "Cost Per Lead (Digital)", target: "< $50" },
      { label: "Cost Per Install (Digital)", target: "< $200" },
      { label: "Landing Page CVR", target: "> 8%" },
      { label: "ROAS (Return on Ad Spend)", target: "> 5x" },
    ],
  },
  {
    id: "influencer",
    title: "Influencer & Consumer",
    subtitle: "Commission-based product placement with authentic advocates — not vanity metrics",
    icon: Star,
    color: "#F472B6",
    tactics: [
      { label: "Product Placement with Key Influencers", detail: "Seed ZeroWheels with 15–20 micro and mid-tier influencers in golf, pickleball, fitness, and longevity. Not for follower count — for network access and authentic use." },
      { label: "Commission Program ($250/unit)", detail: "Each influencer gets a unique promo code. $250 commission per unit sold. Tracked via Salesforce custom object. Monthly payouts. Performance reviewed quarterly." },
      { label: "Network Activation", detail: "Influencers leverage their private networks (club members, training clients, social followers) to drive demos and sales. This is a sales partnership, not just a media buy." },
      { label: "Consumer Direct (Selective)", detail: "Consumer direct is not the primary focus at this stage. Target high-intent, high-value consumers: serious golfers, pickleball players, and longevity-focused individuals. Average order value $1,000." },
      { label: "Social Proof Engine", detail: "Aggregate influencer content, testimonials, and user-generated content into a social proof library. Use in paid ads, landing pages, and sales decks." },
    ],
    sfTracking: [
      "Influencer as Partner Account in Salesforce",
      "Lead Source: 'Influencer — [Name] — [Code]'",
      "Commission object: code used, units sold, payout status",
      "Consumer Lead Source: 'Consumer Direct — [Channel]'",
    ],
    kpis: [
      { label: "Active Influencer Partners", target: "20 by Q2" },
      { label: "Units Sold via Influencer Codes", target: "100 by Q3" },
      { label: "Commission Paid Out", target: "Tracked monthly" },
      { label: "Consumer Direct Units", target: "50 by Q4" },
    ],
  },
];

// ─── LOB Playbook data ───────────────────────────────────────────────────────
interface LobPlaybook {
  name: string;
  icon: typeof Building2;
  color: string;
  priority: "Primary" | "Secondary" | "Opportunistic";
  strategy: string;
  entryPoint: string;
  keyContacts: string;
  channels: string[];
  sfNotes: string;
  targetUnits: number;
}

const lobPlaybooks: LobPlaybook[] = [
  {
    name: "Private Clubs",
    icon: Building2,
    color: "#C9A962",
    priority: "Primary",
    strategy: "Golf & country clubs are the highest-priority LOB. WEG has existing relationships and ZeroWheel's rotational core training is a perfect fit for golf performance. Target fitness directors and GMs at CMAA-member clubs. Sponsor CMAA regional shows. Build golf-specific training programs with club trainers. Expand to city clubs, yacht clubs, and athletic clubs in Y2.",
    entryPoint: "Fitness Director / GM via CMAA relationships and direct outreach",
    keyContacts: "CMAA members, fitness directors, head golf pros, club GMs",
    channels: ["B2B Direct", "CMAA Sponsorship", "Thought Leadership", "Trainer Partnerships"],
    sfNotes: "Account LOB = 'Private Clubs'. Sub-LOB field. CMAA member flag. Relationship owner assigned. Demo date tracked.",
    targetUnits: 300,
  },
  {
    name: "Amenities",
    icon: Home,
    color: "#00C9A7",
    priority: "Primary",
    strategy: "Maritime (cruise ships) is a standout opportunity given WEG's existing relationships. In-room wellness and fitness center upgrades on cruise ships represent high-volume, high-value deals. Destination resorts and city hotels follow. Multi-family and condo amenity packages are a longer sales cycle but high volume in Y2.",
    entryPoint: "Cruise line wellness/spa operators and hotel fitness procurement via WEG relationships",
    keyContacts: "Cruise line F&B/wellness VPs, hotel fitness directors, resort GMs, HOA managers",
    channels: ["B2B Direct (WEG Relationships)", "Partnership Agreements", "B2B Direct Sales"],
    sfNotes: "Account LOB = 'Amenities'. Sub-LOB: Maritime / Destination Resort / City Hotel / Multi-Family. Cruise deals tracked as enterprise accounts.",
    targetUnits: 250,
  },
  {
    name: "Commercial Clubs",
    icon: Dumbbell,
    color: "#A78BFA",
    priority: "Secondary",
    strategy: "National and regional key accounts (large gym chains) are high-volume but long sales cycles with procurement committees. Boutique studios are faster to close and great for social proof. Target boutique studios first for quick wins and case studies, then use those to approach national accounts.",
    entryPoint: "Boutique studio owners direct; national accounts via VP of Fitness/Procurement",
    keyContacts: "Studio owners, regional fitness directors, national account procurement",
    channels: ["B2B Direct", "Digital / LinkedIn", "Influencer (studio trainers)"],
    sfNotes: "Account LOB = 'Commercial Clubs'. National Key Account flag for enterprise deals. Boutique Studio fast-track pipeline.",
    targetUnits: 150,
  },
  {
    name: "Sports Performance",
    icon: Trophy,
    color: "#F59E0B",
    priority: "Primary",
    strategy: "Sports performance is a credibility anchor. Placing ZeroWheels with NFL/NBA/NHL sports agencies and Exos-style facilities creates powerful proof points. Target trainers who work with professional athletes — their endorsement carries enormous weight with private club members. Golf and pickleball performance is the immediate focus.",
    entryPoint: "Sports performance trainers, strength & conditioning coaches, sports agency wellness staff",
    keyContacts: "S&C coaches, sports agency wellness directors, Exos facility managers",
    channels: ["Thought Leadership", "Direct Outreach", "Trainer Partnerships", "Product Placement"],
    sfNotes: "Account LOB = 'Sports Performance'. Athlete endorsement flag. Trainer advocate tracking. Case study pipeline.",
    targetUnits: 100,
  },
  {
    name: "Medical",
    icon: Stethoscope,
    color: "#34D399",
    priority: "Secondary",
    strategy: "Physical therapists and hospital-supported wellness centers are a natural fit for ZeroWheel's core strength and injury prevention positioning. Longer sales cycles but high credibility and recurring revenue potential. Target PT practices first — smaller decisions, faster closes, strong referral networks.",
    entryPoint: "Physical therapist practice owners and hospital wellness program directors",
    keyContacts: "PT practice owners, hospital wellness VPs, orthopedic surgeons (as referrers)",
    channels: ["B2B Direct", "Thought Leadership (clinical content)", "Medical Conference Presence"],
    sfNotes: "Account LOB = 'Medical'. PT Practice vs Hospital flag. Clinical outcome tracking for case studies.",
    targetUnits: 80,
  },
  {
    name: "Corporate Wellness",
    icon: Briefcase,
    color: "#F472B6",
    priority: "Opportunistic",
    strategy: "Corporate wellness is a large market but requires navigating HR and procurement. Best approach is through existing relationships at mid-size companies where a wellness champion can drive the decision. Not a primary focus in Y1 — opportunistic when inbound comes through.",
    entryPoint: "HR/Benefits directors or C-suite wellness champions via referral",
    keyContacts: "HR directors, Chief People Officers, corporate wellness program managers",
    channels: ["Referral / WOM", "LinkedIn Outreach", "B2B Direct (when inbound)"],
    sfNotes: "Account LOB = 'Corporate Wellness'. Inbound flag. Referral source tracked.",
    targetUnits: 60,
  },
  {
    name: "Public Authorities",
    icon: Landmark,
    color: "#60A5FA",
    priority: "Opportunistic",
    strategy: "Parks & Rec, YMCA, and JCC represent high volume but low ASP pressure and long procurement cycles. Police and fire are niche but have strong union-driven wellness budgets. Opportunistic — pursue when inbound or when a champion emerges. Not a Y1 priority.",
    entryPoint: "Parks & Rec directors, YMCA fitness directors, union wellness reps",
    keyContacts: "Municipal fitness directors, YMCA regional directors, union benefits managers",
    channels: ["B2B Direct (when inbound)", "Government RFP monitoring"],
    sfNotes: "Account LOB = 'Public Authorities'. Procurement cycle flag. RFP tracking.",
    targetUnits: 30,
  },
  {
    name: "Consumer",
    icon: UserCircle,
    color: "#FB923C",
    priority: "Secondary",
    strategy: "Consumer direct is not the primary focus given startup budget constraints. Target high-intent, high-value consumers: serious golfers aged 45–65, pickleball enthusiasts, and longevity-focused individuals. Drive via influencer codes, landing pages, and organic content. $1,000 ASP requires strong proof points — use club and sports performance case studies as social proof.",
    entryPoint: "Landing pages, influencer codes, organic content, word of mouth",
    keyContacts: "Individual consumers via digital channels and influencer networks",
    channels: ["Influencer Network", "Digital / Meta", "Organic Content", "WOM"],
    sfNotes: "Lead Source = 'Consumer Direct'. Influencer code tracked. E-commerce order integration.",
    targetUnits: 30,
  },
];

// ─── Salesforce architecture ─────────────────────────────────────────────────
const sfObjects = [
  {
    name: "Lead",
    color: "#C9A962",
    icon: Users,
    fields: ["Lead Source (channel + sub-channel)", "UTM Source / Medium / Campaign", "LOB (macro + sub)", "Territory / Rep Owner", "FinAI Intent Score", "Typeform Completion Status", "Lead Score (auto-calculated)"],
    automations: ["Auto-assign to rep by territory on creation", "FinAI score triggers priority flag", "5-min rep notification via Slack + email", "SLA breach alert at 24h no contact"],
  },
  {
    name: "Account",
    color: "#00C9A7",
    icon: Building2,
    fields: ["LOB (macro + sub-macro)", "Account Tier (Enterprise / Mid / SMB)", "CMAA Member flag", "Relationship Owner", "Partner flag + Partner Tier", "Annual Revenue estimate", "Decision-Maker contacts linked"],
    automations: ["Duplicate detection on creation", "Relationship score auto-updated on activity", "Quarterly review task auto-created"],
  },
  {
    name: "Opportunity",
    color: "#A78BFA",
    icon: TrendingUp,
    fields: ["Stage (7-stage pipeline)", "Close Date", "Amount (units × $1,000)", "Lead Source (inherited)", "LOB (inherited)", "Rep Owner + Team", "Next Step (required field)", "Loss Reason (required on Closed Lost)"],
    automations: ["Stage change triggers next-step task", "Stale opportunity alert (14 days no activity)", "Forecast category auto-set by stage", "Win/Loss survey triggered on close"],
  },
  {
    name: "Campaign",
    color: "#F59E0B",
    icon: Megaphone,
    fields: ["Channel (B2B / Digital / Influencer / Event)", "UTM Campaign value", "Budget + Actual Spend", "Leads Generated", "Opportunities Created", "Revenue Attributed", "ROI (auto-calculated)"],
    automations: ["Lead auto-added to campaign on UTM match", "Weekly performance report to marketing", "Budget alert at 80% spend"],
  },
  {
    name: "Partner (Custom)",
    color: "#F472B6",
    icon: Handshake,
    fields: ["Partner Type (Influencer / Alliance / Referral)", "Promo Code", "Units Sold via Code", "Commission Rate ($250/unit)", "Total Commission Owed", "Payout Status", "Partner Tier"],
    automations: ["Commission auto-calculated on Opp close", "Monthly payout report generated", "Partner performance alert if 0 referrals in 30 days"],
  },
];

const sfPipeline = [
  { stage: "Prospect", prob: 10, color: "#555" },
  { stage: "Contacted", prob: 20, color: "#C9A962" },
  { stage: "Qualified", prob: 35, color: "#B8963E" },
  { stage: "Demo Completed", prob: 50, color: "#A07830" },
  { stage: "Proposal Sent", prob: 65, color: "#8B6020" },
  { stage: "Negotiation", prob: 80, color: "#764808" },
  { stage: "Closed Won", prob: 100, color: "#00C9A7" },
];

// ─── Accountability cadence ──────────────────────────────────────────────────
const cadenceItems = [
  {
    freq: "Daily",
    color: "#C9A962",
    icon: Activity,
    items: [
      "Each rep reviews their Salesforce task queue (auto-generated by pipeline stage changes)",
      "FinAI lead alerts actioned within 2 hours of notification",
      "New leads contacted within 24-hour SLA — tracked via Salesforce report",
      "Activity logged same-day: calls, emails, demos (required field enforcement)",
    ],
  },
  {
    freq: "Weekly",
    color: "#00C9A7",
    icon: Calendar,
    items: [
      "Team pipeline review: all Opportunities reviewed by stage, next step, and close date",
      "Stale deal report: any Opportunity with no activity in 7 days flagged for manager review",
      "Channel performance: leads by source, conversion rates, campaign spend vs leads",
      "Rep leaderboard: units sold, pipeline value, activity volume — shared with team",
    ],
  },
  {
    freq: "Monthly",
    color: "#A78BFA",
    icon: BarChart3,
    items: [
      "Revenue vs budget review: actual installs vs $1M target, by LOB and channel",
      "Win/loss analysis: closed deals reviewed for patterns — what's working, what isn't",
      "Partner performance: influencer codes, referral partners — commissions paid, pipeline generated",
      "Forecast update: 30/60/90-day pipeline weighted by stage probability",
    ],
  },
  {
    freq: "Quarterly",
    color: "#F59E0B",
    icon: RefreshCw,
    items: [
      "Strategic review: LOB performance vs plan, channel ROI, territory adjustments",
      "ICP refinement: update ideal customer profile based on closed-won patterns",
      "Campaign budget reallocation: kill underperformers, scale winners",
      "Salesforce data quality audit: completeness, accuracy, duplicate cleanup",
    ],
  },
];

// ─── Required SF fields (accountability) ─────────────────────────────────────
const requiredFields = [
  { object: "Lead", field: "Lead Source", reason: "Attribution integrity — every lead must be traceable to a channel" },
  { object: "Lead", field: "LOB (Macro + Sub)", reason: "Territory routing and LOB performance reporting" },
  { object: "Lead", field: "UTM Parameters", reason: "Digital campaign ROI measurement" },
  { object: "Opportunity", field: "Next Step", reason: "Pipeline hygiene — no stale deals without a clear next action" },
  { object: "Opportunity", field: "Close Date", reason: "Forecasting accuracy — must be realistic, reviewed weekly" },
  { object: "Opportunity", field: "Loss Reason", reason: "Win/loss analysis — required on every Closed Lost deal" },
  { object: "Activity", field: "Call / Email Outcome", reason: "Sales activity quality tracking, not just volume" },
  { object: "Partner", field: "Promo Code Used", reason: "Commission accuracy and influencer attribution" },
];

export default function ZWMarketingInfrastructure() {
  const [activeChannel, setActiveChannel] = useState<string | null>(null);
  const [activeLob, setActiveLob] = useState<number | null>(null);
  const [activeSfObj, setActiveSfObj] = useState<number | null>(null);

  const activeChannelData = channelDetails.find(c => c.id === activeChannel);

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* ── HERO ── */}
      <DarkHero
        eyebrow="ZEROWHEEL · MARKETING INFRASTRUCTURE"
        title="Go-To-Market Infrastructure"
        description="A fully integrated acquisition engine — from first impression to installed unit — built on Salesforce, Typeform, and FinAI, with clear channel ownership, LOB-specific playbooks, and team accountability at every stage."
        stats={[
          { value: "8", label: "Macro LOBs" },
          { value: "6", label: "Acquisition Channels" },
          { value: "1,000", label: "2026 Install Target" },
          { value: "$1M", label: "Revenue Goal" },
        ]}
      />

      {/* ── ACQUISITION FUNNEL ── */}
      <section id="funnel" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <p className="font-mono text-xs tracking-[0.2em] text-[#C9A962] mb-3">ACQUISITION FUNNEL</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Channel Acquisition Engine
            </h2>
            <p className="font-body text-white/50 max-w-2xl text-base leading-relaxed">
              Six distinct channels feed a single, unified funnel. Every lead — regardless of source — flows through Salesforce with full attribution, scoring, and routing. No channel operates in isolation.
            </p>
          </motion.div>

          {/* Channel inputs → Funnel */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
            {/* Left: Channel list */}
            <div className="space-y-3">
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-5">ACQUISITION CHANNELS</p>
              {funnelChannels.map((ch) => (
                <motion.button
                  key={ch.id}
                  onClick={() => setActiveChannel(activeChannel === channelDetails.find(c => c.title.includes(ch.label.split(" ")[0]))?.id ? null : channelDetails.find(c => c.title.includes(ch.label.split(" ")[0]))?.id ?? null)}
                  whileHover={{ x: 4 }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ch.color + "20" }}>
                    <ch.icon className="w-4 h-4" style={{ color: ch.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-medium text-white/80">{ch.label}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono text-xs font-bold" style={{ color: ch.color }}>{ch.pct}%</span>
                    <p className="font-mono text-[9px] text-white/20">of pipeline</p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right: Funnel stages */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-5">FUNNEL STAGES · 2026 TARGETS</p>
              <div className="space-y-2">
                {funnelStages.map((stage, i) => (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs tracking-wider text-white/60">{stage.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-body text-xs text-white/30">{stage.desc}</span>
                        <span className="font-mono text-sm font-bold text-white">{stage.count}</span>
                      </div>
                    </div>
                    <div className="h-8 rounded bg-white/[0.03] overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stage.width }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded flex items-center px-3"
                        style={{ backgroundColor: stage.color + (i === funnelStages.length - 1 ? "FF" : "60") }}
                      >
                        <span className="font-mono text-[10px] font-bold text-black/70">{stage.label}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Funnel summary */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                  <p className="font-mono text-xs text-white/30 mb-1">LEAD → INSTALL</p>
                  <p className="font-display text-xl font-bold text-[#C9A962]">28.6%</p>
                  <p className="font-mono text-[9px] text-white/20">conversion rate</p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                  <p className="font-mono text-xs text-white/30 mb-1">AVG DEAL SIZE</p>
                  <p className="font-display text-xl font-bold text-[#C9A962]">$1,000</p>
                  <p className="font-mono text-[9px] text-white/20">per unit</p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                  <p className="font-mono text-xs text-white/30 mb-1">REVENUE GOAL</p>
                  <p className="font-display text-xl font-bold text-[#C9A962]">$1M</p>
                  <p className="font-mono text-[9px] text-white/20">2026 target</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHANNEL DETAIL PANEL ── */}
      <AnimatePresence>
        {activeChannelData && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[#0D0D0D] border-t border-b border-white/5"
          >
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] mb-2" style={{ color: activeChannelData.color }}>CHANNEL DEEP-DIVE</p>
                  <h3 className="font-display text-2xl font-bold text-white">{activeChannelData.title}</h3>
                  <p className="font-body text-white/40 text-sm mt-1">{activeChannelData.subtitle}</p>
                </div>
                <button onClick={() => setActiveChannel(null)} className="text-white/30 hover:text-white/60 transition-colors">
                  <ChevronUp className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tactics */}
                <div className="md:col-span-2 space-y-4">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-white/30">TACTICS</p>
                  {activeChannelData.tactics.map((t, i) => (
                    <div key={i} className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                      <p className="font-body text-sm font-semibold text-white/80 mb-1">{t.label}</p>
                      <p className="font-body text-xs text-white/40 leading-relaxed">{t.detail}</p>
                    </div>
                  ))}
                </div>
                {/* SF Tracking + KPIs */}
                <div className="space-y-5">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-3">SALESFORCE TRACKING</p>
                    <div className="space-y-2">
                      {activeChannelData.sfTracking.map((s, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Database className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: activeChannelData.color }} />
                          <p className="font-body text-xs text-white/40 leading-relaxed">{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-3">KEY METRICS</p>
                    <div className="space-y-2">
                      {activeChannelData.kpis.map((k, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded bg-white/[0.03]">
                          <p className="font-body text-xs text-white/50">{k.label}</p>
                          <p className="font-mono text-xs font-bold" style={{ color: activeChannelData.color }}>{k.target}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── CHANNEL STRATEGY CARDS ── */}
      <section id="channels" className="py-20 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <p className="font-mono text-xs tracking-[0.2em] text-[#C9A962] mb-3">CHANNEL STRATEGY</p>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Five Channels. One System.</h2>
            <p className="font-body text-white/50 max-w-2xl text-base leading-relaxed">
              Each channel has a distinct motion, ownership, and tracking protocol in Salesforce. Click any channel above to expand the full playbook.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channelDetails.map((ch, i) => (
              <motion.button
                key={ch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                onClick={() => setActiveChannel(activeChannel === ch.id ? null : ch.id)}
                className="text-left p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ch.color + "20" }}>
                    <ch.icon className="w-5 h-5" style={{ color: ch.color }} />
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-1">{ch.title}</h3>
                <p className="font-body text-xs text-white/40 leading-relaxed">{ch.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {ch.kpis.slice(0, 2).map((k, j) => (
                    <span key={j} className="font-mono text-[9px] px-2 py-0.5 rounded-full border" style={{ borderColor: ch.color + "40", color: ch.color }}>
                      {k.label}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOB PLAYBOOKS ── */}
      <section id="lob-strategy" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <p className="font-mono text-xs tracking-[0.2em] text-[#C9A962] mb-3">LOB PLAYBOOKS</p>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Line-of-Business Strategies</h2>
            <p className="font-body text-white/50 max-w-2xl text-base leading-relaxed">
              Each of the 8 macro LOBs has a distinct entry strategy, key contacts, channel mix, and Salesforce tracking protocol. Priority tiers guide where the team spends its time in Y1.
            </p>
          </motion.div>

          {/* Priority legend */}
          <div className="flex gap-4 mb-8">
            {(["Primary", "Secondary", "Opportunistic"] as const).map(p => (
              <div key={p} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${p === "Primary" ? "bg-[#C9A962]" : p === "Secondary" ? "bg-[#00C9A7]" : "bg-white/20"}`} />
                <span className="font-mono text-[10px] text-white/40">{p}</span>
              </div>
            ))}
          </div>

          {/* LOB grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lobPlaybooks.map((lob, i) => (
              <motion.div
                key={lob.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => setActiveLob(activeLob === i ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: lob.color + "20" }}>
                    <lob.icon className="w-5 h-5" style={{ color: lob.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-display text-base font-semibold text-white">{lob.name}</h3>
                      <span className={`font-mono text-[9px] px-2 py-0.5 rounded-full ${
                        lob.priority === "Primary" ? "bg-[#C9A962]/15 text-[#C9A962]" :
                        lob.priority === "Secondary" ? "bg-[#00C9A7]/15 text-[#00C9A7]" :
                        "bg-white/5 text-white/30"
                      }`}>{lob.priority}</span>
                    </div>
                    <p className="font-mono text-[10px] text-white/30">{lob.targetUnits} units target · ${(lob.targetUnits * 1000).toLocaleString()} revenue</p>
                  </div>
                  <div className="flex-shrink-0">
                    {activeLob === i ? <ChevronUp className="w-4 h-4 text-white/30" /> : <ChevronDown className="w-4 h-4 text-white/30" />}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {activeLob === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 space-y-4 border-t border-white/5 pt-4">
                        <p className="font-body text-sm text-white/50 leading-relaxed">{lob.strategy}</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="font-mono text-[9px] tracking-[0.15em] text-white/25 mb-1">ENTRY POINT</p>
                            <p className="font-body text-xs text-white/50">{lob.entryPoint}</p>
                          </div>
                          <div>
                            <p className="font-mono text-[9px] tracking-[0.15em] text-white/25 mb-1">KEY CONTACTS</p>
                            <p className="font-body text-xs text-white/50">{lob.keyContacts}</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-mono text-[9px] tracking-[0.15em] text-white/25 mb-2">CHANNELS</p>
                          <div className="flex flex-wrap gap-1">
                            {lob.channels.map((ch, j) => (
                              <span key={j} className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">{ch}</span>
                            ))}
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                          <p className="font-mono text-[9px] tracking-[0.15em] text-white/25 mb-1">SALESFORCE NOTES</p>
                          <p className="font-body text-xs text-white/40">{lob.sfNotes}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* LOB unit target summary bar */}
          <div className="mt-10 p-6 rounded-xl border border-white/5 bg-white/[0.02]">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-5">UNIT TARGET DISTRIBUTION BY LOB</p>
            <div className="space-y-3">
              {lobPlaybooks.map((lob) => (
                <div key={lob.name} className="flex items-center gap-4">
                  <div className="w-28 flex-shrink-0">
                    <p className="font-mono text-[10px] text-white/40 truncate">{lob.name}</p>
                  </div>
                  <div className="flex-1 h-5 bg-white/[0.03] rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(lob.targetUnits / 1000) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full rounded"
                      style={{ backgroundColor: lob.color }}
                    />
                  </div>
                  <div className="w-20 text-right flex-shrink-0">
                    <span className="font-mono text-xs font-bold text-white">{lob.targetUnits}</span>
                    <span className="font-mono text-[9px] text-white/30"> units</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
              <p className="font-mono text-xs text-white/30">Total 2026 Target</p>
              <p className="font-display text-xl font-bold text-[#C9A962]">1,000 units · $1,000,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SALESFORCE ARCHITECTURE ── */}
      <section id="salesforce" className="py-20 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <p className="font-mono text-xs tracking-[0.2em] text-[#C9A962] mb-3">SALESFORCE ARCHITECTURE</p>
            <h2 className="font-display text-3xl font-bold text-white mb-4">The System of Record</h2>
            <p className="font-body text-white/50 max-w-2xl text-base leading-relaxed">
              Salesforce is the single source of truth for every lead, account, opportunity, campaign, and partner relationship. Every channel feeds into it. Every rep is accountable to it. Every leadership report comes out of it.
            </p>
          </motion.div>

          {/* SF Objects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {sfObjects.map((obj, i) => (
              <motion.div
                key={obj.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setActiveSfObj(activeSfObj === i ? null : i)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: obj.color + "20" }}>
                    <obj.icon className="w-4 h-4" style={{ color: obj.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-sm font-semibold text-white">{obj.name}</p>
                    <p className="font-mono text-[9px] text-white/30">{obj.fields.length} tracked fields</p>
                  </div>
                  {activeSfObj === i ? <ChevronUp className="w-4 h-4 text-white/30" /> : <ChevronDown className="w-4 h-4 text-white/30" />}
                </button>
                <AnimatePresence>
                  {activeSfObj === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-white/5 pt-3 space-y-3">
                        <div>
                          <p className="font-mono text-[9px] tracking-[0.15em] text-white/25 mb-2">KEY FIELDS</p>
                          <div className="space-y-1">
                            {obj.fields.map((f, j) => (
                              <div key={j} className="flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: obj.color }} />
                                <p className="font-body text-xs text-white/40">{f}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="font-mono text-[9px] tracking-[0.15em] text-white/25 mb-2">AUTOMATIONS</p>
                          <div className="space-y-1">
                            {obj.automations.map((a, j) => (
                              <div key={j} className="flex items-start gap-2">
                                <Zap className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: obj.color }} />
                                <p className="font-body text-xs text-white/40">{a}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* 7-Stage Pipeline */}
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] mb-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-5">7-STAGE OPPORTUNITY PIPELINE</p>
            <div className="flex items-center gap-1 overflow-x-auto pb-2">
              {sfPipeline.map((stage, i) => (
                <div key={stage.stage} className="flex items-center gap-1 flex-shrink-0">
                  <div className="text-center">
                    <div
                      className="px-3 py-2 rounded-lg text-center min-w-[90px]"
                      style={{ backgroundColor: stage.color + "20", borderColor: stage.color + "40", border: "1px solid" }}
                    >
                      <p className="font-mono text-[9px] font-bold" style={{ color: stage.color }}>{stage.prob}%</p>
                      <p className="font-body text-[10px] text-white/60 mt-0.5 leading-tight">{stage.stage}</p>
                    </div>
                  </div>
                  {i < sfPipeline.length - 1 && <ArrowRight className="w-3 h-3 text-white/15 flex-shrink-0" />}
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-white/25 mt-3">Each stage change auto-creates a next-step task. Stale deals (14 days no activity) trigger manager alerts. Loss Reason is required on every Closed Lost deal.</p>
          </div>

          {/* Required fields table */}
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-5">
              <Shield className="w-4 h-4 text-[#C9A962]" />
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/30">REQUIRED FIELDS — DATA INTEGRITY ENFORCEMENT</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="font-mono text-[9px] tracking-[0.15em] text-white/25 pb-3 pr-4">OBJECT</th>
                    <th className="font-mono text-[9px] tracking-[0.15em] text-white/25 pb-3 pr-4">REQUIRED FIELD</th>
                    <th className="font-mono text-[9px] tracking-[0.15em] text-white/25 pb-3">WHY IT MATTERS</th>
                  </tr>
                </thead>
                <tbody>
                  {requiredFields.map((f, i) => (
                    <tr key={i} className="border-b border-white/[0.03]">
                      <td className="py-2.5 pr-4">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#C9A962]/10 text-[#C9A962]">{f.object}</span>
                      </td>
                      <td className="py-2.5 pr-4">
                        <p className="font-body text-xs text-white/60">{f.field}</p>
                      </td>
                      <td className="py-2.5">
                        <p className="font-body text-xs text-white/35">{f.reason}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ACCOUNTABILITY ── */}
      <section id="accountability" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <p className="font-mono text-xs tracking-[0.2em] text-[#C9A962] mb-3">TEAM ACCOUNTABILITY</p>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Cadence & Accountability Framework</h2>
            <p className="font-body text-white/50 max-w-2xl text-base leading-relaxed">
              A system is only as good as the discipline behind it. This cadence ensures every rep, manager, and channel is reviewed at the right frequency — daily for activity, weekly for pipeline, monthly for revenue, quarterly for strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cadenceItems.map((item, i) => (
              <motion.div
                key={item.freq}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.color + "20" }}>
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-bold" style={{ color: item.color }}>{item.freq}</p>
                    <p className="font-mono text-[9px] text-white/25">Review Cadence</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {item.items.map((point, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                      <p className="font-body text-xs text-white/50 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA / summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-8 rounded-xl border border-[#C9A962]/20 bg-[#C9A962]/[0.04] text-center"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#C9A962] mb-3">THE BOTTOM LINE</p>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Every lead is tracked. Every rep is accountable. Every dollar is attributed.
            </h3>
            <p className="font-body text-white/40 max-w-2xl mx-auto text-sm leading-relaxed">
              This infrastructure gives leadership real-time visibility into what's working and what isn't — by channel, by LOB, by rep, and by campaign. The goal is not just to hit 1,000 units in 2026, but to build the data foundation that makes 5,000 units in 2027 a predictable outcome.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
