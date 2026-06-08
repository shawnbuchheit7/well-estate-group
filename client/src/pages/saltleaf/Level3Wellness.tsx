/**
 * Saltleaf — Level 3 Wellness Areas
 * Visual-first page with architectural drawings and thermal design
 */

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import ImageLightbox from "@/components/ImageLightbox";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const floorPlans = [
  {
    src: "/saltleaf/level3-floorplan.jpg",
    title: "Level 3 — Full Amenity Floor Plan",
    description: "Complete Level 3 wellness floor showing locker rooms, vitality pool, spa treatment rooms, fitness center, and circulation paths. The thermal wellness areas (steam, sauna, cold plunge) are integrated within the his/her locker room zones.",
    drawing: "A-003",
  },
  {
    src: "/saltleaf/saltleaf-rendering.jpg",
    title: "Saltleaf Tower One — Exterior Context",
    description: "The Level 3 amenity podium sits at the base of the tower with direct Estero Bay waterfront access. The vitality pool and outdoor wellness areas benefit from unobstructed bay views to the west.",
    drawing: "Cover",
  },
];

const wellnessAreas = [
  {
    title: "His/Her Locker Rooms",
    subtitle: "Hot & Cold Therapy Integration",
    description: "Dedicated men's and women's locker rooms with integrated hot/cold therapy experiences. These spaces serve as the transition between fitness and relaxation, with thermal elements designed to enhance recovery.",
    details: [
      "Steam room and sauna in each locker room",
      "Cold plunge pools — individual or shared",
      "Hot/cold contrast therapy protocol support",
      "Premium finishes and spa-like atmosphere",
      "Adequate space for peak-hour capacity",
    ],
  },
  {
    title: "Vitality Pool",
    subtitle: "Hydrotherapy & Aquatic Wellness",
    description: "The vitality pool serves as a centerpiece of the Level 3 wellness experience. Designed by Thermal Collective, this space combines hydrotherapy, relaxation, and social wellness in an architecturally significant setting.",
    details: [
      "Hydrotherapy jets and zones for targeted recovery",
      "Temperature-controlled sections for contrast therapy",
      "Indoor/outdoor flow with Estero Bay views",
      "Designed by Thermal Collective — hydrotherapy specialists",
      "Programming potential: aquatic fitness, recovery protocols",
    ],
  },
  {
    title: "Overall Level 3 Flow",
    subtitle: "Resident Experience & Circulation",
    description: "The Level 3 amenity floor connects fitness, wellness, consultation, and relaxation into a cohesive resident experience. The flow between spaces is critical to creating a premium, intuitive journey.",
    details: [
      "Entry sequence: lobby → fitness → locker rooms → pool",
      "Longevity consultation suite accessibility from main corridor",
      "Beauty salon integration and adjacency",
      "Service corridors and back-of-house separation",
      "Wayfinding and visual connectivity between zones",
    ],
  },
];

const thermalDesign = [
  { element: "Steam Rooms", temp: "110-115°F", duration: "10-15 min", benefit: "Cardiovascular, detoxification" },
  { element: "Dry Sauna", temp: "170-190°F", duration: "15-20 min", benefit: "Heat shock proteins, recovery" },
  { element: "Cold Plunge", temp: "38-45°F", duration: "2-5 min", benefit: "Inflammation, mental clarity" },
  { element: "Vitality Pool", temp: "92-96°F", duration: "15-30 min", benefit: "Relaxation, hydrotherapy" },
];

const feedbackApproach = [
  {
    method: "Redlines on Drawings",
    description: "Marked-up architectural drawings with specific spatial and programming feedback.",
    status: "To follow after meeting",
  },
  {
    method: "Written Recommendations",
    description: "Detailed written feedback on each wellness area with specific suggestions and rationale.",
    status: "To follow after meeting",
  },
  {
    method: "In-Person Discussion",
    description: "Walk through key observations and recommendations with the London Bay team during the meeting.",
    status: "Tuesday, June 10",
  },
];

const keyQuestions = [
  "What is the total square footage allocated to thermal wellness (steam, sauna, cold plunge)?",
  "Are the locker rooms sized for peak-hour capacity with thermal elements running?",
  "What is Thermal Collective's design status — concept, SD, or DD?",
  "Is the vitality pool indoor, outdoor, or indoor/outdoor with retractable enclosure?",
  "How does the thermal circuit connect to the pool deck and fitness areas?",
  "What is the ventilation and MEP strategy for steam/sauna adjacency?",
  "Is there a dedicated relaxation lounge between thermal and pool areas?",
];

