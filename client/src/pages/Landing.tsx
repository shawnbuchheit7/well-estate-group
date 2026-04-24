/**
 * Landing Page - Well Estate Group
 * Front page with four large tiles providing access to different sections
 * Design: Ultra-premium luxury aesthetic — black, grey, white, gold
 * FINAL: Dark hero, global PRESENT toggle, enhanced contrast
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
  const cls = "w-6 h-6 md:w-7 md:h-7 text-[#C9A962]";
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
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Dark immersive background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="landing-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A962" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#landing-grid)" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,169,98,0.07) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,169,98,0.05) 0%, transparent 70%)" }}
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[50%] left-[50%] w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(201,169,98,0.03) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* PRESENT toggle — top right */}
      <div className="absolute top-6 right-6 z-20">
        <DarkModeToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        
        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="flex flex-col items-center mb-16 md:mb-20"
        >
          {/* Animated Logo with glow ring */}
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
            {/* Pulsing glow ring behind logo */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(201,169,98,0.2) 0%, transparent 70%)",
                transform: "scale(2.5)",
              }}
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [2.2, 2.6, 2.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png"
              alt="Well Estate Group"
              className="w-28 h-28 md:w-36 md:h-36 cursor-pointer relative z-10"
              style={{
                filter: "drop-shadow(0 8px 24px rgba(184, 150, 62, 0.4))",
              }}
              whileHover={{
                scale: 1.06,
                filter: "drop-shadow(0 16px 40px rgba(184, 150, 62, 0.6))",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="font-display text-2xl md:text-3xl font-semibold mt-8 text-white"
          >
            WELL ESTATE GROUP
          </motion.h1>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="mt-4 h-[2px] w-20 bg-gradient-to-r from-transparent via-[#C9A962] to-transparent"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="font-body text-xs md:text-sm text-white/50 tracking-[0.15em] mt-5"
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
                className="group relative overflow-hidden rounded-2xl border border-white/[0.18] bg-white/[0.05] backdrop-blur-sm cursor-pointer h-full"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)",
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 50px rgba(201,169,98,0.12), inset 0 0 0 1px rgba(201,169,98,0.15)",
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
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#C9A962]/0 via-[#C9A962]/0 to-[#C9A962]/0 group-hover:from-[#C9A962]/[0.03] group-hover:via-transparent group-hover:to-[#C9A962]/[0.05] transition-all duration-700" />

                {/* Content */}
                <div className="relative p-8 md:p-9 flex flex-col items-center text-center min-h-[300px] md:min-h-[320px] justify-center">
                  {/* Pillar Number */}
                  <motion.span
                    className="font-mono text-[10px] text-white/50 tracking-[0.3em] mb-4 group-hover:text-[#C9A962]/80 transition-colors duration-500"
                  >
                    PILLAR {pillar.num}
                  </motion.span>

                  {/* Icon */}
                  <motion.div
                    className="mb-6 w-16 h-16 rounded-full border border-[#C9A962]/25 flex items-center justify-center group-hover:border-[#C9A962]/60 group-hover:bg-[#C9A962]/[0.08] transition-all duration-500"
                  >
                    <PillarIcon type={pillar.icon} />
                  </motion.div>

                  {/* Title */}
                  <h2 className="font-display text-lg md:text-xl font-semibold text-white mb-3 leading-tight group-hover:text-white transition-colors">
                    {pillar.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="font-body text-xs text-white/60 leading-relaxed max-w-[220px] mb-7">
                    {pillar.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-body text-sm font-semibold text-[#C9A962] group-hover:text-[#D4B872] transition-colors tracking-wider">
                    <span>Enter</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A962] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                
                {/* Top-left corner accent */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#C9A962]/0 group-hover:bg-[#C9A962]/30 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/30 transition-all duration-500" />
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
          <p className="font-mono text-[10px] text-white/50 tracking-[0.2em] uppercase text-center mb-8">
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
                  className="font-display text-sm md:text-base font-semibold text-white/50 hover:text-[#C9A962]/80 transition-colors duration-300 whitespace-nowrap"
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
            <p className="font-mono text-[10px] text-[#C9A962] tracking-[0.2em] uppercase mb-3">
              Who We Are
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
              Built on Decades of Industry Leadership
            </h3>
            <p className="font-body text-sm text-white/55 leading-relaxed max-w-2xl mx-auto">
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
                className="text-center p-5 rounded-xl border border-white/[0.15] bg-white/[0.04] backdrop-blur-sm hover:border-white/[0.25] transition-colors duration-300"
              >
                <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                <p className="font-body text-[11px] text-white/50 mt-1">{stat.label}</p>
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
          <p className="font-body text-[10px] text-white/35 tracking-wider">
            &copy; 2026 Well Estate Group. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
