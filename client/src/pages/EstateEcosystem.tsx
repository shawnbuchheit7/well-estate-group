/**
 * The Estate Ecosystem Page
 * Includes Layout wrapper for navigation bars
 * Features: Foundational Pillars section, Ecosystem Sketch hero image,
 * 3 image cards (Luxury Resorts, Residential Communities, Longevity Clubs),
 * 7 dark rectangles below (service categories)
 */

import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ecosystemCards = [
  {
    title: "Luxury\nResorts",
    image: "/eco_luxury_resorts.jpg",
  },
  {
    title: "Residential\nCommunities",
    image: "/eco_residential.jpg",
  },
  {
    title: "Longevity\nClubs",
    image: "/eco_longevity_clubs.jpg",
  },
];

const serviceCategories = [
  "Food & Beverage Concepts",
  "Luxury Accommodations",
  "Residential Integration",
  "Medical Diagnostics",
  "Human Performance",
  "Medical Spa",
  "Holistic Spa",
];

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
      <div className="min-h-screen bg-white pt-8 pb-32">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          {/* Header — matching PDF: serif title left, description right */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <h1 className="font-estate-display text-4xl md:text-5xl font-light leading-tight text-[#0A0A0A] flex-shrink-0">
                The Estate<br />Ecosystem
              </h1>
              <p className="font-estate-sans text-base md:text-lg leading-relaxed text-[#0A0A0A]/70 max-w-2xl pt-2">
                A full-circle longevity ecosystem blending preventative care, performance
                optimization, hospitality, and lifestyle into a unified offering.
              </p>
            </motion.div>
          </motion.div>

          {/* Foundational Pillars Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mb-20"
          >
            <motion.h2
              variants={fadeUp}
              className="font-estate-display text-2xl md:text-4xl font-light text-center text-[#0A0A0A] mb-4 leading-tight"
            >
              A complete ecosystem for daily optimization.<br />
              Built on The Estate's foundational pillars.
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {foundationalPillars.map((pillar, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-[#F5F4F1]">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-estate-display text-xl md:text-2xl font-light text-[#0A0A0A] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-estate-sans text-sm text-[#0A0A0A]/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Ecosystem Sketch */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-20"
          >
            <div className="rounded-xl overflow-hidden border border-[#0A0A0A]/10 shadow-lg">
              <img
                src="/estate_ecosystem_sketch.png"
                alt="The Estate Ecosystem — Complete architectural illustration showing all services, experiences, and expressions"
                className="w-full h-auto"
              />
            </div>
            <p className="font-estate-sans text-xs text-[#0A0A0A]/40 text-center mt-4 tracking-wide">
              THE ESTATE ECOSYSTEM — Where Vitality is the Ultimate Luxury.
            </p>
          </motion.div>

          {/* 3 Image Cards — Luxury Resorts, Residential Communities, Longevity Clubs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
          >
            {ecosystemCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative rounded-xl overflow-hidden aspect-[4/5] group"
              >
                <img
                  src={card.image}
                  alt={card.title.replace("\n", " ")}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-estate-sans text-xl md:text-2xl font-medium text-white leading-tight whitespace-pre-line text-center">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 7 Dark Service Category Rectangles */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3"
          >
            {serviceCategories.map((category, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#0A0A0A] rounded-xl flex items-end p-4 min-h-[140px]"
              >
                <p className="font-estate-sans text-xs text-white/80 leading-snug">
                  {category}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* THE ESTATE footer mark */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-20"
          >
            <p className="font-estate-wordmark text-sm tracking-[0.2em] uppercase text-[#0A0A0A]/40">
              THE ESTATE
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
