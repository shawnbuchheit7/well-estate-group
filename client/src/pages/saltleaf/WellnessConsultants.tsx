/**
 * Saltleaf — Wellness Consultants Detail Page
 * Scope of Work & RFP Review for wellness consultant selection
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Users } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const consultants = [
  {
    name: "TLEE Wellness",
    contact: "Tracy Lee",
    status: "Currently Engaged on SLT1",
    notes: "Lead wellness consultant on the project. Provided initial fitness and longevity suite recommendations.",
  },
  {
    name: "Studio DeA",
    contact: "Drue DeAngelis",
    status: "Shortlisted",
    notes: "Wellness design studio with luxury residential experience.",
  },
  {
    name: "Trilogy Spa Holdings",
    contact: "—",
    status: "Shortlisted",
    notes: "Spa and wellness management company with resort portfolio.",
  },
  {
    name: "BluSpas",
    contact: "—",
    status: "Shortlisted — FL Direct Experience",
    notes: "Fountain Life has worked directly with BluSpas on the Acqualina project. Strong understanding of longevity-focused wellness programming.",
  },
  {
    name: "Core Essence",
    contact: "—",
    status: "Shortlisted",
    notes: "Wellness consulting firm focused on luxury residential and hospitality.",
  },
  {
    name: "The Wright Fit",
    contact: "—",
    status: "Shortlisted — FL Direct Experience",
    notes: "Fountain Life has worked with The Wright Fit on NYC residential buildings. Expert in fitness design and programming for luxury properties.",
  },
  {
    name: "KALA Design Group",
    contact: "—",
    status: "Shortlisted",
    notes: "Design-forward wellness consulting with spa and fitness expertise.",
  },
];

const keyQuestions = [
  "What is the written scope of work or RFP for the wellness consultant role?",
  "Is the consultant expected to handle programming, design, or both?",
  "What is the timeline for consultant selection and engagement?",
  "Will the selected consultant work alongside Fountain Life or independently?",
  "How does the consultant scope interact with SPX (fitness) and Thermal Collective (hydrotherapy)?",
];

export default function WellnessConsultants() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 01"
        title={<>Wellness Consultants</>}
        description="Review the written scope of work or RFP for wellness consultant selection. Understanding the specific scope will help provide targeted feedback on the 7 shortlisted consultants."
        stats={[
          { label: "Shortlisted", value: "7" },
          { label: "FL Experience", value: "2" },
          { label: "Engaged", value: "1" },
        ]}
      />

      {/* Context Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Context
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-6 text-black">
              Fountain Life Experience
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 font-body text-sm text-black/70 leading-relaxed">
              <p>
                Fountain Life has direct working experience with two of the seven shortlisted consultants: <strong className="text-black">BluSpas</strong> (on the Acqualina project) and <strong className="text-black">The Wright Fit</strong> (on NYC luxury residential buildings). This first-hand experience positions us to provide meaningful, specific feedback on consultant capabilities.
              </p>
              <p>
                Before providing detailed recommendations, we need to review the written scope of work or RFP that London Bay has prepared. Each consultant group has different strengths — some excel at programming, others at design, and others at operations. Understanding the specific scope will ensure our feedback is targeted and actionable.
              </p>
              <p>
                <strong className="text-black">Key ask:</strong> Please share the written scope of work or RFP document so we can align our feedback to the specific requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consultants Grid */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              7 Shortlisted
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Wellness Consultant Candidates
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {consultants.map((consultant, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display text-lg font-medium text-black">{consultant.name}</h4>
                  {consultant.status.includes("FL Direct") && (
                    <span className="font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-1 rounded-full bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/30 whitespace-nowrap">
                      FL Experience
                    </span>
                  )}
                  {consultant.status.includes("Currently") && (
                    <span className="font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 whitespace-nowrap">
                      Engaged
                    </span>
                  )}
                </div>
                <p className="font-mono text-[10px] text-black/40 tracking-[0.12em] uppercase mb-2">{consultant.contact}</p>
                <p className="font-body text-sm text-black/65 leading-relaxed">{consultant.notes}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Questions */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Discussion Points
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8 text-black">
              Key Questions for Meeting
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              {keyQuestions.map((q, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#B8860B]/15 bg-white">
                  <span className="font-mono text-[#B8860B] font-semibold text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-body text-sm text-black/70">{q}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-[#B8860B]/10">
        <div className="container max-w-4xl flex items-center justify-between">
          <Link href="/longevity/saltleaf">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Saltleaf Overview
            </a>
          </Link>
          <Link href="/longevity/saltleaf/longevity-suite">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              Next: Longevity Suite <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
