/*
 * GTM Home / Overview Page - Well Estate Group Go-To-Market Consulting
 * TAILORED: Connected fitness device (core training wheel) go-to-market strategy
 * Design: Ultra-premium luxury — black, grey, white, gold
 */

import { motion } from "framer-motion";
import { Target, TrendingUp, Users, BarChart3, ArrowRight, CheckCircle2, Globe, Building2, Dumbbell, Stethoscope, Ship, Shield, Zap, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "opportunity", label: "Opportunity" },
  { id: "channel-strategy", label: "Channel Strategy" },
  { id: "immediate-focus", label: "Go-To-Market Plan" },
  { id: "why-weg", label: "Why WEG" },
];

export default function GTMHome() {
  return (
    <Layout section="gtm-sample">
      <SectionNav sections={sections} />

      {/* Hero Section — Immersive Dark Gradient */}
      <section id="hero" className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
        {/* Abstract gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(201,169,98,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(201,169,98,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_60%,rgba(255,255,255,0.03),transparent)]" />
          {/* Animated grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A962" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Go-To-Market Strategy
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mt-4 mb-6 text-white leading-[1.1]">
              Connected Fitness Device — Market Entry
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-16 mx-auto bg-[#C9A962] mb-6"
            />
            <motion.p variants={fadeInUp} className="font-body text-base md:text-lg text-white/55 leading-relaxed max-w-3xl mx-auto">
              A comprehensive go-to-market strategy for a next-generation motorized core training device — 
              from premium club placement and professional sports adoption to medical rehabilitation, 
              government procurement, and global hospitality distribution.
            </motion.p>
          </motion.div>

          {/* Key Metrics Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-14"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[
              { icon: Target, label: "Target Verticals", value: "8", suffix: "Channels" },
              { icon: Globe, label: "Global Regions", value: "4", suffix: "Markets" },
              { icon: Users, label: "Addressable Segments", value: "5", suffix: "Categories" },
              { icon: BarChart3, label: "Market Size", value: "$6.7T", suffix: "Wellness" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                className="text-center p-6 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.10] hover:border-[#C9A962]/40 transition-all duration-300"
              >
                <metric.icon className="w-7 h-7 text-[#C9A962] mx-auto mb-3" />
                <div className="flex items-baseline justify-center gap-1.5">
                  <motion.p 
                    className="font-display text-2xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
                  >
                    {metric.value}
                  </motion.p>
                  <span className="font-body text-sm text-white/40">{metric.suffix}</span>
                </div>
                <p className="font-body text-xs text-white/35 mt-1">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              One Device, Five Markets
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              A motorized core training device with scalable difficulty has a unique advantage — 
              it serves everyone from rehabilitation patients to elite athletes, creating 
              simultaneous market entry across five distinct verticals.
            </motion.p>
          </motion.div>

          {/* 5 Market Segments */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Dumbbell, label: "Premium Clubs", description: "Private clubs, fitness centers, and group fitness studios" },
              { icon: Award, label: "Pro & College Athletics", description: "Professional teams, collegiate programs, and youth training" },
              { icon: Stethoscope, label: "Medical & Rehab", description: "Physical therapy clinics, hospitals, and longevity centers" },
              { icon: Shield, label: "Military & Government", description: "Armed forces, law enforcement, and GSA-compliant procurement" },
              { icon: Building2, label: "Corporate & Hospitality", description: "Corporate wellness, hotels, resorts, and maritime vessels" },
            ].map((touchpoint, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                className="relative group"
              >
                <div className="bg-white border border-black/[0.12] rounded-2xl p-6 h-full hover:border-[#C9A962]/40 transition-all duration-300 text-center relative overflow-hidden">
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
              className="text-center p-7 rounded-2xl border border-black/[0.10] bg-white flex-1 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <p className="font-mono text-[10px] text-black/30 uppercase tracking-[0.2em] mb-2">Current State</p>
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
              className="text-center p-7 rounded-2xl border-2 border-[#C9A962]/30 bg-[#C9A962]/[0.03] flex-1 shadow-[0_4px_20px_rgba(201,169,98,0.08)]"
            >
              <p className="font-mono text-[10px] text-[#C9A962] uppercase tracking-[0.2em] mb-2">With WEG</p>
              <p className="font-display text-xl font-semibold text-black">Full B2B Distribution</p>
              <p className="font-body text-xs text-black/50 mt-2">8 verticals, 4 global regions, 30+ channel partners</p>
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
            className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Private Clubs & Fitness Centers",
                description: "Platinum Clubs of America, Troon-managed properties, CMAA network, and premium fitness facilities. Position as a flagship core training station within club floor plans.",
                icon: Dumbbell,
              },
              {
                title: "Professional & Collegiate Sports",
                description: "Direct relationships with NFL, MLB, PGA, and NCAA strength & conditioning programs. Leverage existing athlete endorsements to drive institutional adoption.",
                icon: Award,
              },
              {
                title: "Medical, Rehab & Longevity",
                description: "Physical therapy clinics, physician-led longevity centers, and hospital wellness programs. Scalable difficulty makes it ideal for progressive rehabilitation protocols.",
                icon: Stethoscope,
              },
              {
                title: "Military & Government",
                description: "GSA-compliant procurement pathway. Target Army MWR, Air Force fitness centers, and law enforcement tactical fitness programs through established government channels.",
                icon: Shield,
              },
              {
                title: "Hospitality & Maritime",
                description: "One Spa World partnership across 144 vessels at sea. Premium hotel fitness centers, destination resorts, and cruise ship wellness programs — compact footprint is ideal.",
                icon: Ship,
              },
              {
                title: "Corporate Wellness & Amenities",
                description: "Multi-family residential amenity centers, corporate headquarters fitness facilities, and executive wellness programs. Scalable from single-unit to fleet deployment.",
                icon: Building2,
              },
            ].map((channel, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                className="flex gap-4 items-start p-6 rounded-xl bg-white border border-black/[0.12] hover:border-[#C9A962]/25 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <channel.icon className="w-5 h-5 text-[#C9A962]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-black mb-1.5">{channel.title}</h3>
                  <p className="font-body text-sm text-black/55 leading-relaxed">{channel.description}</p>
                </div>
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
                className="flex gap-4 items-start p-5 rounded-xl bg-white border border-black/[0.12] hover:border-[#C9A962]/25 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
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
                description: "Our organizational sales structure spans 8 macro lines of business with detailed sub-segment targeting. We've successfully brought products to market across private clubs, amenities, commercial, public, medical, sports, corporate, and influencer channels.",
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
                className="flex gap-4 items-start p-6 rounded-xl bg-white border border-black/[0.12] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-[#C9A962]/25 transition-all duration-300"
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
