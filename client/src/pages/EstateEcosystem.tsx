/**
 * The Estate Ecosystem Page
 * Includes Layout wrapper for navigation bars
 * Features: Foundational Pillars section + Hero Ecosystem Sketch
 * Clean, premium presentation — no broken cards or rectangles
 */

import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Brand Constants ─── */
const IVORY = "#FAF7F2";
const DARK = "#0A0A0A";

const foundationalPillars = [
  {
    title: "Longevity",
    description: "Longevity becomes a lifestyle, embedded in daily rhythm.",
    image: "/pillar_longevity.jpg",
  },
  {
    title: "Luxury",
    description: "An intimate, design-forward, service-first environment where every element is elevated.",
    image: "/pillar_luxury.jpg",
  },
  {
    title: "Experience",
    description: "Tailored experiences support evolving biological, emotional, and sensory needs.",
    image: "/pillar_experience.jpg",
  },
  {
    title: "Community",
    description: "Social spaces, networking, and programming foster organic connection.",
    image: "/pillar_community.jpg",
  },
];

export default function EstateEcosystem() {
  return (
    <Layout section="longevity">
      {/* Hero Section — Dark, cinematic opening */}
      <section className="relative py-28 md:py-36" style={{ background: DARK }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="font-estate-sans text-[10px] tracking-[0.4em] uppercase block mb-6"
              style={{ color: "rgba(250,247,242,0.4)" }}
            >
              The Ecosystem
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-estate-headline text-4xl md:text-6xl font-light leading-[1.15] mb-8"
              style={{ color: IVORY }}
            >
              A Full-Circle Longevity<br />Ecosystem
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-estate-sans text-base md:text-lg leading-[1.8] max-w-3xl mx-auto"
              style={{ color: "rgba(250,247,242,0.6)" }}
            >
              Blending preventative care, performance optimization, hospitality,
              and lifestyle into a unified offering.
            </motion.p>
          </motion.div>

          {/* Hero Ecosystem Sketch */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/estate_ecosystem_sketch.png"
                alt="The Estate Ecosystem — Complete architectural illustration showing all services, experiences, and expressions"
                className="w-full h-auto"
              />
            </div>
            <p className="font-estate-sans text-[10px] tracking-[0.3em] uppercase text-center mt-6" style={{ color: "rgba(250,247,242,0.3)" }}>
              THE ESTATE ECOSYSTEM — Where Vitality is the Ultimate Luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foundational Pillars Section — Ivory background */}
      <section className="py-28 md:py-36" style={{ background: IVORY }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="font-estate-sans text-[10px] tracking-[0.4em] uppercase block mb-6" style={{ color: "rgba(10,10,10,0.35)" }}>
                Foundation
              </span>
              <h2 className="font-estate-headline text-3xl md:text-5xl font-light leading-[1.2]" style={{ color: DARK }}>
                Built on Four Pillars
              </h2>
              <p className="font-estate-sans text-base mt-6 max-w-2xl mx-auto" style={{ color: "rgba(10,10,10,0.5)" }}>
                A complete ecosystem for daily optimization — built on The Estate's foundational pillars.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {foundationalPillars.map((pillar, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-5 bg-[#F5F4F1] shadow-sm">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-estate-headline text-xl md:text-2xl font-light mb-2" style={{ color: DARK }}>
                    {pillar.title}
                  </h3>
                  <p className="font-estate-sans text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.55)" }}>
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
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
              Where design, science, and experience converge —<br />
              <span className="italic" style={{ color: "rgba(250,247,242,0.5)" }}>
                a new model for wellbeing.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
