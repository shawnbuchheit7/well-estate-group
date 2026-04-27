/*
 * ZeroWheel Product Analysis & GTM Playbook
 * Three Pillars of Superiority, LOB-specific marketing strategies, and strategic recommendations
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package, Target, Dumbbell, Building2, Stethoscope, Ship, Shield, Users,
  Zap, CheckCircle2, ArrowRight, Star, Lightbulb, TrendingUp, ChevronDown,
  ChevronUp, Crosshair, MessageSquare, BarChart3, Globe, Layers, Award,
  BookOpen, Megaphone, UserCheck, AlertTriangle, Activity, DollarSign
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "three-pillars", label: "Three Pillars" },
  { id: "competitive-matrix", label: "Competitive Matrix" },
  { id: "lob-navigator", label: "LOB Navigator" },
  { id: "lob-playbooks", label: "LOB Playbooks" },
  { id: "leverage-points", label: "Leverage Points" },
  { id: "cross-lob", label: "Cross-LOB Synergies" },
  { id: "recommendations", label: "Recommendations" },
];

/* ─── Three Pillars Data ─── */
const pillars = [
  {
    number: "01",
    title: "The Rollout Mechanism",
    subtitle: "Anti-Extension",
    icon: Activity,
    color: "#C9A962",
    science: "EMG studies consistently rank the rollout pattern at the top of the hierarchy for core muscle activation. Research published in the Journal of Human Kinetics demonstrated activation levels exceeding 60% of maximal voluntary contraction — dramatically outperforming traditional crunches.",
    why: "The rollout is an anti-extension exercise. Instead of simply flexing the spine, the core must fire maximally to prevent hyperextension as the body lengthens. This eccentric loading recruits more muscle fibers and builds functional stability that translates directly to athletic performance and injury prevention.",
    citations: ["Journal of Human Kinetics, 2017", "American Council on Exercise, 2014"],
    marketingAngle: "\"The most effective core movement pattern in exercise science — and ZeroWheel is the only device that perfects it.\"",
  },
  {
    number: "02",
    title: "Added Resistance",
    subtitle: "Progressive Overload",
    icon: TrendingUp,
    color: "#C9A962",
    science: "The abdominal muscles are skeletal muscles identical in composition to the biceps or chest — they require progressive overload to grow. Studies show that without adding external resistance, users build endurance rather than true strength or hypertrophy. Greatest rectus abdominis activity occurs when external loads are applied.",
    why: "ZeroWheel solves the \"bodyweight ceiling\" problem with a motor providing up to 40 lbs of magnetic resistance. Users can treat core training like any other major lift — systematically increasing load to force continuous adaptation and growth.",
    citations: ["RP Strength, 2024", "International Journal of Environmental Research and Public Health, 2020"],
    marketingAngle: "\"40 lbs of magnetic resistance. Because your core deserves the same progressive overload as every other muscle.\"",
  },
  {
    number: "03",
    title: "Exercise Variance",
    subtitle: "Adaptive Resistance Prevention",
    icon: Layers,
    color: "#C9A962",
    science: "Scientific literature confirms that exercise variation is critical for long-term muscular development. A phenomenon known as 'adaptive resistance' occurs when the body becomes so efficient at a specific movement that it stops adapting. Systematic reviews show that varying exercises promotes superior hypertrophy.",
    why: "A traditional ab roller does one thing. ZeroWheel enables rollouts, planks, pikes, knee tucks, and rotational oblique movements. By changing the angle, load, and movement pattern, ZeroWheel stimulates the core from every vector — preventing plateaus and ensuring continuous progress.",
    citations: ["Sports Medicine, 2022", "PLoS One, 2019"],
    marketingAngle: "\"One device. Infinite variations. Your core never adapts — it only grows.\"",
  },
];

