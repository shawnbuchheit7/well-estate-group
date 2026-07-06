/**
 * The Estate — Global Pipeline Page
 * Photography-led destination grid with pipeline stats
 * Moved from TheEstate.tsx Overview to its own dedicated tab
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

/* ─── Animations ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Brand Constants — NO GOLD ─── */
const IVORY = "#FAF7F2";
const DARK = "#0A0A0A";

/* ─── Destinations Data ─── */
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

/* ─── Three Expressions ─── */
const expressions = [
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

export default function EstatePipeline() {
  return (
    <Layout section="longevity">
      {/* Hero — Pipeline Overview */}
      <section className="relative py-28 md:py-36" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-16 md:mb-20">
              <span className="font-estate-sans text-[10px] tracking-[0.4em] uppercase block mb-6" style={{ color: "rgba(250,247,242,0.4)" }}>
                Global Pipeline
              </span>
              <h1 className="font-estate-headline text-4xl md:text-6xl font-light" style={{ color: IVORY }}>
                Destinations in Development
              </h1>
              <p className="font-estate-sans text-base mt-6 max-w-2xl" style={{ color: "rgba(250,247,242,0.5)" }}>
                From private islands to urban longevity clubs — a global network of vitality-centered living.
              </p>
            </motion.div>

            {/* Pipeline summary stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { value: "24+", label: "Total Projects" },
                { value: "8", label: "Countries" },
                { value: "$2B+", label: "Pipeline Value" },
                { value: "3,100+", label: "Keys & Units" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-estate-headline text-3xl md:text-4xl font-light" style={{ color: IVORY }}>
                    <AnimatedCounter valueStr={stat.value} duration={2} />
                  </div>
                  <div className="font-estate-sans text-[9px] tracking-[0.25em] uppercase mt-2" style={{ color: "rgba(250,247,242,0.45)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Destinations Grid */}
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
                    <span className="font-estate-sans text-[9px] tracking-[0.2em] uppercase block mb-1.5" style={{ color: "rgba(250,247,242,0.55)" }}>
                      {dest.type}
                    </span>
                    <h4 className="font-estate-headline text-xl font-light" style={{ color: IVORY }}>
                      {dest.name}
                    </h4>
                    <p className="font-estate-sans text-[10px] tracking-wider uppercase mt-1" style={{ color: "rgba(250,247,242,0.45)" }}>
                      {dest.region}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Expressions — How the pipeline manifests */}
      <section className="py-28 md:py-36" style={{ background: IVORY }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-16">
              <span className="font-estate-sans text-[10px] tracking-[0.4em] uppercase block mb-6" style={{ color: "rgba(10,10,10,0.35)" }}>
                Three Expressions
              </span>
              <h2 className="font-estate-headline text-3xl md:text-5xl font-light" style={{ color: DARK }}>
                One Platform, Three Models
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
              {expressions.map((expr, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-8 rounded-xl border"
                  style={{ borderColor: "rgba(10,10,10,0.08)", background: "white" }}
                >
                  <h3 className="font-estate-headline text-2xl font-light mb-4" style={{ color: DARK }}>
                    {expr.type}
                  </h3>
                  <p className="font-estate-sans text-sm leading-relaxed mb-6" style={{ color: "rgba(10,10,10,0.6)" }}>
                    {expr.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {expr.stats.map((stat, j) => (
                      <span
                        key={j}
                        className="font-estate-sans text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(10,10,10,0.04)", color: "rgba(10,10,10,0.6)" }}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-28" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-estate-headline text-2xl md:text-4xl font-light leading-[1.3]"
              style={{ color: IVORY }}
            >
              A global network of vitality-centered living —<br />
              <span className="italic" style={{ color: "rgba(250,247,242,0.5)" }}>
                designed to extend life and the quality of living.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
