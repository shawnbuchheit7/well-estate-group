/**
 * NextPageCTA — Narrative flow component for bottom of each ZeroWheel page
 * Guides the client to the next section in the proposal
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface NextPageCTAProps {
  label: string;
  href: string;
}

export default function NextPageCTA({ label, href }: NextPageCTAProps) {
  return (
    <section className="py-12 bg-white border-t border-[#B8860B]/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-[10px] text-black/45 tracking-wider uppercase mb-3">Next</p>
          <Link href={href}>
            <motion.div
              whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[#B8860B]/40 bg-white hover:border-[#B8860B]/60 transition-all cursor-pointer"
            >
              <span className="font-display text-lg font-semibold text-black">{label}</span>
              <ArrowRight className="w-5 h-5 text-[#B8860B]" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
