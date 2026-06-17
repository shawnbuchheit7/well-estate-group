/*
 * Products Landing Page — Card-based layout matching GTM Projects style
 * Each product is a card tile that links to its detail page
 * Easy to add new products by adding entries to the products array
 */

import { motion } from "framer-motion";
import { ArrowRight, Plus, Dumbbell, HeartPulse, Disc3, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface ProductTile {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  status: "active" | "in-development" | "evaluation" | "research";
  stats?: { label: string; value: string }[];
  category: string;
}

const products: ProductTile[] = [
  {
    id: "corporate-health",
    title: "Corporate Executive Health",
    subtitle: "Precision Health Prospectus",
    description: "A comprehensive briefing for CHROs, CEOs, and Total Rewards leaders on what precision executive health delivers — for the leaders your organization cannot afford to lose. Built on Fountain Life's platform.",
    href: "/product-intelligence/corporate-health",
    status: "active",
    stats: [
      { label: "Members", value: "8,000+" },
      { label: "Data Points", value: "15B+" },
      { label: "Detection Rate", value: "88%" },
    ],
    category: "Executive Health",
  },
  {
    id: "t-spine",
    title: "T-Spine Dumbbell Rest",
    subtitle: "Minimalist Power Rack Attachment",
    description: "Ultra-minimal \"T-Spine\" structure that eliminates bulky steel plates and provides a sleek, skeletal aesthetic. Universal fit for 5 lb to 100 lb round pro-style dumbbells with tool-less mounting.",
    href: "/product-intelligence/t-spine",
    imageSrc: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/JfhWDSbPCOpvLyfH.webp",
    imageAlt: "T-Spine Dumbbell Rest — Front Elevation",
    status: "active",
    stats: [
      { label: "Weight Range", value: "5–100 lb" },
      { label: "Mount Time", value: "<30s" },
      { label: "Protrusion", value: "11.5\"" },
    ],
    category: "Strength Training",
  },
  {
    id: "zerowheel",
    title: "ZeroWheel",
    subtitle: "Connected Fitness Device — Market Entry",
    description: "Comprehensive go-to-market strategy for a next-generation motorized core training device across premium clubs, professional sports, medical, military, and hospitality channels.",
    href: "/gtm/zerowheel",
    status: "active",
    stats: [
      { label: "LOBs", value: "9" },
      { label: "Pricing Tiers", value: "4" },
      { label: "Channels", value: "5" },
    ],
    category: "Connected Fitness",
  },
  {
    id: "sample-gtm",
    title: "Sample GTM Strategy",
    subtitle: "WEG Consulting Framework",
    description: "A template go-to-market strategy showcasing WEG's multi-vertical distribution framework, channel strategy, and sales infrastructure capabilities.",
    href: "/gtm/sample",
    status: "active",
    stats: [
      { label: "Channels", value: "8" },
      { label: "Markets", value: "4" },
      { label: "Categories", value: "5" },
    ],
    category: "GTM Framework",
  },
];

const statusConfig: Record<string, { label: string; bg: string; text: string; border: string }> = {
  "active": { label: "Active", bg: "bg-[#B8860B]/10", text: "text-[#B8860B]", border: "border-[#B8860B]/55" },
  "in-development": { label: "In Development", bg: "bg-black/[0.04]", text: "text-black/55", border: "border-[#B8860B]/40" },
  "evaluation": { label: "Evaluation", bg: "bg-black/[0.04]", text: "text-black/45", border: "border-[#B8860B]/40" },
  "research": { label: "Research", bg: "bg-black/[0.03]", text: "text-black/35", border: "border-[#B8860B]/40" },
};

export default function ProductsLanding() {
  return (
    <Layout section="products">
      <LightHero
        eyebrow="Pillar III"
        title="Product Intelligence"
        description="Independent product development, testing, and evaluation for next-generation fitness and wellness equipment. Identifying market gaps and engineering solutions that meet the highest standards of performance and design."
        stats={[
          { value: "4", label: "Active Products" },
          { value: "3", label: "In Pipeline" },
          { value: "8,000+", label: "Health Members" },
        ]}
      />

      {/* Product Tiles */}
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
              Product Portfolio
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Our Products
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {products.map((product) => {
              const status = statusConfig[product.status];
              return (
                <motion.div key={product.id} variants={fadeInUp} className="h-full">
                  <Link href={product.href} className="h-full block">
                    <motion.div
                      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.06)" }}
                      className="group relative rounded-xl border border-[#B8860B]/40 bg-white overflow-hidden cursor-pointer hover:border-[#B8860B]/60 transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] h-full flex flex-col"
                    >
                      {/* Product Image */}
                      {product.imageSrc && (
                        <div className="w-full h-56 bg-[#FAFAF8] border-b border-[#B8860B]/40 flex items-center justify-center p-6 overflow-hidden">
                          <img
                            loading="lazy"
                            src={product.imageSrc}
                            alt={product.imageAlt || product.title}
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      {/* Card Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        {/* Top row: Category + Status */}
                        <div className="flex items-start justify-between mb-5">
                          <div className="w-11 h-11 rounded-xl bg-[#F5F4F1] border border-[#B8860B]/55 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                            {product.category === "Executive Health" ? <HeartPulse className="w-5 h-5 text-black/45" /> : product.category === "Connected Fitness" ? <Disc3 className="w-5 h-5 text-black/45" /> : product.category === "GTM Framework" ? <BarChart3 className="w-5 h-5 text-black/45" /> : <Dumbbell className="w-5 h-5 text-black/45" />}
                          </div>
                          <span className={`font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-medium ${status.bg} ${status.text} border ${status.border}`}>
                            {status.label}
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
                          <span className="font-body text-sm font-semibold">View Product Details</span>
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

            {/* Pipeline Cards — Upcoming products */}
            {[
              {
                category: "Recovery & Mobility",
                status: "Evaluation",
                description: "Precision-engineered recovery tool addressing a critical gap in post-workout protocols",
                phase: "Concept Validation",
              },
              {
                category: "Wellness Technology",
                status: "Research",
                description: "Integrated wellness monitoring solution for premium fitness facility environments",
                phase: "Market Analysis",
              },
            ].map((item, i) => (
              <motion.div key={`pipeline-${i}`} variants={fadeInUp}>
                <div className="group relative rounded-xl border border-[#B8860B]/40 bg-white overflow-hidden h-full shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]">
                  <div className="p-8">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#FAFAF8] border border-[#B8860B]/55 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                        <span className="font-display text-lg font-semibold text-black/25">?</span>
                      </div>
                      <span className="font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-medium bg-black/[0.04] text-black/45 border border-[#B8860B]/40">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-black/30 mb-2 tracking-tight leading-tight">
                      {item.category}
                    </h3>
                    <p className="font-mono text-[10px] text-black/35 tracking-[0.15em] uppercase mb-4 font-medium">
                      {item.phase}
                    </p>
                    <p className="font-body text-sm text-black/45 leading-relaxed mb-7">
                      {item.description}
                    </p>

                    {/* Confidential notice */}
                    <div className="pt-4 border-t border-[#B8860B]/40">
                      <p className="font-mono text-[10px] text-black/20 tracking-wider uppercase">
                        Details confidential until public release
                      </p>
                    </div>
                  </div>
                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B]/20 via-[#B8860B]/40 to-[#B8860B]/20" />
                </div>
              </motion.div>
            ))}

            {/* Add New Product Tile */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-xl border-2 border-dashed border-[#B8860B]/55 bg-[#FAFAF8]/30 h-full min-h-[320px] flex flex-col items-center justify-center gap-4 cursor-default hover:border-[#B8860B]/60 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl border border-[#B8860B]/55 flex items-center justify-center bg-white">
                  <Plus className="w-5 h-5 text-black/20" />
                </div>
                <div className="text-center">
                  <p className="font-display text-base font-medium text-black/25">New Product</p>
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
