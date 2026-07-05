/*
 * Longevity Projects Landing — Shows model tiles for each Longevity Center business model
 * Design: Ultra-premium luxury — white, cream, gold accents (matches GTMProjects pattern)
 */

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus, ExternalLink } from "lucide-react";
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
  external?: boolean;
  logoSrc?: string;
  logoAlt?: string;
  status: "active" | "coming-soon";
  stats?: { label: string; value: string }[];
  icon: React.ReactNode;
  branded?: "estate";
}

const models: ModelTile[] = [
  {
    id: "saltleaf",
    title: "Saltleaf on Estero Bay",
    titleDisplay: <>Saltleaf<br /><em className="italic font-light">on Estero Bay</em></>,
    subtitle: "Wellness Design & Programming Advisory",
    description: "Wellness programming, longevity suite design, and fitness layout advisory for London Bay Development Group's premier coastal community — featuring The Ritz-Carlton Residences, Estero Bay.",
    href: "/longevity/saltleaf",
    status: "active",
    stats: [
      { label: "Tower", value: "SLT1" },
      { label: "Level", value: "3" },
      { label: "Client", value: "LBDG" },
    ],
    icon: (
      <img src="/saltleaf-logo.svg" alt="Saltleaf" className="w-8 h-10" />
    ),
  },
  {
    id: "luxury",
    title: "Longevity Center Luxury Business Model",
    titleDisplay: <>Longevity Center<br /><em className="italic font-light">Luxury Business Model</em></>,
    subtitle: "Premium Physician-Led Longevity Centers",
    description: "A premium longevity center concept delivering cutting-edge diagnostics, therapeutics, and personalized wellness programs. Designed for high-net-worth individuals seeking the most advanced health optimization available.",
    href: "/longevity/luxury",
    status: "active",
    stats: [
      { label: "ARR Per Center", value: "$60M" },
      { label: "Flagship Centers", value: "5" },
      { label: "Exit Potential", value: "$2B+" },
    ],
    icon: (
      <svg className="w-7 h-7 text-[#B8860B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
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
    icon: (
      <svg className="w-7 h-7 text-[#B8860B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "estate",
    title: "The Estate",
    titleDisplay: <>The Estate<br /><em className="font-estate-display italic font-light">Where Vitality is the Ultimate Luxury</em></>,
    subtitle: "Where Vitality is the Ultimate Luxury",
    description: "The world's first residential ecosystem built entirely around longevity. Luxury resorts, branded residences, and longevity clubs — unified by pioneering science, extraordinary hospitality, and a commitment to human vitality.",
    href: "/longevity/estate",
    status: "active",
    branded: "estate",
    stats: [
      { label: "Global Projects", value: "24+" },
      { label: "Countries", value: "8+" },
      { label: "Pipeline Value", value: "$2B+" },
    ],
    icon: (
      <svg className="w-7 h-7 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    id: "franchise-portal",
    title: "International Franchise Portal",
    titleDisplay: <>Franchise<br /><em className="italic font-light">Partner Portal</em></>,
    subtitle: "Secure Franchise Operations Hub",
    description: "Authentication-gated franchise partner portal for Fountain Life international operations. SOPs, marketing assets, brand standards, service catalog, approved suppliers, tech stack documentation, and compliance — all in one secure workspace.",
    href: "/longevity/franchise-portal",
    status: "active",
    stats: [
      { label: "Services", value: "180" },
      { label: "Suppliers", value: "53" },
      { label: "SOPs", value: "Live" },
    ],
    icon: (
      <svg className="w-7 h-7 text-[#B8860B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
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
          { label: "Business Models", value: "3" },
          { label: "Client Projects", value: "1" },
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Projects & Models
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Client Projects & Business Models
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {models.map((model) => (
              <motion.div key={model.id} variants={fadeInUp} className="h-full">
                {model.external ? (
                  <a href={model.href} target="_blank" rel="noopener noreferrer" className="h-full block">
                    <motion.div
                      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.06)" }}
                      className="group relative rounded-xl border border-[#B8860B]/40 bg-white overflow-hidden cursor-pointer hover:border-[#B8860B]/60 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] h-full"
                    >
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-14 h-14 rounded-xl bg-[#FAFAF8] border border-[#B8860B]/55 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                            {model.icon}
                          </div>
                          <span className={`font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-medium ${
                            model.status === "active" 
                              ? "bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/55" 
                              : "bg-black/[0.03] text-black/45 border border-[#B8860B]/55"
                          }`}>
                            {model.status === "active" ? "Active" : "Coming Soon"}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-black mb-2 group-hover:text-[#B8860B] transition-colors tracking-tight leading-tight">
                          {model.titleDisplay || model.title}
                        </h3>
                        <p className="font-mono text-[10px] text-black/60 tracking-[0.15em] uppercase mb-4 font-medium">
                          {model.subtitle}
                        </p>
                        <p className="font-body text-sm text-black/70 leading-relaxed mb-7">
                          {model.description}
                        </p>
                        {model.stats && (
                          <div className="flex gap-3 mb-7">
                            {model.stats.map((stat, i) => (
                              <div key={i} className="flex-1 text-center py-3 rounded-lg bg-[#FAFAF8] border border-[#B8860B]/55">
                                <p className="font-display text-xl font-bold text-black leading-none">{stat.value}</p>
                                <p className="font-mono text-[9px] text-black/55 uppercase tracking-[0.12em] font-medium mt-1.5">{stat.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-black/65 group-hover:text-[#B8860B] transition-colors pt-4 border-t border-[#B8860B]/40">
                          <span className="font-body text-sm font-semibold">Open Portal</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  </a>
                ) : model.branded === "estate" ? (
                <Link href={model.href} className="h-full block">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.06)" }}
                    className="group relative rounded-xl border border-[#1A1A1A]/20 bg-white overflow-hidden cursor-pointer hover:border-[#1A1A1A]/40 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] h-full"
                  >
                    {/* Estate Branded Card — White bg, black text, Estate fonts, no gold */}
                    <div className="p-8 relative text-center">
                      {/* Top row: Icon + Status */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A]/20 flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                          </svg>
                        </div>
                        <span className="font-estate-sans text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-medium bg-[#0A0A0A]/5 text-[#0A0A0A]/80 border border-[#0A0A0A]/20">
                          Active
                        </span>
                      </div>

                      {/* THE ESTATE wordmark */}
                      <p className="font-estate-wordmark text-sm tracking-[0.3em] uppercase mb-3 text-[#0A0A0A]">
                        THE ESTATE
                      </p>

                      {/* Tagline */}
                      <h3 className="font-estate-display italic text-2xl font-light text-[#0A0A0A] mb-2 group-hover:text-[#0A0A0A]/70 transition-colors tracking-tight leading-tight">
                        Where Vitality is the Ultimate Luxury
                      </h3>
                      <p className="font-estate-sans text-[10px] text-[#0A0A0A]/50 tracking-[0.15em] uppercase mb-4 font-medium">
                        {model.subtitle}
                      </p>
                      <p className="font-estate-sans text-sm text-[#0A0A0A]/70 leading-relaxed mb-7">
                        {model.description}
                      </p>

                      {/* Stats Row */}
                      {model.stats && (
                        <div className="flex gap-3 mb-7">
                          {model.stats.map((stat, i) => (
                            <div key={i} className="flex-1 text-center py-3 rounded-lg bg-[#0A0A0A]/[0.03] border border-[#0A0A0A]/10">
                              <p className="font-estate-headline text-xl font-light text-[#0A0A0A] leading-none">{stat.value}</p>
                              <p className="font-estate-sans text-[9px] text-[#0A0A0A]/50 uppercase tracking-[0.12em] font-medium mt-1.5">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center justify-center gap-2 text-[#0A0A0A]/60 group-hover:text-[#0A0A0A] transition-colors pt-4 border-t border-[#0A0A0A]/10">
                        <span className="font-estate-sans text-sm font-semibold">Explore The Estate</span>
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
                ) : (
                <Link href={model.href} className="h-full block">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.06)" }}
                    className="group relative rounded-xl border border-[#B8860B]/40 bg-white overflow-hidden cursor-pointer hover:border-[#B8860B]/60 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] h-full"
                  >
                    {/* Card Content — All white, clean */}
                    <div className="p-8">
                      {/* Top row: Icon + Status */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#FAFAF8] border border-[#B8860B]/55 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                          {model.icon}
                        </div>
                        <span className={`font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-medium ${
                          model.status === "active" 
                            ? "bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/55" 
                            : "bg-black/[0.03] text-black/45 border border-[#B8860B]/55"
                        }`}>
                          {model.status === "active" ? "Active" : "Coming Soon"}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl font-bold text-black mb-2 group-hover:text-[#B8860B] transition-colors tracking-tight leading-tight">
                        {model.titleDisplay || model.title}
                      </h3>
                      <p className="font-mono text-[10px] text-black/60 tracking-[0.15em] uppercase mb-4 font-medium">
                        {model.subtitle}
                      </p>
                      <p className="font-body text-sm text-black/70 leading-relaxed mb-7">
                        {model.description}
                      </p>

                      {/* Stats Row */}
                      {model.stats && (
                        <div className="flex gap-3 mb-7">
                          {model.stats.map((stat, i) => (
                            <div key={i} className="flex-1 text-center py-3 rounded-lg bg-[#FAFAF8] border border-[#B8860B]/55">
                              <p className="font-display text-xl font-bold text-black leading-none">{stat.value}</p>
                              <p className="font-mono text-[9px] text-black/55 uppercase tracking-[0.12em] font-medium mt-1.5">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-black/65 group-hover:text-[#B8860B] transition-colors pt-4 border-t border-[#B8860B]/40">
                        <span className="font-body text-sm font-semibold">{model.id === 'saltleaf' ? 'View Project' : 'View Model'}</span>
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
                )}
              </motion.div>
            ))}

            {/* Add New Model Tile */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-xl border-2 border-dashed border-[#B8860B]/55 bg-[#FAFAF8]/30 h-full min-h-[420px] flex flex-col items-center justify-center gap-4 cursor-default hover:border-[#B8860B]/60 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl border border-[#B8860B]/55 flex items-center justify-center bg-white">
                  <Plus className="w-5 h-5 text-black/20" />
                </div>
                <div className="text-center">
                  <p className="font-display text-base font-medium text-black/25">Additional Project</p>
                  <p className="font-body text-xs text-black/15 mt-1">Coming soon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
