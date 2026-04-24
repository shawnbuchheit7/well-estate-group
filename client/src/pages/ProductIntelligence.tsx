/*
 * Product Intelligence Page
 * Showcases products developed by Well Estate Group to fill gaps in the fitness/wellness market
 * First product: T-Spine Dumbbell Rest
 * Design: Luxury black/grey/gold palette
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight, Package, Ruler, Shield, Wrench, Dumbbell, Zap, Eye, CheckCircle2 } from "lucide-react";
import DarkHero from "@/components/DarkHero";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "product-showcase", label: "T-Spine" },
  { id: "features", label: "Features" },
  { id: "specs", label: "Specifications" },
  { id: "bom", label: "Bill of Materials" },
  { id: "pipeline", label: "Pipeline" },
];

const views = [
  { id: "top", label: "Top View", src: "/tspine-top-view.webp", desc: "Universal Fit — 5 LB to 100 LB" },
  { id: "front", label: "Front Elevation", src: "/tspine-front-view.webp", desc: "T-Spine Dumbbell Rest (Optimized)" },
  { id: "side", label: "Side View", src: "/tspine-side-view.webp", desc: "10° Decline with Gusset Support" },
];

const features = [
  {
    icon: Dumbbell,
    title: "Universal Fit",
    subtitle: "5 lb to 100 lb",
    description: "Fixed saddle spacing works for all round pro-style dumbbell weights without any adjustments. Exploits the constant 6.0\" handle length across all weights.",
  },
  {
    icon: Zap,
    title: "10° Decline Angle",
    subtitle: "Ergonomic Loading",
    description: "Roll dumbbells into the saddles rather than requiring precise vertical placement. Saves wrist strain between heavy sets.",
  },
  {
    icon: Shield,
    title: "Stop Tab Safety",
    subtitle: "4 Steel Tabs",
    description: "Four discrete 1\" tall × 2\" wide steel stop tabs welded to crossbars prevent dumbbells from rolling off the decline. Positioned exclusively on the downhill edge.",
  },
  {
    icon: Wrench,
    title: "Tool-less Mounting",
    subtitle: "Rapid Attach/Remove",
    description: "Two 1\" solid steel hitch pins with ring handles. Secures to the front face of any 3×3\" rack upright. No tools required.",
  },
  {
    icon: Package,
    title: "Modular Saddles",
    subtitle: "Bolt-On Design",
    description: "Rubber saddles secured via 3/8\" bolts — easily swappable for flat or angled saddles to accommodate hex dumbbells in the future.",
  },
  {
    icon: Eye,
    title: "Stowed Position",
    subtitle: "~11.5\" Protrusion",
    description: "Hangs vertically on the side of any rack upright when not in use. Spine points down, crossbars extend flat against the rack.",
  },
];

const specs = [
  { label: "Rack Compatibility", value: "Sorinex Apex (3×3\" uprights, 1\" holes)" },
  { label: "Dumbbell Compatibility", value: "Round pro-style, 5 lb – 100 lb" },
  { label: "Spine Material", value: "3×3\" 11-gauge steel tube" },
  { label: "Crossbar Material", value: "1/4\" steel plate, trimmed" },
  { label: "Crossbar Width", value: "17.0\" (trimmed)" },
  { label: "Forward Projection", value: "14.5\" (trimmed)" },
  { label: "Decline Angle", value: "10 degrees" },
  { label: "Dumbbell Gap", value: "1.0\" between inner heads" },
  { label: "Dumbbell Head Diameter", value: "7.5\"" },
  { label: "Corner Radius", value: "1\" rounded (all crossbar ends)" },
  { label: "Mounting Plate", value: "3/8\" heavy-duty steel" },
  { label: "Mounting Hardware", value: "2× 1\" hitch pins with ring handles" },
  { label: "Gusset", value: "1/4\" triangular steel" },
  { label: "Surface Protection", value: "UHMW plastic backing pad" },
  { label: "Drop Height", value: "2.5\"" },
];

const bom = [
  { item: 1, qty: 1, description: "Welded Steel Assembly", detail: "3×3\" 11-ga spine, 3/8\" mount plate, 1/4\" crossbars & gusset" },
  { item: 2, qty: 4, description: "Rubber Dumbbell Saddle", detail: "SportSmith P16009" },
  { item: 3, qty: 4, description: "Flat Head Bolt + Lock Nut", detail: "3/8\"-16 × 1\" with Nylon Lock Nut" },
  { item: 4, qty: 1, description: "UHMW Plastic Backing Pad", detail: "Custom cut to mount plate dimensions" },
  { item: 5, qty: 2, description: "Steel Hitch Pin", detail: "1\" diameter with ring handle" },
];

export default function ProductIntelligence() {
  const [activeView, setActiveView] = useState(0);

  return (
    <Layout section="products">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <DarkHero
          eyebrow="Pillar III"
          title="Product Intelligence"
          description="Independent product development, testing, and evaluation for next-generation fitness and wellness equipment. Identifying market gaps and engineering solutions that meet the highest standards of performance and design."
          stats={[
            { value: "1", label: "Active Product" },
            { value: "3", label: "In Pipeline" },
            { value: "5 lb–100 lb", label: "Universal Fit" },
          ]}
        />
      </div>

      {/* Product Showcase: T-Spine */}
      <section id="product-showcase" className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6">
          {/* Product Header */}
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-4">
              Product 001
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-black">
              T-Spine Dumbbell Rest
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xs sm:text-sm text-black/40 mt-3 max-w-xl mx-auto">
              Minimalist power rack dumbbell rest attachment. Ultra-minimal "T-Spine" structure 
              that eliminates bulky steel plates and provides a sleek, skeletal aesthetic.
            </motion.p>
          </motion.div>

          {/* All 3 Views Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {views.map((view, i) => (
                <motion.div
                  key={view.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-white rounded-2xl border border-black/[0.12] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:border-[#C9A962]/30 transition-all duration-500"
                >
                  <div className="p-4 sm:p-6">
                    <img
                      src={view.src}
                      alt={view.label}
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </div>
                  <div className="border-t border-black/[0.10] px-4 py-3 bg-[#FAFAF8]">
                    <p className="font-mono text-[10px] sm:text-[11px] font-semibold text-black/60 tracking-wider text-center uppercase mb-0.5">
                      {view.label}
                    </p>
                    <p className="font-mono text-[9px] sm:text-[10px] text-black/35 tracking-wider text-center uppercase">
                      {view.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Design Concept */}
      <section className="py-12 sm:py-16 bg-[#FAFAF8]">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <span className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
                Core Concept
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-black mt-3">
                The "T-Spine" Architecture
              </h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Structural Spine",
                  text: "A single 3×3\" 11-gauge steel tube projects straight forward from the rack upright. Acts as the primary load-bearing spine with an underslung design.",
                },
                {
                  title: "Trimmed Profile",
                  text: "The spine terminates immediately after the front crossbar. No excess steel overhanging — preventing users from walking into sharp edges.",
                },
                {
                  title: "Skeletal Aesthetic",
                  text: "Abandons the traditional flat-tray approach. Reduces weight, eliminates bulky steel plates, and delivers a sleek, minimalist look.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-black/[0.10] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C9A962]/10 flex items-center justify-center mb-4">
                    <span className="font-mono text-xs font-bold text-[#C9A962]">0{i + 1}</span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-semibold text-black mb-2">{item.title}</h4>
                  <p className="font-body text-xs sm:text-sm text-black/50 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Engineering
            </motion.span>
            <motion.h3 variants={fadeInUp} className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-black mt-3">
              Key Features
            </motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#FAFAF8] rounded-xl p-5 sm:p-6 border border-black/[0.10] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-black/[0.04] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-black/60" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-semibold text-black leading-tight">{feature.title}</h4>
                    <p className="font-mono text-[9px] sm:text-[10px] text-[#C9A962] tracking-wider uppercase">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="font-body text-xs text-black/45 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="py-12 sm:py-16 bg-[#FAFAF8]">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Technical Data
            </motion.span>
            <motion.h3 variants={fadeInUp} className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-black mt-3">
              Specifications
            </motion.h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl border border-black/[0.10] shadow-[0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            {specs.map((spec, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 ${
                  i !== specs.length - 1 ? "border-b border-black/[0.08]" : ""
                } ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}
              >
                <span className="font-body text-xs sm:text-sm text-black/50">{spec.label}</span>
                <span className="font-mono text-xs sm:text-sm font-medium text-black text-right">{spec.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bill of Materials */}
      <section id="bom" className="py-12 sm:py-16 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Components
            </motion.span>
            <motion.h3 variants={fadeInUp} className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-black mt-3">
              Bill of Materials
            </motion.h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-3">
              {bom.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-[#FAFAF8] border border-black/[0.10] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-white">{item.item}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-body text-xs sm:text-sm font-semibold text-black">{item.description}</h4>
                      <span className="font-mono text-[10px] text-[#C9A962] bg-[#C9A962]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                        ×{item.qty}
                      </span>
                    </div>
                    <p className="font-body text-[11px] sm:text-xs text-black/40">{item.detail}</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500/60 flex-shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Pipeline */}
      <section id="pipeline" className="py-16 sm:py-20 bg-[#FAFAF8]">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              What's Next
            </motion.span>
            <motion.h3 variants={fadeInUp} className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-black mt-3">
              Product Pipeline
            </motion.h3>
            <motion.p variants={fadeInUp} className="font-body text-xs sm:text-sm text-black/40 mt-3 max-w-xl mx-auto">
              Active development and evaluation of next-generation fitness and wellness equipment across multiple categories.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {[
              {
                status: "In Development",
                category: "Strength Training",
                description: "Next-generation rack attachment system for commercial and home gym environments",
                phase: "Engineering",
              },
              {
                status: "Evaluation",
                category: "Recovery & Mobility",
                description: "Precision-engineered recovery tool addressing a critical gap in post-workout protocols",
                phase: "Concept Validation",
              },
              {
                status: "Research",
                category: "Wellness Technology",
                description: "Integrated wellness monitoring solution for premium fitness facility environments",
                phase: "Market Analysis",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-black/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.03)] relative overflow-hidden"
              >
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-[#C9A962] bg-[#C9A962]/10 px-3 py-1 rounded-full tracking-wider uppercase">
                    {item.status}
                  </span>
                  <span className="font-mono text-[10px] text-black/25 tracking-wider uppercase">
                    {item.phase}
                  </span>
                </div>
                <h4 className="font-display text-base font-semibold text-black mb-2">{item.category}</h4>
                <p className="font-body text-xs text-black/40 leading-relaxed">{item.description}</p>
                {/* Blur overlay to indicate confidentiality */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A962]/20 via-[#C9A962]/40 to-[#C9A962]/20" />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-mono text-[10px] text-black/20 tracking-wider uppercase mt-8"
          >
            Product details are confidential until public release
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
