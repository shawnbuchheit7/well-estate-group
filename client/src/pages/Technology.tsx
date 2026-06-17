/*
 * Technology & AI — Card-based landing page
 * Two product cards: Integrated Technology Ecosystem + Digital Health Twin
 * Matches the card format used across the site (ProductsLanding, GTMProjects)
 */

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Brain, Layers, Activity, Server, Dna } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface TechTile {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  status: "active" | "in-development";
  stats?: { label: string; value: string }[];
  icon: typeof Cpu;
}

const techProducts: TechTile[] = [
  {
    id: "integrated-ecosystem",
    title: "Integrated Technology Ecosystem",
    subtitle: "Platform Architecture & AI Infrastructure",
    description: "Purpose-built technology stack powering personalized care delivery, operational excellence, and data-driven insights at scale. Unified platform connecting patient care, clinical operations, and business intelligence across all centers.",
    href: "/technology/ecosystem",
    status: "active",
    stats: [
      { label: "Modalities", value: "22" },
      { label: "Data Points", value: "15B+" },
      { label: "Integrations", value: "30+" },
    ],
    icon: Server,
  },
  {
    id: "digital-health-twin",
    title: "Digital Health Twin",
    subtitle: "Personalized Health Visualization Platform",
    description: "Full-body organ-level health visualization mapping 122 biomarkers, 8 imaging modalities, and 6 functional assessments into a unified digital twin. Real-time health scoring, longitudinal tracking, and AI-generated insights for each member.",
    href: "/technology/digital-health-twin",
    status: "active",
    stats: [
      { label: "Biomarkers", value: "122" },
      { label: "Organ Systems", value: "10" },
      { label: "Data Sources", value: "40+" },
    ],
    icon: Dna,
  },
];

export default function Technology() {
  return (
    <Layout>
      <LightHero
        eyebrow="Pillar IV"
        title="Technology & AI"
        description="AI-powered diagnostics, platform architecture, biomarker data intelligence, predictive health modeling, and digital twin member experiences — purpose-built for precision health at scale."
        stats={[
          { value: "15B+", label: "Clinical Data Points" },
          { value: "122", label: "Biomarkers Tracked" },
          { value: "22", label: "Diagnostic Modalities" },
        ]}
      />

      {/* Technology Cards */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Technology Portfolio
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Our Platforms
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {techProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <motion.div key={product.id} variants={fadeInUp} className="h-full">
                  <Link href={product.href} className="h-full block">
                    <motion.div
                      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.06)" }}
                      className="group relative rounded-xl border border-[#B8860B]/40 bg-white overflow-hidden cursor-pointer hover:border-[#B8860B]/60 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] h-full flex flex-col"
                    >
                      {/* Card Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        {/* Top row: Icon + Status */}
                        <div className="flex items-start justify-between mb-5">
                          <div className="w-11 h-11 rounded-xl bg-[#F5F4F1] border border-[#B8860B]/55 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                            <IconComponent className="w-5 h-5 text-black/45" />
                          </div>
                          <span className="font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-medium bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/55">
                            {product.status === "active" ? "Active" : "In Development"}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-2xl font-bold text-black mb-2 group-hover:text-[#B8860B] transition-colors tracking-tight leading-tight">
                          {product.title}
                        </h3>
                        <p className="font-mono text-[10px] text-black/60 tracking-[0.15em] uppercase mb-4 font-medium">
                          {product.subtitle}
                        </p>
                        <p className="font-body text-sm text-black/70 leading-relaxed mb-7 flex-grow">
                          {product.description}
                        </p>

                        {/* Stats Row */}
                        {product.stats && (
                          <div className="flex gap-3 mb-7">
                            {product.stats.map((stat, i) => (
                              <div key={i} className="flex-1 text-center py-3 rounded-lg bg-[#FAFAF8] border border-[#B8860B]/55">
                                <p className="font-display text-xl font-bold text-black leading-none">{stat.value}</p>
                                <p className="font-mono text-[9px] text-black/55 uppercase tracking-[0.12em] font-medium mt-1.5">{stat.label}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-black/65 group-hover:text-[#B8860B] transition-colors pt-4 border-t border-[#B8860B]/40">
                          <span className="font-body text-sm font-semibold">View Details</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
