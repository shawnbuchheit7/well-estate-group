/**
 * Saltleaf — Longevity Consultation Suite
 * Two-option proposal: Houston duplicate vs TLEE assessment + edits
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import ImageLightbox from "@/components/ImageLightbox";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const saltleafPlans = [
  {
    src: "/saltleaf/level3-floorplan.jpg",
    title: "Level 3 — Amenity Floor Plan",
    description: "The primary wellness and amenity level showing the Longevity Consultation Suite location, spa areas, fitness zones, pools, and resident lounges.",
    drawing: "A-003",
  },
  {
    src: "/saltleaf/level26-sky-amenity.jpg",
    title: "Level 26 — Sky Amenity Floor Plan",
    description: "Upper amenity level featuring Sky Lobby/Dining (2,800 SF), Sky Bar (1,300 SF), rooftop pool, private dining/board room, and sunset terrace.",
    drawing: "A-026",
  },
];

const houstonSuiteImages = [
  {
    src: "/saltleaf/houston-suite-1.jpg",
    title: "Suite 4 — Main Consultation View",
    description: "Luxury longevity suite featuring treatment bed, Fountain Life branded display, cognac leather seating area, and ambient cove lighting. This is the design language we propose to duplicate.",
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
  { item: "Large-format branded display (65\"+)", source: "WEG Addition" },
  { item: "Consultation seating area", source: "WEG Addition" },
  { item: "Ambient cove lighting system", source: "WEG Addition" },
  { item: "Beverage cooler & hospitality", source: "WEG Addition" },
  { item: "Sound isolation upgrade", source: "WEG Addition" },
  { item: "Telehealth/video conferencing", source: "WEG Addition" },
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
        eyebrow="Agenda Item 02"
        title={<>Longevity Consultation Suite</>}
        description="Two proposed approaches for the Saltleaf Tower One longevity consultation space — both delivering Fountain Life-caliber preventive medicine directly to residents."
        stats={[
          { label: "Target Level", value: "3" },
          { label: "Options", value: "2" },
          { label: "Reference", value: "FL Houston" },
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Saltleaf Plans
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Schematic Design Set
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              From the 05/15/2026 100% Schematic Design package by Arquitectonica. Click any plan to zoom in — up to 20x magnification for detail inspection.
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Reference Design
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Fountain Life Houston Center
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              4411 San Felipe Street, Houston TX — The operational reference for what we propose to bring to Saltleaf. Click to zoom into the full construction drawing.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl border border-[#B8860B]/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <ImageLightbox src="/saltleaf/houston-floorplan.jpg" alt="FL Houston — Enlarged Floor Plan A801" className="bg-[#FAFAF8]">
              <img
                src="/saltleaf/houston-floorplan.jpg"
                alt="FL Houston — Enlarged Floor Plan A801"
                className="w-full h-auto max-h-[700px] object-contain bg-[#FAFAF8]"
              />
            </ImageLightbox>
            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-medium text-black">Houston Preventative Healthcare Center — Enlarged Floor Plan</h3>
                <p className="font-body text-sm text-black/60 mt-1 leading-relaxed max-w-3xl">
                  Full construction drawing showing 5 longevity suites, MRI scanner, CT scan, blood draw, reception, and support spaces. Architect: Hunton Brady. Drawing A801 at 1/4" = 1'-0" scale.
                </p>
              </div>
              <span className="font-mono text-[10px] text-[#B8860B]/70 bg-[#B8860B]/[0.06] px-2 py-1 rounded shrink-0">
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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B8860B] text-white font-mono text-xs font-semibold">
                <Star className="w-3.5 h-3.5" /> OPTION 1
              </span>
              <span className="font-mono text-[10px] text-black/40 tracking-[0.15em] uppercase">Recommended</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium text-black">
              Duplicate Houston Suite Design
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 mt-3 max-w-3xl leading-relaxed">
              Take the proven Fountain Life Houston Suite 4 design — already built, operational, and delivering exceptional patient experience — and adapt it for the Saltleaf Level 3 space. Add VO₂ Max and body composition capabilities that the Houston suite doesn't have.
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
                className={`rounded-2xl border border-[#B8860B]/15 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <ImageLightbox src={img.src} alt={img.title} className="bg-[#FAFAF8]">
                  <img
                    src={img.src}
                    alt={img.title}
                    className={`w-full h-auto object-cover bg-[#FAFAF8] ${i === 0 ? 'max-h-[500px]' : 'max-h-[350px]'}`}
                  />
                </ImageLightbox>
                <div className="p-5">
                  <h4 className="font-display text-sm font-medium text-black">{img.title}</h4>
                  <p className="font-body text-xs text-black/55 mt-1 leading-relaxed">{img.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Option 1 Feature List */}
          <motion.div
            className="rounded-2xl border border-[#B8860B]/20 bg-white p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h3 className="font-display text-xl font-medium text-black mb-6">Option 1 — Included Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {option1Features.map((f, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${f.added ? 'bg-[#B8860B]/[0.06] border border-[#B8860B]/20' : 'bg-black/[0.02]'}`}>
                  <Check className={`w-4 h-4 shrink-0 ${f.added ? 'text-[#B8860B]' : 'text-green-600'}`} />
                  <span className="font-body text-sm text-black/75">{f.item}</span>
                  {f.added && (
                    <span className="ml-auto font-mono text-[9px] text-[#B8860B] bg-[#B8860B]/10 px-2 py-0.5 rounded-full">NEW</span>
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
              Start with TLEE's current recommendation (VO₂ max, body comp, treatment table, counter with sink) as the baseline, then layer in Well Estate Group's proposed enhancements to elevate the experience to Fountain Life standards.
            </motion.p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-black/10 bg-white p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {option2Features.map((f, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${f.source === 'WEG Addition' ? 'bg-[#B8860B]/[0.06] border border-[#B8860B]/20' : 'bg-black/[0.02] border border-black/5'}`}>
                  <Check className={`w-4 h-4 shrink-0 ${f.source === 'WEG Addition' ? 'text-[#B8860B]' : 'text-black/40'}`} />
                  <span className="font-body text-sm text-black/75">{f.item}</span>
                  <span className={`ml-auto font-mono text-[9px] px-2 py-0.5 rounded-full shrink-0 ${
                    f.source === 'WEG Addition' ? 'text-[#B8860B] bg-[#B8860B]/10' : 'text-black/40 bg-black/5'
                  }`}>
                    {f.source === 'WEG Addition' ? 'WEG ADD' : 'TLEE'}
                  </span>
                </div>
              ))}
            </div>
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
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
                <tr className="border-b border-[#B8860B]/20">
                  <th className="text-left p-4 font-mono text-xs text-black/50 uppercase tracking-wider">Dimension</th>
                  <th className="text-center p-4 font-mono text-xs text-[#B8860B] uppercase tracking-wider">Option 1</th>
                  <th className="text-center p-4 font-mono text-xs text-black/50 uppercase tracking-wider">Option 2</th>
                </tr>
              </thead>
              <tbody className="text-sm font-body">
                <tr className="border-b border-black/5">
                  <td className="p-4 text-black/70">Design Basis</td>
                  <td className="p-4 text-center text-black/70">FL Houston (proven)</td>
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
                  <td className="p-4 text-black/70">Wow Factor</td>
                  <td className="p-4 text-center font-semibold text-[#B8860B]">★★★★★</td>
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
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
          <Link href="/longevity/saltleaf">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Overview
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
