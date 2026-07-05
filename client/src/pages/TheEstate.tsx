/**
 * The Estate — Premium Branded Landing Page
 * Where Vitality is the Ultimate Luxury.
 * Dark luxury aesthetic with warm gold accents, editorial layout,
 * and brand-native content from The Estate brand materials.
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* Brand colors */
const GOLD = "#C5A467";
const DARK = "#0A0A0A";
const CREAM = "#F8F6F1";
const CHARCOAL = "#1C1C1C";
const STONE = "#E8E3DA";

/* Section directory — brand-native chapters */
const sections = [
  {
    num: "01",
    title: "The Vision",
    desc: "A category-defining ambition to build the world's first residential ecosystem entirely around longevity.",
    path: "/longevity/estate/about",
  },
  {
    num: "02",
    title: "The Ecosystem",
    desc: "Luxury Resorts, Branded Residences, and Longevity Clubs — three property expressions, one integrated platform.",
    path: "/longevity/estate/about",
  },
  {
    num: "03",
    title: "The Experience",
    desc: "Diagnostics, Performance, Recovery, Spa, Culinary, and Entertainment — every dimension of vitality, curated.",
    path: "/longevity/estate/therapeutics",
  },
  {
    num: "04",
    title: "The Pillars",
    desc: "Longevity. Luxury. Experience. Community. Four foundations that define every Estate expression worldwide.",
    path: "/longevity/estate/about",
  },
  {
    num: "05",
    title: "The Pipeline",
    desc: "24+ global destinations in development across 8 countries — resorts, residences, and longevity clubs.",
    path: "/longevity/estate/projections",
  },
  {
    num: "06",
    title: "The Platform",
    desc: "Founded by Sam Nazarian. Backed by Tony Robbins, Marc Anthony, and Richard Attias. Operated by industry leaders.",
    path: "/longevity/estate/team",
  },
  {
    num: "07",
    title: "The Opportunity",
    desc: "A $6.8 trillion global wellness economy. Wellness real estate at $548B and growing 17.9% annually.",
    path: "/longevity/estate/opportunity",
  },
  {
    num: "08",
    title: "The Membership",
    desc: "Club tiers, residential ownership, and integrated longevity programming — designed for a life well lived.",
    path: "/longevity/estate/memberships",
  },
];

/* Four pillars */
const pillars = [
  { name: "Longevity", desc: "Health becomes a lifestyle embedded in daily rhythm" },
  { name: "Luxury", desc: "An intimate, design-forward, service-first environment" },
  { name: "Experience", desc: "Tailored to biological, emotional, and sensory needs" },
  { name: "Community", desc: "Social spaces and programming that foster connection" },
];

/* Pipeline highlights */
const destinations = [
  "Brecqhou Island", "Lustica Bay", "Coachella Valley", "Dominican Republic",
  "Puerto Rico", "Red Sea", "El Salvador", "Trentino",
  "Todos Santos", "Ft Lauderdale", "Bali", "Delaware",
];

