/**
 * Saltleaf on Estero Bay — Meeting Prep & Project Page
 * London Bay Development Group — Wellness Design & Programming Advisory
 * Design: Light luxury theme matching site-wide aesthetic
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const agendaItems = [
  {
    title: "Wellness Consultants",
    subtitle: "Scope of Work & RFP Review",
    description: "Review the written scope of work or RFP for wellness consultant selection. Fountain Life has worked with BluSpas (Acqualina) and The Wright Fit (NYC residential) — understanding the specific scope will help provide targeted feedback on the 7 shortlisted consultants.",
    href: "/longevity/saltleaf/wellness-consultants",
    details: [
      "TLEE Wellness — Tracy Lee (currently engaged on SLT1)",
      "Studio DeA — Drue DeAngelis",
      "Trilogy Spa Holdings",
      "BluSpas (FL has direct experience — Acqualina)",
      "Core Essence",
      "The Wright Fit (FL has direct experience — NYC residential)",
      "KALA Design Group",
    ],
  },
  {
    title: "Longevity Consultation Suite",
    subtitle: "Services & Programming Beyond Current Scope",
    description: "Review the services Fountain Life could provide out of the longevity consultation room, beyond what's currently shown (VO₂ max, body composition, treatment table). Reference: Fountain Life Houston center images attached.",
    href: "/longevity/saltleaf/longevity-suite",
    details: [
      "Current TLEE recommendations: VO₂ max bike, body composition analyzer, treatment table, counter with sink",
      "Fountain Life services to explore: IV therapy, biomarker testing, sports chiropractic, acupuncture, dermatology consultations",
      "Room design reference: FL Houston center suites (images provided)",
      "Question: What is the full activity list we want to drive from this space?",
    ],
  },
  {
    title: "Fitness Layout (SPX)",
    subtitle: "Recommended Layout Review",
    description: "Confirm whether the current layout is the recommended design from SPX. Review the longevity lounge space allocation and equipment placement. Discuss whether removing lounge furniture to focus on equipment provides adequate space.",
    href: "/longevity/saltleaf/fitness-layout",
    details: [
      "Is this the final recommended layout from SPX?",
      "Longevity lounge vs. equipment space trade-off",
      "Ana Goldstein (TLEE) & Sean Sackmann (SPX) discussion on space optimization",
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
];

export default function Saltleaf() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Client Project"
        title={<>Saltleaf<br /><em className="italic font-light">on Estero Bay</em></>}
        description="Wellness design and programming advisory for London Bay Development Group's premier coastal community — featuring The Ritz-Carlton Residences, Estero Bay. Saltleaf Tower 1, Level 3 wellness amenities."
        stats={[
          { label: "Tower", value: "SLT1" },
          { label: "Level", value: "3" },
          { label: "Client", value: "LBDG" },
          { label: "Status", value: "Active" },
        ]}
      />

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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
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
                  <a className="block group p-8 rounded-2xl border border-[#B8860B]/40 bg-white hover:border-[#B8860B]/70 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer h-full">
                    {/* Number badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[#B8860B] font-semibold text-xs tracking-wider">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-[#B8860B] group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-medium text-black mb-1 group-hover:text-[#B8860B] transition-colors">
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
                          <span className="text-[#B8860B] mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* View Detail CTA */}
                    <div className="mt-6 pt-4 border-t border-[#B8860B]/15">
                      <span className="font-body text-xs font-semibold text-black/50 group-hover:text-[#B8860B] transition-colors uppercase tracking-wider">
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
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
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
              <h4 className="font-display text-lg font-medium text-black mb-2">Developer</h4>
              <p className="font-body text-sm text-black/65">London Bay Development Group</p>
              <p className="font-body text-xs text-black/40 mt-1">Christopher Smuts, Mark Wilson, Stephen Wilson, Craig Klingensmith</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
              <h4 className="font-display text-lg font-medium text-black mb-2">Wellness Team</h4>
              <p className="font-body text-sm text-black/65">TLEE Wellness (Tracy Lee) — Consultant</p>
              <p className="font-body text-sm text-black/65">SPX (Sean Sackmann) — Fitness</p>
              <p className="font-body text-sm text-black/65">Thermal Collective — Hydrotherapy</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
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
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              ← Back to Longevity Ventures
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
