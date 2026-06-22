/*
 * Cap Table Platform Page (/cap-table)
 * A Well Estate Group service — equity & cap-table management platform.
 * Design: Super premium luxury — white/cream/gold, sharp contrast, refined typography.
 * Matches the Venture Capital page card/section styling.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Table2,
  SlidersHorizontal,
  Waves,
  FileText,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import LightHero from "@/components/LightHero";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// Live cap-table application URL
const PLATFORM_URL = "https://wegcaptable-7hv3ebgn.manus.space";

const capabilities = [
  {
    icon: Table2,
    title: "Real-Time Cap Table",
    description:
      "A single source of truth for every unit holder, share class, and ownership percentage — viewable by investor or by share class, with instant search and filtering.",
  },
  {
    icon: SlidersHorizontal,
    title: "Scenario & Dilution Modeling",
    description:
      "Model new rounds, valuations, and option-pool changes with live recalculation of ownership and dilution across the entire stakeholder base.",
  },
  {
    icon: Waves,
    title: "Exit Waterfall Analysis",
    description:
      "Distribute any exit valuation across every class with per-class MOIC and IRR, producing board-ready waterfall scenarios in seconds.",
  },
  {
    icon: FileText,
    title: "Board-Ready Reporting",
    description:
      "Generate branded, presentation-grade PDF exports — investor equity statements, full cap-table summaries, and exit analyses.",
  },
  {
    icon: ShieldCheck,
    title: "Agreement Vault",
    description:
      "Securely store and link executed agreements to each position, with orphan-and-gap detection that flags missing documentation automatically.",
  },
  {
    icon: TrendingUp,
    title: "Fundraising Tracking",
    description:
      "Monitor round progress against targets, capital raised by round, and unit pricing — all reconciled to the live cap table.",
  },
];

const highlights = [
  { value: "100%", label: "Reconciled Ownership" },
  { value: "6", label: "Integrated Modules" },
  { value: "Real-Time", label: "Recalculation" },
  { value: "Secure", label: "Access Controlled" },
];

export default function CapTablePlatform() {
  return (
    <Layout>
      {/* Hero */}
      <LightHero
        eyebrow="A Well Estate Group Service"
        title="Cap Table Management Platform"
        description="A purpose-built equity and capitalization platform engineered by Well Estate Group. Real-time ownership tracking, scenario modeling, exit-waterfall analysis, and board-ready reporting — offered as a managed service for portfolio companies and partner organizations."
        stats={highlights}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(184,134,11,0.28)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-3.5 bg-[#B8860B] text-white font-body text-sm font-semibold rounded-lg shadow-[0_2px_8px_rgba(184,134,11,0.3)] hover:bg-[#B8963E] transition-all"
            >
              Launch the Platform
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </a>
          <Link href="/venture-capital">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3.5 bg-white text-black font-body text-sm font-semibold rounded-lg border border-[#B8860B]/45 hover:border-[#B8860B]/70 hover:bg-[#FAFAF8] transition-all"
            >
              Back to Venture Capital
            </motion.button>
          </Link>
        </motion.div>
      </LightHero>

      {/* Capabilities */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase"
            >
              What It Does
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight"
            >
              Platform Capabilities
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-7 border border-[#B8860B]/40 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FAFAF8] border border-[#B8860B]/55 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-black/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service framing band */}
      <section className="py-20 sm:py-24 bg-[#F9F9F7] border-y border-[#B8860B]/40">
        <div className="container px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-white border border-[#B8860B]/55 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center mx-auto mb-6">
              <Layers className="w-6 h-6 text-[#B8860B]" />
            </div>
            <span className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Built In-House
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-black mt-4 mb-4 tracking-tight">
              Engineered by Well Estate Group
            </h3>
            <p className="font-body text-sm sm:text-base text-black/70 leading-relaxed">
              We built this platform to run our own venture and product-capital portfolio with
              institutional precision. It is now available as a managed service — giving founders,
              operators, and investors a clear, always-current view of ownership, dilution, and exit
              economics. The interactive platform shown is populated with illustrative sample data
              for demonstration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-black mb-4 tracking-tight">
              Explore the Platform
            </h3>
            <p className="font-body text-sm text-black/65 leading-relaxed mb-8">
              Step inside the live demonstration to see the cap table, modeling, and exit-waterfall
              tools in action.
            </p>
            <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(184,134,11,0.28)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-10 py-3.5 bg-[#B8860B] text-white font-body text-sm font-semibold rounded-lg shadow-[0_2px_8px_rgba(184,134,11,0.3)] hover:bg-[#B8963E] transition-all"
              >
                Launch the Platform
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
