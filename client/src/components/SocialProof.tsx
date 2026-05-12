/**
 * SocialProof - Advisory board quotes and partner credibility section
 * Used on the About/Home pages to build investor confidence
 */
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const advisoryQuotes = [
  {
    quote: "The convergence of diagnostics, therapeutics, and personalized medicine creates a once-in-a-generation investment opportunity.",
    author: "Dr. Peter Diamandis",
    role: "Founder, XPRIZE & Fountain Life",
  },
  {
    quote: "Longevity medicine is transitioning from research to clinical practice — the companies that build the infrastructure will capture enormous value.",
    author: "Tony Robbins",
    role: "Investor & Bestselling Author",
  },
  {
    quote: "The future of healthcare is proactive, predictive, and personalized. Well Estate Group is building that future.",
    author: "Advisory Board",
    role: "Well Estate Group",
  },
];

const partnerLogos = [
  "Fountain Life",
  "XPRIZE",
  "Singularity University",
  "Platinum Clubs of America",
  "CMAA",
  "Troon",
  "One Spa World",
];

export function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F9F9F7] to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[10px] text-[#B8860B] tracking-[0.2em] uppercase mb-3 section-header-accent">
            Trusted By Industry Leaders
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0A0A0A]">
            Backed by Visionaries in Health & Longevity
          </h3>
        </motion.div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {advisoryQuotes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-xl border border-[#B8860B]/40 bg-white h-full"
              style={{ boxShadow: "0 2px 12px rgba(184,134,11,0.04)" }}
            >
              <Quote className="w-6 h-6 text-[#B8860B]/40 mb-4" />
              <p className="font-body text-sm text-[#0A0A0A]/75 leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="font-display text-sm font-semibold text-[#0A0A0A]">
                  {item.author}
                </p>
                <p className="font-body text-xs text-[#0A0A0A]/60 mt-0.5">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-[10px] text-[#0A0A0A]/50 tracking-[0.15em] uppercase mb-6">
            Strategic Partners & Network
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {partnerLogos.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="font-display text-sm md:text-base font-semibold text-[#0A0A0A]/50 hover:text-[#B8860B] transition-colors duration-300"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
