/**
 * Saltleaf on Estero Bay — Meeting Prep & Project Page
 * London Bay Development Group — Wellness Design & Programming Advisory
 * Design: Light luxury theme with Saltleaf brand teal (#1a3e4c)
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ACCENT = "#1a3e4c";

const agendaItems = [
  {
    title: "Longevity Consultation Suite",
    subtitle: "Services & Programming Beyond Current Scope",
    description: "Review the services that could be provided out of the longevity consultation room, beyond what's currently shown (VO₂ max, body composition, treatment table). Reference: Houston center images attached.",
    href: "/longevity/saltleaf/longevity-suite",
    details: [
      "Current TLEE recommendations: VO₂ max bike, body composition analyzer, treatment table, counter with sink",
      "Additional services to explore: IV therapy, biomarker testing, sports chiropractic, acupuncture, dermatology consultations",
      "Room design reference: Houston center suites (images provided)",
      "Question: What is the full activity list we want to drive from this space?",
    ],
  },
  {
    title: "Fitness Layout",
    subtitle: "Recommended Layout Review",
    description: "Review the current fitness layout recommendation. Evaluate the longevity lounge space allocation and equipment placement. Discuss whether removing lounge furniture to focus on equipment provides adequate space.",
    href: "/longevity/saltleaf/fitness-layout",
    details: [
      "Is this the final recommended fitness layout?",
      "Longevity lounge vs. equipment space trade-off",
      "Ana Goldstein (TLEE) discussion on space optimization",
      "Reference: 30+ Ritz-Carlton layouts and designs for comparison",
    ],
  },
  {
    title: "Level 3 Wellness Areas",
    subtitle: "Locker Rooms, Hot/Cold Therapy & Vitality Pool",
    description: "Reviewed the full Level 3 amenity floor including fitness, his/her locker rooms with hot/cold therapy, and vitality pool. Prepared feedback and recommendations for discussion.",
    href: "/longevity/saltleaf/level-3-wellness",
    details: [
      "His/Her locker rooms — hot/cold therapy integration",
      "Vitality pool design and programming",
      "Overall Level 3 flow and resident experience",
      "Feedback format: redlines or written comments to follow",
    ],
  },
  {
    title: "Wellness Consultants",
    subtitle: "Scope of Work & RFP Review",
    description: "Review the written scope of work or RFP for wellness consultant selection. Understanding the specific scope will help provide targeted feedback on the 7 shortlisted consultants.",
    href: "/longevity/saltleaf/wellness-consultants",
    details: [
      "TLEE Wellness — Tracy Lee (under consideration)",
      "Studio DeA — Drue DeAngelis",
      "Trilogy Spa Holdings",
      "BluSpas (direct experience — Acqualina)",
      "Core Essence",
      "The Wright Fit (direct experience — NYC residential)",
      "KALA Design Group",
    ],
  },
  {
    title: "Outdoor Wellness Spaces",
    subtitle: "MyEquilibria — Premium Outdoor Fitness & Wellness",
    description: "Explore design-forward outdoor wellness installations for Saltleaf's exterior amenity spaces. Reference imagery organized by luxury property installations and by solution category.",
    href: "/longevity/saltleaf/outdoor-wellness",
    details: [
      "Luxury resort & residential installations worldwide",
      "Solution categories: Performance Fitness, Wellness, Movability, Inclusivity, Longevity, Youth",
      "Nature-inspired, Italian-designed stainless steel equipment",
      "300+ installations across 30 countries",
    ],
  },
];

export default function Saltleaf() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Wellness Advisory"
        title={<>Saltleaf<br /><em className="italic font-light">on Estero Bay</em></>}
        description="Wellness design and programming advisory for London Bay Development Group's premier coastal community — featuring The Ritz-Carlton Residences, Estero Bay. Saltleaf Tower 1, Level 3 wellness amenities."
        accentColor={ACCENT}

      />

      {/* Building Exterior */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: `${ACCENT}20` }}>
            <img
              src="/saltleaf/saltleaf-rendering.jpg"
              alt="Saltleaf Tower One — Estero Bay, Florida"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-white text-center">
              <p className="font-display text-lg font-medium text-black">Saltleaf Tower One</p>
              <p className="font-body text-sm text-black/55">Estero Bay, Florida — London Bay Development Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Agenda */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Meeting Prep
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Discussion Items
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/65 max-w-2xl mx-auto">
              Prepared agenda for the in-person meeting with London Bay Development Group — Tuesday, June 10, 2026 at 10:00 AM.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {agendaItems.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={item.href}>
                  <a className="block group p-8 rounded-2xl border bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer h-full" style={{ borderColor: `${ACCENT}66` }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${ACCENT}B3`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${ACCENT}66`; }}>
                    {/* Number badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono font-semibold text-xs tracking-wider" style={{ color: ACCENT }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight className="w-4 h-4 text-black/20 group-hover:translate-x-1 transition-all duration-300" style={{ }} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-medium text-black mb-1 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-mono text-[10px] text-black/40 tracking-[0.15em] uppercase mb-4">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-body text-sm text-black/65 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-2">
                      {item.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-black/55 font-body">
                          <span className="mt-0.5" style={{ color: ACCENT }}>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* View Detail CTA */}
                    <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${ACCENT}26` }}>
                      <span className="font-body text-xs font-semibold text-black/50 group-hover:text-black transition-colors uppercase tracking-wider">
                        View Details →
                      </span>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Context */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Project Context
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
              Saltleaf Tower 1 — Level 3 Wellness
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl border bg-white" style={{ borderColor: `${ACCENT}33` }}>
              <h4 className="font-display text-lg font-medium text-black mb-2">Developer</h4>
              <p className="font-body text-sm text-black/65">London Bay Development Group</p>
              <p className="font-body text-xs text-black/40 mt-1">Christopher Smuts, Mark Wilson, Stephen Wilson, Craig Klingensmith</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl border bg-white" style={{ borderColor: `${ACCENT}33` }}>
              <h4 className="font-display text-lg font-medium text-black mb-2">Wellness Team</h4>
              <p className="font-body text-sm text-black/65">TLEE Wellness (Tracy Lee) — Consultant</p>

              <p className="font-body text-sm text-black/65">Thermal Collective — Hydrotherapy</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl border bg-white" style={{ borderColor: `${ACCENT}33` }}>
              <h4 className="font-display text-lg font-medium text-black mb-2">Architecture</h4>
              <p className="font-body text-sm text-black/65">Arquitectonica — Design Architect</p>
              <p className="font-body text-sm text-black/65">Meyer Davis — Interior Design</p>
              <p className="font-body text-xs text-black/40 mt-1">100% Schematic Design (May 2026)</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16">
        <div className="container text-center">
          <Link href="/longevity">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-black transition-colors">
              ← Back to Longevity Ventures
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
