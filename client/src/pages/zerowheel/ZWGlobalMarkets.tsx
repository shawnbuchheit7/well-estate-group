/*
 * GTM Global Markets Page - Countries & Org Chart
 * Design: Ultra-premium luxury — black, grey, white, gold
 * OPTIMIZED: Animated region cards, enhanced org chart, interactive hover states
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, MapPin, Users, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "global-lobs", label: "Global LOBs" },
  { id: "org-chart", label: "Org Chart" },
];

const globalRegions = [
  {
    country: "United States",
    flag: "🇺🇸",
    description: "Full 9 macro lines of business active across all macro categories. Primary focus markets highlighted.",
    lobCount: "9 LOBs",
    focusMarkets: ["Golf & Country Clubs", "Live/Work/Play", "Influencer", "Health Care"],
    allActive: true,
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    description: "Targeted entry through private clubs, influencer networks, and multi-family residential development.",
    lobCount: "3 LOBs",
    focusMarkets: ["Private/Leisure Clubs", "Influencers", "Multi-Family BTR"],
    partners: ["Gran Ciudad", "Greystar"],
    allActive: false,
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    description: "Naples-connected market with focus on private clubs and residential multi-family development.",
    lobCount: "2 LOBs",
    focusMarkets: ["Private/Leisure Clubs", "Multi-Family BTR"],
    partners: ["Silver Lining", "Tricon Residential"],
    allActive: false,
  },
  {
    country: "Emirates",
    flag: "🇦🇪",
    description: "Premium hospitality and real estate market with focus on destination resorts and luxury condominiums.",
    lobCount: "3 LOBs",
    focusMarkets: ["Private/Leisure Clubs", "Destination Resorts", "Condominium BTO"],
    partners: ["Troon Abu Dhabi", "Emaar"],
    allActive: false,
  },
];

const orgChart = {
  top: "Global VP Business Development",
  regions: [
    {
      name: "North America West",
      cities: ["Los Angeles, CA", "San Diego, CA", "Houston, TX"],
      status: "active",
    },
    {
      name: "North America East",
      cities: ["New York, NY", "Pittsburgh, PA (×3)", "Chicago, IL", "Naples, FL"],
      status: "active",
    },
    {
      name: "Latin America & Caribbean",
      cities: ["Tijuana, MX", "Cabo San Lucas, MX"],
      status: "active",
    },
    {
      name: "Europe & Middle East",
      cities: [],
      status: "planned",
    },
    {
      name: "Asia",
      cities: [],
      status: "planned",
    },
  ],
};

export default function ZWGlobalMarkets() {
  const [expandedRegion, setExpandedRegion] = useState<number | null>(null);

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="Global Presence"
          title="Global Markets & Organization"
          description="Lines of business mapped across 4 countries with a regional organizational structure spanning 5 global territories — from North America to Asia."
          stats={[
            { value: "4", label: "Countries" },
            { value: "5", label: "Territories" },
            { value: "10+", label: "Cities" },
          ]}
        />
      </div>

      {/* Global LOBs by Country */}
      <section id="global-lobs" className="py-18">
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
              Countries — Lines of Business
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 text-black">
              Global LOB Coverage
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {globalRegions.map((region, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                className="bg-white border border-[#B8860B]/65 rounded-xl overflow-hidden hover:border-[#B8860B]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="px-6 py-4 border-b border-[#B8860B]/70 bg-[#FAFAF8]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{region.flag}</span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-black">{region.country}</h3>
                        <span className="font-mono text-[10px] text-[#B8860B] font-semibold tracking-wider">{region.lobCount}</span>
                      </div>
                    </div>
                    {region.allActive && (
                      <motion.span 
                        className="px-3 py-1 rounded-full bg-[#B8860B]/10 text-[#B8860B] text-[10px] font-mono font-semibold tracking-wider"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        FULL COVERAGE
                      </motion.span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-sm text-black/40 mb-4">{region.description}</p>
                  <div className="mb-4">
                    <p className="font-mono text-[10px] text-black/45 uppercase tracking-[0.15em] mb-2">Active LOBs</p>
                    <div className="flex flex-wrap gap-1.5">
                      {region.focusMarkets.map((market, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full bg-[#B8860B]/8 text-xs font-body text-black/60 border border-[#B8860B]/10"
                        >
                          {market}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  {region.partners && (
                    <div>
                      <p className="font-mono text-[10px] text-black/45 uppercase tracking-[0.15em] mb-2">Key Partners</p>
                      <div className="flex flex-wrap gap-1.5">
                        {region.partners.map((partner, j) => (
                          <motion.span
                            key={j}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 rounded-full border border-[#B8860B]/70 text-xs font-body text-black/50 hover:border-[#B8860B]/60 transition-colors"
                          >
                            {partner}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section id="org-chart" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Organizational Structure
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Organizational Chart
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/40 max-w-2xl mx-auto">
              Regional business development structure with 5 global territories.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Top Level */}
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <motion.div 
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}
              >
                <Users className="w-5 h-5 text-[#B8860B]" />
                <span className="font-display text-base font-semibold">{orgChart.top}</span>
              </motion.div>
              <div className="w-px h-8 bg-black/15 mx-auto mt-2" />
            </motion.div>

            {/* Connecting line */}
            <motion.div 
              variants={fadeInUp}
              className="hidden md:block h-px bg-black/10 max-w-4xl mx-auto mb-4"
            />

            {/* Regions */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-5 gap-3"
            >
              {orgChart.regions.map((region, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center"
                >
                  {/* Vertical connector */}
                  <div className="hidden md:block w-px h-4 bg-black/10 mx-auto mb-2" />
                  
                  <motion.div 
                    className={`px-3 py-3 rounded-lg bg-white border mb-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)] cursor-pointer transition-all duration-300 ${
                      region.status === "active" 
                        ? "border-[#B8860B]/60 hover:border-[#B8860B]/60" 
                        : "border-[#B8860B]/65 hover:border-[#B8860B]/70"
                    }`}
                    whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.06)" }}
                    onClick={() => setExpandedRegion(expandedRegion === i ? null : i)}
                  >
                    <h4 className="font-display text-xs font-semibold text-black leading-tight">{region.name}</h4>
                    {region.status === "active" && (
                      <span className="font-mono text-[9px] text-[#B8860B] tracking-wider">{region.cities.length} cities</span>
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {(expandedRegion === i || expandedRegion === null) && region.cities.length > 0 ? (
                      <motion.div
                        initial={expandedRegion !== null ? { opacity: 0, height: 0 } : {}}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1.5 overflow-hidden"
                      >
                        {region.cities.map((city, j) => (
                          <motion.div 
                            key={j} 
                            className="px-2.5 py-1.5 rounded-md bg-white border border-[#B8860B]/70 hover:border-[#B8860B]/50 transition-colors"
                            whileHover={{ x: 2 }}
                          >
                            <div className="flex items-center justify-center gap-1">
                              <MapPin className="w-2.5 h-2.5 text-[#B8860B] flex-shrink-0" />
                              <span className="font-body text-[10px] text-black/50">{city}</span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : region.cities.length === 0 ? (
                      <div className="px-3 py-3 rounded-md border border-dashed border-[#B8860B]/65">
                        <span className="font-mono text-[10px] text-black/20 tracking-wider">Expansion planned</span>
                      </div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
