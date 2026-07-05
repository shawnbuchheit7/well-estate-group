/**
 * The Estate — Elite Luxury Landing Page
 * Where Vitality is the Ultimate Luxury.
 * 
 * Design language: Deep blacks, warm ivory, burnished gold.
 * Editorial luxury hospitality aesthetic with cinematic depth.
 * Every element crafted to feel like a $2B+ luxury platform.
 */

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useRef } from "react";

/* ─── Animations ─── */
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Brand Palette ─── */
const GOLD = "#B8956A";
const GOLD_LIGHT = "#D4B896";
const IVORY = "#FAF8F5";
const DARK = "#0C0C0C";
const CHARCOAL = "#161616";
const WARM_GRAY = "#2A2622";

/* ─── Section Directory ─── */
const chapters = [
  {
    num: "01",
    title: "The Vision",
    desc: "A category-defining ambition to build the world's first residential ecosystem entirely around longevity.",
    path: "/longevity/estate/about",
    accent: "from-amber-900/20 to-transparent",
  },
  {
    num: "02",
    title: "The Ecosystem",
    desc: "Luxury Resorts, Branded Residences, and Longevity Clubs — three property expressions, one integrated platform.",
    path: "/longevity/estate/about",
    accent: "from-stone-800/20 to-transparent",
  },
  {
    num: "03",
    title: "The Experience",
    desc: "Diagnostics, Performance, Recovery, Spa, Culinary, and Entertainment — every dimension of vitality, curated.",
    path: "/longevity/estate/therapeutics",
    accent: "from-emerald-900/15 to-transparent",
  },
  {
    num: "04",
    title: "The Pillars",
    desc: "Longevity. Luxury. Experience. Community. Four foundations that define every Estate expression worldwide.",
    path: "/longevity/estate/about",
    accent: "from-amber-900/15 to-transparent",
  },
  {
    num: "05",
    title: "The Pipeline",
    desc: "24+ global destinations in development across 8 countries — resorts, residences, and longevity clubs.",
    path: "/longevity/estate/projections",
    accent: "from-blue-900/15 to-transparent",
  },
  {
    num: "06",
    title: "The Platform",
    desc: "Founded by Sam Nazarian. Backed by Tony Robbins, Marc Anthony, and Richard Attias.",
    path: "/longevity/estate/team",
    accent: "from-purple-900/15 to-transparent",
  },
  {
    num: "07",
    title: "The Opportunity",
    desc: "A $6.8 trillion global wellness economy. Wellness real estate at $548B and growing 17.9% annually.",
    path: "/longevity/estate/opportunity",
    accent: "from-rose-900/15 to-transparent",
  },
  {
    num: "08",
    title: "The Membership",
    desc: "Club tiers, residential ownership, and integrated longevity programming — designed for a life well lived.",
    path: "/longevity/estate/memberships",
    accent: "from-teal-900/15 to-transparent",
  },
];

/* ─── Four Pillars ─── */
const pillars = [
  { 
    name: "Longevity", 
    desc: "Health becomes a lifestyle embedded in daily rhythm — not a destination, but a way of living.",
    icon: "◈"
  },
  { 
    name: "Luxury", 
    desc: "An intimate, design-forward, service-first environment where every detail elevates the human experience.",
    icon: "◇"
  },
  { 
    name: "Experience", 
    desc: "Tailored to biological, emotional, and sensory needs — precision meets intuition.",
    icon: "○"
  },
  { 
    name: "Community", 
    desc: "Social spaces and programming that foster connection among those who share a commitment to vitality.",
    icon: "△"
  },
];

/* ─── Pipeline Destinations ─── */
const destinations = [
  { name: "Brecqhou Island", region: "English Channel" },
  { name: "Lustica Bay", region: "Montenegro" },
  { name: "Coachella Valley", region: "California" },
  { name: "Playa Magante", region: "Dominican Republic" },
  { name: "Horned Dorset", region: "Puerto Rico" },
  { name: "Red Sea", region: "Saudi Arabia" },
  { name: "Playa Secreta", region: "El Salvador" },
  { name: "Trentino", region: "Italy" },
  { name: "Todos Santos", region: "Mexico" },
  { name: "Ft Lauderdale", region: "Florida" },
  { name: "Kura Kura", region: "Bali" },
  { name: "Granogue", region: "Delaware" },
];

