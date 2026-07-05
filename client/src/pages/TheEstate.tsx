/**
 * The Estate — Elite Luxury Editorial Landing
 * Where Vitality is the Ultimate Luxury.
 * 
 * Design: 100% faithful to The Estate brand deck.
 * Colors: Deep black (#0A0A0A), warm ivory (#FAF7F2), muted grey. NO GOLD ANYWHERE.
 * The deck uses black + white + ivory only. "Luxury" is warm ivory italic, not gold.
 * Typography: Large serif display, restrained mono labels, generous whitespace.
 * Section order matches deck exactly: Hero > Titans > Pillars > Ecosystem > Pipeline > Market > CTA
 */

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useRef } from "react";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Brand Constants — NO GOLD ─── */
const IVORY = "#FAF7F2";
const DARK = "#0A0A0A";
const WARM_ACCENT = "#E8E0D4"; // warm ivory for the italic "Luxury" — NOT gold

/* ─── Data ─── */
const founders = [
  {
    name: "Sam Nazarian",
    role: "Founder & Chief Executive Officer",
    image: "/sam_nazarian.jpg",
    bio: "Visionary entrepreneur, global hospitality leader, culinary disruptor, and architect of modern luxury experiences. Sam Nazarian founded sbe in 2002 and built the world's largest luxury lifestyle hotel company with 100+ hotels and residences. He continues to serve as CEO — redefining luxury, hospitality, residential, and culinary experiences. SBE includes an unparalleled global ecosystem of brands that shape the way people live, dine, and travel.",
  },
  {
    name: "Tony Robbins",
    role: "Co-Founder & Investor",
    image: "/tony_robbins.jpg",
    bio: "Global entrepreneur, investor, author, sports team owner, and the world's No. 1 life and business strategist. For over 47 years, more than 100 million people from over 195 countries have invested in his books, audio, and video training, and more than 12 million people have attended his live events. A leader called upon by leaders, he has consulted and coached some of the world's greatest athletes, entertainers, Fortune 500 CEOs, and four US presidents.",
  },
  {
    name: "Marc Anthony",
    role: "Equity Partner",
    image: "/marc_anthony.jpg",
    bio: "Global music icon, entrepreneur, philanthropist, and cultural ambassador. Over a career spanning more than three decades, he has achieved 105 Billboard #1 hits, generated more than 15 billion streams, and built a global audience exceeding 100 million followers. Beyond entertainment, Marc has expanded his impact supporting transformative initiatives through his Maestro Cares Foundation.",
  },
  {
    name: "Tom Brady",
    role: "Equity Partner",
    image: "/tom_brady.jpg",
    bio: "Tom Brady cemented a 23-year legacy as the most decorated player in NFL history and one of the most influential athletes of his generation. Rewriting the record books with seven Super Bowl championships and five Super Bowl MVP awards, he is a leader called upon by world-class organizations and has translated his winning blueprint into a global ecosystem of lifestyle brands, media ventures, strategic investments, and ownership stakes across professional sports.",
  },
];

