/*
 * GTM Projects Landing — Shows project tiles for each GTM client engagement
 * Design: Ultra-premium luxury — black, grey, white, gold
 */

import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
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
      { label: "Verticals", value: "8" },
      { label: "Regions", value: "4" },
      { label: "Segments", value: "5" },
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
      {/* Hero Section — Dark */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
        {/* Abstract gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(201,169,98,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(201,169,98,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_60%,rgba(255,255,255,0.03),transparent)]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A962" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Pillar I
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mt-4 mb-6 text-white leading-[1.1]">
              Go-To-Market
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-16 mx-auto bg-[#C9A962] mb-6"
            />
            <motion.p variants={fadeInUp} className="font-body text-base md:text-lg text-white/55 leading-relaxed max-w-3xl mx-auto">
              Client-specific go-to-market strategies powered by WEG's multi-vertical distribution framework, 
              established channel relationships, and proven sales infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </section>

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
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Link href={project.href}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
                    className="group relative rounded-2xl border border-black/[0.10] bg-white overflow-hidden cursor-pointer hover:border-[#C9A962]/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  >
                    {/* Card Header — Dark with logo */}
                    <div className="relative h-48 bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
                      {/* Subtle gradient */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,169,98,0.08),transparent)]" />
                      
                      {project.logoSrc ? (
                        <img 
                          src={project.logoSrc} 
                          alt={project.logoAlt || project.title}
                          className="relative z-10 h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                            <span className="font-display text-2xl font-semibold text-white/60">W</span>
                          </div>
                          <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">WEG Template</span>
                        </div>
                      )}

                      {/* Status badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1 rounded-full ${
                          project.status === "active" 
                            ? "bg-[#C9A962]/20 text-[#C9A962] border border-[#C9A962]/30" 
                            : project.status === "sample"
                            ? "bg-white/10 text-white/50 border border-white/15"
                            : "bg-white/5 text-white/30 border border-white/10"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-black mb-1 group-hover:text-[#C9A962] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[10px] text-black/40 tracking-wider uppercase mb-3">
                        {project.subtitle}
                      </p>
                      <p className="font-body text-sm text-black/55 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Stats Row */}
                      {project.stats && (
                        <div className="flex gap-4 mb-5">
                          {project.stats.map((stat, i) => (
                            <div key={i} className="flex-1 text-center py-2 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                              <p className="font-display text-lg font-semibold text-black">{stat.value}</p>
                              <p className="font-body text-[10px] text-black/40 uppercase tracking-wider">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-black/50 group-hover:text-[#C9A962] transition-colors">
                        <span className="font-body text-sm font-medium">View Strategy</span>
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
              <div className="rounded-2xl border-2 border-dashed border-black/[0.10] bg-white/50 h-full min-h-[380px] flex flex-col items-center justify-center gap-4 cursor-default hover:border-[#C9A962]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-black/20" />
                </div>
                <div className="text-center">
                  <p className="font-display text-base font-medium text-black/30">New Client Project</p>
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
