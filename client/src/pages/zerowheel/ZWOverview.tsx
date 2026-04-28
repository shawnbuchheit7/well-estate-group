/*
 * GTM Home / Overview Page - Well Estate Group Go-To-Market Consulting
 * TAILORED: Connected fitness device (core training wheel) go-to-market strategy
 * Design: Ultra-premium luxury — black, grey, white, gold
 */

import { motion } from "framer-motion";
import { Target, TrendingUp, Users, BarChart3, ArrowRight, CheckCircle2, Globe, Building2, Dumbbell, Stethoscope, Ship, Shield, Zap, Award, DollarSign, Layers, Store, Star, Package } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "opportunity", label: "Opportunity" },
  { id: "channel-strategy", label: "Channel Strategy" },
  { id: "immediate-focus", label: "Go-To-Market Plan" },
  { id: "pricing-strategy", label: "Pricing Strategy" },
  { id: "why-weg", label: "Why WEG" },
];

export default function ZWOverview() {
  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero Section — Premium Light */}
      <div id="hero">
        <LightHero
          logoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png"
          logoAlt="ZeroWheel"
          
          eyebrow="WEG Consulting Proposal"
          title="Go-To-Market Strategy & Execution"
          description="Well Estate Group's proposed consulting engagement for ZeroWheel — a comprehensive go-to-market strategy spanning 9 macro lines of business, from premium club placement and professional sports adoption to medical rehabilitation, government procurement, and global hospitality distribution. This presentation outlines the strategic framework, pricing architecture, and sales infrastructure WEG recommends to accelerate ZeroWheel's market entry."
          stats={[
            { value: "9", label: "Macro Lines of Business" },
            { value: "4", label: "Global Regions" },
            { value: "4", label: "Pricing Tiers" },
            { value: "$6.7T", label: "Wellness Market Size" },
          ]}
        />
      </div>

      {/* Market Opportunity */}
      <section id="opportunity" className="py-18 bg-white">
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
              Market Opportunity
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              One Device, Nine Markets
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              A motorized core training device with scalable difficulty has a unique advantage — 
              it serves everyone from rehabilitation patients to elite athletes, creating 
              simultaneous market entry across nine distinct verticals.
            </motion.p>
          </motion.div>

          {/* 9 Market Segments */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Star, label: "Private Clubs", description: "Golf, country, city, and leisure clubs" },
              { icon: Dumbbell, label: "Commercial Fitness", description: "Health clubs, boutique studios, and fitness chains" },
              { icon: Stethoscope, label: "Medical & Rehab", description: "Physical therapy, sports medicine, and longevity centers" },
              { icon: Package, label: "Direct-to-Consumer", description: "E-commerce, social commerce, and retail" },
              { icon: Target, label: "Corporate Wellness", description: "Fortune 500 wellness programs and corporate fitness" },
              { icon: Award, label: "Professional Sports", description: "Pro teams, collegiate athletics, and performance training" },
              { icon: Building2, label: "Hospitality & Amenities", description: "Luxury hotels, resorts, and premium residential" },
              { icon: Shield, label: "Military & Government", description: "DoD, VA rehab, and GSA-compliant procurement" },
              { icon: Ship, label: "Cruise & Maritime", description: "Cruise lines, superyachts, and marine fitness" },
            ].map((touchpoint, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                className="relative group"
              >
                <div className="bg-white border border-black/[0.12] rounded-2xl p-6 h-full hover:border-[#C9A962]/40 hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C9A962]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-[#C9A962]/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A962]/15 transition-colors">
                      <touchpoint.icon className="w-7 h-7 text-[#C9A962]" />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-black mb-2">{touchpoint.label}</h3>
                    <p className="font-body text-xs text-black/55 leading-relaxed">{touchpoint.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Product Positioning Arrow */}
          <motion.div
            className="max-w-3xl mx-auto mt-14 flex flex-col md:flex-row items-center justify-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ scale: 1.02 }}
              className="text-center p-7 rounded-2xl border border-black/[0.15] bg-white flex-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <p className="font-mono text-[10px] text-black/45 uppercase tracking-[0.2em] mb-2">Current State</p>
              <p className="font-display text-xl font-semibold text-black">Direct-to-Consumer</p>
              <p className="font-body text-xs text-black/50 mt-2">E-commerce and organic growth</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-8 h-8 text-[#C9A962] rotate-90 md:rotate-0" />
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ scale: 1.02 }}
              className="text-center p-7 rounded-2xl border border-black/[0.15] bg-white flex-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.2em] mb-2">With WEG</p>
              <p className="font-display text-xl font-semibold text-black">Full B2B Distribution</p>
              <p className="font-body text-xs text-black/50 mt-2">9 macro LOBs, 4 global regions, 30+ channel partners</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-8 h-8 text-[#C9A962] rotate-90 md:rotate-0" />
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ scale: 1.02 }}
              className="text-center p-7 rounded-2xl border-2 border-[#C9A962]/30 bg-[#C9A962]/[0.03] flex-1 shadow-[0_4px_20px_rgba(201,169,98,0.08)]"
            >
              <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.2em] mb-2">Scale</p>
              <p className="font-display text-xl font-semibold text-black">Dealers & Resellers</p>
              <p className="font-body text-xs text-black/50 mt-2">Authorized dealer network, regional resellers, white-label partners</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Channel Strategy */}
      <section id="channel-strategy" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Channel Strategy
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Distribution Across Every Vertical
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              WEG's established relationships and multi-vertical framework provide immediate 
              access to the highest-value B2B channels for a connected fitness device.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Private Clubs",
                description: "Platinum Clubs of America, Troon-managed properties, CMAA network, and luxury athletic clubs. Position as a flagship core training station within premium club floor plans.",
                icon: Star,
                tag: "Vertical · $825",
              },
              {
                title: "Commercial Fitness Clubs",
                description: "Large-format fitness chains and boutique studios — high-volume placement with revenue-share, group class integration, and new premium member tier creation.",
                icon: Dumbbell,
                tag: "Commercial · $695",
              },
              {
                title: "Medical & Rehabilitation",
                description: "Physical therapy clinics, physician-led longevity centers, and hospital wellness programs. Scalable difficulty makes it ideal for progressive rehabilitation protocols.",
                icon: Stethoscope,
                tag: "Vertical · $825",
              },
              {
                title: "Direct-to-Consumer",
                description: "Premium e-commerce and retail — the broadest reach channel for brand awareness, full margin capture, and social proof generation via influencer and affiliate programs.",
                icon: Package,
                tag: "DTC · $1,095",
              },
              {
                title: "Corporate Wellness",
                description: "Fortune 500 wellness programs addressing the #1 workplace injury (lower back pain) with gamified engagement, measurable ROI, and executive wellness positioning.",
                icon: Target,
                tag: "Vertical · $825",
              },
              {
                title: "Professional Sports",
                description: "Direct relationships with NFL, MLB, PGA, and NCAA strength & conditioning programs. Leverage existing athlete endorsements to drive institutional adoption.",
                icon: Award,
                tag: "Vertical · $825",
              },
              {
                title: "Hospitality & Amenities",
                description: "5-star hotels, luxury resorts, wellness retreats, and premium residential amenity centers. Compact footprint and self-guided experience for space-constrained environments.",
                icon: Building2,
                tag: "Vertical · $825",
              },
              {
                title: "Military & Government",
                description: "GSA-compliant procurement pathway. Target Army MWR, Air Force fitness centers, and law enforcement tactical fitness programs through established government channels.",
                icon: Shield,
                tag: "GSA · $694",
              },
              {
                title: "Cruise & Maritime",
                description: "One Spa World partnership across 144 vessels at sea. Cruise ship wellness programs and superyacht installations — zero-maintenance magnetic resistance in the smallest footprint.",
                icon: Ship,
                tag: "Vertical · $825",
              },
            ].map((channel, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                className="flex flex-col p-5 rounded-xl bg-white border border-black/[0.12] hover:border-[#C9A962]/25 hover:shadow-lg transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                    <channel.icon className="w-4.5 h-4.5 text-[#C9A962]" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-black/40 bg-black/[0.04] px-2 py-0.5 rounded-full">{channel.tag}</span>
                </div>
                <h3 className="font-display text-sm font-semibold text-black mb-1.5">{channel.title}</h3>
                <p className="font-body text-xs text-black/55 leading-relaxed">{channel.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Go-To-Market Plan */}
      <section id="immediate-focus" className="py-18">
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
              Go-To-Market Plan
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 text-black">
              Phase 1 Priorities
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Anchor Placement in Premium Clubs",
                description: "Secure flagship placements in 10–15 top-tier private clubs and fitness centers to establish credibility, generate case studies, and create organic demand from member exposure.",
              },
              {
                title: "Leverage Pro Sports Validation",
                description: "Activate existing relationships with professional teams and athletes. Athlete endorsements and team adoption create top-down demand across every downstream channel.",
              },
              {
                title: "Medical Channel Development",
                description: "Position the device as a clinical-grade rehabilitation tool. Partner with physical therapy networks and longevity centers to build the medical credibility that unlocks insurance and institutional procurement.",
              },
              {
                title: "Government & Military Pipeline",
                description: "Pursue GSA Schedule listing and direct military procurement. Target Army MWR, base fitness centers, and tactical fitness programs — compact form factor and scalable difficulty are key differentiators.",
              },
              {
                title: "Hospitality & Maritime Expansion",
                description: "Deploy through One Spa World's 144-vessel network and premium hotel partnerships. Small footprint and connected technology make it ideal for space-constrained ship and hotel fitness centers.",
              },
              {
                title: "Build Sales Infrastructure",
                description: "Develop dedicated sales personnel and channel partner training programs. Create product demonstration kits, ROI calculators, and facility integration guides for each vertical.",
              },
            ].map((focus, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                className="flex gap-4 items-start p-5 rounded-xl bg-white border border-black/[0.12] hover:border-[#C9A962]/25 hover:shadow-lg transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="w-7 h-7 rounded-full bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A962]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-black mb-1.5">{focus.title}</h3>
                  <p className="font-body text-sm text-black/55 leading-relaxed">{focus.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GTM Pricing Strategy */}
      <section id="pricing-strategy" className="py-18 bg-[#FAFAF8]">
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
              Pricing Strategy
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Go-To-Market Pricing Framework
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              All pricing anchored to the $1,095 MSRP — structured as maximum discount thresholds (do not exceed) across three distinct market categories: DTC, Vertical, and Commercial. GSA best pricing: $694.
            </motion.p>
          </motion.div>

          {/* Pricing Tiers */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                tier: "Direct-to-Consumer",
                price: "$1,095",
                unit: "full list price (0% off)",
                description: "Full MSRP through e-commerce, social, and organic channels. Highest margin per unit with complete brand control.",
                features: ["E-commerce storefront", "Social media direct", "Influencer partnerships", "Full margin capture at $1,095"],
                highlight: false,
              },
              {
                tier: "Vertical Markets",
                price: "$825",
                unit: "max 25% off list (do not exceed)",
                description: "Specialized verticals with high brand alignment — medical, sports performance, hospitality, and corporate wellness. Maximum discount threshold — do not exceed.",
                features: ["Medical & longevity clinics", "Sports performance facilities", "Hospitality & luxury resorts", "Cruise & maritime"],
                highlight: true,
              },
              {
                tier: "Commercial Markets",
                price: "$695",
                unit: "max 40% off list (do not exceed)",
                description: "Health clubs, authorized dealers, and reseller partners. Maximum discount threshold — no channel goes below $695 under any circumstance.",
                features: ["Health clubs & fitness centers", "Authorized dealers & retailers", "Regional distributors", "MAP pricing strictly enforced"],
                highlight: false,
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  tier.highlight
                    ? "border-2 border-[#C9A962]/30 bg-white shadow-[0_4px_20px_rgba(201,169,98,0.08)]"
                    : "border-black/[0.12] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C9A962] text-white text-[10px] font-mono tracking-wider uppercase">
                    Primary Channel
                  </div>
                )}
                <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.2em] mb-3">{tier.tier}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-3xl font-semibold text-black">{tier.price}</span>
                </div>
                <p className="font-mono text-[10px] text-black/40 uppercase tracking-wider mb-4">{tier.unit}</p>
                <p className="font-body text-sm text-black/55 leading-relaxed mb-6">{tier.description}</p>
                <div className="space-y-2">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A962] flex-shrink-0" />
                      <span className="font-body text-xs text-black/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing Discipline */}
          <motion.div
            className="max-w-5xl mx-auto mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="rounded-2xl border border-black/[0.12] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#C9A962]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-black">Pricing Discipline &amp; Negotiation Guidelines</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    rule: "Retail / DTC is Zero Discount",
                    detail: "Consumer pricing holds at full MSRP ($1,095) across all direct channels — e-commerce, social, retail, and influencer. No exceptions. This protects brand positioning and establishes the price anchor for all downstream negotiations.",
                  },
                  {
                    rule: "GSA Must Be $1 Below Best Commercial Pricing",
                    detail: "Federal procurement regulations require that GSA Schedule pricing reflects the best available commercial price. ZeroWheel's GSA price of $694 is set $1 below the commercial floor to satisfy this requirement while maintaining maximum margin.",
                  },
                  {
                    rule: "Discounts Are Floor Thresholds — Not Starting Points",
                    detail: "The listed discount percentages (25% Vertical, 40% Commercial) represent maximum allowable discounts — do-not-exceed ceilings. Every negotiation should aim to close above the floor. Protect margin in every deal; the floor is the last resort, not the default.",
                  },
                  {
                    rule: "National Account Pricing Requires Margin Protection",
                    detail: "National accounts typically negotiate the deepest discounts within each LOB. While volume justifies concessions, sales teams must protect margin by leveraging volume commitments, multi-year terms, and bundled services rather than simply lowering unit price.",
                  },
                  {
                    rule: "Factor Extended Warranties Into National Account Negotiations",
                    detail: "Large accounts and brand-standard partners often require extended warranty coverage beyond the standard term. Build warranty cost into the deal structure upfront — do not offer best pricing and then absorb warranty obligations separately. Failure to account for this erodes margin and creates unsustainable precedent.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-mono text-[10px] font-bold text-[#C9A962]">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-black mb-0.5">{item.rule}</p>
                      <p className="font-body text-xs text-black/55 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Revenue Model Summary */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="rounded-2xl border border-black/[0.12] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#C9A962]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-black">Revenue Model Assumptions</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "MSRP", value: "$1,095", sub: "list price anchor" },
                  { label: "Year 1 Target", value: "1,000", sub: "units sold" },
                  { label: "Max Discount Floor", value: "$695", sub: "do not exceed" },
                  { label: "Gross Margin", value: "55–68%", sub: "target range" },
                ].map((metric, i) => (
                  <div key={i} className="text-center">
                    <p className="font-display text-2xl font-semibold text-black">{metric.value}</p>
                    <p className="font-mono text-[10px] text-black/40 uppercase tracking-wider mt-1">{metric.label}</p>
                    <p className="font-body text-xs text-black/45 mt-0.5">{metric.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Pricing Strategies */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                {
                  icon: Layers,
                  title: "Subscription Add-Ons",
                  description: "Connected app subscription at $19.99/mo per device. Includes performance tracking, coaching content, and facility management dashboard.",
                },
                {
                  icon: Store,
                  title: "Accessory Revenue",
                  description: "Replacement parts, premium attachments, and branded accessories. Target 15–20% of hardware revenue in Year 2+.",
                },
                {
                  icon: Globe,
                  title: "International Pricing",
                  description: "Region-adjusted pricing for LATAM, EMEA, and Asia markets. Local currency billing with centralized revenue recognition.",
                },
              ].map((strategy, i) => (
                <div key={i} className="flex gap-3 items-start p-5 rounded-xl bg-white border border-black/[0.12] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <div className="w-9 h-9 rounded-full bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <strategy.icon className="w-4.5 h-4.5 text-[#C9A962]" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-black mb-1">{strategy.title}</h4>
                    <p className="font-body text-xs text-black/55 leading-relaxed">{strategy.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why WEG */}
      <section id="why-weg" className="py-18">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Why Well Estate Group
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 text-black">
              Your Unfair Advantage
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Deep Industry Expertise",
                description: "Decades of experience across Technogym, Life Fitness, Ritz-Carlton, and the longevity space. We understand how fitness equipment is evaluated, purchased, and deployed at every level — from a single club to a global fleet.",
              },
              {
                title: "Established Channel Network",
                description: "Pre-built relationships across CMAA, PGA, Troon, Platinum Clubs, NACAD, and 30+ national and global partners. We don't cold-call — we activate warm introductions to decision-makers who trust our recommendations.",
              },
              {
                title: "Proven Multi-Vertical Framework",
                description: "Our organizational sales structure spans 9 macro lines of business with detailed sub-segment targeting. We've successfully brought products to market across private clubs, commercial fitness, medical, DTC, corporate wellness, professional sports, hospitality, military/government, and cruise/maritime channels.",
              },
              {
                title: "Global Reach, Local Execution",
                description: "Active in 4 global regions — North America (West & East), Latin America & Caribbean, Europe & Middle East, and Asia. We pair global strategy with on-the-ground sales execution in each market.",
              },
            ].map((advantage, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                className="flex gap-4 items-start p-6 rounded-xl bg-white border border-black/[0.12] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-[#C9A962]/25 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#C9A962]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-black mb-1.5">{advantage.title}</h3>
                  <p className="font-body text-sm text-black/55 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
