/**
 * The Estate — Elite Luxury Editorial Landing
 * Where Vitality is the Ultimate Luxury.
 * 
 * Design: Full-bleed editorial luxury hospitality aesthetic.
 * Colors: Deep black (#0A0A0A), warm ivory (#FAF7F2), burnished gold (#B8956A).
 * Typography: Large serif display, restrained mono labels, generous whitespace.
 * Photography-led credibility with real portraits.
 */

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useRef, useState } from "react";

/* ─── Animations ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Brand Constants ─── */
const GOLD = "#B8956A";
const IVORY = "#FAF7F2";
const DARK = "#0A0A0A";

/* ─── Data ─── */
const pillars = [
  {
    name: "Longevity",
    statement: "Health becomes a lifestyle embedded in daily rhythm — not a destination, but a way of living.",
    detail: "Precision diagnostics, regenerative therapies, and performance optimization integrated into every residence and club."
  },
  {
    name: "Luxury",
    statement: "An intimate, design-forward, service-first environment where every detail elevates the human experience.",
    detail: "World-class architecture, bespoke interiors, and hospitality standards that rival the finest private estates."
  },
  {
    name: "Experience",
    statement: "Tailored to biological, emotional, and sensory needs — precision meets intuition.",
    detail: "From thermal vitality circuits to private coaching, every touchpoint is curated for transformation."
  },
  {
    name: "Community",
    statement: "Social spaces and programming that foster connection among those who share a commitment to vitality.",
    detail: "Curated membership, shared rituals, and a global network of like-minded individuals."
  },
];

const ecosystem = [
  {
    type: "Luxury Resorts",
    desc: "Destination-grade hospitality with integrated longevity programming, world-class dining, and regenerative wellness.",
    stats: ["10+ Resorts", "1,300+ Keys", "8 Countries"],
  },
  {
    type: "Branded Residences",
    desc: "Ownership within a living ecosystem — residences designed around vitality, community, and long-horizon wellbeing.",
    stats: ["1,800+ Units", "6+ Communities", "Full Ownership"],
  },
  {
    type: "Longevity Clubs",
    desc: "Members-only environments for diagnostics, performance, recovery, and social connection — the daily ritual of vitality.",
    stats: ["5+ Clubs", "Tiered Membership", "Global Access"],
  },
];

const destinations = [
  { name: "Brecqhou Island", region: "English Channel", type: "Resort & Residences" },
  { name: "Lustica Bay", region: "Montenegro", type: "Resort & Residences" },
  { name: "Coachella Valley", region: "California", type: "Resort & Residences" },
  { name: "Playa Magante", region: "Dominican Republic", type: "Resort & Residences" },
  { name: "Horned Dorset", region: "Puerto Rico", type: "Boutique Resort" },
  { name: "Red Sea", region: "Saudi Arabia", type: "Ultra-Luxury Resort" },
  { name: "Playa Secreta", region: "El Salvador", type: "Resort & Club" },
  { name: "Trentino", region: "Italy", type: "Alpine Wellness" },
  { name: "Todos Santos", region: "Mexico", type: "Coastal Resort" },
  { name: "Ft Lauderdale", region: "Florida", type: "Urban Club" },
  { name: "Kura Kura", region: "Bali", type: "Island Resort" },
  { name: "Granogue", region: "Delaware", type: "Estate & Club" },
];

const founders = [
  {
    name: "Sam Nazarian",
    role: "Founder & CEO",
    image: "/sam_nazarian.jpg",
    bio: "Visionary hospitality entrepreneur. Founder of SBE Entertainment Group — creator of SLS Hotels, Delano, and a global portfolio of luxury lifestyle brands.",
  },
  {
    name: "Tony Robbins",
    role: "Co-Founder & Strategic Partner",
    image: "/tony_robbins.jpg",
    bio: "World's leading life strategist and co-founder of Fountain Life. Pioneer in making precision diagnostics accessible to high-performers worldwide.",
  },
  {
    name: "Marc Anthony",
    role: "Strategic Partner",
    image: "/marc_anthony.png",
    bio: "Global entertainment icon and entrepreneur with deep roots in Latin American luxury real estate, hospitality, and cultural influence.",
  },
  {
    name: "Tom Brady",
    role: "Strategic Partner",
    image: "/tom_brady.webp",
    bio: "The greatest athlete of his generation. Lifelong commitment to human performance, longevity science, and the TB12 wellness methodology.",
  },
];

