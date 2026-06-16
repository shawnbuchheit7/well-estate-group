/*
 * Longevity Franchise Portal — Embeds the Fountain Life International Franchise Portal
 * Full-screen iframe embed with seamless integration into the WEG site
 * Design: Matches site-wide luxury aesthetic with minimal chrome
 */

import { motion } from "framer-motion";
import { ArrowRight, Lock, Shield } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PORTAL_URL = "https://fountainfran-fruyeybc.manus.space";

export default function LongevityFranchisePortal() {
  return (
    <Layout section="longevity-franchise">
      {/* Minimal header bar */}
      <section className="pt-8 pb-4 bg-white border-b border-[#B8860B]/20">
        <div className="container px-6">
          <motion.div
            className="flex items-center justify-between"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <Link href="/longevity">
                <motion.div
                  className="inline-flex items-center gap-2 text-black/50 hover:text-[#B8860B] transition-colors cursor-pointer"
                  whileHover={{ x: -4 }}
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span className="font-body text-sm font-medium">Back</span>
                </motion.div>
              </Link>
              <div className="h-4 w-px bg-black/10" />
              <div>
                <h1 className="font-display text-xl font-medium text-black">
                  Franchise Partner Portal
                </h1>
                <p className="font-body text-xs text-black/50 mt-0.5">
                  Secure operations hub for Fountain Life franchise partners
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-black/40">
              <Shield className="w-4 h-4" />
              <span className="font-mono text-[10px] tracking-wider uppercase">Authenticated Access</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Full-height iframe embed */}
      <section className="relative">
        <iframe
          src={PORTAL_URL}
          className="w-full border-0"
          style={{ height: "calc(100vh - 140px)", minHeight: "700px" }}
          title="Fountain Life International Franchise Portal"
          allow="clipboard-write; clipboard-read"
          loading="eager"
        />
      </section>
    </Layout>
  );
}
