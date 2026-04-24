/*
 * GTM Sales Enablement Page - Business Development Sales Strategy
 * Design: Ultra-premium luxury — black, grey, white, gold
 * OPTIMIZED: Enhanced hover states, animated partnerships, luxury depth
 */

import { motion } from "framer-motion";
import { Target, Users, Building2, Stethoscope, Trophy, Briefcase, UserCircle, Dumbbell, Landmark, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import DarkHero from "@/components/DarkHero";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "focus-markets", label: "Focus Markets" },
  { id: "lob-targeting", label: "LOB Targeting" },
  { id: "partnerships", label: "Key Partnerships" },
];

const focusDriveMarkets = [
  "Health Care",
  "Golf & Country Clubs",
  "Residential Multi-Family BTR",
  "Influencer",
  "Live/Work/Play",
];

const lobTargeting = [
  {
    name: "Private/Leisure Clubs",
    icon: Building2,
    targets: [
      "CMAA Chapters (National, State & Local)",
      "Platinum Clubs",
      "Distinguished Clubs",
      "Troon",
      "Club Corp",
    ],
  },
  {
    name: "Amenities",
    icon: Users,
    targets: [
      "Residential: Multi-Family, National Apartment Associations, State Associations, Management Companies",
      "Hotels & Resorts: ISPA, Z Capital & Other Ownership Groups",
      "Maritime: Sea Trade, One Spa World, Delos, KT Lim",
    ],
  },
  {
    name: "Commercial Clubs",
    icon: Dumbbell,
    targets: [
      "Appropriate Industry Trade Shows",
      "National Account Yearly Company Meetings",
      "Define New Premium Member Journey",
    ],
  },
  {
    name: "Corporate, Public Authorities",
    icon: Landmark,
    targets: [
      "NRPA Annual Conference",
      "Strong Focus on Local Governments with a Center",
      "Tampa — Well Certified District",
      "City of Denver",
    ],
  },
  {
    name: "Medical",
    icon: Stethoscope,
    targets: [
      "Crohn's Association",
      "Alzheimer's Association",
      "Refer to other experts within the Executive Team",
    ],
  },
  {
    name: "Sports Performance",
    icon: Trophy,
    targets: [
      "Dr. Mike Clark",
      "Sports Agencies",
      "PGA TOUR",
      "PGA of America",
      "NASM",
    ],
  },
  {
    name: "Dealers & Resellers",
    icon: Briefcase,
    targets: [
      "Target Top Recognized Employers in Corporate Wellness Space",
      "Sports Agencies",
      "Collaborate/Partner with Top Management Companies",
    ],
  },
  {
    name: "Influencer",
    icon: UserCircle,
    targets: [
      "Delos — Alfredo Carvajal",
      "Blue Zone — Dan Buettner",
      "Top 2-3 in Each Market Where Center is Positioned",
      "Define 2-3 in Each Macro-LOB",
    ],
  },
];

const keyPartnerships = [
  "NACAD", "CMAA", "Club Leaders Forum", "Platinum Clubs of America",
  "Club Benchmarking", "PGA Southwest Section", "Club Resources",
  "PGA TOUR", "Club Spa & Fitness Association", "America's Healthiest Club",
  "Distinguished Emerald Club", "McMahon Group", "National Club Association",
  "Troon Golf", "Peacock & Lewis", "Club Wellness Evolutions",
  "Titleist Performance Institute", "CMAA Philadelphia", "The Salus Group",
  "AMPD Golf Performance", "CMAA Florida Chapter", "CMAA Mile High Chapter",
  "1000 Hills Fitness", "Kopplin Kuebler & Wallace",
];

export default function GTMSales() {
  return (
    <Layout section="gtm-sample">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <DarkHero
          eyebrow="Sales Enablement"
          title="Business Development"
          description="Detailed sales enablement strategy with focus and drive markets, specific targeting per line of business, and an extensive network of industry partnerships."
          stats={[
            { value: "5", label: "Focus Markets" },
            { value: "8", label: "LOB Targets" },
            { value: "24+", label: "Partnerships" },
          ]}
        />
      </div>

      {/* Focus & Drive Markets */}
      <section id="focus-markets" className="py-18">
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
              Priority Segments
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Focus & Drive Markets
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/40 max-w-2xl mx-auto">
              These five segments represent the highest-priority markets for immediate business development focus.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {focusDriveMarkets.map((market, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: "0 16px 40px rgba(201,169,98,0.15)",
                }}
                className="w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-[#C9A962]/40 bg-white hover:border-[#C9A962] hover:bg-[#C9A962]/[0.06] flex items-center justify-center p-4 transition-colors duration-300 cursor-default shadow-[0_4px_20px_rgba(201,169,98,0.08)]"
              >
                <p className="font-display text-sm md:text-base font-semibold text-black text-center leading-tight">{market}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LOB Targeting Detail */}
      <section id="lob-targeting" className="py-18">
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
              Detailed Targeting
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              LOB Sales Targets
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/40 max-w-2xl mx-auto">
              Specific organizations, associations, and accounts targeted within each macro line of business.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {lobTargeting.map((lob, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                className="bg-white border border-black/[0.12] rounded-xl overflow-hidden hover:border-[#C9A962]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-black/[0.10] bg-[#FAFAF8]">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                    <lob.icon className="w-4.5 h-4.5 text-[#C9A962]" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-black">{lob.name}</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-2.5">
                    {lob.targets.map((target, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <ArrowRight className="w-3.5 h-3.5 text-[#C9A962] mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-black/45 leading-relaxed">{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Partnerships */}
      <section id="partnerships" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Industry Network
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Key Partnerships & Associations
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/40 max-w-2xl mx-auto">
              An extensive network of industry associations, club management organizations, and strategic partners.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {keyPartnerships.map((partner, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 8px 20px rgba(0,0,0,0.06)" }}
                className="px-4 py-2 rounded-full bg-white border border-black/[0.10] text-sm font-body font-medium text-black/60 hover:border-[#C9A962]/40 hover:text-black hover:bg-[#C9A962]/[0.03] transition-all cursor-default shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                {partner}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
