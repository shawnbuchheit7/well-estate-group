/*
 * LightHero - Super Premium luxury light hero section
 * Clean white background with subtle warm gradient, accent color lines, refined serif typography
 * Enhanced: Sharper contrast, bolder stats, more architectural spacing
 * Supports accentColor prop for brand-specific theming (WEG gold default, Saltleaf teal, etc.)
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
  title: string | ReactNode;
  description: string;
  stats?: LightHeroStat[];
  children?: ReactNode;
  /** Optional brand logo URL displayed above the eyebrow */
  logoSrc?: string;
  /** Alt text for the logo */
  logoAlt?: string;
  /** Optional brand name displayed next to the logo */
  brandName?: string;
  /** Accent color for lines, eyebrow text, and decorative elements. Defaults to WEG gold #B8860B */
  accentColor?: string;
}

export default function LightHero({ eyebrow, title, description, stats, children, logoSrc, logoAlt, brandName, accentColor = "#B8860B" }: LightHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle warm gradient overlay — pearl/cream tones */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FAFAF8 0%, #F8F7F4 50%, #FFFFFF 100%)",
        }}
      />

      {/* Refined geometric accent — thin lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left corner accent */}
        <svg className="absolute top-16 left-10 w-20 h-20 opacity-[0.06]" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="80" y2="0" stroke={accentColor} strokeWidth="0.75" />
          <line x1="0" y1="0" x2="0" y2="80" stroke={accentColor} strokeWidth="0.75" />
        </svg>
        {/* Bottom-right corner accent */}
        <svg className="absolute bottom-16 right-10 w-20 h-20 opacity-[0.06]" viewBox="0 0 100 100">
          <line x1="20" y1="100" x2="100" y2="100" stroke={accentColor} strokeWidth="0.75" />
          <line x1="100" y1="20" x2="100" y2="100" stroke={accentColor} strokeWidth="0.75" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 py-14 md:py-20">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Brand Logo + Name (optional) — dark pill for visibility */}
            {logoSrc && (
              <motion.div variants={fadeInUp} className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center gap-4 bg-[#0A0A0A] rounded-xl px-8 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
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

            {/* Eyebrow with accent line accents */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-4">
              <span className="w-10 h-[1px]" style={{ backgroundColor: `${accentColor}80` }} />
              <span className="font-mono font-semibold text-[11px] tracking-[0.3em] uppercase" style={{ color: accentColor }}>
                {eyebrow}
              </span>
              <span className="w-10 h-[1px]" style={{ backgroundColor: `${accentColor}80` }} />
            </motion.div>

            {/* Title — elegant serif in black, bolder */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 text-black leading-[1.05] tracking-tight"
            >
              {title}
            </motion.h1>

            {/* Accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-14 mx-auto mb-5"
              style={{ backgroundColor: accentColor }}
            />

            {/* Description — slightly darker for better readability */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-base md:text-lg text-black/75 leading-relaxed max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Stats — sharper, more defined */}
          {stats && stats.length > 0 && (
            <motion.div
              className="flex justify-center gap-10 md:gap-16 mt-10"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="text-center">
                  <motion.div
                    className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
                  >
                    <AnimatedCounter valueStr={stat.value} duration={1.8} />
                  </motion.div>
                  <p className="font-mono text-[10px] text-black/65 tracking-[0.15em] uppercase mt-2 font-medium">
                    {stat.label}
                  </p>
                  {stat.sublabel && (
                    <p className="font-body text-[9px] text-black/65 mt-1 italic">{stat.sublabel}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Optional extra content */}
          {children}
        </div>
      </div>

      {/* Bottom border — crisper separation */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ backgroundImage: `linear-gradient(to right, transparent, ${accentColor}66, transparent)` }} />
    </section>
  );
}
