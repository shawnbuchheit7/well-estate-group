/*
 * GTM Strategic Markets Page - Where to Play Matrix
 * Shows: Y1 and Y2 strategic market positioning matrices
 * Design: Luxury black/grey/gold palette, fully responsive
 * OPTIMIZED: Interactive matrix, animated transitions, enhanced hover states
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, TrendingUp, Zap, Eye, ArrowRight, ArrowUpRight, ArrowDownRight } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "y1-matrix", label: "Year 1" },
  { id: "y2-matrix", label: "Year 2" },
  { id: "shifts", label: "Key Shifts" },
];

interface MarketItem {
  name: string;
  highlighted?: boolean;
}

interface Quadrant {
  title: string;
  subtitle: string;
  icon: typeof Target;
  bg: string;
  iconBg: string;
  items: MarketItem[];
}

const y1Quadrants: Quadrant[] = [
  {
    title: "Focus & Drive",
    subtitle: "High Attractiveness / High Ease of Access",
    icon: Target,
    bg: "bg-white",
    iconBg: "bg-[#C9A962]/15",
    items: [
      { name: "Health Care", highlighted: true },
      { name: "Golf & Country Clubs", highlighted: true },
      { name: "Live/Work/Play", highlighted: true },
    ],
  },
  {
    title: "Crack the Code",
    subtitle: "High Attractiveness / Low Ease of Access",
    icon: Zap,
    bg: "bg-[#FAFAF8]",
    iconBg: "bg-black/[0.06]",
    items: [
      { name: "Corporate" },
      { name: "Maritime" },
    ],
  },
  {
    title: "Learn & Drive",
    subtitle: "Low Attractiveness / High Ease of Access",
    icon: Eye,
    bg: "bg-[#FAFAF8]",
    iconBg: "bg-black/[0.06]",
    items: [
      { name: "Sports Agents" },
      { name: "Residential Multi-Family BTR" },
    ],
  },
  {
    title: "Opportunistic",
    subtitle: "Low Attractiveness / Low Ease of Access",
    icon: TrendingUp,
    bg: "bg-[#F7F7F5]",
    iconBg: "bg-black/[0.06]",
    items: [
      { name: "Yacht Clubs" },
      { name: "City Clubs" },
      { name: "Destination Resorts" },
      { name: "City Hotels" },
      { name: "Athletic Clubs" },
      { name: "Boutique Studios" },
      { name: "Parks & Rec" },
      { name: "Residential Condo BTO" },
      { name: "Sports Performance Centers" },
    ],
  },
];

const y2Quadrants: Quadrant[] = [
  {
    title: "Focus & Drive",
    subtitle: "High Attractiveness / High Ease of Access",
    icon: Target,
    bg: "bg-white",
    iconBg: "bg-[#C9A962]/15",
    items: [
      { name: "Health Care", highlighted: true },
      { name: "Golf & Country Clubs", highlighted: true },
      { name: "Live/Work/Play", highlighted: true },
      { name: "Residential Multi-Family BTR" },
    ],
  },
  {
    title: "Crack the Code",
    subtitle: "High Attractiveness / Low Ease of Access",
    icon: Zap,
    bg: "bg-[#FAFAF8]",
    iconBg: "bg-black/[0.06]",
    items: [
      { name: "Corporate" },
      { name: "Parks & Rec" },
    ],
  },
  {
    title: "Learn & Drive",
    subtitle: "Low Attractiveness / High Ease of Access",
    icon: Eye,
    bg: "bg-[#FAFAF8]",
    iconBg: "bg-black/[0.06]",
    items: [
      { name: "Sports Agents" },
      { name: "Boutique Studios" },
    ],
  },
  {
    title: "Opportunistic",
    subtitle: "Low Attractiveness / Low Ease of Access",
    icon: TrendingUp,
    bg: "bg-[#F7F7F5]",
    iconBg: "bg-black/[0.06]",
    items: [
      { name: "Yacht Clubs" },
      { name: "City Clubs" },
      { name: "Destination Resorts" },
      { name: "City Hotels" },
      { name: "Athletic Clubs" },
      { name: "Maritime" },
      { name: "Residential Condo BTO" },
      { name: "Sports Performance Centers" },
    ],
  },
];

function MatrixGrid({ quadrants, year }: { quadrants: Quadrant[]; year: number }) {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      {/* Axis Labels */}
      <div className="relative">
        {/* Y-axis label */}
        <div className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 items-center gap-2">
          <span className="font-mono text-[10px] text-black/20 tracking-wider uppercase whitespace-nowrap">Market Attractiveness</span>
          <span className="text-[#C9A962] text-xs">↑</span>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {quadrants.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredQuadrant(i)}
              onMouseLeave={() => setHoveredQuadrant(null)}
              className={`${q.bg} rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col border transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] ${
                hoveredQuadrant === i 
                  ? "border-[#C9A962]/40 shadow-[0_8px_30px_rgba(0,0,0,0.08)]" 
                  : "border-black/[0.12]"
              }`}
              style={{ minHeight: '200px' }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <motion.div 
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${q.iconBg} flex items-center justify-center flex-shrink-0`}
                  animate={hoveredQuadrant === i ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <q.icon className={`w-4 h-4 sm:w-[18px] sm:h-[18px] ${i === 0 ? 'text-[#C9A962]' : 'text-black/50'}`} />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-black leading-tight">{q.title}</h3>
                  <p className="font-mono text-[9px] sm:text-[10px] text-black/50 tracking-wide mt-0.5 leading-snug">{q.subtitle}</p>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px w-full mb-3 sm:mb-4 ${i === 0 ? 'bg-[#C9A962]/25' : 'bg-black/[0.06]'}`} />

              {/* Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                {q.items.map((item, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.04 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wide transition-all cursor-default ${
                      item.highlighted
                        ? "bg-black text-white shadow-md"
                        : "bg-white text-black/70 border border-black/[0.15] hover:border-[#C9A962]/30"
                    }`}
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* X-axis label */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <span className="font-mono text-[10px] text-black/20 tracking-wider uppercase">Ease of Access</span>
          <span className="text-[#C9A962] text-xs">→</span>
        </div>
      </div>
    </div>
  );
}

