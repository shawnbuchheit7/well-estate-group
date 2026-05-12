/*
 * DarkHero - Reusable immersive dark hero section
 * Matches the unified dark hero treatment for visual consistency
 * Uses AnimatedCounter for stat values that count up on view
 */

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ReactNode } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

interface DarkHeroStat {
  value: string;
  label: string;
}

interface DarkHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  stats?: DarkHeroStat[];
  children?: ReactNode;
  darkFade?: boolean;
}

export default function DarkHero({ eyebrow, title, description, stats, children, darkFade = false }: DarkHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Dark background with gradient mesh */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dark-hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#B8860B" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dark-hero-grid)" />
        </svg>
      </div>
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,169,98,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,169,98,0.05) 0%, transparent 70%)" }}
        animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase"
            >
              {eyebrow}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mt-4 mb-6 text-white leading-[1.1]"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-16 mx-auto bg-[#B8860B] mb-6"
            />
            <motion.p
              variants={fadeInUp}
              className="font-body text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Stats with Animated Counters */}
          {stats && stats.length > 0 && (
            <motion.div
              className="flex justify-center gap-8 md:gap-16 mt-12"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="text-center">
                  <motion.div
                    className="font-display text-3xl md:text-4xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
                  >
                    <AnimatedCounter valueStr={stat.value} duration={1.8} />
                  </motion.div>
                  <p className="font-mono text-[10px] text-white/55 tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Optional extra content */}
          {children}
        </div>
      </div>

      {/* Bottom fade — extended for smooth transition */}
      <div className={`absolute bottom-0 left-0 right-0 h-48 ${darkFade ? '' : ''}`} style={{ background: darkFade ? 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.8) 30%, rgba(10,10,10,0.3) 60%, transparent 100%)' : 'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.15) 75%, transparent 100%)' }} />
    </section>
  );
}
