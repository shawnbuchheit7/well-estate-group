/*
 * ScrollReveal - Scroll-triggered animation wrapper
 * Uses Intersection Observer via Framer Motion's whileInView
 * Provides consistent scroll-triggered animations across the site
 */

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "scaleInBounce";
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleInBounce: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  once = true,
  margin = "-80px",
}: ScrollRevealProps) {
  const ease = (variant === "scaleInBounce" 
    ? [0.34, 1.56, 0.64, 1] 
    : [0.25, 0.46, 0.45, 0.94]) as [number, number, number, number];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants[variant]}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container for scroll-triggered staggered children */
interface ScrollStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  margin?: string;
}

export function ScrollStagger({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
  margin = "-80px",
}: ScrollStaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Individual stagger child item */
interface ScrollStaggerItemProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "scaleInBounce";
  duration?: number;
}

export function ScrollStaggerItem({
  children,
  className = "",
  variant = "fadeUp",
  duration = 0.6,
}: ScrollStaggerItemProps) {
  const ease = (variant === "scaleInBounce" 
    ? [0.34, 1.56, 0.64, 1] 
    : [0.25, 0.46, 0.45, 0.94]) as [number, number, number, number];

  return (
    <motion.div
      className={className}
      variants={{
        ...variants[variant],
        visible: {
          ...variants[variant].visible,
          transition: { duration, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
