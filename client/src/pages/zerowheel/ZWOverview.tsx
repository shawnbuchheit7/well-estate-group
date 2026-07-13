/**
 * ZeroWheel Overview — Executive Summary
 * Streamlined: Hero + Market Opportunity (9 LOBs) + Why WEG + Next CTA
 * Removed: Channel Strategy, Pricing, GTM Plan (live on dedicated tabs)
 */

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Dumbbell, Stethoscope, Package, Target, Award, Building2, Shield, Ship } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import NextPageCTA from "@/components/NextPageCTA";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function ZWOverview() {
  return (
    <Layout section="gtm-zerowheel">

      {/* Hero Section */}
      <div id="hero">
        <LightHero
          logoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png"
          logoAlt="ZeroWheel"
          eyebrow="WEG Consulting Proposal"
          title="Go-To-Market Strategy & Execution"
          description="Well Estate Group's proposed consulting engagement for ZeroWheel — a comprehensive go-to-market strategy spanning 9 macro lines of business. This presentation outlines the strategic framework, pricing architecture, and sales infrastructure WEG recommends to accelerate ZeroWheel's market entry."
          stats={[
            { value: "9", label: "Lines of Business" },
            { value: "$1,095", label: "MSRP Anchor" },
            { value: "$6.7T", label: "Global Wellness Economy" },
          ]}
        />
      </div>

      {/* Market Opportunity — 9 LOBs + Progression */}
      <section className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Market Opportunity
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              One Device, Nine Markets
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/70 max-w-2xl mx-auto">
              A motorized core training device with scalable difficulty serves everyone from rehabilitation patients to elite athletes — creating simultaneous market entry across nine distinct verticals.
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
              { icon: Award, label: "Athletics, Education & Professional Sports", description: "Pro teams, collegiate athletics, and performance training" },
              { icon: Building2, label: "Hospitality & Amenities", description: "Luxury hotels, resorts, and premium residential" },
              { icon: Shield, label: "Military & Government", description: "DoD, VA rehab, and GSA-compliant procurement" },
              { icon: Ship, label: "Cruise & Maritime", description: "Cruise lines, superyachts, and marine fitness" },
            ].map((touchpoint, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(184,134,11,0.12), 0 0 0 1px rgba(184,134,11,0.3)" }}
                className="relative group"
              >
                <div className="bg-white border border-[#B8860B]/40 rounded-2xl p-6 h-full hover:border-[#B8860B]/60 hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#B8860B]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-[#B8860B]/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B8860B]/15 transition-colors">
                      <touchpoint.icon className="w-7 h-7 text-[#B8860B]" />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-black mb-2">{touchpoint.label}</h3>
                    <p className="font-body text-xs text-black/70 leading-relaxed">{touchpoint.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Market Funnel Breakdown */}
          <motion.div
            className="max-w-4xl mx-auto mt-14 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-[#FAFAF8] border border-[#B8860B]/55 rounded-2xl p-8">
              <p className="font-mono text-[10px] text-[#B8860B] uppercase tracking-[0.2em] mb-5">Market Opportunity Funnel</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-center p-4 rounded-xl bg-white border border-[#B8860B]/40">
                  <p className="font-display text-2xl font-bold text-black">$6.7T</p>
                  <p className="font-mono text-[9px] text-black/60 uppercase tracking-wider mt-1">Global Wellness Economy</p>
                  <p className="font-body text-[11px] text-black/55 mt-1">GWI 2024 — fitness, wellness, nutrition, longevity</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white border border-[#B8860B]/40">
                  <p className="font-display text-2xl font-bold text-black">$24B</p>
                  <p className="font-mono text-[9px] text-black/60 uppercase tracking-wider mt-1">Core Development TAM</p>
                  <p className="font-body text-[11px] text-black/55 mt-1">Total addressable market at steady-state adoption</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white border border-[#B8860B]/40">
                  <p className="font-display text-2xl font-bold text-black">$18B</p>
                  <p className="font-mono text-[9px] text-black/60 uppercase tracking-wider mt-1">Serviceable Market (SAM)</p>
                  <p className="font-body text-[11px] text-black/55 mt-1">Regions ZeroWheel is licensed to serve (US, Canada, EU, Japan)</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-[#B8860B]/[0.06] border border-[#B8860B]/40">
                  <p className="font-display text-2xl font-bold text-[#B8860B]">$300M+</p>
                  <p className="font-mono text-[9px] text-[#B8860B]/70 uppercase tracking-wider mt-1">5-Year Revenue Target (SOM)</p>
                  <p className="font-body text-[11px] text-black/55 mt-1">Based on adoption curves of comparable powered fitness devices</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B8860B]/30" />
                <p className="font-body text-[11px] text-black/55 italic">Source: ZeroWheel Seed Raise Deck (Mar 2026) &amp; Global Wellness Institute</p>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B8860B]/30" />
              </div>
            </motion.div>
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
              className="text-center p-7 rounded-2xl border border-[#B8860B]/40 bg-white flex-1 shadow-[0_2px_12px_rgba(184,134,11,0.05)]"
            >
              <p className="font-mono text-[10px] text-black/60 uppercase tracking-[0.2em] mb-2">Current State</p>
              <p className="font-display text-xl font-semibold text-black">Direct-to-Consumer</p>
              <p className="font-body text-xs text-black/65 mt-2">E-commerce and organic growth</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowRight className="w-8 h-8 text-[#B8860B] rotate-90 md:rotate-0" />
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="text-center p-7 rounded-2xl border border-[#B8860B]/40 bg-white flex-1 shadow-[0_2px_12px_rgba(184,134,11,0.05)]"
            >
              <p className="font-mono text-[10px] text-[#B8860B] uppercase tracking-[0.2em] mb-2">With WEG</p>
              <p className="font-display text-xl font-semibold text-black">Full B2B Distribution</p>
              <p className="font-body text-xs text-black/65 mt-2">9 macro LOBs, 4 global regions, 30+ channel partners</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowRight className="w-8 h-8 text-[#B8860B] rotate-90 md:rotate-0" />
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="text-center p-7 rounded-2xl border border-[#B8860B]/40 bg-[#B8860B]/[0.03] flex-1 shadow-[0_4px_20px_rgba(201,169,98,0.08)]"
            >
              <p className="font-mono text-[10px] text-[#B8860B] uppercase tracking-[0.2em] mb-2">Scale</p>
              <p className="font-display text-xl font-semibold text-black">Dealers & Resellers</p>
              <p className="font-body text-xs text-black/65 mt-2">Authorized dealer network, regional resellers, white-label partners</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why WEG */}
      <section className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
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
                description: "Decades of experience across Technogym, Life Fitness, Ritz-Carlton, and the longevity space. We understand how fitness equipment is evaluated, purchased, and deployed at every level.",
              },
              {
                title: "Established Channel Network",
                description: "Pre-built relationships across CMAA, PGA, Troon, Platinum Clubs, NACAD, and 30+ national and global partners. We activate warm introductions to decision-makers who trust our recommendations.",
              },
              {
                title: "Proven Multi-Vertical Framework",
                description: "Our sales structure spans 9 macro lines of business with detailed sub-segment targeting. We've brought products to market across private clubs, commercial fitness, medical, DTC, corporate wellness, professional sports, hospitality, military/government, and cruise/maritime.",
              },
              {
                title: "Global Reach, Local Execution",
                description: "Active in 4 global regions — North America (West & East), Latin America & Caribbean, Europe & Middle East, and Asia. Global strategy with on-the-ground sales execution in each market.",
              },
            ].map((advantage, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                className="flex gap-4 items-start p-6 rounded-xl bg-white border border-[#B8860B]/40 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-[#B8860B]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-black mb-1.5">{advantage.title}</h3>
                  <p className="font-body text-sm text-black/70 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <NextPageCTA label="Product Analysis" href="/gtm/zerowheel/product-analysis" />
    </Layout>
  );
}
