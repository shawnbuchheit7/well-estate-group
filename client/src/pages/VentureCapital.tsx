/*
 * Venture & Product Capital Page
 * Strategic investment in emerging fitness and wellness products
 * Design: Super premium luxury — white/cream/gold, sharp contrast, refined typography
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, BarChart3, Briefcase, Globe, Lightbulb } from "lucide-react";
import LightHero from "@/components/LightHero";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const investmentTheses = [
  {
    icon: Target,
    title: "Market Gap Identification",
    description: "Targeting underserved segments in the $6.7T global wellness market where innovation lags behind consumer demand.",
  },
  {
    icon: Lightbulb,
    title: "Product-Market Fit Validation",
    description: "Leveraging our Product Intelligence division to validate product concepts before capital deployment.",
  },
  {
    icon: Globe,
    title: "Distribution Advantage",
    description: "Portfolio companies gain immediate access to our Go-To-Market network spanning private clubs, medical centers, and hospitality venues.",
  },
  {
    icon: BarChart3,
    title: "Revenue Acceleration",
    description: "Strategic consulting and channel partnerships designed to compress the timeline from product launch to profitability.",
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
        eyebrow="Pillar IV"
        title="Venture & Product Capital"
        description="Strategic investment in emerging fitness and wellness products poised to disrupt the consumer health market. We combine deep industry expertise with capital to accelerate the next generation of health innovation."
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
              Our Approach
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Investment Thesis
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
                className="bg-white rounded-xl p-7 border-2 border-[#B8860B]/60 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FAFAF8] border-2 border-[#B8860B]/55 flex items-center justify-center mb-5">
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
            className="max-w-4xl mx-auto bg-white rounded-xl border-2 border-[#B8860B]/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden"
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
                  <span className="inline-block font-mono text-[10px] text-[#B8860B] bg-[#B8860B]/8 border-2 border-[#B8860B]/50 px-2.5 py-1 rounded-md tracking-[0.1em] font-medium">
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
                className="text-center p-6 sm:p-7 rounded-xl bg-white border-2 border-[#B8860B]/60 shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(184,134,11,0.12)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-black mb-2">{item.count}</div>
                <div className="font-mono text-[10px] text-[#B8860B] tracking-[0.15em] uppercase mb-2 font-semibold">{item.status}</div>
                <div className="font-body text-[11px] text-black/55 leading-relaxed">{item.note}</div>
              </motion.div>
            ))}
          </div>
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
            <div className="w-14 h-14 rounded-xl bg-white border-2 border-[#B8860B]/55 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-6 h-6 text-[#B8860B]" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-black mb-4 tracking-tight">
              Seeking Innovative Products
            </h3>
            <p className="font-body text-sm text-black/65 leading-relaxed mb-8">
              We are actively evaluating fitness and wellness products for strategic investment. 
              If you have a product that addresses a genuine market gap, we want to hear from you.
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