export default function TheEstate() {
  return (
    <Layout section="longevity">
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Dark immersive hero with brand statement
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: DARK }}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="estate-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke={GOLD} strokeWidth="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#estate-grid)" />
          </svg>
        </div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: `radial-gradient(circle, rgba(197,164,103,0.06) 0%, transparent 70%)` }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full"
          style={{ background: `radial-gradient(circle, rgba(197,164,103,0.04) 0%, transparent 70%)` }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="relative z-10 py-24 md:py-36">
          <div className="container">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Eyebrow */}
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-5 mb-6">
                <span className="w-12 h-[1px]" style={{ backgroundColor: `${GOLD}60` }} />
                <span className="font-mono font-semibold text-[11px] tracking-[0.35em] uppercase" style={{ color: GOLD }}>
                  The Estate
                </span>
                <span className="w-12 h-[1px]" style={{ backgroundColor: `${GOLD}60` }} />
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] tracking-tight mb-6"
              >
                Where Vitality is the<br />
                <span style={{ color: GOLD }}>Ultimate Luxury.</span>
              </motion.h1>

              {/* Gold accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[2px] w-20 mx-auto mb-7"
                style={{ backgroundColor: GOLD }}
              />

              {/* Subhead */}
              <motion.p
                variants={fadeInUp}
                className="font-body text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
              >
                The world's first residential ecosystem built entirely around longevity.
                Luxury resorts, branded residences, and longevity clubs — unified by
                pioneering science, extraordinary hospitality, and a commitment to human vitality.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {[
                { value: "24+", label: "Global Projects" },
                { value: "8+", label: "Countries" },
                { value: "1,300+", label: "Hotel Keys" },
                { value: "1,800+", label: "Residences" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="text-center">
                  <motion.div
                    className="font-display text-3xl md:text-4xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
                  >
                    <AnimatedCounter valueStr={stat.value} duration={2} />
                  </motion.div>
                  <p className="font-mono text-[10px] text-white/50 tracking-[0.15em] uppercase mt-2 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade to cream */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: `linear-gradient(to top, ${CREAM} 0%, transparent 100%)` }} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BRAND STATEMENT — Warm cream section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20" style={{ background: CREAM }}>
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] tracking-tight"
              style={{ color: CHARCOAL }}
            >
              <em className="italic">More than a brand</em> — The Estate is a mindset,
              a movement, and a new model for wellbeing.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <span className="inline-block w-8 h-[1.5px]" style={{ backgroundColor: GOLD }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOUR PILLARS — Dark section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24" style={{ background: CHARCOAL }}>
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              Foundational Pillars
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white mt-4">
              Built on Four Truths
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center p-8 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-3" style={{ color: `${GOLD}90` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-medium text-white mb-3">{pillar.name}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION DIRECTORY — Cream background with dark cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24" style={{ background: CREAM }}>
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              Explore The Estate
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mt-4" style={{ color: CHARCOAL }}>
              The Complete Platform
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto mt-4">
              Navigate through each dimension of The Estate — from vision and ecosystem
              to pipeline and membership.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {sections.map((section) => (
              <motion.a
                key={section.num}
                href={section.path}
                variants={fadeInUp}
                className="group relative p-6 rounded-xl border border-black/[0.08] bg-white hover:border-black/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: `${GOLD}` }}>
                    {section.num}
                  </span>
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-sm"
                    style={{ color: GOLD }}
                    initial={false}
                  >
                    →
                  </motion.span>
                </div>
                <h3 className="font-display text-lg font-medium mb-2" style={{ color: CHARCOAL }}>
                  {section.title}
                </h3>
                <p className="font-body text-sm text-black/55 leading-relaxed">
                  {section.desc}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GLOBAL PIPELINE — Dark section with destination names
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24" style={{ background: DARK }}>
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              Global Pipeline
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white mt-4">
              Destinations in Development
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-white/55 max-w-2xl mx-auto mt-4">
              From island retreats to urban longevity clubs — The Estate is building a
              global network of vitality-centered living.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center py-6 px-4 rounded-lg border border-white/[0.06] bg-white/[0.02]"
              >
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase block mb-2" style={{ color: `${GOLD}80` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm md:text-base font-medium text-white/90">
                  {dest}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Pipeline stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-14 mt-14 pt-10 border-t border-white/[0.06]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {[
              { value: "10+", label: "Resorts" },
              { value: "6+", label: "Branded Residences" },
              { value: "5", label: "Longevity Clubs" },
              { value: "8", label: "Diagnostics Locations" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-semibold text-white">
                  <AnimatedCounter valueStr={stat.value} duration={1.5} />
                </div>
                <p className="font-mono text-[9px] text-white/45 tracking-[0.15em] uppercase mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CREDIBILITY — Cream section with founder names
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20" style={{ background: CREAM }}>
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              The Platform
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8" style={{ color: CHARCOAL }}>
              Built by Industry Titans
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {[
                { name: "Sam Nazarian", role: "Founder & CEO" },
                { name: "Tony Robbins", role: "Co-Founder & Strategic Investor" },
                { name: "Marc Anthony", role: "Strategic Partner" },
                { name: "Richard Attias", role: "Strategic Partner" },
              ].map((person, i) => (
                <div key={i} className="text-center px-4">
                  <p className="font-display text-lg font-medium" style={{ color: CHARCOAL }}>{person.name}</p>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-black/45 mt-1">{person.role}</p>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-10">
              <p className="font-body text-base text-black/60 leading-relaxed max-w-2xl mx-auto">
                The Estate is where pioneering preventative care, performance optimization,
                and luxury living become one. Integrated with Fountain Life diagnostics
                and longevity protocols.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CLOSING CTA — Dark section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24" style={{ background: CHARCOAL }}>
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>
              Begin the Conversation
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white mt-4 mb-6">
              Live Where Vitality is<br />the Ultimate Luxury.
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <a
                href="mailto:shawn@wellestategroup.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03]"
                style={{ backgroundColor: GOLD, color: DARK }}
              >
                Request Access
                <span className="text-base">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