/* ─── LOB Playbook Data ─── */
const lobPlaybooks = [
  {
    icon: Dumbbell,
    lob: "Premium Fitness Clubs",
    tier: "Tier 1 — Launch Priority",
    tierColor: "#C9A962",
    marketCategory: "Commercial",
    pricing: "$699/unit (40% off list)",
    buyerPersona: "VP of Fitness / Club Operations Director at premium fitness chains (Equinox, Life Time, Bay Club). Decision-maker focused on member retention, floor differentiation, and revenue per square foot.",
    positioning: "The flagship core training station that transforms dead floor space into a high-engagement, high-retention zone. The only motorized core device on the market — a visual and functional centerpiece.",
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"Give your members the #1 EMG-proven core exercise — guided, motorized, and impossible to do wrong.\"" },
      { pillar: "Progressive Overload", angle: "\"40 lbs of magnetic resistance means your advanced members never outgrow it. From beginners to elite — one device.\"" },
      { pillar: "Exercise Variance", angle: "\"Rollouts, planks, pikes, oblique rotations — one compact station replaces an entire core corner.\"" },
    ],
    channels: ["Direct outreach to club operations leadership", "IHRSA / FIBO trade show demos", "Demo day partnerships with top 50 clubs", "Fitness equipment dealer network", "Revenue-share placement model"],
    salesMotion: "Outbound-led. 60–90 day cycle. Demo unit placement → 30-day trial → fleet order. Target: S&C directors and club GMs.",
    objections: [
      { objection: "\"We already have core equipment.\"", response: "No existing core equipment offers motorized resistance with progressive overload. This isn't a replacement — it's a category upgrade that drives member engagement metrics." },
      { objection: "\"Our members won't use it.\"", response: "Connected tracking and guided programs drive 3x engagement vs. passive equipment. Demo data shows 85%+ trial-to-repeat usage." },
      { objection: "\"Price is too high for a core device.\"", response: "At $699/unit with revenue-share options, the ROI per square foot exceeds any traditional core equipment. One device replaces 3–4 pieces." },
    ],
    kpis: ["Units placed per quarter", "Member engagement rate per unit", "Repeat usage (sessions/week)", "Revenue per square foot improvement", "Net Promoter Score from club operators"],
  },
  {
    icon: Stethoscope,
    lob: "Medical & Rehabilitation",
    tier: "Tier 1 — Launch Priority",
    tierColor: "#C9A962",
    marketCategory: "Vertical",
    pricing: "$824/unit (25% off list)",
    buyerPersona: "Medical Director / Physical Therapy Clinic Owner / Sports Medicine Physician. Decision-maker focused on patient outcomes, clinical efficacy, and insurance reimbursement potential.",
    positioning: "Clinical-grade core strengthening with precise progressive resistance and measurable outcomes. The only core device that enables prescribed rehab protocols with data-tracked progression.",
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The anti-extension pattern is the gold standard for spinal stabilization rehab — now with motorized guidance for patient safety.\"" },
      { pillar: "Progressive Overload", angle: "\"Precise resistance increments from 0–40 lbs allow clinicians to prescribe exact load progressions — documented and trackable.\"" },
      { pillar: "Exercise Variance", angle: "\"Multiple movement patterns in one device means a complete core rehab protocol without switching equipment.\"" },
    ],
    channels: ["KOL partnerships with sports medicine physicians", "Medical conference presence (APTA, ACSM)", "Clinical validation study program", "Physical therapy distributor network", "EMR/EHR integration partnerships"],
    salesMotion: "Relationship-led. 90–120 day cycle. Clinical champion identification → Pilot study → Department adoption → Multi-location rollout.",
    objections: [
      { objection: "\"We need clinical evidence.\"", response: "The rollout mechanism has extensive EMG validation. We're launching a clinical outcomes study program — early adopters get co-authorship opportunities." },
      { objection: "\"Insurance won't cover it.\"", response: "The device supports CPT-code-aligned protocols. We provide billing guidance for core stabilization therapy codes." },
      { objection: "\"Our patients are too deconditioned.\"", response: "Resistance starts at zero and increases in micro-increments. The motorized assist actually makes it safer than bodyweight for deconditioned patients." },
    ],
    kpis: ["Clinical pilot programs launched", "Patient outcome improvement scores", "Clinician adoption rate", "Units per multi-location system", "Insurance reimbursement success rate"],
  },
  {
    icon: Package,
    lob: "Direct-to-Consumer",
    tier: "Tier 1 — Launch Priority",
    tierColor: "#C9A962",
    marketCategory: "DTC",
    pricing: "$1,099/unit (full MSRP)",
    buyerPersona: "High-net-worth fitness enthusiast (HHI $200K+), home gym builder, Peloton/Tonal owner. Values premium design, connected features, and science-backed training.",
    positioning: "The luxury home fitness centerpiece for core training. Connected, motorized, and backed by exercise science — filling the one gap in the premium home gym ecosystem.",
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The exercise scientists call it the most effective core movement. We made it perfect for your home.\"" },
      { pillar: "Progressive Overload", angle: "\"Your Peloton builds your legs. Your Tonal builds your upper body. ZeroWheel builds the core that powers everything.\"" },
      { pillar: "Exercise Variance", angle: "\"One sleek device. Dozens of exercises. A complete core training system that fits under your bed.\"" },
    ],
    channels: ["Premium e-commerce storefront", "Instagram/YouTube fitness influencer partnerships", "Podcast sponsorships (Huberman, Attia)", "Facebook/Google performance marketing", "Affiliate program for fitness creators"],
    salesMotion: "Inbound-led. 7–21 day cycle. Content marketing → Social proof → Purchase. Retargeting and email nurture for consideration phase.",
    objections: [
      { objection: "\"$1,099 for a core device?\"", response: "This isn't an ab roller — it's a motorized, connected training system with 40 lbs of resistance and unlimited exercise variety. Compare to $2,500 Tonal or $1,500 Peloton." },
      { objection: "\"I can do core exercises for free.\"", response: "You can — but science shows bodyweight core training plateaus quickly. Progressive overload is the only path to real strength and definition." },
      { objection: "\"Will I actually use it?\"", response: "Connected app with guided programs, progress tracking, and new workouts weekly. Our data shows 4.2 sessions/week average usage." },
    ],
    kpis: ["Monthly unit sales", "Customer acquisition cost (CAC)", "Conversion rate by channel", "Subscription attach rate", "Net Promoter Score"],
  },
  {
    icon: Target,
    lob: "Corporate Wellness",
    tier: "Tier 2 — Growth Phase",
    tierColor: "#888",
    marketCategory: "Vertical",
    pricing: "$824/unit (25% off list)",
    buyerPersona: "VP of Human Resources / Corporate Wellness Director at Fortune 500 companies. Focused on employee engagement, health outcomes ROI, and program utilization metrics.",
    positioning: "The connected core training solution that proves wellness program ROI. Usage analytics and engagement data give HR leaders the metrics they need to justify and expand wellness budgets.",
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"Give your employees access to the most effective core exercise in existence — right in your office fitness center.\"" },
      { pillar: "Progressive Overload", angle: "\"From the intern to the CEO — one device scales to every fitness level. No intimidation, no learning curve.\"" },
      { pillar: "Exercise Variance", angle: "\"Keep your wellness program fresh. New exercises, new challenges, new engagement — all from one compact device.\"" },
    ],
    channels: ["Corporate wellness platform partnerships (Virgin Pulse, Wellable)", "HR/Benefits conference presence", "Direct outreach to Fortune 500 wellness directors", "Corporate fitness center design firms", "Employee engagement case studies"],
    salesMotion: "Outbound + partner-led. 60–90 day cycle. Wellness director meeting → Pilot in 1 location → Usage data review → Enterprise rollout.",
    objections: [
      { objection: "\"We already have a full gym.\"", response: "ZeroWheel isn't replacing your gym — it's adding the one piece of equipment that drives the highest engagement. Connected tracking proves utilization to leadership." },
      { objection: "\"Budget is tight for wellness.\"", response: "At $824/unit, one ZeroWheel replaces multiple core pieces and provides the usage analytics that justify your entire wellness budget to the CFO." },
    ],
    kpis: ["Enterprise accounts signed", "Employee utilization rate", "Program renewal rate", "Units per corporate location", "Wellness ROI metrics delivered"],
  },
  {
    icon: Users,
    lob: "Professional Sports",
    tier: "Tier 2 — Growth Phase",
    tierColor: "#888",
    marketCategory: "Vertical",
    pricing: "$824/unit (25% off list)",
    buyerPersona: "Head Strength & Conditioning Coach / Director of Sports Performance at professional teams, D1 programs, and elite training facilities. Obsessed with marginal gains and performance data.",
    positioning: "The performance edge for elite core training. Precise resistance control, data tracking, and exercise variance give S&C coaches the tool they need to optimize athlete core development.",
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The anti-extension pattern builds the functional core stability that prevents injuries and powers athletic performance.\"" },
      { pillar: "Progressive Overload", angle: "\"Track every rep, every resistance level, every progression. Give your athletes the data-driven core training they deserve.\"" },
      { pillar: "Exercise Variance", angle: "\"Program sport-specific core protocols — rotational power for baseball, anti-extension for football, stability for basketball.\"" },
    ],
    channels: ["S&C coach direct outreach program", "NSCA / CSCCa conference presence", "Team sponsorship and equipment deals", "Athlete ambassador partnerships", "Performance data case studies"],
    salesMotion: "Relationship-led. 30–60 day cycle. S&C coach demo → Team trial → Performance data review → Full adoption. One team adoption creates cascading demand.",
    objections: [
      { objection: "\"We have everything we need.\"", response: "No existing equipment combines motorized resistance with the rollout pattern. Ask your athletes to compare one session on ZeroWheel to their current core routine." },
      { objection: "\"Our athletes are too advanced.\"", response: "40 lbs of magnetic resistance at full extension will humble any athlete. The progressive overload ceiling is higher than any bodyweight core exercise." },
    ],
    kpis: ["Teams/programs adopted", "Athlete performance improvement metrics", "Social media mentions by athletes", "Cascading referrals from S&C network", "Content/case study generation"],
  },
  {
    icon: Building2,
    lob: "Hospitality & Resorts",
    tier: "Tier 2 — Growth Phase",
    tierColor: "#888",
    marketCategory: "Vertical",
    pricing: "$824/unit (25% off list)",
    buyerPersona: "Director of Wellness / GM at 5-star hotels, luxury resorts, and wellness retreats. Focused on guest experience differentiation and wellness amenity upgrades.",
    positioning: "The premium wellness amenity that elevates the guest fitness experience. Connected, guided, and visually stunning — a conversation piece that drives guest engagement and social sharing.",
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"Offer your guests the most effective core workout in exercise science — guided and personalized to any fitness level.\"" },
      { pillar: "Progressive Overload", angle: "\"From the casual guest to the fitness enthusiast — one device delivers a challenging, satisfying workout for everyone.\"" },
      { pillar: "Exercise Variance", angle: "\"New guests, new workouts. The variety keeps your fitness center feeling fresh and cutting-edge.\"" },
    ],
    channels: ["Hospitality trade shows (HITEC, ALIS, BDNY)", "Luxury hotel chain procurement teams", "Wellness resort design consultants", "White-label branding partnerships", "Guest engagement analytics platform"],
    salesMotion: "Outbound-led. 90–120 day cycle. Property visit → Pilot installation → Guest feedback data → Chain-wide rollout.",
    objections: [
      { objection: "\"Our fitness center is already equipped.\"", response: "ZeroWheel isn't replacing equipment — it's adding a premium, Instagram-worthy piece that guests talk about. It's a wellness amenity, not just gym equipment." },
      { objection: "\"Guests won't know how to use it.\"", response: "Built-in guided programs and QR-code onboarding mean any guest can start a workout in 30 seconds. Zero learning curve." },
    ],
    kpis: ["Properties installed", "Guest usage sessions per week", "Social media mentions/shares", "Guest satisfaction score impact", "Chain-wide expansion rate"],
  },
  {
    icon: Shield,
    lob: "Military & Government",
    tier: "Tier 3 — Scale Phase",
    tierColor: "#555",
    marketCategory: "Vertical",
    pricing: "$824/unit (25% off list)",
    buyerPersona: "Installation Fitness Director / DoD Procurement Officer / VA Rehabilitation Program Manager. Values durability, scalability, data tracking, and compliance with federal procurement standards.",
    positioning: "Durable, data-driven core training for military fitness programs and VA rehabilitation. Built to withstand high-volume institutional use with the tracking and reporting government buyers require.",
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The anti-extension pattern builds the combat-ready core stability that prevents injuries in the field.\"" },
      { pillar: "Progressive Overload", angle: "\"Standardized resistance levels enable consistent PT scoring and rehabilitation protocols across installations.\"" },
      { pillar: "Exercise Variance", angle: "\"Multiple exercise modes support diverse fitness requirements — from combat readiness to post-injury rehabilitation.\"" },
    ],
    channels: ["GSA Schedule listing", "IDIQ contract pursuit", "Military fitness conference presence", "VA rehabilitation program partnerships", "Defense contractor fitness facility programs"],
    salesMotion: "Government procurement-led. 120–180 day cycle. RFI response → Pilot at 2–3 installations → Performance review → Contract award.",
    objections: [
      { objection: "\"Not on GSA Schedule.\"", response: "GSA Schedule listing is in progress. In the interim, we can fulfill through existing micro-purchase thresholds or BPA agreements." },
      { objection: "\"Durability concerns for military use.\"", response: "Industrial-grade construction with no exposed moving parts. Designed for 50,000+ session lifecycle. We'll provide durability testing data." },
    ],
    kpis: ["Installations deployed", "Soldiers/veterans served", "Contract value secured", "Fitness test score improvements", "Rehabilitation outcome metrics"],
  },
  {
    icon: Ship,
    lob: "Cruise & Maritime",
    tier: "Tier 3 — Scale Phase",
    tierColor: "#555",
    marketCategory: "Commercial",
    pricing: "$699/unit (40% off list)",
    buyerPersona: "VP of Onboard Experience / Cruise Line Fitness Director / Superyacht Interior Designer. Focused on space efficiency, guest experience, and premium amenity differentiation.",
    positioning: "The compact, connected core training solution designed for space-constrained marine environments. Premium guest experience in a footprint that fits anywhere on board.",
    messaging: [
      { pillar: "Rollout Mechanism", angle: "\"The most effective core exercise in the smallest possible footprint — perfect for onboard fitness centers.\"" },
      { pillar: "Progressive Overload", angle: "\"One device serves every passenger — from first-time exercisers to elite athletes. No need for multiple core machines.\"" },
      { pillar: "Exercise Variance", angle: "\"Keep passengers engaged across a 7-day voyage with new exercises and challenges every day.\"" },
    ],
    channels: ["Cruise line procurement partnerships", "Seatrade Cruise Global conference", "Marine fitness equipment distributors", "Superyacht dealer network", "Maritime fitness design consultants"],
    salesMotion: "Outbound + partner-led. 120–180 day cycle. Cruise line HQ meeting → Ship pilot → Passenger feedback → Fleet-wide rollout.",
    objections: [
      { objection: "\"Space is too limited.\"", response: "ZeroWheel's footprint is smaller than any comparable core equipment. It stores vertically and requires zero permanent floor space." },
      { objection: "\"Maintenance at sea is a concern.\"", response: "No hydraulics, no cables, no consumable parts. Magnetic resistance motor requires zero maintenance. Ideal for maritime environments." },
    ],
    kpis: ["Ships/yachts installed", "Passenger usage rate", "Guest satisfaction impact", "Fleet-wide expansion", "Maritime distributor partnerships"],
  },
];

