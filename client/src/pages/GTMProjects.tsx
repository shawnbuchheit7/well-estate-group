/*
 * GTM Projects Landing — Shows project tiles for each GTM client engagement
 * Design: Ultra-premium luxury — white, cream, gold accents
 */

import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface ProjectTile {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  logoSrc?: string;
  logoAlt?: string;
  status: "active" | "sample" | "upcoming";
  stats?: { label: string; value: string }[];
  accentColor?: string;
}

const projects: ProjectTile[] = [
  {
    id: "zerowheel",
    title: "ZeroWheel",
    subtitle: "Connected Fitness Device — Market Entry",
    description: "Comprehensive go-to-market strategy for a next-generation motorized core training device across premium clubs, professional sports, medical, military, and hospitality channels.",
    href: "/gtm/zerowheel",
    logoSrc: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png",
    logoAlt: "ZeroWheel",
    status: "active",
    stats: [
      { label: "LOBs", value: "9" },
      { label: "Pricing Tiers", value: "4" },
      { label: "Channels", value: "5" },
    ],
    accentColor: "#000000",
  },
  {
    id: "sample",
    title: "Sample GTM Strategy",
    subtitle: "WEG Consulting Framework",
    description: "A template go-to-market strategy showcasing WEG's multi-vertical distribution framework, channel strategy, and sales infrastructure capabilities.",
    href: "/gtm/sample",
    status: "sample",
    stats: [
      { label: "Channels", value: "8" },
      { label: "Markets", value: "4" },
      { label: "Categories", value: "5" },
    ],
  },
];

export default function GTMProjects() {
  return (
    <Layout section="gtm">
      <LightHero
        eyebrow="Pillar I"
        title="Go-To-Market"
        description="Client-specific go-to-market strategies powered by WEG's multi-vertical distribution framework, established channel relationships, and proven sales infrastructure."
      />

      {/* Project Tiles */}
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
              Active Engagements
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Client Projects
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Link href={project.href}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.06)" }}
                    className="group relative rounded-xl border border-[#C9A962]/35 bg-white overflow-hidden cursor-pointer hover:border-[#C9A962]/50 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]"
                  >
                    {/* Card Content — Clean white design */}
                    <div className="p-8">
                      {/* Top row: Logo/Icon + Status */}
                      <div className="flex items-start justify-between mb-6">
                        {project.logoSrc ? (
                          <div className="w-14 h-14 rounded-xl bg-[#F5F4F1] border border-[#C9A962]/25 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                            <img 
                              src={project.logoSrc} 
                              alt={project.logoAlt || project.title}
                              className="h-7 w-auto object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 rounded-xl bg-[#FAFAF8] border border-[#C9A962]/25 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                            <span className="font-display text-xl font-semibold text-black/30">W</span>
                          </div>
                        )}
                        <span className={`font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-medium ${
                          project.status === "active" 
                            ? "bg-[#C9A962]/10 text-[#C9A962] border border-[#C9A962]/25" 
                            : project.status === "sample"
                            ? "bg-black/[0.04] text-black/40 border border-[#C9A962]/30"
                            : "bg-black/[0.03] text-black/30 border border-[#C9A962]/25"
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl font-bold text-black mb-2 group-hover:text-[#C9A962] transition-colors tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[10px] text-black/45 tracking-[0.15em] uppercase mb-4 font-medium">
                        {project.subtitle}
                      </p>
                      <p className="font-body text-sm text-black/55 leading-relaxed mb-7">
                        {project.description}
                      </p>

                      {/* Stats Row */}
                      {project.stats && (
                        <div className="flex gap-3 mb-7">
                          {project.stats.map((stat, i) => (
                            <div key={i} className="flex-1 text-center py-3 rounded-lg bg-[#FAFAF8] border border-[#C9A962]/25">
                              <p className="font-display text-xl font-bold text-black leading-none">{stat.value}</p>
                              <p className="font-mono text-[9px] text-black/40 uppercase tracking-[0.12em] font-medium mt-1.5">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-black/50 group-hover:text-[#C9A962] transition-colors pt-4 border-t border-[#C9A962]/20">
                        <span className="font-body text-sm font-semibold">View Strategy</span>
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

            {/* Add New Project Tile */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-xl border-2 border-dashed border-[#C9A962]/25 bg-[#FAFAF8]/30 h-full min-h-[420px] flex flex-col items-center justify-center gap-4 cursor-default hover:border-[#C9A962]/60 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl border border-[#C9A962]/25 flex items-center justify-center bg-white">
                  <Plus className="w-5 h-5 text-black/20" />
                </div>
                <div className="text-center">
                  <p className="font-display text-base font-medium text-black/25">New Client Project</p>
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
