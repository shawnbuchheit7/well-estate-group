/*
 * Longevity Projects Landing — Shows model tiles for each Longevity Center business model
 * Design: Ultra-premium luxury — white, cream, gold accents (matches GTMProjects pattern)
 */

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface ModelTile {
  id: string;
  title: string;
  titleDisplay?: React.ReactNode;
  subtitle: string;
  description: string;
  href: string;
  logoSrc?: string;
  logoAlt?: string;
  status: "active" | "coming-soon";
  stats?: { label: string; value: string }[];
}

const models: ModelTile[] = [
  {
    id: "luxury",
    title: "Longevity Center Luxury Business Model",
    titleDisplay: <>Longevity Center<br /><em className="italic font-light">Luxury Business Model</em></>,
    subtitle: "Premium Physician-Led Longevity Centers",
    description: "A premium longevity center concept delivering cutting-edge diagnostics, therapeutics, and personalized wellness programs. Designed for high-net-worth individuals seeking the most advanced health optimization available.",
    href: "/longevity/luxury",
    status: "active",
    stats: [
      { label: "ARR Target", value: "$60M" },
      { label: "Flagship Centers", value: "5" },
      { label: "Exit Potential", value: "$2B+" },
    ],
  },
  {
    id: "performance",
    title: "Longevity Center Performance & Recovery Model",
    titleDisplay: <>Longevity Center<br /><em className="italic font-light">Performance & Recovery Model</em></>,
    subtitle: "NAD+ & Human Performance Optimization",
    description: "A performance-focused longevity center model built on NAD+ therapeutics, advanced diagnostics, and hyper-personalized protocols. Designed for scalable deployment through clinic partnerships, hospitality integration, and direct-to-consumer channels.",
    href: "/longevity/performance-model",
    status: "active",
    stats: [
      { label: "Global Partners", value: "40+" },
      { label: "Countries", value: "40+" },
      { label: "Protocols", value: "6" },
    ],
  },
];

export default function LongevityProjects() {
  return (
    <Layout section="longevity">
      <LightHero
        eyebrow="Pillar II"
        title="Longevity Ventures"
        description="Business planning and investment strategy for physician-led longevity and regenerative medicine centers. Multiple center models designed for different market segments and operational approaches."
        stats={[
          { label: "Business Models", value: "2" },
          { label: "Global Reach", value: "40+" },
          { label: "Exit Potential", value: "$2B+" },
          { label: "Revenue Streams", value: "6+" },
        ]}
      />

      {/* Model Tiles */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Center Models
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Business Models
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {models.map((model) => (
              <motion.div key={model.id} variants={fadeInUp}>
                <Link href={model.href}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)" }}
                    className="group relative rounded-xl border border-black/[0.15] bg-white overflow-hidden cursor-pointer hover:border-[#C9A962]/50 transition-all duration-400 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)]"
                  >
                    {/* Card Header — Dark with icon */}
                    <div className="relative h-48 bg-[#0A0A0A] flex items-center justify-center overflow-hidden border-b border-black/20">
                      {/* Subtle gradient */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(201,169,98,0.06),transparent)]" />
                      
                      {model.id === "luxury" ? (
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-full border-2 border-[#C9A962]/40 flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#C9A962]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          </div>
                          <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase">Luxury Model</span>
                        </div>
                      ) : (
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-full border-2 border-[#C9A962]/40 flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#C9A962]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                          </div>
                          <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase">Performance & Recovery</span>
                        </div>
                      )}

                      {/* Status badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1 rounded-full ${
                          model.status === "active" 
                            ? "bg-[#C9A962]/20 text-[#C9A962] border border-[#C9A962]/30" 
                            : "bg-white/5 text-white/30 border border-white/10"
                        }`}>
                          {model.status === "active" ? "Active" : "Coming Soon"}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-7">
                      <h3 className="font-display text-xl font-bold text-black mb-1.5 group-hover:text-[#C9A962] transition-colors tracking-tight">
                        {model.titleDisplay || model.title}
                      </h3>
                      <p className="font-mono text-[10px] text-black/50 tracking-[0.15em] uppercase mb-4 font-medium">
                        {model.subtitle}
                      </p>
                      <p className="font-body text-sm text-black/60 leading-relaxed mb-6">
                        {model.description}
                      </p>

                      {/* Stats Row */}
                      {model.stats && (
                        <div className="flex gap-3 mb-6">
                          {model.stats.map((stat, i) => (
                            <div key={i} className="flex-1 text-center py-2.5 rounded-lg bg-[#FAFAF8] border border-black/[0.12] shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                              <p className="font-display text-lg font-bold text-black">{stat.value}</p>
                              <p className="font-mono text-[9px] text-black/45 uppercase tracking-[0.12em] font-medium">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-black/60 group-hover:text-[#C9A962] transition-colors pt-2 border-t border-black/[0.06]">
                        <span className="font-body text-sm font-semibold">View Model</span>
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
            ))}

            {/* Add New Model Tile */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-xl border-2 border-dashed border-black/[0.12] bg-[#FAFAF8]/50 h-full min-h-[380px] flex flex-col items-center justify-center gap-4 cursor-default hover:border-[#C9A962]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-black/20" />
                </div>
                <div className="text-center">
                  <p className="font-display text-base font-medium text-black/30">Additional Model</p>
                  <p className="font-body text-xs text-black/20 mt-1">Coming soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
