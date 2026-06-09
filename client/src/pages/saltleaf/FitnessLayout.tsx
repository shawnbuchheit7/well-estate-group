/**
 * Saltleaf — Fitness Layout
 * Visual-first page with architectural floor plans
 * Branded with Saltleaf teal (#1a3e4c)
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import ZoomableImage from "@/components/ZoomableImage";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ACCENT = "#1a3e4c";

const floorPlans = [
  {
    src: "/saltleaf/level3-floorplan.jpg",
    title: "Level 3 — Fitness & Amenity Floor Plan",
    description: "Complete Level 3 amenity layout showing the fitness center positioning relative to the pool deck, spa, and resident lounge areas. The fitness zone is located in the southeast quadrant with direct pool deck access.",
    drawing: "A-003",
  },

];

const layoutQuestions = [
  {
    title: "Fitness Programming Model",
    description: "How does the fitness programming integrate with the physical space? Is this a branded partnership (like Equinox at Hudson Yards) or a white-label programming approach?",
    priority: "high",
  },
  {
    title: "Equipment Density vs. Experience",
    description: "Luxury residential fitness is moving away from equipment-dense layouts toward experience-driven spaces. How does London Bay want to balance cardio/strength equipment with open floor space for classes and personal training?",
    priority: "high",
  },
  {
    title: "Staffing & Programming Model",
    description: "Will the fitness center be staffed with full-time trainers, or is this a concierge model where residents book specialists? This fundamentally changes space requirements.",
    priority: "high",
  },
];

const spaceConsiderations = [
  {
    zone: "Cardio Zone",
    sqft: "~1,200 SF",
    notes: "Bay-facing with floor-to-ceiling glass. Treadmills, bikes, rowers with integrated screens. Consider Technogym Artis line for luxury aesthetic.",
  },
  {
    zone: "Strength Training",
    sqft: "~1,800 SF",
    notes: "Free weights, cable machines, functional training rig. Separate from cardio for noise isolation. Premium flooring (rubber + wood hybrid).",
  },
  {
    zone: "Group Fitness Studio",
    sqft: "~1,000 SF",
    notes: "Flexible space for group classes, yoga, Pilates, barre. Sprung floor, mirror wall, AV system for virtual classes. Sound-isolated.",
  },
  {
    zone: "Recovery & Stretch",
    sqft: "~600 SF",
    notes: "Foam rolling, stretching, Hyperice/Theragun stations. Transition zone between fitness and spa. Calm, low-light environment.",
  },
  {
    zone: "Personal Training",
    sqft: "~500 SF",
    notes: "Semi-private training bays (2-3). Booked sessions with resident trainers. Includes TRX, kettlebells, battle ropes, plyo boxes.",
  },
  {
    zone: "Outdoor Fitness",
    sqft: "~800 SF",
    notes: "Pool deck-adjacent outdoor training area. Functional equipment, yoga lawn, movement garden. Shaded and weather-protected.",
  },
];



export default function FitnessLayout() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 02"
        title={<>Fitness Layout</>}
        description="Fitness programming and spatial design for the Saltleaf Tower One amenity level. Reviewing the floor plan, zone allocations, and integration with the broader wellness ecosystem."
        accentColor={ACCENT}
        stats={[
          { label: "Primary Level", value: "3" },
          { label: "Est. Fitness Area", value: "~5,900 SF" },
          { label: "Zones", value: "6" },
          { label: "Status", value: "Review" },
        ]}
      />

      {/* Floor Plans */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Floor Plans
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Architectural Context
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              From the 100% Schematic Design set. Click to zoom and identify fitness zone boundaries within the amenity floor.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {floorPlans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: `${ACCENT}33` }}
              >
                <ZoomableImage src={plan.src} alt={plan.title} maxHeight="700px" className="bg-[#FAFAF8]" />
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-medium text-black">{plan.title}</h3>
                    <p className="font-body text-sm text-black/60 mt-1 leading-relaxed max-w-3xl">{plan.description}</p>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-1 rounded shrink-0" style={{ color: `${ACCENT}B3`, backgroundColor: `${ACCENT}0F` }}>
                    {plan.drawing}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Space Allocation */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container max-w-6xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Space Planning
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Proposed Zone Allocation
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {spaceConsiderations.map((zone, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-2xl border bg-white p-6 transition-colors"
                style={{ borderColor: `${ACCENT}26` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${ACCENT}4D`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${ACCENT}26`; }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono font-semibold text-xs" style={{ color: ACCENT }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-sm font-semibold" style={{ color: ACCENT }}>{zone.sqft}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-black mb-2">{zone.zone}</h3>
                <p className="font-body text-xs text-black/60 leading-relaxed">{zone.notes}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Discussion Points */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono font-semibold text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Key Questions
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8 text-black">
              Discussion Points
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4">
              {layoutQuestions.map((q, i) => (
                <div key={i} className="p-6 rounded-xl border bg-white" style={{ borderColor: q.priority === 'high' ? `${ACCENT}4D` : `${ACCENT}26` }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono font-semibold text-xs" style={{ color: ACCENT }}>{String(i + 1).padStart(2, "0")}</span>
                    <h4 className="font-display text-base font-medium text-black">{q.title}</h4>
                    {q.priority === 'high' && (
                      <span className="px-2 py-0.5 rounded-full text-[8px] font-mono font-bold uppercase tracking-wider" style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}>Priority</span>
                    )}
                  </div>
                  <p className="font-body text-sm text-black/60 leading-relaxed pl-8">{q.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t" style={{ borderColor: `${ACCENT}1A` }}>
        <div className="container max-w-4xl flex items-center justify-between">
          <Link href="/longevity/saltleaf/longevity-suite">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4" /> Prev: Longevity Suite
            </a>
          </Link>
          <Link href="/longevity/saltleaf/level-3-wellness">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-black transition-colors">
              Next: Level 3 Wellness <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
