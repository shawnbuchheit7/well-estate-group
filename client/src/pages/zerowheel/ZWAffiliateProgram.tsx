/*
 * ZeroWheel Affiliate & Commission Program
 * A dedicated, comprehensive page covering the full affiliate/influencer/partner
 * commission program. Two tracks: Influencer/Athlete and Facility/Partner.
 * Inspired by Rogue Fitness (simple affiliate tracking) and Eight Sleep (high-ticket
 * referral with fraud prevention and tiered structure).
 *
 * Design: Dark luxury, #0A0A0A bg, gold/teal/purple accents
 * Sections:
 *   1. Hero (program overview + key numbers)
 *   2. Program Architecture (how the two tracks work)
 *   3. Commission Structure (tiers, math, earning scenarios)
 *   4. How It Works (step-by-step from signup to payout)
 *   5. Tracking & Attribution (tech stack, unique codes, cookie, SF integration)
 *   6. Named Launch Partners (anchor influencers + athlete targets)
 *   7. Onboarding & Enablement (what partners receive)
 *   8. Program Terms & Conditions
 *   9. Program Economics (unit economics, ROI modeling)
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, DollarSign, Target, Award, Star, Handshake,
  ArrowRight, ArrowDown, CheckCircle2, ChevronDown, ChevronUp,
  Globe, Zap, Mail, Phone, BarChart3, Calendar, Layers,
  Gift, Link2, Shield, FileText, TrendingUp, Percent,
  UserPlus, Megaphone, Building2, Dumbbell, Trophy,
  Clock, Send, Eye, Lock, AlertTriangle, CreditCard,
  Briefcase, Hash, MousePointer, ShoppingCart, PieChart,
} from "lucide-react";
import Layout from "@/components/Layout";
import DarkHero from "@/components/DarkHero";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Colors ──────────────────────────────────────────────────────────────────
const GOLD = "#C9A962";
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
  { id: "architecture", label: "Program Tracks" },
  { id: "commission", label: "Commission" },
  { id: "how-it-works", label: "How It Works" },
  { id: "tracking", label: "Tracking" },
  { id: "partners", label: "Launch Partners" },
  { id: "onboarding", label: "Onboarding" },
  { id: "terms", label: "Terms" },
  { id: "economics", label: "Economics" },
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

function StatBlock({ value, label, color = GOLD }: { value: string; label: string; color?: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-2xl md:text-3xl font-bold" style={{ color }}>{value}</p>
      <p className="font-mono text-[9px] uppercase tracking-wider text-white/30 mt-1">{label}</p>
    </div>
  );
}

// ─── Expandable Card ─────────────────────────────────────────────────────────
function ExpandableSection({ title, subtitle, icon: Icon, color, children }: {
  title: string; subtitle: string; icon: React.ElementType; color: string; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      className="rounded-2xl border overflow-hidden"
      style={{ background: CARD_BG, borderColor: open ? `${color}30` : CARD_BORDER }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display text-base font-semibold text-white">{title}</p>
          <p className="font-mono text-[10px] mt-0.5" style={{ color }}>{subtitle}</p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-white/30" /> : <ChevronDown className="w-4 h-4 text-white/30" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t" style={{ borderColor: `${color}10` }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════════════════════════════════════════════════════════
export default function ZWAffiliateProgram() {
  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* ═══ HERO ═══ */}
      <div id="hero">
        <DarkHero
          eyebrow="ZeroWheel Affiliate & Commission Program"
          title="Turn Believers Into Revenue Partners"
          description="A structured, two-track commission program designed for a $1,000 product. Not spray-and-pray influencer marketing. Every partner gets a unique code, a Salesforce record, monthly reporting, and tiered bonuses that reward real volume. Modeled after the best in high-ticket affiliate programs (Rogue Fitness, Eight Sleep) but built specifically for ZeroWheel's B2B and DTC hybrid model."
          stats={[
            { value: "$250", label: "Base Commission / Unit" },
            { value: "25%", label: "Commission Rate" },
            { value: "$6,000", label: "Max Earning / 50 Units" },
            { value: "2 Tracks", label: "Influencer + Facility" },
          ]}
        />
      </div>

      {/* ═══ PROGRAM ARCHITECTURE ═══ */}
      <section id="architecture" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Two-Track Program Architecture"
            title="One Program. Two Distinct Partner Types."
            description="Eight Sleep separates referral (individuals) from affiliate (businesses). We do the same. Track 1 is for influencers, athletes, and trainers who sell through their personal networks and social channels. Track 2 is for facilities, clubs, and hospitality partners who drive volume through their operations. Different commission structures, different onboarding, different expectations."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Track 1: Influencer/Athlete */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="rounded-2xl border p-8 relative overflow-hidden"
              style={{ background: CARD_BG, borderColor: `${GOLD}25` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${GOLD}, ${ORANGE})` }} />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${GOLD}15` }}>
                  <Star className="w-6 h-6" style={{ color: GOLD }} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Track 1: Influencer & Athlete</h3>
                  <p className="font-mono text-[10px]" style={{ color: GOLD }}>Individual Partners</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { label: "Who", detail: "Fitness influencers, golf/pickleball trainers, sports performance coaches, wellness thought leaders, athletes with engaged followings" },
                  { label: "How They Sell", detail: "Unique promo code shared via social media, email lists, in-person training sessions, YouTube/podcast content, and direct client recommendations" },
                  { label: "Commission", detail: "$250 flat per unit sold via their unique code. Plus tiered volume bonuses at 10, 25, and 50 unit milestones" },
                  { label: "Payout", detail: "Monthly via PayPal or direct deposit. 45-day hold on new sales for return window clearance (similar to Eight Sleep's 60-day hold)" },
                  { label: "Tracking", detail: "Unique alphanumeric promo code (e.g., ZEROWHEEL-CLARK) + UTM-tagged landing page link. Both tracked in Salesforce Partner Commission object" },
                  { label: "Minimum Threshold", detail: "$250 minimum balance before payout (1 unit). No cap on annual earnings" },
                  { label: "Exclusivity", detail: "Non-exclusive. Partners may promote competing products. However, Anchor tier partners may negotiate exclusivity for higher commission rates" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider w-24 flex-shrink-0 pt-0.5" style={{ color: GOLD }}>{item.label}</span>
                    <p className="font-body text-[12px] text-white/50 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <p className="font-mono text-[9px] uppercase tracking-wider text-white/25 mb-2">Ideal Partner Profile</p>
                <div className="flex flex-wrap gap-2">
                  {["Golf Instructor", "Pickleball Coach", "Personal Trainer", "Wellness Influencer", "Sports Performance Coach", "Physical Therapist", "Longevity Advocate"].map((tag, i) => (
                    <span key={i} className="font-mono text-[9px] px-2 py-1 rounded-full" style={{ background: `${GOLD}10`, color: `${GOLD}90` }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Track 2: Facility/Partner */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="rounded-2xl border p-8 relative overflow-hidden"
              style={{ background: CARD_BG, borderColor: `${TEAL}25` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${TEAL}, ${GREEN})` }} />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${TEAL}15` }}>
                  <Building2 className="w-6 h-6" style={{ color: TEAL }} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Track 2: Facility & Channel Partner</h3>
                  <p className="font-mono text-[10px]" style={{ color: TEAL }}>B2B / Institutional Partners</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { label: "Who", detail: "Country clubs, cruise lines, hotels/resorts, sports performance centers, wellness facilities, spa operators, gym chains, and management companies (Troon, Club Corp, One Spa World)" },
                  { label: "How They Sell", detail: "In-facility product placement, staff recommendations, in-room wellness programs, member wellness packages, retail floor displays, and bundled membership add-ons" },
                  { label: "Commission", detail: "Tiered by volume commitment. 5+ units: $200/unit. 15+ units: $175/unit + $1,000 bonus. 50+ units: $150/unit + $5,000 bonus + co-marketing fund" },
                  { label: "Payout", detail: "Net 30 invoice via ACH or wire transfer. Facilities submit monthly sales reports reconciled against Salesforce records" },
                  { label: "Tracking", detail: "Facility-specific promo code + dedicated landing page (e.g., zerowheel.com/troon). Bulk orders tracked via Salesforce Account with child Opportunity records per location" },
                  { label: "Minimum Commitment", detail: "5 units per quarter to maintain active partner status. Below threshold for 2 consecutive quarters triggers partner review" },
                  { label: "Exclusivity", detail: "Territory-based exclusivity available for Tier 1 partners committing to 50+ units annually. Prevents competing ZeroWheel partners in same geographic market" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider w-24 flex-shrink-0 pt-0.5" style={{ color: TEAL }}>{item.label}</span>
                    <p className="font-body text-[12px] text-white/50 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <p className="font-mono text-[9px] uppercase tracking-wider text-white/25 mb-2">Ideal Partner Profile</p>
                <div className="flex flex-wrap gap-2">
                  {["Private Club", "Cruise Line", "Resort/Hotel", "Sports Performance Center", "Wellness Spa", "Management Company", "Gym Chain"].map((tag, i) => (
                    <span key={i} className="font-mono text-[9px] px-2 py-1 rounded-full" style={{ background: `${TEAL}10`, color: `${TEAL}90` }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <DarkCard className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>Track Comparison</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    {["Dimension", "Track 1: Influencer/Athlete", "Track 2: Facility/Partner"].map((h, i) => (
                      <th key={i} className="font-mono text-[9px] uppercase tracking-wider text-white/40 pb-3 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Base Commission", "$250/unit (25%)", "$150–$200/unit (15–20%)"],
                    ["Volume Bonuses", "$500 at 10, $1,500 at 25, $3,500 at 50", "$1,000 at 15, $5,000 at 50 + co-marketing"],
                    ["Payout Frequency", "Monthly (45-day hold)", "Net 30 invoice"],
                    ["Payout Method", "PayPal or Direct Deposit", "ACH or Wire Transfer"],
                    ["Minimum to Earn", "1 unit ($250)", "5 units/quarter"],
                    ["Tracking Method", "Promo code + UTM link", "Promo code + dedicated landing page"],
                    ["SF Object", "Partner Commission (Individual)", "Account → Opportunity (Institutional)"],
                    ["Contract", "Digital agreement (DocuSign)", "MSA + Partner Agreement"],
                    ["Exclusivity", "Non-exclusive (negotiable for Anchors)", "Territory exclusivity at 50+ units/year"],
                    ["Annual Cap", "No cap", "No cap"],
                    ["Tax Reporting", "1099 at $600+ (US)", "Standard B2B invoicing"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                      <td className="font-mono text-[10px] text-white/50 py-3 pr-4">{row[0]}</td>
                      <td className="font-body text-[11px] text-white/40 py-3 pr-4">{row[1]}</td>
                      <td className="font-body text-[11px] text-white/40 py-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ═══ COMMISSION STRUCTURE ═══ */}
      <section id="commission" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Commission Structure & Earning Scenarios"
            title="$250 Per Unit. Tiered Bonuses. Real Money."
            description="At a $1,000 price point, the $250 base commission (25%) is significantly more aggressive than industry benchmarks. Rogue Fitness pays roughly 5%. Eight Sleep pays approximately $100 on a $2,000+ product (also about 5%). ZeroWheel's 25% rate is designed to make partners genuinely motivated to sell, not just post. The tiered bonuses accelerate earnings for partners who commit."
          />

          {/* Track 1 Commission Tiers */}
          <DarkCard className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5" style={{ color: GOLD }} />
              <p className="font-display text-lg font-semibold text-white">Track 1: Influencer/Athlete Commission Tiers</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { tier: "Base Rate", amount: "$250", perUnit: "Per unit sold", color: GOLD, detail: "Every single ZeroWheel sold through the partner's unique promo code earns $250. No minimum volume required. First unit earns the same as the hundredth." },
                { tier: "10-Unit Milestone", amount: "+$500", perUnit: "Bonus at 10 cumulative", color: TEAL, detail: "When cumulative sales hit 10 units, a one-time $500 bonus is paid. Total earned at 10 units: $3,000 ($2,500 base + $500 bonus)." },
                { tier: "25-Unit Milestone", amount: "+$1,500", perUnit: "Bonus at 25 cumulative", color: PURPLE, detail: "At 25 cumulative units, an additional $1,500 bonus. Total earned at 25 units: $8,250 ($6,250 base + $500 + $1,500)." },
                { tier: "50-Unit Milestone", amount: "+$3,500", perUnit: "Bonus at 50 cumulative", color: GREEN, detail: "At 50 cumulative units, the top-tier $3,500 bonus. Total earned at 50 units: $18,250 ($12,500 base + $500 + $1,500 + $3,500)." },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="rounded-xl border p-5"
                  style={{ borderColor: `${t.color}20`, background: `${t.color}06` }}
                >
                  <p className="font-mono text-[9px] uppercase tracking-wider mb-3" style={{ color: t.color }}>{t.tier}</p>
                  <p className="font-display text-3xl font-bold mb-1" style={{ color: t.color }}>{t.amount}</p>
                  <p className="font-mono text-[10px] text-white/40 mb-3">{t.perUnit}</p>
                  <p className="font-body text-[11px] text-white/30 leading-relaxed">{t.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Earning Scenarios Table */}
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: GOLD }}>Earning Scenarios (Track 1)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    {["Units Sold", "Base Earnings", "Milestone Bonuses", "Total Earned", "Effective Rate"].map((h, i) => (
                      <th key={i} className="font-mono text-[9px] uppercase tracking-wider text-white/40 pb-3 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "$250", "$0", "$250", "25.0%"],
                    ["5", "$1,250", "$0", "$1,250", "25.0%"],
                    ["10", "$2,500", "$500", "$3,000", "30.0%"],
                    ["15", "$3,750", "$500", "$4,250", "28.3%"],
                    ["25", "$6,250", "$2,000", "$8,250", "33.0%"],
                    ["35", "$8,750", "$2,000", "$10,750", "30.7%"],
                    ["50", "$12,500", "$5,500", "$18,000", "36.0%"],
                    ["75", "$18,750", "$5,500", "$24,250", "32.3%"],
                    ["100", "$25,000", "$5,500", "$30,500", "30.5%"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                      {row.map((cell, j) => (
                        <td key={j} className={`py-2.5 pr-4 ${j === 3 ? "font-display font-bold" : "font-mono"} text-[11px] ${j === 3 ? "text-white/80" : "text-white/40"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DarkCard>

          {/* Track 2 Commission Tiers */}
          <DarkCard>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-5 h-5" style={{ color: TEAL }} />
              <p className="font-display text-lg font-semibold text-white">Track 2: Facility/Partner Commission Tiers</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { tier: "Standard (5–14 units)", rate: "$200/unit", annual: "Up to $2,800/yr", color: TEAL, detail: "Entry-level facility partnership. Facility receives $200 per unit sold through their code or landing page. No minimum commitment beyond 5 units/quarter to stay active." },
                { tier: "Growth (15–49 units)", rate: "$175/unit + $1K bonus", annual: "Up to $9,575/yr", color: PURPLE, detail: "Mid-tier facilities driving consistent volume. Lower per-unit rate offset by $1,000 milestone bonus at 15 units. Co-branded marketing materials included." },
                { tier: "Enterprise (50+ units)", rate: "$150/unit + $5K bonus", annual: "$12,500+/yr", color: GREEN, detail: "Top-tier partners. $150/unit + $5,000 bonus at 50 units + $2,500 annual co-marketing fund. Territory exclusivity. Dedicated account manager. Quarterly business reviews." },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="rounded-xl border p-5"
                  style={{ borderColor: `${t.color}20`, background: `${t.color}06` }}
                >
                  <p className="font-mono text-[9px] uppercase tracking-wider mb-3" style={{ color: t.color }}>{t.tier}</p>
                  <p className="font-display text-xl font-bold mb-1" style={{ color: t.color }}>{t.rate}</p>
                  <p className="font-mono text-[10px] text-white/40 mb-3">{t.annual}</p>
                  <p className="font-body text-[11px] text-white/30 leading-relaxed">{t.detail}</p>
                </motion.div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="How It Works"
            title="From Signup to Payout in 6 Steps"
            description="Modeled after Rogue Fitness's streamlined affiliate process. A partner can be live and referring business within 24 hours of signing up. The system handles tracking, attribution, fraud prevention, and payout automatically."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Partner Applies",
                icon: UserPlus,
                color: GOLD,
                detail: "Partner fills out application form (Typeform) with their name, platform/facility, audience size, content focus, and why they want to partner. Application routes to Salesforce as a Partner Lead record.",
                timeline: "Instant",
              },
              {
                step: "02",
                title: "Review & Approval",
                icon: Shield,
                color: TEAL,
                detail: "WEG team reviews application within 48 hours. Criteria: minimum 2,000 engaged followers (Track 1) or active facility with foot traffic (Track 2). Approved partners receive welcome email with DocuSign agreement.",
                timeline: "24–48 hours",
              },
              {
                step: "03",
                title: "Onboarding & Code Assignment",
                icon: Hash,
                color: PURPLE,
                detail: "Partner signs digital agreement. Salesforce creates Partner Commission record. Unique promo code generated (format: ZW-[NAME]-[4DIGIT]). Partner receives onboarding kit with product info, brand assets, talking points, and their personalized landing page URL.",
                timeline: "Same day as approval",
              },
              {
                step: "04",
                title: "Partner Promotes & Sells",
                icon: Megaphone,
                color: ORANGE,
                detail: "Partner shares their unique code and/or landing page link through their channels. Customer visits zerowheel.com, enters promo code at checkout, or arrives via the partner's UTM-tagged link. IP is logged and a 30-day attribution cookie is set.",
                timeline: "Ongoing",
              },
              {
                step: "05",
                title: "Sale Tracked & Verified",
                icon: CheckCircle2,
                color: GREEN,
                detail: "When a customer completes purchase using the partner's code, the sale is logged in Salesforce under the Partner Commission object. The sale enters a 45-day verification hold (return window + fraud check). If the order is returned or charged back, the commission is voided.",
                timeline: "45-day hold",
              },
              {
                step: "06",
                title: "Commission Paid",
                icon: CreditCard,
                color: GOLD,
                detail: "After the 45-day hold clears, the commission is added to the partner's balance. Payouts are processed on the 15th of each month for all cleared commissions. Track 1: PayPal or direct deposit. Track 2: ACH/wire via invoice. Minimum $250 balance required for payout.",
                timeline: "15th of each month",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6 relative"
                style={{ background: CARD_BG, borderColor: `${step.color}15` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${step.color}15` }}>
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <span className="font-display text-3xl font-bold" style={{ color: `${step.color}15` }}>{step.step}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="font-body text-[11px] text-white/40 leading-relaxed mb-4">{step.detail}</p>
                <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <Clock className="w-3 h-3 text-white/20" />
                  <span className="font-mono text-[9px] text-white/30">{step.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Flow */}
          <DarkCard className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>Attribution Flow</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Partner Shares Code/Link", color: GOLD },
                { label: "Customer Clicks", color: TEAL },
                { label: "Cookie Set (30 days)", color: PURPLE },
                { label: "Customer Purchases", color: GREEN },
                { label: "SF Records Sale", color: ORANGE },
                { label: "45-Day Hold", color: RED },
                { label: "Commission Cleared", color: GOLD },
                { label: "Monthly Payout", color: GREEN },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] px-3 py-1.5 rounded-lg border" style={{ borderColor: `${step.color}25`, color: step.color, background: `${step.color}08` }}>
                    {step.label}
                  </span>
                  {i < 7 && <ArrowRight className="w-3 h-3 text-white/15" />}
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ═══ TRACKING & ATTRIBUTION ═══ */}
      <section id="tracking" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Tracking & Attribution Architecture"
            title="Every Sale Traced Back to Its Source"
            description="Three layers of attribution ensure no commission is missed and no fraud slips through. Unique promo codes provide the primary tracking mechanism. UTM-tagged links provide secondary attribution. Browser cookies provide tertiary attribution for customers who don't use a code but arrived via a partner link."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Layer 1: Promo Codes",
                icon: Hash,
                color: GOLD,
                items: [
                  "Format: ZW-[NAME]-[4DIGIT] (e.g., ZW-CLARK-2847)",
                  "Entered at checkout on zerowheel.com",
                  "Validated against Salesforce Partner Commission records in real-time",
                  "Each code maps to exactly one partner record",
                  "Codes are case-insensitive, alphanumeric only",
                  "Inactive codes return 'Invalid code' at checkout",
                  "Primary attribution method — overrides cookie if both present",
                ],
              },
              {
                title: "Layer 2: UTM Links",
                icon: Link2,
                color: TEAL,
                items: [
                  "Format: zerowheel.com/?utm_source=affiliate&utm_medium=partner&utm_campaign=[NAME]&utm_content=[CHANNEL]",
                  "Captured on first page load by JavaScript pixel",
                  "Stored in Salesforce Lead record as Source and Campaign fields",
                  "Enables channel-level attribution (Instagram vs. YouTube vs. email)",
                  "Partner receives pre-built links for each channel they use",
                  "Secondary attribution — used when no promo code entered",
                ],
              },
              {
                title: "Layer 3: Cookie Attribution",
                icon: MousePointer,
                color: PURPLE,
                items: [
                  "30-day first-touch cookie set when visitor arrives via partner link",
                  "Cookie stores partner ID and timestamp",
                  "If customer returns within 30 days and purchases (even without code), sale is attributed to partner",
                  "Rogue Fitness model: 'order need not be placed during the same browser session'",
                  "Cookie is overwritten if customer clicks a different partner's link",
                  "Tertiary attribution — lowest priority, used only when no code and no UTM",
                ],
              },
            ].map((layer, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6"
                style={{ background: CARD_BG, borderColor: `${layer.color}15` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${layer.color}15` }}>
                    <layer.icon className="w-4 h-4" style={{ color: layer.color }} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white">{layer.title}</h3>
                </div>
                <div className="space-y-2">
                  {layer.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: `${layer.color}60` }} />
                      <p className="font-body text-[11px] text-white/40 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Salesforce Integration */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>Salesforce Partner Commission Object</p>
            <p className="font-body text-[12px] text-white/40 leading-relaxed mb-6">
              A custom Salesforce object that serves as the single source of truth for all partner commissions. Every partner has one record. Every sale creates a child Commission Line Item. Monthly payout reports are generated from this object.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    {["Field Name", "Type", "Description", "Example Value"].map((h, i) => (
                      <th key={i} className="font-mono text-[9px] uppercase tracking-wider text-white/40 pb-3 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Partner_Name__c", "Text", "Full name of the partner", "Dr. Mike Clark"],
                    ["Partner_Track__c", "Picklist", "Track 1 (Influencer) or Track 2 (Facility)", "Track 1: Influencer"],
                    ["Promo_Code__c", "Text (Unique)", "The partner's unique promo code", "ZW-CLARK-2847"],
                    ["UTM_Campaign__c", "Text", "UTM campaign tag for link tracking", "clark-nasm"],
                    ["Landing_Page_URL__c", "URL", "Partner's dedicated landing page", "zerowheel.com/clark"],
                    ["Status__c", "Picklist", "Active, Paused, Terminated", "Active"],
                    ["Tier__c", "Picklist", "Anchor, Growth, Standard", "Anchor"],
                    ["Total_Units_Sold__c", "Number (Rollup)", "Cumulative units sold via this partner", "23"],
                    ["Total_Commission_Earned__c", "Currency (Rollup)", "Total commission earned to date", "$7,750"],
                    ["Total_Commission_Paid__c", "Currency", "Total commission already paid out", "$5,750"],
                    ["Pending_Balance__c", "Currency (Formula)", "Earned minus Paid", "$2,000"],
                    ["Last_Sale_Date__c", "Date", "Date of most recent attributed sale", "2026-03-15"],
                    ["Payout_Method__c", "Picklist", "PayPal, Direct Deposit, ACH, Wire", "PayPal"],
                    ["Tax_ID__c", "Text (Encrypted)", "SSN or EIN for 1099 reporting", "***-**-4521"],
                    ["Agreement_Signed__c", "Checkbox", "Whether partner agreement is on file", "True"],
                    ["Agreement_Date__c", "Date", "Date agreement was signed", "2026-01-10"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                      <td className="font-mono text-[10px] py-2.5 pr-4" style={{ color: GOLD }}>{row[0]}</td>
                      <td className="font-mono text-[10px] text-white/30 py-2.5 pr-4">{row[1]}</td>
                      <td className="font-body text-[11px] text-white/40 py-2.5 pr-4">{row[2]}</td>
                      <td className="font-mono text-[10px] text-white/25 py-2.5">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Commission Line Item */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: TEAL }}>Commission Line Item (Child Object)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                      {["Field", "Type", "Purpose"].map((h, i) => (
                        <th key={i} className="font-mono text-[9px] uppercase tracking-wider text-white/40 pb-3 pr-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Order_Number__c", "Text", "Links to the e-commerce order ID"],
                      ["Sale_Date__c", "Date", "Date the customer completed purchase"],
                      ["Sale_Amount__c", "Currency", "Total order value (before commission calc)"],
                      ["Commission_Amount__c", "Currency", "Commission earned on this specific sale"],
                      ["Attribution_Method__c", "Picklist", "Promo Code, UTM Link, or Cookie"],
                      ["Verification_Status__c", "Picklist", "Pending (45-day hold), Cleared, Voided"],
                      ["Verification_Date__c", "Date", "Date the hold period expires"],
                      ["Void_Reason__c", "Text", "If voided: Return, Chargeback, Fraud, Duplicate"],
                      ["Payout_Batch__c", "Lookup", "Links to the monthly payout batch record"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                        <td className="font-mono text-[10px] py-2.5 pr-4" style={{ color: TEAL }}>{row[0]}</td>
                        <td className="font-mono text-[10px] text-white/30 py-2.5 pr-4">{row[1]}</td>
                        <td className="font-body text-[11px] text-white/40 py-2.5">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Automation Rules */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4" style={{ color: PURPLE }}>Automated Workflows</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { trigger: "New sale with valid promo code", action: "Create Commission Line Item under matching Partner Commission record. Set Verification_Status = Pending. Set Verification_Date = Sale_Date + 45 days.", tool: "Zapier" },
                  { trigger: "Verification_Date reached", action: "If no return/chargeback on order, set Verification_Status = Cleared. Add Commission_Amount to partner's Pending_Balance.", tool: "SF Flow" },
                  { trigger: "Order returned or charged back", action: "Set Verification_Status = Voided. Set Void_Reason. Send email notification to partner explaining the void.", tool: "Zapier + Klaviyo" },
                  { trigger: "15th of each month", action: "Generate Payout Batch for all Cleared commissions where Pending_Balance >= $250. Create Payout Batch record. Trigger payout via PayPal/ACH.", tool: "SF Flow + PayPal API" },
                  { trigger: "Partner hits milestone (10/25/50 units)", action: "Create bonus Commission Line Item. Send congratulations email with updated earnings summary. Update Partner Tier if applicable.", tool: "SF Flow + Klaviyo" },
                  { trigger: "Partner inactive for 90 days", action: "Send re-engagement email sequence. If no activity after 30 more days, set Status = Paused. Notify account manager.", tool: "Klaviyo + SF Flow" },
                ].map((rule, i) => (
                  <div key={i} className="rounded-xl border p-4" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-3 h-3" style={{ color: PURPLE }} />
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${PURPLE}15`, color: PURPLE }}>{rule.tool}</span>
                    </div>
                    <p className="font-body text-[11px] text-white/50 mb-1"><span className="text-white/70 font-medium">When:</span> {rule.trigger}</p>
                    <p className="font-body text-[11px] text-white/35"><span className="text-white/50 font-medium">Then:</span> {rule.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ═══ NAMED LAUNCH PARTNERS ═══ */}
      <section id="partners" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Launch Partner Strategy"
            title="Anchor Partners First. Then Scale."
            description="We don't launch with 100 random influencers. We launch with 6 to 10 carefully selected anchor partners who have direct reach into our target LOBs. These partners validate the product, create the initial content library, and generate the first wave of attributed sales. Once the program proves out with anchors, we open applications to the broader market."
          />

          {/* Anchor Partners - Track 1 */}
          <DarkCard className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5" style={{ color: GOLD }} />
              <p className="font-display text-lg font-semibold text-white">Anchor Partners (Track 1: Influencer/Athlete)</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "Dr. Mike Clark / NASM",
                  category: "Sports Performance",
                  color: GOLD,
                  reach: "NASM trainer network (100K+ certified)",
                  why: "NASM founder. Gateway to TPI-certified trainers and sports performance facilities globally. His endorsement validates ZeroWheel in the professional training space.",
                  approach: "Seed 2 units for personal use and facility. Co-create a 'Core Strength for Golf Performance' training protocol using ZeroWheel. Publish through NASM channels.",
                  target: "15 units in Year 1",
                },
                {
                  name: "Delos / Alfredo Carvajal",
                  category: "Maritime Wellness",
                  color: TEAL,
                  reach: "Cruise line wellness programs globally",
                  why: "Named WEG relationship. Maritime wellness pioneer with influence across cruise line spa and wellness programs. Direct line to One Spa World, Celebrity, Royal Caribbean.",
                  approach: "Product placement in Delos wellness suites. Co-branded 'At-Sea Wellness' program. Affiliate code for direct-to-consumer sales from cruise passengers.",
                  target: "25 units in Year 1",
                },
                {
                  name: "Blue Zone / Dan Buettner",
                  category: "Longevity",
                  color: PURPLE,
                  reach: "Blue Zone community (2M+ followers)",
                  why: "Blue Zone brand has massive reach in the longevity space. ZeroWheel's core-strength and longevity positioning aligns directly with Blue Zone principles.",
                  approach: "Co-branded content series: 'Blue Zone Core Strength.' Affiliate link in Blue Zone newsletter. Product placement in Blue Zone retreat centers.",
                  target: "20 units in Year 1",
                },
                {
                  name: "Golf/Pickleball Trainers (TPI Network)",
                  category: "Sports Performance",
                  color: GREEN,
                  reach: "TPI-certified trainers (20K+ globally)",
                  why: "Golf and pickleball trainers at private clubs are the perfect micro-influencers. They have trusted relationships with high-net-worth members who are the exact ZeroWheel buyer.",
                  approach: "Seed ZeroWheel to 10 top TPI trainers at Tier 1 clubs. Each trainer gets unique code. Build 'Golf Core Strength' and 'Pickleball Performance' programs they can deliver to clients.",
                  target: "30 units in Year 1 (across 10 trainers)",
                },
                {
                  name: "AMPD Golf Performance",
                  category: "Golf Fitness",
                  color: ORANGE,
                  reach: "Golf fitness community + PGA Tour connections",
                  why: "AMPD is a recognized name in golf-specific fitness training. Their endorsement reaches both amateur golfers and tour-level athletes.",
                  approach: "Partnership for ZeroWheel integration into AMPD training protocols. Co-branded content. Affiliate code for AMPD audience.",
                  target: "10 units in Year 1",
                },
                {
                  name: "Longevity/Wellness Podcasters",
                  category: "Thought Leadership",
                  color: PINK,
                  reach: "Combined 500K+ listeners",
                  why: "Podcast hosts in the longevity and biohacking space have highly engaged, affluent audiences. Perfect for a $1,000 product. Listeners trust host recommendations.",
                  approach: "Sponsor 3 to 5 episodes across top longevity podcasts. Each host gets affiliate code. Track conversions per episode via unique UTM links per show.",
                  target: "15 units in Year 1 (across 3–5 hosts)",
                },
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="rounded-xl border p-5"
                  style={{ borderColor: `${partner.color}15`, background: `${partner.color}04` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-display text-sm font-semibold text-white">{partner.name}</p>
                      <p className="font-mono text-[10px] mt-0.5" style={{ color: partner.color }}>{partner.category}</p>
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${GOLD}15`, color: GOLD }}>Anchor</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="font-body text-[11px] text-white/40"><span className="text-white/60 font-medium">Reach:</span> {partner.reach}</p>
                    <p className="font-body text-[11px] text-white/40"><span className="text-white/60 font-medium">Why:</span> {partner.why}</p>
                    <p className="font-body text-[11px] text-white/40"><span className="text-white/60 font-medium">Approach:</span> {partner.approach}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <span className="font-mono text-[10px] text-white/25">Year 1 Target</span>
                    <span className="font-mono text-sm font-bold" style={{ color: partner.color }}>{partner.target}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </DarkCard>

          {/* Facility Partners - Track 2 */}
          <DarkCard>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-5 h-5" style={{ color: TEAL }} />
              <p className="font-display text-lg font-semibold text-white">Anchor Partners (Track 2: Facility/Channel)</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "Troon Golf (Private Club Division)",
                  category: "Private Clubs",
                  color: TEAL,
                  locations: "600+ managed properties",
                  approach: "Pilot at 3 flagship Troon clubs. ZeroWheel in fitness centers + pro shops. Staff training on product. Dedicated landing page: zerowheel.com/troon",
                  target: "50 units Year 1 (across 10 properties)",
                },
                {
                  name: "One Spa World",
                  category: "Maritime/Cruise",
                  color: PURPLE,
                  locations: "Spa operations on 100+ cruise ships",
                  approach: "In-spa product placement. Wellness package add-on for cruise passengers. Staff demo stations. Retail sales tracked via ship-specific codes.",
                  target: "75 units Year 1 (across 15 ships)",
                },
                {
                  name: "Club Corp / Invited",
                  category: "Private Clubs",
                  color: GREEN,
                  locations: "200+ owned/operated clubs",
                  approach: "Member wellness program integration. ZeroWheel as premium fitness amenity. Member purchase discount via club-specific promo code.",
                  target: "40 units Year 1 (across 8 clubs)",
                },
                {
                  name: "Boutique Hotel/Resort Group (TBD)",
                  category: "Hospitality",
                  color: ORANGE,
                  locations: "Target: 5–10 luxury properties",
                  approach: "In-room wellness program. ZeroWheel available in-room or in fitness center. QR code in room for guest purchase. 'Take it home' retail option at checkout.",
                  target: "20 units Year 1",
                },
              ].map((partner, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="rounded-xl border p-5"
                  style={{ borderColor: `${partner.color}15`, background: `${partner.color}04` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-display text-sm font-semibold text-white">{partner.name}</p>
                      <p className="font-mono text-[10px] mt-0.5" style={{ color: partner.color }}>{partner.category}</p>
                    </div>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${TEAL}15`, color: TEAL }}>Enterprise</span>
                  </div>
                  <p className="font-body text-[11px] text-white/40 mb-2"><span className="text-white/60 font-medium">Locations:</span> {partner.locations}</p>
                  <p className="font-body text-[11px] text-white/40 mb-4"><span className="text-white/60 font-medium">Approach:</span> {partner.approach}</p>
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <span className="font-mono text-[10px] text-white/25">Year 1 Target</span>
                    <span className="font-mono text-sm font-bold" style={{ color: partner.color }}>{partner.target}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </DarkCard>

          {/* Rollout Timeline */}
          <DarkCard className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>Partner Rollout Timeline</p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { phase: "Q1 2026", title: "Anchor Seeding", detail: "Sign 6–8 anchor partners across both tracks. Seed product. Onboard into Salesforce. Generate first attributed sales.", color: GOLD },
                { phase: "Q2 2026", title: "Content & Proof", detail: "Anchor partners produce first content. Collect testimonials and case studies. Validate commission tracking end-to-end.", color: TEAL },
                { phase: "Q3 2026", title: "Open Applications", detail: "Launch public affiliate application page. Target 25–30 additional partners. Scale to mid-tier trainers and smaller facilities.", color: PURPLE },
                { phase: "Q4 2026", title: "Optimize & Scale", detail: "Analyze partner performance data. Double down on top performers. Introduce partner leaderboard. Plan 2027 expansion.", color: GREEN },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="rounded-xl border p-4"
                  style={{ borderColor: `${phase.color}15`, background: `${phase.color}04` }}
                >
                  <p className="font-mono text-[9px] uppercase tracking-wider mb-2" style={{ color: phase.color }}>{phase.phase}</p>
                  <p className="font-display text-sm font-semibold text-white mb-2">{phase.title}</p>
                  <p className="font-body text-[11px] text-white/35 leading-relaxed">{phase.detail}</p>
                </motion.div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ═══ ONBOARDING & ENABLEMENT ═══ */}
      <section id="onboarding" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Partner Onboarding & Enablement"
            title="Everything a Partner Needs to Sell"
            description="Partners don't just get a code and a 'good luck.' They receive a complete enablement package designed to make selling ZeroWheel as easy as possible. The goal: a partner should be able to explain the product, demonstrate its value, and close a sale within their first week."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Onboarding Kit */}
            <DarkCard>
              <div className="flex items-center gap-3 mb-5">
                <Gift className="w-5 h-5" style={{ color: GOLD }} />
                <p className="font-display text-base font-semibold text-white">Partner Onboarding Kit</p>
              </div>
              <div className="space-y-3">
                {[
                  { item: "ZeroWheel Unit (Seeded)", detail: "Every anchor partner receives a complimentary ZeroWheel for personal use. They must use the product before promoting it. Authenticity is non-negotiable." },
                  { item: "Brand Asset Package", detail: "High-res product photos, lifestyle imagery, brand guidelines, approved color palette, logo files (SVG, PNG, EPS). All assets in a shared Google Drive folder." },
                  { item: "Talking Points Document", detail: "One-page PDF with key selling points, objection handling, target audience profiles, and competitive positioning. Updated quarterly." },
                  { item: "Video Content Library", detail: "30-second, 60-second, and 2-minute product demo videos. B-roll footage for partners to use in their own content. Testimonial clips from early users." },
                  { item: "Personalized Landing Page", detail: "Each partner gets a dedicated URL (zerowheel.com/[name]) with their photo, endorsement quote, and pre-applied promo code. Conversion-optimized." },
                  { item: "Social Media Templates", detail: "Pre-designed Instagram stories, feed posts, and LinkedIn graphics. Editable in Canva. Partner just adds their photo/branding." },
                  { item: "Email Swipe Copy", detail: "3 pre-written email templates partners can send to their lists. Personalized with their name and code. Tested for conversion." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: `${GOLD}60` }} />
                    <div>
                      <p className="font-display text-[12px] font-medium text-white/70">{item.item}</p>
                      <p className="font-body text-[11px] text-white/35 leading-relaxed mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DarkCard>

            {/* Ongoing Support */}
            <DarkCard>
              <div className="flex items-center gap-3 mb-5">
                <Handshake className="w-5 h-5" style={{ color: TEAL }} />
                <p className="font-display text-base font-semibold text-white">Ongoing Partner Support</p>
              </div>
              <div className="space-y-3">
                {[
                  { item: "Monthly Performance Report", detail: "Automated email on the 1st of each month. Shows units sold, commission earned, pending balance, next milestone progress, and comparison to prior month." },
                  { item: "Partner Dashboard (Phase 2)", detail: "Self-service web portal where partners can view real-time sales, download reports, update payout info, and access marketing materials. Built on Salesforce Experience Cloud." },
                  { item: "Dedicated Partner Manager", detail: "Anchor partners get a named WEG contact for questions, content collaboration, and strategy calls. Growth partners get shared support via email." },
                  { item: "Quarterly Strategy Call", detail: "30-minute call with anchor partners to review performance, plan upcoming content, discuss new product features, and align on targets." },
                  { item: "Partner Slack Channel", detail: "Private Slack workspace for all active partners. Share wins, ask questions, get real-time support from WEG team. Builds community." },
                  { item: "New Product Early Access", detail: "Partners get first access to new ZeroWheel models, accessories, and firmware updates. They can create 'first look' content before public launch." },
                  { item: "Annual Partner Summit (2027)", detail: "In-person event for top partners. Product roadmap preview, networking, recognition awards, and commission bonus for attendees." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: `${TEAL}60` }} />
                    <div>
                      <p className="font-display text-[12px] font-medium text-white/70">{item.item}</p>
                      <p className="font-body text-[11px] text-white/35 leading-relaxed mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* ═══ TERMS & CONDITIONS ═══ */}
      <section id="terms" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Program Terms & Conditions"
            title="Clear Rules. No Surprises."
            description="Modeled after Eight Sleep's referral program terms and Rogue Fitness's affiliate rules. These terms protect both ZeroWheel and our partners. Every partner signs a digital agreement (DocuSign) that includes these terms before receiving their promo code."
          />

          <div className="space-y-4">
            {[
              {
                title: "Qualified Sale Definition",
                icon: ShoppingCart,
                color: GOLD,
                content: "A Qualified Sale is defined as a completed purchase of a ZeroWheel unit at zerowheel.com by a customer who either (a) enters the partner's promo code at checkout, (b) arrives via the partner's UTM-tagged link, or (c) has an active attribution cookie from the partner's link within the 30-day window. The order must not be returned, charged back, or flagged as fraudulent within the 45-day verification period. Only one Qualified Sale per unique customer is counted; repeat purchases by the same customer do not generate additional commissions.",
              },
              {
                title: "Commission Payment Terms",
                icon: CreditCard,
                color: TEAL,
                content: "Commissions are calculated based on the partner's track and tier at the time of sale. Commissions enter a 45-day verification hold from the date of purchase. After verification, cleared commissions are added to the partner's balance. Payouts are processed on the 15th of each calendar month for all partners with a minimum balance of $250 (Track 1) or per invoice terms (Track 2). ZeroWheel reserves the right to delay payouts up to 90 days for fraud investigation purposes. Partners are responsible for all tax liability resulting from commission payments. ZeroWheel will issue 1099 forms for US-based partners earning $600 or more annually.",
              },
              {
                title: "Prohibited Activities",
                icon: AlertTriangle,
                color: RED,
                content: "Partners may not: (1) use their own promo code for personal purchases, (2) distribute promo codes via unsolicited bulk email or SMS ('spam'), (3) bid on ZeroWheel brand terms in paid search (Google Ads, Bing Ads), (4) create misleading or false claims about the product, (5) impersonate ZeroWheel or its employees, (6) use cookie-stuffing, click fraud, or any form of artificial attribution manipulation, (7) offer unauthorized discounts beyond the promo code value. Violations result in immediate termination, forfeiture of all pending commissions, and permanent ban from the program.",
              },
              {
                title: "Self-Referral Policy",
                icon: Lock,
                color: PURPLE,
                content: "Partners may not receive commission for referring themselves, family members, or business entities they own or control. This includes using alternate email addresses, shipping addresses, or payment methods to circumvent this rule. ZeroWheel uses address matching, email domain analysis, and payment method cross-referencing to detect self-referrals. Detected self-referrals are voided and may result in program termination.",
              },
              {
                title: "Intellectual Property & Brand Usage",
                icon: Shield,
                color: GREEN,
                content: "Partners are granted a limited, non-exclusive, revocable license to use ZeroWheel brand assets (logo, product images, approved copy) solely for the purpose of promoting ZeroWheel through the affiliate program. Partners may not modify the logo, create derivative brand materials, or use ZeroWheel branding in any context that implies official endorsement beyond the affiliate relationship. All content featuring ZeroWheel branding must comply with the Brand Guidelines document provided in the onboarding kit.",
              },
              {
                title: "Program Modification & Termination",
                icon: FileText,
                color: ORANGE,
                content: "ZeroWheel reserves the right to modify commission rates, bonus structures, program terms, or terminate the program entirely at any time with 30 days written notice to active partners. Any commissions earned and verified prior to program changes will be honored at the original rate. Partners may terminate their participation at any time by providing written notice. Upon termination, the partner's promo code is deactivated and any pending verified commissions are paid out in the next payout cycle.",
              },
            ].map((term, i) => (
              <ExpandableSection
                key={i}
                title={term.title}
                subtitle="Click to expand full terms"
                icon={term.icon}
                color={term.color}
              >
                <p className="font-body text-[12px] text-white/45 leading-relaxed">{term.content}</p>
              </ExpandableSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROGRAM ECONOMICS ═══ */}
      <section id="economics" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Program Economics & ROI Model"
            title="The Math Behind 25% Commission"
            description="At $1,000/unit with a 25% base commission, ZeroWheel retains $750 per affiliate-driven sale. After COGS (estimated $350), the net margin on an affiliate sale is $400 per unit. This is lower than direct sales margin, but affiliate sales have zero customer acquisition cost beyond the commission itself. No ad spend. No landing page testing. No sales rep time. The partner does the selling."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Direct Sale",
                subtitle: "No affiliate involved",
                color: GOLD,
                rows: [
                  { label: "Revenue", value: "$1,000" },
                  { label: "COGS", value: "($350)" },
                  { label: "CAC (avg)", value: "($180)" },
                  { label: "Sales Rep Cost", value: "($75)" },
                  { label: "Net Margin", value: "$395", highlight: true },
                  { label: "Margin %", value: "39.5%" },
                ],
              },
              {
                title: "Affiliate Sale (Track 1)",
                subtitle: "Influencer/Athlete partner",
                color: TEAL,
                rows: [
                  { label: "Revenue", value: "$1,000" },
                  { label: "COGS", value: "($350)" },
                  { label: "Commission", value: "($250)" },
                  { label: "CAC", value: "$0" },
                  { label: "Net Margin", value: "$400", highlight: true },
                  { label: "Margin %", value: "40.0%" },
                ],
              },
              {
                title: "Affiliate Sale (Track 2)",
                subtitle: "Facility partner at scale",
                color: PURPLE,
                rows: [
                  { label: "Revenue", value: "$1,000" },
                  { label: "COGS", value: "($350)" },
                  { label: "Commission (50+ tier)", value: "($150)" },
                  { label: "CAC", value: "$0" },
                  { label: "Net Margin", value: "$500", highlight: true },
                  { label: "Margin %", value: "50.0%" },
                ],
              },
            ].map((scenario, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="rounded-2xl border p-6"
                style={{ background: CARD_BG, borderColor: `${scenario.color}20` }}
              >
                <p className="font-display text-base font-semibold text-white mb-1">{scenario.title}</p>
                <p className="font-mono text-[10px] mb-5" style={{ color: scenario.color }}>{scenario.subtitle}</p>
                <div className="space-y-2">
                  {scenario.rows.map((row, j) => (
                    <div key={j} className={`flex items-center justify-between py-1.5 ${row.highlight ? "border-t pt-3 mt-2" : ""}`} style={row.highlight ? { borderColor: `${scenario.color}20` } : {}}>
                      <span className={`font-mono text-[11px] ${row.highlight ? "text-white/70 font-medium" : "text-white/35"}`}>{row.label}</span>
                      <span className={`font-mono text-[12px] ${row.highlight ? "font-bold" : ""}`} style={row.highlight ? { color: scenario.color } : { color: "rgba(255,255,255,0.5)" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Year 1 Projections */}
          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-5" style={{ color: GOLD }}>Year 1 Affiliate Program Projections</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    {["Metric", "Track 1 (Influencer)", "Track 2 (Facility)", "Combined"].map((h, i) => (
                      <th key={i} className="font-mono text-[9px] uppercase tracking-wider text-white/40 pb-3 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Active Partners", "15–20", "8–12", "23–32"],
                    ["Units Sold via Program", "115–150", "185–250", "300–400"],
                    ["Revenue Generated", "$115K–$150K", "$185K–$250K", "$300K–$400K"],
                    ["Total Commissions Paid", "$30K–$42K", "$31K–$42K", "$61K–$84K"],
                    ["Net Revenue (after commission)", "$85K–$108K", "$154K–$208K", "$239K–$316K"],
                    ["Avg Commission per Partner", "$2,000–$2,100", "$3,875–$3,500", "—"],
                    ["Program ROI", "3.8x–3.6x", "6.0x–6.0x", "4.5x–4.8x"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                      <td className="font-mono text-[10px] text-white/50 py-2.5 pr-4">{row[0]}</td>
                      <td className="font-mono text-[11px] text-white/40 py-2.5 pr-4">{row[1]}</td>
                      <td className="font-mono text-[11px] text-white/40 py-2.5 pr-4">{row[2]}</td>
                      <td className="font-mono text-[11px] font-medium py-2.5" style={{ color: GOLD }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl border" style={{ borderColor: `${GREEN}15`, background: `${GREEN}04` }}>
              <p className="font-body text-[12px] text-white/45 leading-relaxed">
                <span className="font-medium text-white/60">Key Insight:</span> The affiliate program is projected to generate $300K to $400K in Year 1 revenue at a blended commission cost of approximately 21%. This represents 30 to 40% of the total 2026 install target of 1,000 units, making it the single largest revenue channel after direct B2B sales. The program pays for itself from the first sale because there is zero upfront customer acquisition cost. Every dollar in commission is paid only after a verified sale.
              </p>
            </div>
          </DarkCard>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-20 bg-[#0A0A0A]" />
    </Layout>
  );
}
