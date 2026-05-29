/*
 * Home Page - Longevity Ventures Luxury Business Model
 * White/cream premium design matching the rest of the site
 * Uses LightHero for consistent page header treatment
 */

import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const sections = [
  { title: "About", desc: "The vision behind Longevity Ventures and the market opportunity", path: "/longevity/about" },
  { title: "Opportunity", desc: "Market size, growth drivers, and competitive landscape", path: "/longevity/opportunity" },
  { title: "Memberships", desc: "Tiered membership model — Elite, Premier, and Essential", path: "/longevity/memberships" },
  { title: "Therapeutics", desc: "Clinical protocols, treatment modalities, and wellness services", path: "/longevity/therapeutics" },
  { title: "Technology", desc: "AI-powered diagnostics, wearable integration, and data platform", path: "/longevity/technology" },
  { title: "Projections", desc: "Financial projections, unit economics, and growth trajectory", path: "/longevity/projections" },
  { title: "Team", desc: "Leadership team, advisors, and clinical board", path: "/longevity/team" },
  { title: "FAQ", desc: "Frequently asked questions about the business model", path: "/longevity/faq" },
];

export default function Home() {
  return (
    <Layout>
      <LightHero
        eyebrow="Luxury Business Model"
        title={<>Longevity Center<br /><em className="italic font-light">Luxury Business Model</em></>}
        description="A premium longevity center concept delivering cutting-edge diagnostics, therapeutics, and personalized wellness programs. Designed for high-net-worth individuals seeking the most advanced health optimization available."
        stats={[
          { value: "$60M", label: "ARR Per Center" },
          { value: "5", label: "Flagship Centers" },
          { value: "$2B+", label: "Exit Potential" },
          { value: "3", label: "Revenue Streams" },
        ]}
      />

      {/* Section Directory */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Business Plan
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mt-3 mb-3 text-black">
              Explore the Plan
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/65 max-w-2xl mx-auto">
              Navigate through each section of the Longevity Ventures business plan using the tabs above
              or the directory below.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {sections.map((section, i) => (
              <motion.a
                key={i}
                href={section.path}
                variants={fadeInUp}
                className="group p-6 rounded-xl border border-[#B8860B]/55 bg-white hover:border-[#B8860B]/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-black/25 tracking-wider uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <motion.span
                    className="text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    →
                  </motion.span>
                </div>
                <h3 className="font-display text-lg font-medium text-black mb-2">
                  {section.title}
                </h3>
                <p className="font-body text-sm text-black/60 leading-relaxed">
                  {section.desc}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
