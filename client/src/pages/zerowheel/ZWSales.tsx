/*
 * ZeroWheel Sales Enablement — Business Development Strategy
 * Design: Ultra-premium luxury — black, grey, white, gold
 * Focus: 9 Macro Lines of Business
 * Pricing: $1,095 MSRP | $825 Vertical (max 25% off) | $695 Commercial (max 40% off) | $694 GSA
 */

import { motion } from "framer-motion";
import {
  Star, Dumbbell, Stethoscope, Package, Target, Users, Building2, Shield, Ship,
  ArrowRight, Globe, Handshake,
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "macro-lobs", label: "9 Macro LOBs" },
  { id: "lob-detail", label: "LOB Detail" },
  { id: "partnerships", label: "Key Partnerships" },
];

const macroLOBs = [
  {
    name: "Private Clubs",
    icon: Star,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    description: "Golf, country, city, and leisure clubs — the highest-value B2B channel for premium fitness equipment placement.",
    targets: [
      "CMAA Chapters (National, State & Local)",
      "Platinum Clubs of America",
      "Distinguished Clubs / Emerald Clubs",
      "Troon Golf Properties",
      "Club Corp / Invited",
      "Club Leaders Forum",
      "National Club Association",
      "McMahon Group Managed Clubs",
      "Kopplin Kuebler & Wallace Network",
    ],
    metrics: { accounts: "2,500+", avgDeal: "$3K–$15K", cycle: "60–90 days" },
  },
  {
    name: "Commercial Fitness Clubs",
    icon: Dumbbell,
    color: "#C9A962",
    category: "Commercial",
    pricing: "$695 (max 40% off list)",
    description: "Large-format fitness chains and boutique studios — high-volume placement with revenue-share and group class integration.",
    targets: [
      "Industry Trade Shows (IHRSA, Club Industry, FIBO)",
      "National Account Yearly Company Meetings",
      "Define New Premium Member Journey / Upsell Tier",
      "Boutique Studio Partnerships (Pilates, Functional Training)",
      "Regional Chain HQ Presentations",
      "Rochester Athletic Club (6 units, 16,000+ members)",
    ],
    metrics: { accounts: "1,200+", avgDeal: "$5K–$25K", cycle: "60–90 days" },
  },
  {
    name: "Medical & Rehabilitation",
    icon: Stethoscope,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    description: "Sports medicine clinics, physical therapy, and rehabilitation centers — clinical validation channel with CKC science positioning.",
    targets: [
      "KOL Partnerships with Sports Medicine Physicians",
      "APTA / ACSM Medical Conferences",
      "Clinical Validation Study Program",
      "Physical Therapy Distributor Network",
      "Hospital-Supported Wellness Centers",
      "VA Rehabilitation Programs",
    ],
    metrics: { accounts: "3,000+", avgDeal: "$2K–$10K", cycle: "90–120 days" },
  },
  {
    name: "Direct-to-Consumer",
    icon: Package,
    color: "#C9A962",
    category: "DTC",
    pricing: "$1,095 (full MSRP)",
    description: "Premium e-commerce and retail — the broadest reach channel for brand awareness, full margin capture, and social proof generation.",
    targets: [
      "ZeroWheel.fit E-Commerce (DTC)",
      "Amazon Marketplace & Premium Fitness Category",
      "Specialty Fitness Retail Partners",
      "Influencer & Content Creator Partnerships",
      "Social Commerce (Instagram, TikTok Shop)",
      "Affiliate & Referral Programs",
      "Podcast Sponsorships (Huberman, Attia)",
    ],
    metrics: { accounts: "Unlimited", avgDeal: "$1,095", cycle: "Instant–7 days" },
  },
  {
    name: "Corporate Wellness",
    icon: Target,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    description: "Fortune 500 wellness programs — addresses the #1 workplace injury (lower back pain) with gamified engagement and measurable ROI.",
    targets: [
      "Corporate Wellness Platform Partnerships (Virgin Pulse, Wellable)",
      "HR/Benefits Conference Presence",
      "Direct Outreach to Fortune 500 Wellness Directors",
      "Corporate Fitness Center Design Firms",
      "Employee Engagement Case Studies",
    ],
    metrics: { accounts: "2,000+", avgDeal: "$5K–$20K", cycle: "60–90 days" },
  },
  {
    name: "Professional Sports",
    icon: Users,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    description: "Professional teams, collegiate athletics, and performance training — validation channel that drives brand authority and cascading demand.",
    targets: [
      "PGA TOUR & PGA of America",
      "NFL, MLB, NBA, MLS Team Facilities",
      "NCAA Division I Strength & Conditioning Programs",
      "Sports Agencies & Athlete Management Groups",
      "NASM & Certified Trainer Networks",
      "Titleist Performance Institute (TPI)",
      "AMPD Golf Performance",
      "Dr. Mike Clark & Performance Expert Network",
    ],
    metrics: { accounts: "800+", avgDeal: "$2K–$10K", cycle: "30–60 days" },
  },
  {
    name: "Hospitality & Amenities",
    icon: Building2,
    color: "#C9A962",
    category: "Vertical",
    pricing: "$825 (max 25% off list)",
    description: "5-star hotels, luxury resorts, wellness retreats, and premium residential — compact footprint and self-guided experience for space-constrained environments.",
    targets: [
      "Luxury Hotel Chain Procurement Teams",
      "Hospitality Trade Shows (HITEC, ALIS, BDNY)",
      "Wellness Resort Design Consultants",
      "Premium Residential Property Management Firms",
      "National Apartment Associations & State Associations",
      "Live/Work/Play Developments",
      "White-Label Branding Partnerships",
    ],
    metrics: { accounts: "5,000+", avgDeal: "$1K–$8K", cycle: "90–120 days" },
  },
  {
    name: "Military & Government",
    icon: Shield,
    color: "#C9A962",
    category: "GSA",
    pricing: "$694 (GSA best pricing)",
    description: "DoD installations, VA rehabilitation, and government fitness programs — GSA compliant, Made in USA, endorsed by US Army leadership.",
    targets: [
      "GSA Schedule Listing",
      "IDIQ Contract Pursuit",
      "Military Fitness Conferences",
      "VA Rehabilitation Program Partnerships",
      "Defense Contractor Fitness Facility Programs",
      "Installation Fitness Directors",
    ],
    metrics: { accounts: "1,500+", avgDeal: "$5K–$50K", cycle: "120–180 days" },
  },
  {
    name: "Cruise & Maritime",
    icon: Ship,
    color: "#C9A962",
    category: "Commercial",
    pricing: "$695 (max 40% off list)",
    description: "Cruise lines and superyachts — zero-maintenance magnetic resistance in the smallest footprint, ideal for space-constrained marine environments.",
    targets: [
      "Seatrade Cruise Global Conference",
      "Cruise Line Procurement Partnerships",
      "Marine Fitness Equipment Distributors",
      "Superyacht Dealer Network",
      "One Spa World (144+ Vessels)",
      "Maritime Fitness Design Consultants",
    ],
    metrics: { accounts: "500+", avgDeal: "$5K–$25K", cycle: "120–180 days" },
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

export default function ZWSales() {
  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="Sales Enablement"
          title="Business Development Strategy"
          description="Nine macro lines of business define ZeroWheel's go-to-market attack surface — from premium private clubs to direct-to-consumer e-commerce. Each LOB has dedicated targeting, partnerships, and sales playbooks with maximum discount thresholds that must not be exceeded."
          stats={[
            { value: "9", label: "Macro LOBs" },
            { value: "16,500+", label: "Target Accounts" },
            { value: "24+", label: "Partnerships" },
            { value: "$1K–$50K", label: "Deal Range" },
          ]}
        />
      </div>

      {/* Macro LOBs Overview */}
      <section id="macro-lobs" className="py-18">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Go-To-Market Framework
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Nine Macro Lines of Business
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              Each macro LOB represents a distinct market with its own buyer personas, sales cycles, and revenue potential. All discount pricing represents the maximum discount — do-not-exceed thresholds.
            </motion.p>
          </motion.div>

          {/* Pricing Anchor */}
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
            className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {macroLOBs.map((lob, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{
                  scale: 1.06,
                  y: -6,
                  boxShadow: `0 20px 50px ${lob.color}22`,
                }}
                className="w-36 h-36 md:w-40 md:h-40 rounded-full border-2 bg-white flex flex-col items-center justify-center p-4 transition-colors duration-300 cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                style={{ borderColor: `${lob.color}66` }}
              >
                <lob.icon className="w-5 h-5 mb-2" style={{ color: lob.color }} />
                <p className="font-display text-xs md:text-sm font-semibold text-black text-center leading-tight">{lob.name}</p>
                <span className="font-mono text-[8px] text-black/30 tracking-wider uppercase mt-1">{lob.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LOB Detail Cards */}
      <section id="lob-detail" className="py-18 bg-[#FAFAF8]">
        <div className="container">
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
              LOB Sales Targets & Metrics
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              Specific organizations, associations, and accounts targeted within each macro line of business, with deal sizing and sales cycle benchmarks.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {macroLOBs.map((lob, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                className="bg-white border border-black/[0.12] rounded-xl overflow-hidden hover:border-[#C9A962]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.15]" style={{ background: `linear-gradient(135deg, ${lob.color}08, transparent)` }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${lob.color}15` }}>
                      <lob.icon className="w-5 h-5" style={{ color: lob.color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-lg font-semibold text-black">{lob.name}</h3>
                        <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#C9A962]/10 text-[#C9A962]">{lob.category}</span>
                      </div>
                      <p className="font-body text-xs text-black/45 mt-0.5">{lob.description}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-black/35 hidden md:block">{lob.pricing}</span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="grid md:grid-cols-[1fr_auto] gap-6">
                    {/* Targets */}
                    <div>
                      <p className="font-mono text-[10px] text-black/45 uppercase tracking-[0.15em] mb-3">Target Accounts & Channels</p>
                      <ul className="space-y-2">
                        {lob.targets.map((target, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: lob.color }} />
                            <span className="font-body text-sm text-black/55 leading-relaxed">{target}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics Sidebar */}
                    <div className="flex md:flex-col gap-4 md:gap-3 md:min-w-[160px] md:border-l md:border-black/[0.15] md:pl-6">
                      <div>
                        <p className="font-mono text-[9px] text-black/25 uppercase tracking-wider">Addressable</p>
                        <p className="font-display text-lg font-semibold text-black mt-0.5">{lob.metrics.accounts}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[9px] text-black/25 uppercase tracking-wider">Avg Deal Size</p>
                        <p className="font-display text-lg font-semibold mt-0.5" style={{ color: lob.color }}>{lob.metrics.avgDeal}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[9px] text-black/25 uppercase tracking-wider">Sales Cycle</p>
                        <p className="font-display text-sm font-medium text-black/60 mt-0.5">{lob.metrics.cycle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Partnerships */}
      <section id="partnerships" className="py-18">
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
              Industry Network
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Key Partnerships & Associations
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              An extensive network of industry associations, club management organizations, and strategic partners that provide direct access to decision-makers.
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
                className="px-4 py-2 rounded-full bg-white border border-black/[0.15] text-sm font-body font-medium text-black/60 hover:border-[#C9A962]/40 hover:text-black hover:bg-[#C9A962]/[0.03] transition-all cursor-default shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
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