export default function ZWStrategicMarkets() {
  const [activeYear, setActiveYear] = useState<1 | 2>(1);

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="WEG Market Prioritization"
          title="Where to Play"
          description="WEG's recommended market prioritization framework for ZeroWheel — mapping each line of business against market attractiveness and ease of access, evolving from Year 1 to Year 2 as relationships mature and market intelligence deepens."
        />
      </div>

      {/* Year 1 Matrix */}
      <section id="y1-matrix" className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-4">
              Year 1 — Q1 through Q4
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-black">
              Initial Market Positioning
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xs sm:text-sm text-black/40 mt-3 max-w-xl mx-auto">
              Gold-highlighted segments represent the primary focus and drive markets for initial market entry.
            </motion.p>
          </motion.div>

          <MatrixGrid quadrants={y1Quadrants} year={1} />
        </div>
      </section>

      {/* Divider */}
      <div className="container px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />
      </div>

      {/* Year 2 Matrix */}
      <section id="y2-matrix" className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A962] text-white text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-4">
              Year 2 — Q1 through Q4
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-black">
              Evolved Market Positioning
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xs sm:text-sm text-black/40 mt-3 max-w-xl mx-auto">
              Segments shift between quadrants as market intelligence matures and relationships deepen.
            </motion.p>
          </motion.div>

          <MatrixGrid quadrants={y2Quadrants} year={2} />
        </div>
      </section>

      {/* Key Shifts */}
      <section id="shifts" className="py-12 sm:py-16 bg-[#FAFAF8]">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <span className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
                Year-Over-Year Analysis
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-black mt-3">
                Key Market Shifts
              </h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              {[
                { from: "Learn & Drive", to: "Focus & Drive", segment: "Residential Multi-Family BTR", direction: "up" as const },
                { from: "Opportunistic", to: "Crack the Code", segment: "Parks & Recreation", direction: "up" as const },
                { from: "Opportunistic", to: "Learn & Drive", segment: "Boutique Studios", direction: "up" as const },
                { from: "Crack the Code", to: "Opportunistic", segment: "Maritime", direction: "down" as const },
              ].map((shift, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white border border-black/[0.12] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300"
                >
                  {/* Direction indicator + Segment name */}
                  <div className="flex items-center gap-3 sm:min-w-[220px]">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      shift.direction === "up" ? "bg-emerald-50" : "bg-red-50"
                    }`}>
                      {shift.direction === "up" 
                        ? <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                        : <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                      }
                    </div>
                    <span className="font-body text-xs sm:text-sm font-semibold text-black">{shift.segment}</span>
                  </div>
                  
                  {/* From → To */}
                  <div className="flex items-center gap-2 sm:gap-3 ml-10 sm:ml-0">
                    <span className="font-mono text-[10px] sm:text-[11px] text-black/40 bg-black/[0.03] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg whitespace-nowrap">{shift.from}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A962] flex-shrink-0" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-black bg-[#C9A962]/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg whitespace-nowrap">{shift.to}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
