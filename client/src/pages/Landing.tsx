/**
 * Landing Page - Well Estate Group
 * Front page with four large tiles providing access to different sections
 * Design: Ultra-premium luxury aesthetic — white, cream, gold accents
 * Matches the rest of the site's light premium design system
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, FlaskConical, TrendingUp } from "lucide-react";
import { DarkModeToggle } from "@/components/PresentationMode";

const pillars = [
  {
    num: "I",
    title: "Go-To-Market",
    description:
      "Strategic market entry and growth acceleration for innovative wellness & fitness brands",
    href: "/gtm",
    icon: "chart",
  },
  {
    num: "II",
    title: "Longevity Ventures",
    description:
      "Business planning and investment strategy for physician-led longevity and regenerative medicine centers",
    href: "/longevity",
    icon: "heart",
  },
  {
    num: "III",
    title: "Product Intelligence",
    description:
      "Independent testing, clinical evaluation, and development advisory for next-generation wellness and longevity products",
    href: "/product-intelligence",
    icon: "flask",
  },
  {
    num: "IV",
    title: "Venture & Product Capital",
    description:
      "Strategic investment in emerging fitness and wellness products poised to disrupt the consumer health market",
    href: "/venture-capital",
    icon: "trending",
  },
];

function PillarIcon({ type }: { type: string }) {
  const cls = "w-6 h-6 md:w-7 md:h-7 text-[#B8860B]";
  switch (type) {
    case "chart":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      );
    case "heart":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "flask":
      return <FlaskConical className={cls} strokeWidth={1.5} />;
    case "trending":
      return <TrendingUp className={cls} strokeWidth={1.5} />;
    default:
      return null;
  }
}

export default function Landing() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-white">
      {/* PRESENT toggle — top right */}
      <div className="absolute top-6 right-6 z-20">
        <DarkModeToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        
        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="flex flex-col items-center mb-16 md:mb-20"
        >
          {/* Logo */}
          <motion.div
            initial={{ rotateY: 0, scale: 0.1, opacity: 0 }}
            animate={{ rotateY: 1440, scale: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              rotateY: { duration: 2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
              scale: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 0.5, ease: "easeOut" },
            }}
            style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
            className="relative"
          >
            <motion.img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png"
              alt="Well Estate Group"
              className="w-24 h-24 md:w-32 md:h-32 cursor-pointer relative z-10"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(184, 150, 62, 0.15))",
              }}
              whileHover={{
                scale: 1.06,
                filter: "drop-shadow(0 8px 24px rgba(184, 150, 62, 0.25))",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="font-display text-2xl md:text-3xl font-semibold mt-8 text-[#0A0A0A] tracking-[0.25em]"
          >
            WELL ESTATE GROUP
          </motion.h1>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="font-body text-xs md:text-sm text-[#0A0A0A]/50 tracking-[0.12em] mt-5"
          >
            Consulting Services in Fitness, Wellness & Longevity
          </motion.p>
        </motion.div>

        {/* Four Pillar Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full max-w-6xl"
        >
          {pillars.map((pillar, i) => (
            <Link key={pillar.num} href={pillar.href}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-[#0A0A0A]/[0.08] bg-white cursor-pointer h-full"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03), 0 4px 20px rgba(0,0,0,0.04)",
                }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(201,169,98,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.3 + i * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                }}
              >
                {/* Content */}
                <div className="relative p-8 md:p-9 flex flex-col items-center text-center min-h-[300px] md:min-h-[340px] justify-center">
                  {/* Pillar Number */}
                  <span
                    className="font-mono text-[10px] text-[#0A0A0A]/35 tracking-[0.3em] mb-5 group-hover:text-[#B8860B] transition-colors duration-400"
                  >
                    PILLAR {pillar.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="mb-7 w-12 h-12 rounded-lg border border-[#B8860B]/50 flex items-center justify-center bg-[#B8860B]/[0.04] group-hover:border-[#B8860B]/50 group-hover:bg-[#B8860B]/[0.08] transition-all duration-400"
                  >
                    <PillarIcon type={pillar.icon} />
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0A0A0A] mb-3 leading-tight tracking-tight">
                    {pillar.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="font-body text-[13px] text-[#0A0A0A]/50 leading-relaxed max-w-[240px] mb-8">
                    {pillar.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#B8860B] group-hover:text-[#B8963E] transition-colors tracking-[0.1em] uppercase">
                    <span>Enter</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Trusted By / Industry Reach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mt-20 md:mt-28 w-full max-w-5xl"
        >
          <p className="font-mono text-[10px] text-[#0A0A0A]/40 tracking-[0.2em] uppercase text-center mb-8">
            Industry Reach
          </p>
          
          {/* Logo-style text */}
          <div className="relative overflow-hidden py-4">
            <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4">
              {[
                "Platinum Clubs of America",
                "CMAA",
                "PGA",
                "NFL",
                "MLB",
                "NCAA",
                "Troon",
                "NACAD",
                "One Spa World",
                "GSA",
              ].map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 + i * 0.08 }}
                  className="font-display text-sm md:text-base font-semibold text-[#0A0A0A]/50 hover:text-[#B8860B] transition-colors duration-300 whitespace-nowrap"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* About / Leadership Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-16 md:mt-20 w-full max-w-4xl"
        >
          <div className="text-center mb-10">
            <p className="font-mono text-[10px] text-[#B8860B] tracking-[0.2em] uppercase mb-3">
              Who We Are
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0A0A0A] mb-4">
              Built on Decades of Industry Leadership
            </h3>
            <p className="font-body text-sm text-[#0A0A0A]/55 leading-relaxed max-w-2xl mx-auto">
              Well Estate Group brings together senior executives from the world's leading fitness, 
              wellness, and hospitality brands — delivering institutional-grade consulting to companies 
              ready to scale.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "30+", label: "Years Combined Experience" },
              { value: "8", label: "Macro Verticals" },
              { value: "4", label: "Global Regions" },
              { value: "144+", label: "Vessel Network" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.4 + i * 0.1 }}
                whileHover={{ y: -3 }}
                className="text-center p-5 rounded-xl border border-[#0A0A0A]/[0.08] bg-[#F9F9F7] hover:border-[#B8860B]/60 transition-all duration-300"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                }}
              >
                <p className="font-display text-2xl font-semibold text-[#0A0A0A]">{stat.value}</p>
                <p className="font-body text-[11px] text-[#0A0A0A]/50 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="font-body text-[10px] text-[#0A0A0A]/30 tracking-wider">
            &copy; 2026 Well Estate Group. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
