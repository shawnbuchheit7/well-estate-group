/**
 * Landing Page - Well Estate Group
 * Public front-end — no password required
 * Communicates: Who WEG is, what we do, what makes us different
 * Design: Ultra-premium, black/white/grey with subtle gold accents
 * Outpositions competitors through depth, authority, and operational credibility
 */
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* ─── Animation Helpers ─── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─── */
const verticals = [
  { num: "01", title: "Hospitality & Resorts", desc: "Wellness programming, spa strategy, and revenue optimization for luxury hotel groups worldwide" },
  { num: "02", title: "Cruise Lines", desc: "End-to-end wellness operations across 144+ vessel networks — from concept to daily execution" },
  { num: "03", title: "Luxury Real Estate", desc: "Amenity strategy and wellness integration for premium residential and mixed-use developments" },
  { num: "04", title: "Private Clubs", desc: "Member wellness programs, facility design, and operational excellence for Platinum Clubs of America" },
  { num: "05", title: "Professional Sports", desc: "Performance wellness, recovery protocols, and athlete optimization for NFL, MLB, NCAA, and PGA partnerships" },
  { num: "06", title: "Corporate Wellness", desc: "Enterprise health programs that drive retention, reduce costs, and elevate organizational performance" },
  { num: "07", title: "Longevity & Regenerative Medicine", desc: "Physician-led center development, clinical protocols, and business planning for the longevity economy" },
  { num: "08", title: "Fitness & Wellness Brands", desc: "Go-to-market strategy, product positioning, and commercial acceleration for emerging wellness companies" },
];

const services = [
  { title: "Go-To-Market Strategy", desc: "Strategic market entry, sales infrastructure, and commercial acceleration for wellness and fitness brands entering new markets or scaling existing operations.", href: "/gtm" },
  { title: "Longevity Center Development", desc: "Full business planning, unit economics, clinical protocol design, and operational strategy for physician-led regenerative medicine centers.", href: "/longevity" },
  { title: "Product Intelligence", desc: "Independent clinical evaluation, competitive analysis, and development advisory for next-generation wellness and longevity products.", href: "/product-intelligence" },
  { title: "Venture & Product Capital", desc: "Strategic investment and advisory for emerging fitness and wellness products poised to disrupt the consumer health market.", href: "/venture-capital" },
];

const stats = [
  { value: "15+", label: "Years Leading Global Wellness" },
  { value: "8", label: "Macro Verticals" },
  { value: "144+", label: "Vessel Network" },
  { value: "4", label: "Global Regions" },
];

const associations = [
  "Technogym", "Platinum Clubs of America", "CMAA", "PGA", "NFL", "MLB",
  "NCAA", "Troon", "One Spa World", "GSA", "NACAD",
];

