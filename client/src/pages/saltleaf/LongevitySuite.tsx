/**
 * Saltleaf — Longevity Consultation Suite Detail Page
 * Services & Programming Beyond Current Scope
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const currentScope = [
  { item: "VO₂ Max Bike", source: "TLEE Recommendation" },
  { item: "Body Composition Analyzer", source: "TLEE Recommendation" },
  { item: "Treatment Table", source: "TLEE Recommendation" },
  { item: "Counter with Sink", source: "TLEE Recommendation" },
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

const houstonImages = [
  { src: "/images/saltleaf/houston-1.jpg", caption: "FL Houston — Consultation Suite Layout" },
  { src: "/images/saltleaf/houston-2.jpg", caption: "FL Houston — Treatment Room Configuration" },
  { src: "/images/saltleaf/houston-3.jpg", caption: "FL Houston — Diagnostic Equipment Setup" },
  { src: "/images/saltleaf/houston-4.jpg", caption: "FL Houston — Patient Experience Flow" },
];

export default function LongevitySuite() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 02"
        title={<>Longevity Consultation Suite</>}
        description="Review the services Fountain Life could provide out of the longevity consultation room, beyond what's currently shown. Reference: Fountain Life Houston center suites."
        stats={[
          { label: "Current Items", value: "4" },
          { label: "Proposed Services", value: "12+" },
          { label: "Reference", value: "FL Houston" },
        ]}
      />

      {/* Current vs Proposed */}
      <section className="py-20 md:py-28">
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
              The current longevity consultation suite design from TLEE includes basic diagnostic equipment. Fountain Life can significantly expand the service offering from this space, transforming it from a simple testing room into a comprehensive longevity consultation suite.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
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
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 mt-4 max-w-2xl mx-auto">
              Services that could be delivered from the longevity consultation suite, drawing from Fountain Life's clinical expertise and center operations.
            </motion.p>
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

      {/* Houston Reference Images */}
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
              Reference
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Fountain Life Houston Center
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 mt-4 max-w-2xl mx-auto">
              Images from the Fountain Life Houston center consultation suites — provided as design reference for the Saltleaf longevity consultation room.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {houstonImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border border-[#B8860B]/20 overflow-hidden bg-white"
              >
                <div className="aspect-[4/3] bg-[#FAFAF8] flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="flex items-center justify-center h-full"><p class="font-mono text-[10px] text-black/30 tracking-[0.12em] uppercase">Image Available at Meeting</p></div>';
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="font-mono text-[10px] text-black/50 tracking-[0.12em] uppercase">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Question */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Core Question
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-6 text-black">
              What is the full activity list we want to drive from this space?
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/70 leading-relaxed max-w-3xl">
              The longevity consultation suite has the potential to be far more than a basic testing room. By defining the complete activity list — from diagnostics to therapeutics to consultations — we can ensure the room design, equipment, and infrastructure support the full vision for resident wellness at Saltleaf.
            </motion.p>
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
