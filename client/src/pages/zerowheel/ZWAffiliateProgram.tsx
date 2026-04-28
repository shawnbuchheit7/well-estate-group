/*
 * ZeroWheel Affiliate & Influencer Program — WEG Proposed
 * Design: Boss's exact light mode system
 *   - bg-white / bg-[#FAFAF8] alternating sections
 *   - text-black primary, text-black/55 body, text-black/40 muted
 *   - #C9A962 gold for all accents, eyebrows, icons
 *   - border-black/[0.12] cards, rounded-2xl
 *   - font-mono labels, font-display headings, font-body body
 *   - LightHero + SectionNav + fadeInUp/staggerContainer/scaleIn
 *
 * ALIGNMENT:
 *   - DTC only: $1,095 MSRP — affiliates do NOT touch B2B pricing
 *   - B2B pricing ($825 vertical / $695 commercial) is Sales team territory
 *   - WEG is the consulting advisor proposing this program
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign, Users, Award, CheckCircle2, ArrowRight,
  ChevronDown, Zap, Database, Hash, Link2, Clock,
  Shield, Star, Mic2, Trophy, FileText,
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const GOLD = "#C9A962";

const sections = [
  { id: "hero",       label: "Overview"   },
  { id: "structure",  label: "Structure"  },
  { id: "tiers",      label: "Commission" },
  { id: "tracking",   label: "Tracking"   },
  { id: "onboarding", label: "Onboarding" },
  { id: "salesforce", label: "Salesforce" },
  { id: "terms",      label: "Terms"      },
];

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
    <motion.div variants={fadeInUp} className="bg-white border border-black/[0.12] rounded-2xl overflow-hidden hover:border-[#C9A962]/30 hover:shadow-lg transition-all duration-300">
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
            <div className="px-6 pb-6 border-t border-black/[0.06]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────
const tiers = [
  { tier: "Base",     range: "1–4 units/mo",   rate: "$250",  pct: "22.8%", monthly: "$250–$1,000",   color: "#C9A962", icon: Star    },
  { tier: "Silver",   range: "5–9 units/mo",   rate: "$275",  pct: "25.1%", monthly: "$1,375–$2,475", color: "#94A3B8", icon: Award   },
  { tier: "Gold",     range: "10–24 units/mo", rate: "$300",  pct: "27.4%", monthly: "$3,000–$7,200", color: "#F59E0B", icon: Trophy  },
  { tier: "Platinum", range: "25+ units/mo",   rate: "$325",  pct: "29.7%", monthly: "$8,125+",       color: "#8B5CF6", icon: Mic2    },
];

const earningScenarios = [
  { units: 1,   monthly: "$250",    annual: "$3,000",    tier: "Base"     },
  { units: 5,   monthly: "$1,375",  annual: "$16,500",   tier: "Silver"   },
  { units: 10,  monthly: "$3,000",  annual: "$36,000",   tier: "Gold"     },
  { units: 25,  monthly: "$8,125",  annual: "$97,500",   tier: "Platinum" },
  { units: 50,  monthly: "$16,250", annual: "$195,000",  tier: "Platinum" },
];

const trackingMethods = [
  { method: "Unique Promo Code",   detail: "Every affiliate receives a personal code (e.g., DRMIKE20). Applied at DTC checkout. Captured in Salesforce Commission__c object within 60 seconds via Zapier.", icon: Hash,   color: GOLD         },
  { method: "UTM Tracking Link",   detail: "Personalized URL with utm_source=affiliate&utm_medium=referral&utm_campaign={partner_code}. Captures traffic source even if promo code not used at checkout.", icon: Link2,  color: "#1877F2"    },
  { method: "30-Day Cookie",       detail: "Browser cookie tracks visitors from affiliate link for 30 days. If they purchase within 30 days without using the code, commission is still attributed.", icon: Clock,  color: "#22C55E"    },
  { method: "Salesforce Commission Object", detail: "Custom SF object Commission__c with fields: Partner_Code__c, Units_Sold__c, Commission_Rate__c, Payout_Status__c, Payout_Date__c. Monthly report auto-generated.", icon: Database, color: "#0070D2" },
];

const onboardingSteps = [
  { step: 1, title: "Application",        detail: "Partner submits application via Typeform. WEG reviews within 5 business days. Criteria: audience alignment, content quality, minimum 5K engaged followers or active client base." },
  { step: 2, title: "Agreement Signed",   detail: "Digital affiliate agreement signed via DocuSign. Covers commission structure, payout terms, content guidelines, exclusivity restrictions, and code of conduct." },
  { step: 3, title: "Salesforce Record",  detail: "WEG creates Partner Account in Salesforce. Unique promo code generated and assigned. UTM tracking link created. Partner added to Klaviyo Partner segment." },
  { step: 4, title: "Onboarding Kit",     detail: "Partner receives: product unit (shipped within 5 days), brand asset kit (logos, product photos, video clips), messaging guide (key claims, prohibited claims), and training program PDFs." },
  { step: 5, title: "Content Review",     detail: "First 2 posts reviewed by WEG before publishing. Ensures FTC compliance, accurate product claims, and brand alignment. Ongoing spot-checks quarterly." },
  { step: 6, title: "Monthly Reporting",  detail: "Automated Salesforce report emailed to partner on the 1st of each month: units sold, commission earned, payout date. Payout via ACH or PayPal within 30 days of month close." },
];

const sfFields = [
  { object: "Commission__c",          field: "Partner_Code__c",        type: "Text(20)",    desc: "Unique affiliate promo code"                },
  { object: "Commission__c",          field: "Partner_Account__c",     type: "Lookup(Account)", desc: "Links to partner's Account record"      },
  { object: "Commission__c",          field: "Units_Sold__c",          type: "Number",      desc: "Units sold using this partner's code"       },
  { object: "Commission__c",          field: "Commission_Rate__c",     type: "Currency",    desc: "Per-unit rate based on tier"                },
  { object: "Commission__c",          field: "Total_Commission__c",    type: "Formula",     desc: "Units_Sold__c × Commission_Rate__c"         },
  { object: "Commission__c",          field: "Payout_Status__c",       type: "Picklist",    desc: "Pending / Processing / Paid"                },
  { object: "Commission__c",          field: "Payout_Date__c",         type: "Date",        desc: "Date payment was issued"                    },
  { object: "Commission__c",          field: "Month__c",               type: "Date",        desc: "Commission period (first of month)"         },
  { object: "Account (Partner)",      field: "Partner_Tier__c",        type: "Picklist",    desc: "Base / Silver / Gold / Platinum"            },
  { object: "Account (Partner)",      field: "Lifetime_Units__c",      type: "Roll-Up",     desc: "Total units sold all time"                  },
  { object: "Account (Partner)",      field: "Lifetime_Commission__c", type: "Roll-Up",     desc: "Total commissions paid all time"            },
  { object: "Opportunity",            field: "Affiliate_Code__c",      type: "Text(20)",    desc: "Code used on this DTC order"                },
];

const termsHighlights = [
  { title: "Eligible Sales",         detail: "Commission applies to DTC consumer sales at $1,095 MSRP only. B2B facility sales, bulk orders, and institutional pricing are excluded from the affiliate program." },
  { title: "Payout Hold",            detail: "30-day hold on all commissions to allow for returns and chargebacks. Payouts processed on the 1st of each month for the prior month's confirmed sales." },
  { title: "Promo Code Stacking",    detail: "Affiliate codes cannot be combined with other discount codes or promotions. One code per transaction." },
  { title: "Content Requirements",   detail: "All content featuring ZeroWheel must include FTC-compliant disclosure (#ad or #sponsored). Claims must align with WEG-approved messaging guide. No comparative claims against competitors." },
  { title: "Exclusivity",            detail: "Affiliates may not simultaneously promote direct competing motorized core training devices. Category exclusivity reviewed annually." },
  { title: "Termination",            detail: "WEG may terminate affiliate agreement with 30 days notice. Earned commissions for completed sales will be paid out. Pending sales at termination are forfeited." },
];

// ── Page ───────────────────────────────────────────────────────────────────
export default function ZWAffiliateProgram() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div id="hero">
        <LightHero
          logoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png"
          logoAlt="ZeroWheel"
          brandName="ZeroWheel"
          eyebrow="WEG Proposed Program"
          title="Affiliate & Commission Program"
          description="A structured, commission-based partner program for influencers, trainers, and athletes to earn on every ZeroWheel DTC sale they drive. Built on Salesforce for full tracking and accountability. $250/unit base — tiered bonuses for volume."
          stats={[
            { value: "$250",  label: "Base Commission/Unit" },
            { value: "4",     label: "Earning Tiers"        },
            { value: "30d",   label: "Cookie Window"        },
            { value: "$1,095",label: "DTC MSRP"             },
          ]}
        />
      </div>

      {/* ── STRUCTURE ────────────────────────────────────────────────────── */}
      <section id="structure" className="py-18 bg-white">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Program Architecture"
            title="Two Tracks, One System"
            body="WEG recommends separating the affiliate program into two distinct tracks — Influencer/Athlete (DTC-focused) and Facility Partner (B2B-focused) — to protect pricing integrity across channels."
          />
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {[
              {
                track: "Track 1: Influencer & Athlete",
                badge: "This Program",
                badgeColor: GOLD,
                price: "$1,095 DTC MSRP",
                commission: "$250–$325/unit (22.8–29.7%)",
                audience: "Fitness influencers, golf/pickleball trainers, wellness athletes, social media creators",
                mechanism: "Unique promo code + UTM link + 30-day cookie",
                salesforce: "Commission__c object — fully tracked per sale",
                items: ["Drives consumer awareness and DTC sales", "Leverages trainer networks for organic reach", "Commission based on actual completed sales", "Monthly automated payout reporting"],
                color: GOLD,
                icon: Mic2,
              },
              {
                track: "Track 2: Facility & Channel Partner",
                badge: "See Commercial Strategy",
                badgeColor: "#64748B",
                price: "$825 Vertical / $695 Commercial",
                commission: "Volume-based pricing tiers (not commission)",
                audience: "Management companies, distributors, equipment dealers, wellness program operators",
                mechanism: "Salesforce Partner Account + named rep ownership",
                salesforce: "Account + Opportunity pipeline — managed by WEG sales team",
                items: ["Bulk purchase agreements at institutional pricing", "Co-marketing and co-branding opportunities", "Dedicated WEG rep for relationship management", "Quarterly business reviews"],
                color: "#64748B",
                icon: Users,
              },
            ].map((track, i) => (
              <motion.div
                key={i} variants={scaleIn}
                className="bg-white border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: i === 0 ? `${GOLD}40` : "rgba(0,0,0,0.12)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${track.color}15` }}>
                    <track.icon className="w-5 h-5" style={{ color: track.color }} />
                  </div>
                  <span className="font-mono text-[9px] px-2.5 py-1 rounded-full" style={{ background: `${track.badgeColor}15`, color: track.badgeColor }}>{track.badge}</span>
                </div>
                <p className="font-display text-base font-semibold text-black mb-1">{track.track}</p>
                <p className="font-mono text-[10px] mb-3" style={{ color: track.color }}>{track.price}</p>
                <div className="space-y-2 mb-4">
                  {[
                    { label: "Commission", value: track.commission },
                    { label: "Audience",   value: track.audience   },
                    { label: "Mechanism",  value: track.mechanism  },
                    { label: "Salesforce", value: track.salesforce },
                  ].map((row, j) => (
                    <div key={j} className="flex gap-2">
                      <span className="font-mono text-[9px] text-black/35 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">{row.label}</span>
                      <span className="font-body text-xs text-black/60">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-black/[0.06] space-y-1.5">
                  {track.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: track.color }} />
                      <span className="font-body text-xs text-black/55">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMMISSION TIERS ─────────────────────────────────────────────── */}
      <section id="tiers" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Commission Structure"
            title="Earn More as You Sell More"
            body="Tiered commissions reward volume. Tier is calculated monthly based on units sold in the prior 30 days. All sales are tracked via unique promo code in Salesforce."
          />

          {/* Tier cards */}
          <motion.div
            className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {tiers.map((t, i) => (
              <motion.div
                key={i} variants={scaleIn}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.07)" }}
                className="bg-white border border-black/[0.12] rounded-2xl p-5 text-center hover:border-[#C9A962]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: `${t.color}15` }}>
                  <t.icon className="w-6 h-6" style={{ color: t.color }} />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: t.color }}>{t.tier}</p>
                <p className="font-display text-3xl font-bold text-black">{t.rate}</p>
                <p className="font-mono text-[9px] text-black/35 mt-0.5">per unit</p>
                <p className="font-body text-xs text-black/50 mt-2">{t.range}</p>
                <div className="mt-3 pt-3 border-t border-black/[0.08]">
                  <p className="font-mono text-[9px] text-black/35 uppercase tracking-wider">Monthly Potential</p>
                  <p className="font-display text-sm font-semibold text-black mt-1">{t.monthly}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Earning scenarios table */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="bg-white border border-black/[0.12] rounded-2xl overflow-hidden">
              <div className="bg-black px-6 py-3">
                <p className="font-mono text-xs text-white">Earning Scenarios — Based on $1,095 DTC MSRP</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/[0.08]">
                    {["Units/Month", "Tier", "Commission/Unit", "Monthly Earnings", "Annual Earnings"].map(h => (
                      <th key={h} className="px-4 py-3 text-left font-mono text-[9px] text-black/35 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {earningScenarios.map((row, i) => (
                    <tr
                      key={i}
                      onClick={() => setActiveScenario(activeScenario === i ? null : i)}
                      className={`border-b border-black/[0.06] cursor-pointer transition-colors ${activeScenario === i ? "bg-[#C9A962]/5" : "hover:bg-[#FAFAF8]"}`}
                    >
                      <td className="px-4 py-3 font-display text-base font-bold text-black">{row.units}</td>
                      <td className="px-4 py-3">
                        <span className="font-mono text-[9px] px-2 py-1 rounded-full bg-[#C9A962]/10 text-[#C9A962]">{row.tier}</span>
                      </td>
                      <td className="px-4 py-3 font-body text-sm text-black/70">
                        {tiers.find(t => t.tier === row.tier)?.rate}/unit
                      </td>
                      <td className="px-4 py-3 font-display text-sm font-semibold text-black">{row.monthly}</td>
                      <td className="px-4 py-3 font-display text-sm font-bold" style={{ color: GOLD }}>{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRACKING ─────────────────────────────────────────────────────── */}
      <section id="tracking" className="py-18 bg-white">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Attribution & Tracking"
            title="Three-Layer Attribution System"
            body="WEG recommends a three-layer approach to ensure every sale is correctly attributed — promo code, UTM link, and 30-day cookie. All three feed into Salesforce as the single source of truth."
          />
          <motion.div
            className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {trackingMethods.map((method, i) => (
              <motion.div
                key={i} variants={scaleIn}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.07)" }}
                className="bg-white border border-black/[0.12] rounded-2xl p-6 hover:border-[#C9A962]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${method.color}15` }}>
                    <method.icon className="w-4 h-4" style={{ color: method.color }} />
                  </div>
                  <p className="font-display text-sm font-semibold text-black">{method.method}</p>
                </div>
                <p className="font-body text-xs text-black/55 leading-relaxed">{method.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Attribution priority */}
          <motion.div
            className="max-w-4xl mx-auto mt-8 p-6 bg-[#FAFAF8] border border-black/[0.08] rounded-2xl"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.2em] mb-3">Attribution Priority Order</p>
            <div className="flex flex-col md:flex-row items-center gap-3">
              {["1. Promo Code Used at Checkout", "2. UTM Link Click (30-day window)", "3. Cookie Attribution (30-day window)"].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-center px-4 py-2.5 bg-white border border-black/[0.12] rounded-xl shadow-sm">
                    <p className="font-body text-xs text-black/70">{step}</p>
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#C9A962] flex-shrink-0" />}
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-black/45 mt-3">If multiple attribution signals are present, promo code takes priority. No double-attribution — one commission per sale.</p>
          </motion.div>
        </div>
      </section>

      {/* ── ONBOARDING ───────────────────────────────────────────────────── */}
      <section id="onboarding" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Partner Onboarding"
            title="From Application to First Sale"
            body="WEG manages the full onboarding process. Partners go from application to first sale in under 2 weeks. Every step is tracked in Salesforce."
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {onboardingSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-black/[0.12] rounded-2xl p-5 hover:border-[#C9A962]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-display text-sm font-bold flex-shrink-0" style={{ background: GOLD }}>
                    {step.step}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-black">{step.title}</p>
                    <p className="font-body text-xs text-black/55 mt-1 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SALESFORCE ───────────────────────────────────────────────────── */}
      <section id="salesforce" className="py-18 bg-white">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Salesforce Architecture"
            title="Commission Object Schema"
            body="WEG will configure a custom Commission__c object in Salesforce to track every affiliate sale, commission calculation, and payout. Full field reference below."
          />
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="bg-white border border-black/[0.12] rounded-2xl overflow-hidden">
              <div className="bg-black px-6 py-3 flex items-center gap-2">
                <Database className="w-4 h-4 text-[#C9A962]" />
                <span className="font-mono text-xs text-white">Salesforce Custom Object: Commission__c</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-black/[0.08]">
                      {["Object", "Field", "Type", "Description"].map(h => (
                        <th key={h} className="px-4 py-3 text-left font-mono text-[9px] text-black/35 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sfFields.map((row, i) => (
                      <tr key={i} className={`border-b border-black/[0.06] hover:bg-[#FAFAF8] transition-colors ${i % 2 === 0 ? "" : "bg-[#FAFAF8]/40"}`}>
                        <td className="px-4 py-2.5 font-mono text-[10px] text-[#C9A962]">{row.object}</td>
                        <td className="px-4 py-2.5 font-mono text-[10px] text-black/70">{row.field}</td>
                        <td className="px-4 py-2.5 font-mono text-[9px] text-black/40">{row.type}</td>
                        <td className="px-4 py-2.5 font-body text-xs text-black/55">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Automation */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {[
                { title: "Zapier: Code Used → Commission Record", detail: "When a promo code is used at DTC checkout, Zapier creates a Commission__c record in Salesforce within 60 seconds. Fields populated: Partner_Code__c, Units_Sold__c, Commission_Rate__c, Month__c.", icon: Zap, color: "#FF4A00" },
                { title: "Salesforce Flow: Monthly Payout Report", detail: "On the 1st of each month, a Salesforce Flow runs to aggregate all Commission__c records for the prior month, calculate totals, and email a payout summary to each partner and the WEG finance team.", icon: FileText, color: GOLD },
              ].map((auto, i) => (
                <div key={i} className="bg-[#FAFAF8] border border-black/[0.08] rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${auto.color}15` }}>
                      <auto.icon className="w-4 h-4" style={{ color: auto.color }} />
                    </div>
                    <p className="font-display text-sm font-semibold text-black">{auto.title}</p>
                  </div>
                  <p className="font-body text-xs text-black/55 leading-relaxed">{auto.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TERMS ────────────────────────────────────────────────────────── */}
      <section id="terms" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Program Terms"
            title="Key Terms & Conditions"
            body="WEG recommends clear, enforceable terms to protect ZeroWheel's pricing architecture and brand integrity. Full legal agreement drafted separately."
          />
          <motion.div
            className="max-w-4xl mx-auto space-y-3"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {termsHighlights.map((term, i) => (
              <motion.div
                key={i} variants={fadeInUp}
                className="bg-white border border-black/[0.12] rounded-2xl p-5 hover:border-[#C9A962]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${GOLD}15` }}>
                    <Shield className="w-4 h-4" style={{ color: GOLD }} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-black">{term.title}</p>
                    <p className="font-body text-xs text-black/55 mt-1 leading-relaxed">{term.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