const experiences = [
  "Diagnostics & Imaging",
  "Human Performance",
  "Regenerative Therapies",
  "Medical Spa & Aesthetics",
  "Holistic Spa & Thermal",
  "Fitness & Movement Lab",
  "Biohacking Suite",
  "Private Coaching",
  "Culinary & Nutrition",
  "Outdoor Vitality",
  "Social & Community",
  "Entertainment & Nightlife",
];

export default function TheEstate() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [activeFounder, setActiveFounder] = useState<number | null>(null);

  return (
    <Layout section="longevity">
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Full-viewport cinematic opening
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: DARK }}>
        {/* Layered atmosphere */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 45%, rgba(184,149,106,0.06) 0%, transparent 70%)`
          }} />
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.6) 100%)`
          }} />
        </div>

        {/* Content */}
        <motion.div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-5 mb-14">
              <div className="w-16 h-[1px]" style={{ background: GOLD }} />
              <span className="font-mono text-[11px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                The Estate
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-light leading-[0.92] tracking-[-0.02em] mb-10" style={{ color: IVORY }}>
              Where Vitality<br />
              is the Ultimate<br />
              <span className="italic" style={{ color: GOLD }}>Luxury.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p variants={fadeUp} className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mb-20" style={{ color: "rgba(250,247,242,0.5)" }}>
              The world's first residential ecosystem built entirely around longevity.
              Luxury resorts, branded residences, and longevity clubs — unified by
              pioneering science, extraordinary hospitality, and a commitment to human vitality.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-12 md:gap-16 border-t pt-10" style={{ borderColor: "rgba(184,149,106,0.2)" }}>
              {[
                { value: "24+", label: "Global Projects" },
                { value: "8+", label: "Countries" },
                { value: "1,300+", label: "Hotel Keys" },
                { value: "1,800+", label: "Residences" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-3xl md:text-4xl font-light" style={{ color: IVORY }}>
                    <AnimatedCounter valueStr={stat.value} duration={2.5} />
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.25em] uppercase mt-2" style={{ color: `${GOLD}` }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="font-mono text-[8px] tracking-[0.4em] uppercase" style={{ color: `${GOLD}80` }}>Scroll</span>
          <motion.div
            className="w-[1px] h-8"
            style={{ background: `linear-gradient(to bottom, ${GOLD}60, transparent)` }}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BRAND MANIFESTO — Ivory editorial statement
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40" style={{ background: IVORY }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] tracking-tight"
              style={{ color: DARK }}
            >
              More than a brand —<br />
              <em className="italic" style={{ color: GOLD }}>a mindset, a movement,</em><br />
              and a new model for wellbeing.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-12">
              <div className="w-20 h-[1px] mx-auto" style={{ background: GOLD }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOUR PILLARS — Dark editorial section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-20">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-[1px]" style={{ background: GOLD }} />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                  Foundational Pillars
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light" style={{ color: IVORY }}>
                Built on Four Truths
              </h2>
            </motion.div>

            {/* Pillar cards */}
            <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(184,149,106,0.15)" }}>
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-10 md:p-14 group"
                  style={{ background: DARK }}
                >
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase block mb-5" style={{ color: GOLD }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-light mb-5" style={{ color: IVORY }}>
                    {pillar.name}
                  </h3>
                  <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(250,247,242,0.6)" }}>
                    {pillar.statement}
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.35)" }}>
                    {pillar.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ECOSYSTEM — Three expressions on ivory
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: IVORY }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-20">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-[1px]" style={{ background: GOLD }} />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                  The Ecosystem
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light" style={{ color: DARK }}>
                Three Expressions,<br />One Platform
              </h2>
            </motion.div>

            {/* Ecosystem cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {ecosystem.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative border rounded-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
                  style={{ borderColor: "rgba(10,10,10,0.08)", background: "white" }}
                >
                  {/* Gold accent line */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: GOLD }} />
                  
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-6" style={{ color: GOLD }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-light mb-4" style={{ color: DARK }}>
                    {item.type}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-8" style={{ color: "rgba(10,10,10,0.55)" }}>
                    {item.desc}
                  </p>
                  
                  {/* Stats */}
                  <div className="pt-6 border-t" style={{ borderColor: "rgba(10,10,10,0.06)" }}>
                    {item.stats.map((stat, j) => (
                      <div key={j} className="flex items-center gap-2 mb-2 last:mb-0">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                        <span className="font-mono text-[10px] tracking-wider" style={{ color: "rgba(10,10,10,0.5)" }}>
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          EXPERIENCE — Full-width dark section with experience grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-16">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-[1px]" style={{ background: GOLD }} />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                  The Experience
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light mb-6" style={{ color: IVORY }}>
                Every Dimension of Vitality
              </h2>
              <p className="font-body text-base max-w-2xl" style={{ color: "rgba(250,247,242,0.45)" }}>
                A curated ecosystem of cutting-edge diagnostics, regenerative therapies, vitality rituals, 
                and functional health — personalized to each guest and resident.
              </p>
            </motion.div>

            {/* Experience grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="group p-5 md:p-6 rounded-xl border transition-all duration-300 hover:border-[#B8956A]/30"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="font-mono text-[9px] tracking-wider block mb-3" style={{ color: `${GOLD}60` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm" style={{ color: "rgba(250,247,242,0.75)" }}>
                    {exp}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Brand statement */}
            <motion.div variants={fadeUp} className="mt-16 pt-16" style={{ borderTop: "1px solid rgba(184,149,106,0.15)" }}>
              <p className="font-display text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl" style={{ color: "rgba(250,247,242,0.6)" }}>
                "The Estate is where pioneering preventative care, performance optimization, and luxury living become one."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOUNDERS — Photography-led credibility section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: IVORY }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-20">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-[1px]" style={{ background: GOLD }} />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                  The Platform
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light" style={{ color: DARK }}>
                Built by Industry Titans
              </h2>
            </motion.div>

            {/* Founder portrait grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              variants={stagger}
            >
              {founders.map((founder, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative"
                  onMouseEnter={() => setActiveFounder(i)}
                  onMouseLeave={() => setActiveFounder(null)}
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: `radial-gradient(ellipse at center, rgba(184,149,106,0.1) 0%, transparent 70%)`
                  }} />
                  
                  <div className="relative overflow-hidden rounded-2xl border transition-all duration-500 group-hover:border-[#B8956A]/30 group-hover:shadow-xl" style={{ borderColor: "rgba(10,10,10,0.08)" }}>
                    {/* Portrait */}
                    <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="p-5 md:p-6 bg-white">
                      <h4 className="font-display text-lg md:text-xl font-medium mb-1" style={{ color: DARK }}>
                        {founder.name}
                      </h4>
                      <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: GOLD }}>
                        {founder.role}
                      </p>
                      <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(10,10,10,0.5)" }}>
                        {founder.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Fountain Life integration */}
            <motion.div variants={fadeUp} className="mt-16 pt-12 text-center" style={{ borderTop: "1px solid rgba(10,10,10,0.06)" }}>
              <p className="font-body text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(10,10,10,0.5)" }}>
                Integrated with <span className="font-medium" style={{ color: DARK }}>Fountain Life</span> — the world's most advanced 
                precision diagnostics and longevity platform. Co-founded by Tony Robbins and Peter Diamandis.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GLOBAL PIPELINE — Dark editorial destination grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-20">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-[1px]" style={{ background: GOLD }} />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                  Global Pipeline
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light" style={{ color: IVORY }}>
                Destinations in Development
              </h2>
              <p className="font-body text-base mt-6 max-w-2xl" style={{ color: "rgba(250,247,242,0.4)" }}>
                From private islands to urban longevity clubs — a global network of vitality-centered living.
              </p>
            </motion.div>

            {/* Destination grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: "rgba(184,149,106,0.12)" }}>
              {destinations.map((dest, i) => (
                <div
                  key={i}
                  className="p-7 md:p-8 group transition-all duration-300 hover:bg-[rgba(184,149,106,0.05)]"
                  style={{ background: DARK }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-mono text-[9px] tracking-wider" style={{ color: `${GOLD}70` }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[9px] tracking-wider uppercase" style={{ color: "rgba(250,247,242,0.25)" }}>
                      {dest.type}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-light mb-1.5 group-hover:translate-x-1 transition-transform duration-300" style={{ color: IVORY }}>
                    {dest.name}
                  </h4>
                  <p className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "rgba(250,247,242,0.35)" }}>
                    {dest.region}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Pipeline summary stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16" style={{ borderTop: "1px solid rgba(184,149,106,0.15)" }}>
              {[
                { value: "24+", label: "Total Projects" },
                { value: "8", label: "Countries" },
                { value: "$2B+", label: "Pipeline Value" },
                { value: "3,100+", label: "Keys & Units" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-3xl md:text-4xl font-light" style={{ color: IVORY }}>
                    <AnimatedCounter valueStr={stat.value} duration={2} />
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.25em] uppercase mt-2" style={{ color: GOLD }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MARKET OPPORTUNITY — Ivory with editorial stats
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: IVORY }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section header */}
            <motion.div variants={fadeUp} className="mb-16">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-[1px]" style={{ background: GOLD }} />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                  The Opportunity
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light" style={{ color: DARK }}>
                A Category-Defining<br />Moment
              </h2>
            </motion.div>

            {/* Market stats */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-12 md:gap-16">
              {[
                {
                  value: "$6.8T",
                  label: "Global Wellness Economy",
                  detail: "The wellness industry is now the world's largest and fastest-growing consumer category.",
                },
                {
                  value: "$548B",
                  label: "Wellness Real Estate",
                  detail: "Properties designed around health and wellbeing are growing at 17.9% annually — outpacing every other real estate segment.",
                },
                {
                  value: "17.9%",
                  label: "Annual Growth Rate",
                  detail: "Wellness real estate is the fastest-growing sector in global property development.",
                },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-4xl md:text-5xl font-light mb-4" style={{ color: GOLD }}>
                    {stat.value}
                  </div>
                  <h4 className="font-body text-base font-medium mb-3" style={{ color: DARK }}>
                    {stat.label}
                  </h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.5)" }}>
                    {stat.detail}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Positioning statement */}
            <motion.div variants={fadeUp} className="mt-20 pt-12" style={{ borderTop: "1px solid rgba(10,10,10,0.06)" }}>
              <p className="font-display text-2xl md:text-3xl font-light leading-relaxed max-w-4xl" style={{ color: DARK }}>
                No one has unified luxury hospitality, branded residences, and clinical longevity into a single global platform.{" "}
                <span className="italic" style={{ color: GOLD }}>Until now.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — Dark cinematic closing
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden" style={{ background: DARK }}>
        {/* Ambient glow */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse 50% 60% at 50% 50%, rgba(184,149,106,0.05) 0%, transparent 70%)`
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 mb-10">
              <div className="w-12 h-[1px]" style={{ background: `${GOLD}60` }} />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                Begin the Conversation
              </span>
              <div className="w-12 h-[1px]" style={{ background: `${GOLD}60` }} />
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8" style={{ color: IVORY }}>
              Live Where Vitality<br />
              is the <span className="italic" style={{ color: GOLD }}>Ultimate Luxury.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="font-body text-base mb-12 max-w-xl mx-auto" style={{ color: "rgba(250,247,242,0.4)" }}>
              For partnership inquiries, investment opportunities, or membership interest.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href="mailto:shawn@wellestategroup.com"
                className="group inline-flex items-center gap-4 px-10 py-5 rounded-full transition-all duration-400 hover:scale-[1.02]"
                style={{
                  background: GOLD,
                  boxShadow: "0 4px 24px rgba(184,149,106,0.25)",
                }}
              >
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-medium" style={{ color: DARK }}>
                  Request Access
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1" style={{ color: DARK }}>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