/* ─── Founders ─── */
const founders = [
  { name: "Sam Nazarian", role: "Founder & CEO" },
  { name: "Tony Robbins", role: "Co-Founder & Strategic Investor" },
  { name: "Marc Anthony", role: "Strategic Partner" },
  { name: "Richard Attias", role: "Strategic Partner" },
];

export default function TheEstate() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <Layout section="longevity">
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Cinematic dark hero with parallax depth
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ background: DARK }}>
        {/* Layered background texture */}
        <div className="absolute inset-0">
          {/* Noise grain */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }} />
          {/* Radial warm glow from center */}
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(184,149,106,0.07) 0%, transparent 70%)`
          }} />
          {/* Subtle vignette */}
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)`
          }} />
        </div>

        {/* Animated gold line accents */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-[1px] h-[120px]"
          style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}40, transparent)` }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-[1px] h-[100px]"
          style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}30, transparent)` }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute top-[40%] right-[15%] w-[80px] h-[1px]"
          style={{ background: `linear-gradient(to right, transparent, ${GOLD}25, transparent)` }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Hero content */}
        <motion.div className="relative z-10 text-center px-6" style={{ opacity: heroOpacity, scale: heroScale }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            {/* Brand mark */}
            <motion.div variants={fadeIn} className="mb-10">
              <div className="inline-flex items-center gap-4">
                <span className="w-16 h-[0.5px]" style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }} />
                <span className="font-mono text-[11px] font-medium tracking-[0.5em] uppercase" style={{ color: GOLD }}>
                  The Estate
                </span>
                <span className="w-16 h-[0.5px]" style={{ background: `linear-gradient(to left, transparent, ${GOLD})` }} />
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fadeIn}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95] mb-8"
              style={{ color: IVORY }}
            >
              Where Vitality is the
              <br />
              <span className="font-medium" style={{ 
                background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Ultimate Luxury.
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeIn}
              className="font-body text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-14"
              style={{ color: "rgba(250,248,245,0.55)" }}
            >
              The world's first residential ecosystem built entirely around longevity.
              Luxury resorts, branded residences, and longevity clubs — unified by
              pioneering science, extraordinary hospitality, and a commitment to human vitality.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto"
            >
              {[
                { value: "24+", label: "Global Projects" },
                { value: "8+", label: "Countries" },
                { value: "1,300+", label: "Hotel Keys" },
                { value: "1,800+", label: "Residences" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.15, duration: 0.6 }}
                >
                  <div className="font-display text-3xl md:text-4xl font-light" style={{ color: IVORY }}>
                    <AnimatedCounter valueStr={stat.value} duration={2.5} />
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase mt-2" style={{ color: `${GOLD}99` }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="font-mono text-[8px] tracking-[0.3em] uppercase" style={{ color: `${GOLD}60` }}>Explore</span>
          <motion.div
            className="w-[1px] h-6"
            style={{ background: `linear-gradient(to bottom, ${GOLD}60, transparent)` }}
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BRAND MANIFESTO — Warm ivory with editorial typography
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: IVORY }}>
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeIn}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] tracking-tight"
              style={{ color: DARK }}
            >
              <em className="italic font-light" style={{ color: GOLD }}>More than a brand</em>
              <span className="text-black/80"> — a mindset, a movement,</span>
              <br className="hidden md:block" />
              <span className="text-black/80"> and a new model for wellbeing.</span>
            </motion.p>
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-3 mt-10">
              <span className="w-3 h-3 rounded-full border" style={{ borderColor: `${GOLD}50` }} />
              <span className="w-12 h-[1px]" style={{ background: GOLD }} />
              <span className="w-3 h-3 rounded-full border" style={{ borderColor: `${GOLD}50` }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOUR PILLARS — Rich dark section with glass-morphism cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: DARK }}>
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8956A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Warm ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{
          background: `radial-gradient(ellipse, rgba(184,149,106,0.05) 0%, transparent 70%)`
        }} />

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
              Foundational Pillars
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-5" style={{ color: IVORY }}>
              Built on Four Truths
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)`,
                  border: `1px solid rgba(184,149,106,0.12)`,
                  backdropFilter: "blur(20px)",
                }}
                whileHover={{
                  borderColor: "rgba(184,149,106,0.3)",
                  boxShadow: "0 20px 60px rgba(184,149,106,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
                
                {/* Number */}
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase block mb-5" style={{ color: `${GOLD}` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                
                {/* Icon */}
                <span className="text-2xl block mb-4 opacity-30 group-hover:opacity-60 transition-opacity" style={{ color: GOLD_LIGHT }}>
                  {pillar.icon}
                </span>
                
                {/* Title */}
                <h3 className="font-display text-2xl font-light mb-4" style={{ color: IVORY }}>
                  {pillar.name}
                </h3>
                
                {/* Description */}
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(250,248,245,0.5)" }}>
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ECOSYSTEM — Three property types on ivory
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: IVORY }}>
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
              The Ecosystem
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-5" style={{ color: DARK }}>
              Three Expressions, One Platform
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {[
              { 
                title: "Luxury Resorts", 
                desc: "World-class hospitality destinations where longevity science meets extraordinary service and design.",
                stats: "10+ Properties",
                features: ["Food & Beverage Concepts", "Luxury Accommodations", "Wellness Programming"]
              },
              { 
                title: "Branded Residences", 
                desc: "Residential communities designed around healthspan — where every home is a longevity environment.",
                stats: "1,800+ Units",
                features: ["Residential Integration", "Estate Services", "Living Ateliers"]
              },
              { 
                title: "Longevity Clubs", 
                desc: "Urban and resort-based membership clubs offering precision diagnostics, performance, and recovery.",
                stats: "5+ Locations",
                features: ["Medical Diagnostics", "Human Performance", "Holistic & Medical Spa"]
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500"
                style={{ background: DARK }}
                whileHover={{ y: -6 }}
              >
                {/* Top gold accent */}
                <div className="h-[2px] w-full" style={{ background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }} />
                
                <div className="p-8 md:p-10">
                  {/* Stats badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}25` }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                    <span className="font-mono text-[9px] tracking-wider uppercase" style={{ color: GOLD }}>
                      {item.stats}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-light mb-4" style={{ color: IVORY }}>
                    {item.title}
                  </h3>
                  
                  <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(250,248,245,0.5)" }}>
                    {item.desc}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2.5 pt-5" style={{ borderTop: `1px solid rgba(184,149,106,0.12)` }}>
                    {item.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full" style={{ background: `${GOLD}60` }} />
                        <span className="font-body text-xs" style={{ color: "rgba(250,248,245,0.4)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CHAPTER DIRECTORY — Dark section with premium cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32" style={{ background: CHARCOAL }}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(180deg, rgba(184,149,106,0.02) 0%, transparent 30%, transparent 70%, rgba(184,149,106,0.02) 100%)`
        }} />

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
              Explore The Estate
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-5" style={{ color: IVORY }}>
              The Complete Platform
            </motion.h2>
            <motion.p variants={fadeIn} className="font-body text-base mt-5 max-w-2xl mx-auto" style={{ color: "rgba(250,248,245,0.45)" }}>
              Navigate through each dimension of The Estate — from vision and ecosystem to pipeline and membership.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {chapters.map((chapter) => (
              <motion.a
                key={chapter.num}
                href={chapter.path}
                variants={fadeIn}
                className="group relative p-6 rounded-xl overflow-hidden transition-all duration-400"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(184,149,106,0.25)",
                  background: "rgba(255,255,255,0.04)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(184,149,106,0.15)",
                }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${chapter.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Number + Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: GOLD }}>
                      {chapter.num}
                    </span>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0" style={{ color: GOLD }}>
                      →
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-lg font-light mb-3 group-hover:translate-x-1 transition-transform duration-300" style={{ color: IVORY }}>
                    {chapter.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(250,248,245,0.4)" }}>
                    {chapter.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GLOBAL PIPELINE — Ivory section with destination grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: IVORY }}>
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
              Global Pipeline
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-5" style={{ color: DARK }}>
              Destinations in Development
            </motion.h2>
            <motion.p variants={fadeIn} className="font-body text-base mt-5 max-w-2xl mx-auto" style={{ color: "rgba(12,12,12,0.5)" }}>
              From island retreats to urban longevity clubs — The Estate is building a global network of vitality-centered living.
            </motion.p>
          </motion.div>

          {/* Destination grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group p-5 rounded-xl border transition-all duration-300 hover:border-black/20 hover:shadow-lg"
                style={{ 
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
                whileHover={{ y: -2 }}
              >
                <span className="font-mono text-[9px] tracking-wider block mb-2" style={{ color: GOLD }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-sm font-medium" style={{ color: DARK }}>
                  {dest.name}
                </h4>
                <p className="font-mono text-[9px] tracking-wider uppercase mt-1" style={{ color: "rgba(12,12,12,0.4)" }}>
                  {dest.region}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pipeline stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-14"
            style={{ borderTop: `1px solid rgba(184,149,106,0.2)` }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {[
              { value: "10+", label: "Resorts" },
              { value: "6+", label: "Branded Residences" },
              { value: "5", label: "Longevity Clubs" },
              { value: "8", label: "Diagnostics Locations" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-light" style={{ color: DARK }}>
                  <AnimatedCounter valueStr={stat.value} duration={2} />
                </div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase mt-2" style={{ color: GOLD }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CREDIBILITY — Dark section with founder cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: DARK }}>
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" style={{
          background: `radial-gradient(circle, rgba(184,149,106,0.04) 0%, transparent 60%)`
        }} />

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
              The Platform
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-5" style={{ color: IVORY }}>
              Built by Industry Titans
            </motion.h2>
          </motion.div>

          {/* Founders grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {founders.map((founder, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="text-center p-6 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(184,149,106,0.1)",
                }}
              >
                {/* Monogram circle */}
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{
                  background: `linear-gradient(135deg, ${GOLD}20, ${GOLD}08)`,
                  border: `1px solid ${GOLD}30`,
                }}>
                  <span className="font-display text-lg font-light" style={{ color: GOLD }}>
                    {founder.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h4 className="font-display text-base font-light" style={{ color: IVORY }}>
                  {founder.name}
                </h4>
                <p className="font-mono text-[9px] tracking-wider uppercase mt-1.5" style={{ color: `${GOLD}80` }}>
                  {founder.role}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Integration statement */}
          <motion.div
            className="text-center mt-14 pt-14 max-w-3xl mx-auto"
            style={{ borderTop: `1px solid rgba(184,149,106,0.1)` }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
          >
            <p className="font-body text-base leading-relaxed" style={{ color: "rgba(250,248,245,0.5)" }}>
              The Estate is where pioneering preventative care, performance optimization,
              and luxury living become one. Integrated with <span style={{ color: GOLD }}>Fountain Life</span> diagnostics
              and longevity protocols.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — Warm ivory with centered invitation
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: IVORY }}>
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
              Begin the Conversation
            </motion.span>
            <motion.h2 variants={fadeIn} className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-5 leading-[1.1]" style={{ color: DARK }}>
              Live Where Vitality is
              <br />
              the Ultimate Luxury.
            </motion.h2>
            <motion.div variants={fadeIn} className="mt-10">
              <a
                href="mailto:shawn@wellestategroup.com"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: DARK,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase font-medium" style={{ color: IVORY }}>
                  Request Access
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1" style={{ color: GOLD }}>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