export default function ZWProductAnalysis() {
  const [expandedLob, setExpandedLob] = useState<number | null>(null);

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          logoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png"
          logoAlt="ZeroWheel"
          brandName="ZeroWheel"
          eyebrow="Product Analysis & GTM Playbook"
          title="Three Pillars of Superiority"
          description="A science-backed product analysis anchored to the three pillars of core training superiority — with systematic, LOB-specific go-to-market playbooks for each macro line of business."
          stats={[
            { value: "3", label: "Pillars of Superiority" },
            { value: "8", label: "LOB Playbooks" },
            { value: "40 lbs", label: "Magnetic Resistance" },
          ]}
        />
      </div>

      {/* ═══ THREE PILLARS OF SUPERIORITY ═══ */}
      <section id="three-pillars" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Science-Backed Positioning
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              The Three Pillars of Core Training Superiority
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-3xl mx-auto">
              The core training market forces consumers to compromise. Traditional ab wheels offer the right mechanism but lack resistance. Machines offer resistance but force unnatural patterns. Bodyweight offers variety but no progressive overload. ZeroWheel is the only product that integrates all three scientifically proven pillars.
            </motion.p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-black/[0.15] bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Pillar Number Sidebar */}
                  <div className="md:w-24 bg-[#0A0A0A] flex items-center justify-center py-6 md:py-0">
                    <span className="font-display text-4xl font-bold text-[#C9A962]">{pillar.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8">
                    <div className="flex items-center gap-3 mb-1">
                      <pillar.icon className="w-6 h-6 text-[#C9A962]" />
                      <h3 className="font-display text-xl font-semibold text-black">{pillar.title}</h3>
                    </div>
                    <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase mb-4">{pillar.subtitle}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* The Science */}
                      <div>
                        <p className="font-mono text-[10px] text-black/40 tracking-wider uppercase mb-2">The Science</p>
                        <p className="font-body text-sm text-black/65 leading-relaxed">{pillar.science}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {pillar.citations.map((cite, j) => (
                            <span key={j} className="font-mono text-[9px] text-black/35 bg-black/[0.04] px-2 py-1 rounded">
                              {cite}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* The Why + Marketing Angle */}
                      <div>
                        <p className="font-mono text-[10px] text-black/40 tracking-wider uppercase mb-2">Why It Matters</p>
                        <p className="font-body text-sm text-black/65 leading-relaxed mb-4">{pillar.why}</p>
                        <div className="p-3 rounded-xl bg-[#C9A962]/5 border border-[#C9A962]/20">
                          <p className="font-mono text-[9px] text-[#C9A962] tracking-wider uppercase mb-1">Marketing Angle</p>
                          <p className="font-body text-sm text-black/80 italic">{pillar.marketingAngle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPETITIVE MATRIX ═══ */}
      <section id="competitive-matrix" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Competitive Positioning
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              The ZeroWheel Synthesis
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Every competitor delivers one or two pillars. ZeroWheel is the only device that delivers all three — the complete synthesis of core training science.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-black/[0.15] overflow-hidden"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0A0A0A] text-white">
                    <th className="text-left p-4 font-mono text-xs tracking-wider uppercase">Product Category</th>
                    <th className="text-center p-4 font-mono text-xs tracking-wider uppercase">Rollout Mechanism</th>
                    <th className="text-center p-4 font-mono text-xs tracking-wider uppercase">Progressive Overload</th>
                    <th className="text-center p-4 font-mono text-xs tracking-wider uppercase">Exercise Variance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { product: "Traditional Ab Wheels", rollout: true, resistance: false, variance: false },
                    { product: "Crunch Machines", rollout: false, resistance: true, variance: false },
                    { product: "Bodyweight Circuits", rollout: false, resistance: false, variance: true },
                    { product: "Cable Machines", rollout: false, resistance: true, variance: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-black/[0.06]">
                      <td className="p-4 font-body text-sm text-black/70 font-medium">{row.product}</td>
                      <td className="p-4 text-center">{row.rollout ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-black/20">—</span>}</td>
                      <td className="p-4 text-center">{row.resistance ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-black/20">—</span>}</td>
                      <td className="p-4 text-center">{row.variance ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-black/20">—</span>}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#C9A962]/10 border-t-2 border-[#C9A962]">
                    <td className="p-4 font-display text-sm text-black font-bold">ZeroWheel</td>
                    <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-[#C9A962] mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-[#C9A962] mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-[#C9A962] mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
            <p className="font-body text-xs text-black/35 mt-3 text-center italic">
              ZeroWheel is the only product that successfully integrates all three scientifically proven pillars of optimal core development.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ LOB NAVIGATOR ═══ */}
      <section id="lob-navigator" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Go-To-Market Playbook
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              8 Lines of Business — Systematic Approach
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-3xl mx-auto">
              Each LOB has a complete playbook: buyer persona, positioning, pillar-specific messaging, marketing channels, sales motion, objection handling, and KPIs. Organized by launch priority tier.
            </motion.p>
          </motion.div>

          {/* Priority Tier Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-5xl mx-auto">
            {[
              { label: "Tier 1 — Launch Priority", color: "#C9A962", count: 3 },
              { label: "Tier 2 — Growth Phase", color: "#888", count: 3 },
              { label: "Tier 3 — Scale Phase", color: "#555", count: 2 },
            ].map((tier, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tier.color }} />
                <span className="font-mono text-[10px] tracking-wider uppercase text-black/60">{tier.label}</span>
                <span className="font-display text-xs font-bold text-black/40">({tier.count})</span>
              </div>
            ))}
          </div>

          {/* LOB Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {lobPlaybooks.map((lob, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setExpandedLob(i);
                  setTimeout(() => {
                    document.getElementById("lob-playbooks")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 hover:shadow-lg ${
                  expandedLob === i
                    ? "border-[#C9A962] bg-[#C9A962]/5 shadow-md"
                    : "border-black/[0.15] bg-white hover:border-[#C9A962]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <lob.icon className="w-7 h-7 text-[#C9A962]" />
                  <span
                    className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${lob.tierColor}15`, color: lob.tierColor }}
                  >
                    {lob.marketCategory}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold text-black mb-1">{lob.lob}</h3>
                <p className="font-mono text-[10px] text-black/40">{lob.pricing}</p>
                <div className="flex items-center gap-1 mt-3 text-[#C9A962]">
                  <span className="font-mono text-[10px] tracking-wider uppercase">View Playbook</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOB PLAYBOOKS (Expandable) ═══ */}
      <section id="lob-playbooks" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Detailed Playbooks
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              LOB-Specific Marketing Strategies
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Click any LOB to expand its complete go-to-market playbook — including buyer persona, pillar-specific messaging, channels, sales motion, objection handling, and success metrics.
            </motion.p>
          </motion.div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {lobPlaybooks.map((lob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  expandedLob === i
                    ? "border-[#C9A962] shadow-lg"
                    : "border-black/[0.15] hover:border-[#C9A962]/40"
                }`}
              >
                {/* Header (always visible) */}
                <button
                  onClick={() => setExpandedLob(expandedLob === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-[#FAFAF8] transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                      <lob.icon className="w-5 h-5 text-[#C9A962]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-black">{lob.lob}</h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span
                          className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${lob.tierColor}15`, color: lob.tierColor }}
                        >
                          {lob.tier}
                        </span>
                        <span className="font-mono text-[10px] text-black/40">{lob.marketCategory} · {lob.pricing}</span>
                      </div>
                    </div>
                  </div>
                  {expandedLob === i ? (
                    <ChevronUp className="w-5 h-5 text-[#C9A962] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-black/30 flex-shrink-0" />
                  )}
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedLob === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 bg-white border-t border-black/[0.06]">
                        {/* Row 1: Buyer Persona + Positioning */}
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div className="p-5 rounded-xl bg-[#FAFAF8] border border-black/[0.08]">
                            <div className="flex items-center gap-2 mb-3">
                              <UserCheck className="w-4 h-4 text-[#C9A962]" />
                              <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase">Target Buyer Persona</p>
                            </div>
                            <p className="font-body text-sm text-black/70 leading-relaxed">{lob.buyerPersona}</p>
                          </div>
                          <div className="p-5 rounded-xl bg-[#FAFAF8] border border-black/[0.08]">
                            <div className="flex items-center gap-2 mb-3">
                              <Crosshair className="w-4 h-4 text-[#C9A962]" />
                              <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase">Core Positioning</p>
                            </div>
                            <p className="font-body text-sm text-black/70 leading-relaxed">{lob.positioning}</p>
                          </div>
                        </div>

                        {/* Row 2: Pillar-Specific Messaging */}
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-4">
                            <MessageSquare className="w-4 h-4 text-[#C9A962]" />
                            <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase">Pillar-Specific Messaging</p>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            {lob.messaging.map((msg, j) => (
                              <div key={j} className="p-4 rounded-xl bg-[#FAFAF8] border border-black/[0.08]">
                                <p className="font-mono text-[9px] text-black/40 tracking-wider uppercase mb-2">Pillar {j + 1}: {msg.pillar}</p>
                                <p className="font-body text-sm text-black/75 italic leading-relaxed">{msg.angle}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Row 3: Channels + Sales Motion */}
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Megaphone className="w-4 h-4 text-[#C9A962]" />
                              <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase">Marketing Channels & Tactics</p>
                            </div>
                            <div className="space-y-2">
                              {lob.channels.map((channel, j) => (
                                <div key={j} className="flex items-start gap-2 text-sm text-black/65">
                                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A962] mt-0.5 flex-shrink-0" />
                                  {channel}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-5 rounded-xl bg-[#0A0A0A] text-white">
                            <div className="flex items-center gap-2 mb-3">
                              <Target className="w-4 h-4 text-[#C9A962]" />
                              <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase">Sales Motion</p>
                            </div>
                            <p className="font-body text-sm text-white/80 leading-relaxed">{lob.salesMotion}</p>
                          </div>
                        </div>

                        {/* Row 4: Objection Handling */}
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-4">
                            <AlertTriangle className="w-4 h-4 text-[#C9A962]" />
                            <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase">Objection Handling</p>
                          </div>
                          <div className="space-y-3">
                            {lob.objections.map((obj, j) => (
                              <div key={j} className="p-4 rounded-xl border border-black/[0.08] bg-[#FAFAF8]">
                                <p className="font-display text-sm font-semibold text-black/80 mb-2">{obj.objection}</p>
                                <p className="font-body text-sm text-black/60 leading-relaxed pl-4 border-l-2 border-[#C9A962]">{obj.response}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Row 5: KPIs */}
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-3">
                            <BarChart3 className="w-4 h-4 text-[#C9A962]" />
                            <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase">Success Metrics & KPIs</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {lob.kpis.map((kpi, j) => (
                              <span key={j} className="font-body text-xs text-black/60 bg-[#FAFAF8] border border-black/[0.08] px-3 py-1.5 rounded-full">
                                {kpi}
                              </span>
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
        </div>
      </section>

      {/* ═══ LEVERAGE POINTS ═══ */}
      <section id="leverage-points" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Strategic Advantages
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Product Leverage Points
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Six core advantages that apply across every LOB — the foundation of every sales conversation and marketing message.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Only Motorized Core Device", desc: "No direct competitor exists. ZeroWheel creates and owns a new category — motorized progressive resistance core training. First-mover advantage is absolute.", icon: Award },
              { title: "Science-Backed Positioning", desc: "Every marketing claim is anchored to peer-reviewed research. The Three Pillars framework gives sales teams a credible, repeatable story that resonates with clinical and performance buyers.", icon: BookOpen },
              { title: "Universal Scalability", desc: "From rehabilitation patients at 0 lbs to elite athletes at 40 lbs — the same device serves the full spectrum. One SKU covers every LOB and every user.", icon: Users },
              { title: "Connected Data Platform", desc: "Usage tracking, progress analytics, and engagement metrics enable subscription revenue, prove ROI to institutional buyers, and create switching costs.", icon: BarChart3 },
              { title: "Compact Form Factor", desc: "Smaller footprint than any comparable core equipment. Enables placement in space-constrained environments — cruise ships, hotel rooms, corporate offices, home gyms.", icon: Package },
              { title: "Multi-Stream Revenue", desc: "Hardware + subscription + accessories + content licensing = four revenue streams per unit sold. Recurring revenue transforms the business model from transactional to SaaS-like.", icon: DollarSign },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-black/[0.15] bg-white hover:border-[#C9A962]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A962]/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <span className="font-display text-xs font-bold text-[#C9A962]">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-black mb-2">{point.title}</h3>
                <p className="font-body text-sm text-black/60 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CROSS-LOB SYNERGIES ═══ */}
      <section id="cross-lob" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Network Effects
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Cross-LOB Synergies
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Wins in one LOB create cascading demand across others. The systematic approach ensures each market entry amplifies the next.
            </motion.p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-4">
            {[
              {
                from: "Professional Sports",
                to: "Premium Fitness Clubs → DTC",
                effect: "Pro team adoption creates aspirational demand. When members see their favorite team using ZeroWheel, clubs want it on their floor — and consumers want it at home.",
              },
              {
                from: "Medical & Rehabilitation",
                to: "Corporate Wellness → Military/Gov",
                effect: "Clinical validation studies provide the evidence base that institutional buyers require. A published outcomes study unlocks corporate wellness budgets and government procurement.",
              },
              {
                from: "Premium Fitness Clubs",
                to: "Hospitality → Cruise/Maritime",
                effect: "Club floor presence creates brand awareness and user familiarity. Hotels and cruise lines adopt equipment their guests already know and trust from their home gym.",
              },
              {
                from: "DTC Success",
                to: "All B2B Channels",
                effect: "Strong DTC sales and social proof (reviews, influencer content, user testimonials) de-risk the purchase decision for every institutional buyer.",
              },
            ].map((synergy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-black/[0.15] bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1">
                  <div className="w-8 h-8 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#C9A962]" />
                  </div>
                  <div className="w-px h-8 bg-[#C9A962]/20" />
                  <ArrowRight className="w-4 h-4 text-[#C9A962]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-sm font-bold text-black">{synergy.from}</span>
                    <ArrowRight className="w-3 h-3 text-[#C9A962]" />
                    <span className="font-mono text-xs text-[#C9A962]">{synergy.to}</span>
                  </div>
                  <p className="font-body text-sm text-black/60 leading-relaxed">{synergy.effect}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC RECOMMENDATIONS ═══ */}
      <section id="recommendations" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              WEG Recommendations
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Strategic Recommendations
            </motion.h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                priority: "01",
                title: "Lead with the Three Pillars in Every Conversation",
                description: "The Three Pillars framework is the single most powerful sales tool. Every pitch deck, every demo, every piece of content should open with the science. It immediately elevates ZeroWheel from \"another ab roller\" to \"the only complete core training system\" — and it's backed by peer-reviewed research that no competitor can match.",
                action: "Build a 60-second Three Pillars pitch script for every sales rep. Create a one-page leave-behind for in-person demos.",
              },
              {
                priority: "02",
                title: "Launch Tier 1 LOBs Simultaneously — Clubs, Medical, DTC",
                description: "These three LOBs create a reinforcing triangle. Club placements drive brand awareness. Medical validation builds credibility. DTC sales generate revenue and social proof. Launching all three in parallel maximizes cross-LOB synergies from day one.",
                action: "Allocate 70% of launch resources to Tier 1. Target 25 club placements, 10 clinical pilots, and 500 DTC units in the first 90 days.",
              },
              {
                priority: "03",
                title: "Invest in Clinical Validation Early",
                description: "A published clinical outcomes study is the single highest-leverage asset for unlocking Tier 2 and Tier 3 LOBs. Corporate wellness, government, and military buyers all require evidence-based justification. Start the study now — it takes 6–12 months to publish.",
                action: "Partner with 2–3 sports medicine clinics for a prospective outcomes study. Budget for IRB approval and publication fees.",
              },
              {
                priority: "04",
                title: "Build the Athlete Ambassador Pipeline",
                description: "One professional athlete posting a ZeroWheel workout creates more demand than $100K in paid advertising. The cascading effect — pro team → club floor → consumer — is the most capital-efficient growth engine available.",
                action: "Identify 10 target athletes across NFL, NBA, and MLB. Offer equipment + content collaboration deals. Prioritize athletes with strong social media presence.",
              },
              {
                priority: "05",
                title: "Systematize the LOB Playbooks into Sales Enablement",
                description: "The playbook data on this page should be converted into actionable sales tools — battle cards, objection handling cheat sheets, buyer persona profiles, and LOB-specific pitch decks. Every sales rep should be able to execute any LOB playbook independently.",
                action: "Create a Sales Enablement Kit with one battle card per LOB. Include in the Sales Enablement tab and distribute to all channel partners.",
              },
            ].map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl border border-black/[0.15] bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-bold text-[#C9A962]">{rec.priority}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-black mb-3">{rec.title}</h3>
                    <p className="font-body text-sm text-black/65 leading-relaxed mb-4">{rec.description}</p>
                    <div className="p-4 rounded-xl bg-[#C9A962]/5 border border-[#C9A962]/20">
                      <p className="font-mono text-[9px] text-[#C9A962] tracking-wider uppercase mb-1">Recommended Action</p>
                      <p className="font-body text-sm text-black/75">{rec.action}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
