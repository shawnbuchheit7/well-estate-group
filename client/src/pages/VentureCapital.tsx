/*
 * Venture & Product Capital Page
 * Strategic investment in emerging fitness and wellness products
 * Design: Luxury black/grey/gold palette — uses shared Layout
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, BarChart3, Briefcase, Globe, Lightbulb } from "lucide-react";
import DarkHero from "@/components/DarkHero";
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
      <DarkHero
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
      <section className="py-14 sm:py-18 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Our Approach
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl sm:text-3xl font-medium text-black mt-3">
              Investment Thesis
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {investmentTheses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAFAF8] rounded-xl p-6 border border-black/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-black/[0.05] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#C9A962]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="font-body text-xs sm:text-sm text-black/50 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-14 sm:py-18 bg-[#FAFAF8]">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Sectors
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl sm:text-3xl font-medium text-black mt-3">
              Investment Focus Areas
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-2xl border border-black/[0.12] shadow-[0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-5 sm:px-6 py-3 bg-black text-white">
              <div className="col-span-4">
                <span className="font-mono text-[10px] sm:text-xs tracking-wider uppercase font-medium">Category</span>
              </div>
              <div className="col-span-5">
                <span className="font-mono text-[10px] sm:text-xs tracking-wider uppercase font-medium">Target Products</span>
              </div>
              <div className="col-span-3 text-right">
                <span className="font-mono text-[10px] sm:text-xs tracking-wider uppercase font-medium">Stage</span>
              </div>
            </div>

            {/* Table Rows */}
            {focusAreas.map((area, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 gap-4 px-5 sm:px-6 py-4 items-start ${
                  i !== focusAreas.length - 1 ? "border-b border-black/[0.10]" : ""
                } ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}
              >
                <div className="col-span-4">
                  <span className="font-body text-xs sm:text-sm font-semibold text-black">{area.category}</span>
                </div>
                <div className="col-span-5">
                  <span className="font-body text-[11px] sm:text-xs text-black/50 leading-relaxed">{area.examples}</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="inline-block font-mono text-[10px] sm:text-[11px] text-[#C9A962] bg-[#C9A962]/10 px-2 py-1 rounded-full tracking-wider">
                    {area.stage}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Current Status
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl sm:text-3xl font-medium text-black mt-3">
              Platform Overview
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 sm:p-6 rounded-xl bg-[#FAFAF8] border border-black/[0.12] shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <div className="font-display text-2xl sm:text-3xl font-semibold text-black mb-1">{item.count}</div>
                <div className="font-mono text-[10px] sm:text-[11px] text-[#C9A962] tracking-wider uppercase mb-2">{item.status}</div>
                <div className="font-body text-[11px] text-black/40">{item.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 bg-[#FAFAF8] border-t border-black/[0.10]">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Briefcase className="w-8 h-8 text-[#C9A962] mx-auto mb-4" />
            <h3 className="font-display text-xl sm:text-2xl font-medium text-black mb-3">
              Seeking Innovative Products
            </h3>
            <p className="font-body text-xs sm:text-sm text-black/50 leading-relaxed mb-6">
              We are actively evaluating fitness and wellness products for strategic investment. 
              If you have a product that addresses a genuine market gap, we want to hear from you.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-black text-white font-body text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
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
