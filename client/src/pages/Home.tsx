/*
 * Home Page - Longevity Ventures Landing
 * Rebuilt with dark immersive hero, strong contrast, and clear content hierarchy
 * Matches the GTM dark hero treatment for site-wide consistency
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const highlights = [
  { value: "$60M", label: "ARR Target" },
  { value: "5", label: "Flagship Centers" },
  { value: "$2B+", label: "Exit Potential" },
  { value: "3", label: "Revenue Streams" },
];

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
      {/* Dark Immersive Hero */}
      <section className="relative overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0 bg-[#0A0A0A]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="longevity-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A962" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#longevity-grid)" />
          </svg>
        </div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,169,98,0.1) 0%, transparent 70%)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,169,98,0.06) 0%, transparent 70%)" }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="relative z-10 py-28 md:py-36">
          <div className="container">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] as [number, number, number, number] }}
                className="mb-10"
              >
                <img
                  src="/images/logos/logo-icon-gold-outline.png"
                  alt="Well Estate Group"
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto"
                  style={{ filter: "drop-shadow(0 10px 30px rgba(184, 150, 62, 0.4))" }}
                />
              </motion.div>

              <motion.span
                variants={fadeInUp}
                className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase"
              >
                Pillar II
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mt-4 mb-6 text-white leading-[1.05]"
              >
                Longevity Ventures
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[2px] w-20 mx-auto bg-[#C9A962] mb-6"
              />
              <motion.p
                variants={fadeInUp}
                className="font-body text-base md:text-lg text-white/50 leading-relaxed max-w-3xl mx-auto"
              >
                A premium longevity center concept delivering cutting-edge diagnostics, therapeutics,
                and personalized wellness programs. Designed for high-net-worth individuals seeking
                the most advanced health optimization available.
              </motion.p>
            </motion.div>

            {/* Highlight Stats */}
            <motion.div
              className="flex justify-center gap-8 md:gap-16 mt-14"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {highlights.map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="text-center">
                  <motion.p
                    className="font-display text-2xl md:text-4xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] as [number, number, number, number] }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="font-mono text-[10px] text-white/30 tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex justify-center mt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-[#C9A962]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Section Directory */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Business Plan
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Explore the Plan
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/50 max-w-2xl mx-auto">
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
                className="group p-6 rounded-2xl border border-black/[0.08] bg-white hover:border-[#C9A962]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-black/25 tracking-wider uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <motion.span
                    className="text-[#C9A962] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    →
                  </motion.span>
                </div>
                <h3 className="font-display text-lg font-medium text-black mb-2">
                  {section.title}
                </h3>
                <p className="font-body text-sm text-black/45 leading-relaxed">
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
