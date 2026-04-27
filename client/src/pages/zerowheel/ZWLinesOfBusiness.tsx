/*
 * ZeroWheel Lines of Business — Organizational Sales Structure
 * Design: Ultra-premium luxury — black, grey, white, gold
 * 9 Macro LOBs with sub-segment detail
 * Pricing: $1,095 MSRP | $825 Vertical (max 25% off) | $695 Commercial (max 40% off) | $694 GSA
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Dumbbell, Stethoscope, Package, Target, Users, Building2, Shield, Ship,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "macro-lobs", label: "9 Macro LOBs" },
  { id: "sub-macro", label: "Sub-Segment Detail" },
];

const macroLobs = [
  {
    name: "Private Clubs",
    icon: Star,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    subs: ["Golf & Country Clubs", "City Clubs", "Yacht Clubs", "Athletic Clubs", "Stadium/Alumni Clubs"],
  },
  {
    name: "Commercial Fitness Clubs",
    icon: Dumbbell,
    color: "#C9A962",
    category: "Commercial",
    pricing: "$695 (max 40% off list)",
    subs: ["National Key Accounts", "Regional Key Accounts", "Boutique Studios", "Local Club/Chains"],
  },
  {
    name: "Medical & Rehabilitation",
    icon: Stethoscope,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    subs: ["Sports Medicine Clinics", "Physical Therapy Centers", "Hospital-Supported Wellness Centers", "VA Rehabilitation Programs"],
  },
  {
    name: "Direct-to-Consumer",
    icon: Package,
    color: "#C9A962",
    category: "DTC",
    pricing: "$1,095 (full MSRP)",
    subs: ["E-Commerce (ZeroWheel.fit)", "Amazon Marketplace", "Specialty Fitness Retail", "Influencer Networks", "Social Commerce"],
  },
  {
    name: "Corporate Wellness",
    icon: Target,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    subs: ["Fortune 500 Wellness Programs", "Corporate Fitness Centers", "Employee Engagement Platforms", "HR/Benefits Partnerships"],
  },
  {
    name: "Professional Sports",
    icon: Users,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    subs: ["Professional Team Facilities (NFL, MLB, NBA, MLS)", "NCAA Division I Programs", "Sports Performance Centers", "Athlete Management Groups"],
  },
  {
    name: "Hospitality & Amenities",
    icon: Building2,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    subs: ["Luxury Hotels & Resorts", "Destination Resorts", "Premium Residential (Multi-Family BTR)", "Condominium (BTO)", "Live/Work/Play Developments"],
  },
  {
    name: "Military & Government",
    icon: Shield,
    color: "#C9A962",
    category: "GSA",
    pricing: "$694 (GSA best pricing)",
    subs: ["DoD Installations", "VA Rehabilitation", "Parks & Recreation", "YMCA / JCC", "Police & Fire Departments"],
  },
  {
    name: "Cruise & Maritime",
    icon: Ship,
    color: "#C9A962",
    category: "Commercial",
    pricing: "$695 (max 40% off list)",
    subs: ["Cruise Line Fitness Centers", "Superyacht Installations", "One Spa World (144+ Vessels)", "Marine Fitness Distributors"],
  },
];

export default function ZWLinesOfBusiness() {
  const [selectedMacro, setSelectedMacro] = useState<number | null>(null);

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="Organizational Sales Structure"
          title="Lines of Business"
          description="A comprehensive organizational sales framework spanning 9 macro lines of business with detailed sub-segment targeting for maximum market coverage. All discount pricing represents the maximum discount — do-not-exceed thresholds."
          stats={[
            { value: "9", label: "Macro LOBs" },
            { value: "40+", label: "Sub-Segments" },
            { value: "4", label: "Pricing Tiers" },
          ]}
        />
      </div>

      {/* 9 Macro LOBs */}
      <section id="macro-lobs" className="py-18">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />

          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Go-To-Market Framework
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Macro Lines of Business
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/40 max-w-2xl mx-auto">
              Nine macro categories define the ZeroWheel go-to-market structure. Click any category to explore its sub-segments.
            </motion.p>
          </motion.div>

          {/* Pricing Anchor Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-black/[0.15] overflow-hidden"
            >
              <div className="bg-[#0A0A0A] px-6 py-3 flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-white">Pricing Structure</span>
                <span className="font-mono text-xs text-[#C9A962]">MSRP $1,095 — Max Discounts (Do Not Exceed)</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/[0.06]">
                {[
                  { label: "DTC / MSRP", price: "$1,095", note: "full list" },
                  { label: "Vertical (max)", price: "$825", note: "up to 25% off" },
                  { label: "Commercial (max)", price: "$695", note: "up to 40% off" },
                  { label: "GSA (best)", price: "$694", note: "do not exceed" },
                ].map((tier, i) => (
                  <div key={i} className="p-4 text-center">
                    <p className="font-mono text-[9px] text-black/40 tracking-wider uppercase mb-1">{tier.label}</p>
                    <p className="font-display text-xl font-bold text-black">{tier.price}</p>
                    <p className="font-body text-[10px] text-black/35">{tier.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {macroLobs.map((lob, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedMacro(selectedMacro === i ? null : i)}
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedMacro === i ? "ring-2 ring-[#C9A962] ring-offset-2" : ""
                }`}
              >
                <div className="bg-white border border-black/[0.12] rounded-2xl p-6 h-full hover:border-[#C9A962]/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C9A962]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-full border-2 border-[#C9A962]/30 flex items-center justify-center group-hover:border-[#C9A962]/60 group-hover:bg-[#C9A962]/5 transition-all">
                        <lob.icon className="w-5 h-5 text-[#C9A962]" />
                      </div>
                      <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#C9A962]/10 text-[#C9A962]">{lob.category}</span>
                    </div>

                    <h3 className="font-display text-sm font-semibold text-black mb-1">{lob.name}</h3>
                    <p className="font-mono text-[10px] text-black/35">{lob.pricing}</p>

                    <div className="flex items-center gap-1 mt-3 text-[#C9A962]">
                      <span className="font-mono text-[9px] tracking-wider uppercase">View Sub-Segments</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Expanded Sub-Segment Preview */}
          <AnimatePresence>
            {selectedMacro !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                className="max-w-3xl mx-auto overflow-hidden"
              >
                <div className="bg-black rounded-2xl p-8 text-white">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const Icon = macroLobs[selectedMacro].icon;
                        return <Icon className="w-5 h-5 text-[#C9A962]" />;
                      })()}
                      <h4 className="font-display text-lg font-semibold">{macroLobs[selectedMacro].name}</h4>
                    </div>
                    <span className="font-mono text-xs text-[#C9A962]">{macroLobs[selectedMacro].pricing}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {macroLobs[selectedMacro].subs.map((sub, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.05 }}
                        className="px-4 py-2 rounded-full bg-white/10 text-sm font-body text-white/80 border border-white/10"
                      >
                        {sub}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Sub-Macro LOBs Grid */}
      <section id="sub-macro" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Organizational Sales Structure
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Sub-Segment Detail
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/40 max-w-2xl mx-auto">
              Detailed sub-segments within each macro line of business, defining specific target accounts and organizations.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {macroLobs.map((category, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                  className="bg-white border border-black/[0.12] rounded-xl overflow-hidden hover:border-[#C9A962]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-black px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <category.icon className="w-4 h-4 text-[#C9A962]" />
                      <h3 className="font-display text-sm font-semibold text-white tracking-wider">{category.name}</h3>
                    </div>
                    <span className="font-mono text-[8px] text-white/40 tracking-wider uppercase">{category.category}</span>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2.5">
                      {category.subs.map((sub, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A962] mt-1.5 flex-shrink-0" />
                          <span className="font-body text-sm text-black/50">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