/* ─── Component ─── */
export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] overflow-x-hidden">

      {/* ═══ NAVIGATION ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-[#B8860B] flex items-center justify-center">
              <span className="font-display text-sm font-bold text-[#B8860B]">W</span>
            </div>
            <span className="font-display text-base font-semibold tracking-tight">WELL ESTATE GROUP</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-body text-xs uppercase tracking-[0.15em] text-black/60 hover:text-black transition-colors">About</a>
            <a href="#verticals" className="font-body text-xs uppercase tracking-[0.15em] text-black/60 hover:text-black transition-colors">Verticals</a>
            <a href="#services" className="font-body text-xs uppercase tracking-[0.15em] text-black/60 hover:text-black transition-colors">Services</a>
            <a href="#contact" className="font-body text-xs uppercase tracking-[0.15em] bg-black text-white px-5 py-2 rounded-full hover:bg-black/85 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-16 relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#B8860B] mb-6"
          >
            Premium Wellness Consulting
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Where Wellness Meets<br />
            <span className="text-black/80">World-Class Execution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-base md:text-lg text-black/60 max-w-2xl mx-auto mt-8 leading-relaxed"
          >
            The only consulting firm in wellness led by a former global executive who has actually 
            built and operated wellness programs for the world's most prestigious brands — from 
            five-star resorts to professional sports franchises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a href="#services" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-body text-sm font-medium hover:bg-black/85 transition-all">
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border border-black/20 text-black px-8 py-3.5 rounded-full font-body text-sm font-medium hover:border-black/40 transition-all">
              Our Story
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 rounded-full border border-black/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 bg-black/30 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ ABOUT / POSITIONING ═══ */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B8860B] mb-4">Who We Are</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <FadeIn delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                Built on Decades of<br />Operational Leadership
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-5">
                <p className="font-body text-base text-black/70 leading-relaxed">
                  Well Estate Group was founded by a former global executive at <strong className="text-black">Technogym</strong> — 
                  the world leader in premium fitness and wellness solutions — where he led the design, 
                  implementation, and operation of wellness programs for the world's most demanding brands 
                  in hospitality, cruise, real estate, private clubs, and professional sports.
                </p>
                <p className="font-body text-base text-black/70 leading-relaxed">
                  Unlike firms that only advise, WEG brings <strong className="text-black">direct operational experience</strong> at 
                  the highest level. We've stood on the bridge of cruise ships, walked the floors of 
                  Platinum Clubs, and built wellness centers from architectural concept through daily operations. 
                  That's the difference between theory and execution.
                </p>
                <p className="font-body text-base text-black/70 leading-relaxed">
                  Today, WEG delivers institutional-grade consulting, business planning, and go-to-market 
                  strategy for companies ready to scale in the $5.6 trillion global wellness economy.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Stats */}
          <FadeIn delay={0.3} className="mt-16 md:mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-2xl border border-black/8 bg-white">
                  <p className="font-display text-3xl md:text-4xl font-semibold text-black">{stat.value}</p>
                  <p className="font-body text-xs text-black/50 mt-2 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Associations */}
          <FadeIn delay={0.4} className="mt-14">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40 text-center mb-6">
              Partnerships & Associations
            </p>
            <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3">
              {associations.map((name) => (
                <span key={name} className="font-display text-sm font-semibold text-black/50 hover:text-[#B8860B] transition-colors duration-300 whitespace-nowrap">
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ VERTICALS ═══ */}
      <section id="verticals" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B8860B] mb-4">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Eight Verticals. One Standard.
            </h2>
            <p className="font-body text-base text-black/60 max-w-2xl mb-14">
              We operate across every major segment of the global wellness industry — bringing 
              the same operational rigor and premium execution to each.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-px bg-black/8 rounded-2xl overflow-hidden border border-black/8">
            {verticals.map((v, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white p-8 md:p-10 h-full hover:bg-[#FAFAFA] transition-colors duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#B8860B] tracking-wider">{v.num}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm text-black/55 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIFFERENTIATOR ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B8860B] mb-6">The Difference</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-8">
              Others Consult.<br />We Build.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8 mt-14">
              <div className="text-center p-8">
                <div className="w-12 h-12 rounded-full border border-[#B8860B]/40 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-lg text-[#B8860B]">1</span>
                </div>
                <h4 className="font-display text-base font-semibold mb-3 text-white">Operational Authority</h4>
                <p className="font-body text-sm text-white/55 leading-relaxed">
                  Led by a former Technogym global executive who managed wellness operations across 
                  hospitality, cruise, sports, and private clubs — not theorists, operators.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-12 h-12 rounded-full border border-[#B8860B]/40 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-lg text-[#B8860B]">2</span>
                </div>
                <h4 className="font-display text-base font-semibold mb-3 text-white">Global Scale</h4>
                <p className="font-body text-sm text-white/55 leading-relaxed">
                  From 144+ cruise vessels to Platinum Clubs of America to NFL training facilities — 
                  we've implemented at a scale no other wellness consultancy can match.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-12 h-12 rounded-full border border-[#B8860B]/40 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-lg text-[#B8860B]">3</span>
                </div>
                <h4 className="font-display text-base font-semibold mb-3 text-white">End-to-End Delivery</h4>
                <p className="font-body text-sm text-white/55 leading-relaxed">
                  Strategy through operations. Concept through daily execution. We don't hand off a 
                  deck and walk away — we build it, staff it, and run it.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B8860B] mb-4">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14">
              Four Pillars of Execution
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={s.href}>
                  <div className="group p-8 md:p-10 rounded-2xl border border-black/8 hover:border-[#B8860B]/30 bg-white hover:bg-[#FAFAFA] transition-all duration-300 cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-[#B8860B] transition-colors">
                          {s.title}
                        </h3>
                        <p className="font-body text-sm text-black/55 leading-relaxed max-w-2xl">
                          {s.desc}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full border border-black/10 group-hover:border-[#B8860B]/40 flex items-center justify-center transition-all group-hover:bg-[#B8860B]/5">
                          <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#B8860B] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">
              Ready to Elevate?
            </h2>
            <p className="font-body text-base text-black/60 max-w-xl mx-auto mb-10">
              Whether you're launching a longevity center, scaling a wellness brand, or transforming 
              your hospitality wellness offering — we bring the experience to make it exceptional.
            </p>
            <a href="mailto:shawn@wellestategroup.com" className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full font-body text-sm font-medium hover:bg-black/85 transition-all">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer id="contact" className="py-16 px-6 md:px-12 border-t border-black/8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#B8860B] flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-[#B8860B]">W</span>
                </div>
                <span className="font-display text-sm font-semibold">WELL ESTATE GROUP</span>
              </div>
              <p className="font-body text-xs text-black/50 leading-relaxed">
                Premium consulting for the global wellness economy.<br />
                Strategy. Implementation. Operations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40 mb-4">Explore</p>
              <div className="space-y-2">
                <Link href="/gtm" className="block font-body text-sm text-black/60 hover:text-black transition-colors">Go-To-Market Strategy</Link>
                <Link href="/longevity" className="block font-body text-sm text-black/60 hover:text-black transition-colors">Longevity Ventures</Link>
                <Link href="/product-intelligence" className="block font-body text-sm text-black/60 hover:text-black transition-colors">Product Intelligence</Link>
                <Link href="/venture-capital" className="block font-body text-sm text-black/60 hover:text-black transition-colors">Venture Capital</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40 mb-4">Contact</p>
              <div className="space-y-2">
                <a href="mailto:shawn@wellestategroup.com" className="block font-body text-sm text-black/60 hover:text-black transition-colors">
                  shawn@wellestategroup.com
                </a>
                <p className="font-body text-sm text-black/60">Houston, TX</p>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-[11px] text-black/35">
              &copy; 2026 Well Estate Group. All rights reserved.
            </p>
            <p className="font-body text-[11px] text-black/35">
              Private & Confidential
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
