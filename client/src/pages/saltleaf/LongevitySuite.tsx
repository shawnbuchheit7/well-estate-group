/**
 * Saltleaf — Longevity Consultation Suite
 * Visual-first page with architectural drawings from the SD set
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import ImageLightbox from "@/components/ImageLightbox";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const floorPlans = [
  {
    src: "/saltleaf/level3-floorplan.jpg",
    title: "Level 3 — Amenity Floor Plan",
    description: "The primary wellness and amenity level showing the Longevity Consultation Suite location, spa areas, fitness zones, pools, and resident lounges. This is where the Fountain Life-style consultation suite would be positioned.",
    drawing: "A-003",
  },
  {
    src: "/saltleaf/level26-sky-amenity.jpg",
    title: "Level 26 — Sky Amenity Floor Plan",
    description: "Upper amenity level featuring Sky Lobby/Dining (2,800 SF), Sky Bar (1,300 SF), rooftop pool, private dining/board room, and sunset terrace. Potential secondary wellness touchpoint.",
    drawing: "A-026",
  },
  {
    src: "/saltleaf/saltleaf-rendering.jpg",
    title: "Saltleaf Tower One — Exterior Rendering",
    description: "Arquitectonica's schematic design rendering showing the tower's signature curved form on Estero Bay. The Level 3 amenity podium is visible at the base of the tower.",
    drawing: "Cover",
  },
];

const currentScope = [
  { item: "VO₂ Max Bike", source: "TLEE Recommendation" },
  { item: "Body Composition Analyzer", source: "TLEE Recommendation" },
  { item: "Treatment Table", source: "TLEE Recommendation" },
  { item: "Counter with Sink", source: "TLEE Recommendation" },
];

const suiteComponents = [
  {
    title: "Consultation Room",
    sqft: "~400 SF",
    description: "Private physician consultation space with biometric display, video conferencing for remote specialists, and comfortable seating for residents and family members.",
    features: ["Biometric data display", "Telehealth capability", "Sound-isolated", "Natural light"],
  },
  {
    title: "Diagnostic Suite",
    sqft: "~600 SF",
    description: "Advanced diagnostic equipment room for body composition analysis, cardiovascular screening, and biomarker collection. Designed to feel like a luxury spa, not a clinical environment.",
    features: ["DEXA / body composition", "Cardiovascular screening", "Phlebotomy station", "AI health analysis"],
  },
  {
    title: "Recovery & Longevity Lab",
    sqft: "~500 SF",
    description: "Dedicated space for IV therapy, hyperbaric oxygen, red light therapy, and other regenerative protocols. Designed as a lounge experience with bay views.",
    features: ["IV therapy chairs", "Hyperbaric chamber", "Red light therapy", "Cryotherapy"],
  },
  {
    title: "Wellness Concierge",
    sqft: "~200 SF",
    description: "Front-of-house reception and scheduling area. Residents book appointments, review their health dashboard, and connect with the wellness team.",
    features: ["Health dashboard kiosk", "Scheduling system", "Product display", "Welcome lounge"],
  },
];

const proposedServices = [
  {
    category: "Diagnostics & Testing",
    services: [
      "VO₂ Max Testing — Cardiopulmonary fitness assessment",
      "Body Composition Analysis — DEXA-level precision",
      "Biomarker Testing — Blood panels, hormones, metabolic markers",
      "Cardiovascular Screening — Advanced cardiac risk assessment",
    ],
  },
  {
    category: "Therapeutic Services",
    services: [
      "IV Therapy — NAD+, vitamin infusions, hydration protocols",
      "Sports Chiropractic — Performance-focused musculoskeletal care",
      "Acupuncture — Traditional and electroacupuncture",
      "Regenerative Injections — PRP, stem cell therapies",
    ],
  },
  {
    category: "Consultation Services",
    services: [
      "Dermatology Consultations — Skin health, aesthetics",
      "Nutrition & Metabolic Coaching — Personalized protocols",
      "Longevity Medicine Consults — Physician-led health optimization",
      "Functional Medicine — Root-cause analysis and treatment",
    ],
  },
];

const keyQuestions = [
  "What is the allocated square footage for the Longevity Suite on Level 3?",
  "Is the suite positioned for resident-only access or will it serve outside members?",
  "What diagnostic equipment has been specified vs. what is open for recommendation?",
  "How does the suite integrate with the adjacent spa and fitness areas?",
  "Is there a dedicated MEP chase for medical-grade equipment requirements?",
  "What is the revenue model — included in HOA, membership tier, or fee-for-service?",
  "Will Fountain Life brand the suite or will it be white-labeled under Saltleaf?",
];

export default function LongevitySuite() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 02"
        title={<>Longevity Consultation Suite</>}
        description="Dedicated health optimization and longevity diagnostic space within the Saltleaf Tower One amenity level. Designed to bring Fountain Life-caliber preventive medicine directly to residents."
        stats={[
          { label: "Target Level", value: "3" },
          { label: "Est. Suite Size", value: "~1,700 SF" },
          { label: "Components", value: "4" },
          { label: "Drawing Set", value: "SD 100%" },
        ]}
      />

      {/* Architectural Plans Gallery */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Architectural Plans
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Schematic Design Set
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              From the 05/15/2026 100% Schematic Design package by Arquitectonica. Click any plan to zoom and inspect details.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {floorPlans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border border-[#B8860B]/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <ImageLightbox src={plan.src} alt={plan.title} className="bg-[#FAFAF8]">
                  <img
                    src={plan.src}
                    alt={plan.title}
                    className="w-full h-auto max-h-[600px] object-contain bg-[#FAFAF8]"
                  />
                </ImageLightbox>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-medium text-black">{plan.title}</h3>
                    <p className="font-body text-sm text-black/60 mt-1 leading-relaxed max-w-3xl">{plan.description}</p>
                  </div>
                  <span className="font-mono text-[10px] text-[#B8860B]/70 bg-[#B8860B]/[0.06] px-2 py-1 rounded shrink-0">
                    {plan.drawing}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current Scope */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Current Scope
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-6 text-black">
              What TLEE Currently Recommends
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/70 leading-relaxed mb-8 max-w-3xl">
              The current longevity consultation suite design from TLEE includes basic diagnostic equipment. Fountain Life can significantly expand the service offering from this space.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentScope.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-black/10 bg-white">
                  <span className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center font-mono text-xs text-black/40">{i + 1}</span>
                  <div>
                    <p className="font-body text-sm font-medium text-black">{item.item}</p>
                    <p className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase">{item.source}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Suite Components */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Proposed Program
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Suite Components
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              Four integrated zones designed to deliver comprehensive longevity diagnostics and personalized health optimization within a luxury residential context.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {suiteComponents.map((comp, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border border-[#B8860B]/15 bg-white p-8 hover:border-[#B8860B]/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-[#B8860B] font-semibold text-xs">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-xl font-medium text-black mt-1">{comp.title}</h3>
                  </div>
                  <span className="font-mono text-sm text-[#B8860B] font-semibold">{comp.sqft}</span>
                </div>
                <p className="font-body text-sm text-black/65 leading-relaxed mb-5">{comp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {comp.features.map((f, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-full text-[10px] font-mono text-black/60 bg-[#B8860B]/[0.06] border border-[#B8860B]/10">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proposed Services */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Expanded Vision
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Fountain Life Services to Explore
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {proposedServices.map((category, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white"
              >
                <span className="font-mono text-[#B8860B] font-semibold text-xs tracking-wider mb-1 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-lg font-medium text-black mb-4">{category.category}</h4>
                <ul className="space-y-3">
                  {category.services.map((service, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-black/65 font-body">
                      <span className="text-[#B8860B] mt-0.5">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Questions */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Discussion Points
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8 text-black">
              Questions for the Meeting
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-3">
              {keyQuestions.map((q, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-[#B8860B]/15 bg-white">
                  <span className="font-mono text-[#B8860B] font-semibold text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-body text-sm text-black/70">{q}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-[#B8860B]/10">
        <div className="container max-w-4xl flex items-center justify-between">
          <Link href="/longevity/saltleaf/wellness-consultants">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Prev: Wellness Consultants
            </a>
          </Link>
          <Link href="/longevity/saltleaf/fitness-layout">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              Next: Fitness Layout <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