export default function Level3Wellness() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 04"
        title={<>Level 3 Wellness Areas</>}
        description="Complete review of the Level 3 amenity floor including locker rooms with hot/cold therapy, vitality pool by Thermal Collective, and overall circulation flow between wellness zones."
        stats={[
          { label: "Areas", value: "5+" },
          { label: "Thermal Types", value: "4" },
          { label: "Designer", value: "Thermal Collective" },
          { label: "Drawing", value: "A-003" },
        ]}
      />

      {/* Architectural Plans */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Architectural Plans
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Level 3 Wellness Floor
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/60 mt-3 max-w-2xl mx-auto">
              Click any plan to zoom and inspect the wellness area boundaries, thermal element locations, and circulation paths.
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
                className="rounded-2xl border border-[#B8860B]/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <ImageLightbox src={plan.src} alt={plan.title} className="bg-[#FAFAF8]">
                  <img
                    src={plan.src}
                    alt={plan.title}
                    className="w-full h-auto max-h-[600px] object-contain bg-[#FAFAF8]"
                  />
                </ImageLightbox>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-medium text-black">{plan.title}</h3>
                    <p className="font-body text-sm text-black/60 mt-1 leading-relaxed max-w-3xl">{plan.description}</p>
                  </div>
                  <span className="font-mono text-[10px] text-[#B8860B]/70 bg-[#B8860B]/[0.06] px-2 py-1 rounded shrink-0">
                    {plan.drawing}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wellness Areas */}
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
              Wellness Zones
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Key Wellness Areas
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {wellnessAreas.map((area, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-2xl border border-[#B8860B]/20 bg-white"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-mono text-[#B8860B] font-semibold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-medium text-black mb-1">{area.title}</h3>
                    <p className="font-mono text-[10px] text-black/40 tracking-[0.12em] uppercase">{area.subtitle}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-black/70 leading-relaxed mb-6 ml-10">{area.description}</p>
                <ul className="space-y-2 ml-10">
                  {area.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-black/60 font-body">
                      <span className="text-[#B8860B] mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Thermal Design Parameters */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Thermal Programming
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
              Hot/Cold Therapy Parameters
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 mt-4 max-w-2xl mx-auto">
              Recommended thermal element specifications for optimal longevity and recovery outcomes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="overflow-x-auto rounded-2xl border border-[#B8860B]/20 bg-white shadow-sm"
          >
            <table className="w-full text-left" style={{ minWidth: "600px" }}>
              <thead>
                <tr className="border-b border-[#B8860B]/10 bg-[#FAFAF8]">
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold whitespace-nowrap">Element</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold whitespace-nowrap">Temperature</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold whitespace-nowrap">Duration</th>
                  <th className="p-4 font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold whitespace-nowrap">Primary Benefit</th>
                </tr>
              </thead>
              <tbody>
                {thermalDesign.map((item, i) => (
                  <tr key={i} className={`${i < thermalDesign.length - 1 ? 'border-b border-[#B8860B]/5' : ''} hover:bg-[#B8860B]/[0.02] transition-colors`}>
                    <td className="p-4 font-body text-sm font-medium text-black">{item.element}</td>
                    <td className="p-4 font-mono text-sm text-[#B8860B] font-semibold">{item.temp}</td>
                    <td className="p-4 font-body text-sm text-black/65">{item.duration}</td>
                    <td className="p-4 font-body text-sm text-black/65">{item.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Key Questions */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
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
              Questions for the Meeting
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-3">
              {keyQuestions.map((q, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-[#B8860B]/15 bg-white">
                  <span className="font-mono text-[#B8860B] font-semibold text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-body text-sm text-black/70">{q}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Next Steps
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-4 mb-8 text-black">
              Feedback Delivery
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4">
              {feedbackApproach.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-[#B8860B]/15 bg-white">
                  <span className="font-mono text-[#B8860B] font-semibold text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-display text-base font-medium text-black">{item.method}</h4>
                      <span className="font-mono text-[9px] text-black/40 tracking-[0.12em] uppercase">{item.status}</span>
                    </div>
                    <p className="font-body text-sm text-black/65">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-[#B8860B]/10">
        <div className="container max-w-4xl flex items-center justify-between">
          <Link href="/longevity/saltleaf/fitness-layout">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Prev: Fitness Layout
            </a>
          </Link>
          <Link href="/longevity/saltleaf/wellness-consultants">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              Next: Wellness Consultants <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
