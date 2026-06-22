/*
 * Venture & Product Capital Page
 * Strategic investment in emerging fitness and wellness products
 * Design: Super premium luxury — white/cream/gold, sharp contrast, refined typography
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, BarChart3, Briefcase, Globe, Lightbulb, Table2, ArrowUpRight } from "lucide-react";
import LightHero from "@/components/LightHero";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const investmentTheses = [
  {
    icon: Target,
    title: "Fundraising Strategy & Investor Materials",
    description: "Crafting compelling narratives, pitch decks, and data rooms that resonate with institutional investors, family offices, and strategic partners.",
  },
  {
    icon: BarChart3,
    title: "Financial Modeling & Valuation",
    description: "Building institutional-grade financial models, scenario analyses, and valuation frameworks that withstand LP and PE scrutiny.",
  },
  {
    icon: Briefcase,
    title: "PE & Institutional Deal Structuring",
    description: "Structuring equity rounds, convertible instruments, and joint ventures optimized for founder economics and investor alignment.",
  },
  {
    icon: Lightbulb,
    title: "Due Diligence & Exit Planning",
    description: "Preparing companies for inbound diligence with clean data rooms, defensible metrics, and strategic positioning for premium exits.",
  },
  {
    icon: Globe,
    title: "Strategic Capital Deployment",
    description: "Direct investment in emerging wellness products with immediate access to our distribution network spanning private clubs, medical centers, and hospitality venues.",
  },
];

const focusAreas = [
  {
    category: "Connected Fitness Equipment",
    examples: "Smart strength training, AI-powered recovery devices, biometric-integrated machines",
    stage: "Seed to Series A",
  },
  {
    category: "Recovery & Regeneration",
    examples: "Cold/heat therapy systems, percussion therapy, compression technology, sleep optimization",
    stage: "Pre-Seed to Series A",
  },
  {
    category: "Wellness Technology",
    examples: "Wearable diagnostics, longevity biomarkers, personalized nutrition platforms",
    stage: "Seed to Series B",
  },
  {
    category: "Facility & Studio Solutions",
    examples: "Modular gym buildouts, air quality systems, smart facility management, immersive fitness",
    stage: "Seed to Series A",
  },
  {
    category: "Consumer Health Products",
    examples: "Functional supplements, topical therapeutics, at-home diagnostic kits",
    stage: "Pre-Seed to Seed",
  },
];

const portfolio = [
  { status: "Active Pipeline", count: "3", note: "Opportunities under evaluation" },
  { status: "Investment Thesis", count: "5", note: "Focus verticals defined" },
  { status: "Network Partners", count: "24+", note: "Industry associations & clubs" },
  { status: "GTM Channels", count: "15", note: "Lines of business for distribution" },
];

export default function VentureCapital() {
  return (
    <Layout>
      {/* Hero */}
      <LightHero
        eyebrow="Pillar II"
        title="Venture & Capital Advisory"
        description="Full-spectrum capital advisory for founders, operators, and investors in the health, wellness, and longevity space. From fundraising strategy and investor materials to PE deal structuring, financial modeling, and exit planning — we guide every stage of the capital lifecycle."
        stats={[
          { value: "$6.7T", label: "Global Wellness Market" },
          { value: "5", label: "Focus Verticals" },
          { value: "3", label: "Active Pipeline" },
          { value: "24+", label: "Network Partners" },
        ]}
      />

      {/* Investment Thesis */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Our Services
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Capital Advisory & Investment
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {investmentTheses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-7 border border-[#B8860B]/40 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FAFAF8] border border-[#B8860B]/55 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-2.5 tracking-tight">{item.title}</h3>
                <p className="font-body text-sm text-black/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Sectors
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Investment Focus Areas
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-xl border border-[#B8860B]/40 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 sm:px-8 py-4 bg-[#F5F4F1] border-b border-[#B8860B]/55">
              <div className="col-span-4">
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-semibold">Category</span>
              </div>
              <div className="col-span-5">
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-semibold">Target Products</span>
              </div>
              <div className="col-span-3 text-right">
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-semibold">Stage</span>
              </div>
            </div>

            {/* Table Rows */}
            {focusAreas.map((area, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 gap-4 px-6 sm:px-8 py-5 items-center ${
                  i !== focusAreas.length - 1 ? "border-b border-[#B8860B]/55" : ""
                } ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"} hover:bg-[#F5F4F0] transition-colors duration-200`}
              >
                <div className="col-span-4">
                  <span className="font-body text-sm font-bold text-black">{area.category}</span>
                </div>
                <div className="col-span-5">
                  <span className="font-body text-xs text-black/65 leading-relaxed">{area.examples}</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="inline-block font-mono text-[10px] text-[#B8860B] bg-[#B8860B]/8 border border-[#B8860B]/40 px-2.5 py-1 rounded-md tracking-[0.1em] font-medium">
                    {area.stage}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Current Status
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Platform Overview
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="text-center p-6 sm:p-7 rounded-xl bg-white border border-[#B8860B]/40 shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(184,134,11,0.12)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-black mb-2">{item.count}</div>
                <div className="font-mono text-[10px] text-[#B8860B] tracking-[0.15em] uppercase mb-2 font-semibold">{item.status}</div>
                <div className="font-body text-[11px] text-black/55 leading-relaxed">{item.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Services — Cap Table Platform */}
      <section className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Portfolio Services
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Platforms We Build
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/cap-table">
              <div className="group cursor-pointer bg-white rounded-2xl border border-[#B8860B]/40 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(184,134,11,0.12)] hover:border-[#B8860B]/60 transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-6 p-8 sm:p-10">
                  <div className="w-16 h-16 rounded-xl bg-[#FAFAF8] border border-[#B8860B]/55 flex items-center justify-center shrink-0">
                    <Table2 className="w-7 h-7 text-[#B8860B]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#B8860B] tracking-[0.15em] uppercase font-semibold">A Well Estate Group Service</span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-black mt-1.5 mb-2 tracking-tight">Cap Table Management Platform</h3>
                    <p className="font-body text-sm text-black/70 leading-relaxed max-w-xl">
                      Real-time ownership tracking, scenario modeling, exit-waterfall analysis, and board-ready reporting — the institutional platform we built to manage our own portfolio, now offered as a service.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#B8860B] font-body text-sm font-semibold whitespace-nowrap sm:justify-self-end">
                    <span>View Platform</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-[#F9F9F7] border-t border-[#B8860B]/55">
        <div className="container px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-14 h-14 rounded-xl bg-white border border-[#B8860B]/55 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-6 h-6 text-[#B8860B]" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-black mb-4 tracking-tight">
              Ready to Raise or Exit?
            </h3>
            <p className="font-body text-sm text-black/65 leading-relaxed mb-8">
              Whether you're raising your first institutional round, structuring a PE transaction, 
              or positioning for a premium exit — we bring the operator perspective that capital partners trust.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-3.5 bg-[#B8860B] text-white font-body text-sm font-semibold rounded-lg shadow-[0_2px_8px_rgba(201,169,98,0.3)] hover:bg-[#B8963E] transition-all"
              >
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
