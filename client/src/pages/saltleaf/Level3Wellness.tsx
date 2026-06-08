/**
 * Saltleaf — Level 3 Wellness Areas Detail Page
 * Locker Rooms, Hot/Cold Therapy & Vitality Pool
 */

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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

const thermalDesign = [
  { element: "Steam Rooms", temp: "110-115°F", duration: "10-15 min", benefit: "Cardiovascular, detoxification" },
  { element: "Dry Sauna", temp: "170-190°F", duration: "15-20 min", benefit: "Heat shock proteins, recovery" },
  { element: "Cold Plunge", temp: "38-45°F", duration: "2-5 min", benefit: "Inflammation, mental clarity" },
  { element: "Vitality Pool", temp: "92-96°F", duration: "15-30 min", benefit: "Relaxation, hydrotherapy" },
];

export default function Level3Wellness() {
  return (
    <Layout section="longevity-saltleaf">
      <LightHero
        eyebrow="Agenda Item 04"
        title={<>Level 3 Wellness Areas</>}
        description="Reviewed the full Level 3 amenity floor including fitness, his/her locker rooms with hot/cold therapy, and vitality pool. Prepared feedback and recommendations for discussion."
        stats={[
          { label: "Areas", value: "5+" },
          { label: "Thermal", value: "4 Types" },
          { label: "Designer", value: "Thermal Collective" },
        ]}
      />

      {/* Wellness Areas */}
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
              Level 3 Amenity Floor
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
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="rounded-2xl border border-[#B8860B]/20 bg-white overflow-hidden">
              <div className="grid grid-cols-4 gap-0 border-b border-[#B8860B]/10 p-4 bg-[#FAFAF8]">
                <span className="font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Element</span>
                <span className="font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Temperature</span>
                <span className="font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Duration</span>
                <span className="font-mono text-[9px] text-black/50 tracking-[0.12em] uppercase font-semibold">Primary Benefit</span>
              </div>
              {thermalDesign.map((item, i) => (
                <div key={i} className={`grid grid-cols-4 gap-0 p-4 ${i < thermalDesign.length - 1 ? 'border-b border-[#B8860B]/10' : ''}`}>
                  <span className="font-body text-sm font-medium text-black">{item.element}</span>
                  <span className="font-body text-sm text-black/65">{item.temp}</span>
                  <span className="font-body text-sm text-black/65">{item.duration}</span>
                  <span className="font-body text-sm text-black/65">{item.benefit}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Approach */}
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
          <Link href="/longevity/saltleaf">
            <a className="inline-flex items-center gap-2 font-body text-sm text-black/65 hover:text-[#B8860B] transition-colors">
              Back to Saltleaf Overview
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
