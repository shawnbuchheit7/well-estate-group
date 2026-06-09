/**
 * Saltleaf — Longevity Consultation Suite
 * Two-option proposal: Houston duplicate vs TLEE assessment + edits
 * Branded with Saltleaf teal (#1a3e4c)
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import ZoomableImage from "@/components/ZoomableImage";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ACCENT = "#1a3e4c";

const saltleafPlans = [
  {
    src: "/saltleaf/level3-floorplan.jpg",
    title: "Level 3 — Amenity Floor Plan",
    description: "The primary wellness and amenity level showing the Longevity Consultation Suite location, spa areas, fitness zones, pools, and resident lounges.",
    drawing: "A-003",
  },

];

const houstonSuiteImages = [
  {
    src: "/saltleaf/houston-suite-1.jpg",
    title: "Suite 4 — Main Consultation View",
    description: "Luxury longevity suite featuring treatment bed, branded display, cognac leather seating area, and ambient cove lighting. This is the design language we propose to duplicate.",
  },
  {
    src: "/saltleaf/houston-suite-2.jpg",
    title: "Suite 4 — Alternate Angle",
    description: "Full room perspective showing floor-to-ceiling window, treatment chaise, entertainment/education screen, and intimate seating nook.",
  },
  {
    src: "/saltleaf/houston-suite-3.jpg",
    title: "Suite 4 — Vanity & Equipment Wall",
    description: "Counter/vanity area with sink, large branded display, shelving, beverage cooler, and treatment bed. All clinical functions hidden within luxury finishes.",
  },
  {
    src: "/saltleaf/houston-suite-4.jpg",
    title: "Suite 4 — Lounge Configuration",
    description: "Alternative layout showing loveseat, accent screen, and treatment chair. Demonstrates the flexibility of the space for different service modalities.",
  },
  {
    src: "/saltleaf/houston-suite-5.jpg",
    title: "Suite 4 — Full Suite Panoramic",
    description: "Complete room view: treatment bed, long vanity/counter with integrated sink, display screen, seating area, and natural light. This is the full package.",
  },
];

const option1Features = [
  { item: "Treatment/Exam Bed (motorized, luxury upholstery)", included: true },
  { item: "Large-format branded display (65\"+)", included: true },
  { item: "Consultation seating area (2-4 guests)", included: true },
  { item: "Vanity/counter with integrated sink", included: true },
  { item: "Beverage cooler & hospitality service", included: true },
  { item: "Ambient cove lighting (tunable white)", included: true },
  { item: "Sound isolation for privacy", included: true },
  { item: "Telehealth/video conferencing capability", included: true },
  { item: "VO₂ Max Bike (add to Houston design)", added: true },
  { item: "Body Composition Analyzer (add to Houston design)", added: true },
];

const option2Features = [
  { item: "VO₂ Max Bike", source: "TLEE Original" },
  { item: "Body Composition Analyzer", source: "TLEE Original" },
  { item: "Treatment Table", source: "TLEE Original" },
  { item: "Counter with Sink", source: "TLEE Original" },
  { item: "Large-format branded display (65\"+)", source: "Proposed Addition" },
  { item: "Consultation seating area", source: "Proposed Addition" },

  { item: "Sound isolation upgrade", source: "Proposed Addition" },
  { item: "Telehealth/video conferencing", source: "Proposed Addition" },
  { item: "Lactate Threshold Testing", source: "Shawn" },
  { item: "Technogym Checkup — Functional Movement & Grip Strength", source: "Shawn" },
  { item: "Blood Draws (Comprehensive Biomarker Panels)", source: "Shawn" },
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
];

export default function LongevitySuite() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 01"
        title={<>Longevity Consultation Suite</>}
        description="Two proposed approaches for the Saltleaf Tower One longevity consultation space — both delivering world-class preventive medicine directly to residents."
        accentColor={ACCENT}
        stats={[
          { label: "Target Level", value: "3" },
          { label: "Options", value: "2" },
          { label: "Reference", value: "Houston" },
          { label: "Drawing Set", value: "SD 100%" },
        ]}
      />

      {/* Saltleaf Architectural Plans */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Saltleaf Plans
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Schematic Design Set
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              From the 05/15/2026 100% Schematic Design package by Arquitectonica. Pinch to zoom directly on any plan.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {saltleafPlans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: `${ACCENT}33` }}
              >
                <ZoomableImage src={plan.src} alt={plan.title} maxHeight="700px" className="bg-[#FAFAF8]" />
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-medium text-black">{plan.title}</h3>
                    <p className="font-body text-sm text-black/60 mt-1 leading-relaxed max-w-3xl">{plan.description}</p>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-1 rounded shrink-0" style={{ color: `${ACCENT}B3`, backgroundColor: `${ACCENT}0F` }}>
                    {plan.drawing}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Houston Floor Plan Reference */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-7xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Reference Design
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Houston Longevity Center
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              4411 San Felipe Street, Houston TX — The operational reference for what we propose to bring to Saltleaf. Pinch or scroll to zoom directly on the drawing.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            style={{ borderColor: `${ACCENT}33` }}
          >
            <ZoomableImage src="/saltleaf/houston-a110-overall.jpg" alt="Houston — Overall Floor Plan A110" maxHeight="700px" className="bg-[#FAFAF8]" />
            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-medium text-black">Houston Preventative Healthcare Center — Enlarged Floor Plan</h3>
                <p className="font-body text-sm text-black/60 mt-1 leading-relaxed max-w-3xl">
                  Full construction drawing showing 5 longevity suites, MRI scanner, CT scan, blood draw, reception, and support spaces. Architect: Hunton Brady. Drawing A801 at 1/4" = 1'-0" scale. Individual consultation suites are approximately 100–150 SF each (~9'–10' × 12'–15'). Testing/DexaScan room: 125 SF (Drawing A821). Total facility: ~7,500+ SF.
                </p>
              </div>
              <span className="font-mono text-[10px] px-2 py-1 rounded shrink-0" style={{ color: `${ACCENT}B3`, backgroundColor: `${ACCENT}0F` }}>
                A801
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Option 1: Houston Duplicate */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white font-mono text-xs font-semibold" style={{ backgroundColor: ACCENT }}>
                <Star className="w-3.5 h-3.5" /> OPTION 1
              </span>
              <span className="font-mono text-[10px] text-black/40 tracking-[0.15em] uppercase">Recommended</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium text-black">
              Duplicate Houston Suite Design
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 mt-3 max-w-3xl leading-relaxed">
              Take the proven Houston Suite 4 design — already built, operational, and delivering exceptional patient experience — and adapt it for the Saltleaf Level 3 space. Add VO₂ Max and body composition capabilities that the Houston suite doesn't have.
            </motion.p>
          </motion.div>

          {/* Houston Suite Gallery */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {houstonSuiteImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow ${i === 0 ? 'md:col-span-2' : ''}`}
                style={{ borderColor: `${ACCENT}26` }}
              >
                <ZoomableImage src={img.src} alt={img.title} maxHeight={i === 0 ? "500px" : "350px"} className="bg-[#FAFAF8]" />
                <div className="p-5">
                  <h4 className="font-display text-sm font-medium text-black">{img.title}</h4>
                  <p className="font-body text-xs text-black/55 mt-1 leading-relaxed">{img.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Option 1 Feature List */}
          <motion.div
            className="rounded-2xl border bg-white p-8"
            style={{ borderColor: `${ACCENT}33` }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h3 className="font-display text-xl font-medium text-black mb-6">Option 1 — Included Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {option1Features.map((f, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${f.added ? 'border' : 'bg-black/[0.02]'}`} style={f.added ? { backgroundColor: `${ACCENT}0A`, borderColor: `${ACCENT}33` } : undefined}>
                  <Check className={`w-4 h-4 shrink-0`} style={{ color: f.added ? ACCENT : '#16a34a' }} />
                  <span className="font-body text-sm text-black/75">{f.item}</span>
                  {f.added && (
                    <span className="ml-auto font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ color: ACCENT, backgroundColor: `${ACCENT}1A` }}>NEW</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Option 2: TLEE + Edits */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-7xl">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 text-white font-mono text-xs font-semibold">
                OPTION 2
              </span>
              <span className="font-mono text-[10px] text-black/40 tracking-[0.15em] uppercase">Alternative</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium text-black">
              TLEE Assessment + Enhancements
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 mt-3 max-w-3xl leading-relaxed">
              Start with TLEE's current recommendation (VO₂ max, body comp, treatment table, counter with sink) as the baseline, then layer in proposed enhancements to elevate the experience to world-class longevity standards.
            </motion.p>
          </motion.div>

          {/* TLEE Assessment Room Drawing */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-10"
            style={{ borderColor: `${ACCENT}33` }}
          >
            <ZoomableImage src="/saltleaf/tlee-assessment-room.jpg" alt="TLEE Assessment Room — Longevity Suite 368 SF" maxHeight="500px" className="bg-[#FAFAF8]" />
            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-medium text-black">Longevity Assessment Room — TLEE Programming</h3>
                <p className="font-body text-sm text-black/60 mt-1 leading-relaxed max-w-3xl">
                  368 SF dedicated longevity consultation room as programmed by TLEE (approximately 2.5× the size of a single Houston suite). Located adjacent to Fitness Director office, Specialty Shower, and Beauty Salon on Level 3. This is the room that will house the VO₂ max bike, body composition analyzer, treatment table, and counter with sink.
                </p>
              </div>
              <span className="font-mono text-[10px] px-2 py-1 rounded shrink-0" style={{ color: `${ACCENT}B3`, backgroundColor: `${ACCENT}0F` }}>
                A-003
              </span>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-black/10 bg-white p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {option2Features.map((f, i) => {
                const isAdvisory = f.source === 'Shawn';
                const isProposed = f.source === 'Proposed Addition';
                const isTlee = f.source === 'TLEE Original';
                return (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border`} style={{
                  backgroundColor: isAdvisory ? '#0e7c6b0A' : isProposed ? `${ACCENT}0A` : 'rgba(0,0,0,0.02)',
                  borderColor: isAdvisory ? '#0e7c6b33' : isProposed ? `${ACCENT}33` : 'rgba(0,0,0,0.05)'
                }}>
                  <Check className={`w-4 h-4 shrink-0`} style={{ color: isAdvisory ? '#0e7c6b' : isProposed ? ACCENT : 'rgba(0,0,0,0.4)' }} />
                  <span className="font-body text-sm text-black/75">{f.item}</span>
                  <span className={`ml-auto font-mono text-[9px] px-2 py-0.5 rounded-full shrink-0`} style={{
                    color: isAdvisory ? '#0e7c6b' : isProposed ? ACCENT : 'rgba(0,0,0,0.4)',
                    backgroundColor: isAdvisory ? '#0e7c6b1A' : isProposed ? `${ACCENT}1A` : 'rgba(0,0,0,0.05)'
                  }}>
                    {isAdvisory ? 'SHAWN' : isProposed ? 'PROPOSED' : 'TLEE'}
                  </span>
                </div>
                );
              })}
            </div>
          </motion.div>
          {/* Shawn's Proposed Solutions */}
          <motion.div
            className="mt-12 space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="font-display text-2xl font-medium text-black">
              Proposed Assessment Solutions
            </motion.h3>

            {/* Lactate Threshold Testing */}
            <motion.div variants={fadeInUp} className="rounded-2xl border bg-white overflow-hidden" style={{ borderColor: '#0e7c6b33' }}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img src="/saltleaf/lactate-testing-1.jpg" alt="Lactate threshold testing — blood sample during exercise" className="w-full h-64 md:h-full object-cover" />
                <div className="p-8 flex flex-col justify-center">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase mb-2" style={{ color: '#0e7c6b' }}>Shawn's Recommendation</span>
                  <h4 className="font-display text-xl font-medium text-black mb-3">Lactate Threshold Testing</h4>
                  <p className="font-body text-sm text-black/65 leading-relaxed">
                    Blood lactate analysis during graded exercise to identify aerobic and anaerobic thresholds. A small fingertip blood sample is taken at increasing intensity intervals to determine the precise heart rate zones where lactate accumulates — enabling truly personalized endurance training prescriptions for each resident.
                  </p>
                </div>
              </div>
              <div className="border-t" style={{ borderColor: '#0e7c6b1A' }}>
                <img src="/saltleaf/lactate-testing-2.jpg" alt="Lactate testing on bike with physiologist" className="w-full h-56 object-cover object-center" />
              </div>
            </motion.div>

            {/* Technogym Checkup */}
            <motion.div variants={fadeInUp} className="rounded-2xl border bg-white overflow-hidden" style={{ borderColor: '#0e7c6b33' }}>
              <div className="p-8">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase mb-2 block" style={{ color: '#0e7c6b' }}>Shawn's Recommendation</span>
                <h4 className="font-display text-xl font-medium text-black mb-3">Technogym Checkup</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed mb-6">
                  AI-powered holistic assessment station measuring functional movement, grip strength, mobility, balance, body composition, and cognitive skills. Calculates a "Wellness Age" metric and automatically generates personalized training programs. Intel RealSense motion tracking provides clinical-grade movement analysis in a luxury form factor — available in the Sand Stone finish for seamless integration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg overflow-hidden bg-gray-50">
                    <img src="/saltleaf/technogym-checkup-side.jpg" alt="Technogym Checkup — Side view of the unit" className="w-full h-64 object-contain" />
                    <p className="text-xs text-center text-black/50 py-2">Side View</p>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-gray-50">
                    <img src="/saltleaf/technogym-checkup-front.jpg" alt="Technogym Checkup — Front view of the unit" className="w-full h-64 object-contain" />
                    <p className="text-xs text-center text-black/50 py-2">Front View</p>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-gray-50">
<img src="/saltleaf/technogym-checkup-1.jpg" alt="Technogym Checkup — Wellness Age assessment interface" className="w-full h-64 object-contain" />
                     <p className="text-xs text-center text-black/50 py-2">Wellness Age Interface</p>
                  </div>
                </div>
                <a href="https://www.technogym.com/en-US/product/technogym-checkup_E030-SLS.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-xs hover:underline" style={{ color: '#0e7c6b' }}>
                  View Product →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Side by Side
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Option Comparison
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: `1px solid ${ACCENT}33` }}>
                  <th className="text-left p-4 font-mono text-xs text-black/50 uppercase tracking-wider">Dimension</th>
                  <th className="text-center p-4 font-mono text-xs uppercase tracking-wider" style={{ color: ACCENT }}>Option 1</th>
                  <th className="text-center p-4 font-mono text-xs text-black/50 uppercase tracking-wider">Option 2</th>
                </tr>
              </thead>
              <tbody className="text-sm font-body">
                <tr className="border-b border-black/5">
                  <td className="p-4 text-black/70">Design Basis</td>
                  <td className="p-4 text-center text-black/70">Houston (proven)</td>
                  <td className="p-4 text-center text-black/70">TLEE assessment (new)</td>
                </tr>
                <tr className="border-b border-black/5 bg-black/[0.01]">
                  <td className="p-4 text-black/70">Patient Experience</td>
                  <td className="p-4 text-center text-black/70">Luxury hotel-suite feel</td>
                  <td className="p-4 text-center text-black/70">Clinical + upgrades</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-4 text-black/70">Diagnostic Capability</td>
                  <td className="p-4 text-center text-black/70">Full (VO₂ + body comp added)</td>
                  <td className="p-4 text-center text-black/70">Full (VO₂ + body comp native)</td>
                </tr>
                <tr className="border-b border-black/5 bg-black/[0.01]">
                  <td className="p-4 text-black/70">Hospitality Elements</td>
                  <td className="p-4 text-center text-black/70">Built-in (beverage, seating)</td>
                  <td className="p-4 text-center text-black/70">Added as enhancement</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-4 text-black/70">Design Risk</td>
                  <td className="p-4 text-center text-black/70">Low — already built</td>
                  <td className="p-4 text-center text-black/70">Medium — new design</td>
                </tr>
                <tr className="border-b border-black/5 bg-black/[0.01]">
                  <td className="p-4 text-black/70">Timeline Impact</td>
                  <td className="p-4 text-center text-black/70">Faster (reuse specs)</td>
                  <td className="p-4 text-center text-black/70">Standard</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="p-4 text-center font-semibold" style={{ color: ACCENT }}>Wow Factor</td>
                  <td className="p-4 text-center font-semibold" style={{ color: ACCENT }}>★★★★★</td>
                  <td className="p-4 text-center text-black/70">★★★☆☆</td>
                </tr>
              </tbody>
            </table>
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
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Service Menu
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Services Deliverable From Either Option
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
                className="p-6 rounded-2xl border bg-white"
                style={{ borderColor: `${ACCENT}33` }}
              >
                <span className="font-mono font-semibold text-xs tracking-wider mb-1 block" style={{ color: ACCENT }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-lg font-medium text-black mb-4">{category.category}</h4>
                <ul className="space-y-3">
                  {category.services.map((service, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-black/65 font-body">
                      <span className="mt-0.5" style={{ color: ACCENT }}>•</span>
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
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Discussion Points
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8 text-black">
              Questions for the Meeting
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-3">
              {keyQuestions.map((q, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border bg-white" style={{ borderColor: `${ACCENT}26` }}>
                  <span className="font-mono font-semibold text-xs mt-0.5" style={{ color: ACCENT }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-body text-sm text-black/70">{q}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t" style={{ borderColor: `${ACCENT}1A` }}>
        <div className="container max-w-4xl flex items-center justify-between">
          <Link href="/longevity/saltleaf">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Overview
            </a>
          </Link>
          <Link href="/longevity/saltleaf/fitness-layout">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-black transition-colors">
              Next: Fitness Layout <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
