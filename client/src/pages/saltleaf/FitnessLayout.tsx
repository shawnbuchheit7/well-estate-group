/**
 * Saltleaf — Fitness Layout (SPX) Detail Page
 * Recommended Layout Review
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const layoutQuestions = [
  {
    question: "Is this the final recommended layout from SPX?",
    context: "Need to confirm whether the current fitness floor plan represents SPX's best recommendation or if it's still in draft/iteration phase.",
  },
  {
    question: "Longevity lounge vs. equipment space trade-off",
    context: "The current plan allocates space to a longevity lounge area. Would removing lounge furniture to focus on equipment provide adequate space for the fitness programming?",
  },
  {
    question: "Ana Goldstein (TLEE) & Sean Sackmann (SPX) alignment",
    context: "Have TLEE and SPX aligned on the space optimization strategy? Both parties should be in agreement on the final layout direction.",
  },
  {
    question: "Ritz-Carlton precedent comparison",
    context: "Fountain Life has reviewed 30+ Ritz-Carlton fitness layouts and designs. How does this compare to best-in-class examples?",
  },
];

const spaceConsiderations = [
  {
    area: "Primary Fitness Floor",
    notes: "Cardio equipment, strength training, functional fitness zones. Core of the SPX design.",
  },
  {
    area: "Longevity Lounge",
    notes: "Currently shown as a lounge/seating area adjacent to fitness. Question: Is this the best use of premium amenity space?",
  },
  {
    area: "Equipment Density",
    notes: "If lounge furniture is removed, does the additional space provide meaningful improvement to equipment layout and flow?",
  },
  {
    area: "Transition Zones",
    notes: "Flow between fitness, locker rooms, and consultation suite. Critical for resident experience.",
  },
];

const flExperience = [
  "Reviewed 30+ Ritz-Carlton fitness layouts across global properties",
  "Direct experience with luxury residential fitness design (NYC, Miami)",
  "Understanding of equipment spacing, flow, and programming requirements",
  "Perspective on longevity-focused fitness vs. traditional gym design",
];

export default function FitnessLayout() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 03"
        title={<>Fitness Layout (SPX)</>}
        description="Confirm whether the current layout is the recommended design from SPX. Review the longevity lounge space allocation and equipment placement."
        stats={[
          { label: "Designer", value: "SPX" },
          { label: "Contact", value: "Sean Sackmann" },
          { label: "Level", value: "3" },
        ]}
      />

      {/* Key Questions */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
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
              Layout Review Questions
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              {layoutQuestions.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[#B8860B] font-semibold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="font-display text-lg font-medium text-black mb-2">{item.question}</h4>
                      <p className="font-body text-sm text-black/65 leading-relaxed">{item.context}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Space Considerations */}
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
              Space Analysis
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Key Space Considerations
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {spaceConsiderations.map((space, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white"
              >
                <span className="font-mono text-[#B8860B] font-semibold text-xs tracking-wider mb-2 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-lg font-medium text-black mb-2">{space.area}</h4>
                <p className="font-body text-sm text-black/65 leading-relaxed">{space.notes}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FL Experience */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Our Perspective
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-6 text-black">
              Fountain Life Experience
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              {flExperience.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#B8860B]/15 bg-white">
                  <span className="text-[#B8860B] mt-0.5">•</span>
                  <p className="font-body text-sm text-black/70">{item}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Key Contacts
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8 text-black">
              Fitness Design Team
            </motion.h2>
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-1">Sean Sackmann</h4>
                <p className="font-mono text-[10px] text-black/40 tracking-[0.12em] uppercase mb-2">SPX — Fitness Design</p>
                <p className="font-body text-sm text-black/65">Lead fitness layout designer. Responsible for equipment selection, spacing, and programming flow.</p>
              </div>
              <div className="p-6 rounded-2xl border border-[#B8860B]/20 bg-white">
                <h4 className="font-display text-lg font-medium text-black mb-1">Ana Goldstein</h4>
                <p className="font-mono text-[10px] text-black/40 tracking-[0.12em] uppercase mb-2">TLEE Wellness — Consultant</p>
                <p className="font-body text-sm text-black/65">Wellness consultant coordinating with SPX on space optimization and longevity lounge integration.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-[#B8860B]/10">
        <div className="container max-w-4xl flex items-center justify-between">
          <Link href="/longevity/saltleaf/longevity-suite">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Prev: Longevity Suite
            </a>
          </Link>
          <Link href="/longevity/saltleaf/level-3-wellness">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              Next: Level 3 Wellness <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
