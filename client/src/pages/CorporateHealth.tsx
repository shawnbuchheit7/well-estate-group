/*
 * Corporate Executive Health Prospectus — WEG Branded
 * Full-viewport sections, dark premium theme, WEG typography (Playfair, DM Sans, Space Mono)
 * Gold accent (#B8860B), deep black backgrounds, elegant data presentation
 * Content: Fountain Life corporate program (WEG consulting showcase)
 */
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Check, X, ArrowRight } from "lucide-react";

// Animated counter component
function AnimatedStat({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{isInView ? count : 0}{suffix}</span>;
}

// Section navigation
const sections = [
  { id: "cover", label: "COVER" },
  { id: "thesis", label: "THESIS" },
  { id: "detect", label: "DETECT & REVERSE" },
  { id: "paradigm", label: "PARADIGM" },
  { id: "evidence", label: "EVIDENCE" },
  { id: "hallmarks", label: "HALLMARKS" },
  { id: "cases", label: "CASES" },
  { id: "platform", label: "PLATFORM" },
  { id: "therapeutics", label: "THERAPEUTICS" },
  { id: "membership", label: "MEMBERSHIP" },
  { id: "landscape", label: "LANDSCAPE" },
  { id: "implementation", label: "IMPLEMENTATION" },
  { id: "conviction", label: "CONVICTION" },
  { id: "cta", label: "GET STARTED" },
];

export default function CorporateHealth() {
  const [activeSection, setActiveSection] = useState("cover");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen relative">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#B8860B]/60 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#B8860B]" />
          </div>
          <span className="font-mono text-xs tracking-[0.2em] text-white/90 uppercase">Well Estate Group</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase hidden md:block">
          Corporate Executive Health Prospectus — Confidential
        </span>
        <span className="font-mono text-[10px] tracking-[0.15em] text-white/40">
          {String(sections.findIndex(s => s.id === activeSection) + 1).padStart(2, "0")} / <span className="text-[#B8860B]">{sections.find(s => s.id === activeSection)?.label}</span>
        </span>
      </header>

      {/* Fixed Side Navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`text-[9px] font-mono tracking-[0.15em] uppercase text-right px-3 py-1.5 rounded transition-all duration-300 ${
              activeSection === s.id
                ? "text-[#B8860B] bg-[#B8860B]/10"
                : "text-white/25 hover:text-white/50"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* ===== SECTION 01: COVER ===== */}
      <section id="cover" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-8 md:px-16 pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(184,134,11,0.08) 0%, transparent 60%)" }} />
        
        <div className="relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[1px] bg-[#B8860B]" />
              <span className="font-mono text-[11px] tracking-[0.25em] text-[#B8860B]/80 uppercase">
                Corporate Executive Health Prospectus · 2026
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8">
              Your Executives<br />
              Perform Better<br />
              <span className="text-[#B8860B] italic">When They're<br />Optimized.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="font-body text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-16">
              A briefing for Chief Human Resource Officers, CEOs, Total Rewards leaders, and benefits brokers on what precision executive health actually delivers — for the leaders your organization cannot afford to lose.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-12 border-t border-white/[0.08] pt-8">
              {[
                { label: "PREPARED BY", value: "Well Estate Group" },
                { label: "CLASSIFICATION", value: "Confidential" },
                { label: "YEAR", value: "2026" },
                { label: "PROGRAM", value: "Corporate Executive Health" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase block mb-1">{item.label}</span>
                  <span className="font-body text-sm text-white/80">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats sidebar */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-10 items-end">
          {[
            { value: "88%", label: "HIDDEN CORONARY PLAQUE" },
            { value: "3.4%", label: "EARLY CANCER SIGNALS" },
            { value: "15B+", label: "CLINICAL DATA POINTS" },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="font-display text-4xl lg:text-5xl font-light text-[#B8860B]/70">{stat.value}</div>
              <div className="font-mono text-[9px] tracking-[0.2em] text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ===== SECTION 02: EXECUTIVE THESIS ===== */}
      <section id="thesis" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">02 / EXECUTIVE THESIS</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-10">
              Healthier Executives<br />
              Make Better Decisions.<br />
              <span className="text-[#B8860B] italic">Measurably.</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  Cognitive sharpness, metabolic resilience, cardiovascular capacity, and hormonal balance are not wellness abstractions — they are the biological substrate of executive performance. When these systems are optimized, leaders think more clearly, recover faster, and sustain output under pressure.
                </p>
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  Fountain Life's corporate program gives your leadership team access to the most advanced precision health platform in the world — the same program used by elite athletes, founders, and heads of state. Not a perk. A performance investment.
                </p>
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  Organizations that invest in executive health report measurable improvements in retention, engagement, and leadership continuity — while protecting against the catastrophic cost of an unplanned departure.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <blockquote className="border-l-2 border-[#B8860B]/40 pl-6 mb-12">
                  <p className="font-display text-xl md:text-2xl font-light italic text-white/70 leading-relaxed">
                    "The most powerful thing we can do for organizational performance is optimize the biology of the people leading it."
                  </p>
                </blockquote>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/[0.06]">
              {[
                { value: "46%", title: "Reverse accelerated brain aging", desc: "Cognitive sharpness, processing speed, and decision quality are directly measurable biological outcomes." },
                { value: "55%", title: "Reduce white matter lesions", desc: "White matter integrity is the physical infrastructure of executive cognition." },
                { value: "35%", title: "Improve hippocampal volume", desc: "The hippocampus governs memory consolidation, learning, and stress regulation." },
                { value: "51%", title: "Restore metabolic health", desc: "Metabolic dysfunction is the silent driver of cognitive fatigue and energy collapse. Reversed in avg. 1.2 years." },
              ].map((stat) => (
                <div key={stat.title} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="font-display text-3xl font-light text-[#B8860B] mb-3">{stat.value}</div>
                  <div className="font-body text-sm font-medium text-white/80 mb-2">{stat.title}</div>
                  <div className="font-body text-xs text-white/40 leading-relaxed">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 03: DETECT & REVERSE ===== */}
      <section id="detect" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080c10] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">03 / DETECT & REVERSE</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-10">
              Find It Early.<br />
              <span className="text-[#B8860B] italic">Reverse It.</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  The most important thing about Fountain Life's data is not what it finds — it is what happens next. Conditions that would have progressed silently for years are identified early, when intervention is most effective and reversal is most achievable.
                </p>
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  Across cardiovascular health, metabolic function, brain performance, and cancer risk — Fountain Life members don't just receive findings. They receive precision protocols that measurably reverse what was found.
                </p>
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  This is the difference between a diagnostic event and a health operating system. Detection is the starting point. Optimization is the outcome.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <blockquote className="border-l-2 border-[#B8860B]/40 pl-6">
                  <p className="font-display text-xl md:text-2xl font-light italic text-white/70 leading-relaxed">
                    "Early detection without a path to reversal is just earlier bad news. We provide both."
                  </p>
                </blockquote>
              </motion.div>
            </div>

            {/* Detection Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "88%", label: "Show early coronary artery plaque", detail: "26% halt progression, 12% achieve regression. Asymptomatic at baseline." },
                { value: "3.4%", label: "Carry early cancer signals", detail: "Detected before clinical presentation via liquid biopsy and advanced imaging." },
                { value: "~1 in 4", label: "Accelerated brain aging", detail: "46% achieve reversal. 55% reduce white matter lesions. 35% improve hippocampal volume." },
                { value: "51%", label: "Metabolic dysfunction normalized", detail: "Prediabetes, insulin resistance, and fatty liver reversed through precision protocols within 1.2 years." },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#B8860B]/20 transition-colors duration-300">
                  <div className="font-display text-3xl md:text-4xl font-light text-[#B8860B] mb-4">{stat.value}</div>
                  <div className="font-body text-sm font-medium text-white/80 mb-2">{stat.label}</div>
                  <div className="font-body text-xs text-white/40 leading-relaxed">{stat.detail}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 04: PARADIGM SHIFT ===== */}
      <section id="paradigm" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">04 / PARADIGM SHIFT</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-10">
              From Reactive Medicine<br />
              <span className="text-[#B8860B] italic">to Precision Prevention.</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  Conventional medicine is designed to treat disease after it appears. Fountain Life is designed to prevent it from appearing at all — and to optimize the biology of your leadership team while they are still healthy.
                </p>
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  This is not a better annual physical. It is a fundamentally different model: a closed-loop health operating system that continuously detects, intervenes, monitors, and optimizes — year after year.
                </p>
                <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                  The result is not just healthier executives. It is executives who perform at a measurably higher level for measurably longer — with the organizational continuity that comes from a leadership team that is genuinely well.
                </p>
              </motion.div>
              <div />
            </div>

            {/* Health OS Diagram */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="text-center mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#B8860B]/60 uppercase">The Fountain Life Health OS</span>
              </div>
              
              {/* Central AI Node */}
              <div className="flex flex-col items-center mb-10">
                <div className="w-32 h-32 rounded-full border-2 border-[#B8860B]/40 flex flex-col items-center justify-center bg-[#B8860B]/[0.05]">
                  <span className="font-display text-lg font-light text-[#B8860B]">ZORI AI</span>
                  <span className="font-mono text-[8px] tracking-wider text-white/40 mt-1">15B+ DATA POINTS</span>
                </div>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { step: "DETECT", desc: "Imaging + Biomarkers" },
                  { step: "DIAGNOSE", desc: "AI Pattern Analysis" },
                  { step: "PRESCRIBE", desc: "Precision Protocols" },
                  { step: "TREAT", desc: "Therapeutics Access" },
                  { step: "MONITOR", desc: "Continuous Tracking" },
                ].map((item, i) => (
                  <div key={item.step} className="text-center p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <div className="font-mono text-[9px] tracking-[0.2em] text-[#B8860B]/60 mb-2">{String(i + 1).padStart(2, "0")}</div>
                    <div className="font-display text-sm font-medium text-white/90 mb-1">{item.step}</div>
                    <div className="font-body text-[11px] text-white/40">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 05: EVIDENCE ===== */}
      <section id="evidence" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080c10] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">05 / EVIDENCE</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-6">
              Measured Outcomes.<br />
              At Scale.<br />
              <span className="text-[#B8860B] italic">Verified.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="font-body text-[15px] text-white/50 max-w-3xl leading-[1.8] mb-12">
              The following data represents outcomes from Fountain Life's member population — over 8,000 members tracked longitudinally, with more than 15 billion clinical data points analyzed. These are not projections or population estimates. They are measured results.
            </motion.p>

            {/* Top Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              {[
                { value: "8,000+", label: "MEMBERS" },
                { value: "15B+", label: "DATA POINTS" },
                { value: "88%", label: "CORONARY PLAQUE FOUND" },
                { value: "3.4%", label: "EARLY CANCER SIGNALS" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-light text-[#B8860B]">{stat.value}</div>
                  <div className="font-mono text-[8px] tracking-[0.2em] text-white/35 mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Evidence Categories */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {/* Brain Performance */}
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="font-mono text-[9px] tracking-[0.2em] text-[#B8860B]/70 uppercase mb-6">Brain Performance</h3>
                <div className="space-y-4">
                  {[
                    { label: "Reverse brain aging", value: "46%" },
                    { label: "Reduce white matter lesions", value: "55%" },
                    { label: "Reduce deep white matter lesions", value: "56%" },
                    { label: "Improve hippocampal volume", value: "35%" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="font-body text-xs text-white/50">{item.label}</span>
                      <span className="font-display text-lg text-[#B8860B] font-light">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metabolic & Cardiovascular */}
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="font-mono text-[9px] tracking-[0.2em] text-[#B8860B]/70 uppercase mb-6">Metabolic & Cardiovascular</h3>
                <div className="space-y-4">
                  {[
                    { label: "Nutrient deficiencies resolved", value: "62.7%" },
                    { label: "Prediabetic normalize blood sugar", value: "51%" },
                    { label: "Liver fat improvement", value: "80%" },
                    { label: "Fatty liver normalized", value: "52%" },
                    { label: "Coronary plaque regression", value: "12.3%" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="font-body text-xs text-white/50">{item.label}</span>
                      <span className="font-display text-lg text-[#B8860B] font-light">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detection */}
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="font-mono text-[9px] tracking-[0.2em] text-[#B8860B]/70 uppercase mb-6">Detection at Scale</h3>
                <div className="space-y-4">
                  {[
                    { label: "Early coronary plaque", value: "88%" },
                    { label: "Early cancer signals", value: "3.4%" },
                    { label: "Hereditary disease risk", value: "15.6%" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="font-body text-xs text-white/50">{item.label}</span>
                      <span className="font-display text-lg text-[#B8860B] font-light">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="font-mono text-[9px] text-white/25 tracking-wider mt-8">
              Source: Fountain Life member outcomes data, January 2026. All figures represent real-world longitudinal member results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 06: HALLMARKS OF AGING ===== */}
      <section id="hallmarks" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">06 / THE SCIENCE</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-6">
              The 12 Hallmarks<br />
              <span className="text-[#B8860B] italic">of Aging.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="font-body text-[15px] text-white/50 max-w-3xl leading-[1.8] mb-6">
              In 2023, López-Otín et al. published the definitive framework for understanding biological aging in <em>Cell</em> — identifying 12 distinct molecular mechanisms that drive disease, decline, and death.
            </motion.p>
            <motion.p variants={fadeInUp} className="font-body text-[15px] text-white/50 max-w-3xl leading-[1.8] mb-12">
              Fountain Life's APEX program is the only executive health platform designed to assess, monitor, and intervene across all 12 hallmarks — using 22 diagnostic modalities and 50+ targeted biomarkers.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="flex gap-12 mb-14">
              {[
                { value: "22", label: "DIAGNOSTIC MODALITIES" },
                { value: "50+", label: "TARGETED BIOMARKERS" },
                { value: "248", label: "CLINICAL CITATIONS" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl text-[#B8860B] font-light">{stat.value}</div>
                  <div className="font-mono text-[8px] tracking-[0.2em] text-white/30 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Hallmarks Grid */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: "Primary Hallmarks",
                  subtitle: "Causes of cellular damage",
                  items: ["Genomic Instability", "Telomere Attrition", "Epigenetic Alterations", "Loss of Proteostasis"]
                },
                {
                  category: "Antagonistic Hallmarks",
                  subtitle: "Compensatory responses gone wrong",
                  items: ["Disabled Macroautophagy", "Deregulated Nutrient Sensing", "Mitochondrial Dysfunction", "Cellular Senescence"]
                },
                {
                  category: "Integrative Hallmarks",
                  subtitle: "Systemic decline",
                  items: ["Stem Cell Exhaustion", "Altered Intercellular Communication", "Chronic Inflammation", "Dysbiosis"]
                },
              ].map((group) => (
                <div key={group.category} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="font-display text-lg font-medium text-white/90 mb-1">{group.category}</h3>
                  <p className="font-mono text-[9px] tracking-wider text-white/30 mb-5">{group.subtitle}</p>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B]/50" />
                        <span className="font-body text-sm text-white/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 07: CASE STUDIES ===== */}
      <section id="cases" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080c10] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">07 / CASE STUDIES</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-12">
              Real Findings.<br />
              <span className="text-[#B8860B] italic">Real Outcomes.</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  role: "Founder & CEO",
                  age: "52",
                  domain: "Cardiovascular",
                  finding: "Significant coronary artery plaque on CCTA — zero symptoms. Normal annual physical would have missed entirely.",
                  outcome: "Preventive cardiology intervention initiated. Avoided cardiac event within 3-5 years.",
                  severity: "Critical"
                },
                {
                  role: "CFO",
                  age: "48",
                  domain: "Metabolic",
                  finding: "Advanced insulin resistance and early fatty liver disease. HbA1c trending toward diabetic threshold.",
                  outcome: "Precision metabolic protocol. Blood sugar normalized within 8 months. Liver fat reduced 60%.",
                  severity: "High"
                },
                {
                  role: "Board Director",
                  age: "61",
                  domain: "Oncology",
                  finding: "Multi-cancer early detection flagged signal. Confirmed Stage 1 colorectal — zero symptoms.",
                  outcome: "Early-stage intervention. Complete remission. 5-year survival >95% vs. <15% if found at Stage 4.",
                  severity: "Critical"
                },
                {
                  role: "CHRO",
                  age: "45",
                  domain: "Brain Health",
                  finding: "Accelerated brain aging. White matter lesions. Declining hippocampal volume on volumetric MRI.",
                  outcome: "Neuroprotective protocol. 46% reversal in brain age markers within 18 months.",
                  severity: "Moderate"
                },
                {
                  role: "COO",
                  age: "55",
                  domain: "Genomics",
                  finding: "Hereditary cardiovascular risk (CHIP mutation). Invisible to standard testing.",
                  outcome: "Aggressive preventive protocol. Continuous monitoring. Risk trajectory fundamentally altered.",
                  severity: "High"
                },
              ].map((c) => (
                <div key={c.role} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#B8860B]/20 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-display text-base font-medium text-white/90">{c.role}</span>
                      <span className="font-mono text-[10px] text-white/30 ml-2">Age {c.age}</span>
                    </div>
                    <span className={`font-mono text-[8px] tracking-[0.15em] uppercase px-2 py-1 rounded ${
                      c.severity === "Critical" ? "bg-red-500/10 text-red-400/70" :
                      c.severity === "High" ? "bg-orange-500/10 text-orange-400/70" :
                      "bg-yellow-500/10 text-yellow-400/70"
                    }`}>{c.severity}</span>
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.15em] text-[#B8860B]/60 uppercase mb-3">{c.domain}</div>
                  <p className="font-body text-xs text-white/50 leading-relaxed mb-3">{c.finding}</p>
                  <div className="border-t border-white/[0.06] pt-3">
                    <p className="font-body text-xs text-white/70 leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 08: PLATFORM ===== */}
      <section id="platform" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">08 / PLATFORM</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-12">
              The Most Advanced<br />
              Diagnostic Platform<br />
              <span className="text-[#B8860B] italic">Available.</span>
            </motion.h2>

            {/* Platform Pillars */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { title: "Zori AI", desc: "Proprietary AI platform. 15B+ data points. Identifies patterns invisible to individual physicians. Global Tech Award, 2025." },
                { title: "Longitudinal Monitoring", desc: "Your health data tracked over time — not a snapshot, but a continuous narrative that reveals trends, trajectories, and inflection points." },
                { title: "Multidisciplinary Review", desc: "Every member's data reviewed by a coordinated team of specialists, not a single generalist. Integrated care, not siloed opinions." },
              ].map((pillar) => (
                <div key={pillar.title} className="p-6 rounded-xl border border-[#B8860B]/20 bg-[#B8860B]/[0.03]">
                  <h3 className="font-display text-lg font-medium text-[#B8860B] mb-3">{pillar.title}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Diagnostic Categories */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: "IMAGING",
                  items: ["Whole-Body MRI with AI Analysis", "Coronary CT Angiography (CCTA)", "Low-Dose Lung CT with AI", "Brain MRI with Volumetric Analysis", "Carotid Intima-Media Thickness", "Retinal Scan with AI"]
                },
                {
                  category: "LABORATORY",
                  items: ["100+ / 150+ Biomarker Panel", "Advanced Lipid Fractionation with ApoB", "Hormonal & Thyroid Panel", "Inflammatory Markers (hs-CRP, MPO)", "Heavy Metals & Toxicology"]
                },
                {
                  category: "GENOMICS & ADVANCED",
                  items: ["Whole Genome Sequencing (30×)", "Epigenetic Age Testing (DunedinPACE, GrimAge)", "Multi-Cancer Early Detection (liquid biopsy)", "Pharmacogenomics", "CHIP Analysis"]
                },
              ].map((cat) => (
                <div key={cat.category} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="font-mono text-[9px] tracking-[0.2em] text-[#B8860B]/70 uppercase mb-5">{cat.category}</h3>
                  <div className="space-y-3">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-[#B8860B]/40 mt-2 flex-shrink-0" />
                        <span className="font-body text-sm text-white/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 09: THERAPEUTICS ===== */}
      <section id="therapeutics" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080c10] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">09 / THERAPEUTICS</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-12">
              Exclusive Access to<br />
              <span className="text-[#B8860B] italic">Longevity Therapeutics.</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Exclusive */}
              <div className="p-8 rounded-2xl border border-[#B8860B]/20 bg-[#B8860B]/[0.03]">
                <h3 className="font-mono text-[9px] tracking-[0.2em] text-[#B8860B] uppercase mb-6">Exclusive Therapeutics</h3>
                <div className="space-y-5">
                  {[
                    { name: "Stem Cell Therapy", desc: "Autologous and allogeneic stem cell protocols for tissue regeneration, joint repair, and systemic rejuvenation." },
                    { name: "Therapeutic Plasma Exchange (TPE)", desc: "Blood plasma filtration to remove inflammatory proteins, autoantibodies, and senescent factors." },
                    { name: "Orthobiologics", desc: "PRP, exosomes, and growth factor protocols for musculoskeletal optimization and injury recovery." },
                  ].map((item) => (
                    <div key={item.name}>
                      <h4 className="font-display text-base font-medium text-white/90 mb-1">{item.name}</h4>
                      <p className="font-body text-xs text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Precision */}
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase mb-6">Precision Protocols</h3>
                <div className="space-y-5">
                  {[
                    { name: "Hormone Optimization", desc: "Bioidentical hormone replacement guided by comprehensive panels. Testosterone, estrogen, thyroid, DHEA, cortisol." },
                    { name: "GLP-1 / Metabolic Optimization", desc: "Precision metabolic protocols including GLP-1 agonists for insulin resistance, weight management, and metabolic restoration." },
                    { name: "Epigenetic Deceleration", desc: "Protocols designed to slow biological aging at the epigenetic level — measured by DunedinPACE and GrimAge clocks." },
                  ].map((item) => (
                    <div key={item.name}>
                      <h4 className="font-display text-base font-medium text-white/90 mb-1">{item.name}</h4>
                      <p className="font-body text-xs text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 10: MEMBERSHIP ===== */}
      <section id="membership" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">10 / MEMBERSHIP</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-12">
              Three Tiers.<br />
              <span className="text-[#B8860B] italic">One Standard of Excellence.</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  tier: "APEX",
                  highlight: true,
                  features: [
                    "Everything in CORE, plus:",
                    "Multi-Cancer Early Detection (liquid biopsy)",
                    "Whole Genome Sequencing (30×)",
                    "Epigenetic Age Testing",
                    "Precision Therapeutics Access",
                    "Continuous Oversight & Monitoring",
                    "24/7 Physician Concierge",
                    "Priority Scheduling",
                  ]
                },
                {
                  tier: "CORE",
                  highlight: false,
                  features: [
                    "Everything in BASE, plus:",
                    "Whole-Body MRI with AI Analysis",
                    "Coronary CT Angiography (CCTA)",
                    "Annual Physician Review",
                    "Zori AI Longitudinal Tracking",
                    "Brain MRI Volumetric Analysis",
                  ]
                },
                {
                  tier: "BASE",
                  highlight: false,
                  features: [
                    "100+ Biomarker Panel",
                    "Zori AI Review & Insights",
                    "Mobile App Access",
                    "DEXA Body Composition",
                    "Annual Health Summary",
                    "Digital Health Record",
                  ]
                },
              ].map((t) => (
                <div key={t.tier} className={`p-8 rounded-2xl border ${
                  t.highlight
                    ? "border-[#B8860B]/40 bg-[#B8860B]/[0.05]"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className={`font-mono text-sm tracking-[0.15em] ${t.highlight ? "text-[#B8860B]" : "text-white/60"}`}>{t.tier}</h3>
                    {t.highlight && (
                      <span className="font-mono text-[8px] tracking-wider text-[#B8860B]/60 bg-[#B8860B]/10 px-2 py-0.5 rounded">RECOMMENDED</span>
                    )}
                  </div>
                  <div className="space-y-3">
                    {t.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {i === 0 && f.startsWith("Everything") ? (
                          <span className="font-body text-xs text-[#B8860B]/60 italic">{f}</span>
                        ) : (
                          <>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B]/40 mt-1.5 flex-shrink-0" />
                            <span className="font-body text-sm text-white/60">{f}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 11: COMPETITIVE LANDSCAPE ===== */}
      <section id="landscape" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080c10] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">11 / COMPETITIVE LANDSCAPE</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-12">
              Nothing Else<br />
              <span className="text-[#B8860B] italic">Comes Close.</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase py-4 pr-4 w-1/3">Capability</th>
                    <th className="text-center font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase py-4 px-3">Annual Physical</th>
                    <th className="text-center font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase py-4 px-3">Mayo Clinic</th>
                    <th className="text-center font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase py-4 px-3">Princeton Longevity</th>
                    <th className="text-center font-mono text-[9px] tracking-[0.15em] text-[#B8860B] uppercase py-4 px-3">FL APEX</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Whole-Body MRI",
                    "Coronary CT Angiography",
                    "AI-Powered Analysis (15B+ pts)",
                    "Whole Genome Sequencing",
                    "Multi-Cancer Early Detection",
                    "Epigenetic Age Testing",
                    "Longitudinal AI Tracking",
                    "Precision Therapeutics",
                    "Stem Cell Access",
                    "GLP-1 Protocols",
                    "24/7 Physician Concierge",
                    "Continuous Monitoring",
                    "Brain Volumetric Analysis",
                    "Pharmacogenomics",
                    "CHIP Analysis",
                  ].map((cap, i) => (
                    <tr key={cap} className="border-b border-white/[0.04]">
                      <td className="font-body text-sm text-white/60 py-3 pr-4">{cap}</td>
                      <td className="text-center py-3"><X className="w-3.5 h-3.5 text-white/15 mx-auto" /></td>
                      <td className="text-center py-3">{i < 2 || i === 12 ? <Check className="w-3.5 h-3.5 text-white/30 mx-auto" /> : <X className="w-3.5 h-3.5 text-white/15 mx-auto" />}</td>
                      <td className="text-center py-3">{i < 3 || i === 12 ? <Check className="w-3.5 h-3.5 text-white/30 mx-auto" /> : <X className="w-3.5 h-3.5 text-white/15 mx-auto" />}</td>
                      <td className="text-center py-3"><Check className="w-3.5 h-3.5 text-[#B8860B] mx-auto" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 12: IMPLEMENTATION ===== */}
      <section id="implementation" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">12 / IMPLEMENTATION</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-12">
              Seamless Integration.<br />
              <span className="text-[#B8860B] italic">Zero Disruption.</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Program Design", desc: "Tailored tier selection, enrollment criteria, and budget alignment with your Total Rewards framework." },
                { step: "02", title: "Executive Enrollment", desc: "White-glove onboarding. Concierge scheduling. Zero friction for your leadership team." },
                { step: "03", title: "Diagnostic Protocol", desc: "Full diagnostic battery completed in a single visit. Results within 10 business days." },
                { step: "04", title: "Physician Briefing", desc: "Comprehensive findings review with dedicated physician. Actionable protocol delivered." },
                { step: "05", title: "Ongoing Management", desc: "Continuous monitoring, annual re-assessment, and protocol optimization. Year after year." },
              ].map((item) => (
                <div key={item.step} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-[#B8860B]/60 mb-3">{item.step}</div>
                  <h3 className="font-display text-base font-medium text-white/90 mb-3">{item.title}</h3>
                  <p className="font-body text-xs text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 13: INVESTMENT CONVICTION ===== */}
      <section id="conviction" className="min-h-screen flex items-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080c10] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">13 / INVESTMENT CONVICTION</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-12">
              The Return on<br />
              <span className="text-[#B8860B] italic">Optimized Leadership.</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { value: "46%", label: "Brain aging reversed" },
                { value: "62.7%", label: "Nutrient deficiencies resolved" },
                { value: "51%", label: "Prediabetes reversed in 1.2 yrs" },
                { value: "55%", label: "White matter lesions reduced" },
                { value: "52%", label: "Liver fat normalized" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl border border-[#B8860B]/20 bg-[#B8860B]/[0.03] text-center">
                  <div className="font-display text-3xl md:text-4xl font-light text-[#B8860B] mb-3">{stat.value}</div>
                  <div className="font-body text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <p className="font-body text-[15px] text-white/55 leading-[1.8] max-w-3xl">
                The cost of losing a C-suite executive — recruitment, transition, lost momentum, institutional knowledge — is estimated at 3-5× annual compensation. For a $500K executive, that's $1.5M-$2.5M in organizational cost. The APEX program costs less than 1% of that figure — and delivers measurable biological optimization that extends tenure, sharpens performance, and prevents catastrophic health events.
              </p>
              <p className="font-body text-[15px] text-white/55 leading-[1.8] max-w-3xl mt-4">
                This is not a wellness perk. It is risk mitigation, performance optimization, and leadership continuity — delivered through the most advanced health platform in the world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 14: GET STARTED ===== */}
      <section id="cta" className="min-h-screen flex items-center justify-center relative px-8 md:px-16 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="relative z-10 text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">14 / GET STARTED</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light leading-[1.05] mb-6">
              Your Leadership Team<br />
              Deserves the Best.<br />
              <span className="text-[#B8860B] italic">So Does Your Organization.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="font-body text-[15px] text-white/50 leading-[1.8] mb-12">
              Schedule a confidential briefing to discuss program design, tier selection, and implementation timeline for your executive team.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a
                href="mailto:shawn@wellestategroup.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#B8860B] text-[#B8860B] font-mono text-xs tracking-[0.15em] uppercase hover:bg-[#B8860B] hover:text-black transition-all duration-300"
              >
                Schedule a Briefing
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Bottom Stats */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-12 mt-16 pt-12 border-t border-white/[0.06]">
              {[
                { value: "46%", label: "Brain Aging Reversed" },
                { value: "62.7%", label: "Deficiencies Resolved" },
                { value: "51%", label: "Prediabetes Reversed" },
                { value: "15B+", label: "Clinical Data Points" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-xl text-[#B8860B] font-light">{stat.value}</div>
                  <div className="font-mono text-[8px] tracking-[0.15em] text-white/30 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.15em] text-white/20 uppercase">Well Estate Group · 2026</span>
          <span className="font-mono text-[9px] tracking-[0.15em] text-white/20 uppercase">Confidential</span>
        </div>
      </footer>
    </div>
  );
}