const pillars = [
  {
    name: "Longevity",
    image: "/pillar_longevity.jpg",
    description: "Longevity becomes a lifestyle, embedded in daily rhythm.",
  },
  {
    name: "Luxury",
    image: "/pillar_luxury.jpg",
    description: "An intimate, design-forward, service-first environment where every element is elevated.",
  },
  {
    name: "Experience",
    image: "/pillar_experience.jpg",
    description: "Tailored experiences support evolving biological, emotional, and sensory needs.",
  },
  {
    name: "Community",
    image: "/pillar_community.jpg",
    description: "Social spaces, networking, and programming foster organic connection.",
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
  { name: "Brecqhou Island", region: "English Channel", type: "Resort & Residences", image: "/dest_brecqhou.jpg" },
  { name: "Lustica Bay", region: "Montenegro", type: "Resort & Residences", image: "/dest_lustica.jpg" },
  { name: "Coachella Valley", region: "California", type: "Resort & Residences", image: "/dest_coachella.jpg" },
  { name: "Playa Magante", region: "Dominican Republic", type: "Resort & Residences", image: "/dest_magante.jpg" },
  { name: "Horned Dorset", region: "Puerto Rico", type: "Boutique Resort", image: "/dest_horned_dorset.jpg" },
  { name: "Red Sea", region: "Saudi Arabia", type: "Ultra-Luxury Resort", image: "/dest_red_sea.jpg" },
  { name: "Playa Secreta", region: "El Salvador", type: "Resort & Club", image: "/dest_playa_secreta.jpeg" },
  { name: "Trentino", region: "Italy", type: "Alpine Wellness", image: "/dest_trentino.jpg" },
  { name: "Todos Santos", region: "Mexico", type: "Coastal Resort", image: "/dest_todos_santos.jpg" },
  { name: "Ft Lauderdale", region: "Florida", type: "Urban Club", image: "/dest_ft_lauderdale.jpg" },
  { name: "Kura Kura", region: "Bali", type: "Island Resort", image: "/dest_kura_kura.webp" },
  { name: "Granogue", region: "Delaware", type: "Estate & Club", image: "/dest_granogue.jpg" },
];

export default function TheEstate() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout section="longevity">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — Full-viewport cinematic opening (deck page 1)
          Black background, white text, "Luxury" in warm ivory italic
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: DARK }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.6) 100%)`
          }} />
        </div>

        <motion.div className="relative z-10 px-8 md:px-16 max-w-5xl mx-auto w-full text-center" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Eyebrow — centered thin line + label */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 mb-14">
              <div className="w-10 h-[1px]" style={{ background: "rgba(250,247,242,0.3)" }} />
              <span className="font-mono text-[11px] tracking-[0.4em] uppercase" style={{ color: "rgba(250,247,242,0.5)" }}>
                The Estate
              </span>
              <div className="w-10 h-[1px]" style={{ background: "rgba(250,247,242,0.3)" }} />
            </motion.div>

            {/* Headline — centered, white with "Luxury" in warm ivory italic (NOT gold) */}
            <motion.h1 variants={fadeUp} className="font-estate-tagline text-5xl md:text-7xl lg:text-[6.5rem] font-light leading-[0.92] tracking-[-0.02em] mb-10" style={{ color: IVORY }}>
              Where Vitality<br />
              is the Ultimate<br />
              <span className="italic" style={{ color: WARM_ACCENT }}>Luxury.</span>
            </motion.h1>

            {/* Subhead — centered, muted ivory */}
            <motion.p variants={fadeUp} className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-20" style={{ color: "rgba(250,247,242,0.6)" }}>
              The world's first residential ecosystem built entirely around longevity.
              Luxury resorts, branded residences, and longevity clubs — unified by
              pioneering science, extraordinary hospitality, and a commitment to human vitality.
            </motion.p>

            {/* Stats — centered, thin ivory divider, white numbers, muted grey labels */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-12 md:gap-16 border-t pt-10" style={{ borderColor: "rgba(250,247,242,0.12)" }}>
              {[
                { value: "24+", label: "Global Projects" },
                { value: "8+", label: "Countries" },
                { value: "1,300+", label: "Hotel Keys" },
                { value: "1,800+", label: "Residences" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-estate-tagline text-3xl md:text-4xl font-light" style={{ color: IVORY }}>
                    <AnimatedCounter valueStr={stat.value} duration={2.5} />
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.25em] uppercase mt-2" style={{ color: "rgba(250,247,242,0.45)" }}>
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
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="font-mono text-[8px] tracking-[0.4em] uppercase" style={{ color: "rgba(250,247,242,0.3)" }}>Scroll</span>
          <motion.div
            className="w-[1px] h-8"
            style={{ background: `linear-gradient(to bottom, rgba(250,247,242,0.3), transparent)` }}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: FOUNDERS / TITANS — Immediately after hero (deck page 2)
          Ivory background, B&W portraits, open editorial grid
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
            <motion.div variants={fadeUp} className="mb-16 md:mb-20">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase block mb-6" style={{ color: "rgba(10,10,10,0.35)" }}>
                The Platform
              </span>
              <h2 className="font-estate-tagline text-4xl md:text-6xl font-light" style={{ color: DARK }}>
                Built by Industry Titans
              </h2>
            </motion.div>

            {/* Founder portrait grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
              variants={stagger}
            >
              {founders.map((founder, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="text-center"
                >
                  {/* Portrait — uniform aspect ratio */}
                  <div className="aspect-[3/4] overflow-hidden rounded-xl mb-5">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Name */}
                  <h4 className="font-body text-lg md:text-xl font-semibold mb-1" style={{ color: DARK }}>
                    {founder.name}
                  </h4>
                  {/* Role — muted */}
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(10,10,10,0.4)" }}>
                    {founder.role}
                  </p>
                  {/* Bio */}
                  <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(10,10,10,0.55)" }}>
                    {founder.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: FOUR PILLARS — After titans (deck page 3)
          Ivory/cream background, 4 image cards with labels below
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: "#FEFCF9" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Section headline — dark serif, centered */}
            <motion.div variants={fadeUp} className="text-center mb-16 md:mb-20">
              <h2 className="font-estate-tagline text-3xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.2]" style={{ color: DARK }}>
                A complete ecosystem for daily optimization.<br />
                Built on The Estate's foundational pillars.
              </h2>
            </motion.div>

            {/* Pillar cards — 4 images with labels below */}
            <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" variants={stagger}>
              {pillars.map((pillar, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-5">
                    <img
                      src={pillar.image}
                      alt={pillar.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-estate-tagline text-xl md:text-2xl font-light mb-3" style={{ color: DARK }}>
                    {pillar.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.55)" }}>
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: BRAND MANIFESTO — Dark editorial
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40" style={{ background: DARK }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-estate-tagline text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] tracking-tight mb-12"
              style={{ color: IVORY }}
            >
              Where Vitality is the Ultimate Luxury.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg leading-[1.8] max-w-3xl mx-auto"
              style={{ color: "rgba(250,247,242,0.6)" }}
            >
              Designed to extend life — and the quality of living — The Estate is a next-generation
              platform for luxury hospitality and wellness-oriented living. An integrated network of
              resorts, residences, and longevity clubs, where design, science, and experience converge
              to meet a growing global demand for health-anchored luxury environments.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg leading-[1.8] max-w-3xl mx-auto mt-8"
              style={{ color: "rgba(250,247,242,0.5)" }}
            >
              More than a brand — The Estate is a mindset, a movement,
              and a new model for wellbeing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: ECOSYSTEM — Three expressions
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-20">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase block mb-6" style={{ color: "rgba(250,247,242,0.4)" }}>
                The Ecosystem
              </span>
              <h2 className="font-estate-tagline text-4xl md:text-6xl font-light" style={{ color: IVORY }}>
                Three Expressions,<br />One Platform
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
              {ecosystem.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-8 md:p-10"
                  style={{ background: DARK }}
                >
                  <h3 className="font-estate-tagline text-2xl font-light mb-4" style={{ color: IVORY }}>
                    {item.type}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-8" style={{ color: "rgba(250,247,242,0.55)" }}>
                    {item.desc}
                  </p>
                  
                  <div className="pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    {item.stats.map((stat, j) => (
                      <div key={j} className="flex items-center gap-2 mb-2 last:mb-0">
                        <div className="w-1 h-1 rounded-full" style={{ background: "rgba(250,247,242,0.3)" }} />
                        <span className="font-mono text-[10px] tracking-wider" style={{ color: "rgba(250,247,242,0.55)" }}>
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
          SECTION 6: GLOBAL PIPELINE — Photography-led destination grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-16 md:mb-20">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase block mb-6" style={{ color: "rgba(250,247,242,0.4)" }}>
                Global Pipeline
              </span>
              <h2 className="font-estate-tagline text-4xl md:text-6xl font-light" style={{ color: IVORY }}>
                Destinations in Development
              </h2>
              <p className="font-body text-base mt-6 max-w-2xl" style={{ color: "rgba(250,247,242,0.5)" }}>
                From private islands to urban longevity clubs — a global network of vitality-centered living.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinations.map((dest, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase block mb-1.5" style={{ color: "rgba(250,247,242,0.55)" }}>
                      {dest.type}
                    </span>
                    <h4 className="font-estate-tagline text-xl font-light" style={{ color: IVORY }}>
                      {dest.name}
                    </h4>
                    <p className="font-mono text-[10px] tracking-wider uppercase mt-1" style={{ color: "rgba(250,247,242,0.45)" }}>
                      {dest.region}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pipeline summary stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { value: "24+", label: "Total Projects" },
                { value: "8", label: "Countries" },
                { value: "$2B+", label: "Pipeline Value" },
                { value: "3,100+", label: "Keys & Units" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-estate-tagline text-3xl md:text-4xl font-light" style={{ color: IVORY }}>
                    <AnimatedCounter valueStr={stat.value} duration={2} />
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.25em] uppercase mt-2" style={{ color: "rgba(250,247,242,0.45)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7: MARKET OPPORTUNITY — Ivory with editorial stats
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36" style={{ background: IVORY }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-16">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase block mb-6" style={{ color: "rgba(10,10,10,0.35)" }}>
                The Opportunity
              </span>
              <h2 className="font-estate-tagline text-4xl md:text-6xl font-light" style={{ color: DARK }}>
                A Category-Defining<br />Moment
              </h2>
            </motion.div>

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
                  <div className="font-estate-tagline text-4xl md:text-5xl font-light mb-4" style={{ color: DARK }}>
                    {stat.value}
                  </div>
                  <h4 className="font-body text-base font-medium mb-3" style={{ color: DARK }}>
                    {stat.label}
                  </h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.55)" }}>
                    {stat.detail}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Positioning statement */}
            <motion.div variants={fadeUp} className="mt-20 pt-12" style={{ borderTop: "1px solid rgba(10,10,10,0.08)" }}>
              <p className="font-estate-tagline text-2xl md:text-3xl font-light leading-relaxed max-w-4xl" style={{ color: DARK }}>
                No one has unified luxury hospitality, branded residences, and clinical longevity into a single global platform.{" "}
                <span className="italic" style={{ color: "rgba(10,10,10,0.45)" }}>Until now.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8: CTA — Dark cinematic closing. NO GOLD.
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-44 overflow-hidden" style={{ background: DARK }}>
        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-estate-tagline text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8" style={{ color: IVORY }}>
              Live Where Vitality<br />
              is the <span className="italic" style={{ color: WARM_ACCENT }}>Ultimate Luxury.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="font-body text-base mb-12 max-w-xl mx-auto" style={{ color: "rgba(250,247,242,0.6)" }}>
              For partnership inquiries, investment opportunities, or membership interest.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href="mailto:shawn@wellestategroup.com"
                className="group inline-flex items-center gap-4 px-10 py-5 rounded-full border transition-all duration-400 hover:bg-white/5"
                style={{
                  borderColor: "rgba(250,247,242,0.25)",
                }}
              >
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-medium" style={{ color: IVORY }}>
                  Request Access
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1" style={{ color: IVORY }}>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
