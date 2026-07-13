/*
 * ZeroWheel Lines of Business — Organizational Sales Structure
 * Design: Ultra-premium luxury — black, grey, white, gold
 * 9 Macro LOBs with enriched personas, pain points, GTM positioning, sub-segments
 * Pricing: $1,095 MSRP | $825 Vertical (max 25% off) | $695 Commercial (max 40% off) | $694 GSA
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Dumbbell, Stethoscope, Package, Target, Users, Building2, Shield, Ship,
  ChevronDown, ChevronRight, UserCircle, AlertTriangle, Crosshair, CheckCircle2,
  ArrowRight, Layers, TrendingUp,
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import NextPageCTA from "@/components/NextPageCTA";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "pricing", label: "Pricing" },
  { id: "macro-lobs", label: "9 Macro LOBs" },
  { id: "summary", label: "GTM Summary" },
];

interface MacroLob {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  categoryColor: string;
  pricing: string;
  priceValue: string;
  tier: string;
  persona: string;
  personaTitle: string;
  painPoints: string[];
  gtmPositioning: string;
  keySelling: string[];
  subs: string[];
  testimonial?: { quote: string; author: string; role: string };
}

const macroLobs: MacroLob[] = [
  {
    name: "Private Clubs",
    icon: Star,
    category: "VERTICAL",
    categoryColor: "#B8860B",
    pricing: "$825/unit (max 25% off list)",
    priceValue: "$825",
    tier: "Tier 1 — Launch",
    persona: "The Fitness Director",
    personaTitle: "Fitness Director (influenced by Head Golf Pro, Tennis Pro, GM, Board)",
    painPoints: [
      "Members expect personalized, technology-driven experiences",
      "Traditional equipment fails to deliver novelty or exclusivity",
      "Retention depends on continuously elevating member experience",
    ],
    gtmPositioning: "Market as bespoke, data-driven core training exclusive to the club. Uniquely positioned for golf, tennis, and pickleball-specific routines. Members want to stay healthy to continue their favorite activities — core strength directly increases drive distance for golfers. Also supports shoulder ROM improvement and rehabilitation. Trainers offer premium sessions with real-time performance tracking.",
    keySelling: ["Golf/tennis/pickleball-specific routines", "Increases drive distance", "Shoulder ROM & rehab", "Exclusivity factor", "Trainer-led programming"],
    subs: ["Golf & Country Clubs", "City Clubs", "Yacht Clubs", "Athletic Clubs", "Stadium/Alumni Clubs"],
    testimonial: { quote: "A natural fit for members who don't fit traditional machines.", author: "Steve Boring, PhD", role: "Rochester Athletic Club, Fitness Director" },
  },
  {
    name: "Commercial Fitness Clubs",
    icon: Dumbbell,
    category: "COMMERCIAL",
    categoryColor: "#6B7280",
    pricing: "$695/unit (max 40% off list)",
    priceValue: "$695",
    tier: "Tier 1 — Launch",
    persona: "Corporate Procurement / Owner-Operators",
    personaTitle: "Corporate Procurement / Owner-Operators",
    painPoints: [
      "Need equipment that delivers visible results and keeps members engaged",
      "Members intimidated by complex machines — low utilization",
      "Group class programming needs constant refreshing to retain members",
    ],
    gtmPositioning: "Durable, motorized core station for HIIT, PT, and open floor use. Pickleball is a major growth driver at chains like Life Time — ZeroWheel delivers core strength and rotational power that enhances performance. Delivers dramatic ab and core results. Rochester AC expanded to 6 units for 16K+ members. Small footprint allows multiple units on the gym floor.",
    keySelling: ["Dramatic core results", "Pickleball/sport prep", "Small footprint — multiple units", "New revenue (core clinics)", "Connected device management"],
    subs: ["National Key Accounts", "Regional Key Accounts", "Sports Performance Facilities", "Boutique Studios", "Local Club/Chains"],
    testimonial: { quote: "A natural fit for members who don't fit traditional machines.", author: "Steve Boring, PhD", role: "Rochester Athletic Club" },
  },
  {
    name: "Medical & Rehabilitation",
    icon: Stethoscope,
    category: "VERTICAL",
    categoryColor: "#B8860B",
    pricing: "$825/unit (max 25% off list)",
    priceValue: "$825",
    tier: "Tier 1 — Launch",
    persona: "Clinical Rehab Director / Owner-Operators",
    personaTitle: "Clinical Rehab Director / Lead PT / Owner-Operators",
    painPoints: [
      "Patients lack strength for traditional core exercises",
      "Limited options for adding resistance during shoulder rehab and increasing ROM",
      "Need graduated assistance with objective data tracking",
      "Insurance documentation requires measurable progress data",
    ],
    gtmPositioning: "Springback Mode provides graduated assistance for safe core exercise entry. Closed Kinetic Chain movements enhance proprioception and minimize harmful joint shear forces. Connected app tracks every rep for patient progress reports and insurance documentation.",
    keySelling: ["CKC exercise science", "Graduated assistance (Springback)", "Compact clinical footprint", "Data-driven progress tracking"],
    subs: ["Sports Medicine Clinics", "Physical Therapy Centers", "Hospital-Supported Wellness Centers", "VA Rehabilitation Programs"],
  },
  {
    name: "Direct-to-Consumer",
    icon: Package,
    category: "DTC",
    categoryColor: "#1D4ED8",
    pricing: "$1,095/unit (full MSRP)",
    priceValue: "$1,095",
    tier: "Tier 1 — Launch",
    persona: "The Fitness Tech Enthusiast",
    personaTitle: "Home Gym Optimizer",
    painPoints: [
      "Home gym space is limited — need compact, multi-function equipment",
      "Existing smart home gym equipment is expensive ($2,000–$5,000+) and bulky",
      "Consumers want variety and progression without buying multiple devices",
    ],
    gtmPositioning: "Smartest, most versatile home fitness equipment at its price point. Replaces an entire core and resistance training setup in a single 12.2-pound device. Connected app provides exercise tutorials, customizable workouts, and performance tracking. At $1,095, significantly more affordable than Tonal ($3,995) or Mirror ($1,495+).",
    keySelling: ["Price-to-value ratio", "Connected fitness ecosystem", "Compact footprint (12.2 lbs)", "Progressive difficulty (4 modes)"],
    subs: ["E-Commerce (ZeroWheel.fit)", "Amazon Marketplace", "Specialty Fitness Retail", "Influencer Networks", "Social Commerce"],
  },
  {
    name: "Corporate Wellness",
    icon: Target,
    category: "VERTICAL",
    categoryColor: "#B8860B",
    pricing: "$825/unit (max 25% off list)",
    priceValue: "$825",
    tier: "Tier 2 — Growth",
    persona: "The Corporate Wellness Program Manager",
    personaTitle: "Wellness Manager / HR Benefits Director",
    painPoints: [
      "Lower back pain costs US employers over $100 billion annually",
      "Employees intimidated by complex gym equipment — low participation",
      "Wellness programs struggle with engagement and measurable ROI",
    ],
    gtmPositioning: "Position ZeroWheel as the antidote to the desk chair. Core strength directly combats lower back pain — the #1 workplace injury. Portable enough for office gyms and break rooms. App gamification features (streaks, goals, competitions) drive sustained employee engagement and provide HR with participation data.",
    keySelling: ["Addresses #1 workplace injury", "App gamification for engagement", "Portable for office environments", "Measurable ROI for HR"],
    subs: ["Fortune 500 Wellness Programs", "Corporate Fitness Centers", "Employee Engagement Platforms", "HR/Benefits Partnerships"],
  },
  {
    name: "Athletics, Education & Professional Sports",
    icon: Users,
    category: "COMMERCIAL",
    categoryColor: "#6B7280",
    pricing: "$695/unit (max 40% off list)",
    priceValue: "$695",
    tier: "Tier 2 — Growth",
    persona: "The Director of Strength & Conditioning",
    personaTitle: "Director of S&C",
    painPoints: [
      "Need tools that provide meaningful eccentric overload beyond body weight",
      "Require portability from weight room to sideline for game-day use",
      "Must serve diverse sport-specific movement patterns (rotational, linear, lateral)",
    ],
    gtmPositioning: "Burn and Quicksand modes deliver advanced eccentric overload. Wall-based exercises mimic rotational patterns critical for baseball (swing mechanics) and golf (torso rotation). LA Rams and Aroldis Chapman (8x MLB All-Star) actively use ZeroWheel. Device travels easily from weight room to sideline for game-day warm-ups and recovery.",
    keySelling: ["Eccentric overload capability", "Sport-specific movement patterns", "Elite endorsements (MLB, NFL)", "Weight room to sideline portability"],
    subs: ["Professional Team Facilities (NFL, MLB, NBA, MLS)", "NCAA Division I Programs", "Sports Performance Centers", "Athlete Management Groups"],
    testimonial: { quote: "One of the best devices I've been able to try, and it's the one I choose to use.", author: "Aroldis Chapman", role: "Boston Red Sox, 8x All-Star" },
  },
  {
    name: "Hospitality & Amenities",
    icon: Building2,
    category: "VERTICAL",
    categoryColor: "#B8860B",
    pricing: "$825/unit (max 25% off list)",
    priceValue: "$825",
    tier: "Tier 2 — Growth",
    persona: "Corporate Management / Fitness & Spa Directors",
    personaTitle: "Management Companies / Fitness & Spa Directors / GMs / Director of Rooms",
    painPoints: [
      "Limited gym space in luxury buildings — every square foot matters",
      "Equipment must serve beginners and advanced users alike",
      "Residents and guests expect premium, self-guided experience without dedicated staff",
    ],
    gtmPositioning: "Compact footprint (18\" x 8.4\") delivers premium fitness in minimal space. Major opportunity in in-room wellness — ZeroWheel is the perfect solution for guest-room fitness. Brands like Technogym, Precor, and Peloton have pioneered in-room wellness; ZeroWheel's compact size and self-guided design make it the ideal next-generation in-room amenity. QR onboarding enables safe, unassisted use.",
    keySelling: ["In-room wellness opportunity", "Compact design (18\" x 8.4\")", "Self-guided onboarding (QR)", "Broad demographic appeal", "Premium aesthetic"],
    subs: ["Luxury Hotels & Resorts", "Destination Resorts", "Premium Residential (Multi-Family BTR)", "Condominium (BTO)", "Live/Work/Play Developments"],
  },
  {
    name: "Military & Government",
    icon: Shield,
    category: "GSA",
    categoryColor: "#16A34A",
    pricing: "$694/unit (GSA best pricing)",
    priceValue: "$694",
    tier: "Tier 3 — Scale",
    persona: "TSAC-F / Police & Fire Chiefs / Directors of Recreation",
    personaTitle: "TSAC-F / Police & Fire Chiefs / Directors of Recreation",
    painPoints: [
      "Need equipment that deploys anywhere — base, field, station, community center",
      "Must serve diverse populations from recruits to community members",
      "Procurement requires GSA compliance and Made in USA",
      "Police and fire departments need compact solutions for limited station gym space",
    ],
    gtmPositioning: "GSA compliant, portable at 12.2 lbs, endorsed by James Mathis, Chief of Sports, Fitness & Aquatics for the US Army. 'Burn' mode delivers high-intensity resistance for tactical athletes, while 'Springback' aids in injury rehabilitation. Compact enough for deployment and rugged enough for field conditions.",
    keySelling: ["GSA compliance", "US Army endorsement", "Portability (12.2 lbs)", "Dual-use: training + rehab"],
    subs: ["DoD Installations", "VA Rehabilitation", "Parks & Recreation", "YMCA / JCC", "Police & Fire Departments"],
    testimonial: { quote: "An exceptional piece of equipment for a diverse population.", author: "James Mathis", role: "US Army, Chief of Sports, Fitness & Aquatics" },
  },
  {
    name: "Cruise & Maritime",
    icon: Ship,
    category: "VERTICAL",
    categoryColor: "#B8860B",
    pricing: "$825/unit (max 25% off list)",
    priceValue: "$825",
    tier: "Tier 3 — Scale",
    persona: "VP Onboard Experience / VP Newbuild / Management Companies",
    personaTitle: "VP Onboard Experience / VP Newbuild / Management Companies (e.g., OneSpaWorld)",
    painPoints: [
      "Extreme space constraints on vessels — every inch counts",
      "Equipment must withstand maritime conditions and constant use",
      "Need to serve diverse passenger demographics from seniors to athletes",
    ],
    gtmPositioning: "Compact footprint ideal for space-constrained vessel fitness centers. Cruise lines typically operate through RFP process. In-cabin wellness is a significant emerging opportunity — ZeroWheel is the perfect in-cabin fitness amenity for premium staterooms and suites. OneSpaWorld partnership opens access to 144+ vessels. Zero-maintenance magnetic resistance is ideal for maritime environments.",
    keySelling: ["In-cabin wellness opportunity", "Ultra-compact for vessel gyms", "OneSpaWorld (144+ vessels)", "Zero-maintenance magnetic resistance", "Fleet-wide device management"],
    subs: ["Cruise Line Fitness Centers", "Superyacht Installations", "One Spa World (144+ Vessels)", "Marine Fitness Distributors"],
  },
];

const summaryTable = [
  { vertical: "Private Clubs", decisionMaker: "Fitness Director (Golf Pro, Tennis Pro, GM, Board)", painPoint: "Member retention & novelty", uvp: "Luxury, bespoke core training" },
  { vertical: "Commercial Fitness", decisionMaker: "Corporate Procurement / Owner-Operators", painPoint: "Equipment breakage & utilization", uvp: "Durable, versatile, new revenue" },
  { vertical: "Medical & Rehab", decisionMaker: "Clinical Rehab Director / Owner-Operators", painPoint: "Patient safety & progress data", uvp: "CKC science, graduated assistance" },
  { vertical: "Direct-to-Consumer", decisionMaker: "Fitness Tech Enthusiast", painPoint: "Space, cost, variety", uvp: "Full smart gym at $1,095" },
  { vertical: "Corporate Wellness", decisionMaker: "Wellness Program Manager", painPoint: "Lower back pain ($100B/yr)", uvp: "Combats #1 workplace injury" },
  { vertical: "Athletics, Education & Professional Sports", decisionMaker: "Director of S&C", painPoint: "Eccentric overload & portability", uvp: "Advanced modes, elite endorsed" },
  { vertical: "Hospitality & Amenities", decisionMaker: "Management Co / Fitness & Spa Directors / GMs", painPoint: "Limited space, no staff", uvp: "Space-saving, self-guided" },
  { vertical: "Military & Government", decisionMaker: "TSAC-F / Police & Fire Chiefs / Dir. of Recreation", painPoint: "Portability & GSA compliance", uvp: "Rugged, portable, US Army endorsed" },
  { vertical: "Cruise & Maritime", decisionMaker: "VP Onboard / VP Newbuild / Management Co", painPoint: "Extreme space constraints", uvp: "Ultra-compact, fleet management" },
];

export default function ZWLinesOfBusiness() {
  const [expandedLob, setExpandedLob] = useState<number | null>(null);

  const toggleLob = (i: number) => {
    setExpandedLob(expandedLob === i ? null : i);
  };

  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="WEG Recommended Sales Structure"
          title="Lines of Business"
          description="WEG's proposed organizational sales framework for ZeroWheel — spanning 9 macro lines of business, each with defined buyer personas, pain points, positioning, and sub-segment targeting. All discount pricing represents the maximum discount threshold — do not exceed."
          stats={[
            { value: "9", label: "Macro LOBs" },
            { value: "40+", label: "Sub-Segments" },
            { value: "4", label: "Pricing Tiers" },
            { value: "$1,095", label: "MSRP Anchor" },
          ]}
        />
      </div>

      {/* Pricing Structure */}
      <section id="pricing" className="py-18">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Pricing Framework
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
              Maximum Discount Thresholds
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 max-w-xl mx-auto">
              All pricing anchored to the $1,095 MSRP. Discounts represent the absolute maximum — do not exceed under any circumstance.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-[#B8860B]/40 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="bg-[#F5F4F1] px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-[#B8860B]" />
                  <span className="font-display text-sm font-semibold text-white">Pricing Structure</span>
                </div>
                <span className="font-mono text-[10px] text-[#B8860B] tracking-wider">MSRP $1,095 — DO NOT EXCEED THRESHOLDS</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4">
                {[
                  { label: "DTC / MSRP", price: "$1,095", note: "Full list price", discount: "0%", bg: "bg-white" },
                  { label: "Vertical (max)", price: "$825", note: "Max 25% off list", discount: "25%", bg: "bg-[#FAFAF8]" },
                  { label: "Commercial (max)", price: "$695", note: "Max 40% off list", discount: "40%", bg: "bg-white" },
                  { label: "GSA (best)", price: "$694", note: "Best pricing — floor", discount: "~37%", bg: "bg-[#FAFAF8]" },
                ].map((tier, i) => (
                  <div key={i} className={`p-6 text-center ${tier.bg} ${i < 3 ? "border-r border-[#B8860B]/40" : ""}`}>
                    <p className="font-mono text-[9px] text-black/55 tracking-[0.15em] uppercase mb-2">{tier.label}</p>
                    <p className="font-display text-2xl font-bold text-black mb-1">{tier.price}</p>
                    <p className="font-body text-[11px] text-black/55">{tier.note}</p>
                    <div className="mt-3 inline-block px-2.5 py-0.5 rounded-full bg-black/5">
                      <span className="font-mono text-[9px] text-black/65 tracking-wider">{tier.discount} OFF</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9 Macro LOBs — Full Playbook Cards */}
      <section id="macro-lobs" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Go-To-Market Framework
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Nine Macro Lines of Business
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Each macro LOB represents a distinct market with its own buyer persona, sales cycle, pain points, and revenue potential. Click any LOB to view the full playbook.
            </motion.p>
          </motion.div>

          {/* LOB Accordion Cards */}
          <div className="max-w-5xl mx-auto space-y-3">
            {macroLobs.map((lob, i) => {
              const isExpanded = expandedLob === i;
              const Icon = lob.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="group"
                >
                  {/* Card Header — Always Visible */}
                  <div
                    onClick={() => toggleLob(i)}
                    className={`cursor-pointer rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "border-[#B8860B]/40 shadow-[0_8px_30px_rgba(201,169,98,0.1)]"
                        : "border-[#B8860B]/40 hover:border-[#B8860B]/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
                    } bg-white`}
                  >
                    <div className="px-6 py-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isExpanded ? "bg-[#B8860B]/15" : "bg-black/[0.04] group-hover:bg-[#B8860B]/10"
                        }`}>
                          <Icon className={`w-5 h-5 transition-colors ${isExpanded ? "text-[#B8860B]" : "text-black/55 group-hover:text-[#B8860B]"}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="font-display text-base font-semibold text-black">{lob.name}</h3>
                            <span
                              className="font-mono text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full border"
                              style={{
                                color: lob.categoryColor,
                                borderColor: `${lob.categoryColor}30`,
                                backgroundColor: `${lob.categoryColor}08`,
                              }}
                            >
                              {lob.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 mt-0.5">
                            <span className="font-mono text-[10px] text-black/50">{lob.pricing}</span>
                            <span className="font-mono text-[10px] text-black/25">|</span>
                            <span className="font-mono text-[10px] text-black/50">{lob.tier}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-lg font-bold text-black/80 hidden md:block">{lob.priceValue}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className={`w-5 h-5 transition-colors ${isExpanded ? "text-[#B8860B]" : "text-black/25"}`} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-6" />

                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Left Column — Persona, Pain Points, Key Selling */}
                              <div className="space-y-5">
                                {/* Buyer Persona */}
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <UserCircle className="w-3.5 h-3.5 text-[#B8860B]" />
                                    <span className="font-mono text-[9px] text-[#B8860B] tracking-[0.15em] uppercase font-semibold">Buyer Persona</span>
                                  </div>
                                  <p className="font-display text-sm font-semibold text-black">{lob.persona}</p>
                                  <p className="font-body text-xs text-black/55 mt-0.5">{lob.personaTitle}</p>
                                </div>

                                {/* Pain Points */}
                                <div>
                                  <div className="flex items-center gap-2 mb-2.5">
                                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                                    <span className="font-mono text-[9px] text-red-400 tracking-[0.15em] uppercase font-semibold">Pain Points</span>
                                  </div>
                                  <div className="space-y-2">
                                    {lob.painPoints.map((point, j) => (
                                      <div key={j} className="flex items-start gap-2.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-1.5 flex-shrink-0" />
                                        <span className="font-body text-xs text-black/70 leading-relaxed">{point}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Key Selling Points */}
                                <div>
                                  <div className="flex items-center gap-2 mb-2.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                    <span className="font-mono text-[9px] text-emerald-600 tracking-[0.15em] uppercase font-semibold">Key Selling Points</span>
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {lob.keySelling.map((point, j) => (
                                      <span key={j} className="px-2.5 py-1 rounded-full bg-[#B8860B]/5 text-emerald-700 font-body text-[10px] border border-emerald-100">
                                        {point}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Right Column — GTM Positioning, Sub-Segments, Testimonial */}
                              <div className="space-y-5">
                                {/* GTM Positioning */}
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <Crosshair className="w-3.5 h-3.5 text-[#B8860B]" />
                                    <span className="font-mono text-[9px] text-[#B8860B] tracking-[0.15em] uppercase font-semibold">GTM Positioning</span>
                                  </div>
                                  <p className="font-body text-xs text-black/70 leading-relaxed">{lob.gtmPositioning}</p>
                                </div>

                                {/* Sub-Segments */}
                                <div>
                                  <div className="flex items-center gap-2 mb-2.5">
                                    <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
                                    <span className="font-mono text-[9px] text-[#B8860B] tracking-[0.15em] uppercase font-semibold">Sub-Segments ({lob.subs.length})</span>
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {lob.subs.map((sub, j) => (
                                      <span key={j} className="px-2.5 py-1 rounded-full bg-black/[0.04] text-black/70 font-body text-[10px] border border-[#B8860B]/40">
                                        {sub}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Testimonial */}
                                {lob.testimonial && (
                                  <div className="bg-[#F5F4F1] rounded-xl p-4 mt-3">
                                    <p className="font-body text-xs text-white/70 italic leading-relaxed">"{lob.testimonial.quote}"</p>
                                    <div className="mt-2.5 flex items-center gap-2">
                                      <div className="w-5 h-5 rounded-full bg-[#B8860B]/20 flex items-center justify-center">
                                        <span className="text-[8px] text-[#B8860B] font-bold">{lob.testimonial.author[0]}</span>
                                      </div>
                                      <div>
                                        <p className="font-display text-[10px] font-semibold text-white">{lob.testimonial.author}</p>
                                        <p className="font-mono text-[8px] text-white/40">{lob.testimonial.role}</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GTM Summary Table */}
      <section id="summary" className="py-18">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              At A Glance
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
              GTM Summary Matrix
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 max-w-xl mx-auto">
              Decision makers, core pain points, and unique value propositions across all nine macro lines of business.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-[#B8860B]/40 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="bg-[#F5F4F1] px-6 py-3 flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-[#B8860B]" />
                <span className="font-display text-sm font-semibold text-black">Go-To-Market Summary</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#FAFAF8] border-b border-[#B8860B]/55">
                      <th className="text-left p-4 font-mono text-[9px] text-black/55 tracking-[0.15em] uppercase">Market Vertical</th>
                      <th className="text-left p-4 font-mono text-[9px] text-black/55 tracking-[0.15em] uppercase">Decision Maker</th>
                      <th className="text-left p-4 font-mono text-[9px] text-black/55 tracking-[0.15em] uppercase">Key Pain Point</th>
                      <th className="text-left p-4 font-mono text-[9px] text-black/55 tracking-[0.15em] uppercase">Unique Value Proposition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summaryTable.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-[#B8860B]/12 hover:bg-[#B8860B]/[0.03] transition-colors ${
                          i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]/50"
                        }`}
                      >
                        <td className="p-4">
                          <span className="font-display text-xs font-semibold text-black">{row.vertical}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-body text-xs text-black/70">{row.decisionMaker}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-body text-xs text-black/70">{row.painPoint}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-body text-xs text-[#B8860B] font-medium">{row.uvp}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <NextPageCTA label="Sales Enablement" href="/gtm/zerowheel/sales" />
    </Layout>
  );
}
