/*
 * LightHero - Premium luxury light hero section
 * Clean white background with subtle warm gradient, gold accents, serif typography
 * Supports optional brand logo display above the eyebrow
 */

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ReactNode } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

interface LightHeroStat {
  value: string;
  label: string;
  sublabel?: string;
}

interface LightHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  stats?: LightHeroStat[];
  children?: ReactNode;
  /** Optional brand logo URL displayed above the eyebrow */
  logoSrc?: string;
  /** Alt text for the logo */
  logoAlt?: string;
  /** Optional brand name displayed next to the logo */
  brandName?: string;
}

export default function LightHero({ eyebrow, title, description, stats, children, logoSrc, logoAlt, brandName }: LightHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle warm gradient overlay — pearl/cream tones */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FAFAF8 0%, #F7F6F3 40%, #FFFFFF 100%)",
        }}
      />

      {/* Refined geometric accent — thin gold lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left corner accent */}
        <svg className="absolute top-12 left-8 w-24 h-24 opacity-[0.08]" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="0" stroke="#C9A962" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="100" stroke="#C9A962" strokeWidth="1" />
        </svg>
        {/* Bottom-right corner accent */}
        <svg className="absolute bottom-12 right-8 w-24 h-24 opacity-[0.08]" viewBox="0 0 100 100">
          <line x1="0" y1="100" x2="100" y2="100" stroke="#C9A962" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="100" stroke="#C9A962" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Brand Logo + Name (optional) — dark pill for visibility */}
            {logoSrc && (
              <motion.div variants={fadeInUp} className="flex items-center justify-center mb-8">
                <div className="inline-flex items-center gap-4 bg-[#0A0A0A] rounded-2xl px-8 py-4 shadow-lg">
                  <motion.img
                    src={logoSrc}
                    alt={logoAlt || "Brand"}
                    className="h-10 w-auto object-contain brightness-[2] invert-0"
                    style={{ filter: "brightness(2) contrast(1.2)" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {brandName && (
                    <span className="font-display text-xl font-semibold tracking-wider text-white uppercase">
                      {brandName}
                    </span>
                  )}
                </div>
              </motion.div>
            )}

            {/* Eyebrow with gold line accents */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#C9A962]/40" />
              <span className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.25em] uppercase">
                {eyebrow}
              </span>
              <span className="w-8 h-[1px] bg-[#C9A962]/40" />
            </motion.div>

            {/* Title — elegant serif in black */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6 text-black leading-[1.1]"
            >
              {title}
            </motion.h1>

            {/* Gold accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-16 mx-auto bg-[#C9A962] mb-6"
            />

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-base md:text-lg text-black/65 leading-relaxed max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div
              className="flex justify-center gap-8 md:gap-16 mt-14"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="text-center">
                  <motion.div
                    className="font-display text-3xl md:text-4xl font-semibold text-black"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
                  >
                    <AnimatedCounter valueStr={stat.value} duration={1.8} />
                  </motion.div>
                  <p className="font-mono text-[10px] text-black/50 tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                  {stat.sublabel && (
                    <p className="font-body text-[9px] text-black/30 mt-1 italic">{stat.sublabel}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Optional extra content */}
          {children}
        </div>
      </div>

      {/* Bottom border — subtle separation */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
    </section>
  );
}
