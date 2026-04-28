/**
 * ZeroWheel Affiliate & Influencer Program — WEG Proposed
 *
 * ALIGNMENT NOTES:
 * - MSRP: $1,095 (DTC channel only — this program applies to DTC sales exclusively)
 * - Affiliates earn % commission on DTC sales at $1,095 ONLY
 * - B2B facility accounts are Sales pipeline accounts at $825 or $695 — NOT affiliates
 * - WEG framing: WEG is the consulting advisor proposing this program
 * - Commercial Strategy page owns: channel partner tiers, margin analysis
 * - Marketing Plan page owns: channel mix, content strategy, influencer seeding
 * - THIS PAGE owns: affiliate program terms, commission structure, tracking, onboarding, SF schema
 *
 * Design: Dark luxury, #0A0A0A bg, gold/teal/purple accents
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DollarSign, Users, Award, CheckCircle2, ArrowRight,
  ChevronDown, ChevronUp, Bell, Zap, Database, Mail,
  Hash, Link2, Clock, Shield, TrendingUp, Star,
  Mic2, Trophy, Dumbbell, Stethoscope,
  BarChart3, FileText,
} from "lucide-react";
import Layout from "@/components/Layout";
import DarkHero from "@/components/DarkHero";
import { SectionNav } from "@/components/SectionNav";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const GOLD     = "#C9A962";
const GOLD_DIM = "#8B7D3C";
const TEAL     = "#2DD4BF";
const PURPLE   = "#A78BFA";
const GREEN    = "#4ADE80";
const ORANGE   = "#FB923C";
const CARD_BG  = "#111111";
const CARD_BORDER = "rgba(201,169,98,0.12)";

const sections = [
  { id: "hero",       label: "Overview"   },
  { id: "structure",  label: "Structure"  },
  { id: "tiers",      label: "Commission" },
  { id: "tracking",   label: "Tracking"   },
  { id: "onboarding", label: "Onboarding" },
  { id: "salesforce", label: "Salesforce" },
  { id: "terms",      label: "Terms"      },
];

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

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border overflow-hidden" style={{ background: CARD_BG, borderColor: CARD_BORDER }}>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors">
        <p className="font-display text-sm font-semibold text-white pr-4">{q}</p>
        {open ? <ChevronUp className="w-4 h-4 flex-shrink-0 text-white/30" /> : <ChevronDown className="w-4 h-4 flex-shrink-0 text-white/30" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="px-4 pb-4 border-t" style={{ borderColor: CARD_BORDER }}>
              <p className="font-body text-sm text-white/45 leading-relaxed pt-3">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ZWAffiliateProgram() {
  return (
    <Layout>
      <SectionNav sections={sections} />

      <div id="hero">
        <DarkHero
          eyebrow="WEG Proposed Program"
          title="ZeroWheel Affiliate & Influencer Program"
          description="WEG's proposed commission-based affiliate program for ZeroWheel's Direct-to-Consumer channel. This program is exclusively for individual influencers, trainers, and athletes who drive consumer sales at the full DTC MSRP of $1,095. B2B facility accounts and channel partners are managed separately through the Sales pipeline at Vertical ($825) or Commercial ($695) pricing — see the Commercial Strategy page."
          stats={[
            { value: "$1,095", label: "DTC MSRP" },
            { value: "10-18%", label: "Commission Rate" },
            { value: "30-day", label: "Cookie Window" },
            { value: "60-day", label: "Payout Hold" },
          ]}
        />
      </div>

      {/* STRUCTURE */}
      <section id="structure" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Program Architecture"
            title="Two Tracks. One Program."
            description="WEG recommends two affiliate tracks based on audience type and content focus. Both tracks earn commission on DTC consumer sales at $1,095 MSRP. Neither track applies to B2B facility sales — those go through the Sales pipeline at negotiated pricing."
          />

          <div className="rounded-2xl border p-5 mb-8 flex items-start gap-4"
            style={{ borderColor: `${GOLD}30`, background: `${GOLD}08` }}>
            <Bell className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
            <div>
              <p className="font-display text-sm font-semibold text-white mb-1">Affiliate Program vs. Channel Partner Program</p>
              <p className="font-body text-sm text-white/50 leading-relaxed">
                This affiliate program is for individual influencers and trainers who promote ZeroWheel to their personal audiences for DTC consumer purchases at $1,095. It is entirely separate from the B2B channel partner program (Authorized Dealers at $695, Vertical Partners at $825) documented in the Commercial Strategy page. A trainer who seeds a unit with their private club members is an affiliate. A club that buys 10 units for their fitness center is a B2B account in the Sales pipeline.
              </p>
            </div>
          </div>

          <motion.div className="grid md:grid-cols-2 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              {
                track: "Track 1: Influencer / Creator",
                color: GOLD,
                icon: Mic2,
                who: "Social media creators, fitness influencers, YouTube/Instagram/TikTok personalities with audiences in golf, pickleball, fitness, longevity, or wellness.",
                examples: ["Golf fitness creators (50K-500K followers)", "Pickleball coaches and instructors on social", "Longevity/wellness creators (Blue Zone angle)", "Fitness trainers with strong personal brand", "Physical therapists with clinical social presence"],
                howTheyEarn: "Unique promo code (e.g., MIKE20) shared in content. Followers use code at checkout on ZeroWheel.com. Commission paid on completed sales after 60-day hold.",
                contentExpectation: "Minimum 2 organic posts per month featuring ZeroWheel. Content brief provided. Brand approval required before posting.",
                unitSeeding: "Top-tier creators (10K+ engaged followers) receive a complimentary ZeroWheel unit for content creation. Unit must be featured in at least 3 pieces of content.",
              },
              {
                track: "Track 2: Trainer / Athlete Ambassador",
                color: TEAL,
                icon: Trophy,
                who: "Certified trainers, coaches, and athletes who recommend ZeroWheel directly to their clients and networks — not necessarily through social media posts.",
                examples: ["TPI-certified golf fitness trainers", "AMPD Golf Performance coaches", "NASM/NSCA-certified personal trainers", "Physical therapists and sports medicine professionals", "Collegiate or professional athletes with personal networks"],
                howTheyEarn: "Unique referral link and promo code. Commission earned when a client purchases using their code or link. Works for in-person recommendations, text messages, and email referrals.",
                contentExpectation: "No mandatory social posting requirement. Encouraged to share with clients and professional networks. Optional content support provided.",
                unitSeeding: "All Trainer/Athlete Ambassadors receive a complimentary ZeroWheel unit. This is the primary tool for demonstrating to clients and generating organic referrals.",
              },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="rounded-2xl border p-6" style={{ background: CARD_BG, borderColor: `${t.color}25` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${t.color}18` }}>
                    <t.icon className="w-5 h-5" style={{ color: t.color }} />
                  </div>
                  <p className="font-display text-base font-semibold text-white">{t.track}</p>
                </div>
                <p className="font-body text-xs text-white/40 leading-relaxed mb-4">{t.who}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: t.color }}>Who Qualifies</p>
                <ul className="space-y-1.5 mb-4">
                  {t.examples.map((e, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: t.color }} />
                      <span className="font-body text-xs text-white/40">{e}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: GOLD }}>How They Earn</p>
                <p className="font-body text-xs text-white/40 leading-relaxed mb-3">{t.howTheyEarn}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: PURPLE }}>Content Expectation</p>
                <p className="font-body text-xs text-white/40 leading-relaxed mb-3">{t.contentExpectation}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: GREEN }}>Unit Seeding</p>
                <p className="font-body text-xs text-white/40 leading-relaxed">{t.unitSeeding}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMMISSION TIERS */}
      <section id="tiers" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Commission Structure"
            title="Earn More as You Sell More"
            description="WEG recommends a percentage-based commission on the DTC MSRP of $1,095. Percentage-based aligns incentives with the price point and scales cleanly if MSRP changes. Commission rates are tiered by monthly unit volume, resetting each calendar month."
          />

          <DarkCard className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: GOLD }}>Commission Tiers — Based on $1,095 DTC MSRP</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: CARD_BORDER }}>
                    {["Tier", "Monthly Units", "Rate", "Per Unit", "Monthly at Tier Min", "Hold"].map((h) => (
                      <th key={h} className="pb-3 pr-6 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: CARD_BORDER }}>
                  {[
                    { tier: "Standard", range: "1-9 units",   rate: "10%", per: "$109.50", monthly: "$109.50+",  color: GOLD_DIM },
                    { tier: "Silver",   range: "10-24 units", rate: "12%", per: "$131.40", monthly: "$1,314+",   color: GOLD    },
                    { tier: "Gold",     range: "25-49 units", rate: "15%", per: "$164.25", monthly: "$4,106+",   color: TEAL    },
                    { tier: "Platinum", range: "50+ units",   rate: "18%", per: "$197.10", monthly: "$9,855+",   color: PURPLE  },
                  ].map((row) => (
                    <tr key={row.tier}>
                      <td className="py-3 pr-6"><span className="font-mono text-xs font-semibold" style={{ color: row.color }}>{row.tier}</span></td>
                      <td className="py-3 pr-6 font-body text-sm text-white">{row.range}</td>
                      <td className="py-3 pr-6"><span className="font-display text-lg font-semibold" style={{ color: row.color }}>{row.rate}</span></td>
                      <td className="py-3 pr-6 font-mono text-sm text-white/70">{row.per}</td>
                      <td className="py-3 pr-6 font-mono text-sm text-white/50">{row.monthly}</td>
                      <td className="py-3 font-mono text-[10px] text-white/30">60 days</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-xl border p-3" style={{ borderColor: `${GOLD}20`, background: `${GOLD}06` }}>
              <Bell className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
              <p className="font-body text-xs text-white/40">MAP ($1,095) is strictly enforced. Affiliates may not advertise ZeroWheel below MSRP. Commission is calculated on the final sale price after any authorized promotional discounts.</p>
            </div>
          </DarkCard>

          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: TEAL }}>Earnings Scenarios</p>
            <p className="font-display text-lg font-semibold text-white mb-6">What Affiliates Can Realistically Earn</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { persona: "Golf Trainer",        desc: "TPI-certified trainer with 50 active clients. Recommends ZeroWheel to 1-2 clients per month.",                                          units: "2/month",  annual: "$2,628/yr",   rate: "10%", color: GOLD    },
                { persona: "Fitness Influencer",  desc: "Instagram creator with 75K followers in golf/fitness niche. Posts 2x/month, 1% conversion.",                                           units: "12/month", annual: "$18,921/yr",  rate: "12%", color: TEAL    },
                { persona: "Wellness Creator",    desc: "YouTube longevity channel with 200K subscribers. Monthly dedicated video plus story mentions.",                                         units: "30/month", annual: "$59,130/yr",  rate: "15%", color: PURPLE  },
                { persona: "Elite Ambassador",    desc: "Professional athlete or high-profile trainer with 500K+ followers and strong conversion history.",                                      units: "60/month", annual: "$142,272/yr", rate: "18%", color: ORANGE  },
              ].map((s) => (
                <div key={s.persona} className="rounded-2xl border p-5 text-center"
                  style={{ borderColor: `${s.color}25`, background: `${s.color}06` }}>
                  <Tag label={s.persona} color={s.color} />
                  <p className="font-body text-xs text-white/40 leading-relaxed mt-3 mb-4">{s.desc}</p>
                  <p className="font-mono text-[10px] text-white/30 mb-1">{s.units} at {s.rate}</p>
                  <p className="font-display text-xl font-semibold" style={{ color: s.color }}>{s.annual}</p>
                  <p className="font-mono text-[9px] text-white/25 mt-1">estimated annual earnings</p>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* TRACKING */}
      <section id="tracking" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Attribution & Tracking"
            title="Three-Layer Attribution"
            description="WEG recommends a three-layer attribution system to ensure every affiliate sale is accurately tracked and credited. Promo codes are the primary method — they work even when cookies are blocked or the customer purchases on a different device."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                layer: "Layer 1: Promo Code",
                color: GOLD, icon: Hash,
                how: "Each affiliate receives a unique promo code (e.g., MIKE20). Customer enters code at checkout. Code is tied to affiliate record in Salesforce.",
                why: "Works across devices, not blocked by iOS privacy changes, visible to customer, and provides clean attribution even for offline/in-person recommendations.",
                example: "Trainer tells client in person: 'Use code MIKE20 at ZeroWheel.com.' Client purchases 3 days later on mobile. Commission credited to Mike.",
              },
              {
                layer: "Layer 2: Referral Link",
                color: TEAL, icon: Link2,
                how: "Each affiliate also receives a unique UTM-tagged referral link. 30-day cookie set on click. Commission credited if customer purchases within 30 days.",
                why: "Captures sales where customer does not use the promo code but clicked the affiliate's link. Provides additional attribution coverage.",
                example: "Follower clicks affiliate's Instagram bio link, closes the tab. Returns directly 2 weeks later and purchases without a code. Commission still credited via cookie.",
              },
              {
                layer: "Layer 3: UTM Attribution",
                color: PURPLE, icon: BarChart3,
                how: "All affiliate links tagged with utm_source=influencer, utm_medium=affiliate, utm_campaign=[affiliate-name]. Captured in Salesforce Lead Source field.",
                why: "Provides channel-level data for marketing team to measure affiliate program ROI, top-performing affiliates, and content type performance.",
                example: "Monthly report shows: 45 units sold via affiliate channel, top 3 affiliates by revenue, average order value from affiliate traffic vs. direct.",
              },
            ].map((l) => (
              <DarkCard key={l.layer}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${l.color}18` }}>
                    <l.icon className="w-4 h-4" style={{ color: l.color }} />
                  </div>
                  <p className="font-display text-sm font-semibold text-white">{l.layer}</p>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: l.color }}>How It Works</p>
                <p className="font-body text-xs text-white/40 leading-relaxed mb-3">{l.how}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] mb-2" style={{ color: GOLD }}>Why This Layer Matters</p>
                <p className="font-body text-xs text-white/40 leading-relaxed mb-3">{l.why}</p>
                <div className="rounded-xl border p-3" style={{ borderColor: `${l.color}20`, background: `${l.color}06` }}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] mb-1" style={{ color: l.color }}>Example</p>
                  <p className="font-body text-[11px] text-white/35 leading-relaxed italic">{l.example}</p>
                </div>
              </DarkCard>
            ))}
          </div>

          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>Payout Process</p>
            <p className="font-display text-lg font-semibold text-white mb-6">From Sale to Commission Payment</p>
            <div className="flex flex-wrap gap-3 items-center mb-6">
              {[
                { step: "Sale Confirmed",    sub: "Order placed at $1,095",  color: TEAL   },
                { step: "60-Day Hold",       sub: "Fraud + return window",   color: ORANGE },
                { step: "Commission Approved", sub: "Salesforce updated",    color: GOLD   },
                { step: "Monthly Payout",    sub: "ACH or PayPal",           color: GREEN  },
              ].map((s, i, arr) => (
                <div key={s.step} className="flex items-center gap-3">
                  <div className="rounded-xl border px-4 py-3 text-center"
                    style={{ borderColor: `${s.color}30`, background: `${s.color}08` }}>
                    <p className="font-mono text-[10px] font-semibold" style={{ color: s.color }}>{s.step}</p>
                    <p className="font-body text-[10px] text-white/30 mt-0.5">{s.sub}</p>
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-white/20 flex-shrink-0" />}
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "60-Day Hold Rationale",      desc: "ZeroWheel's return window is 30 days. The 60-day hold provides a buffer for returns, chargebacks, and fraud detection. Consistent with Eight Sleep's structure for high-ticket products.", color: ORANGE },
                { title: "Minimum Payout Threshold",   desc: "$100 minimum balance required to trigger monthly payout. Balances below $100 roll over to the following month. No maximum payout limit.",                                                  color: GOLD   },
                { title: "Tax Documentation",          desc: "US affiliates earning over $600/year receive a 1099-NEC. International affiliates complete a W-8BEN form. All payouts reported to IRS as required by law.",                                 color: TEAL   },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border p-4" style={{ borderColor: `${item.color}20`, background: `${item.color}06` }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: item.color }}>{item.title}</p>
                  <p className="font-body text-xs text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* ONBOARDING */}
      <section id="onboarding" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Affiliate Onboarding"
            title="From Application to First Commission"
            description="WEG recommends a structured 5-step onboarding process that gets affiliates earning within 7 days of approval. The onboarding kit is designed to make content creation easy — affiliates should not need to figure out how to talk about ZeroWheel."
          />

          <div className="grid md:grid-cols-5 gap-3 mb-8">
            {[
              { step: "1", title: "Apply",         desc: "Typeform application: audience size, platform, content niche, why ZeroWheel fits. WEG reviews within 48 hours.",                                                                    color: GOLD   },
              { step: "2", title: "Approved",      desc: "Approval email with program agreement. Affiliate signs digitally. Salesforce Partner record created.",                                                                                color: TEAL   },
              { step: "3", title: "Kit Shipped",   desc: "ZeroWheel unit shipped (for qualifying affiliates). Onboarding kit emailed: promo code, referral link, content brief.",                                                               color: PURPLE },
              { step: "4", title: "First Content", desc: "Affiliate posts first piece of content within 14 days of kit receipt. ZeroWheel team reviews and approves.",                                                                         color: ORANGE },
              { step: "5", title: "First Commission", desc: "First sale tracked. Commission logged in Salesforce. Affiliate dashboard updated. Klaviyo welcome sequence complete.",                                                            color: GREEN  },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border p-5 text-center"
                style={{ background: CARD_BG, borderColor: `${s.color}25` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${s.color}18` }}>
                  <span className="font-display text-base font-semibold" style={{ color: s.color }}>{s.step}</span>
                </div>
                <p className="font-display text-sm font-semibold text-white mb-2">{s.title}</p>
                <p className="font-body text-[11px] text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <DarkCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>Affiliate Onboarding Kit</p>
            <p className="font-display text-lg font-semibold text-white mb-6">Everything an Affiliate Needs to Start Earning</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { item: "ZeroWheel Unit",    desc: "Complimentary unit for qualifying affiliates (Track 1: 10K+ engaged followers; Track 2: all Trainer/Athlete Ambassadors). The product must be experienced to be authentically promoted.",                                                                                                                                                color: GOLD,   icon: Dumbbell  },
                { item: "Unique Promo Code", desc: "Personalized code (e.g., MIKE20) that affiliates share with their audience. Code is for tracking only — no discount by default. ZeroWheel may authorize limited-time discount codes for specific campaigns.",                                                                                                                          color: TEAL,   icon: Hash      },
                { item: "Referral Link",     desc: "UTM-tagged unique URL for bio links, email signatures, and digital content. 30-day cookie window. Tracks clicks and conversions in Salesforce.",                                                                                                                                                                                       color: PURPLE, icon: Link2     },
                { item: "Content Brief",     desc: "3 approved talking points per content pillar (Golf Performance, Pickleball/Racquet, Longevity/Rehab). Brand voice guide. Approved hashtags (#ZeroWheel #CoreStrength #ZWCommunity). What NOT to say (no medical claims, no competitor comparisons).",                                                                                  color: ORANGE, icon: FileText  },
                { item: "Brand Assets",      desc: "Logo files, product photos, approved lifestyle imagery, and video clips for use in content. All assets pre-cleared for affiliate use.",                                                                                                                                                                                                 color: GREEN,  icon: Star      },
                { item: "Klaviyo Sequence",  desc: "Affiliates enrolled in a dedicated Klaviyo sequence: welcome email, monthly performance update, new product/campaign announcements, and top-performer recognition emails.",                                                                                                                                                              color: TEAL,   icon: Mail      },
              ].map((k) => (
                <div key={k.item} className="rounded-xl border p-4" style={{ borderColor: `${k.color}20`, background: `${k.color}06` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <k.icon className="w-4 h-4 flex-shrink-0" style={{ color: k.color }} />
                    <p className="font-display text-sm font-semibold text-white">{k.item}</p>
                  </div>
                  <p className="font-body text-xs text-white/40 leading-relaxed">{k.desc}</p>
                </div>
              ))}
            </div>
          </DarkCard>
        </div>
      </section>

      {/* SALESFORCE */}
      <section id="salesforce" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Salesforce Architecture"
            title="Tracking Every Commission in Salesforce"
            description="WEG recommends a dedicated Partner Commission object in Salesforce to track all affiliate program activity. This keeps affiliate data separate from the B2B sales pipeline while maintaining full visibility into program performance."
          />

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: GOLD }}>Partner Record (Custom Object)</p>
              <p className="font-body text-xs text-white/40 mb-4">One record per affiliate. Tracks their profile, tier, lifetime earnings, and active status.</p>
              <div className="space-y-2">
                {[
                  { field: "Partner_Name__c",              type: "Text",        desc: "Full name of influencer/trainer"                                   },
                  { field: "Partner_Track__c",             type: "Picklist",    desc: "Influencer/Creator | Trainer/Ambassador"                           },
                  { field: "Promo_Code__c",                type: "Text (unique)",desc: "Unique promo code (e.g., MIKE20)"                                 },
                  { field: "Referral_URL__c",              type: "URL",         desc: "UTM-tagged referral link"                                          },
                  { field: "Commission_Tier__c",           type: "Formula",     desc: "Standard/Silver/Gold/Platinum (based on MTD units)"                },
                  { field: "Commission_Rate__c",           type: "Formula",     desc: "10% / 12% / 15% / 18% (based on tier)"                            },
                  { field: "MTD_Units_Sold__c",            type: "Roll-up",     desc: "Month-to-date units sold (resets monthly)"                         },
                  { field: "LTD_Units_Sold__c",            type: "Roll-up",     desc: "Lifetime units sold"                                               },
                  { field: "LTD_Commissions_Earned__c",   type: "Currency",    desc: "Total commissions earned (all time)"                               },
                  { field: "Pending_Payout__c",            type: "Currency",    desc: "Commissions approved but not yet paid"                             },
                  { field: "Partner_Status__c",            type: "Picklist",    desc: "Active | Inactive | Suspended | Pending Approval"                 },
                  { field: "Klaviyo_Enrolled__c",          type: "Checkbox",    desc: "Enrolled in affiliate Klaviyo sequence"                            },
                ].map((f) => (
                  <div key={f.field} className="flex items-start gap-3 py-1.5 border-b" style={{ borderColor: CARD_BORDER }}>
                    <code className="font-mono text-[10px] text-white/60 flex-shrink-0 w-52">{f.field}</code>
                    <span className="font-mono text-[9px] flex-shrink-0 w-20" style={{ color: GOLD }}>{f.type}</span>
                    <span className="font-body text-[11px] text-white/30">{f.desc}</span>
                  </div>
                ))}
              </div>
            </DarkCard>

            <DarkCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: TEAL }}>Commission Line Item (Child Object)</p>
              <p className="font-body text-xs text-white/40 mb-4">One record per sale. Links to the parent Partner record and the Opportunity.</p>
              <div className="space-y-2 mb-6">
                {[
                  { field: "Partner__c",                  type: "Lookup",      desc: "Parent Partner record"                                             },
                  { field: "Opportunity__c",              type: "Lookup",      desc: "Linked Salesforce Opportunity"                                     },
                  { field: "Sale_Date__c",                type: "Date",        desc: "Date of customer purchase"                                         },
                  { field: "Sale_Amount__c",              type: "Currency",    desc: "Final sale price (should be $1,095)"                               },
                  { field: "Commission_Rate_Applied__c",  type: "Percent",     desc: "Rate at time of sale (10/12/15/18%)"                               },
                  { field: "Commission_Amount__c",        type: "Formula",     desc: "Sale_Amount__c x Commission_Rate_Applied__c"                       },
                  { field: "Hold_Release_Date__c",        type: "Formula",     desc: "Sale_Date__c + 60 days"                                            },
                  { field: "Payout_Status__c",            type: "Picklist",    desc: "Pending Hold | Approved | Paid | Reversed"                        },
                  { field: "Payout_Date__c",              type: "Date",        desc: "Date commission was paid"                                          },
                  { field: "Attribution_Method__c",       type: "Picklist",    desc: "Promo Code | Referral Link | UTM Cookie"                           },
                  { field: "Promo_Code_Used__c",          type: "Text",        desc: "Actual code entered at checkout"                                   },
                ].map((f) => (
                  <div key={f.field} className="flex items-start gap-3 py-1.5 border-b" style={{ borderColor: CARD_BORDER }}>
                    <code className="font-mono text-[10px] text-white/60 flex-shrink-0 w-52">{f.field}</code>
                    <span className="font-mono text-[9px] flex-shrink-0 w-20" style={{ color: TEAL }}>{f.type}</span>
                    <span className="font-body text-[11px] text-white/30">{f.desc}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: PURPLE }}>Salesforce Automations</p>
              <ul className="space-y-2">
                {[
                  "On Opportunity Close Won: create Commission Line Item, set Hold Release Date = Close Date + 60 days",
                  "On Hold Release Date: update Payout_Status__c to Approved, add to monthly payout batch",
                  "On MTD Units crossing 10/25/50: update Commission_Tier__c and notify rep via Chatter",
                  "Monthly: auto-generate payout report for finance team, reset MTD_Units_Sold__c",
                  "On Partner_Status__c = Inactive: deactivate promo code, send Klaviyo offboarding email",
                ].map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Zap className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: PURPLE }} />
                    <span className="font-body text-xs text-white/40 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </DarkCard>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section id="terms" className="py-20 bg-[#0A0A0A]">
        <div className="container">
          <Divider />
          <SectionHeader
            eyebrow="Program Terms"
            title="Rules of the Road"
            description="WEG recommends clear, simple terms that protect ZeroWheel's brand and pricing integrity while making it easy for affiliates to participate. These terms are informed by Rogue Fitness and Eight Sleep affiliate program structures."
          />
          <div className="space-y-3">
            {[
              { q: "Can affiliates offer discounts to their audience?", a: "No. Affiliates may not advertise or offer ZeroWheel below the MAP price of $1,095. The promo code is for tracking purposes only and does not provide a discount unless ZeroWheel specifically authorizes a discount code for a campaign. Affiliates who advertise below MAP will have their account suspended." },
              { q: "Can a B2B facility use an affiliate code to purchase at $1,095?", a: "No. Affiliate commissions apply to DTC consumer purchases only. If a facility (club, gym, hotel) wants to purchase ZeroWheel units, they must go through the B2B sales process at Vertical ($825) or Commercial ($695) pricing. An affiliate cannot earn commission on a B2B order, and a B2B buyer cannot use a consumer promo code." },
              { q: "What happens if a customer returns the product?", a: "If a customer returns a ZeroWheel within the 30-day return window, the commission for that sale is reversed. This is why the 60-day hold exists — it covers the return window plus a buffer. If a commission has already been paid and a return occurs, the amount will be deducted from the affiliate's next payout." },
              { q: "Can affiliates run paid ads using ZeroWheel's brand name?", a: "No. Affiliates may not run paid search or paid social ads using ZeroWheel's brand name, trademark, or product names as keywords or in ad copy. Organic content promotion is permitted and encouraged. Violation of this policy results in immediate account termination." },
              { q: "How are self-referrals handled?", a: "Affiliates may not use their own promo code or referral link to purchase a ZeroWheel for themselves. Self-referral commissions will be reversed and may result in account suspension. Affiliates who want to purchase additional units should contact ZeroWheel directly." },
              { q: "What content is prohibited?", a: "Affiliates may not make medical claims, compare ZeroWheel to competitors in a disparaging way, use before/after medical imagery, or make income claims about the affiliate program. All content must comply with FTC disclosure requirements — affiliates must clearly disclose their paid relationship with ZeroWheel (#ad, #sponsored, or equivalent)." },
              { q: "How does ZeroWheel handle cookie conflicts (two affiliates claiming the same sale)?", a: "Last-click attribution wins. If a customer clicks two different affiliate links, the most recent click within the 30-day window receives credit. However, if a customer uses a promo code, the promo code takes precedence over cookie attribution regardless of click order." },
              { q: "Can affiliates promote ZeroWheel internationally?", a: "Yes, but commission is only paid on sales completed on ZeroWheel's US e-commerce store. International affiliates must complete a W-8BEN form before receiving payment." },
            ].map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
