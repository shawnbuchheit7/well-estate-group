/*
 * Longevity Center Performance Model — Landing page for the NAD+ Performance Model
 * Placeholder structure ready for content population
 * Design: Light luxury theme matching site-wide aesthetic
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const sections = [
  { title: "About", desc: "The vision behind the Performance Model and NAD+ innovation", path: "/longevity/performance-model/about" },
  { title: "Platform", desc: "The NADclinic platform — IV therapeutics, supplements, academy, and global network", path: "/longevity/performance-model/platform" },
  { title: "Products", desc: "NAD+ vials, peptides, exosomes, supplements, and smart delivery systems", path: "/longevity/performance-model/products" },
  { title: "Partnerships", desc: "Global clinic partnerships, hospitality integration, and brand collaborations", path: "/longevity/performance-model/partnerships" },
  { title: "Diagnostics", desc: "Human Performance Lab — PNOE, blood panels, brain mapping, and biomarker testing", path: "/longevity/performance-model/diagnostics" },
  { title: "Hospitality", desc: "In-room wellness, wellness minibar, on-site clinics, and pop-up activations", path: "/longevity/performance-model/hospitality" },
  { title: "Academy", desc: "CPD-accredited training, practitioner education, and clinical excellence", path: "/longevity/performance-model/academy" },
  { title: "Projections", desc: "Financial projections, unit economics, and growth trajectory", path: "/longevity/performance-model/projections" },
];

export default function LongevityPerformanceModel() {
  return (
    <Layout section="longevity-performance">
      <LightHero
        eyebrow="Performance & Recovery Model"
        title={<>Longevity Center<br /><em className="italic font-light">Performance & Recovery Model</em></>}
        description="A performance-focused longevity center model built on NAD+ therapeutics, advanced diagnostics, and hyper-personalized protocols. Designed for scalable deployment through clinic partnerships, hospitality integration, and direct-to-consumer channels."
        stats={[
          { label: "Global Partners", value: "40+" },
          { label: "Countries", value: "40+" },
          { label: "NAD+ Infusions", value: "100K+" },
          { label: "Pillars of Wellness", value: "6" },
        ]}
      />

      {/* Section Directory */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Business Plan
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Explore the Model
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/50 max-w-2xl mx-auto">
              Navigate through each section of the Performance Model business plan using the tabs above
              or the directory below.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {sections.map((section, i) => (
              <motion.a
                key={i}
                href={section.path}
                variants={fadeInUp}
                className="group p-6 rounded-2xl border border-black/[0.12] bg-white hover:border-[#C9A962]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-black/25 tracking-wider uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <motion.span
                    className="text-[#C9A962] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    →
                  </motion.span>
                </div>
                <h3 className="font-display text-lg font-medium text-black mb-2">
                  {section.title}
                </h3>
                <p className="font-body text-sm text-black/45 leading-relaxed">
                  {section.desc}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="container px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Key Differentiators
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl md:text-3xl font-medium mt-4 text-black">
              Six Pillars of Wellness
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              "Human Performance",
              "Hair & Skin",
              "Sexual Health",
              "Longevity",
              "Sleep & Circadian Rhythm",
              "Metabolic & Weight",
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center p-4 rounded-xl border border-black/[0.08] bg-white"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#C9A962]/10 flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[#C9A962] font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="font-body text-xs text-black/70 font-medium leading-tight">{pillar}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Back to Models */}
      <section className="py-12 bg-white border-t border-black/[0.06]">
        <div className="container px-6 text-center">
          <Link href="/longevity">
            <motion.div
              className="inline-flex items-center gap-2 text-black/50 hover:text-[#C9A962] transition-colors cursor-pointer"
              whileHover={{ x: -4 }}
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span className="font-body text-sm font-medium">Back to All Models</span>
            </motion.div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
