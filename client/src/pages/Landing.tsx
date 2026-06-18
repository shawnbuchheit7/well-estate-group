/**
 * Landing Page - Well Estate Group
 * Public front-end — no password required
 * Design: Clean, luxury, AI-inspired aesthetic with black/grey/white palette + gold accents
 * Audience: Investors, Developers, Operators
 * Tone: Commanding operator, not consulting brochure
 */

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const drawingVideoRef = useRef<HTMLVideoElement>(null);
  const [drawingStarted, setDrawingStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Play drawing video only when scrolled into view
  useEffect(() => {
    const video = drawingVideoRef.current;
    if (!video || drawingStarted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !drawingStarted) {
          setDrawingStarted(true);
          video.play();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [drawingStarted]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0A0A0A] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        style={{ 
          backgroundColor: 'rgba(255,255,255,0.98)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)' 
        }}
      >
        <div className="w-full px-6 lg:px-10 xl:px-16 flex items-center justify-between h-18 py-4">
          <a href="/" className="flex items-center gap-3 group">
            <motion.img 
              src="/weg-logo-mark-gold-dark.png" 
              alt="Well Estate Group" 
              className="w-10 h-10"
              whileHover={{ rotate: 360, scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <span className="font-display text-lg font-bold tracking-[0.04em] group-hover:text-[#B8860B] transition-colors whitespace-nowrap text-black">
              WELL ESTATE GROUP
            </span>
          </a>
          <div className="hidden md:flex items-center gap-2 font-body text-xs">
            <a href="#proof" className="px-4 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/[0.03] transition-all">Track Record</a>
            <a href="#leadership" className="px-4 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/[0.03] transition-all">Leadership</a>
            <a href="#capabilities" className="px-4 py-2 rounded-full text-black/70 hover:text-black hover:bg-black/[0.03] transition-all">Capabilities</a>
            <a href="#contact" className="ml-2 px-5 py-2.5 rounded-full text-black font-semibold border-2 border-black transition-all"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#000'; }}
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section — Commanding, minimal */}
      <section className="pt-20 pb-4 md:pb-6 bg-[#FAFAF8]">
        <div ref={heroRef} className="mx-2 md:mx-4 lg:mx-8 xl:mx-12 min-h-[calc(100vh-8rem)] flex items-center justify-center relative overflow-hidden rounded-2xl bg-[#f5f4f0]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-contain"
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/AazsyqQemaKsmcfz.mp4"
        />
        {/* Light overlay to fade background for text readability */}
        <div className="absolute inset-0 bg-white/50" />
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-8 text-black tracking-tight"
            style={{ textShadow: 'none' }}
          >
            We Don't Advise.<br />
            <span style={{ color: '#D4AF37' }}>We Build.</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="font-body text-lg md:text-xl text-black/80 leading-relaxed max-w-3xl mx-auto mb-4"
            style={{ textShadow: 'none' }}
          >
            The only wellness consulting firm led by the operator who built Fountain Life from concept to scale, 
            managed 144+ vessel wellness programs at Technogym, and delivered for the world's most demanding brands.
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            className="font-body text-base text-black/60 mb-12"
            style={{ textShadow: 'none' }}
          >
            Longevity Centers &middot; Mixed-Use Developments &middot; Hospitality Wellness &middot; Global Expansion
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="group px-8 py-3 border-2 border-black text-black font-body text-sm tracking-[0.12em] uppercase rounded-full transition-all"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#000'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Start a Conversation
              <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#proof" className="px-10 py-4 font-body text-sm tracking-[0.12em] uppercase text-black/60 hover:text-black transition-all">
              See the Track Record
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-white/70" />
        </motion.div>
        </div>
      </section>

      {/* The Vision — Hero Animation Band */}
      <section className="relative w-full bg-[#FAFAF8] py-4 md:py-6" aria-label="The vision we build">
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-12 rounded-2xl overflow-hidden bg-black">
        <video
          ref={drawingVideoRef}
          className="block w-full h-auto object-contain xl:max-h-[86vh] xl:object-cover"
          muted
          playsInline
          preload="auto"
          poster="/longevity_hero_poster.jpg"
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            if (video.duration && video.currentTime >= video.duration - 2) {
              video.pause();
            }
          }}
        >
          <source src="/longevity_hero_1080p.webm" type="video/webm" />
          <source src="/longevity_hero_1080p.mp4" type="video/mp4" />
          <img src="/longevity_hero_poster.jpg" alt="The longevity and wellness vision Well Estate Group builds" />
        </video>
        </div>

        {/* Text below video */}
        <div className="px-[6%] pt-8 pb-12 md:pb-16 text-center">
          <p className="font-mono text-sm tracking-[0.22em] uppercase mb-4" style={{ color: '#8a7a3a' }}>The Vision We Build</p>
          <h2 className="font-display font-semibold leading-[1.15] text-3xl md:text-5xl" style={{ color: '#0a0a0a' }}>From concept to daily P&amp;L — drawn to life.</h2>
        </div>
      </section>

      {/* Proof Section — Numbers that speak */}
      <section id="proof" className="py-4 md:py-6 bg-[#FAFAF8]">
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-12 rounded-2xl bg-black text-white relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] text-[11px] tracking-[0.3em] uppercase font-medium">
              Operational Track Record
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-semibold mt-4 text-white tracking-tight">
              Built. Operated. Scaled.
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { value: 15, suffix: '+', label: 'Years in Global\nWellness Operations' },
              { value: 144, suffix: '+', label: 'Cruise Vessels\nManaged' },
              { value: 5, suffix: '+', label: 'Longevity Centers\nBuilt & Operated' },
              { value: 4, suffix: '', label: 'Global Regions\nLed' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="text-center py-8 border-l border-white/10 first:border-l-0"
              >
                <p className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-body text-xs md:text-sm text-white/40 leading-relaxed whitespace-pre-line">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Credential strip */}
          <motion.div 
            className="mt-20 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {['Fountain Life', 'Technogym', 'Ritz-Carlton', 'Platinum Clubs of America', 'NFL', 'MLB', 'OneSpaWorld', 'Troon'].map((name) => (
                <span key={name} className="font-body text-[11px] tracking-[0.15em] uppercase text-white/30 hover:text-white/60 transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* About — The Story (with premium building rendering) */}
      <section className="py-4 md:py-6 bg-[#FAFAF8]">
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-12 py-16 md:py-24">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Left — Building image */}
            <motion.div variants={fadeInUp} className="relative">
              <img 
                src="/weg-hero-building.jpg" 
                srcSet="/weg-hero-building.jpg 1365w, /weg-hero-building@2x.jpg 2048w"
                sizes="(max-width: 768px) 100vw, 60vw"
                alt="Well Estate Group — wellness-led mixed-use development concept" 
                className="w-full h-auto no-sharpen rounded-2xl max-h-[90vh] object-contain"
                style={{ imageRendering: 'auto' }}
                loading="lazy"
              />
            </motion.div>

            {/* Right — Text content */}
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-[#B8860B] text-[11px] tracking-[0.3em] uppercase font-medium">The Operator Advantage</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 mb-8 text-black tracking-tight leading-tight">
                Every question you have —<br />we've answered it in the field.
              </h2>
              
              <div className="space-y-5 font-body text-[15px] text-black/65 leading-[1.85]">
                <p>
                  What's the break-even timeline for a longevity center? How do you structure TI contributions with a developer? What staffing ratio sustains 80%+ utilization? How do you convert diagnostic members into downstream revenue?
                </p>
                <p>
                  <strong className="text-black font-medium">We don't research these answers. We've lived them.</strong> As the founding President & COO of Fountain Life, as a Technogym global executive managing four regions, and as the operator who has stood on the bridge of cruise ships, walked the floors of Platinum Clubs, and built wellness centers from architectural concept through daily P&L management.
                </p>
                <p>
                  Our clients — investors, developers, and operators — come to us because we eliminate the gap between strategy and execution. There is no handoff. There is no learning curve.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section — Shawn's headshot + credentials */}
      <section id="leadership" className="py-4 md:py-6 bg-[#FAFAF8]">
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-12 py-16 md:py-24 bg-white rounded-2xl px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="mb-10">
              <span className="font-mono text-[#B8860B] text-[11px] tracking-[0.3em] uppercase font-medium">Leadership</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-black tracking-tight">
                Operator. Builder. Executive.
              </h2>
            </motion.div>

            {/* Photos - Leadership Team */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 md:gap-8 mb-12 max-w-2xl">
              {/* Shawn */}
              <div className="text-center">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/OslPsizQVCRklaLS.jpeg"
                    alt="Shawn Buchheit"
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: '50% 15%' }}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-black mt-4">Shawn Buchheit</h3>
                <p className="font-body text-xs md:text-sm text-black/50 mt-1">Founder & President</p>
              </div>
              {/* Jay Muller */}
              <div className="text-center">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/jay-muller.webp"
                    alt="Jay Muller"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-black mt-4">Jay Muller</h3>
                <p className="font-body text-xs md:text-sm text-black/50 mt-1">Partner</p>
                <p className="font-body text-xs text-black/40 mt-0.5">(Cat Lover & Flower Enthusiast)</p>
              </div>
              {/* Evan Balter */}
              <div className="text-center">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/evan-balter.webp"
                    alt="Evan Balter"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-black mt-4">Evan Balter</h3>
                <p className="font-body text-xs md:text-sm text-black/50 mt-1">Partner</p>
                <p className="font-body text-xs text-black/40 mt-0.5">(Avid Bird Watcher & Nickel Collector)</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeInUp}>
              <div className="space-y-6">
                {/* Career timeline */}
                {[
                  {
                    role: 'President & COO',
                    company: 'Fountain Life',
                    detail: 'Founding team member. Built and scaled a physician-led longevity platform from concept to multi-center operations. Oversaw clinical operations, membership growth (diagnostics, MRI, genomics, AI analytics), technology platform, and the unit economics that drive sustainable scale. Backed by Tony Robbins and Peter Diamandis.',
                  },
                  {
                    role: 'Global Executive',
                    company: 'Technogym',
                    detail: 'Led wellness strategy and implementation across four global regions for the world\'s most prestigious hospitality groups, cruise lines (144+ vessels), luxury real estate developments, private clubs (Platinum Clubs of America), and professional sports organizations (NFL, MLB, NCAA).',
                  },
                  {
                    role: 'Award-Winning Team Member',
                    company: 'The Ritz-Carlton Hotel Company',
                    detail: 'Foundation in world-class service delivery and operational excellence at the highest level of luxury hospitality.',
                  },
                  {
                    role: 'FAA Commercial Pilot',
                    company: '',
                    detail: 'The same precision, discipline, and systems-thinking that aviation demands — applied to wellness operations where execution must be flawless.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#B8860B] mt-2.5 shrink-0" />
                    <div>
                      <p className="font-body text-[15px] text-black font-medium">
                        {item.role}{item.company && <span className="text-[#B8860B]"> — {item.company}</span>}
                      </p>
                      <p className="font-body text-[14px] text-black/55 leading-relaxed mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities — What we actually do */}
      <section id="capabilities" className="py-4 md:py-6 bg-[#FAFAF8]">
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-12 py-16 md:py-24">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] text-[11px] tracking-[0.3em] uppercase font-medium">
              Capabilities
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-semibold mt-4 mb-4 text-black tracking-tight">
              Full-Spectrum Execution
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto leading-relaxed">
              From first investor conversation to daily operations — we cover the entire value chain because we've operated at every level.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                num: '01',
                title: 'Longevity Center Development',
                items: ['Revenue model & break-even analysis', 'Membership tier architecture', 'Clinical protocol & staffing design', 'Market entry & international expansion', 'JV, licensing & franchise structuring'],
                audience: 'For Investors & Operators',
                href: '/longevity',
                bgImage: '/card-bg-longevity.jpg',
              },
              {
                num: '02',
                title: 'Product & Brand Strategy',
                items: ['Consumer & commercial product positioning', 'Go-to-market strategy & execution', 'Channel strategy & distribution', 'Brand partnership development', 'Product lifecycle & innovation roadmap'],
                audience: 'For Product Companies & Brands',
                href: '/product-intelligence',
                bgImage: '/card-bg-product.jpg',
              },
              {
                num: '03',
                title: 'Venture & Capital Advisory',
                items: ['Fundraising strategy & investor materials', 'PE & institutional deal structuring', 'Financial modeling & valuation', 'Due diligence preparation', 'Exit planning & strategic positioning'],
                audience: 'For Founders & Investors',
                href: '/venture-capital',
                bgImage: '/card-bg-venture.jpg',
              },
              {
                num: '04',
                title: 'Technology & AI',
                items: ['AI-powered diagnostics & analytics', 'Platform architecture & integration', 'Biomarker data intelligence', 'Predictive health modeling', 'Digital twin & member experience'],
                audience: 'For Operators & Investors',
                href: '/technology',
                bgImage: '/card-bg-technology.jpg',
              },
            ].map((service) => (
              <motion.a 
                key={service.num}
                href={service.href}
                variants={fadeInUp}
                className="group relative block rounded-2xl cursor-pointer no-underline transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden min-h-[400px]"
              >
                {/* Background image with zoom on hover */}
                <img 
                  src={service.bgImage} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/40 transition-all duration-500" />
                
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between min-h-[400px]">
                  {/* Top row: number + audience badge */}
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl font-bold text-white/20">{service.num}</span>
                    <span className="inline-block px-3 py-1.5 rounded-full bg-[#B8860B]/90 text-white text-[9px] tracking-[0.12em] uppercase font-semibold backdrop-blur-sm">{service.audience}</span>
                  </div>
                  
                  {/* Bottom content */}
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold mb-5 text-white">{service.title}</h3>
                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                          <span className="font-body text-[14px] text-white/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      <span className="font-body text-[12px] font-semibold uppercase tracking-[0.15em]">Explore</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiator — Sharp, confident */}
      <section className="py-4 md:py-6 bg-[#FAFAF8]">
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-12 py-24 md:py-32 bg-black text-white relative overflow-hidden rounded-2xl px-6 md:px-12">
        <div className="max-w-5xl mx-auto relative">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
              Other firms hand you a deck.<br />
              <span className="text-[#B8860B]">We hand you the keys.</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="mt-12 max-w-3xl mx-auto">
              <p className="font-body text-lg text-white/50 leading-relaxed">
                Strategy without execution is a PowerPoint. We build the center, hire the team, design the protocols, model the economics, and operate it until it performs. That's why investors, developers, and operators choose WEG — because we've already done what they're trying to do.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 grid md:grid-cols-3 gap-8 text-left"
            >
              {[
                { title: 'For Investors', desc: 'De-risk your thesis. We provide operational due diligence, realistic unit economics, and execution capability — not projections from a spreadsheet.' },
                { title: 'For Developers', desc: 'Maximize asset value. We design the wellness component that drives premium pricing, tenant retention, and differentiation in your mixed-use project.' },
                { title: 'For Operators', desc: 'Scale without guessing. We bring the playbook from Fountain Life, Technogym, and Ritz-Carlton — tested at global scale, ready to deploy.' },
              ].map((item, i) => (
                <div key={i} className="border-t border-white/10 pt-6">
                  <h3 className="font-display text-lg font-medium text-white mb-3">{item.title}</h3>
                  <p className="font-body text-[14px] text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-4 md:py-6 bg-[#FAFAF8] relative">
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-12 py-24 md:py-32 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-semibold text-black tracking-tight">
              Let's talk.
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-black/55 max-w-xl mx-auto mt-6 mb-12 leading-relaxed">
              Whether you're evaluating a longevity investment, planning a mixed-use wellness component, or scaling an existing operation — we'll tell you exactly what it takes.
            </motion.p>
            
            <motion.a 
              variants={fadeInUp}
              href="mailto:shawn@wellestategroup.com" 
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-black text-black bg-transparent font-body text-sm tracking-[0.12em] uppercase rounded-full transition-all outline-none"
              style={{ outline: 'none', boxShadow: 'none', borderColor: '#000000' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#000'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              shawn@wellestategroup.com
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer — Minimal */}
      <footer className="py-12 bg-[#FAFAF8]">
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/weg-logo-mark-gold-dark.png" 
                alt="Well Estate Group" 
                className="w-7 h-7"
              />
              <span className="font-display text-sm font-bold tracking-[0.04em]">WELL ESTATE GROUP</span>
            </div>
            
            <div className="flex items-center gap-6 font-body text-xs text-black/40">
              <span>Fort Myers, FL</span>
              <span>&middot;</span>
              <a href="mailto:shawn@wellestategroup.com" className="hover:text-black transition-colors">shawn@wellestategroup.com</a>
              <span>&middot;</span>
              <span>&copy; 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
