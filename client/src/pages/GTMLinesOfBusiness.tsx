/*
 * GTM Lines of Business Page - WEG Organizational Sales Structure
 * Design: Ultra-premium luxury — black, grey, white, gold
 * OPTIMIZED: Interactive circle charts, animated hover states, luxury depth
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Users, Dumbbell, Stethoscope, Home, Landmark, Briefcase, Trophy, UserCircle, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer, scaleIn, staggerContainerFast } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "all-lobs", label: "All LOBs" },
  { id: "macro-lobs", label: "Macro LOBs" },
  { id: "sub-macro", label: "Sub-Macro Detail" },
];

const allLobs = [
  "Golf & Country Clubs", "City Clubs", "Parks & Recreation",
  "Destination Resorts", "City Hotels", "Professional Sports",
  "Live/Work/Play", "Boutique Studios", "Sports Performance Centers",
  "Residential/Multi-Family BTR", "Multi-Tenant Corporate Office",
  "Maritime", "Health Care", "Influencer",
  "Residential/Condominium BTO",
];

const macroLobs = [
  { name: "Private Clubs", icon: Building2, count: 5, color: "#B8860B" },
  { name: "Amenities", icon: Home, count: 7, color: "#8B7D3C" },
  { name: "Commercial Clubs & Sports Performance", icon: Dumbbell, count: 6, color: "#A69050" },
  { name: "Public Authorities", icon: Landmark, count: 5, color: "#B8963E" },
  { name: "Medical", icon: Stethoscope, count: 3, color: "#B8860B" },
  { name: "Corporate Wellness", icon: Briefcase, count: 1, color: "#A69050" },
  { name: "Consumer", icon: UserCircle, count: 2, color: "#B8963E" },
];

const subMacroData = [
  {
    macro: "Private Clubs",
    icon: Building2,
    subs: ["Golf & Country Clubs", "City Clubs", "Yacht Clubs", "Athletic Clubs", "Stadium/Alumni Clubs"],
  },
  {
    macro: "Amenities",
    icon: Home,
    subs: ["Multi-Family", "Condominium (Condo)", "Homeowners Associations (HOA)", "Destination Resorts", "City Hotels", "Maritime", "Live/Work/Play"],
  },
  {
    macro: "Commercial Clubs & Sports Performance",
    icon: Dumbbell,
    subs: ["National Key Accounts", "Regional Key Accounts", "Sports Performance Facilities", "Sports Agencies (NFL/NBA/NHL)", "Boutique Studios", "Local Club/Chains"],
  },
  {
    macro: "Public Authorities",
    icon: Landmark,
    subs: ["Parks & Recreation", "YMCA", "JCC", "Police", "Fire"],
  },
  {
    macro: "Medical",
    icon: Stethoscope,
    subs: ["Health Care", "Physical Therapists", "Hospital Supported Wellness Centers"],
  },
  {
    macro: "Corporate Wellness",
    icon: Briefcase,
    subs: ["Wellness Facilities & Programs of Mid/Large Corporations"],
  },
  {
    macro: "Consumer",
    icon: UserCircle,
    subs: ["Individual Consumer", "Influencer Networks"],
  },
];

export default function GTMLinesOfBusiness() {
  const [selectedMacro, setSelectedMacro] = useState<number | null>(null);

  return (
    <Layout section="gtm-sample">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="Organizational Sales Structure"
          title="Lines of Business"
          description="A comprehensive organizational sales framework spanning 15+ lines of business, organized into 7 macro verticals with detailed sub-segment targeting for maximum market coverage."
          stats={[
            { value: "15+", label: "Lines of Business" },
            { value: "7", label: "Macro Verticals" },
            { value: "29+", label: "Sub-Segments" },
          ]}
        />
      </div>

      {/* All 15 LOBs - Interactive Circle Grid */}
      <section id="all-lobs" className="py-18">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />
          
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Not All Inclusive
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Lines of Business
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/40 max-w-2xl mx-auto">
              Each circle represents a distinct line of business within the wellness and longevity ecosystem.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-5 gap-5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerFast}
          >
            {allLobs.map((lob, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: "0 12px 40px rgba(201,169,98,0.15)",
                }}
                className="aspect-square rounded-full border-2 border-[#B8860B]/65 hover:border-[#B8860B]/60 flex items-center justify-center p-4 bg-white hover:bg-[#B8860B]/[0.04] transition-colors duration-300 cursor-default shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
              >
                <p className="font-body text-xs md:text-sm font-medium text-black/70 text-center leading-tight">{lob}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8 Macro LOBs - Interactive Cards */}
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Macro Categories
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Macro Lines of Business
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/40 max-w-2xl mx-auto">
              The 15+ individual LOBs roll up into 8 macro categories. Click any category to explore its sub-segments.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
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
                  selectedMacro === i ? "ring-2 ring-[#B8860B] ring-offset-2" : ""
                }`}
              >
                <div className="bg-white border border-[#B8860B]/65 rounded-2xl p-7 h-full hover:border-[#B8860B]/70 transition-all duration-300 text-center relative overflow-hidden">
                  {/* Background accent */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#B8860B]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full border-2 border-[#B8860B]/60 flex items-center justify-center mx-auto mb-4 group-hover:border-[#B8860B]/60 group-hover:bg-[#B8860B]/5 transition-all">
                      <lob.icon className="w-6 h-6 text-[#B8860B]" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-black mb-2">{lob.name}</h3>
                    <span className="font-mono text-[10px] text-black/25 tracking-wider">{lob.count} sub-segments</span>
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
                <div className="bg-[#F5F4F1] rounded-2xl p-8 text-black">
                  <div className="flex items-center gap-3 mb-5">
                    {(() => {
                      const Icon = subMacroData[selectedMacro].icon;
                      return <Icon className="w-5 h-5 text-[#B8860B]" />;
                    })()}
                    <h4 className="font-display text-lg font-semibold">{subMacroData[selectedMacro].macro}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {subMacroData[selectedMacro].subs.map((sub, j) => (
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

      {/* Sub-Macro LOBs Table */}
      <section id="sub-macro" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Organizational Sales Structure / Target
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Sub-Macro LOBs
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subMacroData.map((category, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                  className="bg-white border border-[#B8860B]/65 rounded-xl overflow-hidden hover:border-[#B8860B]/60 transition-all duration-300"
                >
                  <div className="bg-[#F5F4F1] px-5 py-3.5 flex items-center gap-2">
                    <category.icon className="w-4 h-4 text-[#B8860B]" />
                    <h3 className="font-display text-sm font-semibold text-black tracking-wider">{category.macro}</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2.5">
                      {category.subs.map((sub, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-1.5 flex-shrink-0" />
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
